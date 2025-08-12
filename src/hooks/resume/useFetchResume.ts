import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Resume } from '@/types/resume';
import { useAuth } from '@/hooks/useAuth';
import {logErrorToProduction} from '@/utils/productionLogger';

export function useFetchResume() {

  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [resume, setResume] = useState<Resume | null>(null);
  
  const fetchResume = async (resumeId?: string) => {
    if (!user) {
      setError('You must be logged in to access resumes');
      return null;
    }
    
    setIsLoading(true);
    setError(null);
    
    try {
      // If resumeId is provided, fetch that specific resume
      // Otherwise, fetch the user's active resume or most recent resume
      let resumeQuery = supabase.from('talent_resumes').select('*');
      
      if (resumeId) {
        resumeQuery = resumeQuery.eq('id', resumeId);
      } else {
        resumeQuery = resumeQuery
          .eq('user_id', user.id)
          .order('is_active', { ascending: false })
          .order('created_at', { ascending: false })
          .limit(1);
      }
      
      const { data: resumeData, error: resumeError } = await resumeQuery.single();
      
      if (resumeError) {
        if (resumeError.code === 'PGRST116') {
          // No resume found, this is not a critical error for a new user
          setResume(null);
          setIsLoading(false);
          return null;
        }
        throw resumeError;
      }
      
      // Fetch work experience
      const { data: workData, error: workError } = await supabase
        .from('work_history')
        .select('*')
        .eq('resume_id', resumeData.id)
        .order('is_current', { ascending: false })
        .order('start_date', { ascending: false });
        
      if (workError) throw workError;
      
      // Fetch education
      const { data: educationData, error: educationError } = await supabase
        .from('education')
        .select('*')
        .eq('resume_id', resumeData.id)
        .order('is_current', { ascending: false })
        .order('start_date', { ascending: false });
        
      if (educationError) throw educationError;
      
      // Fetch skills
      const { data: skillsData, error: skillsError } = await supabase
        .from('resume_skills')
        .select('*')
        .eq('resume_id', resumeData.id);
        
      if (skillsError) throw skillsError;
      
      // Fetch certifications
      const { data: certData, error: certError } = await supabase
        .from('certifications')
        .select('*')
        .eq('resume_id', resumeData.id);
        
      if (certError) throw certError;
      
      const fullResume: Resume = {
        id: resumeData.id,
        user_id: resumeData.user_id,
        basic_info: {
          id: resumeData.id,
          title: resumeData.title,
          headline: resumeData.headline,
          summary: resumeData.summary
        },
        work_experience: workData || [],
        education: educationData || [],
        skills: skillsData || [],
        certifications: certData || [],
        is_active: resumeData.is_active
      };
      
      setResume(fullResume);
      return fullResume;
    } catch (e: any) {
      logErrorToProduction('Error fetching resume:', { data:  e });
      setError(e.message);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    error,
    resume,
    fetchResume,
  };
}
