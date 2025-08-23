
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { toast } from 'sonner';
import { useRecordActivity } from './useRecordActivity';
import {logErrorToProduction} from '@/utils/productionLogger';

export const useUploadDeliverable = () => {

  const { user } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { recordMilestoneActivity } = useRecordActivity();
  
  const uploadDeliverable = async (milestoneId: string, projectId: string, file: File) => {
    if (!user || !projectId) return null;
    
    try {
      setIsSubmitting(true);
      
      // Get the current milestone
      const { data: milestone, error: fetchError } = await supabase
        .from('project_milestones')
        .select('*')
        .eq('id', milestoneId)
        .single();
      
      if (fetchError) throw fetchError;
      if (!milestone) throw new Error("Milestone not found");
      
      // For this example, instead of actually uploading files (which would require storage setup),
      // we'll just store the file metadata in the deliverables JSONB field
      const newDeliverable = {
        id: crypto.randomUUID(),
        filename: file.name,
        size: file.size,
        type: file.type,
        added_at: new Date().toISOString(),
        added_by: user.id
      };
      
      const deliverables = [...(milestone.deliverables || []), newDeliverable];
      
      const { error } = await supabase
        .from('project_milestones')
        .update({ deliverables })
        .eq('id', milestoneId);
        
      if (error) throw error;
      
      // Create activity record
      await recordMilestoneActivity(
        milestoneId, 
        'deliverable_added', 
        milestone.status, 
        milestone.status, 
        `Deliverable added: ${file.name}`
      );
      
      toast.success("Deliverable added successfully");
      
      return newDeliverable;
    } catch (err: any) {
      logErrorToProduction('Error uploading deliverable:', { data: err });
      toast.error("Failed to upload deliverable: " + err.message);
      return null;
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return {
    uploadDeliverable,
    isSubmitting
  };
};
