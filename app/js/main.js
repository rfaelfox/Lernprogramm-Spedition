// Start der App: Speicher laden, Inhalte laden, Navigation und Statusanzeige.
import * as store from './store.js';
import * as C from './content.js';
import * as sync from './sync.js';
import { createSupabaseAdapter } from './supabase.js';
import config from '../config.js';
import { icon, logo, toast, dialog } from './ui.js';
import { esc, fmtDateTime } from './util.js';
import { idb } from './db.js';
import * as upd from './update.js';

const routes = {
  '': () => import('./views/dashboard.js'),
  lernen: () => import('./views/learn.js'),
  karten: () => import('./views/cards.js'),
  ueben: () => import('./views/practice.js'),
  lernzettel: () => import('./views/sheets.js'),
  noten: () => import('./views/grades.js'),
  plan: () => import('./views/plan.js'),
  materialien: () => import('./views/materials.js'),
  lexikon: () => import('./views/lexicon.js'),
  suche: () => import('./views/search.js'),
  fehlerheft: () => import('./views/mistakes.js'),
  abdeckung: () => import('./views/coverage.js'),
  einstellungen: () => import('./views/settings.js')
};

export const NAV = [
  { r: '', label: 'Dashboard', icon: 'home' },
  { r: 'lernen', label: 'Lernen', icon: 'learn' },
  { r: 'ueben', label: 'Üben', icon: 'practice' },
  { r: 'lernzettel', label: 'Lernzettel', icon: 'sheet' },
  { r: 'noten', label: 'Noten', icon: 'grades' },
  { r: 'plan', label: 'Termine & Lernplan', icon: 'plan' },
  { r: 'materialien', label: 'Materialien', icon: 'materials' },
  { r: 'lexikon', label: 'Lexikon & Formeln', icon: 'lexicon' },
  { r: 'einstellungen', label: 'Einstellungen', icon: 'settings' }
];
const MOBILE = ['', 'lernen', 'ueben', 'noten'];

let current = { cleanup: null };
export const app = { title: (t) => { const el = document.querySelector('.topbar .title'); if (el) el.textContent = t; document.title = t ? `${t} · Lernprogramm` : 'Lernprogramm'; } };

function parseHash() {
  const h = location.hash.replace(/^#\/?/, '');
  const [path, qs] = h.split('?');
  const parts = path.split('/').filter(Boolean).map(decodeURIComponent);
  return { route: parts[0] || '', args: parts.slice(1), query: new URLSearchParams(qs || '') };
}
export const go = (hash) => { location.hash = hash; };

function shell() {
  document.body.innerHTML = `
  <a class="skip" href="#main">Zum Inhalt springen</a>
  <div class="shell">
    <aside class="sidebar" aria-label="Hauptnavigation">
      <a class="brand" href="#/">${logo}<span><b>Lernprogramm</b><small>Spedition &amp; Logistik</small></span></a>
      <nav class="nav">${NAV.map((n) => `<a href="#/${n.r}" data-r="${n.r}">${icon(n.icon)}<span>${n.label}</span></a>`).join('')}</nav>
      <div class="grow"></div>
      <nav class="nav small"><a href="#/fehlerheft" data-r="fehlerheft">${icon('flag')}<span>Fehlerheft</span></a><a href="#/abdeckung" data-r="abdeckung">${icon('check')}<span>Abdeckung & Quellen</span></a></nav>
      <div class="small" style="padding:10px 12px;color:#7d90a3">Version ${esc(upd.versionLabel())}</div>
    </aside>
    <div class="main">
      <header class="topbar">
        <a class="btn icon ghost no-print" id="backBtn" href="javascript:history.back()" aria-label="Zurück" hidden>${icon('back')}</a>
        <div class="title" aria-live="polite"></div>
        <a class="btn icon ghost" href="#/suche" aria-label="Suche">${icon('search')}</a>
        <button class="btn small primary" id="updBtn" type="button" hidden>${icon('sync')} <span>Update</span></button>
        <button class="status-pill" id="statusPill" type="button" aria-live="polite"><i></i><span>…</span></button>
      </header>
      <main id="main" class="content" tabindex="-1"></main>
    </div>
  </div>
  <nav class="bottomnav" aria-label="Navigation">
    ${MOBILE.map((r) => { const n = NAV.find((x) => x.r === r); return `<a href="#/${r}" data-r="${r}">${icon(n.icon)}<span>${n.label === 'Dashboard' ? 'Start' : n.label}</span></a>`; }).join('')}
    <button type="button" id="moreBtn" aria-haspopup="true">${icon('more')}<span>Mehr</span></button>
  </nav>`;
  document.getElementById('moreBtn').onclick = openMore;
  document.getElementById('statusPill').onclick = () => go('#/einstellungen/daten');
  document.getElementById('updBtn').onclick = askUpdate;
}

// Neue Version anzeigen und auf Wunsch installieren.
export async function askUpdate() {
  const a = upd.updateState.available;
  if (!a) return;
  const r = await dialog({
    title: `Neue Version ${a.version}`,
    body: `${a.changes.length ? `<p><b>Neu:</b></p><ul>${a.changes.map((c) => `<li>${esc(c)}</li>`).join('')}</ul>` : ''}<p>Deine Daten (Noten, Fortschritt, Lernzettel, Materialien) bleiben erhalten. Die App lädt danach einmal neu.</p>`,
    actions: [{ label: 'Später', value: 'later' }, { label: 'Jetzt aktualisieren', value: 'go', primary: true }]
  });
  if (r.value !== 'go') return;
  const b = document.getElementById('updBtn');
  if (b) { b.disabled = true; b.querySelector('span').textContent = 'Wird aktualisiert …'; }
  try { await upd.applyUpdate(); }
  catch (e) { toast(e?.message || String(e), 'bad'); if (b) { b.disabled = false; b.querySelector('span').textContent = 'Update'; } }
}
function showUpdateButton() {
  const b = document.getElementById('updBtn');
  if (!b) return;
  const a = upd.updateState.available;
  b.hidden = !a;
  if (a) b.title = `Version ${a.version} ist verfügbar`;
}

function openMore() {
  const b = document.createElement('div');
  b.className = 'sheet-backdrop';
  const { route } = parseHash();
  b.innerHTML = `<div class="sheet" role="dialog" aria-label="Weitere Bereiche"><nav class="nav">${[...NAV.filter((n) => !MOBILE.includes(n.r)), { r: 'fehlerheft', label: 'Fehlerheft', icon: 'flag' }, { r: 'karten', label: 'Karteikarten', icon: 'cards' }, { r: 'abdeckung', label: 'Abdeckung & Quellen', icon: 'check' }].map((n) => `<a href="#/${n.r}" ${n.r === route ? 'aria-current="page"' : ''}>${icon(n.icon)}<span>${n.label}</span></a>`).join('')}</nav></div>`;
  b.onclick = (e) => { if (e.target === b || e.target.closest('a')) b.remove(); };
  document.body.appendChild(b);
  b.querySelector('a')?.focus();
}

async function render() {
  const { route, args, query } = parseHash();
  const load = routes[route] || routes[''];
  document.querySelectorAll('[data-r]').forEach((a) => { if (a.dataset.r === route) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current'); });
  document.getElementById('backBtn').hidden = !args.length && !['suche', 'fehlerheft', 'abdeckung', 'karten'].includes(route);
  if (current.cleanup) { try { current.cleanup(); } catch { /* ignorieren */ } current.cleanup = null; }
  const main = document.getElementById('main');
  try {
    const mod = await load();
    main.innerHTML = '';
    const cleanup = await mod.render(main, { args, query, app });
    if (typeof cleanup === 'function') current.cleanup = cleanup;
  } catch (e) {
    console.error(e);
    main.innerHTML = `<div class="note bad"><b>Diese Seite konnte nicht geladen werden.</b><p>${esc(e?.message || e)}</p><p>Wenn du offline bist, wurde dieser Bereich vermutlich noch nie online geöffnet.</p></div>`;
  }
  if (!sessionStorage.getItem('noScroll')) window.scrollTo(0, 0);
  sessionStorage.removeItem('noScroll');
}

function updateStatus() {
  const pill = document.getElementById('statusPill');
  if (!pill) return;
  const s = store.saveState, y = sync.syncState;
  let cls = 'ok', text = 'Lokal gespeichert';
  if (s.error) { cls = 'err'; text = 'Speicherfehler!'; }
  else if (s.pending) { cls = 'busy'; text = 'Speichert …'; }
  else if (y.status === 'läuft') { cls = 'busy'; text = 'Synchronisiert …'; }
  else if (y.status === 'fehler') { cls = 'err'; text = 'Sync-Fehler'; }
  else if (y.status === 'offline') { cls = 'warn'; text = y.pendingCount ? `Offline · ${y.pendingCount} ausstehend` : 'Offline'; }
  else if (y.status === 'ok') { cls = y.pendingCount ? 'warn' : 'ok'; text = y.pendingCount ? `${y.pendingCount} ausstehend` : 'Synchronisiert'; }
  else if (!navigator.onLine) { cls = 'ok'; text = 'Offline · lokal gespeichert'; }
  pill.className = 'status-pill ' + cls;
  pill.querySelector('span').textContent = text;
  pill.title = [s.lastSaved ? 'Zuletzt lokal gespeichert: ' + fmtDateTime(s.lastSaved) : '', y.lastSync ? 'Letzte Synchronisation: ' + fmtDateTime(y.lastSync) : 'Synchronisation: ' + (sync.getAdapter()?.ready() ? 'bereit' : 'nicht eingerichtet'), s.error || y.error || ''].filter(Boolean).join('\n');
}

export function applyTheme() {
  const s = store.settings();
  const root = document.documentElement;
  if (s.theme === 'auto') root.removeAttribute('data-theme'); else root.dataset.theme = s.theme;
  if (s.reduceMotion) root.dataset.motion = 'reduce'; else root.removeAttribute('data-motion');
  const dark = s.theme === 'dark' || (s.theme === 'auto' && matchMedia('(prefers-color-scheme: dark)').matches);
  document.querySelector('meta[name=theme-color]')?.setAttribute('content', dark ? '#09111b' : '#0f1b2a');
}

export async function setupSync() {
  const url = (await idb.getMeta('sync.url')) || config.supabaseUrl;
  const key = (await idb.getMeta('sync.key')) || config.supabaseKey;
  if (!url || !key) { sync.setAdapter(null); return null; }
  const a = createSupabaseAdapter({ url, key });
  await a.init();
  sync.setAdapter(a);
  sync.syncState.user = a.user();
  return a;
}

async function boot() {
  shell();
  try {
    await store.initStore();
  } catch (e) {
    document.getElementById('main').innerHTML = `<div class="note bad"><b>Der lokale Speicher kann nicht geöffnet werden.</b><p>${esc(e.message || e)}</p><p>Im privaten Modus mancher Browser ist dauerhafte Speicherung nicht möglich. Ohne Speicher arbeitet die App nicht, damit keine Eingaben verloren gehen.</p></div>`;
    return;
  }
  applyTheme();
  matchMedia('(prefers-color-scheme: dark)').addEventListener?.('change', applyTheme);
  await C.loadContent();
  if (C.loadErrors.length) toast(C.loadErrors[0], 'bad');
  store.onChange((ev) => {
    updateStatus();
    if (ev.type === 'save-error') toast(ev.error, 'bad');
    if (ev.type === 'sync-apply' || ev.type === 'import') { C.rebuildAreas(); }
  });
  sync.onSync(updateStatus);
  window.addEventListener('online', updateStatus); window.addEventListener('offline', updateStatus);
  await setupSync();
  // Früher war „Rafael“ fest voreingestellt. Für sein angemeldetes Konto bleibt der Name erhalten,
  // alle anderen werden beim ersten Start nach ihrem Namen gefragt.
  if (!store.get('settings', 'settings')?.name && sync.getAdapter()?.ready()) await store.saveSettings({ name: 'Rafael' });
  sync.startAutoSync();
  updateStatus();
  window.addEventListener('hashchange', render);
  await render();
  if (sync.getAdapter()?.ready()) sync.syncNow({ reason: 'start' }).then((r) => { if (r.ok && r.pulled) { C.rebuildAreas(); render(); } });
  registerSW();
  remind();
  upd.onUpdate(showUpdateButton);
  upd.startUpdateChecks();
  const done = upd.justUpdated();
  if (done) toast(`Aktualisiert auf Version ${done}. Deine Daten sind erhalten.`, 'ok');
}

// Erinnerung beim Start (nur wenn vom Nutzer aktiviert), höchstens einmal pro Tag.
async function remind() {
  const s = store.settings();
  if (!s.notifications || !('Notification' in window) || Notification.permission !== 'granted') return;
  const day = new Date().toISOString().slice(0, 10);
  if ((await idb.getMeta('remind.day')) === day) return;
  const L = await import('./learning.js');
  const due = L.dueCards().length;
  const soon = L.upcomingExams().filter((e) => (new Date(e.date) - new Date()) / 86400000 <= 3);
  const parts = [];
  if (due) parts.push(`${due} Karteikarten sind fällig.`);
  soon.forEach((e) => parts.push(`${e.title} am ${new Date(e.date + 'T12:00').toLocaleDateString('de-DE')}.`));
  if (!parts.length) return;
  await idb.setMeta('remind.day', day);
  try { const reg = await navigator.serviceWorker?.ready; if (reg) reg.showNotification('Lernprogramm', { body: parts.join(' '), icon: 'icons/icon-192.png' }); else new Notification('Lernprogramm', { body: parts.join(' ') }); } catch { /* nicht unterstützt */ }
}

function registerSW() {
  if (!('serviceWorker' in navigator)) return;
  navigator.serviceWorker.register('./sw.js').then((reg) => {
    reg.addEventListener('updatefound', () => {
      const w = reg.installing;
      w?.addEventListener('statechange', () => {
        if (w.state === 'installed' && navigator.serviceWorker.controller) upd.checkForUpdate();
      });
    });
  }).catch((e) => console.warn('Service Worker nicht registriert:', e));
}

window.__app = { store, C, sync, go };
boot();
