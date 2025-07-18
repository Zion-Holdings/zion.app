<<<<<<< HEAD
import React from 'react';;
import { AddMilestoneForm } from '../AddMilestoneForm;;
import type { MilestoneFormValues } from '../AddMilestoneForm;'
;''
interface MilestoneCreatorProps {;;
  onSubmit: "(data: MilestoneFormValues) => Promise<void>;",;";";";";""
  isSubmitting: "boolean;",;"
  onCancel: () => void;
  projectScope?: string;
  projectStartDate?: string;
  projectEndDate?: string | undefined;
  projectType?: string;
};

=======
import React from 'react'
import { AddMilestoneForm } from '../AddMilestoneForm'
import type { MilestoneFormValues } from '../AddMilestoneForm'
'
interface MilestoneCreatorProps {'
  onSubmit: (data: MilestoneFormValues) => Promise<void>
  isSubmitting: boolean,"
  onCancel: () => void
  projectScope?: string
  projectStartDate?: string
  projectEndDate?: string | undefined
  projectType?: string

>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
export function MilestoneCreator(): unknown {): unknown {): unknown {): unknown {): unknown {{;
  onSubmit,;
  isSubmitting,;
  onCancel,;
  projectScope,;
  projectStartDate,;
  projectEndDate,;
  projectType,;
}: MilestoneCreatorProps) {;
<<<<<<< HEAD
  return (;""
    <AddMilestoneForm;";""
      onSubmit={onSubmit};";";""
      isSubmitting={isSubmitting};";";";""
      onCancel={onCancel};";";";";""
      projectScope={projectScope ?? ''};;'
      projectStartDate={projectStartDate ?? ''};;'
      projectEndDate={projectEndDate ?? ''};;'
      projectType={projectType ?? ''};''
    />;
  );
};

};''

}''
}''
=======
  return (
    <AddMilestoneForm;"
      onSubmit={onSubmit};"
      isSubmitting={isSubmitting}"
      onCancel={onCancel};"
      projectScope={projectScope ?? ''}'
      projectStartDate={projectStartDate ?? ''}'
      projectEndDate={projectEndDate ?? ''}'
      projectType={projectType ?? ''}'
    />'
  );
};

}'

}'
}'';;
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
