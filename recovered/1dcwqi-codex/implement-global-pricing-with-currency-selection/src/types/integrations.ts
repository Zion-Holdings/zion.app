
export type IntegrationType = "crm" | "ats" | "webhook" | "zapier";

export type IntegrationStatus = "connected" | "warning" | "disconnected";

export interface Integration {
  id: string;
  name: string;
  description: string;
  logoUrl: string;
  status: IntegrationStatus;
  lastSync?: string;
  type: IntegrationType;
}

export interface SyncLog {
  id: string;
  integration: string;
  event: string;
  status: "success" | "error" | "warning";
  timestamp: string;
  details: string;
}

export type CrmIntegrationEvents = 
  | "contact_synced"
  | "deal_created"
  | "deal_updated"
  | "note_added"
  | "job_synced";

export type AtsIntegrationEvents = 
  | "applicant_created"
  | "candidate_status_changed"
  | "interview_scheduled"
  | "resume_uploaded"
  | "job_posted";
