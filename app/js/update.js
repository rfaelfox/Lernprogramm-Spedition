// Aktualisierung der App per Knopfdruck. Deine Daten liegen in IndexedDB und bleiben dabei erhalten;
// ersetzt werden nur die Programmdateien im Offline-Speicher.
import { VERSION, BUILD } from '../version.js';
import * as store from './store.js';
import * as sync from './sync.js';

export const updateState = { available: null, lastCheck: 0, error: null };
const listeners = new Set();
export const onUpdate = (fn) => listeners.add(fn);
const emit = () => listeners.forEach((fn) => { try { fn(updateState); } catch { /* ignorieren */ } });

// Fragt die veröffentlichte Version ab. Ohne Internet bleibt alles, wie es ist.
export async function checkForUpdate() {
  updateState.lastCheck = Date.now();
  if (!navigator.onLine) return updateState;
  try {
    const remote = await import(`../version.js?check=${Date.now()}`);
    updateState.error = null;
    updateState.available = remote.BUILD !== BUILD ? { version: remote.VERSION, build: remote.BUILD, changes: remote.CHANGES || [] } : null;
  } catch (e) {
    updateState.error = 'Prüfung nicht möglich: ' + (e?.message || e);
  }
  emit();
  return updateState;
}

const waitFor = (cond, ms) => new Promise((resolve) => {
  const t0 = Date.now();
  const tick = () => (cond() || Date.now() - t0 > ms ? resolve(cond()) : setTimeout(tick, 150));
  tick();
});

export async function applyUpdate() {
  // 1. Offene Speichervorgänge abschließen und, falls möglich, noch einmal synchronisieren.
  await waitFor(() => !store.saveState.pending, 10000);
  if (store.saveState.error) throw new Error('Lokales Speichern ist fehlgeschlagen. Update abgebrochen, damit nichts verloren geht.');
  if (sync.getAdapter()?.ready() && navigator.onLine) { try { await sync.syncNow({ reason: 'update' }); } catch { /* Daten bleiben lokal erhalten */ } }
  // 2. Neuen Service Worker holen und aktivieren lassen.
  const reg = await navigator.serviceWorker?.getRegistration();
  if (reg) {
    try { await reg.update(); } catch { /* ignorieren */ }
    const nw = reg.installing || reg.waiting;
    if (nw) {
      // Erst fertig installieren lassen (lädt alle Dateien für offline), dann sofort übernehmen.
      await waitFor(() => nw.state !== 'installing', 60000);
      if (nw.state === 'installed') nw.postMessage('skipWaiting');
      await waitFor(() => nw.state === 'activated' || nw.state === 'redundant', 15000);
    }
  }
  // 3. Neu laden. Der neue Service Worker hat die alten Programmdateien bereits ersetzt.
  sessionStorage.setItem('updatedFrom', `${VERSION}|${BUILD}`);
  location.reload();
}

// Nach dem Neuladen einmal Bescheid geben.
export function justUpdated() {
  const from = sessionStorage.getItem('updatedFrom');
  if (!from) return null;
  sessionStorage.removeItem('updatedFrom');
  return from.split('|')[1] !== BUILD ? VERSION : null;
}

// Beim Start und danach regelmäßig (höchstens alle 30 Minuten, wenn die App sichtbar ist) prüfen.
export function startUpdateChecks() {
  setTimeout(checkForUpdate, 3000);
  document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible' && Date.now() - updateState.lastCheck > 30 * 60000) checkForUpdate(); });
  setInterval(() => { if (document.visibilityState === 'visible') checkForUpdate(); }, 60 * 60000);
}

export const versionLabel = () => `${VERSION}${BUILD === 'dev' ? ' (Entwicklung)' : ' · ' + BUILD}`;
