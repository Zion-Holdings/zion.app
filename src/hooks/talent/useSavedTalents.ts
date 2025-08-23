import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { TalentProfile } from "@/types/talent";
import { toast } from "@/hooks/use-toast";
import { showApiError } from "@/utils/apiErrorHandler";
import { useAuthStatus } from "@/hooks/talent";
import { useRouter } from 'next/router';
import {logErrorToProduction} from '@/utils/productionLogger';

export function useSavedTalents() {

  const { isAuthenticated, userDetails } = useAuthStatus();
  const [savedTalents, setSavedTalents] = useState<TalentProfile[]>([]);
  const [savedTalentIds, setSavedTalentIds] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  // Fetch saved talents
  useEffect(() => {
    const fetchSavedTalents = async () => {
      if (!isAuthenticated || !userDetails.id) {
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      
      try {
        // Get saved talent IDs
        const { data: savedData, error: savedError } = await supabase
          .from('saved_talents')
          .select('talent_id')
          .eq('user_id', userDetails.id);
          
        if (savedError) throw savedError;

        if (savedData) {
          const talentIds = savedData.map((item: any) => item.talent_id);
          setSavedTalentIds(talentIds);
          
          if (talentIds.length > 0) {
            // Fetch full talent profiles for saved talents
            const { data: talentData, error: talentError } = await supabase
              .from('talent_profiles')
              .select('*')
              .in('id', talentIds);
              
            if (talentError) throw talentError;
            
            setSavedTalents(talentData || []);
          } else {
            setSavedTalents([]);
          }
        }
      } catch (error) {
        logErrorToProduction('Error fetching saved talents:', { data: error });
        showApiError(
          error,
          'There was a problem loading your saved talents.',
          fetchSavedTalents // Pass self as retry callback
        );
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchSavedTalents();
  }, [isAuthenticated, userDetails.id]);

  // Toggle save talent
  const toggleSaveTalent = async (talent: TalentProfile) => {
    if (!isAuthenticated || !userDetails.id || !talent.id) {
      toast({
        title: "Authentication required",
        description: "Please log in to save talents to your favorites",
        variant: "destructive"
      });
      const returnTo = encodeURIComponent(router.asPath);
      router.push(`/auth/login?returnTo=${returnTo}`);
      return;
    }
    
    const isSaved = savedTalentIds.includes(talent.id);
    
    try {
      if (isSaved) {
        // Remove from saved_talents
        const { error } = await supabase
          .from('saved_talents')
          .delete()
          .eq('user_id', userDetails.id)
          .eq('talent_id', talent.id);
          
        if (error) throw error;
        
        setSavedTalents(prev => prev.filter(t => t.id !== talent.id));
        setSavedTalentIds(prev => prev.filter(id => id !== talent.id));
        
        toast({
          title: "Removed from favorites",
          description: `${talent.full_name} has been removed from your favorites`,
        });
      } else {
        // Add to saved_talents
        const { error } = await supabase
          .from('saved_talents')
          .insert({
            user_id: userDetails.id,
            talent_id: talent.id,
          });
          
        if (error) throw error;
        
        setSavedTalents(prev => [...prev, talent]);
        setSavedTalentIds(prev => [...prev, talent.id]);
        
        toast({
          title: "Added to favorites",
          description: `${talent.full_name} has been added to your favorites`,
        });
      }
    } catch (error) {
      logErrorToProduction('Error toggling saved talent:', { data: error });
      showApiError(
        error,
        'There was a problem updating your favorites. Please try again.',
        () => toggleSaveTalent(talent) // Pass a function that calls toggleSaveTalent with the current talent
      );
    }
  };

  // Check if talent is saved
  const isTalentSaved = (talentId: string) => {
    return savedTalentIds.includes(talentId);
  };

  return {
    savedTalents,
    savedTalentIds,
    isLoading,
    toggleSaveTalent,
    isTalentSaved
  };
}
