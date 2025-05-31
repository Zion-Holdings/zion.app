-- Create project_briefs table
CREATE TABLE IF NOT EXISTS project_briefs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL, -- Link to the user who created it
    project_name TEXT NOT NULL,
    goals TEXT NOT NULL,
    timeline TEXT NOT NULL,
    budget TEXT NOT NULL,
    tech_stack TEXT[], -- Storing as an array of strings
    lock_timeline BOOLEAN DEFAULT FALSE,
    lock_budget BOOLEAN DEFAULT FALSE,
    talent_filters JSONB, -- Stores TalentFilters object { verifiedOnly, regions }
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- RLS Policies for project_briefs
ALTER TABLE project_briefs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow users to create their own project briefs"
ON project_briefs
FOR INSERT
TO authenticated
WITH CHECK (user_id = auth.uid());

CREATE POLICY "Allow users to view their own project briefs"
ON project_briefs
FOR SELECT
TO authenticated
USING (user_id = auth.uid());

CREATE POLICY "Allow users to update their own project briefs"
ON project_briefs
FOR UPDATE
TO authenticated
USING (user_id = auth.uid());

CREATE POLICY "Allow users to delete their own project briefs"
ON project_briefs
FOR DELETE
TO authenticated
USING (user_id = auth.uid());

-- Optional: Admin access (e.g., for service_role to bypass RLS in functions or admin panel)
-- CREATE POLICY "Allow admin full access" ON project_briefs FOR ALL USING (true); -- Or check for a specific admin role

CREATE INDEX IF NOT EXISTS idx_project_briefs_user_id ON project_briefs(user_id);
