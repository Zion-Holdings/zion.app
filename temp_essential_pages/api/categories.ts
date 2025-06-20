import type { NextApiRequest, NextApiResponse } from 'next';

// Mock categories data for development
const mockCategories = [
  { id: 'services', name: 'Services', slug: 'services', icon: 'Briefcase' },
  { id: 'talents', name: 'Talents', slug: 'talents', icon: 'Users' },
  { id: 'equipment', name: 'Equipment', slug: 'equipment', icon: 'HardDrive' },
  { id: 'innovation', name: 'Innovation', slug: 'innovation', icon: 'Lightbulb' },
  { id: 'ai-models', name: 'AI Models', slug: 'ai-models', icon: 'Brain' },
  { id: 'data-science', name: 'Data Science', slug: 'data-science', icon: 'BarChart' },
];

interface CategoryType {
  id: string;
  name: string;
  slug: string;
  icon: string;
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
    // Return sorted categories alphabetically by name
    const sortedCategories = mockCategories.sort((a, b) => a.name.localeCompare(b.name));
    return res.status(200).json(sortedCategories);
  } catch (error) {
    console.error('Failed to fetch categories:', error);
    return res.status(500).json({ error: 'Internal Server Error: Failed to fetch categories' });
  }
}
