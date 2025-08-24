import { ServiceVariant } from '../types/service-variants';

export interface SpaceTechAerospaceInnovationPlatform2025 {
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

export const spaceTechAerospaceInnovationPlatform2025: SpaceTechAerospaceInnovationPlatform2025[] = [
  {
    id: 'ai-powered-satellite-intelligence-platform',
    name: 'AI-Powered Satellite Intelligence Platform',
    tagline: 'Intelligent satellite operations and data analytics with AI',
    price: '$699',
    period: '/month',
    description: 'Advanced satellite intelligence platform that leverages AI and machine learning to optimize satellite operations, analyze satellite data, and provide intelligent insights. Features automated satellite monitoring, predictive maintenance, and data analytics.',
    features: [
      'AI-powered satellite monitoring and control',
      'Predictive maintenance for satellite systems',
      'Satellite data analytics and insights',
      'Automated orbit optimization',
      'Satellite constellation management',
      'Real-time satellite tracking',
      'Space debris monitoring and avoidance',
      'Satellite performance optimization',
      'Data downlink optimization',
      'Satellite communication management',
      'Integration with ground stations',
      'Mobile satellite monitoring',
      'Satellite analytics reporting',
      'Regulatory compliance tools',
      'Space technology consulting'
    ],
    popular: true,
    icon: '🛰️',
    color: 'from-blue-600 via-indigo-600 to-purple-600',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/ai-satellite-intelligence',
    marketPosition: 'Leading AI-powered satellite intelligence platform with comprehensive satellite operations and data analytics',
    targetAudience: 'Satellite operators, Space agencies, Telecommunications companies, Defense contractors, Research institutions, Commercial space companies',
    trialDays: 14,
    setupTime: '20-30 business days',
    category: 'Space Technology',
    realService: true,
    technology: ['AI/ML, Machine Learning, Satellite Technology, Space Operations, Data Analytics, Orbital Mechanics'],
    integrations: ['Satellite ground stations, Space tracking systems, Satellite communication networks, Space data platforms, REST APIs'],
    useCases: ['Satellite operations, Space data analytics, Satellite monitoring, Orbit optimization, Space debris tracking'],
    roi: 'Improve satellite performance by 40%. Reduce operational costs by 35%. Increase data collection efficiency by 60%.',
    competitors: ['Maxar Technologies, Planet Labs, Airbus Defence and Space, Lockheed Martin, Northrop Grumman'],
    marketSize: '$28B satellite services market',
    growthRate: '35% annual growth',
    variant: 'space-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Production-ready AI-powered satellite intelligence platform with comprehensive satellite operations and data analytics.',
    launchDate: '2025-05-01',
    customers: 67,
    rating: 4.9,
    reviews: 45
  },
  {
    id: 'space-resource-intelligence-platform',
    name: 'Space Resource Intelligence Platform',
    tagline: 'Intelligent space resource exploration and management',
    price: '$899',
    period: '/month',
    description: 'Comprehensive space resource platform that enables intelligent exploration, mining, and management of space resources. Features asteroid mining optimization, lunar resource mapping, and space resource analytics.',
    features: [
      'AI-powered asteroid mining optimization',
      'Lunar resource mapping and analysis',
      'Space resource exploration planning',
      'Mining operation automation',
      'Resource transportation optimization',
      'Space resource analytics and insights',
      'Interplanetary logistics management',
      'Space resource trading platform',
      'Environmental impact assessment',
      'Regulatory compliance tools',
      'Integration with space systems',
      'Mobile space resource monitoring',
      'Space resource reporting',
      'Stakeholder collaboration tools',
      'Space resource consulting'
    ],
    popular: false,
    icon: '🌌',
    color: 'from-purple-600 via-violet-600 to-indigo-600',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/space-resource-intelligence',
    marketPosition: 'Leading space resource intelligence platform with comprehensive exploration and mining capabilities',
    targetAudience: 'Space mining companies, Space agencies, Resource companies, Investment firms, Research institutions, Government agencies',
    trialDays: 7,
    setupTime: '30-45 business days',
    category: 'Space Resources',
    realService: true,
    technology: ['AI/ML, Machine Learning, Space Mining, Robotics, Autonomous Systems, Resource Analytics'],
    integrations: ['Space mining systems, Robotic platforms, Space transportation systems, Resource databases, REST APIs'],
    useCases: ['Asteroid mining, Lunar resource exploration, Space resource management, Interplanetary logistics, Resource trading'],
    roi: 'Accelerate space resource discovery by 60%. Optimize mining operations by 45%. Reduce exploration costs by 50%.',
    competitors: ['Planetary Resources, Deep Space Industries, AstroForge, Karman+, SpaceFab'],
    marketSize: '$12B space resources market',
    growthRate: '48% annual growth',
    variant: 'space-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Production-ready space resource intelligence platform with comprehensive exploration and mining capabilities.',
    launchDate: '2025-05-05',
    customers: 34,
    rating: 4.8,
    reviews: 23
  },
  {
    id: 'aerospace-automation-intelligence-platform',
    name: 'Aerospace Automation Intelligence Platform',
    tagline: 'Intelligent aerospace automation and optimization with AI',
    price: '$549',
    period: '/month',
    description: 'Advanced aerospace platform that automates aircraft operations, maintenance, and optimization through AI-powered analytics. Features predictive maintenance, flight optimization, and intelligent safety monitoring.',
    features: [
      'AI-powered aircraft predictive maintenance',
      'Flight optimization and route planning',
      'Aircraft performance monitoring',
      'Safety monitoring and alerting',
      'Fuel efficiency optimization',
      'Aircraft fleet management',
      'Maintenance scheduling automation',
      'Aircraft health monitoring',
      'Flight data analytics',
      'Integration with aircraft systems',
      'Mobile aerospace monitoring',
      'Aerospace performance reporting',
      'Regulatory compliance tools',
      'Safety certification support',
      'Aerospace consulting services'
    ],
    popular: false,
    icon: '✈️',
    color: 'from-sky-600 via-blue-600 to-indigo-600',
    textColor: 'text-sky-400',
    link: 'https://ziontechgroup.com/aerospace-automation-intelligence',
    marketPosition: 'Leading aerospace automation intelligence platform with AI-powered optimization and safety monitoring',
    targetAudience: 'Airlines, Aircraft manufacturers, Maintenance companies, Aviation companies, Government agencies, Defense contractors',
    trialDays: 21,
    setupTime: '15-25 business days',
    category: 'Aerospace',
    realService: true,
    technology: ['AI/ML, Machine Learning, Aerospace Technology, Predictive Maintenance, Flight Optimization, Safety Systems'],
    integrations: ['Aircraft systems, Flight management systems, Maintenance systems, Safety monitoring systems, REST APIs'],
    useCases: ['Aircraft maintenance, Flight optimization, Safety monitoring, Fleet management, Performance optimization'],
    roi: 'Reduce maintenance costs by 40%. Improve fuel efficiency by 25%. Increase safety scores by 60%.',
    competitors: ['GE Aviation, Boeing, Airbus, Honeywell Aerospace, Collins Aerospace, Safran'],
    marketSize: '$35B aerospace automation market',
    growthRate: '22% annual growth',
    variant: 'ai-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Production-ready aerospace automation intelligence platform with AI-powered optimization and safety monitoring.',
    launchDate: '2025-05-10',
    customers: 89,
    rating: 4.7,
    reviews: 67
  }
];