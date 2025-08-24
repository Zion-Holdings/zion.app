export interface ContractTemplate {
  id: string;
  title: string;
  content: string;
  is_default: boolean;
  created_at: string;
  updated_at: string;
  user_id: string;
  category?: string;
  tags?: string[];
}