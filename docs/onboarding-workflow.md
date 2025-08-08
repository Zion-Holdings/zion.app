# Onboarding Workflow (Zion AI Marketplace)

- API
  - POST `/api/onboarding/update` { role, milestone, status } – updates a milestone for the authenticated user
  - GET `/api/onboarding/progress?role=talent|client` – returns rows for the authenticated user
  - POST `/api/onboarding/nudge` { role } – returns banner text and triggers email (placeholder)
  - POST `/api/onboarding/nudge-internal` – internal use by scheduler; finds stale pending key milestones (>48h)

- Supabase
  - Run `data/sql/2025-08-08_onboarding.sql` to create table and RLS policies
  - Table: `public.user_onboarding_progress`

- UI
  - Use `components/onboarding/OnboardingProgress.tsx` in dashboard

- Operator (actions to milestones)
  - Use `utils/onboarding/operator.ts#handleUserAction(userId, action)` on key user actions

- Scheduler
  - Netlify function: `netlify/functions/scheduled-nudges.ts` (hourly)
  - Wire to call the internal endpoint or Supabase RPC as needed