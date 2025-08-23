import { PrismaClient, type Product as ProductModel } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import { withErrorLogging } from '@/utils/withErrorLogging';
import { connectWithTimeout } from '@/utils/prismaConnect';
import {logErrorToProduction} from '@/utils/productionLogger';


const prisma = new PrismaClient();

// Ensure this type is consistent with the one in products.ts
// Or centralize it in a types file.
type ProductWithStats = ProductModel & {
  averageRating: number | null;
  reviewCount: number;
  title: string; // Added title for consistency with list endpoint
};

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProductWithStats | { error: string }>
) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  if (!process.env.DATABASE_URL) {
    logErrorToProduction('DATABASE_URL is not set or empty.');
    return res
      .status(503)
      .json({ error: 'Service Unavailable: Database configuration is missing.' });
  }

  const { productId } = req.query as { productId: string | string[] };

  if (!productId || typeof productId !== 'string') {
    return res.status(400).json({ error: 'Product ID is required and must be a string.' });
  }

  res.setHeader('Access-Control-Allow-Origin', '*'); // CORS header

  try {
    await connectWithTimeout(prisma);

    const product = await prisma.product.findUnique({
      where: { id: productId },
    });

    if (!product) {
      return res.status(404).json({ error: 'Product not found.' });
    }

    // Fetch review stats for this single product
    const reviewStats = await prisma.productReview.aggregate({
      _avg: { rating: true },
      _count: { id: true }, // Count based on 'id' of reviews, or any non-null field
      where: { productId: productId },
    });

    const result: ProductWithStats = {
      ...product,
      title: product.name, // Assuming title is derived from name
      averageRating: reviewStats._avg.rating ?? null,
      reviewCount: reviewStats._count.id ?? 0,
    };

    return res.status(200).json(result);
  } catch (e) {
    logErrorToProduction('Error fetching product ${productId}:', { data:  e });
    const message =
      e instanceof Error && e.message.includes('timed out')
        ? 'Service Unavailable: Database connection failed.'
        : 'Internal server error while fetching product details.';
    return res.status(500).json({ error: message });
  } finally {
    await prisma.$disconnect();
  }
}

export default withErrorLogging(handler);
