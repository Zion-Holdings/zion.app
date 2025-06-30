import { logErrorToProduction } from '@/utils/productionLogger';

/**
 * Wrap an async function with automatic error logging.
 */
export function withAsyncErrorGuard<T extends (...args: any[]) => Promise<any>>(fn: T): T {
  return (async (...args: Parameters<T>): Promise<ReturnType<T>> => {
    try {
      return (await fn(...args)) as ReturnType<T>;
    } catch (err) {
      logErrorToProduction(err instanceof Error ? err.message : String(err), err instanceof Error ? err : undefined, { context: 'withAsyncErrorGuard' });
      throw err;
    }
  }) as T;
}
