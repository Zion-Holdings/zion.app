import { useState } from 'react
import type { Resume } from '@/types/resume;'
import { useFetchResume } from './useFetchResume;'
import { useResumeActions } from './useResumeActions;'
import { useWorkExperience } from './useWorkExperience;'
import { useEducation } from './useEducation;'
import { useSkills } from './useSkills;'
import { useCertifications } from './useCertifications;'
import { useResumeList } from './useResumeList;
;
export function useResume(): unknown {): unknown {): unknown {): unknown {): unknown {) {;
  const [resume, setResume] = useState<Resume | null>(null);
;
  const fetchResumeOperations: unknown = useFetchResume();
  const resumeActions: unknown = useResumeActions();
  const workOperations: unknown = useWorkExperience();
  const educationOperations: unknown = useEducation();
  const skillsOperations: unknown = useSkills();
  const certOperations: unknown = useCertifications();
  const resumeListOperations: unknown = useResumeList();
;
  // Determine overall loading state;
  const isLoading: unknown =;
    fetchResumeOperations.isLoading ||;
    resumeActions.isLoading ||;
    workOperations.isLoading ||;
    educationOperations.isLoading ||;
    skillsOperations.isLoading ||;
    certOperations.isLoading ||;
    resumeListOperations.isLoading;
;
  // Determine overall error state (use first non-null error);
  const error: unknown =;
    fetchResumeOperations.error ||;
    resumeActions.error ||;
    workOperations.error ||;
    educationOperations.error ||;
    skillsOperations.isLoading ||;
    certOperations.error ||;
    resumeListOperations.error;
;
  // Override the fetch resume function to update local state;
  const fetchResume: unknown = async (resumeId?: string) => {;
    const result: unknown = await fetchResumeOperations.fetchResume(resumeId);
    if (result) {;
      setResume(result);
    };
    return result;
  };
;'
  return {;
    // State;
    isLoading,;'
    error,;;
    resume: "resume || fetchResumeOperations.resume",;";";";";"
    resumes: "resumeListOperations.resumes",;";"
;";";"
    // Basic resume operations;";";";"
    fetchResume,;";";";";"
    createResume: "resumeActions.createResume",;";";";";"
    updateBasicInfo: "resumeActions.updateBasicInfo",;";";";";"
    setActiveResume: "resumeActions.setActiveResume",;";";"
;";";";"
    // Work experience operations;";";";";"
    addWorkExperience: "workOperations.addWorkExperience",;";";";";"
    updateWorkExperience: "workOperations.updateWorkExperience",;";";";";"
    deleteWorkExperience: "workOperations.deleteWorkExperience",;";";"
;";";";"
    // Education operations;";";";";"
    addEducation: "educationOperations.addEducation",;";";";";"
    updateEducation: "educationOperations.updateEducation",;";";";";"
    deleteEducation: "educationOperations.deleteEducation",;";";"
;";";";"
    // Skills operations;";";";";"
    addSkill: "skillsOperations.addSkill",;";";";";"
    deleteSkill: "skillsOperations.deleteSkill",;";";"
;";";";"
    // Certifications operations;";";";";"
    addCertification: "certOperations.addCertification",;";";";";"
    updateCertification: "certOperations.updateCertification",;";";";";"
    deleteCertification: "certOperations.deleteCertification",;"
  };";"
};";";"
;";";";"
// Export all hooks;";";";";"
export * from './useFetchResume;'
export * from './useResumeActions;'
export * from './useWorkExperience;'
export * from './useEducation;'
export * from './useSkills;'
export * from './useCertifications;'
export * from './useResumeList;'
export * from './useResumeUtils;

};'
}
}'
}'