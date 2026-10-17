// Datenzugriff für die App: Zwischenspeicher im Arbeitsspeicher + dauerhafte Ablage in IndexedDB.
// Lesen ist synchron (aus dem Zwischenspeicher), Schreiben gibt ein Promise zurück, das erst nach
// erfolgreichem Speichern erfüllt wird. Fehler werden über den Status angezeigt, nie verschluckt.
import { idb } from './db.js';
import { uid } from './util.js';

const cache = new Map(); // col -> Map(id -> record)
const listeners = new Set();
export const saveState = { pending: 0, lastSaved: null, error: null };
let deviceId = null;

export const COLLECTIONS = [
  'settings', 'progress', 'taskstats', 'attempts', 'cards', 'grades', 'subjects', 'gradeconfig',
  'sheets', 'exams', 'planlog', 'materials', 'notes', 'bookmarks', 'mistakes', 'reports',
  'checklist', 'recent', 'conflicts', 'customunits'
];

export async function initStore() {
  deviceId = await idb.getMeta('deviceId');
  if (!deviceId) { deviceId = uid('dev-'); await idb.setMeta('deviceId', deviceId); }
  const all = await idb.allRecords();
  cache.clear();
  for (const r of all) colMap(r.col).set(r.id, r);
  if (navigator.storage?.persist) {
    try { saveState.persisted = await navigator.storage.persisted() || await navigator.storage.persist(); } catch { saveState.persisted = false; }
  }
}

export const getDeviceId = () => deviceId;
function colMap(col) { if (!cache.has(col)) cache.set(col, new Map()); return cache.get(col); }
export function onChange(fn) { listeners.add(fn); return () => listeners.delete(fn); }
function emit(ev) { for (const fn of listeners) { try { fn(ev); } catch (e) { console.error(e); } } }

export function get(col, id) {
  const r = colMap(col).get(id);
  return r && !r.deleted ? r.data : null;
}
export function all(col) {
  return Array.from(colMap(col).values()).filter((r) => !r.deleted).map((r) => r.data);
}
export function allRecords(col) { return Array.from(colMap(col).values()); }
export function getRecord(col, id) { return colMap(col).get(id) || null; }

async function persist(recs, ev) {
  saveState.pending++; emit({ type: 'save-start' });
  try {
    await idb.putRecords(recs);
    saveState.lastSaved = new Date().toISOString();
    saveState.error = null;
  } catch (e) {
    saveState.error = 'Speichern fehlgeschlagen: ' + (e?.message || e);
    emit({ type: 'save-error', error: saveState.error });
    throw e;
  } finally {
    saveState.pending--;
    emit({ type: 'save-end' });
  }
  emit(ev);
}

// Speichert einen Datensatz. data muss ein JSON-fähiges Objekt sein; data.id wird gesetzt.
export async function put(col, data, { silent = false } = {}) {
  const id = data.id || uid();
  const prev = colMap(col).get(id);
  const now = new Date().toISOString();
  const rec = {
    key: col + '/' + id, col, id,
    data: { ...data, id, updatedAt: now, createdAt: data.createdAt || prev?.data?.createdAt || now },
    updatedAt: now, deleted: false, dirty: 1, device: deviceId,
    rev: prev?.rev || 0, base: prev ? prev.base : null
  };
  const old = prev;
  colMap(col).set(id, rec);
  try { await persist([rec], { type: 'change', col, id, silent }); } catch (e) { if (old) colMap(col).set(id, old); else colMap(col).delete(id); throw e; }
  return rec.data;
}

// Löschen hinterlässt einen „Grabstein“, damit die Löschung auf andere Geräte übertragen wird.
export async function remove(col, id) {
  const prev = colMap(col).get(id);
  if (!prev) return;
  const now = new Date().toISOString();
  const rec = { ...prev, data: { id, updatedAt: now }, updatedAt: now, deleted: true, dirty: 1, device: deviceId };
  colMap(col).set(id, rec);
  try { await persist([rec], { type: 'change', col, id }); } catch (e) { colMap(col).set(id, prev); throw e; }
}

export async function removeMany(col, ids) {
  const now = new Date().toISOString();
  const recs = [];
  for (const id of ids) {
    const prev = colMap(col).get(id);
    if (!prev || prev.deleted) continue;
    const rec = { ...prev, data: { id, updatedAt: now }, updatedAt: now, deleted: true, dirty: 1, device: deviceId };
    colMap(col).set(id, rec); recs.push(rec);
  }
  if (recs.length) await persist(recs, { type: 'change', col, bulk: true });
}

// Wird von der Synchronisation verwendet: übernimmt fertige Datensätze unverändert.
export async function applyRecords(recs, ev = { type: 'sync-apply' }) {
  for (const r of recs) colMap(r.col).set(r.id, r);
  if (recs.length) await persist(recs, ev);
}

export const settingsDefaults = {
  id: 'settings',
  name: '', theme: 'auto', reduceMotion: false, dailyMinutes: 15, weeklyGoalMinutes: 105,
  gamification: true, streak: true, notifications: false,
  schoolYear: '2026/27', trainingYear: 2, trainingStart: '', trainingEnd: '',
  school: 'KBBZ Halberg Saarbrücken', schoolConfirmed: true,
  gradeTendency: 0.3, gradeDecimals: 2,
  ai: { enabled: false },
  sync: { enabled: false }
};
export function settings() { return { ...settingsDefaults, ...(get('settings', 'settings') || {}) }; }
export async function saveSettings(patch) { return put('settings', { ...settings(), ...patch, id: 'settings' }); }

// Kompletten Datenbestand exportieren (inkl. Dateien als Base64).
export async function exportAll({ includeFiles = true } = {}) {
  const records = (await idb.allRecords()).filter((r) => !r.deleted);
  const out = { app: 'lernprogramm-spedition', format: 1, exportedAt: new Date().toISOString(), device: deviceId, records: records.map((r) => ({ col: r.col, id: r.id, data: r.data, deleted: r.deleted, updatedAt: r.updatedAt })), files: [] };
  if (includeFiles) {
    for (const f of await idb.allFiles()) {
      out.files.push({ id: f.id, name: f.name, type: f.type, size: f.size, data: await blobToBase64(f.blob) });
    }
  }
  return out;
}

// Import: mode 'merge' (neuere Stände gewinnen) oder 'replace' (alles ersetzen).
export async function importAll(obj, mode = 'merge') {
  if (!obj || obj.app !== 'lernprogramm-spedition' || !Array.isArray(obj.records)) throw new Error('Diese Datei ist keine Sicherung dieses Lernprogramms.');
  if (mode === 'replace') { await idb.clearRecords(); await idb.clearFiles(); cache.clear(); }
  const recs = [];
  let skipped = 0;
  for (const r of obj.records) {
    if (!COLLECTIONS.includes(r.col)) { skipped++; continue; }
    const prev = colMap(r.col).get(r.id);
    if (mode === 'merge' && prev && prev.updatedAt >= r.updatedAt) { skipped++; continue; }
    recs.push({ key: r.col + '/' + r.id, col: r.col, id: r.id, data: r.data, updatedAt: r.updatedAt, deleted: !!r.deleted, dirty: 1, device: deviceId, rev: prev?.rev || 0, base: prev?.base || null });
  }
  for (const f of obj.files || []) {
    const existing = await idb.getFile(f.id);
    if (!existing) await idb.putFile({ id: f.id, name: f.name, type: f.type, size: f.size, blob: base64ToBlob(f.data, f.type) });
  }
  await applyRecords(recs, { type: 'import' });
  return { imported: recs.length, skipped, files: (obj.files || []).length };
}

export function blobToBase64(blob) {
  return new Promise((res, rej) => { const r = new FileReader(); r.onload = () => res(String(r.result).split(',')[1] || ''); r.onerror = rej; r.readAsDataURL(blob); });
}
export function base64ToBlob(b64, type) {
  const bin = atob(b64); const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) arr[i] = bin.charCodeAt(i);
  return new Blob([arr], { type: type || 'application/octet-stream' });
}

export async function storageEstimate() {
  try { return await navigator.storage.estimate(); } catch { return null; }
}

// Für Tests und „Alles zurücksetzen“.
export async function wipeAll() { await idb.clearRecords(); await idb.clearFiles(); cache.clear(); emit({ type: 'wipe' }); }
