
// Signup checking functionality
import { supabase } from '@/integrations/supabase/client';
import { analyzeEmail } from './analyzeEmail';
import { SignupCheckResult } from './types';
import {logErrorToProduction} from '@/utils/productionLogger';


/**
 * Check for suspicious signup patterns
 */
export const checkSignupPatterns = async (
  email: string, 
  ipAddress?: string
): Promise<SignupCheckResult> => {
  const reasons: string[] = [];
  
  // Check email against suspicious patterns
  const emailCheck = analyzeEmail(email);
  if (emailCheck.isSuspicious) {
    reasons.push(...emailCheck.reasons);
  }
  
  // If IP address is provided, check for rapid signups from same IP
  if (ipAddress) {
    try {
      const { data: recentSignups, error } = await supabase
        .from('profiles')
        .select('created_at')
        .eq('ip_address', ipAddress)
        .gte('created_at', new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString()) // Last 24 hours
        .order('created_at', { ascending: false });
      
      if (!error && recentSignups && recentSignups.length >= 3) {
        reasons.push(`Multiple accounts (${recentSignups.length}) created from same IP in last 24 hours`);
      }
    } catch (error) {
      logErrorToProduction('Error checking signup patterns:', { data: error });
    }
  }
  
  return {
    isSuspicious: reasons.length > 0,
    reasons
  };
};
