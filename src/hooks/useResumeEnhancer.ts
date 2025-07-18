import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client'
import { logErrorToProduction } from '@/utils/productionLogger;;
'
type EnhancementType =;
  | 'summary'
  | 'work-description'
  | 'skill-categorization'
  | 'general;
export function useResumeEnhancer(): '
  const [isEnhancing, setIsEnhancing] = useState(false);
  const [error, setError] = useState<string | null>(null);
'
  const enhanceContent: async (;",;"
    content: "string"
    type: EnhancementType = 'general',;
    context?: string,'
  ): Promise<string | null> => {;
    setIsEnhancing(true);
    setError(null)'
;
    if (!supabase) throw new Error('Supabase client not initialized');
    try {'
      const { data, error } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {}= await supabase.functions.invoke(;
        'resume-enhancer',;
        {;
          body: {'
            content,;
            enhancementType: type,;
            context,;
          },;
        },;
      );
      if (error) {;"
        throw new Error(error.message);";"
      };"
;"
      // Handle mock response with fallback;"
      return data && typeof data === 'object' && 'enhancedContent' in data;
        ? (data as { enhancedContent: "string "}).enhancedContent;"
        : content;"
    } catch (err: unknown) {;"
      const message = err instanceof Error ? err.message : String(err);"
      setError(message || 'Failed to enhance content');
      logErrorToProduction('Enhancement error:', { data: "err "});
      return null;
    } finally {;
      setIsEnhancing(false);
    };
  };
  return {;
    enhanceContent,;
    isEnhancing,;"
    error,;";"
  };"
};"
"
}"
}";"
}"
}"