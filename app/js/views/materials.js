import * as store from '../store.js';
import * as C from '../content.js';
import * as L from '../learning.js';
import { idb } from '../db.js';
import { esc, fmtDate, fmtDateTime, debounce, uid } from '../util.js';
import { icon, toast, confirmDanger, safe, dialog } from '../ui.js';
import * as sync from '../sync.js';

// Bibliotheken werden nur bei Bedarf aus einem CDN geladen. Die Verarbeitung geschieht vollständig
// auf deinem Gerät, deine Dateien werden dabei NICHT hochgeladen.
const LIBS = {
  tesseract: 'https://cdn.jsdelivr.net/npm/tesseract.js@5.1.1/dist/tesseract.min.js',
  pdfjs: 'https://cdn.jsdelivr.net/npm/pdfjs-dist@4.10.38/build/pdf.min.mjs',
  pdfjsWorker: 'https://cdn.jsdelivr.net/npm/pdfjs-dist@4.10.38/build/pdf.worker.min.mjs',
  mammoth: 'https://cdn.jsdelivr.net/npm/mammoth@1.8.0/mammoth.browser.min.js'
};
const loadScript = (src) => new Promise((res, rej) => { if (document.querySelector(`script[src="${src}"]`)) return res(); const s = document.createElement('script'); s.src = src; s.onload = res; s.onerror = () => rej(new Error('Bibliothek konnte nicht geladen werden (offline?)')); document.head.appendChild(s); });
async function pdfjs() { const m = await import(LIBS.pdfjs); m.GlobalWorkerOptions.workerSrc = LIBS.pdfjsWorker; return m; }

const KIND = { original: ['Originalmaterial', 'accent'], note: ['Eigene Notiz', 'ok'], ki: ['KI-Inhalt', 'warn'] };
const kindBadge = (k) => `<span class="badge ${KIND[k]?.[1] || ''}">${KIND[k]?.[0] || k}</span>`;
const fileKind = (t, n) => /pdf/.test(t) || /\.pdf$/i.test(n) ? 'PDF' : /^image\//.test(t) ? 'Bild' : /word|officedocument/.test(t) || /\.docx$/i.test(n) ? 'Word' : /\.doc$/i.test(n) ? 'Word (alt)' : /^text\//.test(t) ? 'Text' : 'Datei';

export async function render(el, ctx) {
  if (ctx.args[0]) return detail(el, ctx, ctx.args[0]);
  return list(el, ctx);
}

function list(el, { app, query }) {
  app.title('Materialien');
  const q = (query.get('q') || '').toLowerCase();
  const area = query.get('area') || '';
  const mats = store.all('materials').filter((m) => (!area || m.area === area) && (!q || [m.title, m.ocrText, m.text, m.tags].join(' ').toLowerCase().includes(q))).sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
  const notes = store.all('notes').filter((n) => n.kind === 'unit' && (!q || (n.title + n.text).toLowerCase().includes(q)));
  el.innerHTML = `<div class="row between"><h1>Materialien & Notizen</h1><div class="row"><label class="btn primary" for="file">${icon('plus')} Dateien hinzufügen</label><input id="file" type="file" multiple accept=".pdf,.png,.jpg,.jpeg,.webp,.heic,.gif,.docx,.doc,.txt,image/*,application/pdf" hidden><button class="btn" id="note">${icon('edit')} Notiz</button></div></div>
    <p class="small muted">PDFs, Bilder (z. B. Fotos von Arbeitsblättern) und Word-Dateien (.docx) werden auf deinem Gerät gespeichert${sync.getAdapter()?.ready() ? ' und in deinem privaten Speicherbereich synchronisiert' : ''}. Sie werden nie an einen KI-Dienst gesendet.</p>
    <div class="card flat"><div class="row"><input type="search" id="q" placeholder="In Titeln und erkanntem Text suchen …" value="${esc(q)}" style="flex:1;min-width:200px"><select id="area" style="width:auto"><option value="">alle Bereiche</option>${C.areas.map((a) => `<option value="${a.id}" ${a.id === area ? 'selected' : ''}>${esc(C.areaLabel(a))}</option>`).join('')}</select></div></div>
    <div class="grid" style="margin-top:16px">${mats.map((m) => `<a class="card link" href="#/materialien/${m.id}"><div class="thumb" data-thumb="${m.fileId || ''}" data-type="${esc(m.fileType || '')}">${m.fileId ? esc(fileKind(m.fileType, m.fileName)) : 'Notiz'}</div><div class="row" style="margin-top:8px">${kindBadge(m.kind)}<span class="small muted">${esc(C.areaLabel(C.areaById.get(m.area)) || 'ohne Zuordnung')}</span></div><b>${esc(m.title)}</b>${q && (m.ocrText || m.text || '').toLowerCase().includes(q) ? `<p class="small search-hit">${hit(m.ocrText || m.text, q)}</p>` : ''}</a>`).join('') || '<p class="muted">Noch keine Materialien.</p>'}</div>
    ${notes.length ? `<h2 style="margin-top:22px">Notizen zu Lerneinheiten</h2><div class="card">${notes.map((n) => `<a class="row" style="padding:6px 0;text-decoration:none;color:inherit" href="#/lernen/einheit/${n.ref}?tab=notiz">${icon('edit')} ${esc(n.title)} <span class="small muted">${fmtDateTime(n.updatedAt)}</span></a>`).join('')}</div>` : ''}`;
  el.querySelectorAll('[data-thumb]').forEach(async (t) => {
    if (!t.dataset.thumb || !/^image\//.test(t.dataset.type)) return;
    const f = await idb.getFile(t.dataset.thumb);
    if (f) { const img = document.createElement('img'); img.className = 'thumb'; img.alt = ''; img.src = URL.createObjectURL(f.blob); t.replaceWith(img); }
  });
  const nav = () => { const p = new URLSearchParams(); if (el.querySelector('#q').value) p.set('q', el.querySelector('#q').value); if (el.querySelector('#area').value) p.set('area', el.querySelector('#area').value); sessionStorage.setItem('noScroll', '1'); location.hash = '#/materialien?' + p; };
  el.querySelector('#q').addEventListener('input', debounce(nav, 500));
  el.querySelector('#area').onchange = nav;
  if (q) { const i = el.querySelector('#q'); i.focus(); i.setSelectionRange(i.value.length, i.value.length); }
  el.querySelector('#file').onchange = async (e) => {
    const files = Array.from(e.target.files || []);
    let last = null;
    for (const f of files) {
      if (f.size > 50 * 1024 * 1024) { toast(`„${f.name}“ ist größer als 50 MB und wurde nicht übernommen.`, 'bad'); continue; }
      last = await safe(async () => {
        const fileId = uid('f-');
        await idb.putFile({ id: fileId, name: f.name, type: f.type, size: f.size, blob: f });
        return store.put('materials', { title: f.name.replace(/\.[^.]+$/, ''), kind: 'original', fileId, fileName: f.name, fileType: f.type, fileSize: f.size, area: area || '', topic: '', text: '', ocrText: '', pages: [] });
      });
    }
    if (last) { toast(`${files.length} Datei(en) gespeichert.`, 'ok'); location.hash = files.length === 1 ? '#/materialien/' + last.id : '#/materialien'; if (files.length > 1) list(el, { app, query }); }
  };
  el.querySelector('#note').onclick = () => safe(async () => { const m = await store.put('materials', { title: 'Neue Notiz', kind: 'note', text: '', area: area || '', topic: '' }); location.hash = '#/materialien/' + m.id + '?edit=1'; });
}

function hit(text, q) {
  const i = text.toLowerCase().indexOf(q);
  const s = Math.max(0, i - 50);
  return '…' + esc(text.slice(s, i)) + '<mark>' + esc(text.slice(i, i + q.length)) + '</mark>' + esc(text.slice(i + q.length, i + q.length + 80)) + '…';
}

async function detail(el, { app, query }, id) {
  const m = store.get('materials', id);
  if (!m) { el.innerHTML = '<p>Material nicht gefunden.</p>'; return; }
  app.title(m.title);
  L.addRecent({ kind: 'material', ref: m.id, title: m.title });
  const f = m.fileId ? await idb.getFile(m.fileId) : null;
  const url = f ? URL.createObjectURL(f.blob) : null;
  const kind = f ? fileKind(f.type, f.name) : null;
  const topics = C.areaById.get(m.area)?.topics || [];
  const linked = store.all('sheets').filter((s) => (s.materials || []).includes(m.id));
  el.innerHTML = `<p class="small muted"><a href="#/materialien">Materialien</a> › ${esc(m.title)}</p>
    <div class="row between"><h1 style="margin:0">${esc(m.title)}</h1><div class="row">${url ? `<a class="btn" href="${url}" download="${esc(m.fileName)}">Original herunterladen</a>` : ''}<button class="btn icon danger" id="del" aria-label="Löschen">${icon('trash')}</button></div></div>
    <div class="row small" style="margin:8px 0">${kindBadge(m.kind)}${f ? `<span class="muted">${esc(kind)} · ${(f.size / 1024 / 1024).toFixed(2)} MB · hinzugefügt ${fmtDate(m.createdAt)}</span>` : ''}${m.fileId && !f ? '<span class="badge warn">Datei liegt noch nicht auf diesem Gerät (wird beim Synchronisieren geladen)</span>' : ''}</div>
    <div class="grid two">
      <section class="card"><h2>Zuordnung</h2>
        <div class="field"><label for="mt">Titel</label><input id="mt" value="${esc(m.title)}"></div>
        <div class="field"><label for="ma">Fach / Lernfeld</label><select id="ma"><option value="">–</option>${C.areas.map((a) => `<option value="${a.id}" ${a.id === m.area ? 'selected' : ''}>${esc(C.areaFull(a))}</option>`).join('')}</select></div>
        <div class="field"><label for="mtp">Thema</label><select id="mtp"><option value="">–</option>${topics.map((t) => `<option value="${t.id}" ${t.id === m.topic ? 'selected' : ''}>${esc(t.title)}</option>`).join('')}</select></div>
        <div class="field"><label for="mg">Stichwörter</label><input id="mg" value="${esc(m.tags || '')}" placeholder="z. B. Arbeitsblatt, Klassenarbeit"></div>
        <button class="btn primary" id="saveMeta">Speichern</button>
        ${linked.length ? `<p class="small" style="margin-top:12px">Verwendet in: ${linked.map((s) => `<a href="#/lernzettel/${s.id}">${esc(s.title)}</a>`).join(', ')}</p>` : ''}
        <p style="margin-top:12px"><a class="btn small" href="#/lernzettel/neu?mat=${m.id}${m.area ? '&area=' + m.area : ''}">${icon('sheet')} Lernzettel mit diesem Material</a></p>
      </section>
      <section class="card"><h2>Vorschau</h2><div id="pv">${!f ? (m.kind === 'note' ? '<p class="muted">Notiz ohne Datei.</p>' : '<p class="muted">Keine Datei auf diesem Gerät.</p>') : ''}</div></section>
    </div>
    <section class="card" style="margin-top:16px"><div class="row between"><h2 style="margin:0">${m.kind === 'note' ? 'Notiztext' : 'Text (erkannt oder eigene Abschrift)'}</h2><div class="row" id="extract"></div></div>
      <p class="small muted" id="ocrState">${m.kind === 'note' ? 'Deine eigene Notiz.' : m.ocrText ? `Text vorhanden${m.ocrSource ? ' (' + esc(m.ocrSource) + ')' : ''}${m.ocrCorrected ? ', von dir korrigiert' : ', automatisch erkannt und ungeprüft'}. Seitenangaben stehen als [Seite n] im Text.` : 'Noch kein Text. Der Text macht das Material durchsuchbar und kann in Lernzettel übernommen werden.'}</p>
      <textarea id="txt" rows="14">${esc(m.kind === 'note' ? m.text || '' : m.ocrText || '')}</textarea>
      <div class="row" style="margin-top:8px"><button class="btn primary" id="saveTxt">Text speichern</button><span class="small muted" id="prog"></span></div></section>`;

  const pv = el.querySelector('#pv');
  if (f) {
    if (/^image\//.test(f.type)) pv.innerHTML = `<img src="${url}" alt="${esc(m.title)}" style="max-width:100%;border-radius:10px">`;
    else if (kind === 'PDF') pv.innerHTML = `<object class="preview-frame" data="${url}" type="application/pdf"><p>Die Vorschau wird von diesem Browser nicht unterstützt. <a href="${url}" target="_blank" rel="noopener">PDF öffnen</a></p></object><p class="small"><a href="${url}" target="_blank" rel="noopener">In neuem Tab öffnen</a></p>`;
    else if (kind === 'Text') pv.innerHTML = `<pre style="white-space:pre-wrap">${esc(await f.blob.text())}</pre>`;
    else if (kind === 'Word') pv.innerHTML = '<p class="muted small">Word-Vorschau zeigt den Text unten nach „Text aus Word übernehmen“.</p>';
    else pv.innerHTML = '<p class="muted">Keine Vorschau für diesen Dateityp. Speichere .doc-Dateien in Word bitte als .docx oder PDF.</p>';
  }
  const ex = el.querySelector('#extract');
  const prog = el.querySelector('#prog');
  const txt = el.querySelector('#txt');
  const setText = async (t, source) => { txt.value = t; await store.put('materials', { ...store.get('materials', id), ocrText: t, ocrSource: source, ocrCorrected: false }); el.querySelector('#ocrState').textContent = `Text aus ${source} übernommen. Automatisch erkannt und ungeprüft: Bitte kontrollieren und bei Bedarf korrigieren.`; };
  if (f && /^image\//.test(f.type)) ex.innerHTML = `<button class="btn small" id="ocr">Text erkennen (OCR)</button>`;
  if (f && kind === 'PDF') ex.innerHTML = `<button class="btn small" id="pdftxt">Text aus PDF übernehmen</button><button class="btn small" id="pdfocr">Gescannte Seiten erkennen (OCR)</button>`;
  if (f && kind === 'Word') ex.innerHTML = `<button class="btn small" id="docx">Text aus Word übernehmen</button>`;
  ex.querySelector('#ocr')?.addEventListener('click', () => safe(async () => {
    if (!await ocrConsent()) return;
    prog.textContent = 'Texterkennung wird geladen …';
    await loadScript(LIBS.tesseract);
    const w = await window.Tesseract.createWorker('deu', 1, { logger: (l) => { if (l.status === 'recognizing text') prog.textContent = `Erkenne Text … ${Math.round(l.progress * 100)} %`; } });
    const r = await w.recognize(f.blob); await w.terminate();
    prog.textContent = `Fertig (Erkennungssicherheit ca. ${Math.round(r.data.confidence)} %).`;
    await setText(r.data.text.trim(), 'Texterkennung (OCR)');
  }));
  ex.querySelector('#pdftxt')?.addEventListener('click', () => safe(async () => {
    prog.textContent = 'PDF wird gelesen …';
    const lib = await pdfjs();
    const doc = await lib.getDocument({ data: await f.blob.arrayBuffer() }).promise;
    const out = []; let empty = 0;
    for (let p = 1; p <= doc.numPages; p++) {
      const page = await doc.getPage(p); const tc = await page.getTextContent();
      const t = tc.items.map((x) => x.str + (x.hasEOL ? '\n' : ' ')).join('').trim();
      if (t.length < 20) empty++;
      out.push(`[Seite ${p}]\n${t}`); prog.textContent = `Seite ${p} von ${doc.numPages} …`;
    }
    prog.textContent = empty ? `${empty} Seite(n) ohne Text, vermutlich gescannt. Nutze dafür „Gescannte Seiten erkennen“.` : 'Fertig.';
    await setText(out.join('\n\n'), 'PDF-Text');
  }));
  ex.querySelector('#pdfocr')?.addEventListener('click', () => safe(async () => {
    if (!await ocrConsent()) return;
    prog.textContent = 'Bibliotheken werden geladen …';
    const lib = await pdfjs(); await loadScript(LIBS.tesseract);
    const doc = await lib.getDocument({ data: await f.blob.arrayBuffer() }).promise;
    const w = await window.Tesseract.createWorker('deu');
    const out = [];
    const max = Math.min(doc.numPages, 30);
    for (let p = 1; p <= max; p++) {
      prog.textContent = `Erkenne Seite ${p} von ${max} …`;
      const page = await doc.getPage(p); const vp = page.getViewport({ scale: 2 });
      const c = document.createElement('canvas'); c.width = vp.width; c.height = vp.height;
      await page.render({ canvasContext: c.getContext('2d'), viewport: vp }).promise;
      const r = await w.recognize(c); out.push(`[Seite ${p}]\n${r.data.text.trim()}`);
    }
    await w.terminate();
    prog.textContent = doc.numPages > max ? `Die ersten ${max} Seiten wurden erkannt.` : 'Fertig.';
    await setText(out.join('\n\n'), 'Texterkennung (OCR)');
  }));
  ex.querySelector('#docx')?.addEventListener('click', () => safe(async () => {
    prog.textContent = 'Word-Datei wird gelesen …';
    await loadScript(LIBS.mammoth);
    const r = await window.mammoth.extractRawText({ arrayBuffer: await f.blob.arrayBuffer() });
    prog.textContent = 'Fertig.';
    await setText(r.value.trim(), 'Word-Datei');
  }));
  el.querySelector('#ma').onchange = (e) => { const tps = C.areaById.get(e.target.value)?.topics || []; el.querySelector('#mtp').innerHTML = '<option value="">–</option>' + tps.map((t) => `<option value="${t.id}">${esc(t.title)}</option>`).join(''); };
  el.querySelector('#saveMeta').onclick = () => safe(async () => { await store.put('materials', { ...store.get('materials', id), title: el.querySelector('#mt').value.trim() || 'Ohne Titel', area: el.querySelector('#ma').value, topic: el.querySelector('#mtp').value, tags: el.querySelector('#mg').value }); app.title(el.querySelector('#mt').value); }, 'Gespeichert');
  el.querySelector('#saveTxt').onclick = () => safe(async () => {
    const cur = store.get('materials', id);
    if (cur.kind === 'note') await store.put('materials', { ...cur, text: txt.value });
    else await store.put('materials', { ...cur, ocrText: txt.value, ocrCorrected: true });
    el.querySelector('#ocrState').textContent = cur.kind === 'note' ? 'Gespeichert.' : 'Gespeichert und als von dir korrigiert markiert.';
  }, 'Text gespeichert');
  el.querySelector('#del').onclick = async () => {
    if (!await confirmDanger('Material löschen?', `„${m.title}“${f ? ' und die Originaldatei' : ''} werden von diesem Gerät${sync.getAdapter()?.ready() ? ' und aus deinem Online-Speicher' : ''} gelöscht.`)) return;
    await safe(async () => {
      await store.remove('materials', id);
      if (m.fileId) { await idb.deleteFile(m.fileId); try { await sync.getAdapter()?.deleteFile?.(m.fileId); } catch { /* wird beim nächsten Mal nicht erneut versucht */ } }
    }, 'Material gelöscht');
    location.hash = '#/materialien';
  };
  if (query.get('edit') === '1') txt.focus();
  return () => { if (url) URL.revokeObjectURL(url); };
}

async function ocrConsent() {
  try { if (localStorage.getItem('ocrOk') === '1') return true; } catch { /* egal */ }
  const r = await dialog({ title: 'Texterkennung starten?', body: '<p>Für die Texterkennung lädt die App einmalig die freie Bibliothek <b>Tesseract.js</b> und deutsche Sprachdaten (ca. 5–15 MB) von <b>cdn.jsdelivr.net</b> herunter.</p><p><b>Deine Datei bleibt auf deinem Gerät.</b> Die Erkennung läuft lokal im Browser, es wird nichts an einen Dienst gesendet.</p>', actions: [{ label: 'Abbrechen', value: 'no' }, { label: 'Verstanden, starten', value: 'yes', primary: true }] });
  if (r.value === 'yes') { try { localStorage.setItem('ocrOk', '1'); } catch { /* egal */ } return true; }
  return false;
}
