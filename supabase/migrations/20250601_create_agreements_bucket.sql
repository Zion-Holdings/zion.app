
-- Create a storage bucket for agreement files
INSERT INTO storage.buckets (id, name, public)
VALUES ('agreements', 'Agreements', false);

-- Set up RLS policy for the agreements bucket to ensure only authenticated users can upload
CREATE POLICY "Allow authenticated users to upload agreements" ON storage.objects
  FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'agreements');

-- Set up RLS policy for the agreements bucket to ensure users can only access agreements they're involved in
CREATE POLICY "Users can view agreements they're involved in" ON storage.objects
  FOR SELECT
  TO authenticated
  USING (
    bucket_id = 'agreements' AND
    (
      -- Check if the user is a talent or client in the project
      EXISTS (
        SELECT 1 FROM projects p
        WHERE (p.talent_id = auth.uid() OR p.client_id = auth.uid())
        AND object_path LIKE CONCAT(p.job_id, '-', p.talent_id, '-%')
      )
    )
  );
