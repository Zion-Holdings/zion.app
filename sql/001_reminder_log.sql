-- Enable extensions needed for UUID if not already
create extension if not exists pgcrypto;

-- reminder_log table to avoid repeats and for audit
create table if not exists public.reminder_log (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  reason text not null check (reason in ('onboarding_nudge','invite_reminder','quote_nudge')),
  email_to text,
  email_provider text,
  provider_message_id text,
  subject text,
  sent_at timestamptz not null default now(),
  metadata jsonb,
  constraint fk_reminder_user foreign key (user_id) references public.profiles(id) on delete cascade
);

create index if not exists idx_reminder_log_user_reason_time on public.reminder_log(user_id, reason, sent_at desc);

-- Optional: user settings for opt-out
alter table if exists public.profiles add column if not exists receive_reminders boolean default true;

-- Example summary view; adjust table/column names to match your schema
-- Assumptions:
-- - public.profiles (id uuid, email text, full_name text, role text)
-- - auth.users provides last_sign_in_at (service role can access)
-- - public.onboarding_progress (user_id, milestones_completed int)
-- - public.jobs (id, client_id, created_at)
-- - public.job_invites (job_id, invited_user_id)
-- - public.client_talent_views (client_id, talent_id, viewed_at)
-- - public.quotes (id, client_id, created_at)
-- - public.messages (sender_id, created_at)

create or replace view public.user_activity_summary as
with last_login as (
  select u.id as user_id, u.email, u.raw_user_meta_data->>'full_name' as full_name,
         u.last_sign_in_at::timestamptz as last_login_at
  from auth.users u
),
progress as (
  select user_id, coalesce(max(milestones_completed), 0) as milestones_completed
  from public.onboarding_progress
  group by user_id
),
client_jobs as (
  select client_id as user_id, count(*) as client_jobs_posted, max(id) as client_last_job_id
  from public.jobs
  group by client_id
),
invites as (
  select j.client_id as user_id, j.id as client_last_job_id,
         count(i.invited_user_id) as client_invites_sent_for_last_job
  from public.jobs j
  left join public.job_invites i on i.job_id = j.id
  where j.id in (select max(id) from public.jobs group by client_id)
  group by j.client_id, j.id
),
views as (
  select client_id as user_id, count(*) as client_viewed_talent_count
  from public.client_talent_views
  group by client_id
),
quotes as (
  select client_id as user_id, count(*) as client_quotes_sent_count
  from public.quotes
  group by client_id
),
last_message as (
  select sender_id as user_id, max(created_at) as last_message_sent_at
  from public.messages
  group by sender_id
)
select p.id as user_id,
       coalesce(l.email, p.email) as email,
       coalesce(p.full_name, l.full_name) as full_name,
       coalesce(p.role, 'other')::text as role,
       l.last_login_at,
       coalesce(pr.milestones_completed, 0) as milestones_completed,
       coalesce(cj.client_jobs_posted, 0) as client_jobs_posted,
       cj.client_last_job_id,
       coalesce(iv.client_invites_sent_for_last_job, 0) as client_invites_sent_for_last_job,
       coalesce(v.client_viewed_talent_count, 0) as client_viewed_talent_count,
       coalesce(q.client_quotes_sent_count, 0) as client_quotes_sent_count,
       lm.last_message_sent_at,
       coalesce(p.receive_reminders, true) as receive_reminders,
       true as is_active
from public.profiles p
left join last_login l on l.user_id = p.id
left join progress pr on pr.user_id = p.id
left join client_jobs cj on cj.user_id = p.id
left join invites iv on iv.user_id = p.id
left join views v on v.user_id = p.id
left join quotes q on q.user_id = p.id
left join last_message lm on lm.user_id = p.id;