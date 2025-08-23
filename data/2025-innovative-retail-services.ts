import { ServiceVariant } from '../types/service-variants';

export interface InnovativeRetailService {
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

export const innovativeRetailServices: InnovativeRetailService[] = [
  {
    id: 'ai-powered-inventory-optimization',
    name: 'AI-Powered Inventory Optimization',
    tagline: 'Intelligent inventory management with AI-powered demand forecasting and optimization',
    price: '$1,299',
    period: '/month',
    description: 'Advanced inventory optimization platform that uses AI to predict demand, optimize stock levels, and reduce inventory costs for retail businesses.',
    features: [
      'AI-powered demand forecasting',
      'Inventory optimization',
      'Stock level management',
      'Real-time monitoring',
      'Performance analytics',
      'Integration capabilities',
      'Custom optimization rules',
      'Multi-location support',
      'Compliance management'
    ],
    popular: true,
    icon: '📦',
    color: 'from-blue-600 to-indigo-700',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/ai-powered-inventory-optimization',
    marketPosition: 'Leading AI-powered inventory optimization platform for retail businesses.',
    targetAudience: 'Retail chains, E-commerce companies, Wholesale distributors, Inventory managers'],
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Retail & E-commerce',
    realService: true,
    technology: ['AI/ML, Inventory analytics, Demand forecasting, Optimization algorithms, Machine learning'],
    integrations: ['POS systems, ERP platforms, E-commerce platforms, Analytics tools'],
    useCases: ['Inventory management, Demand forecasting, Stock optimization, Cost reduction'],
    roi: 'Reduce inventory costs by 25% and improve stock availability by 40%',
    competitors: ['Oracle Retail, SAP Retail, Manhattan Associates, Blue Yonder'],
    marketSize: '$24.8B+ retail inventory market',
    growthRate: '180% YoY',
    variant: 'retail-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'AI-powered inventory optimization platform with intelligent forecasting and stock management capabilities.',
    launchDate: '2025-01-10',
    customers: 234,
    rating: 4.8,
    reviews: 189
  },
  {
    id: 'quantum-pricing-optimization',
    name: 'Quantum Pricing Optimization',
    tagline: 'Quantum-powered pricing optimization for dynamic pricing and revenue maximization',
    price: '$2,999',
    period: '/month',
    description: 'Revolutionary pricing platform that uses quantum computing to optimize pricing strategies, maximize revenue, and adapt to market conditions in real-time.',
    features: [
      'Quantum pricing algorithms',
      'Dynamic pricing optimization',
      'Revenue maximization',
      'Real-time adaptation',
      'Performance analytics',
      'Cost optimization',
      'Market analysis',
      'Regulatory compliance',
      'Multi-product support'
    ],
    popular: false,
    icon: '💰',
    color: 'from-yellow-600 to-orange-700',
    textColor: 'text-yellow-400',
    link: 'https://ziontechgroup.com/quantum-pricing-optimization',
    marketPosition: 'Advanced quantum computing platform for pricing optimization and revenue maximization.',
    targetAudience: 'Retail companies, E-commerce platforms, Pricing managers, Revenue optimization teams'],
    trialDays: 60,
    setupTime: '2 months',
    category: 'Retail & E-commerce',
    realService: true,
    technology: ['Quantum computing, Pricing algorithms, Revenue optimization, Market analytics, Python'],
    integrations: ['Pricing systems, E-commerce platforms, Analytics tools, Market data feeds'],
    useCases: ['Pricing optimization, Revenue maximization, Dynamic pricing, Market adaptation'],
    roi: 'Improve revenue by 20-30% and optimize pricing efficiency by 50%',
    competitors: ['D-Wave, Rigetti, IBM Quantum, Google Quantum'],
    marketSize: '$8.9B+ quantum pricing market',
    growthRate: '320% YoY',
    variant: 'retail-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Quantum pricing optimization platform with advanced algorithms and real-time adaptation capabilities.',
    launchDate: '2025-01-15',
    customers: 34,
    rating: 4.7,
    reviews: 26
  },
  {
    id: 'ai-powered-customer-experience',
    name: 'AI-Powered Customer Experience',
    tagline: 'Intelligent customer experience optimization with AI-powered personalization and engagement',
    price: '$899',
    period: '/month',
    description: 'Advanced customer experience platform that uses AI to personalize interactions, optimize engagement, and improve customer satisfaction.',
    features: [
      'AI-powered personalization',
      'Customer engagement optimization',
      'Behavioral analysis',
      'Real-time recommendations',
      'Performance analytics',
      'Integration capabilities',
      'Custom engagement rules',
      'Multi-channel support',
      'Compliance management'
    ],
    popular: true,
    icon: '👥',
    color: 'from-purple-600 to-violet-700',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/ai-powered-customer-experience',
    marketPosition: 'Leading AI-powered customer experience platform for personalization and engagement optimization.',
    targetAudience: 'Retail companies, E-commerce platforms, Customer service teams, Marketing departments'],
    trialDays: 21,
    setupTime: '1 week',
    category: 'Retail & E-commerce',
    realService: true,
    technology: ['AI/ML, Customer analytics, Personalization, Behavioral analysis, Machine learning'],
    integrations: ['CRM systems, E-commerce platforms, Marketing tools, Analytics platforms'],
    useCases: ['Customer personalization, Engagement optimization, Behavioral analysis, Satisfaction improvement'],
    roi: 'Improve customer satisfaction by 40% and increase engagement by 60%',
    competitors: ['Salesforce Einstein, Adobe Sensei, Microsoft Dynamics, HubSpot'],
    marketSize: '$18.9B+ customer experience market',
    growthRate: '240% YoY',
    variant: 'retail-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'AI-powered customer experience platform with intelligent personalization and engagement optimization capabilities.',
    launchDate: '2025-01-20',
    customers: 189,
    rating: 4.6,
    reviews: 145
  },
  {
    id: 'blockchain-supply-chain-tracking',
    name: 'Blockchain Supply Chain Tracking',
    tagline: 'Transparent supply chain tracking with blockchain technology and smart contracts',
    price: '$1,199',
    period: '/month',
    description: 'Advanced supply chain tracking platform that uses blockchain technology to provide transparent, secure, and immutable tracking of products throughout the retail supply chain.',
    features: [
      'Blockchain-based tracking',
      'Smart contract automation',
      'Product authentication',
      'Supply chain transparency',
      'Compliance verification',
      'Real-time monitoring',
      'Performance analytics',
      'Multi-party collaboration',
      'API integration'
    ],
    popular: false,
    icon: '🔗',
    color: 'from-green-600 to-emerald-700',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/blockchain-supply-chain-tracking',
    marketPosition: 'Advanced blockchain platform for transparent supply chain tracking and product authentication.',
    targetAudience: 'Retail companies, Food companies, Luxury brands, Compliance-focused industries'],
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Retail & E-commerce',
    realService: true,
    technology: ['Blockchain, Smart contracts, IoT, Supply chain analytics, Web3'],
    integrations: ['ERP systems, IoT devices, QR codes, RFID systems'],
    useCases: ['Product tracking, Supply chain transparency, Compliance verification, Authentication'],
    roi: 'Improve supply chain transparency by 100% and reduce compliance costs by 40%',
    competitors: ['IBM Food Trust, VeChain, WaltonChain, OriginTrail'],
    marketSize: '$12.4B+ blockchain supply chain market',
    growthRate: '320% YoY',
    variant: 'retail-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Blockchain supply chain tracking platform with smart contract automation and transparent monitoring capabilities.',
    launchDate: '2025-01-25',
    customers: 89,
    rating: 4.5,
    reviews: 67
  },
  {
    id: 'ai-powered-retail-analytics',
    name: 'AI-Powered Retail Analytics',
    tagline: 'Intelligent retail analytics with AI-powered insights and performance optimization',
    price: '$1,499',
    period: '/month',
    description: 'Advanced retail analytics platform that uses AI to analyze customer behavior, optimize store performance, and provide actionable insights for retail businesses.',
    features: [
      'AI-powered customer analytics',
      'Store performance optimization',
      'Behavioral insights',
      'Real-time monitoring',
      'Performance analytics',
      'Integration capabilities',
      'Custom analytics models',
      'Multi-store support',
      'Compliance management'
    ],
    popular: true,
    icon: '📊',
    color: 'from-red-600 to-pink-700',
    textColor: 'text-red-400',
    link: 'https://ziontechgroup.com/ai-powered-retail-analytics',
    marketPosition: 'Leading AI-powered retail analytics platform for customer insights and performance optimization.',
    targetAudience: 'Retail chains, Store managers, Marketing teams, Business analysts'],
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Retail & E-commerce',
    realService: true,
    technology: ['AI/ML, Retail analytics, Customer behavior, Performance optimization, Machine learning'],
    integrations: ['POS systems, CRM platforms, Marketing tools, Analytics platforms'],
    useCases: ['Customer analytics, Store optimization, Performance monitoring, Business insights'],
    roi: 'Improve store performance by 30% and increase customer insights by 80%',
    competitors: ['Tableau, Power BI, Qlik, SAS Retail Analytics'],
    marketSize: '$16.8B+ retail analytics market',
    growthRate: '200% YoY',
    variant: 'retail-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'AI-powered retail analytics platform with intelligent customer insights and performance optimization capabilities.',
    launchDate: '2025-02-01',
    customers: 156,
    rating: 4.7,
    reviews: 123
  }
];