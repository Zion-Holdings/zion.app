import type { NextApiRequest, NextApiResponse } from 'next';
import { devNetState, Job } from '@/utils/devnet/state';
import { withRateLimit } from '@/utils/api/rateLimit';

function parseBody(req: NextApiRequest): any {
  try {
    return typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
  } catch {
    return {};
  }
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json({ jobs: devNetState.jobs, talent: devNetState.talent });
    return;
  }

  if (req.method === 'POST') {
    const body = parseBody(req);
    const title = String(body?.title || '').trim();
    const description = String(body?.description || '').trim();
    const reward = Number(body?.reward ?? 0);
    const createdByAddress = String(body?.createdByAddress || '').trim();

    if (!title || !description || !Number.isFinite(reward) || reward <= 0 || !createdByAddress) {
      res.status(400).json({ error: 'title, description, reward (>0), createdByAddress are required' });
      return;
    }

    const id = `job_${Math.random().toString(36).slice(2, 10)}`;
    const job: Job = {
      id,
      title,
      description,
      reward,
      createdByAddress,
      createdAt: Date.now(),
    };
    devNetState.jobs.unshift(job);
    res.status(201).json({ job });
    return;
  }

  res.setHeader('Allow', 'GET, POST');
  res.status(405).end('Method Not Allowed');
}

export default withRateLimit(handler, { windowMs: 60_000, max: 60 });