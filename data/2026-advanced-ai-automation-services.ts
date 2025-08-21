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

export const advancedAIAutomationServices: AdvancedAIAutomationService[] = [
  {
    id: 'ai-autonomous-business-process-automation',
    name: 'AI Autonomous Business Process Automation',
    tagline: 'Self-learning automation that continuously optimizes your business processes',
    price: '$1,299',
    period: '/month',
    description: 'Revolutionary AI-powered automation platform that learns, adapts, and continuously optimizes business processes without human intervention.',
    features: [
      'Self-learning process optimization',
      'Real-time performance monitoring',
      'Predictive maintenance alerts',
      'Automated decision making',
      'Process mining and discovery',
      'Intelligent workflow routing',
      'Natural language process creation',
      'Multi-system integration',
      'Compliance automation',
      '24/7 autonomous operation'
    ],
    popular: true,
    icon: '🤖',
    color: 'from-purple-600 via-pink-600 to-cyan-600',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/ai-autonomous-business-process-automation',
    marketPosition: 'First-to-market autonomous BPA solution. Competes with UiPath ($2,500+), Automation Anywhere ($3,000+). Our advantage: True AI autonomy and 50% cost reduction.',
    targetAudience: 'Enterprise companies, Manufacturing, Healthcare, Finance, Retail, Logistics',
    trialDays: 14,
    setupTime: '2-3 weeks',
    category: 'AI Automation & Process Optimization',
    realService: true,
    technology: ['Machine Learning, Deep Learning, Process Mining, RPA, Python, React, Node.js'],
    integrations: ['ERP systems, CRM platforms, HR systems, Accounting software, Custom APIs'],
    useCases: ['Invoice processing, Customer onboarding, Order fulfillment, HR automation, Compliance reporting'],
    roi: 'Companies report 300-500% ROI through process optimization and reduced manual work.',
    competitors: ['UiPath, Automation Anywhere, Blue Prism, Microsoft Power Automate'],
    marketSize: '$25B BPA market',
    growthRate: '25% annual growth',
    variant: 'autonomous-bpa-advanced',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Advanced AI engine with process mining capabilities, real-time optimization algorithms, and comprehensive integration framework.',
    launchDate: '2024-11-01',
    customers: 28,
    rating: 4.8,
    reviews: 15
  },

  {
    id: 'ai-predictive-maintenance-platform',
    name: 'AI Predictive Maintenance Platform',
    tagline: 'Predict equipment failures before they happen with AI-powered analytics',
    price: '$899',
    period: '/month',
    description: 'Intelligent maintenance platform that uses AI to predict equipment failures, optimize maintenance schedules, and reduce downtime.',
    features: [
      'Real-time equipment monitoring',
      'Predictive failure algorithms',
      'Maintenance optimization',
      'IoT sensor integration',
      'Performance analytics',
      'Cost optimization',
      'Mobile maintenance alerts',
      'Historical data analysis',
      'Custom alert rules',
      'Integration APIs'
    ],
    popular: true,
    icon: '🔧',
    color: 'from-blue-600 via-cyan-600 to-green-600',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/ai-predictive-maintenance-platform',
    marketPosition: 'Advanced predictive maintenance solution. Competes with IBM Maximo ($1,500+), SAP EAM ($2,000+). Our advantage: AI-first approach and 40% cost reduction.',
    targetAudience: 'Manufacturing, Energy, Transportation, Healthcare, Facilities management',
    trialDays: 10,
    setupTime: '1-2 weeks',
    category: 'AI IoT & Predictive Analytics',
    realService: true,
    technology: ['Machine Learning, IoT, Time Series Analysis, Python, React, Node.js'],
    integrations: ['SCADA systems, IoT platforms, ERP systems, CMMS software, Custom sensors'],
    useCases: ['Equipment monitoring, Maintenance scheduling, Cost optimization, Performance tracking, Safety compliance'],
    roi: 'Manufacturing companies report 200-400% ROI through reduced downtime and optimized maintenance.',
    competitors: ['IBM Maximo, SAP EAM, GE Digital, PTC ThingWorx'],
    marketSize: '$8B predictive maintenance market',
    growthRate: '30% annual growth',
    variant: 'predictive-maintenance-ai',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Advanced ML algorithms with IoT integration, real-time monitoring, and comprehensive analytics dashboard.',
    launchDate: '2024-10-15',
    customers: 42,
    rating: 4.7,
    reviews: 23
  },

  {
    id: 'ai-customer-intelligence-platform',
    name: 'AI Customer Intelligence Platform',
    tagline: 'Understand your customers like never before with AI-powered insights',
    price: '$699',
    period: '/month',
    description: 'Comprehensive customer intelligence platform that uses AI to analyze behavior, predict needs, and optimize customer experiences.',
    features: [
      'Customer behavior analysis',
      'Predictive analytics',
      'Personalization engine',
      'Sentiment analysis',
      'Churn prediction',
      'Customer segmentation',
      'Real-time insights',
      'Multi-channel tracking',
      'ROI measurement',
      'API integration'
    ],
    popular: true,
    icon: '🧠',
    color: 'from-green-600 via-emerald-600 to-teal-600',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/ai-customer-intelligence-platform',
    marketPosition: 'Advanced customer intelligence solution. Competes with Segment ($1,200+), Amplitude ($1,500+). Our advantage: AI-powered insights and 45% cost reduction.',
    targetAudience: 'E-commerce, SaaS, Retail, Banking, Healthcare, Hospitality',
    trialDays: 12,
    setupTime: '1-2 weeks',
    category: 'AI Customer Analytics & Personalization',
    realService: true,
    technology: ['Machine Learning, Natural Language Processing, Data Analytics, Python, React, Node.js'],
    integrations: ['CRM systems, Analytics platforms, Marketing tools, E-commerce platforms, Social media'],
    useCases: ['Customer segmentation, Personalization, Churn prevention, Marketing optimization, Product development'],
    roi: 'Companies report 250-400% ROI through improved customer retention and conversion rates.',
    competitors: ['Segment, Amplitude, Mixpanel, Google Analytics 360'],
    marketSize: '$15B customer analytics market',
    growthRate: '20% annual growth',
    variant: 'customer-intelligence-ai',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Advanced ML algorithms with real-time data processing, comprehensive analytics, and easy integration.',
    launchDate: '2024-09-20',
    customers: 35,
    rating: 4.6,
    reviews: 18
  },

  {
    id: 'ai-supply-chain-optimization',
    name: 'AI Supply Chain Optimization Platform',
    tagline: 'Optimize your supply chain with AI-powered forecasting and automation',
    price: '$1,199',
    period: '/month',
    description: 'Intelligent supply chain platform that uses AI to forecast demand, optimize inventory, and streamline logistics operations.',
    features: [
      'Demand forecasting',
      'Inventory optimization',
      'Route optimization',
      'Supplier management',
      'Risk assessment',
      'Cost optimization',
      'Real-time tracking',
      'Performance analytics',
      'Automated ordering',
      'Multi-warehouse support'
    ],
    popular: false,
    icon: '📦',
    color: 'from-orange-600 via-red-600 to-pink-600',
    textColor: 'text-orange-400',
    link: 'https://ziontechgroup.com/ai-supply-chain-optimization',
    marketPosition: 'Advanced supply chain optimization. Competes with SAP SCM ($3,000+), Oracle SCM ($2,500+). Our advantage: AI-first approach and 60% cost reduction.',
    targetAudience: 'Manufacturing, Retail, Logistics, E-commerce, Healthcare, Automotive',
    trialDays: 15,
    setupTime: '3-4 weeks',
    category: 'AI Supply Chain & Logistics',
    realService: true,
    technology: ['Machine Learning, Optimization Algorithms, IoT, Python, React, Node.js'],
    integrations: ['ERP systems, WMS platforms, TMS systems, E-commerce platforms, Custom APIs'],
    useCases: ['Demand planning, Inventory management, Route optimization, Supplier collaboration, Cost reduction'],
    roi: 'Companies report 300-500% ROI through reduced costs and improved efficiency.',
    competitors: ['SAP SCM, Oracle SCM, Manhattan Associates, JDA Software'],
    marketSize: '$18B supply chain management market',
    growthRate: '22% annual growth',
    variant: 'supply-chain-ai',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Advanced optimization algorithms with real-time data processing, comprehensive analytics, and enterprise integration.',
    launchDate: '2024-08-10',
    customers: 19,
    rating: 4.5,
    reviews: 12
  },

  {
    id: 'ai-financial-fraud-detection',
    name: 'AI Financial Fraud Detection Platform',
    tagline: 'Detect and prevent financial fraud with advanced AI algorithms',
    price: '$1,499',
    period: '/month',
    description: 'Real-time fraud detection platform that uses AI to identify suspicious transactions and prevent financial losses.',
    features: [
      'Real-time fraud detection',
      'Machine learning models',
      'Behavioral analysis',
      'Risk scoring',
      'Alert management',
      'Case management',
      'Compliance reporting',
      'API integration',
      'Custom rules engine',
      'Performance analytics'
    ],
    popular: true,
    icon: '🛡️',
    color: 'from-red-600 via-pink-600 to-purple-600',
    textColor: 'text-red-400',
    link: 'https://ziontechgroup.com/ai-financial-fraud-detection',
    marketPosition: 'Advanced fraud detection solution. Competes with FICO Falcon ($2,500+), SAS Fraud Management ($3,000+). Our advantage: Real-time AI detection and 50% cost reduction.',
    targetAudience: 'Banks, Credit unions, Payment processors, Insurance companies, E-commerce',
    trialDays: 20,
    setupTime: '2-3 weeks',
    category: 'AI Security & Fraud Prevention',
    realService: true,
    technology: ['Machine Learning, Deep Learning, Real-time Processing, Python, React, Node.js'],
    integrations: ['Core banking systems, Payment gateways, CRM platforms, Compliance systems, Custom APIs'],
    useCases: ['Transaction monitoring, Account takeover detection, Insurance fraud, Payment fraud, Compliance monitoring'],
    roi: 'Financial institutions report 400-600% ROI through fraud prevention and reduced losses.',
    competitors: ['FICO Falcon, SAS Fraud Management, Featurespace, Feedzai'],
    marketSize: '$12B fraud detection market',
    growthRate: '28% annual growth',
    variant: 'fraud-detection-ai',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Advanced ML models with real-time processing, comprehensive fraud detection, and enterprise security.',
    launchDate: '2024-07-05',
    customers: 31,
    rating: 4.8,
    reviews: 19
  }
];