# Finkfold.com — AI Lead Generation Agency

Full-stack website for Finkfold.com built with Next.js 14, TypeScript, Tailwind CSS, Supabase, and Framer Motion.

## Tech Stack

- **Frontend:** Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion, Lucide React
- **Backend:** Next.js API Routes (serverless)
- **Database:** Supabase (PostgreSQL)
- **Deployment:** Vercel

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd finkfold
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

```bash
cp .env.example .env.local
```

Fill in your credentials in `.env.local`:

### 4. Set up Supabase

1. Open the Supabase project already used by the deployed website
2. Go to **Settings → API**
3. Copy the **URL** and **anon key** into `.env.local`
4. Copy the **service_role key** into `.env.local` (keep this secret!)

### 5. Run the database migrations

1. Open the **Supabase SQL Editor** in your project dashboard
2. Run `supabase/migrations/001_create_leads_table.sql`.
3. Run `supabase/migrations/002_create_academy_courses.sql`.
4. Click **Run** after each migration.

The second migration adds the `academy_courses` table to the existing website
database, enables public reads for published courses, and adds the initial
Systeme.io course link. Add future courses to this table with `published` set to
`true`.

### Academy payments

Run `supabase/migrations/003_create_academy_enrollments.sql` after the course
migration. The website then collects the learner's name, email, and WhatsApp
number, creates a Razorpay order, verifies the payment signature on the server,
and only then opens the Systeme.io access link.

Add these values in Vercel under **Settings → Environment Variables**:

| Variable | Value |
|---|---|
| `RAZORPAY_KEY_ID` | Razorpay Key ID (`rzp_test_...` for testing) |
| `RAZORPAY_KEY_SECRET` | Razorpay secret, server-only |
| `ACADEMY_COURSE_PRICE_INR` | Course price in rupees, e.g. `999` |

The public Razorpay Key ID is also needed by the checkout, but the secret must
never be exposed to browser code or committed to GitHub. Change the displayed
course price in the `academy_courses.price` column when you change the amount.

### 6. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### 7. Test form submission

Fill out the contact form at the bottom of the page and verify:
- The form validates correctly
- Success message appears
- Data appears in your Supabase `leads` table

### 8. Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and import your repository
3. Add all environment variables from `.env.local` in the Vercel dashboard
4. Click **Deploy**

Your site will be live at your Vercel URL. Connect your custom domain `finkfold.com` in Vercel's domain settings.

## Project Structure

```
finkfold/
├── app/
│   ├── layout.tsx          # Root layout, metadata, SEO
│   ├── page.tsx            # All sections assembled
│   ├── globals.css         # Base styles
│   └── api/
│       └── leads/
│           └── route.ts    # POST handler for lead form
├── components/
│   ├── Navbar.tsx
│   ├── HeroSection.tsx
│   ├── StatsBar.tsx
│   ├── ProblemSection.tsx
│   ├── HowItWorks.tsx
│   ├── ServicesSection.tsx
│   ├── CaseStudySection.tsx
│   ├── WhoWeWorkWith.tsx
│   ├── ComparisonSection.tsx
│   ├── FaqSection.tsx
│   ├── ContactSection.tsx
│   ├── Footer.tsx
│   └── WhatsAppButton.tsx
├── lib/
│   ├── supabase.ts         # Supabase client instances
│   └── validations.ts      # Form validation rules
├── types/
│   └── lead.ts             # TypeScript type definitions
├── supabase/
│   └── migrations/
│       └── 001_create_leads_table.sql
├── public/
│   └── favicon.ico
├── .env.example
├── tailwind.config.ts
├── next.config.ts
└── package.json
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon/public key |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key (server-only) |
| `N8N_WEBHOOK_URL` | n8n webhook URL for lead notifications |
| `NEXT_PUBLIC_SITE_URL` | Production site URL |
| `KIRAN_WHATSAPP` | Kiran's WhatsApp number for alerts |

## n8n Integration

When a lead is submitted, the API sends a webhook to n8n which handles:
- WhatsApp alert to Kiran with all lead details
- WhatsApp confirmation to the lead
- Creating a contact in GoHighLevel CRM
- Tagging contact as "Website Lead"

## License

Private — All rights reserved © 2026 Finkfold.
