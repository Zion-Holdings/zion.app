import fs from 'fs';
import path from 'path';
import type { NextApiRequest, NextApiResponse } from 'next';

interface HelpArticle {
  slug: string;
  title: string;
  content: string; // Or perhaps a summary if content is too large
}

interface ErrorResponse {
  error: string;
}

export default function handler(
  req: NextApiRequest, 
  res: NextApiResponse<HelpArticle[] | ErrorResponse>
) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  const searchQuery = (req.query?.q as string | undefined)?.toLowerCase() || '';
  
  try {
    // process.cwd() is standard in Node.js environments like Next.js API routes
    const dir = path.join(process.cwd(), 'docs/help');
    
    if (!fs.existsSync(dir)) {
      console.warn(`Help articles directory not found: ${dir}`);
      return res.status(200).json([]); // Return empty if dir doesn't exist
    }

    const files = fs.readdirSync(dir);
    const articles: HelpArticle[] = files
      .filter(f => f.endsWith('.md'))
      .map(f => {
        const fullPath = path.join(dir, f);
        const content = fs.readFileSync(fullPath, 'utf8');
        const slug = f.replace(/\.md$/, '');
        const titleMatch = content.match(/^#\s+(.*)/);
        const title = titleMatch ? titleMatch[1] : slug;
        // For simplicity, returning full content. Could be truncated.
        return { slug, title, content }; 
      });

    const filteredArticles = searchQuery
      ? articles.filter(a => 
          a.title.toLowerCase().includes(searchQuery) || 
          a.content.toLowerCase().includes(searchQuery)
        )
      : articles;
      
    return res.status(200).json(filteredArticles);

  } catch (error: unknown) {
    console.error('Error reading help articles:', error);
    const message = error instanceof Error ? error.message : 'An unexpected error occurred.';
    return res.status(500).json({ error: 'Failed to retrieve help articles.', details: message });
  }
}
