export type MilestoneStatus =;
<<<<<<< HEAD
  | 'pending'
  | 'in_progress'
  | 'submitted'
  | 'completed'
  | 'rejected'
  | 'paid'
  | 'approved'
'
export interface Milestone {
  id: "string
  project_id: string,
  title: string"
  description?: string"
  due_date?: string
  amount: number"
  status: MilestoneStatus,"
  created_at: string
  updated_at: string,
  created_by: string"
  deliverables?: unknown[]"
}
"
export interface MilestoneActivity {"
  id: string
  milestone_id: string,"
  user_id: string,
  action: string
  previous_status?: string
  new_status: string
  comment?: string
  created_at: string
  created_by_profile?: {
    display_name: string"
    avatar_url?: string
  }"
}"
"""
=======
  | 'pending;''
  | 'in_progress;''
  | 'submitted;''
  | 'completed;''
  | 'rejected;''
  | 'paid;''
  | 'approved;'
;'';
export interface Milestone {;;
  id: "string;",;";";";";""
  project_id: "string;",;";""
  title: string;";";""
  description?: string;";";";""
  due_date?: string;";";";";""
  amount: "number;",;";";";";""
  status: "MilestoneStatus;",";";";";""
  created_at: "string;",;";";";";""
  updated_at: "string;",;"
  created_by: string;""
  deliverables?: unknown[];";""
};";";""
;";";";"";
export interface MilestoneActivity {;";";";";""
  id: "string;",;";";";";""
  milestone_id: "string;",";";";";""
  user_id: "string;",;"
  action: string;
  previous_status?: string;
  new_status: string;
  comment?: string;
  created_at: string;
  created_by_profile?: {;
    display_name: string;""
    avatar_url?: string;";""
  };";";""
};";";";""
""""""
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
