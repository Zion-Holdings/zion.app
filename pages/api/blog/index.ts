import type { NextApiRequest, NextApiResponse } from 'next';
import { BLOG_POSTS } from '@/data/blog-posts';
import type { BlogPost } from '@/types/blog';
import { cacheOrCompute, CacheCategory, applyCacheHeaders, cacheKeys } from '@/lib/serverCache';
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';


// Optimized search function with early returns
function searchBlogPosts(query: string): BlogPost[] {
  if (!query) return BLOG_POSTS;
  
  const lowerQuery = query.toLowerCase();
  const match = (text?: string) => text?.toLowerCase().includes(lowerQuery);
  
  // Use filter with early termination for better performance
  return BLOG_POSTS.filter(post => {
    // Check title first (most likely match)
    if (match(post.title)) return true;
    
    // Check excerpt second
    if (match(post.excerpt)) return true;
    
    // Check content third (most expensive)
    if (match(post.content)) return true;
    
    // Check tags last
    return post.tags.some(tag => match(tag));
  });
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<BlogPost[] | { error: string }>
) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  try {
    const query = String((req.query as any).query || '').toLowerCase().trim();
    
    // Create cache key based on query
    const cacheKey = query 
      ? cacheKeys.blog.search(query)
      : cacheKeys.blog.all;

    // Use cache-or-compute pattern
    const results = await cacheOrCompute(
      cacheKey,
      async () => {
        logInfo(`Computing blog results for query: "${query}"`);
        return searchBlogPosts(query);
      },
      query ? CacheCategory.SHORT : CacheCategory.MEDIUM, // Search results cached shorter
      query ? 300 : 1800 // 5 min for search, 30 min for all posts
    );

    // Apply cache headers
    applyCacheHeaders(res, query ? CacheCategory.SHORT : CacheCategory.MEDIUM);
    
    // Add performance headers
    res.setHeader('X-Response-Time', Date.now().toString());
    res.setHeader('X-Result-Count', results.length.toString());
    res.setHeader('X-Query', query || 'none');

    return res.status(200).json(results);

  } catch (err) {
    logErrorToProduction('Blog API error:', { data: err });
    
    // Return fallback - all posts on error
    applyCacheHeaders(res, CacheCategory.SHORT);
    res.setHeader('X-Data-Source', 'fallback');
    
    return res.status(200).json(BLOG_POSTS);
  }
}
