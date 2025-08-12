
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { JobApplication, ApplicationStatus } from "@/types/jobs";
import { toast } from "sonner";
import {logErrorToProduction} from '@/utils/productionLogger';

export const useJobApplications = (jobId?: string) => {

  const { user } = useAuth();
  const [applications, setApplications] = useState<JobApplication[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchApplications = async () => {
    if (!user) {
      setIsLoading(false);
      return;
    }

    try {
      setIsLoading(true);
      
      let query = supabase
        .from("job_applications")
        .select(`
          *,
          job:jobs(*),
          talent_profile:profiles!talent_id(id, display_name, avatar_url, bio)
        `)
        .order("created_at", { ascending: false });
      
      // Filter by job if jobId is provided
      if (jobId) {
        query = query.eq("job_id", jobId);
      }
      
      // For talent users, only fetch their own applications
      if (user.userType === "talent") {
        query = query.eq("talent_id", user.id);
      }
      // For client users, fetch applications for their jobs
      else if (user.userType === "client") {
        if (!jobId) {
          // Fix: Convert the subquery to a proper array or string
          const { data: jobIds } = await supabase
            .from("jobs")
            .select("id")
            .eq("client_id", user.id);

          if (jobIds && jobIds.length > 0) {
            const jobIdArray = jobIds.map((job: any) => job.id);
            query = query.in("job_id", jobIdArray);
          }
        }
      }
      
      const { data, error: fetchError } = await query;
      
      if (fetchError) throw fetchError;
      
      // Transform the data to match our application types
      const transformedData = data.map((app: any) => ({
        ...app,
        talent_profile: app.talent_profile ? {
          ...app.talent_profile,
          full_name: app.talent_profile.display_name,
          profile_picture_url: app.talent_profile.avatar_url,
          skills: []
        } : undefined
      }));
      
      setApplications(transformedData as JobApplication[]);
      setError(null);
    } catch (err: any) {
      logErrorToProduction('Error fetching applications:', { data: err });
      setError("Failed to fetch applications: " + err.message);
      toast.error("Failed to fetch applications");
    } finally {
      setIsLoading(false);
    }
  };
  
  const applyToJob = async (
    jobId: string,
    coverLetter: string,
    resumeId?: string,
    resumeFile?: File
  ) => {
    if (!user) {
      toast.error("You must be logged in to apply for jobs");
      return false;
    }
    
    try {
      let resumeUrl: string | undefined;

      if (resumeFile) {
        const fileName = `resume-${user.id}-${Date.now()}-${resumeFile.name}`;
        const { error: uploadError } = await supabase.storage
          .from('resumes')
          .upload(fileName, resumeFile);
        if (uploadError) throw uploadError;

        const {
          data: { publicUrl }
        } = supabase.storage.from('resumes').getPublicUrl(fileName);
        resumeUrl = publicUrl;
      }

      const { data, error } = await supabase
        .from('job_applications')
        .insert({
          job_id: jobId,
          talent_id: user.id,
          resume_id: resumeId,
          resume_url: resumeUrl,
          cover_letter: coverLetter,
          status: 'new'
        })
        .select()
        .single();
      
      if (error) {
        if (error.code === '23505') { // Unique violation
          toast.error("You have already applied to this job");
        } else {
          throw error;
        }
        return false;
      }
      
      // Add the new application to the local state
      const newApplication = {
        ...(data as JobApplication),
        resume: resumeUrl
          ? {
              id: crypto.randomUUID(),
              title: resumeFile?.name || 'Uploaded CV',
              type: 'custom_upload',
              file_url: resumeUrl
            }
          : (data as any).resume
      } as JobApplication;
      setApplications(prev => [newApplication, ...prev]);
      
      toast.success("Application submitted successfully");
      return true;
    } catch (err: any) {
      logErrorToProduction('Error applying to job:', { data: err });
      toast.error("Failed to submit application: " + err.message);
      return false;
    }
  };
  
  const updateApplicationStatus = async (applicationId: string, status: ApplicationStatus) => {
    try {
      const { error } = await supabase
        .from("job_applications")
        .update({ status })
        .eq("id", applicationId);
      
      if (error) throw error;
      
      // Update the local state
      setApplications(prev => 
        prev.map(app => app.id === applicationId ? { ...app, status } : app)
      );
      
      toast.success(`Application status updated to ${status}`);
      return true;
    } catch (err: any) {
      logErrorToProduction('Error updating application status:', { data: err });
      toast.error("Failed to update application status: " + err.message);
      return false;
    }
  };
  
  const markApplicationAsViewed = async (applicationId: string) => {
    try {
      const { error } = await supabase
        .from("job_applications")
        .update({ 
          status: "viewed", 
          viewed_at: new Date().toISOString() 
        })
        .eq("id", applicationId)
        .is("viewed_at", null); // Only update if not already viewed
      
      if (error) throw error;
      
      // Update the local state
      setApplications(prev => 
        prev.map(app => app.id === applicationId ? 
          { ...app, status: "viewed", viewed_at: new Date().toISOString() } : app
        )
      );
      
      return true;
    } catch (err) {
      logErrorToProduction('Error marking application as viewed:', { data: err });
      return false;
    }
  };
  
  // Fetch applications when component mounts or dependencies change
  useEffect(() => {
    if (user) {
      fetchApplications();
    }
  }, [user, jobId]);
  
  return {
    applications,
    isLoading,
    error,
    refetch: fetchApplications,
    applyToJob,
    updateApplicationStatus,
    markApplicationAsViewed
  };
};
