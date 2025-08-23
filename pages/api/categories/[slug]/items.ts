import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import { withErrorLogging } from '@/utils/withErrorLogging';
import { captureException } from '@/utils/sentry';
import { MARKETPLACE_LISTINGS } from '@/data/listingData';
import { TALENT_PROFILES } from '@/data/talentData';
import { logInfo, logWarn, logErrorToProduction } from '@/utils/productionLogger';


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
  hardware: {
    name: 'Hardware',
    slug: 'hardware',
    description: 'Servers, networking gear and other hardware'
  },
  consulting: {
    name: 'AI Consulting',
    slug: 'consulting',
    description: 'Expert AI consulting and strategy services'
  },
  'ai-models-apis': {
    name: 'AI Models & APIs',
    slug: 'ai-models-apis',
    description: 'Ready to use AI models, endpoints and APIs'
  },
  'content-creation': {
    name: 'Content Creation',
    slug: 'content-creation',
    description: 'Tools for generating and managing content'
  },
  'data-analysis': {
    name: 'Data Analysis',
    slug: 'data-analysis',
    description: 'Analytics and business intelligence solutions'
  },
  'computer-vision': {
    name: 'Computer Vision',
    slug: 'computer-vision',
    description: 'Visual recognition and imaging tools'
  },
  'cloud-services': {
    name: 'Cloud Services',
    slug: 'cloud-services',
    description: 'Hosted platforms and SaaS offerings'
  },
  security: {
    name: 'Security',
    slug: 'security',
    description: 'Security monitoring and protection tools'
  },
  marketing: {
    name: 'Marketing',
    slug: 'marketing',
    description: 'Marketing and advertising solutions'
  },
  talents: {
    name: 'AI Talent Directory',
    slug: 'talents',
    description: 'Discover and connect with skilled AI professionals and experts'
  },
  innovation: {
    name: 'Innovation',
    slug: 'innovation',
    description: 'Cutting-edge innovations and research'
  }
};

const prisma = new PrismaClient();

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }

  const { slug } = req.query as { slug: string | string[] };

  if (typeof slug !== 'string') {
    return res.status(400).json({ message: 'Invalid slug provided.' });
  }

  try {
    let categoryDetails = null;
    let products: any[] = [];
    let usingFallback = false;

    // Special handling for talent directory
    if (slug === 'talents') {
      const talentCategory = MOCK_CATEGORIES.talents;
      
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
      // Reduce timeout and add better error handling
      const dbQueryPromise = Promise.race([
        (async () => {
          const categoryDetails = await prisma.category.findUnique({
            where: { slug: slug, active: true },
            select: {
              name: true,
              slug: true,
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
      const mockCategory = MOCK_CATEGORIES[slug as keyof typeof MOCK_CATEGORIES];
      
      if (!mockCategory) {
        return res.status(404).json({ 
          message: `Category with slug '${slug}' not found.`,
          available_categories: Object.keys(MOCK_CATEGORIES)
        });
      }

      // Enhanced category matching for better results
      const normalizeString = (str: string) => 
        str.toLowerCase().replace(/[^a-z0-9]/g, '').trim();
      
      const normalizedSlug = normalizeString(slug);
      
      const filteredListings = MARKETPLACE_LISTINGS.filter(item => {
        const normalizedCategory = item.category ? normalizeString(item.category) : '';
        const normalizedTags = item.tags?.map(tag => normalizeString(tag)) || [];
        
        // Direct category match
        if (normalizedCategory === normalizedSlug) return true;
        
        // Category contains slug or slug contains category
        if (normalizedCategory.includes(normalizedSlug) || normalizedSlug.includes(normalizedCategory)) return true;
        
        // Tag matches
        if (normalizedTags.some(tag => tag === normalizedSlug || tag.includes(normalizedSlug) || normalizedSlug.includes(tag))) return true;
        
        // Special mapping for common category aliases
        const categoryMappings: Record<string, string[]> = {
          services: ['service', 'consulting', 'support'],
          equipment: ['hardware', 'device', 'computer'],
          hardware: ['hardware', 'device', 'computer', 'equipment'],
          aimodelsapis: ['ai', 'model', 'api', 'artificial', 'intelligence'],
          contentcreation: ['content', 'creative', 'writing', 'generation'],
          dataanalysis: ['data', 'analytics', 'analysis', 'intelligence', 'bi'],
          computervision: ['vision', 'image', 'visual', 'recognition'],
          cloudservices: ['cloud', 'saas', 'platform', 'hosting'],
          security: ['secure', 'protection', 'safety', 'monitoring'],
          marketing: ['promotion', 'advertising', 'campaign', 'social'],
          talents: ['talent', 'freelancer', 'expert'],
          innovation: ['innovation', 'research', 'future']
        };
        
        if (categoryMappings[normalizedSlug]) {
          return categoryMappings[normalizedSlug].some(alias => 
            normalizedCategory.includes(alias) || 
            normalizedTags.some(tag => tag.includes(alias))
          );
        }
        
        return false;
      });

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
    logErrorToProduction('Failed to fetch items for category ${slug}:', { data: error });
    
    // Ensure we always return JSON, never HTML
    try {
      captureException(error as Error, {
        extra: { slug, path: req.url },
        user: (req as any).user ? { id: (req as any).user.id, email: (req as any).user.email } : undefined,
      });
    } catch (sentryError) {
      logErrorToProduction('Sentry capture failed:', { data: sentryError });
    }
    
    return res.status(500).json({ 
      message: 'Internal Server Error while fetching category items.',
      error: process.env.NODE_ENV === 'development' ? (error as Error).message : undefined
    });
  } finally {
    try {
      await prisma.$disconnect();
    } catch (disconnectError) {
      logErrorToProduction('Prisma disconnect error:', { data: disconnectError });
    }
  }
}

export default withErrorLogging(handler);
