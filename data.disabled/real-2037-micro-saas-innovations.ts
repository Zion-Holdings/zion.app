import { ServiceVariant } from '../types/service-variants';

export interface RealMicroSAASInnovationService {
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

export const realMicroSAASInnovationServices: RealMicroSAASInnovationService[] = [
  {
    id: 'no-code-ai-workflow-builder',
    name: 'No-Code AI Workflow Builder',
    tagline: 'Build AI-powered workflows without coding knowledge',
    price: '$199',
    period: '/month',
    description: 'Visual AI workflow builder that allows non-technical users to create sophisticated AI-powered automation workflows using drag-and-drop interface and pre-built AI components.',
    features: [
      'Drag-and-drop AI workflow builder',
      'Pre-built AI components and templates',
      'Visual workflow designer',
      'AI model integration (OpenAI, Hugging Face)',
      'Workflow testing and debugging',
      'API generation for external access',
      'Workflow versioning and collaboration',
      'Real-time workflow monitoring'
    ],
    popular: true,
    icon: '🎨🤖',
    color: 'from-purple-600 to-pink-700',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/no-code-ai-workflows',
    marketPosition: 'Innovative no-code AI platform; democratizes AI workflow creation for non-technical users.',
    targetAudience: 'Business analysts, marketers, operations teams, small business owners',
    trialDays: 14,
    setupTime: '1 day',
    category: 'No-Code AI & Automation',
    realService: true,
    technology: ['React, Node.js, AI APIs, Workflow engine, Visual programming'],
    integrations: ['OpenAI, Hugging Face, Zapier, Airtable, Notion'],
    useCases: ['Customer service automation, Content generation workflows, Data processing automation'],
    roi: 'Reduce development time by 80% and enable AI adoption without technical expertise.',
    competitors: ['Zapier AI, Make.com, n8n, Bubble AI features'],
    marketSize: '$12B no-code AI market',
    growthRate: '220% YoY',
    variant: 'ai-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Visual workflow builder with AI component library and integration capabilities.',
    launchDate: '2025-01-20',
    customers: 156,
    rating: 4.8,
    reviews: 89
  },
  {
    id: 'ai-powered-customer-feedback-analyzer',
    name: 'AI-Powered Customer Feedback Analyzer',
    tagline: 'Transform customer feedback into actionable insights automatically',
    price: '$89',
    period: '/month',
    description: 'Intelligent feedback analysis platform that automatically categorizes, analyzes, and extracts insights from customer feedback across multiple channels using advanced NLP and sentiment analysis.',
    features: [
      'Multi-channel feedback collection',
      'Automatic sentiment analysis',
      'Feedback categorization and tagging',
      'Trend identification and reporting',
      'Actionable insight generation',
      'Customer satisfaction scoring',
      'Integration with CRM systems',
      'Real-time feedback monitoring'
    ],
    popular: true,
    icon: '📝🔍',
    color: 'from-blue-600 to-indigo-700',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/ai-feedback-analyzer',
    marketPosition: 'Specialized feedback analysis platform; goes beyond basic sentiment analysis with actionable insights.',
    targetAudience: 'Customer success teams, product managers, marketing teams, support teams',
    trialDays: 7,
    setupTime: '30 minutes',
    category: 'Customer Experience & Analytics',
    realService: true,
    technology: ['NLP, Machine Learning, Sentiment Analysis, Text Analytics'],
    integrations: ['Intercom, Zendesk, Salesforce, HubSpot, SurveyMonkey'],
    useCases: ['Customer satisfaction monitoring, Product improvement insights, Support quality analysis'],
    roi: 'Improve customer satisfaction by 25% and reduce churn by 30%.',
    competitors: ['MonkeyLearn, Lexalytics, RapidMiner, Custom solutions'],
    marketSize: '$8B feedback analytics market',
    growthRate: '140% YoY',
    variant: 'ai-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'NLP-powered feedback analysis with automated insight generation and reporting.',
    launchDate: '2025-01-15',
    customers: 234,
    rating: 4.7,
    reviews: 167
  },
  {
    id: 'smart-inventory-optimization',
    name: 'Smart Inventory Optimization Platform',
    tagline: 'Optimize inventory levels with AI-powered demand forecasting',
    price: '$149',
    period: '/month',
    description: 'AI-driven inventory optimization platform that predicts demand, optimizes stock levels, and automates reordering to minimize costs while maintaining service levels.',
    features: [
      'AI-powered demand forecasting',
      'Dynamic inventory optimization',
      'Automated reorder management',
      'Seasonal trend analysis',
      'Multi-location inventory tracking',
      'Cost optimization algorithms',
      'Integration with ERP systems',
      'Real-time inventory analytics'
    ],
    popular: false,
    icon: '📦📊',
    color: 'from-green-600 to-emerald-700',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/smart-inventory-optimization',
    marketPosition: 'AI-powered inventory optimization; combines traditional inventory management with machine learning.',
    targetAudience: 'Retail companies, e-commerce businesses, manufacturers, distributors',
    trialDays: 14,
    setupTime: '1 week',
    category: 'Supply Chain & Logistics',
    realService: true,
    technology: ['Machine Learning, Time Series Analysis, Optimization Algorithms, Cloud Computing'],
    integrations: ['Shopify, WooCommerce, SAP, Oracle, NetSuite'],
    useCases: ['Retail inventory optimization, Manufacturing planning, E-commerce stock management'],
    roi: 'Reduce inventory costs by 20% and improve stock availability by 35%.',
    competitors: ['TradeGecko, Zoho Inventory, Fishbowl, Custom solutions'],
    marketSize: '$15B inventory management market',
    growthRate: '120% YoY',
    variant: 'ai-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'ML-powered inventory optimization with demand forecasting and automated reordering.',
    launchDate: '2025-02-01',
    customers: 89,
    rating: 4.6,
    reviews: 52
  },
  {
    id: 'ai-powered-social-media-scheduler',
    name: 'AI-Powered Social Media Scheduler',
    tagline: 'Schedule and optimize social media content with AI insights',
    price: '$79',
    period: '/month',
    description: 'Intelligent social media scheduling platform that uses AI to determine optimal posting times, content performance prediction, and automated content optimization.',
    features: [
      'AI-powered optimal posting time detection',
      'Content performance prediction',
      'Automated content scheduling',
      'Multi-platform social media management',
      'Content performance analytics',
      'Hashtag optimization suggestions',
      'Audience engagement insights',
      'Integration with design tools'
    ],
    popular: true,
    icon: '📱🤖',
    color: 'from-pink-600 to-rose-700',
    textColor: 'text-pink-400',
    link: 'https://ziontechgroup.com/ai-social-media-scheduler',
    marketPosition: 'AI-enhanced social media management; goes beyond basic scheduling with intelligent optimization.',
    targetAudience: 'Social media managers, marketers, small businesses, influencers',
    trialDays: 7,
    setupTime: '1 day',
    category: 'Social Media & Marketing',
    realService: true,
    technology: ['AI/ML, Social Media APIs, Analytics, Automation'],
    integrations: ['Facebook, Instagram, Twitter, LinkedIn, TikTok, Canva'],
    useCases: ['Social media optimization, Content performance improvement, Audience engagement'],
    roi: 'Increase social media engagement by 40% and save 5 hours per week on scheduling.',
    competitors: ['Buffer, Hootsuite, Later, Sprout Social'],
    marketSize: '$20B social media management market',
    growthRate: '160% YoY',
    variant: 'ai-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'AI-powered social media platform with performance prediction and optimization.',
    launchDate: '2025-01-25',
    customers: 312,
    rating: 4.8,
    reviews: 198
  },
  {
    id: 'smart-expense-tracking-automation',
    name: 'Smart Expense Tracking Automation',
    tagline: 'Automate expense tracking and categorization with AI',
    price: '$59',
    period: '/month',
    description: 'AI-powered expense tracking platform that automatically categorizes expenses, detects anomalies, and provides insights to help businesses optimize spending and improve financial management.',
    features: [
      'Automatic expense categorization',
      'Receipt scanning and OCR',
      'Anomaly detection and fraud prevention',
      'Expense policy compliance checking',
      'Real-time expense analytics',
      'Integration with accounting software',
      'Mobile app for receipt capture',
      'Automated expense reporting'
    ],
    popular: false,
    icon: '💰📱',
    color: 'from-yellow-600 to-orange-700',
    textColor: 'text-yellow-400',
    link: 'https://ziontechgroup.com/smart-expense-tracking',
    marketPosition: 'AI-powered expense management; combines traditional expense tracking with intelligent automation.',
    targetAudience: 'Small businesses, startups, freelancers, accounting firms',
    trialDays: 14,
    setupTime: '1 day',
    category: 'Financial Management',
    realService: true,
    technology: ['OCR, Machine Learning, Computer Vision, Cloud Computing'],
    integrations: ['QuickBooks, Xero, FreshBooks, Stripe, PayPal'],
    useCases: ['Business expense tracking, Receipt management, Financial compliance'],
    roi: 'Reduce expense processing time by 70% and improve compliance by 90%.',
    competitors: ['Expensify, Receipt Bank, Concur, Rydoo'],
    marketSize: '$12B expense management market',
    growthRate: '130% YoY',
    variant: 'ai-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'OCR-powered expense platform with AI categorization and compliance checking.',
    launchDate: '2025-02-10',
    customers: 145,
    rating: 4.5,
    reviews: 87
  },
  {
    id: 'ai-powered-email-marketing-optimizer',
    name: 'AI-Powered Email Marketing Optimizer',
    tagline: 'Optimize email campaigns with AI-driven insights and automation',
    price: '$129',
    period: '/month',
    description: 'Intelligent email marketing platform that uses AI to optimize send times, subject lines, content personalization, and audience segmentation for maximum engagement and conversion.',
    features: [
      'AI-powered send time optimization',
      'Subject line performance prediction',
      'Content personalization engine',
      'Audience segmentation automation',
      'A/B testing with AI insights',
      'Email performance analytics',
      'Integration with email platforms',
      'Automated campaign optimization'
    ],
    popular: true,
    icon: '📧🎯',
    color: 'from-cyan-600 to-blue-700',
    textColor: 'text-cyan-400',
    link: 'https://ziontechgroup.com/ai-email-marketing',
    marketPosition: 'AI-enhanced email marketing; goes beyond basic email tools with intelligent optimization.',
    targetAudience: 'Email marketers, e-commerce businesses, SaaS companies, marketing agencies',
    trialDays: 14,
    setupTime: '2-3 days',
    category: 'Email Marketing & Automation',
    realService: true,
    technology: ['AI/ML, Email APIs, Analytics, Automation'],
    integrations: ['Mailchimp, SendGrid, ConvertKit, ActiveCampaign, Klaviyo'],
    useCases: ['Email campaign optimization, Personalization, Audience engagement'],
    roi: 'Increase email open rates by 30% and click-through rates by 45%.',
    competitors: ['Mailchimp, SendGrid, ConvertKit, ActiveCampaign'],
    marketSize: '$25B email marketing market',
    growthRate: '150% YoY',
    variant: 'ai-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'AI-powered email optimization with performance prediction and automation.',
    launchDate: '2025-01-30',
    customers: 267,
    rating: 4.7,
    reviews: 156
  }
];

export const getMicroSAASInnovationServicesByCategory = (category: string) => {
  return realMicroSAASInnovationServices.filter(service => service.category === category);
};

export const getPopularMicroSAASInnovationServices = () => {
  return realMicroSAASInnovationServices.filter(service => service.popular);
};

export const getMicroSAASInnovationServicesByVariant = (variant: ServiceVariant) => {
  return realMicroSAASInnovationServices.filter(service => service.variant === variant);
};