-- Seed sample talent profiles
INSERT INTO public.talent_profiles (user_id, full_name, professional_title, bio, years_experience, skills, availability_type, timezone)
VALUES
  ('00000000-0000-0000-0000-000000000001', 'Alice Smith', 'Frontend Developer', 'Expert in React and modern web technologies.', 5, ARRAY['JavaScript','React','CSS'], 'full-time', 'UTC'),
  ('00000000-0000-0000-0000-000000000002', 'Bob Johnson', 'Data Scientist', 'Specializes in machine learning and data analysis.', 7, ARRAY['Python','TensorFlow','Pandas'], 'contract', 'UTC'),
  ('00000000-0000-0000-0000-000000000003', 'Carol Lee', 'DevOps Engineer', 'Experienced with CI/CD pipelines and cloud infrastructure.', 6, ARRAY['Docker','Kubernetes','AWS'], 'part-time', 'UTC');
