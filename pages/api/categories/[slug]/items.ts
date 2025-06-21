import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import { withErrorLogging } from '@/utils/withErrorLogging';

const prisma = new PrismaClient();

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }

  const { slug } = req.query;

  if (typeof slug !== 'string') {
    return res.status(400).json({ message: 'Invalid slug provided.' });
  }

  try {
    // Fetch the category details
    const categoryDetails = await prisma.category.findUnique({
      where: { slug: slug, active: true },
      select: {
        name: true,
        slug: true,
        // Assuming 'description' is not a field in 'category' model based on schema.
        // If it were, it would be: description: true,
      },
    });

    if (!categoryDetails) {
      return res.status(404).json({ message: `Category with slug '${slug}' not found.` });
    }

    // Fetch products for this category
    // Assumes Product.category stores the category slug
    const products = await prisma.product.findMany({
      where: { category: slug },
      select: {
        id: true,
        name: true,
        description: true,
        price: true,
        currency: true,
        images: true,
        // Add other product fields needed by CategoryListingPage
      },
    });

    // Construct the response data in the format expected by CategoryPage.tsx
    const responseData = {
      category: {
        name: categoryDetails.name,
        slug: categoryDetails.slug,
        description: '', // Add actual description if available, otherwise leave empty or remove
      },
      items: products,
    };

    return res.status(200).json(responseData);
  } catch (error) {
    console.error(`Failed to fetch items for category ${slug}:`, error);
    // Consider more specific error messages if possible
    return res.status(500).json({ message: 'Internal Server Error while fetching category items.' });
  } finally {
    await prisma.$disconnect();
  }
}

export default withErrorLogging(handler);
