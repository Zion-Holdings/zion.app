import type { Job } from './jobs';
'
export type ProjectStatus =;
  | 'offer_sent'
  | 'offer_accepted'
  | 'changes_requested'
  | 'in_progress'
  | 'completed'
  | 'canceled;
'
export interface Project {
  id: "string"
  client_id: string,"
  talent_id: "string"
  job_id: string,"
  start_date: string,"
  scope_summary: string"
  end_date?: string"
  payment_terms: 'hourly' | 'fixed' | 'milestone
  agreement_url?: string
  status: "ProjectStatus"
  created_at: string,"
  updated_at: string"
  job?: {"
    title: "string"
    description: "string"
  }