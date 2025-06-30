import { NextApiRequest, NextApiResponse } from 'next';
import { logError } from './logError';

// Define a more specific type for Next.js API handlers
export type NextJsApiHandler<T = any> = (
  req: NextApiRequest,
  res: NextApiResponse<T>
) => Promise<void | T> | void | T;

export function withErrorLogging<T = any>(handler: NextJsApiHandler<T>): NextJsApiHandler<T> {
  return async (req: NextApiRequest, res: NextApiResponse<T>) => {
    try {
      // Ensure the handler is awaited if it's async. If it's sync, await does no harm.
      const result = await handler(req, res);
      // If the handler is supposed to send a response and returns a value,
      // it might be an indication of an unhandled case, or it's intentional.
      // For typical Next.js API routes, res.send() or res.json() is used.
      // If result is returned and res is not sent, it could be an issue.
      // However, just calling the handler and catching errors is the main goal here.
      return result;
    } catch (err: unknown) { // Changed err: any to err: unknown
      let errorToLog = err;
      if (err instanceof Error) {
        errorToLog = { message: err.message, stack: err.stack, name: err.name };
      } else if (typeof err === 'object' && err !== null) {
        errorToLog = { ...err }; // Spread to capture object properties
      }
      // else it could be a string or other primitive, log as is

      logError(errorToLog, { // Log the potentially structured error
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
