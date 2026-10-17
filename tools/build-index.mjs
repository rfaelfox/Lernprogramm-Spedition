// Erzeugt app/content/units/index.js aus allen Dateien im Ordner und prüft jede Lerneinheit.
// Aufruf: node tools/build-index.mjs
import { readdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname, join } from 'node:path';

const dir = join(dirname(fileURLToPath(import.meta.url)), '../app/content/units');
const ids = readdirSync(dir).filter((f) => f.endsWith('.js') && f !== 'index.js').map((f) => f.replace(/\.js$/, ''));
const { areas } = await import(pathToFileURL(join(dir, '../curriculum.js')));
const topics = new Map(areas.flatMap((a) => a.topics.map((t) => [t.id, { ...t, area: a.id }])));
const order = [...topics.values()].flatMap((t) => t.units);
ids.sort((a, b) => (order.indexOf(a) + 1 || 999) - (order.indexOf(b) + 1 || 999) || a.localeCompare(b));
let problems = 0;
const warn = (id, m) => { problems++; console.log(`  ! ${id}: ${m}`); };
for (const id of ids) {
  const u = (await import(pathToFileURL(join(dir, id + '.js')))).default;
  if (u.id !== id) warn(id, `id im Inhalt ist "${u.id}"`);
  if (!topics.has(u.topic)) warn(id, `Thema "${u.topic}" fehlt in curriculum.js`);
  else if (!topics.get(u.topic).units.includes(id)) warn(id, `nicht unter units im Thema "${u.topic}" eingetragen`);
  if (topics.get(u.topic)?.area !== u.area) warn(id, `area "${u.area}" passt nicht zum Thema`);
  const all = (u.tasks || []).flatMap((t) => (t.type === 'case' ? [t, ...(t.parts || [])] : [t]));
  const tids = new Set();
  for (const t of all) {
    if (tids.has(t.id)) warn(id, `doppelte Aufgaben-ID ${t.id}`); tids.add(t.id);
    if (t.type === 'mc' && (!t.correct?.length || t.correct.some((i) => i >= t.options.length))) warn(id, `${t.id}: correct ungültig`);
    if (t.type === 'booking') { const s = t.entries.filter((e) => e.side === 'S').reduce((a, e) => a + e.amount, 0), h = t.entries.filter((e) => e.side === 'H').reduce((a, e) => a + e.amount, 0); if (Math.abs(s - h) > 0.005) warn(id, `${t.id}: Soll ${s} ≠ Haben ${h}`); }
    if (t.type === 'calc' && !(t.fields || []).every((f) => typeof f.answer === 'number')) warn(id, `${t.id}: calc ohne Zahlenwert`);
    if (t.type === 'cloze' && !/\[\[/.test(t.text || '')) warn(id, `${t.id}: Lückentext ohne Lücken`);
  }
  for (const q of u.quiz || []) if (!tids.has(q)) warn(id, `quiz-ID ${q} fehlt`);
  console.log(`✓ ${id}: ${u.tasks.length} Aufgaben, ${(u.flashcards || []).length} Karten, Status ${u.status}`);
}
writeFileSync(join(dir, 'index.js'), `// Automatisch erzeugt von tools/build-index.mjs. Liste aller Lerneinheiten.\nexport default [\n${ids.map((i) => `  '${i}'`).join(',\n')}\n];\n`);
console.log(`\n${ids.length} Lerneinheiten, ${problems} Hinweis(e).`);
process.exit(problems ? 1 : 0);
