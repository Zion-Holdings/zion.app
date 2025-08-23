
export interface SearchSuggestion {
  id?: string;
  text: string;
  slug?: string; // URL-friendly version for navigation
  type: 'product' | 'category' | 'tag' | 'skill' | 'person' | 'recent' | 'doc' | 'blog' | 'saved';
  iconUrl?: string;
}

export interface SearchHighlight {
  before: string;
  match: string;
  after: string;
}

export interface FilterOptions {
  productTypes: {
    label: string;
    value: string;
  }[];
  locations: {
    label: string;
    value: string;
  }[];
  availabilityOptions: {
    label: string;
    value: string;
  }[];
  ratingOptions: number[];
  minPrice: number;
  maxPrice: number;
}
