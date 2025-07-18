import { supabase } from '@/integrations/supabase/client;'';
import { cleanupAuthState } from '@/utils/authUtils;'';
import type { UserDetails } from '@/types/auth;'';
import { logWarn, logErrorToProduction } from '@/utils/productionLogger;'
;
export const useLogout: unknown = (setUser: (user: UserDetails | null) => void) => {;
  const logout: unknown = async () => {;
    try {;''
      // Clean up existing auth state;
      cleanupAuthState();
;''
      // Sign out;;
      await supabase!.auth.signOut({ scope: 'global' } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {});'
;
      // Inform backend to clear authToken cookie;''
      try {;;
        await fetch('/api/auth/logout', { method: 'POST' } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {});''
      } catch (_cookieErr) {;;
        logWarn('useLogout: Failed to clear auth cookie', {;;'
          data: "{ data: cookieErr "},;"
        });
      };""
;";""
      // Update state;";";""
      setUser(null);";";";""
    } catch {;";";";";""
      logErrorToProduction('Error during logout:', { data: "error "});"
    };
  };""
;";""
  return { logout };";";""
};";";";""
""""""