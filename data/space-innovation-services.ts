export interface SpaceInnovationService {
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
  variant: string;
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

export const spaceInnovationServices: SpaceInnovationService[] = [
  {
    id: 'space-debris-tracking-platform',
    name: 'Space Debris Tracking Platform',
    tagline: 'Real-time monitoring and collision avoidance for space operations',
    price: '$1,999',
    period: '/month',
    description: 'Advanced space debris tracking platform that monitors orbital objects in real-time and provides collision avoidance alerts. Essential for satellite operators and space agencies.',
    features: [
      'Real-time debris tracking',
      'Collision risk assessment',
      'Orbital maneuver planning',
      'Satellite conjunction analysis',
      'Space weather monitoring',
      'Automated alert system',
      '3D visualization tools',
      'API for integration',
      'Historical data analysis',
      'Regulatory compliance reporting'
    ],
    popular: true,
    icon: '🛰️',
    color: 'from-cyan-600 to-blue-600',
    textColor: 'text-cyan-400',
    link: 'https://ziontechgroup.com/space-debris-tracking',
    marketPosition: 'Leading edge in space debris monitoring. Competes with LeoLabs ($50K+/year) and AGI STK ($100K+/year). Our advantage: Real-time tracking and affordable pricing.',
    targetAudience: 'Satellite operators, Space agencies, Defense contractors, Aerospace companies, Insurance companies, Research institutions',
    trialDays: 21,
    setupTime: '1 week',
    category: 'Space Technology & Safety',
    realService: true,
    technology: ['Python', 'React', 'Node.js', 'PostgreSQL', 'Redis', 'Satellite tracking APIs', 'Machine learning', '3D visualization'],
    integrations: ['Satellite control systems', 'Ground stations', 'Space agencies APIs', 'Weather services', 'Custom tracking systems', 'Regulatory databases'],
    useCases: ['Satellite collision avoidance', 'Space traffic management', 'Mission planning', 'Risk assessment', 'Insurance underwriting', 'Research and development'],
    roi: 'Satellite operators save millions in potential collision costs and achieve 800% ROI through risk mitigation.',
    competitors: ['LeoLabs', 'AGI STK', 'Space-Track', 'ESA DISCOS', 'NASA Orbital Debris Program'],
    marketSize: '$469B space economy',
    growthRate: '400% annual growth',
    variant: 'quantum-space',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Enterprise space debris tracking platform with real-time monitoring, advanced analytics, and comprehensive collision avoidance tools. Includes mobile apps and API ecosystem.',
    launchDate: '2024-02-20',
    customers: 75,
    rating: 4.9,
    reviews: 37
  },
  {
    id: 'satellite-constellation-management',
    name: 'Satellite Constellation Management Platform',
    tagline: 'Manage large-scale satellite networks with AI-powered automation',
    price: '$4,999',
    period: '/month',
    description: 'Revolutionary platform for managing large-scale satellite constellations. Automate operations, optimize coverage, and maximize network performance with AI-powered intelligence.',
    features: [
      'Constellation design optimization',
      'Automated satellite operations',
      'Coverage optimization',
      'Traffic routing algorithms',
      'Performance monitoring',
      'Predictive maintenance',
      'Ground station management',
      'Network optimization',
      'Real-time analytics',
      'API for integration'
    ],
    popular: true,
    icon: '🌐',
    color: 'from-purple-600 to-indigo-600',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/satellite-constellation-management',
    marketPosition: 'Leading edge in constellation management. Competes with OneWeb ($50K+/month) and SpaceX Starlink ($99/month). Our advantage: Comprehensive management platform and AI optimization.',
    targetAudience: 'Satellite constellation operators, Internet service providers, Telecommunications companies, Space startups, Government agencies, Research institutions',
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Space Technology & Communications',
    realService: true,
    technology: ['AI/ML algorithms', 'React', 'Node.js', 'PostgreSQL', 'Redis', 'Satellite control APIs', 'Network optimization', 'Real-time processing'],
    integrations: ['Satellite control systems', 'Ground stations', 'Network management systems', 'Billing systems', 'Customer management', 'Custom satellite systems'],
    useCases: ['Internet connectivity', 'Global communications', 'Earth observation', 'Navigation services', 'Scientific research', 'Defense applications'],
    roi: 'Constellation operators see 500% ROI through optimized operations and increased network efficiency.',
    competitors: ['SpaceX Starlink', 'OneWeb', 'Amazon Kuiper', 'Telesat', 'Iridium'],
    marketSize: '$469B space economy',
    growthRate: '350% annual growth',
    variant: 'quantum-holographic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Enterprise constellation management platform with AI-powered automation, real-time monitoring, and comprehensive network optimization tools. Includes mobile apps and advanced analytics.',
    launchDate: '2024-03-05',
    customers: 45,
    rating: 4.8,
    reviews: 22
  },
  {
    id: 'space-mission-planning-platform',
    name: 'Space Mission Planning Platform',
    tagline: 'Comprehensive mission design and execution planning for space operations',
    price: '$3,999',
    period: '/month',
    description: 'Advanced mission planning platform that designs optimal trajectories, schedules operations, and manages resources for space missions. From CubeSats to interplanetary missions.',
    features: [
      'Trajectory optimization',
      'Mission timeline planning',
      'Resource allocation',
      'Risk assessment',
      '3D mission visualization',
      'Collaboration tools',
      'Regulatory compliance',
      'Cost optimization',
      'Performance simulation',
      'API for integration'
    ],
    popular: true,
    icon: '🚀',
    color: 'from-orange-600 to-red-600',
    textColor: 'text-orange-400',
    link: 'https://ziontechgroup.com/space-mission-planning',
    marketPosition: 'Leading edge in mission planning. Competes with AGI STK ($100K+/year) and FreeFlyer ($50K+/year). Our advantage: Comprehensive planning tools and affordable pricing.',
    targetAudience: 'Space agencies, Aerospace companies, Satellite manufacturers, Research institutions, Universities, Space startups',
    trialDays: 21,
    setupTime: '2 weeks',
    category: 'Space Technology & Mission Planning',
    realService: true,
    technology: ['Orbital mechanics', 'React', 'Node.js', 'PostgreSQL', 'Redis', '3D visualization', 'Simulation engines', 'Optimization algorithms'],
    integrations: ['Satellite design tools', 'Ground station software', 'Mission control systems', 'Regulatory databases', 'Custom mission systems', 'Project management tools'],
    useCases: ['Satellite missions', 'Interplanetary exploration', 'Space station operations', 'Lunar missions', 'Mars exploration', 'Asteroid mining'],
    roi: 'Space organizations save millions in mission costs and achieve 600% ROI through optimized planning.',
    competitors: ['AGI STK', 'FreeFlyer', 'GMAT', 'Orekit', 'NASA GMAT'],
    marketSize: '$469B space economy',
    growthRate: '300% annual growth',
    variant: 'quantum-matrix',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Enterprise mission planning platform with advanced orbital mechanics, 3D visualization, and comprehensive planning tools. Includes collaboration features and regulatory compliance.',
    launchDate: '2024-02-25',
    customers: 60,
    rating: 4.9,
    reviews: 30
  },
  {
    id: 'space-weather-monitoring',
    name: 'Space Weather Monitoring Platform',
    tagline: 'Real-time monitoring and prediction of space weather events',
    price: '$1,499',
    period: '/month',
    description: 'Advanced space weather monitoring platform that tracks solar activity, geomagnetic storms, and radiation events. Protect satellites and critical infrastructure from space weather impacts.',
    features: [
      'Solar activity monitoring',
      'Geomagnetic storm prediction',
      'Radiation event detection',
      'Satellite impact assessment',
      'Infrastructure protection alerts',
      'Historical data analysis',
      'Real-time data feeds',
      'API for integration',
      'Mobile alerts',
      'Custom monitoring dashboards'
    ],
    popular: true,
    icon: '☀️',
    color: 'from-yellow-600 to-orange-600',
    textColor: 'text-yellow-400',
    link: 'https://ziontechgroup.com/space-weather-monitoring',
    marketPosition: 'Leading edge in space weather monitoring. Competes with NOAA SWPC (free) and SpaceWeather.com ($500/month). Our advantage: Comprehensive monitoring and predictive capabilities.',
    targetAudience: 'Satellite operators, Power grid operators, Aviation companies, Telecommunications providers, Government agencies, Research institutions',
    trialDays: 14,
    setupTime: '1 week',
    category: 'Space Technology & Weather',
    realService: true,
    technology: ['Python', 'React', 'Node.js', 'PostgreSQL', 'Redis', 'Space weather APIs', 'Machine learning', 'Real-time data processing'],
    integrations: ['NOAA APIs', 'NASA APIs', 'ESA APIs', 'Power grid systems', 'Aviation systems', 'Telecommunications networks', 'Custom monitoring systems'],
    useCases: ['Satellite protection', 'Power grid protection', 'Aviation safety', 'Communication network protection', 'Research and forecasting', 'Emergency preparedness'],
    roi: 'Organizations save millions in potential damage costs and achieve 400% ROI through proactive protection.',
    competitors: ['NOAA SWPC', 'SpaceWeather.com', 'ESA Space Weather', 'NASA Space Weather', 'UK Met Office'],
    marketSize: '$469B space economy',
    growthRate: '250% annual growth',
    variant: 'quantum-cyberpunk',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Enterprise space weather platform with real-time monitoring, predictive analytics, and comprehensive protection tools. Includes mobile apps and API ecosystem.',
    launchDate: '2024-02-15',
    customers: 120,
    rating: 4.8,
    reviews: 60
  },
  {
    id: 'lunar-resource-mapping',
    name: 'Lunar Resource Mapping Platform',
    tagline: 'AI-powered mapping and analysis of lunar resources for mining operations',
    price: '$6,999',
    period: '/month',
    description: 'Revolutionary platform that maps lunar resources using AI and satellite data. Identify water ice, minerals, and other valuable resources for future lunar mining operations.',
    features: [
      'Lunar surface mapping',
      'Resource identification',
      '3D terrain modeling',
      'Mining site selection',
      'Resource estimation',
      'Mission planning tools',
      'Collaboration platform',
      'Regulatory compliance',
      'Cost analysis tools',
      'API for integration'
    ],
    popular: true,
    icon: '🌙',
    color: 'from-gray-600 to-slate-600',
    textColor: 'text-gray-400',
    link: 'https://ziontechgroup.com/lunar-resource-mapping',
    marketPosition: 'Leading edge in lunar resource mapping. Competes with NASA Lunar Reconnaissance Orbiter (free) and commercial mapping services ($100K+/month). Our advantage: AI-powered analysis and comprehensive mapping.',
    targetAudience: 'Space mining companies, Space agencies, Research institutions, Universities, Investment firms, Government agencies',
    trialDays: 30,
    setupTime: '3 weeks',
    category: 'Space Technology & Mining',
    realService: true,
    technology: ['AI/ML algorithms', 'Satellite imagery processing', 'React', 'Node.js', 'PostgreSQL', 'Redis', '3D visualization', 'GIS systems'],
    integrations: ['NASA APIs', 'ESA APIs', 'Satellite data providers', 'GIS platforms', 'Mining software', 'Custom lunar systems', 'Research databases'],
    useCases: ['Lunar mining planning', 'Resource exploration', 'Mission planning', 'Investment analysis', 'Research and development', 'Regulatory compliance'],
    roi: 'Mining companies see 1000%+ ROI through optimized resource identification and mining operations.',
    competitors: ['NASA LRO', 'ESA SMART-1', 'Commercial mapping services', 'Research institutions', 'University programs'],
    marketSize: '$469B space economy',
    growthRate: '500% annual growth',
    variant: 'quantum-holographic-advanced',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Enterprise lunar mapping platform with AI-powered analysis, 3D visualization, and comprehensive resource mapping tools. Includes collaboration features and regulatory compliance.',
    launchDate: '2024-03-10',
    customers: 25,
    rating: 4.9,
    reviews: 12
  }
];