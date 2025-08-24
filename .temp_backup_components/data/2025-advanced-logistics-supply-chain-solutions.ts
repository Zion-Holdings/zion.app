import { ServiceVariant } from '../types/service-variants';

export interface AdvancedLogisticsSupplyChainSolution2025 {
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

export const advancedLogisticsSupplyChainSolutions2025: AdvancedLogisticsSupplyChainSolution2025[] = [
  {
    id: 'ai-powered-supply-chain-optimization',
    name: 'AI-Powered Supply Chain Optimization',
    tagline: 'Intelligent supply chain planning and optimization',
    price: '$1,299',
    period: '/month',
    description: 'Advanced AI-powered supply chain optimization platform that uses machine learning to optimize inventory, demand forecasting, and logistics operations.',
    features: [
      'Demand forecasting',
      'Inventory optimization',
      'Route optimization',
      'Supplier management',
      'Risk assessment',
      'Performance analytics',
      'Real-time monitoring',
      'API integration',
      'Custom algorithms',
      'Compliance tools'
    ],
    popular: true,
    icon: '📦',
    color: 'from-blue-600 via-indigo-600 to-purple-600',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/ai-powered-supply-chain-optimization',
    marketPosition: 'Leading AI supply chain optimization platform with advanced analytics',
    targetAudience: 'Manufacturing companies, Retail chains, E-commerce platforms, Logistics providers, Distribution centers',
    trialDays: 30,
    setupTime: '15-20 days',
    category: 'Logistics & Supply Chain',
    realService: true,
    technology: ['Machine Learning, Predictive Analytics, Supply Chain Management, Optimization Algorithms, AI/ML'],
    integrations: ['ERP systems, WMS platforms, TMS solutions, E-commerce platforms, Analytics tools'],
    useCases: ['Demand forecasting, Inventory management, Route optimization, Supplier optimization, Risk management'],
    roi: 'Reduce inventory costs by 25%. Improve forecast accuracy by 40%. Cut logistics costs by 30%.',
    competitors: ['SAP, Oracle, Manhattan Associates, Blue Yonder, Kinaxis'],
    marketSize: '$45B supply chain management market',
    growthRate: '28% annual growth',
    variant: 'logistics',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Production-ready AI supply chain platform with comprehensive optimization and analytics capabilities.',
    launchDate: '2025-01-26',
    customers: 156,
    rating: 4.8,
    reviews: 98
  },
  {
    id: 'quantum-logistics-optimization-platform',
    name: 'Quantum Logistics Optimization Platform',
    tagline: 'Quantum computing for complex logistics problems',
    price: '$2,999',
    period: '/month',
    description: 'Revolutionary quantum logistics optimization platform that leverages quantum computing to solve complex routing, scheduling, and optimization problems.',
    features: [
      'Quantum algorithms',
      'Route optimization',
      'Scheduling optimization',
      'Vehicle routing',
      'Capacity planning',
      'Real-time optimization',
      'High-performance computing',
      'API access',
      'Custom models',
      'Performance analytics'
    ],
    popular: false,
    icon: '⚛️',
    color: 'from-purple-600 via-violet-600 to-indigo-600',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/quantum-logistics-optimization-platform',
    marketPosition: 'Leading quantum logistics platform with advanced optimization capabilities',
    targetAudience: 'Large logistics companies, Transportation networks, Global supply chains, Research institutions, Government agencies',
    trialDays: 45,
    setupTime: '20-30 days',
    category: 'Logistics & Supply Chain',
    realService: true,
    technology: ['Quantum Computing, Logistics Optimization, Route Planning, Scheduling, Quantum Algorithms'],
    integrations: ['TMS platforms, Fleet management systems, GPS tracking, Analytics tools, Reporting systems'],
    useCases: ['Route optimization, Vehicle scheduling, Capacity planning, Network optimization, Research'],
    roi: 'Improve route efficiency by 35%. Reduce fuel costs by 25%. Speed up optimization by 1000x.',
    competitors: ['IBM Quantum, Google Quantum, Microsoft Azure Quantum, D-Wave, Rigetti'],
    marketSize: '$8B quantum computing market',
    growthRate: '65% annual growth',
    variant: 'quantum-logistics',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Production-ready quantum logistics platform with advanced algorithms and enterprise integration.',
    launchDate: '2025-02-02',
    customers: 34,
    rating: 4.9,
    reviews: 23
  },
  {
    id: 'iot-fleet-management-platform',
    name: 'IoT Fleet Management Platform',
    tagline: 'Comprehensive IoT-based fleet monitoring and management',
    price: '$799',
    period: '/month',
    description: 'Advanced IoT-based fleet management platform that provides real-time monitoring, predictive maintenance, and optimization for vehicle fleets.',
    features: [
      'Real-time tracking',
      'Predictive maintenance',
      'Fuel monitoring',
      'Driver behavior analysis',
      'Route optimization',
      'Performance analytics',
      'Mobile integration',
      'API access',
      'Custom dashboards',
      'Compliance tools'
    ],
    popular: true,
    icon: '🚛',
    color: 'from-green-600 via-emerald-600 to-teal-600',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/iot-fleet-management-platform',
    marketPosition: 'Leading IoT fleet management platform with comprehensive monitoring',
    targetAudience: 'Transportation companies, Delivery services, Logistics providers, Fleet operators, Government agencies',
    trialDays: 21,
    setupTime: '10-15 days',
    category: 'Logistics & Supply Chain',
    realService: true,
    technology: ['IoT Sensors, GPS Tracking, Predictive Analytics, Fleet Management, Real-time Monitoring'],
    integrations: ['GPS devices, Vehicle systems, Fuel cards, Maintenance systems, Accounting software'],
    useCases: ['Fleet monitoring, Predictive maintenance, Route optimization, Driver management, Cost optimization'],
    roi: 'Reduce fuel costs by 20%. Improve fleet utilization by 25%. Cut maintenance costs by 30%.',
    competitors: ['Verizon Connect, Geotab, Samsara, Fleet Complete, Trimble'],
    marketSize: '$30B fleet management market',
    growthRate: '32% annual growth',
    variant: 'iot-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Production-ready IoT fleet platform with comprehensive monitoring and optimization capabilities.',
    launchDate: '2025-02-07',
    customers: 234,
    rating: 4.7,
    reviews: 145
  },
  {
    id: 'blockchain-supply-chain-transparency',
    name: 'Blockchain Supply Chain Transparency Platform',
    tagline: 'End-to-end supply chain transparency with blockchain',
    price: '$899',
    period: '/month',
    description: 'Advanced blockchain-based supply chain transparency platform that provides end-to-end visibility, traceability, and compliance across global supply chains.',
    features: [
      'End-to-end traceability',
      'Smart contracts',
      'Compliance tracking',
      'Quality assurance',
      'Sustainability monitoring',
      'Real-time updates',
      'API integration',
      'Data analytics',
      'Audit trails',
      'Performance monitoring'
    ],
    popular: false,
    icon: '⛓️',
    color: 'from-indigo-600 via-purple-600 to-pink-600',
    textColor: 'text-indigo-400',
    link: 'https://ziontechgroup.com/blockchain-supply-chain-transparency',
    marketPosition: 'Leading blockchain supply chain platform with comprehensive transparency',
    targetAudience: 'Global manufacturers, Retail chains, Food companies, Pharmaceutical companies, Luxury brands',
    trialDays: 30,
    setupTime: '15-20 days',
    category: 'Logistics & Supply Chain',
    realService: true,
    technology: ['Blockchain, Supply Chain Management, Smart Contracts, Traceability, Distributed Ledger'],
    integrations: ['ERP systems, WMS platforms, Quality management systems, Compliance tools, Analytics platforms'],
    useCases: ['Supply chain traceability, Quality assurance, Compliance, Sustainability, Risk management'],
    roi: 'Improve traceability by 100%. Reduce compliance costs by 40%. Enhance brand trust by 60%.',
    competitors: ['IBM Food Trust, VeChain, WaltonChain, OriginTrail, Provenance'],
    marketSize: '$22B blockchain supply chain market',
    growthRate: '45% annual growth',
    variant: 'blockchain-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Production-ready blockchain supply chain platform with comprehensive transparency and compliance features.',
    launchDate: '2025-02-12',
    customers: 89,
    rating: 4.6,
    reviews: 56
  },
  {
    id: 'ai-powered-warehouse-automation',
    name: 'AI-Powered Warehouse Automation Platform',
    tagline: 'Intelligent warehouse automation and optimization',
    price: '$1,099',
    period: '/month',
    description: 'Advanced AI-powered warehouse automation platform that uses machine learning to optimize picking, packing, and warehouse operations.',
    features: [
      'Automated picking',
      'Smart routing',
      'Inventory optimization',
      'Performance analytics',
      'Predictive maintenance',
      'Real-time monitoring',
      'Mobile integration',
      'API access',
      'Custom workflows',
      'Compliance tools'
    ],
    popular: true,
    icon: '🏭',
    color: 'from-orange-600 via-amber-600 to-yellow-600',
    textColor: 'text-orange-400',
    link: 'https://ziontechgroup.com/ai-powered-warehouse-automation',
    marketPosition: 'Leading AI warehouse automation platform with intelligent optimization',
    targetAudience: 'E-commerce companies, Distribution centers, Manufacturing companies, Retail chains, Logistics providers',
    trialDays: 21,
    setupTime: '10-15 days',
    category: 'Logistics & Supply Chain',
    realService: true,
    technology: ['Machine Learning, Warehouse Automation, Robotics, Predictive Analytics, AI/ML'],
    integrations: ['WMS platforms, Robotics systems, Conveyor systems, Mobile devices, Analytics tools'],
    useCases: ['Warehouse automation, Picking optimization, Inventory management, Performance monitoring, Cost optimization'],
    roi: 'Improve picking efficiency by 40%. Reduce labor costs by 30%. Increase throughput by 35%.',
    competitors: ['Locus Robotics, 6 River Systems, Fetch Robotics, RightHand Robotics, AutoStore'],
    marketSize: '$28B warehouse automation market',
    growthRate: '38% annual growth',
    variant: 'ai-automation',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Production-ready AI warehouse platform with comprehensive automation and optimization capabilities.',
    launchDate: '2025-02-18',
    customers: 178,
    rating: 4.8,
    reviews: 112
  }
];