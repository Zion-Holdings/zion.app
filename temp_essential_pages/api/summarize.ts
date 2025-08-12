import type { NextApiRequest, NextApiResponse } from 'next';
import { withErrorLogging } from '@/utils/withErrorLogging';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { text = '' } = req.body || {};
  const summary = text.split('.').slice(0, 2).join('.').trim();

  return res.status(200).json({ summary });
}

export default withErrorLogging(handler);
