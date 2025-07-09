import type { NextApiRequest, NextApiResponse } from 'next';
import type { ServerResponse } from 'http';
import { logErrorToProduction } from '@/utils/productionLogger';

export type ApiHandler = (req: NextApiRequest, res: NextApiResponse) => Promise<void> | Promise<NextApiResponse> | void | NextApiResponse;

export function withErrorLogging(handler: ApiHandler): ApiHandler {
  return async function (req: NextApiRequest, res: NextApiResponse) {
    try {
      const result = await handler(req, res);
      return result;
    } catch (err: unknown) {
      const reqUrl = req.url;
      logErrorToProduction(err instanceof Error ? err.message : String(err), err instanceof Error ? err : undefined, {
        route: reqUrl,
        method: req.method,
        body: req.body,
        query: req.query,
        headers: req.headers,
      });
      // Use ServerResponse to check headersSent
      const serverRes = res as unknown as import('http').ServerResponse;
      if (!serverRes.headersSent) {
        res.status(500).json({ error: 'Internal Server Error' });
      }
      return;
    }
  };
}
