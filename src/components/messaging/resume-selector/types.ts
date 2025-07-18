<<<<<<< HEAD
import type { Resume } from '@/types/resume;'
;;
export interface ResumeOption {;;
  id: "string;",;";";";";""
  title: "string;",";";";";""
  type: 'ai_resume' | 'custom_upload;'
  resume?: Resume;
  file?: File;''
  url?: string;
};
;;
export interface ResumeSelectorProps {;;
  onResumeSelected: "(resumeOption: ResumeOption) => void;";";";""
};";";";""
""""""
=======
import type { Resume } from '@/types/resume'
'
export interface ResumeOption {'
  id: string
  title: string,"
  type: 'ai_resume' | 'custom_upload'
  resume?: Resume
  file?: File'
  url?: string'

'
export interface ResumeSelectorProps {'
  onResumeSelected: (resumeOption: ResumeOption) => void
}"
""'';;
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
