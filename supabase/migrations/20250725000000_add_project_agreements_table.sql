-- Create Enums
CREATE TYPE "AgreementStatus" AS ENUM ('DRAFT', 'ACTIVE', 'TERMINATED', 'COMPLETED');
CREATE TYPE "BlockchainNetwork" AS ENUM ('ETH', 'POLYGON');

-- Create ProjectAgreement Table
CREATE TABLE "ProjectAgreement" (
    "id" SERIAL PRIMARY KEY,
    "projectTitle" TEXT NOT NULL,
    "clientId" INTEGER NOT NULL,
    "talentId" INTEGER NOT NULL,
    "deliverables" TEXT NOT NULL,
    "milestonesJson" TEXT NOT NULL, -- Storing JSON as TEXT; application handles parsing
    "paymentStructure" TEXT NOT NULL,
    "legalDraftMarkdown" TEXT NOT NULL,
    "ipfsHash" TEXT,
    "blockchain" "BlockchainNetwork",
    "contractAddress" TEXT,
    "transactionHash" TEXT,
    "version" INTEGER NOT NULL DEFAULT 1,
    "previousAgreementId" INTEGER UNIQUE,
    "status" "AgreementStatus" NOT NULL DEFAULT 'DRAFT',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP, -- Default to CURRENT_TIMESTAMP, will be updated by trigger

    CONSTRAINT "ProjectAgreement_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ProjectAgreement_talentId_fkey" FOREIGN KEY ("talentId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ProjectAgreement_previousAgreementId_fkey" FOREIGN KEY ("previousAgreementId") REFERENCES "ProjectAgreement"("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- Add indexes for foreign keys for better performance
CREATE INDEX "ProjectAgreement_clientId_idx" ON "ProjectAgreement"("clientId");
CREATE INDEX "ProjectAgreement_talentId_idx" ON "ProjectAgreement"("talentId");
CREATE INDEX "ProjectAgreement_previousAgreementId_idx" ON "ProjectAgreement"("previousAgreementId");

-- Trigger to update "updatedAt" timestamp (PostgreSQL specific)
CREATE OR REPLACE FUNCTION trigger_set_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW."updatedAt" = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_timestamp_project_agreement
BEFORE UPDATE ON "ProjectAgreement"
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();
