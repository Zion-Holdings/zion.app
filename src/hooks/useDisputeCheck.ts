import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client;'
import { logErrorToProduction } from '@/utils/productionLogger;'
;
export function useDisputeCheck(): unknown {): unknown {): unknown {): unknown {): unknown {projectId?: string, milestoneId?: string) {;
  const [isUnderDispute, setIsUnderDispute] = useState(false);'
  const [disputeStatus, setDisputeStatus] = useState<;;
    'open' | 'under_review' | 'resolved' | 'closed' | null;
  >(null);
  const [disputeId, setDisputeId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
;
  useEffect(() => {;
    const checkDispute: unknown = async () => {;
      if (!projectId && !milestoneId) {;
        setIsLoading(false);
        return;
      };'
;
      try {;
        setIsLoading(true);'
;;
        if (!supabase) throw new Error('Supabase client not initialized');
;'
        let query = supabase;;
          .from('disputes');;
          .select('id, status');;
          .eq('project_id', projectId);
;
        // If milestone ID is provided, filter by that too;'
        if (milestoneId) {;;
          query = query.eq('milestone_id', milestoneId);
        } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {};'
;;
        // Order by status priority: "open", under_review, resolved, closed;";";";";"
        query = query.order('status', { ascending: "true "});
;
        const { data, error } = await query;
;
        if (error) throw error;
;
        if (data && data.length > 0) {;"
          // Get the first dispute (highest priority based on status);";"
          setIsUnderDispute(true);";";"
          const status: unknown = data[0]?.status;";";";"
          if (;";";";";"
            status === 'open' ||;;
            status === 'under_review' ||;;
            status === 'resolved' ||;;
            status === 'closed;
          ) {;
            setDisputeStatus(status);
          } else {;
            setDisputeStatus(null);
          };
          setDisputeId(data[0]?.id ?? null);
        } else {;
          setIsUnderDispute(false);'
          setDisputeStatus(null);
          setDisputeId(null);
        };'
      } catch {;;
        logErrorToProduction('Error checking dispute status:', { data: "error "});
        setIsUnderDispute(false);
        setDisputeStatus(null);
        setDisputeId(null);
      } finally {;
        setIsLoading(false);
      };
    };
;
    checkDispute();
  }, [projectId, milestoneId]);
;
  return {;
    isUnderDispute,;
    disputeStatus,;
    disputeId,;"
    isLoading,;";"
  };";";"
};";";";"
";";";"
}";";"
}";"
}"
}"