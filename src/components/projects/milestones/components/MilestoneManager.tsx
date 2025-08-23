
import React from 'react';
import { MilestonesList } from '../MilestonesList';
import { PaymentSummary } from '../PaymentSummary';
import { Milestone, MilestoneStatus, MilestoneActivity } from '@/hooks/useMilestones';
import { useEnqueueSnackbar } from '@/context';
import {logErrorToProduction} from '@/utils/productionLogger';


interface MilestoneManagerProps {
  projectId: string;
  milestones: Milestone[];
  activities: Record<string, MilestoneActivity[]>;
  isLoading: boolean;
  isClient: boolean;
  isTalent: boolean;
  paymentTerms?: string;
  isSubmitting: boolean;
  onCreateMilestone: (data: any) => Promise<Milestone | null>;
  onUpdateStatus: (id: string, status: MilestoneStatus, comment?: string) => Promise<boolean>;
  onDeleteMilestone: (id: string) => Promise<boolean>;
  onUploadDeliverable: (id: string, file: File) => Promise<any>;
  refetch: () => Promise<void>;
}

export function MilestoneManager({
  projectId,
  milestones,
  activities,
  isLoading,
  isClient,
  isTalent,
  paymentTerms,
  isSubmitting,
  onCreateMilestone,
  onUpdateStatus,
  onDeleteMilestone,
  onUploadDeliverable,
  refetch
}: MilestoneManagerProps) {
  const enqueueSnackbar = useEnqueueSnackbar();
  const handleMilestoneApproved = async (milestoneId: string) => {
    try {
      await onUpdateStatus(milestoneId, "completed" as MilestoneStatus);
      enqueueSnackbar("Milestone approved", { variant: 'success' });
      await refetch();
    } catch (error: any) {
      logErrorToProduction('Error approving milestone:', { data: error });
      enqueueSnackbar(error.message, { variant: 'error' });
    }
  };

  const handleMilestoneRejected = async (milestoneId: string) => {
    try {
      await onUpdateStatus(milestoneId, "rejected" as MilestoneStatus);
      enqueueSnackbar("Milestone rejected", { variant: 'success' });
      await refetch();
    } catch (error: any) {
      logErrorToProduction('Error rejecting milestone:', { data: error });
      enqueueSnackbar(error.message, { variant: 'error' });
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <MilestonesList 
          milestones={milestones}
          activities={activities}
          isLoading={isLoading}
          isClient={isClient}
          onCreateMilestone={onCreateMilestone}
          onUpdateStatus={onUpdateStatus}
          onDeleteMilestone={onDeleteMilestone}
          onUploadDeliverable={onUploadDeliverable}
          isSubmitting={isSubmitting}
          onApprove={isClient ? handleMilestoneApproved : undefined}
          onReject={isClient ? handleMilestoneRejected : undefined}
        />
      </div>
      <div>
        <PaymentSummary 
          milestones={milestones} 
          paymentTerms={paymentTerms ?? null}
        />
      </div>
    </div>
  );
}
