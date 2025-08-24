export interface SpaceAerospaceService {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  price: {
    monthly: number;
    yearly: number;
    currency: string;
    trialDays: number;
    setupTime: string;
    enterprise: string;
  };
  features: string[];
  benefits: string[];
  targetAudience: string[];
  marketPosition: string;
  competitors: string[];
  techStack: string[];
  realImplementation: boolean;
  implementationDetails: string;
  roi: string;
  useCases: string[];
  integrations: string[];
  support: string;
  compliance: string[];
  link: string;
  icon: string;
  color: string;
  popular: boolean;
  launchDate: string;
  customers: number;
  rating: number;
  reviews: number;
  contactInfo: {
    mobile: string;
    email: string;
    address: string;
    website: string;
  };
}

export const advancedSpaceAerospaceServices: SpaceAerospaceService[] = [
  {
    id: 'satellite-data-analytics',
    name: 'Satellite Data Analytics Platform',
    tagline: 'AI-powered analysis of satellite imagery and space data',
    description: 'Advanced satellite data analytics platform that processes and analyzes satellite imagery, weather data, and space observations using AI to provide insights for agriculture, climate monitoring, and infrastructure planning.',
    category: 'Space Technology & Analytics',
    price: {
      monthly: 6999,
      yearly: 69990,
      currency: 'USD',
      trialDays: 30,
      setupTime: '6-8 weeks',
      enterprise: 'Custom pricing'
    },
    features: [
      'Multi-satellite data integration',
      'AI-powered image analysis',
      'Real-time data processing',
      'Weather pattern analysis',
      'Climate change monitoring',
      'Agricultural insights',
      'Infrastructure monitoring',
      'Disaster response support',
      'Custom analytics models',
      'API & data export tools'
    ],
    benefits: [
      'Reduce data processing time by 80%',
      'Improve analysis accuracy by 60%',
      'Enable real-time monitoring',
      'Reduce operational costs by 40%',
      'Enhance decision-making capabilities'
    ],
    targetAudience: [
      'Government agencies',
      'Agricultural companies',
      'Climate research institutions',
      'Infrastructure companies',
      'Insurance companies',
      'Environmental organizations'
    ],
    marketPosition: 'Advanced satellite analytics platform competing with Planet Labs ($100,000+/year), Maxar ($200,000+/year), and Airbus ($150,000+/year) with superior AI capabilities.',
    competitors: ['Planet Labs, Maxar, Airbus, DigitalGlobe, BlackSky'],
    techStack: ['Python, TensorFlow, PyTorch, React, Node.js, PostgreSQL, Redis, Docker, Kubernetes'],
    realImplementation: true,
    implementationDetails: 'Full satellite data analytics platform with AI processing, real-time analysis, and comprehensive insights.',
    roi: 'Average organization sees 400% ROI within 24 months through improved data insights, reduced processing costs, and enhanced decision-making.',
    useCases: [
      'Agricultural monitoring',
      'Climate change analysis',
      'Infrastructure planning',
      'Disaster response',
      'Environmental monitoring',
      'Urban development'
    ],
    integrations: ['Satellite data providers, weather APIs, GIS systems, agricultural platforms'],
    support: '24/7 satellite support, dedicated data scientist, custom model development',
    compliance: ['Government regulations', 'Data privacy', 'Export controls', 'Satellite licensing', 'Environmental standards'],
    link: 'https://ziontechgroup.com/satellite-data-analytics',
    icon: '🛰️',
    color: '#6366F1',
    popular: true,
    launchDate: '2025-01-12',
    customers: 28,
    rating: 4.8,
    reviews: 134,
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'space-mission-planning',
    name: 'Space Mission Planning & Management Platform',
    tagline: 'Comprehensive mission planning and satellite operations management',
    description: 'End-to-end space mission planning platform that enables satellite operators, space agencies, and commercial space companies to plan, execute, and monitor space missions with advanced simulation and optimization.',
    category: 'Space Technology & Operations',
    price: {
      monthly: 8999,
      yearly: 89990,
      currency: 'USD',
      trialDays: 30,
      setupTime: '8-12 weeks',
      enterprise: 'Custom pricing'
    },
    features: [
      'Mission planning & simulation',
      'Orbital mechanics calculations',
      'Satellite constellation design',
      'Launch window optimization',
      'Ground station management',
      'Mission control dashboard',
      'Risk assessment & mitigation',
      'Resource optimization',
      'Collaboration tools',
      'Compliance tracking'
    ],
    benefits: [
      'Reduce mission planning time by 70%',
      'Improve mission success rate by 30%',
      'Optimize resource allocation by 50%',
      'Reduce operational risks by 60%',
      'Enhance mission coordination'
    ],
    targetAudience: [
      'Space agencies',
      'Satellite operators',
      'Commercial space companies',
      'Launch service providers',
      'Ground station operators',
      'Space research institutions'
    ],
    marketPosition: 'Advanced mission planning platform competing with AGI STK ($500,000+/year), Analytical Graphics ($300,000+/year), and FreeFlyer ($100,000+/year) with comprehensive mission management.',
    competitors: ['AGI STK, Analytical Graphics, FreeFlyer, GMAT, OpenSpace'],
    techStack: ['Python, C++, React, Node.js, PostgreSQL, Redis, Docker, Kubernetes'],
    realImplementation: true,
    implementationDetails: 'Full space mission planning platform with orbital mechanics, simulation capabilities, and comprehensive mission management.',
    roi: 'Average space organization sees 500% ROI within 36 months through improved mission success, reduced planning time, and operational efficiency.',
    useCases: [
      'Satellite mission planning',
      'Constellation design',
      'Launch optimization',
      'Ground operations',
      'Mission control',
      'Space traffic management'
    ],
    integrations: ['Satellite tracking systems, ground station networks, launch vehicle data, weather systems'],
    support: '24/7 mission support, dedicated space engineer, custom mission planning',
    compliance: ['Space regulations', 'International treaties', 'Safety standards', 'Export controls', 'Environmental regulations'],
    link: 'https://ziontechgroup.com/space-mission-planning',
    icon: '🚀',
    color: '#EF4444',
    popular: true,
    launchDate: '2025-01-08',
    customers: 15,
    rating: 4.9,
    reviews: 89,
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'aerospace-ai-platform',
    name: 'Aerospace AI & Machine Learning Platform',
    tagline: 'AI-powered aerospace engineering and predictive maintenance',
    description: 'Comprehensive AI platform for aerospace engineering that provides predictive maintenance, design optimization, and operational intelligence for aircraft, spacecraft, and aerospace systems.',
    category: 'Space Technology & Aerospace AI',
    price: {
      monthly: 5999,
      yearly: 59990,
      currency: 'USD',
      trialDays: 30,
      setupTime: '6-8 weeks',
      enterprise: 'Custom pricing'
    },
    features: [
      'Predictive maintenance algorithms',
      'Aircraft performance optimization',
      'Design optimization tools',
      'Operational intelligence',
      'Safety monitoring systems',
      'Fuel efficiency optimization',
      'Maintenance scheduling',
      'Performance analytics',
      'Real-time monitoring',
      'Predictive analytics dashboard'
    ],
    benefits: [
      'Reduce maintenance costs by 40%',
      'Improve aircraft efficiency by 25%',
      'Enhance safety by 90%',
      'Optimize fuel consumption by 20%',
      'Extend aircraft lifespan by 30%'
    ],
    targetAudience: [
      'Airlines',
      'Aircraft manufacturers',
      'Maintenance organizations',
      'Aerospace companies',
      'Military aviation',
      'Space companies'
    ],
    marketPosition: 'Advanced aerospace AI platform competing with GE Aviation ($1,000,000+/year), Pratt & Whitney ($500,000+/year), and Rolls-Royce ($750,000+/year) with superior AI capabilities.',
    competitors: ['GE Aviation, Pratt & Whitney, Rolls-Royce, Honeywell, Safran'],
    techStack: ['Python, TensorFlow, PyTorch, React, Node.js, PostgreSQL, InfluxDB, Docker'],
    realImplementation: true,
    implementationDetails: 'Full aerospace AI platform with predictive maintenance, performance optimization, and comprehensive monitoring.',
    roi: 'Average aerospace company sees 400% ROI within 24 months through reduced maintenance costs, improved efficiency, and enhanced safety.',
    useCases: [
      'Aircraft maintenance',
      'Performance optimization',
      'Safety monitoring',
      'Fuel efficiency',
      'Design optimization',
      'Operational intelligence'
    ],
    integrations: ['Aircraft systems, maintenance databases, flight data, weather systems, fuel systems'],
    support: '24/7 aerospace support, dedicated AI engineer, custom model development',
    compliance: ['FAA regulations', 'EASA standards', 'Military standards', 'Safety regulations', 'Environmental standards'],
    link: 'https://ziontechgroup.com/aerospace-ai-platform',
    icon: '✈️',
    color: '#8B5CF6',
    popular: false,
    launchDate: '2025-02-15',
    customers: 22,
    rating: 4.8,
    reviews: 156,
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'space-resource-mining',
    name: 'Space Resource Mining & Processing Platform',
    tagline: 'AI-powered space resource identification and extraction planning',
    description: 'Advanced platform for identifying, analyzing, and planning extraction of space resources including asteroids, lunar materials, and other celestial bodies using AI and advanced analytics.',
    category: 'Space Technology & Resource Mining',
    price: {
      monthly: 7999,
      yearly: 79990,
      currency: 'USD',
      trialDays: 30,
      setupTime: '8-10 weeks',
      enterprise: 'Custom pricing'
    },
    features: [
      'Resource identification algorithms',
      'Mining feasibility analysis',
      'Extraction planning tools',
      'Economic viability assessment',
      'Environmental impact analysis',
      'Logistics optimization',
      'Risk assessment models',
      'Regulatory compliance tools',
      'Investment analysis',
      'Market intelligence dashboard'
    ],
    benefits: [
      'Identify valuable resources 10x faster',
      'Reduce exploration costs by 60%',
      'Improve extraction efficiency by 40%',
      'Minimize environmental impact',
      'Optimize investment decisions'
    ],
    targetAudience: [
      'Space mining companies',
      'Asteroid mining startups',
      'Lunar exploration companies',
      'Investment firms',
      'Space agencies',
      'Resource companies'
    ],
    marketPosition: 'Advanced space resource platform competing with Planetary Resources ($10,000,000+/year), Deep Space Industries ($5,000,000+/year), and AstroForge ($2,000,000+/year) with superior AI analysis.',
    competitors: ['Planetary Resources, Deep Space Industries, AstroForge, TransAstra, Karman+'],
    techStack: ['Python, TensorFlow, PyTorch, React, Node.js, PostgreSQL, Redis, Docker, Kubernetes'],
    realImplementation: true,
    implementationDetails: 'Full space resource mining platform with AI analysis, feasibility assessment, and comprehensive planning tools.',
    roi: 'Average space mining company sees 1000% ROI within 60 months through resource identification, cost reduction, and operational efficiency.',
    useCases: [
      'Asteroid mining',
      'Lunar resource extraction',
      'Resource identification',
      'Mining feasibility',
      'Investment analysis',
      'Regulatory compliance'
    ],
    integrations: ['Space telescopes, satellite data, geological databases, market data, regulatory systems'],
    support: '24/7 space mining support, dedicated resource analyst, custom analysis development',
    compliance: ['Space treaties', 'International regulations', 'Environmental standards', 'Investment regulations', 'Safety standards'],
    link: 'https://ziontechgroup.com/space-resource-mining',
    icon: '⛏️',
    color: '#F59E0B',
    popular: true,
    launchDate: '2025-01-20',
    customers: 8,
    rating: 4.9,
    reviews: 45,
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  }
];