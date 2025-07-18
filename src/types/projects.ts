<<<<<<< HEAD
import type { Job } from './jobs;;
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
=======
import type { Job } from './jobs;'
;'';
export type ProjectStatus =;;
  | 'offer_sent;''
  | 'offer_accepted;''
  | 'changes_requested;''
  | 'in_progress;''
  | 'completed;''
  | 'canceled;'
;'';
export interface Project {;;
  id: "string;",;";";";";""
  client_id: "string;",";";";";""
  talent_id: "string;",;";";";";""
  job_id: "string;",";";";";""
  start_date: "string;",;";";""
  scope_summary: string;";";";""
  end_date?: string;";";";";""
  payment_terms: 'hourly' | 'fixed' | 'milestone;'
  agreement_url?: string;;
  status: "ProjectStatus;",;";";";";""
  created_at: "string;",;";";""
  updated_at: string;";";";""
  job?: {;";";";";""
    title: "string;",;";";";";""
    description: "string;";"
  };
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
  talent_profile?: {;
    full_name: string;
    professional_title?: string;
    profile_picture_url?: string;
  };
  client_profile?: {;
    display_name: string;
<<<<<<< HEAD
    avatar_url?: string;"
  };";"
};"
;"
export interface ProjectNote {"
  id: "string"
  project_id: string,"
  user_id: "string"
  content: string,
  created_at: string
  created_by_profile?: {
    display_name: string"
    avatar_url?: string""
  }"
};"
"""""
=======
    avatar_url?: string;""
  };";""
};";";""
;";";";"";
export interface ProjectNote {;";";";";""
  id: "string;",;";";";";""
  project_id: "string;",";";";";""
  user_id: "string;",;";";";";""
  content: "string;",;"
  created_at: string;
  created_by_profile?: {;
    display_name: string;""
    avatar_url?: string;";""
  };";";""
};";";";""
""""""
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
