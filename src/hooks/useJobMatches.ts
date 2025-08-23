import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { JobMatch } from "@/types/jobs";
import {logErrorToProduction} from '@/utils/productionLogger';

export function useJobMatches(jobId: string) {

  const [matches, setMatches] = useState<JobMatch[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);

  const fetchMatches = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from("job_talent_matches")
        .select(`
          *,
          talent_profile:talent_id(
            id,
            user_id,
            full_name,
            professional_title,
            profile_picture_url,
            hourly_rate,
            bio,
            years_experience,
            key_projects,
            skills
          )
        `)
        .eq("job_id", jobId)
        .order("match_score", { ascending: false });

      if (error) throw error;
      setMatches(data || []);
    } catch (error) {
      logErrorToProduction('Error fetching job matches:', { data: error });
      toast({
        title: "Error",
        description: "Failed to load matched talents. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const triggerAIMatching = async () => {
    setIsProcessing(true);
    try {
      const response = await supabase.functions.invoke('job-talent-matcher', {
        body: { jobId },
      });
      
      if (response.error) throw new Error(response.error.message);
      
      toast({
        title: "AI Matching Complete",
        description: `Found ${(response.data as any)?.matches || 0} potential talent matches for this job.`,
      });
      
      // Refresh the matches list
      await fetchMatches();
    } catch (error) {
      logErrorToProduction('Error triggering AI matching:', { data: error });
      toast({
        title: "Matching Failed",
        description: "Could not process talent matching. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  useEffect(() => {
    fetchMatches();
  }, [jobId]);

  return {
    matches,
    isLoading,
    isProcessing,
    triggerAIMatching
  };
}
