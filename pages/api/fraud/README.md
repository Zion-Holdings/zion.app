# Fraud Monitoring API

- POST `/api/fraud/ingest` — Ingest an event for evaluation
- GET `/api/fraud/admin/list` — List flagged items (header: `x-admin-token`)
- POST `/api/fraud/admin/action` — Take action on a flagged item
- GET `/api/fraud/report/monthly?month=YYYY-MM` — Monthly report
- GET `/api/fraud/settings/opt-out?userId=...` — Get opt-out
- POST `/api/fraud/settings/opt-out` — Set opt-out `{ userId, optOut }`

ENV:
- `OPENAI_API_KEY` — GPT
- `FRAUD_GPT_MODEL` — default `gpt-4o-mini`
- `FRAUD_AUTOHIDE` — `true|false` auto-hide suspicious messages
- `FRAUD_EMAIL_WARNINGS` — `true|false` email warn on first offense
- `ADMIN_TOKEN` — protect admin endpoints
- `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE` — enable Supabase storage (fallback to filesystem if absent)