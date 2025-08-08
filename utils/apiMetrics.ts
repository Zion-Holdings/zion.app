import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import { recordApiResponse } from './metrics';

export function withMetrics(handler: NextApiHandler, name?: string): NextApiHandler {
  return async function wrapped(req: NextApiRequest, res: NextApiResponse) {
    const start = Date.now();
    try {
      return await handler(req, res);
    } finally {
      const ms = Date.now() - start;
      const path = name || req.url || 'api';
      recordApiResponse(path, ms);
    }
  };
}