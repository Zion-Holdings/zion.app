import { logErrorToProduction } from '@/utils/productionLogger';

/**
 * Wrap an async function with automatic error logging.
 */
export function withAsyncErrorGuard<Args extends any[], R>(fn: (...args: Args) => Promise<R>): (...args: Args) => Promise<R> {
  return async (...args: Args): Promise<R> => {
    try {
      return await fn(...args);
    } catch (err) {
      logErrorToProduction(err instanceof Error ? err.message : String(err), err instanceof Error ? err : undefined, { context: 'withAsyncErrorGuard' });
      throw err;
    }
  };
}
