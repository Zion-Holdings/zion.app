import type { NextApiRequest, NextApiResponse } from 'next';
import { withErrorLogging } from '@/utils/withErrorLogging';
import { MARKETPLACE_LISTINGS } from '@/data/listingData';
import { SERVICES } from '@/data/servicesData';
import { TALENT_PROFILES } from '@/data/talentData';

interface SearchResult {
  id: string;
  type: 'product' | 'service' | 'talent';
  title: string;
  description: string;
}

function handler(
  req: NextApiRequest,
  res: NextApiResponse<SearchResult[] | { error: string }>
) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const q = String(req.query.query ?? req.query.q ?? '').toLowerCase().trim();
  const page = parseInt(String(req.query.page ?? '1'), 10);
  const limit = parseInt(String(req.query.limit ?? '20'), 10);

  if (!q) return res.status(200).json([]);

  const match = (text?: string) => text?.toLowerCase().includes(q);

  const products: SearchResult[] = MARKETPLACE_LISTINGS.filter(
    (p) => match(p.title) || match(p.description)
  ).map((p) => ({
    id: p.id,
    type: 'product',
    title: p.title,
    description: p.description,
  }));

  const services: SearchResult[] = SERVICES.filter(
    (s) => match(s.title) || match(s.description)
  ).map((s) => ({
    id: s.id,
    type: 'service',
    title: s.title,
    description: s.description,
  }));

  const talents: SearchResult[] = TALENT_PROFILES.filter(
    (t) => match(t.full_name) || match(t.professional_title) || match(t.bio)
  ).map((t) => ({
    id: t.id,
    type: 'talent',
    title: t.full_name,
    description: t.professional_title,
  }));

  const allResults = [...products, ...services, ...talents];
  const start = (page - 1) * limit;
  const end = start + limit;
  return res.status(200).json(allResults.slice(start, end));
}

export default withErrorLogging(handler);
