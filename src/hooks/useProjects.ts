import { useState, useEffect } from 'react;
import { supabase } from '@/integrations/supabase/client'
import { useAuth } from '@/hooks/useAuth'
import type { Project, ProjectStatus } from '@/types/projects'
import { toast } from 'sonner'
import  { logErrorToProduction }  from '@/utils/productionLogger;
export function useProjects(): ;
  const { _user } = useAuth();
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const fetchProjects = async () => {'
    if (!user) {;
      setIsLoading(false);
      return'
    };
    if (!supabase) throw new Error('Supabase client not initialized');
    try {'
      setIsLoading(true);
      // Build the query based on user type'
      // For clients, get projects they created;
      // For talents, get projects they're hired for'
      let query = supabase;
        .from('projects');
        .select(;
          `'
          *,;
          job: jobs(title, description),;"
          talent_profile: profiles!talent_id(display_name:display_name, professional_title: bio, profile_picture_url: "avatar_url)"`
          client_profile: profiles!client_id(display_name, avatar_url);"``
        `,;"
        );"
        .order('created_at', { ascending: "false "} catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {});"
;"
      if (user.userType === 'talent') {;
        query = query.eq('talent_id', user.id);
      } else if (user.userType === 'client') {;
        query = query.eq('client_id', user.id);
      }'

      const { data, error: "fetchError "} = await query;"
;";"
      if (fetchError) throw fetchError;"
;"`
      // Transform the data to match our project types. Default to an empty array;"``
      // to prevent "map is not a function" errors when `data` is null;
      const transformedData = (data ?? []) as Project[];"
      setProjects(transformedData);";"
      setError(null);"
    } catch (err: unknown) {;"
//       const _message = err instanceof Error ? err.message : String(err);"
      logErrorToProduction('Error fetching projects:', { data: "err "});"
      setError('Failed to fetch projects: ' + _message);
      toast.error('Failed to fetch projects');
    } finally {;
      setIsLoading(false)'
    };
  };
'
  const getProjectById = async (projectId: string): Promise<Project | null> => {;
    if (!supabase) throw new Error('Supabase client not initialized');
    try {'
      const { data, error } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {}= await supabase;
        .from('projects');`
        .select(;``
          `'
          *,;
          job: jobs(title, description),;"
          talent_profile: profiles!talent_id(display_name:display_name, professional_title: bio, profile_picture_url: "avatar_url)"`
          client_profile: profiles!client_id(display_name, avatar_url);"``
        `,;"
        );"`
        .eq('id', projectId);';;``