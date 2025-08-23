export interface MicroSaasService {
  id: string;
  name: string;
  description: string;
  category: string;
  pricing: {
    starter: string;
    pro: string;
    enterprise: string;
    currency: string;
    period: string;
  };
  features: string[];
  website: string;
  status: 'active' | 'beta' | 'coming-soon';
  launchDate: string;
  technology: string[];
  useCases: string[];
  competitors: string[];
  marketSize: string;
  targetAudience: string;
  integration: string[];
  api: boolean;
  freeTier: boolean;
  trialDays: number;
}

export const microSaasServices: MicroSaasService[] = [
  {
    id: 'ai-content-generator',
    name: 'AI Content Generator Pro',
    description: 'Advanced AI-powered content creation platform that generates high-quality blog posts, social media content, and marketing copy with SEO optimization.',
    category: 'Content & Marketing',
    pricing: {
      starter: '29',
      pro: '79',
      enterprise: '299',
      currency: 'USD',
      period: 'month'
    },
    features: [
      'AI-powered content generation',
      'SEO optimization',
      'Multi-language support',
      'Content templates',
      'Plagiarism detection',
      'Brand voice customization',
      'Content calendar',
      'Analytics dashboard'
    ],
    website: 'https://ai-content-generator.zion.app',
    status: 'active',
    launchDate: '2024-01-15',
    technology: ['OpenAI GPT-4', 'React', 'Node.js', 'PostgreSQL'],
    useCases: ['Blog writing', 'Social media content', 'Email marketing', 'Product descriptions'],
    competitors: ['Jasper', 'Copy.ai', 'Writesonic'],
    marketSize: '$2.5B',
    targetAudience: 'Marketing teams, content creators, small businesses',
    integration: ['WordPress', 'Shopify', 'Mailchimp', 'HubSpot'],
    api: true,
    freeTier: true,
    trialDays: 14
  },
  {
    id: 'smart-analytics-dashboard',
    name: 'Smart Analytics Dashboard',
    description: 'Real-time business intelligence platform with predictive analytics, automated reporting, and customizable dashboards for data-driven decision making.',
    category: 'Analytics & Business Intelligence',
    pricing: {
      starter: '49',
      pro: '149',
      enterprise: '499',
      currency: 'USD',
      period: 'month'
    },
    features: [
      'Real-time data visualization',
      'Predictive analytics',
      'Automated reporting',
      'Custom dashboards',
      'Data connectors',
      'Mobile app',
      'White-label options',
      'Advanced security'
    ],
    website: 'https://smart-analytics.zion.app',
    status: 'active',
    launchDate: '2024-02-20',
    technology: ['React', 'D3.js', 'Python', 'Apache Kafka', 'Redis'],
    useCases: ['Business intelligence', 'Performance tracking', 'Customer analytics', 'Financial reporting'],
    competitors: ['Tableau', 'Power BI', 'Looker'],
    marketSize: '$8.5B',
    targetAudience: 'Business analysts, executives, data teams',
    integration: ['Salesforce', 'Google Analytics', 'Stripe', 'Shopify'],
    api: true,
    freeTier: true,
    trialDays: 30
  },
  {
    id: 'automated-customer-support',
    name: 'AutoSupport AI',
    description: 'Intelligent customer support automation platform with chatbots, ticket routing, and sentiment analysis to improve customer satisfaction.',
    category: 'Customer Support',
    pricing: {
      starter: '39',
      pro: '99',
      enterprise: '299',
      currency: 'USD',
      period: 'month'
    },
    features: [
      'AI chatbot',
      'Ticket automation',
      'Sentiment analysis',
      'Knowledge base',
      'Multi-channel support',
      'Performance analytics',
      'Custom workflows',
      'Integration APIs'
    ],
    website: 'https://autosupport.zion.app',
    status: 'active',
    launchDate: '2024-03-10',
    technology: ['NLP', 'Machine Learning', 'React', 'Python', 'MongoDB'],
    useCases: ['Customer service', 'Help desk', 'FAQ management', 'Support ticket routing'],
    competitors: ['Zendesk', 'Intercom', 'Freshdesk'],
    marketSize: '$3.2B',
    targetAudience: 'Customer support teams, e-commerce businesses, SaaS companies',
    integration: ['Slack', 'Discord', 'WhatsApp', 'Email'],
    api: true,
    freeTier: true,
    trialDays: 21
  },
  {
    id: 'seo-optimization-tool',
    name: 'SEOMaster Pro',
    description: 'Comprehensive SEO optimization platform with keyword research, competitor analysis, and automated optimization recommendations.',
    category: 'SEO & Marketing',
    pricing: {
      starter: '59',
      pro: '159',
      enterprise: '399',
      currency: 'USD',
      period: 'month'
    },
    features: [
      'Keyword research',
      'Competitor analysis',
      'Site audit tools',
      'Ranking tracking',
      'Content optimization',
      'Backlink analysis',
      'Local SEO tools',
      'Reporting dashboard'
    ],
    website: 'https://seomaster.zion.app',
    status: 'active',
    launchDate: '2024-01-30',
    technology: ['Python', 'React', 'PostgreSQL', 'Redis', 'Elasticsearch'],
    useCases: ['Website optimization', 'Local business SEO', 'E-commerce SEO', 'Content marketing'],
    competitors: ['Ahrefs', 'SEMrush', 'Moz'],
    marketSize: '$1.8B',
    targetAudience: 'SEO specialists, digital marketers, small businesses',
    integration: ['WordPress', 'Shopify', 'Google Analytics', 'Search Console'],
    api: true,
    freeTier: true,
    trialDays: 14
  },
  {
    id: 'project-management-ai',
    name: 'ProjectAI Manager',
    description: 'AI-powered project management platform with intelligent task allocation, progress prediction, and automated resource optimization.',
    category: 'Project Management',
    pricing: {
      starter: '25',
      pro: '75',
      enterprise: '199',
      currency: 'USD',
      period: 'month'
    },
    features: [
      'AI task allocation',
      'Progress prediction',
      'Resource optimization',
      'Team collaboration',
      'Time tracking',
      'Risk assessment',
      'Automated reporting',
      'Mobile app'
    ],
    website: 'https://projectai.zion.app',
    status: 'active',
    launchDate: '2024-02-15',
    technology: ['Machine Learning', 'React', 'Node.js', 'PostgreSQL', 'Redis'],
    useCases: ['Team collaboration', 'Project planning', 'Resource management', 'Agile development'],
    competitors: ['Asana', 'Monday.com', 'ClickUp'],
    marketSize: '$4.1B',
    targetAudience: 'Project managers, development teams, creative agencies',
    integration: ['Slack', 'GitHub', 'Jira', 'Trello'],
    api: true,
    freeTier: true,
    trialDays: 30
  },
  {
    id: 'email-automation-platform',
    name: 'EmailFlow AI',
    description: 'Intelligent email automation platform with AI-powered segmentation, personalization, and performance optimization for better engagement.',
    category: 'Email Marketing',
    pricing: {
      starter: '19',
      pro: '59',
      enterprise: '199',
      currency: 'USD',
      period: 'month'
    },
    features: [
      'AI segmentation',
      'Personalization engine',
      'A/B testing',
      'Behavioral triggers',
      'Analytics dashboard',
      'Template library',
      'Compliance tools',
      'API access'
    ],
    website: 'https://emailflow.zion.app',
    status: 'active',
    launchDate: '2024-01-20',
    technology: ['Machine Learning', 'React', 'Python', 'PostgreSQL', 'Redis'],
    useCases: ['Email marketing', 'Customer engagement', 'Lead nurturing', 'Newsletter campaigns'],
    competitors: ['Mailchimp', 'ConvertKit', 'ActiveCampaign'],
    marketSize: '$1.2B',
    targetAudience: 'Marketers, e-commerce businesses, content creators',
    integration: ['Shopify', 'WooCommerce', 'Salesforce', 'HubSpot'],
    api: true,
    freeTier: true,
    trialDays: 14
  },
  {
    id: 'social-media-scheduler',
    name: 'SocialSync Pro',
    description: 'Advanced social media management platform with AI-powered content scheduling, analytics, and cross-platform automation.',
    category: 'Social Media',
    pricing: {
      starter: '29',
      pro: '79',
      enterprise: '199',
      currency: 'USD',
      period: 'month'
    },
    features: [
      'AI content scheduling',
      'Cross-platform posting',
      'Content calendar',
      'Analytics dashboard',
      'Hashtag optimization',
      'Engagement tracking',
      'Team collaboration',
      'White-label options'
    ],
    website: 'https://socialsync.zion.app',
    status: 'active',
    launchDate: '2024-02-01',
    technology: ['React', 'Node.js', 'MongoDB', 'Redis', 'Social APIs'],
    useCases: ['Social media management', 'Content scheduling', 'Brand monitoring', 'Influencer marketing'],
    competitors: ['Buffer', 'Hootsuite', 'Later'],
    marketSize: '$2.1B',
    targetAudience: 'Social media managers, brands, influencers',
    integration: ['Instagram', 'Twitter', 'LinkedIn', 'Facebook', 'TikTok'],
    api: true,
    freeTier: true,
    trialDays: 21
  },
  {
    id: 'inventory-management-ai',
    name: 'SmartInventory AI',
    description: 'Intelligent inventory management system with demand forecasting, automated reordering, and real-time stock optimization.',
    category: 'E-commerce & Inventory',
    pricing: {
      starter: '45',
      pro: '125',
      enterprise: '349',
      currency: 'USD',
      period: 'month'
    },
    features: [
      'Demand forecasting',
      'Automated reordering',
      'Stock optimization',
      'Real-time tracking',
      'Multi-location support',
      'Supplier management',
      'Analytics dashboard',
      'Mobile app'
    ],
    website: 'https://smartinventory.zion.app',
    status: 'active',
    launchDate: '2024-03-01',
    technology: ['Machine Learning', 'React', 'Python', 'PostgreSQL', 'Redis'],
    useCases: ['Retail inventory', 'E-commerce', 'Warehouse management', 'Supply chain'],
    competitors: ['TradeGecko', 'Zoho Inventory', 'Fishbowl'],
    marketSize: '$3.8B',
    targetAudience: 'Retailers, e-commerce businesses, warehouses',
    integration: ['Shopify', 'WooCommerce', 'QuickBooks', 'SAP'],
    api: true,
    freeTier: true,
    trialDays: 30
  },
  {
    id: 'hr-automation-suite',
    name: 'HRFlow AI',
    description: 'Comprehensive HR automation platform with AI-powered recruitment, employee management, and performance analytics.',
    category: 'Human Resources',
    pricing: {
      starter: '39',
      pro: '99',
      enterprise: '299',
      currency: 'USD',
      period: 'month'
    },
    features: [
      'AI recruitment',
      'Employee onboarding',
      'Performance tracking',
      'Time management',
      'Payroll integration',
      'Compliance tools',
      'Analytics dashboard',
      'Mobile app'
    ],
    website: 'https://hrflow.zion.app',
    status: 'active',
    launchDate: '2024-02-10',
    technology: ['Machine Learning', 'React', 'Node.js', 'PostgreSQL', 'Redis'],
    useCases: ['Recruitment', 'Employee management', 'Performance reviews', 'HR compliance'],
    competitors: ['BambooHR', 'Workday', 'Zenefits'],
    marketSize: '$5.2B',
    targetAudience: 'HR professionals, small businesses, enterprises',
    integration: ['Slack', 'Microsoft 365', 'Google Workspace', 'Payroll systems'],
    api: true,
    freeTier: true,
    trialDays: 21
  },
  {
    id: 'financial-analytics-platform',
    name: 'FinanceAI Pro',
    description: 'AI-powered financial analytics platform with automated bookkeeping, expense tracking, and financial forecasting.',
    category: 'Finance & Accounting',
    pricing: {
      starter: '49',
      pro: '129',
      enterprise: '399',
      currency: 'USD',
      period: 'month'
    },
    features: [
      'Automated bookkeeping',
      'Expense tracking',
      'Financial forecasting',
      'Invoice management',
      'Tax preparation',
      'Compliance monitoring',
      'Real-time reporting',
      'Multi-currency support'
    ],
    website: 'https://financeai.zion.app',
    status: 'active',
    launchDate: '2024-01-25',
    technology: ['Machine Learning', 'React', 'Python', 'PostgreSQL', 'Redis'],
    useCases: ['Small business accounting', 'Financial planning', 'Tax preparation', 'Expense management'],
    competitors: ['QuickBooks', 'Xero', 'FreshBooks'],
    marketSize: '$4.8B',
    targetAudience: 'Small businesses, accountants, financial advisors',
    integration: ['Bank APIs', 'PayPal', 'Stripe', 'Tax software'],
    api: true,
    freeTier: true,
    trialDays: 30
  },
  {
    id: 'design-automation-tool',
    name: 'DesignGenius AI',
    description: 'AI-powered design automation platform that generates professional graphics, logos, and marketing materials instantly.',
    category: 'Design & Creative',
    pricing: {
      starter: '19',
      pro: '59',
      enterprise: '199',
      currency: 'USD',
      period: 'month'
    },
    features: [
      'AI logo generation',
      'Template library',
      'Brand kit management',
      'Collaboration tools',
      'Export options',
      'Design analytics',
      'White-label options',
      'API access'
    ],
    website: 'https://designgenius.zion.app',
    status: 'active',
    launchDate: '2024-02-05',
    technology: ['AI Image Generation', 'React', 'Canvas API', 'Node.js', 'PostgreSQL'],
    useCases: ['Logo design', 'Marketing materials', 'Social media graphics', 'Brand identity'],
    competitors: ['Canva', 'Figma', 'Adobe Creative Cloud'],
    marketSize: '$2.9B',
    targetAudience: 'Designers, marketers, small businesses',
    integration: ['Shopify', 'WordPress', 'Social media platforms'],
    api: true,
    freeTier: true,
    trialDays: 14
  },
  {
    id: 'video-editing-ai',
    name: 'VideoMaster AI',
    description: 'Intelligent video editing platform with AI-powered automation, templates, and professional editing tools for content creators.',
    category: 'Video & Media',
    pricing: {
      starter: '29',
      pro: '79',
      enterprise: '199',
      currency: 'USD',
      period: 'month'
    },
    features: [
      'AI video editing',
      'Template library',
      'Auto-captioning',
      'Music library',
      'Export options',
      'Collaboration tools',
      'Analytics dashboard',
      'Mobile app'
    ],
    website: 'https://videomaster.zion.app',
    status: 'active',
    launchDate: '2024-03-15',
    technology: ['Computer Vision', 'React', 'WebGL', 'Node.js', 'PostgreSQL'],
    useCases: ['Content creation', 'Marketing videos', 'Social media content', 'Educational videos'],
    competitors: ['Adobe Premiere', 'DaVinci Resolve', 'Camtasia'],
    marketSize: '$3.5B',
    targetAudience: 'Content creators, marketers, educators',
    integration: ['YouTube', 'Vimeo', 'Social media platforms'],
    api: true,
    freeTier: true,
    trialDays: 21
  },
  {
    id: 'legal-document-automation',
    name: 'LegalDoc AI',
    description: 'AI-powered legal document automation platform that generates contracts, agreements, and legal forms with compliance checking.',
    category: 'Legal & Compliance',
    pricing: {
      starter: '59',
      pro: '149',
      enterprise: '399',
      currency: 'USD',
      period: 'month'
    },
    features: [
      'Document generation',
      'Compliance checking',
      'Template library',
      'E-signature integration',
      'Legal research tools',
      'Case management',
      'Client portal',
      'Mobile app'
    ],
    website: 'https://legaldoc.zion.app',
    status: 'active',
    launchDate: '2024-02-20',
    technology: ['NLP', 'Machine Learning', 'React', 'Python', 'PostgreSQL'],
    useCases: ['Contract generation', 'Legal compliance', 'Document automation', 'Client management'],
    competitors: ['DocuSign', 'HelloSign', 'PandaDoc'],
    marketSize: '$2.2B',
    targetAudience: 'Lawyers, legal firms, businesses',
    integration: ['DocuSign', 'Adobe Sign', 'CRM systems'],
    api: true,
    freeTier: true,
    trialDays: 30
  }
];

export const serviceCategories = [
  'Content & Marketing',
  'Analytics & Business Intelligence',
  'Customer Support',
  'SEO & Marketing',
  'Project Management',
  'Email Marketing',
  'Social Media',
  'E-commerce & Inventory',
  'Human Resources',
  'Finance & Accounting',
  'Design & Creative',
  'Video & Media',
  'Legal & Compliance'
];

export const getServicesByCategory = (category: string) => {
  return microSaasServices.filter(service => service.category === category);
};

export const getServiceById = (id: string) => {
  return microSaasServices.find(service => service.id === id);
};

export const getPopularServices = () => {
  return microSaasServices.slice(0, 6);
};

export const getNewServices = () => {
  return microSaasServices
    .sort((a, b) => new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime())
    .slice(0, 4);
};