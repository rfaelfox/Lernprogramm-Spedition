// Ende-zu-Ende-Tests im echten Browser (Chromium). Voraussetzung: App auf :8765, Mock-Supabase auf :54321.
import { chromium, devices } from 'playwright';
import { mkdtempSync, writeFileSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
const BASE = 'http://localhost:8765/';
const SB = 'http://localhost:54321';
const OUT = process.env.OUT || tmpdir();
let ok = 0, fail = 0;
const check = (name, cond, extra = '') => { if (cond) { ok++; console.log('✓', name); } else { fail++; console.log('✗', name, extra); } };
const errors = [];
const watch = (p, tag) => { p.on('pageerror', (e) => errors.push(`${tag}: ${e.message}`)); p.on('console', (m) => { if (m.type() === 'error' && !/Failed to load resource|ERR_|net::/.test(m.text())) errors.push(`${tag}: ${m.text()}`); }); };
const ready = (p) => p.waitForFunction(() => window.__app && document.querySelector('#main')?.children.length);
const app = (p, fn, arg) => p.evaluate(fn, arg);

const dir = mkdtempSync(join(tmpdir(), 'lp-'));
let pc = await chromium.launchPersistentContext(dir, { viewport: { width: 1280, height: 900 } });
let p = pc.pages()[0] || await pc.newPage(); watch(p, 'PC');
await p.goto(BASE); await ready(p);

// 1. Note über die Oberfläche eintragen
await p.goto(BASE + '#/noten'); await p.waitForSelector('#add');
await p.click('#add');
await p.selectOption('#gs', 'LF06'); await p.fill('#gt', 'Klassenarbeit Eisenbahn'); await p.fill('#gd', '2026-10-01'); await p.fill('#gc', 'Klassenarbeit'); await p.fill('#gg', '2-');
await p.click('dialog button[value=ok]'); await p.waitForTimeout(300);
await p.click('#add'); await p.selectOption('#gs', 'LF06'); await p.fill('#gt', 'Test Frachtbrief'); await p.fill('#gd', '2026-10-10'); await p.fill('#gc', 'Test'); await p.fill('#gg', ''); await p.fill('#gp', '45'); await p.fill('#gm', '50');
await p.click('dialog button[value=ok]'); await p.waitForTimeout(300);
const grades = await app(p, () => window.__app.store.all('grades').map((g) => [g.title, g.grade]));
check('Noten über Formular gespeichert (2- → 2,3; 45/50 Punkte = 90 % → 2)', JSON.stringify(grades.sort()) === JSON.stringify([['Klassenarbeit Eisenbahn', 2.3], ['Test Frachtbrief', 2]].sort()), JSON.stringify(grades));
const avgText = await p.textContent('.grade-big');
check('Durchschnitt mit Gewichtung KA×2, Test×1: (2,3·2 + 2)/3 = 2,2', avgText.trim() === '2,2', avgText);

// 2. Aufgabe im Übungsmodus lösen
await p.goto(BASE + '#/ueben?unit=lf03-inventur-bilanz'); await p.waitForSelector('#go');
await p.selectOption('#n', '5'); await p.click('#go'); await p.waitForSelector('#tw .task');
const first = await app(p, () => { const a = Object.values(window.__app.store.all('attempts'))[0]; return a.taskIds[0]; });
await p.click('#sol'); await p.click('dialog button[value=yes]'); await p.waitForTimeout(200);
const ts = await app(p, (id) => window.__app.store.get('taskstats', id), first);
check('Übungsergebnis gespeichert (Lösung angesehen = 0 Punkte, im Fehlerheft)', ts && ts.lastScore === 0 && !!(await app(p, (id) => window.__app.store.get('mistakes', 'm-' + id), first)));
await p.click('#pause'); await p.waitForTimeout(300);
check('Unterbrochene Übung wird zum Fortsetzen angeboten', (await p.textContent('#main')).includes('Unterbrochene Übungen fortsetzen'));

// 3. Karteikarte bewerten
await p.goto(BASE + '#/karten/session?unit=lf03-inventur-bilanz'); await p.waitForSelector('#fc');
await p.click('#fc'); await p.click('[data-v="2"]'); await p.waitForTimeout(200);
check('Karteikarte bewertet und neu terminiert', (await app(p, () => window.__app.store.all('cards').length)) === 1);

// 4. Lernzettel erstellen, speichern, als PDF drucken
await p.goto(BASE + '#/lernzettel/neu?area=LF03'); await p.waitForSelector('#gen');
await p.fill('#t', 'LF 3: Inventur und Bilanz'); await p.click('#gen'); await p.waitForSelector('#src');
await p.fill('#src', (await p.inputValue('#src')).replace('## Lernziele', '## Lernziele\n\n- Eigene Ergänzung von Rafael'));
await p.click('#save'); await p.waitForSelector('#doc');
const sheet = await app(p, () => window.__app.store.all('sheets')[0]);
check('Lernzettel bearbeitet und gespeichert', sheet && sheet.versions[0].md.includes('Eigene Ergänzung von Rafael') && sheet.edited);
await p.emulateMedia({ media: 'print' });
const pdfPath = join(OUT, 'lernzettel-test.pdf');
await p.pdf({ path: pdfPath, format: 'A4', margin: { top: '15mm', bottom: '15mm', left: '15mm', right: '15mm' } });
await p.emulateMedia({ media: 'screen' });
const pdfText = execSync(`pdftotext "${pdfPath}" -`).toString();
check('PDF lesbar mit Titel, Tabellen und Lösungsteil', pdfText.includes('LF 3: Inventur und Bilanz') && pdfText.includes('Fachbegriffe') && pdfText.includes('Lösungen') && !pdfText.includes('Dashboard'), pdfText.slice(0, 200));
await p.click('#cards'); await p.waitForTimeout(400);
check('Lernzettel in Karteikarten/Quiz umgewandelt', (await app(p, () => window.__app.store.all('customunits')[0]?.flashcards.length)) > 3);

// 5. Neustart: Daten bleiben erhalten
await pc.close();
pc = await chromium.launchPersistentContext(dir, { viewport: { width: 1280, height: 900 } });
p = pc.pages()[0] || await pc.newPage(); watch(p, 'PC2');
await p.goto(BASE); await ready(p);
const after = await app(p, () => ({ g: window.__app.store.all('grades').length, t: window.__app.store.all('taskstats').length, c: window.__app.store.all('cards').length, s: window.__app.store.all('sheets').length, a: window.__app.store.all('attempts').filter((x) => x.status === 'running').length }));
check('Nach Neustart: Noten, Lernstand, Karten, Lernzettel, offene Übung vorhanden', after.g === 2 && after.t >= 1 && after.c === 1 && after.s === 1 && after.a === 1, JSON.stringify(after));

// 6. Backup exportieren, alles löschen, wiederherstellen
const backup = await app(p, () => window.__app.store.exportAll());
writeFileSync(join(OUT, 'backup-test.json'), JSON.stringify(backup));
await app(p, () => window.__app.store.wipeAll());
check('Nach Löschen leer', (await app(p, () => window.__app.store.all('grades').length)) === 0);
const imp = await app(p, (b) => window.__app.store.importAll(b, 'merge'), backup);
const restored = await app(p, () => ({ g: window.__app.store.all('grades').length, s: window.__app.store.all('sheets').length, c: window.__app.store.all('cards').length }));
check('Backup vollständig wiederhergestellt', restored.g === 2 && restored.s === 1 && restored.c === 1, JSON.stringify({ imp, restored }));
await p.reload(); await ready(p);
check('Wiederhergestellte Daten überstehen Neuladen', (await app(p, () => window.__app.store.all('grades').length)) === 2);

// 7. Synchronisation einrichten und anmelden (PC)
const login = async (page, email, pw) => {
  await page.goto(BASE + '#/einstellungen/sync'); await page.waitForSelector('#saveConn');
  await page.fill('#u', SB); await page.fill('#k', 'sb_publishable_test'); await page.click('#saveConn'); await page.waitForSelector('#in');
  await page.fill('#em', email); await page.fill('#pw', pw); await page.click('#in');
  await page.waitForFunction(() => window.__app.sync.syncState.status === 'ok' || window.__app.sync.syncState.status === 'fehler', null, { timeout: 15000 });
};
await login(p, 'rafael@test.de', 'geheim123');
const pcState = await app(p, () => window.__app.sync.syncState);
check('PC angemeldet und hochgeladen', pcState.status === 'ok' && pcState.pendingCount === 0, JSON.stringify(pcState));
check('Statusanzeige zeigt „Synchronisiert“', (await p.textContent('#statusPill')).includes('Synchronisiert'));

// 8. Zweites Gerät (iPhone-Ansicht) bekommt alle Daten
const b2 = await chromium.launch();
const phoneCtx = await b2.newContext({ ...devices['iPhone 13'] });
const ph = await phoneCtx.newPage(); watch(ph, 'iPhone');
await ph.goto(BASE); await ready(ph);
await login(ph, 'rafael@test.de', 'geheim123');
const phData = await app(ph, () => ({ g: window.__app.store.all('grades').map((x) => x.title).sort(), s: window.__app.store.all('sheets').length, c: window.__app.store.all('cards').length }));
check('iPhone: Noten, Lernzettel und Lernstand vom PC vorhanden', phData.g.length === 2 && phData.s === 1 && phData.c === 1, JSON.stringify(phData));

// 9. Offline auf dem iPhone ändern, später synchronisieren
await phoneCtx.setOffline(true);
await app(ph, () => window.dispatchEvent(new Event('offline')));
await app(ph, () => window.__app.store.put('grades', { subject: 'WISO', title: 'Offline-Test Sozialversicherung', date: '2026-10-15', category: 'Test', grade: 1.7 }));
await ph.waitForTimeout(300);
const pill = await ph.textContent('#statusPill');
check('Offline: Statusanzeige meldet ausstehende Änderung', /Offline/.test(pill) && /ausstehend/.test(pill), pill);
await phoneCtx.setOffline(false);
await app(ph, () => window.dispatchEvent(new Event('online')));
await ph.waitForFunction(() => window.__app.sync.syncState.status === 'ok' && window.__app.sync.syncState.pendingCount === 0, null, { timeout: 15000 });
await app(p, () => window.__app.sync.syncNow());
check('Offline erfasste Note kommt nach Wiederverbindung auf dem PC an', (await app(p, () => window.__app.store.all('grades').some((g) => g.title === 'Offline-Test Sozialversicherung'))));

// 10. Gleichzeitige Änderungen auf beiden Geräten
const gid = await app(p, () => window.__app.store.all('grades').find((g) => g.title === 'Klassenarbeit Eisenbahn').id);
await app(p, (id) => window.__app.store.put('grades', { ...window.__app.store.get('grades', id), note: 'Bemerkung vom PC' }), gid);
await app(ph, (id) => window.__app.store.put('grades', { ...window.__app.store.get('grades', id), grade: 2.0 }), gid);
await app(p, () => window.__app.sync.syncNow()); await app(ph, () => window.__app.sync.syncNow()); await app(p, () => window.__app.sync.syncNow());
const gp = await app(p, (id) => window.__app.store.get('grades', id), gid);
const gph = await app(ph, (id) => window.__app.store.get('grades', id), gid);
check('Gleichzeitige Änderungen verschiedener Felder werden zusammengeführt', gp.grade === 2 && gp.note === 'Bemerkung vom PC' && gph.grade === 2 && gph.note === 'Bemerkung vom PC', JSON.stringify({ gp, gph }));
await app(p, (id) => window.__app.store.put('grades', { ...window.__app.store.get('grades', id), title: 'Titel PC' }), gid);
await ph.waitForTimeout(20);
await app(ph, (id) => window.__app.store.put('grades', { ...window.__app.store.get('grades', id), title: 'Titel iPhone' }), gid);
await app(p, () => window.__app.sync.syncNow()); await app(ph, () => window.__app.sync.syncNow()); await app(p, () => window.__app.sync.syncNow());
const t1 = await app(p, (id) => window.__app.store.get('grades', id).title, gid);
const t2 = await app(ph, (id) => window.__app.store.get('grades', id).title, gid);
const conf = await app(ph, () => window.__app.store.all('conflicts'));
check('Echter Konflikt: neuerer Stand gewinnt, anderer bleibt unter „Konflikte“ erhalten', t1 === 'Titel iPhone' && t2 === 'Titel iPhone' && conf.some((c) => JSON.stringify(c).includes('Titel PC')), JSON.stringify({ t1, t2, conf: conf.length }));

// 11. Löschen wird übertragen
const off = await app(p, () => window.__app.store.all('grades').find((g) => g.title.startsWith('Offline-Test')).id);
await app(p, (id) => window.__app.store.remove('grades', id), off); await app(p, () => window.__app.sync.syncNow()); await app(ph, () => window.__app.sync.syncNow());
check('Löschung wird auf das andere Gerät übertragen', !(await app(ph, (id) => window.__app.store.get('grades', id), off)));

// 12. Material-Datei synchronisieren
await app(p, async () => { const { idb } = await import('./js/db.js'); await idb.putFile({ id: 'f-test', name: 'blatt.txt', type: 'text/plain', size: 5, blob: new Blob(['Hallo'], { type: 'text/plain' }) }); await window.__app.store.put('materials', { title: 'Arbeitsblatt', kind: 'original', fileId: 'f-test', fileName: 'blatt.txt', fileType: 'text/plain' }); await window.__app.sync.syncNow(); });
await app(ph, () => window.__app.sync.syncNow());
const fileTxt = await app(ph, async () => { const { idb } = await import('./js/db.js'); const f = await idb.getFile('f-test'); return f ? await f.blob.text() : null; });
check('Materialdatei wird privat übertragen', fileTxt === 'Hallo', String(fileTxt));

// 13. Fremder Benutzer sieht nichts
const strCtx = await b2.newContext();
const st = await strCtx.newPage(); watch(st, 'Fremd');
await st.goto(BASE); await ready(st);
await login(st, 'fremd@test.de', 'fremd123');
const foreign = await app(st, () => ({ g: window.__app.store.all('grades').length, m: window.__app.store.all('materials').length, s: window.__app.store.all('sheets').length }));
const fileForeign = await st.evaluate(async (sb) => (await fetch(sb + '/storage/v1/object/authenticated/materials/11111111-1111-1111-1111-111111111111/f-test', { headers: { Authorization: 'Bearer tok-22222222-2222-2222-2222-222222222222', apikey: 'x' } })).status, SB);
check('Fremder Benutzer sieht keine Noten, Lernzettel oder Materialien', foreign.g === 0 && foreign.m === 0 && foreign.s === 0, JSON.stringify(foreign));
check('Fremder Benutzer kann die Datei nicht herunterladen', fileForeign === 404, String(fileForeign));
const wrong = await (await fetch(SB + '/auth/v1/token?grant_type=password', { method: 'POST', body: JSON.stringify({ email: 'rafael@test.de', password: 'falsch' }) })).status;
check('Falsches Passwort wird abgelehnt', wrong === 400);

console.log(errors.length ? '\nBrowser-Fehler:\n' + errors.join('\n') : '\nKeine Browser-Fehler.');
console.log(`\n${ok} bestanden, ${fail} fehlgeschlagen`);
await pc.close(); await b2.close();
process.exit(fail || errors.length ? 1 : 0);
