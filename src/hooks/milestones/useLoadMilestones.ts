import { useState, useEffect, useCallback } from 'react'; // Added useCallback
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { toast } from 'sonner';
import { Milestone, MilestoneActivity } from './types';

export const useLoadMilestones = (projectId?: string) => {
  const { user } = useAuth(); // user is not directly used in fetchMilestones, but good to be aware of
  const [milestones, setMilestones] = useState<Milestone[]>([]);
  const [activities, setActivities] = useState<Record<string, MilestoneActivity[]>>({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchMilestones = useCallback(async () => { // Wrapped in useCallback
    if (!projectId) {
      setIsLoading(false);
      setMilestones([]); // Clear milestones if no projectId
      setActivities({});  // Clear activities if no projectId
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
      
      setMilestones(milestonesData || []); // Ensure milestonesData is not null
      
      const activitiesMap: Record<string, MilestoneActivity[]> = {};
      
      if (milestonesData) { // Check if milestonesData is not null
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
      }
      
      setActivities(activitiesMap);
      setError(null);
    } catch (err: any) {
      console.error("Error fetching milestones:", err);
      setError("Failed to fetch milestones: " + err.message);
      toast.error("Failed to fetch milestones");
      setMilestones([]); // Clear milestones on error
      setActivities({});  // Clear activities on error
    } finally {
      setIsLoading(false);
    }
  }, [projectId]); // projectId is a dependency of fetchMilestones

  useEffect(() => {
    fetchMilestones(); // Call fetchMilestones directly
  }, [fetchMilestones]); // Added fetchMilestones to the dependency array

  return {
    milestones,
    activities,
    isLoading,
    error,
    refetch: fetchMilestones
  };
};
