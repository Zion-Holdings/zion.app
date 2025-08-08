import { NextApiRequest, NextApiResponse } from 'next';
import { authenticateRequest, isRateLimited, logApiRequest, respondWithError } from '../../utils/devportal/auth';
import { TALENT_PROFILES } from '../../data/talent';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(405).json({ error: { code: 'method_not_allowed', message: 'Method not allowed' } });
  const auth = authenticateRequest(req, ['view_talent']);
  if (!auth.ok) return respondWithError(res, req, auth.status, auth.errorCode!, auth.errorMessage!, auth.key);
  if (isRateLimited(auth.key!)) return respondWithError(res, req, 429, 'rate_limited', 'Too many requests', auth.key);

  logApiRequest(req, 200, true, auth.key);
  return res.status(200).json({ data: TALENT_PROFILES });
}