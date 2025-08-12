
import { useState } from 'react';
import { useLoadMilestones } from './useLoadMilestones';
import { useCreateMilestone } from './useCreateMilestone';
import { useUpdateMilestone } from './useUpdateMilestone';
import { useDeleteMilestone } from './useDeleteMilestone';
import { useUploadDeliverable } from './useUploadDeliverable';
import { MilestoneStatus } from './types';

export const useMilestones = (projectId?: string) => {
  const { milestones, activities, isLoading, error, refetch } = useLoadMilestones(projectId);
  const { createMilestone, isSubmitting: isCreating } = useCreateMilestone(projectId);
  const { updateMilestoneStatus, updateMilestone, isSubmitting: isUpdating } = useUpdateMilestone();
  const { deleteMilestone, isSubmitting: isDeleting } = useDeleteMilestone();
  const { uploadDeliverable, isSubmitting: isUploading } = useUploadDeliverable();
  
  // Combine all loading states
  const isSubmitting = isCreating || isUpdating || isDeleting || isUploading;
  
  // Function to upload deliverable with project_id
  const handleUploadDeliverable = async (milestoneId: string, file: File) => {
    if (!projectId) return null;
    return await uploadDeliverable(milestoneId, projectId, file);
  };
  
  return {
    milestones,
    activities,
    isLoading,
    error,
    isSubmitting,
    createMilestone,
    updateMilestoneStatus,
    updateMilestone,
    deleteMilestone,
    uploadDeliverable: handleUploadDeliverable,
    refetch
  };
};
