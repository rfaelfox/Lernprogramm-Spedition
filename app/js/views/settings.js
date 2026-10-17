import * as store from '../store.js';
import * as C from '../content.js';
import * as L from '../learning.js';
import * as sync from '../sync.js';
import { idb } from '../db.js';
import { esc, fmtDateTime, download, todayISO, addDays, uid } from '../util.js';
import { icon, toast, confirmDanger, dialog, safe } from '../ui.js';
import { applyTheme, setupSync } from '../main.js';
import { VERSION } from '../../version.js';
import config from '../../config.js';

const PAGES = [['allgemein', 'Allgemein'], ['daten', 'Daten & Backup'], ['sync', 'Synchronisation'], ['faecher', 'Fächer'], ['meldungen', 'Gemeldete Fehler'], ['ki', 'KI'], ['info', 'Installation & Hilfe']];

export async function render(el, ctx) {
  const page = ctx.args[0] || 'allgemein';
  ctx.app.title('Einstellungen');
  el.innerHTML = `<h1>Einstellungen</h1><div class="tabs">${PAGES.map(([k, l]) => `<button data-p="${k}" aria-selected="${k === page}">${l}</button>`).join('')}</div><div id="pg"></div>`;
  el.querySelectorAll('[data-p]').forEach((b) => b.onclick = () => { location.hash = '#/einstellungen/' + b.dataset.p; });
  const pg = el.querySelector('#pg');
  const again = () => render(el, ctx);
  ({ allgemein, daten, sync: syncPage, faecher, meldungen, ki, info })[page]?.(pg, again);
}

function allgemein(pg, again) {
  const s = store.settings();
  pg.innerHTML = `<div class="card"><div class="form-grid">
    <div class="field"><label>Dein Name</label><input id="name" value="${esc(s.name)}"></div>
    <div class="field"><label>Schule</label><input id="school" value="${esc(s.school)}"></div>
    <div class="field"><label>Aktuelles Ausbildungsjahr</label><select id="ty">${[1, 2, 3].map((y) => `<option ${y === Number(s.trainingYear) ? 'selected' : ''}>${y}</option>`).join('')}</select></div>
    <div class="field"><label>Schuljahr</label><input id="sy" value="${esc(s.schoolYear)}"></div>
    <div class="field"><label>Ausbildungsbeginn</label><input id="ts" type="date" value="${esc(s.trainingStart)}"></div>
    <div class="field"><label>Voraussichtliches Ende</label><input id="te" type="date" value="${esc(s.trainingEnd)}"></div>
    <div class="field"><label>Darstellung</label><select id="theme"><option value="auto" ${s.theme === 'auto' ? 'selected' : ''}>wie Gerät</option><option value="light" ${s.theme === 'light' ? 'selected' : ''}>hell</option><option value="dark" ${s.theme === 'dark' ? 'selected' : ''}>dunkel</option></select></div>
    <div class="field"><label>Notentendenz „+/−“</label><select id="tend">${[0.25, 0.3, 0.33].map((v) => `<option value="${v}" ${v === Number(s.gradeTendency) ? 'selected' : ''}>± ${String(v).replace('.', ',')}</option>`).join('')}</select><div class="hint">Annahme. Bitte an die Regel deiner Schule anpassen.</div></div>
  </div>
  <label class="check"><input type="checkbox" id="motion" ${s.reduceMotion ? 'checked' : ''}> Animationen reduzieren</label>
  <label class="check"><input type="checkbox" id="gam" ${s.gamification ? 'checked' : ''}> Spielerische Elemente (Wochenziel-Ring, Erfolge)</label>
  <label class="check"><input type="checkbox" id="streak" ${s.streak ? 'checked' : ''}> Lernserie anzeigen</label>
  <button class="btn primary" id="save" style="margin-top:10px">Speichern</button></div>`;
  pg.querySelector('#save').onclick = () => safe(async () => {
    const v = (id) => pg.querySelector('#' + id).value;
    await store.saveSettings({ name: v('name'), school: v('school'), trainingYear: Number(v('ty')), schoolYear: v('sy'), trainingStart: v('ts'), trainingEnd: v('te'), theme: v('theme'), gradeTendency: Number(v('tend')), reduceMotion: pg.querySelector('#motion').checked, gamification: pg.querySelector('#gam').checked, streak: pg.querySelector('#streak').checked });
    applyTheme();
  }, 'Einstellungen gespeichert');
}

async function daten(pg, again) {
  const est = await store.storageEstimate();
  const counts = Object.fromEntries(store.COLLECTIONS.map((c) => [c, store.all(c).length]));
  const files = await idb.allFiles();
  const conflicts = store.all('conflicts').sort((a, b) => b.at.localeCompare(a.at));
  const lastBackup = await idb.getMeta('backup.last');
  const demo = store.all('grades').some((g) => g.demo) || store.all('exams').some((e) => e.demo);
  pg.innerHTML = `
  <div class="card"><h2>Speicherstatus</h2>
    <p>${store.saveState.error ? `<span class="badge bad">Fehler</span> ${esc(store.saveState.error)}` : `<span class="badge ok">OK</span> Zuletzt lokal gespeichert: ${fmtDateTime(store.saveState.lastSaved) || 'in dieser Sitzung noch nichts geändert'}`}</p>
    <p class="small">Dauerhafter Speicher: ${store.saveState.persisted ? '<b>vom Browser zugesichert</b>' : '<b>nicht zugesichert</b>. Der Browser könnte Daten bei Speichermangel löschen. Installiere die App (Startbildschirm/App-Fenster) und mache regelmäßig Backups.'}</p>
    ${est ? `<p class="small muted">Belegt: ${(est.usage / 1024 / 1024).toFixed(1)} MB von verfügbaren ${(est.quota / 1024 / 1024 / 1024).toFixed(1)} GB</p>` : ''}
    <p class="small muted">${counts.grades} Noten · ${counts.sheets} Lernzettel · ${counts.materials} Materialien (${files.length} Dateien) · ${counts.taskstats} bearbeitete Aufgaben · ${counts.cards} Karteikarten im Lernstand · ${counts.exams} Termine</p></div>

  <div class="card" style="margin-top:16px"><h2>Backup, Export und Wiederherstellung</h2>
    <p class="small">Letztes Backup: <b>${lastBackup ? fmtDateTime(lastBackup) : 'noch keins'}</b>. Die Backup-Datei enthält alle deine Daten einschließlich Materialien. Bewahre sie an einem sicheren Ort auf (z. B. OneDrive, USB-Stick).</p>
    <div class="row"><button class="btn primary" id="exp">Vollständiges Backup speichern</button><button class="btn" id="expSmall">Backup ohne Dateien</button><label class="btn" for="imp">Backup wiederherstellen …</label><input type="file" id="imp" accept=".json,application/json" hidden></div></div>

  <div class="card" style="margin-top:16px"><h2>Konflikte bei der Synchronisation (${conflicts.length})</h2>
    <p class="small muted">Wurde derselbe Eintrag auf zwei Geräten unterschiedlich geändert, wird der neuere Stand übernommen und der andere hier aufbewahrt. So geht nichts verloren.</p>
    ${conflicts.map((c) => `<details class="card flat" style="margin-bottom:8px"><summary>${esc(c.col)} · ${esc(c.recordId)} · ${fmtDateTime(c.at)} · Felder: ${esc(c.fields.join(', '))}</summary><div class="grid two" style="margin-top:8px"><div><b>Dieses Gerät</b><pre class="small" style="white-space:pre-wrap;max-height:240px;overflow:auto">${esc(JSON.stringify(c.local, null, 1))}</pre><button class="btn small" data-use="${c.id}" data-side="local">Diesen Stand verwenden</button></div><div><b>Anderes Gerät</b><pre class="small" style="white-space:pre-wrap;max-height:240px;overflow:auto">${esc(JSON.stringify(c.remote, null, 1))}</pre><button class="btn small" data-use="${c.id}" data-side="remote">Diesen Stand verwenden</button></div></div><button class="btn small ghost" data-dismiss="${c.id}">Erledigt, Hinweis entfernen</button></details>`).join('') || '<p class="muted small">Keine Konflikte.</p>'}</div>

  <div class="card" style="margin-top:16px"><h2>Beispieldaten</h2>
    <p class="small">Beispieldaten sind überall mit <span class="badge demo">Beispiel</span> gekennzeichnet und lassen sich mit einem Klick entfernen.</p>
    <div class="row">${demo ? '<button class="btn danger" id="demoDel">Beispieldaten entfernen</button>' : '<button class="btn" id="demoAdd">Beispieldaten zum Ausprobieren anlegen</button>'}</div></div>

  <div class="card" style="margin-top:16px"><h2>Übungsergebnisse zurücksetzen</h2>
    <p class="small">Setzt Aufgabenergebnisse, Karteikarten-Fortschritt und Fehlerheft eines Bereichs zurück. <b>Noten, Lernzettel, Materialien und Notizen bleiben erhalten.</b></p>
    <div class="row"><select id="resetArea" style="width:auto"><option value="">– Bereich wählen –</option>${C.areas.filter((a) => C.unitsOfArea(a.id).length).map((a) => `<option value="${a.id}">${esc(C.areaFull(a))}</option>`).join('')}<option value="*">Alle Bereiche</option></select><button class="btn danger" id="reset">Zurücksetzen</button></div></div>

  <div class="card" style="margin-top:16px;border-color:var(--bad)"><h2>Alle Daten auf diesem Gerät löschen</h2>
    <p class="small">Löscht alles auf diesem Gerät. Ist die Synchronisation aktiv, bleiben die Daten online erhalten und werden bei der nächsten Anmeldung wieder geladen. Vorher ein Backup machen!</p>
    <button class="btn danger" id="wipe">Alles auf diesem Gerät löschen</button></div>`;

  const doExport = async (includeFiles) => safe(async () => {
    const data = await store.exportAll({ includeFiles });
    download(`lernprogramm-backup-${todayISO()}${includeFiles ? '' : '-ohne-dateien'}.json`, JSON.stringify(data));
    await idb.setMeta('backup.last', new Date().toISOString());
    setTimeout(again, 300);
  }, 'Backup erstellt. Bitte die Datei an einem sicheren Ort ablegen.');
  pg.querySelector('#exp').onclick = () => doExport(true);
  pg.querySelector('#expSmall').onclick = () => doExport(false);
  pg.querySelector('#imp').onchange = async (e) => {
    const f = e.target.files?.[0]; if (!f) return;
    let obj; try { obj = JSON.parse(await f.text()); } catch { toast('Die Datei ist kein gültiges Backup.', 'bad'); return; }
    if (obj.app !== 'lernprogramm-spedition') { toast('Diese Datei ist keine Sicherung dieses Lernprogramms.', 'bad'); return; }
    const r = await dialog({ title: 'Backup wiederherstellen', body: `<p>Backup vom <b>${fmtDateTime(obj.exportedAt)}</b> mit ${obj.records.length} Einträgen und ${(obj.files || []).length} Dateien.</p><label class="check"><input type="radio" name="mode" value="merge" checked> <span><b>Zusammenführen</b>: Neuere Stände gewinnen, nichts wird gelöscht (empfohlen)</span></label><label class="check"><input type="radio" name="mode" value="replace"> <span><b>Ersetzen</b>: Alle aktuellen Daten auf diesem Gerät werden durch das Backup ersetzt</span></label>`, actions: [{ label: 'Abbrechen', value: 'no' }, { label: 'Wiederherstellen', value: 'yes', primary: true }] });
    if (r.value !== 'yes') return;
    const mode = r.data.get('mode');
    if (mode === 'replace' && !await confirmDanger('Wirklich ersetzen?', 'Alle aktuellen Daten auf diesem Gerät werden durch das Backup ersetzt.', 'Ersetzen', 'ERSETZEN')) return;
    const res = await safe(() => store.importAll(obj, mode));
    if (res) { C.rebuildAreas(); toast(`${res.imported} Einträge wiederhergestellt, ${res.skipped} übersprungen (bereits aktueller).`, 'ok'); again(); }
  };
  pg.querySelectorAll('[data-use]').forEach((b) => b.onclick = () => safe(async () => {
    const c = store.get('conflicts', b.dataset.use); const data = b.dataset.side === 'local' ? c.local : c.remote;
    if (data) await store.put(c.col, { ...data }); else await store.remove(c.col, c.recordId);
    await store.remove('conflicts', c.id); again();
  }, 'Übernommen'));
  pg.querySelectorAll('[data-dismiss]').forEach((b) => b.onclick = () => safe(async () => { await store.remove('conflicts', b.dataset.dismiss); again(); }));
  pg.querySelector('#demoAdd')?.addEventListener('click', () => safe(async () => { await addDemo(); again(); }, 'Beispieldaten angelegt'));
  pg.querySelector('#demoDel')?.addEventListener('click', () => safe(async () => {
    await store.removeMany('grades', store.all('grades').filter((g) => g.demo).map((g) => g.id));
    await store.removeMany('exams', store.all('exams').filter((g) => g.demo).map((g) => g.id));
    again();
  }, 'Beispieldaten entfernt'));
  pg.querySelector('#reset').onclick = async () => {
    const a = pg.querySelector('#resetArea').value; if (!a) { toast('Bitte einen Bereich wählen.'); return; }
    const ids = (a === '*' ? C.allUnits() : C.unitsOfArea(a)).map((u) => u.id);
    if (!await confirmDanger('Übungsergebnisse zurücksetzen?', `Aufgabenergebnisse, Karteikarten-Fortschritt und Fehlerheft für ${a === '*' ? 'alle Bereiche' : C.areaLabel(C.areaById.get(a))} werden gelöscht. Noten und Materialien bleiben.`, 'Zurücksetzen')) return;
    const r = await safe(() => L.resetPractice({ unitIds: ids }));
    if (r) toast(`${r.tasks} Aufgabenergebnisse, ${r.cards} Karten und ${r.mistakes} Fehlerheft-Einträge zurückgesetzt.`, 'ok');
  };
  pg.querySelector('#wipe').onclick = async () => {
    if (!await confirmDanger('Alles löschen?', 'Alle Daten auf diesem Gerät werden unwiderruflich gelöscht.', 'Endgültig löschen', 'LÖSCHEN')) return;
    await safe(async () => { await store.wipeAll(); await idb.setMeta('sync.lastRev', 0); location.reload(); });
  };
}

async function addDemo() {
  const t = todayISO();
  const demo = [
    { subject: 'LF04', title: 'Klassenarbeit Frachtrecht', date: addDays(t, -120), category: 'Klassenarbeit', grade: 2.3 },
    { subject: 'LF04', title: 'Test Verkehrsträger', date: addDays(t, -90), category: 'Test', grade: 1.7 },
    { subject: 'LF03', title: 'Klassenarbeit Buchführung', date: addDays(t, -100), category: 'Klassenarbeit', grade: 3.0, points: 68, maxPoints: 100 },
    { subject: 'WISO', title: 'Mündliche Note 1. Hj.', date: addDays(t, -60), category: 'mündlich', grade: 2.0 }
  ];
  for (const g of demo) await store.put('grades', { ...g, term: 'Beispiel', demo: true });
  await store.put('exams', { title: 'Beispiel: Klassenarbeit LF 7', kind: 'Klassenarbeit', date: addDays(t, 12), areas: ['LF07'], topics: [], demo: true });
}

async function syncPage(pg, again) {
  const a = sync.getAdapter();
  const url = (await idb.getMeta('sync.url')) || '';
  const key = (await idb.getMeta('sync.key')) || '';
  const y = sync.syncState;
  const configured = !!a;
  pg.innerHTML = `<div class="card"><h2>Status</h2>
    <p>${!configured ? '<span class="badge">nicht eingerichtet</span> Die App speichert nur auf diesem Gerät.' : !a.ready() ? '<span class="badge warn">nicht angemeldet</span> Melde dich an, um zu synchronisieren.' : `<span class="badge ${y.status === 'fehler' ? 'bad' : 'ok'}">${y.status === 'fehler' ? 'Fehler' : 'angemeldet'}</span> als <b>${esc(a.user()?.email || '')}</b>`}</p>
    ${configured && a.ready() ? `<p class="small">Letzte erfolgreiche Synchronisation: <b>${y.lastSync ? fmtDateTime(y.lastSync) : 'noch keine'}</b> · Noch nicht hochgeladene Änderungen: <b>${y.pendingCount}</b>${y.error ? `<br><span class="pill-bad">${esc(y.error)}</span>` : ''}</p><div class="row"><button class="btn primary" id="now">${icon('sync')} Jetzt synchronisieren</button><button class="btn" id="out">Abmelden</button></div>` : ''}
    <p class="small muted" style="margin-top:10px">Synchronisiert wird beim Start, nach Änderungen, alle 5 Minuten und wenn die Verbindung zurückkommt. Am iPhone nur, während die App geöffnet ist.</p></div>
    ${configured && !a.ready() ? `<div class="card" style="margin-top:16px"><h2>Anmelden</h2><div class="form-grid"><div class="field"><label for="em">E-Mail</label><input id="em" type="email" autocomplete="username"></div><div class="field"><label for="pw">Passwort</label><input id="pw" type="password" autocomplete="current-password"></div></div><button class="btn primary" id="in">Anmelden</button><p class="small muted">Das Konto legst du einmalig im Supabase-Dashboard an (siehe Anleitung). Das Passwort wird nicht gespeichert, nur ein Anmelde-Token auf diesem Gerät.</p></div>` : ''}
    <details class="card" style="margin-top:16px" ${!configured ? 'open' : ''}><summary><b>Verbindung (Supabase)</b></summary>
      <p class="small muted">Normalerweise in der Datei <code>config.js</code> hinterlegt${config.supabaseUrl ? ' (ist hinterlegt)' : ' (dort noch leer)'}. Hier kannst du sie für dieses Gerät überschreiben.</p>
      <div class="field"><label for="u">Project URL</label><input id="u" type="url" value="${esc(url)}" placeholder="${esc(config.supabaseUrl || 'https://xxxx.supabase.co')}"></div>
      <div class="field"><label for="k">Publishable key (anon public)</label><input id="k" value="${esc(key)}" placeholder="${config.supabaseKey ? 'aus config.js' : 'sb_publishable_… oder eyJ…'}"><div class="hint">Nicht den „secret“/„service_role“-Schlüssel eintragen! Der gehört nie in eine App.</div></div>
      <button class="btn" id="saveConn">Verbindung speichern</button></details>`;
  pg.querySelector('#now')?.addEventListener('click', async () => { const r = await sync.syncNow(); if (r.ok) { toast(`Synchronisiert: ${r.pulled} empfangen, ${r.pushed} gesendet${r.conflicts ? `, ${r.conflicts} Konflikt(e) zusammengeführt` : ''}.`, 'ok'); C.rebuildAreas(); } else toast('Synchronisation fehlgeschlagen: ' + r.reason, 'bad'); again(); });
  pg.querySelector('#out')?.addEventListener('click', async () => { await a.signOut(); sync.syncState.status = 'aus'; again(); });
  pg.querySelector('#in')?.addEventListener('click', () => safe(async () => {
    await a.signIn(pg.querySelector('#em').value.trim(), pg.querySelector('#pw').value);
    sync.syncState.user = a.user();
    const r = await sync.syncNow({ reason: 'anmeldung' });
    if (!r.ok) throw new Error('Angemeldet, aber Synchronisation fehlgeschlagen: ' + r.reason);
    C.rebuildAreas(); again();
  }, 'Angemeldet und synchronisiert'));
  pg.querySelector('#saveConn').onclick = () => safe(async () => {
    const u = pg.querySelector('#u').value.trim(), k = pg.querySelector('#k').value.trim();
    if (/service_role|sb_secret_/.test(k)) throw new Error('Das ist ein geheimer Schlüssel. Bitte den Publishable/anon key verwenden.');
    await idb.setMeta('sync.url', u); await idb.setMeta('sync.key', k);
    await setupSync(); again();
  }, 'Verbindung gespeichert');
}

function faecher(pg, again) {
  const subs = store.all('subjects').filter((s) => s.custom);
  pg.innerHTML = `<div class="card"><h2>Weitere Fächer aus dem Stundenplan</h2><p class="small muted">Lernfelder 1–15 und WiSo sind fest hinterlegt. Ergänze hier weitere Fächer (z. B. Deutsch, Englisch, Religion, Sport) mit eigenen Themen. Sie erscheinen in Lernen, Noten, Terminen und Materialien.</p>
    ${subs.map((s) => `<div class="row between" style="padding:8px 0;border-bottom:1px solid var(--line)"><span><b>${esc(s.title)}</b><br><span class="small muted">${(s.topics || []).map((t) => esc(t.title)).join(', ') || 'keine Themen'}</span></span><span class="row"><button class="btn small" data-edit="${s.id}">${icon('edit')}</button><button class="btn small danger" data-del="${s.id}">${icon('trash')}</button></span></div>`).join('') || '<p class="muted">Noch keine eigenen Fächer.</p>'}
    <button class="btn primary" id="add" style="margin-top:12px">${icon('plus')} Fach hinzufügen</button></div>`;
  const edit = async (s) => {
    const r = await dialog({ title: s ? 'Fach bearbeiten' : 'Fach hinzufügen', body: `<div class="field"><label>Name des Fachs</label><input name="title" required value="${esc(s?.title || '')}" placeholder="z. B. Englisch"></div><div class="field"><label>Ausbildungsjahr</label><select name="year"><option value="0">jahrgangsübergreifend</option>${[1, 2, 3].map((y) => `<option value="${y}" ${Number(s?.year) === y ? 'selected' : ''}>${y}.</option>`).join('')}</select></div><div class="field"><label>Themen (eine Zeile je Thema)</label><textarea name="topics">${esc((s?.topics || []).map((t) => t.title).join('\n'))}</textarea></div>`, actions: [{ label: 'Abbrechen', value: 'no' }, { label: 'Speichern', value: 'ok', primary: true }] });
    if (r.value !== 'ok' || !String(r.data.get('title')).trim()) return;
    const old = s?.topics || [];
    const topics = String(r.data.get('topics')).split('\n').map((x) => x.trim()).filter(Boolean).map((title) => old.find((o) => o.title === title) || { id: uid('tp-'), title });
    await safe(() => store.put('subjects', { ...(s || { id: uid('fach-') }), custom: true, title: String(r.data.get('title')).trim(), year: Number(r.data.get('year')), topics }), 'Fach gespeichert');
    C.rebuildAreas(); again();
  };
  pg.querySelector('#add').onclick = () => edit(null);
  pg.querySelectorAll('[data-edit]').forEach((b) => b.onclick = () => edit(store.get('subjects', b.dataset.edit)));
  pg.querySelectorAll('[data-del]').forEach((b) => b.onclick = async () => {
    const s = store.get('subjects', b.dataset.del);
    const n = store.all('grades').filter((g) => g.subject === s.id).length;
    if (!await confirmDanger('Fach entfernen?', `„${s.title}“ wird entfernt.${n ? ` ${n} Note(n) dieses Fachs bleiben gespeichert, werden aber ohne Fach angezeigt.` : ''}`, 'Entfernen')) return;
    await safe(() => store.remove('subjects', s.id), 'Fach entfernt'); C.rebuildAreas(); again();
  });
}

function meldungen(pg, again) {
  const reps = store.all('reports').sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  pg.innerHTML = `<div class="card"><h2>Gemeldete Fehler im Lerninhalt (${reps.length})</h2><p class="small muted">Exportiere die Liste und gib sie an deinen Entwickler weiter (z. B. an Claude im Projekt), damit die Inhalte korrigiert werden.</p>
    ${reps.map((r) => `<div style="padding:8px 0;border-bottom:1px solid var(--line)"><div class="row between"><b>${esc(r.title)}</b><span class="badge ${r.status === 'erledigt' ? 'ok' : 'warn'}">${esc(r.status)}</span></div><p class="small" style="margin:4px 0"><b>Problem:</b> ${esc(r.what)}${r.fix ? `<br><b>Korrektur:</b> ${esc(r.fix)}` : ''}</p><div class="row small"><span class="muted">${fmtDateTime(r.createdAt)}</span><button class="btn small ghost" data-st="${r.id}">${r.status === 'erledigt' ? 'wieder öffnen' : 'als erledigt markieren'}</button><button class="btn small ghost" data-del="${r.id}">löschen</button></div></div>`).join('') || '<p class="muted">Keine Meldungen.</p>'}
    ${reps.length ? '<button class="btn" id="exp" style="margin-top:10px">Als Textdatei exportieren</button>' : ''}</div>`;
  pg.querySelectorAll('[data-st]').forEach((b) => b.onclick = () => safe(async () => { const r = store.get('reports', b.dataset.st); await store.put('reports', { ...r, status: r.status === 'erledigt' ? 'offen' : 'erledigt' }); again(); }));
  pg.querySelectorAll('[data-del]').forEach((b) => b.onclick = () => safe(async () => { await store.remove('reports', b.dataset.del); again(); }));
  pg.querySelector('#exp')?.addEventListener('click', () => download(`fehlermeldungen-${todayISO()}.txt`, reps.map((r) => `[${r.status}] ${r.title} (${r.kind}: ${r.ref})\nProblem: ${r.what}\nKorrektur: ${r.fix || '-'}\n`).join('\n'), 'text/plain;charset=utf-8'));
}

function ki(pg) {
  pg.innerHTML = `<div class="card"><h2>KI-Funktionen</h2><p><span class="badge">nicht eingerichtet</span></p>
    <p>Das Programm funktioniert vollständig ohne KI: Lernen, Üben mit regelbasierter Auswertung, Noten, Lernplan und das Zusammenstellen von Lernzetteln aus geprüften Inhalten.</p>
    <p>Eine KI-Anbindung (z. B. für frei formulierte Lernzettel oder die Bewertung von Freitext) ist vorbereitet, aber nicht aktiv. Sie würde einen kleinen Server-Dienst (z. B. eine Supabase Edge Function) brauchen, der den API-Schlüssel sicher verwahrt. Ein API-Schlüssel wird niemals in der App selbst gespeichert. Die Nutzung einer KI-API kostet Geld pro Anfrage.</p>
    <p class="small muted">Wichtig für später: Deine Dateien würden nur nach deiner ausdrücklichen Auswahl an den genannten Dienst gesendet. KI-Bewertungen würden als unsicher gekennzeichnet und durch Musterlösung und Selbstbewertung ergänzt.</p></div>`;
}

function info(pg) {
  pg.innerHTML = `<div class="card prose"><h2>App installieren</h2>
    <h3>Windows-PC (Edge oder Chrome)</h3><ol><li>Die Adresse der App öffnen.</li><li>In der Adressleiste auf das Symbol „App installieren“ klicken (oder Menü ⋯ → Apps → „Diese Website als App installieren“).</li><li>Die App erscheint im Startmenü und auf Wunsch auf dem Desktop und startet im eigenen Fenster.</li></ol>
    <h3>iPhone (Safari)</h3><ol><li>Die Adresse in <b>Safari</b> öffnen.</li><li>Auf „Teilen“ tippen (Quadrat mit Pfeil) → „Zum Home-Bildschirm“ → „Hinzufügen“.</li><li>Ab jetzt die App immer über das Symbol auf dem Home-Bildschirm starten. Nur so bleiben die Daten dauerhaft gespeichert und Erinnerungen sind möglich.</li></ol>
    <h3>Offline</h3><p>Nach dem ersten Öffnen mit Internet funktionieren alle Lerninhalte, Übungen, Noten und Lernzettel auch offline. Änderungen werden synchronisiert, sobald wieder eine Verbindung besteht und die App geöffnet ist. Die Texterkennung für Scans braucht beim ersten Mal Internet.</p>
    <p class="small muted">Version ${VERSION}</p></div>`;
}
