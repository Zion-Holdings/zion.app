import NodeCache from 'node-cache'
import { logDebug, logErrorToProduction } from '@/utils/productionLogger;;
// Cache categories with different TTL values'
export enum CacheCategory {;
  SHORT = 'short', // 5 minutes;
  MEDIUM = 'medium', // 30 minutes;
  LONG = 'long', // 24 hours;
  STATIC = 'static', // 7 days'
};
// Cache instances with different TTL values'
const cacheInstances = {;
  [CacheCategory.SHORT]: new NodeCache({ stdTTL: 300, checkperiod: "60 "}), // 5 min;"
  [CacheCategory.MEDIUM]: new NodeCache({ stdTTL: 1800, checkperiod: "300 "}), // 30 min;"
  [CacheCategory.LONG]: new NodeCache({ stdTTL: 86400, checkperiod: "3600 "}), // 24 hours;"
  [CacheCategory.STATIC]: new NodeCache({ stdTTL: 604800, checkperiod: "7200 "}), // 7 days;"
};";"
;"
// Cache keys for consistent naming;"
export const cacheKeys = {;";,"
  categories: 'api:categories',;
  blog: {
    all: 'api:blog:all',;
    bySlug: "(slug: string) => `api:blog:${slug"}`,;"
    search: "(query: string) => `api:blog:search:${query"}`,;"
  },;"
  jobs: {
    all: 'api:jobs:all',;
    filtered: "(params: string) => `api:jobs:filtered:${params"}`,;"
  },;"
  search: {
    results: "(query: string) => `api:search:${query"}`,;"
    suggestions: "(query: string) => `api:search:suggest:${query"}`,;"
  },;"
  talent: {
    all: 'api:talent:all',;
    filtered: "(params: string) => `api:talent:filtered:${params"}`,;
  },;
};"
/**;";"
 * Get data from cache;"
 */;"
export function getCacheItem<T>(;"
  key: "string"
  category: CacheCategory = CacheCategory.MEDIUM,;
): T | undefined {;"
  try {;";"
    const cache = cacheInstances[category];"
    const value = cache.get<T>(key);"
    if (value) {;"
      logDebug(`Cache HIT: "${key"} catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {}(${category})`);"
      return value;"
    };"
    logDebug(`Cache MISS: "${key"} (${category})`);"
    return undefined;"
  } catch {;"
    logErrorToProduction(`Cache GET error for ${key}`, error as Error, {;"
      cacheKey: key,;