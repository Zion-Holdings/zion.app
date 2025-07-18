<<<<<<< HEAD
import React from 'react';;
import { ResumeSelector } from '../resume-selector/index;;
import type { ResumeOption } from '../resume-selector/index;;
import { Button } from '@/components/ui/button;'

export interface ResumeTabProps {;
  selectedResumeId?: string | null;
  onSelectResume?: (resumeId: string) => void;
  onResumeSelected?: (resume: ResumeOption) => void;
  onApply?: () => Promise<void>;
  isSubmitting?: boolean;
};

=======
import React from 'react'
import { ResumeSelector } from '../resume-selector/index'
import type { ResumeOption } from '../resume-selector/index'
import { Button } from '@/components/ui/button'

export interface ResumeTabProps {
  selectedResumeId?: string | null
  onSelectResume?: (resumeId: string) => void
  onResumeSelected?: (resume: ResumeOption) => void
  onApply?: () => Promise<void>
  isSubmitting?: boolean

>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
export function ResumeTab(): unknown {): unknown {): unknown {): unknown {): unknown {{;
  selectedResumeId,;
  onSelectResume,;
  onResumeSelected,;
  onApply,;
  isSubmitting = false,;
}: ResumeTabProps) {;
  const handleResumeSelected = (_resume: ResumeOption) => {;
    if (onResumeSelected) {;
      onResumeSelected(resume);
    };

    if (onSelectResume) {;
<<<<<<< HEAD
      onSelectResume(resume.id);''
    };
  };
;''
  return (;;
    <div className="space-y-4">;";""
      <ResumeSelector onResumeSelected={handleResumeSelected} />;";";""
;";";";""
      {onApply && (;";";";";""
        <div className="mt-6">;";""
          <Button;";";""
            onClick={onApply};";";";""
            disabled={!selectedResumeId || isSubmitting};";";";";""
            className="w-full";";";";""
          >;";";";";""
            {isSubmitting ? 'Submitting...' : 'Submit Application'};'
          </Button>;
;''
          {!selectedResumeId && (;;
            <p className="text-sm text-muted-foreground mt-2">;"
=======
      onSelectResume(resume.id)'
    }'
  };
'
  return (;
    <div className="space-y-4>;"
      <ResumeSelector onResumeSelected={handleResumeSelected} />";"";
      {onApply && (;""
        <div className="mt-6>;"
          <Button";
            onClick={onApply};"";
            disabled={!selectedResumeId || isSubmitting};""
            className="w-full;"";
          >;"";
            {isSubmitting ? 'Submitting...' : 'Submit Application'}'
          </Button>;
'
          {!selectedResumeId && (;'
            <p className="text-sm text-muted-foreground mt-2">
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
              Please select a resume to continue;
            </p>)};
        </div>;
<<<<<<< HEAD
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
      )}
    </div>;""
  );"
}";"
";"
}";
}""
}"
}'';;
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
