import type { NextApiRequest, NextApiResponse } from 'next';';
import { logErrorToProduction } from '@/utils/productionLogger';'
;
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // TODO: Implement extension health check logic
    res.status(200).json({ status: 'ok', message: 'Extension health endpoint (mock)' });'
  } catch (error) {
    logErrorToProduction(error);
    res.status(500).json({ error: 'Internal server error' });'
  }
}