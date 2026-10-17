import * as store from '../store.js';
import * as C from '../content.js';
import * as L from '../learning.js';
import { esc, shuffle } from '../util.js';
import { md } from '../md.js';
import { icon, safe } from '../ui.js';
import { mountTask } from '../tasks-ui.js';

export async function render(el, ctx) {
  if (ctx.args[0] === 'session') return session(el, ctx);
  return overview(el, ctx);
}

function overview(el, { app }) {
  app.title('Karteikarten');
  const due = L.dueCards();
  const byArea = new Map();
  for (const d of due) byArea.set(d.unit.area, (byArea.get(d.unit.area) || 0) + 1);
  const units = C.allUnits().filter((u) => (u.flashcards || []).length);
  el.innerHTML = `<h1>Karteikarten</h1>
    <p class="muted">Karten werden in wachsenden Abständen wiederholt (1, 3, 7 … Tage). Wie gut du eine Karte konntest, bestimmt den nächsten Termin.</p>
    <div class="card"><div class="row between"><div><div class="kpi">${due.length}</div><span class="muted">heute fällig</span></div>${due.length ? `<a class="btn primary" href="#/karten/session">Alle fälligen wiederholen</a>` : ''}</div>
    ${byArea.size ? `<div class="chips" style="margin-top:12px">${Array.from(byArea).map(([a, n]) => `<a class="chip" href="#/karten/session?area=${a}">${esc(C.areaLabel(C.areaById.get(a)))}: ${n}</a>`).join('')}</div>` : ''}</div>
    <h2 style="margin-top:22px">Nach Lerneinheit</h2>
    <div class="grid">${units.map((u) => { const st = u.flashcards.map((c) => store.get('cards', c.id)); const learned = st.filter(Boolean).length; const d = st.filter((s) => s && s.due <= new Date().toISOString().slice(0, 10)).length; return `<a class="card link" href="#/karten/session?unit=${u.id}"><div class="small muted">${esc(C.areaLabel(C.areaById.get(u.area)))}</div><b>${esc(u.title)}</b><p class="small muted" style="margin:6px 0 0">${u.flashcards.length} Karten · ${learned} gelernt · ${d} fällig</p></a>`; }).join('')}</div>`;
}

function session(el, { app, query }) {
  const minutes = Number(query.get('min')) || 0;
  const unitId = query.get('unit'), areaId = query.get('area');
  app.title(minutes ? `${minutes} Minuten lernen` : 'Karteikarten');
  let queue;
  if (unitId || areaId) {
    const units = unitId ? [C.unitById.get(unitId)].filter(Boolean) : C.unitsOfArea(areaId);
    const today = new Date().toISOString().slice(0, 10);
    queue = units.flatMap((u) => u.flashcards.map((c) => ({ kind: 'card', card: c, unit: u, state: store.get('cards', c.id) })))
      .filter((x) => !x.state || x.state.due <= today);
    if (!queue.length) queue = units.flatMap((u) => u.flashcards.map((c) => ({ kind: 'card', card: c, unit: u })));
    queue = shuffle(queue);
    units.forEach((u) => L.markOpened(u));
  } else {
    queue = L.dueCards({ includeNew: minutes ? 6 : 0 }).map((x) => ({ kind: 'card', ...x }));
  }
  if (minutes) {
    // Kurzeinheit: Karten + Aufgaben aus der empfohlenen Einheit
    queue = queue.slice(0, Math.max(3, Math.round(minutes * 1.2)));
    const rec = L.recommendedUnit();
    if (rec) {
      if (!L.isStarted(rec.unit.id) && queue.length < 4) rec.unit.flashcards.slice(0, 5).forEach((c) => queue.push({ kind: 'card', card: c, unit: rec.unit }));
      const tasks = (rec.unit.tasks || []).filter((t) => t.type !== 'case' || minutes >= 15);
      const order = tasks.map((t) => ({ t, s: store.get('taskstats', t.id) })).sort((a, b) => (a.s?.lastScore ?? -1) - (b.s?.lastScore ?? -1));
      order.slice(0, Math.max(1, Math.round(minutes / 4))).forEach((x) => queue.push({ kind: 'task', task: x.t, unit: rec.unit }));
      L.markOpened(rec.unit);
    }
  }
  const total = queue.length;
  const start = Date.now();
  let i = 0, known = 0, again = 0, taskPts = 0, taskMax = 0;
  let tick = null;

  let finished = false;
  const finish = () => {
    if (finished) return; finished = true;
    clearInterval(tick);
    const mins = (Date.now() - start) / 60000;
    L.logMinutes(mins, minutes ? 'kurzeinheit' : 'karteikarten');
    el.innerHTML = `<div class="card" style="max-width:640px;margin:0 auto;text-align:center"><h2>Geschafft!</h2>
      <p>${i} von ${total} Schritten in ${Math.max(1, Math.round(mins))} Minuten.</p>
      <p>${known} Karten gewusst · ${again} zum Wiederholen markiert${taskMax ? ` · Aufgaben: ${Math.round(taskPts * 10) / 10} von ${taskMax} Punkten` : ''}</p>
      <div class="row" style="justify-content:center"><a class="btn primary" href="#/">Zum Dashboard</a><a class="btn" href="#/karten">Karteikarten</a></div></div>`;
  };
  const next = () => {
    if (i >= queue.length || (minutes && Date.now() - start > minutes * 60000 + 30000 && i > 0)) return finish();
    const item = queue[i];
    const head = `<div class="row between no-print" style="max-width:720px;margin:0 auto 12px"><span class="small muted">${i + 1} / ${total} · ${esc(item.unit.title)}</span>${minutes ? '<span class="timer" id="tm"></span>' : ''}<button class="btn small ghost" id="stop">Beenden</button></div>`;
    if (item.kind === 'card') {
      el.innerHTML = `${head}<div style="max-width:720px;margin:0 auto"><div class="flashcard" id="fc" tabindex="0" role="button" aria-label="Karte umdrehen"><div><div class="q">${md(item.card.q)}</div><p class="small muted" style="margin-top:14px">Antippen oder Leertaste zum Umdrehen</p></div></div><div id="rate"></div></div>`;
      const fc = el.querySelector('#fc');
      const flip = () => {
        fc.innerHTML = `<div><div class="small muted">${md(item.card.q)}</div><hr><div class="a">${md(item.card.a)}</div></div>`;
        fc.onclick = null; fc.onkeydown = null;
        el.querySelector('#rate').innerHTML = `<div class="rate">${[['Nochmal', 'gleich wieder', 0], ['Schwer', 'bald', 1], ['Gut', 'später', 2], ['Leicht', 'viel später', 3]].map(([l, h, v]) => `<button class="btn" data-v="${v}">${l}<small>${h}</small></button>`).join('')}</div><p class="small muted" style="text-align:center">Tasten 1–4</p>`;
        el.querySelectorAll('[data-v]').forEach((b) => b.onclick = () => rate(Number(b.dataset.v)));
        el.querySelector('[data-v="2"]').focus();
      };
      const rate = async (v) => {
        await safe(() => L.rateCard(item.card, item.unit.id, v));
        if (v === 0) { again++; if (queue.filter((q) => q === item).length < 3) queue.splice(Math.min(queue.length, i + 4), 0, item); } else known++;
        i++; next();
      };
      fc.onclick = flip;
      fc.onkeydown = (e) => { if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); flip(); } };
      fc.focus();
      el.onkeydown = (e) => { if (['1', '2', '3', '4'].includes(e.key) && el.querySelector('[data-v]')) rate(Number(e.key) - 1); };
    } else {
      el.innerHTML = `${head}<div style="max-width:720px;margin:0 auto" id="tw"></div><div class="row" style="max-width:720px;margin:12px auto"><button class="btn primary" id="chk">Prüfen</button><button class="btn ghost" id="skip">Überspringen</button></div>`;
      const t = mountTask(item.task, { mode: 'practice', seed: i + 11 });
      el.querySelector('#tw').appendChild(t.el);
      el.querySelector('#skip').onclick = () => { i++; next(); };
      el.querySelector('#chk').onclick = async () => {
        const btn = el.querySelector('#chk');
        if (btn.dataset.done) { i++; return next(); }
        const r = t.showResult(async (r2) => { await L.recordTask(item.task, r2, { answer: t.getAnswer() }); taskPts += r2.points || 0; });
        t.lock();
        taskMax += r.max;
        if (r.score != null) { await L.recordTask(item.task, r, { answer: t.getAnswer() }); taskPts += r.points; }
        btn.textContent = 'Weiter'; btn.dataset.done = '1';
      };
    }
    el.querySelector('#stop').onclick = finish;
  };
  if (!queue.length) {
    el.innerHTML = `<div class="card" style="max-width:640px;margin:0 auto"><h2>Nichts fällig</h2><p>Gerade sind keine Karteikarten fällig. Öffne eine Lerneinheit, um neue Karten zu beginnen, oder übe Aufgaben.</p><div class="row"><a class="btn primary" href="#/lernen">Lernen</a><a class="btn" href="#/ueben">Üben</a></div></div>`;
    return;
  }
  if (minutes) tick = setInterval(() => {
    const left = Math.max(0, minutes * 60 - Math.round((Date.now() - start) / 1000));
    const tm = el.querySelector('#tm'); if (tm) tm.textContent = `${Math.floor(left / 60)}:${String(left % 60).padStart(2, '0')}`;
  }, 1000);
  next();
  return () => { clearInterval(tick); el.onkeydown = null; if (!finished && i > 0) L.logMinutes((Date.now() - start) / 60000, minutes ? 'kurzeinheit' : 'karteikarten'); };
}
