// Lernzettel-Zusammenstellung aus vorhandenen, geprüften Lerninhalten (ohne KI).
// Ergebnis ist Markdown, das vor dem Speichern bearbeitet werden kann.
import * as C from './content.js';
import * as store from './store.js';
import { fmtDate, todayISO, fmtNum } from './util.js';
import { clozeGaps } from './grading.js';

// Überschriften aus Lerneinheiten unter die Gliederung des Lernzettels einordnen
const demote = (s) => String(s || '').replace(/^(#{1,3})\s/gm, '###$1 ');
const plain = (s) => String(s || '').replace(/\|/g, '/').replace(/\n+/g, ' ');

export function generateSheet({ unitIds, title, length = 'mittel', focus = 'grundlagen', exercises = true, materialIds = [], exam = null }) {
  const units = unitIds.map((id) => C.unitById.get(id)).filter(Boolean);
  const mats = materialIds.map((id) => store.get('materials', id)).filter(Boolean);
  const areas = Array.from(new Set(units.map((u) => u.area))).map((a) => C.areaById.get(a)).filter(Boolean);
  const out = [];
  const full = length === 'ausfuehrlich', short = length === 'kurz';
  out.push(`# ${title || units.map((u) => u.title).join(' · ')}`);
  out.push(`> Zusammengestellt am ${fmtDate(todayISO())} aus den geprüften Lerninhalten dieses Programms${mats.length ? ' und Auszügen aus deinen eigenen Materialien' : ''}. Es wurde keine KI verwendet. ${focus === 'pruefung' ? 'Schwerpunkt: Prüfungsvorbereitung.' : 'Schwerpunkt: Grundlagen.'}`);
  if (exam?.date) out.push(`**Klassenarbeit/Prüfung:** ${fmtDate(exam.date)}${exam.scope ? ' · Umfang: ' + exam.scope : ''}`);
  out.push('## Themenübersicht');
  for (const a of areas) out.push(`- **${C.areaFull(a)}**: ${units.filter((u) => u.area === a.id).map((u) => u.title).join(', ')}`);
  const validity = units.filter((u) => u.validity);
  if (validity.length) out.push('> **Zeitabhängige Werte:** ' + validity.map((u) => `${u.title}: ${u.validity.note}`).join(' · '));
  out.push('## Lernziele');
  units.forEach((u) => (u.goals || []).forEach((g) => out.push(`- ${g}`)));

  const questions = [], answers = [], ex = [], exSol = [];
  for (const u of units) {
    out.push(`## ${u.title}`);
    out.push('### Erklärung');
    out.push(demote(short ? (u.summary || '') : full ? (u.deep || u.simple || '') : (u.simple || '')));
    if (!short && u.summary) { out.push('### Zusammenfassung'); out.push(demote(u.summary)); }
    if ((u.terms || []).length) {
      out.push('### Fachbegriffe');
      out.push('| Begriff | Bedeutung |'); out.push('|---|---|');
      (short ? u.terms.slice(0, 6) : u.terms).forEach((t) => out.push(`| ${plain(t.term)} | ${plain(t.def)} |`));
    }
    if ((u.rules || []).length) { out.push('### Merksätze'); u.rules.forEach((r) => out.push(`- **${r}**`)); }
    const calcs = (u.tasks || []).flatMap((t) => (t.type === 'case' ? t.parts || [] : [t])).filter((t) => t.type === 'calc' && t.formula);
    if (calcs.length && !short) {
      out.push('### Formeln und Rechenbeispiele');
      const seen = new Set();
      for (const t of calcs) {
        if (seen.has(t.formula)) continue; seen.add(t.formula);
        out.push(`- \`${t.formula}\``);
        if (full || focus === 'pruefung') { out.push(''); out.push(`**Beispiel:** ${t.q}`); out.push(''); out.push(demote(t.solution || '')); }
      }
    }
    if (full && u.example) { out.push('### Praxisbeispiel'); out.push(demote(u.example)); }
    if ((u.mistakes || []).length && !short) {
      out.push('### Typische Fehler');
      out.push('| Falsch | Richtig |'); out.push('|---|---|');
      u.mistakes.forEach((m) => out.push(`| ${plain(m.wrong)} | ${plain(m.right)} |`));
    }
    const cards = u.flashcards || [];
    (short ? cards.slice(0, 3) : focus === 'pruefung' ? cards : cards.slice(0, 6)).forEach((c) => { questions.push(plain(c.q)); answers.push(plain(c.a)); });
    if (exercises) {
      const pool = (focus === 'pruefung' ? (u.tasks || []).filter((t) => (t.difficulty || 1) >= 2) : (u.tasks || [])).filter((t) => t.type !== 'case' && t.type !== 'order' && t.type !== 'match');
      pool.slice(0, short ? 1 : full ? 4 : 2).forEach((t) => {
        ex.push(taskAsText(t));
        exSol.push(solutionAsText(t));
      });
    }
  }
  if (questions.length) { out.push('## Kontrollfragen'); questions.forEach((q, i) => out.push(`${i + 1}. ${q}`)); }
  if (ex.length) { out.push('## Übungsaufgaben'); ex.forEach((e, i) => out.push(`**Aufgabe ${i + 1}:** ${e}`)); }
  if (mats.length) {
    out.push('## Aus deinen Materialien');
    out.push('> Originalauszüge aus deinen hochgeladenen Unterlagen bzw. erkanntem Text. Nicht vom Programm geprüft.');
    for (const m of mats) {
      out.push(`### ${m.title}`);
      const txt = (m.ocrText || m.text || '').trim();
      out.push(txt ? txt.slice(0, full ? 3000 : 1200) + (txt.length > (full ? 3000 : 1200) ? ' …' : '') : '*(Kein Text vorhanden. Füge im Material eine Notiz hinzu oder lass Text erkennen.)*');
    }
  }
  out.push('---');
  out.push('## Lösungen');
  if (answers.length) { out.push('### Lösungen zu den Kontrollfragen'); answers.forEach((a, i) => out.push(`${i + 1}. ${a}`)); }
  if (exSol.length) { out.push('### Lösungen zu den Übungsaufgaben'); exSol.forEach((s, i) => { out.push(`**Aufgabe ${i + 1}:**`); out.push(s); }); }
  out.push('## Quellen');
  const srcs = new Map();
  units.forEach((u) => (u.sources || []).forEach((s0) => { const s = C.sourceText(s0); const k = (s.title || '') + (s.ref || ''); if (!srcs.has(k)) srcs.set(k, s); }));
  for (const s of srcs.values()) out.push(`- ${s.title}${s.ref ? ' (' + s.ref + ')' : ''}${s.publisher ? ', ' + s.publisher : ''}${s.asOf ? ', Stand ' + s.asOf : ''}`);
  mats.forEach((m) => out.push(`- Eigenes Material: ${m.title}`));
  out.push(`*Erstellt am ${fmtDate(todayISO())} mit dem Lernprogramm Spedition & Logistik.*`);
  return out.join('\n\n');
}

function taskAsText(t) {
  switch (t.type) {
    case 'mc': return `${t.q}\n\n${t.options.map((o, i) => `${String.fromCharCode(65 + i)}) ${o}`).join('  \n')}`;
    case 'cloze': return t.text.replace(/\[\[[^\]]+\]\]/g, '________');
    case 'calc': return `${t.q}\n\n${(t.fields || []).map((f) => `- ${f.label}: ________ ${f.unit || ''}`).join('\n')}`;
    case 'booking': return `${t.q}\n\n*(Buchungssatz mit Soll- und Haben-Konten bilden)*`;
    default: return t.q;
  }
}
function solutionAsText(t) {
  let s = '';
  if (t.type === 'mc') s = 'Richtig: ' + (t.correct || []).map((i) => String.fromCharCode(65 + i) + ') ' + t.options[i]).join('; ');
  if (t.type === 'cloze') s = clozeGaps(t.text).map((g, i) => `${i + 1}. ${g[0]}`).join(' · ');
  if (t.type === 'calc') s = (t.fields || []).map((f) => `${f.label}: ${fmtNum(f.answer, 4)} ${f.unit || ''}`).join(' · ');
  if (t.type === 'booking') s = (t.entries || []).map((e) => `${e.side === 'S' ? 'Soll' : 'Haben'} ${e.account} ${fmtNum(e.amount)} €`).join(' · ');
  if (t.type === 'text') s = t.model || '';
  return [s, t.solution || ''].filter(Boolean).join('\n\n');
}

// Lernzettel → eigene Karteikarten und Quizfragen (als „eigene Lerneinheit“).
export function sheetToUnit(sheet, markdown) {
  const terms = [];
  const lines = markdown.split('\n');
  let inTerms = false;
  for (const l of lines) {
    if (/^###?\s/.test(l)) inTerms = /Fachbegriffe|Begriffe/i.test(l);
    const m = l.match(/^\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|$/);
    if (inTerms && m && !/^-+$/.test(m[1]) && m[1] !== 'Begriff') terms.push({ term: m[1], def: m[2] });
  }
  const section = (name) => { const i = lines.findIndex((l) => new RegExp('^#+\\s*' + name).test(l)); if (i < 0) return []; const out = []; for (let j = i + 1; j < lines.length && !/^#/.test(lines[j]); j++) { const m = lines[j].match(/^\s*\d+\.\s+(.*)$/); if (m) out.push(m[1]); } return out; };
  const qs = section('Kontrollfragen'), as = section('Lösungen zu den Kontrollfragen');
  const flashcards = [...terms.map((t) => ({ q: `Was bedeutet „${t.term}“?`, a: t.def })), ...qs.map((q, i) => ({ q, a: as[i] || '(Antwort im Lernzettel ergänzen)' }))];
  const tasks = terms.length >= 4 ? terms.map((t, i) => {
    const others = terms.filter((_, j) => j !== i).sort(() => 0.5 - Math.random()).slice(0, 3).map((x) => x.term);
    const options = [t.term, ...others].sort(() => 0.5 - Math.random());
    return { id: `${sheet.id}-q${i}`, type: 'mc', difficulty: 1, points: 1, q: `Welcher Fachbegriff passt? *${t.def}*`, options, correct: [options.indexOf(t.term)], solution: `**${t.term}**: ${t.def}`, hints: [] };
  }) : [];
  qs.forEach((q, i) => tasks.push({ id: `${sheet.id}-f${i}`, type: 'text', difficulty: 2, points: 2, q, model: as[i] || '', criteria: [], hints: [], solution: '' }));
  return { id: 'eigen-' + sheet.id, area: sheet.area || 'WISO', topic: sheet.topic || null, title: 'Aus Lernzettel: ' + sheet.title, status: 'eigen', custom: true, fromSheet: sheet.id, minutes: 10, goals: [], simple: '', terms, flashcards, tasks, quiz: tasks.slice(0, 10).map((t) => t.id), sources: [{ title: 'Eigener Lernzettel: ' + sheet.title }] };
}
