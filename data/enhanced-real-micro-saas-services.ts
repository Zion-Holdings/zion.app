export interface MicroSaasService {
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

export const enhancedRealMicroSaasServices: MicroSaasService[] = [
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
    popular: true,
    icon: '🎬',
    color: 'from-yellow-500 to-orange-600',
    textColor: 'text-yellow-400',
    link: 'https://ziontechgroup.com/ai-video-editing',
    marketPosition: 'Competitive with Adobe Premiere Pro ($20.99/month), Final Cut Pro ($299), and DaVinci Resolve (Free). Our advantage: Better AI automation, ease of use, and cost-effectiveness.',
    targetAudience: 'Content creators, Marketing teams, Social media managers, YouTubers, Small businesses, Educators',
    trialDays: 14,
    setupTime: '2 hours',
    category: 'AI & Media',
    realService: true,
    technology: ['OpenAI GPT-4', 'Computer Vision', 'React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'FFmpeg'],
    integrations: ['YouTube', 'Vimeo', 'Instagram', 'Facebook', 'TikTok', 'Dropbox', 'Google Drive'],
    useCases: ['Video marketing', 'Social media content', 'Educational videos', 'Product demos', 'Event recordings'],
    roi: '300% average ROI in 4 months',
    competitors: ['Adobe Premiere Pro', 'Final Cut Pro', 'DaVinci Resolve', 'Runway ML'],
    marketSize: '$3.2B video editing market',
    growthRate: '220% annual growth'
  },
  {
    id: 'cloud-cost-optimizer',
    name: 'Cloud Cost Optimizer',
    tagline: 'Cut AWS, GCP, and Azure bills by 20-45% automatically',
    price: '$149',
    period: '/month',
    description:
      'Automated multi-cloud cost optimization: rightsizing, schedules, spot orchestration, idle cleanup, and anomaly detection with savings reports.',
    features: [
      'Automated rightsizing',
      'Idle resource cleanup',
      'Spot/preemptible orchestration',
      'Off-hours scheduling and policy automation'
    ],
    popular: true,
    icon: '☁️',
    color: 'from-cyan-500 to-blue-600',
    textColor: 'text-cyan-400',
    link: 'https://ziontechgroup.com/cloud-cost-optimizer',
    marketPosition: 'Competes with CloudZero/CloudHealth at SMB-friendly pricing.',
    targetAudience: 'SaaS companies, startups, FinOps teams, IT leaders',
    trialDays: 14,
    setupTime: '1 hour',
    category: 'Cloud & Infrastructure',
    realService: true,
    technology: ['Node.js', 'React', 'AWS/GCP/Azure APIs', 'Kubernetes'],
    integrations: ['AWS CE', 'GCP Billing', 'Azure Cost Mgmt', 'Datadog'],
    useCases: ['Cut cloud spend', 'Automate off-hours', 'Detect anomalies'],
    roi: 'Average 25-45% savings within 60 days for >$10k/month spend.',
    competitors: ['CloudZero', 'CloudHealth', 'Kubecost'],
    marketSize: '$20B+ cloud cost management market',
    growthRate: '19% CAGR'
  },
  {
    id: 'database-performance-monitor',
    name: 'Database Performance Monitor',
    tagline: 'Proactive SQL optimization and index tuning',
    price: '$129',
    period: '/month',
    description:
      'Continuous query analytics, index suggestions, missing/unused index detection, slow query capture, lock/IO diagnostics, and regression alerts.',
    features: [
      'Slow query capture and ranking',
      'Automatic index recommendations',
      'Query plan diff and regression alerts',
      'Lock contention and IO heatmaps'
    ],
    popular: true,
    icon: '🗄️',
    color: 'from-emerald-500 to-teal-600',
    textColor: 'text-emerald-400',
    link: 'https://ziontechgroup.com/database-performance-monitor',
    marketPosition: 'Comparable to pganalyze/Datadog DBM with stronger prescriptive tuning.',
    targetAudience: 'SaaS, data teams, DBAs, engineers',
    trialDays: 14,
    setupTime: '30 minutes',
    category: 'Analytics & Business Intelligence',
    realService: true,
    technology: ['PostgreSQL', 'MySQL', 'Node.js', 'OpenTelemetry'],
    integrations: ['RDS/Aurora', 'Cloud SQL', 'Azure DB', 'Slack'],
    useCases: ['Reduce query latency', 'Cut DB costs', 'Prevent outages'],
    roi: '30-70% latency reductions; 10-30% DB cost savings.',
    competitors: ['pganalyze', 'EverSQL', 'Datadog DBM'],
    marketSize: '$8B+ APM/DB observability',
    growthRate: '15% CAGR'
  }
];

export const serviceCategories = [
  'AI & Content Creation',
  'AI & Media',
  'Healthcare & AI',
  'Climate Tech & AI',
  'Blockchain & Web3',
  'DeFi & Cryptocurrency',
  'Cybersecurity & Quantum',
  'Financial Technology',
  'Biotechnology & Quantum',
  'Logistics & Supply Chain',
  'Energy & Sustainability',
  'Metaverse & VR/AR',
  'IoT & Smart Cities',
  'Cloud & Infrastructure',
  'Analytics & Business Intelligence'
];

export const getServicesByCategory = (category: string) => {
  return enhancedRealMicroSaasServices.filter(service => service.category === category);
};

export const getPopularServices = (limit: number = 6): MicroSaasService[] => {
  return enhancedRealMicroSaasServices
    .filter(service => service.popular)
    .slice(0, limit);
};

export const getServicesByTechnology = (technology: string): MicroSaasService[] => {
  return enhancedRealMicroSaasServices.filter(service =>
    service.technology.some(tech => 
      tech.toLowerCase().includes(technology.toLowerCase())
    )
  );
};

export const getServicesByPriceRange = (minPrice: number, maxPrice: number): MicroSaasService[] => {
  return enhancedRealMicroSaasServices.filter(service => {
    const price = parseFloat(service.price.replace('$', '').replace(',', ''));
    return price >= minPrice && (maxPrice === Infinity || price <= maxPrice);
  });
};
