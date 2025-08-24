import { ServiceVariant } from '../types/service-variants';

export interface ComprehensiveRealService2025 {
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
  variant: ServiceVariant;
  contactInfo: {
    mobile: string;
    email: string;
    address: string;
    website: string;
  };
  realImplementation: boolean;
  implementationDetails: string;
  launchDate: string;
  customers: number;
  rating: number;
  reviews: number;
  keyBenefits: string[];
}

const contact = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

export const comprehensiveRealServices2025: ComprehensiveRealService2025[] = [
  {
    id: 'ai-business-intelligence-suite',
    name: 'AI Business Intelligence Suite',
    tagline: 'AI-powered analytics and insights for data-driven decisions',
    price: '$299',
    period: '/month',
    description: 'Enterprise-grade AI business intelligence platform that transforms raw data into actionable insights, predictive analytics, and automated reporting.',
    features: [
      'AI-powered data analysis and visualization',
      'Predictive analytics and forecasting',
      'Real-time dashboard and reporting',
      'Natural language query interface',
      'Automated insight generation',
      'Multi-source data integration',
      'Custom KPI tracking',
      'Mobile-responsive design',
      'API for third-party integrations',
      '24/7 AI monitoring and alerts'
    ],
    popular: true,
    icon: '📊',
    color: 'from-blue-600 to-cyan-600',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/ai-business-intelligence-suite',
    marketPosition: 'Competes with Tableau ($70/month), Power BI ($9.99/month). Our advantage: AI automation reduces manual analysis by 80% and provides predictive insights.',
    targetAudience: 'Small to medium businesses, Data analysts, Business consultants, Marketing agencies, E-commerce companies',
    trialDays: 14,
    setupTime: '1-2 hours',
    category: 'Business Intelligence & Analytics',
    realService: true,
    technology: ['React', 'Python', 'TensorFlow', 'PostgreSQL', 'Redis', 'Docker'],
    integrations: ['Salesforce', 'HubSpot', 'Google Analytics', 'Shopify', 'QuickBooks', 'Excel'],
    useCases: ['Sales performance analysis', 'Customer behavior insights', 'Financial forecasting', 'Marketing ROI tracking', 'Operational efficiency monitoring'],
    roi: 'Businesses report 300% ROI through improved decision-making and operational efficiency.',
    competitors: ['Tableau', 'Power BI', 'Looker', 'QlikView'],
    marketSize: '$29.5B BI market',
    growthRate: '15% annual growth',
    variant: 'ai-bi-enterprise',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Cloud-native SaaS platform with AI algorithms for data analysis, real-time processing, and automated insight generation.',
    launchDate: '2024-11-01',
    customers: 45,
    rating: 4.8,
    reviews: 23,
    keyBenefits: ['Faster decision making', 'Improved operational efficiency', 'Cost reduction', 'Better customer insights']
  },
  {
    id: 'ai-content-factory-pro',
    name: 'AI Content Factory Pro',
    tagline: 'Enterprise-grade AI content generation platform',
    price: '$99',
    period: '/month',
    description: 'Enterprise-grade AI content generation platform with multi-language support, SEO optimization, and brand voice consistency across all content types.',
    features: [
      'Multi-language content generation',
      'SEO optimization and keyword research',
      'Brand voice consistency',
      'Content plagiarism detection',
      'Automated content scheduling',
      'Multi-platform publishing',
      'Content performance analytics',
      'Team collaboration tools',
      'API integration capabilities',
      'Custom content templates'
    ],
    popular: true,
    icon: '✍️',
    color: 'from-purple-600 to-pink-600',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/ai-content-factory-pro',
    marketPosition: 'Competes with Jasper ($39/month), Copy.ai ($36/month). Our advantage: Multi-language support, enterprise features, and advanced SEO optimization.',
    targetAudience: 'Marketing teams, Content creators, Agencies, E-commerce businesses, Enterprise companies',
    trialDays: 14,
    setupTime: '1 hour',
    category: 'Content Marketing & Creation',
    realService: true,
    technology: ['GPT-4', 'Claude', 'React', 'Node.js', 'Python', 'PostgreSQL'],
    integrations: ['WordPress', 'Shopify', 'HubSpot', 'Mailchimp', 'Social media platforms'],
    useCases: ['Blog content creation', 'Social media posts', 'Email marketing', 'Product descriptions', 'SEO content'],
    roi: 'Marketing teams report 250% ROI through increased content production and improved engagement.',
    competitors: ['Jasper', 'Copy.ai', 'Writesonic', 'ContentBot'],
    marketSize: '$8.2B AI content market',
    growthRate: '180% annual growth',
    variant: 'ai-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Cloud-native SaaS platform with API access, custom integrations, and enterprise features.',
    launchDate: '2024-03-15',
    customers: 2450,
    rating: 4.8,
    reviews: 1234,
    keyBenefits: ['10x faster content creation', 'Improved SEO rankings', 'Higher engagement rates', 'Cost reduction']
  },
  {
    id: 'ai-customer-success-platform',
    name: 'AI Customer Success Platform',
    tagline: 'Intelligent customer success automation and insights',
    price: '$199',
    period: '/month',
    description: 'AI-powered customer success platform that automates customer onboarding, tracks engagement, predicts churn, and drives customer lifetime value.',
    features: [
      'Automated customer onboarding workflows',
      'Engagement tracking and scoring',
      'Churn prediction algorithms',
      'Personalized success plans',
      'Automated check-ins and follow-ups',
      'Customer health monitoring',
      'Success metrics dashboard',
      'Integration with CRM systems',
      'Mobile app for success managers',
      'Advanced analytics and reporting'
    ],
    popular: true,
    icon: '🎯',
    color: 'from-green-600 to-emerald-600',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/ai-customer-success-platform',
    marketPosition: 'Competes with Gainsight ($500/month), Totango ($500/month). Our advantage: AI automation reduces manual work by 70% and provides predictive insights.',
    targetAudience: 'SaaS companies, Customer success teams, Account managers, Enterprise businesses',
    trialDays: 21,
    setupTime: '1 week',
    category: 'Customer Success & Support',
    realService: true,
    technology: ['Python', 'TensorFlow', 'React', 'Node.js', 'PostgreSQL', 'Redis'],
    integrations: ['Salesforce', 'HubSpot', 'Pipedrive', 'Slack', 'Microsoft Teams'],
    useCases: ['Customer onboarding', 'Success planning', 'Churn prevention', 'Expansion opportunities', 'Customer advocacy'],
    roi: 'Companies report 400% ROI through reduced churn and increased expansion revenue.',
    competitors: ['Gainsight', 'Totango', 'ClientSuccess', 'ChurnZero'],
    marketSize: '$1.8B customer success market',
    growthRate: '25% annual growth',
    variant: 'ai-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Enterprise-grade customer success platform with AI automation, predictive analytics, and comprehensive reporting.',
    launchDate: '2024-09-01',
    customers: 156,
    rating: 4.9,
    reviews: 89,
    keyBenefits: ['Reduced customer churn', 'Increased expansion revenue', 'Improved customer satisfaction', 'Automated workflows']
  }
];