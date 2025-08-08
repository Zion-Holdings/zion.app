### Zion Quote Request Operator Workflow

This workflow handles “Request to Hire” submissions from talent profile pages, with validation, optional AI summary/classification, database write, notifications, and a user-facing confirmation.

#### API Endpoint (Next.js server)
- Path: `POST /api/quote-request`
- Body fields:
  - `talentId` (string, optional)
  - `talentName` (string, optional)
  - `requesterName` (string, required)
  - `requesterEmail` (string, required)
  - `projectOverview` (string, required)
  - `timeline` (string, optional)
  - `budgetRange` (string | number | { min, max, currency }, optional)
- Success response: `{ status: 'ok', message: 'Thanks! Your request has been submitted. The talent will be in touch soon.', requestId }`

#### Database
- Table: `public.quote_requests`
- Migration: `supabase/migrations/20250808_create_quote_requests.sql`
- Fields: `talent_id, talent_name, requester_name, requester_email, summary, full_description, project_type, timeline, budget_display, budget_currency, budget_min, budget_max, status, created_at`

#### Optional AI Summary/Classification
- Requires `OPENAI_API_KEY` (and optional `OPENAI_MODEL`, default `gpt-4o-mini`).
- Produces `summary` and `project_type` for admin/talent preview.

#### Notifications
- Admin Slack: set `ADMIN_SLACK_WEBHOOK_URL` to enable.
- Talent email (optional) via Resend API:
  - `TALENT_EMAIL_ALLOW=true`
  - `RESEND_API_KEY=...`
  - `TALENT_EMAIL_SENDER=no-reply@zion.ai`
  - `TALENT_NOTIFICATION_EMAIL=talent@zion.ai` (distribution inbox or dynamic per talent)

#### Budget Normalization
- Inputs like `$1k - $2k`, `2000`, `€1,500 to 3,000`, or `{ min: 1000, max: 2000, currency: 'USD' }` are normalized to a structured object and a display string (e.g., `$1,000 - $2,000`).

#### Supabase Edge Function (secure backend)
- Path: `supabase/functions/zion-quote-request/index.ts`
- Deploy with Supabase CLI:
  - `supabase functions deploy zion-quote-request`
  - `supabase secrets set OPENAI_API_KEY=... SUPABASE_SERVICE_ROLE_KEY=... ADMIN_SLACK_WEBHOOK_URL=...`
- Invoke from client or server:
  - `POST {SUPABASE_EDGE_FUNCTION_URL}/zion-quote-request`

#### Environment Variables
- Required for DB write (server-side only):
  - `NEXT_PUBLIC_SUPABASE_URL`
  - `SUPABASE_SERVICE_ROLE_KEY`
- Optional for AI:
  - `OPENAI_API_KEY`
  - `OPENAI_MODEL` (default: `gpt-4o-mini`)
- Optional for notifications:
  - `ADMIN_SLACK_WEBHOOK_URL`
  - `TALENT_EMAIL_ALLOW`, `RESEND_API_KEY`, `TALENT_EMAIL_SENDER`, `TALENT_NOTIFICATION_EMAIL`
  - `REQUEST_DASHBOARD_URL` (to include a link in notifications)

#### Security Notes
- Do not expose `SUPABASE_SERVICE_ROLE_KEY` to the browser; it is used only on the server/API/Edge Function.
- Prefer invoking the Supabase Edge Function from the frontend; the Next.js API route is a local/proxy alternative.
- Store secrets in your hosting provider’s encrypted secret manager.

#### Frontend Hookup Example
```ts
// Submit from talent profile form
await fetch('/api/quote-request', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    talentId,
    talentName,
    requesterName,
    requesterEmail,
    projectOverview,
    timeline,
    budgetRange,
  }),
});
```