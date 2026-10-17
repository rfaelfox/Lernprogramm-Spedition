// Anbindung an Supabase (kostenloser Plan) über die REST-Schnittstellen, ohne zusätzliche Bibliothek.
// Der „anon/publishable key“ ist laut Supabase für die Verwendung im Browser gedacht und kein Geheimnis.
// Den Schutz deiner Daten übernehmen Anmeldung + Row Level Security in der Datenbank (siehe server/supabase.sql).
import { idb } from './db.js';
import * as store from './store.js';

export function createSupabaseAdapter({ url, key }) {
  url = String(url || '').replace(/\/+$/, '');
  let session = null;

  const api = {
    pageSize: 500,
    async init() { session = await idb.getMeta('sync.session'); return !!session; },
    ready: () => !!(url && key && session),
    user: () => session?.user || null,

    async signIn(email, password) {
      const r = await fetch(`${url}/auth/v1/token?grant_type=password`, { method: 'POST', headers: { apikey: key, 'Content-Type': 'application/json' }, body: JSON.stringify({ email, password }) });
      const j = await r.json().catch(() => ({}));
      if (!r.ok) throw new Error(j.error_description || j.msg || j.message || 'Anmeldung fehlgeschlagen');
      await saveSession(j);
      return j.user;
    },
    async signOut() {
      try { if (session) await fetch(`${url}/auth/v1/logout`, { method: 'POST', headers: hdr() }); } catch { /* offline: lokal trotzdem abmelden */ }
      session = null; await idb.setMeta('sync.session', null);
    },

    async pull(since) {
      const from = Math.max(0, since - 20); // kleine Überlappung gegen spät abgeschlossene Transaktionen
      const r = await authed(`${url}/rest/v1/records?select=col,id,data,deleted,device,rev,updated_at&rev=gt.${from}&order=rev.asc&limit=${api.pageSize}`);
      const rows = await r.json();
      const maxRev = rows.reduce((m, x) => Math.max(m, Number(x.rev)), since);
      return { records: rows.map((x) => ({ ...x, rev: Number(x.rev) })), maxRev };
    },

    async push(rec) {
      const r = await authed(`${url}/rest/v1/rpc/push_record`, {
        method: 'POST',
        body: JSON.stringify({ p_col: rec.col, p_id: rec.id, p_data: rec.deleted ? null : rec.data, p_deleted: !!rec.deleted, p_base_rev: rec.rev || 0, p_device: rec.device || store.getDeviceId() })
      });
      const j = await r.json();
      if (j.ok) return { ok: true, rev: Number(j.rev) };
      if (j.conflict) return { conflict: true, server: { ...j.server, rev: Number(j.server.rev) } };
      throw new Error('Unerwartete Antwort beim Hochladen');
    },

    // Dateien (Materialien) im privaten Speicherbereich materials/<user-id>/<datei-id>
    async syncFiles() {
      const uidv = session?.user?.id; if (!uidv) return;
      const uploaded = new Set((await idb.getMeta('sync.uploadedFiles')) || []);
      const mats = store.all('materials').filter((m) => m.fileId);
      for (const m of mats) {
        const f = await idb.getFile(m.fileId);
        if (f && !uploaded.has(m.fileId)) {
          const r = await authed(`${url}/storage/v1/object/materials/${uidv}/${m.fileId}`, { method: 'POST', headers: { 'Content-Type': f.type || 'application/octet-stream', 'x-upsert': 'true' }, body: f.blob });
          if (r.ok) { uploaded.add(m.fileId); await idb.setMeta('sync.uploadedFiles', Array.from(uploaded)); }
        } else if (!f) {
          const r = await authed(`${url}/storage/v1/object/authenticated/materials/${uidv}/${m.fileId}`, {}, true);
          if (r.ok) {
            const blob = await r.blob();
            await idb.putFile({ id: m.fileId, name: m.fileName, type: m.fileType || blob.type, size: blob.size, blob });
            uploaded.add(m.fileId); await idb.setMeta('sync.uploadedFiles', Array.from(uploaded));
          }
        }
      }
    },
    async deleteFile(fileId) {
      const uidv = session?.user?.id; if (!uidv) return;
      await authed(`${url}/storage/v1/object/materials/${uidv}/${fileId}`, { method: 'DELETE' }, true);
    }
  };

  function hdr(extra = {}) { return { apikey: key, Authorization: `Bearer ${session?.access_token}`, 'Content-Type': 'application/json', ...extra }; }
  async function saveSession(j) {
    session = { access_token: j.access_token, refresh_token: j.refresh_token, expires_at: Date.now() + (j.expires_in || 3600) * 1000, user: j.user ? { id: j.user.id, email: j.user.email } : session?.user };
    await idb.setMeta('sync.session', session);
  }
  async function refresh() {
    const r = await fetch(`${url}/auth/v1/token?grant_type=refresh_token`, { method: 'POST', headers: { apikey: key, 'Content-Type': 'application/json' }, body: JSON.stringify({ refresh_token: session.refresh_token }) });
    if (!r.ok) { session = null; await idb.setMeta('sync.session', null); throw new Error('Anmeldung abgelaufen. Bitte in den Einstellungen neu anmelden.'); }
    await saveSession(await r.json());
  }
  async function authed(u, opt = {}, allowFail = false) {
    if (!session) throw new Error('Nicht angemeldet');
    if (Date.now() > session.expires_at - 60000) await refresh();
    let r = await fetch(u, { ...opt, headers: hdr(opt.headers) });
    if (r.status === 401) { await refresh(); r = await fetch(u, { ...opt, headers: hdr(opt.headers) }); }
    if (!r.ok && !allowFail) {
      const t = await r.text().catch(() => '');
      throw new Error(`Server meldet Fehler ${r.status}${t ? ': ' + t.slice(0, 160) : ''}`);
    }
    return r;
  }
  return api;
}
