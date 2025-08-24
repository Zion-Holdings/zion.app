-- Create public.profiles table if it doesn't exist
-- Ensures essential user information is available publicly, linked to auth.users.
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  updated_at TIMESTAMPTZ,
  display_name TEXT,
  avatar_url TEXT,
  email TEXT, -- Can be useful for display, though auth.users.email is the source of truth
  profile_complete BOOLEAN DEFAULT FALSE,
  -- Add any other columns that your application might expect based on UserProfile type
  created_at TIMESTAMPTZ DEFAULT now() -- It's good practice to have a creation timestamp
);

-- Function to automatically create a profile entry for a new user.
-- This function is triggered after a new user is inserted into auth.users.
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER -- Crucial for allowing the function to operate on auth.users and public.profiles
AS $$
BEGIN
  INSERT INTO public.profiles (id, email, display_name, avatar_url)
  VALUES (
    NEW.id,
    NEW.email,
    NEW.raw_user_meta_data->>'display_name', -- Extracts display_name from metadata if provided during signup
    NEW.raw_user_meta_data->>'avatar_url'    -- Extracts avatar_url from metadata if provided
  );
  RETURN NEW;
END;
$$;

-- Trigger to execute handle_new_user function after each new user insertion in auth.users.
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users; -- Remove existing trigger if any to prevent duplication
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Row Level Security (RLS) Policies for public.profiles table.
-- Enable RLS for the table.
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Policy: Allow users to select their own profile.
DROP POLICY IF EXISTS "Users can select their own profile" ON public.profiles;
CREATE POLICY "Users can select their own profile"
  ON public.profiles FOR SELECT
  USING (auth.uid() = id);

-- Policy: Allow users to insert their own profile data.
-- Note: The trigger handles initial insertion. This policy allows for updates if needed via INSERT ON CONFLICT.
DROP POLICY IF EXISTS "Users can insert their own profile" ON public.profiles;
CREATE POLICY "Users can insert their own profile"
  ON public.profiles FOR INSERT
  WITH CHECK (auth.uid() = id);

-- Policy: Allow users to update their own profile.
DROP POLICY IF EXISTS "Users can update their own profile" ON public.profiles;
CREATE POLICY "Users can update their own profile"
  ON public.profiles FOR UPDATE
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

-- Policy: Allow users to delete their own profile.
-- Consider if users should be able to delete their profiles or if it should be an admin task.
DROP POLICY IF EXISTS "Users can delete their own profile" ON public.profiles;
CREATE POLICY "Users can delete their own profile"
  ON public.profiles FOR DELETE
  USING (auth.uid() = id);

-- Function to automatically update `updated_at` timestamp on profile modification.
CREATE OR REPLACE FUNCTION public.update_profiles_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to execute update_profiles_updated_at before any update on a profile.
DROP TRIGGER IF EXISTS update_profiles_updated_at_trigger ON public.profiles;
CREATE TRIGGER update_profiles_updated_at_trigger
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.update_profiles_updated_at();

-- Grant necessary permissions. Supabase handles many defaults, but explicit grants can be useful.
-- Ensure authenticated users can read profiles as per your app's requirements.
-- If profiles (or parts of them like display_name, avatar_url) should be publicly readable:
-- DROP POLICY IF EXISTS "Public can read specific profile fields" ON public.profiles;
-- CREATE POLICY "Public can read specific profile fields"
--   ON public.profiles FOR SELECT
--   USING (true); -- This makes all profiles readable. Adjust condition as needed.
-- For example, to allow reading only if profile_complete is true or some other public flag:
-- CREATE POLICY "Public can read completed profiles" ON public.profiles FOR SELECT USING (profile_complete = TRUE);

COMMENT ON TABLE public.profiles IS 'Stores public profile information for users, linked to auth.users.';
COMMENT ON FUNCTION public.handle_new_user() IS 'Trigger function to populate public.profiles upon new user creation in auth.users.';
COMMENT ON TRIGGER on_auth_user_created ON auth.users IS 'Executes handle_new_user after a new user is inserted into auth.users.';
