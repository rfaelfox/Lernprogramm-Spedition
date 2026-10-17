import * as store from '../store.js';
import * as C from '../content.js';
import { esc, fmtDate, fmtNum, todayISO, download, parseNumber } from '../util.js';
import { icon, toast, dialog, confirmDanger, safe } from '../ui.js';
import { lineChart } from '../charts.js';

// Bei IHK-Prüfungen übliches 100-Punkte-Schema. Nur Orientierung für Übungen.
export const IHK_KEY = [{ min: 92, grade: 1, label: 'sehr gut' }, { min: 81, grade: 2, label: 'gut' }, { min: 67, grade: 3, label: 'befriedigend' }, { min: 50, grade: 4, label: 'ausreichend' }, { min: 30, grade: 5, label: 'mangelhaft' }, { min: 0, grade: 6, label: 'ungenügend' }];
export function ihkGrade(pct) { const k = IHK_KEY.find((x) => pct >= x.min - 1e-9) || IHK_KEY[5]; return { grade: k.grade, label: k.label }; }

export const DEFAULT_CATS = ['Klassenarbeit', 'Test', 'mündlich', 'Präsentation', 'Projekt'];
export function globalCfg() {
  return { id: 'global', categories: DEFAULT_CATS, key: IHK_KEY.map(({ min, grade }) => ({ min, grade })), keyIsAssumption: true, schoolRules: '', ...(store.get('gradeconfig', 'global') || {}) };
}
export function subjectCfg(sid) {
  return { id: 's-' + sid, weights: { Klassenarbeit: 2, Test: 1, 'mündlich': 1, 'Präsentation': 1, Projekt: 1 }, split: false, writtenCats: ['Klassenarbeit', 'Test'], writtenShare: 50, target: null, confirmed: false, ...(store.get('gradeconfig', 's-' + sid) || {}) };
}
export function subjectList() {
  return C.areas.map((a) => ({ id: a.id, label: a.kind === 'lf' ? `LF ${a.no} – ${a.title}` : a.title, short: C.areaLabel(a) }));
}

// "2-" → 2,3 (mit eingestellter Tendenz), "2+" → 1,7, "2,5" → 2,5
export function parseGrade(s, tendency = 0.3) {
  const t = String(s || '').trim().replace(',', '.');
  const m = t.match(/^([1-6])\s*([+-])$/);
  if (m) { const v = Number(m[1]) + (m[2] === '-' ? tendency : -tendency); return Math.min(6, Math.max(1, Math.round(v * 100) / 100)); }
  const n = Number(t);
  return n >= 1 && n <= 6 ? n : NaN;
}
export function pointsToGrade(points, max, key) {
  if (!max) return NaN;
  const pct = (points / max) * 100;
  const k = [...key].sort((a, b) => b.min - a.min).find((x) => pct >= x.min - 1e-9);
  return k ? k.grade : 6;
}

function weightOf(g, cfg) { return Number(g.weight) > 0 ? Number(g.weight) : Number(cfg.weights?.[g.category]) || 1; }
// Durchschnitt nach den eingestellten (vorläufigen) Regeln. extra = hypothetische Note.
export function subjectAverage(grades, cfg, extra = null) {
  const list = extra ? [...grades, extra] : grades;
  if (!list.length) return null;
  const wavg = (arr) => { let s = 0, w = 0; for (const g of arr) { const ww = weightOf(g, cfg); s += g.grade * ww; w += ww; } return w ? s / w : null; };
  if (cfg.split) {
    const wr = list.filter((g) => cfg.writtenCats.includes(g.category));
    const ot = list.filter((g) => !cfg.writtenCats.includes(g.category));
    const a = wavg(wr), b = wavg(ot);
    if (a == null) return b; if (b == null) return a;
    const share = (Number(cfg.writtenShare) || 50) / 100;
    return a * share + b * (1 - share);
  }
  return wavg(list);
}
// Welche Note braucht es in der nächsten Leistung, damit der Schnitt die Zielnote erreicht?
export function neededGrade(grades, cfg, target, category, weight) {
  const at = (x) => subjectAverage(grades, cfg, { grade: x, category, weight });
  if (at(1) > target + 1e-9) return { reachable: false, best: at(1) };
  if (at(6) <= target + 1e-9) return { reachable: true, safe: true, worst: at(6) };
  let lo = 1, hi = 6;
  for (let i = 0; i < 50; i++) { const mid = (lo + hi) / 2; if (at(mid) <= target) lo = mid; else hi = mid; }
  let g = Math.round(lo * 100) / 100;
  if (at(g) > target + 1e-9) g = Math.round((g - 0.01) * 100) / 100;
  return { reachable: true, grade: g };
}

export async function render(el, { app, query }) {
  app.title('Meine Noten');
  const s = store.settings();
  const subjects = subjectList();
  const gcfg = globalCfg();
  const f = { subject: query.get('fach') || '', term: query.get('zeitraum') || '', from: query.get('von') || '', to: query.get('bis') || '' };
  const all = store.all('grades').sort((a, b) => (b.date || '').localeCompare(a.date || ''));
  const terms = Array.from(new Set(all.map((g) => g.term).filter(Boolean))).sort();
  const filtered = all.filter((g) => (!f.subject || g.subject === f.subject) && (!f.term || g.term === f.term) && (!f.from || g.date >= f.from) && (!f.to || g.date <= f.to));
  const usedSubjects = subjects.filter((x) => filtered.some((g) => g.subject === x.id) || x.id === f.subject);

  el.innerHTML = `<div class="row between"><h1>Meine Noten</h1><div class="row no-print"><button class="btn primary" id="add">${icon('plus')} Note eintragen</button></div></div>
    <div class="note small"><b>Hinweis:</b> Alle Durchschnitte sind eine <b>vorläufige Orientierung</b>. Die echten Gewichtungs- und Rundungsregeln deiner Schule sind ${gcfg.schoolRules ? 'als Notiz hinterlegt, aber nicht automatisch geprüft' : 'noch nicht hinterlegt'}. Ein Gesamtschnitt über alle Fächer wird bewusst nicht berechnet. Übungsergebnisse erscheinen hier nie automatisch.</div>
    <div class="card flat no-print"><div class="form-grid">
      <div class="field"><label for="ff">Fach/Lernfeld</label><select id="ff"><option value="">alle</option>${subjects.map((x) => `<option value="${x.id}" ${f.subject === x.id ? 'selected' : ''}>${esc(x.label)}</option>`).join('')}</select></div>
      <div class="field"><label for="ft">Schuljahr/Halbjahr</label><select id="ft"><option value="">alle</option>${terms.map((t) => `<option ${f.term === t ? 'selected' : ''}>${esc(t)}</option>`).join('')}</select></div>
      <div class="field"><label for="fv">von</label><input type="date" id="fv" value="${esc(f.from)}"></div>
      <div class="field"><label for="fb">bis</label><input type="date" id="fb" value="${esc(f.to)}"></div>
    </div><div class="row"><button class="btn small" id="csv">CSV exportieren</button><button class="btn small" id="print">${icon('print')} Drucken / PDF</button><button class="btn small" id="cfgG">Notenschlüssel & Kategorien</button></div></div>

    <h2 style="margin-top:20px">Durchschnitte (vorläufig)</h2>
    <div class="grid">${usedSubjects.length ? usedSubjects.map((x) => subjectCard(x, filtered.filter((g) => g.subject === x.id))).join('') : '<p class="muted">Noch keine Noten eingetragen. Du kannst auch alle bisherigen Noten nachträglich erfassen.</p>'}</div>

    ${filtered.length >= 2 ? `<h2 style="margin-top:20px">Entwicklung</h2><div class="card">${lineChart(filtered, subjects)}</div>` : ''}

    <h2 style="margin-top:20px">Alle Einträge (${filtered.length})</h2>
    <div class="card"><div class="table-wrap"><table><thead><tr><th>Datum</th><th>Fach</th><th>Leistung</th><th>Art</th><th class="num">Note</th><th class="num">Punkte</th><th class="num">Gew.</th><th class="no-print"></th></tr></thead><tbody>
    ${filtered.map((g) => `<tr><td>${fmtDate(g.date)}</td><td>${esc(subjects.find((x) => x.id === g.subject)?.short || g.subject)}</td><td>${esc(g.title)}${g.demo ? ' <span class="badge demo">Beispiel</span>' : ''}${g.note ? `<br><span class="small muted">${esc(g.note)}</span>` : ''}</td><td>${esc(g.category)}</td><td class="num"><b>${fmtNum(g.grade)}</b></td><td class="num">${g.points != null && g.points !== '' ? `${fmtNum(g.points)}/${fmtNum(g.maxPoints)}` : ''}</td><td class="num">${fmtNum(weightOf(g, subjectCfg(g.subject)))}</td><td class="no-print"><button class="btn icon ghost" data-edit="${g.id}" aria-label="Bearbeiten">${icon('edit')}</button><button class="btn icon ghost" data-del="${g.id}" aria-label="Löschen">${icon('trash')}</button></td></tr>`).join('')}
    </tbody></table></div></div>`;

  const nav = () => { const q = new URLSearchParams(); const v = (id) => el.querySelector(id).value; if (v('#ff')) q.set('fach', v('#ff')); if (v('#ft')) q.set('zeitraum', v('#ft')); if (v('#fv')) q.set('von', v('#fv')); if (v('#fb')) q.set('bis', v('#fb')); location.hash = '#/noten?' + q; };
  ['#ff', '#ft', '#fv', '#fb'].forEach((id) => el.querySelector(id).onchange = nav);
  el.querySelector('#add').onclick = () => editGrade(null, f.subject, () => render(el, { app, query }));
  el.querySelectorAll('[data-edit]').forEach((b) => b.onclick = () => editGrade(store.get('grades', b.dataset.edit), null, () => render(el, { app, query })));
  el.querySelectorAll('[data-del]').forEach((b) => b.onclick = async () => {
    const g = store.get('grades', b.dataset.del);
    if (await confirmDanger('Note löschen?', `„${g.title}“ (${fmtNum(g.grade)}) vom ${fmtDate(g.date)} wird gelöscht.`)) await safe(() => store.remove('grades', g.id), 'Note gelöscht');
    render(el, { app, query });
  });
  el.querySelectorAll('[data-cfg]').forEach((b) => b.onclick = () => editSubjectCfg(b.dataset.cfg, () => render(el, { app, query })));
  el.querySelectorAll('[data-need]').forEach((b) => b.onclick = () => needDialog(b.dataset.need, filtered.filter((g) => g.subject === b.dataset.need)));
  el.querySelector('#cfgG').onclick = () => editGlobal(() => render(el, { app, query }));
  el.querySelector('#print').onclick = () => window.print();
  el.querySelector('#csv').onclick = () => {
    const rows = [['Datum', 'Fach', 'Leistung', 'Art', 'Note', 'Punkte', 'Max. Punkte', 'Gewichtung', 'Schuljahr/Halbjahr', 'Bemerkung', 'Beispieldaten']];
    filtered.forEach((g) => rows.push([g.date, subjects.find((x) => x.id === g.subject)?.label || g.subject, g.title, g.category, String(g.grade).replace('.', ','), g.points ?? '', g.maxPoints ?? '', String(weightOf(g, subjectCfg(g.subject))).replace('.', ','), g.term || '', g.note || '', g.demo ? 'ja' : '']));
    download(`noten-${todayISO()}.csv`, '﻿' + rows.map((r) => r.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(';')).join('\r\n'), 'text/csv;charset=utf-8');
  };
}

function subjectCard(x, grades) {
  const cfg = subjectCfg(x.id);
  const avg = subjectAverage(grades, cfg);
  const assumptions = cfg.split ? `Schriftlich (${cfg.writtenCats.join(', ')}) ${cfg.writtenShare} %, sonstige ${100 - cfg.writtenShare} %` : 'Gewichtung je Art: ' + Object.entries(cfg.weights).map(([k, v]) => `${k} ×${fmtNum(v)}`).join(', ');
  return `<div class="card"><div class="small muted">${esc(x.short)}</div><b>${esc(x.label)}</b>
    <div class="row between" style="margin-top:8px"><span class="grade-big">${avg == null ? '–' : fmtNum(avg)}</span>${cfg.target ? `<span class="badge ${avg != null && avg <= cfg.target ? 'ok' : 'warn'}">Ziel ${fmtNum(cfg.target)}</span>` : ''}</div>
    <p class="small muted" style="margin:4px 0">${grades.length} Note(n) · ${cfg.confirmed ? 'Regeln von dir als Schulregel bestätigt' : 'vorläufig'}: ${esc(assumptions)}</p>
    <div class="row no-print"><button class="btn small" data-need="${x.id}">Was brauche ich?</button><button class="btn small ghost" data-cfg="${x.id}">Gewichtung & Ziel</button></div></div>`;
}

async function editGrade(g, subject, done) {
  const s = store.settings();
  const gc = globalCfg();
  const subjects = subjectList();
  const topics = C.areas.flatMap((a) => a.topics.map((t) => ({ ...t, area: a })));
  const mats = store.all('materials');
  const v = g || { subject: subject || 'LF06', date: todayISO(), term: s.schoolYear, category: 'Klassenarbeit' };
  const r = await dialog({
    title: g ? 'Note bearbeiten' : 'Note eintragen',
    body: `<div class="form-grid">
      <div class="field"><label for="gs">Fach oder Lernfeld</label><select id="gs" name="subject" required>${subjects.map((x) => `<option value="${x.id}" ${v.subject === x.id ? 'selected' : ''}>${esc(x.label)}</option>`).join('')}</select></div>
      <div class="field"><label for="gt">Bezeichnung der Leistung</label><input id="gt" name="title" required value="${esc(v.title || '')}" placeholder="z. B. Klassenarbeit Frachtrecht"></div>
      <div class="field"><label for="gd">Datum</label><input id="gd" type="date" name="date" required value="${esc(v.date || '')}"></div>
      <div class="field"><label for="gh">Schuljahr / Halbjahr</label><input id="gh" name="term" value="${esc(v.term || '')}" placeholder="2026/27 1. Hj."></div>
      <div class="field"><label for="gc">Leistungsart</label><input id="gc" name="category" list="cats" required value="${esc(v.category || '')}"><datalist id="cats">${gc.categories.map((c) => `<option>${esc(c)}</option>`).join('')}</datalist><div class="hint">Eigene Kategorie einfach eintippen</div></div>
      <div class="field"><label for="gg">Note</label><input id="gg" name="grade" value="${v.grade != null ? String(v.grade).replace('.', ',') : ''}" placeholder="z. B. 2, 2-, 2,5" inputmode="decimal"><div class="hint">„2-“ = ${fmtNum(2 + s.gradeTendency)}, „2+“ = ${fmtNum(2 - s.gradeTendency)} (Annahme, in Einstellungen änderbar). Leer lassen, wenn aus Punkten berechnet werden soll.</div></div>
      <div class="field"><label for="gp">Punkte (optional)</label><input id="gp" name="points" inputmode="decimal" value="${esc(v.points ?? '')}"></div>
      <div class="field"><label for="gm">Max. Punkte</label><input id="gm" name="maxPoints" inputmode="decimal" value="${esc(v.maxPoints ?? '')}"><div class="hint" id="conv"></div></div>
      <div class="field"><label for="gw">Gewichtung (optional)</label><input id="gw" name="weight" inputmode="decimal" value="${esc(v.weight ?? '')}" placeholder="Standard der Leistungsart"></div>
      <div class="field"><label for="gtp">Thema (optional)</label><select id="gtp" name="topic"><option value="">–</option>${topics.map((t) => `<option value="${t.id}" ${v.topic === t.id ? 'selected' : ''}>${esc(C.areaLabel(t.area))}: ${esc(t.title)}</option>`).join('')}</select></div>
      <div class="field"><label for="gmat">Material (optional)</label><select id="gmat" name="material"><option value="">–</option>${mats.map((m) => `<option value="${m.id}" ${v.material === m.id ? 'selected' : ''}>${esc(m.title)}</option>`).join('')}</select></div>
    </div><div class="field"><label for="gn">Bemerkung</label><textarea id="gn" name="note" style="min-height:70px">${esc(v.note || '')}</textarea></div>`,
    actions: [{ label: 'Abbrechen', value: 'cancel' }, { label: 'Speichern', value: 'ok', primary: true }],
    onOpen: (d) => {
      const upd = () => { const p = parseNumber(d.querySelector('#gp').value), m = parseNumber(d.querySelector('#gm').value); d.querySelector('#conv').textContent = p >= 0 && m > 0 ? `${fmtNum(p / m * 100, 1)} % → Note ${pointsToGrade(p, m, gc.key)} nach deinem Notenschlüssel` : ''; };
      d.querySelector('#gp').oninput = upd; d.querySelector('#gm').oninput = upd; upd();
    }
  });
  if (r.value !== 'ok') return;
  const data = Object.fromEntries(r.data);
  let grade = parseGrade(data.grade, s.gradeTendency);
  const points = data.points === '' ? null : parseNumber(data.points), max = data.maxPoints === '' ? null : parseNumber(data.maxPoints);
  if (isNaN(grade) && points != null && max > 0) grade = pointsToGrade(points, max, gc.key);
  if (isNaN(grade)) { toast('Bitte eine Note zwischen 1 und 6 oder Punkte mit Maximalpunkten angeben. Nichts gespeichert.', 'bad'); return; }
  if (!data.title.trim() || !data.date) { toast('Bezeichnung und Datum fehlen. Nichts gespeichert.', 'bad'); return; }
  await safe(() => store.put('grades', { ...(g || {}), ...data, grade, points: isNaN(points) ? null : points, maxPoints: isNaN(max) ? null : max, weight: data.weight ? parseNumber(data.weight) : null, demo: g?.demo && false }), 'Note gespeichert');
  done();
}

async function editSubjectCfg(sid, done) {
  const cfg = subjectCfg(sid);
  const gc = globalCfg();
  const cats = Array.from(new Set([...gc.categories, ...Object.keys(cfg.weights), ...store.all('grades').filter((g) => g.subject === sid).map((g) => g.category)]));
  const r = await dialog({
    title: 'Gewichtung und Zielnote: ' + (subjectList().find((x) => x.id === sid)?.short || sid),
    body: `<p class="small muted">Trage hier die Regeln deiner Lehrkraft ein. Solange du sie nicht bestätigst, gelten sie als Annahme.</p>
      <h3>Gewichtung je Leistungsart</h3><div class="form-grid">${cats.map((c) => `<div class="field"><label>${esc(c)}</label><input name="w:${esc(c)}" inputmode="decimal" value="${fmtNum(cfg.weights[c] ?? 1)}"></div>`).join('')}</div>
      <label class="check"><input type="checkbox" name="split" ${cfg.split ? 'checked' : ''}> Schriftliche und sonstige Leistungen getrennt berechnen</label>
      <div class="form-grid"><div class="field"><label>Schriftliche Arten (mit Komma)</label><input name="writtenCats" value="${esc(cfg.writtenCats.join(', '))}"></div><div class="field"><label>Anteil schriftlich in %</label><input name="writtenShare" inputmode="numeric" value="${esc(cfg.writtenShare)}"></div></div>
      <div class="field"><label>Persönliche Zielnote</label><input name="target" inputmode="decimal" value="${cfg.target ? fmtNum(cfg.target) : ''}" placeholder="z. B. 2,0"></div>
      <label class="check"><input type="checkbox" name="confirmed" ${cfg.confirmed ? 'checked' : ''}> Diese Regeln hat meine Schule/Lehrkraft so bestätigt</label>`,
    actions: [{ label: 'Abbrechen', value: 'cancel' }, { label: 'Speichern', value: 'ok', primary: true }]
  });
  if (r.value !== 'ok') return;
  const weights = {};
  for (const [k, v] of r.data) if (k.startsWith('w:')) { const n = parseNumber(v); weights[k.slice(2)] = n > 0 ? n : 1; }
  const target = parseNumber(r.data.get('target'));
  await safe(() => store.put('gradeconfig', { ...cfg, weights, split: r.data.get('split') === 'on', writtenCats: String(r.data.get('writtenCats')).split(',').map((x) => x.trim()).filter(Boolean), writtenShare: Math.min(100, Math.max(0, parseNumber(r.data.get('writtenShare')) || 50)), target: target >= 1 && target <= 6 ? target : null, confirmed: r.data.get('confirmed') === 'on' }), 'Einstellungen gespeichert');
  done();
}

async function needDialog(sid, grades) {
  const cfg = subjectCfg(sid);
  const gc = globalCfg();
  const r = await dialog({
    title: 'Welche Note brauche ich?',
    body: `<p class="small muted">Berechnung nach deinen (vorläufigen) Gewichtungsregeln. Aktueller Schnitt: <b>${fmtNum(subjectAverage(grades, cfg)) || '–'}</b></p>
      <div class="form-grid"><div class="field"><label>Zielwert</label><input name="t" inputmode="decimal" value="${cfg.target ? fmtNum(cfg.target) : '2,5'}"></div>
      <div class="field"><label>Nächste Leistungsart</label><select name="c">${gc.categories.map((c) => `<option>${esc(c)}</option>`).join('')}</select></div>
      <div class="field"><label>Gewichtung (optional)</label><input name="w" inputmode="decimal" placeholder="Standard der Art"></div></div><div id="res" class="note"></div>`,
    actions: [{ label: 'Schließen', value: 'ok' }],
    onOpen: (d) => {
      const calc = () => {
        const t = parseNumber(d.querySelector('[name=t]').value); const c = d.querySelector('[name=c]').value; const w = parseNumber(d.querySelector('[name=w]').value);
        const out = d.querySelector('#res');
        if (!(t >= 1 && t <= 6)) { out.textContent = 'Bitte einen Zielwert zwischen 1 und 6 eingeben.'; return; }
        const n = neededGrade(grades, cfg, t, c, w > 0 ? w : null);
        out.innerHTML = !n.reachable ? `Selbst mit einer 1,0 wäre der Schnitt ${fmtNum(n.best)}. Der Zielwert ${fmtNum(t)} ist mit einer weiteren Leistung dieser Art nicht erreichbar.` : n.safe ? `Der Zielwert bleibt sogar mit einer 6 erreicht (Schnitt dann ${fmtNum(n.worst)}).` : `Du brauchst in der nächsten Leistung (${esc(c)}) mindestens eine <b>${fmtNum(n.grade)}</b>, damit der Schnitt bei ${fmtNum(t)} oder besser liegt.`;
      };
      d.querySelectorAll('input,select').forEach((x) => x.oninput = calc); calc();
    }
  });
  return r;
}

async function editGlobal(done) {
  const gc = globalCfg();
  const r = await dialog({
    title: 'Notenschlüssel und Kategorien',
    body: `<p class="small muted">Der Notenschlüssel rechnet Punkte in Noten um. Voreingestellt ist das bei IHK-Prüfungen übliche 100-Punkte-Schema. Das ist eine <b>Annahme</b>. Trage den Schlüssel deiner Schule ein, sobald du ihn kennst.</p>
      <table><thead><tr><th>Note</th><th>ab % der Punkte</th></tr></thead><tbody>${[...gc.key].sort((a, b) => a.grade - b.grade).map((k) => `<tr><td>${k.grade}</td><td><input name="k${k.grade}" inputmode="decimal" value="${fmtNum(k.min)}"></td></tr>`).join('')}</tbody></table>
      <label class="check"><input type="checkbox" name="keyIsAssumption" ${gc.keyIsAssumption ? '' : 'checked'}> Das ist der offizielle Schlüssel meiner Schule</label>
      <div class="field"><label>Leistungsarten (mit Komma)</label><input name="cats" value="${esc(gc.categories.join(', '))}"></div>
      <div class="field"><label>Regeln meiner Schule (Notiz)</label><textarea name="rules" placeholder="z. B. Klassenarbeiten zählen doppelt, Rundung ab ,5">${esc(gc.schoolRules || '')}</textarea></div>`,
    actions: [{ label: 'Abbrechen', value: 'cancel' }, { label: 'Speichern', value: 'ok', primary: true }]
  });
  if (r.value !== 'ok') return;
  const key = [1, 2, 3, 4, 5, 6].map((g) => ({ grade: g, min: g === 6 ? 0 : Math.max(0, Math.min(100, parseNumber(r.data.get('k' + g)) || 0)) }));
  await safe(() => store.put('gradeconfig', { ...gc, key, keyIsAssumption: r.data.get('keyIsAssumption') !== 'on', categories: String(r.data.get('cats')).split(',').map((x) => x.trim()).filter(Boolean), schoolRules: r.data.get('rules') }), 'Gespeichert');
  done();
}
