import { useState, useEffect } from "react";
import { Heart } from '@/components/ui/icons';
import { SEO } from "@/components/SEO";
import { TalentCard } from "@/components/talent/TalentCard";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import type { TalentProfile } from "@/types/talent";
import { toast } from "@/components/ui/use-toast";
import { useRouter } from 'next/router';
import { logErrorToProduction } from '@/utils/productionLogger';
import { EmptyState } from "@/components/ui/empty-state";


import { logInfo, logWarn } from '@/utils/productionLogger';

export default function SavedTalentsPage() {

  const { _user } = useAuth();
  const [savedTalents, setSavedTalents] = useState<TalentProfile[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  // Using router.asPath instead of useLocation

  useEffect(() => {
    if (!user) {
      router.push(`/auth/login?returnTo=${encodeURIComponent(router.asPath)}`);
    }
  }, [user, router]);

  useEffect(() => {
    const fetchSavedTalents = async () => {
      setIsLoading(true);
      try {
        if (!user) {
          logWarn("User not authenticated.");
          return;
        }

        if (!supabase) throw new Error('Supabase client is not initialized');
        const { data, error } = await supabase
          .from("saved_talents")
          .select(
            `
            talent_profile (
              id,
              user_id,
              full_name,
              professional_title,
              profile_picture_url,
              hourly_rate,
              bio,
              years_experience,
              key_projects,
              skills,
              location,
              availability,
              is_verified
            )
          `
          )
          .eq("user_id", user.id);

        if (error) {
          throw error;
        }

        if (data) {
          // Extract talent profiles and convert to TalentProfile type.
          // Use an empty array as fallback to avoid runtime errors
          const savedTalentItems = data as unknown as { talent_profile: TalentProfile }[];
          const talentProfiles = savedTalentItems.map((item: unknown) => (item as { talent_profile: TalentProfile }).talent_profile);
          setSavedTalents(talentProfiles);
        }
      } catch {
        logErrorToProduction(error instanceof Error ? error : String(error), error instanceof Error ? error : undefined, { message: 'Error fetching saved talents' });
        toast({
          title: "Error",
          description: "Failed to load saved talents. Please try again later.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchSavedTalents();
  }, [user]);

  const handleViewProfile = (talentId: string) => {
    router.push(`/talent/${talentId}`);
  };

  const handleRequestHire = (talent: TalentProfile) => {
    logInfo('Request to hire:', { data:  { data: talent } });
    toast({
      title: "Hire Request Sent",
      description: `A hire request has been sent to ${talent.full_name}.`,
    });
  };

  const _handleToggleSave = undefined; // Unused async (talentId: string, _isCurrentlySaved: boolean) => {
    try {
      if (!user) {
        logWarn("User not authenticated.");
        return;
      }
  
      if (isCurrentlySaved) {
        if (!supabase) throw new Error('Supabase client is not initialized');
        // Remove from saved talents
        const { _error } = await supabase
          .from('saved_talents')
          .delete()
          .eq('user_id', user.id)
          .eq('talent_id', talentId);
  
        if (error) {
          throw error;
        }
  
        setSavedTalents(prevTalents =>
          prevTalents.filter(talent => talent.id !== talentId)
        );
        toast({
          title: "Talent Removed",
          description: "Talent removed from saved list.",
        });
      } else {
        if (!supabase) throw new Error('Supabase client is not initialized');
        // Add to saved talents
        const { _error } = await supabase
          .from('saved_talents')
          .insert([{ user_id: user.id, talent_id: talentId }]);
  
        if (error) {
          throw error;
        }
  
        // Fetch the updated talent profile and add it to the list
        if (!supabase) throw new Error('Supabase client is not initialized');
        const { data: talentData, error: talentError } = await supabase
          .from('talent_profiles')
          .select('*')
          .eq('id', talentId)
          .single();
  
        if (talentError) {
          logErrorToProduction(talentError instanceof Error ? talentError.message : String(talentError), talentError instanceof Error ? talentError : undefined, { message: 'Error fetching talent profile' });
          toast({
            title: "Error",
            description: "Failed to update saved talents. Please try again later.",
            variant: "destructive",
          });
          return;
        }
  
        if (talentData) {
          setSavedTalents(prevTalents => [...prevTalents, talentData as unknown as TalentProfile]);
          toast({
            title: "Talent Saved",
            description: "Talent saved to your list.",
          });
        }
      }
    } catch {
      logErrorToProduction(error instanceof Error ? error : String(error), error instanceof Error ? error : undefined, { message: 'Error toggling saved talent' });
      toast({
        title: "Error",
        description: "Failed to update saved talents. Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <>
      <SEO
        title="Saved Talents | Zion AI Marketplace"
        description="View and manage your saved talents in the Zion AI Marketplace"
      />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Saved Talents</h1>
        <p className="text-muted-foreground">
          Here are the talents you've saved for future reference.
        </p>
        
        {isLoading ? (
          <div className="text-center py-8">Loading saved talents...</div>
        ) : savedTalents.length === 0 ? (
          <div className="py-8">
            <EmptyState
              icon={<Heart className="h-8 w-8" />}
              title="No Saved Talents"
              description="You haven't saved any talents yet."
              action={{ text: 'Browse Talent', href: '/talent' }}
              className="border-none bg-transparent text-center"
            />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {savedTalents.map((talent) => (
              <TalentCard
                key={talent.id}
                talent={talent}
                onViewProfile={handleViewProfile}
                onRequestHire={handleRequestHire}
                isAuthenticated={!!user}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
