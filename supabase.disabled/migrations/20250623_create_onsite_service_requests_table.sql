-- Create onsite_service_requests table
CREATE TABLE IF NOT EXISTS public.onsite_service_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  location TEXT NOT NULL,
  details TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Index for quick lookup by created_at
CREATE INDEX IF NOT EXISTS onsite_service_requests_created_at_idx ON public.onsite_service_requests(created_at);
