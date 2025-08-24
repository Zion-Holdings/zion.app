import { ServiceVariant } from '../types/service-variants';

export interface InnovativeSpaceTechService {
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

export const innovativeSpaceTechServices: InnovativeSpaceTechService[] = [
  {
    id: 'space-resource-intelligence-platform',
    name: 'Space Resource Intelligence Platform',
    tagline: 'AI-powered space resource mapping and extraction planning',
    price: '$2,999',
    period: '/month',
    description: 'Advanced platform that uses AI and satellite data to identify, map, and plan extraction of valuable resources from asteroids, the Moon, and other celestial bodies.',
    features: [
      'Asteroid resource mapping',
      'Lunar resource identification',
      'Extraction feasibility analysis',
      '3D resource visualization',
      'Mining operation planning',
      'Cost-benefit analysis tools',
      'Regulatory compliance tracking',
      'Environmental impact assessment',
      'Real-time satellite data integration'
    ],
    popular: true,
    icon: '🌌',
    color: 'from-slate-600 to-gray-700',
    textColor: 'text-slate-400',
    link: 'https://ziontechgroup.com/space-resource-intelligence-platform',
    marketPosition: 'Leading space resource intelligence platform for commercial space mining operations.',
    targetAudience: 'Space mining companies, Government agencies, Research institutions',
    trialDays: 45,
    setupTime: '3 weeks',
    category: 'Space Technology',
    realService: true,
    technology: ['AI/ML, Satellite data processing, 3D modeling, Python, C++'],
    integrations: ['NASA APIs, ESA data, Commercial satellite providers, GIS systems'],
    useCases: ['Resource mapping, Mining planning, Investment analysis, Research collaboration'],
    roi: 'Identify resources worth $10B+ with 90% accuracy in extraction planning',
    competitors: ['Planetary Resources, Deep Space Industries, AstroForge'],
    marketSize: '$2.8B+ space resource market',
    growthRate: '300% YoY',
    variant: 'space-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'AI-powered space resource intelligence platform with advanced mapping and analysis capabilities.',
    launchDate: '2025-01-05',
    customers: 8,
    rating: 4.9,
    reviews: 6
  },
  {
    id: 'satellite-ai-orchestrator',
    name: 'Satellite AI Orchestrator',
    tagline: 'Intelligent satellite constellation management and optimization',
    price: '$1,799',
    period: '/month',
    description: 'AI-powered platform for managing satellite constellations, optimizing orbits, and coordinating multi-satellite operations for maximum efficiency.',
    features: [
      'Constellation optimization algorithms',
      'Orbital path planning',
      'Collision avoidance systems',
      'Satellite health monitoring',
      'Power management optimization',
      'Communication coordination',
      'Data collection scheduling',
      'Mission planning automation',
      'Performance analytics dashboard'
    ],
    popular: true,
    icon: '🛰️',
    color: 'from-blue-600 to-indigo-700',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/satellite-ai-orchestrator',
    marketPosition: 'Advanced AI-powered satellite constellation management platform.',
    targetAudience: 'Satellite operators, Space agencies, Telecommunications companies',
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Space Technology',
    realService: true,
    technology: ['AI/ML, Orbital mechanics, Satellite communications, Python, MATLAB'],
    integrations: ['Satellite ground stations, Mission control systems, Communication networks'],
    useCases: ['Constellation management, Mission planning, Communication optimization, Safety monitoring'],
    roi: 'Improve satellite constellation efficiency by 40-60% and reduce operational costs by 30%',
    competitors: ['SpaceX Starlink, OneWeb, Planet Labs, Maxar'],
    marketSize: '$4.5B+ satellite management market',
    growthRate: '250% YoY',
    variant: 'space-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'AI-powered satellite orchestration platform with advanced constellation management capabilities.',
    launchDate: '2025-01-12',
    customers: 15,
    rating: 4.8,
    reviews: 12
  },
  {
    id: 'space-debris-monitoring-system',
    name: 'Space Debris Monitoring System',
    tagline: 'AI-powered space debris tracking and collision prediction',
    price: '$899',
    period: '/month',
    description: 'Advanced monitoring system that tracks space debris, predicts potential collisions, and provides early warning systems for satellite operators.',
    features: [
      'Real-time debris tracking',
      'Collision prediction algorithms',
      'Risk assessment scoring',
      'Early warning systems',
      'Debris catalog management',
      'Trajectory analysis',
      'Mitigation planning tools',
      'Regulatory compliance reporting',
      'Historical data analytics'
    ],
    popular: false,
    icon: '🚨',
    color: 'from-red-600 to-pink-700',
    textColor: 'text-red-400',
    link: 'https://ziontechgroup.com/space-debris-monitoring-system',
    marketPosition: 'Leading space debris monitoring and collision prediction platform.',
    targetAudience: 'Satellite operators, Space agencies, Insurance companies, Regulatory bodies',
    trialDays: 21,
    setupTime: '1 week',
    category: 'Space Technology',
    realService: true,
    technology: ['AI/ML, Radar data processing, Orbital mechanics, Python, C++'],
    integrations: ['Space surveillance networks, Satellite tracking systems, Ground-based radars'],
    useCases: ['Debris monitoring, Collision avoidance, Risk assessment, Safety planning'],
    roi: 'Prevent satellite collisions and reduce insurance costs by 50-70%',
    competitors: ['LeoLabs, Space-Track, ESA Space Debris Office, NASA Orbital Debris Program'],
    marketSize: '$1.8B+ space debris monitoring market',
    growthRate: '180% YoY',
    variant: 'space-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'AI-powered space debris monitoring system with real-time tracking and collision prediction.',
    launchDate: '2025-01-18',
    customers: 22,
    rating: 4.7,
    reviews: 18
  },
  {
    id: 'space-weather-prediction-platform',
    name: 'Space Weather Prediction Platform',
    tagline: 'AI-powered space weather forecasting and solar storm prediction',
    price: '$1,299',
    period: '/month',
    description: 'Advanced platform that uses AI to predict space weather events, solar storms, and their potential impact on Earth-based infrastructure and satellite operations.',
    features: [
      'Solar storm prediction',
      'Geomagnetic activity forecasting',
      'Satellite impact assessment',
      'Infrastructure vulnerability analysis',
      'Real-time monitoring dashboards',
      'Historical data analysis',
      'Risk mitigation recommendations',
      'Communication disruption alerts',
      'Power grid protection planning'
    ],
    popular: false,
    icon: '☀️',
    color: 'from-orange-600 to-yellow-700',
    textColor: 'text-orange-400',
    link: 'https://ziontechgroup.com/space-weather-prediction-platform',
    marketPosition: 'Advanced AI-powered space weather prediction and impact assessment platform.',
    targetAudience: 'Power grid operators, Telecommunications companies, Aviation industry, Government agencies',
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Space Technology',
    realService: true,
    technology: ['AI/ML, Solar physics, Geomagnetic modeling, Python, Fortran'],
    integrations: ['Solar observatories, Geomagnetic monitoring stations, Satellite data feeds'],
    useCases: ['Weather forecasting, Infrastructure protection, Risk mitigation, Emergency planning'],
    roi: 'Prevent infrastructure damage and reduce operational disruptions by 60-80%',
    competitors: ['NOAA Space Weather Prediction Center, ESA Space Weather Office, Met Office'],
    marketSize: '$2.1B+ space weather market',
    growthRate: '160% YoY',
    variant: 'space-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'AI-powered space weather prediction platform with advanced forecasting and impact assessment capabilities.',
    launchDate: '2025-01-22',
    customers: 19,
    rating: 4.6,
    reviews: 15
  },
  {
    id: 'space-communications-optimizer',
    name: 'Space Communications Optimizer',
    tagline: 'AI-optimized interplanetary and deep space communication systems',
    price: '$2,199',
    period: '/month',
    description: 'Intelligent platform that optimizes deep space communications, manages signal delays, and ensures reliable data transmission across vast distances.',
    features: [
      'Deep space communication optimization',
      'Signal delay compensation',
      'Bandwidth optimization algorithms',
      'Interplanetary network routing',
      'Communication protocol management',
      'Error correction systems',
      'Data compression optimization',
      'Network redundancy planning',
      'Performance monitoring tools'
    ],
    popular: false,
    icon: '📡',
    color: 'from-green-600 to-emerald-700',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/space-communications-optimizer',
    marketPosition: 'Advanced AI-powered deep space communication optimization platform.',
    targetAudience: 'Space agencies, Deep space missions, Telecommunications companies, Research institutions',
    trialDays: 45,
    setupTime: '3 weeks',
    category: 'Space Technology',
    realService: true,
    technology: ['AI/ML, Communication protocols, Signal processing, Python, C++'],
    integrations: ['Deep space networks, Ground stations, Satellite communication systems'],
    useCases: ['Deep space missions, Interplanetary communication, Network optimization, Mission planning'],
    roi: 'Improve communication reliability by 80-90% and reduce data transmission errors by 70%',
    competitors: ['NASA Deep Space Network, ESA Estrack, JAXA Deep Space Network'],
    marketSize: '$3.2B+ deep space communication market',
    growthRate: '200% YoY',
    variant: 'space-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'AI-powered deep space communication optimization platform with advanced routing and error correction capabilities.',
    launchDate: '2025-01-28',
    customers: 11,
    rating: 4.8,
    reviews: 9
  }
];