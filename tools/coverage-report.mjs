// Erzeugt docs/QUELLEN-UND-ABDECKUNG.md aus curriculum.js, sources.js und den Lerneinheiten.
import { writeFileSync, readdirSync } from 'node:fs';
import { pathToFileURL, fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const { areas, exams } = await import(pathToFileURL(join(root, 'app/content/curriculum.js')));
const sources = (await import(pathToFileURL(join(root, 'app/content/sources.js')))).default;
const units = new Map();
for (const f of readdirSync(join(root, 'app/content/units')).filter((f) => f.endsWith('.js') && f !== 'index.js')) { const u = (await import(pathToFileURL(join(root, 'app/content/units', f)))).default; units.set(u.id, u); }
const cov = (t) => { const us = t.units.map((id) => units.get(id)).filter(Boolean); if (/zu prüfen/i.test(t.title)) return 'Quelle/Zuordnung prüfen'; if (!us.length) return 'Noch nicht ausgearbeitet'; if (us.some((u) => u.status === 'pruefen')) return 'Quelle/Zuordnung prüfen'; return us.every((u) => u.status === 'vollstaendig') ? 'Vollständig ausgearbeitet' : 'Teilweise ausgearbeitet'; };
const counts = {}; let n = 0;
for (const a of areas) for (const t of a.topics) { const c = cov(t); counts[c] = (counts[c] || 0) + 1; n++; }
const lab = (a) => a.kind === 'lf' ? `LF ${a.no}` : 'WiSo';
const out = [`# Quellen und Inhaltsabdeckung`, '', `Automatisch erzeugt am ${new Date().toISOString().slice(0, 10)} mit \`node tools/coverage-report.mjs\`.`, '', '## Quellen', '', '| Art | Herausgeber | Titel | Stand | Link | Hinweis |', '|---|---|---|---|---|---|'];
for (const s of sources) out.push(`| ${s.toCheck ? '**zu prüfen**' : { schule: 'Schule', betrieb: 'Betrieb', recht: 'Recht', vergleich: 'nur Vergleich' }[s.kind]} | ${s.publisher} | ${s.title} | ${s.asOf} | ${s.url} | ${s.note.replace(/\|/g, '/')} |`);
out.push('', 'Schulischer Rahmenlehrplan (KMK) und betrieblicher Ausbildungsrahmenplan (Ausbildungsordnung) sind getrennt gekennzeichnet. Rechtsquellen einzelner Lerneinheiten (HGB, BGB, UStG, BBiG, SGB …) stehen in der jeweiligen Einheit unter „Quellen“ mit Stand.', '', '## Prüfungsbezug', '');
for (const e of exams) out.push(`- **${e.title}:** ${e.details}`);
out.push('', '## Abdeckung', '', `${n} Themen: ` + Object.entries(counts).map(([k, v]) => `${k}: ${v}`).join(' · ') + `. ${units.size} Lerneinheiten, ${[...units.values()].reduce((s, u) => s + u.tasks.length, 0)} Aufgaben, ${[...units.values()].reduce((s, u) => s + (u.flashcards || []).length, 0)} Karteikarten.`, '', '| Bereich | Jahr | Thema | Status | Lerneinheiten |', '|---|---|---|---|---|');
for (const a of areas) for (const t of a.topics) out.push(`| ${lab(a)} ${a.title} | ${a.year || '1–3'} | ${t.title} | ${cov(t)} | ${t.units.map((id) => units.get(id)?.title || id).join(', ') || '–'} |`);
writeFileSync(join(root, 'docs/QUELLEN-UND-ABDECKUNG.md'), out.join('\n') + '\n');
console.log(counts);
