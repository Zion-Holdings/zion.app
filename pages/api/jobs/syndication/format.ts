import type { NextApiRequest, NextApiResponse } from 'next';
import { assertAdminServer } from '../../../../utils/permissions';
import { formatJobForExternalBoards } from '../../../../utils/ai/formatJob';
import type { JobInput } from '../../../../utils/types/jobs';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });
  if (!assertAdminServer(req, res)) return;

  try {
    const job: JobInput = req.body?.job;
    if (!job || !job.internalDescription) {
      return res.status(400).json({ error: 'Missing job.internalDescription' });
    }

    const formatted = await formatJobForExternalBoards(job);
    return res.status(200).json({ formatted });
  } catch (error: any) {
    return res.status(500).json({ error: error?.message || 'Formatting failed' });
  }
}