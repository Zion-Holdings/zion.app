import type { NextApiRequest, NextApiResponse } from 'next';
import { BLOG_POSTS } from '@/data/blog-posts';
import type { BlogPost } from '@/types/blog';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<BlogPost[] | { error: string }>
) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  try {
    const query = String(((req.query as any).query || '')).toLowerCase();
    const match = (text?: string) => text?.toLowerCase().includes(query);
    const results = BLOG_POSTS.filter(
      p =>
        !query ||
        match(p.title) ||
        match(p.excerpt) ||
        match(p.content) ||
        p.tags.some(t => match(t))
    );
    return res.status(200).json(results);
  } catch (err) {
    console.error('Blog API error:', err);
    return res.status(500).json({ error: 'Internal Server Error: Failed to fetch blog posts' });
  }
}
