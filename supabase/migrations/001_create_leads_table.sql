-- Run this in Supabase SQL Editor:

create table if not exists leads (
  id uuid default gen_random_uuid() primary key,
  created_at timestamptz default now() not null,
  full_name text not null,
  whatsapp text not null,
  business_name text not null,
  country text not null,
  monthly_revenue text,
  biggest_challenge text,
  referral_source text,
  extra_details text,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  page_url text,
  status text default 'new' not null,
  notes text
);

-- Enable Row Level Security
alter table leads enable row level security;

-- Allow insert from anon (website form)
create policy "Allow anonymous insert"
  on leads for insert
  to anon
  with check (true);

-- Allow read only for authenticated users
create policy "Allow authenticated read"
  on leads for select
  to authenticated
  using (true);
