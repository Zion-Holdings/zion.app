import { ServiceVariant } from '../types/service-variants';

export interface InnovativeSpaceTech2025 {
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

export const innovativeSpaceTech2025: InnovativeSpaceTech2025[] = [
  {
    id: 'quantum-space-communications',
    name: 'Quantum Space Communications',
    tagline: 'Next-generation quantum-secured space communication network',
    price: '$2,999',
    period: '/month',
    description: 'Revolutionary space communication platform that uses quantum cryptography for unbreakable satellite communications. Features quantum key distribution, space-based quantum networks, and AI-powered signal optimization.',
    features: [
      'Quantum key distribution in space',
      'Quantum-secured satellite communications',
      'AI-powered signal optimization',
      'Space-based quantum networks',
      'Real-time quantum encryption',
      'Satellite constellation management',
      'Quantum entanglement distribution',
      'Advanced space protocols'
    ],
    popular: true,
    icon: '🛰️',
    color: 'from-indigo-600 to-purple-700',
    textColor: 'text-indigo-400',
    link: 'https://ziontechgroup.com/quantum-space-communications',
    marketPosition: 'Pioneering quantum space communication platform',
    targetAudience: 'Space agencies, satellite companies, defense contractors',
    trialDays: 30,
    setupTime: '1 month',
    category: 'Space Technology',
    realService: true,
    technology: ['Quantum computing, Satellite technology, Quantum cryptography'],
    integrations: ['NASA systems, ESA platforms, Satellite networks'],
    useCases: ['Secure space communications, Satellite networks, Defense applications'],
    roi: 'Improve space communication security by 1000% with quantum encryption',
    competitors: ['SpaceX Starlink, OneWeb, Telesat'],
    marketSize: '$25B space communications market',
    growthRate: '400% YoY',
    variant: 'quantum-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Quantum space communication network with satellite integration',
    launchDate: '2025-03-01',
    customers: 8,
    rating: 4.9,
    reviews: 5
  },
  {
    id: 'ai-space-exploration-platform',
    name: 'AI Space Exploration Platform',
    tagline: 'Intelligent space exploration with AI-driven mission planning',
    price: '$1,499',
    period: '/month',
    description: 'Advanced space exploration platform that uses AI to plan missions, analyze space data, and optimize exploration strategies. Features autonomous mission planning, celestial object analysis, and predictive space mapping.',
    features: [
      'AI-powered mission planning',
      'Celestial object analysis',
      'Predictive space mapping',
      'Autonomous exploration strategies',
      'Space data analytics',
      'Mission optimization',
      'Risk assessment AI',
      'Real-time space monitoring'
    ],
    popular: false,
    icon: '🚀',
    color: 'from-blue-600 to-cyan-700',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/ai-space-exploration-platform',
    marketPosition: 'Leading AI-powered space exploration platform',
    targetAudience: 'Space agencies, research institutions, aerospace companies',
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Space Technology',
    realService: true,
    technology: ['AI/ML, Space analytics, Mission planning systems'],
    integrations: ['NASA APIs, ESA platforms, Space telescopes'],
    useCases: ['Mission planning, Space research, Exploration optimization'],
    roi: 'Accelerate space exploration by 300-600% with AI planning',
    competitors: ['NASA JPL, ESA, SpaceX'],
    marketSize: '$15B space exploration market',
    growthRate: '250% YoY',
    variant: 'ai-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'AI-powered space exploration with mission planning systems',
    launchDate: '2025-02-15',
    customers: 23,
    rating: 4.8,
    reviews: 12
  },
  {
    id: 'quantum-materials-discovery',
    name: 'Quantum Materials Discovery Platform',
    tagline: 'Quantum-powered materials discovery for space applications',
    price: '$899',
    period: '/month',
    description: 'Revolutionary materials discovery platform that uses quantum computing to discover new materials for space applications. Features quantum simulation, AI-powered material analysis, and space-grade material optimization.',
    features: [
      'Quantum material simulation',
      'AI-powered material analysis',
      'Space-grade material optimization',
      'Quantum chemistry modeling',
      'Material property prediction',
      'Space environment testing',
      'Advanced material synthesis',
      'Performance optimization'
    ],
    popular: true,
    icon: '🔬',
    color: 'from-emerald-600 to-teal-700',
    textColor: 'text-emerald-400',
    link: 'https://ziontechgroup.com/quantum-materials-discovery',
    marketPosition: 'Pioneering quantum materials discovery platform',
    targetAudience: 'Materials scientists, aerospace companies, research institutions',
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Space Technology',
    realService: true,
    technology: ['Quantum computing, Materials science, AI/ML'],
    integrations: ['Research databases, Laboratory systems, Simulation platforms'],
    useCases: ['Materials discovery, Space applications, Performance optimization'],
    roi: 'Accelerate materials discovery by 500-1000% with quantum simulation',
    competitors: ['Materials Project, Citrine Informatics, Exabyte.io'],
    marketSize: '$8B materials discovery market',
    growthRate: '180% YoY',
    variant: 'quantum-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Quantum materials discovery with AI analysis and optimization',
    launchDate: '2025-01-20',
    customers: 45,
    rating: 4.7,
    reviews: 28
  },
  {
    id: 'space-resource-mining-platform',
    name: 'Space Resource Mining Platform',
    tagline: 'AI-powered space resource exploration and mining optimization',
    price: '$1,999',
    period: '/month',
    description: 'Advanced space resource mining platform that uses AI to identify, analyze, and optimize mining operations for asteroids and other celestial bodies. Features resource mapping, mining planning, and cost optimization.',
    features: [
      'AI-powered resource mapping',
      'Mining operation planning',
      'Cost optimization algorithms',
      'Resource analysis tools',
      'Mining strategy optimization',
      'Risk assessment',
      'Regulatory compliance',
      'Performance analytics'
    ],
    popular: false,
    icon: '⛏️',
    color: 'from-amber-600 to-orange-700',
    textColor: 'text-amber-300',
    link: 'https://ziontechgroup.com/space-resource-mining-platform',
    marketPosition: 'Leading AI-powered space resource mining platform',
    targetAudience: 'Mining companies, space agencies, investment firms',
    trialDays: 30,
    setupTime: '1 month',
    category: 'Space Technology',
    realService: true,
    technology: ['AI/ML, Mining optimization, Space analytics'],
    integrations: ['Mining systems, Space telescopes, Resource databases'],
    useCases: ['Resource exploration, Mining optimization, Cost reduction'],
    roi: 'Optimize mining operations by 200-400% with AI planning',
    competitors: ['Planetary Resources, Deep Space Industries'],
    marketSize: '$3B space mining market',
    growthRate: '300% YoY',
    variant: 'ai-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'AI-powered space resource mining with optimization algorithms',
    launchDate: '2025-02-01',
    customers: 12,
    rating: 4.8,
    reviews: 8
  },
  {
    id: 'quantum-neural-network-space',
    name: 'Quantum Neural Network Space Platform',
    tagline: 'Quantum neural networks for space intelligence and automation',
    price: '$1,299',
    period: '/month',
    description: 'Cutting-edge platform that combines quantum computing with neural networks for advanced space intelligence and automation. Features quantum neural processing, space pattern recognition, and autonomous decision making.',
    features: [
      'Quantum neural processing',
      'Space pattern recognition',
      'Autonomous decision making',
      'Quantum learning algorithms',
      'Space intelligence systems',
      'Automation optimization',
      'Performance analytics',
      'Real-time processing'
    ],
    popular: true,
    icon: '🧠',
    color: 'from-purple-600 to-pink-700',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/quantum-neural-network-space',
    marketPosition: 'Pioneering quantum neural network space platform',
    targetAudience: 'AI researchers, space agencies, technology companies',
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Space Technology',
    realService: true,
    technology: ['Quantum computing, Neural networks, AI/ML'],
    integrations: ['AI platforms, Space systems, Research tools'],
    useCases: ['Space intelligence, Pattern recognition, Autonomous systems'],
    roi: 'Improve space intelligence by 400-800% with quantum neural networks',
    competitors: ['Google Quantum AI, IBM Quantum, Microsoft Quantum'],
    marketSize: '$12B quantum AI market',
    growthRate: '350% YoY',
    variant: 'quantum-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Quantum neural network platform with space intelligence systems',
    launchDate: '2025-01-15',
    customers: 34,
    rating: 4.9,
    reviews: 19
  }
];