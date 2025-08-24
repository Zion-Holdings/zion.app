-- Create product_reviews table for user ratings and comments
CREATE TABLE IF NOT EXISTS public.product_reviews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id TEXT NOT NULL,
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Index for faster lookup by product
CREATE INDEX IF NOT EXISTS product_reviews_product_id_idx ON public.product_reviews(product_id);

-- Enable Row Level Security
ALTER TABLE public.product_reviews ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read reviews
CREATE POLICY "Public can read product reviews" ON public.product_reviews
  FOR SELECT USING (true);

-- Allow authenticated users to insert reviews
CREATE POLICY "Users can create product reviews" ON public.product_reviews
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Allow users to update their own reviews
CREATE POLICY "Users can update their own product reviews" ON public.product_reviews
  FOR UPDATE USING (auth.uid() = user_id);

-- Allow users to delete their own reviews
CREATE POLICY "Users can delete their own product reviews" ON public.product_reviews
  FOR DELETE USING (auth.uid() = user_id);
