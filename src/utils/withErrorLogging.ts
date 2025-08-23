import type { NextApiRequest, NextApiResponse } from 'next';
import { logErrorToProduction } from '@/utils/productionLogger';

export type ApiHandler = (req: NextApiRequest, res: NextApiResponse) => Promise<void> | void;

export function withErrorLogging(handler: ApiHandler): ApiHandler {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      await handler(req, res);
    } catch (err) {
      const reqUrl = req.url;
      logErrorToProduction(err instanceof Error ? err.message : String(err), err instanceof Error ? err : undefined, {
        route: reqUrl,
      });
      if (!res.headersSent) {
        res.status(500).json({ error: 'Internal Server Error' });
      }
    }
  };
}
