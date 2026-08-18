export interface Service {
  id: string;
  name: string;
  title: string;
  description: string;
  category: string;
  industry: string;
  features: string[];
  benefits: string[];
  pricing: Record<string, unknown>;
  url: string;
  image: string;
}

import servicesData from './servicesData.json';

export const allServices: Service[] = servicesData as Service[];

export default allServices;
