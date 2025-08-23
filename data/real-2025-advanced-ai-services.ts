import { ServiceVariant } from '../types/service-variants';

export interface AdvancedAIService {
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

export const real2025AdvancedAIServices: AdvancedAIService[] = [
  {
    id: 'ai-powered-content-generation-platform',
    name: 'AI-Powered Content Generation Platform',
    tagline: 'Generate high-quality content for marketing, blogs, and social media',
    price: '$199',
    period: '/month',
    description: 'Advanced AI content generation platform that creates high-quality, SEO-optimized content for blogs, social media, and marketing campaigns. Features content planning, optimization, and multi-language support.',
    features: [
      'AI-powered content generation',
      'SEO optimization and keyword research',
      'Content planning and calendar',
      'Multi-language content creation',
      'Brand voice customization',
      'Plagiarism detection',
      'Content performance analytics',
      'Integration with CMS platforms',
      'Social media content scheduling'
    ],
    popular: true,
    icon: '✍️',
    color: 'from-purple-600 to-pink-700',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/ai-content-generation-platform',
    marketPosition: 'Competes with Jasper, Copy.ai, and Writesonic; provides comprehensive content generation and optimization.',
    targetAudience: 'Marketing teams, Content creators, SEO specialists',
    trialDays: 14,
    setupTime: '1 day',
    category: 'Content Generation',
    realService: true,
    technology: ['OpenAI GPT-4, Claude, LLaMA, Python, React'],
    integrations: ['WordPress, Shopify, HubSpot, Buffer, Hootsuite'],
    useCases: ['Content marketing, SEO optimization, Social media management'],
    roi: 'Increase content production by 300% and improve SEO rankings by 40%.',
    competitors: ['Jasper, Copy.ai, Writesonic, ContentBot'],
    marketSize: '$15B+ content marketing market',
    growthRate: '45% YoY',
    variant: 'ai-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Multi-tenant SaaS with AI content generation engine, SEO optimization, and content management.',
    launchDate: '2025-01-15',
    customers: 78,
    rating: 4.8,
    reviews: 52
  },
  {
    id: 'intelligent-customer-chatbot-platform',
    name: 'Intelligent Customer Chatbot Platform',
    tagline: 'AI-powered chatbots with natural language understanding and human handoff',
    price: '$299',
    period: '/month',
    description: 'Advanced chatbot platform that uses AI to provide intelligent customer support, answer questions, and handle complex conversations. Features natural language processing, sentiment analysis, and seamless human handoff.',
    features: [
      'Natural language understanding',
      'Multi-language support',
      'Sentiment analysis',
      'Human handoff automation',
      'Integration with CRM systems',
      'Conversation analytics',
      'Custom chatbot training',
      'Voice and text support',
      '24/7 availability'
    ],
    popular: true,
    icon: '💬',
    color: 'from-blue-600 to-cyan-700',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/intelligent-chatbot-platform',
    marketPosition: 'Alternative to Intercom, Drift, and Zendesk; adds AI-powered intelligence and automation.',
    targetAudience: 'Customer support teams, E-commerce businesses, SaaS companies',
    trialDays: 21,
    setupTime: '2 days',
    category: 'Customer Experience',
    realService: true,
    technology: ['OpenAI GPT-4, Claude, BERT, Python, Node.js'],
    integrations: ['Slack, Microsoft Teams, WhatsApp, Facebook Messenger'],
    useCases: ['Customer support automation, Lead qualification, Sales assistance'],
    roi: 'Reduce support costs by 60% and improve customer satisfaction by 35%.',
    competitors: ['Intercom, Drift, Zendesk, Freshchat'],
    marketSize: '$20B+ chatbot market',
    growthRate: '50% YoY',
    variant: 'ai-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Multi-tenant SaaS with AI chatbot engine, NLP processing, and comprehensive integrations.',
    launchDate: '2025-01-20',
    customers: 65,
    rating: 4.7,
    reviews: 41
  },
  {
    id: 'ai-powered-predictive-analytics-suite',
    name: 'AI-Powered Predictive Analytics Suite',
    tagline: 'Advanced predictive modeling with automated insights and forecasting',
    price: '$499',
    period: '/month',
    description: 'Comprehensive predictive analytics platform that uses AI to forecast trends, identify patterns, and provide actionable insights. Features automated model training, feature engineering, and real-time predictions.',
    features: [
      'Automated machine learning',
      'Predictive modeling and forecasting',
      'Feature engineering automation',
      'Real-time predictions',
      'Model performance monitoring',
      'Automated insights generation',
      'Integration with data sources',
      'Custom model development',
      'Comprehensive reporting'
    ],
    popular: true,
    icon: '🔮',
    color: 'from-indigo-600 to-purple-700',
    textColor: 'text-indigo-400',
    link: 'https://ziontechgroup.com/ai-predictive-analytics-suite',
    marketPosition: 'Competes with DataRobot, H2O.ai, and RapidMiner; provides comprehensive predictive analytics.',
    targetAudience: 'Data scientists, Business analysts, Operations teams',
    trialDays: 30,
    setupTime: '1 week',
    category: 'Predictive Analytics',
    realService: true,
    technology: ['Python, TensorFlow, PyTorch, Scikit-learn, PostgreSQL'],
    integrations: ['Snowflake, BigQuery, Redshift, Tableau, Power BI'],
    useCases: ['Demand forecasting, Risk assessment, Customer behavior prediction'],
    roi: 'Improve prediction accuracy by 40% and reduce decision-making time by 60%.',
    competitors: ['DataRobot, H2O.ai, RapidMiner, BigML'],
    marketSize: '$35B+ predictive analytics market',
    growthRate: '40% YoY',
    variant: 'ai-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Multi-tenant SaaS with AI modeling engine, automated ML, and comprehensive analytics.',
    launchDate: '2025-01-25',
    customers: 42,
    rating: 4.8,
    reviews: 28
  },
  {
    id: 'intelligent-document-processing-platform',
    name: 'Intelligent Document Processing Platform',
    tagline: 'AI-powered document extraction, classification, and data processing',
    price: '$179',
    period: '/month',
    description: 'Advanced document processing platform that uses AI to extract, classify, and process information from various document types. Features OCR, natural language processing, and automated data extraction.',
    features: [
      'AI-powered document classification',
      'OCR and text extraction',
      'Data extraction and validation',
      'Multi-format document support',
      'Automated workflow processing',
      'Integration with business systems',
      'Compliance and audit trails',
      'Custom extraction rules',
      'Real-time processing'
    ],
    popular: true,
    icon: '📄',
    color: 'from-green-600 to-emerald-700',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/intelligent-document-processing',
    marketPosition: 'Alternative to UiPath, Automation Anywhere, and Blue Prism; adds AI-powered document intelligence.',
    targetAudience: 'Business operations, Finance teams, Legal departments',
    trialDays: 14,
    setupTime: '3 days',
    category: 'Document Processing',
    realService: true,
    technology: ['OpenAI GPT-4, Tesseract OCR, Python, TensorFlow, PostgreSQL'],
    integrations: ['Salesforce, SAP, Oracle, Microsoft Dynamics, QuickBooks'],
    useCases: ['Invoice processing, Contract analysis, Form automation'],
    roi: 'Reduce document processing time by 80% and improve accuracy by 90%.',
    competitors: ['UiPath, Automation Anywhere, Blue Prism, Kofax'],
    marketSize: '$25B+ document processing market',
    growthRate: '35% YoY',
    variant: 'ai-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Multi-tenant SaaS with AI document processing engine, OCR technology, and workflow automation.',
    launchDate: '2025-02-01',
    customers: 89,
    rating: 4.7,
    reviews: 63
  },
  {
    id: 'ai-powered-sales-intelligence-platform',
    name: 'AI-Powered Sales Intelligence Platform',
    tagline: 'Intelligent lead scoring, opportunity identification, and sales forecasting',
    price: '$349',
    period: '/month',
    description: 'Comprehensive sales intelligence platform that uses AI to identify prospects, score leads, and predict sales outcomes. Features automated lead generation, market research, and sales performance analytics.',
    features: [
      'AI-powered lead scoring',
      'Prospect identification and research',
      'Sales forecasting and predictions',
      'Market intelligence and insights',
      'Integration with CRM systems',
      'Automated outreach sequences',
      'Performance analytics and reporting',
      'Competitive intelligence',
      'Mobile app for sales teams'
    ],
    popular: true,
    icon: '🎯',
    color: 'from-orange-600 to-red-700',
    textColor: 'text-orange-400',
    link: 'https://ziontechgroup.com/ai-sales-intelligence-platform',
    marketPosition: 'Competes with ZoomInfo, LinkedIn Sales Navigator, and HubSpot; adds AI-powered intelligence.',
    targetAudience: 'Sales teams, Business development, Marketing teams',
    trialDays: 21,
    setupTime: '1 week',
    category: 'Sales Intelligence',
    realService: true,
    technology: ['OpenAI GPT-4, Python, TensorFlow, PostgreSQL, Redis'],
    integrations: ['Salesforce, HubSpot, Pipedrive, LinkedIn, ZoomInfo'],
    useCases: ['Lead generation, Sales forecasting, Market research'],
    roi: 'Increase sales productivity by 40% and improve conversion rates by 30%.',
    competitors: ['ZoomInfo, LinkedIn Sales Navigator, HubSpot, Clearbit'],
    marketSize: '$30B+ sales intelligence market',
    growthRate: '30% YoY',
    variant: 'ai-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Multi-tenant SaaS with AI sales intelligence engine, lead scoring, and market research.',
    launchDate: '2025-02-05',
    customers: 56,
    rating: 4.8,
    reviews: 38
  },
  {
    id: 'intelligent-recruitment-ai-platform',
    name: 'Intelligent Recruitment AI Platform',
    tagline: 'AI-powered candidate sourcing, screening, and matching',
    price: '$399',
    period: '/month',
    description: 'Advanced recruitment platform that uses AI to source candidates, screen resumes, and match the best talent to job requirements. Features automated screening, skill assessment, and candidate engagement.',
    features: [
      'AI-powered candidate sourcing',
      'Resume screening and parsing',
      'Skill assessment and matching',
      'Automated candidate engagement',
      'Interview scheduling automation',
      'Diversity and inclusion tools',
      'Performance analytics and reporting',
      'Integration with ATS systems',
      'Mobile app for candidates'
    ],
    popular: true,
    icon: '👥',
    color: 'from-teal-600 to-cyan-700',
    textColor: 'text-teal-400',
    link: 'https://ziontechgroup.com/intelligent-recruitment-ai',
    marketPosition: 'Alternative to Workday, BambooHR, and Greenhouse; adds AI-powered recruitment intelligence.',
    targetAudience: 'HR teams, Recruiters, Talent acquisition specialists',
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Human Resources',
    realService: true,
    technology: ['OpenAI GPT-4, Python, TensorFlow, PostgreSQL, Redis'],
    integrations: ['Workday, BambooHR, Greenhouse, LinkedIn, Indeed'],
    useCases: ['Talent sourcing, Candidate screening, Recruitment automation'],
    roi: 'Reduce time-to-hire by 50% and improve candidate quality by 40%.',
    competitors: ['Workday, BambooHR, Greenhouse, Lever'],
    marketSize: '$28B+ HR software market',
    growthRate: '25% YoY',
    variant: 'ai-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Multi-tenant SaaS with AI recruitment engine, candidate matching, and automated screening.',
    launchDate: '2025-02-10',
    customers: 34,
    rating: 4.7,
    reviews: 22
  },
  {
    id: 'ai-powered-financial-analysis-platform',
    name: 'AI-Powered Financial Analysis Platform',
    tagline: 'Intelligent financial modeling, risk assessment, and investment analysis',
    price: '$599',
    period: '/month',
    description: 'Comprehensive financial analysis platform that uses AI to analyze market data, assess risks, and provide investment recommendations. Features automated financial modeling, risk assessment, and portfolio optimization.',
    features: [
      'AI-powered financial modeling',
      'Risk assessment and management',
      'Portfolio optimization',
      'Market analysis and forecasting',
      'Compliance and regulatory reporting',
      'Real-time market data integration',
      'Custom financial models',
      'Performance analytics and reporting',
      'Mobile app for financial advisors'
    ],
    popular: true,
    icon: '💰',
    color: 'from-yellow-600 to-amber-700',
    textColor: 'text-yellow-400',
    link: 'https://ziontechgroup.com/ai-financial-analysis-platform',
    marketPosition: 'Competes with Bloomberg Terminal, FactSet, and Refinitiv; adds AI-powered analysis and automation.',
    targetAudience: 'Financial advisors, Investment managers, Risk analysts',
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Financial Technology',
    realService: true,
    technology: ['Python, TensorFlow, PyTorch, PostgreSQL, Redis'],
    integrations: ['Bloomberg, FactSet, Refinitiv, Salesforce, Microsoft Excel'],
    useCases: ['Investment analysis, Risk management, Portfolio optimization'],
    roi: 'Improve investment returns by 25% and reduce risk assessment time by 70%.',
    competitors: ['Bloomberg Terminal, FactSet, Refinitiv, Morningstar'],
    marketSize: '$40B+ financial technology market',
    growthRate: '35% YoY',
    variant: 'ai-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Multi-tenant SaaS with AI financial analysis engine, risk modeling, and portfolio optimization.',
    launchDate: '2025-02-15',
    customers: 28,
    rating: 4.9,
    reviews: 19
  },
  {
    id: 'intelligent-supply-chain-optimization',
    name: 'Intelligent Supply Chain Optimization',
    tagline: 'AI-powered supply chain planning, optimization, and risk management',
    price: '$449',
    period: '/month',
    description: 'Advanced supply chain optimization platform that uses AI to predict demand, optimize inventory, and manage supply chain risks. Features demand forecasting, route optimization, and supplier management.',
    features: [
      'AI-powered demand forecasting',
      'Supply chain optimization',
      'Risk assessment and management',
      'Route optimization and logistics',
      'Supplier performance monitoring',
      'Inventory optimization',
      'Real-time supply chain visibility',
      'Compliance and sustainability tracking',
      'Integration with ERP systems'
    ],
    popular: true,
    icon: '🚚',
    color: 'from-blue-600 to-indigo-700',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/intelligent-supply-chain-optimization',
    marketPosition: 'Competes with SAP SCM, Oracle SCM, and Manhattan Associates; adds AI-powered optimization.',
    targetAudience: 'Supply chain managers, Operations teams, Logistics coordinators',
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Supply Chain Management',
    realService: true,
    technology: ['Python, TensorFlow, PyTorch, PostgreSQL, Redis'],
    integrations: ['SAP, Oracle, Microsoft Dynamics, Shopify, Amazon'],
    useCases: ['Demand forecasting, Supply chain optimization, Risk management'],
    roi: 'Reduce supply chain costs by 30% and improve delivery performance by 40%.',
    competitors: ['SAP SCM, Oracle SCM, Manhattan Associates, JDA Software'],
    marketSize: '$35B+ supply chain management market',
    growthRate: '30% YoY',
    variant: 'ai-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Multi-tenant SaaS with AI supply chain engine, optimization algorithms, and risk management.',
    launchDate: '2025-02-20',
    customers: 45,
    rating: 4.7,
    reviews: 31
  }
];