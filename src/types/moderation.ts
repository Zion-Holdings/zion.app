export interface ModerationLog {
  id: string;
  listing_id: string;
  listing_type: 'product' | 'service';
  flagged: boolean;
  result: unknown;
  status: 'pending_review' | 'approved' | 'rejected';
  created_at: string;
  reviewed_at?: string;
}
