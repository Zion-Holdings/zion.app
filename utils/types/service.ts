export interface Service {
  id: string;
  title: string;
  description: string;
  providerName: string;
  price: {
    from: number;
    currency: string;
    type: 'hourly' | 'fixed' | 'monthly';
  };
  category: string;
  rating: number;
  reviewCount: number;
  deliveryTime: string;
  location: string;
  experience: string;
  specialties: string[];
  imageUrl: string;
  tags: string[];
  aiScore: number;
}

export interface QuoteRequest {
  serviceId: string;
  serviceTitle: string;
  projectDescription: string;
  timeline: {
    startDate: Date;
    endDate: Date;
  };
  budgetRange: string;
  contactEmail: string;
  additionalRequirements?: string;
}

export interface ServiceFilters {
  category: string;
  priceRange: [number, number];
  rating: number;
  deliveryTime: string;
  searchTerm: string;
}

export interface ServiceCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface BudgetRange {
  label: string;
  value: string;
  min: number;
  max: number;
}

export const BUDGET_RANGES: BudgetRange[] = [
  { label: 'Under $1,000', value: 'under-1000', min: 0, max: 1000 },
  { label: '$1,000 - $5,000', value: '1000-5000', min: 1000, max: 5000 },
  { label: '$5,000 - $10,000', value: '5000-10000', min: 5000, max: 10000 },
  { label: '$10,000 - $25,000', value: '10000-25000', min: 10000, max: 25000 },
  { label: '$25,000 - $50,000', value: '25000-50000', min: 25000, max: 50000 },
  { label: 'Over $50,000', value: 'over-50000', min: 50000, max: 1000000 },
];

export const DELIVERY_TIMES = [
  'Any time',
  '1-2 weeks',
  '2-4 weeks',
  '1-2 months',
  '2-3 months',
  '3+ months'
]; 