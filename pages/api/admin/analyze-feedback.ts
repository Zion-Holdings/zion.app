import type { NextApiRequest, NextApiResponse } from 'next';
import { getOpenAI } from '../../../utils/openai';
import { requireRole } from '../../../utils/auth';

export type FeedbackItem = {
  timestamp?: string;
  userId?: string;
  feature?: string;
  stars?: number;
  comment?: string;
  channel?: 'chat' | 'review' | 'support' | 'other';
};

export type AnalysisResult = {
  groupedByFeature: Record<string, {
    sentiment: { positive: number; neutral: number; negative: number };
    topBugs: string[];
    topFrustrations: string[];
    topRequests: string[];
    representativeQuotes: string[];
  }>;
  topInsights: string[];
  improvementBacklog: Array<{ title: string; description: string; priority: 'P0' | 'P1' | 'P2'; area: string }>;
};

async function analyze(req: NextApiRequest, res: NextApiResponse) {
  try {
    const items: FeedbackItem[] = (req.body?.items as FeedbackItem[]) || [];
    const openai = getOpenAI();

    const prompt = `You are a product ops analyst. Analyze the following weekly batch of feedback items (JSON). Group by feature area (chatbot, rentals, jobs, dashboard), compute sentiment mix (positive/neutral/negative), and extract common bugs, frustrations, and feature requests. Then produce (1) a concise Top Insights summary for an admin dashboard and (2) a prioritized improvement backlog with titles, descriptions, priorities (P0/P1/P2), and area. Respond as strict JSON matching this TypeScript interface:

interface AnalysisResult {\n  groupedByFeature: Record<string, {\n    sentiment: { positive: number; neutral: number; negative: number };\n    topBugs: string[];\n    topFrustrations: string[];\n    topRequests: string[];\n    representativeQuotes: string[];\n  }>;\n  topInsights: string[];\n  improvementBacklog: Array<{ title: string; description: string; priority: 'P0' | 'P1' | 'P2'; area: string }>;\n}

If feature area is missing, infer it. Be terse, actionable, and avoid duplicates. Here are the items:\n\n${JSON.stringify(items).slice(0, 120000)}\n`;

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      temperature: 0.2,
      response_format: { type: 'json_object' } as any,
      messages: [
        { role: 'system', content: 'You are a precise product analytics assistant. Always output valid JSON for downstream systems.' },
        { role: 'user', content: prompt },
      ],
    } as any);

    const text = completion.choices?.[0]?.message?.content || '{}';
    const result = JSON.parse(text) as AnalysisResult;
    res.status(200).json(result);
  } catch (e: any) {
    res.status(500).json({ error: e.message || 'OpenAI analysis failed' });
  }
}

export default requireRole(['superadmin'], analyze);