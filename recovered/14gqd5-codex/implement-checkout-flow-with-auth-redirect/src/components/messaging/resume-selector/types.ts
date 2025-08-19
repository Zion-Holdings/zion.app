
import { Resume } from "@/types/resume";

export interface ResumeOption {
  id: string;
  title: string;
  type: 'ai_resume' | 'custom_upload';
  resume?: Resume;
  file?: File;
}

export interface ResumeSelectorProps {
  onResumeSelected: (resumeOption: ResumeOption) => void;
}
