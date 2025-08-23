import type { NextApiRequest, NextApiResponse } from 'next';
import { withErrorLogging } from '@/utils/withErrorLogging';
import { MARKETPLACE_LISTINGS } from '@/data/listingData';
import { SERVICES } from '@/data/servicesData';
import { TALENT_PROFILES } from '@/data/talentData';
import { BLOG_POSTS } from '@/data/blog-posts';
import { DOCS_SEARCH_ITEMS } from '@/data/docsSearchData';

interface SearchSuggestion {
  id?: string;
  text: string;
  slug: string;
  type: 'product' | 'service' | 'talent' | 'category' | 'skill' | 'recent' | 'doc' | 'blog';
  iconUrl?: string;
  category?: string;
}

function handler(
  req: NextApiRequest,
  res: NextApiResponse<SearchSuggestion[] | { error: string }>
) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const q = String(((req.query as any).q ?? '')).toLowerCase().trim();
  const limit = parseInt(String(((req.query as any).limit ?? '5')), 10);

  if (!q) {
    return res.status(200).json([]);
  }

  // Helper function to create slug from title
  const createSlug = (title: string) => 
    title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

  const match = (text?: string) => text?.toLowerCase().includes(q);

  const suggestions: SearchSuggestion[] = [];

  // Add product suggestions
  const productSuggestions = MARKETPLACE_LISTINGS
    .filter((p) => match(p.title) || match(p.description))
    .slice(0, 2) // Limit to 2 product suggestions
    .map((p) => ({
      id: p.id,
      text: p.title,
      slug: createSlug(p.title),
      type: 'product' as const,
      iconUrl: (p as any).image,
      category: p.category
    }));

  suggestions.push(...productSuggestions);

  // Add service suggestions
  const serviceSuggestions = SERVICES
    .filter((s) => match(s.title) || match(s.description))
    .slice(0, 2) // Limit to 2 service suggestions
    .map((s) => ({
      id: s.id,
      text: s.title,
      slug: createSlug(s.title),
      type: 'service' as const,
      iconUrl: (s as any).image,
      category: s.category
    }));

  suggestions.push(...serviceSuggestions);

  // Add talent suggestions
  const talentSuggestions = TALENT_PROFILES
    .filter((t) => match(t.full_name) || match(t.professional_title))
    .slice(0, 1) // Limit to 1 talent suggestion
    .map((t) => ({
      id: t.id,
      text: t.full_name,
      slug: createSlug(t.full_name),
      type: 'talent' as const,
      iconUrl: (t as any).avatar,
    }));

  suggestions.push(...talentSuggestions);

  // Add blog post suggestions
  const blogSuggestions = BLOG_POSTS
    .filter((p) => match(p.title) || match(p.excerpt))
    .slice(0, 1)
    .map((p) => ({
      id: p.id,
      text: p.title,
      slug: p.slug,
      type: 'blog' as const,
    }));

  suggestions.push(...blogSuggestions);

  // Add documentation suggestions
  const docsSuggestions = DOCS_SEARCH_ITEMS
    .filter((d) => match(d.text))
    .slice(0, 1)
    .map((d) => ({
      text: d.text,
      slug: d.path,
      type: 'doc' as const,
    }));

  suggestions.push(...docsSuggestions);

  // Add some popular/trending suggestions if query matches
  const popularSuggestions = [
    { text: 'GPU Cluster', type: 'category' as const },
    { text: 'AI Models', type: 'category' as const },
    { text: 'Machine Learning', type: 'category' as const },
    { text: 'Data Science', type: 'category' as const },
    { text: 'Cloud Computing', type: 'category' as const },
    { text: 'Blockchain', type: 'category' as const },
    { text: 'Cybersecurity', type: 'category' as const },
    { text: 'DevOps', type: 'category' as const },
  ].filter(item => match(item.text))
   .map(item => ({
     text: item.text,
     slug: createSlug(item.text),
     type: item.type,
   }));

  suggestions.push(...popularSuggestions);

  // Add category suggestions
  const categories = ['AI & Machine Learning', 'Cloud Services', 'Software Development', 'Hardware & Equipment'];
  categories.forEach(category => {
    if (category.toLowerCase().includes(q) && suggestions.length < 10) {
      suggestions.push({
        id: category.toLowerCase().replace(/\s+/g, '-'),
        text: category,
        type: 'category' as const,
        slug: category.toLowerCase().replace(/\s+/g, '-')
      });
    }
  });

  // Return limited and sorted suggestions
  return res.status(200).json(
    suggestions
      .slice(0, limit)
      .sort((a, b) => {
        // Prioritize exact matches and shorter texts
        const aExactMatch = a.text.toLowerCase() === q;
        const bExactMatch = b.text.toLowerCase() === q;
        
        if (aExactMatch && !bExactMatch) return -1;
        if (!aExactMatch && bExactMatch) return 1;
        
        return a.text.length - b.text.length;
      })
  );
}

export default withErrorLogging(handler); 
