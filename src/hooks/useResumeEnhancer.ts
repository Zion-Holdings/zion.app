import { useState } from 'react;
import { supabase } from '@/integrations/supabase/client'
import { logErrorToProduction } from '@/utils/productionLogger;
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

    if (!supabase) throw new Error('Supabase client not initialized');
    try {'
      const { data, error } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {}= await supabase.functions.invoke(;
        'resume-enhancer',;
        {;
          body: {'
            content,;
            enhancementType: type,;';;