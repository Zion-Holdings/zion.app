import type { NextApiRequest, NextApiResponse } from 'next';
import { applyCorsHeaders } from '@/middleware/cors';
import { withErrorLogging } from '@/utils/withErrorLogging';
import { MARKETPLACE_LISTINGS } from '@/data/listingData';
import { TALENT_PROFILES } from '@/data/talentData';
import { BLOG_POSTS } from '@/data/blog-posts';
import { cacheOrCompute, CacheCategory, applyCacheHeaders, cacheKeys } from '@/lib/serverCache';

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
}

interface SearchResponse {
  results: SearchResult[];
  totalCount: number;
  page: number;
  limit: number;
  query: string;
  hasMore?: boolean;
}

// Enhanced search function with better filtering
function performSearch(query: string, page: number, limit: number): { results: SearchResult[]; totalCount: number; hasMore: boolean } {
  const searchTerm = query.toLowerCase().trim();
  const allResults: SearchResult[] = [];

  // Search marketplace listings
  const productResults = MARKETPLACE_LISTINGS.filter(item => 
    item.title?.toLowerCase().includes(searchTerm) ||
    item.description?.toLowerCase().includes(searchTerm) ||
    item.category?.toLowerCase().includes(searchTerm) ||
    item.tags?.some(tag => tag.toLowerCase().includes(searchTerm))
  ).map(item => ({
    id: item.id,
    title: item.title,
    description: item.description,
    type: 'product' as const,
    category: item.category,
    url: `/marketplace/products/${item.id}`,
    image: item.images?.[0],
    price: item.price ?? undefined,
    currency: item.currency || 'USD',
    rating: item.rating,
    tags: item.tags
  }));

  // Search talent profiles
  const talentResults = TALENT_PROFILES.filter(profile => 
    profile.full_name?.toLowerCase().includes(searchTerm) ||
    profile.professional_title?.toLowerCase().includes(searchTerm) ||
    profile.bio?.toLowerCase().includes(searchTerm) ||
    profile.skills?.some(skill => skill.toLowerCase().includes(searchTerm))
  ).map(profile => ({
    id: profile.id,
    title: profile.full_name,
    description: `${profile.professional_title} - ${profile.bio || ''}`,
    type: 'talent' as const,
    category: 'Talent',
    url: `/marketplace/talent/${profile.id}`,
    image: profile.profile_picture_url,
    price: profile.hourly_rate,
    currency: 'USD',
    rating: profile.average_rating,
    tags: profile.skills
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
    image: post.featuredImage,
    tags: post.tags
  }));

  // Combine all results
  allResults.push(...productResults, ...talentResults, ...blogResults);

  // Sort by relevance (exact matches first, then partial matches)
  allResults.sort((a, b) => {
    const aExact = a.title.toLowerCase() === searchTerm ? 1 : 0;
    const bExact = b.title.toLowerCase() === searchTerm ? 1 : 0;
    if (aExact !== bExact) return bExact - aExact;
    
    const aStarts = a.title.toLowerCase().startsWith(searchTerm) ? 1 : 0;
    const bStarts = b.title.toLowerCase().startsWith(searchTerm) ? 1 : 0;
    if (aStarts !== bStarts) return bStarts - aStarts;
    
    return a.title.localeCompare(b.title);
  });

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

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SearchResponse | { error: string }>,
) {
  // Apply CORS headers first
  applyCorsHeaders(req, res);

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  const startTime = Date.now();

  try {
    const q = String(((req.query as any).query ?? ((req.query as any).q ?? '')
      .toLowerCase()
      .trim();
    const page = parseInt(String(((req.query as any).page ?? '1'), 10);
    const limit = Math.min(parseInt(String(((req.query as any).limit ?? '20'), 10), 100); // Cap at 100

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

    return res.status(200).json(searchResponse);

  } catch (error) {
    console.error('Search query failed:', error);
    
    // Return empty results on error instead of 500
    applyCacheHeaders(res, CacheCategory.SHORT);
    res.setHeader('X-Data-Source', 'fallback');
    
    return res.status(200).json({
      results: [],
      totalCount: 0,
      page: 1,
      limit: 20,
      query: String(((req.query as any).query ?? ((req.query as any).q ?? ''),
      hasMore: false,
    });
  }
}

export default withErrorLogging(handler);
