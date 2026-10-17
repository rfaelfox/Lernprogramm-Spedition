// Prüft alle Lerneinheiten automatisch: Musterlösung jeder Aufgabe muss volle Punktzahl ergeben,
// Buchungssätze müssen aufgehen, Freitext-Musterlösungen sollen die Bewertungskriterien treffen.
import { grade, clozeGaps } from '../app/js/grading.js';
import ids from '../app/content/units/index.js';
let problems = 0, warnings = 0;
const answerFor = (t) => {
  switch (t.type) {
    case 'mc': return t.correct;
    case 'cloze': return clozeGaps(t.text).map((g) => g[0]);
    case 'calc': return Object.fromEntries((t.fields || []).map((f) => [f.id, String(f.answer)]));
    case 'booking': return t.entries.map((e) => ({ ...e, amount: String(e.amount) }));
    case 'match': return t.pairs.map((_, i) => i);
    case 'order': return t.items.map((_, i) => i);
    case 'text': return { text: t.model || '' };
    case 'case': return t.parts.map(answerFor);
  }
};
const checkTask = (u, t) => {
  if (t.type === 'case') return t.parts.forEach((p) => checkTask(u, p));
  if (t.type === 'mc' && (t.correct || []).some((i) => i < 0 || i >= t.options.length)) { problems++; console.log('✗', u, t.id, 'mc-Index außerhalb'); }
  if (t.type === 'booking') {
    const s = t.entries.filter((e) => e.side === 'S').reduce((a, e) => a + e.amount, 0), h = t.entries.filter((e) => e.side === 'H').reduce((a, e) => a + e.amount, 0);
    if (Math.abs(s - h) > 0.005) { problems++; console.log('✗', u, t.id, `Soll ${s} ≠ Haben ${h}`); }
    const miss = t.entries.filter((e) => t.accounts && !t.accounts.includes(e.account)); if (miss.length) { problems++; console.log('✗', u, t.id, 'Konto fehlt in Auswahl:', miss.map((e) => e.account).join(', ')); }
  }
  const r = grade(t, answerFor(t));
  if (t.type === 'text') {
    if ((t.criteria || []).length && r.suggested < r.max * 0.6) { warnings++; console.log('!', u, t.id, `Musterlösung trifft nur ${r.suggested}/${r.max} Kriterienpunkte`); }
  } else if (r.score !== 1) { problems++; console.log('✗', u, t.id, t.type, 'Musterlösung ergibt', r.score); }
};
for (const id of ids) {
  const u = (await import(`../app/content/units/${id}.js`)).default;
  u.tasks.forEach((t) => checkTask(id, t));
}
console.log(`\n${ids.length} Einheiten geprüft: ${problems} Fehler, ${warnings} Hinweise.`);
process.exit(problems ? 1 : 0);
