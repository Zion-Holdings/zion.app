export type ApiHandler = (req: unknown, res: unknown) => unknown;

import { logErrorToProduction } from '@/utils/productionLogger';

export function withErrorLogging(handler: ApiHandler): ApiHandler {
  return async (req: unknown, res: unknown) => {
    try {
      return await handler(req, res);
    } catch (err: unknown) {
      const reqUrl = (typeof req === 'object' && req !== null && 'url' in req) ? (req as { url?: string }).url : undefined;
      logErrorToProduction(err instanceof Error ? err.message : String(err), err instanceof Error ? err : undefined, {
        route: reqUrl,
      });
      if (typeof res === 'object' && res !== null) {
        const r = res as { headersSent?: boolean; status?: (code: number) => any; statusCode?: number; json?: (body: any) => any; end?: (data?: any) => any };
        if (!r.headersSent) {
          if (typeof r.status === 'function') {
            r.status(500);
          } else if (typeof r.statusCode === 'number') {
            r.statusCode = 500;
          }
          if (typeof r.json === 'function') {
            r.json({ error: 'Internal Server Error' });
          } else if (typeof r.end === 'function') {
            r.end('Internal Server Error');
          }
        }
      }
    }
  };
}
