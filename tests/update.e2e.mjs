// Ende-zu-Ende-Test für „Aktualisieren per Knopfdruck“: Eine alte Version läuft (offline-fähig),
// dann wird eine neue veröffentlicht. Erwartet: Update-Knopf erscheint, Daten bleiben erhalten.
import { chromium } from 'playwright';
import { mkdtempSync, cpSync, readFileSync, writeFileSync } from 'node:fs';
import { createServer } from 'node:http';
import { tmpdir } from 'node:os';
import { join, extname } from 'node:path';

let ok = 0, fail = 0;
const check = (n, c, x = '') => { if (c) { ok++; console.log('✓', n); } else { fail++; console.log('✗', n, x); } };
const site = mkdtempSync(join(tmpdir(), 'lp-site-'));
cpSync(new URL('../app', import.meta.url).pathname, site, { recursive: true });
writeFileSync(join(site, 'config.js'), "export default { supabaseUrl: '', supabaseKey: '' };");
const stamp = (b, extra) => {
  for (const f of ['version.js', 'sw.js']) { const p = join(site, f); writeFileSync(p, readFileSync(p, 'utf8').replace(/BUILD = '[^']*'/, `BUILD = '${b}'`)); }
  if (extra) { const p = join(site, 'version.js'); writeFileSync(p, readFileSync(p, 'utf8').replace(/VERSION = '[^']*'/, `VERSION = '${extra}'`)); }
};
const types = { '.js': 'text/javascript', '.html': 'text/html', '.css': 'text/css', '.json': 'application/json', '.webmanifest': 'application/manifest+json', '.svg': 'image/svg+xml', '.png': 'image/png' };
const srv = createServer((req, res) => {
  let p = decodeURIComponent(new URL(req.url, 'http://x').pathname); if (p.endsWith('/')) p += 'index.html';
  try { const b = readFileSync(join(site, p)); res.writeHead(200, { 'content-type': types[extname(p)] || 'application/octet-stream' }); res.end(b); }
  catch { res.writeHead(404); res.end(); }
}).listen(8799);
const BASE = 'http://localhost:8799/';

stamp('alt-1');
const ctx = await chromium.launchPersistentContext(mkdtempSync(join(tmpdir(), 'lp-')), { viewport: { width: 1280, height: 900 } });
const p = ctx.pages()[0] || await ctx.newPage();
const errs = []; p.on('pageerror', (e) => errs.push(e.message));
await p.goto(BASE); await p.waitForFunction(() => window.__app && document.querySelector('#main')?.children.length);
await p.evaluate(() => navigator.serviceWorker.ready);
await p.evaluate(() => window.__app.store.put('grades', { id: 'g1', subject: 'LF03', value: '2', date: '2026-10-01' }));
await p.waitForTimeout(3500);
check('kein Update-Knopf bei aktueller Version', await p.locator('#updBtn').isHidden());
check('Version wird angezeigt', (await p.textContent('.sidebar')).includes('alt-1'));

stamp('neu-2', '0.9.0');
await p.goto(BASE + '#/einstellungen/info'); await p.waitForSelector('#chk');
await p.click('#chk');
await p.waitForSelector('#updBtn:not([hidden])', { timeout: 8000 }).catch(() => {});
check('Update-Knopf erscheint', await p.locator('#updBtn').isVisible());
check('Einstellungen melden neue Version', (await p.textContent('#updInfo')).includes('0.9.0'));
await p.click('#updBtn');
await p.waitForSelector('dialog[open]');
check('Dialog zeigt Neuerungen', (await p.textContent('dialog')).includes('Neu:'));
await p.click('dialog button[value=go]');
await p.waitForFunction(() => document.querySelector('.toast-wrap')?.textContent.includes('Aktualisiert'), null, { timeout: 60000 }).catch(() => {});
await p.waitForFunction(() => window.__app && document.querySelector('#main')?.children.length);
await p.waitForTimeout(500);
check('neue Version läuft', (await p.textContent('.sidebar')).includes('neu-2'), await p.textContent('.sidebar'));
check('Bestätigung nach dem Update', (await p.textContent('body')).includes('Aktualisiert auf Version 0.9.0'));
check('Daten sind erhalten', (await p.evaluate(() => window.__app.store.get('grades', 'g1')?.value)) === '2');
const keys = await p.evaluate(() => caches.keys());
check('alter Offline-Speicher entfernt, neuer vorhanden', keys.includes('lernprogramm-neu-2') && !keys.includes('lernprogramm-alt-1'), keys.join(','));
await p.waitForTimeout(3500);
check('danach kein Update-Knopf mehr', await p.locator('#updBtn').isHidden());

// Offline startet weiter die neue Version
await ctx.setOffline(true);
await p.reload(); await p.waitForFunction(() => window.__app && document.querySelector('#main')?.children.length);
check('offline startet die neue Version', (await p.textContent('.sidebar')).includes('neu-2'));
check('keine Skriptfehler', !errs.length, errs.join(' | '));
await ctx.close(); srv.close();
console.log(`\n${ok} bestanden, ${fail} fehlgeschlagen`);
process.exit(fail ? 1 : 0);
