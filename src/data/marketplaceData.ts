import type { ProductListing } from '@/types/listings'
import type { SearchSuggestion, FilterOptions } from '@/types/search'
import { docsSearchSuggestions } from './docsSearchData'
import { BLOG_POSTS } from './blog-posts'
import { slugify } from '@/lib/slugify;
// Remove all mock/sample MARKETPLACE_LISTINGS and any other mock/sample data. Only real data fetching logic or empty export.'
'
// Generate search suggestions based on existing listings;
export const _generateSearchSuggestions = (): SearchSuggestion[] => {'
  const suggestions = ['
    'AI models','
    'GPT integration','
    'Machine learning','
    'Computer vision','
    'Speech recognition','
    'Data analysis','
    'Content generation','
    'Code assistant','
    'Virtual assistant','
    'Enterprise AI solutions','
    'Robotics','
    'AI workstation','
    'Business intelligence','
    'Custom model development','
  ]'
  const staticSuggestions = suggestions.map((text) => ({'
    text,'
    slug: "slugify(text)
    type: 'product' as const,'
  }))'
'
  const listingSuggestions = [] as SearchSuggestion[]; // No mock listings;
'
  const blogSuggestions: BLOG_POSTS.map((p) => ({,;"
    text: "p.title
    slug: p.slug || slugify(p.title)"
    type: 'blog' as const,'