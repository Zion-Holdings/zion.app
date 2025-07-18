import type { NextApiRequest, NextApiResponse } from 'next';
import { applyCorsHeaders } from '@/middleware/cors';
import { withErrorLogging } from '@/utils/withErrorLogging';
import { TALENT_PROFILES } from '@/data/talentData';
import { BLOG_POSTS } from '@/data/blog-posts';
import { cacheOrCompute, CacheCategory, applyCacheHeaders, cacheKeys } from '@/lib/serverCache';
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';


interface SearchResult {
  id: string;
  title: string;
  description: string;
  type: 'product' | 'talent' | 'blog' | 'service';
  category?: string;
  url?: string;
  image?: string;
  price?: number;
  currency?: string;
  rating?: number;
  tags?: string[];
  date?: string;
}

interface SearchFilters {
  types?: ('product' | 'talent' | 'blog' | 'service')[];
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  minRating?: number;
  sort?: 'relevance' | 'price_asc' | 'price_desc' | 'rating';
}

interface SearchResponse {
  results: SearchResult[];
  totalCount: number;
  page: number;
  limit: number;
  query: string;
  hasMore?: boolean;
}

// Enhanced search function with filtering and sorting
export function performSearch(query: string, page: number, limit: number, filters: SearchFilters = {}): { results: SearchResult[]; totalCount: number; hasMore: boolean } {
  const searchTerm = query.toLowerCase().trim();
  let allResults: SearchResult[] = [];

  // Search talent profiles
  const talentResults = TALENT_PROFILES.filter(profile =>
    profile.full_name?.toLowerCase().includes(searchTerm) ||
    profile.professional_title?.toLowerCase().includes(searchTerm) ||
    profile.bio?.toLowerCase().includes(searchTerm) ||
    profile.skills?.some(skill => skill.toLowerCase().includes(searchTerm))
  ).map(profile => ({
    id: profile.id,
    title: profile.full_name,
    description: profile.professional_title,
    type: 'talent' as const,
    category: 'Talent',
    url: `/marketplace/talent/${profile.id}`,
    ...(profile.profile_picture_url !== undefined ? { image: profile.profile_picture_url } : {}),
    ...(profile.hourly_rate !== undefined ? { price: profile.hourly_rate } : {}),
    currency: 'USD',
    ...(profile.average_rating !== undefined ? { rating: profile.average_rating } : {}),
    tags: profile.skills ?? [],
    date: ""
  }));

  // Search blog posts
  const blogResults = BLOG_POSTS.filter(post =>
    post.title?.toLowerCase().includes(searchTerm) ||
    post.excerpt?.toLowerCase().includes(searchTerm) ||
    post.content?.toLowerCase().includes(searchTerm) ||
    post.tags?.some(tag => tag.toLowerCase().includes(searchTerm))
  ).map(post => ({
    id: post.slug,
    title: post.title,
    description: post.excerpt,
    type: 'blog' as const,
    category: 'Blog',
    url: `/blog/${post.slug}`,
    ...(post.featuredImage !== undefined ? { image: post.featuredImage } : {}),
    tags: post.tags ?? [],
    date: post.publishedDate ?? ""
  }));

  // Combine all results
  allResults.push(...talentResults, ...blogResults);

  // Filter by type
  if (filters.types && filters.types.length > 0) {
    allResults = allResults.filter(r => filters.types!.includes(r.type));
  }

  // Additional filters
  if (filters.category) {
    allResults = allResults.filter(r => r.category?.toLowerCase() === filters.category!.toLowerCase());
  }
  if (typeof filters.minPrice === 'number') {
    allResults = allResults.filter(r => (r.price ?? 0) >= filters.minPrice!);
  }
  if (typeof filters.maxPrice === 'number') {
    allResults = allResults.filter(r => (r.price ?? 0) <= filters.maxPrice!);
  }
  if (typeof filters.minRating === 'number') {
    allResults = allResults.filter(r => (r.rating ?? 0) >= filters.minRating!);
  }

  // Sort by relevance (exact matches first, then partial matches)
  if (filters.sort && filters.sort !== 'relevance') {
    switch (filters.sort) {
      case 'price_asc':
        allResults.sort((a, b) => (a.price ?? 0) - (b.price ?? 0));
        break;
      case 'price_desc':
        allResults.sort((a, b) => (b.price ?? 0) - (a.price ?? 0));
        break;
      case 'rating':
        allResults.sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
        break;
      default:
        break;
    }
  } else {
    allResults.sort((a, b) => {
      const aExact = a.title.toLowerCase() === searchTerm ? 1 : 0;
      const bExact = b.title.toLowerCase() === searchTerm ? 1 : 0;
      if (aExact !== bExact) return bExact - aExact;

      const aStarts = a.title.toLowerCase().startsWith(searchTerm) ? 1 : 0;
      const bStarts = b.title.toLowerCase().startsWith(searchTerm) ? 1 : 0;
      if (aStarts !== bStarts) return bStarts - aStarts;

      return a.title.localeCompare(b.title);
    });
  }

  // Apply pagination
  const start = (page - 1) * limit;
  const end = start + limit;
  const paginatedResults = allResults.slice(start, end);

  return {
    results: paginatedResults,
    totalCount: allResults.length,
    hasMore: end < allResults.length
  };
}

// Ensure correct handler signature and returns
async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  // Apply CORS headers first
  applyCorsHeaders(req, res as NextApiResponse<unknown>);

  if (req['method'] === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req['method'] !== 'GET') {
    res.setHeader('Allow', 'GET');
    res.status(405).json({ error: `Method ${req['method']} Not Allowed` });
    return;
  }

  const startTime = Date.now();

  try {
    const q = String(((req['query'] as Record<string, string | string[]>).query ?? ((req['query'] as Record<string, string | string[]>).q ?? '')))
      .toLowerCase()
      .trim();
    const page = parseInt(String(((req['query'] as Record<string, string | string[]>).page ?? '1')), 10);
    const limit = Math.min(parseInt(String(((req['query'] as Record<string, string | string[]>).limit ?? '20')), 10), 100); // Cap at 100

    const typesParam = String((req['query'] as Record<string, string | string[]>).type ?? '')
      .split(',')
      .map((t: string) => t.trim())
      .filter(Boolean) as SearchFilters['types'];
    const category = (req['query'] as Record<string, string | string[]>).category as string | undefined;
    const minPrice = (req['query'] as Record<string, string | string[]>).minPrice ? parseFloat(String((req['query'] as Record<string, string | string[]>).minPrice)) : undefined;
    const maxPrice = (req['query'] as Record<string, string | string[]>).maxPrice ? parseFloat(String((req['query'] as Record<string, string | string[]>).maxPrice)) : undefined;
    const minRating = (req['query'] as Record<string, string | string[]>).minRating ? parseFloat(String((req['query'] as Record<string, string | string[]>).minRating)) : undefined;
    const sort = (req['query'] as Record<string, string | string[]>).sort as SearchFilters['sort'] | undefined;

    // Return empty results for empty query
    if (!q) {
      applyCacheHeaders(res, CacheCategory.SHORT);
      res.status(200).json({
        results: [],
        totalCount: 0,
        page,
        limit,
        query: q,
      });
      return;
    }

    // Create cache key
    const filterKey = `${(typesParam || []).join(',')}-${category || ''}-${minPrice || ''}-${maxPrice || ''}-${minRating || ''}-${sort || ''}`;
    const cacheKey = cacheKeys.search.results(`${q}-${page}-${limit}-${filterKey}`);

    // Use cache-or-compute pattern
    const searchResult = await cacheOrCompute(
      cacheKey,
      async () => {
        logInfo(`Performing search for: "${q}" (page ${page}, limit ${limit})`);
        return performSearch(q, page, limit, {
          ...(typesParam && typesParam.length ? { types: typesParam } : {}),
          ...(category ? { category } : {}),
          ...(typeof minPrice === 'number' ? { minPrice } : {}),
          ...(typeof maxPrice === 'number' ? { maxPrice } : {}),
          ...(typeof minRating === 'number' ? { minRating } : {}),
          ...(sort ? { sort } : {}),
        });
      },
      CacheCategory.SHORT, // 5 minutes cache for search results
      300 // 5 minutes TTL
    );

    const searchResponse: SearchResponse = {
      results: searchResult.results,
      totalCount: searchResult.totalCount,
      page,
      limit,
      query: q,
      hasMore: searchResult.hasMore,
    };

    // Apply cache headers
    applyCacheHeaders(res, CacheCategory.SHORT);
    
    // Add performance headers
    const responseTime = Date.now() - startTime;
    res.setHeader('X-Response-Time', responseTime.toString());
    res.setHeader('X-Search-Results', searchResponse.totalCount.toString());
    res.setHeader('X-Query-Length', q.length.toString());
    res.setHeader('X-Has-More', searchResult.hasMore.toString());

    res.status(200).json(searchResponse);
    return;

  } catch (_error) {
    logErrorToProduction('Search query failed:', { data: error });
    
    // Return empty results on error instead of 500
    applyCacheHeaders(res, CacheCategory.SHORT);
    res.setHeader('X-Data-Source', 'fallback');
    
    res.status(200).json({
      results: [],
      totalCount: 0,
      page: 1,
      limit: 20,
      query: String(((req['query'] as Record<string, string | string[]>).query ?? ((req['query'] as Record<string, string | string[]>).q ?? ''))),
      hasMore: false,
    });
    return;
  }
}

export default withErrorLogging(handler);

