### Zion AI Marketplace — Retention Flows Setup (Operator + Supabase)

1) Environment variables (e.g. in Netlify/Vercel or .env)
- NEXT_PUBLIC_SUPABASE_URL
- SUPABASE_URL
- NEXT_PUBLIC_SUPABASE_ANON_KEY
- SUPABASE_SERVICE_ROLE_KEY
- OPENAI_API_KEY
- RESEND_API_KEY
- RETENTION_EMAIL_FROM (e.g. "Zion <noreply@zion.ai>")
- RETENTION_WEBHOOK_SECRET (shared secret for Operator calls)
- EMAIL_WEBHOOK_SECRET (shared secret for email provider event webhooks)

2) Database schema
- Open Supabase SQL editor and run `supabase/sql/retention_schema.sql`.
- Optionally enable the `auth.users` trigger by uncommenting the trigger statements at the bottom and running with elevated privileges.

3) Instrumenting user activity
- Update `public.user_metrics.last_active_at` from your app when users interact, or rely on `auth.users.last_sign_in_at` and periodically sync to `user_metrics`.
- When a user signs up, either:
  - Let the auth trigger populate `user_metrics`, or
  - Call `POST /api/events/auth-signup` with `{ user_id, email, first_name, persona }` and header `x-operator-secret: RETENTION_WEBHOOK_SECRET`.

4) Operator schedules
- Create a daily job (UTC 08:00) that calls `POST https://<your-host>/api/cron/retention-daily` with header `x-operator-secret: RETENTION_WEBHOOK_SECRET`.
- Create a real-time hook (optional) from your signup flow to call `/api/events/auth-signup` for Day 0 emails.

5) Email provider
- Use Resend API key. Configure provider webhooks to `POST https://<your-host>/api/webhooks/email` with header `x-provider-secret: EMAIL_WEBHOOK_SECRET`.
- This records delivered/opened/bounced events into `public.email_events`.

6) Flows included
- Day 0 Welcome: new users in last 24h → checklist
- Inactivity 3/7/30 days: reactivation with profile completion prompt and optional incentive
- Job not filled: hirers with "open" jobs > 7 days → invite talent
- Talent not receiving applications: talent with no applications in 7 days → new projects

7) Dedupe
- `public.email_logs.dedupe_key` ensures one send per user per step.

8) Personalization via GPT
- Uses `utils/email/gpt.ts`. Modify prompt for brand tone if needed.

9) Local testing
- `curl -X POST https://localhost:3000/api/cron/retention-daily -H "x-operator-secret: $RETENTION_WEBHOOK_SECRET"`
- `curl -X POST https://localhost:3000/api/webhooks/email -H "x-provider-secret: $EMAIL_WEBHOOK_SECRET" -d '{"type":"opened","data":{"id":"msg_123","to":"test@example.com"}}' -H 'Content-Type: application/json'`