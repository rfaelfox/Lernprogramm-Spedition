// Regelbasierte Auswertung von Aufgaben. Ergebnis: { score (0..1), points, max, details[], selfAssess }
import { parseNumber, normText } from './util.js';

export function maxPoints(task) {
  if (task.type === 'case') return (task.parts || []).reduce((s, p) => s + maxPoints(p), 0);
  return task.points || defaultPoints(task);
}
function defaultPoints(t) {
  switch (t.type) {
    case 'calc': return (t.fields || []).length || 1;
    case 'booking': return (t.entries || []).length || 1;
    case 'match': return (t.pairs || []).length || 1;
    case 'order': return (t.items || []).length || 1;
    case 'cloze': return clozeGaps(t.text).length || 1;
    case 'text': return (t.criteria || []).reduce((s, c) => s + (c.points || 1), 0) || 2;
    default: return 1;
  }
}

export function clozeGaps(text) {
  const out = []; const re = /\[\[([^\]]+)\]\]/g; let m;
  while ((m = re.exec(text || ''))) out.push(m[1].split('|').map((s) => s.trim()));
  return out;
}

const close = (given, expected, tol) => {
  const g = parseNumber(given);
  if (isNaN(g)) return false;
  const t = tol ?? Math.max(0.005, Math.abs(expected) * 0.0005);
  if (Math.abs(g - expected) <= t + 1e-9) return true;
  // "1.234" ist mehrdeutig (Tausenderpunkt oder Dezimalpunkt): beide Lesarten gelten lassen.
  const alt = String(given).trim().match(/^-?\d{1,3}\.\d{3}$/) ? parseFloat(String(given).trim()) : NaN;
  return !isNaN(alt) && Math.abs(alt - expected) <= t + 1e-9;
};

function textMatches(given, alts) {
  const g = normText(given).replace(/\s+/g, ' ');
  if (!g) return false;
  return alts.some((a) => {
    const n = normText(a).replace(/\s+/g, ' ');
    if (g === n) return true;
    const gn = parseNumber(given), an = parseNumber(a);
    if (!isNaN(gn) && !isNaN(an)) return Math.abs(gn - an) < 1e-9;
    // Kleine Tippfehler bei längeren Wörtern tolerieren
    return n.length >= 7 && lev(g, n) <= 1;
  });
}
function lev(a, b) {
  const dp = Array.from({ length: a.length + 1 }, (_, i) => [i]);
  for (let j = 1; j <= b.length; j++) dp[0][j] = j;
  for (let i = 1; i <= a.length; i++) for (let j = 1; j <= b.length; j++)
    dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
  return dp[a.length][b.length];
}
const normAcc = (s) => normText(s).replace(/\b(a\.?\s?ll|aus lieferungen und leistungen)\b/g, 'all').replace(/\s+/g, ' ').trim();

// answer-Formate je Typ:
// mc: [Indizes] · cloze: [Texte] · calc: {feldId: Text} · booking: [{side, account, amount}]
// match: [rechterIndexFürLinks0, ...] (Indizes in t.pairs) · order: [ursprüngliche Indizes in gewählter Reihenfolge]
// text: { text, self: Punkte|null }
export function grade(task, answer) {
  const max = maxPoints(task);
  const details = [];
  let frac = 0;
  switch (task.type) {
    case 'mc': {
      const correct = new Set(task.correct || []);
      const chosen = new Set(answer || []);
      const multi = correct.size > 1 || task.multi;
      if (!multi) frac = chosen.size === 1 && correct.has([...chosen][0]) ? 1 : 0;
      else {
        let right = 0, wrong = 0;
        chosen.forEach((i) => (correct.has(i) ? right++ : wrong++));
        frac = Math.max(0, (right - wrong) / correct.size);
      }
      (task.options || []).forEach((o, i) => details.push({ label: o, ok: correct.has(i) === chosen.has(i), expected: correct.has(i), chosen: chosen.has(i) }));
      break;
    }
    case 'cloze': {
      const gaps = clozeGaps(task.text);
      let ok = 0;
      gaps.forEach((alts, i) => { const r = textMatches((answer || [])[i], alts); if (r) ok++; details.push({ ok: r, given: (answer || [])[i] || '', expected: alts[0] }); });
      frac = gaps.length ? ok / gaps.length : 0;
      break;
    }
    case 'calc': {
      const fields = task.fields || [];
      let ok = 0;
      fields.forEach((f) => { const g = (answer || {})[f.id]; const r = close(g, f.answer, f.tol); if (r) ok++; details.push({ label: f.label, ok: r, given: g ?? '', expected: f.answer, unit: f.unit || '', tol: f.tol }); });
      // Richtiges Endergebnis zählt mindestens die Hälfte, auch wenn Zwischenschritte fehlen.
      const last = fields[fields.length - 1];
      const lastOk = last && details[details.length - 1].ok;
      frac = fields.length ? ok / fields.length : 0;
      if (lastOk) frac = Math.max(frac, 0.5);
      break;
    }
    case 'booking': {
      const exp = (task.entries || []).map((e) => ({ ...e, used: false }));
      const given = (answer || []).filter((g) => g && g.account);
      let ok = 0;
      for (const g of given) {
        const hit = exp.find((e) => !e.used && e.side === g.side && normAcc(e.account) === normAcc(g.account) && close(g.amount, e.amount, 0.01));
        if (hit) { hit.used = true; ok++; details.push({ ok: true, given: g }); }
        else {
          const sameAcc = exp.find((e) => !e.used && normAcc(e.account) === normAcc(g.account));
          let why = 'Konto gehört nicht in diesen Buchungssatz.';
          if (sameAcc && sameAcc.side !== g.side) why = `Richtiges Konto, aber falsche Seite (richtig: ${sameAcc.side === 'S' ? 'Soll' : 'Haben'}).`;
          else if (sameAcc) why = 'Richtiges Konto und richtige Seite, aber falscher Betrag.';
          details.push({ ok: false, given: g, why });
        }
      }
      const extra = Math.max(0, given.length - exp.length);
      frac = exp.length ? Math.max(0, (ok - extra * 0.5) / exp.length) : 0;
      exp.filter((e) => !e.used).forEach((e) => details.push({ ok: false, missing: e }));
      break;
    }
    case 'match': {
      const pairs = task.pairs || [];
      let ok = 0;
      pairs.forEach((p, i) => { const g = (answer || [])[i]; const r = g === i || (g != null && pairs[g]?.[1] === p[1]); if (r) ok++; details.push({ left: p[0], ok: r, given: g != null ? pairs[g]?.[1] : '', expected: p[1] }); });
      frac = pairs.length ? ok / pairs.length : 0;
      break;
    }
    case 'order': {
      const items = task.items || [];
      const a = answer || [];
      let ok = 0;
      items.forEach((it, i) => { const r = a[i] === i || items[a[i]] === it; if (r) ok++; details.push({ pos: i + 1, ok: r, given: items[a[i]] ?? '', expected: it }); });
      frac = items.length ? ok / items.length : 0;
      break;
    }
    case 'text': {
      const text = answer?.text || '';
      const crit = task.criteria || [];
      let sugg = 0;
      crit.forEach((c) => {
        const hits = (c.keywords || []).every((group) => group.split('|').some((k) => normText(text).includes(normText(k))));
        const has = (c.keywords || []).length ? hits : false;
        if (has) sugg += c.points || 1;
        details.push({ label: c.text, ok: has, points: c.points || 1, auto: true });
      });
      const self = answer?.self;
      const pts = self != null ? Math.min(max, Math.max(0, Number(self))) : null;
      return { score: pts != null ? pts / max : null, points: pts, max, details, selfAssess: true, suggested: Math.min(max, sugg) };
    }
    case 'case': {
      const parts = task.parts || [];
      let pts = 0, pending = false;
      const sub = parts.map((p, i) => { const r = grade(p, (answer || [])[i]); if (r.points == null) pending = true; else pts += r.points; return r; });
      return { score: pending ? null : (max ? pts / max : 0), points: pending ? null : round(pts), max, details: sub, parts: sub, selfAssess: pending };
    }
    default:
      frac = 0;
  }
  return { score: frac, points: round(frac * max), max, details };
}
const round = (x) => Math.round(x * 100) / 100;

// Ist eine Antwort „leer“ (noch nicht bearbeitet)?
export function isEmpty(task, a) {
  if (a == null) return true;
  switch (task.type) {
    case 'mc': return !a.length;
    case 'cloze': return !a.some((x) => String(x || '').trim());
    case 'calc': return !Object.values(a).some((x) => String(x || '').trim());
    case 'booking': return !a.some((r) => r && r.account);
    case 'text': return !String(a.text || '').trim();
    case 'case': return (task.parts || []).every((p, i) => isEmpty(p, a[i]));
    default: return false;
  }
}
