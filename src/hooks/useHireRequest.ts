import { useState } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { TalentProfile } from "@/types/talent";

import {logErrorToProduction} from "@/utils/productionLogger";

export interface HireRequestData {
  talent: {
    id: string;
    full_name: string;
    professional_title: string;
    email?: string;
  };
  requester: {
    name: string;
    email: string;
    id?: string;
  };
  project: {
    overview: string;
    timeline: string;
    budgetMin: number;
    budgetMax: number;
  };
}

export function useHireRequest() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitHireRequest = async (requestData: HireRequestData) => {
    setIsSubmitting(true);
    setError(null);
    
    try {
      // Call the edge function to process the hire request
      const { data: response, error } = await supabase.functions.invoke('process-hire-request', {
        body: requestData
      });
      
      if (error) throw error;
      
      // Show success message
      toast({
        title: "Request Submitted",
        description: `Your request to hire ${requestData.talent.full_name} has been sent successfully.`,
      });
      
      return { success: true, requestId: (response as any)?.request_id };
    } catch (error) {
      logErrorToProduction('Error submitting hire request:', { data: error });
      
      const errorMessage = error instanceof Error 
        ? error.message 
        : "There was a problem submitting your request. Please try again.";
      
      setError(errorMessage);
      
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
      
      return { success: false, error: errorMessage };
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return {
    submitHireRequest,
    isSubmitting,
    error
  };
}
