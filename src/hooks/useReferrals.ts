import { useState, useEffect } from "react";
import { toast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { ReferralCode, ReferralStats, Referral, ReferralReward } from "@/types/referrals";
import {logErrorToProduction} from '@/utils/productionLogger';

export function useReferrals() {

  const { user } = useAuth();
  const [referralCode, setReferralCode] = useState<ReferralCode | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [referrals, setReferrals] = useState<Referral[]>([]);
  const [rewards, setRewards] = useState<ReferralReward[]>([]);
  const [stats, setStats] = useState<ReferralStats>({
    totalReferrals: 0,
    pendingReferrals: 0,
    completedReferrals: 0,
    totalRewards: 0,
  });

  useEffect(() => {
    if (user) {
      fetchReferralCode();
      fetchReferralStats();
      fetchReferrals();
      fetchRewards();
    }
  }, [user]);

  const fetchReferralCode = async () => {
    try {
      setIsLoading(true);
      const { data, error } = await supabase
        .from('referral_codes')
        .select('*')
        .eq('user_id', user?.id)
        .single();

      if (error) {
        logErrorToProduction('Error fetching referral code:', { data: error });
        return;
      }

      setReferralCode(data);
    } catch (error) {
      logErrorToProduction('Error in fetchReferralCode:', { data: error });
    } finally {
      setIsLoading(false);
    }
  };

  const fetchReferrals = async () => {
    try {
      if (!user) return;
      
      const { data, error } = await supabase
        .from('referrals')
        .select('*')
        .eq('referrer_id', user.id)
        .order('created_at', { ascending: false });
        
      if (error) throw error;
      
      setReferrals(data || []);
    } catch (error) {
      logErrorToProduction('Error fetching referrals:', { data: error });
    }
  };

  const fetchRewards = async () => {
    try {
      if (!user) return;
      
      const { data, error } = await supabase
        .from('referral_rewards')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });
        
      if (error) throw error;
      
      setRewards(data || []);
    } catch (error) {
      logErrorToProduction('Error fetching rewards:', { data: error });
    }
  };

  const fetchReferralStats = async () => {
    try {
      if (!user) return;
      
      // Get total referrals
      const { data: referrals, error: refError } = await supabase
        .from('referrals')
        .select('id, status')
        .eq('referrer_id', user.id);
      
      if (refError) throw refError;
      
      // Get rewards
      const { data: rewards, error: rewardsError } = await supabase
        .from('referral_rewards')
        .select('amount')
        .eq('user_id', user.id);
        
      if (rewardsError) throw rewardsError;
      
      // Calculate stats
      const totalReferrals = referrals ? referrals.length : 0;
      const pendingReferrals = referrals ? referrals.filter((r: any) => r.status === 'pending').length : 0;
      const completedReferrals = referrals ? referrals.filter((r: any) => r.status === 'completed').length : 0;
      
      const totalRewards = rewards ? rewards.reduce((sum: number, item: any) => {
        return sum + (item.amount || 0);
      }, 0) : 0;
      
      setStats({
        totalReferrals,
        pendingReferrals,
        completedReferrals,
        totalRewards
      });
      
    } catch (error) {
      logErrorToProduction('Error fetching referral stats:', { data: error });
    }
  };

  const generateReferralCode = async () => {
    try {
      if (!user) {
        toast({
          title: "Authentication required",
          description: "You need to be logged in to generate a referral code",
          variant: "destructive",
        });
        return;
      }

      const { data, error } = await supabase.rpc('generate_referral_code', {
        user_id: user.id
      });

      if (error) throw error;

      toast({
        title: "Success!",
        description: "Your referral code has been generated",
        variant: "success",
      });

      // Refresh the code
      fetchReferralCode();
      
      return data;
    } catch (error: any) {
      logErrorToProduction('Error generating referral code:', { data: error });
      toast({
        title: "Error generating code",
        description: error.message || "There was a problem generating your referral code",
        variant: "destructive",
      });
      return null;
    }
  };

  // Get the referral link for the current user
  const getReferralLink = () => {
    if (!referralCode) return "";
    
    const baseUrl = window.location.origin;
    return `${baseUrl}/?ref=${referralCode.code}`;
  };

  // Copy the referral link to clipboard
  const copyReferralLink = () => {
    const link = getReferralLink();
    if (link) {
      navigator.clipboard.writeText(link);
      toast({
        title: "Copied!",
        description: "Referral link copied to clipboard",
        variant: "success",
      });
    } else {
      toast({
        title: "Cannot copy link",
        description: "Please generate a referral code first",
        variant: "destructive",
      });
    }
  };

  // Share on social media platforms
  const shareOnSocialMedia = (platform: 'twitter' | 'facebook' | 'linkedin') => {
    const link = getReferralLink();
    const text = "Join Zion AI marketplace for AI talent and opportunities!";
    
    if (!link) {
      toast({
        title: "Cannot share",
        description: "Please generate a referral code first",
        variant: "destructive",
      });
      return;
    }
    
    let shareUrl = '';
    
    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(link)}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(link)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(link)}`;
        break;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank');
    }
  };

  return {
    referralCode,
    isLoading,
    stats,
    referrals, // Added this property
    rewards,   // Added this property
    generateReferralCode,
    getReferralLink,
    copyReferralLink,
    shareOnSocialMedia,
    fetchReferralStats,
    fetchReferrals, // Added this method for refreshing referrals
    fetchRewards,   // Added this method for refreshing rewards
  };
}
