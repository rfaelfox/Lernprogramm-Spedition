import * as store from '../store.js';
import * as C from '../content.js';
import { esc, fmtDateTime } from '../util.js';
import { icon, safe } from '../ui.js';
import { taskTypeLabel } from '../tasks-ui.js';

export async function render(el, { app, query }) {
  app.title('Fehlerheft');
  const showAll = query.get('alle') === '1';
  const items = store.all('mistakes').filter((m) => (showAll || !m.resolved) && C.taskById.has(m.taskId)).sort((a, b) => b.lastAt.localeCompare(a.lastAt));
  el.innerHTML = `<div class="row between"><h1>Fehlerheft</h1>${items.filter((m) => !m.resolved).length ? `<button class="btn primary" id="practice">${icon('practice')} Fehler gezielt üben</button>` : ''}</div>
    <p class="muted">Hier landen automatisch alle Aufgaben, die du nicht vollständig richtig gelöst hast. Sobald du eine Aufgabe später richtig löst, gilt sie als erledigt.</p>
    <div class="chips" style="margin-bottom:12px"><a class="chip ${!showAll ? 'on' : ''}" href="#/fehlerheft">offen</a><a class="chip ${showAll ? 'on' : ''}" href="#/fehlerheft?alle=1">alle</a></div>
    <div class="stack">${items.map((m) => { const e = C.taskById.get(m.taskId); return `<div class="card"><div class="row between"><span><span class="badge accent">${esc(taskTypeLabel(e.task))}</span> <span class="small muted">${esc(e.unit.title)}</span></span>${m.resolved ? '<span class="badge ok">erledigt</span>' : `<span class="badge bad">${m.count}× falsch</span>`}</div>
      <p style="margin-top:8px">${esc(e.task.q.replace(/[*#|]/g, '').slice(0, 220))}</p><div class="row small"><span class="muted">zuletzt ${fmtDateTime(m.lastAt)}</span><span class="spacer"></span><a class="btn small" href="#/lernen/einheit/${e.unit.id}">Nachlesen</a>${!m.resolved ? `<button class="btn small ghost" data-done="${m.id}">als erledigt markieren</button>` : ''}</div></div>`; }).join('') || '<p class="muted">Keine offenen Fehler. Sehr gut!</p>'}</div>`;
  el.querySelectorAll('[data-done]').forEach((b) => b.onclick = () => safe(async () => { await store.put('mistakes', { ...store.get('mistakes', b.dataset.done), resolved: true, resolvedAt: new Date().toISOString() }); render(el, { app, query }); }));
  el.querySelector('#practice')?.addEventListener('click', () => safe(async () => {
    const ids = items.filter((m) => !m.resolved).map((m) => C.taskById.get(m.taskId)?.parent?.id || m.taskId);
    const a = await store.put('attempts', { title: 'Fehlerheft', mode: 'practice', taskIds: Array.from(new Set(ids)).slice(0, 30), answers: {}, results: {}, current: 0, status: 'running', startedAt: new Date().toISOString(), timeLimit: 0, elapsed: 0 });
    location.hash = '#/ueben/sitzung/' + a.id;
  }));
}
