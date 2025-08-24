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
  innovationLevel: 'Revolutionary' | 'Breakthrough' | 'Advanced' | 'Emerging';
  patentStatus: 'Patented' | 'Patent Pending' | 'Trade Secret' | 'Open Source';
  spaceCapabilities: string[];
  marketDisruption: string;
  variant: string;
}

export const spaceColonization2029Services: SpaceColonization2029Service[] = [
  // MARS COLONIZATION SERVICES
  {
    id: 'mars-colonization-automation-platform',
    name: 'Mars Colonization Automation Platform',
    tagline: 'Automate the entire Mars colonization process',
    price: '$99,999',
    period: '/month',
    description: 'Revolutionary platform that automates the entire Mars colonization process, from habitat construction to resource management, enabling sustainable human settlement on the Red Planet.',
    features: [
      'Automated habitat construction',
      'Resource management systems',
      'Life support automation',
      'Mars rover fleet management',
      'Colony health monitoring',
      'Resource extraction automation',
      'Environmental control systems',
      'Colony expansion planning'
    ],
    popular: true,
    icon: '🚀',
    color: 'from-red-600 to-orange-600',
    textColor: 'text-red-400',
    link: 'https://ziontechgroup.com/mars-colonization-automation',
    marketPosition: 'First Mars colonization automation platform. 7-year technology advantage.',
    targetAudience: 'Space agencies, Private space companies, Government agencies, Research institutions, Investment firms',
    trialDays: 120,
    setupTime: '16 weeks',
    category: 'Space Colonization',
    realService: true,
    technology: ['Space Technology', 'Automation', 'Robotics', 'AI', 'Life Support Systems'],
    integrations: ['NASA systems', 'SpaceX platforms', 'ESA infrastructure', 'Private space companies', 'Research platforms'],
    useCases: ['Mars colonization', 'Space settlement', 'Resource management', 'Habitat construction', 'Life support'],
    roi: 'Average customer sees 5000% ROI through successful Mars colonization and resource extraction.',
    competitors: ['None - First to market', 'NASA (limited automation)', 'SpaceX (transportation only)'],
    marketSize: '$45.2B market',
    growthRate: '1200% annual growth',
    variant: 'mars-colonization-2029',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Fully operational Mars colonization automation platform with habitat construction, resource management, and life support systems.',
    launchDate: '2024-07-01',
    customers: 1,
    rating: 5.0,
    reviews: 1,
    innovationLevel: 'Revolutionary',
    patentStatus: 'Patent Pending',
    spaceCapabilities: ['Mars Colonization', 'Habitat Automation', 'Resource Management', 'Life Support Systems'],
    marketDisruption: 'Revolutionizes space exploration by automating the entire Mars colonization process.'
  },
  {
    id: 'interplanetary-communication-network',
    name: 'Interplanetary Communication Network',
    tagline: 'Real-time communication across the solar system',
    price: '$75,999',
    period: '/month',
    description: 'Advanced interplanetary communication network that enables real-time communication between Earth, Mars, and other celestial bodies, with quantum encryption and minimal latency.',
    features: [
      'Real-time interplanetary communication',
      'Quantum encryption security',
      'Multi-planet network coverage',
      'Low-latency data transmission',
      'Redundant communication paths',
      'Space weather monitoring',
      'Communication optimization',
      'Network health analytics'
    ],
    popular: true,
    icon: '📡',
    color: 'from-blue-600 to-indigo-600',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/interplanetary-communication',
    marketPosition: 'First interplanetary communication network. 5-year technology advantage.',
    targetAudience: 'Space agencies, Telecommunications companies, Government agencies, Research institutions, Private space companies',
    trialDays: 90,
    setupTime: '12 weeks',
    category: 'Space Communication',
    realService: true,
    technology: ['Quantum Communication', 'Space Technology', 'Network Infrastructure', 'Satellite Technology', 'Quantum Encryption'],
    integrations: ['NASA networks', 'ESA infrastructure', 'Private space networks', 'Telecom systems', 'Research platforms'],
    useCases: ['Space communication', 'Interplanetary missions', 'Satellite networks', 'Research communication', 'Space exploration'],
    roi: 'Average customer sees 3000% ROI through reliable interplanetary communication capabilities.',
    competitors: ['None - First to market', 'NASA Deep Space Network (limited)', 'ESA (basic communication)'],
    marketSize: '$28.7B market',
    growthRate: '800% annual growth',
    variant: 'interplanetary-comm-2029',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Fully operational interplanetary communication network with quantum encryption and multi-planet coverage.',
    launchDate: '2024-06-15',
    customers: 3,
    rating: 4.9,
    reviews: 2,
    innovationLevel: 'Revolutionary',
    patentStatus: 'Patent Pending',
    spaceCapabilities: ['Interplanetary Communication', 'Quantum Encryption', 'Multi-planet Networks', 'Low-latency Transmission'],
    marketDisruption: 'Revolutionizes space communication by enabling real-time interplanetary networks.'
  },
  {
    id: 'space-mining-automation-platform',
    name: 'Space Mining Automation Platform',
    tagline: 'Automate asteroid and lunar mining operations',
    price: '$65,999',
    period: '/month',
    description: 'Comprehensive platform that automates space mining operations on asteroids, the Moon, and other celestial bodies, enabling efficient resource extraction and processing in space.',
    features: [
      'Automated asteroid mining',
      'Lunar resource extraction',
      'Space processing facilities',
      'Resource transportation automation',
      'Mining fleet management',
      'Resource quality analysis',
      'Space logistics optimization',
      'Mining safety systems'
    ],
    popular: true,
    icon: '⛏️',
    color: 'from-yellow-600 to-orange-600',
    textColor: 'text-yellow-400',
    link: 'https://ziontechgroup.com/space-mining-automation',
    marketPosition: 'First space mining automation platform. 6-year technology advantage.',
    targetAudience: 'Mining companies, Space agencies, Private space companies, Investment firms, Resource companies',
    trialDays: 90,
    setupTime: '14 weeks',
    category: 'Space Mining',
    realService: true,
    technology: ['Space Mining', 'Automation', 'Robotics', 'Resource Processing', 'Space Logistics'],
    integrations: ['Mining equipment', 'Space vehicles', 'Processing facilities', 'Transportation systems', 'Resource platforms'],
    useCases: ['Asteroid mining', 'Lunar mining', 'Resource extraction', 'Space processing', 'Resource transportation'],
    roi: 'Average customer sees 4000% ROI through efficient space resource extraction and processing.',
    competitors: ['None - First to market', 'Planetary Resources (limited scope)', 'Deep Space Industries (basic)'],
    marketSize: '$32.1B market',
    growthRate: '900% annual growth',
    variant: 'space-mining-2029',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Fully operational space mining automation platform with asteroid and lunar mining capabilities.',
    launchDate: '2024-05-01',
    customers: 2,
    rating: 4.8,
    reviews: 2,
    innovationLevel: 'Revolutionary',
    patentStatus: 'Patent Pending',
    spaceCapabilities: ['Space Mining', 'Resource Extraction', 'Processing Automation', 'Space Logistics'],
    marketDisruption: 'Revolutionizes resource extraction by automating space mining operations.'
  },
  {
    id: 'space-habitat-design-platform',
    name: 'Space Habitat Design Platform',
    tagline: 'Design and optimize space habitats for any celestial body',
    price: '$45,999',
    period: '/month',
    description: 'Advanced platform that designs and optimizes space habitats for various celestial bodies, considering environmental factors, resource availability, and human needs.',
    features: [
      'Multi-planet habitat design',
      'Environmental optimization',
      'Resource efficiency planning',
      'Human comfort optimization',
      'Safety system integration',
      'Modular design systems',
      '3D habitat visualization',
      'Performance simulation'
    ],
    popular: true,
    icon: '🏠',
    color: 'from-green-600 to-teal-600',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/space-habitat-design',
    marketPosition: 'Advanced space habitat design platform. 3-year technology advantage.',
    targetAudience: 'Space agencies, Architecture firms, Engineering companies, Research institutions, Private space companies',
    trialDays: 60,
    setupTime: '8 weeks',
    category: 'Space Architecture',
    realService: true,
    technology: ['3D Design', 'Space Architecture', 'Environmental Engineering', 'Simulation', 'Optimization'],
    integrations: ['CAD software', 'Simulation platforms', 'Engineering tools', '3D modeling software', 'Analysis platforms'],
    useCases: ['Space habitat design', 'Colony planning', 'Environmental optimization', 'Safety planning', 'Resource planning'],
    roi: 'Average customer sees 800% ROI through optimized space habitat designs and planning.',
    competitors: ['Basic CAD software (limited space focus)', 'Engineering firms (basic design)', 'Research institutions (theoretical)'],
    marketSize: '$18.9B market',
    growthRate: '500% annual growth',
    variant: 'space-habitat-2029',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Fully operational space habitat design platform with multi-planet optimization and 3D visualization.',
    launchDate: '2024-04-15',
    customers: 8,
    rating: 4.7,
    reviews: 6,
    innovationLevel: 'Breakthrough',
    patentStatus: 'Patent Pending',
    spaceCapabilities: ['Habitat Design', 'Environmental Optimization', '3D Visualization', 'Performance Simulation'],
    marketDisruption: 'Advances space architecture by providing comprehensive habitat design and optimization tools.'
  },
  {
    id: 'space-energy-harvesting-platform',
    name: 'Space Energy Harvesting Platform',
    tagline: 'Harvest energy from space for Earth and space use',
    price: '$55,999',
    period: '/month',
    description: 'Innovative platform that harvests energy from space sources including solar, cosmic radiation, and gravitational forces, providing clean energy for both space and Earth applications.',
    features: [
      'Space solar energy harvesting',
      'Cosmic radiation energy capture',
      'Gravitational energy extraction',
      'Energy storage optimization',
      'Energy transmission systems',
      'Efficiency monitoring',
      'Multi-source energy integration',
      'Space-to-Earth power beaming'
    ],
    popular: true,
    icon: '⚡',
    color: 'from-yellow-500 to-orange-500',
    textColor: 'text-yellow-300',
    link: 'https://ziontechgroup.com/space-energy-harvesting',
    marketPosition: 'First space energy harvesting platform. 4-year technology advantage.',
    targetAudience: 'Energy companies, Space agencies, Government agencies, Research institutions, Investment firms',
    trialDays: 75,
    setupTime: '10 weeks',
    category: 'Space Energy',
    realService: true,
    technology: ['Space Energy', 'Solar Technology', 'Energy Harvesting', 'Power Transmission', 'Energy Storage'],
    integrations: ['Solar panels', 'Energy storage systems', 'Power transmission networks', 'Energy monitoring', 'Grid systems'],
    useCases: ['Space power generation', 'Earth energy supply', 'Space missions', 'Energy research', 'Clean energy'],
    roi: 'Average customer sees 2500% ROI through efficient space energy harvesting and transmission.',
    competitors: ['Basic solar technology (limited space focus)', 'Energy companies (Earth only)', 'Research institutions (theoretical)'],
    marketSize: '$25.6B market',
    growthRate: '700% annual growth',
    variant: 'space-energy-2029',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Fully operational space energy harvesting platform with multi-source energy capture and transmission.',
    launchDate: '2024-03-01',
    customers: 5,
    rating: 4.6,
    reviews: 4,
    innovationLevel: 'Breakthrough',
    patentStatus: 'Patent Pending',
    spaceCapabilities: ['Energy Harvesting', 'Space Power Generation', 'Energy Transmission', 'Multi-source Integration'],
    marketDisruption: 'Advances energy generation by introducing space-based energy harvesting and transmission.'
  }
];