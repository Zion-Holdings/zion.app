import type { NextApiRequest, NextApiResponse } from 'next';
import { BLOG_POSTS } from '@/data/blog-posts';
import type { BlogPost } from '@/types/blog';
import {logErrorToProduction} from '@/utils/productionLogger';

export default function handler(

  req: NextApiRequest,
  res: NextApiResponse<BlogPost | { error: string }>
) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  const { slug } = req.query as { slug: string };
  if (!slug || typeof slug !== 'string') {
    return res.status(400).json({ error: 'Slug is required' });
  }

  try {
    const post = BLOG_POSTS.find((p) => p.slug === slug);
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    return res.status(200).json(post);
  } catch (err) {
    logErrorToProduction('Blog API error:', { data: err });
    return res.status(500).json({ error: 'Internal Server Error: Failed to fetch blog post' });
  }
}
