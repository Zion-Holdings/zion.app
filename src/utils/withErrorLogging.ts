import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
=======
import type { ServerResponse } from 'http';

export type ApiHandler = (req: NextApiRequest, res: NextApiResponse) => Promise<void>;

>>>>>>> bb6a20ce953810b5f2bb644fe518bcc54f4e46a5
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
<<<<<<< HEAD
      if (!res.headersSent) {
=======
      if (!(res as unknown as ServerResponse).finished) {
>>>>>>> bb6a20ce953810b5f2bb644fe518bcc54f4e46a5
        res.status(500).json({ error: 'Internal Server Error' });
      }
      return res;
    }
  };
}
