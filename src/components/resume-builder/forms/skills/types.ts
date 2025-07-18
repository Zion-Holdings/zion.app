<<<<<<< HEAD
import type { Skill } from '@/types/resume;'
;;
export interface SkillsFormProps {;;
  resumeId: "string;",;";";";";""
  skills: "Skill[];",";";";";""
  onComplete: "() => void;",;";";";";""
  onBack: "() => void;";";""
};";";""
;";";";"";
export interface SkillItemProps {;";";";";""
  skill: "Skill;",;";";";";""
  category: "string;",";";";";""
  onDelete: "(id: string", category: "string) => Promise<void>;";";""
};";";""
;";";";"";
export interface SkillCategoryProps {;";";";";""
  category: "string;",;";";";";""
  skills: "Skill[];",";";";";""
  onDelete: "(id: string", category: "string) => Promise<void>;";";""
};";";""
;";";";"";
export interface AddSkillFormProps {;";";";";""
  resumeId: "string;",;"
  onAddSkill: (skill: Skill) => Promise<boolean>;""
  defaultCategory?: string;";""
};";";""
;";";";"";
export interface BulkAddSkillsProps {;";";";";""
  resumeId: "string;",;";";";";""
  onSuccess: "() => Promise<void>;";";";""
};";";";""
""""""
=======
import type { Skill } from '@/types/resume'
'
export interface SkillsFormProps {'
  resumeId: string
  skills: Skill[],"
  onComplete: () => void
  onBack: "() => void"

export interface SkillItemProps {"
  skill: Skill
  category: string,"
  onDelete: (id: string, category: "string) => Promise<void>"

export interface SkillCategoryProps {"
  category: string
  skills: Skill[],"
  onDelete: (id: string, category: "string) => Promise<void>"

export interface AddSkillFormProps {"
  resumeId: "string,
  onAddSkill: (skill: Skill) => Promise<boolean>"
  defaultCategory?: string"

"
export interface BulkAddSkillsProps {"
  resumeId: string
  onSuccess: "() => Promise<void>"

"""'';;
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
