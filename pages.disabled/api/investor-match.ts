import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';

export type InvestorMatchRequest = {
  startupName: string;
  industry: string;
  roundType: 'Pre-seed' | 'Seed' | 'Series A' | 'Token Sale' | string;
  teamSize?: string;
  pitchSummary: string;
  deckOrWebsite?: string;
  location?: string;
};

export type Investor = {
  name: string;
  website: string;
  contact?: string;
  relevance_score: number; // 0-100
  why_fit: string;
  notable_investments: string[];
  location_focus?: string[];
  stages?: string[];
  type?: 'VC' | 'Angel' | 'Fund' | string;
};

export type InvestorMatchResponse = {
  investors: Investor[];
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'Missing OPENAI_API_KEY' });
  }

  const body: InvestorMatchRequest = req.body;
  if (!body || !body.startupName || !body.industry || !body.roundType || !body.pitchSummary) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const openai = new OpenAI({ apiKey });

    const systemPrompt = `You are an expert venture scout and investor relations analyst. You recommend highly relevant VCs, angels, and funds with clear rationale, public websites, and example portfolio companies. Always prefer investors who actually invest at the requested stage and industry. Return strictly valid JSON.`;

    const userPrompt = `Suggest the top 5 venture capital firms or angel investors that fund early-stage AI marketplaces like ${body.startupName}.

Context:
- Industry: ${body.industry}
- Round Type: ${body.roundType}
- Team size: ${body.teamSize || 'N/A'}
- Location: ${body.location || 'global/unspecified'}
- Pitch summary: ${body.pitchSummary}
- Deck/Website: ${body.deckOrWebsite || 'N/A'}

For each recommendation, include: name, website, contact (if public), why_fit (2-3 sentences), notable_investments (3-6 names), relevance_score (0-100), location_focus (regions/countries), stages (investment stages), type (VC/Angel/Fund).`;

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      temperature: 0.3,
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt },
      ],
      response_format: { type: 'json_object' },
    });

    const content = completion.choices?.[0]?.message?.content || '';

    let parsed: InvestorMatchResponse | null = null;
    try {
      parsed = JSON.parse(content) as InvestorMatchResponse;
    } catch (e) {
      // Try to coerce into expected shape
      parsed = null;
    }

    if (!parsed || !parsed.investors) {
      // Fallback minimal parsing if model returned array root
      try {
        const arr = JSON.parse(content);
        if (Array.isArray(arr)) {
          parsed = { investors: arr } as InvestorMatchResponse;
        }
      } catch {}
    }

    if (!parsed || !Array.isArray(parsed.investors)) {
      return res.status(502).json({ error: 'Invalid model response', raw: content });
    }

    // Keep only top 5 and sanitize fields
    const investors = parsed.investors
      .filter(Boolean)
      .slice(0, 5)
      .map((inv) => ({
        name: String(inv.name || '').trim(),
        website: String(inv.website || '').trim(),
        contact: inv.contact ? String(inv.contact).trim() : undefined,
        relevance_score: Number.isFinite(inv.relevance_score) ? inv.relevance_score : 0,
        why_fit: String(inv.why_fit || '').trim(),
        notable_investments: Array.isArray(inv.notable_investments) ? inv.notable_investments : [],
        location_focus: Array.isArray(inv.location_focus) ? inv.location_focus : undefined,
        stages: Array.isArray(inv.stages) ? inv.stages : undefined,
        type: inv.type || undefined,
      }))
      .filter((inv) => inv.name && inv.website);

    return res.status(200).json({ investors });
  } catch (error: any) {
    console.error('Investor match error:', error?.response?.data || error);
    return res.status(500).json({ error: 'Failed to generate investor matches' });
  }
}