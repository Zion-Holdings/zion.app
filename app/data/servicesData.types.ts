// Types for Faceted Search Component

export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string;
  category: string;
  industry: string;
  useCase?: string;
  href: string;
  pricing?: {
    basic: string;
    pro: string;
    enterprise?: string;
  };
  features?: string[];
  benefits?: string[];
  contactInfo?: {
    website?: string;
    email?: string;
    phone?: string;
  };
}

export interface FilterState {
  industry: string;
  category: string;
  useCase: string;
}

export interface FilterOption {
  value: string;
  label: string;
  count?: number;
}

export interface FacetedSearchResult {
  service: Service;
  relevanceScore?: number;
}

// Theme configuration
export type Theme = 'light' | 'dark' | 'system';

// Filter configuration for dynamic filtering
export interface FilterConfig {
  field: keyof Service;
  type: 'select' | 'checkbox' | 'search';
  placeholder?: string;
  searchable?: boolean;
  multiple?: boolean;
}