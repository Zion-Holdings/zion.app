
import { useState, useCallback } from 'react';
import { checkSignupPatterns } from '@/services/fraud/signupCheck';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';

export function useFraudPreventionSignup() {

  const [isCheckingFraud, setIsCheckingFraud] = useState(false);
  
  // Get the user's IP address (in a real app, you'd do this server-side)
  const getIP = async (): Promise<string | undefined> => {
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      return data.ip;
    } catch (error) {
      logErrorToProduction('Error getting IP:', { data: error });
      return undefined;
    }
  };
  
  // Check if the signup attempt might be fraudulent
  const checkFraudBeforeSignup = useCallback(async (email: string): Promise<boolean> => {
    setIsCheckingFraud(true);
    try {
      const ipAddress = await getIP();
      
      // Check for suspicious patterns
      const fraudCheck = await checkSignupPatterns(email, ipAddress);
      
      if (fraudCheck.isSuspicious) {
        logInfo('Suspicious signup detected:', { data: fraudCheck.reasons });
        
        // Create a fraud flag for admin review
        const { error } = await supabase.from('fraud_flags').insert({
          user_email: email,
          content_type: 'signup',
          content_id: email, // Using email as content ID for signup attempts
          content_excerpt: `Signup attempt for ${email}`,
          severity: 'suspicious',
          reason: fraudCheck.reasons.join('; '),
          ip_address: ipAddress,
          timestamp: new Date().toISOString(),
          status: 'pending'
        });
        
        if (error) {
          logErrorToProduction('Error creating fraud flag:', { data: error });
        }
        
        // Depending on how strict we want to be, we could block the signup
        // If the check is very suspicious, block the signup
        if (fraudCheck.reasons.some(r => 
          r.includes('Multiple accounts') || 
          r.includes('suspicious email domain')
        )) {
          toast({
            title: "Signup blocked",
            description: "This signup attempt has been flagged for security reasons. Please contact support if you believe this is an error.",
            variant: "destructive",
          });
          return false;
        }
        
        // Otherwise, allow but flag for review
        return true;
      }
      
      // No suspicious patterns found
      return true;
    } catch (error) {
      logErrorToProduction('Error in fraud check:', { data: error });
      // On error, allow the signup but log the error
      return true;
    } finally {
      setIsCheckingFraud(false);
    }
  }, []);
  
  return {
    isCheckingFraud,
    checkFraudBeforeSignup,
  };
}
