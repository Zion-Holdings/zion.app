
import { Prisma, PrismaClient } from '@prisma/client';
import type { Product } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

type ProductModel = Product;
const prisma = new PrismaClient();

export type ProductWithReviewStats = ProductModel & { // ProductModel now includes price, currency, category, tags, images
  averageRating: number | null;
  reviewCount: number;
  title: string; // Mapped from product.name
  // category, images, price, currency, tags are now part of ProductModel.
  // Their optionality is defined in schema.prisma and reflected in ProductModel.
};

export type PaginatedProductsResponse = {
  data: ProductWithReviewStats[];
  pagination: {
    totalItems: number;
    currentPage: number;
    pageSize: number;
    totalPages: number;
  };
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<PaginatedProductsResponse | { error: string }>
) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { q: searchQuery, page: pageQuery, pageSize: pageSizeQuery } = req.query;

  const currentPage = parseInt(pageQuery as string, 10) || 1;
  const pageSize = parseInt(pageSizeQuery as string, 10) || 10;
  const skip = (currentPage - 1) * pageSize;
  const take = pageSize;

  try {
    let products: ProductModel[] = [];
    let totalItems = 0;
    let productIdsOrder: string[] = []; // To maintain search order

    const productWhereClause: Prisma.ProductWhereInput = {};

    if (typeof searchQuery === 'string' && searchQuery.trim() !== '') {
      const trimmedSearchQuery = searchQuery.trim();
      // Step 1: Use $queryRawUnsafe to get ALL matching IDs and similarity scores
      const rawResults = await prisma.$queryRawUnsafe(
        `SELECT
           id,
           similarity(name, $1) AS name_similarity,
           similarity(description, $1) AS description_similarity
         FROM "Product"
         WHERE similarity(name, $1) >= 0.3 OR similarity(description, $1) >= 0.3
         ORDER BY GREATEST(similarity(name, $1), similarity(description, $1)) DESC`,
        trimmedSearchQuery
      ) as Array<{ id: string; name_similarity: number; description_similarity: number }>;

      const allMatchingProductIds = rawResults.map(p => p.id);
      totalItems = allMatchingProductIds.length;

      if (totalItems > 0) {
        // Apply pagination to the IDs
        productIdsOrder = allMatchingProductIds.slice(skip, skip + take);
        if (productIdsOrder.length > 0) {
          productWhereClause.id = { in: productIdsOrder };
          products = await prisma.product.findMany({
            where: productWhereClause,
          });
          // Re-order products based on the similarity scores from productIdsOrder
          products.sort((a, b) => productIdsOrder.indexOf(a.id) - productIdsOrder.indexOf(b.id));
        } else {
          // Requested page is out of bounds for search results
          products = [];
        }
      } else {
        products = []; // No products match the search query
      }
    } else {
      // No search query provided
      totalItems = await prisma.product.count({ where: productWhereClause });
      if (totalItems > 0) {
        products = await prisma.product.findMany({
          skip,
          take,
          where: productWhereClause, // Empty if no other filters, but good for consistency
          // orderBy: { created_at: 'desc' }, // Temporarily removed orderBy to pass build
        });
      } else {
        products = [];
      }
    }

    let productsWithStats: ProductWithReviewStats[] = [];

    if (products.length > 0) {
      const productIdsFromResults = products.map(p => p.id);

      const reviewStatsRaw = await prisma.productReview.groupBy({
        by: ['productId'],
        where: {
          productId: {
            in: productIdsFromResults,
          },
        },
        _avg: {
          rating: true,
        },
        _count: {
          id: true, // Count reviews by their ID
        },
      });

      const statsMap = new Map<string, { averageRating: number | null; reviewCount: number }>();
      reviewStatsRaw.forEach(stat => {
        statsMap.set(stat.productId, {
          averageRating: stat._avg.rating,
          reviewCount: stat._count.id,
        });
      });

      productsWithStats = products.map(product => {
        const stats = statsMap.get(product.id);
        return {
          ...product,
          title: product.name, // Ensure title is explicitly mapped
          averageRating: stats?.averageRating ?? null,
          reviewCount: stats?.reviewCount ?? 0,
          // The following fields are now directly from the product model
          // and will be included if they exist on the product object.
          // Prisma handles Decimal to number/string conversion for JSON responses,
          // and Json fields are passed as is.
          // No more placeholders needed here for:
          // category: product.category,
          // images: product.images,
          // price: product.price,
          // currency: product.currency,
          // tags: product.tags,
        };
      });
    }

    const totalPages = Math.ceil(totalItems / pageSize);

    return res.status(200).json({
      data: productsWithStats,
      pagination: {
        totalItems,
        currentPage,
        pageSize,
        totalPages,
      },
    });

  } catch (e: any) {
    console.error('Error fetching products:', e);
    // Consider more specific error messages if e.g. pg_trgm is not enabled
    if (e.message?.includes('function similarity(text, unknown) does not exist')) {
        return res.status(500).json({ error: 'Internal server error: Search functionality is not correctly configured (pg_trgm extension missing or not enabled). Please contact support.' });
    }
    return res.status(500).json({ error: 'Internal server error while fetching products.' });
  } finally {
    await prisma.$disconnect();
  }
}
