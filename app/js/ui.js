// Gemeinsame Oberflächenbausteine: Symbole, Meldungen, Dialoge.
import { esc } from './util.js';

const P = {
  home: '<path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',
  learn: '<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 21V5M8 7h7M8 11h7"/>',
  practice: '<path d="M9 11l3 3 8-8"/><path d="M20 12v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9"/>',
  sheet: '<path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6M8 13h8M8 17h6"/>',
  grades: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
  plan: '<rect x="3" y="4" width="18" height="17" rx="2"/><path d="M3 9h18M8 2v4M16 2v4M7 13h3M7 17h3M13 13h4"/>',
  materials: '<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
  lexicon: '<path d="M12 6c-2-1.5-5-2-8-1.5V19c3-.5 6 0 8 1.5 2-1.5 5-2 8-1.5V4.5C17 4 14 4.5 12 6z"/><path d="M12 6v14.5"/>',
  settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>',
  more: '<circle cx="5" cy="12" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="19" cy="12" r="1.6"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/>',
  star: '<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>',
  bookmark: '<path d="M6 3h12v18l-6-4-6 4z"/>',
  flag: '<path d="M5 21V4M5 4h11l-2 4 2 4H5"/>',
  trash: '<path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/>',
  edit: '<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M14 6l4 4"/>',
  print: '<path d="M6 9V3h12v6M6 18H4v-6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6h-2"/><rect x="6" y="14" width="12" height="7"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  up: '<path d="M12 19V5M6 11l6-6 6 6"/>',
  down: '<path d="M12 5v14M6 13l6 6 6-6"/>',
  cards: '<rect x="3" y="6" width="14" height="14" rx="2"/><path d="M7 2h12a2 2 0 0 1 2 2v12"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  sync: '<path d="M20 11a8 8 0 0 0-14.3-4.9L4 8M4 4v4h4M4 13a8 8 0 0 0 14.3 4.9L20 16M20 20v-4h-4"/>',
  truck: '<path d="M2 6h11v10H2zM13 9h4l4 4v3h-8"/><circle cx="6" cy="18" r="2"/><circle cx="17" cy="18" r="2"/>',
  back: '<path d="M15 18l-6-6 6-6"/>',
  check: '<path d="M5 12l5 5 9-10"/>',
  x: '<path d="M6 6l12 12M18 6L6 18"/>'
};
export const icon = (name, cls = '') => `<svg class="${cls}" width="22" height="22" style="vertical-align:-5px;flex:none" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[name] || ''}</svg>`;

export const logo = `<svg viewBox="0 0 48 48" aria-hidden="true"><rect width="48" height="48" rx="12" fill="#0f2236"/><path d="M8 30h20V16H8z" fill="#19c3d6"/><path d="M28 21h6l6 6v3H28z" fill="#6ea8ff"/><circle cx="14" cy="33" r="3.5" fill="#fff"/><circle cx="34" cy="33" r="3.5" fill="#fff"/><path d="M12 22h12M12 26h8" stroke="#0f2236" stroke-width="2.2" stroke-linecap="round"/></svg>`;

// Dezentes Logistikmotiv (Container, Route)
export const motif = `<svg class="motif" viewBox="0 0 240 140" fill="none" stroke="#fff" stroke-width="2"><rect x="20" y="70" width="70" height="40" rx="3"/><path d="M32 70v40M44 70v40M56 70v40M68 70v40M80 70v40"/><rect x="95" y="70" width="70" height="40" rx="3"/><path d="M107 70v40M119 70v40M131 70v40M143 70v40M155 70v40"/><rect x="57" y="28" width="70" height="40" rx="3"/><path d="M69 28v40M81 28v40M93 28v40M105 28v40M117 28v40"/><path d="M180 110c20-30 10-60 40-80" stroke-dasharray="6 6"/><circle cx="220" cy="30" r="5"/></svg>`;

export function toast(msg, kind = '') {
  let wrap = document.querySelector('.toast-wrap');
  if (!wrap) { wrap = document.createElement('div'); wrap.className = 'toast-wrap'; wrap.setAttribute('role', 'status'); wrap.setAttribute('aria-live', 'polite'); document.body.appendChild(wrap); }
  const t = document.createElement('div');
  t.className = 'toast ' + kind; t.textContent = msg;
  wrap.appendChild(t);
  setTimeout(() => t.remove(), kind === 'bad' ? 8000 : 3500);
}

// Dialog mit Formular-Inhalt. Gibt Promise mit dem gedrückten Knopf-Wert zurück.
export function dialog({ title, body, actions = [{ label: 'OK', value: 'ok', primary: true }], onOpen }) {
  return new Promise((resolve) => {
    const d = document.createElement('dialog');
    d.innerHTML = `<form method="dialog"><div class="dlg"><h2>${esc(title)}</h2>${body}</div><div class="dlg-actions">${actions.map((a) => `<button class="btn ${a.primary ? 'primary' : ''} ${a.danger ? 'danger' : ''}" value="${esc(a.value)}">${esc(a.label)}</button>`).join('')}</div></form>`;
    document.body.appendChild(d);
    d.addEventListener('close', () => { const v = d.returnValue; const data = new FormData(d.querySelector('form')); d.remove(); resolve({ value: v, data }); });
    d.showModal();
    onOpen?.(d);
  });
}

export async function confirmDanger(title, text, confirmLabel = 'Löschen', requireWord = null) {
  const body = `<p>${esc(text)}</p>${requireWord ? `<div class="field"><label for="cw">Zur Bestätigung „${esc(requireWord)}“ eingeben</label><input id="cw" name="cw" type="text" autocomplete="off"></div>` : ''}`;
  const r = await dialog({ title, body, actions: [{ label: 'Abbrechen', value: 'cancel' }, { label: confirmLabel, value: 'yes', danger: true }] });
  if (r.value !== 'yes') return false;
  if (requireWord && String(r.data.get('cw') || '').trim().toUpperCase() !== requireWord.toUpperCase()) { toast('Bestätigungswort stimmt nicht. Nichts wurde gelöscht.', 'bad'); return false; }
  return true;
}

export async function safe(fn, okMsg) {
  try { const r = await fn(); if (okMsg) toast(okMsg, 'ok'); return r; }
  catch (e) { console.error(e); toast((e?.message || String(e)), 'bad'); return undefined; }
}

export const progressBar = (v) => `<div class="progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${Math.round(v * 100)}"><i style="width:${Math.round(v * 100)}%"></i></div>`;
export const ring = (v, label) => `<div class="ring" style="--v:${Math.round(v * 100)}" role="img" aria-label="${esc(label || Math.round(v * 100) + ' %')}"><span>${Math.round(v * 100)}%</span></div>`;

export const statusBadge = (s) => {
  const cls = { 'offen': '', 'in Arbeit': 'accent', 'wiederholen': 'warn', 'sicher': 'ok' }[s] ?? '';
  return `<span class="badge ${cls}">${esc(s)}</span>`;
};
export const coverageBadge = (c) => {
  const map = { vollstaendig: ['ok', 'ausgearbeitet'], teilweise: ['warn', 'teilweise'], offen: ['', 'noch offen'], pruefen: ['bad', 'zu prüfen'] };
  const [cls, l] = map[c] || ['', c];
  return `<span class="badge ${cls}">${l}</span>`;
};
