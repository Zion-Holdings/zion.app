import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import * as Sentry from '@sentry/nextjs';

const prisma = new PrismaClient();

interface TalentFilters {
  specialization?: string;
  minRate?: number;
  maxRate?: number;
  skills?: string[];
  search?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  try {
    const page = parseInt((req.query.page as string) || '1', 10);
    const limit = parseInt((req.query.limit as string) || '20', 10);
    const skip = (page - 1) * limit;

    const filters: TalentFilters = {
      specialization: String(req.query.specialization || '').toLowerCase().trim() || undefined,
      minRate: req.query.minRate ? parseFloat(req.query.minRate as string) : undefined,
      maxRate: req.query.maxRate ? parseFloat(req.query.maxRate as string) : undefined,
      skills: req.query.skills ? String(req.query.skills).split(',').map(s => s.trim()) : undefined,
      search: String(req.query.search || '').toLowerCase().trim() || undefined,
    };

    // Build where clause
    const where: any = {};
    
    if (filters.specialization) {
      where.specialization = filters.specialization;
    }
    
    if (filters.minRate !== undefined || filters.maxRate !== undefined) {
      where.hourlyRate = {};
      if (filters.minRate !== undefined) {
        where.hourlyRate.gte = filters.minRate;
      }
      if (filters.maxRate !== undefined) {
        where.hourlyRate.lte = filters.maxRate;
      }
    }
    
    if (filters.skills && filters.skills.length > 0) {
      where.skills = {
        hasSome: filters.skills,
      };
    }
    
    if (filters.search) {
      where.OR = [
        { name: { contains: filters.search, mode: 'insensitive' } },
        { headline: { contains: filters.search, mode: 'insensitive' } },
        { bio: { contains: filters.search, mode: 'insensitive' } },
      ];
    }

    const [profiles, totalCount] = await Promise.all([
      prisma.talentProfile.findMany({
        where,
        skip,
        take: limit,
        orderBy: {
          createdAt: 'desc',
        },
        select: {
          id: true,
          name: true,
          headline: true,
          bio: true,
          avatar: true,
          hourlyRate: true,
          specialization: true,
          skills: true,
          rating: true,
          completedProjects: true,
          isAvailable: true,
          createdAt: true,
        },
      }),
      prisma.talentProfile.count({ where }),
    ]);

    return res.status(200).json({
      profiles,
      totalCount,
      page,
      limit,
      hasMore: skip + limit < totalCount,
    });
  } catch (error) {
    Sentry.captureException(error);
    console.error('Error fetching talent profiles:', error);
    return res.status(500).json({ error: 'Failed to fetch talent profiles' });
  } finally {
    await prisma.$disconnect();
  }
}
