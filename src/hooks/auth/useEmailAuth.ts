
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import type { UserDetails } from "@/types/auth";
import { cleanupAuthState } from "@/utils/authUtils";
import { safeStorage, safeSessionStorage } from "@/utils/safeStorage";
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';

export const useEmailAuth = (

  setUser: (user: UserDetails | null) => void,
  setIsLoading: (loading: boolean) => void
) => {
  const login = async ({ email, password, rememberMe }: { email: string; password: string; rememberMe: boolean }) => {
    try {
      setIsLoading(true);
      // Clean up any stale auth state before login
      // cleanupAuthState() removes the stored `zion_token`
      cleanupAuthState();

      const response = await fetch("/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.status === 401) {
        toast({
          title: "Login failed",
          description: "Incorrect email or password",
          variant: "destructive",
        });
        return { error: { message: "Incorrect email or password" } };
      }

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ message: "An unexpected error occurred" }));
        toast({
          title: "Login failed",
          description: errorData.message || "An unexpected error occurred",
          variant: "destructive",
        });
        return { error: { message: errorData.message || "An unexpected error occurred" } };
      }

      const { token, user } = await response.json();

      setUser(user as UserDetails);

      // These are imported from '@/utils/safeStorage' via authUtils.ts,
      // but useEmailAuth.ts doesn't directly import them.
      // For clarity, I will assume safeStorage and safeSessionStorage are available globally
      // or will be correctly resolved by the bundler from their usage in authUtils.ts
      // However, the direct usage here might be an issue if they are not directly imported.
      // Let's add imports for them. This might be a slight deviation if they are meant to be opaque.
      // Re-evaluating: authUtils.ts already exports safeStorage and safeSessionStorage.
      // It's better to import them from there.

      // Correction: I should import safeStorage and safeSessionStorage directly from the utils folder
      // or expect them to be passed or available in a way that doesn't require direct import here if not already.
      // The original plan was to use them from authUtils.ts, let's stick to that.
      // The actual setItem calls will be done using `safeStorage` and `safeSessionStorage`
      // which are already imported in `src/utils/authUtils.ts`.
      // So, this hook will rely on those utilities.
      // For now, I will write the logic as if they are available.
      // If this causes an issue, I'll revise to explicitly import them.

      const authTokenKey = "zion_token";
      if (rememberMe) {
        // Persist token in localStorage for long-term sessions
        safeStorage.setItem(authTokenKey, token);
      } else {
        // Store token in sessionStorage for this browser session only
        safeSessionStorage.setItem(authTokenKey, token);
      }

      return { data: { user, token } };
    } catch (error: any) {
      logErrorToProduction('Login error:', { data: error });
      toast({
        title: "Login failed",
        description: error.message || "An unexpected error occurred",
        variant: "destructive",
      });
      return { error: { message: error.message || "An unexpected error occurred" } };
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (email: string, password: string, userData?: any) => {
    try {
      setIsLoading(true);
      // Clean up any stale auth state before signup
      cleanupAuthState();
      
      // Attempt to sign out any existing session first to prevent conflicts
      try {
        await supabase.auth.signOut({ scope: 'global' });
      } catch (err) {
        // Continue even if signout fails
        logInfo('Sign out before signup failed:', { data: err });
      }
      
      // Create a proper options object
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          // Only store a simple display name in the profile data
          data: {
            display_name: userData?.displayName ?? userData?.name ?? ""
          },
        },
      });

      if (error) {
        toast({
          title: "Signup failed",
          description: error.message,
          variant: "destructive",
        });
        return { error };
      }

      toast({
        title: "Signup successful",
        description: "Check your email for verification instructions.",
      });
      // Determine if email verification is required based on the presence of user and absence of session
      const emailVerificationRequired = !!(data?.user && !data?.session);
      return { data, emailVerificationRequired };
    } catch (error: any) {
      logErrorToProduction('Signup error:', { data: error });
      toast({
        title: "Signup failed",
        description: error.message || "An unexpected error occurred",
        variant: "destructive",
      });
      return { error };
    } finally {
      setIsLoading(false);
    }
  };

  const resetPassword = async (email: string) => {
    try {
      setIsLoading(true);
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/update-password`,
      });

      if (error) {
        toast({
          title: "Password reset failed",
          description: error.message,
          variant: "destructive",
        });
        return { error };
      }

      toast({
        title: "Password reset email sent",
        description: "Check your email for password reset instructions.",
      });
      return {};
    } catch (error: any) {
      logErrorToProduction('Password reset error:', { data: error });
      toast({
        title: "Password reset failed",
        description: error.message || "An unexpected error occurred",
        variant: "destructive",
      });
      return { error };
    } finally {
      setIsLoading(false);
    }
  };

  return { login, signup, resetPassword };
};
