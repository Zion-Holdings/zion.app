import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Define the CategoryType matching the frontend component
interface CategoryType {
  id: string;
  name: string;
  description?: string; // Not in DB model, will be omitted
  iconName?: string;    // Corresponds to 'icon' in DB
  itemCount?: number;   // Not in DB model, will be omitted
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CategoryType[] | { error: string }>
) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  try {
    const categories = await prisma.category.findMany({
      where: {
        active: true, // Assuming we only want active categories
      },
      select: {
        id: true,
        name: true,
        icon: true, // This will be mapped to iconName
        // description is not in the 'category' model
        // itemCount requires a more complex query, omitting for now
      },
    });

    // Map the Prisma category objects to the CategoryType interface
    const formattedCategories: CategoryType[] = categories.map(cat => ({
      id: cat.id,
      name: cat.name,
      iconName: cat.icon || undefined, // Use 'icon' field, provide undefined if null
    }));

    return res.status(200).json(formattedCategories);
  } catch (error) {
    console.error('Failed to fetch categories:', error);
    // It's good practice to avoid sending detailed error messages to the client
    // In a real application, you might log this error to a monitoring service
    return res.status(500).json({ error: 'Internal Server Error: Failed to fetch categories' });
  } finally {
    await prisma.$disconnect();
  }
}
