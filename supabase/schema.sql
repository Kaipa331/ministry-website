-- =============================================================================
-- Headstone Prophetic Ministry International — admin dashboard schema
-- Run this once in the Supabase dashboard: SQL Editor -> New query -> Run.
-- Safe to re-run; it uses "if not exists" and "on conflict do nothing".
-- =============================================================================

-- -----------------------------------------------------------------------------
-- Tables
-- -----------------------------------------------------------------------------

-- YouTube messages and live sessions. Video itself stays on YouTube; we only
-- store the link and how it should be presented on the site.
create table if not exists public.videos (
  id          uuid primary key default gen_random_uuid(),
  youtube_id  text not null,
  title       text not null,
  subtitle    text not null default '',
  description text not null default '',
  featured    boolean not null default false,
  is_live     boolean not null default false,
  published   boolean not null default true,
  sort_order  integer not null default 0,
  created_at  timestamptz not null default now()
);

-- Audio sessions uploaded straight from the dashboard into storage.
create table if not exists public.audio_sessions (
  id          uuid primary key default gen_random_uuid(),
  title       text not null,
  subtitle    text not null default '',
  description text not null default '',
  audio_path  text not null,
  recorded_on date,
  published   boolean not null default true,
  sort_order  integer not null default 0,
  created_at  timestamptz not null default now()
);

-- News, upcoming meetings, and past events all share one table.
create table if not exists public.announcements (
  id         uuid primary key default gen_random_uuid(),
  category   text not null default 'news' check (category in ('news', 'upcoming', 'event')),
  date_label text not null default '',
  title      text not null,
  summary    text not null default '',
  image_path text not null default '',
  published  boolean not null default true,
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

-- Extra column for existing projects (create table above will not add it).
alter table public.announcements
  add column if not exists image_path text not null default '';

-- Gallery photos uploaded from the dashboard into storage.
create table if not exists public.gallery_images (
  id         uuid primary key default gen_random_uuid(),
  image_path text not null,
  alt        text not null default '',
  published  boolean not null default true,
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

-- -----------------------------------------------------------------------------
-- Row level security
-- Visitors (anon) may read published rows only. The signed-in admin may do
-- anything. Nothing is writable without a login.
-- -----------------------------------------------------------------------------

alter table public.videos         enable row level security;
alter table public.audio_sessions enable row level security;
alter table public.announcements  enable row level security;
alter table public.gallery_images enable row level security;

do $$
declare
  t text;
begin
  foreach t in array array['videos', 'audio_sessions', 'announcements', 'gallery_images']
  loop
    execute format('drop policy if exists "public read published" on public.%I', t);
    execute format(
      'create policy "public read published" on public.%I for select to anon, authenticated using (published = true)',
      t
    );

    execute format('drop policy if exists "admin full access" on public.%I', t);
    execute format(
      'create policy "admin full access" on public.%I for all to authenticated using (true) with check (true)',
      t
    );
  end loop;
end $$;

-- -----------------------------------------------------------------------------
-- Storage buckets (public read so the website can play audio and show photos)
-- -----------------------------------------------------------------------------

insert into storage.buckets (id, name, public)
values ('audio', 'audio', true), ('gallery', 'gallery', true)
on conflict (id) do update set public = true;

drop policy if exists "public read ministry files" on storage.objects;
create policy "public read ministry files"
  on storage.objects for select to anon, authenticated
  using (bucket_id in ('audio', 'gallery'));

drop policy if exists "admin upload ministry files" on storage.objects;
create policy "admin upload ministry files"
  on storage.objects for insert to authenticated
  with check (bucket_id in ('audio', 'gallery'));

drop policy if exists "admin update ministry files" on storage.objects;
create policy "admin update ministry files"
  on storage.objects for update to authenticated
  using (bucket_id in ('audio', 'gallery'));

drop policy if exists "admin delete ministry files" on storage.objects;
create policy "admin delete ministry files"
  on storage.objects for delete to authenticated
  using (bucket_id in ('audio', 'gallery'));

-- -----------------------------------------------------------------------------
-- Seed: the messages that were previously hardcoded on the site.
-- Runs only when the videos table is still empty.
-- -----------------------------------------------------------------------------

insert into public.videos (youtube_id, title, subtitle, description, featured, sort_order)
select * from (values
  ('TIK2av4Xy8Y', 'Sunday Service', 'Latest · Headstone Prophetic Ministry International',
   'Join the latest Sunday service with Lord Overtone — prophetic teaching and worship from Headstone Prophetic Ministry International.', true, 0),
  ('UzyAoVRcfrA', 'The Spirit of The Creator in Different Men in Different Dispensations', 'Moatize · 26 July 2026',
   'A teaching on how the Spirit of the Creator has moved through different men across dispensations.', false, 1),
  ('YJOxTuHRfm4', 'Mphamvu Ya Namalenga Ndi Yokhayo Imeme Izigwira Ntchito Basi', 'Moatize · 25 July 2026',
   'A Chichewa message on the power of the Creator — that His power alone is enough to accomplish the work.', false, 2),
  ('JyydcYFR33M', 'Lilongwe Sunday — 2nd August 2026', 'Lilongwe Service',
   'Sunday gathering in Lilongwe with teaching and ministry from Lord Overtone.', false, 3),
  ('xY4WlPd2tdQ', 'Lilongwe Sunday — 2nd August 2026 (Part 2)', 'Lilongwe Service · Part 2',
   'Continuation of the Lilongwe Sunday service — part two of the message.', false, 4),
  ('GxxCF10Xys4', 'Sunday Service', 'Worship & Word',
   'Another recent Sunday service from Headstone Prophetic Ministry International.', false, 5)
) as seed
where not exists (select 1 from public.videos);

insert into public.announcements (category, date_label, title, summary, sort_order)
select * from (values
  ('news', '10 Aug 2026', 'Latest Sunday service now on YouTube',
   'The most recent Sunday service from Headstone Prophetic Ministry International is available to watch on our channel and on this ministry website.', 0),
  ('news', '2 Aug 2026', 'Lilongwe gathering recorded in two parts',
   'Messages from the Lilongwe Sunday meeting are published for the wider ministry family who could not attend in person.', 1),
  ('upcoming', 'Sundays · 9:00 PM (GMT+2)', 'Weekly live session',
   'Join the ministry live on YouTube for teaching, prayer, and prophetic clarity every Sunday evening.', 0),
  ('upcoming', 'Announced on YouTube', 'Special ministry gatherings',
   'Dates for city gatherings and special meetings are announced on the Headstone Prophetic Ministry International channel.', 1),
  ('event', '26 Jul 2026', 'Moatize teaching — The Spirit of The Creator',
   'A standout teaching on how the Spirit of the Creator has moved through different men in different dispensations.', 0),
  ('event', '25 Jul 2026', 'Moatize — Mphamvu Ya Namalenga',
   'A powerful Chichewa message affirming that the Creator''s power alone is enough to accomplish the work.', 1),
  ('event', '2 Aug 2026', 'Lilongwe Sunday ministry',
   'A memorable Sunday gathering in Lilongwe — now available to rewatch in parts on YouTube.', 2)
) as seed
where not exists (select 1 from public.announcements);
