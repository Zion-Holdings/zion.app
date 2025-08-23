
import React from 'react';
import { AddMilestoneForm } from '../AddMilestoneForm';

interface MilestoneCreatorProps {
  onSubmit: (data: any) => Promise<void>;
  isSubmitting: boolean;
  onCancel: () => void;
  projectScope?: string;
  projectStartDate?: string;
  projectEndDate?: string | undefined;
  projectType?: string;
}

export function MilestoneCreator({
  onSubmit,
  isSubmitting,
  onCancel,
  projectScope,
  projectStartDate,
  projectEndDate,
  projectType
}: MilestoneCreatorProps) {
  return (
    <AddMilestoneForm 
      onSubmit={onSubmit}
      isSubmitting={isSubmitting}
      onCancel={onCancel}
      projectScope={projectScope}
      projectStartDate={projectStartDate}
      projectEndDate={projectEndDate}
      projectType={projectType}
    />
  );
}
