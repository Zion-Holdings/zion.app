import { useState, useEffect, useCallback } from 'react'; // Added useCallback
import { supabase } from '@/integrations/supabase/client';
import { Resume } from '@/types/resume';
import { useAuth } from '@/hooks/useAuth';

export function useResumeList() {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [resumes, setResumes] = useState<Resume[]>([]);
  
  const fetchResumes = useCallback(async () => { // Wrapped in useCallback
    if (!user) {
      setError('You must be logged in to access resumes');
      setResumes([]); // Clear resumes if no user
      return [];
    }
    
    setIsLoading(true);
    setError(null);
    
    try {
      const { data: resumeData, error: resumeError } = await supabase
        .from('talent_resumes')
        .select('*')
        .eq('user_id', user.id)
        .order('is_active', { ascending: false })
        .order('created_at', { ascending: false });
      
      if (resumeError) throw resumeError;
      
      if (!resumeData || resumeData.length === 0) {
        setResumes([]);
        return [];
      }
      
      const transformedResumes: Resume[] = resumeData.map(resume => ({
        id: resume.id,
        user_id: resume.user_id,
        basic_info: {
          id: resume.id,
          title: resume.title,
          headline: resume.headline,
          summary: resume.summary
        },
        work_experience: [],
        education: [],
        skills: [],
        certifications: [],
        is_active: resume.is_active
      }));
      
      setResumes(transformedResumes);
      return transformedResumes;
    } catch (e: any) {
      console.error('Error fetching resumes:', e);
      setError(e.message);
      setResumes([]); // Clear resumes on error
      return [];
    } finally {
      setIsLoading(false);
    }
  }, [user]); // user is a dependency of fetchResumes
  
  useEffect(() => {
    if (user) {
      fetchResumes();
    } else {
      // Clear resumes if user logs out or is not available initially
      setResumes([]);
      setError(null); // Clear any previous errors
    }
  }, [user, fetchResumes]); // Added fetchResumes
  
  return {
    isLoading,
    error,
    resumes,
    fetchResumes
  };
}
