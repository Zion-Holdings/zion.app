import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { productId } = req.query;
  if (!productId || typeof productId !== 'string') {
    await prisma.$disconnect();
    return res
      .status(400)
      .json({
        error: 'productId is required in the URL path and must be a string.',
      });
  }

  try {
    const reviews = await prisma.productReview.findMany({
      where: { productId },
    });
    return res.status(200).json(reviews);
  } catch (e) {
    console.error('Error fetching reviews:', e);
    return res
      .status(500)
      .json({ error: 'Internal server error while fetching reviews.' });
  } finally {
    await prisma.$disconnect();
  }
}
