import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';
import {logErrorToProduction} from '@/utils/productionLogger';


type EnhancementType = 
  | 'resume-summary' 
  | 'work-description' 
  | 'job-post' 
  | 'proposal' 
  | 'general';

export interface AIEnhancementOptions {
  enhancementType: EnhancementType;
  content?: string;
  context?: string;
  instructions?: string;
}

export function useAIContentEnhancer() {
  const [isEnhancing, setIsEnhancing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const enhanceContent = async ({
    enhancementType,
    content = '',
    context = '',
    instructions = ''
  }: AIEnhancementOptions): Promise<string | null> => {
    setIsEnhancing(true);
    setError(null);
    
    try {
      const { data, error } = await supabase.functions.invoke('ai-content-enhancer', {
        body: { 
          content,
          enhancementType,
          context,
          instructions
        }
      });
      
      if (error) {
        throw new Error(error.message);
      }
      
      // Handle mock response with fallback
      return data ? (data as any).enhancedContent : content;
    } catch (err: any) {
      const errorMessage = err.message || 'Failed to enhance content';
      setError(errorMessage);
      toast({
        title: "AI Enhancement Failed",
        description: errorMessage,
        variant: "destructive"
      });
      logErrorToProduction('Enhancement error:', { data: err });
      return null;
    } finally {
      setIsEnhancing(false);
    }
  };
  
  return {
    enhanceContent,
    isEnhancing,
    error
  };
}
