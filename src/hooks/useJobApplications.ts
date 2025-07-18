import { useState, useEffect } from 'react;
import { supabase } from '@/integrations/supabase/client'
import { useAuth } from '@/hooks/useAuth'
import type { JobApplication, ApplicationStatus } from '@/types/jobs'
import { toast } from 'sonner'
import  { logErrorToProduction }  from '@/utils/productionLogger;
export const _useJobApplications = (jobId?: string) => {;
  const { _user } = useAuth();
  const [applications, setApplications] = useState<JobApplication[]>([])'
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
'
  const fetchApplications = async () => {;
    if (!supabase) throw new Error('Supabase client not initialized');';;