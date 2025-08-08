### Operator Reminder Workflow

Automated email nudges to improve activation and engagement based on inactivity and stalled milestones.

#### What it does
- Scheduled or on-demand run
- Queries user activity from Supabase
- Applies conditions:
  - 72h inactivity AND Talent with <3 milestones → onboarding nudge
  - 72h inactivity AND Client posted a job but 0 invites → invite reminder
  - 72h inactivity AND Client viewed talent but 0 quotes → quote nudge
- Generates email via OpenAI (optional) with templates fallback
- Sends via Resend or SendGrid
- Logs to `reminder_log` to prevent repeats during cooldown

#### Setup
1. Copy `.env.example` to `.env` and fill values.
2. Apply SQL (adjust table names if needed):
   - `sql/001_reminder_log.sql`
3. Install deps and run:

```bash
npm i
npm run dev      # dry-run
npm run run      # live (if DRY_RUN is false)
```

CLI flags:
- `--dry-run` force dry mode
- `--limit=50` limit number of users
- `--user-id=<uuid>` run for one user

#### Scheduling
- Cron (e.g., GitHub Actions/Vercel Cron/Supabase Scheduler) to run daily.
- Example crontab (server): `0 13 * * * cd /path && npm run run | ts --no-ts`.

#### Security
- Service Role key kept secret server-side only
- Emails include only name and public info
- Opt-out via `profiles.receive_reminders = false`

#### Deep links
- Talent: `DASHBOARD_DEEP_LINK_TALENT`
- Client: `DASHBOARD_DEEP_LINK_CLIENT`

#### Notes
- The `user_activity_summary` view in `sql/001_reminder_log.sql` is a reference and may need adjustments to match your schema.
- A cooldown of `REMINDER_COOLDOWN_DAYS` prevents repeat nudges for the same reason.