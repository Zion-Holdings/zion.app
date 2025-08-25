export interface SearchSuggestion {
  id: string;
  text: string;
  type: 'recent' | 'trending' | 'suggestion';
  category?: string;
  tags?: string[];
}

export const generateSearchSuggestions = (query: string): SearchSuggestion[] => {
  const suggestions: SearchSuggestion[] = [
    {
      id: '1',
      text: 'AI CRM System',
      type: 'trending',
      category: 'AI Solutions',
      tags: ['CRM', 'AI', 'Business'],
    },
    {
      id: '2',
      text: 'Cloud Infrastructure Setup',
      type: 'trending',
      category: 'Cloud Services',
      tags: ['AWS', 'Azure', 'DevOps'],
    },
    {
      id: '3',
      text: 'E-commerce Platform',
      type: 'trending',
      category: 'Web Development',
      tags: ['React', 'Node.js', 'E-commerce'],
    },
    {
      id: '4',
      text: 'Cybersecurity Audit',
      type: 'trending',
      category: 'Security',
      tags: ['Security', 'Audit', 'Compliance'],
    },
    {
      id: '5',
      text: 'Data Analytics Dashboard',
      type: 'trending',
      category: 'Analytics',
      tags: ['Data', 'Analytics', 'Dashboard'],
    },
  ];

  // Filter suggestions based on query
  if (query.trim()) {
    const lowercaseQuery = query.toLowerCase();
    return suggestions.filter(suggestion =>
      suggestion.text.toLowerCase().includes(lowercaseQuery) ||
      suggestion.category?.toLowerCase().includes(lowercaseQuery) ||
      suggestion.tags?.some(tag => tag.toLowerCase().includes(lowercaseQuery))
    );
  }

  return suggestions;
};

export const getRecentSearches = (): SearchSuggestion[] => {
  return [
    { id: 'recent1', text: 'AI CRM System', type: 'recent' },
    { id: 'recent2', text: 'Cloud setup help', type: 'recent' },
    { id: 'recent3', text: 'Pricing information', type: 'recent' },
    { id: 'recent4', text: 'API documentation', type: 'recent' },
  ];
};

export const getTrendingSearches = (): SearchSuggestion[] => {
  return [
    { id: 'trend1', text: 'AI-powered solutions', type: 'trending', category: 'AI' },
    { id: 'trend2', text: 'Cloud migration', type: 'trending', category: 'Cloud' },
    { id: 'trend3', text: 'Digital transformation', type: 'trending', category: 'Consulting' },
    { id: 'trend4', text: 'Cybersecurity services', type: 'trending', category: 'Security' },
  ];
};