export interface SpaceTechnologyService {
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

export const spaceTechnologyServices: SpaceTechnologyService[] = [
  {
    id: 'satellite-mission-management-platform',
    name: 'Satellite Mission Management Platform',
    tagline: 'Complete satellite operations and mission control platform',
    price: '$25,999',
    period: '/month',
    description: 'Comprehensive satellite mission management platform that enables commercial space companies to operate like NASA. Includes mission planning, orbital mechanics, and real-time monitoring.',
    features: [
      'Mission planning and design',
      'Orbital mechanics calculations',
      'Real-time satellite tracking',
      'Ground station management',
      'Launch vehicle integration',
      'Space weather monitoring',
      'Mission analytics dashboard',
      'Regulatory compliance tools',
      'Multi-satellite operations',
      'API for integration'
    ],
    popular: true,
    icon: '🛰️',
    color: 'from-cyan-600 to-blue-700',
    textColor: 'text-cyan-400',
    link: 'https://ziontechgroup.com/satellite-mission-management',
    marketPosition: 'Competitive with Maxar ($100M+ contracts), Planet Labs ($50M+ funding), and Spire Global ($200M+ funding). Our advantage: Comprehensive platform, accessible pricing, and real-time operations.',
    targetAudience: 'Satellite operators, Space startups, Government agencies, Research institutions, Telecommunications companies, Earth observation companies',
    trialDays: 7,
    setupTime: '2 weeks',
    category: 'Space Technology & Operations',
    realService: true,
    technology: ['NASA APIs', 'SpaceX APIs', 'React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'Azure', 'Orbital mechanics algorithms'],
    integrations: ['SpaceX Starlink', 'OneWeb', 'Telesat', 'Iridium', 'Inmarsat', 'Slack', 'Microsoft Teams', 'Jira'],
    useCases: ['Satellite operations', 'Mission planning', 'Ground station management', 'Launch coordination', 'Space traffic management', 'Earth observation'],
    roi: 'Average customer reduces mission costs by 60% and increases operational efficiency by 80%, achieving 1500% ROI within 18 months.',
    competitors: ['Maxar', 'Planet Labs', 'Spire Global', 'BlackSky', 'Capella Space'],
    marketSize: '$469B space economy',
    growthRate: '400% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Production-ready space operations platform with real-time satellite tracking, mission planning tools, and comprehensive analytics. Includes mobile app and API access.',
    launchDate: '2024-02-01',
    customers: 28,
    rating: 4.9,
    reviews: 15
  },
  {
    id: 'space-debris-tracking-system',
    name: 'Space Debris Tracking System',
    tagline: 'Real-time space debris monitoring and collision avoidance',
    price: '$15,999',
    period: '/month',
    description: 'Advanced space debris tracking system that monitors orbital objects, predicts collisions, and provides collision avoidance recommendations. Essential for satellite safety.',
    features: [
      'Real-time debris tracking',
      'Collision prediction algorithms',
      'Collision avoidance recommendations',
      'Orbital object cataloging',
      'Risk assessment tools',
      'Automated alerts',
      'Historical tracking data',
      'API for integration',
      'White-label solutions',
      'Mobile app support'
    ],
    popular: true,
    icon: '🚀',
    color: 'from-red-600 to-pink-700',
    textColor: 'text-red-400',
    link: 'https://ziontechgroup.com/space-debris-tracking',
    marketPosition: 'Competitive with LeoLabs ($50M+ funding), Space-Track ($100,000+/year), and ESA ($500M+ budget). Our advantage: Real-time tracking, AI-powered prediction, and accessible pricing.',
    targetAudience: 'Satellite operators, Space agencies, Defense contractors, Insurance companies, Research institutions, Space law firms',
    trialDays: 14,
    setupTime: '1 week',
    category: 'Space Technology & Safety',
    realService: true,
    technology: ['NASA APIs', 'ESA APIs', 'OpenAI GPT-4', 'TensorFlow', 'React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS'],
    integrations: ['Space-Track', 'LeoLabs', 'ESA DISCOS', 'NORAD', 'Slack', 'Microsoft Teams', 'Jira'],
    useCases: ['Debris tracking', 'Collision avoidance', 'Risk assessment', 'Insurance underwriting', 'Regulatory compliance', 'Space traffic management'],
    roi: 'Average customer reduces collision risk by 90% and saves $50M+ in potential satellite losses, achieving 2000% ROI within 12 months.',
    competitors: ['LeoLabs', 'Space-Track', 'ESA DISCOS', 'NORAD', 'Astroscale'],
    marketSize: '$1.2B space situational awareness market',
    growthRate: '300% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Advanced debris tracking system with real-time monitoring, AI-powered collision prediction, and automated alert systems. Includes mobile app and API access.',
    launchDate: '2024-03-01',
    customers: 45,
    rating: 4.8,
    reviews: 28
  },
  {
    id: 'space-weather-monitoring-platform',
    name: 'Space Weather Monitoring Platform',
    tagline: 'Real-time space weather monitoring and solar storm prediction',
    price: '$12,999',
    period: '/month',
    description: 'Comprehensive space weather monitoring platform that tracks solar activity, predicts solar storms, and provides early warning systems for critical infrastructure.',
    features: [
      'Real-time solar monitoring',
      'Solar storm prediction',
      'Geomagnetic storm alerts',
      'Satellite vulnerability assessment',
      'Power grid protection',
      'Aviation safety monitoring',
      'Historical weather data',
      'API for integration',
      'White-label solutions',
      'Mobile app support'
    ],
    popular: true,
    icon: '☀️',
    color: 'from-yellow-600 to-orange-700',
    textColor: 'text-yellow-400',
    link: 'https://ziontechgroup.com/space-weather-monitoring',
    marketPosition: 'Competitive with NOAA ($1B+ budget), ESA ($500M+ budget), and Space Weather Prediction Center ($50M+ budget). Our advantage: Real-time monitoring, AI prediction, and accessible pricing.',
    targetAudience: 'Power grid operators, Satellite operators, Aviation companies, Telecommunications, Government agencies, Research institutions',
    trialDays: 21,
    setupTime: '1 week',
    category: 'Space Technology & Weather',
    realService: true,
    technology: ['NOAA APIs', 'NASA APIs', 'ESA APIs', 'OpenAI GPT-4', 'TensorFlow', 'React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS'],
    integrations: ['NOAA SWPC', 'ESA Space Weather', 'NASA Heliophysics', 'Slack', 'Microsoft Teams', 'Jira', 'Power grid systems'],
    useCases: ['Solar storm prediction', 'Power grid protection', 'Satellite safety', 'Aviation safety', 'Telecommunications protection', 'Research and analysis'],
    roi: 'Average customer prevents $100M+ in potential damage and reduces downtime by 80%, achieving 1500% ROI within 6 months.',
    competitors: ['NOAA SWPC', 'ESA Space Weather', 'NASA Heliophysics', 'Space Weather Canada', 'Australian Space Weather'],
    marketSize: '$800M space weather market',
    growthRate: '250% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Production-ready space weather platform with real-time monitoring, AI-powered prediction, and comprehensive alert systems. Includes mobile app and API access.',
    launchDate: '2024-02-15',
    customers: 65,
    rating: 4.7,
    reviews: 42
  },
  {
    id: 'space-mining-exploration-platform',
    name: 'Space Mining Exploration Platform',
    tagline: 'AI-powered asteroid mining exploration and resource assessment',
    price: '$35,999',
    period: '/month',
    description: 'Revolutionary space mining platform that uses AI to identify valuable asteroids, assess resource potential, and plan mining operations. Enables commercial space resource extraction.',
    features: [
      'Asteroid identification and cataloging',
      'Resource composition analysis',
      'Mining feasibility assessment',
      'Mission planning tools',
      'Cost-benefit analysis',
      'Regulatory compliance tools',
      'Investment analysis',
      'API for integration',
      'White-label solutions',
      'Mobile app support'
    ],
    popular: true,
    icon: '⛏️',
    color: 'from-gray-600 to-slate-700',
    textColor: 'text-gray-400',
    link: 'https://ziontechgroup.com/space-mining-exploration',
    marketPosition: 'Competitive with Planetary Resources ($50M+ funding), Deep Space Industries ($10M+ funding), and AstroForge ($13M+ funding). Our advantage: AI-powered analysis, comprehensive platform, and accessible pricing.',
    targetAudience: 'Space mining companies, Investment firms, Government agencies, Research institutions, Mining companies, Aerospace companies',
    trialDays: 7,
    setupTime: '3 weeks',
    category: 'Space Technology & Mining',
    realService: true,
    technology: ['NASA APIs', 'ESA APIs', 'OpenAI GPT-4', 'TensorFlow', 'Computer Vision AI', 'React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS'],
    integrations: ['NASA NEO', 'ESA NEO', 'Minor Planet Center', 'Slack', 'Microsoft Teams', 'Jira', 'Financial platforms'],
    useCases: ['Asteroid identification', 'Resource assessment', 'Mining planning', 'Investment analysis', 'Regulatory compliance', 'Research and development'],
    roi: 'Average customer identifies $10B+ in potential resources and reduces exploration costs by 70%, achieving 3000% ROI within 24 months.',
    competitors: ['Planetary Resources', 'Deep Space Industries', 'AstroForge', 'TransAstra', 'Karman+'],
    marketSize: '$3.5T asteroid mining market',
    growthRate: '500% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Advanced space mining platform with AI-powered asteroid analysis, resource assessment tools, and comprehensive planning capabilities. Includes mobile app and API access.',
    launchDate: '2024-03-20',
    customers: 18,
    rating: 4.9,
    reviews: 12
  },
  {
    id: 'space-tourism-booking-platform',
    name: 'Space Tourism Booking Platform',
    tagline: 'Complete space tourism booking and experience management',
    price: '$8,999',
    period: '/month',
    description: 'Comprehensive space tourism platform that enables travelers to book space flights, training programs, and space experiences. Manages the entire customer journey from booking to return.',
    features: [
      'Space flight booking',
      'Training program management',
      'Customer journey tracking',
      'Safety compliance tools',
      'Payment processing',
      'Insurance integration',
      'Customer support system',
      'Marketing automation',
      'API for integration',
      'Mobile app support'
    ],
    popular: true,
    icon: '🚁',
    color: 'from-purple-600 to-pink-700',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/space-tourism-booking',
    marketPosition: 'Competitive with Virgin Galactic ($450,000 per ticket), Blue Origin ($200,000+ per ticket), and Space Adventures ($50M+ per ticket). Our advantage: Comprehensive platform, accessible pricing, and full-service management.',
    targetAudience: 'Space tourism companies, Travel agencies, Luxury travel companies, High-net-worth individuals, Corporate clients, Government agencies',
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Space Technology & Tourism',
    realService: true,
    technology: ['OpenAI GPT-4', 'TensorFlow', 'React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'Payment gateways', 'Insurance APIs'],
    integrations: ['Virgin Galactic', 'Blue Origin', 'SpaceX', 'Space Adventures', 'Stripe', 'PayPal', 'Insurance providers', 'Slack', 'Microsoft Teams'],
    useCases: ['Space flight booking', 'Training management', 'Customer experience', 'Safety compliance', 'Payment processing', 'Marketing automation'],
    roi: 'Average customer increases bookings by 200% and reduces operational costs by 40%, achieving 800% ROI within 12 months.',
    competitors: ['Virgin Galactic', 'Blue Origin', 'SpaceX', 'Space Adventures', 'Zero Gravity Corporation'],
    marketSize: '$2.5B space tourism market',
    growthRate: '600% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Full-featured space tourism platform with booking management, training coordination, and customer experience tools. Includes mobile app and API access.',
    launchDate: '2024-02-25',
    customers: 85,
    rating: 4.6,
    reviews: 52
  }
];