import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import { withErrorLogging } from '@/utils/withErrorLogging';

const prisma = new PrismaClient();

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!process.env.DATABASE_URL) {
    console.error('DATABASE_URL is not set or empty.');
    return res.status(503).json({ error: 'Service Unavailable: Database configuration is missing.' });
  }

  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  res.setHeader('Access-Control-Allow-Origin', '*');

  const page = parseInt(req.query.page as string, 10) || 1;
  const limit = parseInt(req.query.limit as string, 10) || 12;
  const skip = (page - 1) * limit;

  try {
    const [talents, total] = await Promise.all([
      prisma.talent.findMany({ skip, take: limit, orderBy: { id: 'asc' } }),
      prisma.talent.count(),
    ]);
    return res.status(200).json({ talents, total });
  } catch (e) {
    console.error('Error fetching talents:', e);
    return res.status(500).json({ error: 'Failed to fetch talents' });
  } finally {
    await prisma.$disconnect();
  }
}

export default withErrorLogging(handler);
