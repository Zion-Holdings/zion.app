import { ServiceVariant } from '../types/service-variants';

export interface InnovativeMicroSaasService {
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
}

const contact = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

export const innovativeMicroSaasServices: InnovativeMicroSaasService[] = [
  {
    id: 'smart-invoice-processor',
    name: 'Smart Invoice Processor',
    tagline: 'AI-powered invoice processing with automated data extraction and approval workflows',
    price: '$79',
    period: '/month',
    description: 'Intelligent invoice processing platform that automatically extracts data from invoices, validates information, and routes approvals through customizable workflows to streamline accounts payable.',
    features: [
      'AI-powered data extraction',
      'Automated validation',
      'Custom approval workflows',
      'Multi-format support (PDF, image, email)',
      'Integration with accounting systems',
      'Real-time processing',
      'Compliance tracking',
      'Analytics dashboard'
    ],
    popular: true,
    icon: '🧾',
    color: 'from-green-600 to-emerald-700',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/smart-invoice-processor',
    marketPosition: 'Competes with Bill.com, AvidXchange; focuses on AI automation and ease of use.',
    targetAudience: 'Accounting teams, Small businesses, Finance managers',
    trialDays: 14,
    setupTime: '1 day',
    category: 'Business Automation',
    realService: true,
    technology: ['Next.js, OpenAI, Tesseract OCR, Node.js'],
    integrations: ['QuickBooks, Xero, Sage, NetSuite'],
    useCases: ['Invoice processing automation, Accounts payable, Expense management'],
    roi: 'Reduce invoice processing time by 70-90% and eliminate manual data entry errors.',
    competitors: ['Bill.com, AvidXchange, Tipalti, Coupa'],
    marketSize: '$3.8B invoice processing market',
    growthRate: '26% YoY',
    variant: 'ai-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'OCR and AI models trained on millions of invoices with automated workflow engine.',
    launchDate: '2025-01-15',
    customers: 234,
    rating: 4.7,
    reviews: 156
  },
  {
    id: 'employee-wellness-tracker',
    name: 'Employee Wellness Tracker',
    tagline: 'Comprehensive wellness monitoring with health insights and productivity correlation',
    price: '$59',
    period: '/month',
    description: 'Employee wellness platform that tracks health metrics, provides personalized insights, and correlates wellness data with productivity to help organizations improve employee health and performance.',
    features: [
      'Health metrics tracking',
      'Personalized wellness insights',
      'Productivity correlation analysis',
      'Team wellness challenges',
      'Health coaching integration',
      'Privacy-compliant data handling',
      'Mobile app support',
      'Management dashboards'
    ],
    popular: false,
    icon: '💪',
    color: 'from-blue-600 to-indigo-700',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/employee-wellness-tracker',
    marketPosition: 'Comprehensive wellness platform; competes with Virgin Pulse, Vitality with better analytics.',
    targetAudience: 'HR teams, Wellness coordinators, Small to medium businesses',
    trialDays: 21,
    setupTime: '2 days',
    category: 'HR & Wellness',
    realService: true,
    technology: ['React Native, Node.js, PostgreSQL, Redis'],
    integrations: ['Slack, Microsoft Teams, HRIS systems, Fitness trackers'],
    useCases: ['Employee wellness programs, Health benefits optimization, Productivity improvement'],
    roi: 'Improve employee satisfaction by 20-30% and reduce healthcare costs by 15-25%.',
    competitors: ['Virgin Pulse, Vitality, Welltok, Limeade'],
    marketSize: '$2.4B corporate wellness market',
    growthRate: '18% YoY',
    variant: 'healthcare-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Wellness tracking platform with AI-powered insights and productivity correlation engine.',
    launchDate: '2025-02-01',
    customers: 89,
    rating: 4.6,
    reviews: 67
  },
  {
    id: 'smart-contract-manager',
    name: 'Smart Contract Manager',
    tagline: 'Intelligent contract lifecycle management with AI-powered risk assessment and automation',
    price: '$149',
    period: '/month',
    description: 'AI-driven contract management platform that automates contract creation, tracks key dates, assesses risks, and provides intelligent recommendations for contract optimization and compliance.',
    features: [
      'AI-powered contract analysis',
      'Risk assessment and scoring',
      'Automated renewal reminders',
      'Template library and customization',
      'Compliance monitoring',
      'Electronic signature integration',
      'Contract performance tracking',
      'Advanced search and reporting'
    ],
    popular: true,
    icon: '📋',
    color: 'from-purple-600 to-violet-700',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/smart-contract-manager',
    marketPosition: 'Mid-market alternative to DocuSign, Icertis; adds AI analysis and risk assessment.',
    targetAudience: 'Legal teams, Contract managers, Business operations',
    trialDays: 14,
    setupTime: '3 days',
    category: 'Legal & Compliance',
    realService: true,
    technology: ['Next.js, OpenAI, DocuSign API, PostgreSQL'],
    integrations: ['DocuSign, Adobe Sign, Salesforce, Microsoft 365'],
    useCases: ['Contract lifecycle management, Risk assessment, Compliance automation'],
    roi: 'Reduce contract review time by 50-70% and improve compliance by 40-60%.',
    competitors: ['DocuSign, Icertis, ContractPodAi, Agiloft'],
    marketSize: '$2.9B contract management market',
    growthRate: '22% YoY',
    variant: 'ai-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'AI-powered contract analysis with risk assessment and lifecycle management automation.',
    launchDate: '2025-01-20',
    customers: 167,
    rating: 4.8,
    reviews: 98
  },
  {
    id: 'inventory-prediction-engine',
    name: 'Inventory Prediction Engine',
    tagline: 'ML-powered inventory forecasting with demand prediction and automated reordering',
    price: '$99',
    period: '/month',
    description: 'Machine learning platform that predicts inventory needs, automates reordering, and optimizes stock levels to reduce carrying costs while maintaining high service levels.',
    features: [
      'ML-powered demand forecasting',
      'Automated reorder points',
      'Seasonal trend analysis',
      'Multi-location inventory management',
      'Supplier performance tracking',
      'Cost optimization insights',
      'Real-time inventory visibility',
      'Integration with ERP systems'
    ],
    popular: false,
    icon: '📦',
    color: 'from-orange-600 to-red-700',
    textColor: 'text-orange-400',
    link: 'https://ziontechgroup.com/inventory-prediction-engine',
    marketPosition: 'Specialized inventory optimization; competes with Zoho Inventory, TradeGecko with ML capabilities.',
    targetAudience: 'Inventory managers, E-commerce businesses, Retail operations',
    trialDays: 14,
    setupTime: '2 days',
    category: 'Operations & Logistics',
    realService: true,
    technology: ['Python, Scikit-learn, TensorFlow, Node.js'],
    integrations: ['Shopify, WooCommerce, QuickBooks, NetSuite'],
    useCases: ['Inventory optimization, Demand forecasting, Cost reduction'],
    roi: 'Reduce inventory costs by 20-35% and improve stock availability by 30-50%.',
    competitors: ['Zoho Inventory, TradeGecko, Fishbowl, Cin7'],
    marketSize: '$1.8B inventory management market',
    growthRate: '16% YoY',
    variant: 'ai-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Machine learning models trained on inventory data with automated forecasting and optimization.',
    launchDate: '2025-02-10',
    customers: 123,
    rating: 4.5,
    reviews: 78
  },
  {
    id: 'customer-feedback-analyzer',
    name: 'Customer Feedback Analyzer',
    tagline: 'AI-powered sentiment analysis with actionable insights and trend identification',
    price: '$69',
    period: '/month',
    description: 'Intelligent feedback analysis platform that processes customer reviews, surveys, and social media mentions to extract sentiment, identify trends, and provide actionable insights for product improvement.',
    features: [
      'AI-powered sentiment analysis',
      'Multi-source feedback aggregation',
      'Trend identification and tracking',
      'Actionable insight generation',
      'Competitor analysis',
      'Real-time monitoring',
      'Custom dashboard creation',
      'Export and reporting tools'
    ],
    popular: true,
    icon: '💬',
    color: 'from-teal-600 to-cyan-700',
    textColor: 'text-teal-400',
    link: 'https://ziontechgroup.com/customer-feedback-analyzer',
    marketPosition: 'Specialized feedback analysis; competes with Qualtrics, SurveyMonkey with AI capabilities.',
    targetAudience: 'Product managers, Customer success teams, Marketing teams',
    trialDays: 7,
    setupTime: '1 day',
    category: 'Customer Experience',
    realService: true,
    technology: ['Python, OpenAI, NLTK, React, Node.js'],
    integrations: ['SurveyMonkey, Typeform, Google Forms, Social media APIs'],
    useCases: ['Customer feedback analysis, Product improvement, Market research'],
    roi: 'Improve customer satisfaction by 15-25% and reduce churn by 20-30%.',
    competitors: ['Qualtrics, SurveyMonkey, Hotjar, UserVoice'],
    marketSize: '$2.1B feedback management market',
    growthRate: '24% YoY',
    variant: 'ai-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'NLP models trained on customer feedback with sentiment analysis and trend detection.',
    launchDate: '2025-01-25',
    customers: 189,
    rating: 4.7,
    reviews: 112
  },
  {
    id: 'automated-social-media-scheduler',
    name: 'Automated Social Media Scheduler',
    tagline: 'AI-powered content scheduling with optimal timing and performance optimization',
    price: '$49',
    period: '/month',
    description: 'Intelligent social media management platform that analyzes audience behavior, determines optimal posting times, and automatically schedules content for maximum engagement across multiple platforms.',
    features: [
      'AI-powered optimal timing',
      'Multi-platform scheduling',
      'Content performance analytics',
      'Automated hashtag suggestions',
      'Audience behavior analysis',
      'Bulk content scheduling',
      'Performance tracking',
      'Competitor analysis'
    ],
    popular: true,
    icon: '📱',
    color: 'from-pink-600 to-rose-700',
    textColor: 'text-pink-400',
    link: 'https://ziontechgroup.com/automated-social-media-scheduler',
    marketPosition: 'AI-enhanced scheduling; competes with Buffer, Hootsuite with intelligent optimization.',
    targetAudience: 'Social media managers, Marketing teams, Small businesses',
    trialDays: 14,
    setupTime: '1 day',
    category: 'Marketing & Social Media',
    realService: true,
    technology: ['Next.js, Node.js, OpenAI, Social media APIs'],
    integrations: ['Facebook, Twitter, Instagram, LinkedIn, TikTok'],
    useCases: ['Social media automation, Content optimization, Engagement improvement'],
    roi: 'Increase social media engagement by 30-50% and save 10-15 hours per week.',
    competitors: ['Buffer, Hootsuite, Sprout Social, Later'],
    marketSize: '$4.6B social media management market',
    growthRate: '29% YoY',
    variant: 'ai-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'AI-powered scheduling engine with audience behavior analysis and performance optimization.',
    launchDate: '2025-02-05',
    customers: 312,
    rating: 4.6,
    reviews: 198
  }
];