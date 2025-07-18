<<<<<<< HEAD
import { useLoadMilestones } from './useLoadMilestones'
import { useCreateMilestone } from './useCreateMilestone'
import { useUpdateMilestone } from './useUpdateMilestone'
import { useDeleteMilestone } from './useDeleteMilestone'
import { useUploadDeliverable } from './useUploadDeliverable'
'
export const _useMilestones = (projectId?: string) => {;
  const { milestones, activities, isLoading, error, refetch } = '
    useLoadMilestones(projectId)'
  const { createMilestone, isSubmitting: "isCreating } =
    useCreateMilestone(projectId);""
  const {;
    updateMilestoneStatus,
    updateMilestone,;"
    isSubmitting: isUpdating,"
  } = useUpdateMilestone();
  const { deleteMilestone, isSubmitting: isDeleting "} = useDeleteMilestone()"
  const { uploadDeliverable, isSubmitting: isUploading  } = "
    useUploadDeliverable()"
  // Combine all loading states;
  const isSubmitting = isCreating || isUpdating || isDeleting || isUploading;"
"
  // Function to upload deliverable with project_id;
  const handleUploadDeliverable = async (milestoneId: string, _file: File) => {
    if (!projectId) return null
=======
import { useLoadMilestones } from './useLoadMilestones;'';
import { useCreateMilestone } from './useCreateMilestone;'';
import { useUpdateMilestone } from './useUpdateMilestone;'';
import { useDeleteMilestone } from './useDeleteMilestone;'';
import { useUploadDeliverable } from './useUploadDeliverable;''
;
export const _useMilestones: unknown = (projectId?: string) => {;
  const { milestones, activities, isLoading, error, refetch } =;''
    useLoadMilestones(projectId);;
  const { createMilestone, isSubmitting: "isCreating "} =;""
    useCreateMilestone(projectId);";""
  const {;";";""
    updateMilestoneStatus,;";";";""
    updateMilestone,;";";";";""
    isSubmitting: "isUpdating",;";";";""
  } = useUpdateMilestone();";";";";""
  const { deleteMilestone, isSubmitting: "isDeleting "} = useDeleteMilestone();";";";";""
  const { uploadDeliverable, isSubmitting: "isUploading "} =;"
    useUploadDeliverable();
;""
  // Combine all loading states;";""
  const isSubmitting: unknown = isCreating || isUpdating || isDeleting || isUploading;";";""
;";";";""
  // Function to upload deliverable with project_id;";";";";""
  const handleUploadDeliverable: unknown = async (milestoneId: "string", _file: File) => {;"
    if (!projectId) return null;
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
    return await uploadDeliverable(milestoneId, projectId, file);
  };
  return {;
    milestones,;
    activities,;
    isLoading,;
    error,;
<<<<<<< HEAD
    isSubmitting,"
    createMilestone,;"
    updateMilestoneStatus,;
    updateMilestone,"
    deleteMilestone,;"
    uploadDeliverable: handleUploadDeliverable,
    refetch,;"
  };"
}
""""
=======
    isSubmitting,;""
    createMilestone,;";""
    updateMilestoneStatus,;";";""
    updateMilestone,;";";";""
    deleteMilestone,;";";";";""
    uploadDeliverable: "handleUploadDeliverable",;""
    refetch,;";""
  };";";""
};";";";""
""""""
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
