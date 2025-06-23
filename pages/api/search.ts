import type { NextApiRequest, NextApiResponse } from 'next';
import { withErrorLogging } from '@/utils/withErrorLogging';
import { MARKETPLACE_LISTINGS } from '@/data/listingData';
import { SERVICES } from '@/data/servicesData';
import { TALENT_PROFILES } from '@/data/talentData';
import { BLOG_POSTS } from '@/data/blog-posts';
import { DOCS_SEARCH_ITEMS } from '@/data/docsSearchData';
import { cacheOrCompute, CacheCategory, applyCacheHeaders, cacheKeys } from '@/lib/serverCache';
import Fuse from 'fuse.js';

// Define SearchResult interface
interface SearchResult {
  id: string;
  type: 'product' | 'service' | 'talent' | 'equipment' | 'category' | 'doc' | 'blog';
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

const createSlug = (title: string) =>
  title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

// Pre-build search documents for better performance
let SEARCH_DOCUMENTS: SearchResult[] = [];
let fuseInstance: Fuse<SearchResult> | null = null;

// Initialize search data (cached)
function initializeSearchData(): SearchResult[] {
  if (SEARCH_DOCUMENTS.length > 0) {
    return SEARCH_DOCUMENTS;
  }

  console.log('Initializing search documents...');
  const startTime = Date.now();

  SEARCH_DOCUMENTS = [
    ...MARKETPLACE_LISTINGS.map((p) => ({
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
    })),
    ...SERVICES.map((s) => ({
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
    })),
    ...TALENT_PROFILES.map((t) => ({
      id: t.id,
      type: 'talent' as const,
      title: t.full_name,
      description: t.professional_title || '',
      slug: createSlug(t.full_name),
      image: (t as any).avatar || (t as any).image,
      rating: (t as any).rating,
      author: { name: t.full_name, avatar: (t as any).avatar },
      tags: (t as any).skills || (t as any).tags,
    })),
    ...BLOG_POSTS.map((p) => ({
      id: p.id,
      type: 'blog' as const,
      title: p.title,
      description: p.excerpt,
      slug: p.slug,
    })),
    ...DOCS_SEARCH_ITEMS.map((d) => ({
      id: d.text,
      type: 'doc' as const,
      title: d.text,
      description: d.path,
      slug: d.path,
    })),
  ];

  console.log(`Search documents initialized in ${Date.now() - startTime}ms. Total: ${SEARCH_DOCUMENTS.length}`);
  return SEARCH_DOCUMENTS;
}

// Initialize Fuse instance with optimized settings
function getFuseInstance(): Fuse<SearchResult> {
  if (!fuseInstance) {
    const documents = initializeSearchData();
    fuseInstance = new Fuse(documents, {
      keys: [
        { name: 'title', weight: 0.4 },
        { name: 'description', weight: 0.3 },
        { name: 'tags', weight: 0.2 },
        { name: 'category', weight: 0.1 }
      ],
      threshold: 0.3,
      distance: 100,
      minMatchCharLength: 2,
      includeScore: true,
      includeMatches: true
    });
    console.log('Fuse search engine initialized');
  }
  return fuseInstance;
}

// Optimized search function
function performSearch(query: string, page: number, limit: number) {
  const fuse = getFuseInstance();
  const searchResults = fuse.search(query);
  
  const totalCount = searchResults.length;
  const start = (page - 1) * limit;
  const end = start + limit;
  
  const paginatedResults = searchResults
    .slice(start, end)
    .map((result) => ({
      ...result.item,
      _score: result.score // Include relevance score
    }));

  return {
    results: paginatedResults,
    totalCount,
    hasMore: end < totalCount
  };
}

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SearchResponse | { error: string }>,
) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const startTime = Date.now();

  try {
    const q = String(req.query.query ?? req.query.q ?? '')
      .toLowerCase()
      .trim();
    const page = parseInt(String(req.query.page ?? '1'), 10);
    const limit = Math.min(parseInt(String(req.query.limit ?? '20'), 10), 100); // Cap at 100

    // Return empty results for empty query
    if (!q) {
      applyCacheHeaders(res, CacheCategory.SHORT);
      return res.status(200).json({
        results: [],
        totalCount: 0,
        page,
        limit,
        query: q,
      });
    }

    // Create cache key
    const cacheKey = cacheKeys.search.results(`${q}-${page}-${limit}`);

    // Use cache-or-compute pattern
    const searchResult = await cacheOrCompute(
      cacheKey,
      async () => {
        console.log(`Performing search for: "${q}" (page ${page}, limit ${limit})`);
        return performSearch(q, page, limit);
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
    };

    // Apply cache headers
    applyCacheHeaders(res, CacheCategory.SHORT);
    
    // Add performance headers
    const responseTime = Date.now() - startTime;
    res.setHeader('X-Response-Time', responseTime.toString());
    res.setHeader('X-Search-Results', searchResponse.totalCount.toString());
    res.setHeader('X-Query-Length', q.length.toString());
    res.setHeader('X-Has-More', searchResult.hasMore.toString());

    return res.status(200).json(searchResponse);

  } catch (error: any) {
    console.error('Search query failed:', error);
    
    // Return empty results on error instead of 500
    applyCacheHeaders(res, CacheCategory.SHORT);
    res.setHeader('X-Data-Source', 'fallback');
    
    return res.status(200).json({
      results: [],
      totalCount: 0,
      page: 1,
      limit: 20,
      query: String(req.query.query ?? req.query.q ?? ''),
    });
  }
}

export default withErrorLogging(handler);
