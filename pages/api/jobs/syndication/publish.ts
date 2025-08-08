import type { NextApiRequest, NextApiResponse } from 'next';
import { assertAdminServer } from '../../../../utils/permissions';
import type { SyndicationRequest, SyndicationPublishResponse, BoardPublishResult, BoardName, FormattedJob } from '../../../../utils/types/jobs';
import { applyBoardConstraints } from '../../../../utils/jobBoards';
import { buildUtmUrl } from '../../../../utils/tracking';
import { v4 as uuid } from 'uuid';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });
  if (!assertAdminServer(req, res)) return;

  try {
    const payload: SyndicationRequest = req.body;
    const jobId = payload.job.jobId || uuid();
    const baseTarget = payload.job.applyUrl || process.env.DEFAULT_APPLY_URL || 'https://zion.fyi/apply';

    const ensureFormatted = (payload.formatted ?? {
      title: payload.job.internalTitle || 'Software Engineer',
      summary: '',
      skills: [],
      tags: [],
      markdown: payload.job.internalDescription || '',
    }) as FormattedJob;

    const results: BoardPublishResult[] = (payload.boards || []).map((board: BoardName) => {
      const constrained = applyBoardConstraints(board, ensureFormatted);
      const targetWithUtm = buildUtmUrl(baseTarget, {
        source: board,
        campaign: payload.utm?.campaign || 'job_syndication',
        medium: payload.utm?.medium || 'jobs',
        jobId,
      });

      const shareUrl = `${process.env.NEXT_PUBLIC_BASE_URL || ''}/api/jobs/syndication/redirect?jobId=${encodeURIComponent(jobId)}&board=${encodeURIComponent(board)}&target=${encodeURIComponent(targetWithUtm)}`;

      return {
        board,
        status: 'queued',
        message: 'Queued for publishing',
        shareUrl,
      };
    });

    const response: SyndicationPublishResponse = {
      jobId,
      results,
      syndicatedCount: results.length,
    };

    return res.status(200).json(response);
  } catch (error: any) {
    return res.status(500).json({ error: error?.message || 'Publish failed' });
  }
}