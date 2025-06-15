
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Job } from '@/types/jobs'; // Added import

export function useJobDetails(jobId: string | undefined) {
  const [job, setJob] = useState<Job | null>(null); // Explicitly typed useState
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null); // Typed error state

  async function loadJobDetails() {
    if (!jobId) {
      setIsLoading(false);
      return;
    }
    
    try {
      setIsLoading(true);
      const { data, error } = await supabase
        .from('jobs')
        .select('*')
        .eq('id', jobId)
        .single();
        
      if (error) throw error;
      setJob(data);
      setError(null);
    } catch (err: any) { // Typed err as any
      console.error('Error loading job details:', err);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  // Load job details when component mounts or jobId changes
  useEffect(() => {
    loadJobDetails();
  }, [jobId]);

  return {
    job,
    isLoading,
    error,
    loadJobDetails
  };
}

export default useJobDetails;
