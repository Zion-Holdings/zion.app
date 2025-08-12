
-- Create a table to store job-talent matches
CREATE TABLE IF NOT EXISTS public.job_talent_matches (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  job_id UUID NOT NULL,
  talent_id UUID NOT NULL,
  match_score INTEGER NOT NULL DEFAULT 0,
  matched_skills TEXT[] DEFAULT '{}',
  status TEXT NOT NULL DEFAULT 'new',
  reason TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  viewed_at TIMESTAMP WITH TIME ZONE,
  
  -- Add foreign key constraints
  CONSTRAINT fk_job FOREIGN KEY (job_id) REFERENCES public.jobs (id) ON DELETE CASCADE,
  CONSTRAINT fk_talent FOREIGN KEY (talent_id) REFERENCES public.talent_profiles (id) ON DELETE CASCADE,
  CONSTRAINT unique_job_talent_match UNIQUE (job_id, talent_id)
);

-- Enable Row Level Security
ALTER TABLE public.job_talent_matches ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Clients can view matches for their jobs"
  ON public.job_talent_matches
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1
      FROM public.jobs
      WHERE jobs.id = job_talent_matches.job_id
        AND jobs.client_id = auth.uid()
    )
  );

CREATE POLICY "Talents can view their own matches"
  ON public.job_talent_matches
  FOR SELECT
  USING (talent_id = auth.uid());

CREATE POLICY "Talents can update their own matches"
  ON public.job_talent_matches
  FOR UPDATE
  USING (talent_id = auth.uid());

-- Create index for performance
CREATE INDEX idx_job_talent_matches_job_id ON public.job_talent_matches (job_id);
CREATE INDEX idx_job_talent_matches_talent_id ON public.job_talent_matches (talent_id);
