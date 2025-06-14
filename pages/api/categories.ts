import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { withErrorLogging } from '@/utils/withErrorLogging';

const prisma = new PrismaClient();

async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const active = req.query.active === 'true';

  try {
    const categories = await prisma.category.findMany({
      where: active ? { active: true } : undefined,
      select: { id: true, name: true, slug: true, icon: true },
    });
    res.status(200).json(categories);
  } catch (e) {
    console.error('Error fetching categories:', e);
    res.status(500).end('Internal Server Error');
  } finally {
    await prisma.$disconnect();
  }
}

export default withErrorLogging(handler);
