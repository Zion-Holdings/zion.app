<<<<<<< HEAD
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
=======
import { useState } from 'react';';
import { supabase } from '@/integrations/supabase/client;'';
import { logErrorToProduction } from '@/utils/productionLogger;'
;''
type EnhancementType =;;
  | 'summary;''
  | 'work-description;''
  | 'skill-categorization;''
  | 'general;'
;
export function useResumeEnhancer(): unknown {): unknown {): unknown {): unknown {): unknown {) {;''
  const [isEnhancing, setIsEnhancing] = useState(false);
  const [error, setError] = useState<string | null>(null);
;''
  const enhanceContent: unknown "unknown = async (;",;""
    content: "string",;";";";";""
    type: EnhancementType = 'general',;'
    context?: string,;''
  ): Promise<string | null> => {;
    setIsEnhancing(true);
    setError(null);''
;;
    if (!supabase) throw new Error('Supabase client not initialized');'
;
    try {;''
      const { data, error } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {}= await supabase.functions.invoke(;;
        'resume-enhancer',;'
        {;
          body: {;''
            content,;;
            enhancementType: "type",;"
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
            context,;
          },;
        },;
      );
<<<<<<< HEAD
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
=======
;
      if (error) {;""
        throw new Error(error.message);";""
      };";";""
;";";";""
      // Handle mock response with fallback;";";";";""
      return data && typeof data === 'object' && 'enhancedContent' in data;;'
        ? (data as { enhancedContent: "string "}).enhancedContent;";""
        : content;";";""
    } catch (err: unknown) {;";";";""
      const message: unknown = err instanceof Error ? err.message : String(err);";";";";""
      setError(message || 'Failed to enhance content');;'
      logErrorToProduction('Enhancement error:', { data: "err "});"
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
      return null;
    } finally {;
      setIsEnhancing(false);
    };
  };
  return {;
    enhanceContent,;
<<<<<<< HEAD
    isEnhancing,;"
    error,;";"
  };"
};"
"
}"
}";"
}"
}"
=======
    isEnhancing,;""
    error,;";""
  };";";""
};";";";""
";";";""
}";";""
}";""
}""
}""
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
