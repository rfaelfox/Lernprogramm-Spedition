import { chromium } from 'playwright';
const base = process.env.BASE || 'http://localhost:8765/';
const routes = ['', 'lernen', 'lernen?jahr=alle', 'lernen/bereich/LF03', 'lernen/einheit/lf03-inventur-bilanz', 'karten', 'ueben', 'lernzettel', 'lernzettel/neu', 'noten', 'plan', 'materialien', 'lexikon', 'lexikon?tab=formeln', 'suche?q=bilanz', 'fehlerheft', 'abdeckung', 'einstellungen', 'einstellungen/daten', 'einstellungen/sync', 'einstellungen/faecher', 'einstellungen/meldungen', 'einstellungen/ki', 'einstellungen/info'];
const b = await chromium.launch();
const ctx = await b.newContext({ viewport: { width: Number(process.env.W || 1280), height: 900 } });
const p = await ctx.newPage();
const errs = [];
p.on('pageerror', (e) => errs.push('pageerror: ' + e.message));
p.on('console', (m) => { if (m.type() === 'error') errs.push('console: ' + m.text()); });
await p.goto(base); await p.waitForSelector('.status-pill span');
for (const r of routes) {
  await p.goto(base + '#/' + r); await p.waitForTimeout(350);
  const t = await p.textContent('#main');
  if (/konnte nicht geladen werden/.test(t)) errs.push(`route ${r}: ${t.slice(0, 200)}`);
  console.log((r || 'dashboard').padEnd(36), (await p.textContent('.topbar .title')).padEnd(25), t.length);
}
console.log(errs.length ? errs.join('\n') : 'keine Fehler');
await b.close();
