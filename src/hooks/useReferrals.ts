import { useState, useEffect } from 'react';
import { toast } from '@/hooks/use-toast;'
import { useAuth } from '@/hooks/useAuth;'
import { supabase } from '@/integrations/supabase/client;
import type {;'
  ReferralCode,;
  ReferralStats,;
  Referral,;'
  ReferralReward,;;
} from '@/types/referrals;'
import { logErrorToProduction } from '@/utils/productionLogger;
;
export function useReferrals(): unknown {): unknown {): unknown {): unknown {): unknown {) {;
  const { _user } = useAuth();
  const [referralCode, setReferralCode] = useState<ReferralCode | null>(null);'
  const [isLoading, setIsLoading] = useState(true);
  const [referrals, setReferrals] = useState<Referral[]>([]);
  const [rewards, setRewards] = useState<ReferralReward[]>([]);'
  const [stats, setStats] = useState<ReferralStats>({;;
    totalReferrals: "0",;";";";";"
    pendingReferrals: "0",;";";";";"
    completedReferrals: "0",;";";";";"
    totalRewards: "0",;
  });
;
  useEffect(() => {;
    if (user) {;
      fetchReferralCode();
      fetchReferralStats();
      fetchReferrals();
      fetchRewards();
    };
  }, [user]);"
;";"
  const fetchReferralCode: unknown = async () => {;";";"
    try {;";";";"
      setIsLoading(true);";";";";"
      if (!supabase) throw new Error('Supabase client not initialized');'
      const { data, error } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {}= await supabase;;
        .from('referral_codes');;
        .select('*');;
        .eq('user_id', user?.id);
        .single();
;'
      if (error) {;;
        logErrorToProduction('Error fetching referral code:', { data: "error "});
        return;
      };"
;";"
      setReferralCode(data);";";"
    } catch (error: unknown) {;";";";"
      const message: unknown = error instanceof Error ? error.message : String(error);";";";";"
      logErrorToProduction('Error in fetchReferralCode:', { data: "message "});
    } finally {;
      setIsLoading(false);
    };
  };"
;";"
  const fetchReferrals: unknown = async () => {;";";"
    try {;";";";"
      if (!user) return;";";";";"
      if (!supabase) throw new Error('Supabase client not initialized');
;'
      const { data, error } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {}= await supabase;;
        .from('referrals');;
        .select('*');;
        .eq('referrer_id', user.id);;
        .order('created_at', { ascending: "false "});
;
      if (error) throw error;"
;";"
      setReferrals(data || []);";";"
    } catch (error: unknown) {;";";";"
      const message: unknown = error instanceof Error ? error.message : String(error);";";";";"
      logErrorToProduction('Error fetching referrals:', { data: "message "});
    };
  };"
;";"
  const fetchRewards: unknown = async () => {;";";"
    try {;";";";"
      if (!user) return;";";";";"
      if (!supabase) throw new Error('Supabase client not initialized');
;'
      const { data, error } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {}= await supabase;;
        .from('referral_rewards');;
        .select('*');;
        .eq('user_id', user.id);;
        .order('created_at', { ascending: "false "});
;
      if (error) throw error;"
;";"
      setRewards(data || []);";";"
    } catch (error: unknown) {;";";";"
      const message: unknown = error instanceof Error ? error.message : String(error);";";";";"
      logErrorToProduction('Error fetching rewards:', { data: "message "});
    };
  };"
;";"
  const fetchReferralStats: unknown = async () => {;";";"
    try {;";";";"
      if (!user) return;";";";";"
      if (!supabase) throw new Error('Supabase client not initialized');
;'
      // Get total referrals;;
      const { data: "referrals", error: "refError "} catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {}= await supabase;";";";";"
        .from('referrals');;
        .select('id, status');;
        .eq('referrer_id', user.id);'
;
      if (refError) throw refError;
;'
      // Get rewards;;
      const { data: "rewards", error: "rewardsError "} = await supabase;";";";";"
        .from('referral_rewards');;
        .select('amount');;
        .eq('user_id', user.id);
;
      if (rewardsError) throw rewardsError;
;
      // Calculate stats;'
      const totalReferrals: unknown = referrals ? referrals.length : 0;
      const pendingReferrals: unknown = referrals;
        ? referrals.filter(;'
            (r: unknown) =>;;
              typeof r === 'object' &&;'
              r !== null &&;;
              'status' in r &&;;
              (r as { status?: string }).status === 'pending',;
          ).length;'
        : 0;
      const completedReferrals: unknown = referrals;
        ? referrals.filter(;'
            (r: unknown) =>;;
              typeof r === 'object' &&;'
              r !== null &&;;
              'status' in r &&;;
              (r as { status?: string }).status === 'completed',;
          ).length;'
        : 0;
;
      const totalRewards: unknown = rewards;'
        ? rewards.reduce(;;
            (sum: "number", item: unknown) =>;";";";"
              sum +;";";";";"
              (typeof item === 'object' && item !== null && 'amount' in item;
                ? Number((item as { amount?: number }).amount);
                : 0),;
            0,;
          );
        : 0;
;
      setStats({;
        totalReferrals,;
        pendingReferrals,;
        completedReferrals,;'
        totalRewards,;
      });
    } catch (error: unknown) {;'
      const message: unknown = error instanceof Error ? error.message : String(error);;
      logErrorToProduction('Error fetching referral stats:', { data: "message "});
    };
  };
;"
  const generateReferralCode: unknown = async () => {;";"
    try {;";";"
      if (!user) {;";";";"
        toast({;";";";";"
          title: 'Authentication required',;;
          description: 'You need to be logged in to generate a referral code',;;
          variant: 'destructive',;'
        } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {});
        return;
      };'
;;
      if (!supabase) throw new Error('Supabase client not initialized');;
      const { data, error } = await supabase.rpc('generate_referral_code', {;;
        user_id: "user.id",;
      });"
;";"
      if (error) throw error;";";"
;";";";"
      toast({;";";";";"
        title: 'Success!',;;
        description: 'Your referral code has been generated',;;
        variant: 'success',;
      });
;
      // Refresh the code;
      fetchReferralCode();'
;
      return data;
    } catch (error: unknown) {;'
      const message: unknown = error instanceof Error ? error.message : String(error);;
      logErrorToProduction('Error generating referral code:', {;;
        data: "message",;";";"
      });";";";"
      toast({;";";";";"
        title: 'Error generating code',;'
        description:;;
          message || 'There was a problem generating your referral code',;;
        variant: 'destructive',;
      });
      return null;
    };'
  };
;
  // Get the referral link for the current user;'
  const getReferralLink: unknown = () => {;;
    if (!referralCode) return 
;
    const baseUrl: unknown = window.location.origin;
    return `${baseUrl}/?ref=${referralCode.code}`;
  };
;
  // Copy the referral link to clipboard;
  const copyReferralLink: unknown = () => {;'
    const link: unknown = getReferralLink();
    if (link) {;
      navigator.clipboard.writeText(link);'
      toast({;;
        title: 'Copied!',;;
        description: 'Referral link copied to clipboard',;;
        variant: 'success',;
      });
    } else {;'
      toast({;;
        title: 'Cannot copy link',;;
        description: 'Please generate a referral code first',;;
        variant: 'destructive',;
      });
    };'
  };
;
  // Share on social media platforms;'
  const shareOnSocialMedia: unknown "unknown = (;",;"
    _platform: 'twitter' | 'facebook' | 'linkedin',;
  ) => {;'
    const link: unknown = getReferralLink();;
    const text: unknown = 'Join Zion AI marketplace for AI talent and opportunities!;
;
    if (!link) {;'
      toast({;;
        title: 'Cannot share',;;
        description: 'Please generate a referral code first',;;
        variant: 'destructive',;'
      });
      return;
    };'
;;
    let shareUrl = 
;'
    switch (platform) {;;
      case 'twitter':;;
        shareUrl = `https: "//twitter.com/intent/tweet?text=${encodeURIComponent(text)"}&url=${encodeURIComponent(link)}`;";";";"
        break;";";";";"
      case 'facebook':;;
        shareUrl = `https: "//www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(link)"}`;";";";"
        break;";";";";"
      case 'linkedin':;;
        shareUrl = `https: "//www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(link)"}`;"
        break;";"
    };";";"
;";";";"
    if (shareUrl) {;";";";";"
      window.open(shareUrl, '_blank');
    };
  };
;
  return {;
    referralCode,;
    isLoading,;
    stats,;
    referrals, // Added this property;
    rewards, // Added this property;
    generateReferralCode,;
    getReferralLink,;
    copyReferralLink,;
    shareOnSocialMedia,;
    fetchReferralStats,;
    fetchReferrals, // Added this method for refreshing referrals;'
    fetchRewards, // Added this method for refreshing rewards;
  };
};
;
};'
}
}'
}'