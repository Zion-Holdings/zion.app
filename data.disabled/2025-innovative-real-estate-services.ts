import { ServiceVariant } from '../types/service-variants';

export interface InnovativeRealEstateService {
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

export const innovativeRealEstateServices: InnovativeRealEstateService[] = [
  {
    id: 'ai-powered-property-valuation',
    name: 'AI-Powered Property Valuation',
    tagline: 'Intelligent property valuation with AI-powered market analysis and pricing optimization',
    price: '$1,599',
    period: '/month',
    description: 'Advanced property valuation platform that uses AI to analyze market data, optimize pricing strategies, and provide accurate property valuations for real estate companies.',
    features: [
      'AI-powered market analysis',
      'Property valuation',
      'Pricing optimization',
      'Real-time monitoring',
      'Performance analytics',
      'Integration capabilities',
      'Custom valuation models',
      'Multi-property support',
      'Compliance management'
    ],
    popular: true,
    icon: '🏠',
    color: 'from-blue-600 to-indigo-700',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/ai-powered-property-valuation',
    marketPosition: 'Leading AI-powered property valuation platform for market analysis and pricing optimization.',
    targetAudience: 'Real estate companies, Property managers, Appraisers, Investment firms'],
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Real Estate & Property',
    realService: true,
    technology: ['AI/ML, Property analytics, Market analysis, Pricing algorithms, Machine learning'],
    integrations: ['MLS systems, Property databases, Analytics tools, CRM platforms'],
    useCases: ['Property valuation, Market analysis, Pricing optimization, Investment analysis'],
    roi: 'Improve valuation accuracy by 35% and reduce time to market by 50%',
    competitors: ['Zillow Zestimate, Redfin Estimate, CoreLogic, Black Knight'],
    marketSize: '$4.2T+ real estate market',
    growthRate: '180% YoY',
    variant: 'real-estate-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'AI-powered property valuation platform with intelligent market analysis and pricing optimization capabilities.',
    launchDate: '2025-01-07',
    customers: 234,
    rating: 4.8,
    reviews: 178
  },
  {
    id: 'quantum-real-estate-optimization',
    name: 'Quantum Real Estate Optimization',
    tagline: 'Quantum-powered real estate optimization for portfolio management and investment strategies',
    price: '$5,999',
    period: '/month',
    description: 'Revolutionary real estate optimization platform that uses quantum computing to optimize investment portfolios, analyze market trends, and maximize returns for real estate investors.',
    features: [
      'Quantum optimization algorithms',
      'Portfolio optimization',
      'Investment strategy analysis',
      'Real-time adaptation',
      'Performance analytics',
      'Cost optimization',
      'Risk analysis',
      'Regulatory compliance',
      'Multi-portfolio support'
    ],
    popular: false,
    icon: '⚡',
    color: 'from-yellow-600 to-orange-700',
    textColor: 'text-yellow-400',
    link: 'https://ziontechgroup.com/quantum-real-estate-optimization',
    marketPosition: 'Advanced quantum computing platform for real estate portfolio optimization and investment strategy analysis.',
    targetAudience: 'Real estate investment firms, Portfolio managers, Institutional investors, Wealth managers'],
    trialDays: 60,
    setupTime: '2 months',
    category: 'Real Estate & Property',
    realService: true,
    technology: ['Quantum computing, Portfolio optimization, Investment analysis, Risk algorithms, Python'],
    integrations: ['Investment platforms, Portfolio systems, Analytics tools, Risk management systems'],
    useCases: ['Portfolio optimization, Investment analysis, Risk management, Return maximization'],
    roi: 'Improve portfolio returns by 25% and reduce risk by 30%',
    competitors: ['D-Wave, Rigetti, IBM Quantum, Google Quantum'],
    marketSize: '$8.9B+ quantum real estate market',
    growthRate: '380% YoY',
    variant: 'real-estate-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Quantum real estate optimization platform with advanced algorithms and portfolio optimization capabilities.',
    launchDate: '2025-01-13',
    customers: 28,
    rating: 4.7,
    reviews: 21
  },
  {
    id: 'ai-powered-property-management',
    name: 'AI-Powered Property Management',
    tagline: 'Intelligent property management with AI-powered automation and tenant optimization',
    price: '$1,299',
    period: '/month',
    description: 'Advanced property management platform that uses AI to automate operations, optimize tenant experiences, and improve property performance for real estate companies.',
    features: [
      'AI-powered automation',
      'Tenant optimization',
      'Property performance',
      'Real-time monitoring',
      'Performance analytics',
      'Integration capabilities',
      'Custom automation rules',
      'Multi-property support',
      'Compliance management'
    ],
    popular: true,
    icon: '🏢',
    color: 'from-green-600 to-emerald-700',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/ai-powered-property-management',
    marketPosition: 'Leading AI-powered property management platform for automation and tenant optimization.',
    targetAudience: 'Property management companies, Real estate firms, Landlords, Building managers'],
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Real Estate & Property',
    realService: true,
    technology: ['AI/ML, Property management, Automation, Tenant analytics, Machine learning'],
    integrations: ['Property management systems, CRM platforms, Payment systems, Analytics tools'],
    useCases: ['Property automation, Tenant management, Performance optimization, Operational efficiency'],
    roi: 'Reduce operational costs by 30% and improve tenant satisfaction by 45%',
    competitors: ['AppFolio, Buildium, Rent Manager, Propertyware'],
    marketSize: '$18.7B+ property management market',
    growthRate: '200% YoY',
    variant: 'real-estate-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'AI-powered property management platform with intelligent automation and tenant optimization capabilities.',
    launchDate: '2025-01-17',
    customers: 189,
    rating: 4.6,
    reviews: 145
  },
  {
    id: 'blockchain-property-tracking',
    name: 'Blockchain Property Tracking',
    tagline: 'Transparent property tracking with blockchain technology and smart contracts',
    price: '$1,799',
    period: '/month',
    description: 'Advanced property tracking platform that uses blockchain technology to provide transparent, secure, and immutable tracking of property transactions and ownership.',
    features: [
      'Blockchain-based tracking',
      'Smart contract automation',
      'Property authentication',
      'Transaction transparency',
      'Compliance verification',
      'Real-time monitoring',
      'Performance analytics',
      'Multi-party collaboration',
      'API integration'
    ],
    popular: false,
    icon: '🔗',
    color: 'from-purple-600 to-violet-700',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/blockchain-property-tracking',
    marketPosition: 'Advanced blockchain platform for transparent property tracking and transaction verification.',
    targetAudience: 'Real estate companies, Title companies, Government agencies, Compliance-focused organizations'],
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Real Estate & Property',
    realService: true,
    technology: ['Blockchain, Smart contracts, Property tracking, Transaction verification, Web3'],
    integrations: ['Property databases, Title systems, Government databases, Payment platforms'],
    useCases: ['Property tracking, Transaction verification, Compliance management, Ownership verification'],
    roi: 'Improve transaction transparency by 100% and reduce fraud by 60%',
    competitors: ['Propy, Ubitquity, RealBlocks, Harbor'],
    marketSize: '$14.2B+ blockchain real estate market',
    growthRate: '320% YoY',
    variant: 'real-estate-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Blockchain property tracking platform with smart contract automation and transparent monitoring capabilities.',
    launchDate: '2025-01-23',
    customers: 78,
    rating: 4.5,
    reviews: 56
  },
  {
    id: 'ai-powered-market-prediction',
    name: 'AI-Powered Market Prediction',
    tagline: 'Intelligent market prediction with AI-powered forecasting and trend analysis',
    price: '$1,899',
    period: '/month',
    description: 'Advanced market prediction platform that uses AI to forecast real estate trends, analyze market conditions, and provide investment insights for real estate professionals.',
    features: [
      'AI-powered forecasting',
      'Trend analysis',
      'Market insights',
      'Real-time monitoring',
      'Performance analytics',
      'Integration capabilities',
      'Custom prediction models',
      'Multi-market support',
      'Compliance management'
    ],
    popular: true,
    icon: '📈',
    color: 'from-red-600 to-pink-700',
    textColor: 'text-red-400',
    link: 'https://ziontechgroup.com/ai-powered-market-prediction',
    marketPosition: 'Leading AI-powered market prediction platform for forecasting and trend analysis.',
    targetAudience: 'Real estate investors, Market analysts, Investment firms, Financial advisors'],
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Real Estate & Property',
    realService: true,
    technology: ['AI/ML, Market forecasting, Trend analysis, Predictive modeling, Machine learning'],
    integrations: ['Market data feeds, Analytics platforms, Investment tools, Financial databases'],
    useCases: ['Market forecasting, Trend analysis, Investment insights, Risk assessment'],
    roi: 'Improve investment decisions by 40% and increase returns by 25%',
    competitors: ['CoreLogic, Black Knight, First American, Real Capital Analytics'],
    marketSize: '$22.8B+ real estate analytics market',
    growthRate: '240% YoY',
    variant: 'real-estate-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'AI-powered market prediction platform with intelligent forecasting and trend analysis capabilities.',
    launchDate: '2025-01-29',
    customers: 156,
    rating: 4.7,
    reviews: 123
  }
];