// Öffnet jede Lerneinheit im Browser und rendert alle Aufgaben mit Lösung. Erwartet: keine Fehler.
import { chromium } from 'playwright';
const BASE = process.env.BASE || 'http://localhost:8765/';
const b = await chromium.launch(); const p = await b.newPage();
const errs = []; p.on('pageerror', (e) => errs.push(e.message)); p.on('console', (m) => { if (m.type() === 'error') errs.push(m.text()); });
await p.goto(BASE); await p.waitForFunction(() => window.__app && document.querySelector('#main')?.children.length);
const ids = await p.evaluate(async () => (await import('./content/units/index.js')).default);
let bad = 0;
for (const id of ids) {
  const before = errs.length;
  await p.goto(BASE + '#/lernen/einheit/' + id); await p.waitForTimeout(400);
  const text = await p.textContent('#main');
  const res = await p.evaluate(async (id) => {
    const T = await import('./js/tasks-ui.js'); const C = window.__app.C;
    const u = C.unitById.get(id); const box = document.createElement('div'); document.body.appendChild(box);
    let n = 0; for (const t of u.tasks) { const el = document.createElement('div'); box.appendChild(el); const m = T.mountTask(t, { mode: 'practice' }); el.appendChild(m.el || m.root || document.createElement('div')); m.revealSolution?.(); n++; }
    box.remove(); return n;
  }, id).catch((e) => 'ERR ' + e.message);
  const ok = errs.length === before && typeof res === 'number' && !/konnte nicht geladen/.test(text);
  if (!ok) bad++;
  console.log(ok ? '✓' : '✗', id, res, errs.slice(before).join(' | '));
}
await b.close(); process.exit(bad ? 1 : 0);
