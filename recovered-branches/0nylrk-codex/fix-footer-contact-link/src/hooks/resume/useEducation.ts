
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Education } from '@/types/resume';
import { useAuth } from '@/hooks/useAuth';
import { formatDateForDB, handleResumeError, showSuccessToast } from './useResumeUtils';

export function useEducation() {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const addEducation = async (resumeId: string, education: Education): Promise<boolean> => {
    if (!user) {
      setError('You must be logged in to add education');
      return false;
    }
    
    setIsLoading(true);
    setError(null);
    
    try {
      const { error } = await supabase
        .from('education')
        .insert({
          resume_id: resumeId,
          institution: education.institution,
          degree: education.degree,
          field_of_study: education.field_of_study,
          start_date: formatDateForDB(education.start_date),
          end_date: education.is_current ? null : formatDateForDB(education.end_date),
          is_current: education.is_current,
          description: education.description,
          institution_logo_url: education.institution_logo_url,
          location: education.location
        });
      
      if (error) throw error;
      
      return showSuccessToast("Education added", "Your education has been added to your resume");
    } catch (e: any) {
      return handleResumeError(e, 'Could not add education');
    } finally {
      setIsLoading(false);
    }
  };
  
  const updateEducation = async (eduId: string, education: Education): Promise<boolean> => {
    if (!user) {
      setError('You must be logged in to update education');
      return false;
    }
    
    setIsLoading(true);
    setError(null);
    
    try {
      const { error } = await supabase
        .from('education')
        .update({
          institution: education.institution,
          degree: education.degree,
          field_of_study: education.field_of_study,
          start_date: formatDateForDB(education.start_date),
          end_date: education.is_current ? null : formatDateForDB(education.end_date),
          is_current: education.is_current,
          description: education.description,
          institution_logo_url: education.institution_logo_url,
          location: education.location
        })
        .eq('id', eduId);
      
      if (error) throw error;
      
      return showSuccessToast("Education updated", "Your education has been updated");
    } catch (e: any) {
      return handleResumeError(e, 'Could not update education');
    } finally {
      setIsLoading(false);
    }
  };
  
  const deleteEducation = async (eduId: string): Promise<boolean> => {
    if (!user) {
      setError('You must be logged in to delete education');
      return false;
    }
    
    setIsLoading(true);
    setError(null);
    
    try {
      const { error } = await supabase
        .from('education')
        .delete()
        .eq('id', eduId);
      
      if (error) throw error;
      
      return showSuccessToast("Education deleted", "Your education has been removed from your resume");
    } catch (e: any) {
      return handleResumeError(e, 'Could not delete education');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    error,
    addEducation,
    updateEducation,
    deleteEducation
  };
}
