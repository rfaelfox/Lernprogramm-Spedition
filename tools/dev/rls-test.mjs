// Prüft server/supabase.sql in einer echten Postgres-Instanz (PGlite) mit nachgebildeter Supabase-Umgebung:
// Fremde Benutzer dürfen Daten weder lesen noch überschreiben, Konfliktschutz greift.
import { PGlite } from '@electric-sql/pglite';
import { readFileSync } from 'node:fs';
const db = new PGlite();
const A = '11111111-1111-1111-1111-111111111111', B = '22222222-2222-2222-2222-222222222222';
await db.exec(`
  create role anon nologin; create role authenticated nologin;
  create schema auth; create table auth.users (id uuid primary key);
  insert into auth.users values ('${A}'), ('${B}');
  create function auth.uid() returns uuid language sql stable as $$ select nullif(current_setting('request.jwt.claim.sub', true), '')::uuid $$;
  grant usage on schema auth to anon, authenticated; grant execute on function auth.uid() to anon, authenticated;
  create schema storage;
  create table storage.buckets (id text primary key, name text, public boolean, file_size_limit bigint);
  create table storage.objects (id serial primary key, bucket_id text, name text);
  create function storage.foldername(name text) returns text[] language sql immutable as $$ select string_to_array(name, '/') $$;
  alter table storage.objects enable row level security;
  grant usage on schema storage to authenticated; grant select, insert, update, delete on storage.objects to authenticated; grant usage, select on sequence storage.objects_id_seq to authenticated;
  grant usage on schema public to anon, authenticated;
`);
await db.exec(readFileSync(new URL('../../server/supabase.sql', import.meta.url), 'utf8'));
await db.exec(readFileSync(new URL('../../server/supabase.sql', import.meta.url), 'utf8')); // zweimal ausführbar
const as = async (role, uid, sql, params) => {
  await db.exec(`reset role; select set_config('request.jwt.claim.sub', '${uid || ''}', false); set role ${role};`);
  try { return await db.query(sql, params); } finally { await db.exec('reset role'); }
};
let ok = 0, fail = 0;
const check = (name, cond) => { if (cond) { ok++; console.log('✓', name); } else { fail++; console.log('✗', name); } };
const expectErr = async (name, fn) => { try { await fn(); check(name, false); } catch { check(name, true); } };

let r = await as('authenticated', A, `select public.push_record('grades','g1','{"grade":2}'::jsonb,false,0,'pc') as r`);
const revA = r.rows[0].r.rev; check('A kann Datensatz anlegen', r.rows[0].r.ok === true);
r = await as('authenticated', A, `select * from public.records`); check('A sieht eigenen Datensatz', r.rows.length === 1);
r = await as('authenticated', B, `select * from public.records`); check('B sieht keine Daten von A', r.rows.length === 0);
r = await as('anon', null, `select count(*) from public.records`).catch(() => ({ rows: [{ count: 'denied' }] }));
check('Nicht angemeldet: kein Zugriff', r.rows[0].count === 'denied' || Number(r.rows[0].count) === 0);
await expectErr('Nicht angemeldet: push_record verweigert', () => as('anon', null, `select public.push_record('grades','x','{}'::jsonb,false,0,'x')`));
r = await as('authenticated', B, `select public.push_record('grades','g1','{"grade":6}'::jsonb,false,0,'evil') as r`);
r = await as('authenticated', A, `select data from public.records where id='g1'`); check('B kann Datensatz von A nicht überschreiben', r.rows.length === 1 && r.rows[0].data.grade === 2);
await expectErr('B kann keine Zeile mit user_id von A einfügen', () => as('authenticated', B, `insert into public.records(user_id,col,id,data,rev) values ('${A}','grades','g9','{}',99)`));
r = await as('authenticated', B, `update public.records set data='{"grade":6}' where user_id='${A}' returning *`); check('B kann Zeilen von A nicht ändern', r.rows.length === 0);
await expectErr('Löschen ist nicht erlaubt', () => as('authenticated', A, `delete from public.records`));
r = await as('authenticated', A, `select public.push_record('grades','g1','{"grade":1}'::jsonb,false,0,'phone') as r`);
check('Konfliktschutz: veralteter Stand wird abgelehnt', r.rows[0].r.conflict === true && r.rows[0].r.server.data.grade === 2);
r = await as('authenticated', A, `select public.push_record('grades','g1','{"grade":1.7}'::jsonb,false,$1,'phone') as r`, [revA]);
check('Aktueller Stand wird übernommen', r.rows[0].r.ok === true && r.rows[0].r.rev > revA);
r = await as('authenticated', A, `select count(*) from storage.buckets where id='materials' and public=false`).catch(() => null);
r = await db.query(`select public from storage.buckets where id='materials'`); check('Dateispeicher ist privat', r.rows[0].public === false);
await as('authenticated', A, `insert into storage.objects(bucket_id,name) values ('materials','${A}/f1')`);
await expectErr('B kann nicht in den Ordner von A hochladen', () => as('authenticated', B, `insert into storage.objects(bucket_id,name) values ('materials','${A}/f2')`));
r = await as('authenticated', B, `select * from storage.objects`); check('B sieht Dateien von A nicht', r.rows.length === 0);
r = await as('authenticated', A, `select * from storage.objects`); check('A sieht eigene Datei', r.rows.length === 1);
console.log(`\n${ok} bestanden, ${fail} fehlgeschlagen`);
process.exit(fail ? 1 : 0);
