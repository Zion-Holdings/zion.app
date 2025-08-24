import type { TrustMetricInputs, TrustWeights, TrustScoreBreakdown } from '../types/trust';
import { getTrustWeights } from './weights';

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

function normalizeInputs(inputs: TrustMetricInputs): Required<TrustMetricInputs> {
  const completionRate = clamp(inputs.completionRate ?? 0, 0, 1);
  const onboardingCompletionRate = clamp(inputs.onboardingCompletionRate ?? completionRate, 0, 1);
  const feedbackAverage = clamp(inputs.feedbackAverage ?? 0, 0, 5);
  const feedbackQualityScore = clamp(inputs.feedbackQualityScore ?? 0.5, 0, 1);
  const averageResponseHours = Math.max(0, inputs.averageResponseHours ?? 24);
  const accountAgeDays = Math.max(0, inputs.accountAgeDays ?? 0);
  const sentimentScore = clamp(inputs.sentimentScore ?? 0, -1, 1);
  const disputeFlags = Math.max(0, inputs.disputeFlags ?? 0);
  const verifiedReviewRatio = clamp(inputs.verifiedReviewRatio ?? 0, 0, 1);
  const endorsements = Math.max(0, inputs.endorsements ?? 0);
  const flags = Math.max(0, inputs.flags ?? 0);

  return {
    completionRate,
    onboardingCompletionRate,
    feedbackAverage,
    feedbackQualityScore,
    averageResponseHours,
    accountAgeDays,
    sentimentScore,
    disputeFlags,
    verifiedReviewRatio,
    endorsements,
    flags,
  };
}

function scoreComponent(key: keyof TrustWeights, normalized: Required<TrustMetricInputs>, weights: TrustWeights): { raw: number; weighted: number } {
  let raw = 0;
  switch (key) {
    case 'completionRate':
      raw = normalized.completionRate; // 0-1
      break;
    case 'onboardingCompletionRate':
      raw = normalized.onboardingCompletionRate;
      break;
    case 'feedbackAverage':
      raw = normalized.feedbackAverage / 5; // 0-1
      break;
    case 'feedbackQualityScore':
      raw = normalized.feedbackQualityScore; // 0-1
      break;
    case 'responseTime':
      // Convert average hours to a 0-1 where 0 is very slow, 1 is very fast
      const hours = normalized.averageResponseHours;
      // 0-2h -> ~1, 48h+ -> ~0
      raw = clamp(1 - (hours / 48), 0, 1);
      break;
    case 'accountLongevity':
      // 0-365+ days scaled 0-1 with diminishing returns
      const years = normalized.accountAgeDays / 365;
      raw = clamp(1 - Math.exp(-years), 0, 1);
      break;
    case 'sentimentScore':
      // -1..1 -> 0..1
      raw = clamp((normalized.sentimentScore + 1) / 2, 0, 1);
      break;
    case 'disputeFlags':
      // More disputes -> worse score. Use soft penalty: 0 disputes => 1; 5+ => ~0
      raw = clamp(1 - normalized.disputeFlags / 5, 0, 1);
      break;
    case 'verifiedReviewRatio':
      raw = normalized.verifiedReviewRatio; // 0-1
      break;
    case 'endorsements':
      // Logistic-ish mapping: 0->0, 5->~0.6, 15->~0.85, 30->~0.95
      raw = clamp(1 - Math.exp(-(normalized.endorsements || 0) / 8), 0, 1);
      break;
    case 'flags':
      // Community flags lower the score.
      raw = clamp(1 - (normalized.flags || 0) / 5, 0, 1);
      break;
  }

  const weighted = raw * (weights[key] || 0);
  return { raw, weighted };
}

function classifyRisk(totalScore: number, numDisputes: number): 'High Trust' | 'Moderate Trust' | 'Risk Alert' {
  if (numDisputes >= 3) return 'Risk Alert';
  if (totalScore >= 85) return 'High Trust';
  if (totalScore >= 60) return 'Moderate Trust';
  return 'Risk Alert';
}

export async function computeTrustScore(inputs: TrustMetricInputs, options?: { reasonSummary?: string }): Promise<TrustScoreBreakdown> {
  const weights = await getTrustWeights();
  const normalized = normalizeInputs(inputs);

  const components = (Object.keys(weights) as (keyof TrustWeights)[]).map((key) => {
    return { key, ...scoreComponent(key, normalized, weights) };
  });

  // Sum weighted, but consider negative weights are already part of mapping 0..1 then * negative
  const weightedSum = components.reduce((acc, c) => acc + c.weighted, 0);
  // Normalize to 0-100 by dividing by sum of absolute weights to maintain scale
  const absWeightSum = (Object.values(weights).reduce((acc, w) => acc + Math.abs(w), 0)) || 1;
  const total = clamp((weightedSum / absWeightSum) * 100, 0, 100);

  const communityVerified = normalized.endorsements >= 5 && normalized.flags === 0 && normalized.verifiedReviewRatio >= 0.5;

  const riskLevel = classifyRisk(total, normalized.disputeFlags);

  return {
    total: Math.round(total),
    components,
    normalizedInputs: normalized,
    riskLevel,
    reasonSummary: options?.reasonSummary,
    communityVerified,
    updatedAt: new Date().toISOString(),
  };
}

export function getRadarMetrics(breakdown: TrustScoreBreakdown): { label: string; value: number }[] {
  return breakdown.components.map((c) => ({ label: String(c.key), value: Math.round(c.raw * 100) }));
}