import NodeCache from 'node-cache';

// Initialize cache instances with different TTL settings
const shortCache = new NodeCache({ 
  stdTTL: 300,      // 5 minutes
  checkperiod: 60,  // Check for expired keys every minute
  useClones: false  // Better performance
});

const mediumCache = new NodeCache({ 
  stdTTL: 1800,     // 30 minutes
  checkperiod: 300, // Check every 5 minutes
  useClones: false
});

const longCache = new NodeCache({ 
  stdTTL: 3600,     // 1 hour
  checkperiod: 600, // Check every 10 minutes
  useClones: false
});

// Cache categories for different durations
export const cacheCategory = {
  SHORT: 'short',   // User sessions, search results
  MEDIUM: 'medium', // API responses, product data
  LONG: 'long'      // Static content, configuration
} as const;

type CacheCategory = typeof cacheCategory[keyof typeof cacheCategory];

/**
 * Get cached value by key and category
 */
export function getCached<T>(key: string, category: CacheCategory = cacheCategory.MEDIUM): T | undefined {
  try {
    const cache = getCacheInstance(category);
    return cache.get<T>(key);
  } catch (error) {
    console.warn(`Cache get error for key ${key}:`, error);
    return undefined;
  }
}

/**
 * Set cached value with optional TTL override
 */
export function setCached<T>(
  key: string, 
  value: T, 
  category: CacheCategory = cacheCategory.MEDIUM,
  ttl?: number
): boolean {
  try {
    const cache = getCacheInstance(category);
    return cache.set(key, value, ttl);
  } catch (error) {
    console.warn(`Cache set error for key ${key}:`, error);
    return false;
  }
}

/**
 * Delete cached value
 */
export function deleteCached(key: string, category: CacheCategory = cacheCategory.MEDIUM): number {
  try {
    const cache = getCacheInstance(category);
    return cache.del(key);
  } catch (error) {
    console.warn(`Cache delete error for key ${key}:`, error);
    return 0;
  }
}

/**
 * Clear all cache in a category
 */
export function clearCache(category: CacheCategory = cacheCategory.MEDIUM): void {
  try {
    const cache = getCacheInstance(category);
    cache.flushAll();
  } catch (error) {
    console.warn(`Cache clear error for category ${category}:`, error);
  }
}

/**
 * Get cache statistics
 */
export function getCacheStats(category: CacheCategory = cacheCategory.MEDIUM) {
  try {
    const cache = getCacheInstance(category);
    return cache.getStats();
  } catch (error) {
    console.warn(`Cache stats error for category ${category}:`, error);
    return null;
  }
}

/**
 * Cache wrapper for functions
 */
export async function withCache<T>(
  key: string,
  fn: () => Promise<T>,
  category: CacheCategory = cacheCategory.MEDIUM,
  ttl?: number
): Promise<T> {
  // Check cache first
  const cached = getCached<T>(key, category);
  if (cached !== undefined) {
    return cached;
  }

  // Execute function and cache result
  try {
    const result = await fn();
    setCached(key, result, category, ttl);
    return result;
  } catch (error) {
    // Don't cache errors
    throw error;
  }
}

/**
 * Get appropriate cache instance for category
 */
function getCacheInstance(category: CacheCategory): NodeCache {
  switch (category) {
    case cacheCategory.SHORT:
      return shortCache;
    case cacheCategory.LONG:
      return longCache;
    case cacheCategory.MEDIUM:
    default:
      return mediumCache;
  }
}

/**
 * Cache key generators for common patterns
 */
export const cacheKeys = {
  user: (id: string) => `user:${id}`,
  search: (query: string, filters?: string) => `search:${query}${filters ? `:${filters}` : ''}`,
  api: (endpoint: string, params?: string) => `api:${endpoint}${params ? `:${params}` : ''}`,
  page: (path: string) => `page:${path}`,
  category: (slug: string) => `category:${slug}`,
  product: (id: string) => `product:${id}`,
} as const;

// Initialize cache event listeners
shortCache.on('expired', (key, value) => {
  console.log(`Short cache expired: ${key}`);
});

mediumCache.on('expired', (key, value) => {
  console.log(`Medium cache expired: ${key}`);
});

longCache.on('expired', (key, value) => {
  console.log(`Long cache expired: ${key}`);
});

export default {
  get: getCached,
  set: setCached,
  del: deleteCached,
  clear: clearCache,
  stats: getCacheStats,
  withCache,
  keys: cacheKeys,
  category: cacheCategory
}; 