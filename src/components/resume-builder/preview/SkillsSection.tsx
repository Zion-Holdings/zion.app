<<<<<<< HEAD
import type { Skill } from '@/types/resume;'
;''
interface SkillsSectionProps {;;
  skills: "Skill[];";"
};
;"";
export function SkillsSection(): unknown {): unknown {): unknown {): unknown {): unknown {{ skills }: SkillsSectionProps) {;";""
  // Group skills by category;";";""
  const skillsByCategory: unknown = skills.reduce(;";";";""
    (acc, skill) => {;";";";";""
      const category: unknown = skill.category || 'Other;'
=======
import type { Skill } from '@/types/resume'
'
interface SkillsSectionProps {'
  skills: "Skill[]

"
export function SkillsSection(): unknown {): unknown {): unknown {): unknown {): unknown {{ skills }: SkillsSectionProps) {;"
  // Group skills by category;
  const skillsByCategory = skills.reduce("
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
<<<<<<< HEAD
  );''

  if (skills.length === 0) return null;
;''
  return (;;
    <div className="mb-6">;";";";";""
      <h2 className="text-lg font-semibold border-b mb-3">Skills</h2>;";";";";""
      <div className="space-y-2">;";";""
        {Object.entries(skillsByCategory).map(([category, skills]) => (;";";";""
          <div key={category}>;";";";";""
            <h3 className="text-sm font-medium">{category}</h3>;";";";";""
            <p className="text-sm">;";";";";""
              {skills.map((skill) => skill.name).join(', ')};'
            </p>;
          </div>;
        ))};
      </div>;''
    </div>;
  );
};

};''

}''
}''
=======
  )'
'
  if (skills.length === 0) return null;
'
  return ('
    <div className=mb-6>"
      <h2 className="text-lg font-semibold border-b mb-3>Skills</h2>"
      <div className="space-y-2">
        {Object.entries(skillsByCategory).map(([category, skills]) => (;
          <div key={category}>"
            <h3 className="text-sm font-medium>{category}</h3>"
            <p className="text-sm">"
              {skills.map((skill) => skill.name).join(', ')}'
            </p>;
          </div>;
        ))};
      </div>'
    </div>'
  );
};

}'

}'
}'';;
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
