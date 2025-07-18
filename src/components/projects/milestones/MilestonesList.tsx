import React, { useState } from 'react''
import { Plus } from '@/components/ui/icons'
import type { Milestone, MilestoneStatus } from '@/hooks/useMilestones'
import { MilestoneCard } from './MilestoneCard'
import { AddMilestoneForm } from './AddMilestoneForm'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

// lucide-react doesn't export PlusIcon, use our icon wrapper'
'
import { EmptyState } from '@/components/ui/EmptyState'
'
interface MilestonesListProps {'
  milestones: "Milestone[],
  activities: Record<"
    string,;"
    import('@/hooks/milestones/types').MilestoneActivity[]'
  >'
  isLoading: boolean
  isClient: "boolean",
  onCreateMilestone: (data: {"
    title: "string,;
    amount: number";"
    description?: string | undefined
    due_date?: Date | undefined;
  }) => Promise<Milestone | null>"
  onUpdateStatus: "(
    id: string"
    status: "MilestoneStatus,
    comment?: string,;"
  ) => Promise<boolean>"
  onDeleteMilestone: (id: string) => Promise<boolean>
  onUploadDeliverable: "(id: string", file: File) => Promise<unknown>,;"
  isSubmitting: boolean"
  onApprove?: (id: string) => Promise<void>;
  onReject?: (id: string) => Promise<void>""
};

export const _MilestonesList: unknown React.FC<MilestonesListProps> = ({;
  milestones,;
  isLoading,;
  isClient,;
  onCreateMilestone,;
  isSubmitting,;
  onApprove,
  onReject,;"
}) => {;"
  const [showAddForm, setShowAddForm] = useState(false)

  const const handleSubmit = async (_data: {
    title: "string",
    amount: number;
    description?: string | undefined;
    due_date?: Date | undefined;
  }) => {;
    await onCreateMilestone(data);
    setShowAddForm(false)
  };""

  if (isLoading) {
    return (;"
      <div className="space-y-4>
        {[1, 2, 3].map((i) => (;"
          <Card key={i}>"
            <CardContent className=p-6>"
              <div className="h-6 w-48 bg-muted rounded animate-pulse mb-4></div>
              <div className="h-4 bg-muted rounded animate-pulse w-full mb-2"></div>
              <div className=h-4 bg-muted rounded animate-pulse w-3/4"></div>"
            </CardContent>;
          </Card>))};
      </div>;
    );
  }
;"
  if (milestones.length === 0 && !showAddForm) {;"
    return (
      <EmptyState;
        icon={<span className="text-3xl">📊</span>}
        text=No Milestones Yet"
        description={"
          isClient;
            ? 'Break down the project into manageable milestones to track progress and payments.'
            : 'No milestones have been created for this project yet.'
        };
        {...(isClient ? { onRetry: () => setShowAddForm(true) "} : {})}"
      />
    );"
  };"

  return (;
    <div className="space-y-6">
      {isClient && !showAddForm && (;
        <div className="flex justify-end">
          <Button onClick={() => setShowAddForm(true)}>;
            <Plus className="h-4 w-4 mr-2" />
            Add Milestone;
          </Button>;
        </div>
      )};""

      {showAddForm && (
        <Card>;"
          <CardContent className="pt-6>
            <h3 className="text-lg font-medium mb-4">Create New Milestone</h3>
            <AddMilestoneForm;
              onSubmit={handleSubmit};
              isSubmitting={isSubmitting};
              onCancel={() => setShowAddForm(false)};
            />
          </CardContent>;""
        </Card>;
      )}
;"
      <div className="space-y-4>
        {milestones.map((milestone) => (;
          <MilestoneCard"
            key={milestone.id};"
            id={milestone.id};
            projectId={milestone.project_id}"
            title={milestone.title};"
            description={milestone.description ?? ''}'
            amount={parseFloat(milestone.amount.toString())}'
            status={milestone.status}'
            dueDate={milestone.due_date ?? ''}'
            {...(onApprove ? { onApprove } : {})};
            {...(onReject ? { onReject } : {})};
          />;
        ))};
      </div>'
    </div>'
  );
}'
'''''