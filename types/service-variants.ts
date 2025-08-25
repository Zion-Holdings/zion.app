export interface ServiceVariant {
  id: string;
  name: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  popular: boolean;
  category: string;
  link: string;
}

export interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  services: ServiceVariant[];
}