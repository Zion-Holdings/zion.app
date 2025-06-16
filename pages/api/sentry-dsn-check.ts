import type { NextApiRequest, NextApiResponse } from 'next';
import { handler as sentryCheck } from '../../netlify/functions/sentryCheck';
import { withErrorLogging } from '@/utils/withErrorLogging';

async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const result = await sentryCheck();
  return res.status(result.statusCode).end();
}

export default withErrorLogging(handler);
