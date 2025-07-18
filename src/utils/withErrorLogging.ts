/// <reference types="node" />
import type { NextApiRequest, NextApiResponse } from 'next';
import { logErrorToProduction } from '@/utils/productionLogger';

export type ApiHandler = (req: NextApiRequest, res: NextApiResponse) => Promise<void> | void;

export function withErrorLogging(handler: ApiHandler): ApiHandler {
  return async (req: NextApiRequest, _res: NextApiResponse) => {
    try {
      await handler(req, res);
    } catch (_error) {
      const reqUrl = req.url;
      logErrorToProduction(_error instanceof Error ? _error.message : String(_error), _error instanceof Error ? _error : undefined, {
        route: reqUrl,
      });
      if (!(res as unknown as { headersSent: boolean }).headersSent) {
        res.status(500).json({ error: 'Internal Server Error' });
      }
    }
  };
}
