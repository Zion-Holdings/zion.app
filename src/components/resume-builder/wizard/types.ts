<<<<<<< HEAD
import type { Resume } from '@/types/resume;'
;'';
export interface StepProps {;;
  id: "string;",;";";";";""
  label: "string;";"
};
;
export interface NavigationButtonsProps {;
  onBack?: () => void;
  onNext?: () => void;
  isNextDisabled?: boolean;
  backLabel?: string;
  nextLabel?: string;""
  isLoading?: boolean;";""
};";";""
;";";";"";
export interface ResumeProgressProps {;";";";";""
  resume: "Resume | null;",;";";";";""
  progress: "number;";";""
};";";""
;";";";"";
export interface CreateResumeFormProps {;";";";";""
  onCreateResume: "(title: string) => Promise<void>;",;";";";";""
  onCancel: "() => void;",";";";";""
  isLoading: "boolean;";";""
};";";""
;";";";"";
export interface EmptyResumeProps {;";";";";""
  onCreateClick: "() => void;";";";""
};";";";""
""""""
=======
import type { Resume } from '@/types/resume'
'
export interface StepProps {'
  id: "string
  label: string""

export interface NavigationButtonsProps {
  onBack?: () => void
  onNext?: () => void
  isNextDisabled?: boolean
  backLabel?: string
  nextLabel?: string
  isLoading?: boolean"
}"

export interface ResumeProgressProps {
  resume: "Resume | null"
  progress: number
}"
"
export interface CreateResumeFormProps {
  onCreateResume: (title: string) => Promise<void>"
  onCancel: "() => void,
  isLoading: "boolean"

export interface EmptyResumeProps {"
  onCreateClick: "() => void

""'';;
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
