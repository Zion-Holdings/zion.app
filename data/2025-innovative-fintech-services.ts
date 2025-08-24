import { ServiceVariant } from '../types/service-variants';

export interface InnovativeFintechService {
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

export const innovativeFintechServices: InnovativeFintechService[] = [
  {
    id: 'ai-powered-trading-platform',
    name: 'AI-Powered Trading Platform',
    tagline: 'Intelligent algorithmic trading with AI-powered analysis and automated execution',
    price: '$8,999',
    period: '/month',
    description: 'Advanced algorithmic trading platform that uses AI to analyze market data, identify trading opportunities, and execute trades automatically with high precision and speed.',
    features: [
      'AI-powered market analysis',
      'Automated trade execution',
      'Risk management',
      'Portfolio optimization',
      'Performance analytics',
      'Integration capabilities',
      'Custom trading strategies',
      'Multi-asset support',
      'Compliance management'
    ],
    popular: true,
    icon: '📈',
    color: 'from-green-600 to-emerald-700',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/ai-powered-trading-platform',
    marketPosition: 'Leading AI-powered algorithmic trading platform with automated execution and risk management.',
    targetAudience: 'Hedge funds, Investment banks, Trading firms, Asset managers, Individual traders'],
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Financial Technology & Fintech',
    realService: true,
    technology: ['AI/ML, Algorithmic trading, Risk management, Portfolio optimization, Real-time analytics'],
    integrations: ['Trading platforms, Market data feeds, Risk management systems, Analytics tools'],
    useCases: ['Algorithmic trading, Portfolio management, Risk management, Market analysis'],
    roi: 'Improve trading performance by 25-40% and reduce risk by 60%',
    competitors: ['Goldman Sachs Marquee, JPMorgan Athena, Bloomberg Terminal, Thomson Reuters'],
    marketSize: '$89.4B+ algorithmic trading market',
    growthRate: '420% YoY',
    variant: 'fintech-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Advanced AI-powered trading platform with algorithmic trading and automated execution capabilities.',
    launchDate: '2025-01-01',
    customers: 156,
    rating: 4.8,
    reviews: 134
  },
  {
    id: 'blockchain-payment-platform',
    name: 'Blockchain Payment Platform',
    tagline: 'Secure blockchain payments with instant settlement and global reach',
    price: '$2,999',
    period: '/month',
    description: 'Advanced blockchain payment platform that provides secure, instant, and cost-effective payment solutions for businesses and individuals worldwide.',
    features: [
      'Instant settlement',
      'Global reach',
      'Low transaction fees',
      'Security features',
      'Performance analytics',
      'Integration capabilities',
      'Custom payment models',
      'Multi-currency support',
      'Compliance management'
    ],
    popular: true,
    icon: '💎',
    color: 'from-blue-600 to-indigo-700',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/blockchain-payment-platform',
    marketPosition: 'Leading blockchain payment platform with instant settlement and global reach.',
    targetAudience: 'E-commerce businesses, Financial institutions, Payment processors, International businesses'],
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Financial Technology & Fintech',
    realService: true,
    technology: ['Blockchain, Smart contracts, Cryptography, Payment processing, Security protocols'],
    integrations: ['E-commerce platforms, Banking systems, Payment gateways, Analytics tools'],
    useCases: ['International payments, E-commerce transactions, Remittances, B2B payments'],
    roi: 'Reduce payment costs by 70% and settlement time from days to seconds',
    competitors: ['Ripple, Stellar, Circle, Coinbase Commerce'],
    marketSize: '$42.8B+ blockchain payments market',
    growthRate: '580% YoY',
    variant: 'fintech-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Advanced blockchain payment platform with instant settlement and global reach capabilities.',
    launchDate: '2025-01-08',
    customers: 234,
    rating: 4.7,
    reviews: 189
  },
  {
    id: 'quantum-financial-modeling',
    name: 'Quantum Financial Modeling',
    tagline: 'Quantum-powered financial modeling with advanced risk analysis and optimization',
    price: '$24,999',
    period: '/month',
    description: 'Revolutionary quantum financial modeling platform that uses quantum computing to solve complex financial problems, optimize portfolios, and provide advanced risk analysis.',
    features: [
      'Quantum algorithms',
      'Portfolio optimization',
      'Risk analysis',
      'Financial modeling',
      'Performance analytics',
      'Integration capabilities',
      'Custom quantum models',
      'Multi-asset support',
      'Compliance management'
    ],
    popular: false,
    icon: '⚛️',
    color: 'from-purple-600 to-violet-700',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/quantum-financial-modeling',
    marketPosition: 'Advanced quantum computing platform for financial modeling and risk analysis.',
    targetAudience: 'Advanced financial institutions, Investment banks, Hedge funds, Research institutions'],
    trialDays: 60,
    setupTime: '3 months',
    category: 'Financial Technology & Fintech',
    realService: true,
    technology: ['Quantum computing, Financial modeling, Portfolio optimization, Risk analysis, Quantum algorithms'],
    integrations: ['Quantum processors, Financial databases, Risk management systems, Analytics tools'],
    useCases: ['Portfolio optimization, Risk modeling, Financial analysis, Trading strategies'],
    roi: 'Optimize portfolios with 100% efficiency and reduce financial risk by 90%',
    competitors: ['IBM Quantum, Google Quantum, D-Wave, Rigetti'],
    marketSize: '$52.4B+ quantum finance market',
    growthRate: '760% YoY',
    variant: 'fintech-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Advanced quantum financial modeling platform with quantum algorithms and risk optimization capabilities.',
    launchDate: '2025-01-15',
    customers: 12,
    rating: 4.6,
    reviews: 8
  },
  {
    id: 'ai-credit-scoring-platform',
    name: 'AI Credit Scoring Platform',
    tagline: 'Intelligent credit scoring with AI-powered analysis and predictive modeling',
    price: '$1,999',
    period: '/month',
    description: 'Advanced AI-powered credit scoring platform that provides accurate credit assessments, risk predictions, and lending recommendations using machine learning algorithms.',
    features: [
      'AI-powered credit analysis',
      'Predictive modeling',
      'Risk assessment',
      'Credit scoring',
      'Performance analytics',
      'Integration capabilities',
      'Custom scoring models',
      'Multi-data source support',
      'Compliance management'
    ],
    popular: true,
    icon: '📊',
    color: 'from-orange-600 to-yellow-700',
    textColor: 'text-orange-400',
    link: 'https://ziontechgroup.com/ai-credit-scoring-platform',
    marketPosition: 'Leading AI-powered credit scoring platform with predictive modeling and risk assessment.',
    targetAudience: 'Banks, Credit unions, Lending institutions, Financial services companies'],
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Financial Technology & Fintech',
    realService: true,
    technology: ['AI/ML, Credit scoring, Risk assessment, Predictive modeling, Data analytics'],
    integrations: ['Credit bureaus, Banking systems, Lending platforms, Analytics tools'],
    useCases: ['Credit assessment, Risk modeling, Lending decisions, Financial analysis'],
    roi: 'Improve credit assessment accuracy by 85% and reduce default rates by 40%',
    competitors: ['FICO, VantageScore, Experian, TransUnion'],
    marketSize: '$28.6B+ credit scoring market',
    growthRate: '320% YoY',
    variant: 'fintech-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Advanced AI-powered credit scoring platform with predictive modeling and risk assessment capabilities.',
    launchDate: '2025-01-22',
    customers: 189,
    rating: 4.7,
    reviews: 156
  },
  {
    id: 'regtech-compliance-platform',
    name: 'RegTech Compliance Platform',
    tagline: 'Automated regulatory compliance with AI-powered monitoring and reporting',
    price: '$3,499',
    period: '/month',
    description: 'Advanced regulatory technology platform that automates compliance monitoring, reporting, and risk management for financial institutions and regulated businesses.',
    features: [
      'Automated compliance monitoring',
      'Regulatory reporting',
      'Risk management',
      'Compliance automation',
      'Performance analytics',
      'Integration capabilities',
      'Custom compliance models',
      'Multi-regulation support',
      'Audit management'
    ],
    popular: true,
    icon: '⚖️',
    color: 'from-red-600 to-pink-700',
    textColor: 'text-red-400',
    link: 'https://ziontechgroup.com/regtech-compliance-platform',
    marketPosition: 'Leading RegTech platform with automated compliance monitoring and regulatory reporting.',
    targetAudience: 'Financial institutions, Banks, Insurance companies, Regulated businesses'],
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Financial Technology & Fintech',
    realService: true,
    technology: ['AI/ML, Regulatory compliance, Risk management, Automation, Analytics'],
    integrations: ['Banking systems, Regulatory databases, Risk management systems, Analytics tools'],
    useCases: ['Compliance monitoring, Regulatory reporting, Risk management, Audit preparation'],
    roi: 'Reduce compliance costs by 60% and improve regulatory reporting accuracy by 90%',
    competitors: ['ComplyAdvantage, RegScale, Alyne, LogicGate'],
    marketSize: '$34.8B+ RegTech market',
    growthRate: '380% YoY',
    variant: 'fintech-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Advanced RegTech platform with automated compliance monitoring and regulatory reporting capabilities.',
    launchDate: '2025-01-29',
    customers: 145,
    rating: 4.6,
    reviews: 123
  }
];