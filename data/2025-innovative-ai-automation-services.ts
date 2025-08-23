import { ServiceVariant } from '../types/service-variants';

export interface InnovativeAIAutomationService {
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

export const innovativeAIAutomationServices2025: InnovativeAIAutomationService[] = [
  // AI-Powered Customer Service Automation
  {
    id: 'ai-customer-service-automation',
    name: 'AI-Powered Customer Service Automation',
    tagline: 'Intelligent customer support with 24/7 availability',
    price: '$2,800',
    period: '/month',
    description: 'Advanced AI customer service platform that provides intelligent responses, sentiment analysis, and automated ticket resolution. Reduces response times and improves customer satisfaction while cutting support costs.',
    features: [
      'Natural language processing',
      'Sentiment analysis',
      'Automated ticket routing',
      'Knowledge base integration',
      'Multi-language support',
      'Voice and chat support',
      'Escalation management',
      'Performance analytics',
      'Integration APIs',
      'Custom bot training'
    ],
    popular: true,
    icon: '🤖',
    color: 'from-cyan-600 to-blue-700',
    textColor: 'text-cyan-400',
    link: 'https://ziontechgroup.com/ai-customer-service-automation',
    marketPosition: 'Competes with Zendesk ($49-215/month), Intercom ($74-499/month), Freshdesk ($15-99/month). Our advantage: AI-first approach, better automation, and lower total cost.',
    targetAudience: 'E-commerce businesses, SaaS companies, Customer support teams, Retail chains, Healthcare providers',
    trialDays: 14,
    setupTime: '1-2 weeks',
    category: 'Customer Service AI',
    realService: true,
    technology: ['OpenAI GPT-4, React, Node.js, Python, PostgreSQL, Redis, AWS'],
    integrations: ['Zendesk, Intercom, Salesforce, HubSpot, Slack, Microsoft Teams, WhatsApp'],
    useCases: ['Customer support automation, FAQ management, Ticket routing, Chatbot deployment, Support analytics'],
    roi: 'Companies see 300% ROI through reduced support costs and improved customer satisfaction.',
    competitors: ['Zendesk, Intercom, Freshdesk, Help Scout, Zoho Desk'],
    marketSize: '$15B customer service software market',
    growthRate: '22% annual growth',
    variant: 'ai-automation',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Production-ready AI customer service platform with natural language processing, sentiment analysis, and comprehensive automation. Includes training and API documentation.',
    launchDate: '2024-07-01',
    customers: 156,
    rating: 4.8,
    reviews: 89
  },

  // Intelligent Document Processing Platform
  {
    id: 'intelligent-document-processing',
    name: 'Intelligent Document Processing Platform',
    tagline: 'AI-powered document extraction and analysis',
    price: '$1,950',
    period: '/month',
    description: 'Advanced document processing platform that uses AI to extract, classify, and analyze information from various document types. Automates data entry and document workflows while improving accuracy.',
    features: [
      'OCR with 99.9% accuracy',
      'Document classification',
      'Data extraction automation',
      'Form processing',
      'Multi-format support',
      'Workflow automation',
      'Compliance tracking',
      'API integration',
      'Custom model training',
      'Real-time processing'
    ],
    popular: false,
    icon: '📄',
    color: 'from-indigo-600 to-purple-700',
    textColor: 'text-indigo-400',
    link: 'https://ziontechgroup.com/intelligent-document-processing',
    marketPosition: 'Competes with UiPath ($420/month), Automation Anywhere ($750/month), Blue Prism ($1,500/month). Our advantage: AI-first approach, better accuracy, and lower implementation costs.',
    targetAudience: 'Legal firms, Insurance companies, Healthcare providers, Financial institutions, Government agencies',
    trialDays: 21,
    setupTime: '2-3 weeks',
    category: 'Document AI',
    realService: true,
    technology: ['Python, TensorFlow, OpenCV, React, Node.js, PostgreSQL, AWS, Azure'],
    integrations: ['Salesforce, SAP, Oracle, Microsoft Office, Google Workspace, Dropbox'],
    useCases: ['Invoice processing, Contract analysis, Medical record processing, Insurance claims, Legal document review'],
    roi: 'Organizations achieve 400% ROI through reduced manual processing and improved accuracy.',
    competitors: ['UiPath, Automation Anywhere, Blue Prism, Microsoft Power Automate, Zapier'],
    marketSize: '$25B document processing market',
    growthRate: '28% annual growth',
    variant: 'ai-document',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Full-featured document processing platform with AI capabilities, workflow automation, and compliance features. Includes training and customization services.',
    launchDate: '2024-06-15',
    customers: 203,
    rating: 4.7,
    reviews: 112
  },

  // AI-Powered Marketing Automation Suite
  {
    id: 'ai-marketing-automation-suite',
    name: 'AI-Powered Marketing Automation Suite',
    tagline: 'Intelligent marketing campaigns with predictive analytics',
    price: '$3,200',
    period: '/month',
    description: 'Comprehensive marketing automation platform that uses AI to optimize campaigns, predict customer behavior, and automate personalized marketing efforts. Increases conversion rates and ROI.',
    features: [
      'AI campaign optimization',
      'Predictive customer analytics',
      'Personalized content generation',
      'Multi-channel automation',
      'A/B testing automation',
      'Lead scoring AI',
      'Customer journey mapping',
      'Performance analytics',
      'Integration marketplace',
      'Mobile app support'
    ],
    popular: true,
    icon: '📊',
    color: 'from-pink-600 to-rose-700',
    textColor: 'text-pink-400',
    link: 'https://ziontechgroup.com/ai-marketing-automation-suite',
    marketPosition: 'Competes with HubSpot ($45-3,200/month), Marketo ($1,250/month), Pardot ($1,250/month). Our advantage: AI-first approach, better personalization, and predictive analytics.',
    targetAudience: 'Marketing agencies, E-commerce businesses, B2B companies, SaaS companies, Real estate firms',
    trialDays: 14,
    setupTime: '1-2 weeks',
    category: 'Marketing AI',
    realService: true,
    technology: ['React, Node.js, Python, TensorFlow, PostgreSQL, Redis, AWS, Google Analytics'],
    integrations: ['HubSpot, Salesforce, Mailchimp, Facebook Ads, Google Ads, LinkedIn, Twitter'],
    useCases: ['Email marketing automation, Social media management, Lead nurturing, Campaign optimization, Customer segmentation'],
    roi: 'Marketing teams report 350% ROI through improved conversion rates and reduced manual work.',
    competitors: ['HubSpot, Marketo, Pardot, ActiveCampaign, ConvertKit'],
    marketSize: '$35B marketing automation market',
    growthRate: '24% annual growth',
    variant: 'ai-marketing',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Complete marketing automation platform with AI capabilities, multi-channel support, and comprehensive analytics. Includes training and campaign setup services.',
    launchDate: '2024-05-01',
    customers: 278,
    rating: 4.8,
    reviews: 156
  },

  // Autonomous Data Analytics Platform
  {
    id: 'autonomous-data-analytics',
    name: 'Autonomous Data Analytics Platform',
    tagline: 'Self-service analytics with AI-powered insights',
    price: '$4,100',
    period: '/month',
    description: 'Advanced analytics platform that automatically discovers insights, generates reports, and provides actionable recommendations. Democratizes data access while maintaining security and governance.',
    features: [
      'AI-powered insight discovery',
      'Natural language queries',
      'Automated report generation',
      'Predictive analytics',
      'Data visualization',
      'Real-time dashboards',
      'Data governance',
      'Security controls',
      'API access',
      'Custom model training'
    ],
    popular: false,
    icon: '📈',
    color: 'from-teal-600 to-cyan-700',
    textColor: 'text-teal-400',
    link: 'https://ziontechgroup.com/autonomous-data-analytics',
    marketPosition: 'Competes with Tableau ($70/month), Power BI ($9.99/month), Looker ($5,000/month). Our advantage: AI automation, natural language queries, and autonomous insights.',
    targetAudience: 'Data analysts, Business intelligence teams, Executives, Marketing teams, Sales teams',
    trialDays: 21,
    setupTime: '2-4 weeks',
    category: 'Data Analytics AI',
    realService: true,
    technology: ['Python, TensorFlow, React, Node.js, PostgreSQL, Redis, AWS, Apache Spark'],
    integrations: ['Salesforce, HubSpot, Google Analytics, Facebook Ads, Shopify, QuickBooks'],
    useCases: ['Business intelligence, Performance tracking, Customer analytics, Financial reporting, Operational insights'],
    roi: 'Organizations achieve 400% ROI through faster insights and reduced analyst workload.',
    competitors: ['Tableau, Power BI, Looker, Qlik, Domo'],
    marketSize: '$30B business intelligence market',
    growthRate: '26% annual growth',
    variant: 'ai-analytics',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Production-ready analytics platform with AI capabilities, comprehensive data governance, and security features. Includes training and data migration services.',
    launchDate: '2024-08-01',
    customers: 134,
    rating: 4.9,
    reviews: 78
  },

  // AI-Powered HR Management System
  {
    id: 'ai-hr-management-system',
    name: 'AI-Powered HR Management System',
    tagline: 'Intelligent human resources with predictive analytics',
    price: '$2,400',
    period: '/month',
    description: 'Comprehensive HR platform that uses AI to streamline recruitment, employee management, and performance evaluation. Improves hiring decisions and employee satisfaction.',
    features: [
      'AI-powered candidate screening',
      'Predictive employee analytics',
      'Performance evaluation AI',
      'Automated onboarding',
      'Employee engagement tracking',
      'Compliance automation',
      'Payroll integration',
      'Benefits management',
      'Mobile app support',
      'API access'
    ],
    popular: false,
    icon: '👥',
    color: 'from-amber-600 to-orange-700',
    textColor: 'text-amber-400',
    link: 'https://ziontechgroup.com/ai-hr-management-system',
    marketPosition: 'Competes with Workday ($99/month), BambooHR ($6.19/month), ADP ($59/month). Our advantage: AI-first approach, better automation, and predictive analytics.',
    targetAudience: 'HR departments, Recruiting agencies, Small businesses, Enterprise companies, Non-profits',
    trialDays: 14,
    setupTime: '1-3 weeks',
    category: 'HR AI',
    realService: true,
    technology: ['React, Node.js, Python, TensorFlow, PostgreSQL, Redis, AWS, Mobile SDKs'],
    integrations: ['Workday, BambooHR, ADP, QuickBooks, Slack, Microsoft Teams, Zoom'],
    useCases: ['Recruitment automation, Employee management, Performance tracking, Compliance monitoring, Benefits administration'],
    roi: 'HR teams see 300% ROI through improved efficiency and better hiring decisions.',
    competitors: ['Workday, BambooHR, ADP, Paychex, Gusto'],
    marketSize: '$20B HR software market',
    growthRate: '20% annual growth',
    variant: 'ai-hr',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Complete HR management platform with AI capabilities, comprehensive automation, and compliance features. Includes training and customization services.',
    launchDate: '2024-07-15',
    customers: 189,
    rating: 4.7,
    reviews: 95
  }
];