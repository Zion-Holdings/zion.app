import { useState, useEffect, useCallback } from "react"; // Added useCallback
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { Project, ProjectStatus } from "@/types/projects";
import { toast } from "sonner";

export function useProjects() {
  const { user } = useAuth();
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProjects = useCallback(async () => { // Wrapped in useCallback
    if (!user) {
      setIsLoading(false);
      setProjects([]); // Clear projects if no user
      return;
    }

    try {
      setIsLoading(true);
      
      let query = supabase
        .from("projects")
        .select(`
          *,
          job:jobs(title, description),
          talent_profile:profiles!talent_id(display_name:display_name, professional_title:bio, profile_picture_url:avatar_url),
          client_profile:profiles!client_id(display_name, avatar_url)
        `)
        .order("created_at", { ascending: false });
      
      if (user.userType === "jobSeeker" || user.userType === "creator") {
        query = query.eq("talent_id", user.id);
      } else if (user.userType === "employer" || user.userType === "buyer") {
        query = query.eq("client_id", user.id);
      }
      // Consider if a case where userType is none of these should fetch all or none
      
      const { data, error: fetchError } = await query;
      
      if (fetchError) throw fetchError;
      
      const transformedData = data.map((project: any) => ({
        ...project,
        talent_profile: project.talent_profile ? {
          ...project.talent_profile,
          full_name: project.talent_profile.display_name
        } : undefined,
        // client_profile is already in the correct shape from select
      }));
      
      setProjects(transformedData as Project[]);
      setError(null);
    } catch (err: any) {
      console.error("Error fetching projects:", err);
      setError("Failed to fetch projects: " + err.message);
      toast.error("Failed to fetch projects");
      setProjects([]); // Clear projects on error
    } finally {
      setIsLoading(false);
    }
  }, [user]); // user is a dependency of fetchProjects

  const getProjectById = async (projectId: string): Promise<Project | null> => {
    try {
      const { data, error } = await supabase
        .from("projects")
        .select(`
          *,
          job:jobs(title, description),
          talent_profile:profiles!talent_id(display_name:display_name, professional_title:bio, profile_picture_url:avatar_url),
          client_profile:profiles!client_id(display_name, avatar_url)
        `)
        .eq("id", projectId)
        .single();
      
      if (error) throw error;
      
      const transformedProject = {
        ...data,
        talent_profile: data.talent_profile ? {
          ...data.talent_profile,
          full_name: data.talent_profile.display_name
        } : undefined
      };
      
      return transformedProject as Project;
    } catch (err: any) {
      console.error("Error fetching project:", err);
      toast.error("Failed to fetch project details");
      return null;
    }
  };

  const updateProjectStatus = async (projectId: string, status: ProjectStatus): Promise<boolean> => {
    try {
      const { error } = await supabase
        .from("projects")
        .update({ status })
        .eq("id", projectId);
      
      if (error) throw error;
      
      setProjects(prev => 
        prev.map(project => project.id === projectId ? { ...project, status } : project)
      );
      
      toast.success(`Project status updated to ${status}`);
      return true;
    } catch (err: any) {
      console.error("Error updating project status:", err);
      toast.error("Failed to update project status");
      return false;
    }
  };

  useEffect(() => {
    if (user) {
      fetchProjects();
    } else {
      setProjects([]); // Clear projects if user logs out
      setError(null);
    }
  }, [user, fetchProjects]); // Added fetchProjects

  return {
    projects,
    isLoading,
    error,
    refetch: fetchProjects,
    getProjectById,
    updateProjectStatus
  };
}