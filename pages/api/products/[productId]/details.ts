import { PrismaClient, Product, Prisma } from '@prisma/client'; // Import Prisma for error types
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

// Extend the Product type to include our aggregated review data
export type ProductWithReviewStats = Product & {
  averageRating: number | null;
  reviewCount: number;
};

interface ErrorResponse {
  error: string;
  details?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProductWithReviewStats | ErrorResponse>
) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  const { productId } = req.query;

  if (!productId || typeof productId !== 'string') {
    return res.status(400).json({ error: 'productId is required in the URL path and must be a string.' });
  }

  try {
    // Fetch the product
    const product = await prisma.product.findUnique({
      where: { id: productId },
    });

    if (!product) {
      return res.status(404).json({ error: 'Product not found.' });
    }

    // Aggregate review data
    const reviewStats = await prisma.productReview.aggregate({
      _avg: {
        rating: true,
      },
      _count: {
        id: true, // Counting based on the review ID
      },
      where: {
        productId: productId,
      },
    });

    const averageRating = reviewStats._avg.rating; // This can be null if no reviews
    const reviewCount = reviewStats._count.id;

    const productWithStats: ProductWithReviewStats = {
      ...product,
      averageRating: averageRating, // Prisma aggregate returns null if no records, which is fine
      reviewCount: reviewCount,
    };

    return res.status(200).json(productWithStats);
  } catch (e: unknown) {
    console.error('Error fetching product details:', e);
    let errorMessage = 'Internal server error.';
    let errorDetails: string | undefined;

    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      // Handle known Prisma errors (e.g., connection issues, unique constraint violations)
      errorMessage = `Database error: ${e.code}`;
      errorDetails = e.message;
    } else if (e instanceof Error) {
      errorMessage = e.message;
    } else if (typeof e === 'string') {
      errorMessage = e;
    }
    
    return res.status(500).json({ error: errorMessage, details: errorDetails });
  } finally {
    await prisma.$disconnect();
  }
}
