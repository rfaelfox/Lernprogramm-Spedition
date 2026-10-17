import * as store from '../store.js';
import * as C from '../content.js';
import * as L from '../learning.js';
import { esc, fmtDate, fmtDateTime, debounce } from '../util.js';
import { md } from '../md.js';
import { icon, toast, confirmDanger, safe } from '../ui.js';
import { generateSheet, sheetToUnit } from '../sheetgen.js';

export async function render(el, ctx) {
  const [a] = ctx.args;
  if (a === 'neu') return create(el, ctx);
  if (a) return view(el, ctx, a);
  return list(el, ctx);
}

function list(el, { app, query }) {
  app.title('Lernzettel');
  const q = (query.get('q') || '').toLowerCase();
  const area = query.get('area') || '';
  const fav = query.get('fav') === '1';
  const sheets = store.all('sheets').filter((s) => (!area || s.area === area) && (!fav || s.favorite) && (!q || (s.title + ' ' + (cur(s)?.md || '')).toLowerCase().includes(q))).sort((a, b) => (b.favorite ? 1 : 0) - (a.favorite ? 1 : 0) || b.updatedAt.localeCompare(a.updatedAt));
  const areas = C.areas.filter((a) => store.all('sheets').some((s) => s.area === a.id));
  el.innerHTML = `<div class="row between"><h1>Lernzettel</h1><a class="btn primary" href="#/lernzettel/neu">${icon('plus')} Lernzettel erstellen</a></div>
    <div class="card flat no-print"><div class="row"><input type="search" id="q" placeholder="Lernzettel durchsuchen …" value="${esc(q)}" style="flex:1;min-width:200px"><select id="area" style="width:auto"><option value="">alle Bereiche</option>${areas.map((a) => `<option value="${a.id}" ${a.id === area ? 'selected' : ''}>${esc(C.areaLabel(a))}</option>`).join('')}</select><button class="chip ${fav ? 'on' : ''}" id="fav">${icon('star')} Favoriten</button></div></div>
    <div class="grid" style="margin-top:16px">${sheets.map((s) => `<a class="card link" href="#/lernzettel/${s.id}"><div class="row between"><span class="small muted">${esc(C.areaLabel(C.areaById.get(s.area)) || 'gemischt')}</span>${s.favorite ? `<span style="color:var(--warn)">${icon('star')}</span>` : ''}</div><b>${esc(s.title)}</b><p class="small muted" style="margin:6px 0 0">Version ${s.current + 1} von ${s.versions.length} · ${fmtDateTime(s.updatedAt)}</p><div class="row small" style="margin-top:6px">${s.edited ? '<span class="badge accent">von dir bearbeitet</span>' : '<span class="badge ok">aus geprüften Inhalten</span>'}${s.materials?.length ? '<span class="badge warn">mit eigenen Materialien</span>' : ''}</div></a>`).join('') || '<p class="muted">Noch keine Lernzettel. Erstelle deinen ersten aus dem Themenbaum.</p>'}</div>`;
  const nav = () => { const p = new URLSearchParams(); const v = el.querySelector('#q').value; if (v) p.set('q', v); if (el.querySelector('#area').value) p.set('area', el.querySelector('#area').value); if (el.querySelector('#fav').classList.contains('on')) p.set('fav', '1'); sessionStorage.setItem('noScroll', '1'); location.hash = '#/lernzettel?' + p; };
  el.querySelector('#q').addEventListener('input', debounce(nav, 500));
  el.querySelector('#area').onchange = nav;
  el.querySelector('#fav').onclick = () => { el.querySelector('#fav').classList.toggle('on'); nav(); };
  if (q) { const i = el.querySelector('#q'); i.focus(); i.setSelectionRange(i.value.length, i.value.length); }
}
const cur = (s) => s.versions?.[s.current];

function create(el, { app, query }) {
  app.title('Lernzettel erstellen');
  const pre = query.get('area');
  const selected = new Set(pre ? C.unitsOfArea(pre).map((u) => u.id) : []);
  const mats = store.all('materials');
  const withUnits = C.areas.filter((a) => C.unitsOfArea(a.id).filter((u) => !u.custom).length);
  el.innerHTML = `<h1>Lernzettel erstellen</h1>
    <div class="note small">Diese Funktion stellt einen Lernzettel aus den <b>vorhandenen, geprüften Lerninhalten</b> und optional aus deinen Materialien zusammen. Das ist keine freie KI-Generierung. Du kannst alles vor dem Speichern bearbeiten.</div>
    <div class="card stack">
      <div class="field"><label for="t">Thema oder Titel</label><input id="t" type="text" placeholder="z. B. Lernfeld 3: Buchungssätze, Vorsteuer und Umsatzsteuer"><div class="hint">Tippe Themen ein, dann schlage ich passende Lerneinheiten vor, oder wähle sie unten im Themenbaum.</div><div id="sugg" class="chips" style="margin-top:8px"></div></div>
      <div><label>Themen aus dem Themenbaum</label><div class="tree">${withUnits.map((a) => `<details ${C.unitsOfArea(a.id).some((u) => selected.has(u.id)) ? 'open' : ''}><summary><b>${esc(C.areaLabel(a))}</b>&nbsp;<span class="muted small">${esc(a.title)}</span></summary><div class="topic">${a.topics.map((tp) => C.unitsOfTopic(tp.id).map((u) => `<label class="check"><input type="checkbox" data-u="${u.id}" ${selected.has(u.id) ? 'checked' : ''}> ${esc(tp.title)}: ${esc(u.title)}</label>`).join('')).join('')}</div></details>`).join('')}</div></div>
      <div class="form-grid">
        <div class="field"><label for="len">Umfang</label><select id="len"><option value="kurz">kurz</option><option value="mittel" selected>mittel</option><option value="ausfuehrlich">ausführlich</option></select></div>
        <div class="field"><label for="foc">Schwerpunkt</label><select id="foc"><option value="grundlagen">Grundlagen</option><option value="pruefung">Prüfungsvorbereitung</option></select></div>
        <div class="field"><label for="ed">Termin der Klassenarbeit (optional)</label><input id="ed" type="date"></div>
        <div class="field"><label for="es">Themenumfang der Arbeit (optional)</label><input id="es" type="text" placeholder="z. B. Kapitel 3–5"></div>
      </div>
      <label class="check"><input type="checkbox" id="ex" checked> Übungsaufgaben mit getrenntem Lösungsteil</label>
      ${mats.length ? `<div><label>Eigene Materialien als Grundlage (optional)</label><div class="chips">${mats.map((m) => `<button type="button" class="chip" data-m="${m.id}" aria-pressed="false">${esc(m.title)}</button>`).join('')}</div></div>` : ''}
      <div class="row"><button class="btn primary" id="gen">Lernzettel zusammenstellen</button><span class="small muted" id="cnt"></span></div>
    </div><div id="editor"></div>`;
  const cnt = () => { el.querySelector('#cnt').textContent = `${selected.size} Lerneinheit(en) ausgewählt`; };
  el.querySelectorAll('[data-u]').forEach((c) => c.onchange = () => { c.checked ? selected.add(c.dataset.u) : selected.delete(c.dataset.u); cnt(); });
  const matSel = new Set(query.get('mat') ? [query.get('mat')] : []);
  el.querySelectorAll('[data-m]').forEach((b) => b.setAttribute('aria-pressed', matSel.has(b.dataset.m)));
  el.querySelectorAll('[data-m]').forEach((b) => b.onclick = () => { matSel.has(b.dataset.m) ? matSel.delete(b.dataset.m) : matSel.add(b.dataset.m); b.setAttribute('aria-pressed', matSel.has(b.dataset.m)); });
  el.querySelector('#t').addEventListener('input', debounce(() => {
    const words = el.querySelector('#t').value.toLowerCase().split(/[\s,;:]+/).filter((w) => w.length > 3);
    const hits = C.allUnits().filter((u) => !u.custom).map((u) => ({ u, s: words.filter((w) => (u.title + ' ' + (C.topicById.get(u.topic)?.title || '') + ' ' + (u.terms || []).map((t) => t.term).join(' ')).toLowerCase().includes(w)).length })).filter((x) => x.s).sort((a, b) => b.s - a.s).slice(0, 6);
    el.querySelector('#sugg').innerHTML = hits.map((h) => `<button type="button" class="chip" data-add="${h.u.id}">${selected.has(h.u.id) ? '✓ ' : '+ '}${esc(h.u.title)}</button>`).join('') + (words.length && !hits.length ? '<span class="small muted">Keine ausgearbeitete Lerneinheit gefunden. Wähle im Themenbaum oder nutze eigene Materialien.</span>' : '');
    el.querySelectorAll('[data-add]').forEach((b) => b.onclick = () => { selected.add(b.dataset.add); const c = el.querySelector(`[data-u="${b.dataset.add}"]`); if (c) { c.checked = true; c.closest('details').open = true; } b.textContent = '✓ ' + C.unitById.get(b.dataset.add).title; cnt(); });
  }, 300));
  cnt();
  el.querySelector('#gen').onclick = () => {
    if (!selected.size && !matSel.size) { toast('Bitte mindestens eine Lerneinheit oder ein Material auswählen.', 'bad'); return; }
    const ids = C.allUnits().filter((u) => selected.has(u.id)).map((u) => u.id); // Reihenfolge wie im Lehrplan
    const opts = { unitIds: ids, title: el.querySelector('#t').value.trim(), length: el.querySelector('#len').value, focus: el.querySelector('#foc').value, exercises: el.querySelector('#ex').checked, materialIds: [...matSel], exam: { date: el.querySelector('#ed').value, scope: el.querySelector('#es').value } };
    const text = generateSheet(opts);
    const firstUnit = C.unitById.get(ids[0]);
    editor(el.querySelector('#editor'), { title: opts.title || ids.map((id) => C.unitById.get(id).title).slice(0, 3).join(', ') || 'Lernzettel', md: text, area: firstUnit?.area, topic: firstUnit?.topic, units: ids, materials: [...matSel], options: opts }, null);
    el.querySelector('#editor').scrollIntoView({ behavior: 'smooth' });
  };
}

// Editor mit Live-Vorschau; sheet = vorhandener Lernzettel (oder null für neu)
function editor(box, draft, sheet) {
  box.innerHTML = `<div class="card" style="margin-top:16px"><div class="row between"><h2>Bearbeiten und speichern</h2><span class="small muted">Links bearbeiten, rechts Vorschau</span></div>
    <div class="field"><label for="st">Titel</label><input id="st" type="text" value="${esc(draft.title)}"></div>
    <div class="editor-split"><textarea id="src" aria-label="Lernzettel-Text (Markdown)">${esc(draft.md)}</textarea><div class="sheet-preview prose" id="pv"></div></div>
    <div class="row" style="margin-top:12px">${sheet ? `<button class="btn primary" id="saveNew">Als neue Version speichern</button><button class="btn" id="save">Diese Version überschreiben</button>` : `<button class="btn primary" id="save">Lernzettel speichern</button>`}<button class="btn ghost" id="cancel">Abbrechen</button></div>
    <p class="small muted">Formatierung: # Überschrift, **fett**, - Liste, | Tabelle |. Vor dem Speichern ist nichts dauerhaft abgelegt.</p></div>`;
  const src = box.querySelector('#src'), pv = box.querySelector('#pv');
  const upd = () => { pv.innerHTML = md(src.value, 0); };
  src.addEventListener('input', debounce(upd, 200)); upd();
  const doSave = (asNew) => safe(async () => {
    const title = box.querySelector('#st').value.trim() || 'Lernzettel';
    const text = src.value;
    let s;
    if (!sheet) s = await store.put('sheets', { title, area: draft.area, topic: draft.topic, units: draft.units, materials: draft.materials, options: draft.options, favorite: false, edited: text !== draft.md, versions: [{ md: text, at: new Date().toISOString(), note: 'Erstellt' }], current: 0 });
    else {
      const versions = [...sheet.versions];
      if (asNew) versions.push({ md: text, at: new Date().toISOString(), note: 'Überarbeitet' });
      else versions[sheet.current] = { ...versions[sheet.current], md: text, at: new Date().toISOString() };
      s = await store.put('sheets', { ...sheet, title, versions, current: asNew ? versions.length - 1 : sheet.current, edited: true });
    }
    location.hash = '#/lernzettel/' + s.id;
  }, 'Lernzettel gespeichert');
  box.querySelector('#save').onclick = () => doSave(false);
  box.querySelector('#saveNew')?.addEventListener('click', () => doSave(true));
  box.querySelector('#cancel').onclick = () => { if (sheet) location.hash = '#/lernzettel/' + sheet.id; else box.innerHTML = ''; };
}

function view(el, { app, query }, id) {
  const s = store.get('sheets', id);
  if (!s) { el.innerHTML = '<p>Lernzettel nicht gefunden.</p>'; return; }
  app.title(s.title);
  L.addRecent({ kind: 'sheet', ref: s.id, title: s.title });
  const vi = query.get('v') != null ? Number(query.get('v')) : s.current;
  const v = s.versions[vi] || cur(s);
  el.innerHTML = `<div class="row between no-print"><p class="small muted" style="margin:0"><a href="#/lernzettel">Lernzettel</a> › ${esc(s.title)}</p>
    <div class="row"><button class="btn icon" id="fav" aria-pressed="${!!s.favorite}" aria-label="Favorit" style="${s.favorite ? 'color:var(--warn)' : ''}">${icon('star')}</button>
    <button class="btn" id="edit">${icon('edit')} Bearbeiten</button><button class="btn" id="print">${icon('print')} Drucken / PDF</button><button class="btn" id="cards">${icon('cards')} Karteikarten & Quiz</button><button class="btn icon danger" id="del" aria-label="Löschen">${icon('trash')}</button></div></div>
    <div class="row small no-print" style="margin:10px 0">${s.edited ? '<span class="badge accent">von dir bearbeitet</span>' : '<span class="badge ok">aus geprüften Inhalten zusammengestellt</span>'}${s.materials?.length ? '<span class="badge warn">enthält ungeprüfte Auszüge aus eigenen Materialien</span>' : ''}<label class="row" style="margin:0;font-weight:400">Version <select id="ver" style="width:auto;min-height:34px">${s.versions.map((x, i) => `<option value="${i}" ${i === vi ? 'selected' : ''}>${i + 1} · ${fmtDateTime(x.at)}${i === s.current ? ' (aktuell)' : ''}</option>`).join('')}</select></label>${vi !== s.current ? '<button class="btn small" id="restore">Diese Version wiederherstellen</button>' : ''}</div>
    <p class="small muted no-print">Tipp für PDF: Im Druckdialog als Drucker „Als PDF speichern“ (Windows) bzw. am iPhone „Teilen → Drucken“ und dann erneut „Teilen → In Dateien sichern“ wählen.</p>
    <article class="sheet-preview prose" id="doc">${md(v.md, 0)}</article><div id="editor"></div>`;
  el.querySelector('#ver').onchange = (e) => { location.hash = `#/lernzettel/${s.id}?v=${e.target.value}`; };
  el.querySelector('#restore')?.addEventListener('click', () => safe(async () => { await store.put('sheets', { ...s, current: vi }); location.hash = '#/lernzettel/' + s.id; }, 'Version wiederhergestellt'));
  el.querySelector('#fav').onclick = () => safe(async () => { await store.put('sheets', { ...s, favorite: !s.favorite }); view(el, { app, query }, id); });
  el.querySelector('#print').onclick = () => {
    // Lösungsteil auf neuer Seite beginnen
    el.querySelectorAll('#doc h3, #doc h4').forEach((h) => { if (/^Lösungen$/.test(h.textContent)) h.classList.add('print-break'); });
    window.print();
  };
  el.querySelector('#edit').onclick = () => { el.querySelector('#doc').hidden = true; editor(el.querySelector('#editor'), { title: s.title, md: v.md }, { ...s, current: vi }); };
  el.querySelector('#del').onclick = async () => { if (await confirmDanger('Lernzettel löschen?', `„${s.title}“ mit allen ${s.versions.length} Versionen wird gelöscht.`)) { await safe(() => store.remove('sheets', s.id), 'Lernzettel gelöscht'); const cu = store.get('customunits', 'eigen-' + s.id); if (cu) await store.remove('customunits', cu.id); location.hash = '#/lernzettel'; } };
  el.querySelector('#cards').onclick = () => safe(async () => {
    const unit = sheetToUnit(s, v.md);
    if (!unit.flashcards.length && !unit.tasks.length) { toast('Im Lernzettel wurden keine Fachbegriff-Tabelle und keine Kontrollfragen gefunden.', 'bad'); return; }
    await store.put('customunits', unit);
    C.rebuildAreas();
    await L.markOpened(C.unitById.get(unit.id));
    toast(`${unit.flashcards.length} Karteikarten und ${unit.tasks.length} Quizfragen erstellt.`, 'ok');
    location.hash = unit.tasks.length ? `#/ueben?unit=${unit.id}&quiz=1` : `#/karten/session?unit=${unit.id}`;
  });
}
