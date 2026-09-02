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
  url?: string;
  image?: string;
}

import servicesData from './servicesData_trimmed.json';

export const allServices: Service[] = servicesData as Service[];
export const ALL_SERVICES_COUNT = 16323; // full dataset size for dynamic route

export default allServices;
