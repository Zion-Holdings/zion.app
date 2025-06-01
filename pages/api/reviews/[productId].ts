import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { productId } = req.query;

  if (!productId || typeof productId !== 'string') {
    return res.status(400).json({ error: 'productId is required in the URL path and must be a string.' });
  }

  try {
    const reviews = await prisma.productReview.findMany({
      where: {
        productId: productId,
      },
      include: {
        user: { // Include user information
          select: {
            id: true,
            name: true,
            // email: true, // Optionally include email if needed by the frontend
            // Add other user fields you want to expose, e.g., avatar_url if it exists
          },
        },
      },
      orderBy: {
        createdAt: 'desc', // Show newest reviews first
      },
    });

    // findMany returns an array, so it will be [] if not found, not null.
    // The check `if (!reviews)` is not necessary for an empty array.
    // An empty array is a valid response for no reviews.

    return res.status(200).json(reviews);
  } catch (e: any) {
    console.error(e);
    // It's good practice to avoid sending detailed Prisma errors to the client.
    // Check for specific Prisma errors if needed, e.g., if productId was not a valid CUID format
    // or other query validation errors that Prisma might throw.
    // For now, a generic 500 is okay.
    return res.status(500).json({ error: 'Internal server error while fetching reviews.' });
  } finally {
    await prisma.$disconnect();
  }
}
