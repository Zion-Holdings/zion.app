// Minimal ProductListing type for type safety
export interface Service {
  id: string;
  title: string;
  description: string;
  category?: string;
  image?: string;
}

export const SERVICES: Service[] = [
  {
    id: 'sample-service',
    title: 'Sample Service',
    description: 'A sample service for search suggestions.',
    category: 'Sample Category',
    image: '',
  },
];
