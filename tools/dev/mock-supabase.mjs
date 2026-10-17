// Nachbildung der benötigten Supabase-Schnittstellen für automatische Tests (läuft auf PGlite mit server/supabase.sql).
import { PGlite } from '@electric-sql/pglite';
import http from 'node:http';
import { readFileSync } from 'node:fs';
const PORT = Number(process.env.PORT || 54321);
const USERS = { 'rafael@test.de': { id: '11111111-1111-1111-1111-111111111111', pw: 'geheim123' }, 'fremd@test.de': { id: '22222222-2222-2222-2222-222222222222', pw: 'fremd123' } };
const db = new PGlite();
await db.exec(`create role anon nologin; create role authenticated nologin; create schema auth; create table auth.users (id uuid primary key);
  insert into auth.users values ${Object.values(USERS).map((u) => `('${u.id}')`).join(',')};
  create function auth.uid() returns uuid language sql stable as $$ select nullif(current_setting('request.jwt.claim.sub', true), '')::uuid $$;
  grant usage on schema auth to anon, authenticated; grant execute on function auth.uid() to anon, authenticated;
  create schema storage; create table storage.buckets (id text primary key, name text, public boolean, file_size_limit bigint);
  create table storage.objects (id serial primary key, bucket_id text, name text, data bytea, ctype text, unique (bucket_id, name));
  create function storage.foldername(name text) returns text[] language sql immutable as $$ select string_to_array(name, '/') $$;
  alter table storage.objects enable row level security; grant usage on schema storage to authenticated;
  grant select, insert, update, delete on storage.objects to authenticated; grant usage, select on sequence storage.objects_id_seq to authenticated; grant usage on schema public to anon, authenticated;`);
await db.exec(readFileSync(new URL('../../server/supabase.sql', import.meta.url), 'utf8'));
let lock = Promise.resolve();
const as = (uid, fn) => (lock = lock.then(async () => {
  await db.exec(`reset role; select set_config('request.jwt.claim.sub', '${uid || ''}', false); set role ${uid ? 'authenticated' : 'anon'};`);
  try { return await fn(); } finally { await db.exec('reset role'); }
}));
const tokUser = (req) => { const m = (req.headers.authorization || '').match(/Bearer tok-([0-9a-f-]+)/); return m ? m[1] : null; };
const body = (req) => new Promise((r) => { const c = []; req.on('data', (d) => c.push(d)); req.on('end', () => r(Buffer.concat(c))); });
const send = (res, code, obj, type = 'application/json') => { res.writeHead(code, { 'Content-Type': type, 'Access-Control-Allow-Origin': '*' }); res.end(type === 'application/json' ? JSON.stringify(obj) : obj); };
export const state = { offline: false };
http.createServer(async (req, res) => {
  if (req.method === 'OPTIONS') { res.writeHead(204, { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': '*', 'Access-Control-Allow-Methods': '*' }); return res.end(); }
  const u = new URL(req.url, 'http://x');
  if (u.pathname === '/__offline') { state.offline = u.searchParams.get('v') === '1'; return send(res, 200, { offline: state.offline }); }
  if (state.offline) { req.socket.destroy(); return; }
  try {
    if (u.pathname === '/auth/v1/token') {
      const b = JSON.parse((await body(req)).toString() || '{}');
      if (u.searchParams.get('grant_type') === 'password') {
        const usr = USERS[b.email]; if (!usr || usr.pw !== b.password) return send(res, 400, { error_description: 'Invalid login credentials' });
        return send(res, 200, { access_token: 'tok-' + usr.id, refresh_token: 'ref-' + usr.id, expires_in: 3600, user: { id: usr.id, email: b.email } });
      }
      const id = String(b.refresh_token || '').replace('ref-', ''); return send(res, 200, { access_token: 'tok-' + id, refresh_token: 'ref-' + id, expires_in: 3600 });
    }
    if (u.pathname === '/auth/v1/logout') return send(res, 204, '');
    const uid = tokUser(req);
    if (u.pathname === '/rest/v1/records' && req.method === 'GET') {
      const since = Number((u.searchParams.get('rev') || 'gt.0').replace('gt.', '')); const lim = Number(u.searchParams.get('limit') || 500);
      const r = await as(uid, () => db.query('select col,id,data,deleted,device,rev,updated_at from public.records where rev > $1 order by rev asc limit $2', [since, lim]));
      return send(res, 200, r.rows.map((x) => ({ ...x, rev: String(x.rev) })));
    }
    if (u.pathname === '/rest/v1/rpc/push_record') {
      const b = JSON.parse((await body(req)).toString());
      const r = await as(uid, () => db.query('select public.push_record($1,$2,$3,$4,$5,$6) as r', [b.p_col, b.p_id, b.p_data, b.p_deleted, b.p_base_rev, b.p_device]));
      return send(res, 200, r.rows[0].r);
    }
    const sm = u.pathname.match(/^\/storage\/v1\/object\/(?:authenticated\/)?materials\/(.+)$/);
    if (sm) {
      const name = decodeURIComponent(sm[1]);
      if (req.method === 'POST') { const data = await body(req); await as(uid, () => db.query(`insert into storage.objects(bucket_id,name,data,ctype) values ('materials',$1,$2,$3) on conflict (bucket_id,name) do update set data=excluded.data`, [name, data, req.headers['content-type']])); return send(res, 200, { Key: name }); }
      if (req.method === 'GET') { const r = await as(uid, () => db.query(`select data, ctype from storage.objects where bucket_id='materials' and name=$1`, [name])); if (!r.rows.length) return send(res, 404, { error: 'not found' }); res.writeHead(200, { 'Content-Type': r.rows[0].ctype, 'Access-Control-Allow-Origin': '*' }); return res.end(Buffer.from(r.rows[0].data)); }
      if (req.method === 'DELETE') { await as(uid, () => db.query(`delete from storage.objects where bucket_id='materials' and name=$1`, [name])); return send(res, 200, {}); }
    }
    send(res, 404, { error: 'unbekannt ' + u.pathname });
  } catch (e) { send(res, 400, { message: e.message }); }
}).listen(PORT, () => console.log('mock supabase on', PORT));
