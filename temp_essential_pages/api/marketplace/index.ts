import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import * as Sentry from '@sentry/nextjs';
import { withErrorLogging } from '@/utils/withErrorLogging';
import { MARKETPLACE_PRODUCTS } from '@/data/marketplace-products';
import type { MarketplaceProduct } from '@/types/marketplace';

const prisma = new PrismaClient();

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ products: unknown[] } | { error: string }>
) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const page = parseInt((req.query.page as string) || '1', 10);
  const limit = parseInt((req.query.limit as string) || '20', 10);
  const skip = (page - 1) * limit;

  try {
    const products = await prisma.product.findMany({
      skip,
      take: limit,
      select: {
        id: true,
        name: true,
        description: true,
        price: true,
        currency: true,
        category: true,
        tags: true,
        images: true,
      },
    });
    return res.status(200).json({ products });
  } catch (error) {
    Sentry.captureException(error);
    console.error('Error fetching marketplace products:', error);
    return res.status(500).json({ error: 'Failed to fetch marketplace products' });
  } finally {
    await prisma.$disconnect();
  }
}

export default withErrorLogging(handler);
