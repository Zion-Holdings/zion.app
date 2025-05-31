-- Create team_invites table
CREATE TABLE IF NOT EXISTS team_invites (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    project_brief_id UUID, -- REFERENCES project_briefs(id) ON DELETE SET NULL, -- Assuming project_briefs table will be created
    team_recommendation_id UUID, -- Could reference a saved team_recommendation if we decide to store them
    talent_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE, -- Assuming talent user_id is stored in profiles table
    role_title TEXT NOT NULL, -- The role the talent is being invited for, e.g., "Fullstack Engineer"
    status TEXT NOT NULL DEFAULT 'pending', -- e.g., pending, accepted, declined, withdrawn
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),

    CONSTRAINT check_status CHECK (status IN ('pending', 'accepted', 'declined', 'withdrawn'))
);

-- Optional: Add indexes for frequently queried columns
CREATE INDEX IF NOT EXISTS idx_team_invites_talent_id ON team_invites(talent_id);
CREATE INDEX IF NOT EXISTS idx_team_invites_project_brief_id ON team_invites(project_brief_id);
CREATE INDEX IF NOT EXISTS idx_team_invites_status ON team_invites(status);

-- RLS Policies (example, adjust as needed)
ALTER TABLE team_invites ENABLE ROW LEVEL SECURITY;

-- Default to denying all for safety, specific policies will grant access.
CREATE POLICY "Deny all access by default"
ON team_invites
FOR ALL
USING (false)
WITH CHECK (false);

-- Allow authenticated users to create invites for projects they own (if project_briefs table and user_id link exists)
-- For now, this is a placeholder as project_briefs table is not yet defined with user ownership.
-- A simpler policy might be needed if project_brief_id is always NULL initially.
CREATE POLICY "Allow authenticated users to create invites if project_brief_id is theirs (placeholder)"
ON team_invites
FOR INSERT
TO authenticated
WITH CHECK (
    project_brief_id IS NULL OR -- Allow if no project brief is linked yet
    EXISTS (
        SELECT 1 FROM project_briefs pb -- THIS TABLE (project_briefs) IS NOT DEFINED YET
        WHERE pb.id = team_invites.project_brief_id AND pb.user_id = auth.uid()
    )
);

-- More permissive insert for now if project briefs are not saved, allowing any authenticated user to create an invite.
-- This should be reviewed once project brief saving is implemented.
/*
CREATE POLICY "Allow authenticated users to create invites"
ON team_invites
FOR INSERT
TO authenticated
WITH CHECK (true);
*/

CREATE POLICY "Allow talent to see their own invites"
ON team_invites
FOR SELECT
TO authenticated
WITH CHECK (talent_id = auth.uid());

-- Allow project owner to see invites for their project (if project_briefs table exists)
CREATE POLICY "Allow project owner to see invites for their project (placeholder)"
ON team_invites
FOR SELECT
TO authenticated
WITH CHECK (
    project_brief_id IS NULL OR -- Or adjust based on how invites are managed without saved briefs
    EXISTS (
        SELECT 1 FROM project_briefs pb -- THIS TABLE (project_briefs) IS NOT DEFINED YET
        WHERE pb.id = team_invites.project_brief_id AND pb.user_id = auth.uid()
    )
);

CREATE POLICY "Allow talent to update status of their own invites"
ON team_invites
FOR UPDATE
TO authenticated
USING (talent_id = auth.uid())
WITH CHECK (status IN ('accepted', 'declined')); -- Talent can only change to these statuses

-- Project owner might need rights to withdraw an invite (status = 'withdrawn')
CREATE POLICY "Allow project owner to withdraw pending invites (placeholder)"
ON team_invites
FOR UPDATE
TO authenticated
USING (
    status = 'pending' AND
    (
        project_brief_id IS NULL OR
        EXISTS (
            SELECT 1 FROM project_briefs pb -- THIS TABLE (project_briefs) IS NOT DEFINED YET
            WHERE pb.id = team_invites.project_brief_id AND pb.user_id = auth.uid()
        )
    )
)
WITH CHECK (status = 'withdrawn');


-- Note: The RLS policies involving `project_briefs` are placeholders.
-- The FK `project_brief_id UUID REFERENCES project_briefs(id)` is commented out
-- as the `project_briefs` table is not yet defined. This FK should be added
-- in a new migration once `project_briefs` table is created.
-- For now, `project_brief_id` is a standalone UUID column.
-- RLS policies will need significant review once user roles and project/brief ownership are finalized.
