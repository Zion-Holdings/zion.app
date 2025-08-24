
-- Create a storage bucket for agreement files
INSERT INTO storage.buckets (id, name, public)
VALUES ('agreements', 'Agreements', false)
ON CONFLICT (id) DO NOTHING;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM pg_policies
    WHERE schemaname = 'storage'
      AND tablename = 'objects'
      AND policyname = 'Allow authenticated users to upload agreements'
  ) THEN
    CREATE POLICY "Allow authenticated users to upload agreements" ON storage.objects
      FOR INSERT
      TO authenticated
      WITH CHECK (bucket_id = 'agreements');
  END IF;
END$$;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM pg_policies
    WHERE schemaname = 'storage'
      AND tablename = 'objects'
      AND policyname = 'Users can view agreements they''re involved in'
  ) THEN
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
            AND name LIKE CONCAT(p.job_id, '-', p.talent_id, '-%')
          )
        )
      );
  END IF;
END$$;
