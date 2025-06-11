export type ApiHandler = (req: any, res: any) => any;

import { logError } from './logError';

export function withErrorLogging(handler: ApiHandler): ApiHandler {
  return async (req, res) => {
    try {
      return await handler(req, res);
    } catch (err: any) {
      logError(err, {
        route: req.url,
        method: req.method,
        errorSourceContext: 'withErrorLogging',
      });
      if (res && !res.headersSent) {
        if (typeof res.status === 'function') {
          res.status(500);
        } else {
          res.statusCode = 500;
        }
        if (typeof res.json === 'function') {
          res.json({ error: 'Internal server error' });
        } else if (typeof res.end === 'function') {
          res.end('Internal server error');
        }
      }
    }
  };
}
