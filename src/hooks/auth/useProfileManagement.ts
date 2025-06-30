
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import type { UserDetails } from "@/types/auth";
import {logErrorToProduction} from '@/utils/productionLogger';

export const useProfileManagement = (setIsLoading: (loading: boolean) => void) => {

  const updateProfile = async (data: Partial<UserDetails>) => {
    try {
      setIsLoading(true);

      if (!data.id) {
        return { error: "User ID is required" };
      }

      // Update user metadata
      const { error: authError } = await supabase.auth.updateUser({
        data: {
          display_name: data.displayName,
          user_type: data.userType,
          headline: data.headline,
        },
      });

      if (authError) {
        toast({
          title: "Profile update failed",
          description: authError.message,
          variant: "destructive",
        });
        return { error: authError };
      }

      // Update profiles table
      const { error: profileError } = await supabase
        .from("profiles")
        .update({
          display_name: data.displayName,
          user_type: data.userType,
          avatar_url: data.avatarUrl,
          profile_complete: data.profileComplete,
          updated_at: new Date().toISOString(),
        })
        .eq("id", data.id);

      if (profileError) {
        toast({
          title: "Profile update failed",
          description: profileError.message,
          variant: "destructive",
        });
        return { error: profileError };
      }

      toast({
        title: "Profile updated",
        description: "Your profile has been updated successfully.",
      });

      return { success: true };
    } catch (error: any) {
      logErrorToProduction('Profile update error:', { data: error });
      toast({
        title: "Profile update failed",
        description: error.message || "An unexpected error occurred",
        variant: "destructive",
      });
      return { error };
    } finally {
      setIsLoading(false);
    }
  };

  return { updateProfile };
};
