-- Create the project_agreements table
CREATE TABLE public.project_agreements (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    project_id UUID NOT NULL REFERENCES public.projects(id) ON DELETE CASCADE,
    agreement_type TEXT NOT NULL CHECK (agreement_type IN ('legal_draft_only', 'smart_contract_backed')),
    legal_draft_pdf_path TEXT, -- Path to the PDF file in the 'agreements' Supabase storage bucket
    version INTEGER NOT NULL DEFAULT 1,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    clickwrap_agreed_by_client_id UUID REFERENCES auth.users(id),
    clickwrap_agreed_by_talent_id UUID REFERENCES auth.users(id),
    clickwrap_client_agreed_at TIMESTAMPTZ,
    clickwrap_talent_agreed_at TIMESTAMPTZ,
    docusign_envelope_id TEXT,
    docusign_status TEXT,
    sc_transaction_hash TEXT,
    sc_network_name TEXT,
    sc_block_number BIGINT,
    sc_deployed_address TEXT,
    sc_contract_type TEXT, -- e.g., 'escrow', 'simpleAgreement'
    sc_metadata_url TEXT,
    sc_status TEXT DEFAULT 'draft' -- e.g., 'draft', 'pending_deployment', 'deployed', 'executed', 'cancelled', 'error'
);

-- Add indexes
CREATE INDEX idx_project_agreements_project_id ON public.project_agreements(project_id);
CREATE INDEX idx_project_agreements_client_id ON public.project_agreements(clickwrap_agreed_by_client_id);
CREATE INDEX idx_project_agreements_talent_id ON public.project_agreements(clickwrap_agreed_by_talent_id);
CREATE INDEX idx_project_agreements_sc_deployed_address ON public.project_agreements(sc_deployed_address);
CREATE INDEX idx_project_agreements_agreement_type ON public.project_agreements(agreement_type);
CREATE INDEX idx_project_agreements_sc_status ON public.project_agreements(sc_status);


-- Enable Row Level Security (RLS)
ALTER TABLE public.project_agreements ENABLE ROW LEVEL SECURITY;

-- RLS Policies
-- Allow users to select agreements where they are associated with the project (client or talent)
CREATE POLICY "Allow select for project client or talent"
ON public.project_agreements
FOR SELECT
USING (
    EXISTS (
        SELECT 1
        FROM public.projects p
        WHERE p.id = project_agreements.project_id
        AND (p.client_id = auth.uid() OR p.talent_id = auth.uid())
    )
);

-- Allow users to insert agreements if they are the client or talent of the project
CREATE POLICY "Allow insert for project client or talent"
ON public.project_agreements
FOR INSERT
WITH CHECK (
    EXISTS (
        SELECT 1
        FROM public.projects p
        WHERE p.id = project_agreements.project_id
        AND (p.client_id = auth.uid() OR p.talent_id = auth.uid())
    )
);

-- Allow users to update agreements if they are the client or talent of the project
-- This is a broad update; more granular policies might be needed later (e.g., client updates signing status, system updates SC status)
CREATE POLICY "Allow update for project client or talent"
ON public.project_agreements
FOR UPDATE
USING (
    EXISTS (
        SELECT 1
        FROM public.projects p
        WHERE p.id = project_agreements.project_id
        AND (p.client_id = auth.uid() OR p.talent_id = auth.uid())
    )
)
WITH CHECK (
    EXISTS (
        SELECT 1
        FROM public.projects p
        WHERE p.id = project_agreements.project_id
        AND (p.client_id = auth.uid() OR p.talent_id = auth.uid())
    )
);

-- Trigger to update 'updated_at' timestamp on row update
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_project_agreements_updated_at
BEFORE UPDATE ON public.project_agreements
FOR EACH ROW
EXECUTE FUNCTION public.handle_updated_at();

COMMENT ON COLUMN public.project_agreements.legal_draft_pdf_path IS 'Path to the PDF file in the ''agreements'' Supabase storage bucket';
COMMENT ON COLUMN public.project_agreements.sc_contract_type IS 'e.g., ''escrow'', ''simpleAgreement''';
COMMENT ON COLUMN public.project_agreements.sc_status IS 'e.g., ''draft'', ''pending_deployment'', ''deployed'', ''executed'', ''cancelled'', ''error''';

-- Note: The RLS policies assume that the 'projects' table has 'client_id' and 'talent_id' columns
-- that store UUIDs from auth.users. If the column names or logic is different, these policies need adjustment.
-- The foreign key `project_id REFERENCES public.projects(id)` assumes `public.projects` has `id UUID PRIMARY KEY`.
-- If `projects` table doesn't exist or schema is different, this migration may fail or need adjustment.
-- A separate migration should ensure the `projects` table is correctly defined *before* this migration runs.

-- For the RLS policies on storage.objects for the 'agreements' bucket,
-- the existing policy "Users can view agreements they're involved in" from 20250601_create_agreements_bucket.sql
-- uses `name LIKE CONCAT(p.job_id, '-', p.talent_id, '-%')`.
-- This implies that `legal_draft_pdf_path` should correspond to such a naming convention if that RLS is to be effective for those files.
-- The policies defined here are for the `project_agreements` table itself, not the storage objects.
