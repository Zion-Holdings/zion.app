export interface Service {
  id: string;
  name: string;
  title: string;
  description: string;
  category: string;
  industry: string;
  icon?: string;
  features: string[];
  benefits: string[];
  pricing: Record<string, unknown>;
  popular?: boolean;
  url: string;
  image: string;
}

import servicesData from './servicesData.json';

export const allServices: Service[] = servicesData as Service[];

export default allServices;
