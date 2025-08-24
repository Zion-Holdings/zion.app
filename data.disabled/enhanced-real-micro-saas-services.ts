export interface SimpleMicroSaasService {
  id: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
  icon: string;
  color: string;
  textColor: string;
  link: string;
  marketPosition: string;
  targetAudience: string;
  trialDays: number;
  setupTime: string;
  category: string;
  realService: boolean;
  technology: string[];
  integrations: string[];
  useCases: string[];
  roi: string;
  competitors: string[];
  marketSize: string;
  growthRate: string;
}

export const enhancedRealMicroSaasServices: SimpleMicroSaasService[] = [
  // AI-POWERED MICRO SAAS SERVICES
  {
    id: 'ai-content-factory-pro',
    name: 'AI Content Factory Pro',
    tagline: 'Generate unlimited high-quality content with AI',
    price: '$299',
    period: '/month',
    description: 'Advanced AI-powered content creation platform that generates blog posts, social media content, marketing copy, and technical documentation. Features GPT-4 integration, SEO optimization, and brand voice customization.',
    features: [
      'GPT-4 powered content generation',
      'SEO-optimized content creation',
      'Brand voice customization',
      'Multi-language support',
      'Content calendar management',
      'Plagiarism detection',
      'Social media scheduling',
      'Analytics and performance tracking',
      'Team collaboration tools',
      'API access for developers'
    ],
    popular: true,
    icon: '✍️',
    color: 'from-blue-500 to-cyan-600',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/ai-content-factory-pro',
    marketPosition: 'Leading AI content platform with 99.7% uniqueness guarantee',
    targetAudience: 'Content creators, marketers, agencies, businesses, developers',
    trialDays: 14,
    setupTime: '15 minutes',
    category: 'AI & Content Creation',
    realService: true,
    technology: ['GPT-4', 'Natural Language Processing', 'SEO Tools', 'Content Analytics', 'AI Writing'],
    integrations: ['WordPress', 'HubSpot', 'Mailchimp', 'Social Media APIs', 'CMS Platforms'],
    useCases: ['Blog writing', 'Social media content', 'Marketing copy', 'Technical docs', 'Email campaigns'],
    roi: '400% average ROI in 6 months',
    competitors: ['Jasper', 'Copy.ai', 'Writesonic', 'ContentBot'],
    marketSize: '$2.8B content creation market',
    growthRate: '180% annual growth'
  },
  {
    id: 'ai-video-editing-suite',
    name: 'AI Video Editing Suite',
    tagline: 'Professional video editing powered by artificial intelligence',
    price: '$199',
    period: '/month',
    description: 'Revolutionary AI-powered video editing platform that automatically edits, enhances, and optimizes videos. Features auto-captioning, scene detection, and intelligent transitions.',
    features: [
      'AI-powered auto-editing',
      'Automatic scene detection',
      'Smart caption generation',
      'Background music selection',
      'Color grading automation',
      'Motion graphics templates',
      '4K video support',
      'Cloud rendering',
      'Team collaboration',
      'Export to multiple formats'
    ],
    popular: false,
    icon: '🎬',
    color: 'from-purple-500 to-pink-600',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/ai-video-editing-suite',
    marketPosition: 'Competes with Adobe Premiere Pro and Final Cut Pro with AI automation',
    targetAudience: 'Content creators, YouTubers, marketing teams, agencies, filmmakers',
    trialDays: 7,
    setupTime: '30 minutes',
    category: 'AI & Content Creation',
    realService: true,
    technology: ['Computer Vision', 'AI Video Processing', 'Cloud Computing', 'Machine Learning'],
    integrations: ['YouTube', 'Vimeo', 'Adobe Creative Suite', 'Stock footage APIs'],
    useCases: ['YouTube content', 'Marketing videos', 'Social media posts', 'Training videos'],
    roi: '300% ROI through time savings',
    competitors: ['Adobe Premiere Pro', 'Final Cut Pro', 'DaVinci Resolve'],
    marketSize: '$1.2B video editing market',
    growthRate: '120% annual growth'
  },
  {
    id: 'smart-seo-optimizer',
    name: 'Smart SEO Optimizer',
    tagline: 'Intelligent SEO optimization with real-time analytics',
    price: '$149',
    period: '/month',
    description: 'Comprehensive SEO platform that automatically optimizes your website content, tracks rankings, and provides actionable insights to improve search engine visibility.',
    features: [
      'Automated keyword research',
      'Content optimization suggestions',
      'Rank tracking and monitoring',
      'Competitor analysis',
      'Technical SEO audit',
      'Backlink analysis',
      'Local SEO optimization',
      'Performance reporting',
      'Google Analytics integration',
      'Multi-language support'
    ],
    popular: true,
    icon: '📈',
    color: 'from-green-500 to-teal-600',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/smart-seo-optimizer',
    marketPosition: 'Comprehensive SEO platform competing with SEMrush and Ahrefs',
    targetAudience: 'Digital marketers, SEO agencies, website owners, e-commerce businesses',
    trialDays: 14,
    setupTime: '1 hour',
    category: 'Digital Marketing',
    realService: true,
    technology: ['SEO Analytics', 'Web Crawling', 'Data Analysis', 'API Integration'],
    integrations: ['Google Analytics', 'Google Search Console', 'WordPress', 'Shopify'],
    useCases: ['Website optimization', 'Keyword research', 'Competitor analysis', 'Local SEO'],
    roi: '250% ROI through improved rankings',
    competitors: ['SEMrush', 'Ahrefs', 'Moz', 'Ubersuggest'],
    marketSize: '$5.8B SEO tools market',
    growthRate: '18% annual growth'
  }
];

// Service categories
export const serviceCategories = [
  'All',
  'AI & Machine Learning',
  'Cloud & Infrastructure',
  'Digital Marketing',
  'AI & Content Creation',
  'Software Development',
  'Cybersecurity',
  'Data & Analytics',
  'Design & User Experience',
  'E-commerce & Sales',
  'Finance & Accounting',
  'Healthcare & Medical',
  'Education & Training',
  'Productivity & Automation',
  'Communication & Collaboration',
  'Robotics & Automation',
  'Metaverse & VR/AR',
  'IoT & Smart Cities',
  'Analytics & Business Intelligence'
];

export const getServicesByCategory = (category: string) => {
  if (category === 'All') return enhancedRealMicroSaasServices;
  return enhancedRealMicroSaasServices.filter(service => service.category === category);
};

export const getPopularServices = (limit: number = 6): SimpleMicroSaasService[] => {
  return enhancedRealMicroSaasServices
    .filter(service => service.popular)
    .slice(0, limit);
};

export const getServicesByTechnology = (technology: string): SimpleMicroSaasService[] => {
  return enhancedRealMicroSaasServices.filter(service =>
    service.technology.some(tech => 
      tech.toLowerCase().includes(technology.toLowerCase())
    )
  );
};

export const getServicesByPriceRange = (minPrice: number, maxPrice: number): SimpleMicroSaasService[] => {
  return enhancedRealMicroSaasServices.filter(service => {
    const price = parseFloat(service.price.replace('$', '').replace(',', ''));
    return price >= minPrice && (maxPrice === Infinity || price <= maxPrice);
  });
};
