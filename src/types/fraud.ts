
export type FraudSeverity = 'safe' | 'suspicious' | 'dangerous';

export interface FraudFlag {
  id: string;
  user_id: string;
  user_email?: string;
  content_type: 'signup' | 'job' | 'message' | 'quote' | 'review';
  content_id: string;
  content_excerpt: string;
  severity: FraudSeverity;
  reason: string;
  timestamp: string;
  ip_address?: string;
  status: 'pending' | 'reviewed' | 'ignored' | 'actioned';
  reviewed_by?: string;
  reviewed_at?: string;
  action_taken?: 'none' | 'warning' | 'suspension' | 'ban';
  gpt_classification?: string;
  gpt_explanation?: string;
  is_false_positive?: boolean;
}

export interface FraudStats {
  total_flags: number;
  pending_flags: number;
  suspicious_count: number;
  dangerous_count: number;
  false_positives: number;
  actioned_count: number;
}
