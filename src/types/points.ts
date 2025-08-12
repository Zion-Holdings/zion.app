export interface PointsLedgerEntry {
  id: string;
  user_id: string;
  delta: number;
  reason: string | null;
  order_id: string | null;
  created_at: string;
}
