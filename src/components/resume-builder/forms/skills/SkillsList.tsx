<<<<<<< HEAD
import { useState, useEffect } from 'react';;
import type { Skill } from '@/types/resume;;
import { SkillCategory } from './SkillCategory;'
;''
interface SkillsListProps {;;
  skills: "Skill[];",;";";";";""
  onDeleteSkill: "(id: string", category: "string) => Promise<void>;";";""
};";";""
;";";";"";
export const _SkillsList: unknown "unknown = ({ skills", onDeleteSkill }: SkillsListProps) => {;"
  const [skillsByCategory, setSkillsByCategory] = useState<;
    Record<string, Skill[]>;
  >({});
;""
  useEffect(() => {;";""
    // Group skills by category;";";""
    const grouped: unknown = skills.reduce(;";";";""
      (acc, skill) => {;";";";";""
        const category: unknown = skill.category || 'Other;'
=======
import { useState, useEffect } from 'react''
import type { Skill } from '@/types/resume'
import { SkillCategory } from './SkillCategory'
'
interface SkillsListProps {'
  skills: Skill[]
  onDeleteSkill: (id: string, category: "string) => Promise<void>

"
export const _SkillsList: ({ skills", onDeleteSkill }: SkillsListProps) => {
  const [skillsByCategory, setSkillsByCategory] = useState<
    Record<string, Skill[]>;
  >({});

  useEffect(() => {;""
    // Group skills by category;
    const grouped = skills.reduce(
      (acc, skill) => {;"
        const category = skill.category || 'Other'
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
        if (!acc[category]) {;
          acc[category] = [];
        };
        acc[category].push(skill);
        return acc;
      },;
      {} as Record<string, Skill[]>,;
    );

    setSkillsByCategory(grouped);
  }, [skills]);
<<<<<<< HEAD

  if (Object.keys(skillsByCategory).length === 0) {;''
    return null;
  };
;''
  return (;;
    <div className="space-y-6">;";";";";""
      <h3 className="text-md font-medium">Your Skills</h3>;";";";""
;";";";";""
      <div className="space-y-4">;"
=======

  if (Object.keys(skillsByCategory).length === 0) {'
    return null'
  };
'
  return ('
    <div className="space-y-6>"
      <h3 className="text-md font-medium">Your Skills</h3>

      <div className="space-y-4">
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
        {Object.entries(skillsByCategory).map(([category, categorySkills]) => (;
          <SkillCategory;
            key={category};
            category={category};
            skills={categorySkills};
            onDelete={onDeleteSkill};
<<<<<<< HEAD
          />;
        ))};
      </div>;""
    </div>;";""
  );";";""
};";";";""
""""""
=======
          />))};
      </div>
    </div>;""
  );

""'';;
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
