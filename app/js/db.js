// IndexedDB-Speicher. Jede Änderung wird erst nach erfolgreichem Abschluss der Transaktion gemeldet.
// Datensatz: { key: 'col/id', col, id, data, updatedAt, deleted, rev, dirty, base }
//   rev   = Revision auf dem Server (0 = noch nie synchronisiert)
//   dirty = 1, wenn lokale Änderungen noch nicht hochgeladen sind
//   base  = letzter mit dem Server abgeglichener Stand (für das Zusammenführen bei Konflikten)

const DB_NAME = 'lernprogramm-spedition';
const DB_VERSION = 1;
let dbp;

export function openDB() {
  if (dbp) return dbp;
  dbp = new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains('records')) {
        const s = db.createObjectStore('records', { keyPath: 'key' });
        s.createIndex('col', 'col');
        s.createIndex('dirty', 'dirty');
      }
      if (!db.objectStoreNames.contains('files')) db.createObjectStore('files', { keyPath: 'id' });
      if (!db.objectStoreNames.contains('meta')) db.createObjectStore('meta', { keyPath: 'k' });
    };
    req.onsuccess = () => {
      const db = req.result;
      db.onversionchange = () => { db.close(); location.reload(); };
      resolve(db);
    };
    req.onerror = () => reject(req.error);
    req.onblocked = () => reject(new Error('Datenbank ist in einem anderen Fenster blockiert. Bitte andere Fenster der App schließen.'));
  });
  return dbp;
}

function tx(storeNames, mode, fn) {
  return openDB().then((db) => new Promise((resolve, reject) => {
    const t = db.transaction(storeNames, mode);
    let result;
    t.oncomplete = () => resolve(result);
    t.onerror = () => reject(t.error || new Error('Speicherfehler'));
    t.onabort = () => reject(t.error || new Error('Speichervorgang abgebrochen (Speicher voll?)'));
    const stores = Array.isArray(storeNames) ? storeNames.map((n) => t.objectStore(n)) : [t.objectStore(storeNames)];
    Promise.resolve(fn(...stores)).then((r) => { result = r; }, (e) => { try { t.abort(); } catch { /* bereits beendet */ } reject(e); });
  }));
}

const reqP = (r) => new Promise((res, rej) => { r.onsuccess = () => res(r.result); r.onerror = () => rej(r.error); });

export const idb = {
  getRecord: (key) => tx('records', 'readonly', (s) => reqP(s.get(key))),
  putRecord: (rec) => tx('records', 'readwrite', (s) => reqP(s.put(rec))),
  putRecords: (recs) => tx('records', 'readwrite', (s) => Promise.all(recs.map((r) => reqP(s.put(r))))),
  deleteRecordHard: (key) => tx('records', 'readwrite', (s) => reqP(s.delete(key))),
  byCol: (col) => tx('records', 'readonly', (s) => reqP(s.index('col').getAll(col))),
  allRecords: () => tx('records', 'readonly', (s) => reqP(s.getAll())),
  dirtyRecords: () => tx('records', 'readonly', (s) => reqP(s.index('dirty').getAll(1))),
  clearRecords: () => tx('records', 'readwrite', (s) => reqP(s.clear())),
  getFile: (id) => tx('files', 'readonly', (s) => reqP(s.get(id))),
  putFile: (f) => tx('files', 'readwrite', (s) => reqP(s.put(f))),
  deleteFile: (id) => tx('files', 'readwrite', (s) => reqP(s.delete(id))),
  allFiles: () => tx('files', 'readonly', (s) => reqP(s.getAll())),
  clearFiles: () => tx('files', 'readwrite', (s) => reqP(s.clear())),
  getMeta: async (k, def = null) => { const r = await tx('meta', 'readonly', (s) => reqP(s.get(k))); return r ? r.v : def; },
  setMeta: (k, v) => tx('meta', 'readwrite', (s) => reqP(s.put({ k, v })))
};
