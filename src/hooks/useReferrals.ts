import { useState, useEffect, useCallback } from "react"; // Added useCallback
import { toast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { ReferralCode, ReferralStats, Referral, ReferralReward } from "@/types/referrals";

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

  const fetchReferralCode = useCallback(async () => {
    if (!user?.id) return;
    try {
      // setIsLoading(true); // Handled by the main useEffect
      const { data, error } = await supabase
        .from('referral_codes')
        .select('*')
        .eq('user_id', user.id)
        .single();

      if (error && error.code !== 'PGRST116') { 
        console.error("Error fetching referral code:", error);
        // Not throwing here, allowing other fetches to proceed
      }
      setReferralCode(data || null); // Set to null if no data
    } catch (error) {
      console.error("Error in fetchReferralCode:", error);
    }
  }, [user?.id]);

  const fetchReferrals = useCallback(async () => {
    if (!user?.id) return;
    try {
      const { data, error } = await supabase
        .from('referrals')
        .select('*')
        .eq('referrer_id', user.id)
        .order('created_at', { ascending: false });
        
      if (error) throw error;
      setReferrals(data || []);
    } catch (error) {
      console.error("Error fetching referrals:", error);
    }
  }, [user?.id]);

  const fetchRewards = useCallback(async () => {
    if (!user?.id) return;
    try {
      const { data, error } = await supabase
        .from('referral_rewards')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });
        
      if (error) throw error;
      setRewards(data || []);
    } catch (error) {
      console.error("Error fetching rewards:", error);
    }
  }, [user?.id]);

  const fetchReferralStats = useCallback(async () => {
    if (!user?.id) return;
    try {
      const { data: referralsData, error: refError } = await supabase
        .from('referrals')
        .select('id, status')
        .eq('referrer_id', user.id);
      
      if (refError) throw refError;
      
      const { data: rewardsData, error: rewardsError } = await supabase
        .from('referral_rewards')
        .select('amount')
        .eq('user_id', user.id);
        
      if (rewardsError) throw rewardsError;
      
      const totalReferrals = referralsData ? referralsData.length : 0;
      const pendingReferrals = referralsData ? referralsData.filter(r => r.status === 'pending').length : 0;
      const completedReferrals = referralsData ? referralsData.filter(r => r.status === 'completed').length : 0;
      
      const totalRewards = rewardsData ? rewardsData.reduce((sum, item) => {
        return sum + (item.amount || 0);
      }, 0) : 0;
      
      setStats({
        totalReferrals,
        pendingReferrals,
        completedReferrals,
        totalRewards
      });
      
    } catch (error) {
      console.error("Error fetching referral stats:", error);
    }
  }, [user?.id]);

  useEffect(() => {
    if (user) {
      setIsLoading(true);
      Promise.all([
        fetchReferralCode(),
        fetchReferralStats(),
        fetchReferrals(),
        fetchRewards()
      ]).finally(() => setIsLoading(false));
    } else {
      setReferralCode(null);
      setStats({ totalReferrals: 0, pendingReferrals: 0, completedReferrals: 0, totalRewards: 0 });
      setReferrals([]);
      setRewards([]);
      setIsLoading(false);
    }
  }, [user, fetchReferralCode, fetchReferralStats, fetchReferrals, fetchRewards]);


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
        p_user_id: user.id 
      });

      if (error) throw error;

      toast({
        title: "Success!",
        description: "Your referral code has been generated",
        variant: "success",
      });

      await fetchReferralCode(); 
      
      return data;
    } catch (error: any) {
      console.error("Error generating referral code:", error);
      toast({
        title: "Error generating code",
        description: error.message || "There was a problem generating your referral code",
        variant: "destructive",
      });
    }
  };

  const getReferralLink = useCallback(() => { // Wrapped in useCallback
    if (!referralCode?.code) return ""; // Check referralCode.code
    
    const baseUrl = typeof window !== "undefined" ? window.location.origin : "";
    return `${baseUrl}/?ref=${referralCode.code}`;
  }, [referralCode?.code]); // Dependency on referralCode.code

  const copyReferralLink = useCallback(() => { // Wrapped in useCallback
    const link = getReferralLink();
    if (link && typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(link);
      toast({
        title: "Copied!",
        description: "Referral link copied to clipboard",
        variant: "success",
      });
    } else {
      toast({
        title: "Cannot copy link",
        description: referralCode ? "Clipboard API not available." : "Please generate a referral code first",
        variant: "destructive",
      });
    }
  }, [getReferralLink, referralCode]); // Dependencies

  const shareOnSocialMedia = useCallback((platform: 'twitter' | 'facebook' | 'linkedin') => { // Wrapped
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
    
    if (shareUrl && typeof window !== "undefined") {
      window.open(shareUrl, '_blank');
    }
  }, [getReferralLink]); // Dependency

  return {
    referralCode,
    isLoading,
    stats,
    referrals, 
    rewards,   
    generateReferralCode,
    getReferralLink,
    copyReferralLink,
    shareOnSocialMedia,
    fetchReferralStats, 
    fetchReferrals,   
    fetchRewards,
    fetchReferralCode, 
  };
}
