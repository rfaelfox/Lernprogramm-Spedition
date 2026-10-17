// Lernstand: Aufgabenstatistik, Karteikarten (verteilte Wiederholung), Themenstatus, Fehlerheft.
import * as store from './store.js';
import * as C from './content.js';
import { todayISO, addDays, daysBetween } from './util.js';

// ---------- Aufgaben ----------
export async function recordTask(task, result, { mode = 'practice', answer = null } = {}) {
  if (result.score == null) return;
  const prev = store.get('taskstats', task.id) || { id: task.id, unit: task.unitId, attempts: 0, history: [] };
  const entry = { at: new Date().toISOString(), score: Math.round(result.score * 100) / 100, mode };
  const history = [...(prev.history || []), entry].slice(-8);
  await store.put('taskstats', { ...prev, unit: task.unitId, attempts: (prev.attempts || 0) + 1, lastScore: entry.score, lastAt: entry.at, history });
  const mid = 'm-' + task.id;
  const existing = store.get('mistakes', mid);
  if (result.score < 0.999) {
    await store.put('mistakes', { id: mid, taskId: task.id, unit: task.unitId, count: (existing?.count || 0) + 1, lastAt: entry.at, lastAnswer: answer, resolved: false });
  } else if (existing && !existing.resolved) {
    await store.put('mistakes', { ...existing, resolved: true, resolvedAt: entry.at });
  }
}

// ---------- Karteikarten (SM-2-ähnlich) ----------
// rating: 0 = nochmal, 1 = schwer, 2 = gut, 3 = leicht
export function cardState(cardId) { return store.get('cards', cardId); }
export async function rateCard(card, unitId, rating) {
  const s = store.get('cards', card.id) || { id: card.id, unit: unitId, ease: 2.5, interval: 0, reps: 0, lapses: 0 };
  let { ease, interval, reps, lapses } = s;
  if (rating === 0) { reps = 0; lapses++; interval = 0; ease = Math.max(1.3, ease - 0.2); }
  else {
    if (reps === 0) interval = rating === 1 ? 1 : rating === 2 ? 1 : 3;
    else if (reps === 1) interval = rating === 1 ? 2 : rating === 2 ? 3 : 6;
    else interval = Math.max(1, Math.round(interval * (rating === 1 ? 1.2 : rating === 2 ? ease : ease * 1.3)));
    ease = Math.max(1.3, ease + (rating === 1 ? -0.15 : rating === 3 ? 0.15 : 0));
    reps++;
  }
  const today = todayISO();
  return store.put('cards', { ...s, unit: unitId, ease, interval, reps, lapses, due: addDays(today, interval), lastAt: new Date().toISOString(), lastRating: rating, reviewDays: Array.from(new Set([...(s.reviewDays || []), today])).slice(-12) });
}
export function dueCards({ unitIds = null, includeNew = 0 } = {}) {
  const today = todayISO();
  const due = [], fresh = [];
  for (const u of C.allUnits()) {
    if (unitIds && !unitIds.includes(u.id)) continue;
    for (const c of u.flashcards || []) {
      const s = store.get('cards', c.id);
      if (!s) { if (isStarted(u.id)) fresh.push({ card: c, unit: u }); }
      else if (s.due <= today) due.push({ card: c, unit: u, state: s });
    }
  }
  due.sort((a, b) => a.state.due.localeCompare(b.state.due));
  return includeNew ? [...due, ...fresh.slice(0, includeNew)] : due;
}
export function isStarted(unitId) {
  const p = store.get('progress', 'u-' + unitId);
  return !!p?.started;
}

// ---------- Lerneinheiten ----------
export async function markOpened(unit) {
  const id = 'u-' + unit.id;
  const p = store.get('progress', id) || { id, unit: unit.id };
  await store.put('progress', { ...p, started: true, lastOpened: new Date().toISOString(), opens: (p.opens || 0) + 1 }, { silent: true });
  await addRecent({ kind: 'unit', ref: unit.id, title: unit.title });
}
export async function addRecent(item) {
  const id = item.kind + ':' + item.ref;
  await store.put('recent', { ...item, id, at: new Date().toISOString() }, { silent: true });
  const list = store.all('recent').sort((a, b) => b.at.localeCompare(a.at));
  if (list.length > 20) await store.removeMany('recent', list.slice(20).map((x) => x.id));
}

// Beherrschung einer Lerneinheit (0..1). Öffnen allein zählt nicht.
// Berücksichtigt: Anteil bearbeiteter Aufgaben, letzte Ergebnisse, Wiederholung an verschiedenen Tagen,
// Karteikarten-Intervalle und Vergessen über die Zeit.
export function unitMastery(unit) {
  const tasks = unit.tasks || [];
  const stats = tasks.map((t) => store.get('taskstats', t.id)).filter(Boolean);
  const cards = (unit.flashcards || []).map((c) => store.get('cards', c.id)).filter(Boolean);
  if (!stats.length && !cards.length) return { value: 0, level: 'offen', reason: 'Noch keine Aufgaben oder Karteikarten bearbeitet.' };
  const coverage = tasks.length ? stats.length / tasks.length : 1;
  const avg = stats.length ? stats.reduce((s, x) => s + (x.lastScore || 0), 0) / stats.length : 0;
  const days = new Set();
  stats.forEach((s) => (s.history || []).forEach((h) => days.add(h.at.slice(0, 10))));
  cards.forEach((c) => (c.reviewDays || []).forEach((d) => days.add(d)));
  const cardStrength = unit.flashcards?.length ? cards.reduce((s, c) => s + Math.min(1, (c.interval || 0) / 14), 0) / unit.flashcards.length : 0;
  const last = [...stats.map((s) => s.lastAt), ...cards.map((c) => c.lastAt)].filter(Boolean).sort().pop();
  const idle = last ? daysBetween(last.slice(0, 10), todayISO()) : 999;
  const decay = idle > 14 ? Math.max(0.6, 1 - (idle - 14) / 90) : 1;
  let value = (0.65 * avg * Math.min(1, coverage / 0.8) + 0.35 * cardStrength) * decay;
  const spaced = days.size >= 2;
  if (!spaced) value = Math.min(value, 0.6);
  value = Math.max(0, Math.min(1, value));
  let level = 'in Arbeit', reason = '';
  if (value >= 0.8 && spaced) { level = 'sicher'; reason = 'Gute Ergebnisse an mindestens zwei verschiedenen Tagen.'; }
  else if ((avg < 0.6 && stats.length >= 2) || decay < 1) { level = 'wiederholen'; reason = decay < 1 ? `Seit ${idle} Tagen nicht mehr geübt.` : 'Ergebnisse unter 60 %.'; }
  else reason = spaced ? 'Weiter üben, um „sicher“ zu erreichen.' : 'Für „sicher“ an einem weiteren Tag wiederholen.';
  return { value, level, reason, avg, coverage, days: days.size, idle };
}

export const topicStatusLabels = ['offen', 'in Arbeit', 'wiederholen', 'sicher'];
// Themenstatus: eigene Einstellung hat Vorrang, sonst Vorschlag aus den Ergebnissen.
export function topicStatus(topicId) {
  const manual = store.get('progress', 't-' + topicId)?.status || null;
  const units = C.unitsOfTopic(topicId);
  const ms = units.map(unitMastery);
  const value = ms.length ? ms.reduce((s, m) => s + m.value, 0) / ms.length : 0;
  let suggested = 'offen';
  if (ms.some((m) => m.level !== 'offen')) {
    if (ms.every((m) => m.level === 'sicher')) suggested = 'sicher';
    else if (ms.some((m) => m.level === 'wiederholen')) suggested = 'wiederholen';
    else suggested = 'in Arbeit';
  }
  return { status: manual || suggested, manual, suggested, value };
}
export async function setTopicStatus(topicId, status) {
  const id = 't-' + topicId;
  const p = store.get('progress', id) || { id, topic: topicId };
  await store.put('progress', { ...p, status: status || null });
}

export function areaProgress(areaId) {
  const units = C.unitsOfArea(areaId);
  if (!units.length) return { value: 0, units: 0 };
  return { value: units.reduce((s, u) => s + unitMastery(u).value, 0) / units.length, units: units.length };
}

export function weakTopics(limit = 5) {
  const out = [];
  for (const a of C.areas) for (const tp of a.topics) {
    const units = C.unitsOfTopic(tp.id);
    if (!units.length) continue;
    const ms = units.map(unitMastery);
    if (ms.every((m) => m.level === 'offen')) continue;
    const st = topicStatus(tp.id);
    if (st.status === 'sicher') continue;
    out.push({ topic: tp, area: a, value: st.value, status: st.status });
  }
  return out.sort((a, b) => a.value - b.value).slice(0, limit);
}

// Empfehlung: zuerst angefangene, schwache Einheiten; sonst nächste offene Einheit des aktuellen Lehrjahres.
export function recommendedUnit() {
  const s = store.settings();
  const units = C.allUnits();
  const exam = upcomingExams()[0];
  if (exam) {
    const ids = examUnitIds(exam);
    const cand = ids.map((id) => C.unitById.get(id)).filter(Boolean).map((u) => ({ u, m: unitMastery(u) })).filter((x) => x.m.level !== 'sicher').sort((a, b) => a.m.value - b.m.value);
    if (cand.length) return { unit: cand[0].u, why: `Für „${exam.title}“ am ${new Date(exam.date + 'T12:00').toLocaleDateString('de-DE')}` };
  }
  const started = units.map((u) => ({ u, m: unitMastery(u) })).filter((x) => x.m.level === 'wiederholen' || x.m.level === 'in Arbeit').sort((a, b) => a.m.value - b.m.value);
  if (started.length) return { unit: started[0].u, why: started[0].m.reason };
  const yearAreas = C.areas.filter((a) => a.year === s.trainingYear || a.year === 0).map((a) => a.id);
  const fresh = units.filter((u) => unitMastery(u).level === 'offen').sort((a, b) => (yearAreas.includes(b.area) ? 1 : 0) - (yearAreas.includes(a.area) ? 1 : 0));
  if (fresh.length) return { unit: fresh[0], why: 'Noch nicht begonnen.' };
  return null;
}

export function upcomingExams() {
  const today = todayISO();
  return store.all('exams').filter((e) => e.date >= today && !e.done).sort((a, b) => a.date.localeCompare(b.date));
}
export function examUnitIds(exam) {
  const ids = new Set(exam.units || []);
  if ((exam.topics || []).length) for (const tid of exam.topics) C.unitsOfTopic(tid).forEach((u) => ids.add(u.id));
  else for (const aid of exam.areas || []) C.unitsOfArea(aid).forEach((u) => ids.add(u.id));
  return Array.from(ids);
}

// ---------- Lernzeit und Motivation ----------
export async function logMinutes(minutes, kind = 'lernen') {
  if (!minutes || minutes < 0.2) return;
  const day = todayISO();
  const id = 'd-' + day;
  const p = store.get('planlog', id) || { id, day, minutes: 0, kinds: {} };
  const kinds = { ...p.kinds, [kind]: (p.kinds?.[kind] || 0) + minutes };
  await store.put('planlog', { ...p, minutes: Math.round((p.minutes + minutes) * 10) / 10, kinds }, { silent: true });
}
export function minutesOn(day) { return store.get('planlog', 'd-' + day)?.minutes || 0; }
export function weekMinutes() {
  const today = todayISO();
  const d = new Date(today + 'T12:00'); const dow = (d.getDay() + 6) % 7;
  let sum = 0; for (let i = 0; i <= dow; i++) sum += minutesOn(addDays(today, -i));
  return sum;
}
export function streak() {
  let n = 0; let day = todayISO();
  if (minutesOn(day) < 1) day = addDays(day, -1);
  while (minutesOn(day) >= 1) { n++; day = addDays(day, -1); }
  return n;
}

// Übungsergebnisse eines Bereichs zurücksetzen (Noten und Materialien bleiben unberührt).
export async function resetPractice({ unitIds }) {
  const set = new Set(unitIds);
  const ts = store.all('taskstats').filter((x) => set.has(x.unit)).map((x) => x.id);
  const cs = store.all('cards').filter((x) => set.has(x.unit)).map((x) => x.id);
  const ms = store.all('mistakes').filter((x) => set.has(x.unit)).map((x) => x.id);
  await store.removeMany('taskstats', ts);
  await store.removeMany('cards', cs);
  await store.removeMany('mistakes', ms);
  return { tasks: ts.length, cards: cs.length, mistakes: ms.length };
}
