import { useState, useEffect } from 'react''
import { supabase } from '@/integrations/supabase/client'
import { logErrorToProduction } from '@/utils/productionLogger'
'
export function useDisputeCheck(): unknown {): unknown {): unknown {): unknown {): unknown {projectId?: string, milestoneId?: string) {;
  const [isUnderDispute, setIsUnderDispute] = useState(false)'
  const [disputeStatus, setDisputeStatus] = useState<'
    'open' | 'under_review' | 'resolved' | 'closed' | null'';;