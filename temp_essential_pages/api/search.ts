import type { NextApiRequest, NextApiResponse } from 'next';
import { withErrorLogging } from '@/utils/withErrorLogging';
import { MARKETPLACE_LISTINGS } from '@/data/listingData';
import { SERVICES } from '@/data/servicesData';
import { TALENT_PROFILES } from '@/data/talentData';
import type { SearchResult, SearchResponse } from '@/types/search';

interface SearchResult {
  id: string;
  type: 'product' | 'service' | 'talent' | 'equipment' | 'category';
  title: string;
  description: string;
  slug: string;
  image?: string;
  price?: number;
  rating?: number;
  author?: {
    name: string;
    avatar?: string;
  };
  tags?: string[];
  category?: string;
}

interface SearchResponse {
  results: SearchResult[];
  totalCount: number;
  page: number;
  limit: number;
  query: string;
}

// Define search result types
type SearchResultType = 'blog' | 'product' | 'talent' | 'service';

// Helper function to normalize search results
function normalizeSearchResult(
  item: any,
  type: SearchResultType,
  score: number = 1
): SearchResult {
  switch (type) {
    case 'blog':
      return {
        id: item.id,
        title: item.title,
        description: item.excerpt,
        type: 'blog',
        url: `/blog/${item.slug}`,
        image: item.featuredImage,
        price: undefined,
        category: item.category,
        tags: item.tags,
        score,
      };
    case 'product':
      return {
        id: item.id,
        title: item.name,
        description: item.description,
        type: 'product',
        url: `/marketplace/${item.slug}`,
        image: item.image,
        price: item.price,
        category: item.category,
        tags: item.tags,
        score,
      };
    case 'talent':
      return {
        id: item.id,
        title: item.name,
        description: item.headline,
        type: 'talent',
        url: `/talent/${item.slug}`,
        image: item.avatar,
        price: item.hourlyRate,
        category: item.specialization,
        tags: item.skills,
        score,
      };
    default:
      return item;
  }
}

function handler(
  req: NextApiRequest,
  res: NextApiResponse<SearchResponse | { error: string }>,
) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const q = String((req.query.query ?? req.query.q) ?? '')
    .toLowerCase()
    .trim();
  const page = parseInt(String(req.query.page ?? '1'), 10);
  const limit = parseInt(String(req.query.limit ?? '20'), 10);

  if (!q) {
    return res.status(200).json({
      results: [],
      totalCount: 0,
      page,
      limit,
      query: q,
    });
  }

  const match = (text?: string) => text?.toLowerCase().includes(q);
  const matchTags = (tags?: string[]) => tags?.some((tag) => match(tag));

  // Helper function to create slug from title
  const createSlug = (title: string) =>
    title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

  const products: SearchResult[] = MARKETPLACE_LISTINGS.filter(
    (p) =>
      match(p.title) ||
      match(p.description) ||
      match(p.category) ||
      matchTags((p as any).tags),
  ).map((p) => ({
    id: p.id,
    type: 'product' as const,
    title: p.title,
    description: p.description,
    slug: createSlug(p.title),
    image: (p as any).image,
    price: (p as any).price,
    rating: (p as any).rating,
    author: (p as any).author,
    tags: (p as any).tags,
    category: (p as any).category,
  }));

  const services: SearchResult[] = SERVICES.filter(
    (s) =>
      match(s.title) ||
      match(s.description) ||
      match(s.category) ||
      matchTags((s as any).tags),
  ).map((s) => ({
    id: s.id,
    type: 'service' as const,
    title: s.title,
    description: s.description,
    slug: createSlug(s.title),
    image: (s as any).image,
    price: (s as any).price,
    rating: (s as any).rating,
    author: (s as any).author,
    tags: (s as any).tags,
    category: (s as any).category,
  }));

  const talents: SearchResult[] = TALENT_PROFILES.filter(
    (t) =>
      match(t.full_name) ||
      match(t.professional_title) ||
      match(t.bio) ||
      matchTags((t as any).skills || (t as any).tags),
  ).map((t) => ({
    id: t.id,
    type: 'talent' as const,
    title: t.full_name,
    description: t.professional_title || '',
    slug: createSlug(t.full_name),
    image: (t as any).avatar || (t as any).image,
    rating: (t as any).rating,
    author: {
      name: t.full_name,
      avatar: (t as any).avatar,
    },
    tags: (t as any).skills || (t as any).tags,
  }));

  const allResults = [...products, ...services, ...talents];
  const totalCount = allResults.length;
  const start = (page - 1) * limit;
  const end = start + limit;
  const paginatedResults = allResults.slice(start, end);

  return res.status(200).json({
    results: paginatedResults,
    totalCount,
    page,
    limit,
    query: q,
  });
}

export default withErrorLogging(handler);
