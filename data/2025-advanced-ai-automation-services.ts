import { ServiceVariant } from '../types/service-variants';

export interface AdvancedAIAutomationService2025 {
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

export const advancedAIAutomationServices2025 = [
  // Intelligent Document Processing Platform
  {
    id: 'intelligent-document-processing',
    name: 'Intelligent Document Processing Platform',
    tagline: 'Automate document workflows with AI-powered intelligence and accuracy',
    description: 'Advanced document processing platform that uses AI to extract, classify, and process information from various document types, automating manual workflows and improving efficiency.',
    category: 'AI Automation',
    type: 'AI Service',
    pricing: {
      starter: '$199/month',
      professional: '$599/month',
      enterprise: '$1,499/month',
      custom: 'Contact for pricing'
    },
    features: [
      'Multi-format document support',
      'AI-powered data extraction',
      'Intelligent classification',
      'Workflow automation',
      'OCR and text recognition',
      'Data validation',
      'Integration with business systems',
      'Custom templates',
      'Batch processing',
      'Real-time processing',
      'API access',
      'Compliance tracking'
    ],
    benefits: [
      '90% reduction in manual processing',
      'Improved accuracy',
      'Faster processing times',
      'Cost savings',
      'Better compliance',
      'Scalable operations',
      'Reduced errors',
      'Enhanced productivity'
    ],
    useCases: [
      'Financial services',
      'Healthcare organizations',
      'Legal firms',
      'Insurance companies',
      'Government agencies',
      'Manufacturing companies',
      'Retail businesses',
      'Educational institutions'
    ],
    marketSize: '$8.9B by 2025',
    targetAudience: 'Operations managers, compliance officers, document processors, business analysts',
    competitiveAdvantage: 'AI-powered accuracy with customizable workflows and seamless system integration',
    contact: 'kleber@ziontechgroup.com',
    mobile: '+1 302 464 0950',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com',
    slug: '/intelligent-document-processing'
  },

  // AI-Powered Customer Service Automation
  {
    id: 'ai-customer-service-automation',
    name: 'AI-Powered Customer Service Automation',
    tagline: 'Transform customer service with intelligent automation and 24/7 support',
    description: 'Comprehensive customer service automation platform that uses AI to handle customer inquiries, provide instant responses, and escalate complex issues to human agents seamlessly.',
    category: 'AI Automation',
    type: 'AI Service',
    pricing: {
      starter: '$299/month',
      professional: '$799/month',
      enterprise: '$1,999/month',
      custom: 'Contact for pricing'
    },
    features: [
      'Natural language processing',
      'Multi-language support',
      'Intelligent routing',
      'Automated responses',
      'Sentiment analysis',
      'Knowledge base integration',
      'Human handoff',
      'Performance analytics',
      'Custom workflows',
      'Integration with CRM',
      'Mobile app support',
      'White-label options'
    ],
    benefits: [
      '24/7 customer support',
      'Reduced response times',
      'Lower support costs',
      'Improved customer satisfaction',
      'Scalable operations',
      'Consistent service quality',
      'Better agent productivity',
      'Data-driven insights'
    ],
    useCases: [
      'E-commerce businesses',
      'SaaS companies',
      'Financial services',
      'Healthcare providers',
      'Telecommunications',
      'Retail chains',
      'Travel companies',
      'Educational institutions'
    ],
    marketSize: '$14.3B by 2025',
    targetAudience: 'Customer service managers, support teams, business owners, operations directors',
    competitiveAdvantage: 'Advanced NLP with seamless human-AI collaboration and comprehensive analytics',
    contact: 'kleber@ziontechgroup.com',
    mobile: '+1 302 464 0950',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com',
    slug: '/ai-customer-service-automation'
  },

  // Intelligent Process Automation Suite
  {
    id: 'intelligent-process-automation',
    name: 'Intelligent Process Automation Suite',
    tagline: 'Automate complex business processes with AI-driven intelligence',
    description: 'Advanced process automation platform that combines RPA with AI to automate complex business processes, improve efficiency, and reduce operational costs.',
    category: 'AI Automation',
    type: 'AI Service',
    pricing: {
      starter: '$399/month',
      professional: '$1,099/month',
      enterprise: '$2,799/month',
      custom: 'Contact for pricing'
    },
    features: [
      'RPA automation',
      'AI decision making',
      'Process mining',
      'Workflow orchestration',
      'Exception handling',
      'Performance monitoring',
      'Integration capabilities',
      'Custom automation scripts',
      'Real-time analytics',
      'Compliance tracking',
      'Scalable architecture',
      'Multi-tenant support'
    ],
    benefits: [
      'Increased operational efficiency',
      'Reduced manual errors',
      'Cost savings',
      'Improved compliance',
      'Better resource utilization',
      'Scalable operations',
      'Data accuracy',
      'Process optimization'
    ],
    useCases: [
      'Manufacturing companies',
      'Financial services',
      'Healthcare organizations',
      'Retail businesses',
      'Logistics providers',
      'Insurance companies',
      'Government agencies',
      'Educational institutions'
    ],
    marketSize: '$19.6B by 2025',
    targetAudience: 'Operations managers, process engineers, automation specialists, business analysts',
    competitiveAdvantage: 'Combined RPA and AI with intelligent decision making and comprehensive process optimization',
    contact: 'kleber@ziontechgroup.com',
    mobile: '+1 302 464 0950',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com',
    slug: '/intelligent-process-automation'
  },

  // AI-Powered Marketing Automation
  {
    id: 'ai-marketing-automation',
    name: 'AI-Powered Marketing Automation Platform',
    tagline: 'Supercharge your marketing with AI-driven automation and personalization',
    description: 'Intelligent marketing automation platform that uses AI to personalize campaigns, optimize content, and automate marketing workflows for maximum engagement and ROI.',
    category: 'AI Automation',
    type: 'AI Service',
    pricing: {
      starter: '$249/month',
      professional: '$649/month',
      enterprise: '$1,599/month',
      custom: 'Contact for pricing'
    },
    features: [
      'AI-powered personalization',
      'Predictive analytics',
      'Automated campaign management',
      'Content optimization',
      'Lead scoring',
      'Email automation',
      'Social media automation',
      'A/B testing',
      'Performance tracking',
      'Integration with marketing tools',
      'Custom workflows',
      'White-label options'
    ],
    benefits: [
      'Higher engagement rates',
      'Improved conversion rates',
      'Better ROI',
      'Time savings',
      'Personalized experiences',
      'Data-driven decisions',
      'Scalable campaigns',
      'Competitive advantage'
    ],
    useCases: [
      'Digital marketing agencies',
      'E-commerce businesses',
      'B2B companies',
      'SaaS companies',
      'Retail brands',
      'Startups',
      'Marketing teams',
      'Growth hackers'
    ],
    marketSize: '$25.1B by 2025',
    targetAudience: 'Marketing managers, digital marketers, growth hackers, business owners',
    competitiveAdvantage: 'AI-powered personalization with predictive analytics and comprehensive automation',
    contact: 'kleber@ziontechgroup.com',
    mobile: '+1 302 464 0950',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com',
    slug: '/ai-marketing-automation'
  },

  // Intelligent Data Quality Management
  {
    id: 'intelligent-data-quality-management',
    name: 'Intelligent Data Quality Management Platform',
    tagline: 'Ensure data accuracy and reliability with AI-powered quality management',
    description: 'Advanced data quality management platform that uses AI to detect, clean, and maintain high-quality data across all business systems and processes.',
    category: 'AI Automation',
    type: 'AI Service',
    pricing: {
      starter: '$199/month',
      professional: '$549/month',
      enterprise: '$1,399/month',
      custom: 'Contact for pricing'
    },
    features: [
      'AI-powered data validation',
      'Automated data cleaning',
      'Duplicate detection',
      'Data profiling',
      'Quality scoring',
      'Real-time monitoring',
      'Integration capabilities',
      'Custom rules engine',
      'Performance analytics',
      'Compliance reporting',
      'Data lineage tracking',
      'API access'
    ],
    benefits: [
      'Improved data accuracy',
      'Better decision making',
      'Reduced operational errors',
      'Compliance assurance',
      'Cost savings',
      'Increased efficiency',
      'Better customer experience',
      'Competitive advantage'
    ],
    useCases: [
      'Financial services',
      'Healthcare organizations',
      'E-commerce businesses',
      'Manufacturing companies',
      'Retail chains',
      'Government agencies',
      'Educational institutions',
      'Data-driven organizations'
    ],
    marketSize: '$11.7B by 2025',
    targetAudience: 'Data engineers, data scientists, IT managers, compliance officers',
    competitiveAdvantage: 'AI-powered data quality with automated cleaning and comprehensive monitoring',
    contact: 'kleber@ziontechgroup.com',
    mobile: '+1 302 464 0950',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com',
    slug: '/intelligent-data-quality-management'
  }
];