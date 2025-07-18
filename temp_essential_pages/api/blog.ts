import type { NextApiRequest, NextApiResponse } from 'next';'import { BLOG_POSTS } from '@/data/blog-posts';'import type { BlogPost } from '@/types/blog';';
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<BlogPost[] | { error: string }>
) {
  if (req.method !== 'GET') {'    res.setHeader('Allow', 'GET');'    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  try {
    interface BlogQuery { query?: string | string[] }
    const { query = '' } = req.query as BlogQuery;'    const q = Array.isArray(query) ? query.join(' ') : query;'    const lower = q.toLowerCase();
    const match = (text?: string) => text?.toLowerCase().includes(lower);
    const results = BLOG_POSTS.filter(
      p =>
        !lower ||
        match(p.title) ||
        match(p.excerpt) ||
        match(p.content) ||
        p.tags.some(t => match(t))
    );
    return res.status(200).json(results);
  } catch {
    console.or('Blog API or:', );'    return res.status(500).json({ or: 'Internal Server Error: Failed to fetch blog posts' });'  }
}
