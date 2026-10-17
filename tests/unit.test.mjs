// Reine Logik-Tests: node --test tests/
import test from 'node:test';
import assert from 'node:assert/strict';
import { parseNumber } from '../app/js/util.js';
import { grade } from '../app/js/grading.js';
import { subjectAverage, neededGrade, parseGrade, pointsToGrade, IHK_KEY, ihkGrade } from '../app/js/views/grades.js';
import { merge3 } from '../app/js/sync.js';

test('Zahlenformate werden gleichwertig erkannt', () => {
  for (const [s, v] of [['1.234,56 €', 1234.56], ['1234.56', 1234.56], ['1 234,5 EUR', 1234.5], ['12,5 %', 12.5], ['-3,2', -3.2], ['1.234', 1234], ['0,5', 0.5], ['2.000.000', 2000000], ['1,234.5', 1234.5], ['19%', 19], ['0.525', 0.525]]) assert.equal(parseNumber(s), v, s);
  assert.ok(isNaN(parseNumber('abc')));
});

test('Rechenaufgabe: Toleranz, Zwischenschritte, Teilpunkte', () => {
  const t = { type: 'calc', points: 3, fields: [{ id: 'a', answer: 190, tol: 0.01 }, { id: 'b', answer: 1190, tol: 0.01 }] };
  assert.equal(grade(t, { a: '190,00', b: '1.190 €' }).score, 1);
  assert.equal(grade(t, { a: '191', b: '1190' }).score, 0.5);
  assert.equal(grade(t, { a: '190', b: '1200' }).score, 0.5);
  assert.equal(grade(t, { a: '', b: '' }).score, 0);
  assert.equal(grade(t, { a: '190,004', b: '1190' }).score, 1);
});

test('Multiple Choice und Mehrfachauswahl', () => {
  assert.equal(grade({ type: 'mc', options: ['a', 'b', 'c'], correct: [1] }, [1]).score, 1);
  assert.equal(grade({ type: 'mc', options: ['a', 'b', 'c'], correct: [1] }, [0]).score, 0);
  const m = { type: 'mc', options: ['a', 'b', 'c', 'd'], correct: [0, 2] };
  assert.equal(grade(m, [0, 2]).score, 1);
  assert.equal(grade(m, [0]).score, 0.5);
  assert.equal(grade(m, [0, 1]).score, 0);
  assert.equal(grade(m, [0, 1, 2, 3]).score, 0);
});

test('Buchungssatz: Konten, Seiten, Beträge, Reihenfolge egal', () => {
  const t = { type: 'booking', entries: [{ side: 'S', account: 'Fuhrpark', amount: 1000 }, { side: 'S', account: 'Vorsteuer', amount: 190 }, { side: 'H', account: 'Bank', amount: 1190 }] };
  assert.equal(grade(t, [{ side: 'H', account: 'Bank', amount: '1.190,00' }, { side: 'S', account: 'Vorsteuer', amount: '190' }, { side: 'S', account: 'Fuhrpark', amount: '1000' }]).score, 1);
  const r = grade(t, [{ side: 'H', account: 'Fuhrpark', amount: '1000' }, { side: 'S', account: 'Vorsteuer', amount: '190' }, { side: 'H', account: 'Bank', amount: '1190' }]);
  assert.ok(r.score > 0.6 && r.score < 0.7);
  assert.match(r.details.find((d) => !d.ok && d.given).why, /falsche Seite/);
});

test('Lückentext mit Alternativen, Umlaut-Schreibweisen und Tippfehlern', () => {
  const t = { type: 'cloze', text: 'Der [[Frachtführer]] haftet bis [[8,33|8.33]] SZR.' };
  assert.equal(grade(t, ['Frachtfuehrer', '8.33']).score, 1);
  assert.equal(grade(t, ['frachtführer', '8,33']).score, 1);
  assert.equal(grade(t, ['Frachführer', '8,33']).score, 1);
  assert.equal(grade(t, ['Spediteur', '8,33']).score, 0.5);
});

test('Zuordnung und Reihenfolge', () => {
  const m = { type: 'match', pairs: [['A', '1'], ['B', '2'], ['C', '3']] };
  assert.equal(grade(m, [0, 1, 2]).score, 1);
  assert.equal(grade(m, [1, 0, 2]).score, 1 / 3);
  const o = { type: 'order', items: ['x', 'y', 'z'] };
  assert.equal(grade(o, [0, 1, 2]).score, 1);
  assert.equal(grade(o, [2, 1, 0]).score, 1 / 3);
});

test('Freitext: nur Vorschlag, Selbstbewertung entscheidet', () => {
  const t = { type: 'text', criteria: [{ text: 'Grenze', keywords: ['8,33|8.33', 'SZR|Sonderziehungsrecht'], points: 2 }, { text: 'Rohgewicht', keywords: ['rohgewicht'], points: 1 }] };
  const r = grade(t, { text: 'Er haftet mit 8,33 Sonderziehungsrechten je kg', self: null });
  assert.equal(r.score, null); assert.equal(r.suggested, 2);
  assert.equal(grade(t, { text: 'x', self: 3 }).score, 1);
});

test('Noten: Tendenzen, Punkte-Schlüssel', () => {
  assert.equal(parseGrade('2-', 0.3), 2.3); assert.equal(parseGrade('2+', 0.3), 1.7); assert.equal(parseGrade('2,5'), 2.5); assert.ok(isNaN(parseGrade('7')));
  assert.equal(pointsToGrade(92, 100, IHK_KEY), 1); assert.equal(pointsToGrade(91, 100, IHK_KEY), 2); assert.equal(pointsToGrade(49.5, 100, IHK_KEY), 5); assert.equal(pointsToGrade(25, 50, IHK_KEY), 4);
  assert.equal(ihkGrade(66).grade, 4);
});

test('Durchschnitt berücksichtigt Gewichtungen je Leistungsart und Einzelgewicht', () => {
  const cfg = { weights: { Klassenarbeit: 2, Test: 1 }, split: false, writtenCats: [], writtenShare: 50 };
  const gs = [{ grade: 2, category: 'Klassenarbeit' }, { grade: 4, category: 'Test' }];
  assert.equal(subjectAverage(gs, cfg).toFixed(4), ((2 * 2 + 4) / 3).toFixed(4));
  assert.equal(subjectAverage([...gs, { grade: 1, category: 'Test', weight: 3 }], cfg).toFixed(4), ((4 + 4 + 3) / 6).toFixed(4));
  const split = { ...cfg, split: true, writtenCats: ['Klassenarbeit', 'Test'], writtenShare: 60 };
  const gs2 = [{ grade: 2, category: 'Klassenarbeit' }, { grade: 3, category: 'Test' }, { grade: 1, category: 'mündlich' }];
  assert.equal(subjectAverage(gs2, split).toFixed(4), (((2 * 2 + 3) / 3) * 0.6 + 1 * 0.4).toFixed(4));
});

test('Benötigte Note für Zielwert', () => {
  const cfg = { weights: { Klassenarbeit: 2, Test: 1 }, split: false };
  const gs = [{ grade: 3, category: 'Klassenarbeit' }];
  const n = neededGrade(gs, cfg, 2.5, 'Klassenarbeit');
  assert.ok(Math.abs(n.grade - 2) < 0.01, JSON.stringify(n));
  assert.equal(neededGrade(gs, cfg, 1.2, 'Test').reachable, false);
  assert.equal(neededGrade([{ grade: 1, category: 'Klassenarbeit' }], cfg, 3, 'Test').safe, true);
});

test('Sync-Zusammenführung: getrennte Felder werden kombiniert, echte Konflikte erkannt', () => {
  const base = { a: 1, b: 1, c: 1 };
  const r = merge3(base, { a: 2, b: 1, c: 1 }, { a: 1, b: 3, c: 1 });
  assert.deepEqual(r.out, { a: 2, b: 3, c: 1 }); assert.deepEqual(r.conflicts, []);
  const r2 = merge3(base, { a: 2, b: 1, c: 1 }, { a: 5, b: 1, c: 1 });
  assert.deepEqual(r2.conflicts, ['a']);
});
