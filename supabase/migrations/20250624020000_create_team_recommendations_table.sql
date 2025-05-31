-- Create team_recommendations table
CREATE TABLE IF NOT EXISTS team_recommendations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    project_brief_id UUID NOT NULL REFERENCES project_briefs(id) ON DELETE CASCADE,
    user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL, -- Denormalized for easier querying, or join through project_briefs
    recommendation_summary TEXT,
    roles JSONB NOT NULL, -- Stores array of RecommendedRole objects
    total_estimated_rate JSONB, -- Stores { min, max }
    total_weekly_burn JSONB, -- Stores { min, max }
    total_project_estimate JSONB, -- Stores { min, max }
    generated_at TIMESTAMPTZ DEFAULT NOW(),
    created_at TIMESTAMPTZ DEFAULT NOW() -- For the record itself
);

-- RLS Policies for team_recommendations
ALTER TABLE team_recommendations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow users to create recommendations linked to their briefs"
ON team_recommendations
FOR INSERT
TO authenticated
WITH CHECK (EXISTS (
    SELECT 1 FROM project_briefs pb
    WHERE pb.id = team_recommendations.project_brief_id AND pb.user_id = auth.uid()
));

CREATE POLICY "Allow users to view recommendations for their briefs"
ON team_recommendations
FOR SELECT
TO authenticated
USING (EXISTS (
    SELECT 1 FROM project_briefs pb
    WHERE pb.id = team_recommendations.project_brief_id AND pb.user_id = auth.uid()
));

CREATE POLICY "Allow users to delete recommendations for their briefs"
ON team_recommendations
FOR DELETE
TO authenticated
USING (EXISTS (
    SELECT 1 FROM project_briefs pb
    WHERE pb.id = team_recommendations.project_brief_id AND pb.user_id = auth.uid()
));


-- Optional: Admin access
-- CREATE POLICY "Allow admin full access" ON team_recommendations FOR ALL USING (true);

CREATE INDEX IF NOT EXISTS idx_team_recommendations_project_brief_id ON team_recommendations(project_brief_id);
CREATE INDEX IF NOT EXISTS idx_team_recommendations_user_id ON team_recommendations(user_id);
