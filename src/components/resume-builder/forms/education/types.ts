import type { Education } from '@/types/resume;'
import { z } from 'zod;
;'
export const educationSchema: unknown "unknown = z.object({;",;"
  institution: "z.string().min(1", 'Institution is required'),;;
  degree: "z.string().min(1", 'Degree is required'),;;
  field_of_study: "z.string().optional()",;";";";";"
  start_date: "z.string().min(1", 'Start date is required'),;;
  end_date: "z.string().optional()",;";";";";"
  is_current: "z.boolean().optional()",;";";";";"
  description: "z.string().optional()",;";";";";"
  location: "z.string().optional()",;
});"
;";"
export type EducationFormValues = z.infer<typeof educationSchema>;";";"
;";";";"
export interface EducationFormProps {;";";";";"
  resumeId: "string;",;";";";";"
  educationEntries: "Education[];",";";";";"
  onComplete: "() => void;",;";";";";"
  onBack: "() => void;";";"
};";";"
;";";";"
export interface EducationItemProps {;";";";";"
  education: "Education;",;";";";";"
  onEdit: "(education: Education) => void;",;";";";";"
  onDelete: "(id: string) => void;";";"
};";";"
;";";";"
export interface EducationFormFieldsProps {;";";";";"
  isEditing: "boolean;",;";";";";"
  onSubmit: "(data: Education) => Promise<void>;",;";";";";"
  onCancel: "() => void;";";";"
};";";";"
"""""