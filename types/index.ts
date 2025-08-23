export interface Service {
  id: string;
  name: string;
  description: string;
  type: string;
  category: string;
  pricing: {
    starter: string;
    professional: string;
    enterprise: string;
  };
  features: string[];
  rating: number;
  responseTime: string;
  users: string;
  slug: string;
}