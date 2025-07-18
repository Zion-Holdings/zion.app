import type { NextApiRequest, NextApiResponse } from 'next';
import { logErrorToProduction } from './productionLogger';

export function withErrorLogging<T = any>(
  handler: (
    req: NextApiRequest,
    res: NextApiResponse<T>,
  ) => Promise<void> | void,
) {
  return async (req: NextApiRequest, res: NextApiResponse<T>) => {
    try {
      await handler(req, res);
    } catch (error) {
      logErrorToProduction('API Error:', error);
      res.status(500).json({ error: 'Internal server error' } as any);
    }
  };
}
