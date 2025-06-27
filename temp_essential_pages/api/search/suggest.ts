import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import * as Sentry from '@sentry/nextjs';

const prisma = new PrismaClient();

interface SearchSuggestion {
  id: string;
  title: string;
  type: 'product' | 'talent' | 'service' | 'category';
  category?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SearchSuggestion[] | { error: string }>
) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  try {
    const query = String(req.query.q || '').toLowerCase().trim();
    const limit = Math.min(10, parseInt((req.query.limit as string) || '5', 10));

    if (!query || query.length < 2) {
      return res.status(200).json([]);
    }

    const [productSuggestions, talentSuggestions] = await Promise.all([
      prisma.product.findMany({
        where: {
          OR: [
            { name: { contains: query, mode: 'insensitive' } },
            { category: { contains: query, mode: 'insensitive' } },
          ],
        },
        take: Math.ceil(limit / 2),
        select: {
          id: true,
          name: true,
          category: true,
        },
      }),
      prisma.talentProfile.findMany({
        where: {
          OR: [
            { name: { contains: query, mode: 'insensitive' } },
            { specialization: { contains: query, mode: 'insensitive' } },
          ],
        },
        take: Math.ceil(limit / 2),
        select: {
          id: true,
          name: true,
          specialization: true,
        },
      }),
    ]);

    const suggestions: SearchSuggestion[] = [
      ...productSuggestions.map(p => ({
        id: p.id,
        title: p.name,
        type: 'product' as const,
        category: p.category,
      })),
      ...talentSuggestions.map(t => ({
        id: t.id,
        title: t.name,
        type: 'talent' as const,
        category: t.specialization,
      })),
    ].slice(0, limit);

    return res.status(200).json(suggestions);
  } catch (error) {
    Sentry.captureException(error);
    console.error('Error fetching search suggestions:', error);
    return res.status(500).json({ error: 'Failed to fetch suggestions' });
  } finally {
    await prisma.$disconnect();
  }
} 