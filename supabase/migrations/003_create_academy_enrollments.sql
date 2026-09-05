create table if not exists academy_enrollments (
  id uuid default gen_random_uuid() primary key,
  created_at timestamptz default now() not null,
  course_slug text not null references academy_courses(slug),
  customer_name text not null,
  customer_email text not null,
  customer_whatsapp text not null,
  razorpay_order_id text unique not null,
  razorpay_payment_id text unique,
  status text not null default 'pending' check (status in ('pending', 'paid', 'failed')),
  paid_at timestamptz
);

alter table academy_enrollments enable row level security;