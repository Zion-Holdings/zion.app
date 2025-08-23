export type ServiceProvider = {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  aiMatchScore: number; // 0-100
  rating: number; // 0-5
  reviewsCount: number;
};

export const PROVIDERS: ServiceProvider[] = [
  {
    id: 'sp-001',
    slug: 'neural-networks-lab',
    title: 'Neural Networks Lab',
    description: 'Custom AI and ML solutions including NLP, computer vision, and MLOps.',
    category: 'ai-automation',
    aiMatchScore: 94,
    rating: 4.8,
    reviewsCount: 126,
  },
  {
    id: 'sp-002',
    slug: 'cloudscale-pro',
    title: 'CloudScale Pro',
    description: 'Cloud migration, infra as code, and Kubernetes platform engineering.',
    category: 'cloud-services',
    aiMatchScore: 88,
    rating: 4.6,
    reviewsCount: 89,
  },
  {
    id: 'sp-003',
    slug: 'securebyte-audits',
    title: 'SecureByte Audits',
    description: 'Offensive security, SOC hardening, and compliance automation.',
    category: 'security',
    aiMatchScore: 91,
    rating: 4.7,
    reviewsCount: 142,
  },
  {
    id: 'sp-004',
    slug: 'dataforge-analytics',
    title: 'DataForge Analytics',
    description: 'End-to-end analytics: warehousing, ETL, BI dashboards, and ML ops.',
    category: 'data-analytics',
    aiMatchScore: 86,
    rating: 4.5,
    reviewsCount: 73,
  },
  {
    id: 'sp-005',
    slug: 'pixelcraft-studio',
    title: 'PixelCraft Studio',
    description: 'UX research, design systems, and responsive web app development.',
    category: 'web-development',
    aiMatchScore: 77,
    rating: 4.4,
    reviewsCount: 58,
  },
  {
    id: 'sp-006',
    slug: 'automation-guild',
    title: 'Automation Guild',
    description: 'RPA, workflow automation, and integrations to streamline operations.',
    category: 'ai-automation',
    aiMatchScore: 82,
    rating: 4.3,
    reviewsCount: 64,
  },
];

export const PROVIDER_CATEGORIES: { value: string; label: string }[] = [
  { value: 'all', label: 'All Categories' },
  { value: 'ai-automation', label: 'AI & Automation' },
  { value: 'cloud-services', label: 'Cloud Services' },
  { value: 'data-analytics', label: 'Data & Analytics' },
  { value: 'security', label: 'Security' },
  { value: 'web-development', label: 'Web Development' },
];