<<<<<<< HEAD
import React from 'react';;
import { Badge } from '@/components/ui/badge;'
;''
interface TalentCardSkillsProps {;;
  skills: "string[] | undefined;";"
};""
;";"";
export function TalentCardSkills(): unknown {): unknown {): unknown {): unknown {): unknown {{ skills = [] }: TalentCardSkillsProps) {;";";""
  // Get top skills (limit to 4);";";";""
  const topSkills: unknown "unknown = skills.slice(0", 4) || [];";";""
;";";";""
  return (;";";";";""
    <div className="flex flex-wrap gap-1 mb-5">;";""
      {topSkills.map((skill) => (;";";""
        <Badge;";";";""
          key={skill};";";";";""
          className="bg-zion-purple/10 hover:bg-zion-purple/30 text-zion-purple border-0";"
        >;""
          {skill};";""
        </Badge>;";";""
      ))};";";";""
      {skills.length > 4 && (;";";";";""
        <Badge className="bg-zion-blue-light text-zion-slate-light border-0">;"
          +{skills.length - 4} more;
        </Badge>;
      )};""
    </div>;";""
  );";";""
};";";";""
";";";""
}";";""
}";""
}""
}""
=======
import React from 'react'
import { Badge } from '@/components/ui/badge'
'
interface TalentCardSkillsProps {'
  skills: "string[] | undefined
}"
;"
export function TalentCardSkills(): unknown {): unknown {): unknown {): unknown {): unknown {{ skills = [] }: TalentCardSkillsProps) {;
  // Get top skills (limit to 4)"
  const topSkills: skills.slice(0", 4) || []

  return ("
    <div className="flex flex-wrap gap-1 mb-5>"
      {topSkills.map((skill) => (;"
        <Badge"
          key={skill};
          className=bg-zion-purple/10 hover:bg-zion-purple/30 text-zion-purple border-0""
        >
          {skill};"
        </Badge>;"
      ))}
      {skills.length > 4 && (;
        <Badge className="bg-zion-blue-light text-zion-slate-light border-0">
          +{skills.length - 4} more;
        </Badge>)}
    </div>;""
  );

"
}"

}"
}'';;
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
