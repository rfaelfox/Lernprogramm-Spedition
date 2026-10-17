import * as store from '../store.js';
import * as C from '../content.js';
import * as L from '../learning.js';
import { esc, shuffle, fmtNum, fmtDateTime, debounce } from '../util.js';
import { md } from '../md.js';
import { icon, toast, safe, dialog } from '../ui.js';
import { mountTask, taskTypeLabel, difficultyLabel } from '../tasks-ui.js';
import { grade, maxPoints, isEmpty } from '../grading.js';
import { ihkGrade } from './grades.js';

export async function render(el, ctx) {
  if (ctx.args[0] === 'sitzung' && ctx.args[1]) return runSession(el, ctx, ctx.args[1]);
  if (ctx.args[0] === 'auswertung' && ctx.args[1]) return evaluation(el, ctx, ctx.args[1]);
  return setup(el, ctx);
}

function setup(el, { app, query }) {
  app.title('Üben');
  const running = store.all('attempts').filter((a) => a.status === 'running').sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
  const done = store.all('attempts').filter((a) => a.status === 'done').sort((a, b) => b.finishedAt.localeCompare(a.finishedAt)).slice(0, 8);
  const pre = {
    areas: query.get('area') ? [query.get('area')] : [],
    topics: query.get('topic') ? [query.get('topic')] : [],
    unit: query.get('unit'),
    exam: query.get('exam'),
    quiz: query.get('quiz') === '1',
    mode: query.get('mode') || 'practice',
    n: Number(query.get('n')) || 10
  };
  if (pre.unit) { const u = C.unitById.get(pre.unit); if (u) { pre.areas = [u.area]; pre.topics = [u.topic]; } }
  if (pre.exam) { const e = store.get('exams', pre.exam); if (e) { pre.topics = [...new Set(L.examUnitIds(e).map((id) => C.unitById.get(id)?.topic).filter(Boolean))]; pre.areas = [...new Set(pre.topics.map((t) => C.topicById.get(t)?.areaId))]; } }
  const withTasks = C.areas.filter((a) => C.unitsOfArea(a.id).some((u) => (u.tasks || []).length));
  const sel = { areas: new Set(pre.areas), topics: new Set(pre.topics), diff: new Set([1, 2, 3]), mode: pre.mode, n: pre.n, time: 0 };

  el.innerHTML = `<h1>Üben</h1>
    ${running.length ? `<div class="card" style="margin-bottom:16px"><h2>Unterbrochene Übungen fortsetzen</h2>${running.map((a) => `<div class="row between" style="padding:6px 0;border-bottom:1px solid var(--line)"><span>${esc(a.title)}<br><span class="small muted">${a.mode === 'test' ? 'Testmodus' : 'Übungsmodus'} · ${Object.keys(a.answers || {}).length}/${a.taskIds.length} bearbeitet · ${fmtDateTime(a.updatedAt)}</span></span><span class="row"><a class="btn small primary" href="#/ueben/sitzung/${a.id}">Fortsetzen</a><button class="btn small ghost" data-discard="${a.id}" aria-label="Verwerfen">${icon('trash')}</button></span></div>`).join('')}</div>` : ''}
    ${pre.quiz && pre.unit ? `<div class="note">Kurzer Wissenstest zu „${esc(C.unitById.get(pre.unit)?.title)}“</div>` : ''}
    <div class="card stack">
      <div><label>Lernfeld oder Fach</label><div class="chips" id="areas">${withTasks.map((a) => `<button type="button" class="chip" data-a="${a.id}" aria-pressed="${sel.areas.has(a.id)}">${esc(C.areaLabel(a))}</button>`).join('')}</div>
      ${!withTasks.length ? '<p class="muted">Noch keine Aufgaben vorhanden.</p>' : ''}</div>
      <div><label>Themen <span class="small muted">(keine Auswahl = alle Themen der gewählten Bereiche)</span></label><div class="chips" id="topics"></div></div>
      <div><label>Schwierigkeitsgrad</label><div class="chips" id="diff">${[1, 2, 3].map((d) => `<button type="button" class="chip" data-d="${d}" aria-pressed="true">${difficultyLabel(d)}</button>`).join('')}</div></div>
      <div class="form-grid">
        <div class="field"><label for="n">Anzahl Aufgaben</label><select id="n">${[5, 10, 15, 20, 30, 50].map((x) => `<option ${x === sel.n ? 'selected' : ''}>${x}</option>`).join('')}</select></div>
        <div class="field"><label for="mode">Modus</label><select id="mode"><option value="practice" ${sel.mode === 'practice' ? 'selected' : ''}>Übungsmodus (Hinweise, Lösungen, Rückmeldung)</option><option value="test" ${sel.mode === 'test' ? 'selected' : ''}>Testmodus (Auswertung am Ende)</option></select></div>
        <div class="field"><label for="time">Zeitlimit</label><select id="time"><option value="0">ohne</option>${[10, 15, 20, 30, 45, 60, 90].map((x) => `<option value="${x}">${x} Minuten</option>`).join('')}</select></div>
        <div class="field"><label for="prio">Auswahl</label><select id="prio"><option value="mix">gemischt</option><option value="weak">zuerst Schwächen und Neues</option><option value="new">nur noch nicht bearbeitete</option></select></div>
      </div>
      <p id="avail" class="small muted"></p>
      <div class="row"><button class="btn primary" id="go">${icon('practice')} Starten</button><a class="btn" href="#/fehlerheft">${icon('flag')} Fehlerheft üben</a></div>
    </div>
    ${done.length ? `<h2 style="margin-top:22px">Letzte Ergebnisse</h2><div class="card">${done.map((a) => `<a class="row between" style="padding:7px 0;border-bottom:1px solid var(--line);text-decoration:none;color:inherit" href="#/ueben/auswertung/${a.id}"><span>${esc(a.title)}<br><span class="small muted">${a.mode === 'test' ? 'Test' : 'Übung'} · ${fmtDateTime(a.finishedAt)}</span></span><b>${a.summary ? Math.round(a.summary.pct * 100) + ' %' : ''}</b></a>`).join('')}<p class="small muted" style="margin-top:8px">Übungsergebnisse erscheinen nicht im Notenbuch.</p></div>` : ''}`;

  const drawTopics = () => {
    const ts = C.areas.filter((a) => !sel.areas.size || sel.areas.has(a.id)).flatMap((a) => a.topics.filter((t) => C.unitsOfTopic(t.id).some((u) => (u.tasks || []).length)));
    el.querySelector('#topics').innerHTML = ts.map((t) => `<button type="button" class="chip" data-t="${t.id}" aria-pressed="${sel.topics.has(t.id)}">${esc(t.title)}</button>`).join('') || '<span class="muted small">Keine Themen mit Aufgaben.</span>';
    el.querySelectorAll('[data-t]').forEach((b) => b.onclick = () => { toggle(sel.topics, b.dataset.t); b.setAttribute('aria-pressed', sel.topics.has(b.dataset.t)); count(); });
    count();
  };
  const pool = () => {
    let tasks = C.tasksFor({ areaIds: [...sel.areas], topicIds: [...sel.topics], difficulty: [...sel.diff] });
    if (pre.quiz && pre.unit) { const u = C.unitById.get(pre.unit); tasks = (u.quiz || []).map((id) => C.taskById.get(id)?.task).filter(Boolean); }
    else if (pre.unit && !sel.topics.size) tasks = tasks.filter((t) => t.unitId === pre.unit);
    return tasks;
  };
  const count = () => { el.querySelector('#avail').textContent = `${pool().length} passende Aufgaben verfügbar.`; };
  const toggle = (set, v) => (set.has(v) ? set.delete(v) : set.add(v));
  el.querySelectorAll('[data-a]').forEach((b) => b.onclick = () => { toggle(sel.areas, b.dataset.a); b.setAttribute('aria-pressed', sel.areas.has(b.dataset.a)); [...sel.topics].forEach((t) => { if (!sel.areas.has(C.topicById.get(t)?.areaId)) sel.topics.delete(t); }); drawTopics(); });
  el.querySelectorAll('[data-d]').forEach((b) => b.onclick = () => { toggle(sel.diff, Number(b.dataset.d)); if (!sel.diff.size) sel.diff.add(Number(b.dataset.d)); el.querySelectorAll('[data-d]').forEach((x) => x.setAttribute('aria-pressed', sel.diff.has(Number(x.dataset.d)))); count(); });
  el.querySelectorAll('[data-discard]').forEach((b) => b.onclick = () => safe(async () => { await store.remove('attempts', b.dataset.discard); setup(el, { app, query }); }, 'Übung verworfen'));
  drawTopics();
  el.querySelector('#go').onclick = () => safe(async () => {
    let tasks = pool();
    if (!tasks.length) { toast('Keine passenden Aufgaben. Bitte Auswahl ändern.', 'bad'); return; }
    const prio = el.querySelector('#prio').value;
    const n = Number(el.querySelector('#n').value);
    if (prio === 'new') tasks = tasks.filter((t) => !store.get('taskstats', t.id));
    if (!tasks.length) { toast('Alle passenden Aufgaben wurden schon bearbeitet.', 'bad'); return; }
    if (prio === 'weak') tasks = shuffle(tasks).sort((a, b) => (store.get('taskstats', a.id)?.lastScore ?? -1) - (store.get('taskstats', b.id)?.lastScore ?? -1));
    else if (!(pre.quiz && pre.unit)) tasks = shuffle(tasks);
    tasks = tasks.slice(0, n);
    const mode = el.querySelector('#mode').value;
    const title = pre.quiz && pre.unit ? `Wissenstest: ${C.unitById.get(pre.unit).title}` : [...sel.topics].map((t) => C.topicById.get(t)?.title).slice(0, 2).join(', ') || [...sel.areas].map((a) => C.areaLabel(C.areaById.get(a))).join(', ') || 'Gemischte Übung';
    const a = await store.put('attempts', { title, mode, taskIds: tasks.map((t) => t.id), answers: {}, results: {}, current: 0, status: 'running', startedAt: new Date().toISOString(), timeLimit: Number(el.querySelector('#time').value) || 0, elapsed: 0, config: { areas: [...sel.areas], topics: [...sel.topics], diff: [...sel.diff] } });
    location.hash = '#/ueben/sitzung/' + a.id;
  });
}

function runSession(el, { app }, id) {
  let att = store.get('attempts', id);
  if (!att) { el.innerHTML = '<p>Übung nicht gefunden.</p>'; return; }
  if (att.status === 'done') { location.hash = '#/ueben/auswertung/' + id; return; }
  app.title(att.mode === 'test' ? 'Test' : 'Übung');
  const resumeAt = Date.now();
  let elapsedBase = att.elapsed || 0;
  let tick, cur = null;
  const elapsed = () => elapsedBase + (Date.now() - resumeAt) / 1000;
  const save = debounce(() => store.put('attempts', { ...att, elapsed: elapsed() }, { silent: true }).catch(() => {}), 600);

  const draw = () => {
    const tid = att.taskIds[att.current];
    const entry = C.taskById.get(tid);
    if (!entry) { att.current++; return att.current < att.taskIds.length ? draw() : submit(); }
    const task = entry.task;
    const res = att.results[tid];
    el.innerHTML = `
      <div class="row between no-print"><span class="small muted">${esc(att.title)} · ${att.mode === 'test' ? 'Testmodus' : 'Übungsmodus'}</span><span class="row">${att.timeLimit ? `<span class="timer" id="tm"></span>` : ''}<button class="btn small" id="pause">Unterbrechen</button></span></div>
      <div class="chips" style="margin:10px 0 14px" aria-label="Aufgabenübersicht">${att.taskIds.map((t, i) => { const r = att.results[t]; const answered = att.answers[t] != null; const cls = att.mode === 'practice' && r ? (r.score >= 0.999 ? 'ok' : r.score > 0 ? 'warn' : 'bad') : ''; return `<button class="chip ${i === att.current ? 'on' : ''}" data-go="${i}" aria-label="Aufgabe ${i + 1}" style="min-width:42px;justify-content:center;${cls ? `border-color:var(--${cls === 'ok' ? 'ok' : cls === 'warn' ? 'warn' : 'bad'})` : answered ? 'border-style:dashed' : ''}">${i + 1}</button>`; }).join('')}</div>
      <p class="small muted">${esc(C.areaLabel(C.areaById.get(entry.unit.area)))} · ${esc(entry.unit.title)}</p>
      <div id="tw"></div>
      <div class="row" style="margin-top:14px" id="actions"></div>`;
    cur = mountTask(task, { answer: att.answers[tid], mode: att.mode, seed: att.current + 5, onChange: (a) => { att.answers[tid] = a; save(); } });
    el.querySelector('#tw').appendChild(cur.el);
    const act = el.querySelector('#actions');
    const last = att.current === att.taskIds.length - 1;
    if (att.mode === 'practice') {
      if (res) { cur.showResult(); cur.lock(); }
      act.innerHTML = `${!res ? `<button class="btn primary" id="chk">${icon('check')} Prüfen</button><button class="btn ghost" id="sol">Lösung ansehen</button>` : ''}
        ${res ? `<button class="btn" id="similar">Ähnliche Aufgabe</button>` : ''}
        <span class="spacer"></span>${att.current > 0 ? '<button class="btn ghost" id="prev">Zurück</button>' : ''}<button class="btn ${res ? 'primary' : ''}" id="next">${last ? 'Abschließen' : 'Weiter'}</button>`;
      act.querySelector('#chk')?.addEventListener('click', () => {
        if (cur.isEmpty()) { toast('Bitte zuerst eine Antwort eingeben, oder „Lösung ansehen“ wählen.'); return; }
        const r = cur.showResult(async (r2) => { att.results[tid] = slim(r2, cur.hintsUsed); await L.recordTask(task, r2, { answer: cur.getAnswer() }); save(); });
        cur.lock();
        if (r.score != null) { att.results[tid] = slim(r, cur.hintsUsed); L.recordTask(task, r, { answer: cur.getAnswer() }); }
        else att.results[tid] = { score: null, points: null, max: r.max, pending: true };
        save(); refreshActions();
      });
      act.querySelector('#sol')?.addEventListener('click', async () => {
        const d = await dialog({ title: 'Lösung ansehen?', body: '<p>Du hast noch keine Antwort geprüft. Wenn du die Lösung jetzt ansiehst, wird die Aufgabe mit 0 Punkten gespeichert und kommt ins Fehlerheft.</p>', actions: [{ label: 'Abbrechen', value: 'no' }, { label: 'Lösung ansehen', value: 'yes', primary: true }] });
        if (d.value !== 'yes') return;
        const r = { score: 0, points: 0, max: maxPoints(task) };
        att.results[tid] = { ...r, revealed: true };
        L.recordTask(task, r, { answer: null });
        cur.revealSolution(); cur.lock(); save(); refreshActions();
      });
      act.querySelector('#similar')?.addEventListener('click', () => {
        const sim = similarTask(task, att.taskIds);
        if (!sim) { toast('Keine weitere ähnliche Aufgabe vorhanden.'); return; }
        att.taskIds.splice(att.current + 1, 0, sim.id); att.current++; save(); draw();
      });
    } else {
      act.innerHTML = `${att.current > 0 ? '<button class="btn" id="prev">Zurück</button>' : ''}<span class="spacer"></span>${last ? '' : '<button class="btn primary" id="next">Weiter</button>'}<button class="btn ${last ? 'primary' : ''}" id="submit">Test abgeben</button>`;
      act.querySelector('#submit').onclick = async () => {
        const open = att.taskIds.filter((t) => { const e = C.taskById.get(t); return e && (att.answers[t] == null || isEmpty(e.task, att.answers[t])); }).length;
        const d = await dialog({ title: 'Test abgeben?', body: `<p>${open ? `${open} Aufgabe(n) sind noch nicht bearbeitet. ` : ''}Nach dem Abgeben kannst du die Antworten nicht mehr ändern.</p>`, actions: [{ label: 'Weiter bearbeiten', value: 'no' }, { label: 'Abgeben', value: 'yes', primary: true }] });
        if (d.value === 'yes') submit();
      };
    }
    act.querySelector('#prev')?.addEventListener('click', () => { att.current--; save(); draw(); });
    act.querySelector('#next')?.addEventListener('click', () => { if (last) return submit(); att.current++; save(); draw(); });
    el.querySelectorAll('[data-go]').forEach((b) => b.onclick = () => { att.current = Number(b.dataset.go); save(); draw(); });
    el.querySelector('#pause').onclick = async () => { await store.put('attempts', { ...att, elapsed: elapsed() }); toast('Übung gespeichert. Du kannst sie unter „Üben“ fortsetzen.', 'ok'); location.hash = '#/ueben'; };
  };
  const refreshActions = () => { const keep = att.current; att.current = keep; draw(); };

  const submit = async () => {
    clearInterval(tick);
    const results = { ...att.results };
    for (const tid of att.taskIds) {
      const e = C.taskById.get(tid); if (!e) continue;
      if (results[tid] && !results[tid].pending) continue;
      const r = grade(e.task, att.answers[tid]);
      results[tid] = slim(r, 0);
      if (att.mode === 'test' && r.score != null) await L.recordTask(e.task, r, { mode: 'test', answer: att.answers[tid] });
    }
    att = { ...att, results, status: 'done', finishedAt: new Date().toISOString(), elapsed: elapsed() };
    att.summary = summarize(att);
    await store.put('attempts', att);
    await L.logMinutes(Math.min(180, (Date.now() - resumeAt) / 60000), att.mode === 'test' ? 'test' : 'ueben');
    location.hash = '#/ueben/auswertung/' + att.id;
  };

  if (att.timeLimit) {
    tick = setInterval(() => {
      const left = Math.max(0, att.timeLimit * 60 - elapsed());
      const tm = el.querySelector('#tm'); if (tm) tm.textContent = `⏱ ${Math.floor(left / 60)}:${String(Math.floor(left % 60)).padStart(2, '0')}`;
      if (left <= 0) { clearInterval(tick); toast('Die Zeit ist abgelaufen. Die Übung wird ausgewertet.'); submit(); }
    }, 1000);
  }
  draw();
  return () => { clearInterval(tick); if (store.get('attempts', id)?.status === 'running') { L.logMinutes(Math.min(180, (Date.now() - resumeAt) / 60000), 'ueben'); store.put('attempts', { ...att, elapsed: elapsed() }, { silent: true }).catch(() => {}); } };
}

const slim = (r, hints) => ({ score: r.score, points: r.points, max: r.max, hints: hints || 0, pending: r.score == null });

function similarTask(task, used) {
  const e = C.taskById.get(task.id);
  const pool = (C.unitById.get(e.unit.id).tasks || []).filter((t) => !used.includes(t.id));
  const topicPool = C.tasksFor({ topicIds: [e.unit.topic] }).filter((t) => !used.includes(t.id));
  return pool.find((t) => t.type === task.type) || pool.find((t) => t.difficulty === task.difficulty) || pool[0] || topicPool[0] || null;
}

function summarize(att) {
  let pts = 0, max = 0, pending = 0;
  const byTopic = new Map();
  for (const tid of att.taskIds) {
    const r = att.results[tid]; const e = C.taskById.get(tid); if (!r || !e) continue;
    max += r.max;
    if (r.score == null) { pending++; continue; }
    pts += r.points;
    const k = e.unit.topic; const v = byTopic.get(k) || { pts: 0, max: 0 }; v.pts += r.points; v.max += r.max; byTopic.set(k, v);
  }
  return { pts: Math.round(pts * 100) / 100, max, pct: max ? pts / max : 0, pending, topics: Array.from(byTopic, ([t, v]) => ({ topic: t, pct: v.max ? v.pts / v.max : 0 })) };
}

function evaluation(el, { app }, id) {
  const att = store.get('attempts', id);
  if (!att) { el.innerHTML = '<p>Auswertung nicht gefunden.</p>'; return; }
  app.title('Auswertung');
  const sum = att.summary || summarize(att);
  const g = ihkGrade(sum.pct * 100);
  const weak = sum.topics.filter((t) => t.pct < 0.8).sort((a, b) => a.pct - b.pct);
  el.innerHTML = `<h1>Auswertung: ${esc(att.title)}</h1>
    <div class="grid">
      <div class="card"><div class="small muted">Punkte</div><div class="kpi">${fmtNum(sum.pts)} / ${fmtNum(sum.max)}</div><div class="muted">${Math.round(sum.pct * 100)} %</div></div>
      <div class="card"><div class="small muted">Orientierung nach IHK-Punkteschlüssel</div><div class="kpi">${g.grade}</div><div class="small muted">${g.label}. Nur eine Orientierung, keine echte Note. Erscheint nicht im Notenbuch.</div></div>
      <div class="card"><div class="small muted">Dauer</div><div class="kpi">${Math.max(1, Math.round((att.elapsed || 0) / 60))} Min.</div><div class="small muted">${att.mode === 'test' ? 'Testmodus' : 'Übungsmodus'}${att.timeLimit ? ` · Limit ${att.timeLimit} Min.` : ''}</div></div>
    </div>
    ${sum.pending ? `<div class="note warn">${sum.pending} Freitext-Antwort(en) brauchen noch deine Selbstbewertung. Sie sind unten markiert und noch nicht in den Punkten enthalten.</div>` : ''}
    <h2 style="margin-top:20px">Empfehlungen für die nächste Wiederholung</h2>
    <div class="card">${weak.length ? `<ul>${weak.map((w) => `<li><b>${esc(C.topicById.get(w.topic)?.title || w.topic)}</b>: ${Math.round(w.pct * 100)} % – <a href="#/ueben?topic=${w.topic}">gezielt üben</a> · <a href="#/lernen/bereich/${C.topicById.get(w.topic)?.areaId}">nachlesen</a></li>`).join('')}</ul>` : '<p>Alle Themen mindestens 80 %. Wiederhole sie in einigen Tagen erneut, damit das Wissen sitzt.</p>'}
      <p class="small muted">Falsch beantwortete Aufgaben stehen im <a href="#/fehlerheft">Fehlerheft</a>.</p></div>
    <h2 style="margin-top:20px">Alle Aufgaben</h2>
    <div class="stack" id="list"></div>
    <div class="row" style="margin-top:16px"><a class="btn primary" href="#/ueben">Neue Übung</a><button class="btn" id="again">Gleiche Aufgaben wiederholen</button></div>`;
  const list = el.querySelector('#list');
  att.taskIds.forEach((tid, i) => {
    const e = C.taskById.get(tid); const r = att.results[tid]; if (!e) return;
    const d = document.createElement('details');
    d.className = 'card';
    const ok = r?.score == null ? 'warn' : r.score >= 0.999 ? 'ok' : r.score > 0 ? 'warn' : 'bad';
    d.innerHTML = `<summary class="row between" style="cursor:pointer"><span><b>${i + 1}. ${esc(taskTypeLabel(e.task))}</b> <span class="small muted">${esc(e.unit.title)}</span></span><span class="badge ${ok}">${r?.score == null ? 'Selbstbewertung offen' : `${fmtNum(r.points)} / ${fmtNum(r.max)} P.`}</span></summary><div class="tw" style="margin-top:12px"></div>`;
    list.appendChild(d);
    let mounted = false;
    const mount = () => {
      if (mounted) return; mounted = true;
      const t = mountTask(e.task, { answer: att.answers[tid], mode: 'review', seed: i + 5 });
      d.querySelector('.tw').appendChild(t.el); t.lock();
      t.showResult(async (r2) => {
        att.results[tid] = slim(r2, 0); att.summary = summarize(att);
        await L.recordTask(e.task, r2, { mode: att.mode, answer: att.answers[tid] });
        await store.put('attempts', att);
        d.querySelector('summary .badge').textContent = `${fmtNum(r2.points)} / ${fmtNum(r2.max)} P.`;
      });
    };
    d.addEventListener('toggle', () => d.open && mount());
    if (r?.score == null) { d.open = true; mount(); }
  });
  el.querySelector('#again').onclick = () => safe(async () => {
    const a = await store.put('attempts', { title: att.title + ' (Wiederholung)', mode: att.mode, taskIds: att.taskIds.filter((t) => C.taskById.has(t) && !C.taskById.get(t).parent), answers: {}, results: {}, current: 0, status: 'running', startedAt: new Date().toISOString(), timeLimit: att.timeLimit, elapsed: 0 });
    location.hash = '#/ueben/sitzung/' + a.id;
  });
}
