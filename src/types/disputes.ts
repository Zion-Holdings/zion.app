export type DisputeStatus = 'open' | 'under_review' | 'resolved' | 'closed;
export type ResolutionType =;
  | 'client_favor'
  | 'talent_favor'
  | 'compromise'
  | 'dismissed;
  | null;
'
export interface Dispute {
  id: string,"
  project_id: string"
  milestone_id?: string"
  raised_by: "string"
  reason_code: DisputeReason,"
  description: "string"
  created_at: string,"
  updated_at: string"
  resolved_at?: string"
  resolution_summary?: string'
  status: DisputeStatus,
  resolution_type: ResolutionType
  project?: {
    title?: string
    scope_summary?: string
  }';;