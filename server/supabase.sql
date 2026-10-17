-- Einrichtung der Datenbank für das Lernprogramm (Supabase, kostenloser Plan).
-- Im Supabase-Dashboard: SQL Editor → New query → diesen Text einfügen → Run.
-- Das Skript kann gefahrlos mehrfach ausgeführt werden.

-- 1. Tabelle für alle synchronisierten Datensätze (je Benutzer getrennt)
create table if not exists public.records (
  user_id    uuid        not null default auth.uid() references auth.users(id) on delete cascade,
  col        text        not null,
  id         text        not null,
  data       jsonb,
  deleted    boolean     not null default false,
  device     text,
  rev        bigint      not null,
  updated_at timestamptz not null default now(),
  primary key (user_id, col, id)
);
create sequence if not exists public.records_rev_seq;
create index if not exists records_user_rev on public.records (user_id, rev);

-- 2. Row Level Security: Jeder angemeldete Benutzer sieht und ändert ausschließlich seine eigenen Zeilen.
alter table public.records enable row level security;
alter table public.records force row level security;
drop policy if exists records_select_own on public.records;
drop policy if exists records_insert_own on public.records;
drop policy if exists records_update_own on public.records;
create policy records_select_own on public.records for select to authenticated using (user_id = auth.uid());
create policy records_insert_own on public.records for insert to authenticated with check (user_id = auth.uid());
create policy records_update_own on public.records for update to authenticated using (user_id = auth.uid()) with check (user_id = auth.uid());
-- Kein DELETE: Löschungen werden als „deleted = true“ übertragen, damit alle Geräte sie mitbekommen.

revoke all on public.records from anon;
grant select, insert, update on public.records to authenticated;
grant usage on sequence public.records_rev_seq to authenticated;

-- 3. Hochladen mit Konfliktschutz: übernimmt eine Änderung nur, wenn der Stand auf dem Server
--    noch der ist, den das Gerät zuletzt gesehen hat (p_base_rev). Sonst wird der Serverstand
--    zurückgegeben und das Gerät führt die Änderungen zusammen.
create or replace function public.push_record(p_col text, p_id text, p_data jsonb, p_deleted boolean, p_base_rev bigint, p_device text)
returns jsonb
language plpgsql
security invoker
set search_path = public
as $$
declare
  cur public.records;
  new_rev bigint;
  me uuid := auth.uid();
begin
  if me is null then
    raise exception 'nicht angemeldet';
  end if;
  select * into cur from public.records where user_id = me and col = p_col and id = p_id for update;
  if found and cur.rev <> coalesce(p_base_rev, 0) then
    return jsonb_build_object('conflict', true, 'server',
      jsonb_build_object('col', cur.col, 'id', cur.id, 'data', cur.data, 'deleted', cur.deleted, 'device', cur.device, 'rev', cur.rev, 'updated_at', cur.updated_at));
  end if;
  new_rev := nextval('public.records_rev_seq');
  insert into public.records (user_id, col, id, data, deleted, device, rev, updated_at)
  values (me, p_col, p_id, p_data, coalesce(p_deleted, false), p_device, new_rev, now())
  on conflict (user_id, col, id) do update
    set data = excluded.data, deleted = excluded.deleted, device = excluded.device, rev = excluded.rev, updated_at = now();
  return jsonb_build_object('ok', true, 'rev', new_rev);
end;
$$;
revoke all on function public.push_record(text, text, jsonb, boolean, bigint, text) from public, anon;
grant execute on function public.push_record(text, text, jsonb, boolean, bigint, text) to authenticated;

-- 4. Privater Dateispeicher für Materialien (PDFs, Bilder, Word-Dateien). Nicht öffentlich.
insert into storage.buckets (id, name, public, file_size_limit)
values ('materials', 'materials', false, 52428800)
on conflict (id) do update set public = false;

drop policy if exists materials_select_own on storage.objects;
drop policy if exists materials_insert_own on storage.objects;
drop policy if exists materials_update_own on storage.objects;
drop policy if exists materials_delete_own on storage.objects;
create policy materials_select_own on storage.objects for select to authenticated
  using (bucket_id = 'materials' and (storage.foldername(name))[1] = auth.uid()::text);
create policy materials_insert_own on storage.objects for insert to authenticated
  with check (bucket_id = 'materials' and (storage.foldername(name))[1] = auth.uid()::text);
create policy materials_update_own on storage.objects for update to authenticated
  using (bucket_id = 'materials' and (storage.foldername(name))[1] = auth.uid()::text);
create policy materials_delete_own on storage.objects for delete to authenticated
  using (bucket_id = 'materials' and (storage.foldername(name))[1] = auth.uid()::text);
