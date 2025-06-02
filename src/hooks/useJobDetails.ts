import { useState, useEffect, useCallback } from 'react'; // Added useCallback
import { supabase } from '@/integrations/supabase/client';

export function useJobDetails(jobId: string | undefined) {
  const [job, setJob] = useState<any | null>(null); // Consider defining a proper Job type
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null); // Changed error type to string | null

  const loadJobDetails = useCallback(async () => { // Wrapped in useCallback
    if (!jobId) {
      setIsLoading(false);
      setJob(null); // Clear job if no jobId
      return;
    }
    
    try {
      setIsLoading(true);
      const { data, error: supabaseError } = await supabase // Renamed error to avoid conflict
        .from('jobs')
        .select('*')
        .eq('id', jobId)
        .single();
        
      if (supabaseError) throw supabaseError;
      setJob(data);
      setError(null);
    } catch (err: any) {
      console.error('Error loading job details:', err);
      setError(err.message);
      setJob(null); // Clear job on error
    } finally {
      setIsLoading(false);
    }
  }, [jobId]); // jobId is a dependency of loadJobDetails

  useEffect(() => {
    loadJobDetails();
  }, [loadJobDetails]); // Added loadJobDetails to dependency array

  return {
    job,
    isLoading,
    error,
    loadJobDetails, // Return refetch function as loadJobDetails for clarity
    refetch: loadJobDetails // Added refetch alias for consistency if preferred
  };
}

export default useJobDetails;
