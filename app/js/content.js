// Lädt Lehrplanstruktur, Quellen und Lerneinheiten.
import { years, areas as baseAreas, exams as examInfo } from '../content/curriculum.js';
import sources from '../content/sources.js';
import unitIds from '../content/units/index.js';
import * as store from './store.js';

export { years, sources, examInfo };
export const areas = [];
export const areaById = new Map();
export const topicById = new Map();
export const unitById = new Map();
export const taskById = new Map(); // taskId -> { task, unit, parent }
export const sourceById = new Map(sources.map((s) => [s.id, s]));
export const loadErrors = [];

export function hashStr(s) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
  return (h >>> 0).toString(36);
}

export async function loadContent() {
  const results = await Promise.allSettled(unitIds.map((id) => import(`../content/units/${id}.js`)));
  results.forEach((r, i) => {
    if (r.status === 'fulfilled') registerUnit(r.value.default, false);
    else loadErrors.push(`Lerneinheit „${unitIds[i]}“ konnte nicht geladen werden: ${r.reason?.message || r.reason}`);
  });
  rebuildAreas();
}

// Eigene Lerneinheiten (z. B. aus Lernzetteln erzeugte Karteikarten und Quizfragen)
export function registerCustomUnits() {
  for (const [id, u] of unitById) if (u.custom) { unitById.delete(id); for (const t of u.tasks || []) taskById.delete(t.id); }
  for (const u of store.all('customunits')) registerUnit(structuredClone(u), true);
}

function registerUnit(u, custom) {
  if (!u?.id) return;
  u.custom = custom;
  u.flashcards = (u.flashcards || []).map((c) => ({ ...c, id: c.id || u.id + '~' + hashStr(c.q) }));
  unitById.set(u.id, u);
  for (const t of u.tasks || []) {
    t.unitId = u.id;
    taskById.set(t.id, { task: t, unit: u });
    if (t.type === 'case') for (const p of t.parts || []) { p.unitId = u.id; taskById.set(p.id, { task: p, unit: u, parent: t }); }
  }
}

// Eigene Fächer aus dem Stundenplan werden als zusätzliche Bereiche angehängt.
export function rebuildAreas() {
  registerCustomUnits();
  areas.length = 0; areaById.clear(); topicById.clear();
  const custom = store.all('subjects').filter((s) => s.custom).map((s) => ({
    id: s.id, kind: 'custom', year: Number(s.year ?? 0), title: s.title, custom: true,
    topics: (s.topics || []).map((tp) => ({ id: tp.id, title: tp.title, units: [] }))
  }));
  for (const a of [...baseAreas, ...custom]) {
    const area = { ...a, topics: a.topics.map((tp) => ({ ...tp, areaId: a.id })) };
    areas.push(area); areaById.set(area.id, area);
    for (const tp of area.topics) topicById.set(tp.id, tp);
  }
}

export function areaLabel(a) {
  if (!a) return '';
  if (a.kind === 'lf') return `LF ${a.no}`;
  if (a.id === 'WISO') return 'WiSo';
  return a.title;
}
export const areaFull = (a) => a ? (a.kind === 'lf' ? `Lernfeld ${a.no}: ${a.title}` : a.title) : '';

export function unitsOfTopic(topicId) {
  const tp = topicById.get(topicId);
  return (tp?.units || []).map((id) => unitById.get(id)).filter(Boolean);
}
export function unitsOfArea(areaId) {
  const a = areaById.get(areaId);
  return a ? a.topics.flatMap((tp) => unitsOfTopic(tp.id)) : [];
}
export function allUnits() { return Array.from(unitById.values()); }

// Abdeckung: vollstaendig | teilweise | offen | pruefen
export function topicCoverage(tp) {
  // Ohne eigene Lerneinheit zählt die Einheit des verknüpften Themas (z. B. WiSo), damit nichts doppelt geschrieben wird.
  let units = unitsOfTopic(tp.id);
  if (!units.length) units = (tp.alsoIn || []).flatMap((o) => unitsOfTopic(o));
  if (tp.check || /zu prüfen/i.test(tp.title)) return 'pruefen';
  if (!units.length) return 'offen';
  if (units.some((u) => u.status === 'pruefen')) return 'pruefen';
  if (units.every((u) => u.status === 'vollstaendig')) return 'vollstaendig';
  return 'teilweise';
}
export const coverageLabel = { vollstaendig: 'Vollständig ausgearbeitet', teilweise: 'Teilweise ausgearbeitet', offen: 'Noch nicht ausgearbeitet', pruefen: 'Quelle/Zuordnung prüfen' };

export function coverageStats() {
  const stats = { vollstaendig: 0, teilweise: 0, offen: 0, pruefen: 0 };
  for (const a of areas) for (const tp of a.topics) stats[topicCoverage(tp)]++;
  return stats;
}

// Alle Aufgaben (ohne Teilaufgaben) gefiltert.
export function tasksFor({ areaIds = [], topicIds = [], difficulty = [] } = {}) {
  const out = [];
  for (const u of unitById.values()) {
    if (areaIds.length && !areaIds.includes(u.area)) continue;
    if (topicIds.length && !topicIds.includes(u.topic)) continue;
    for (const t of u.tasks || []) {
      if (difficulty.length && !difficulty.includes(t.difficulty || 1)) continue;
      out.push(t);
    }
  }
  return out;
}

export function sourceText(s) {
  if (s.id && sourceById.has(s.id)) {
    const src = sourceById.get(s.id);
    return { title: src.title, publisher: src.publisher, url: src.url, asOf: src.asOf, ref: s.ref };
  }
  return s;
}

// Globales Lexikon aus allen Lerneinheiten.
export function glossary() {
  const map = new Map();
  for (const u of unitById.values()) for (const t of u.terms || []) {
    const k = t.term.toLowerCase();
    if (!map.has(k)) map.set(k, { term: t.term, def: t.def, units: [u.id] });
    else map.get(k).units.push(u.id);
  }
  return Array.from(map.values()).sort((a, b) => a.term.localeCompare(b.term, 'de'));
}

// Formelsammlung aus allen Rechenaufgaben.
export function formulas() {
  const map = new Map();
  for (const u of unitById.values()) {
    const tasks = (u.tasks || []).flatMap((t) => t.type === 'case' ? t.parts || [] : [t]);
    for (const t of tasks) if (t.type === 'calc' && t.formula) {
      const k = t.formula.trim();
      if (!map.has(k)) map.set(k, { formula: k, units: new Set([u.id]), example: t, fields: t.fields });
      else map.get(k).units.add(u.id);
    }
  }
  return Array.from(map.values()).map((f) => ({ ...f, units: Array.from(f.units) }));
}
