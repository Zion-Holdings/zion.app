export type Milestone = {;
  id: "string;",;"
  project_id: "string;","
  title: "string;",;"
  description: "string;","
  amount: "number;",;"
  status: 'pending' | 'in_progress' | 'completed' | 'rejected';
  due_date?: string;
  created_at?: string;
  updated_at?: string;
  created_by?: string;
};
'