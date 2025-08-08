import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';

export type TeamRoleRecommendation = {
  role: string;
  description: string;
  hourlyRangeUsd: { min: number; max: number };
  estimatedWeeklyHours: number;
  quantity: number;
  preferredLocations?: string[];
  requiredSkills?: string[];
};

export type TeamRecommendationResponse = {
  team: TeamRoleRecommendation[];
  assumptions: string[];
  weeklyBurnUsd: number;
  estimatedProjectTotalUsd: number;
};

const SYSTEM_PROMPT = `You are a senior CTO staffing assistant for Zion AI Marketplace.
Given a project brief, propose an ideal team structure. Return ONLY valid JSON with this exact shape:
{
  "team": [
    {
      "role": string,
      "description": string,
      "hourlyRangeUsd": { "min": number, "max": number },
      "estimatedWeeklyHours": number,
      "quantity": number,
      "preferredLocations"?: string[],
      "requiredSkills"?: string[]
    }
  ],
  "assumptions": string[],
  "weeklyBurnUsd": number,
  "estimatedProjectTotalUsd": number
}
Guidelines:
- Consider the scope, timeline, budget, and tech areas.
- If budget is locked, keep weeklyBurnUsd within that budget divided by expected weeks. If timeline is locked, adjust team composition to meet schedule.
- Choose realistic hourly ranges based on market rates for senior talent.
- Ensure the JSON is parseable; do not include extra commentary.`;

function computeWeeksFromTimeline(timeline?: string): number | undefined {
  if (!timeline) return undefined;
  const matches = timeline.match(/(\d+)\s*(week|weeks)/i);
  if (matches) return Number(matches[1]);
  const quarter = timeline.match(/Q(\d)/i);
  if (quarter) return 12;
  return undefined;
}

function fallbackRecommendation(input: any): TeamRecommendationResponse {
  const weeks = computeWeeksFromTimeline(input?.timeline) || 12;
  const team: TeamRoleRecommendation[] = [
    {
      role: 'Product Manager',
      description: 'Owns scope, backlog, and delivery coordination.',
      hourlyRangeUsd: { min: 90, max: 130 },
      estimatedWeeklyHours: 20,
      quantity: 1,
      requiredSkills: ['Agile', 'Roadmapping']
    },
    {
      role: 'Fullstack Engineer',
      description: 'Builds core web app features end-to-end.',
      hourlyRangeUsd: { min: 85, max: 120 },
      estimatedWeeklyHours: 35,
      quantity: 2,
      requiredSkills: ['Next.js', 'TypeScript', 'PostgreSQL']
    },
    {
      role: 'DevOps Engineer',
      description: 'CI/CD, IaC, observability, cloud security.',
      hourlyRangeUsd: { min: 100, max: 140 },
      estimatedWeeklyHours: 12,
      quantity: 1,
      requiredSkills: ['AWS', 'Kubernetes', 'Terraform']
    },
    {
      role: 'QA Engineer',
      description: 'Test plans, automation, regression.',
      hourlyRangeUsd: { min: 60, max: 90 },
      estimatedWeeklyHours: 15,
      quantity: 1,
      requiredSkills: ['Playwright', 'Cypress']
    }
  ];

  const weeklyBurn = team.reduce((sum, r) => sum + ((r.hourlyRangeUsd.min + r.hourlyRangeUsd.max) / 2) * r.estimatedWeeklyHours * r.quantity, 0);
  return {
    team,
    assumptions: ['Fallback response used (no OPENAI_API_KEY).', 'Based on standard marketplace web app.'],
    weeklyBurnUsd: Math.round(weeklyBurn),
    estimatedProjectTotalUsd: Math.round(weeklyBurn * weeks)
  };
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<TeamRecommendationResponse | { error: string }>) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { projectName, goals, timeline, budget, techAreas, lockBudget, lockTimeline } = req.body || {};

  const expectedWeeks = computeWeeksFromTimeline(timeline) || 12;
  const budgetNumber = typeof budget === 'number' ? budget : Number(budget);

  const userPrompt = {
    projectName,
    goals,
    timeline,
    budget: isNaN(budgetNumber) ? undefined : budgetNumber,
    techAreas,
    constraints: { lockBudget: !!lockBudget, lockTimeline: !!lockTimeline, expectedWeeks },
  };

  if (!process.env.OPENAI_API_KEY) {
    return res.status(200).json(fallbackRecommendation(userPrompt));
  }

  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      temperature: 0.2,
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user', content: JSON.stringify(userPrompt) }
      ],
      response_format: { type: 'json_object' as const },
    });

    const content = completion.choices?.[0]?.message?.content || '{}';
    const parsed = JSON.parse(content) as TeamRecommendationResponse;

    if (!parsed.team || !Array.isArray(parsed.team)) {
      throw new Error('Invalid AI response');
    }

    // Safety: compute weekly burn if missing based on roles
    const weeklyBurnFallback = parsed.team.reduce((acc, r) => {
      const avgRate = ((r.hourlyRangeUsd?.min ?? 80) + (r.hourlyRangeUsd?.max ?? 120)) / 2;
      return acc + (avgRate * (r.estimatedWeeklyHours || 0) * (r.quantity || 1));
    }, 0);

    const weeks = expectedWeeks || 12;
    const weeklyBurnUsd = parsed.weeklyBurnUsd || Math.round(weeklyBurnFallback);
    const estimatedProjectTotalUsd = parsed.estimatedProjectTotalUsd || Math.round(weeklyBurnUsd * weeks);

    const finalResponse: TeamRecommendationResponse = {
      ...parsed,
      weeklyBurnUsd,
      estimatedProjectTotalUsd,
    };

    res.status(200).json(finalResponse);
  } catch (e: any) {
    console.error('generate-team error', e?.message || e);
    res.status(500).json({ error: 'Failed to generate team' });
  }
}