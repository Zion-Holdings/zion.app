import { PrismaClient, type Product as ProductModel } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import { withErrorLogging } from '@/utils/withErrorLogging';

interface ProductStats {
  avg: number | null;
  count: number;
}

const prisma = new PrismaClient();

type ProductWithStats = ProductModel & {
  averageRating: number | null;
  reviewCount: number;
  title: string;
};

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProductWithStats[] | { error: string }>
) {
  console.log(process.env.DATABASE_URL ? "DATABASE_URL is set" : "DATABASE_URL is not set");
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
      products = await prisma.product.findMany({ skip, take: limit });
      console.log('Fetched products:', products);
    } catch (e) {
      console.error('Error fetching products from Prisma:', e, { queryParams: { skip, limit } });
      // Re-throw the error to be caught by the outer catch block
      throw e;
    }

    const ids = products.map((p) => p.id);

    let stats;
    try {
      stats = await prisma.productReview.groupBy({
        by: ['productId'],
        where: { productId: { in: ids } },
        _avg: { rating: true },
        _count: { id: true },
      });
      console.log('Fetched product stats:', stats);
    } catch (e) {
      console.error('Error fetching product stats from Prisma:', e, { queryParams: { ids } });
      // Re-throw the error to be caught by the outer catch block
      throw e;
    }

    const statsMap = new Map<string, ProductStats>(
      stats.map((s) => [s.productId, { avg: s._avg.rating, count: s._count.id }])
    );

    const result: ProductWithStats[] = products.map((p) => ({
      ...p,
      title: p.name,
      averageRating: statsMap.get(p.id)?.avg ?? null,
      reviewCount: statsMap.get(p.id)?.count ?? 0,
    }));

    return res.status(200).json(result);
  } catch (e) {
    // The specific errors are already logged by the inner try-catch blocks
    // This outer catch block now primarily handles the HTTP response
    return res
      .status(500)
      .json({ error: 'Internal server error while fetching products.' });
  } finally {
    await prisma.$disconnect();
  }
}

export default withErrorLogging(handler);
