import type { NextApiRequest, NextApiResponse } from 'next';
import { BLOG_POSTS } from '@/data/blog-posts';
import type { BlogPost } from '@/types/blog';
import { cacheOrCompute, CacheCategory, applyCacheHeaders, cacheKeys } from '@/lib/serverCache';
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';

// Optimized search function with early returns
function searchBlogPosts(query: string): BlogPost[] {
  if (!query) return BLOG_POSTS;

  const lowerQuery = query.toLowerCase();
  const searchTerms = lowerQuery.split(' ').filter(term => term.length > 0);

  return BLOG_POSTS.filter(post => {
    const searchableText = [
      post.title,
      post.excerpt,
      post.content,
      post.author,
      ...(post.tags || [])
    ].join(' ').toLowerCase();

    return searchTerms.every(term => searchableText.includes(term));
  });
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<BlogPost[] | { error: string }>
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { search, category, author, limit = '10', offset = '0' } = req.query;

    // Apply cache headers
    applyCacheHeaders(res, CacheCategory.BLOG, 300); // 5 minutes

    // Get cached or compute blog posts
    const posts = await cacheOrCompute(
      cacheKeys.blogPosts(search, category, author),
      async () => {
        let filteredPosts = BLOG_POSTS;

        // Apply search filter
        if (search && typeof search === 'string') {
          filteredPosts = searchBlogPosts(search);
        }

        // Apply category filter
        if (category && typeof category === 'string') {
          filteredPosts = filteredPosts.filter(post => 
            post.category?.toLowerCase() === category.toLowerCase()
          );
        }

        // Apply author filter
        if (author && typeof author === 'string') {
          filteredPosts = filteredPosts.filter(post => 
            post.author?.toLowerCase().includes(author.toLowerCase())
          );
        }

        return filteredPosts;
      }
    );

    // Apply pagination
    const limitNum = parseInt(limit as string, 10) || 10;
    const offsetNum = parseInt(offset as string, 10) || 0;
    const paginatedPosts = posts.slice(offsetNum, offsetNum + limitNum);

    logInfo('Blog posts API called', { 
      search, 
      category, 
      author, 
      total: posts.length, 
      returned: paginatedPosts.length 
    });

    res.status(200).json(paginatedPosts);
  } catch (error) {
    logErrorToProduction('Blog posts API error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}