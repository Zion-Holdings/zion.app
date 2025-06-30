import { PrismaClient, type Product as ProductModel, type Prisma } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import { withErrorLogging } from '@/utils/withErrorLogging';
import * as Sentry from '@sentry/nextjs';

interface ProductStats {
  avg: number | null;
  count: number;
}

const prisma = new PrismaClient();

interface ProductFilters {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  search?: string;
}

type ProductWithStats = ProductModel & {
  averageRating: number | null;
  reviewCount: number;
  title: string; // This was likely intended to be 'name' from ProductModel, or needs specific mapping
};

interface ProductsSuccessResponse {
  products: ProductWithStats[];
  totalCount: number;
  page: number;
  limit: number;
  hasMore: boolean;
}

interface ProductsErrorResponse {
  error: string;
  details?: string;
}

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProductsSuccessResponse | ProductsErrorResponse>
) {
  console.log('Marketplace products API handler started.');
  // DATABASE_URL is essential for Prisma Client to connect to the database.
  // This check ensures the service is not attempting to run without proper configuration.
  if (!process.env.DATABASE_URL) {
    console.error("DATABASE_URL is not set or empty.");
    return res.status(503).json({ error: 'Service Unavailable: Database configuration is missing.' });
  }
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  res.setHeader('Access-Control-Allow-Origin', '*');

  try {
    const page = parseInt((req.query.page as string) || '1', 10);
    const limit = parseInt((req.query.limit as string) || '20', 10);
    const skip = (page - 1) * limit;

    const filters: ProductFilters = {
      category: typeof req.query.category === 'string' ? req.query.category.toLowerCase().trim() : undefined,
      minPrice: typeof req.query.minPrice === 'string' ? parseFloat(req.query.minPrice) : undefined,
      maxPrice: typeof req.query.maxPrice === 'string' ? parseFloat(req.query.maxPrice) : undefined,
      search: typeof req.query.search === 'string' ? req.query.search.toLowerCase().trim() : undefined,
    };

    // Build where clause
    const where: Prisma.ProductWhereInput = {};
    
    if (filters.category) {
      // Assuming category is a string. If it's a relation, adjust accordingly.
      where.category = { equals: filters.category, mode: 'insensitive' };
    }
    
    if (filters.minPrice !== undefined || filters.maxPrice !== undefined) {
      where.price = {};
      if (filters.minPrice !== undefined) {
        where.price.gte = filters.minPrice;
      }
      if (filters.maxPrice !== undefined) {
        where.price.lte = filters.maxPrice;
      }
    }
    
    if (filters.search) {
      where.OR = [
        { name: { contains: filters.search, mode: 'insensitive' } },
        { description: { contains: filters.search, mode: 'insensitive' } },
      ];
    }

    const [products, totalCount] = await Promise.all([
      prisma.product.findMany({
        where,
        skip,
        take: limit,
        orderBy: {
          createdAt: 'desc',
        },
        select: {
          id: true,
          name: true,
          description: true,
          price: true,
          currency: true,
          category: true,
          tags: true,
          images: true,
          createdAt: true,
        },
      }),
      prisma.product.count({ where }),
    ]);

    const ids = products.map((p) => p.id);

    let stats;
    try {
      console.log('Attempting to fetch product stats...');
      stats = await prisma.productReview.groupBy({
        by: ['productId'],
        where: { productId: { in: ids } },
        _avg: { rating: true },
        _count: { id: true },
      });
      console.log('Successfully fetched product stats.');
      console.log('Fetched product stats:', stats);
    } catch (e: any) {
      // Logging detailed Prisma error including message, code, meta, and stack for groupBy operation.
      console.error(
        'Error during database operation [prisma.productReview.groupBy]:',
        {
          message: e.message,
          code: e.code, // Prisma-specific error code
          meta: e.meta, // Additional metadata about the error
          stack: e.stack, // Call stack
          fullError: e, // The complete error object
        },
        { queryParams: { ids } } // Relevant query parameters for context
      );
      // Re-throw the error to be caught by the outer catch block
      throw e;
    }

    const statsMap = new Map<string, ProductStats>(
      stats.map((s) => [s.productId, { avg: s._avg.rating, count: s._count.id }])
    );

    const result: ProductWithStats[] = products.map((p) => {
      const productStats = statsMap.get(p.id);
      return {
        ...p,
        title: p.name,
        averageRating: productStats?.avg ?? null,
        reviewCount: productStats?.count ?? 0,
      };
    });

    const successResponse: ProductsSuccessResponse = {
      products: result, // Use the mapped 'result' which is ProductWithStats[]
      totalCount,
      page,
      limit,
      hasMore: skip + limit < totalCount,
    };
    return res.status(200).json(successResponse);
  } catch (e: unknown) { // Changed from any to unknown
    // Inner try-catch blocks are responsible for logging specific Prisma errors with detailed context.
    // This outer catch block handles any other generic errors that might occur,
    // or errors re-thrown from the inner blocks.
    console.error(
      'Generic error in products API handler (fallback catch):',
      {
        message: e.message, // General error message
        code: e.code,       // Error code, if present (e.g., from a non-Prisma error)
        stack: e.stack,     // Call stack for debugging
        fullError: e,       // The complete error object for comprehensive analysis
      }
    );
    Sentry.captureException(e);
    const errorMessage = e instanceof Error ? e.message : 'An unexpected error occurred.';
    return res
      .status(500)
      .json({ error: 'Internal server error while fetching products.', details: errorMessage });
  } finally {
    // Ensures Prisma client is disconnected after the request is handled,
    // whether it succeeded or failed, to prevent resource leaks.
    console.log('Marketplace products API handler finished.');
    await prisma.$disconnect();
  }
}

export default withErrorLogging(handler);
