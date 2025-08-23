import NodeCache from 'node-cache';
import { logDebug, logErrorToProduction } from '@/utils/productionLogger';

// Cache categories with different TTL values
export enum CacheCategory {
  SHORT = 'short',    // 5 minutes
  MEDIUM = 'medium',  // 30 minutes  
  LONG = 'long',      // 24 hours
  STATIC = 'static'   // 7 days
}

// Cache instances with different TTL values
const cacheInstances = {
  [CacheCategory.SHORT]: new NodeCache({ stdTTL: 300, checkperiod: 60 }),      // 5 min
  [CacheCategory.MEDIUM]: new NodeCache({ stdTTL: 1800, checkperiod: 300 }),   // 30 min
  [CacheCategory.LONG]: new NodeCache({ stdTTL: 86400, checkperiod: 3600 }),   // 24 hours
  [CacheCategory.STATIC]: new NodeCache({ stdTTL: 604800, checkperiod: 7200 }) // 7 days
};

// Cache keys for consistent naming
export const cacheKeys = {
  categories: 'api:categories',
  blog: {
    all: 'api:blog:all',
    bySlug: (slug: string) => `api:blog:${slug}`,
    search: (query: string) => `api:blog:search:${query}`
  },
  jobs: {
    all: 'api:jobs:all',
    filtered: (params: string) => `api:jobs:filtered:${params}`
  },
  search: {
    results: (query: string) => `api:search:${query}`,
    suggestions: (query: string) => `api:search:suggest:${query}`
  },
  talent: {
    all: 'api:talent:all',
    filtered: (params: string) => `api:talent:filtered:${params}`
  }
};

/**
 * Get data from cache
 */
export function getCacheItem<T>(key: string, category: CacheCategory = CacheCategory.MEDIUM): T | undefined {
  try {
    const cache = cacheInstances[category];
    const value = cache.get<T>(key);
    if (value) {
      logDebug(`Cache HIT: ${key} (${category})`);
      return value;
    }
    logDebug(`Cache MISS: ${key} (${category})`);
    return undefined;
  } catch (error) {
    logErrorToProduction(`Cache GET error for ${key}`, error as Error, { cacheKey: key, category });
    return undefined;
  }
}

/**
 * Set data in cache
 */
export function setCacheItem<T>(
  key: string, 
  value: T, 
  category: CacheCategory = CacheCategory.MEDIUM,
  customTTL?: number
): boolean {
  try {
    const cache = cacheInstances[category];
    const success = customTTL 
      ? cache.set(key, value, customTTL)
      : cache.set(key, value);
    
      if (success) {
        logDebug(`Cache SET: ${key} (${category})`);
      }
    return success;
  } catch (error) {
    logErrorToProduction(`Cache SET error for ${key}`, error as Error, { cacheKey: key, category });
    return false;
  }
}

/**
 * Delete cache item
 */
export function deleteCacheItem(key: string, category: CacheCategory = CacheCategory.MEDIUM): boolean {
  try {
    const cache = cacheInstances[category];
    const success = cache.del(key) > 0;
      if (success) {
        logDebug(`Cache DELETE: ${key} (${category})`);
      }
    return success;
  } catch (error) {
    logErrorToProduction(`Cache DELETE error for ${key}`, error as Error, { cacheKey: key, category });
    return false;
  }
}

/**
 * Clear all cache for a category
 */
export function clearCache(category?: CacheCategory): void {
  try {
    if (category) {
      cacheInstances[category].flushAll();
      logDebug(`Cache CLEARED: ${category}`);
    } else {
      // Clear all caches
      Object.values(cacheInstances).forEach(cache => cache.flushAll());
      logDebug('Cache CLEARED: all categories');
    }
  } catch (error) {
    logErrorToProduction('Cache CLEAR error', error as Error, { category });
  }
}

/**
 * Get cache statistics
 */
export function getCacheStats(category: CacheCategory) {
  try {
    const cache = cacheInstances[category];
    const stats = cache.getStats();
    return {
      keys: cache.keys().length,
      hits: stats.hits,
      misses: stats.misses,
      hitRate: stats.hits / (stats.hits + stats.misses) || 0,
      vsize: stats.vsize,
      ksize: stats.ksize
    };
  } catch (error) {
    logErrorToProduction(`Cache STATS error for ${category}`, error as Error, { category });
    return null;
  }
}

/**
 * Cache wrapper HOF for API handlers
 */
export function withCache<T>(
  cacheKey: string,
  category: CacheCategory = CacheCategory.MEDIUM,
  customTTL?: number
) {
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = async function(...args: any[]) {
      // Try to get from cache first
      const cachedResult = getCacheItem<T>(cacheKey, category);
      if (cachedResult !== undefined) {
        return cachedResult;
      }

      // Execute original method
      const result = await originalMethod.apply(this, args);
      
      // Cache the result
      setCacheItem(cacheKey, result, category, customTTL);
      
      return result;
    };

    return descriptor;
  };
}

/**
 * Cache-or-compute pattern for async functions
 */
export async function cacheOrCompute<T>(
  key: string,
  computeFn: () => Promise<T>,
  category: CacheCategory = CacheCategory.MEDIUM,
  customTTL?: number
): Promise<T> {
  // Try cache first
  const cached = getCacheItem<T>(key, category);
  if (cached !== undefined) {
    return cached;
  }

  // Compute and cache
  try {
    const result = await computeFn();
    setCacheItem(key, result, category, customTTL);
    return result;
  } catch (error) {
    logErrorToProduction(`Cache compute error for ${key}`, error as Error, { cacheKey: key, category });
    throw error;
  }
}

/**
 * HTTP cache headers helper
 */
export function getCacheHeaders(category: CacheCategory): { [key: string]: string } {
  const headers: { [key: string]: string } = {};

  switch (category) {
    case CacheCategory.SHORT:
      headers['Cache-Control'] = 'public, s-maxage=300, stale-while-revalidate=600';
      break;
    case CacheCategory.MEDIUM:
      headers['Cache-Control'] = 'public, s-maxage=1800, stale-while-revalidate=3600';
      break;
    case CacheCategory.LONG:
      headers['Cache-Control'] = 'public, s-maxage=86400, stale-while-revalidate=172800';
      break;
    case CacheCategory.STATIC:
      headers['Cache-Control'] = 'public, s-maxage=604800, stale-while-revalidate=1209600';
      break;
  }

  headers['X-Cache-Strategy'] = category;
  return headers;
}

/**
 * Apply cache headers to Next.js API response
 */
export function applyCacheHeaders(res: any, category: CacheCategory): void {
  const headers = getCacheHeaders(category);
  Object.entries(headers).forEach(([key, value]) => {
    res.setHeader(key, value);
  });
}

export default {
  get: getCacheItem,
  set: setCacheItem,
  delete: deleteCacheItem,
  clear: clearCache,
  stats: getCacheStats,
  withCache,
  cacheOrCompute,
  applyCacheHeaders,
  CacheCategory,
  cacheKeys
}; 