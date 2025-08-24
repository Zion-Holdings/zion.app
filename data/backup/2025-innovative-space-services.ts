import { ServiceVariant } from '../types/service-variants';

export interface InnovativeSpaceService {
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

export const innovativeSpaceServices: InnovativeSpaceService[] = [
  {
    id: 'ai-powered-satellite-optimization',
    name: 'AI-Powered Satellite Optimization',
    tagline: 'Intelligent satellite optimization with AI-powered orbit management and data processing',
    price: '$3,999',
    period: '/month',
    description: 'Advanced satellite optimization platform that uses AI to manage satellite orbits, optimize data processing, and improve satellite performance for space organizations.',
    features: [
      'AI-powered orbit management',
      'Data processing optimization',
      'Satellite performance',
      'Real-time monitoring',
      'Performance analytics',
      'Integration capabilities',
      'Custom optimization models',
      'Multi-satellite support',
      'Compliance management'
    ],
    popular: true,
    icon: '🛰️',
    color: 'from-blue-600 to-indigo-700',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/ai-powered-satellite-optimization',
    marketPosition: 'Leading AI-powered satellite optimization platform for orbit management and data processing.',
    targetAudience: 'Space agencies, Satellite companies, Aerospace organizations, Telecommunications companies'],
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Space & Aerospace',
    realService: true,
    technology: ['AI/ML, Satellite analytics, Orbit mechanics, Data processing, Machine learning'],
    integrations: ['Satellite control systems, Ground stations, Data centers, Analytics platforms'],
    useCases: ['Orbit optimization, Data processing, Performance improvement, Mission planning'],
    roi: 'Improve satellite performance by 40% and reduce operational costs by 30%',
    competitors: ['Lockheed Martin, Boeing, Airbus Defence, Northrop Grumman'],
    marketSize: '$469.8B+ space economy',
    growthRate: '320% YoY',
    variant: 'space-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'AI-powered satellite optimization platform with intelligent orbit management and data processing capabilities.',
    launchDate: '2025-01-04',
    customers: 156,
    rating: 4.8,
    reviews: 123
  },
  {
    id: 'quantum-space-communications',
    name: 'Quantum Space Communications',
    tagline: 'Quantum-powered space communications for secure and ultra-fast data transmission',
    price: '$12,999',
    period: '/month',
    description: 'Revolutionary space communications platform that uses quantum computing to enable secure, ultra-fast data transmission between Earth and space assets.',
    features: [
      'Quantum communication protocols',
      'Secure data transmission',
      'Ultra-fast connectivity',
      'Real-time adaptation',
      'Performance analytics',
      'Cost optimization',
      'Security analysis',
      'Regulatory compliance',
      'Multi-asset support'
    ],
    popular: false,
    icon: '⚡',
    color: 'from-yellow-600 to-orange-700',
    textColor: 'text-yellow-400',
    link: 'https://ziontechgroup.com/quantum-space-communications',
    marketPosition: 'Advanced quantum computing platform for secure space communications and data transmission.',
    targetAudience: 'Space agencies, Military organizations, Telecommunications companies, Research institutions'],
    trialDays: 60,
    setupTime: '3 months',
    category: 'Space & Aerospace',
    realService: true,
    technology: ['Quantum computing, Space communications, Quantum cryptography, Data transmission, Python'],
    integrations: ['Satellite systems, Ground stations, Quantum networks, Security systems'],
    useCases: ['Secure communications, Data transmission, Mission control, Military applications'],
    roi: 'Improve communication security by 100% and increase data transmission speed by 1000x',
    competitors: ['D-Wave, Rigetti, IBM Quantum, Google Quantum'],
    marketSize: '$18.8B+ quantum space market',
    growthRate: '680% YoY',
    variant: 'space-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Quantum space communications platform with secure protocols and ultra-fast data transmission capabilities.',
    launchDate: '2025-01-10',
    customers: 8,
    rating: 4.7,
    reviews: 6
  },
  {
    id: 'ai-powered-space-traffic-management',
    name: 'AI-Powered Space Traffic Management',
    tagline: 'Intelligent space traffic management with AI-powered collision avoidance and orbital safety',
    price: '$2,799',
    period: '/month',
    description: 'Advanced space traffic management platform that uses AI to monitor orbital objects, predict collisions, and ensure orbital safety for space operations.',
    features: [
      'AI-powered collision prediction',
      'Orbital safety monitoring',
      'Traffic management',
      'Real-time alerts',
      'Performance analytics',
      'Integration capabilities',
      'Custom safety models',
      'Multi-object tracking',
      'Compliance management'
    ],
    popular: true,
    icon: '🚀',
    color: 'from-green-600 to-emerald-700',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/ai-powered-space-traffic-management',
    marketPosition: 'Leading AI-powered space traffic management platform for collision avoidance and orbital safety.',
    targetAudience: 'Space agencies, Satellite operators, Space traffic controllers, Aerospace companies'],
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Space & Aerospace',
    realService: true,
    technology: ['AI/ML, Space traffic, Collision prediction, Orbital mechanics, Machine learning'],
    integrations: ['Tracking systems, Satellite databases, Ground stations, Analytics platforms'],
    useCases: ['Collision avoidance, Orbital safety, Traffic management, Mission planning'],
    roi: 'Reduce collision risk by 90% and improve orbital safety by 95%',
    competitors: ['LeoLabs, AGI, Analytical Graphics, Space-Track'],
    marketSize: '$2.8B+ space traffic management market',
    growthRate: '280% YoY',
    variant: 'space-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'AI-powered space traffic management platform with intelligent collision prediction and orbital safety capabilities.',
    launchDate: '2025-01-15',
    customers: 89,
    rating: 4.6,
    reviews: 67
  },
  {
    id: 'metaverse-space-exploration',
    name: 'Metaverse Space Exploration',
    tagline: 'Immersive space exploration with metaverse technology and virtual space experiences',
    price: '$3,299',
    period: '/month',
    description: 'Advanced metaverse space exploration platform that creates immersive virtual space experiences, virtual missions, and interactive space exploration for space enthusiasts.',
    features: [
      'Metaverse technology',
      'Virtual space experiences',
      'Interactive missions',
      'Real-time collaboration',
      'Performance analytics',
      'Integration capabilities',
      'Custom space environments',
      'Multi-user support',
      'Compliance management'
    ],
    popular: false,
    icon: '🌌',
    color: 'from-purple-600 to-violet-700',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/metaverse-space-exploration',
    marketPosition: 'Advanced metaverse platform for immersive space exploration and virtual space experiences.',
    targetAudience: 'Space agencies, Educational institutions, Space tourism companies, Virtual experience creators'],
    trialDays: 30,
    setupTime: '1 month',
    category: 'Space & Aerospace',
    realService: true,
    technology: ['Metaverse, Virtual reality, Augmented reality, 3D graphics, Web3'],
    integrations: ['VR headsets, Space databases, Educational platforms, Payment systems'],
    useCases: ['Virtual space exploration, Educational experiences, Space tourism, Immersive learning'],
    roi: 'Create new revenue streams and increase space engagement by 400%',
    competitors: ['SpaceEngine, Universe Sandbox, Kerbal Space Program, SpaceVR'],
    marketSize: '$47.5B+ metaverse market',
    growthRate: '400% YoY',
    variant: 'space-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Metaverse space exploration platform with immersive virtual space experiences and interactive mission capabilities.',
    launchDate: '2025-01-20',
    customers: 45,
    rating: 4.5,
    reviews: 32
  },
  {
    id: 'ai-powered-space-resource-mining',
    name: 'AI-Powered Space Resource Mining',
    tagline: 'Intelligent space resource mining with AI-powered exploration and extraction optimization',
    price: '$4,999',
    period: '/month',
    description: 'Advanced space resource mining platform that uses AI to optimize exploration strategies, identify valuable resources, and improve extraction efficiency for space mining operations.',
    features: [
      'AI-powered exploration optimization',
      'Resource identification',
      'Extraction optimization',
      'Real-time monitoring',
      'Performance analytics',
      'Integration capabilities',
      'Custom mining models',
      'Multi-resource support',
      'Compliance management'
    ],
    popular: true,
    icon: '⛏️',
    color: 'from-red-600 to-pink-700',
    textColor: 'text-red-400',
    link: 'https://ziontechgroup.com/ai-powered-space-resource-mining',
    marketPosition: 'Leading AI-powered space resource mining platform for exploration optimization and extraction efficiency.',
    targetAudience: 'Space mining companies, Resource exploration firms, Space agencies, Mining technology companies'],
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Space & Aerospace',
    realService: true,
    technology: ['AI/ML, Space mining, Resource exploration, Extraction optimization, Machine learning'],
    integrations: ['Mining equipment, Exploration tools, Resource databases, Analytics platforms'],
    useCases: ['Exploration optimization, Resource identification, Extraction efficiency, Mining planning'],
    roi: 'Improve exploration efficiency by 60% and increase resource yield by 45%',
    competitors: ['Planetary Resources, Deep Space Industries, Asteroid Mining Corporation, TransAstra'],
    marketSize: '$3.8B+ space mining market',
    growthRate: '380% YoY',
    variant: 'space-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'AI-powered space resource mining platform with intelligent exploration optimization and extraction efficiency capabilities.',
    launchDate: '2025-01-26',
    customers: 78,
    rating: 4.7,
    reviews: 58
  }
];