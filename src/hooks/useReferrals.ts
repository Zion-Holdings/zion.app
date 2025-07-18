import { useState, useEffect } from 'react';
import { toast } from '@/hooks/use-toast'
import { useAuth } from '@/hooks/useAuth'
import { supabase } from '@/integrations/supabase/client';
import type {'
  ReferralCode,;
  ReferralStats,;
  Referral,'
  ReferralReward,;
} from '@/types/referrals'
import { logErrorToProduction }  from '@/utils/productionLogger;
export function useReferrals(): ;
  const { _user } = useAuth()';
  const [referralCode, setReferralCode] = useState<ReferralCode | null>(null)'
  const [isLoading, setIsLoading] = useState(true);
  const [referrals, setReferrals] = useState<Referral[]>([]);
  const [rewards, setRewards] = useState<ReferralReward[]>([])'
  const [stats, setStats] = useState<ReferralStats>({;
    totalReferrals: "0"
    pendingReferrals: "0"
    completedReferrals: "0"
    totalRewards: 0,;