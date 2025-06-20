import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import { withErrorLogging } from '@/utils/withErrorLogging';
import { CATEGORIES } from '@/data/categories';

const prisma = new PrismaClient();

async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  try {
    const categories = await prisma.category.findMany({
      where: { active: true },
      select: {
        id: true,
        name: true,
        slug: true,
        icon: true,
      },
      orderBy: { name: 'asc' },
    });

    const result = categories.length > 0 ? categories : CATEGORIES;
    return res.status(200).json(result);
  } catch (error) {
    console.error('Failed to fetch categories:', error);
    return res.status(200).json(CATEGORIES);
  } finally {
    await prisma.$disconnect();
  }
}

export default withErrorLogging(handler);
