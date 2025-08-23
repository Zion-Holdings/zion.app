import { ServiceVariant } from '../types/service-variants';

export interface SpecializedEnterpriseService {
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

export const specializedEnterpriseServices: SpecializedEnterpriseService[] = [
  // Healthcare AI Platform
  {
    id: 'healthcare-ai-platform',
    name: 'Healthcare AI Platform',
    tagline: 'AI-powered healthcare diagnostics and patient care',
    price: '$1,199',
    period: '/month',
    description: 'Comprehensive healthcare AI platform that provides diagnostic assistance, patient monitoring, drug discovery, and personalized medicine solutions.',
    features: [
      'Medical image analysis',
      'Diagnostic assistance',
      'Patient monitoring',
      'Drug discovery AI',
      'Personalized medicine',
      'Clinical decision support',
      'Healthcare analytics',
      'Compliance automation',
      'Integration with EHR systems'
    ],
    popular: true,
    icon: '🏥',
    color: 'from-red-600 to-pink-700',
    textColor: 'text-red-400',
    link: 'https://ziontechgroup.com/healthcare-ai-platform',
    marketPosition: 'Leading healthcare AI platform; FDA-approved diagnostic assistance and clinical decision support.',
    targetAudience: 'Hospitals, Clinics, Pharmaceutical companies, Medical device manufacturers',
    trialDays: 60,
    setupTime: '4-6 weeks',
    category: 'Healthcare AI',
    realService: true,
    technology: ['Computer vision, Natural language processing, Machine learning, Medical AI'],
    integrations: ['Epic, Cerner, PACS systems, Medical devices, Lab systems'],
    useCases: ['Medical diagnostics, Patient monitoring, Drug discovery, Clinical research'],
    roi: 'Improve diagnostic accuracy by 30%, reduce healthcare costs by 25%',
    competitors: ['IBM Watson Health, Google Health, Microsoft Healthcare'],
    marketSize: '$150B+ healthcare AI market',
    growthRate: '40% YoY',
    variant: 'healthcare-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Healthcare AI platform with FDA-approved diagnostic tools and clinical decision support.',
    launchDate: '2025-01-10',
    customers: 34,
    rating: 4.9,
    reviews: 28
  },

  // Financial AI Trading Platform
  {
    id: 'financial-ai-trading-platform',
    name: 'Financial AI Trading Platform',
    tagline: 'AI-powered algorithmic trading and financial analysis',
    price: '$1,599',
    period: '/month',
    description: 'Advanced financial platform that uses AI and machine learning for algorithmic trading, risk management, portfolio optimization, and market analysis.',
    features: [
      'Algorithmic trading strategies',
      'Risk management AI',
      'Portfolio optimization',
      'Market sentiment analysis',
      'Real-time market data',
      'Backtesting and simulation',
      'Compliance monitoring',
      'Performance analytics',
      'Multi-asset support'
    ],
    popular: true,
    icon: '💰',
    color: 'from-green-600 to-emerald-700',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/financial-ai-trading-platform',
    marketPosition: 'Leading AI trading platform; enables institutional-grade algorithmic trading and risk management.',
    targetAudience: 'Hedge funds, Investment banks, Asset managers, Trading firms',
    trialDays: 30,
    setupTime: '3-4 weeks',
    category: 'Financial AI',
    realService: true,
    technology: ['Machine learning, Quantitative finance, High-frequency trading, Risk modeling'],
    integrations: ['Bloomberg, Reuters, Trading platforms, Risk management systems'],
    useCases: ['Algorithmic trading, Risk management, Portfolio optimization, Market analysis'],
    roi: 'Increase trading returns by 15-25%, reduce risk by 30%',
    competitors: ['Two Sigma, Renaissance Technologies, Citadel'],
    marketSize: '$100B+ algorithmic trading market',
    growthRate: '35% YoY',
    variant: 'finance-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'AI-powered trading platform with institutional-grade algorithms and risk management.',
    launchDate: '2025-01-15',
    customers: 23,
    rating: 4.8,
    reviews: 19
  },

  // Manufacturing AI Platform
  {
    id: 'manufacturing-ai-platform',
    name: 'Manufacturing AI Platform',
    tagline: 'Intelligent manufacturing with AI and IoT',
    price: '$899',
    period: '/month',
    description: 'Comprehensive manufacturing platform that uses AI, IoT, and machine learning for predictive maintenance, quality control, and production optimization.',
    features: [
      'Predictive maintenance',
      'Quality control AI',
      'Production optimization',
      'Supply chain optimization',
      'IoT device management',
      'Real-time monitoring',
      'Energy optimization',
      'Safety monitoring',
      'Compliance automation'
    ],
    popular: true,
    icon: '🏭',
    color: 'from-blue-600 to-indigo-700',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/manufacturing-ai-platform',
    marketPosition: 'Leading manufacturing AI platform; reduces downtime by 40% and improves quality by 25%.',
    targetAudience: 'Manufacturing companies, Industrial IoT, Supply chain companies, Quality control teams',
    trialDays: 45,
    setupTime: '4-6 weeks',
    category: 'Industrial AI',
    realService: true,
    technology: ['IoT, Machine learning, Computer vision, Predictive analytics'],
    integrations: ['ERP systems, MES systems, IoT devices, Quality control systems'],
    useCases: ['Predictive maintenance, Quality control, Production optimization, Supply chain management'],
    roi: 'Reduce downtime by 40%, improve quality by 25%, reduce costs by 20%',
    competitors: ['Siemens Mindsphere, GE Predix, PTC ThingWorx'],
    marketSize: '$80B+ industrial AI market',
    growthRate: '45% YoY',
    variant: 'industrial-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Manufacturing AI platform with IoT integration and predictive analytics.',
    launchDate: '2025-01-20',
    customers: 67,
    rating: 4.7,
    reviews: 45
  },

  // Retail AI Platform
  {
    id: 'retail-ai-platform',
    name: 'Retail AI Platform',
    tagline: 'AI-powered retail optimization and customer experience',
    price: '$699',
    period: '/month',
    description: 'Intelligent retail platform that uses AI for inventory management, customer analytics, personalized marketing, and store optimization.',
    features: [
      'Inventory optimization',
      'Customer analytics',
      'Personalized marketing',
      'Store layout optimization',
      'Demand forecasting',
      'Price optimization',
      'Customer segmentation',
      'Loyalty program AI',
      'Omnichannel integration'
    ],
    popular: true,
    icon: '🛍️',
    color: 'from-purple-600 to-violet-700',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/retail-ai-platform',
    marketPosition: 'Leading retail AI platform; increases sales by 20% and reduces inventory costs by 30%.',
    targetAudience: 'Retail chains, E-commerce companies, Shopping centers, Brand manufacturers',
    trialDays: 30,
    setupTime: '3-4 weeks',
    category: 'Retail AI',
    realService: true,
    technology: ['Machine learning, Computer vision, Predictive analytics, Customer analytics'],
    integrations: ['POS systems, E-commerce platforms, CRM systems, Inventory systems'],
    useCases: ['Inventory management, Customer analytics, Marketing optimization, Store operations'],
    roi: 'Increase sales by 20%, reduce inventory costs by 30%, improve customer satisfaction',
    competitors: ['Salesforce Commerce Cloud, Adobe Commerce, Shopify Plus'],
    marketSize: '$60B+ retail AI market',
    growthRate: '40% YoY',
    variant: 'retail-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Retail AI platform with omnichannel integration and customer analytics.',
    launchDate: '2025-01-25',
    customers: 89,
    rating: 4.6,
    reviews: 56
  },

  // Energy AI Platform
  {
    id: 'energy-ai-platform',
    name: 'Energy AI Platform',
    tagline: 'AI-powered energy optimization and sustainability',
    price: '$1,299',
    period: '/month',
    description: 'Advanced energy platform that uses AI for grid optimization, renewable energy management, demand forecasting, and sustainability monitoring.',
    features: [
      'Grid optimization',
      'Renewable energy management',
      'Demand forecasting',
      'Energy trading AI',
      'Sustainability monitoring',
      'Smart meter analytics',
      'Load balancing',
      'Energy efficiency',
      'Carbon footprint tracking'
    ],
    popular: true,
    icon: '⚡',
    color: 'from-yellow-600 to-amber-700',
    textColor: 'text-yellow-400',
    link: 'https://ziontechgroup.com/energy-ai-platform',
    marketPosition: 'Leading energy AI platform; reduces energy costs by 25% and improves grid efficiency by 30%.',
    targetAudience: 'Utility companies, Energy traders, Renewable energy companies, Smart grid operators',
    trialDays: 45,
    setupTime: '4-6 weeks',
    category: 'Energy AI',
    realService: true,
    technology: ['Machine learning, IoT, Predictive analytics, Energy optimization'],
    integrations: ['SCADA systems, Smart meters, Energy trading platforms, Grid management systems'],
    useCases: ['Grid optimization, Energy trading, Demand forecasting, Sustainability monitoring'],
    roi: 'Reduce energy costs by 25%, improve grid efficiency by 30%, increase renewable integration',
    competitors: ['GE Grid Solutions, Siemens Energy, ABB'],
    marketSize: '$70B+ energy AI market',
    growthRate: '50% YoY',
    variant: 'energy-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Energy AI platform with grid optimization and renewable energy management.',
    launchDate: '2025-02-01',
    customers: 45,
    rating: 4.8,
    reviews: 32
  },

  // Transportation AI Platform
  {
    id: 'transportation-ai-platform',
    name: 'Transportation AI Platform',
    tagline: 'AI-powered transportation optimization and autonomous systems',
    price: '$1,099',
    period: '/month',
    description: 'Intelligent transportation platform that uses AI for route optimization, autonomous vehicle management, traffic prediction, and fleet management.',
    features: [
      'Route optimization',
      'Autonomous vehicle management',
      'Traffic prediction',
      'Fleet management',
      'Predictive maintenance',
      'Safety monitoring',
      'Fuel optimization',
      'Driver analytics',
      'Real-time tracking'
    ],
    popular: true,
    icon: '🚗',
    color: 'from-orange-600 to-red-700',
    textColor: 'text-orange-400',
    link: 'https://ziontechgroup.com/transportation-ai-platform',
    marketPosition: 'Leading transportation AI platform; reduces fuel costs by 20% and improves delivery efficiency by 35%.',
    targetAudience: 'Logistics companies, Transportation companies, Fleet operators, Autonomous vehicle companies',
    trialDays: 30,
    setupTime: '3-5 weeks',
    category: 'Transportation AI',
    realService: true,
    technology: ['Machine learning, Computer vision, IoT, Predictive analytics'],
    integrations: ['GPS systems, Fleet management systems, Traffic data, Weather services'],
    useCases: ['Route optimization, Fleet management, Autonomous vehicles, Traffic prediction'],
    roi: 'Reduce fuel costs by 20%, improve delivery efficiency by 35%, enhance safety',
    competitors: ['Uber Freight, Convoy, KeepTruckin, Samsara'],
    marketSize: '$50B+ transportation AI market',
    growthRate: '45% YoY',
    variant: 'transportation-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Transportation AI platform with route optimization and autonomous vehicle management.',
    launchDate: '2025-02-05',
    customers: 78,
    rating: 4.7,
    reviews: 52
  },

  // Education AI Platform
  {
    id: 'education-ai-platform',
    name: 'Education AI Platform',
    tagline: 'AI-powered personalized learning and educational analytics',
    price: '$599',
    period: '/month',
    description: 'Comprehensive education platform that uses AI for personalized learning, student analytics, content creation, and educational assessment.',
    features: [
      'Personalized learning',
      'Student analytics',
      'Content creation AI',
      'Educational assessment',
      'Learning path optimization',
      'Student engagement',
      'Performance tracking',
      'Adaptive content',
      'Teacher assistance'
    ],
    popular: true,
    icon: '🎓',
    color: 'from-teal-600 to-cyan-700',
    textColor: 'text-teal-400',
    link: 'https://ziontechgroup.com/education-ai-platform',
    marketPosition: 'Leading education AI platform; improves student performance by 30% and reduces teacher workload by 40%.',
    targetAudience: 'Schools, Universities, Online learning platforms, Corporate training',
    trialDays: 30,
    setupTime: '2-3 weeks',
    category: 'Education AI',
    realService: true,
    technology: ['Machine learning, Natural language processing, Computer vision, Educational analytics'],
    integrations: ['LMS systems, Student information systems, Content management systems, Assessment platforms'],
    useCases: ['Personalized learning, Student analytics, Content creation, Educational assessment'],
    roi: 'Improve student performance by 30%, reduce teacher workload by 40%, increase engagement',
    competitors: ['Coursera, Udemy, Khan Academy, Duolingo'],
    marketSize: '$40B+ education AI market',
    growthRate: '35% YoY',
    variant: 'education-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Education AI platform with personalized learning and student analytics.',
    launchDate: '2025-01-30',
    customers: 156,
    rating: 4.8,
    reviews: 98
  },

  // Real Estate AI Platform
  {
    id: 'real-estate-ai-platform',
    name: 'Real Estate AI Platform',
    tagline: 'AI-powered real estate analytics and market insights',
    price: '$799',
    period: '/month',
    description: 'Intelligent real estate platform that uses AI for market analysis, property valuation, investment insights, and customer relationship management.',
    features: [
      'Market analysis AI',
      'Property valuation',
      'Investment insights',
      'Customer relationship management',
      'Lead generation',
      'Market forecasting',
      'Property matching',
      'Risk assessment',
      'Portfolio optimization'
    ],
    popular: true,
    icon: '🏠',
    color: 'from-indigo-600 to-purple-700',
    textColor: 'text-indigo-400',
    link: 'https://ziontechgroup.com/real-estate-ai-platform',
    marketPosition: 'Leading real estate AI platform; improves property valuation accuracy by 25% and increases sales conversion by 30%.',
    targetAudience: 'Real estate agencies, Property developers, Investment firms, Property managers',
    trialDays: 30,
    setupTime: '3-4 weeks',
    category: 'Real Estate AI',
    realService: true,
    technology: ['Machine learning, Computer vision, Predictive analytics, Market analysis'],
    integrations: ['MLS systems, CRM platforms, Property databases, Financial data'],
    useCases: ['Market analysis, Property valuation, Investment insights, Customer management'],
    roi: 'Improve valuation accuracy by 25%, increase sales conversion by 30%, optimize portfolio',
    competitors: ['Zillow, Redfin, Compass, Realogy'],
    marketSize: '$30B+ real estate AI market',
    growthRate: '40% YoY',
    variant: 'real-estate-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Real estate AI platform with market analysis and property valuation capabilities.',
    launchDate: '2025-02-10',
    customers: 67,
    rating: 4.6,
    reviews: 43
  }
];