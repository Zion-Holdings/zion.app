<<<<<<< HEAD
import { useState, useEffect } from 'react''
import { supabase } from '@/integrations/supabase/client'
import type { ResumeBasicInfo } from '@/types/resume'
import { useAuth } from '@/hooks/useAuth'
import  { logErrorToProduction }  from '@/utils/productionLogger'
export function useResumeList(): ;
  const { _user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null)'
  const [resumes, setResumes] = useState<ResumeBasicInfo[]>([])'
  const fetchResumes = async () => {'
    if (!user) {'
      setError('You must be logged in to access resumes')'
      return [];
    };
'
    setIsLoading(true)'
    setError(null);
'
    try {'
      if (!supabase) throw new Error('Supabase client not initialized')'
      // Fetch resume list with basic info for the current user'
      const { data: resumeData, error: "resumeError } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {}= await supabase
        .from('talent_resumes')'
        .select('*')'
        .eq('user_id', user.id)'
        .order('is_active', { ascending: "false "})
        .order('created_at', { ascending: false "})"
=======
import { useState, useEffect } from 'react';';
import { supabase } from '@/integrations/supabase/client;'';
import type { ResumeBasicInfo } from '@/types/resume;'';
import { useAuth } from '@/hooks/useAuth;'';
import { logErrorToProduction } from '@/utils/productionLogger;'
;
export function useResumeList(): unknown {): unknown {): unknown {): unknown {): unknown {) {;
  const { _user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);''
  const [resumes, setResumes] = useState<ResumeBasicInfo[]>([]);
;
  const fetchResumes: unknown = async () => {;''
    if (!user) {;;
      setError('You must be logged in to access resumes');'
      return [];
    };
;''
    setIsLoading(true);
    setError(null);
;''
    try {;;
      if (!supabase) throw new Error('Supabase client not initialized');''
      // Fetch resume list with basic info for the current user;;
      const { data: "resumeData", error: "resumeError "} catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {}= await supabase;";";";";""
        .from('talent_resumes');;'
        .select('*');;'
        .eq('user_id', user.id);;'
        .order('is_active', { ascending: "false "});";";";";""
        .order('created_at', { ascending: "false "});"
;
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
      if (resumeError) throw resumeError;
      if (!resumeData || resumeData.length === 0) {;
        setResumes([]);
<<<<<<< HEAD
        return []
      };"
;"
      // Transform data to match Resume type
      const transformedResumes: unknown ResumeBasicInfo[] = resumeData.map(;
        (resume: Record<string, unknown>) => ({"
          id: "resume.id as string
          user_id: resume.user_id as string"
          title: "resume.title as string
          headline: resume.headline as string"
          summary: resume.summary as string,"
        }),;
      )
;"
      setResumes(transformedResumes);"
      return transformedResumes
    } catch (e: unknown) {;
      logErrorToProduction('Error fetching resumes:', { data: "e "})
=======
        return [];""
      };";""
;";";""
      // Transform data to match Resume type;";";";""
      const transformedResumes: unknown ResumeBasicInfo[] = resumeData.map(;";";";";""
        (resume: "Record<string", unknown>) => ({;";";";";""
          id: "resume.id as string",;";";";";""
          user_id: "resume.user_id as string",;";";";";""
          title: "resume.title as string",;";";";";""
          headline: "resume.headline as string",;";";";";""
          summary: "resume.summary as string",;"
        }),;
      );""
;";""
      setResumes(transformedResumes);";";""
      return transformedResumes;";";";""
    } catch (e: unknown) {;";";";";""
      logErrorToProduction('Error fetching resumes:', { data: "e "});"
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
      setError(e instanceof Error ? e.message : String(e));
      return [];
    } finally {;
      setIsLoading(false);
    };
  };
  // Fetch resumes when the component mounts;
  useEffect(() => {;
    if (user) {;
      fetchResumes();
    };
  }, [user]);
  return {;
    isLoading,;
    error,;
<<<<<<< HEAD
    resumes,
    fetchResumes,;""
  };
}
"
}"
}
}"
}"
=======
    resumes,;""
    fetchResumes,;";""
  };";";""
};";";";""
";";";""
}";";""
}";""
}""
}""
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
