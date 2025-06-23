import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import { withErrorLogging } from '@/utils/withErrorLogging';
import { captureException } from '@/utils/sentry';
import { MARKETPLACE_LISTINGS } from '@/data/listingData';
import { TALENT_PROFILES } from '@/data/talentData';

// Mock category data for fallback
const MOCK_CATEGORIES = {
  services: {
    name: 'AI Services',
    slug: 'services',
    description: 'Professional AI and IT services for your business needs'
  },
  equipment: {
    name: 'Equipment',
    slug: 'equipment', 
    description: 'High-quality equipment and hardware solutions'
  },
  consulting: {
    name: 'AI Consulting',
    slug: 'consulting',
    description: 'Expert AI consulting and strategy services'
  },
  'machine-learning': {
    name: 'Machine Learning',
    slug: 'machine-learning',
    description: 'Cutting-edge machine learning solutions and tools'
  },
  talent: {
    name: 'AI Talent Directory',
    slug: 'talent',
    description: 'Discover and connect with skilled AI professionals and experts'
  }
};

const prisma = new PrismaClient();

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }

  const { slug } = req.query;

  if (typeof slug !== 'string') {
    return res.status(400).json({ message: 'Invalid slug provided.' });
  }

  try {
    let categoryDetails = null;
    let products: any[] = [];
    let usingFallback = false;

    // Special handling for talent category
    if (slug === 'talent') {
      const talentCategory = MOCK_CATEGORIES.talent;
      
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

      return res.status(200).json(responseData);
    }

    try {
      // Try to fetch from database first for non-talent categories
      categoryDetails = await prisma.category.findUnique({
        where: { slug: slug, active: true },
        select: {
          name: true,
          slug: true,
        },
      });

      if (categoryDetails) {
        products = await prisma.product.findMany({
          where: { category: slug },
          select: {
            id: true,
            name: true,
            description: true,
            price: true,
            currency: true,
            images: true,
          },
        });
      }
    } catch (dbError) {
      console.warn('Database query failed, using fallback data:', dbError);
      usingFallback = true;
    }

    // Use fallback data if database query failed or no category found
    if (!categoryDetails || usingFallback) {
      const mockCategory = MOCK_CATEGORIES[slug as keyof typeof MOCK_CATEGORIES];
      
      if (!mockCategory) {
        return res.status(404).json({ 
          message: `Category with slug '${slug}' not found.`,
          available_categories: Object.keys(MOCK_CATEGORIES)
        });
      }

      // Filter marketplace listings by category
      const filteredListings = MARKETPLACE_LISTINGS.filter(item => 
        item.category?.toLowerCase() === slug.toLowerCase() ||
        item.tags?.some(tag => tag.toLowerCase().includes(slug.toLowerCase()))
      );

      categoryDetails = mockCategory;
      products = filteredListings.map(item => ({
        id: item.id,
        name: item.title,
        description: item.description,
        price: item.price,
        currency: 'USD',
        images: item.images ? [{ url: item.images[0], alt: item.title }] : null,
      }));
    }

    // Construct the response data in the format expected by CategoryPage.tsx
    const responseData = {
      category: {
        name: categoryDetails.name,
        slug: categoryDetails.slug,
        description: MOCK_CATEGORIES[slug as keyof typeof MOCK_CATEGORIES]?.description || '',
      },
      items: products,
    };

    return res.status(200).json(responseData);
  } catch (error) {
    console.error(`Failed to fetch items for category ${slug}:`, error);
    
    // Ensure we always return JSON, never HTML
    try {
      captureException(error as Error, {
        extra: { slug, path: req.url },
        user: (req as any).user ? { id: (req as any).user.id, email: (req as any).user.email } : undefined,
      });
    } catch (sentryError) {
      console.error('Sentry capture failed:', sentryError);
    }
    
    return res.status(500).json({ 
      message: 'Internal Server Error while fetching category items.',
      error: process.env.NODE_ENV === 'development' ? (error as Error).message : undefined
    });
  } finally {
    try {
      await prisma.$disconnect();
    } catch (disconnectError) {
      console.error('Prisma disconnect error:', disconnectError);
    }
  }
}

export default withErrorLogging(handler);
