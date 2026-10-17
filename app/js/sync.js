// Geräteübergreifende Synchronisation.
// Prinzip: Alle Daten liegen zuerst lokal (offline-fähig). Änderungen werden als „dirty“ markiert
// und beim nächsten Abgleich hochgeladen. Der Server vergibt fortlaufende Revisionen.
// Hochladen nutzt optimistische Sperre: Der Server übernimmt eine Änderung nur, wenn der Datensatz
// seit dem letzten Abgleich nicht von einem anderen Gerät geändert wurde. Sonst wird zusammengeführt:
// Felder, die nur auf einer Seite geändert wurden, werden übernommen. Bei echten Konflikten gewinnt der
// neuere Stand, der andere wird unter „Konflikte“ aufbewahrt. Es geht also nichts verloren.
import * as store from './store.js';
import { idb } from './db.js';
import { deepEqual } from './util.js';

export const syncState = { status: 'aus', lastSync: null, error: null, running: false, pendingCount: 0, user: null };
const listeners = new Set();
export const onSync = (fn) => { listeners.add(fn); return () => listeners.delete(fn); };
const emit = () => listeners.forEach((fn) => { try { fn(syncState); } catch (e) { console.error(e); } });

let adapter = null;
export function setAdapter(a) { adapter = a; }
export function getAdapter() { return adapter; }

export async function refreshPending() {
  syncState.pendingCount = (await idb.dirtyRecords()).filter((r) => r.col !== 'conflicts' || true).length;
  emit();
}

// Drei-Wege-Zusammenführung auf Feldebene.
export function merge3(base, local, remote) {
  const out = {}; const conflicts = [];
  const keys = new Set([...Object.keys(local || {}), ...Object.keys(remote || {})]);
  for (const k of keys) {
    if (k === 'updatedAt') continue;
    const b = base?.[k], l = local?.[k], r = remote?.[k];
    if (deepEqual(l, r)) out[k] = l;
    else if (base && deepEqual(l, b)) out[k] = r;
    else if (base && deepEqual(r, b)) out[k] = l;
    else conflicts.push(k);
  }
  return { out, conflicts };
}

async function resolve(local, server) {
  // server: { id, col, data, rev, deleted, updated_at, device }
  if (server.deleted && local.deleted) return { ...local, rev: server.rev, dirty: 0, base: null };
  if (server.deleted || local.deleted) {
    // Löschen gegen Bearbeiten: Bearbeitung gewinnt, gelöschter Stand wird aufbewahrt.
    const keep = local.deleted ? { data: server.data, deleted: false } : { data: local.data, deleted: false };
    await saveConflict(local, server, ['(gelöscht auf einem Gerät, bearbeitet auf einem anderen)']);
    return { ...local, ...keep, rev: server.rev, dirty: 1, base: server.deleted ? null : server.data };
  }
  const { out, conflicts } = merge3(local.base, local.data, server.data);
  if (conflicts.length) {
    const localNewer = (local.updatedAt || '') >= (server.data?.updatedAt || server.updated_at || '');
    for (const k of conflicts) out[k] = localNewer ? local.data[k] : server.data[k];
    await saveConflict(local, server, conflicts, localNewer ? 'lokal' : 'server');
  }
  out.id = local.id;
  out.updatedAt = new Date().toISOString();
  const same = deepEqual({ ...out, updatedAt: 0 }, { ...server.data, updatedAt: 0 });
  return { ...local, data: same ? server.data : out, rev: server.rev, dirty: same ? 0 : 1, base: server.data, deleted: false };
}

async function saveConflict(local, server, fields, winner) {
  if (local.col === 'conflicts') return;
  const now = new Date().toISOString();
  const c = { id: 'c-' + local.col + '-' + local.id + '-' + Date.now(), col: local.col, recordId: local.id, fields, winner: winner || 'bearbeitet', local: local.deleted ? null : local.data, remote: server.deleted ? null : server.data, at: now };
  const rec = { key: 'conflicts/' + c.id, col: 'conflicts', id: c.id, data: c, updatedAt: now, deleted: false, dirty: 1, rev: 0, base: null, device: store.getDeviceId() };
  await store.applyRecords([rec], { type: 'conflict' });
}

// Ein vollständiger Abgleich: erst herunterladen, dann hochladen.
export async function syncNow({ reason = 'manuell' } = {}) {
  if (!adapter || !adapter.ready()) { syncState.status = 'aus'; emit(); return { ok: false, reason: 'nicht eingerichtet' }; }
  if (syncState.running) return { ok: false, reason: 'läuft bereits' };
  if (!navigator.onLine) { syncState.status = 'offline'; emit(); return { ok: false, reason: 'offline' }; }
  syncState.running = true; syncState.status = 'läuft'; syncState.error = null; emit();
  let pulled = 0, pushed = 0, conflicts = 0;
  try {
    // 1. Herunterladen
    let since = (await idb.getMeta('sync.lastRev', 0)) || 0;
    for (;;) {
      const { records, maxRev } = await adapter.pull(since);
      if (!records.length) break;
      const apply = [];
      for (const s of records) {
        const local = store.getRecord(s.col, s.id);
        if (local && local.dirty) {
          if (local.rev === s.rev) continue;
          const merged = await resolve(local, s); apply.push(merged);
          if (merged.dirty) conflicts++;
        } else {
          apply.push({ key: s.col + '/' + s.id, col: s.col, id: s.id, data: s.data, updatedAt: s.data?.updatedAt || s.updated_at, deleted: !!s.deleted, rev: s.rev, dirty: 0, base: s.deleted ? null : s.data, device: s.device });
        }
      }
      await store.applyRecords(apply, { type: 'sync-apply' });
      pulled += records.length;
      since = maxRev;
      await idb.setMeta('sync.lastRev', since);
      if (records.length < (adapter.pageSize || 500)) break;
    }
    // 2. Hochladen
    const dirty = await idb.dirtyRecords();
    for (const rec of dirty) {
      const res = await adapter.push(rec);
      if (res.ok) {
        const cur = store.getRecord(rec.col, rec.id);
        // Wurde der Datensatz während des Hochladens erneut geändert, bleibt er „dirty“.
        const changedMeanwhile = cur && cur.updatedAt !== rec.updatedAt;
        await store.applyRecords([{ ...(changedMeanwhile ? cur : rec), rev: res.rev, dirty: changedMeanwhile ? 1 : 0, base: rec.deleted ? null : rec.data }], { type: 'sync-ack' });
        pushed++;
      } else if (res.conflict) {
        const merged = await resolve(rec, res.server);
        conflicts++;
        await store.applyRecords([merged], { type: 'sync-apply' });
        if (merged.dirty) {
          const again = await adapter.push(merged);
          if (again.ok) { await store.applyRecords([{ ...merged, rev: again.rev, dirty: 0, base: merged.data }], { type: 'sync-ack' }); pushed++; }
        }
      }
    }
    if (adapter.syncFiles) await adapter.syncFiles();
    syncState.lastSync = new Date().toISOString();
    await idb.setMeta('sync.lastSync', syncState.lastSync);
    syncState.status = 'ok';
    return { ok: true, pulled, pushed, conflicts };
  } catch (e) {
    syncState.status = 'fehler';
    syncState.error = e?.message || String(e);
    return { ok: false, reason: syncState.error };
  } finally {
    syncState.running = false;
    await refreshPending();
    emit();
  }
}

let timer = null;
export function startAutoSync() {
  const debounced = (() => { let t; return () => { clearTimeout(t); t = setTimeout(() => syncNow({ reason: 'änderung' }), 4000); }; })();
  store.onChange((ev) => { if (ev.type === 'change') { refreshPending(); if (adapter?.ready()) debounced(); } });
  window.addEventListener('online', () => syncNow({ reason: 'online' }));
  window.addEventListener('offline', () => { syncState.status = 'offline'; emit(); });
  document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible') syncNow({ reason: 'sichtbar' }); });
  clearInterval(timer);
  timer = setInterval(() => syncNow({ reason: 'intervall' }), 5 * 60 * 1000);
  idb.getMeta('sync.lastSync').then((v) => { syncState.lastSync = v; emit(); });
  refreshPending();
}
