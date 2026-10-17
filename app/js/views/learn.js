import * as store from '../store.js';
import * as C from '../content.js';
import * as L from '../learning.js';
import { esc, fmtDate, fmtDateTime } from '../util.js';
import { md } from '../md.js';
import { icon, toast, dialog, progressBar, statusBadge, coverageBadge, safe } from '../ui.js';

export async function render(el, ctx) {
  const [sub, id] = ctx.args;
  if (sub === 'einheit' && id) return unitPage(el, ctx, id);
  if (sub === 'bereich' && id) return areaPage(el, ctx, id);
  return overview(el, ctx);
}

function overview(el, { app, query }) {
  app.title('Lernen');
  const s = store.settings();
  const yearSel = query.get('jahr') ?? String(s.trainingYear);
  el.innerHTML = `
    <div class="row between"><h1>Lernen</h1><a class="btn small" href="#/abdeckung">${icon('check')} Abdeckung & Quellen</a></div>
    <p class="muted">Ausbildungsjahr → Lernfeld bzw. Fach → Thema → Lerneinheit. Grundlage: KMK-Rahmenlehrplan 2004 und WiSo-Lehrplan Saarland.</p>
    <div class="chips" role="group" aria-label="Ausbildungsjahr">${[...C.years.map((y) => [String(y.id), y.title]), ['alle', 'Alle']].map(([v, t]) => `<a class="chip ${v === yearSel ? 'on' : ''}" href="#/lernen?jahr=${v}">${esc(t)}</a>`).join('')}</div>
    <div class="tree" style="margin-top:16px">${C.years.filter((y) => yearSel === 'alle' || String(y.id) === yearSel).map((y) => {
      const as = C.areas.filter((a) => a.year === y.id);
      if (!as.length) return '';
      return `<h2 style="margin-top:20px">${esc(y.title)}</h2>${as.map((a) => areaBlock(a)).join('')}`;
    }).join('')}</div>
    <div class="card flat" style="margin-top:20px"><h3>Weiteres Fach aus dem Stundenplan</h3><p class="small muted">Zum Beispiel Deutsch, Englisch, Religion oder Sport. Das Fach erscheint dann hier, in den Noten und im Lernzettel-Generator.</p><a class="btn" href="#/einstellungen/faecher">${icon('plus')} Fach hinzufügen</a></div>`;
}

function areaBlock(a) {
  const p = L.areaProgress(a.id);
  return `<details><summary><span style="flex:1"><span class="small muted">${esc(C.areaLabel(a))}${a.hours ? ` · ${a.hours} Std.` : ''}</span><br><b>${esc(a.title)}</b></span><span style="width:110px">${p.units ? progressBar(p.value) : '<span class="small muted">noch offen</span>'}</span></summary>
    ${a.note ? `<div class="topic small muted">${esc(a.note)}</div>` : ''}
    ${a.topics.map((tp) => topicBlock(tp)).join('')}
    <div class="topic"><a class="btn small" href="#/lernen/bereich/${a.id}">Bereich öffnen</a></div></details>`;
}

function topicBlock(tp) {
  const units = C.unitsOfTopic(tp.id);
  const cov = C.topicCoverage(tp);
  const st = L.topicStatus(tp.id);
  const also = (tp.alsoIn || []).map((x) => C.topicById.get(x)).filter(Boolean);
  return `<div class="topic"><div class="row between"><b>${esc(tp.title)}</b><span class="row">${units.length ? statusBadge(st.status) : ''}${coverageBadge(cov)}</span></div>
    ${units.map((u) => `<a class="unit-link" href="#/lernen/einheit/${u.id}">${icon('learn')}<span style="flex:1">${esc(u.title)}<br><span class="small muted">${u.minutes || 20} Min. · ${(u.tasks || []).length} Aufgaben · ${(u.flashcards || []).length} Karten</span></span>${statusBadge(L.unitMastery(u).level)}</a>`).join('')}
    ${!units.length ? `<p class="small muted" style="margin:4px 0">Noch nicht ausgearbeitet.${also.some((o) => C.unitsOfTopic(o.id).length) ? ' Siehe verknüpftes Thema unten.' : ''}</p>` : ''}
    ${also.length ? `<p class="small muted" style="margin:4px 0">Verknüpft mit: ${also.map((o) => { const oa = C.areaById.get(o.areaId); return `<a href="#/lernen/bereich/${oa.id}">${esc(C.areaLabel(oa))} – ${esc(o.title)}</a>`; }).join(', ')} <span title="Fortschritt wird nur einmal gezählt">(Fortschritt wird nur einmal gezählt)</span></p>` : ''}
  </div>`;
}

function areaPage(el, { app }, id) {
  const a = C.areaById.get(id);
  if (!a) { el.innerHTML = '<p>Bereich nicht gefunden.</p>'; return; }
  app.title(C.areaLabel(a));
  const src = C.sourceById.get(a.source);
  el.innerHTML = `<p class="small muted"><a href="#/lernen">Lernen</a> › ${esc(C.years.find((y) => y.id === a.year)?.title || '')}</p>
    <h1>${esc(C.areaFull(a))}</h1>
    ${a.note ? `<div class="note">${esc(a.note)}</div>` : ''}
    ${src ? `<p class="small muted">Quelle: ${esc(src.publisher)}, ${esc(src.asOf)}${a.hours ? ` · Zeitrichtwert ${a.hours} Stunden` : ''}</p>` : ''}
    <div class="row"><a class="btn primary" href="#/ueben?area=${a.id}">${icon('practice')} Bereich üben</a><a class="btn" href="#/karten/session?area=${a.id}">${icon('cards')} Karteikarten</a><a class="btn" href="#/lernzettel/neu?area=${a.id}">${icon('sheet')} Lernzettel</a></div>
    <div class="tree" style="margin-top:16px"><details open><summary><b style="flex:1">Themen</b></summary>${a.topics.map((tp) => topicBlock(tp) + `<div class="topic row small" style="border-top:0;padding-top:0"><label class="row" style="margin:0;font-weight:400">Mein Themenstatus: <select data-topic="${tp.id}" style="width:auto;min-height:36px">${['', ...L.topicStatusLabels].map((s) => `<option value="${s}" ${(L.topicStatus(tp.id).manual || '') === s ? 'selected' : ''}>${s || 'automatisch (' + L.topicStatus(tp.id).suggested + ')'}</option>`).join('')}</select></label></div>`).join('')}</details></div>
    ${a.custom ? `<p><a class="btn small" href="#/einstellungen/faecher">Fach bearbeiten</a></p>` : ''}`;
  el.querySelectorAll('select[data-topic]').forEach((s) => s.onchange = () => safe(() => L.setTopicStatus(s.dataset.topic, s.value), 'Themenstatus gespeichert'));
}

async function unitPage(el, { app, query }, id) {
  const u = C.unitById.get(id);
  if (!u) { el.innerHTML = '<p>Lerneinheit nicht gefunden.</p>'; return; }
  const a = C.areaById.get(u.area);
  const tp = C.topicById.get(u.topic);
  app.title(u.title);
  await L.markOpened(u);
  const started = Date.now();
  const tab = query.get('tab') || 'erklaerung';
  const bm = store.get('bookmarks', 'u-' + u.id);
  const m = L.unitMastery(u);
  const note = store.get('notes', 'unit-' + u.id);
  const tabs = [['erklaerung', 'Erklärung'], ['begriffe', 'Fachbegriffe'], ['beispiel', 'Praxisbeispiel'], ['merken', 'Merksätze'], ['fehler', 'Häufige Fehler'], ['ueben', 'Üben & Test'], ['notiz', 'Notiz'], ['quellen', 'Quellen']];
  el.innerHTML = `
    <p class="small muted"><a href="#/lernen">Lernen</a> › <a href="#/lernen/bereich/${a?.id}">${esc(C.areaLabel(a))}</a> › ${esc(tp?.title || '')}</p>
    <div class="row between"><h1 style="margin:0">${esc(u.title)}</h1>
      <div class="row no-print"><button class="btn icon" id="bm" aria-pressed="${bm ? 'true' : 'false'}" aria-label="${bm ? 'Lesezeichen entfernen' : 'Lesezeichen setzen'}" title="Lesezeichen" style="${bm ? 'color:var(--accent)' : ''}">${icon('bookmark')}</button>
      <button class="btn icon" id="report" aria-label="Fehler im Lerninhalt melden" title="Fehler im Lerninhalt melden">${icon('flag')}</button></div></div>
    <div class="row small" style="margin:8px 0 14px">${statusBadge(m.level)}${coverageBadge(u.status)}<span class="muted">${u.minutes || 20} Min.</span>${u.validity ? `<span class="badge warn" title="${esc(u.validity.note)}">Stand ${esc(u.validity.asOf)}</span>` : ''}</div>
    ${u.validity ? `<div class="note warn small"><b>Zeitabhängige Werte:</b> ${esc(u.validity.note)}</div>` : ''}
    <div class="card flat"><b>Lernziele</b><ul>${(u.goals || []).map((g) => `<li>${esc(g)}</li>`).join('')}</ul></div>
    <div class="tabs no-print" role="tablist" style="margin-top:16px">${tabs.map(([k, l]) => `<button role="tab" aria-selected="${k === tab}" data-tab="${k}">${l}</button>`).join('')}</div>
    <div id="tabbody" class="prose"></div>`;

  const body = el.querySelector('#tabbody');
  const show = (k) => {
    el.querySelectorAll('[data-tab]').forEach((b) => b.setAttribute('aria-selected', b.dataset.tab === k));
    history.replaceState(null, '', `#/lernen/einheit/${u.id}?tab=${k}`);
    switch (k) {
      case 'erklaerung': {
        const deep = localStorage.getItem('deep') === '1';
        body.innerHTML = `<div class="chips no-print" style="margin-bottom:12px"><button class="chip ${!deep ? 'on' : ''}" data-d="0">Einfach erklärt</button><button class="chip ${deep ? 'on' : ''}" data-d="1">Vertiefung</button></div><div>${md(deep ? (u.deep || u.simple) : u.simple)}</div><h3>Zusammenfassung</h3>${md(u.summary)}`;
        body.querySelectorAll('[data-d]').forEach((b) => b.onclick = () => { try { localStorage.setItem('deep', b.dataset.d); } catch { /* egal */ } show('erklaerung'); });
        break;
      }
      case 'begriffe': body.innerHTML = (u.terms || []).map((t) => `<div class="term"><b>${esc(t.term)}</b><br>${esc(t.def)}</div>`).join(''); break;
      case 'beispiel': body.innerHTML = md(u.example); break;
      case 'merken': body.innerHTML = `<h3>Merksätze</h3><ul>${(u.rules || []).map((r) => `<li><b>${esc(r)}</b></li>`).join('')}</ul><h3>Zusammenfassung</h3>${md(u.summary)}`; break;
      case 'fehler': body.innerHTML = (u.mistakes || []).map((x) => `<div class="mistake"><div class="w"><b>Falsch:</b> ${esc(x.wrong)}</div><div class="r"><b>Richtig:</b> ${esc(x.right)}</div></div>`).join(''); break;
      case 'ueben': body.innerHTML = `
        <div class="grid">
          <a class="card link" href="#/karten/session?unit=${u.id}"><h3>${icon('cards')} Karteikarten</h3><p class="small muted">${(u.flashcards || []).length} Karten mit verteilter Wiederholung</p></a>
          <a class="card link" href="#/ueben?unit=${u.id}"><h3>${icon('practice')} Aufgaben üben</h3><p class="small muted">${(u.tasks || []).length} Aufgaben mit Hinweisen und Lösungen</p></a>
          <a class="card link" href="#/ueben?unit=${u.id}&quiz=1&mode=test"><h3>${icon('check')} Kurzer Wissenstest</h3><p class="small muted">${(u.quiz || []).length} Aufgaben im Testmodus, Auswertung am Ende</p></a>
        </div>
        <h3>Dein Stand</h3><p>${esc(m.reason)}</p>${progressBar(m.value)}
        <p class="small muted">Bearbeitete Aufgaben: ${Math.round((m.coverage || 0) * 100)} % · Ø Ergebnis: ${Math.round((m.avg || 0) * 100)} % · Lerntage: ${m.days || 0}</p>`; break;
      case 'notiz': body.innerHTML = `<p class="small muted">Eigene Notiz zu dieser Lerneinheit. Sie wird getrennt von den Lerninhalten gespeichert.</p><textarea id="note" rows="8">${esc(note?.text || '')}</textarea><div class="row" style="margin-top:8px"><button class="btn primary" id="saveNote">Notiz speichern</button><span class="small muted" id="noteState">${note ? 'Gespeichert ' + fmtDateTime(note.updatedAt) : ''}</span></div>`;
        body.querySelector('#saveNote').onclick = () => safe(async () => { const t = body.querySelector('#note').value; const r = await store.put('notes', { id: 'unit-' + u.id, kind: 'unit', ref: u.id, title: 'Notiz: ' + u.title, area: u.area, topic: u.topic, text: t }); body.querySelector('#noteState').textContent = 'Gespeichert ' + fmtDateTime(r.updatedAt); }, 'Notiz gespeichert');
        break;
      case 'quellen': body.innerHTML = `<p>Diese Lerneinheit ist eigenständig formuliert. Sie bezieht sich auf:</p><ul>${(u.sources || []).map((s0) => { const s = C.sourceText(s0); return `<li><b>${esc(s.title || '')}</b>${s.ref ? ` – ${esc(s.ref)}` : ''}<br><span class="small muted">${esc(s.publisher || '')}${s.asOf ? ', Stand ' + esc(s.asOf) : ''}</span>${s.url ? `<br><a class="small" href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.url)}</a>` : ''}</li>`; }).join('')}</ul>
        ${(u.links || []).length ? `<h3>Verwandte Lerneinheiten</h3><ul>${u.links.map((l) => C.unitById.get(l)).filter(Boolean).map((x) => `<li><a href="#/lernen/einheit/${x.id}">${esc(x.title)}</a></li>`).join('')}</ul>` : ''}`; break;
    }
  };
  el.querySelectorAll('[data-tab]').forEach((b) => b.onclick = () => show(b.dataset.tab));
  show(tab);

  el.querySelector('#bm').onclick = () => safe(async () => {
    if (store.get('bookmarks', 'u-' + u.id)) await store.remove('bookmarks', 'u-' + u.id);
    else await store.put('bookmarks', { id: 'u-' + u.id, kind: 'unit', ref: u.id, title: u.title });
    unitPage(el, { app, query: new URLSearchParams('tab=' + (el.querySelector('[aria-selected=true]')?.dataset.tab || 'erklaerung')) }, id);
  });
  el.querySelector('#report').onclick = () => reportDialog({ kind: 'unit', ref: u.id, title: u.title });
  return () => L.logMinutes(Math.min(30, (Date.now() - started) / 60000), 'lesen');
}

export async function reportDialog({ kind, ref, title }) {
  const r = await dialog({
    title: 'Fehler im Lerninhalt melden',
    body: `<p class="small muted">„${esc(title)}“. Die Meldung wird bei dir gespeichert und in der Liste „Gemeldete Fehler“ (Einstellungen) gesammelt, damit der Inhalt korrigiert werden kann.</p>
      <div class="field"><label for="rw">Was ist falsch?</label><textarea id="rw" name="what" required></textarea></div>
      <div class="field"><label for="rc">Deine Korrektur (optional)</label><textarea id="rc" name="fix"></textarea></div>`,
    actions: [{ label: 'Abbrechen', value: 'cancel' }, { label: 'Meldung speichern', value: 'ok', primary: true }]
  });
  if (r.value !== 'ok' || !String(r.data.get('what') || '').trim()) return;
  await safe(() => store.put('reports', { kind, ref, title, what: r.data.get('what'), fix: r.data.get('fix'), status: 'offen' }), 'Danke! Meldung gespeichert.');
}
