import { PrismaClient, type Product as ProductModel } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import { withErrorLogging } from '@/utils/withErrorLogging';

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
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  res.setHeader('Access-Control-Allow-Origin', '*');

  const page = parseInt(req.query.page as string, 10) || 1;
  const limit = parseInt(req.query.limit as string, 10) || 20;
  const skip = (page - 1) * limit;

  try {
    const products = await prisma.product.findMany({ skip, take: limit });
    const ids = products.map((p) => p.id);

    const stats = await prisma.productReview.groupBy({
      by: ['productId'],
      where: { productId: { in: ids } },
      _avg: { rating: true },
      _count: { id: true },
    });

    const statsMap = new Map(
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
    console.error('Error fetching products:', e);
    return res
      .status(500)
      .json({ error: 'Internal server error while fetching products.' });
  } finally {
    await prisma.$disconnect();
  }
}

export default withErrorLogging(handler);
