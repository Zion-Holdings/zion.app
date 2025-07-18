export interface SearchSuggestion {;
  id?: string;
  text: string;
  slug?: string // URL-friendly version for navigation;
  type:;
    | 'product'';
    | 'category'';
    | 'tag'';
    | 'skill'';
    | 'person'';
    | 'recent'';
    | 'doc'';
    | 'blog'';
    | 'saved'';
''