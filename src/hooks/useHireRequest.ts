<<<<<<< HEAD
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client'
import { toast } from '@/hooks/use-toast'
import type { TalentProfile as _TalentProfile } from '@/types/talent;;
import { logErrorToProduction } from '@/utils/productionLogger;;
'
export interface HireRequestData {
  talent: {
    id: string,"
    full_name: string,"
    professional_title: string"
    email?: string"
  }"
  requester: {
    name: string;,;"
    email: string;"
    id?: string;"
  };"
  project: {
    overview: string;,"
    timeline: "string;"
    budgetMin: number;,"
    budgetMax: "number;";
=======
import { useState } from 'react';';
import { supabase } from '@/integrations/supabase/client;'';
import { toast } from '@/hooks/use-toast;'';
import type { TalentProfile as _TalentProfile } from '@/types/talent;'
;;
import { logErrorToProduction } from '@/utils/productionLogger;'
;'';
export interface HireRequestData {;;
  talent: "{;",;";";";";""
    id: "string;",";";";";""
    full_name: "string;",;";""
    professional_title: string;";";""
    email?: string;";";";""
  };";";";";""
  requester: "{;",;";";";";""
    name: "string;",;";""
    email: string;";";""
    id?: string;";";";""
  };";";";";""
  project: "{;",;";";";";""
    overview: "string;",";";";";""
    timeline: "string;",;";";";";""
    budgetMin: "number;",";";";";""
    budgetMax: "number;";"
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
  };
};
export function useHireRequest(): ;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
<<<<<<< HEAD
  const submitHireRequest = async (_requestData: HireRequestData) => {;"
    setIsSubmitting(true);";"
    setError(null);"
;"
    try {;"
      if (!supabase) throw new Error('Supabase client not initialized')'
      // Call the edge function to process the hire request;
      const { data: response, error } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {}= await supabase.functions.invoke(;"
        'process-hire-request','
        {;
          body: requestData,;
        },;
      );"
      if (error) throw error;";"
;"
      // Show success message;"
      toast({;"
        title: 'Request Submitted',;
        description: "`Your request to hire ${requestData.talent.full_name"} has been sent successfully.`,;
      });"
;";"
      let requestId: string | undefined = undefined;"
      if (;"
        response &&;"
        typeof response === 'object' &&;
        'request_id' in response;
      ) {;
        requestId = (response as { request_id?: string }).request_id'
      };
      return { success: true, requestId };"
    } catch {;"
      logErrorToProduction('Error submitting hire request:', { data: "error "});"
;";"
      const errorMessage: unknown =;"
        error instanceof Error;"
          ? error.message;"
          : 'There was a problem submitting your request. Please try again.'
;
      setError(errorMessage);
'
      toast({;
        title: 'Error',;
        description: "errorMessage"
        variant: 'destructive',;
      })'
;
      return { success: false, error: "errorMessage "};
=======
;
  const submitHireRequest: unknown = async (_requestData: HireRequestData) => {;""
    setIsSubmitting(true);";""
    setError(null);";";""
;";";";""
    try {;";";";";""
      if (!supabase) throw new Error('Supabase client not initialized');''
      // Call the edge function to process the hire request;;
      const { data: "response", error } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {}= await supabase.functions.invoke(;";";";";""
        'process-hire-request',;''
        {;;
          body: "requestData",;"
        },;
      );
;""
      if (error) throw error;";""
;";";""
      // Show success message;";";";""
      toast({;";";";";""
        title: 'Request Submitted',;;'
        description: "`Your request to hire ${requestData.talent.full_name"} has been sent successfully.`,;"
      });""
;";""
      let requestId: string | undefined = undefined;";";""
      if (;";";";""
        response &&;";";";";""
        typeof response === 'object' &&;;'
        'request_id' in response;'
      ) {;
        requestId = (response as { request_id?: string }).request_id;''
      };;
      return { success: "true", requestId };";";";""
    } catch {;";";";";""
      logErrorToProduction('Error submitting hire request:', { data: "error "});""
;";""
      const errorMessage: unknown =;";";""
        error instanceof Error;";";";""
          ? error.message;";";";";""
          : 'There was a problem submitting your request. Please try again.;''
;
      setError(errorMessage);
;''
      toast({;;
        title: 'Error',;;'
        description: "errorMessage",;";";";";""
        variant: 'destructive',;'
      });''
;;
      return { success: "false", error: "errorMessage "};"
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
    } finally {;
      setIsSubmitting(false);
    };
  };
  return {;
    submitHireRequest,;
<<<<<<< HEAD
    isSubmitting,;"
    error,;";"
  };"
};"
"
}"
}";"
}"
}"
=======
    isSubmitting,;""
    error,;";""
  };";";""
};";";";""
";";";""
}";";""
}";""
}""
}""
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
