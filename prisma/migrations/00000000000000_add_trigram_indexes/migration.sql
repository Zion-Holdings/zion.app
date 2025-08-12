-- Enable the pg_trgm extension
CREATE EXTENSION IF NOT EXISTS pg_trgm;

-- Add trigram indexes to the Product table
CREATE INDEX IF NOT EXISTS product_name_trgm_idx ON "Product" USING gin (name gin_trgm_ops);
CREATE INDEX IF NOT EXISTS product_description_trgm_idx ON "Product" USING gin (description gin_trgm_ops);

-- Add trigram indexes to the TalentProfile table
CREATE INDEX IF NOT EXISTS talent_profile_full_name_trgm_idx ON "TalentProfile" USING gin (full_name gin_trgm_ops);
CREATE INDEX IF NOT EXISTS talent_profile_professional_title_trgm_idx ON "TalentProfile" USING gin (professional_title gin_trgm_ops);
CREATE INDEX IF NOT EXISTS talent_profile_bio_trgm_idx ON "TalentProfile" USING gin (bio gin_trgm_ops);
CREATE INDEX IF NOT EXISTS talent_profile_summary_trgm_idx ON "TalentProfile" USING gin (summary gin_trgm_ops);

-- Note: Indexing array columns like 'skills' with pg_trgm might require converting the array to a string
-- or using a different indexing strategy. For simplicity, we're focusing on text columns here.
-- If 'skills' needs to be searchable with trigrams, it's often recommended to denormalize it
-- or use a full-text search specific function like to_tsvector.
-- Example for 'skills' if it were a simple text field (won't work directly on text[]):
-- CREATE INDEX IF NOT EXISTS talent_profile_skills_trgm_idx ON "TalentProfile" USING gin (skills gin_trgm_ops);
-- A common approach for arrays is to search using array operators or convert the array to a searchable string in queries.
-- For now, we will not create an index on the `skills` array column directly with gin_trgm_ops.
