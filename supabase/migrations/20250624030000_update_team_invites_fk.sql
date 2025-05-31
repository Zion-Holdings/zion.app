-- Add FK constraint to team_invites.project_brief_id
-- Ensure this runs AFTER project_briefs table is created.

-- Assuming project_brief_id column exists from the initial team_invites migration and is of type UUID.
-- If it was created with a different type or needs other changes, those should be handled here too.
-- For this migration, we're just adding the foreign key constraint.

ALTER TABLE team_invites
ADD CONSTRAINT fk_project_briefs
FOREIGN KEY (project_brief_id)
REFERENCES project_briefs(id)
ON DELETE SET NULL; -- Or CASCADE, depending on desired behavior. SET NULL is safer if invites can exist without a brief.

-- Update RLS policies on team_invites that depend on project_brief_id user ownership.
-- The original team_invites migration had placeholder policies.
-- These should be reviewed and updated to reflect the new FK relationship.

-- Example: Dropping old placeholder policies and creating new ones.
-- Make sure to check policy names from the 'YYYYMMDDHHMMSS_create_team_invites_table.sql' file.
-- Assuming the policy for insert was named "Allow authenticated users to create invites if project_brief_id is theirs (placeholder)"

DROP POLICY IF EXISTS "Allow authenticated users to create invites if project_brief_id is theirs (placeholder)" ON team_invites;
DROP POLICY IF EXISTS "Allow authenticated users to create invites" ON team_invites; -- If a more permissive one was enabled

CREATE POLICY "Allow auth users to create invites if they own the linked project brief"
ON team_invites
FOR INSERT
TO authenticated
WITH CHECK (
    project_brief_id IS NOT NULL AND -- Require a project brief to be linked
    EXISTS (
        SELECT 1 FROM project_briefs pb
        WHERE pb.id = team_invites.project_brief_id AND pb.user_id = auth.uid()
    )
);

-- Example: Updating SELECT policy if it was a placeholder
DROP POLICY IF EXISTS "Allow project owner to see invites for their project (placeholder)" ON team_invites;

CREATE POLICY "Allow project owner to see invites for their project"
ON team_invites
FOR SELECT
TO authenticated
USING (
    project_brief_id IS NOT NULL AND
    EXISTS (
        SELECT 1 FROM project_briefs pb
        WHERE pb.id = team_invites.project_brief_id AND pb.user_id = auth.uid()
    )
);

-- Example: Updating UPDATE policy for withdrawing invites
DROP POLICY IF EXISTS "Allow project owner to withdraw pending invites (placeholder)" ON team_invites;

CREATE POLICY "Allow project owner to withdraw pending invites"
ON team_invites
FOR UPDATE -- Specifically for changing status to 'withdrawn'
TO authenticated
USING (
    status = 'pending' AND -- Only if current status is pending
    project_brief_id IS NOT NULL AND
    EXISTS (
        SELECT 1 FROM project_briefs pb
        WHERE pb.id = team_invites.project_brief_id AND pb.user_id = auth.uid()
    )
)
WITH CHECK (status = 'withdrawn');

-- Note: The RLS policies "Deny all access by default" and "Allow talent to see their own invites"
-- and "Allow talent to update status of their own invites" from the original migration
-- are likely still valid and may not need changes unless their logic is also tied to project_brief_id existence in a new way.
-- Always review all policies on a table when altering related structures or access patterns.
