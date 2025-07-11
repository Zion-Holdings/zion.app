import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import { withErrorLogging } from '@/utils/withErrorLogging';
import { captureException } from '@/utils/sentry';
import { MARKETPLACE_LISTINGS } from '@/data/listingData';
import { TALENT_PROFILES } from '@/data/talentData';
import { logInfo, logWarn, logErrorToProduction } from '@/utils/productionLogger';


const prisma = new PrismaClient();

// Remove custom ApiHandler type and use correct types
const handler = async (request: NextApiRequest, response: NextApiResponse): Promise<void> => {
  if (request['method'] !== 'GET') {
    response.setHeader('Allow', ['GET']);
    response.status(405).json({ message: `Method ${request['method']} Not Allowed` });
    return;
  }

  const { slug } = request['query'] as { slug: string | string[] };

  if (typeof slug !== 'string') {
    response.status(400).json({ message: 'Invalid slug provided.' });
    return;
  }

  try {
    let categoryDetails = null;
    let products: any[] = [];
    let usingFallback = false;

    // Special handling for talent directory
    if (slug === 'talents') {
      const talentCategory = {
        name: 'AI Talent Directory',
        slug: 'talents',
        description: 'Discover and connect with skilled AI professionals and experts'
      };
      
      // Convert talent profiles to match the expected Listing interface format
      const talentItems = TALENT_PROFILES.map(profile => ({
        id: profile.id,
        title: profile.full_name,
        description: profile.bio || `${profile.professional_title} with ${profile.years_experience || 0} years experience`,
        category: 'talent',
        subcategory: profile.professional_title,
        image: profile.profile_picture_url || '/images/default-avatar.png',
        tags: profile.skills || [],
        author: profile.full_name,
        authorImage: profile.profile_picture_url,
        aiScore: profile.average_rating ? Math.round(profile.average_rating * 20) : undefined, // Convert 5-star to 100-point scale
        rating: profile.average_rating,
        reviewCount: profile.rating_count,
        price: profile.hourly_rate,
        createdAt: new Date().toISOString(), // Default to current date since we don't have creation dates
        // Additional talent-specific fields
        name: profile.full_name, // For backward compatibility
        currency: 'USD',
        images: profile.profile_picture_url ? [{ url: profile.profile_picture_url, alt: profile.full_name }] : null,
        type: 'talent',
        role: profile.professional_title,
        experience: profile.years_experience,
        skills: profile.skills,
        location: profile.location,
        availability: profile.availability_type,
        hourlyRate: profile.hourly_rate
      }));

      const responseData = {
        category: {
          name: talentCategory.name,
          slug: talentCategory.slug,
          description: talentCategory.description,
        },
        items: talentItems,
      };

      response.status(200).json(responseData);
      return;
    }

    try {
      // Reduce timeout and add better error handling
      const dbQueryPromise = Promise.race([
        (async () => {
          const categoryDetails = await prisma.category.findUnique({
            where: { slug: slug, active: true },
            select: {
              name: true,
              slug: true,
              // description: true, // Removed as it does not exist in the type
            },
          });

          if (categoryDetails) {
            const products = await prisma.product.findMany({
              where: { category: slug },
              select: {
                id: true,
                name: true,
                description: true,
                price: true,
                currency: true,
                images: true,
              },
              take: 50, // Limit results for better performance
            });
            return { categoryDetails, products };
          }
          return { categoryDetails: null, products: [] };
        })(),
        new Promise((_, reject) => 
          setTimeout(() => reject(new Error('Database query timeout')), 8000) // Increased to 8s for better reliability
        )
      ]) as Promise<{ categoryDetails: any, products: any[] }>;

      const result = await dbQueryPromise;
      categoryDetails = result.categoryDetails;
      products = result.products;
      
      // If we got data but it's empty, still use fallback for better UX
      if (categoryDetails && products.length === 0) {
        logInfo('Database returned empty results, using fallback data for better UX');
        usingFallback = true;
      }
    } catch (dbError) {
      logWarn('Database query failed or timed out, using fallback data:', { data: dbError });
      usingFallback = true;
    }

    // Use fallback data if database query failed or no category found
    if (!categoryDetails || usingFallback) {
      // If category not found in database, return 404 with available categories
      const availableCategories = await prisma.category.findMany({
        where: { active: true },
        select: { slug: true, name: true },
        orderBy: { name: 'asc' },
      });

      response.status(404).json({ 
        message: `Category with slug '${slug}' not found.`,
        available_categories: availableCategories.map(cat => ({ name: cat.name, slug: cat.slug }))
      });
      return;
    }

    // Construct the response data in the format expected by CategoryPage.tsx
    const responseData = {
      category: {
        name: categoryDetails.name,
        slug: categoryDetails.slug,
        description: categoryDetails.description || '',
      },
      items: products,
    };

    response.status(200).json(responseData);
    return;
  } catch (error) {
    logErrorToProduction('Failed to fetch items for category ${slug}:', { data: error });
    
    // Ensure we always return JSON, never HTML
    try {
      captureException(error as Error, {
        extra: { slug, path: request['url'] },
        user: (request as any).user ? { id: (request as any).user.id, email: (request as any).user.email } : undefined,
      });
    } catch (sentryError) {
      logErrorToProduction('Sentry capture failed:', { data: sentryError });
    }
    
    response.status(500).json({ 
      message: 'Internal Server Error while fetching category items.',
      error: process.env.NODE_ENV === 'development' ? (error as Error).message : undefined
    });
    return;
  } finally {
    try {
      await prisma.$disconnect();
    } catch (disconnectError) {
      logErrorToProduction('Prisma disconnect error:', { data: disconnectError });
    }
  }
};

export default withErrorLogging(handler);
