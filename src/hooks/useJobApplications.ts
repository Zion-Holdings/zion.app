import { useState, useEffect, useCallback } from "react"; // Added useCallback
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { JobApplication, ApplicationStatus } from "@/types/jobs";
import { toast } from "sonner";

export const useJobApplications = (jobId?: string) => {
  const { user } = useAuth();
  const [applications, setApplications] = useState<JobApplication[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchApplications = useCallback(async () => { // Wrapped in useCallback
    if (!user) {
      setIsLoading(false);
      setApplications([]); // Clear applications if no user
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
      
      if (jobId) {
        query = query.eq("job_id", jobId);
      }
      
      if (user.userType === "jobSeeker" || user.userType === "creator") {
        query = query.eq("talent_id", user.id);
      } 
      else if (user.userType === "employer" || user.userType === "buyer") {
        if (!jobId) {
          const { data: jobIdsData, error: jobIdsError } = await supabase // Renamed to avoid conflict
            .from("jobs")
            .select("id")
            .eq("client_id", user.id);
          
          if (jobIdsError) throw jobIdsError;

          if (jobIdsData && jobIdsData.length > 0) {
            const jobIdArray = jobIdsData.map(job => job.id);
            query = query.in("job_id", jobIdArray);
          } else {
            // If employer has no jobs, they have no applications to see (unless jobId is specified)
            setApplications([]);
            setIsLoading(false);
            return;
          }
        }
      }
      
      const { data, error: fetchError } = await query;
      
      if (fetchError) throw fetchError;
      
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
      console.error("Error fetching applications:", err);
      setError("Failed to fetch applications: " + err.message);
      toast.error("Failed to fetch applications");
      setApplications([]); // Clear applications on error
    } finally {
      setIsLoading(false);
    }
  }, [user, jobId]); // Dependencies for fetchApplications

  const applyToJob = async (jobId: string, coverLetter: string, resumeId?: string) => {
    if (!user) {
      toast.error("You must be logged in to apply for jobs");
      return false;
    }
    
    try {
      const { data, error } = await supabase
        .from("job_applications")
        .insert({
          job_id: jobId,
          talent_id: user.id,
          resume_id: resumeId,
          cover_letter: coverLetter,
          status: "new"
        })
        .select()
        .single();
      
      if (error) {
        if (error.code === '23505') { 
          toast.error("You have already applied to this job");
        } else {
          throw error;
        }
        return false;
      }
      
      const newApplication = data as JobApplication;
      // Optimistically update or refetch
      // For simplicity, refetching; could also add to state directly if data matches full type
      fetchApplications(); 
      
      toast.success("Application submitted successfully");
      return true;
    } catch (err: any) {
      console.error("Error applying to job:", err);
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
      
      setApplications(prev => 
        prev.map(app => app.id === applicationId ? { ...app, status } : app)
      );
      
      toast.success(`Application status updated to ${status}`);
      return true;
    } catch (err: any) {
      console.error("Error updating application status:", err);
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
        .is("viewed_at", null); 
      
      if (error) throw error;
      
      setApplications(prev => 
        prev.map(app => app.id === applicationId ? 
          { ...app, status: "viewed", viewed_at: new Date().toISOString() } : app
        )
      );
      
      return true;
    } catch (err) {
      console.error("Error marking application as viewed:", err);
      return false;
    }
  };
  
  useEffect(() => {
    if (user) {
      fetchApplications();
    } else {
      setApplications([]); // Clear applications if user logs out
      setError(null);
    }
  }, [user, fetchApplications]); // Added fetchApplications (jobId is already a dep of fetchApplications)
  
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
