import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import { withErrorLogging } from '@/utils/withErrorLogging';
import { CATEGORIES } from '@/data/categories';
import { withCache, cacheKeys, cacheCategory } from '@/lib/cache';

const prisma = new PrismaClient();

async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  try {
    // Use cache to improve performance (30 minute cache for categories)
    const categories = await withCache(
      cacheKeys.api('categories', 'active'),
      async () => {
        const dbCategories = await prisma.category.findMany({
          where: { active: true },
          select: {
            id: true,
            name: true,
            slug: true,
            icon: true,
          },
          orderBy: { name: 'asc' },
        });

        // Return DB categories if found, otherwise fallback to static data
        if (dbCategories.length > 0) {
          return dbCategories;
        }
        
        return CATEGORIES.length > 0 ? CATEGORIES : [];
      },
      cacheCategory.MEDIUM, // 30 minute cache
      1800 // 30 minutes in seconds
    );

    // Set cache headers for client-side caching
    res.setHeader('Cache-Control', 'public, s-maxage=1800, stale-while-revalidate=3600');
    res.setHeader('X-Cache', 'server-cached');
    
    return res.status(200).json(categories);

  } catch (error) {
    console.error('Failed to fetch categories from database:', error);
    // It's important to return a 500 status code when the database operation fails.
    // Optionally, you could still return CATEGORIES as fallback data in the client-side service
    // if the API call fails, but the API itself should indicate the error.
    return res.status(500).json({ error: 'Failed to fetch categories from database.' });
  } finally {
    // Ensure prisma client is disconnected regardless of the outcome.
    // Adding a check to ensure prisma has a $disconnect method,
    // which is good practice if the prisma client instance might be mocked or altered in tests.
    if (prisma && typeof prisma.$disconnect === 'function') {
      await prisma.$disconnect();
    }
  }
}

export default withErrorLogging(handler);
