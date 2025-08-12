-- Add video and 3D model URLs for product listings
ALTER TABLE IF EXISTS public.product_listings
  ADD COLUMN IF NOT EXISTS video_url TEXT,
  ADD COLUMN IF NOT EXISTS model_url TEXT;
