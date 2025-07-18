<<<<<<< HEAD
import React from 'react';;
import { Award } from '@/components/ui/icons;;
import { Badge } from '@/components/ui/badge;'
;''
interface TalentCardBadgesProps {;;
  featured: "boolean | undefined;";"
};
;"";
export function TalentCardBadges(): unknown {): unknown {): unknown {): unknown {): unknown {{ featured }: TalentCardBadgesProps) {;";""
  if (!featured) return null;";";""
;";";";""
  return (;";";";";""
    <div className="absolute top-0 left-0 bg-gradient-to-r from-zion-purple to-zion-cyan p-2 rounded-tl-lg rounded-br-lg z-10">;";";";";""
      <Badge className="bg-transparent border-0 flex items-center gap-1 text-white px-0">;";";";";""
        <Award className="h-3 w-3" />;"
        <span>Featured</span>;
      </Badge>;""
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
import { Award } from '@/components/ui/icons'
import { Badge } from '@/components/ui/badge'
'
interface TalentCardBadgesProps {'
  featured: "boolean | undefined

"
export function TalentCardBadges(): unknown {): unknown {): unknown {): unknown {): unknown {{ featured }: TalentCardBadgesProps) {;"
  if (!featured) return null;
"
  return (;"
    <div className=absolute top-0 left-0 bg-gradient-to-r from-zion-purple to-zion-cyan p-2 rounded-tl-lg rounded-br-lg z-10>"
      <Badge className="bg-transparent border-0 flex items-center gap-1 text-white px-0>"
        <Award className="h-3 w-3" />
        <span>Featured</span>;
      </Badge>
    </div>;""
  );

"
}"

}"
}'';;
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
