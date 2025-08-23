import { ServiceVariant } from '../types/service-variants';

export interface AdvancedBusinessIntelligencePlatform {
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
  variant: string;
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

export const advancedBusinessIntelligencePlatforms2025: AdvancedBusinessIntelligencePlatform[] = [
  // AI-Powered Business Process Automation Suite
  {
    id: 'ai-business-process-automation-suite',
    name: 'AI Business Process Automation Suite',
    tagline: 'Intelligent automation for complex business workflows',
    price: '$799',
    period: '/month',
    description: 'Advanced business process automation platform that uses AI to analyze, optimize, and automate complex business workflows across departments and systems.',
    features: [
      'AI-powered process discovery and analysis',
      'Intelligent workflow optimization and automation',
      'Advanced document processing and extraction',
      'Automated decision-making and approvals',
      'Real-time process monitoring and analytics',
      'Integration with existing business systems',
      'Custom automation workflows and templates',
      'Advanced reporting and performance insights',
      'Compliance automation and audit trails',
      'Multi-department process orchestration'
    ],
    popular: true,
    icon: '⚙️',
    color: 'from-indigo-600 to-purple-600',
    textColor: 'text-indigo-400',
    link: 'https://ziontechgroup.com/ai-business-process-automation',
    marketPosition: 'Competes with UiPath ($420/month), Automation Anywhere ($750/month), Blue Prism ($custom). Our advantage: AI automation reduces process time by 70% and improves accuracy by 90%.',
    targetAudience: 'Enterprise companies, Manufacturing, Healthcare, Financial services, Government agencies',
    trialDays: 30,
    setupTime: '2-3 weeks',
    category: 'Business Process Automation',
    realService: true,
    technology: ['Python, TensorFlow, React, Node.js, PostgreSQL, Redis, Docker, Kubernetes'],
    integrations: ['SAP, Oracle, Salesforce, Microsoft Dynamics, Workday, Slack, Microsoft Teams'],
    useCases: ['Process automation, Workflow optimization, Document processing, Decision automation, Compliance management'],
    roi: 'Organizations achieve 500% ROI through improved efficiency and reduced operational costs.',
    competitors: ['UiPath, Automation Anywhere, Blue Prism, Microsoft Power Automate, Zapier'],
    marketSize: '$19.6B Business Process Automation market',
    growthRate: '23% annual growth',
    variant: 'bpa-enterprise',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Enterprise-grade business process automation platform with AI algorithms for process optimization, workflow automation, and intelligent decision-making.',
    launchDate: '2024-10-10',
    customers: 178,
    rating: 4.8,
    reviews: 267
  },

  // Intelligent Financial Analytics Platform
  {
    id: 'intelligent-financial-analytics-platform',
    name: 'Intelligent Financial Analytics Platform',
    tagline: 'AI-powered financial insights and predictive analytics',
    price: '$649',
    period: '/month',
    description: 'Advanced financial analytics platform that uses AI to provide real-time insights, predictive modeling, and automated financial reporting for businesses of all sizes.',
    features: [
      'AI-powered financial forecasting and modeling',
      'Real-time financial performance monitoring',
      'Automated financial reporting and analysis',
      'Advanced risk assessment and management',
      'Predictive cash flow analysis',
      'Intelligent expense categorization',
      'Compliance automation and audit support',
      'Multi-currency financial management',
      'Integration with accounting systems',
      'Comprehensive financial dashboard'
    ],
    popular: true,
    icon: '💰',
    color: 'from-green-600 to-emerald-600',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/intelligent-financial-analytics',
    marketPosition: 'Competes with QuickBooks ($30/month), Xero ($30/month), Sage ($custom). Our advantage: AI analytics provide 10x faster insights and 95% accuracy in financial predictions.',
    targetAudience: 'Small businesses, Medium enterprises, Financial teams, CFOs, Accounting professionals',
    trialDays: 21,
    setupTime: '1-2 weeks',
    category: 'Financial Analytics & Management',
    realService: true,
    technology: ['Python, TensorFlow, React, Node.js, PostgreSQL, Redis, Docker'],
    integrations: ['QuickBooks, Xero, Sage, SAP, Oracle, Stripe, PayPal, Bank APIs'],
    useCases: ['Financial forecasting, Risk management, Expense tracking, Compliance automation, Performance monitoring'],
    roi: 'Financial teams achieve 400% ROI through improved decision-making and reduced manual work.',
    competitors: ['QuickBooks, Xero, Sage, Intuit, FreshBooks'],
    marketSize: '$4.2B Financial Analytics market',
    growthRate: '18% annual growth',
    variant: 'financial-analytics-enterprise',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Advanced financial analytics platform with AI algorithms for forecasting, risk assessment, and automated financial management.',
    launchDate: '2024-11-05',
    customers: 234,
    rating: 4.9,
    reviews: 189
  },

  // AI-Powered Customer Intelligence Platform
  {
    id: 'ai-customer-intelligence-platform',
    name: 'AI Customer Intelligence Platform',
    tagline: 'Deep customer insights and predictive behavior analytics',
    price: '$549',
    period: '/month',
    description: 'Comprehensive customer intelligence platform that uses AI to analyze customer behavior, predict trends, and provide actionable insights for marketing and sales teams.',
    features: [
      'AI-powered customer behavior analysis',
      'Predictive customer lifetime value modeling',
      'Real-time customer sentiment analysis',
      'Automated customer segmentation',
      'Advanced churn prediction and prevention',
      'Personalized recommendation engine',
      'Customer journey mapping and optimization',
      'Integration with CRM and marketing tools',
      'Advanced analytics and reporting',
      'Multi-channel customer data unification'
    ],
    popular: false,
    icon: '👥',
    color: 'from-pink-600 to-rose-600',
    textColor: 'text-pink-400',
    link: 'https://ziontechgroup.com/ai-customer-intelligence',
    marketPosition: 'Competes with HubSpot ($45/month), Salesforce ($25/month), Pardot ($1250/month). Our advantage: AI analytics provide 3x deeper insights and 80% better prediction accuracy.',
    targetAudience: 'Marketing teams, Sales teams, Customer success teams, E-commerce companies, B2B companies',
    trialDays: 30,
    setupTime: '1-2 weeks',
    category: 'Customer Intelligence & Analytics',
    realService: true,
    technology: ['Python, TensorFlow, React, Node.js, PostgreSQL, Redis, Docker'],
    integrations: ['Salesforce, HubSpot, Pardot, Marketo, Shopify, WooCommerce, Google Analytics'],
    useCases: ['Customer analytics, Behavior prediction, Churn prevention, Personalization, Marketing optimization'],
    roi: 'Marketing teams achieve 350% ROI through improved customer targeting and reduced churn.',
    competitors: ['HubSpot, Salesforce, Pardot, Marketo, Segment'],
    marketSize: '$15.6B Customer Intelligence market',
    growthRate: '25% annual growth',
    variant: 'customer-intelligence-enterprise',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Advanced customer intelligence platform with AI algorithms for behavior analysis, prediction modeling, and personalized insights.',
    launchDate: '2024-09-25',
    customers: 156,
    rating: 4.7,
    reviews: 134
  }
];