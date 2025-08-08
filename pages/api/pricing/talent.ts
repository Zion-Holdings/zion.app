import type { NextApiRequest, NextApiResponse } from 'next';
import type { TalentRateRequest } from '@/utils/api/aiPricing';
import { generateTalentRateSuggestion } from '@/utils/api/aiPricing';
import { logPricingAnalytics } from '@/utils/data/pricingAnalytics';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const body = req.body as Partial<TalentRateRequest>;
    if (!body || !Array.isArray(body.skills) || typeof body.yearsExperience !== 'number' || !body.location) {
      return res.status(400).json({ error: 'Missing required fields: skills[], yearsExperience, location' });
    }

    const input: TalentRateRequest = {
      skills: body.skills.map(String),
      yearsExperience: Number(body.yearsExperience),
      location: String(body.location),
    };

    const suggestion = await generateTalentRateSuggestion(input);
    await logPricingAnalytics({ kind: 'talent_suggestion', payload: { input, suggestion } });
    return res.status(200).json({ suggestion, disclaimer: 'Based on market data & trends' });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to generate talent rate suggestion' });
  }
}