
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { toast } from 'sonner';
import { Milestone, MilestoneStatus } from './types';
import { useRecordActivity } from './useRecordActivity';
import { createNotification } from '@/utils/notifications';
import {logErrorToProduction} from '@/utils/productionLogger';

export const useUpdateMilestone = () => {

  const { user } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { recordMilestoneActivity } = useRecordActivity();
  
  const updateMilestoneStatus = async (milestoneId: string, newStatus: MilestoneStatus, comment?: string) => {
    if (!user) return false;
    
    try {
      setIsSubmitting(true);
      
      // Get the current status
      const { data: milestoneData, error: fetchError } = await supabase
        .from('project_milestones')
        .select('status, project_id, title')
        .eq('id', milestoneId)
        .single();
      
      if (fetchError) throw fetchError;
      if (!milestoneData) throw new Error("Milestone not found");
      
      const previousStatus = milestoneData.status;
      
      // Update the milestone status
      const { error } = await supabase
        .from('project_milestones')
        .update({ status: newStatus })
        .eq('id', milestoneId);
      
      if (error) throw error;
      
      // Create activity record
      await recordMilestoneActivity(
        milestoneId,
        'status_changed',
        previousStatus,
        newStatus,
        comment
      );

      if (milestoneData?.project_id) {
        const { data: project } = await supabase
          .from('projects')
          .select('client_id, talent_id')
          .eq('id', milestoneData.project_id)
          .single();

        if (project) {
          if (newStatus === 'completed') {
            await createNotification({
              userId: project.client_id,
              title: 'Milestone Completed',
              message: `Milestone "${milestoneData.title}" was marked as completed`,
              type: 'milestone_complete',
              relatedId: milestoneId,
              sendEmail: true
            });
          }
          if (newStatus === 'approved') {
            await createNotification({
              userId: project.talent_id,
              title: 'Milestone Approved',
              message: `Milestone "${milestoneData.title}" was approved`,
              type: 'project_update',
              relatedId: milestoneId,
              sendEmail: true
            });
          }
        }
      }
      
      toast.success(`Milestone status changed to ${newStatus}`);
      
      return true;
    } catch (err: any) {
      logErrorToProduction('Error updating milestone status:', { data: err });
      toast.error("Failed to update status: " + err.message);
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const updateMilestone = async (milestoneId: string, data: Partial<Milestone>) => {
    if (!user) return false;
    
    try {
      setIsSubmitting(true);
      
      const { error } = await supabase
        .from('project_milestones')
        .update(data)
        .eq('id', milestoneId);
      
      if (error) throw error;
      
      // Create activity record
      await recordMilestoneActivity(milestoneId, 'updated', null, 'updated', 'Milestone details updated');
      
      toast.success("Milestone updated successfully");
      
      return true;
    } catch (err: any) {
      logErrorToProduction('Error updating milestone:', { data: err });
      toast.error("Failed to update milestone: " + err.message);
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return {
    updateMilestoneStatus,
    updateMilestone,
    isSubmitting
  };
};
