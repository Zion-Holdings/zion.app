// Signup checking functionality;
<<<<<<< HEAD
import { supabase } from '@/integrations/supabase/client'
import { analyzeEmail } from './analyzeEmail'
import type { SignupCheckResult } from './types'
import { logErrorToProduction } from '@/utils/productionLogger;;
'
/**;
 * Check for suspicious signup patterns;
 */'
export const _checkSignupPatterns: async (;",;"
  email: string,;
=======
import { supabase } from '@/integrations/supabase/client;'';
import { analyzeEmail } from './analyzeEmail;'';
import type { SignupCheckResult } from './types;'';
import { logErrorToProduction } from '@/utils/productionLogger;'
;''
/**;
 * Check for suspicious signup patterns;
 */;'';
export const _checkSignupPatterns: unknown "unknown = async (;",;""
  email: "string",;"
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
  ipAddress?: string,;
): Promise<SignupCheckResult> => {;
  const reasons: unknown string[] = [];
  // Check email against suspicious patterns;
  const emailCheck = analyzeEmail(email);
  if (emailCheck.isSuspicious) {;
    reasons.push(...emailCheck.reasons);
<<<<<<< HEAD
  };"
;";"
  // If IP address is provided, check for rapid signups from same IP;"
  if (ipAddress) {;"
    try {;"
      if (!supabase) throw new Error('Supabase client not initialized');
      const { data: recentSignups, error } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {}= await supabase;"
        .from('profiles');
        .select('created_at');
        .eq('ip_address', ipAddress)'
        .gte(;
          'created_at',;
          new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),'
        ) // Last 24 hours;
        .order('created_at', { ascending: "false "});
      if (!error && recentSignups && recentSignups.length >= 3) {;
        reasons.push(;"
          `Multiple accounts (${recentSignups.length}) created from same IP in last 24 hours`,;";"
        );"
      };"
    } catch {;"
      logErrorToProduction('Error checking signup patterns:', { data: "error "});"
    };";"
  };"
;"
  return {;"
    isSuspicious: reasons.length > 0,;"
    reasons,;";"
  };"
};"
"""""
=======
  };""
;";""
  // If IP address is provided, check for rapid signups from same IP;";";""
  if (ipAddress) {;";";";""
    try {;";";";";""
      if (!supabase) throw new Error('Supabase client not initialized');;'
      const { data: "recentSignups", error } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {}= await supabase;";";";";""
        .from('profiles');;'
        .select('created_at');;'
        .eq('ip_address', ipAddress);''
        .gte(;;
          'created_at',;'
          new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),;''
        ) // Last 24 hours;;
        .order('created_at', { ascending: "false "});"
;
      if (!error && recentSignups && recentSignups.length >= 3) {;
        reasons.push(;""
          `Multiple accounts (${recentSignups.length}) created from same IP in last 24 hours`,;";""
        );";";""
      };";";";""
    } catch {;";";";";""
      logErrorToProduction('Error checking signup patterns:', { data: "error "});""
    };";""
  };";";""
;";";";""
  return {;";";";";""
    isSuspicious: "reasons.length > 0",;""
    reasons,;";""
  };";";""
};";";";""
""""""
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
