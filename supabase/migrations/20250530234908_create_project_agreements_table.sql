CREATE TABLE project_agreements (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    project_title TEXT NOT NULL,
    client_id UUID REFERENCES auth.users(id), -- Assuming client is a registered user
    talent_id UUID REFERENCES auth.users(id), -- Assuming talent is a registered user
    client_name_cache TEXT, -- Cache if client_id is null or for quick display
    talent_name_cache TEXT, -- Cache if talent_id is null or for quick display

    deliverables TEXT, -- Can be markdown or plain text
    milestones JSONB, -- Store array of milestone objects: [{ title, description, dueDate, paymentAmount, status }]
    payment_structure JSONB, -- Store details like { type: "milestone-based", currency: "USD", total_amount: "1000" } or { type: "fixed-price", ... }
    jurisdiction TEXT,

    legal_draft_markdown TEXT, -- The GPT-generated legal draft
    ipfs_hash TEXT UNIQUE, -- IPFS CID of the final agreement document

    -- Smart Contract Details (nullable if not deployed on-chain)
    blockchain_network TEXT, -- e.g., 'Ethereum', 'Polygon'
    contract_address TEXT,
    transaction_hash TEXT,
    contract_type TEXT, -- e.g., 'SimpleAgreement', 'EscrowAgreement'

    status TEXT NOT NULL DEFAULT 'draft', -- e.g., 'draft', 'pending_signature', 'active', 'completed', 'terminated', 'disputed'
    version INTEGER NOT NULL DEFAULT 1,
    previous_version_id UUID REFERENCES project_agreements(id), -- Link to previous version for amendments

    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

-- Optional: Indexes for frequently queried columns
CREATE INDEX idx_project_agreements_client_id ON project_agreements(client_id);
CREATE INDEX idx_project_agreements_talent_id ON project_agreements(talent_id);
CREATE INDEX idx_project_agreements_status ON project_agreements(status);
CREATE INDEX idx_project_agreements_ipfs_hash ON project_agreements(ipfs_hash);

-- RLS (Row Level Security) Policies - Enable RLS on the table
ALTER TABLE project_agreements ENABLE ROW LEVEL SECURITY;

-- Policy: Users can view agreements they are client or talent for.
CREATE POLICY "Users can view their own agreements"
ON project_agreements FOR SELECT
USING (
  (auth.uid() = client_id OR auth.uid() = talent_id)
);

-- Policy: Users can insert new agreements if they are the client or talent (or an admin role - not defined here).
-- For simplicity, allowing insert if listed as client or talent. More specific logic might be needed.
CREATE POLICY "Users can insert agreements they are party to"
ON project_agreements FOR INSERT
WITH CHECK (
  (auth.uid() = client_id OR auth.uid() = talent_id)
);

-- Policy: Users can update agreements they are party to (e.g. status, or if amending).
-- Be cautious with update policies. Might need more granular control.
CREATE POLICY "Users can update their own agreements"
ON project_agreements FOR UPDATE
USING (
  (auth.uid() = client_id OR auth.uid() = talent_id)
)
WITH CHECK (
  (auth.uid() = client_id OR auth.uid() = talent_id)
);

-- Note: Delete policy is omitted for now, as deletes should probably be soft deletes or highly restricted.

COMMENT ON COLUMN project_agreements.milestones IS 'Store array of milestone objects: [{ title, description, dueDate, paymentAmount, status (e.g., pending, completed, paid) }]';
COMMENT ON COLUMN project_agreements.payment_structure IS 'Store details like { type: "milestone-based", currency: "USD", total_amount: "1000" } or { type: "fixed-price", currency: "USD", amount: "500", payment_schedule: "on_completion" }';
COMMENT ON COLUMN project_agreements.status IS 'e.g., draft, pending_client_signature, pending_talent_signature, active, completed, terminated, disputed, amended';
