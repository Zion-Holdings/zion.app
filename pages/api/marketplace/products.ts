import { PrismaClient, type Product as ProductModel } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import { withErrorLogging } from '@/utils/withErrorLogging';

interface ProductStats {
  avg: number | null;
  count: number;
}

const prisma = new PrismaClient();

interface ProductStats {
  avg: number | null;
  count: number;
}

type ProductWithStats = ProductModel & {
  averageRating: number | null;
  reviewCount: number;
  title: string;
};

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProductWithStats[] | { error: string; details?: string }>
) {
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

  const page = parseInt(req.query.page as string, 10) || 1;
  const limit = parseInt(req.query.limit as string, 10) || 20;
  const skip = (page - 1) * limit;

  try {
    let products: ProductModel[];
    try {
      console.log('Attempting to connect to database and fetch products...');
      products = await prisma.product.findMany({ skip, take: limit });
      console.log('Successfully fetched products from database.');
      console.log('Fetched products:', products);
    } catch (e: any) {
      // Logging detailed Prisma error including message, code, meta, and stack for findMany operation.
      console.error(
        'Error during database operation [prisma.product.findMany]:',
        {
          message: e.message,
          code: e.code, // Prisma-specific error code
          meta: e.meta, // Additional metadata about the error
          stack: e.stack, // Call stack
          fullError: e, // The complete error object
        },
        { queryParams: { skip, limit } } // Relevant query parameters for context
      );
      // Re-throw the error to be caught by the outer catch block
      throw e;
    }

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

    return res.status(200).json(result);
  } catch (e: any) {
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
    return res
      .status(500)
      .json({ error: 'Internal server error while fetching products.', details: e.message || 'An unexpected error occurred.' });
  } finally {
    // Ensures Prisma client is disconnected after the request is handled,
    // whether it succeeded or failed, to prevent resource leaks.
    await prisma.$disconnect();
  }
}

export default withErrorLogging(handler);
