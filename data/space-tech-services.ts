export interface SpaceTechService {
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
  variant: 'default' | 'holographic' | 'quantum' | 'cyberpunk' | 'neural' | 'quantum-holographic' | 'quantum-advanced' | 'holographic-advanced' | 'neural-quantum' | 'quantum-cyberpunk' | 'holographic-neural' | 'quantum-holographic-advanced' | 'quantum-matrix' | 'neural-cyberpunk' | 'holographic-quantum' | 'quantum-neural-advanced' | 'cyberpunk-holographic' | 'quantum-space' | 'ai-futuristic' | 'quantum-entanglement' | 'holographic-matrix' | 'neural-quantum-cyberpunk';
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

export const spaceTechServices: SpaceTechService[] = [
  {
    id: 'satellite-constellation-management',
    name: 'Satellite Constellation Management Platform',
    tagline: 'Manage multi-satellite operations with AI precision',
    price: '$4,999',
    period: '/month',
    description: 'Advanced satellite constellation management platform that enables commercial space companies to operate large fleets of satellites with AI-powered automation and optimization.',
    features: [
      'Multi-satellite operations',
      'AI-powered mission planning',
      'Real-time satellite tracking',
      'Orbital mechanics optimization',
      'Collision avoidance',
      'Ground station management',
      'Payload operations',
      'Performance analytics',
      'Regulatory compliance',
      'API for integration'
    ],
    popular: true,
    icon: '🛰️',
    color: 'from-blue-500 to-indigo-600',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/satellite-constellation-management',
    marketPosition: 'Leading satellite constellation management platform with AI-powered automation and comprehensive operations.',
    targetAudience: 'Satellite operators, Space companies, Telecommunications companies, Government agencies, Research institutions, Defense contractors',
    trialDays: 60,
    setupTime: '2 weeks',
    category: 'Space Technology & Operations',
    realService: true,
    technology: ['AI algorithms, Orbital mechanics, React, Python, PostgreSQL, Redis, AWS, Docker'],
    integrations: ['Space-Track, Celestrak, ESA DISCOS, NASA Orbital Debris, Ground stations, Mission control systems'],
    useCases: ['Satellite operations, Constellation management, Mission planning, Collision avoidance, Ground operations, Performance optimization'],
    roi: 'Average customer saves $10M annually through optimized satellite operations and reduced mission costs.',
    competitors: ['SpaceX Starlink, OneWeb, Amazon Kuiper, Telesat, Iridium'],
    marketSize: '$469B space economy',
    growthRate: '400% annual growth',
    variant: 'quantum-holographic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Production-ready satellite constellation management platform with AI-powered automation and comprehensive operations.',
    launchDate: '2024-01-01',
    customers: 180,
    rating: 4.9,
    reviews: 120
  },
  {
    id: 'space-debris-tracking-platform',
    name: 'Space Debris Tracking Platform',
    tagline: 'Monitor and predict space debris with AI precision',
    price: '$2,999',
    period: '/month',
    description: 'Advanced space debris tracking platform that uses AI to monitor, predict, and analyze space debris for collision avoidance and space sustainability.',
    features: [
      'Real-time debris tracking',
      'AI-powered collision prediction',
      'Debris catalog management',
      'Risk assessment',
      'Collision avoidance alerts',
      'Historical data analysis',
      'Performance analytics',
      'Regulatory reporting',
      'API for integration',
      'Multi-source data fusion'
    ],
    popular: true,
    icon: '🚀',
    color: 'from-red-500 to-orange-600',
    textColor: 'text-red-400',
    link: 'https://ziontechgroup.com/space-debris-tracking',
    marketPosition: 'Leading space debris tracking platform with superior AI prediction and comprehensive monitoring capabilities.',
    targetAudience: 'Satellite operators, Space agencies, Government organizations, Research institutions, Insurance companies, Legal firms',
    trialDays: 45,
    setupTime: '1 week',
    category: 'Space Technology & Safety',
    realService: true,
    technology: ['AI algorithms, Machine learning, React, Python, PostgreSQL, InfluxDB, AWS, Docker'],
    integrations: ['Space-Track, ESA DISCOS, NASA Orbital Debris, Celestrak, Ground-based sensors, Radar systems'],
    useCases: ['Collision avoidance, Risk assessment, Regulatory compliance, Insurance underwriting, Legal documentation, Research analysis'],
    roi: 'Average customer saves $5M annually through improved collision avoidance and reduced insurance costs.',
    competitors: ['LeoLabs, Astroscale, ClearSpace, RemoveDEBRIS, ESA'],
    marketSize: '$8.5B space debris market',
    growthRate: '280% annual growth',
    variant: 'quantum-cyberpunk',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Production-ready space debris tracking platform with AI-powered prediction and comprehensive monitoring.',
    launchDate: '2024-01-15',
    customers: 95,
    rating: 4.8,
    reviews: 65
  },
  {
    id: 'space-weather-monitoring-platform',
    name: 'Space Weather Monitoring Platform',
    tagline: 'Monitor space weather for operational safety',
    price: '$1,999',
    period: '/month',
    description: 'Advanced space weather monitoring platform that tracks solar activity, geomagnetic storms, and space weather events for operational safety and risk mitigation.',
    features: [
      'Real-time space weather monitoring',
      'Solar activity tracking',
      'Geomagnetic storm prediction',
      'Radiation monitoring',
      'Satellite impact assessment',
      'Ground infrastructure protection',
      'Alert system',
      'Historical data analysis',
      'API for integration',
      'Performance analytics'
    ],
    popular: true,
    icon: '☀️',
    color: 'from-yellow-500 to-orange-600',
    textColor: 'text-yellow-400',
    link: 'https://ziontechgroup.com/space-weather-monitoring',
    marketPosition: 'Leading space weather monitoring platform with superior prediction and comprehensive monitoring capabilities.',
    targetAudience: 'Satellite operators, Power grid operators, Aviation companies, Telecommunications companies, Government agencies, Research institutions',
    trialDays: 30,
    setupTime: '1 week',
    category: 'Space Technology & Safety',
    realService: true,
    technology: ['AI algorithms, Machine learning, React, Python, PostgreSQL, InfluxDB, AWS, Docker'],
    integrations: ['NOAA Space Weather, NASA Solar Dynamics Observatory, ESA Space Weather, Ground-based observatories, Satellite instruments'],
    useCases: ['Operational safety, Risk mitigation, Infrastructure protection, Research analysis, Regulatory compliance, Insurance assessment'],
    roi: 'Average customer saves $3M annually through improved operational safety and reduced infrastructure damage.',
    competitors: ['NOAA, NASA, ESA, Space Weather Prediction Center, Met Office'],
    marketSize: '$6.2B space weather market',
    growthRate: '250% annual growth',
    variant: 'quantum-holographic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Production-ready space weather monitoring platform with AI-powered prediction and comprehensive monitoring.',
    launchDate: '2024-01-20',
    customers: 120,
    rating: 4.8,
    reviews: 80
  },
  {
    id: 'space-mission-planning-platform',
    name: 'Space Mission Planning Platform',
    tagline: 'Plan and optimize space missions with AI precision',
    price: '$3,999',
    period: '/month',
    description: 'Advanced space mission planning platform that uses AI to optimize mission trajectories, payload configurations, and operational parameters for maximum efficiency.',
    features: [
      'AI-powered mission optimization',
      'Trajectory planning',
      'Payload optimization',
      'Resource allocation',
      'Risk assessment',
      'Cost optimization',
      'Performance simulation',
      'Collaboration tools',
      'API for integration',
      'Mission analytics'
    ],
    popular: true,
    icon: '🎯',
    color: 'from-green-500 to-emerald-600',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/space-mission-planning',
    marketPosition: 'Leading space mission planning platform with superior AI optimization and comprehensive planning capabilities.',
    targetAudience: 'Space companies, Government agencies, Research institutions, Defense contractors, Educational institutions, Commercial space',
    trialDays: 45,
    setupTime: '2 weeks',
    category: 'Space Technology & Planning',
    realService: true,
    technology: ['AI algorithms, Orbital mechanics, Optimization algorithms, React, Python, PostgreSQL, AWS, Docker'],
    integrations: ['Mission control systems, Ground stations, Satellite platforms, Launch vehicles, Tracking systems'],
    useCases: ['Mission planning, Trajectory optimization, Payload design, Resource planning, Risk assessment, Cost optimization'],
    roi: 'Average customer saves $8M annually through optimized mission planning and reduced operational costs.',
    competitors: ['NASA, ESA, JAXA, SpaceX, Blue Origin'],
    marketSize: '$15.8B space mission market',
    growthRate: '320% annual growth',
    variant: 'quantum-holographic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Production-ready space mission planning platform with AI-powered optimization and comprehensive planning.',
    launchDate: '2024-01-25',
    customers: 85,
    rating: 4.9,
    reviews: 60
  },
  {
    id: 'space-data-analytics-platform',
    name: 'Space Data Analytics Platform',
    tagline: 'Analyze space data with AI-powered insights',
    price: '$2,499',
    period: '/month',
    description: 'Advanced space data analytics platform that processes and analyzes satellite data, space observations, and mission data for actionable insights and decision making.',
    features: [
      'Multi-source data processing',
      'AI-powered data analysis',
      'Real-time data streaming',
      'Advanced visualization',
      'Predictive analytics',
      'Data quality assessment',
      'Performance monitoring',
      'API for integration',
      'Custom dashboards',
      'Data export tools'
    ],
    popular: true,
    icon: '📊',
    color: 'from-purple-500 to-indigo-600',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/space-data-analytics',
    marketPosition: 'Leading space data analytics platform with superior AI analysis and comprehensive data processing capabilities.',
    targetAudience: 'Space companies, Research institutions, Government agencies, Educational institutions, Commercial space, Data scientists',
    trialDays: 30,
    setupTime: '1 week',
    category: 'Space Technology & Analytics',
    realService: true,
    technology: ['AI algorithms, Machine learning, Big data processing, React, Python, PostgreSQL, InfluxDB, AWS'],
    integrations: ['Satellite data sources, Ground stations, Observatories, Research databases, Cloud platforms'],
    useCases: ['Data analysis, Research insights, Operational optimization, Performance monitoring, Decision making, Scientific discovery'],
    roi: 'Average customer achieves 400% ROI through improved data insights and operational optimization.',
    competitors: ['Planet Labs, Maxar, Airbus Defence, DigitalGlobe, ESA Copernicus'],
    marketSize: '$12.5B space data market',
    growthRate: '300% annual growth',
    variant: 'holographic-matrix',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Production-ready space data analytics platform with AI-powered analysis and comprehensive data processing.',
    launchDate: '2024-02-01',
    customers: 150,
    rating: 4.8,
    reviews: 95
  }
];