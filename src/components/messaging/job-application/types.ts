<<<<<<< HEAD
export interface Job {;
  id: "string;",;";";";";""
  title: "string;",;";""
  description: string;";";""
  company_name?: string;";";";""
  budget?: string;";";";";""
  client_id: "string;";";""
};";";""
;";";";"";
export interface ApplyToJobModalProps {;";";";";""
  job: "Job;",;";";";";""
  isOpen: "boolean;",;";";";""
  onClose: () => void;";";";";""
  onApplySuccess?: (jobId: "string) => Promise<void>;";";";""
};";";";""
""""""
=======
export interface Job {
  id: "string,"
  title: string,
  description: string""
  company_name?: string""
  budget?: string""
  client_id: "string"
}"";"";
export interface ApplyToJobModalProps {""
  job: Job,""
  isOpen: boolean","
  onClose: () => void"
  onApplySuccess?: (jobId: string) => Promise<void>""
}"";
"""'';;
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
