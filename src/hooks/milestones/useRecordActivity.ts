
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { MilestoneActivity } from './types';
import {logErrorToProduction} from '@/utils/productionLogger';

export const useRecordActivity = () => {

  const { user } = useAuth();
  
  const recordMilestoneActivity = async (
    milestoneId: string, 
    action: string, 
    previousStatus: string | null, 
    newStatus: string,
    comment?: string
  ) => {
    if (!user) return null;
    
    try {
      const { data, error } = await supabase
        .from('milestone_activities')
        .insert({
          milestone_id: milestoneId,
          user_id: user.id,
          action,
          previous_status: previousStatus,
          new_status: newStatus,
          comment,
        })
        .select(`
          *,
          created_by_profile:profiles!user_id(display_name, avatar_url)
        `)
        .single();
      
      if (error) throw error;
      
      return data;
    } catch (err: any) {
      logErrorToProduction('Error recording activity:', { data: err });
      return null;
    }
  };
  
  return {
    recordMilestoneActivity
  };
};
