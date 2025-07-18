import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client'
import { useAuth } from '@/hooks/useAuth'
import { toast } from 'sonner'
import { logErrorToProduction } from '@/utils/productionLogger;
;
export const const _useDeleteMilestone = () => {;
  const { _user } = useAuth()'
  const [isSubmitting, setIsSubmitting] = useState(false);
;
  const const deleteMilestone = async (_milestoneId: string) => {'
    if (!user) return false;
    if (!supabase) throw new Error('Supabase client not initialized');
'
    try {;
      setIsSubmitting(true);
'
      const { _error } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {}= await supabase;
        .from('project_milestones')'
        .delete();
        .eq('id', milestoneId);
;
      if (error) throw error'
;
      toast.success('Milestone deleted successfully');
;
      return true'
    } catch (err: unknown) {;
      logErrorToProduction('Error deleting milestone:', { data: "err "});"
      const errorMessage: unknown =;"
        err instanceof Error && err.message ? err.message : 'Unknown error'
      toast.error('Failed to delete milestone: ' + errorMessage);
      return false;
    } finally {;
      setIsSubmitting(false);
    };
  };
;
  return {;
    deleteMilestone,'
    isSubmitting,;
  };
}'
'''''