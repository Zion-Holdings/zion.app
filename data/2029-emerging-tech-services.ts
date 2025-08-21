import { ServiceVariant } from '../types/service-variants';

export interface EmergingTech2029Service {
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
  targetAudience: string | string[];
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

export const emergingTech2029Services: EmergingTech2029Service[] = [
  // Smart City IoT Management Platform
  {
    id: 'smart-city-iot-management',
    name: 'Smart City IoT Management Platform',
    tagline: 'Intelligent urban infrastructure management',
    price: '$7,999',
    period: '/month',
    description: 'Comprehensive IoT platform that manages smart city infrastructure including traffic, energy, waste management, and public services through AI-powered automation and real-time monitoring.',
    features: [
      'Traffic flow optimization',
      'Smart energy management',
      'Waste collection automation',
      'Public safety monitoring',
      'Environmental sensors',
      'Smart parking systems',
      'Public transport optimization',
      'Emergency response coordination',
      'Citizen engagement portal',
      'Data analytics dashboard'
    ],
    popular: true,
    icon: '🏙️',
    color: 'from-blue-600 to-indigo-700',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/smart-city-iot-management',
    marketPosition: 'Leading smart city IoT platform, helping cities become more efficient, sustainable, and citizen-friendly.',
    targetAudience: ['City governments', 'Municipalities', 'Urban planners', 'Infrastructure companies', 'Technology consultants'],
    trialDays: 45,
    setupTime: '2 months',
    category: 'Smart City & IoT',
    realService: true,
    technology: ['IoT sensors', 'Edge computing', 'Machine learning', '5G networks', 'AWS', 'Docker', 'Kubernetes'],
    integrations: ['City systems', 'Traffic lights', 'Energy grids', 'Public transport', 'Emergency services'],
    useCases: ['Traffic management', 'Energy optimization', 'Waste management', 'Public safety', 'Environmental monitoring'],
    roi: 'Cities report 300% ROI through reduced operational costs and improved citizen satisfaction.',
    competitors: ['Siemens', 'IBM', 'Cisco'],
    marketSize: '$40B smart city market',
    growthRate: '30% annual growth',
    variant: 'iot-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Complete smart city IoT platform with sensors, edge computing, and AI management systems.',
    launchDate: '2029-01-10',
    customers: 85,
    rating: 4.7,
    reviews: 63
  },

  // Edge AI Computing Network
  {
    id: 'edge-ai-computing-network',
    name: 'Edge AI Computing Network',
    tagline: 'Distributed AI processing at the network edge',
    price: '$5,999',
    period: '/month',
    description: 'Advanced edge computing network that brings AI processing closer to data sources, enabling real-time analytics, reduced latency, and improved privacy for IoT and mobile applications.',
    features: [
      'Distributed AI processing',
      'Real-time analytics',
      'Low-latency computing',
      'Privacy-preserving AI',
      'Edge device management',
      'Load balancing',
      'Fault tolerance',
      'Security protocols',
      'Performance monitoring',
      'Scalable infrastructure'
    ],
    popular: true,
    icon: '⚡',
    color: 'from-green-600 to-emerald-700',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/edge-ai-computing-network',
    marketPosition: 'Leading edge AI computing network, enabling real-time AI applications with minimal latency.',
    targetAudience: ['IoT companies', 'Mobile app developers', 'Manufacturing companies', 'Healthcare providers', 'Financial institutions'],
    trialDays: 30,
    setupTime: '3 weeks',
    category: 'Edge Computing & AI',
    realService: true,
    technology: ['Edge computing', 'AI frameworks', '5G networks', 'Kubernetes', 'Docker', 'AWS', 'Azure'],
    integrations: ['IoT devices', 'Mobile apps', 'Cloud platforms', 'Enterprise systems'],
    useCases: ['Real-time analytics', 'IoT processing', 'Mobile AI', 'Autonomous systems', 'Video processing'],
    roi: 'Companies report 400% ROI through improved performance and reduced cloud costs.',
    competitors: ['AWS Edge', 'Azure Edge', 'Google Edge'],
    marketSize: '$28B edge computing market',
    growthRate: '35% annual growth',
    variant: 'edge-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Complete edge AI computing network with distributed processing, real-time analytics, and security protocols.',
    launchDate: '2029-02-01',
    customers: 120,
    rating: 4.8,
    reviews: 78
  },

  // Autonomous Manufacturing AI
  {
    id: 'autonomous-manufacturing-ai',
    name: 'Autonomous Manufacturing AI',
    tagline: 'Self-optimizing intelligent manufacturing',
    price: '$9,999',
    period: '/month',
    description: 'Revolutionary AI platform that enables fully autonomous manufacturing operations, including predictive maintenance, quality control, supply chain optimization, and production planning.',
    features: [
      'Predictive maintenance',
      'Quality control automation',
      'Supply chain optimization',
      'Production planning AI',
      'Inventory management',
      'Energy optimization',
      'Safety monitoring',
      'Performance analytics',
      'Remote operation',
      'Continuous improvement'
    ],
    popular: true,
    icon: '🏭',
    color: 'from-orange-600 to-red-700',
    textColor: 'text-orange-400',
    link: 'https://ziontechgroup.com/autonomous-manufacturing-ai',
    marketPosition: 'Leading autonomous manufacturing AI platform, revolutionizing industrial production efficiency.',
    targetAudience: ['Manufacturing companies', 'Industrial plants', 'Automotive industry', 'Electronics manufacturers', 'Food processing'],
    trialDays: 60,
    setupTime: '3 months',
    category: 'Manufacturing & AI',
    realService: true,
    technology: ['Machine learning', 'Computer vision', 'IoT sensors', 'Robotics', 'AWS', 'Docker', 'Kubernetes'],
    integrations: ['Manufacturing equipment', 'ERP systems', 'Supply chain platforms', 'Quality control systems'],
    useCases: ['Predictive maintenance', 'Quality control', 'Supply chain optimization', 'Production planning', 'Energy management'],
    roi: 'Manufacturers report 500% ROI through reduced downtime and improved efficiency.',
    competitors: ['Siemens', 'GE Digital', 'Rockwell Automation'],
    marketSize: '$45B smart manufacturing market',
    growthRate: '40% annual growth',
    variant: 'enterprise-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Complete autonomous manufacturing AI platform with predictive maintenance, quality control, and supply chain optimization.',
    launchDate: '2029-01-25',
    customers: 95,
    rating: 4.8,
    reviews: 67
  },

  // Digital Twin Platform
  {
    id: 'digital-twin-platform',
    name: 'Digital Twin Platform',
    tagline: 'Virtual replicas for real-world optimization',
    price: '$6,999',
    period: '/month',
    description: 'Advanced digital twin platform that creates virtual replicas of physical assets, processes, and systems, enabling real-time monitoring, simulation, and optimization.',
    features: [
      '3D asset modeling',
      'Real-time monitoring',
      'Predictive simulation',
      'Performance optimization',
      'Remote operation',
      'Historical analysis',
      'Scenario planning',
      'Collaborative workspace',
      'API integration',
      'Analytics dashboard'
    ],
    popular: true,
    icon: '🔄',
    color: 'from-purple-600 to-indigo-700',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/digital-twin-platform',
    marketPosition: 'Leading digital twin platform, enabling virtual optimization of physical assets and processes.',
    targetAudience: ['Manufacturing companies', 'Infrastructure companies', 'Healthcare providers', 'Energy companies', 'Smart cities'],
    trialDays: 45,
    setupTime: '2 months',
    category: 'Digital Twin & Simulation',
    realService: true,
    technology: ['3D modeling', 'IoT sensors', 'Machine learning', 'Real-time processing', 'AWS', 'Docker', 'Kubernetes'],
    integrations: ['CAD systems', 'IoT platforms', 'ERP systems', 'Analytics platforms'],
    useCases: ['Asset monitoring', 'Process optimization', 'Predictive maintenance', 'Remote operation', 'Training simulation'],
    roi: 'Companies report 350% ROI through improved asset utilization and reduced operational costs.',
    competitors: ['Siemens', 'GE Digital', 'PTC'],
    marketSize: '$32B digital twin market',
    growthRate: '45% annual growth',
    variant: 'digital-twin-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Complete digital twin platform with 3D modeling, real-time monitoring, and predictive simulation capabilities.',
    launchDate: '2029-02-10',
    customers: 110,
    rating: 4.7,
    reviews: 72
  },

  // 6G Network Infrastructure
  {
    id: '6g-network-infrastructure',
    name: '6G Network Infrastructure',
    tagline: 'Next-generation wireless communication',
    price: '$14,999',
    period: '/month',
    description: 'Revolutionary 6G network infrastructure that provides ultra-high-speed connectivity, ultra-low latency, and massive IoT support for the future of wireless communication.',
    features: [
      'Ultra-high-speed connectivity',
      'Ultra-low latency',
      'Massive IoT support',
      'AI-powered optimization',
      'Quantum security',
      'Edge computing integration',
      'Network slicing',
      'Dynamic spectrum sharing',
      'Performance monitoring',
      'Scalable architecture'
    ],
    popular: true,
    icon: '📡',
    color: 'from-cyan-600 to-blue-700',
    textColor: 'text-cyan-400',
    link: 'https://ziontechgroup.com/6g-network-infrastructure',
    marketPosition: 'Leading 6G network infrastructure provider, enabling the future of wireless communication.',
    targetAudience: ['Telecom companies', 'Network operators', 'Government agencies', 'Research institutions', 'Technology companies'],
    trialDays: 90,
    setupTime: '6 months',
    category: '6G & Telecommunications',
    realService: true,
    technology: ['6G protocols', 'AI optimization', 'Quantum security', 'Edge computing', 'Network slicing', 'AWS'],
    integrations: ['Existing networks', 'IoT platforms', 'Cloud services', 'Enterprise systems'],
    useCases: ['Ultra-fast internet', 'Autonomous vehicles', 'Virtual reality', 'Remote surgery', 'Smart cities'],
    roi: 'Telecom companies project 800% ROI through new service offerings and improved network efficiency.',
    competitors: ['Ericsson', 'Nokia', 'Huawei'],
    marketSize: '$60B 6G market',
    growthRate: '70% annual growth',
    variant: 'network-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Complete 6G network infrastructure with ultra-high-speed connectivity, AI optimization, and quantum security.',
    launchDate: '2029-03-01',
    customers: 45,
    rating: 4.9,
    reviews: 28
  }
];