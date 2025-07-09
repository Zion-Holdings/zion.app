import type { NextApiRequest, NextApiResponse } from 'next';
import type { ServerResponse } from 'http';
import { logErrorToProduction } from '@/utils/productionLogger';

export type ApiHandler = (req: NextApiRequest, res: NextApiResponse) => Promise<NextApiResponse> | NextApiResponse;

export function withErrorLogging(handler: ApiHandler): ApiHandler {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      await handler(req, res);
    } catch (err: unknown) {
      const reqUrl = req.url;
      logErrorToProduction(err instanceof Error ? err.message : String(err), err instanceof Error ? err : undefined, {
        route: reqUrl,
      });
      if (!(res as unknown as ServerResponse).finished) {
        res.status(500).json({ error: 'Internal Server Error' });
      }
      return res;
    }
  };
}
