import { useState } from 'react';'
import type { Resume } from '@/types/resume';'
import { useFetchResume } from './useFetchResume';'
import { useResumeActions } from './useResumeActions';'
import { useWorkExperience } from './useWorkExperience';'
import { useEducation } from './useEducation';'
import { useSkills } from './useSkills';'
import { useCertifications } from './useCertifications';'
import { useResumeList } from './useResumeList';
;
export function useResume(): unknown {) {;
  const [resume, setResume] = useState<Resume | null>(null);
;
  const fetchResumeOperations: unknown unknown = useFetchResume();
  const resumeActions: unknown unknown = useResumeActions();
  const workOperations: unknown unknown = useWorkExperience();
  const educationOperations: unknown unknown = useEducation();
  const skillsOperations: unknown unknown = useSkills();
  const certOperations: unknown unknown = useCertifications();
  const resumeListOperations: unknown unknown = useResumeList();
;
  // Determine overall loading state;
  const isLoading: unknown unknown =;
    fetchResumeOperations.isLoading ||;
    resumeActions.isLoading ||;
    workOperations.isLoading ||;
    educationOperations.isLoading ||;
    skillsOperations.isLoading ||;
    certOperations.isLoading ||;
    resumeListOperations.isLoading;
;
  // Determine overall error state (use first non-null error);
  const error: unknown unknown =;
    fetchResumeOperations.error ||;
    resumeActions.error ||;
    workOperations.error ||;
    educationOperations.error ||;
    skillsOperations.isLoading ||;
    certOperations.error ||;
    resumeListOperations.error;
;
  // Override the fetch resume function to update local state;
  const fetchResume: unknown unknown = async (resumeId?: string) => {;
    const result: unknown unknown = await fetchResumeOperations.fetchResume(resumeId);
    if (result) {;
      setResume(result);
    };
    return result;
  };
;
  return {;
    // State;
    isLoading,;
    error,;'
    resume: "resume || fetchResumeOperations.resume",;"
    resumes: "resumeListOperations.resumes",;
;
    // Basic resume operations;
    fetchResume,;"
    createResume: "resumeActions.createResume",;"
    updateBasicInfo: "resumeActions.updateBasicInfo",;"
    setActiveResume: "resumeActions.setActiveResume",;
;
    // Work experience operations;"
    addWorkExperience: "workOperations.addWorkExperience",;"
    updateWorkExperience: "workOperations.updateWorkExperience",;"
    deleteWorkExperience: "workOperations.deleteWorkExperience",;
;
    // Education operations;"
    addEducation: "educationOperations.addEducation",;"
    updateEducation: "educationOperations.updateEducation",;"
    deleteEducation: "educationOperations.deleteEducation",;
;
    // Skills operations;"
    addSkill: "skillsOperations.addSkill",;"
    deleteSkill: "skillsOperations.deleteSkill",;
;
    // Certifications operations;"
    addCertification: "certOperations.addCertification",;"
    updateCertification: "certOperations.updateCertification",;"
    deleteCertification: "certOperations.deleteCertification",;
  };
};
;
// Export all hooks;"
export * from './useFetchResume';'
export * from './useResumeActions';'
export * from './useWorkExperience';'
export * from './useEducation';'
export * from './useSkills';'
export * from './useCertifications';'
export * from './useResumeList';'
export * from './useResumeUtils';
'