
import { useState, useCallback } from 'react';
import { PortfolioProject } from '@/types/resume';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { toast } from '@/hooks/use-toast';
import {logErrorToProduction} from '@/utils/productionLogger';

export function usePortfolio() {

  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [projects, setProjects] = useState<PortfolioProject[]>([]);
  
  const fetchProjects = useCallback(async () => {
    if (!user) {
      setError('You must be logged in to access portfolio projects');
      return [];
    }
    
    setIsLoading(true);
    setError(null);
    
    try {
      const { data, error } = await supabase
        .from('portfolio_projects')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      
      setProjects(data || []);
      return data || [];
    } catch (e: any) {
      logErrorToProduction('Error fetching portfolio projects:', { data:  e });
      setError(e.message);
      return [];
    } finally {
      setIsLoading(false);
    }
  }, [user]);
  
  const addProject = async (project: PortfolioProject): Promise<string | null> => {
    if (!user) {
      setError('You must be logged in to add a portfolio project');
      return null;
    }
    
    setIsLoading(true);
    setError(null);
    
    try {
      const { data, error } = await supabase
        .from('portfolio_projects')
        .insert({
          user_id: user.id,
          title: project.title,
          description: project.description,
          technologies: project.technologies,
          image_url: project.image_url,
          github_url: project.github_url,
          demo_url: project.demo_url,
          pdf_url: project.pdf_url
        })
        .select('id')
        .single();
      
      if (error) throw error;
      
      toast({
        title: "Project added",
        description: "Your project has been added to your portfolio"
      });
      
      await fetchProjects();
      return data.id;
    } catch (e: any) {
      logErrorToProduction('Error adding portfolio project:', { data:  e });
      setError(e.message);
      toast({
        title: "Error",
        description: `Could not add project: ${e.message}`,
        variant: "destructive"
      });
      return null;
    } finally {
      setIsLoading(false);
    }
  };
  
  const updateProject = async (projectId: string, project: PortfolioProject): Promise<boolean> => {
    if (!user) {
      setError('You must be logged in to update a portfolio project');
      return false;
    }
    
    setIsLoading(true);
    setError(null);
    
    try {
      const { error } = await supabase
        .from('portfolio_projects')
        .update({
          title: project.title,
          description: project.description,
          technologies: project.technologies,
          image_url: project.image_url,
          github_url: project.github_url,
          demo_url: project.demo_url,
          pdf_url: project.pdf_url
        })
        .eq('id', projectId)
        .eq('user_id', user.id);
      
      if (error) throw error;
      
      toast({
        title: "Project updated",
        description: "Your portfolio project has been updated"
      });
      
      await fetchProjects();
      return true;
    } catch (e: any) {
      logErrorToProduction('Error updating portfolio project:', { data:  e });
      setError(e.message);
      toast({
        title: "Error",
        description: `Could not update project: ${e.message}`,
        variant: "destructive"
      });
      return false;
    } finally {
      setIsLoading(false);
    }
  };
  
  const deleteProject = async (projectId: string): Promise<boolean> => {
    if (!user) {
      setError('You must be logged in to delete a portfolio project');
      return false;
    }
    
    setIsLoading(true);
    setError(null);
    
    try {
      const { error } = await supabase
        .from('portfolio_projects')
        .delete()
        .eq('id', projectId)
        .eq('user_id', user.id);
      
      if (error) throw error;
      
      toast({
        title: "Project deleted",
        description: "Your portfolio project has been deleted"
      });
      
      setProjects(projects.filter(p => p.id !== projectId));
      return true;
    } catch (e: any) {
      logErrorToProduction('Error deleting portfolio project:', { data:  e });
      setError(e.message);
      toast({
        title: "Error",
        description: `Could not delete project: ${e.message}`,
        variant: "destructive"
      });
      return false;
    } finally {
      setIsLoading(false);
    }
  };
  
  return {
    isLoading,
    error,
    projects,
    fetchProjects,
    addProject,
    updateProject,
    deleteProject
  };
}
