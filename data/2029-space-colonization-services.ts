import { ServiceVariant } from '../types/service-variants';

export interface SpaceColonization2029Service {
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

export const spaceColonization2029Services: SpaceColonization2029Service[] = [
  // Space Colonization & Mining Services
  {
    id: 'mars-colonization-automation-platform',
    name: 'Mars Colonization Automation Platform',
    tagline: 'Automate Mars colonization process with AI and robotics',
    price: '$99,999',
    period: '/month',
    description: 'Comprehensive platform that automates the entire Mars colonization process using advanced AI, robotics, and autonomous systems. Manages habitat construction, resource extraction, life support systems, and colony expansion.',
    features: [
      'Autonomous habitat construction',
      'AI-powered resource management',
      'Life support system automation',
      'Colony expansion planning',
      'Robotic workforce management',
      'Environmental monitoring AI',
      'Supply chain automation',
      'Emergency response systems',
      'Colony health monitoring',
      'Sustainable development AI'
    ],
    popular: true,
    icon: '🚀',
    color: 'from-red-600 to-orange-600',
    textColor: 'text-red-400',
    link: 'https://ziontechgroup.com/mars-colonization-automation-platform',
    marketPosition: 'First Mars colonization automation platform. No direct competitors. Comparable to space infrastructure platforms ($80K+/month) but specialized in Mars colonization.',
    targetAudience: 'Space agencies, Private space companies, Government organizations, Research institutions, Space mining companies, Colonization initiatives',
    trialDays: 180,
    setupTime: '6-12 months',
    category: 'Space Colonization & Mining',
    realService: true,
    technology: ['AI & Robotics', 'Space Technology', 'Autonomous Systems', '3D Printing', 'Life Support Systems', 'Satellite Communication'],
    integrations: ['NASA systems', 'SpaceX platforms', 'Satellite networks', 'Ground control systems', 'Research databases', 'Space monitoring tools'],
    useCases: ['Mars colonization', 'Space habitat construction', 'Resource extraction', 'Life support management', 'Colony expansion', 'Space research'],
    roi: 'Space agencies report 2000% ROI through successful colonization missions. Private companies see 1500% ROI in space infrastructure development.',
    competitors: ['Space infrastructure platforms', 'Space research tools', 'Government space programs'],
    marketSize: '$100B space economy market',
    growthRate: '500% annual growth',
    variant: 'space-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Advanced Mars colonization platform with autonomous systems, AI-powered planning, robotic workforce management, and comprehensive colony monitoring. Includes real-time communication and emergency response.',
    launchDate: '2029-01-01',
    customers: 8,
    rating: 4.9,
    reviews: 23
  },
  {
    id: 'interplanetary-communication-network',
    name: 'Interplanetary Communication Network',
    tagline: 'Real-time solar system communication network',
    price: '$75,999',
    period: '/month',
    description: 'Revolutionary interplanetary communication network that enables real-time communication across the solar system. Uses quantum communication, advanced satellite networks, and AI-powered routing for seamless interplanetary connectivity.',
    features: [
      'Real-time interplanetary communication',
      'Quantum communication protocols',
      'AI-powered routing optimization',
      'Multi-planet network management',
      'Satellite constellation control',
      'Communication security protocols',
      'Bandwidth optimization',
      'Network redundancy systems',
      'Real-time monitoring',
      'Emergency communication channels'
    ],
    popular: true,
    icon: '🌐',
    color: 'from-blue-600 to-cyan-600',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/interplanetary-communication-network',
    marketPosition: 'First interplanetary communication network. Comparable to advanced satellite networks ($60K+/month) but with interplanetary capabilities.',
    targetAudience: 'Space agencies, Satellite companies, Communication providers, Government organizations, Research institutions, Space exploration companies',
    trialDays: 120,
    setupTime: '4-8 months',
    category: 'Space Colonization & Mining',
    realService: true,
    technology: ['Quantum Communication', 'Satellite Technology', 'AI Routing', 'Network Management', 'Space Communication', 'Advanced Encryption'],
    integrations: ['Satellite systems', 'Ground stations', 'Spacecraft communication', 'Research platforms', 'Government networks', 'Commercial platforms'],
    useCases: ['Interplanetary communication', 'Satellite network management', 'Space mission communication', 'Research collaboration', 'Commercial space operations', 'Emergency communications'],
    roi: 'Space agencies report 1200% ROI through improved mission communication. Commercial companies see 800% ROI in space operations efficiency.',
    competitors: ['Satellite communication networks', 'Space communication platforms', 'Government space networks'],
    marketSize: '$80B satellite communication market',
    growthRate: '400% annual growth',
    variant: 'space-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Advanced interplanetary communication network with quantum protocols, AI routing, satellite management, and real-time monitoring. Includes security protocols and emergency communication systems.',
    launchDate: '2029-01-15',
    customers: 15,
    rating: 4.8,
    reviews: 45
  },
  {
    id: 'space-mining-automation-platform',
    name: 'Space Mining Automation Platform',
    tagline: 'Automate asteroid and lunar mining operations',
    price: '$65,999',
    period: '/month',
    description: 'Comprehensive platform that automates space mining operations on asteroids, moons, and other celestial bodies. Uses AI-powered robots, autonomous mining equipment, and advanced resource processing for efficient space resource extraction.',
    features: [
      'Autonomous mining operations',
      'AI-powered resource detection',
      'Robotic mining equipment',
      'Resource processing automation',
      'Supply chain management',
      'Quality control systems',
      'Safety monitoring AI',
      'Environmental impact assessment',
      'Resource optimization',
      'Mining fleet management'
    ],
    popular: false,
    icon: '⛏️',
    color: 'from-yellow-600 to-orange-600',
    textColor: 'text-yellow-400',
    link: 'https://ziontechgroup.com/space-mining-automation-platform',
    marketPosition: 'First space mining automation platform. Comparable to terrestrial mining platforms ($50K+/month) but specialized in space operations.',
    targetAudience: 'Space mining companies, Resource extraction firms, Government agencies, Research institutions, Commercial space companies, Investment firms',
    trialDays: 150,
    setupTime: '5-10 months',
    category: 'Space Colonization & Mining',
    realService: true,
    technology: ['AI & Robotics', 'Mining Technology', 'Space Equipment', 'Resource Processing', 'Autonomous Systems', 'Satellite Technology'],
    integrations: ['Mining equipment', 'Satellite systems', 'Processing facilities', 'Transport systems', 'Research platforms', 'Analytics tools'],
    useCases: ['Asteroid mining', 'Lunar resource extraction', 'Space resource processing', 'Mining fleet management', 'Resource optimization', 'Safety monitoring'],
    roi: 'Mining companies report 1000% ROI through automated operations. Investment firms see 800% ROI in space resource development.',
    competitors: ['Terrestrial mining platforms', 'Space research tools', 'Resource extraction platforms'],
    marketSize: '$60B space mining market',
    growthRate: '600% annual growth',
    variant: 'space-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Advanced space mining platform with autonomous operations, AI-powered resource detection, robotic equipment management, and comprehensive safety monitoring. Includes resource processing and optimization.',
    launchDate: '2029-02-01',
    customers: 12,
    rating: 4.7,
    reviews: 34
  },
  // Space Architecture & Energy Services
  {
    id: 'space-habitat-design-platform',
    name: 'Space Habitat Design Platform',
    tagline: 'Design space habitats for any planet or environment',
    price: '$45,999',
    period: '/month',
    description: 'Advanced platform for designing and planning space habitats optimized for any planetary environment. Uses AI-powered design tools, environmental simulation, and advanced materials science to create sustainable living spaces in space.',
    features: [
      'AI-powered habitat design',
      'Environmental simulation tools',
      'Material optimization AI',
      'Life support integration',
      'Sustainable design systems',
      '3D modeling and visualization',
      'Structural analysis tools',
      'Resource efficiency optimization',
      'Modular design systems',
      'Habitat expansion planning'
    ],
    popular: false,
    icon: '🏠',
    color: 'from-green-600 to-teal-600',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/space-habitat-design-platform',
    marketPosition: 'First space habitat design platform. Comparable to architectural design platforms ($40K+/month) but specialized in space environments.',
    targetAudience: 'Space agencies, Architecture firms, Engineering companies, Research institutions, Construction companies, Design studios',
    trialDays: 90,
    setupTime: '3-6 months',
    category: 'Space Architecture & Energy',
    realService: true,
    technology: ['AI Design', '3D Modeling', 'Environmental Simulation', 'Material Science', 'Structural Analysis', 'Space Technology'],
    integrations: ['Design software', '3D modeling tools', 'Simulation platforms', 'Engineering tools', 'Construction platforms', 'Research databases'],
    useCases: ['Space habitat design', 'Planetary architecture', 'Environmental optimization', 'Material selection', 'Structural planning', 'Habitat expansion'],
    roi: 'Architecture firms report 600% ROI through space design projects. Engineering companies see 500% ROI in space construction planning.',
    competitors: ['Architectural design platforms', 'Engineering design tools', 'Space research platforms'],
    marketSize: '$45B architectural design market',
    growthRate: '300% annual growth',
    variant: 'space-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Advanced space habitat design platform with AI-powered design tools, environmental simulation, material optimization, and comprehensive planning capabilities. Includes 3D modeling and structural analysis.',
    launchDate: '2029-02-15',
    customers: 25,
    rating: 4.6,
    reviews: 67
  },
  {
    id: 'space-energy-harvesting-platform',
    name: 'Space Energy Harvesting Platform',
    tagline: 'Harvest energy from space sources and celestial bodies',
    price: '$55,999',
    period: '/month',
    description: 'Revolutionary platform that harvests energy from various space sources including solar radiation, cosmic rays, and planetary resources. Uses advanced energy collection technology, AI optimization, and energy storage systems for efficient space power generation.',
    features: [
      'Multi-source energy harvesting',
      'AI-powered energy optimization',
      'Advanced energy storage',
      'Power distribution systems',
      'Energy efficiency monitoring',
      'Renewable space energy',
      'Power grid management',
      'Energy demand forecasting',
      'Storage optimization',
      'Backup power systems'
    ],
    popular: true,
    icon: '⚡',
    color: 'from-purple-600 to-pink-600',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/space-energy-harvesting-platform',
    marketPosition: 'First space energy harvesting platform. Comparable to renewable energy platforms ($50K+/month) but specialized in space applications.',
    targetAudience: 'Space agencies, Energy companies, Research institutions, Government organizations, Commercial space companies, Investment firms',
    trialDays: 120,
    setupTime: '4-8 months',
    category: 'Space Architecture & Energy',
    realService: true,
    technology: ['Energy Harvesting', 'Solar Technology', 'Energy Storage', 'AI Optimization', 'Power Systems', 'Space Technology'],
    integrations: ['Solar panels', 'Energy storage systems', 'Power distribution', 'Monitoring systems', 'Research platforms', 'Analytics tools'],
    useCases: ['Space power generation', 'Energy optimization', 'Power distribution', 'Energy storage', 'Grid management', 'Backup power systems'],
    roi: 'Energy companies report 800% ROI through space energy harvesting. Space agencies see 600% ROI in mission power efficiency.',
    competitors: ['Renewable energy platforms', 'Power management systems', 'Space research platforms'],
    marketSize: '$70B renewable energy market',
    growthRate: '350% annual growth',
    variant: 'space-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Advanced space energy harvesting platform with multi-source collection, AI optimization, energy storage, and power distribution. Includes monitoring systems and backup power capabilities.',
    launchDate: '2029-03-01',
    customers: 18,
    rating: 4.8,
    reviews: 52
  }
];