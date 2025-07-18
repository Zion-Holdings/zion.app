import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import { withErrorLogging } from '@/utils/withErrorLogging';
import { CATEGORIES } from '@/data/categories';
import { cacheOrCompute, CacheCategory, applyCacheHeaders, cacheKeys } from '@/lib/serverCache';
import { logInfo, logWarn, logErrorToProduction } from '@/utils/productionLogger';
;
const prisma = new PrismaClient({
  log: ['error'],'
  datasources: {
    db: {
      url: process.env['DATABASE_URL'] || '','
    },
  },
});
;
export default withErrorLogging(async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {'
    return res.status(405).json({ error: 'Method not allowed' });'
  }

  try {
    // Apply cache headers
    applyCacheHeaders(res, CacheCategory.CATEGORIES, 1800); // 30 minutes

    // Get cached or compute categories
    const categories = await cacheOrCompute(
      cacheKeys.categories.all,
      async () => {
        try {
          // Try to get categories from database first
          const dbCategories = await prisma.category.findMany({
            where: { active: true },
            orderBy: { order: 'asc' },'
            select: {
              id: true,
              name: true,
              slug: true,
              description: true,
              icon: true,
              color: true,
              order: true,
              _count: {
                select: { products: true }
              }
            }
          });

          if (dbCategories.length > 0) {
            logInfo('Categories loaded from database:', { count: dbCategories.length });'
            return dbCategories.map(cat => ({
              ...cat,
              productCount: cat._count.products
            }));
          }
        } catch (error) {
          logWarn('Failed to load categories from database, using fallback:', error);'
        }

        // Fallback to static categories
        logInfo('Using static categories fallback');'
        return CATEGORIES;
      }
    );

    res.status(200).json(categories);
  } catch (error) {
    logErrorToProduction('Categories API error:', error);'
    res.status(500).json({ error: 'Internal server error' });'
  }
});