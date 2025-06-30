
import { supabase } from "@/integrations/supabase/client";
import { cleanupAuthState } from "@/utils/authUtils";
import type { UserDetails } from "@/types/auth";
import { logWarn, logErrorToProduction } from '@/utils/productionLogger';

export const useLogout = (setUser: (user: UserDetails | null) => void) => {

  const logout = async () => {
    try {
      // Clean up existing auth state
      cleanupAuthState();

      // Sign out
      await supabase.auth.signOut({ scope: 'global' });

      // Inform backend to clear authToken cookie
      try {
        await fetch('/api/auth/logout', { method: 'POST' });
      } catch (cookieErr) {
        logWarn('useLogout: Failed to clear auth cookie', { data: cookieErr });
      }

      // Update state
      setUser(null);
    } catch (error) {
      logErrorToProduction('Error during logout:', { data: error });
    }
  };

  return { logout };
};
