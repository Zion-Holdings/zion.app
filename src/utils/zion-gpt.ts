
// ZionGPT Utility Functions
// This file handles interaction with the fine-tuned ZionGPT model

import { supabase } from '@/integrations/supabase/client';
import { logErrorToProduction } from '@/utils/productionLogger';
import { logWarn } from '@/utils/productionLogger';

export type ModelVersion = 'zion-job-generator-v1' | 'zion-resume-enhancer-v1' | 'zion-support-v1' | 'gpt-3.5-turbo';

export type ZionGPTUsage = {
  modelId: string;
  tokensUsed: number;
  cost: number;
  timestamp: Date;
};

export interface ModelConfig {
  id: ModelVersion;
  version: number;
  createdAt: string;
  baseModel: string;
  purpose: string;
  active: boolean;
}

// Get the latest active model ID for a specific purpose
export async function getActiveModelId(purpose: 'job' | 'resume' | 'support'): Promise<ModelVersion> {
  try {
    const { data, error } = await supabase
      .from('model_versions')
      .select('id')
      .eq('purpose', purpose)
      .eq('active', true)
      .order('version', { ascending: false })
      .limit(1)
      .single();
    
    if (error || !data) {
      logErrorToProduction(error?.message || 'No model data returned', error || undefined, { context: 'getActiveModelId' });
      logWarn('Failed to fetch active model, falling back to default', { data: error });
      // Fallback to default models
      switch(purpose) {
        case 'job': return 'zion-job-generator-v1';
        case 'resume': return 'zion-resume-enhancer-v1';
        case 'support': return 'zion-support-v1';
        default: return 'gpt-3.5-turbo';
      }
    }
    
    return data.id as ModelVersion;
  } catch (error) {
    logErrorToProduction(error instanceof Error ? error.message : String(error), error instanceof Error ? error : undefined, { context: 'getActiveModelId' });
    return 'gpt-3.5-turbo'; // Fallback to base model
  }
}

// Log usage of the fine-tuned model
export async function logModelUsage(
  modelId: string,
  tokensUsed: number,
  feature: string,
  userId?: string
): Promise<void> {
  try {
    const cost = calculateCost(modelId, tokensUsed);
    
    await supabase
      .from('model_usage_logs')
      .insert({
        model_id: modelId,
        tokens_used: tokensUsed,
        cost: cost,
        feature: feature,
        user_id: userId || null,
        timestamp: new Date().toISOString()
      });
      
  } catch (error) {
    logErrorToProduction(error instanceof Error ? error.message : String(error), error instanceof Error ? error : undefined, { context: 'logModelUsage' });
    // Non-blocking - we don't want to fail the main operation
  }
}

// Calculate approximate cost based on token usage
function calculateCost(modelId: string, tokens: number): number {
  // These are example rates - adjust based on actual OpenAI pricing for fine-tuned models
  const ratePerToken = modelId.includes('zion') ? 0.000016 : 0.000008; // Higher for fine-tuned models
  return tokens * ratePerToken;
}

// Function to call ZionGPT models through Supabase Edge Function
export async function callZionGPT({
  prompt, 
  purpose,
  maxTokens = 500,
  temperature = 0.7,
  userId
}: {
  prompt: string;
  purpose: 'job' | 'resume' | 'support';
  maxTokens?: number;
  temperature?: number;
  userId?: string;
}): Promise<string> {
  try {
    // Dynamically get the proper model ID based on purpose
    const modelId = await getActiveModelId(purpose);
    
    // Call the edge function that will use the model
    const { data, error } = await supabase.functions.invoke('zion-gpt', {
      body: {
        prompt,
        modelId,
        maxTokens,
        temperature
      }
    });
    
    if (error) throw error;
    
    // Log usage for analytics
    if (data && (data as any).tokensUsed) {
      await logModelUsage(
        modelId, 
        (data as any).tokensUsed,
        `${purpose}-generation`,
        userId
      );
    }
    
    return (data as any)?.completion || '';
  } catch (error) {
    logErrorToProduction(error instanceof Error ? error.message : String(error), error instanceof Error ? error : undefined, { context: 'callZionGPT' });
    throw error;
  }
}
