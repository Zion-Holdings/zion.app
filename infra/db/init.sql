-- Enable UUID and extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- Users
CREATE TABLE IF NOT EXISTS app_user (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT UNIQUE NOT NULL,
  display_name TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Sessions (for API tokens)
CREATE TABLE IF NOT EXISTS user_session (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES app_user(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  expires_at TIMESTAMPTZ NOT NULL
);

-- Jobs
CREATE TABLE IF NOT EXISTS job_post (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES app_user(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  location TEXT,
  tags TEXT[],
  status TEXT NOT NULL DEFAULT 'draft',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Talent
CREATE TABLE IF NOT EXISTS talent_profile (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES app_user(id) ON DELETE CASCADE,
  full_name TEXT NOT NULL,
  country TEXT,
  skills TEXT[],
  experience_years INT,
  metadata JSONB,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Projects
CREATE TABLE IF NOT EXISTS project (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES app_user(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT,
  status TEXT NOT NULL DEFAULT 'active',
  milestones JSONB DEFAULT '[]'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Notifications
CREATE TABLE IF NOT EXISTS notification (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES app_user(id) ON DELETE CASCADE,
  channel TEXT NOT NULL, -- 'slack' | 'extension' | 'email'
  title TEXT NOT NULL,
  body TEXT NOT NULL,
  data JSONB,
  read BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- RLS helper
ALTER TABLE app_user ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_session ENABLE ROW LEVEL SECURITY;
ALTER TABLE job_post ENABLE ROW LEVEL SECURITY;
ALTER TABLE talent_profile ENABLE ROW LEVEL SECURITY;
ALTER TABLE project ENABLE ROW LEVEL SECURITY;
ALTER TABLE notification ENABLE ROW LEVEL SECURITY;

-- Simple RLS: each user sees own data
CREATE POLICY app_user_self ON app_user
  USING (id = current_setting('app.current_user_id', true)::uuid);

CREATE POLICY session_owner ON user_session
  USING (user_id = current_setting('app.current_user_id', true)::uuid);

CREATE POLICY job_owner ON job_post
  USING (user_id = current_setting('app.current_user_id', true)::uuid);

CREATE POLICY talent_owner ON talent_profile
  USING (user_id = current_setting('app.current_user_id', true)::uuid);

CREATE POLICY project_owner ON project
  USING (user_id = current_setting('app.current_user_id', true)::uuid);

CREATE POLICY notification_owner ON notification
  USING (user_id = current_setting('app.current_user_id', true)::uuid);

-- Functions to set current user
CREATE OR REPLACE FUNCTION set_app_user(p_user_id uuid) RETURNS void AS $$
BEGIN
  PERFORM set_config('app.current_user_id', p_user_id::text, true);
END; $$ LANGUAGE plpgsql SECURITY DEFINER;