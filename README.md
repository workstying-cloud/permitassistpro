# PermitAssist Pro

PermitAssist Pro is a paid-only B2B SaaS that turns municipal permits, renewals, and inspections into guided workflows for Canadian SMBs.

## Features

- Multi-language marketing site (EN/FR/ES/中文) with NDA-backed demo requests
- Guided compliance workspace: rules scan, filings checklist, Proof-Pack export, renewal calendar
- Stripe-ready pricing with per-location billing
- Admin console for catalog management, leads export, and feature flags
- Security defaults: RBAC scaffolding, secure headers, audit log model, and file upload guardrails

## Tech Stack

- Next.js 14 App Router, TypeScript, Tailwind CSS, shadcn/ui patterns
- Prisma ORM with PostgreSQL (Supabase or RDS)
- NextAuth email magic links, Stripe billing, Titan SMTP via Nodemailer
- Redis-compatible background jobs (BullMQ-ready), S3-compatible storage
- Testing with Jest + Testing Library and Playwright

## Getting Started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` and you will be redirected to `/en`.

### Environment Variables

Copy `.env.example` to `.env.local` in `apps/web/` or project root with the following values:

```
DATABASE_URL=postgres://...
NEXTAUTH_URL=https://...
NEXTAUTH_SECRET=...
SMTP_HOST=smtp.titan.email
SMTP_PORT=587
SMTP_USER=support@permitassist.pro
SMTP_PASS=...
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...
STORAGE_ENDPOINT=...
STORAGE_BUCKET=permitassist
REDIS_URL=...
```

### Database

Generate the Prisma client and run migrations:

```bash
npm run prisma:generate
npm run db-migrate
npm run seed
```

The seed script provisions demo rules for a Toronto food truck scenario.

## Testing

```bash
npm run lint
npm run typecheck
npm test
npm run test:e2e
```

## Deployment

- Deploy the Next.js app to Vercel (Edge runtime ready)
- Provision PostgreSQL and S3 storage via Supabase
- Configure Stripe products for Monitor (CAD $99/location) and Concierge (CAD $199/location)
- Set Titan SMTP credentials and verify outbound emails
- Configure Upstash Redis (or compatible) for queued jobs and reminders

## Security Notes

- Strict Content Security Policy allowing Stripe resources
- Magic-link authentication with MFA scaffold (2FA ready)
- Audit logs for key mutations
- Rate limiting for public demo requests

## Contributing

Please open an issue using our templates before submitting PRs. All contributions must maintain paid-only positioning and respect NDA workflows.
