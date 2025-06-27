
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { logError } from '@/utils/productionLogger';

export const useSocialAuth = () => {

  const loginWithGoogle = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
      });

      if (error) {
        toast({
          title: "Google login failed",
          description: error.message,
          variant: "destructive",
        });
      }
    } catch (error: any) {
      logError('Google login error:', { data: error });
      toast({
        title: "Google login failed",
        description: error.message || "An unexpected error occurred",
        variant: "destructive",
      });
    }
  };

  const loginWithFacebook = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "facebook",
      });

      if (error) {
        toast({
          title: "Facebook login failed",
          description: error.message,
          variant: "destructive",
        });
      }
    } catch (error: any) {
      logError('Facebook login error:', { data: error });
      toast({
        title: "Facebook login failed",
        description: error.message || "An unexpected error occurred",
        variant: "destructive",
      });
    }
  };

  const loginWithTwitter = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "twitter",
      });

      if (error) {
        toast({
          title: "Twitter login failed",
          description: error.message,
          variant: "destructive",
        });
      }
    } catch (error: any) {
      logError('Twitter login error:', { data: error });
      toast({
        title: "Twitter login failed",
        description: error.message || "An unexpected error occurred",
        variant: "destructive",
      });
    }
  };

  return { loginWithGoogle, loginWithFacebook, loginWithTwitter };
};
