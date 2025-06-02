
export interface SearchSuggestion {
  text: string;
  type: 'product' | 'category' | 'tag' | 'skill' | 'person' | 'recent' | 'doc';
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
