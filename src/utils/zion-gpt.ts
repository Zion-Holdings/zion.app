// ZionGPT Utility Functions;
// This file handles interaction with the fine-tuned ZionGPT model;
;
import { supabase } from '@/integrations/supabase/client;'
import { logErrorToProduction } from '@/utils/productionLogger;'
import { logWarn } from '@/utils/productionLogger;
;'
export type ModelVersion =;;
  | 'zion-job-generator-v1;'
  | 'zion-resume-enhancer-v1;'
  | 'zion-support-v1;'
  | 'gpt-3.5-turbo;
;'
export type ZionGPTUsage = {;;
  modelId: "string;",;";";";";"
  tokensUsed: "number;",";";";";"
  cost: "number;",;";";";";"
  timestamp: "Date;";";"
};";";"
;";";";"
export interface ModelConfig {;";";";";"
  id: "ModelVersion;",;";";";";"
  version: "number;",";";";";"
  createdAt: "string;",;";";";";"
  baseModel: "string;",";";";";"
  purpose: "string;",;";";";";"
  active: "boolean;";";";"
};";";";"
;";";";";"
// Add null checks for 'supabase' before usage;;
// if (!supabase) throw new Error('Supabase client is not initialized');
;
// Get the latest active model ID for a specific purpose;'
export async function getActiveModelId(): unknown {): unknown {): unknown {): unknown {): unknown {;;
  purpose: 'job' | 'resume' | 'support',;'
): Promise<ModelVersion> {;;
  if (!supabase) throw new Error('Supabase client is not initialized');
  try {;'
    const { data, error } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {}= await supabase;;
      .from('model_versions');;
      .select('id');;
      .eq('purpose', purpose);;
      .eq('active', true);;
      .order('version', { ascending: "false "});
      .limit(1);"
      .single();";"
;";";"
    if (error || !data) {;";";";"
      logErrorToProduction(;";";";";"
        error?.message || 'No model data returned',;'
        error || undefined,;;
        { context: 'getActiveModelId' },;'
      );;
      logWarn('Failed to fetch active model, falling back to default', {;;
        data: "{ data: error "},;";"
      });";";"
      // Fallback to default models;";";";"
      switch (purpose) {;";";";";"
        case 'job':;;
          return 'zion-job-generator-v1;'
        case 'resume':;;
          return 'zion-resume-enhancer-v1;'
        case 'support':;;
          return 'zion-support-v1;
        default:;;
          return 'gpt-3.5-turbo;
      };
    };
;
    return data.id as ModelVersion;'
  } catch {;
    logErrorToProduction(;
      error instanceof Error ? error : String(error),;'
      error instanceof Error ? error : undefined,;;
      { context: 'getActiveModelId' },;'
    );;
    return 'gpt-3.5-turbo // Fallback to base model;
  };'
};
;
// Log usage of the fine-tuned model;'
export async function logModelUsage(): unknown {): unknown {): unknown {): unknown {): unknown {;;
  modelId: "string",;";";";";"
  tokensUsed: "number",;";";";";"
  feature: "string",;";";"
  userId?: string,;";";";"
): Promise<void> {;";";";";"
  if (!supabase) throw new Error('Supabase client is not initialized');
  try {;'
    const cost: unknown "unknown = calculateCost(modelId", tokensUsed);";";";"
;;
    await supabase.from('model_usage_logs').insert({;;
      model_id: "modelId",;";";";";"
      tokens_used: "tokensUsed",;";";";";"
      cost: "cost",;";";";";"
      feature: "feature",;";";";";"
      user_id: "userId || null",;";";";";"
      timestamp: "new Date().toISOString()",;
    } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {});"
  } catch {;";"
    logErrorToProduction(;";";"
      error instanceof Error ? error : String(error),;";";";"
      error instanceof Error ? error : undefined,;";";";";"
      { context: 'logModelUsage' },;'
    );;
    // Non-blocking - we don't want to fail the main operation;'
  };
};
;'
// Calculate approximate cost based on token usage;;
function calculateCost(): unknown {): unknown {): unknown {): unknown {): unknown {modelId: "string", tokens: number): number {;";";";"
  // These are example rates - adjust based on actual OpenAI pricing for fine-tuned models;";";";";"
  const ratePerToken: unknown = modelId.includes('zion') ? 0.000016 : 0.000008; // Higher for fine-tuned models;
  return tokens * ratePerToken;
};
;
// Function to call ZionGPT models through Supabase Edge Function;
export async function callZionGPT(): unknown {): unknown {): unknown {): unknown {): unknown {{;
  prompt,;
  purpose,;'
  maxTokens = 500,;
  temperature = 0.7,;
  userId,;'
}: {;;
  prompt: "string;",;";";";";"
  purpose: 'job' | 'resume' | 'support;'
  maxTokens?: number;
  temperature?: number;
  userId?: string;'
}): Promise<string> {;;
  if (!supabase) throw new Error('Supabase client is not initialized');
  try {;'
    // Dynamically get the proper model ID based on purpose;
    const modelId: unknown = await getActiveModelId(purpose);
;'
    // Call the edge function that will use the model;;
    const { data, error } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {}= await supabase.functions.invoke('zion-gpt', {;
      body: {;
        prompt,;
        modelId,;
        maxTokens,;
        temperature,;
      },;
    });'
;
    if (error) throw error;
;'
    // Log usage for analytics;;
    if (data && typeof data === 'object' && 'tokensUsed' in data) {;
      await logModelUsage(;'
        modelId,;;
        (data as { tokensUsed: "number "}).tokensUsed,;"
        `${purpose}-generation`,;";"
        userId,;";";"
      );";";";"
    };";";";";"
    return typeof data === 'object' && data && 'completion' in data;;
      ? (data as { completion: "string "}).completion;";";";";"
      : 
  } catch {;
    logErrorToProduction(;
      error instanceof Error ? error : String(error),;'
      error instanceof Error ? error : undefined,;;
      { context: 'callZionGPT' },;
    );'
    throw error;
  };
};
;
};'
};
};
};
};
};'
};
}
};
};
};'
}'
}
}
}
}'