-- Adds relevance scoring columns to applications
alter table if exists public.applications
  add column if not exists relevance_score int,
  add column if not exists relevance_summary text,
  add column if not exists relevance_suggested_action text check (relevance_suggested_action in ('Shortlist','Needs Review','Low Match')),
  add column if not exists relevance_breakdown jsonb,
  add column if not exists relevance_scored_at timestamptz;

-- Optional: pgvector columns (requires extension)
-- Uncomment if pgvector is available
-- create extension if not exists vector;
-- alter table if exists public.applications
--   add column if not exists resume_embedding vector(1536),
--   add column if not exists job_embedding vector(1536);

-- RLS: ensure only job poster can read scoring for their applications
-- Assumes applications(job_id) -> jobs(id) with jobs.poster_id
-- Enable RLS if not enabled
-- alter table public.applications enable row level security;
-- create policy if not exists "job_poster_read_scores"
--   on public.applications
--   for select
--   using (
--     exists (
--       select 1 from public.jobs j
--       where j.id = applications.job_id and j.poster_id = auth.uid()
--     )
--   );
-- create policy if not exists "job_poster_update_scores"
--   on public.applications
--   for update
--   using (
--     exists (
--       select 1 from public.jobs j
--       where j.id = applications.job_id and j.poster_id = auth.uid()
--     )
--   );