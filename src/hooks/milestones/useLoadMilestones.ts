
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { toast } from 'sonner';
import { Milestone, MilestoneActivity } from './types';
import {logErrorToProduction} from '@/utils/productionLogger';

export const useLoadMilestones = (projectId?: string) => {

  const { user } = useAuth();
  const [milestones, setMilestones] = useState<Milestone[]>([]);
  const [activities, setActivities] = useState<Record<string, MilestoneActivity[]>>({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchMilestones = async () => {
    if (!projectId) {
      setIsLoading(false);
      return;
    }
    
    try {
      setIsLoading(true);
      
      const { data: milestonesData, error: milestonesError } = await supabase
        .from('project_milestones')
        .select('*')
        .eq('project_id', projectId)
        .order('due_date', { ascending: true });
      
      if (milestonesError) throw milestonesError;
      
      setMilestones(milestonesData);
      
      // Fetch activities for each milestone
      const activitiesMap: Record<string, MilestoneActivity[]> = {};
      
      for (const milestone of milestonesData) {
        const { data: activitiesData, error: activitiesError } = await supabase
          .from('milestone_activities')
          .select(`
            *,
            created_by_profile:profiles!user_id(display_name, avatar_url)
          `)
          .eq('milestone_id', milestone.id)
          .order('created_at', { ascending: false });
          
        if (activitiesError) throw activitiesError;
        
        activitiesMap[milestone.id] = activitiesData || [];
      }
      
      setActivities(activitiesMap);
      setError(null);
    } catch (err: any) {
      logErrorToProduction('Error fetching milestones:', { data: err });
      setError("Failed to fetch milestones: " + err.message);
      toast.error("Failed to fetch milestones");
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch milestones when component mounts or projectId changes
  useEffect(() => {
    if (projectId) {
      fetchMilestones();
    }
  }, [projectId]);

  return {
    milestones,
    activities,
    isLoading,
    error,
    refetch: fetchMilestones
  };
};
