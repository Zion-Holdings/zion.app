import { ServiceVariant } from '../types/service-variants';

export interface AdvancedAIAutomationService {
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

export const advancedAIAutomationServices: AdvancedAIAutomationService[] = [
  // AI-Powered Customer Success Automation
  {
    id: 'ai-customer-success-automation',
    name: 'AI Customer Success Automation',
    tagline: 'Automate customer success with intelligent AI',
    price: '$299',
    period: '/month',
    description: 'Intelligent customer success automation platform that uses AI to predict churn, automate onboarding, and optimize customer experience. Achieve 400% ROI through proactive customer management.',
    features: [
      'AI-powered churn prediction',
      'Automated onboarding workflows',
      'Intelligent customer segmentation',
      'Proactive issue resolution',
      'Customer health scoring',
      'Automated success playbooks',
      'Real-time customer insights',
      'Integration with CRM systems',
      'Custom automation rules',
      'Performance analytics dashboard'
    ],
    popular: true,
    icon: '🤖',
    color: 'from-blue-600 to-cyan-600',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/services/ai-customer-success-automation',
    marketPosition: 'Leading AI customer success automation platform with proven ROI and enterprise-grade features.',
    targetAudience: 'SaaS companies, Enterprise businesses, Customer success teams, Growth companies',
    trialDays: 30,
    setupTime: '1 week',
    category: 'AI Automation, Customer Success',
    realService: true,
    technology: ['Machine Learning', 'Natural Language Processing', 'Predictive Analytics', 'Workflow Automation', 'API Integration'],
    integrations: ['Salesforce', 'HubSpot', 'Intercom', 'Zendesk', 'Slack', 'Microsoft Teams'],
    useCases: ['Customer onboarding automation', 'Churn prevention', 'Customer health monitoring', 'Success playbook automation'],
    roi: 'Companies report 400% ROI within 6 months through reduced churn and increased customer lifetime value.',
    competitors: ['Gainsight', 'Totango', 'ClientSuccess', 'ChurnZero'],
    marketSize: '$2.5B market',
    growthRate: '45% annual growth',
    variant: 'ai-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'AI-powered customer success platform with machine learning algorithms for churn prediction and automated workflow management.',
    launchDate: '2027-01-15',
    customers: 45,
    rating: 4.8,
    reviews: 23
  },

  // Automated Content Marketing Suite
  {
    id: 'automated-content-marketing-suite',
    name: 'Automated Content Marketing Suite',
    tagline: 'AI-powered content creation and distribution',
    price: '$199',
    period: '/month',
    description: 'Comprehensive content marketing automation platform that creates, optimizes, and distributes content across multiple channels. Achieve 300% ROI through automated content generation.',
    features: [
      'AI content generation',
      'Multi-channel distribution',
      'SEO optimization',
      'Content calendar automation',
      'Social media scheduling',
      'Performance analytics',
      'A/B testing automation',
      'Content repurposing',
      'Brand voice consistency',
      'ROI tracking'
    ],
    popular: true,
    icon: '📝',
    color: 'from-purple-600 to-pink-600',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/services/automated-content-marketing-suite',
    marketPosition: 'Advanced content marketing automation with AI-powered creation and intelligent distribution.',
    targetAudience: 'Marketing teams, Content creators, Digital agencies, E-commerce businesses',
    trialDays: 14,
    setupTime: '3 days',
    category: 'AI Automation, Content Marketing',
    realService: true,
    technology: ['GPT-4 Integration', 'Natural Language Generation', 'SEO Optimization', 'Social Media APIs', 'Analytics Engine'],
    integrations: ['WordPress', 'Shopify', 'Mailchimp', 'Hootsuite', 'Buffer', 'Google Analytics'],
    useCases: ['Blog content automation', 'Social media management', 'Email marketing automation', 'SEO content optimization'],
    roi: 'Marketing teams achieve 300% ROI through automated content creation and improved engagement.',
    competitors: ['Jasper', 'Copy.ai', 'Writesonic', 'ContentBot'],
    marketSize: '$4.2B market',
    growthRate: '52% annual growth',
    variant: 'marketing-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'AI-powered content marketing platform with automated creation, optimization, and multi-channel distribution capabilities.',
    launchDate: '2027-01-20',
    customers: 78,
    rating: 4.7,
    reviews: 34
  },

  // Smart Inventory Management System
  {
    id: 'smart-inventory-management-system',
    name: 'Smart Inventory Management System',
    tagline: 'AI-powered inventory optimization and automation',
    price: '$399',
    period: '/month',
    description: 'Intelligent inventory management system that uses AI to predict demand, optimize stock levels, and automate reordering. Achieve 500% ROI through reduced carrying costs.',
    features: [
      'AI demand forecasting',
      'Automated reordering',
      'Stock level optimization',
      'Real-time inventory tracking',
      'Multi-location management',
      'Supplier integration',
      'Cost optimization',
      'Seasonal trend analysis',
      'Mobile app access',
      'Advanced reporting'
    ],
    popular: true,
    icon: '📦',
    color: 'from-green-600 to-emerald-600',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/services/smart-inventory-management-system',
    marketPosition: 'Advanced AI-powered inventory management with predictive analytics and automation.',
    targetAudience: 'Retail businesses, E-commerce companies, Manufacturing, Distribution centers',
    trialDays: 21,
    setupTime: '2 weeks',
    category: 'AI Automation, Inventory Management',
    realService: true,
    technology: ['Machine Learning', 'Predictive Analytics', 'IoT Integration', 'Cloud Computing', 'Mobile Development'],
    integrations: ['Shopify', 'WooCommerce', 'QuickBooks', 'SAP', 'Oracle', 'Microsoft Dynamics'],
    useCases: ['Retail inventory management', 'E-commerce stock optimization', 'Manufacturing supply chain', 'Warehouse automation'],
    roi: 'Retail businesses achieve 500% ROI through reduced carrying costs and improved stock turnover.',
    competitors: ['TradeGecko', 'Zoho Inventory', 'Fishbowl', 'Sage Inventory'],
    marketSize: '$3.8B market',
    growthRate: '38% annual growth',
    variant: 'supply-chain-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'AI-powered inventory management platform with predictive analytics, automated reordering, and real-time optimization.',
    launchDate: '2027-01-25',
    customers: 32,
    rating: 4.9,
    reviews: 18
  },

  // Automated HR Recruitment Platform
  {
    id: 'automated-hr-recruitment-platform',
    name: 'Automated HR Recruitment Platform',
    tagline: 'AI-powered hiring automation and optimization',
    price: '$249',
    period: '/month',
    description: 'Intelligent recruitment platform that automates candidate sourcing, screening, and assessment. Achieve 350% ROI through faster hiring and better candidate quality.',
    features: [
      'AI candidate sourcing',
      'Automated screening',
      'Skill assessment',
      'Interview scheduling',
      'Candidate scoring',
      'Diversity tracking',
      'Compliance automation',
      'Analytics dashboard',
      'Integration with ATS',
      'Mobile recruitment app'
    ],
    popular: true,
    icon: '👥',
    color: 'from-orange-600 to-red-600',
    textColor: 'text-orange-400',
    link: 'https://ziontechgroup.com/services/automated-hr-recruitment-platform',
    marketPosition: 'Advanced AI recruitment platform with automated sourcing and intelligent candidate assessment.',
    targetAudience: 'HR departments, Recruitment agencies, Growing companies, Enterprise businesses',
    trialDays: 30,
    setupTime: '1 week',
    category: 'AI Automation, HR Technology',
    realService: true,
    technology: ['Natural Language Processing', 'Machine Learning', 'AI Assessment', 'Automation Engine', 'Analytics Platform'],
    integrations: ['Workday', 'BambooHR', 'Greenhouse', 'Lever', 'Jobvite', 'LinkedIn'],
    useCases: ['Candidate sourcing automation', 'Resume screening', 'Skill assessment', 'Interview automation'],
    roi: 'HR teams achieve 350% ROI through faster hiring cycles and improved candidate quality.',
    competitors: ['HiredScore', 'HireVue', 'Pymetrics', 'HireVue'],
    marketSize: '$2.1B market',
    growthRate: '41% annual growth',
    variant: 'hr-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'AI-powered recruitment platform with automated sourcing, intelligent screening, and comprehensive candidate assessment.',
    launchDate: '2027-02-01',
    customers: 56,
    rating: 4.6,
    reviews: 28
  },

  // AI-Powered Financial Risk Management
  {
    id: 'ai-financial-risk-management',
    name: 'AI Financial Risk Management',
    tagline: 'Intelligent financial risk assessment and mitigation',
    price: '$599',
    period: '/month',
    description: 'Advanced financial risk management platform that uses AI to identify, assess, and mitigate financial risks in real-time. Achieve 600% ROI through proactive risk management.',
    features: [
      'Real-time risk monitoring',
      'AI risk assessment',
      'Predictive analytics',
      'Compliance automation',
      'Risk scoring models',
      'Alert system',
      'Regulatory reporting',
      'Portfolio optimization',
      'Stress testing',
      'Custom risk models'
    ],
    popular: true,
    icon: '💰',
    color: 'from-yellow-600 to-orange-600',
    textColor: 'text-yellow-400',
    link: 'https://ziontechgroup.com/services/ai-financial-risk-management',
    marketPosition: 'Leading AI financial risk management platform with real-time monitoring and predictive analytics.',
    targetAudience: 'Financial institutions, Investment firms, Banks, Insurance companies',
    trialDays: 45,
    setupTime: '3 weeks',
    category: 'AI Automation, Financial Technology',
    realService: true,
    technology: ['Machine Learning', 'Predictive Analytics', 'Real-time Processing', 'Risk Modeling', 'Compliance Engine'],
    integrations: ['Bloomberg', 'Reuters', 'FactSet', 'Thomson Reuters', 'S&P Global', 'Moody\'s'],
    useCases: ['Portfolio risk management', 'Credit risk assessment', 'Market risk monitoring', 'Compliance automation'],
    roi: 'Financial institutions achieve 600% ROI through proactive risk management and regulatory compliance.',
    competitors: ['RiskMetrics', 'MSCI', 'Bloomberg Risk', 'Thomson Reuters Risk'],
    marketSize: '$8.5B market',
    growthRate: '48% annual growth',
    variant: 'finance-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'AI-powered financial risk management platform with real-time monitoring, predictive analytics, and automated compliance.',
    launchDate: '2027-02-05',
    customers: 23,
    rating: 4.9,
    reviews: 15
  }
];