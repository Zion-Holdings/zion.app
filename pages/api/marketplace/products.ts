import { PrismaClient, type Product as ProductModel } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import { withErrorLogging } from '@/utils/withErrorLogging';
import { connectWithTimeout } from '@/utils/prismaConnect';
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';


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
  logInfo('Marketplace products API handler started.');
  // DATABASE_URL is essential for Prisma Client to connect to the database.
  // This check ensures the service is not attempting to run without proper configuration.
  if (!process.env.DATABASE_URL) {
    logErrorToProduction("DATABASE_URL is not set or empty.");
    return res.status(503).json({ error: 'Service Unavailable: Database configuration is missing.' });
  }
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  res.setHeader('Access-Control-Allow-Origin', '*');

  const page = parseInt(((req.query as any).page as string), 10) || 1;
  const limit = parseInt(((req.query as any).limit as string), 10) || 20;
  const skip = (page - 1) * limit;

  try {
    let products: ProductModel[];
    try {
      logInfo('Attempting to connect to database and fetch products...');
      await connectWithTimeout(prisma);
      products = await prisma.product.findMany({ skip, take: limit });
      logInfo('Successfully fetched products from database.');
      logInfo('Fetched products:', { data: products });
    } catch (e: any) {
      // Logging detailed Prisma error including message, code, meta, and stack for findMany operation.
      logErrorToProduction(
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
      logInfo('Attempting to fetch product stats...');
      stats = await prisma.productReview.groupBy({
        by: ['productId'],
        where: { productId: { in: ids } },
        _avg: { rating: true },
        _count: { id: true },
      });
      logInfo('Successfully fetched product stats.');
      logInfo('Fetched product stats:', { data: stats });
    } catch (e: any) {
      // Logging detailed Prisma error including message, code, meta, and stack for groupBy operation.
      logErrorToProduction(
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
    logErrorToProduction(
      'Generic error in products API handler (fallback catch):',
      {
        message: e.message,
        code: e.code,
        stack: e.stack,
        fullError: e,
      }
    );
    const message =
      e instanceof Error && e.message.includes('timed out')
        ? 'Service Unavailable: Database connection failed.'
        : 'Internal server error while fetching products.';
    return res.status(500).json({ error: message, details: e.message });
  } finally {
    // Ensures Prisma client is disconnected after the request is handled,
    // whether it succeeded or failed, to prevent resource leaks.
    logInfo('Marketplace products API handler finished.');
    await prisma.$disconnect();
  }
}

export default withErrorLogging(handler);
