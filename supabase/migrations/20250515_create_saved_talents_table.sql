
-- Create a table to store saved talents
CREATE TABLE IF NOT EXISTS public.saved_talents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  talent_id UUID NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add a unique constraint to prevent duplicate saves
CREATE UNIQUE INDEX IF NOT EXISTS saved_talents_user_talent_idx ON public.saved_talents (user_id, talent_id);

-- Enable Row Level Security
ALTER TABLE public.saved_talents ENABLE ROW LEVEL SECURITY;

-- Create policy for selecting saved talents
CREATE POLICY "Users can view their own saved talents" ON public.saved_talents
  FOR SELECT USING (auth.uid() = user_id);

-- Create policy for inserting saved talents
CREATE POLICY "Users can save talents" ON public.saved_talents
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Create policy for deleting saved talents
CREATE POLICY "Users can remove saved talents" ON public.saved_talents
  FOR DELETE USING (auth.uid() = user_id);
