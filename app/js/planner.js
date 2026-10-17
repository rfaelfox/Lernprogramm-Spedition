// Lernplan: wird bei jedem Aufruf aus dem aktuellen Lernstand neu berechnet.
// Dadurch passt er sich automatisch an verpasste Tage und neue Ergebnisse an.
import * as store from './store.js';
import * as C from './content.js';
import * as L from './learning.js';
import { todayISO, addDays, daysBetween } from './util.js';

const studyDay = (iso, days) => days.includes(((new Date(iso + 'T12:00').getDay() + 6) % 7) + 1);

export function buildPlan({ horizon = 21 } = {}) {
  const s = store.settings();
  const minutes = Number(s.dailyMinutes) || 15;
  const days = s.studyDays?.length ? s.studyDays : [1, 2, 3, 4, 5, 6, 7];
  const today = todayISO();
  const exams = L.upcomingExams();
  const work = []; // { exam, deadline, unit, kind, minutes, label }
  for (const e of exams) {
    const deadline = addDays(e.date, -1); // Tag vor dem Termin: Puffer/Generalprobe
    for (const id of L.examUnitIds(e)) {
      const u = C.unitById.get(id); if (!u) continue;
      const m = L.unitMastery(u);
      if (m.level === 'sicher') continue;
      if (work.some((w) => w.unit.id === id && w.kind !== 'review')) continue;
      if (m.level === 'offen') {
        work.push({ exam: e, deadline, unit: u, kind: 'learn', minutes: u.minutes || 20, label: `Lernen: ${u.title}` });
        work.push({ exam: e, deadline, unit: u, kind: 'practice', minutes: 10, label: `Üben: ${u.title}`, after: 1 });
      } else {
        work.push({ exam: e, deadline, unit: u, kind: 'practice', minutes: 10, label: `Wiederholen und üben: ${u.title}` });
      }
      work.push({ exam: e, deadline, unit: u, kind: 'review', minutes: 5, label: `Kurztest: ${u.title}`, after: 2 });
    }
  }
  work.sort((a, b) => a.deadline.localeCompare(b.deadline));
  const plan = [];
  const placedDay = new Map(); // unitId -> zuletzt verplanter Tag (für Abstände)
  const lastDay = addDays(today, horizon);
  let warnings = [];
  for (let d = today; d <= lastDay; d = addDays(d, 1)) plan.push({ day: d, items: [], capacity: studyDay(d, days) ? minutes : 0, used: 0 });
  // Buffer-Tage: Tag vor Termin = Generalprobe im Testmodus
  for (const e of exams) {
    const b = plan.find((p) => p.day === addDays(e.date, -1));
    if (b && b.day >= today) b.items.push({ kind: 'buffer', label: `Generalprobe (Testmodus) für „${e.title}“`, minutes: Math.min(minutes, 20), exam: e, href: `#/ueben?exam=${e.id}&mode=test` });
  }
  const dueCount = L.dueCards().length;
  if (dueCount && plan[0].capacity) { const m = Math.min(minutes / 2, Math.ceil(dueCount * 0.5)); plan[0].items.push({ kind: 'cards', label: `${dueCount} fällige Karteikarten`, minutes: m, href: '#/karten' }); plan[0].used += m; }
  const unplaced = [];
  for (const w of work) {
    const minDay = placedDay.has(w.unit.id) ? addDays(placedDay.get(w.unit.id), w.after || 1) : today;
    const slot = plan.find((p) => p.day >= minDay && p.day <= w.deadline && p.capacity - p.used >= Math.min(w.minutes, p.capacity) && p.capacity > 0 && !p.items.some((i) => i.kind === 'buffer'));
    if (!slot) { unplaced.push(w); continue; }
    slot.items.push({ ...w, href: w.kind === 'learn' ? `#/lernen/einheit/${w.unit.id}` : w.kind === 'review' ? `#/ueben?unit=${w.unit.id}&mode=test&n=5` : `#/ueben?unit=${w.unit.id}` });
    slot.used += w.minutes;
    placedDay.set(w.unit.id, slot.day);
  }
  if (unplaced.length) {
    const need = unplaced.reduce((s2, w) => s2 + w.minutes, 0);
    const first = unplaced[0];
    const avail = Math.max(1, daysBetween(today, first.deadline) + 1);
    warnings.push(`Bis „${first.exam.title}“ reicht die eingestellte Lernzeit nicht: Es fehlen etwa ${need} Minuten. Empfehlung: ${Math.ceil((need + minutes * avail) / avail)} Minuten pro Tag oder Themen priorisieren.`);
  }
  // Einheiten ohne Lernplan-Bezug: freie Kapazität für Wiederholung schwacher Themen
  const weak = L.weakTopics(3);
  for (const p of plan.slice(0, 7)) {
    if (p.capacity - p.used >= 5 && weak.length && !p.items.some((i) => i.kind === 'buffer')) {
      const w = weak[(plan.indexOf(p)) % weak.length];
      p.items.push({ kind: 'weak', label: `Schwaches Thema wiederholen: ${w.topic.title}`, minutes: Math.min(10, p.capacity - p.used), href: `#/ueben?topic=${w.topic.id}` });
      p.used += Math.min(10, p.capacity - p.used);
    }
  }
  return { plan, warnings, exams, unplaced };
}

export function planForToday() {
  const { plan } = buildPlan({ horizon: 0 });
  return plan[0] || { items: [] };
}
