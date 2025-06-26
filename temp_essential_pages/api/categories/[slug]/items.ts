import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import { withErrorLogging } from '@/utils/withErrorLogging';

const prisma = new PrismaClient();

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { slug } = req.query as { slug: string | string[] };
  if (!slug || typeof slug !== 'string') {
    return res.status(400).json({ error: 'Invalid slug' });
  }

  try {
    const category = await (prisma as any).category.findUnique({ where: { slug } });
    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }

    const items = await prisma.product.findMany({
      where: { category: category.name },
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

    return res.status(200).json({ category, items });
  } catch (error) {
    console.error(`Error fetching items for ${slug}:`, error);
    return res.status(500).json({ error: 'Internal server error' });
  } finally {
    await prisma.$disconnect();
  }
}

export default withErrorLogging(handler);
