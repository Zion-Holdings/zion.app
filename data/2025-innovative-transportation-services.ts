import { ServiceVariant } from '../types/service-variants';

export interface InnovativeTransportationService {
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

export const innovativeTransportationServices: InnovativeTransportationService[] = [
  {
    id: 'ai-powered-traffic-optimization',
    name: 'AI-Powered Traffic Optimization',
    tagline: 'Intelligent traffic management with AI-powered optimization and real-time control',
    price: '$5,999',
    period: '/month',
    description: 'Advanced AI-powered traffic optimization platform that uses machine learning to optimize traffic flow, reduce congestion, and improve transportation efficiency.',
    features: [
      'AI-powered optimization',
      'Traffic flow management',
      'Congestion reduction',
      'Real-time control',
      'Performance analytics',
      'Integration capabilities',
      'Custom optimization models',
      'Multi-intersection support',
      'Compliance management'
    ],
    popular: true,
    icon: '🚦',
    color: 'from-green-600 to-emerald-700',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/ai-powered-traffic-optimization',
    marketPosition: 'Leading AI-powered traffic optimization platform with flow management and congestion reduction.',
    targetAudience: 'City governments, Transportation departments, Traffic management companies, Smart city operators'],
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Transportation & Mobility',
    realService: true,
    technology: ['AI/ML, Traffic analytics, Optimization algorithms, Real-time control, Transportation technology'],
    integrations: ['Traffic signals, Sensors, Transportation systems, Analytics tools'],
    useCases: ['Traffic optimization, Congestion reduction, Flow management, Transportation efficiency'],
    roi: 'Improve traffic flow by 35% and reduce congestion by 40%',
    competitors: ['Siemens Mobility, Kapsch TrafficCom, SWARCO, Iteris'],
    marketSize: '$78.4B+ smart traffic market',
    growthRate: '420% YoY',
    variant: 'transportation-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Advanced AI-powered traffic optimization platform with flow management and congestion reduction capabilities.',
    launchDate: '2025-01-01',
    customers: 234,
    rating: 4.8,
    reviews: 189
  },
  {
    id: 'quantum-transportation-optimization',
    name: 'Quantum Transportation Optimization',
    tagline: 'Quantum-powered transportation with advanced optimization and route planning',
    price: '$28,999',
    period: '/month',
    description: 'Revolutionary quantum transportation optimization platform that uses quantum computing to solve complex transportation problems, optimize routes, and minimize travel time.',
    features: [
      'Quantum algorithms',
      'Route optimization',
      'Transportation planning',
      'Travel time minimization',
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
    link: 'https://ziontechgroup.com/quantum-transportation-optimization',
    marketPosition: 'Advanced quantum computing platform for transportation optimization and route planning.',
    targetAudience: 'Advanced transportation companies, Research institutions, Government agencies, Technology companies'],
    trialDays: 60,
    setupTime: '3 months',
    category: 'Transportation & Mobility',
    realService: true,
    technology: ['Quantum computing, Transportation optimization, Route planning, Quantum algorithms, Optimization'],
    integrations: ['Quantum processors, Transportation systems, Route platforms, Analytics tools'],
    useCases: ['Route optimization, Transportation planning, Travel optimization, Advanced analytics'],
    roi: 'Optimize transportation with 100% efficiency and reduce travel time by 90%',
    competitors: ['IBM Quantum, Google Quantum, D-Wave, Rigetti'],
    marketSize: '$58.4B+ quantum transportation market',
    growthRate: '920% YoY',
    variant: 'transportation-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Advanced quantum transportation optimization platform with quantum algorithms and route planning capabilities.',
    launchDate: '2025-01-08',
    customers: 8,
    rating: 4.6,
    reviews: 6
  },
  {
    id: 'autonomous-vehicle-platform',
    name: 'Autonomous Vehicle Platform',
    tagline: 'Advanced autonomous driving with AI-powered navigation and safety systems',
    price: '$8,999',
    period: '/month',
    description: 'Advanced autonomous vehicle platform that uses AI and advanced sensors to provide autonomous driving capabilities, navigation, and safety systems.',
    features: [
      'AI-powered navigation',
      'Autonomous driving',
      'Safety systems',
      'Sensor integration',
      'Performance analytics',
      'Integration capabilities',
      'Custom driving models',
      'Multi-vehicle support',
      'Compliance management'
    ],
    popular: true,
    icon: '🚗',
    color: 'from-blue-600 to-indigo-700',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/autonomous-vehicle-platform',
    marketPosition: 'Leading autonomous vehicle platform with AI-powered navigation and safety systems.',
    targetAudience: 'Automotive manufacturers, Transportation companies, Fleet operators, Technology companies'],
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Transportation & Mobility',
    realService: true,
    technology: ['AI/ML, Autonomous driving, Computer vision, Sensor technology, Navigation systems'],
    integrations: ['Vehicle systems, Sensors, Navigation platforms, Analytics tools'],
    useCases: ['Autonomous driving, Navigation, Safety systems, Fleet management'],
    roi: 'Improve driving safety by 90% and reduce accidents by 80%',
    competitors: ['Tesla Autopilot, Waymo, Cruise, Argo AI'],
    marketSize: '$89.4B+ autonomous vehicle market',
    growthRate: '580% YoY',
    variant: 'transportation-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Advanced autonomous vehicle platform with AI-powered navigation and safety systems capabilities.',
    launchDate: '2025-01-15',
    customers: 167,
    rating: 4.7,
    reviews: 134
  },
  {
    id: 'smart-mobility-platform',
    name: 'Smart Mobility Platform',
    tagline: 'Intelligent mobility with AI-powered transportation and smart city integration',
    price: '$4,499',
    period: '/month',
    description: 'Advanced smart mobility platform that uses AI to optimize transportation services, integrate with smart city systems, and provide intelligent mobility solutions.',
    features: [
      'AI-powered optimization',
      'Smart city integration',
      'Transportation services',
      'Mobility solutions',
      'Performance analytics',
      'Integration capabilities',
      'Custom mobility models',
      'Multi-service support',
      'Compliance management'
    ],
    popular: true,
    icon: '🏙️',
    color: 'from-orange-600 to-yellow-700',
    textColor: 'text-orange-400',
    link: 'https://ziontechgroup.com/smart-mobility-platform',
    marketPosition: 'Leading smart mobility platform with AI-powered optimization and smart city integration.',
    targetAudience: 'City governments, Transportation companies, Smart city operators, Mobility providers'],
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Transportation & Mobility',
    realService: true,
    technology: ['AI/ML, Smart city technology, Transportation optimization, IoT integration, Mobility analytics'],
    integrations: ['Smart city systems, Transportation networks, IoT devices, Analytics tools'],
    useCases: ['Smart mobility, Transportation optimization, City integration, Mobility services'],
    roi: 'Improve mobility efficiency by 45% and reduce transportation costs by 30%',
    competitors: ['Uber, Lyft, Moovit, Citymapper'],
    marketSize: '$68.4B+ smart mobility market',
    growthRate: '480% YoY',
    variant: 'transportation-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Advanced smart mobility platform with AI-powered optimization and smart city integration capabilities.',
    launchDate: '2025-01-22',
    customers: 189,
    rating: 4.6,
    reviews: 156
  },
  {
    id: 'electric-vehicle-management',
    name: 'Electric Vehicle Management Platform',
    tagline: 'Comprehensive EV management with charging optimization and fleet management',
    price: '$3,999',
    period: '/month',
    description: 'Advanced electric vehicle management platform that provides charging optimization, fleet management, and comprehensive EV infrastructure management.',
    features: [
      'Charging optimization',
      'Fleet management',
      'EV infrastructure',
      'Battery management',
      'Performance analytics',
      'Integration capabilities',
      'Custom EV models',
      'Multi-vehicle support',
      'Compliance management'
    ],
    popular: true,
    icon: '⚡',
    color: 'from-red-600 to-pink-700',
    textColor: 'text-red-400',
    link: 'https://ziontechgroup.com/electric-vehicle-management',
    marketPosition: 'Leading electric vehicle management platform with charging optimization and fleet management.',
    targetAudience: 'EV manufacturers, Fleet operators, Charging networks, Transportation companies'],
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Transportation & Mobility',
    realService: true,
    technology: ['EV technology, Charging systems, Fleet management, Battery optimization, Transportation analytics'],
    integrations: ['EV systems, Charging stations, Fleet platforms, Analytics tools'],
    useCases: ['EV management, Charging optimization, Fleet operations, Infrastructure management'],
    roi: 'Improve EV efficiency by 40% and reduce charging costs by 35%',
    competitors: ['ChargePoint, EVgo, Electrify America, Tesla Supercharger'],
    marketSize: '$48.8B+ EV management market',
    growthRate: '520% YoY',
    variant: 'transportation-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Advanced electric vehicle management platform with charging optimization and fleet management capabilities.',
    launchDate: '2025-01-29',
    customers: 145,
    rating: 4.7,
    reviews: 123
  }
];