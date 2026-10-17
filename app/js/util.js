// Kleine Hilfsfunktionen ohne Abhängigkeiten.

export const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

export const uid = (prefix = '') => {
  const b = crypto.getRandomValues(new Uint8Array(10));
  return prefix + Array.from(b, (x) => x.toString(36).padStart(2, '0')).join('').slice(0, 16);
};

export const $ = (sel, root = document) => root.querySelector(sel);
export const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

export const todayISO = (d = new Date()) => {
  const z = new Date(d.getTime() - d.getTimezoneOffset() * 60000);
  return z.toISOString().slice(0, 10);
};
export const addDays = (iso, n) => {
  const d = new Date(iso + 'T12:00:00');
  d.setDate(d.getDate() + n);
  return todayISO(d);
};
export const daysBetween = (a, b) => Math.round((new Date(b + 'T12:00:00') - new Date(a + 'T12:00:00')) / 86400000);
export const fmtDate = (iso) => {
  if (!iso) return '';
  const d = new Date(iso.length <= 10 ? iso + 'T12:00:00' : iso);
  return d.toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' });
};
export const fmtDateTime = (iso) => iso ? new Date(iso).toLocaleString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' }) : '';
export const fmtNum = (n, d = 2) => (n == null || isNaN(n)) ? '–' : Number(n).toLocaleString('de-DE', { minimumFractionDigits: 0, maximumFractionDigits: d });

// Zahlen in deutschen und englischen Schreibweisen lesen: "1.234,56 €", "1234.56", "1 234,5 EUR", "12,5 %".
export function parseNumber(input) {
  if (input == null) return NaN;
  let s = String(input).trim().toLowerCase();
  if (!s) return NaN;
  s = s.replace(/(eur|euro|€|%|kg|km|t|sdr|szr|stk|std|h|min|m³|m3|m²|m2|m|tage?|paletten?|pal)\.?$/g, '').trim();
  s = s.replace(/[\s '’]/g, '');
  s = s.replace(/^\+/, '').replace(/−/g, '-');
  const hasComma = s.includes(','), hasDot = s.includes('.');
  if (hasComma && hasDot) {
    if (s.lastIndexOf(',') > s.lastIndexOf('.')) s = s.replace(/\./g, '').replace(',', '.');
    else s = s.replace(/,/g, '');
  } else if (hasComma) {
    s = s.replace(',', '.');
  } else if (hasDot) {
    // "1.234" mit genau drei Nachkommastellen und ohne weitere Punkte → Tausenderpunkt (deutsch)
    const parts = s.split('.');
    // (nicht bei "0.525": vor einem Tausenderpunkt steht nie eine einzelne 0)
    if (parts.length > 2 || (parts.length === 2 && parts[1].length === 3 && /^-?\d{1,3}$/.test(parts[0]) && !/^-?0$/.test(parts[0]))) s = s.replace(/\./g, '');
  }
  if (!/^-?\d*\.?\d+$/.test(s)) return NaN;
  return parseFloat(s);
}

export const normText = (s) => String(s ?? '').toLowerCase()
  .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss')
  .replace(/[^a-z0-9,.%-]+/g, ' ').trim();

export function debounce(fn, ms = 300) {
  let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); };
}

export function shuffle(arr, seed) {
  const a = arr.slice();
  let r = seed ?? Math.random() * 1e9;
  const rnd = () => { r = (r * 9301 + 49297) % 233280; return r / 233280; };
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}

export function download(filename, content, type = 'application/json') {
  const blob = content instanceof Blob ? content : new Blob([content], { type });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 4000);
}

export const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export function deepEqual(a, b) {
  if (a === b) return true;
  if (typeof a !== typeof b || a == null || b == null || typeof a !== 'object') return false;
  if (Array.isArray(a) !== Array.isArray(b)) return false;
  const ka = Object.keys(a), kb = Object.keys(b);
  if (ka.length !== kb.length) return false;
  return ka.every((k) => deepEqual(a[k], b[k]));
}
