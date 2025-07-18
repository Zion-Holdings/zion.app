<<<<<<< HEAD
import type { Education } from '@/types/resume;;
import { EducationItem } from './EducationItem;'
;''
interface EducationListProps {;;
  educationEntries: "Education[];",;";";";";""
  onEdit: "(education: Education) => void;",;";";";";""
  onDelete: "(id: string) => void;";"
};

=======
import type { Education } from '@/types/resume'
import { EducationItem } from './EducationItem'
'
interface EducationListProps {'
  educationEntries: "Education[]
  onEdit: (education: Education) => void"
  onDelete: "(id: string) => void

>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
export function EducationList(): unknown {): unknown {): unknown {): unknown {): unknown {{;
  educationEntries,;
  onEdit,;
  onDelete,;
}: EducationListProps) {;
<<<<<<< HEAD
  if (!educationEntries || educationEntries.length === 0) {;""
    return null;";""
  };";";""
;";";";""
  return (;";";";";""
    <div className="space-y-4">;";";";";""
      <h3 className="text-md font-medium">Added Education</h3>;"
=======
  if (!educationEntries || educationEntries.length === 0) {"
    return null;"
  };
"
  return (;"
    <div className=space-y-4>"
      <h3 className="text-md font-medium>Added Education</h3>
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
      {educationEntries.map((edu) => (;
        <EducationItem;
          key={edu.id};
          education={edu};
          onEdit={onEdit};
<<<<<<< HEAD
          onDelete={onDelete};
        />;
      ))};""
    </div>;";""
  );";";""
};";";";""
";";";""
}";";""
}";""
}""
}""
=======
          onDelete={onDelete};"
        />))}"
    </div>;"
  );
}"
"

}"
}"
}'';;
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
