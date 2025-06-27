import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import * as Sentry from '@sentry/nextjs';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  const category = String(req.query.category || '').toLowerCase().trim();

  try {
    const [totalProducts, totalCategories, featuredProducts] = await Promise.all([
      prisma.product.count(),
      prisma.product.groupBy({
        by: ['category'],
        _count: {
          category: true,
        },
      }),
      prisma.product.findMany({
        where: category ? { category } : {},
        take: 6,
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
          images: true,
        },
      }),
    ]);

    return res.status(200).json({
      totalProducts,
      totalCategories: totalCategories.length,
      featuredProducts,
      categories: totalCategories.map(cat => ({
        name: cat.category,
        count: cat._count.category,
      })),
    });
  } catch (error) {
    Sentry.captureException(error);
    console.error('Error fetching marketplace overview:', error);
    return res.status(500).json({ error: 'Failed to fetch marketplace overview' });
  } finally {
    await prisma.$disconnect();
  }
} 