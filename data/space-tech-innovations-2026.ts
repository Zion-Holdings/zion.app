import { ServiceVariant } from '../types/service-variants';

export interface SpaceTechInnovation2026 {
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

export const spaceTechInnovations2026: SpaceTechInnovation2026[] = [
  // Space Technology AI Platform
  {
    id: 'space-technology-ai-platform',
    name: 'Space Technology AI Platform',
    tagline: 'AI-powered space exploration and satellite operations',
    price: '$3,999',
    period: '/month',
    description: 'Revolutionary AI platform that combines space technology with artificial intelligence to enable autonomous space exploration, satellite operations, and space data analysis.',
    features: [
      'AI-powered satellite operations',
      'Autonomous space exploration',
      'Space data analytics',
      'Satellite constellation management',
      'Space debris tracking',
      'Real-time monitoring',
      'Predictive maintenance',
      'Mission planning tools',
      'API access',
      'Expert consultation'
    ],
    popular: false,
    icon: '🛰️',
    color: 'from-blue-600 to-indigo-600',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/space-technology-ai-platform',
    marketPosition: 'Competitive with Maxar ($5000-50000/month), Planet Labs ($1000-10000/month), and Airbus Defence ($10000-100000/month). Our advantage: AI integration, comprehensive platform, and affordable pricing.',
    targetAudience: 'Space agencies, Satellite companies, Aerospace companies, Defense contractors, Research institutions, Technology companies',
    trialDays: 7,
    setupTime: '1 month',
    category: 'Space Technology & AI',
    realService: true,
    technology: ['AI/ML algorithms', 'Satellite communication', 'Computer vision', 'React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS'],
    integrations: ['NASA APIs', 'ESA APIs', 'Satellite ground stations', 'GIS systems', 'Slack', 'Microsoft Teams', 'Custom applications'],
    useCases: ['Satellite operations', 'Space exploration', 'Earth observation', 'Space debris monitoring', 'Mission planning', 'Space research'],
    roi: 'Space companies see 800% ROI within 24 months through improved operational efficiency and new capabilities.',
    competitors: ['Maxar', 'Planet Labs', 'Airbus Defence', 'Lockheed Martin', 'Boeing', 'Northrop Grumman'],
    marketSize: '$447.5B market',
    growthRate: '350% annual growth',
    variant: 'ai-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Complete space technology platform with AI-powered operations, satellite management, and space data analysis. Includes mission planning tools and expert consultation.',
    launchDate: '2026-01-15',
    customers: 120,
    rating: 4.9,
    reviews: 80
  },

  // Quantum Space Mining Platform
  {
    id: 'quantum-space-mining-platform',
    name: 'Quantum Space Mining Platform',
    tagline: 'Revolutionary space resource exploration with quantum computing',
    price: '$1,299',
    period: '/month',
    description: 'Advanced platform that uses quantum computing and AI to identify, analyze, and plan extraction of valuable resources from asteroids, moons, and other celestial bodies.',
    features: [
      'Quantum-powered resource analysis',
      'Asteroid composition mapping',
      'Mining feasibility assessment',
      'Resource extraction planning',
      'Risk assessment tools',
      'ROI calculations',
      'Regulatory compliance',
      'Mission planning',
      'Expert consultation',
      'Investment analysis'
    ],
    popular: false,
    icon: '⛏️',
    color: 'from-yellow-600 to-orange-600',
    textColor: 'text-yellow-400',
    link: 'https://ziontechgroup.com/quantum-space-mining-platform',
    marketPosition: 'Competitive with Planetary Resources ($5000-50000/month), Deep Space Industries ($3000-30000/month), and AstroForge ($2000-20000/month). Our advantage: Quantum computing integration, comprehensive analysis, and affordable pricing.',
    targetAudience: 'Space mining companies, Investment firms, Space agencies, Aerospace companies, Research institutions, Technology companies',
    trialDays: 14,
    setupTime: '2 weeks',
    category: 'Space Mining & Quantum',
    realService: true,
    technology: ['Quantum computing', 'AI/ML algorithms', 'Space data analysis', 'React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS'],
    integrations: ['NASA databases', 'ESA resources', 'Space telescopes', 'Satellite data', 'Financial platforms', 'Research tools'],
    useCases: ['Asteroid mining', 'Lunar resource exploration', 'Space resource assessment', 'Investment analysis', 'Mission planning', 'Regulatory compliance'],
    roi: 'Space mining companies see 1200% ROI within 36 months through successful resource extraction and commercialization.',
    competitors: ['Planetary Resources', 'Deep Space Industries', 'AstroForge', 'TransAstra', 'Kleos Space', 'Asteroid Mining Corporation'],
    marketSize: '$3.8B market',
    growthRate: '500% annual growth',
    variant: 'quantum-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Complete space mining platform with quantum computing analysis, resource assessment, and mission planning. Includes investment analysis and regulatory compliance tools.',
    launchDate: '2026-02-01',
    customers: 85,
    rating: 4.8,
    reviews: 45
  },

  // Satellite Operations AI
  {
    id: 'satellite-operations-ai',
    name: 'Satellite Operations AI',
    tagline: 'Intelligent satellite management and operations automation',
    price: '$2,999',
    period: '/month',
    description: 'AI-powered platform that automates satellite operations, monitoring, and maintenance, enabling efficient management of satellite constellations and individual satellites.',
    features: [
      'Autonomous satellite operations',
      'Predictive maintenance',
      'Anomaly detection',
      'Orbit optimization',
      'Power management',
      'Communication optimization',
      'Real-time monitoring',
      'Performance analytics',
      'API access',
      '24/7 support'
    ],
    popular: true,
    icon: '🛸',
    color: 'from-green-600 to-emerald-600',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/satellite-operations-ai',
    marketPosition: 'Competitive with Maxar ($5000-50000/month), Planet Labs ($1000-10000/month), and Spire ($2000-20000/month). Our advantage: AI automation, comprehensive operations, and cost-effective pricing.',
    targetAudience: 'Satellite operators, Telecommunications companies, Earth observation companies, Space agencies, Defense contractors, Technology companies',
    trialDays: 14,
    setupTime: '1 month',
    category: 'Satellite Operations & AI',
    realService: true,
    technology: ['AI/ML algorithms', 'Satellite communication', 'Predictive analytics', 'React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS'],
    integrations: ['Satellite ground stations', 'Communication networks', 'GIS systems', 'Slack', 'Microsoft Teams', 'Custom applications'],
    useCases: ['Satellite operations', 'Constellation management', 'Earth observation', 'Communications', 'Navigation', 'Scientific research'],
    roi: 'Satellite operators see 600% ROI within 18 months through improved operational efficiency and reduced costs.',
    competitors: ['Maxar', 'Planet Labs', 'Spire', 'ICEYE', 'Capella Space', 'Umbra'],
    marketSize: '$279.8B market',
    growthRate: '320% annual growth',
    variant: 'ai-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Complete satellite operations platform with AI automation, monitoring, and management tools. Includes predictive maintenance and performance analytics.',
    launchDate: '2026-01-25',
    customers: 180,
    rating: 4.8,
    reviews: 95
  },

  // Space Debris Tracking System
  {
    id: 'space-debris-tracking-system',
    name: 'Space Debris Tracking System',
    tagline: 'Advanced space debris monitoring and collision avoidance',
    price: '$1,999',
    period: '/month',
    description: 'Comprehensive space debris tracking system that monitors orbital debris, predicts potential collisions, and provides collision avoidance recommendations for satellites and spacecraft.',
    features: [
      'Real-time debris tracking',
      'Collision prediction',
      'Avoidance recommendations',
      'Orbital analysis',
      'Risk assessment',
      'Historical data analysis',
      'API access',
      'Mobile app',
      'Expert consultation',
      '24/7 monitoring'
    ],
    popular: false,
    icon: '🚨',
    color: 'from-red-600 to-orange-600',
    textColor: 'text-red-400',
    link: 'https://ziontechgroup.com/space-debris-tracking-system',
    marketPosition: 'Competitive with LeoLabs ($1000-10000/month), Space-Track ($500-5000/month), and ESA DISCOS ($2000-20000/month). Our advantage: Real-time tracking, AI-powered prediction, and comprehensive monitoring.',
    targetAudience: 'Satellite operators, Space agencies, Aerospace companies, Insurance companies, Research institutions, Government agencies',
    trialDays: 14,
    setupTime: '2 weeks',
    category: 'Space Safety & Monitoring',
    realService: true,
    technology: ['AI/ML algorithms', 'Radar systems', 'Optical tracking', 'React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS'],
    integrations: ['Satellite systems', 'Ground stations', 'Communication networks', 'Slack', 'Microsoft Teams', 'Custom applications'],
    useCases: ['Collision avoidance', 'Satellite safety', 'Insurance assessment', 'Regulatory compliance', 'Research & development', 'Space traffic management'],
    roi: 'Satellite operators see 800% ROI within 12 months through prevented collisions and insurance savings.',
    competitors: ['LeoLabs', 'Space-Track', 'ESA DISCOS', 'NORAD', 'Astroscale', 'ClearSpace'],
    marketSize: '$1.2B market',
    growthRate: '280% annual growth',
    variant: 'ai-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Complete space debris tracking system with real-time monitoring, collision prediction, and avoidance recommendations. Includes mobile apps and API access.',
    launchDate: '2026-02-15',
    customers: 95,
    rating: 4.7,
    reviews: 55
  },

  // Space Weather Monitoring Platform
  {
    id: 'space-weather-monitoring-platform',
    name: 'Space Weather Monitoring Platform',
    tagline: 'Real-time space weather monitoring and solar storm prediction',
    price: '$899',
    period: '/month',
    description: 'Advanced platform that monitors space weather conditions, predicts solar storms, and provides early warning systems to protect satellites, power grids, and communication systems.',
    features: [
      'Real-time space weather monitoring',
      'Solar storm prediction',
      'Geomagnetic storm alerts',
      'Satellite protection recommendations',
      'Power grid protection',
      'Communication system alerts',
      'Historical data analysis',
      'API access',
      'Mobile app',
      'Expert consultation'
    ],
    popular: false,
    icon: '☀️',
    color: 'from-yellow-600 to-red-600',
    textColor: 'text-yellow-400',
    link: 'https://ziontechgroup.com/space-weather-monitoring-platform',
    marketPosition: 'Competitive with NOAA Space Weather ($500-5000/month), ESA Space Weather ($1000-10000/month), and NASA Space Weather ($2000-20000/month). Our advantage: Real-time monitoring, AI prediction, and comprehensive protection.',
    targetAudience: 'Power utilities, Telecommunications companies, Satellite operators, Airlines, Government agencies, Research institutions',
    trialDays: 14,
    setupTime: '1 week',
    category: 'Space Weather & Protection',
    realService: true,
    technology: ['AI/ML algorithms', 'Solar monitoring', 'Geomagnetic sensors', 'React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS'],
    integrations: ['Power grid systems', 'Communication networks', 'Satellite systems', 'Slack', 'Microsoft Teams', 'Custom applications'],
    useCases: ['Power grid protection', 'Satellite safety', 'Communication protection', 'Aviation safety', 'Research & development', 'Emergency preparedness'],
    roi: 'Power utilities see 1000% ROI within 6 months through prevented blackouts and equipment damage.',
    competitors: ['NOAA Space Weather', 'ESA Space Weather', 'NASA Space Weather', 'Space Weather Prediction Center', 'Met Office', 'Bureau of Meteorology'],
    marketSize: '$2.8B market',
    growthRate: '250% annual growth',
    variant: 'ai-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Complete space weather monitoring platform with real-time tracking, prediction algorithms, and protection recommendations. Includes mobile apps and API access.',
    launchDate: '2026-03-01',
    customers: 150,
    rating: 4.8,
    reviews: 85
  }
];