-- Academy courses and the initial Systeme.io course.

create table if not exists academy_courses (
  id uuid default gen_random_uuid() primary key,
  created_at timestamptz default now() not null,
  slug text unique not null,
  title text not null,
  description text not null,
  duration text not null default 'Self-paced',
  students text not null default 'Online course',
  rating text not null default '5.0',
  lessons integer not null default 0,
  price text not null default 'INR 999',
  tag text not null default 'Available Now',
  link text not null,
  published boolean not null default true,
  sort_order integer not null default 0,
  about text not null,
  learning_objectives jsonb not null default '[]'::jsonb,
  prerequisites jsonb not null default '[]'::jsonb,
  who_is_this_for text not null,
  sections jsonb not null default '[]'::jsonb
);

alter table academy_courses enable row level security;

drop policy if exists "Published courses are publicly readable" on academy_courses;
create policy "Published courses are publicly readable"
  on academy_courses for select
  to anon, authenticated
  using (published = true);

insert into academy_courses (
  slug,
  title,
  description,
  link,
  about,
  who_is_this_for,
  sort_order
)
values (
  'ai-automation-lead-generation',
  'AI Automation & Lead Generation',
  'Learn practical AI automation and lead generation systems for growing a modern business.',
  'https://systeme.io/dashboard/share?hash=6446345450cf8d1ff4cc661a01fb1e3f31ce7e&type=course',
  'Build practical AI automation and lead generation systems through a guided, self-paced course.',
  'Founders, marketers, and teams who want to use AI to build better business systems.',
  0
)
on conflict (slug) do update set
  title = excluded.title,
  description = excluded.description,
  link = excluded.link,
  about = excluded.about,
  who_is_this_for = excluded.who_is_this_for,
  price = excluded.price,
  published = true,
  sort_order = excluded.sort_order;