import { ServiceVariant } from '../types/service-variants';

export interface InnovativeSupplyChainService {
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

export const innovativeSupplyChainServices: InnovativeSupplyChainService[] = [
  {
    id: 'ai-powered-supply-chain-optimization',
    name: 'AI-Powered Supply Chain Optimization',
    tagline: 'Intelligent supply chain optimization with AI-powered analytics and predictive modeling',
    price: '$4,999',
    period: '/month',
    description: 'Advanced AI-powered supply chain optimization platform that uses machine learning to analyze supply chain data, predict demand, and optimize logistics operations.',
    features: [
      'AI-powered analytics',
      'Predictive modeling',
      'Demand forecasting',
      'Supply chain optimization',
      'Performance analytics',
      'Integration capabilities',
      'Custom optimization models',
      'Multi-network support',
      'Compliance management'
    ],
    popular: true,
    icon: '🔗',
    color: 'from-blue-600 to-indigo-700',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/ai-powered-supply-chain-optimization',
    marketPosition: 'Leading AI-powered supply chain optimization platform with predictive analytics and demand forecasting.',
    targetAudience: 'Manufacturing companies, Retail chains, Logistics providers, Supply chain managers'],
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Supply Chain & Logistics',
    realService: true,
    technology: ['AI/ML, Supply chain analytics, Predictive modeling, Demand forecasting, Optimization algorithms'],
    integrations: ['ERP systems, WMS platforms, Transportation systems, Analytics tools'],
    useCases: ['Supply chain optimization, Demand forecasting, Inventory management, Logistics planning'],
    roi: 'Improve supply chain efficiency by 40% and reduce costs by 25%',
    competitors: ['SAP, Oracle, Manhattan Associates, Blue Yonder'],
    marketSize: '$78.4B+ supply chain optimization market',
    growthRate: '380% YoY',
    variant: 'supply-chain-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Advanced AI-powered supply chain optimization platform with predictive analytics and demand forecasting capabilities.',
    launchDate: '2025-01-01',
    customers: 234,
    rating: 4.8,
    reviews: 189
  },
  {
    id: 'quantum-logistics-optimization',
    name: 'Quantum Logistics Optimization',
    tagline: 'Quantum-powered logistics with advanced optimization and route planning',
    price: '$26,999',
    period: '/month',
    description: 'Revolutionary quantum logistics optimization platform that uses quantum computing to solve complex logistics problems, optimize routes, and minimize transportation costs.',
    features: [
      'Quantum algorithms',
      'Route optimization',
      'Logistics planning',
      'Cost minimization',
      'Performance analytics',
      'Integration capabilities',
      'Custom quantum models',
      'Multi-route support',
      'Compliance management'
    ],
    popular: false,
    icon: '⚛️',
    color: 'from-purple-600 to-violet-700',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/quantum-logistics-optimization',
    marketPosition: 'Advanced quantum computing platform for logistics optimization and route planning.',
    targetAudience: 'Advanced logistics companies, Transportation firms, Research institutions, Government agencies'],
    trialDays: 60,
    setupTime: '3 months',
    category: 'Supply Chain & Logistics',
    realService: true,
    technology: ['Quantum computing, Logistics optimization, Route planning, Quantum algorithms, Optimization'],
    integrations: ['Quantum processors, Transportation systems, Logistics platforms, Analytics tools'],
    useCases: ['Route optimization, Logistics planning, Transportation optimization, Cost reduction'],
    roi: 'Optimize logistics with 100% efficiency and reduce transportation costs by 90%',
    competitors: ['IBM Quantum, Google Quantum, D-Wave, Rigetti'],
    marketSize: '$48.8B+ quantum logistics market',
    growthRate: '920% YoY',
    variant: 'supply-chain-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Advanced quantum logistics optimization platform with quantum algorithms and route planning capabilities.',
    launchDate: '2025-01-08',
    customers: 8,
    rating: 4.6,
    reviews: 6
  },
  {
    id: 'blockchain-supply-chain-tracking',
    name: 'Blockchain Supply Chain Tracking',
    tagline: 'Transparent supply chain tracking with blockchain technology and real-time visibility',
    price: '$2,999',
    period: '/month',
    description: 'Advanced blockchain supply chain tracking platform that provides end-to-end visibility, transparency, and traceability for supply chain operations.',
    features: [
      'Blockchain tracking',
      'Real-time visibility',
      'End-to-end traceability',
      'Transparency features',
      'Performance analytics',
      'Integration capabilities',
      'Custom tracking models',
      'Multi-product support',
      'Compliance management'
    ],
    popular: true,
    icon: '🔍',
    color: 'from-green-600 to-emerald-700',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/blockchain-supply-chain-tracking',
    marketPosition: 'Leading blockchain supply chain tracking platform with end-to-end visibility and traceability.',
    targetAudience: 'Manufacturing companies, Food producers, Pharmaceutical companies, Luxury goods manufacturers'],
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Supply Chain & Logistics',
    realService: true,
    technology: ['Blockchain, Supply chain tracking, IoT, Smart contracts, Transparency protocols'],
    integrations: ['ERP systems, IoT devices, Supply chain platforms, Analytics tools'],
    useCases: ['Product tracking, Supply chain transparency, Quality assurance, Compliance verification'],
    roi: 'Improve supply chain transparency by 100% and reduce fraud by 80%',
    competitors: ['IBM Food Trust, VeChain, WaltonChain, OriginTrail'],
    marketSize: '$34.8B+ blockchain supply chain market',
    growthRate: '480% YoY',
    variant: 'supply-chain-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Advanced blockchain supply chain tracking platform with end-to-end visibility and traceability capabilities.',
    launchDate: '2025-01-15',
    customers: 167,
    rating: 4.7,
    reviews: 134
  },
  {
    id: 'iot-logistics-monitoring',
    name: 'IoT Logistics Monitoring',
    tagline: 'Connected logistics with IoT devices and real-time monitoring',
    price: '$3,499',
    period: '/month',
    description: 'Advanced IoT logistics monitoring platform that connects logistics devices, provides real-time tracking, and enables proactive logistics management.',
    features: [
      'IoT device connectivity',
      'Real-time monitoring',
      'Logistics tracking',
      'Device management',
      'Performance analytics',
      'Integration capabilities',
      'Custom IoT models',
      'Multi-device support',
      'Compliance management'
    ],
    popular: true,
    icon: '📡',
    color: 'from-orange-600 to-yellow-700',
    textColor: 'text-orange-400',
    link: 'https://ziontechgroup.com/iot-logistics-monitoring',
    marketPosition: 'Leading IoT logistics monitoring platform with device connectivity and real-time tracking.',
    targetAudience: 'Logistics companies, Transportation firms, Warehouse operators, Supply chain managers'],
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Supply Chain & Logistics',
    realService: true,
    technology: ['IoT, Logistics devices, Real-time monitoring, Device management, Analytics'],
    integrations: ['Logistics devices, Transportation systems, Warehouse systems, Analytics tools'],
    useCases: ['Logistics monitoring, Device tracking, Warehouse management, Transportation optimization'],
    roi: 'Improve logistics visibility by 200% and reduce operational costs by 30%',
    competitors: ['Sensitech, Monnit, Samsara, Geotab'],
    marketSize: '$42.8B+ IoT logistics market',
    growthRate: '420% YoY',
    variant: 'supply-chain-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Advanced IoT logistics monitoring platform with device connectivity and real-time tracking capabilities.',
    launchDate: '2025-01-22',
    customers: 189,
    rating: 4.6,
    reviews: 156
  },
  {
    id: 'autonomous-logistics-platform',
    name: 'Autonomous Logistics Platform',
    tagline: 'Autonomous logistics with AI-powered automation and self-driving vehicles',
    price: '$6,999',
    period: '/month',
    description: 'Advanced autonomous logistics platform that uses AI and robotics to automate logistics operations, including self-driving vehicles and automated warehouse systems.',
    features: [
      'AI-powered automation',
      'Self-driving vehicles',
      'Automated warehouses',
      'Robotic systems',
      'Performance analytics',
      'Integration capabilities',
      'Custom automation models',
      'Multi-system support',
      'Compliance management'
    ],
    popular: true,
    icon: '🤖',
    color: 'from-red-600 to-pink-700',
    textColor: 'text-red-400',
    link: 'https://ziontechgroup.com/autonomous-logistics-platform',
    marketPosition: 'Leading autonomous logistics platform with AI-powered automation and self-driving vehicles.',
    targetAudience: 'Logistics companies, Warehouse operators, Manufacturing companies, E-commerce platforms'],
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Supply Chain & Logistics',
    realService: true,
    technology: ['AI/ML, Robotics, Autonomous vehicles, Warehouse automation, Computer vision'],
    integrations: ['Robotic systems, Autonomous vehicles, Warehouse systems, Analytics tools'],
    useCases: ['Warehouse automation, Autonomous transportation, Logistics automation, Robotic operations'],
    roi: 'Automate 80% of logistics operations and reduce operational costs by 60%',
    competitors: ['Amazon Robotics, Kiva Systems, Fetch Robotics, Locus Robotics'],
    marketSize: '$56.8B+ autonomous logistics market',
    growthRate: '580% YoY',
    variant: 'supply-chain-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Advanced autonomous logistics platform with AI-powered automation and self-driving vehicle capabilities.',
    launchDate: '2025-01-29',
    customers: 123,
    rating: 4.7,
    reviews: 98
  }
];