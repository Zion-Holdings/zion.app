import { useState, useEffect, useCallback } from "react"; // Added useCallback
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { JobMatch } from "@/types/jobs";

export function useJobMatches(jobId: string) {
  const [matches, setMatches] = useState<JobMatch[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);

  const fetchMatches = useCallback(async () => { // Wrapped in useCallback
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
      console.error("Error fetching job matches:", error);
      toast({
        title: "Error",
        description: "Failed to load matched talents. Please try again later.",
        variant: "destructive",
      });
      setMatches([]); // Clear matches on error
    } finally {
      setIsLoading(false);
    }
  }, [jobId]); // jobId is a dependency of fetchMatches

  const triggerAIMatching = async () => {
    setIsProcessing(true);
    try {
      const response = await supabase.functions.invoke('job-talent-matcher', {
        body: { jobId },
      });
      
      if (response.error) throw new Error(response.error.message);
      
      toast({
        title: "AI Matching Complete",
        description: `Found ${response.data.matches || 0} potential talent matches for this job.`,
      });
      
      await fetchMatches();
    } catch (error) {
      console.error("Error triggering AI matching:", error);
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
    if (jobId) { // Ensure jobId is present before fetching
      fetchMatches();
    }
  }, [jobId, fetchMatches]); // Added fetchMatches

  return {
    matches,
    isLoading,
    isProcessing,
    triggerAIMatching,
    refetch: fetchMatches // Added refetch
  };
}
