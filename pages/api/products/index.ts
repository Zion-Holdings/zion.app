import { PrismaClient, Product, Prisma } from '@prisma/client'; // Import Prisma for error types
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

// Define the extended product type
// This could be moved to a shared types file if used elsewhere (e.g., src/types/products.ts)
export type ProductWithReviewStats = Product & {
  averageRating: number | null;
  reviewCount: number;
  title: string; 
  category?: string; // Assuming category might be added or is part of Product model
  images?: { url: string; alt?: string }[] | string[]; // Allow for string array or object array for images
  // price?: number | null; // Already in Product
  // currency?: string; // Already in Product
  // tags?: string[]; // Already in Product
};

interface ErrorResponse {
  error: string;
  details?: string;
}


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProductWithReviewStats[] | ErrorResponse>
) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  const { q: searchQuery } = req.query;

  try {
    let products: Product[] = [];

    if (typeof searchQuery === 'string' && searchQuery.trim() !== '') {
      const rawResults = await prisma.$queryRawUnsafe<Array<{ id: string; name_similarity: number; description_similarity: number }>>(
        `SELECT
           id,
           similarity(name, $1) AS name_similarity,
           similarity(description, $1) AS description_similarity
         FROM "Product"
         WHERE similarity(name, $1) >= 0.3 OR similarity(description, $1) >= 0.3
         ORDER BY GREATEST(similarity(name, $1), similarity(description, $1)) DESC`,
        searchQuery
      );

      const productIds = rawResults.map(p => p.id);

      if (productIds.length > 0) {
        products = await prisma.product.findMany({
          where: {
            id: {
              in: productIds,
            },
          },
        });
        products.sort((a, b) => productIds.indexOf(a.id) - productIds.indexOf(b.id));
      } else {
        products = [];
      }

    } else {
      products = await prisma.product.findMany();
    }

    const productsWithStats: ProductWithReviewStats[] = await Promise.all(
      products.map(async (product) => {
        const reviewStats = await prisma.productReview.aggregate({
          _avg: {
            rating: true,
          },
          _count: {
            id: true,
          },
          where: {
            productId: product.id,
          },
        });
        
        // Ensure images, tags, etc. are handled correctly if they are optional or have specific structures
        // The Product type from Prisma might already define these. If they are added ad-hoc, ensure proper typing.
        let imagesProcessed: { url: string; alt?: string }[] | string[] = [];
        if (Array.isArray(product.images)) {
          if (product.images.every(img => typeof img === 'string')) {
            imagesProcessed = product.images as string[];
          } else if (product.images.every(img => typeof img === 'object' && img !== null && 'url' in img)) {
            imagesProcessed = product.images as { url: string; alt?: string }[];
          }
        }


        return {
          ...product,
          title: product.name, 
          averageRating: reviewStats._avg.rating, 
          reviewCount: reviewStats._count.id,
          category: product.category || 'Uncategorized', // Assuming category is part of Product
          images: imagesProcessed, // Use processed images
          // price and currency should come from product if defined in Prisma model
          // tags should come from product if defined in Prisma model (e.g. as string[])
        };
      })
    );

    return res.status(200).json(productsWithStats);
  } catch (e: unknown) {
    console.error('Error fetching products with stats:', e);
    let errorMessage = 'Internal server error while fetching products.';
    let errorDetails: string | undefined;

    if (e instanceof Prisma.PrismaClientKnownRequestError) {
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
