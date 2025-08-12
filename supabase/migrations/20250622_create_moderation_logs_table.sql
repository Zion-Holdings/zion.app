-- Create table to store listing moderation results
CREATE TABLE IF NOT EXISTS public.moderation_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  listing_id UUID NOT NULL,
  listing_type TEXT NOT NULL CHECK (listing_type IN ('product', 'service')),
  flagged BOOLEAN NOT NULL DEFAULT false,
  result JSONB NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending_review',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  reviewed_at TIMESTAMPTZ,
  reviewed_by UUID
);

-- Quick look up by status
CREATE INDEX IF NOT EXISTS moderation_logs_status_idx
  ON public.moderation_logs (status);
