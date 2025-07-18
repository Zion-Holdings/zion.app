import type { NextApiRequest, NextApiResponse } from 'next';
import { BLOG_POSTS } from '@/data/blog-posts';
import type { BlogPost } from '@/types/blog';
import { logErrorToProduction } from '@/utils/productionLogger';
;
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<BlogPost | { error: string }>
) {
  if (req.method !== 'GET') {'
    return res.status(405).json({ error: 'Method not allowed' });'
  }

  try {
    const { slug } = req.query;

    if (!slug || typeof slug !== 'string') {'
      return res.status(400).json({ error: 'Slug is required' });'
    }

    const post = BLOG_POSTS.find(p => p.slug === slug);

    if (!post) {
      return res.status(404).json({ error: 'Blog post not found' });'
    }

    res.status(200).json(post);
  } catch (error) {
    logErrorToProduction('Blog post API error:', error);'
    res.status(500).json({ error: 'Internal server error' });'
  }
}