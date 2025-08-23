
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { JobMatch } from "@/types/jobs";
import {logErrorToProduction} from '@/utils/productionLogger';

export function useJobSuggestions(talentId?: string) {

  const [jobMatches, setJobMatches] = useState<JobMatch[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const fetchSuggestedJobs = async () => {
      if (!talentId) return;
      
      try {
        setIsLoading(true);
        
        // Get job matches with job details
        const { data, error } = await supabase
          .from("job_talent_matches")
          .select(`
            *,
            job:job_id (*)
          `)
          .eq("talent_id", talentId)
          .order("created_at", { ascending: false });
          
        if (error) throw error;
        
        setJobMatches(data || []);
      } catch (error) {
        logErrorToProduction('Error fetching job matches:', { data: error });
        toast({
          title: "Error",
          description: "Failed to load job suggestions",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchSuggestedJobs();
  }, [talentId]);

  const updateJobMatchStatus = async (matchId: string, status: 'viewed' | 'applied' | 'declined') => {
    try {
      const updates = {
        status,
        ...(status === 'viewed' ? { viewed_at: new Date().toISOString() } : {})
      };
      
      const { error } = await supabase
        .from("job_talent_matches")
        .update(updates)
        .eq("id", matchId);
        
      if (error) throw error;
      
      // Update local state
      setJobMatches(matches => 
        matches.map(match => 
          match.id === matchId 
            ? { ...match, status, ...(status === 'viewed' ? { viewed_at: new Date().toISOString() } : {}) }
            : match
        )
      );
      
      // Show appropriate message
      if (status === 'applied') {
        toast({
          title: "Application Submitted",
          description: "You've successfully applied to this job"
        });
      } else if (status === 'declined') {
        toast({
          title: "Job Declined",
          description: "This job will be removed from your suggestions"
        });
      }
    } catch (error) {
      logErrorToProduction('Error updating job match status:', { data: error });
      toast({
        title: "Error",
        description: "Failed to update job status",
        variant: "destructive",
      });
    }
  };

  // Filter matches by status
  const newMatches = jobMatches.filter(match => match.status === 'new');
  const viewedMatches = jobMatches.filter(match => match.status === 'viewed');
  const appliedMatches = jobMatches.filter(match => match.status === 'applied');
  const declinedMatches = jobMatches.filter(match => match.status === 'declined');

  return {
    jobMatches,
    isLoading,
    updateJobMatchStatus,
    categorizedMatches: {
      newMatches,
      viewedMatches,
      appliedMatches,
      declinedMatches
    }
  };
}
