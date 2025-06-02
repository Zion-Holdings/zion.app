import { PrismaClient } from '@prisma/client';
import type { Prisma } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

// Alias the Prisma generated Product type. Some versions of the Prisma client
// only expose model types via the `Prisma` namespace instead of top-level
// exports. Using an alias keeps the rest of the code unchanged regardless of
// how the client is generated.
type Product = Prisma.Product;

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

  const { q: searchQuery } = req.query;

  try {
    let products: Product[] = [];

    if (typeof searchQuery === 'string' && searchQuery.trim() !== '') {
      // Sanitize search query for safety if it were used directly in a template string,
      // though Prisma's $queryRawUnsafe parameterization handles SQL injection.
      // For $queryRaw, parameters are typically safer.
      // Here, we are constructing column names and using the query as a parameter.

      // Step 1: Use $queryRawUnsafe to get IDs and similarity scores
      // We need to ensure pg_trgm is enabled in the DB for similarity() to work.
      // The previous subtask should have created a migration for this.
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
          // We might want to preserve the order from rawResults.
          // This requires a bit more work, fetching then re-ordering in code.
          // For now, findMany will return them in its default order (e.g., by ID).
          // To maintain order: fetch then sort `products` array based on `productIds` order.
        });

        // Re-order products based on the similarity scores from rawResults
        products.sort((a, b) => productIds.indexOf(a.id) - productIds.indexOf(b.id));

      } else {
        // No products match the search query and similarity threshold
        products = [];
      }

    } else {
      // No search query provided, fetch all products (original behavior)
      products = await prisma.product.findMany();
    }

    // findMany returns an empty array if no products are found, so no special check for !products is needed.
    // If products array is empty, the map will result in an empty array, which is correct.

    // For each product (either all or filtered by search), fetch its review stats
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
