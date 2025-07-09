import type { NextApiRequest, NextApiResponse } from 'next';
import type { ServerResponse } from 'http';

export type ApiHandler = (req: NextApiRequest, res: NextApiResponse) => Promise<void>;

import { logErrorToProduction } from '@/utils/productionLogger';

export function withErrorLogging(handler: ApiHandler): ApiHandler {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      await handler(req, res);
    } catch (err: unknown) {
      const reqUrl = (typeof req === 'object' && req !== null && 'url' in req) ? (req as { url?: string }).url : undefined;
      logErrorToProduction(err instanceof Error ? err.message : String(err), err instanceof Error ? err : undefined, {
        route: reqUrl,
      });
      if (!(res as unknown as ServerResponse).finished) {
        res.status(500).json({ error: 'Internal Server Error' });
      }
    }
  };
}
