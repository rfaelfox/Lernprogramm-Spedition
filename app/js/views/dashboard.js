import * as store from '../store.js';
import * as C from '../content.js';
import * as L from '../learning.js';
import { esc, fmtDate, daysBetween, todayISO } from '../util.js';
import { icon, motif, progressBar, ring, statusBadge } from '../ui.js';
import { planForToday } from '../planner.js';

export async function render(el, { app }) {
  app.title('Dashboard');
  const s = store.settings();
  const due = L.dueCards();
  const exams = L.upcomingExams().slice(0, 4);
  const rec = L.recommendedUnit();
  const weak = L.weakTopics(4);
  const recent = store.all('recent').sort((a, b) => b.at.localeCompare(a.at)).slice(0, 5);
  const today = planForToday();
  const week = L.weekMinutes();
  const streak = L.streak();
  const yearAreas = C.areas.filter((a) => a.kind === 'lf' && a.year === s.trainingYear);
  const openMistakes = store.all('mistakes').filter((m) => !m.resolved).length;
  const hasDemo = store.all('grades').some((g) => g.demo) || store.all('exams').some((e) => e.demo);
  const hour = new Date().getHours();
  const greet = hour < 11 ? 'Guten Morgen' : hour < 18 ? 'Hallo' : 'Guten Abend';

  el.innerHTML = `
  ${hasDemo ? `<div class="note warn row between"><span><span class="badge demo">Beispieldaten</span> Es sind Beispieldaten vorhanden.</span><a class="btn small" href="#/einstellungen/daten">Entfernen</a></div>` : ''}
  <section class="card hero">
    ${motif}
    <h1>${greet}${s.name ? ", " + esc(s.name) : ""}!</h1>
    <p class="muted">${esc(s.trainingYear)}. Ausbildungsjahr · ${esc(s.school)} · Schuljahr ${esc(s.schoolYear)}</p>
    <p style="margin:14px 0 8px"><b>Jetzt lernen:</b></p>
    <div class="row">${[5, 10, 15, 30].map((m) => `<a class="btn ${m === s.dailyMinutes ? 'primary' : ''}" href="#/karten/session?min=${m}" style="${m === s.dailyMinutes ? '' : 'background:rgba(255,255,255,.1);color:#fff;border-color:rgba(255,255,255,.25)'}">${icon('clock')} ${m} Min.</a>`).join('')}</div>
    <p class="small muted" style="margin-top:10px">Eine Kurzeinheit mischt fällige Karteikarten und passende Aufgaben aus deinem Lernplan.</p>
  </section>

  <div class="grid" style="margin-top:16px">
    <a class="card link" href="#/karten">
      <div class="row between"><h3>${icon('cards')} Fällige Karteikarten</h3></div>
      <div class="kpi">${due.length}</div>
      <p class="muted small">${due.length ? 'Heute zur Wiederholung fällig' : 'Nichts fällig. Neue Karten kommen mit jeder begonnenen Lerneinheit dazu.'}</p>
    </a>
    <a class="card link" href="#/plan">
      <h3>${icon('plan')} Heute im Lernplan</h3>
      ${today.items.length ? `<ul class="small" style="padding-left:1.1em;margin:0">${today.items.slice(0, 4).map((i) => `<li>${esc(i.label)}</li>`).join('')}</ul>` : '<p class="muted small">Kein Lernplan aktiv. Trage eine Klassenarbeit ein, dann plane ich die Vorbereitung.</p>'}
    </a>
    <div class="card">
      <h3>${icon('clock')} Diese Woche</h3>
      <div class="row nowrap">${ring(Math.min(1, week / Math.max(1, s.weeklyGoalMinutes)), 'Wochenziel')}<div><div class="kpi">${Math.round(week)} / ${s.weeklyGoalMinutes} Min.</div><p class="small muted" style="margin:0">Wochenziel${s.gamification && s.streak && streak > 1 ? ` · ${streak} Tage in Folge` : ''}</p></div></div>
    </div>
  </div>

  <div class="grid two" style="margin-top:16px">
    <section class="card">
      <h2>Empfohlene nächste Lerneinheit</h2>
      ${rec ? `<p><b>${esc(rec.unit.title)}</b><br><span class="small muted">${esc(C.areaFull(C.areaById.get(rec.unit.area)))}</span></p><p class="small">${esc(rec.why)}</p><div class="row"><a class="btn primary" href="#/lernen/einheit/${rec.unit.id}">Lernen</a><a class="btn" href="#/ueben?unit=${rec.unit.id}">Üben</a></div>` : '<p class="muted">Alle vorhandenen Einheiten sind sicher. Stark!</p>'}
    </section>
    <section class="card">
      <h2>Nächste Klassenarbeiten und Prüfungen</h2>
      ${exams.length ? exams.map((e) => `<div class="row between" style="padding:6px 0;border-bottom:1px solid var(--line)"><span><b>${esc(e.title)}</b> ${e.demo ? '<span class="badge demo">Beispiel</span>' : ''}<br><span class="small muted">${fmtDate(e.date)} · ${esc(e.kind || '')}</span></span><span class="badge ${daysBetween(todayISO(), e.date) <= 7 ? 'warn' : ''}">in ${daysBetween(todayISO(), e.date)} Tagen</span></div>`).join('') : '<p class="muted">Keine Termine eingetragen.</p>'}
      <a class="btn small" style="margin-top:10px" href="#/plan">${icon('plus')} Termin eintragen</a>
    </section>
    <section class="card">
      <h2>Schwache Themen</h2>
      ${weak.length ? weak.map((w) => `<a class="row between" style="padding:7px 0;text-decoration:none;color:inherit;border-bottom:1px solid var(--line)" href="#/lernen/bereich/${w.area.id}"><span>${esc(w.topic.title)}<br><span class="small muted">${esc(C.areaLabel(w.area))}</span></span>${statusBadge(w.status)}</a>`).join('') : '<p class="muted">Noch keine Auswertung. Bearbeite Aufgaben, dann erkenne ich deine Schwächen.</p>'}
      ${openMistakes ? `<a class="btn small" style="margin-top:10px" href="#/fehlerheft">${icon('flag')} Fehlerheft (${openMistakes})</a>` : ''}
    </section>
    <section class="card">
      <h2>Zuletzt geöffnet</h2>
      ${recent.length ? recent.map((r) => `<a class="row" style="padding:6px 0;text-decoration:none;color:inherit" href="${r.kind === 'unit' ? '#/lernen/einheit/' + r.ref : r.kind === 'sheet' ? '#/lernzettel/' + r.ref : '#/materialien/' + r.ref}">${icon(r.kind === 'unit' ? 'learn' : r.kind === 'sheet' ? 'sheet' : 'materials')} ${esc(r.title)}</a>`).join('') : '<p class="muted">Noch nichts geöffnet.</p>'}
    </section>
  </div>

  <div class="section-title"><h2>Lernfortschritt ${esc(s.trainingYear)}. Ausbildungsjahr</h2><a class="small" href="#/lernen">alle Lernfelder</a></div>
  <div class="grid">
    ${[...yearAreas, C.areaById.get('WISO')].filter(Boolean).map((a) => { const p = L.areaProgress(a.id); return `<a class="card link" href="#/lernen/bereich/${a.id}"><div class="small muted">${esc(C.areaLabel(a))}</div><b>${esc(a.title)}</b><div style="margin-top:10px">${progressBar(p.value)}</div><div class="small muted" style="margin-top:4px">${p.units ? `${Math.round(p.value * 100)} % beherrscht · ${p.units} Lerneinheit${p.units === 1 ? '' : 'en'}` : 'Noch keine Lerneinheiten ausgearbeitet'}</div></a>`; }).join('')}
  </div>
  <p class="small muted" style="margin-top:14px">„Beherrscht“ zählt nur Aufgaben- und Karteikartenergebnisse über mehrere Tage, nicht das bloße Öffnen von Seiten.</p>`;
}
