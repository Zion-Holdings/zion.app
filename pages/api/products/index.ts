import { PrismaClient, Product } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

// Define the extended product type, same as in details.ts
// Consider moving this to a shared type file, e.g., src/types/listings.ts or src/types/products.ts later
export type ProductWithReviewStats = Product & {
  averageRating: number | null;
  reviewCount: number;
  // Additional fields to align with potential frontend expectations (e.g., ProductListingCard)
  title: string; // Mapped from product.name
  category?: string;
  images?: { url: string; alt?: string }[]; // Assuming images might have a URL and alt text
  price?: number | null;
  currency?: string;
  tags?: string[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProductWithReviewStats[] | { error: string }>
) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    // Fetch all products
    const products = await prisma.product.findMany();

    // findMany returns an empty array if no products are found, so no special check for !products is needed.
    // If products array is empty, the map will result in an empty array, which is correct.

    // For each product, fetch its review stats
    const productsWithStats: ProductWithReviewStats[] = await Promise.all(
      products.map(async (product) => {
        const reviewStats = await prisma.productReview.aggregate({
          _avg: {
            rating: true,
          },
          _count: {
            // Assuming 'id' is a valid field to count for reviews.
            // Could also use _count: { _all: true } or specific field like userId.
            id: true,
          },
          where: {
            productId: product.id,
          },
        });

        // The Product model currently has: id, name, description, reviews[] (relation)
        // The ProductWithReviewStats type aims to bridge this with frontend needs.
        return {
          ...product, // Spreads id, name, description from the Product model
          title: product.name, // Explicitly map name to title
          averageRating: reviewStats._avg.rating, // This can be null if no ratings
          reviewCount: reviewStats._count.id,   // This will be 0 if no ratings

          // Placeholder/default values for other fields potentially expected by UI components
          // These would ideally come from an expanded Product model or other data sources
          category: 'Uncategorized', // Default placeholder
          // Removed direct access to product.images, product.price, product.currency, product.tags
          // as they are not in the Prisma Product model.
          // These fields are optional in ProductWithReviewStats or will use defaults if not set.
          // If these need to be populated, it should be from other data sources or model extensions.
          images: [], // Default to empty array or define based on other logic if available
          price: null,  // Default to null or define based on other logic
          currency: 'USD', // Default currency or define based on other logic
          tags: [], // Default to empty array or define based on other logic
        };
      })
    );

    return res.status(200).json(productsWithStats);
  } catch (e: any) {
    console.error('Error fetching products with stats:', e);
    return res.status(500).json({ error: 'Internal server error while fetching products.' });
  } finally {
    await prisma.$disconnect();
  }
}
