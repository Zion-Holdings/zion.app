import { supabase } from '../supabase/client';
import type { TrustWeights } from '../types/trust';

const DEFAULT_WEIGHTS: TrustWeights = {
  completionRate: 0.2,
  onboardingCompletionRate: 0.05,
  feedbackAverage: 0.2,
  feedbackQualityScore: 0.05,
  responseTime: 0.15,
  accountLongevity: 0.1,
  sentimentScore: 0.1,
  disputeFlags: -0.1,
  verifiedReviewRatio: 0.05,
  endorsements: 0.06,
  flags: -0.06,
};

let inMemoryWeights: TrustWeights = { ...DEFAULT_WEIGHTS };

export async function getTrustWeights(): Promise<TrustWeights> {
  try {
    const { data, error } = await supabase
      .from('trust_weights')
      .select('*')
      .single();
    if (error || !data) return inMemoryWeights;
    // Ensure all keys exist, fallback to defaults
    return { ...DEFAULT_WEIGHTS, ...data.values } as TrustWeights;
  } catch {
    return inMemoryWeights;
  }
}

export async function setTrustWeights(newWeights: Partial<TrustWeights>): Promise<TrustWeights> {
  inMemoryWeights = { ...inMemoryWeights, ...newWeights } as TrustWeights;
  try {
    const payload = { id: 1, values: inMemoryWeights };
    const { error } = await supabase.from('trust_weights').upsert(payload, { onConflict: 'id' });
    if (error) return inMemoryWeights;
  } catch {
    // ignore; fallback is in-memory
  }
  return inMemoryWeights;
}

export function getDefaultWeights(): TrustWeights {
  return { ...DEFAULT_WEIGHTS };
}