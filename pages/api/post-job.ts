import type { NextApiRequest, NextApiResponse } from 'next';
import { JobSubmission } from '../../utils/types/job';
import { normalizeJobWithAI, rankTalentsWithAI } from '../../utils/ai/matchTalent';
import { storeSuggestedMatches } from '../../utils/db/matches';
import { notifyMatchedTalent } from '../../utils/notify/matches';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const body: JobSubmission = req.body;
  if (!body?.title || !body?.description || !Array.isArray(body?.requiredSkills)) {
    return res.status(400).json({ error: 'Missing required fields: title, description, requiredSkills' });
  }

  try {
    // 1) Normalize with AI
    const normalized = await normalizeJobWithAI(body);

    // 2) Rank talents
    const ranked = await rankTalentsWithAI(normalized);

    // 3) Persist Suggested Matches
    const jobId = req.query.jobId?.toString() || generateJobId();
    await storeSuggestedMatches(jobId, ranked.slice(0, 5));

    // 4) Notify matched talents (fire-and-forget)
    const ctaBase = process.env.NEXT_PUBLIC_APP_URL || 'https://app.zion.ai';
    await Promise.all(
      ranked.slice(0, 5).map(m =>
        notifyMatchedTalent({
          talentSlug: m.slug,
          jobSummary: {
            id: jobId,
            title: body.title,
            description: body.description.slice(0, 240),
            ctaUrl: `${ctaBase}/jobs/${jobId}`,
          },
        })
      )
    );

    // 5) Respond with top matches
    res.status(200).json({ jobId, matches: ranked.slice(0, 5) });
  } catch (e: any) {
    console.error('post-job error', e);
    res.status(500).json({ error: 'Failed to process job', details: e?.message });
  }
}

function generateJobId() {
  return 'job_' + Math.random().toString(36).slice(2, 10);
}