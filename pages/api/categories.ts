import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import { withErrorLogging } from '@/utils/withErrorLogging';
import { CATEGORIES } from '@/data/categories';
import { cacheOrCompute, CacheCategory, applyCacheHeaders, cacheKeys } from '@/lib/serverCache';
import { logInfo, logWarn, logErrorToProduction } from '@/utils/productionLogger';


const prisma = new PrismaClient({
  log: ['error'],
  datasources: {
    db: {
      url: process.env['DATABASE_URL'] || '',
    },
  },
});

// Add connection timeout and proper error handling
async function getCategoriesFromDB() {
  const timeoutPromise = new Promise((_, reject) =>
    setTimeout(() => reject(new Error('Database query timeout')), 3000)
  );

  const queryPromise = prisma.category.findMany({
    where: { active: true },
    select: {
      id: true,
      name: true,
      slug: true,
      icon: true,
    },
    orderBy: { name: 'asc' },
  });

  try {
    const result = await Promise.race([queryPromise, timeoutPromise]);
    return result as Array<{ id: number; name: string; slug: string; icon: string }>;
  } finally {
    // Ensure connection is closed
    await prisma.$disconnect().catch(() => {});
  }
}

// Remove custom ApiHandler type and ensure correct handler signature
const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    res.status(405).json({ error: `Method ${req.method} Not Allowed` });
    return;
  }

  try {
    // Use cache-or-compute pattern with 30-minute cache
    const categories = await cacheOrCompute(
      cacheKeys.categories,
      async () => {
        logInfo('Fetching categories from database...');
        try {
          const dbCategories = await getCategoriesFromDB();
          if (dbCategories && dbCategories.length > 0) {
            logInfo(`Successfully fetched ${dbCategories.length} categories from DB`);
            return dbCategories;
          }
        } catch (_dbError) {
          logWarn('Database query failed, using fallback:', { data:  { data: dbError } });
        }
        // Fallback to static data if DB fails
        if (CATEGORIES && CATEGORIES.length > 0) {
          logInfo(`Using ${CATEGORIES.length} fallback categories`);
          return CATEGORIES;
        }
        // Return empty array if no data available
        logWarn('No categories data available');
        return [];
      },
      CacheCategory.MEDIUM, // 30 minutes cache
      1800 // 30 minutes TTL
    );
    // Apply appropriate cache headers
    applyCacheHeaders(res, CacheCategory.MEDIUM);
    // Add performance headers
    res.setHeader('X-Response-Time', Date.now().toString());
    res.setHeader('X-Data-Source', categories.length > 0 ? 'cached' : 'computed');
    res.status(200).json(categories);
    return;
  } catch (error: unknown) {
    logErrorToProduction('Categories API error:', { data: error });
    // Return fallback data even on error
    if (CATEGORIES && CATEGORIES.length > 0) {
      applyCacheHeaders(res, CacheCategory.SHORT); // Shorter cache for fallback
      res.setHeader('X-Data-Source', 'fallback');
      res.status(200).json(CATEGORIES);
      return;
    }
    res.status(500).json({ 
      error: 'Categories temporarily unavailable. Please try again later.' 
    });
    return;
  }
};

export default withErrorLogging(handler);
