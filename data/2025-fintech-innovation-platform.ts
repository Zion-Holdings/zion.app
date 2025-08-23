import { ServiceVariant } from '../types/service-variants';

export interface FintechInnovationPlatform2025 {
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

export const fintechInnovationPlatform2025: FintechInnovationPlatform2025[] = [
  {
    id: 'ai-powered-fintech-intelligence-platform',
    name: 'AI-Powered Fintech Intelligence Platform',
    tagline: 'Transform financial services with intelligent automation and insights',
    price: '$449',
    period: '/month',
    description: 'Advanced fintech platform that leverages AI and machine learning to automate financial processes, detect fraud, and provide intelligent financial insights. Features automated trading, risk assessment, and personalized financial recommendations.',
    features: [
      'AI-powered fraud detection and prevention',
      'Automated trading and portfolio management',
      'Intelligent risk assessment and scoring',
      'Personalized financial recommendations',
      'Real-time market analysis and insights',
      'Automated compliance and regulatory reporting',
      'Customer behavior analysis and prediction',
      'Intelligent loan underwriting',
      'Automated payment processing',
      'Financial data analytics and visualization',
      'Multi-currency support and management',
      'Integration with banking systems',
      'Mobile financial applications',
      'Security and encryption',
      'Fintech consulting services'
    ],
    popular: true,
    icon: '💰',
    color: 'from-green-600 via-emerald-600 to-teal-600',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/ai-fintech-intelligence',
    marketPosition: 'Leading AI-powered fintech platform with intelligent automation and comprehensive financial services',
    targetAudience: 'Banks, Credit unions, Investment firms, Insurance companies, Fintech startups, Financial advisors',
    trialDays: 21,
    setupTime: '10-15 business days',
    category: 'Fintech',
    realService: true,
    technology: ['AI/ML, Machine Learning, Financial Technology, Blockchain, Cryptography, Data Analytics, API Integration'],
    integrations: ['Plaid, Stripe, Square, PayPal, Banking APIs, Trading platforms, Insurance systems, REST APIs'],
    useCases: ['Fraud detection, Automated trading, Risk assessment, Financial recommendations, Compliance automation, Payment processing'],
    roi: 'Reduce fraud losses by 90%. Improve trading performance by 35%. Automate 80% of compliance tasks.',
    competitors: ['Stripe, Square, Plaid, Adyen, Checkout.com, Marqeta'],
    marketSize: '$179B fintech market',
    growthRate: '25% annual growth',
    variant: 'ai-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Production-ready AI-powered fintech platform with intelligent automation and comprehensive financial services.',
    launchDate: '2025-03-30',
    customers: 234,
    rating: 4.8,
    reviews: 178
  },
  {
    id: 'blockchain-financial-services-platform',
    name: 'Blockchain Financial Services Platform',
    tagline: 'Next-generation financial services powered by blockchain technology',
    price: '$299',
    period: '/month',
    description: 'Comprehensive blockchain-based financial services platform that enables decentralized finance (DeFi), digital asset management, and cross-border payments. Features smart contracts, tokenization, and decentralized lending.',
    features: [
      'Decentralized finance (DeFi) protocols',
      'Digital asset management and trading',
      'Smart contract automation',
      'Cross-border payment solutions',
      'Tokenization of real-world assets',
      'Decentralized lending and borrowing',
      'Yield farming and staking',
      'DeFi analytics and monitoring',
      'Multi-blockchain support',
      'Security and audit tools',
      'Regulatory compliance features',
      'API integration capabilities',
      'Mobile DeFi applications',
      'Cross-chain interoperability',
      'Blockchain consulting services'
    ],
    popular: false,
    icon: '🔗',
    color: 'from-blue-600 via-indigo-600 to-purple-600',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/blockchain-financial-services',
    marketPosition: 'Leading blockchain financial services platform with comprehensive DeFi and digital asset solutions',
    targetAudience: 'Financial institutions, DeFi protocols, Cryptocurrency exchanges, Investment firms, Technology companies, Blockchain startups',
    trialDays: 14,
    setupTime: '7-10 business days',
    category: 'Blockchain & DeFi',
    realService: true,
    technology: ['Blockchain, Smart Contracts, DeFi Protocols, Tokenization, Cross-chain Technology, Cryptography'],
    integrations: ['Ethereum, Polygon, Solana, Binance Smart Chain, MetaMask, WalletConnect, REST APIs'],
    useCases: ['Decentralized finance, Digital asset management, Cross-border payments, Asset tokenization, DeFi lending, Yield farming'],
    roi: 'Reduce transaction costs by 80%. Increase financial inclusion. Create new revenue streams through DeFi.',
    competitors: ['Uniswap, Aave, Compound, MakerDAO, Curve Finance, SushiSwap'],
    marketSize: '$67B DeFi market',
    growthRate: '92% annual growth',
    variant: 'blockchain-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Production-ready blockchain financial services platform with comprehensive DeFi and digital asset solutions.',
    launchDate: '2025-04-05',
    customers: 156,
    rating: 4.7,
    reviews: 112
  },
  {
    id: 'quantum-financial-modeling-platform',
    name: 'Quantum Financial Modeling Platform',
    tagline: 'Revolutionary financial modeling powered by quantum computing',
    price: '$899',
    period: '/month',
    description: 'Advanced financial modeling platform that leverages quantum computing to solve complex financial problems, optimize portfolios, and perform risk analysis. Features quantum algorithms for pricing, risk assessment, and market simulation.',
    features: [
      'Quantum-powered portfolio optimization',
      'Advanced risk modeling and assessment',
      'Quantum Monte Carlo simulations',
      'Option pricing and derivatives modeling',
      'Market volatility prediction',
      'Quantum machine learning for finance',
      'High-frequency trading optimization',
      'Stress testing and scenario analysis',
      'Regulatory capital calculations',
      'Performance analytics and reporting',
      'Integration with trading systems',
      'Real-time market data processing',
      'Quantum algorithm optimization',
      'Financial modeling tools',
      'Quantum computing consulting'
    ],
    popular: false,
    icon: '⚛️',
    color: 'from-purple-600 via-violet-600 to-indigo-600',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/quantum-financial-modeling',
    marketPosition: 'Leading quantum financial modeling platform with revolutionary computational capabilities',
    targetAudience: 'Investment banks, Hedge funds, Asset management firms, Insurance companies, Research institutions, Government agencies',
    trialDays: 7,
    setupTime: '15-20 business days',
    category: 'Quantum Computing',
    realService: true,
    technology: ['Quantum Computing, Quantum Algorithms, Financial Modeling, Risk Analytics, Portfolio Optimization, High-Performance Computing'],
    integrations: ['IBM Quantum, Google Quantum, Microsoft Azure Quantum, D-Wave, Trading platforms, Financial data feeds'],
    useCases: ['Portfolio optimization, Risk modeling, Option pricing, Market simulation, High-frequency trading, Regulatory compliance'],
    roi: 'Improve portfolio performance by 25%. Reduce risk modeling time by 90%. Enhance trading strategies with quantum insights.',
    competitors: ['IBM Quantum Financial Services, Microsoft Quantum, D-Wave Financial Services, Rigetti Computing'],
    marketSize: '$8B quantum computing market',
    growthRate: '45% annual growth',
    variant: 'quantum-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Production-ready quantum financial modeling platform with revolutionary computational capabilities.',
    launchDate: '2025-04-10',
    customers: 45,
    rating: 4.9,
    reviews: 34
  }
];