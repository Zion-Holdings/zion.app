
-- Create talent_profiles table
CREATE TABLE IF NOT EXISTS public.talent_profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) NOT NULL,
  full_name TEXT NOT NULL,
  professional_title TEXT NOT NULL,
  bio TEXT NOT NULL,
  summary TEXT,
  profile_picture_url TEXT,
  years_experience INTEGER NOT NULL,
  key_projects JSONB,
  skills TEXT[] NOT NULL,
  tools_platforms TEXT[],
  categorized_skills JSONB,
  availability_type TEXT NOT NULL,
  timezone TEXT NOT NULL,
  hourly_rate NUMERIC,
  portfolio_links TEXT[],
  cv_url TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  is_published BOOLEAN DEFAULT true,
  
  CONSTRAINT valid_categorized_skills CHECK (
    categorized_skills IS NULL OR
    (categorized_skills ? 'programming' AND 
     categorized_skills ? 'devops' AND 
     categorized_skills ? 'platforms' AND 
     categorized_skills ? 'softSkills' AND 
     categorized_skills ? 'other')
  )
);

-- Index for faster lookups
CREATE INDEX IF NOT EXISTS talent_profiles_user_id_idx ON public.talent_profiles(user_id);

-- RLS policies
ALTER TABLE public.talent_profiles ENABLE ROW LEVEL SECURITY;

-- Allow users to view all published talent profiles
CREATE POLICY "Anyone can view published talent profiles"
ON public.talent_profiles
FOR SELECT
USING (is_published = true);

-- Allow users to insert their own talent profile
CREATE POLICY "Users can create their own talent profile"
ON public.talent_profiles
FOR INSERT
WITH CHECK (auth.uid() = user_id);

-- Allow users to update only their own talent profile
CREATE POLICY "Users can update their own talent profile"
ON public.talent_profiles
FOR UPDATE
USING (auth.uid() = user_id);

-- Allow users to delete only their own talent profile
CREATE POLICY "Users can delete their own talent profile"
ON public.talent_profiles
FOR DELETE
USING (auth.uid() = user_id);

-- Create storage buckets for profile images and resumes if they don't exist
INSERT INTO storage.buckets (id, name, public)
VALUES ('profile-images', 'profile-images', true)
ON CONFLICT (id) DO NOTHING;

INSERT INTO storage.buckets (id, name, public)
VALUES ('resumes', 'resumes', true)
ON CONFLICT (id) DO NOTHING;

-- Add storage policies
CREATE POLICY "Public can read profile images"
ON storage.objects
FOR SELECT
USING (bucket_id = 'profile-images');

CREATE POLICY "Authenticated users can upload profile images"
ON storage.objects
FOR INSERT
WITH CHECK (
  bucket_id = 'profile-images' AND
  auth.role() = 'authenticated'
);

CREATE POLICY "Users can update their own profile images"
ON storage.objects
FOR UPDATE
USING (
  bucket_id = 'profile-images' AND
  auth.uid() = owner
);

CREATE POLICY "Public can read resumes"
ON storage.objects
FOR SELECT
USING (bucket_id = 'resumes');

CREATE POLICY "Authenticated users can upload resumes"
ON storage.objects
FOR INSERT
WITH CHECK (
  bucket_id = 'resumes' AND
  auth.role() = 'authenticated'
);

CREATE POLICY "Users can update their own resumes"
ON storage.objects
FOR UPDATE
USING (
  bucket_id = 'resumes' AND
  auth.uid() = owner
);

-- Add update trigger for 'updated_at'
CREATE OR REPLACE FUNCTION public.update_talent_profiles_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER update_talent_profiles_updated_at
BEFORE UPDATE ON public.talent_profiles
FOR EACH ROW EXECUTE FUNCTION public.update_talent_profiles_updated_at();
