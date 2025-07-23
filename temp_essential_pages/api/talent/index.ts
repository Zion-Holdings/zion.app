import { PrismaClient } from @prisma/client';import type { NextApiRequest, NextApiResponse } from next';import * as Sentry from @sentry/nextjs';;
const prisma = new PrismaClient();

interface _TalentFilters {
  specialization?: string;
  minRate?: number;
  maxRate?: number;
  skills?: string[];
  search?: string;
}

interface WhereClause {
  specialization?: string;
  hourlyRate?: {
    gte?: number;
    lte?: number;
  };
  skills?: {
    hasSome: string[];
  };
  OR?: Array<{
    name?: { contains: string; mode: insensitive' };    headline?: { contains: string; mode: insensitive' };    bio?: { contains: string; mode: insensitive' };  }>;
}
;
default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const { page = 1, limit = 10, ...filters } = req.query;
    const skip = (Number(page) - 1) * Number(limit);

    // Build where clause
    const where: WhereClause = {};
    
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
        hasSome: filters.skills
      };
    }
    
    if (filters.search) {
      where.OR = [
        { name: { contains: filters.search, mode: insensitive' } },        { headline: { contains: filters.search, mode: insensitive' } },        { bio: { contains: filters.search, mode: insensitive' } },      ];
    }

    const [profiles, totalCount] = await Promise.all([
      prisma.talentProfile.findMany({
        where,
        skip,
        take: limit,
        orderBy: {
          createdAt: desc',        },
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
          createdAt: true
        }
      }),
      prisma.talentProfile.count({ where })
    ]);

    return res.status(200).json({
      profiles,
      totalCount,
      page,
      limit,
      hasMore: skip + limit < totalCount
    });
  } catch (error) {
    Sentry.captureException(error);
    console.error('Error fetching talent profiles:', error);    return res.status(500).json({ error: Failed to fetch talent profiles' });  } finally {
    await prisma.$disconnect();
  }
}
