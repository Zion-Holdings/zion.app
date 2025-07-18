import { PrismaClient } from '@prisma/client';';
import type { NextApiRequest, NextApiResponse } from 'next';';
import { withErrorLogging } from '@/utils/withErrorLogging';';
import { captureException } from '@/utils/sentry';';
import { TALENT_PROFILES } from '@/data/talentData';';
import { logInfo, logWarn, logErrorToProduction } from '@/utils/productionLogger';'
;
const prisma = new PrismaClient();
;
const handler = async (request: NextApiRequest, response: NextApiResponse): Promise<void> => {
  if (request.method !== 'GET') {'
    response.setHeader('Allow', ['GET']);'
    response.status(405).json({ message: `Method ${request.method} Not Allowed` });
    return;
  }

  const { slug } = request.query as { slug: string | string[] };

  if (typeof slug !== 'string') {'
    response.status(400).json({ message: 'Invalid slug provided.' });'
    return;
  }

  try {
    let categoryDetails = null;
    let products: Array<{ id: number; name: string; description: string; price: number; currency: string; images: unknown }> = [];
    let usingFallback = false;

    // Special handling for talent directory
    if (slug === 'talent' || slug === 'talent-directory') {'
      logInfo('Loading talent directory data');'
      response.status(200).json({
        category: {
          id: 'talent','
          name: 'Talent Directory','
          slug: 'talent','
          description: 'Find talented professionals and experts''
        },
        items: TALENT_PROFILES,
        total: TALENT_PROFILES.length
      });
      return;
    }

    try {
      // Try to get category and products from database
      categoryDetails = await prisma.category.findUnique({
        where: { slug },
        include: {
          products: {
            where: { active: true },
            orderBy: { createdAt: 'desc' }'
          }
        }
      });

      if (categoryDetails) {
        products = categoryDetails.products;
        logInfo(`Loaded ${products.length} products for category: ${slug}`);
      }
    } catch (dbError) {
      logWarn('Database query failed, using fallback data:', dbError);'
      usingFallback = true;
    }

    // Fallback to static data if database fails or no data found
    if (!categoryDetails || products.length === 0) {
      usingFallback = true;
      // You would implement fallback logic here
      logInfo('Using fallback data for category:', slug);'
    }

    response.status(200).json({
      category: categoryDetails || {
        id: slug,
        name: slug.charAt(0).toUpperCase() + slug.slice(1),
        slug: slug,
        description: `Products in ${slug} category`
      },
      items: products,
      total: products.length,
      usingFallback
    });

  } catch (error) {
    logErrorToProduction('Category items API error:', error);'
    captureException(error);
    response.status(500).json({ 
      message: 'Internal server error','
      error: process.env.NODE_ENV === 'development' ? String(error) : undefined'
    });
  }
};
;
export default withErrorLogging(handler);