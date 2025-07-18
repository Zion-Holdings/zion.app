import { useState } from 'react''
import { supabase } from '@/integrations/supabase/client'
import type { Resume } from '@/types/resume'
import { useAuth } from '@/hooks/useAuth'
import  { logErrorToProduction }  from '@/utils/productionLogger'
export function useFetchResume(): ;
  const { _user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null)'
  const [resume, setResume] = useState<Resume | null>(null)'
  const fetchResume = async (resumeId?: string) => {'
    if (!user) {'
      setError('You must be logged in to access resumes')'
      return null;
    };
'
    setIsLoading(true)'
    setError(null);
'
    try {'
      if (!supabase) throw new Error('Supabase client not initialized')'
      // If resumeId is provided, fetch that specific resume'
      // Otherwise, fetch the user's active resume or most recent resume'
      let resumeQuery = supabase.from('talent_resumes').select('*')'
'
      if (resumeId) {'
        resumeQuery = resumeQuery.eq('id', resumeId)'
      } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {}else {'
        resumeQuery = resumeQuery'
          .eq('user_id', user.id)'
          .order('is_active', { ascending: "false })
          .order('created_at', { ascending: "false "})
          .limit(1);
      }"
;"
      const { data: resumeData, error: resumeError } ="
        await resumeQuery.single();"

      if (resumeError) {;
        if (resumeError.code === 'PGRST116') {'