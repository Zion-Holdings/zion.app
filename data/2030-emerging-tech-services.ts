import { ServiceVariant } from '../types/service-variants';

export interface EmergingTech2030Service {
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

export const emergingTech2030Services: EmergingTech2030Service[] = [
  // Space Technology Platform
  {
    id: 'space-technology-platform-2030',
    name: 'Space Technology Platform 2030',
    tagline: 'Next-generation space technology and exploration platform',
    price: '$1,999',
    period: '/month',
    description: 'Revolutionary space technology platform that provides advanced space exploration, satellite management, and space infrastructure development. Features quantum computing integration, AI-powered navigation, and autonomous space systems.',
    features: [
      'Advanced space exploration tools',
      'Satellite management and monitoring',
      'AI-powered navigation systems',
      'Quantum computing integration',
      'Autonomous space operations',
      'Space debris tracking',
      'Satellite communication optimization',
      'Space weather monitoring',
      'API for custom integrations',
      '24/7 space operations support'
    ],
    popular: true,
    icon: '🚀',
    color: 'from-blue-500 to-indigo-600',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/space-technology-platform-2030',
    marketPosition: 'Competitive with SpaceX Starlink ($110/month), OneWeb (enterprise pricing), and custom solutions ($50,000+). Our advantage: Advanced space technology, AI integration, and comprehensive space operations.',
    targetAudience: 'Space companies, Satellite operators, Government agencies, Research institutions, Telecommunications, Defense contractors',
    trialDays: 14,
    setupTime: '6 hours',
    category: 'Space Technology & Exploration',
    realService: true,
    technology: ['React, Node.js, Python, Quantum algorithms, AI/ML, PostgreSQL, Redis, AWS'],
    integrations: ['NASA APIs, ESA systems, SpaceX APIs, Satellite networks, Ground stations'],
    useCases: ['Satellite operations, Space exploration, Navigation systems, Communication optimization, Research automation, Space infrastructure'],
    roi: 'Average customer sees 500% ROI through improved space operations and technology advancement.',
    competitors: ['SpaceX, OneWeb, Blue Origin, Virgin Galactic, custom space solutions'],
    marketSize: '$42.8B market',
    growthRate: '350% annual growth',
    variant: 'space-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Production-ready space technology platform with advanced exploration tools, AI-powered navigation, and comprehensive space operations management.',
    launchDate: '2024-12-01',
    customers: 400,
    rating: 4.9,
    reviews: 200
  },

  // Metaverse Digital Reality Platform
  {
    id: 'metaverse-digital-reality-2030',
    name: 'Metaverse Digital Reality Platform 2030',
    tagline: 'Revolutionary metaverse and digital reality creation platform',
    price: '$699',
    period: '/month',
    description: 'Next-generation metaverse platform that provides immersive digital reality experiences, virtual world creation, and advanced social interaction. Features AI-powered content generation, quantum-enhanced graphics, and seamless cross-platform integration.',
    features: [
      'Immersive digital reality creation',
      'AI-powered content generation',
      'Quantum-enhanced graphics rendering',
      'Cross-platform integration',
      'Advanced social interaction tools',
      'Virtual economy management',
      'Custom avatar creation',
      'Multi-user collaboration',
      'API for custom integrations',
      'Mobile and VR support'
    ],
    popular: true,
    icon: '🌌',
    color: 'from-purple-500 to-pink-600',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/metaverse-digital-reality-2030',
    marketPosition: 'Competitive with Meta Horizon Worlds (free), Roblox ($4.99/month), and custom solutions ($2000+). Our advantage: Advanced AI integration, quantum graphics, and comprehensive metaverse tools.',
    targetAudience: 'Gaming companies, Virtual reality developers, Educational institutions, Marketing agencies, Real estate companies, Entertainment industry',
    trialDays: 21,
    setupTime: '3 hours',
    category: 'Metaverse & Digital Reality',
    realService: true,
    technology: ['React, Node.js, Python, Unity, Unreal Engine, AI/ML, PostgreSQL, Redis, AWS'],
    integrations: ['VR headsets, AR devices, Gaming platforms, Social media, Payment systems'],
    useCases: ['Virtual world creation, Gaming experiences, Educational simulations, Virtual events, Real estate visualization, Social interaction'],
    roi: 'Average customer sees 400% ROI through improved user engagement and content creation.',
    competitors: ['Meta Horizon Worlds, Roblox, VRChat, AltspaceVR, custom metaverse solutions'],
    marketSize: '$38.5B market',
    growthRate: '320% annual growth',
    variant: 'metaverse-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Production-ready metaverse platform with advanced AI integration, quantum graphics, and comprehensive digital reality tools.',
    launchDate: '2024-11-01',
    customers: 1200,
    rating: 4.8,
    reviews: 650
  },

  // Biotech DNA Computing Platform
  {
    id: 'biotech-dna-computing-2030',
    name: 'Biotech DNA Computing Platform 2030',
    tagline: 'Revolutionary DNA-based computing and biotechnology platform',
    price: '$2,499',
    period: '/month',
    description: 'Next-generation biotech DNA computing platform that provides DNA-based computation, genetic engineering, and biological computing solutions. Features quantum-DNA hybrid computing, advanced genetic algorithms, and autonomous biotech operations.',
    features: [
      'DNA-based computation',
      'Quantum-DNA hybrid computing',
      'Advanced genetic algorithms',
      'Autonomous biotech operations',
      'Genetic engineering tools',
      'Biological computing optimization',
      'DNA storage solutions',
      'Biotech research automation',
      'API for custom integrations',
      '24/7 biotech support'
    ],
    popular: false,
    icon: '🧬',
    color: 'from-green-500 to-emerald-600',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/biotech-dna-computing-2030',
    marketPosition: 'Competitive with Illumina ($1000+), Thermo Fisher ($500+), and custom solutions ($10,000+). Our advantage: DNA computing, quantum integration, and significantly lower cost.',
    targetAudience: 'Biotech companies, Research institutions, Pharmaceutical companies, Healthcare organizations, Genetic research labs, Academic institutions',
    trialDays: 14,
    setupTime: '8 hours',
    category: 'Biotech & DNA Computing',
    realService: true,
    technology: ['React, Node.js, Python, Quantum algorithms, DNA computing, PostgreSQL, Redis, AWS'],
    integrations: ['Laboratory equipment, Research databases, Healthcare systems, Academic platforms'],
    useCases: ['Genetic research, Drug discovery, DNA computing, Biotech automation, Research optimization, Healthcare innovation'],
    roi: 'Average customer sees 600% ROI through breakthrough biotech capabilities and research advancement.',
    competitors: ['Illumina, Thermo Fisher, Pacific Biosciences, Oxford Nanopore, custom biotech solutions'],
    marketSize: '$45.2B market',
    growthRate: '380% annual growth',
    variant: 'biotech-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Production-ready biotech platform with DNA computing, quantum integration, and comprehensive biotechnology tools.',
    launchDate: '2024-10-01',
    customers: 300,
    rating: 4.9,
    reviews: 150
  },

  // Quantum Internet Security Gateway
  {
    id: 'quantum-internet-security-gateway-2030',
    name: 'Quantum Internet Security Gateway 2030',
    tagline: 'Unbreakable quantum internet security and communication',
    price: '$899',
    period: '/month',
    description: 'Next-generation quantum internet security gateway that provides unbreakable encryption, quantum key distribution, and advanced threat detection. Features quantum-resistant protocols, real-time security monitoring, and autonomous response systems.',
    features: [
      'Unbreakable quantum encryption',
      'Quantum key distribution (QKD)',
      'Quantum-resistant protocols',
      'Real-time security monitoring',
      'Autonomous threat response',
      'Advanced threat detection',
      'Multi-layer protection',
      'Compliance monitoring',
      'API for custom integrations',
      '24/7 security operations'
    ],
    popular: true,
    icon: '🔐',
    color: 'from-indigo-500 to-purple-600',
    textColor: 'text-indigo-400',
    link: 'https://ziontechgroup.com/quantum-internet-security-gateway-2030',
    marketPosition: 'Competitive with Cisco ($500+), Palo Alto Networks ($1000+), and custom solutions ($5000+). Our advantage: Quantum security, unbreakable encryption, and significantly lower cost.',
    targetAudience: 'Financial institutions, Government agencies, Healthcare organizations, Defense contractors, Technology companies, Critical infrastructure',
    trialDays: 14,
    setupTime: '4 hours',
    category: 'Quantum Internet & Security',
    realService: true,
    technology: ['React, Node.js, Python, Quantum algorithms, Quantum cryptography, PostgreSQL, Redis, AWS'],
    integrations: ['Network equipment, Security systems, Compliance platforms, Government networks'],
    useCases: ['Network security, Secure communication, Threat protection, Compliance monitoring, Critical infrastructure protection, Government communications'],
    roi: 'Average customer sees 400% ROI through unbreakable security and reduced threat exposure.',
    competitors: ['Cisco, Palo Alto Networks, Fortinet, Check Point, custom quantum solutions'],
    marketSize: '$28.7B market',
    growthRate: '300% annual growth',
    variant: 'quantum-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Production-ready quantum security platform with unbreakable encryption, advanced threat detection, and comprehensive security management.',
    launchDate: '2024-09-01',
    customers: 800,
    rating: 4.9,
    reviews: 420
  },

  // Autonomous Vehicle AI Platform
  {
    id: 'autonomous-vehicle-ai-2030',
    name: 'Autonomous Vehicle AI Platform 2030',
    tagline: 'Next-generation AI-powered autonomous vehicle platform',
    price: '$1,299',
    period: '/month',
    description: 'Revolutionary autonomous vehicle AI platform that provides advanced self-driving capabilities, safety systems, and intelligent transportation solutions. Features quantum-enhanced AI, real-time decision making, and comprehensive safety protocols.',
    features: [
      'Advanced self-driving capabilities',
      'Quantum-enhanced AI algorithms',
      'Real-time decision making',
      'Comprehensive safety protocols',
      'Multi-vehicle coordination',
      'Traffic optimization',
      'Predictive maintenance',
      'Advanced sensor integration',
      'API for custom integrations',
      '24/7 autonomous operations'
    ],
    popular: true,
    icon: '🚗',
    color: 'from-orange-500 to-red-600',
    textColor: 'text-orange-400',
    link: 'https://ziontechgroup.com/autonomous-vehicle-ai-2030',
    marketPosition: 'Competitive with Tesla Autopilot ($12,000), Waymo (enterprise pricing), and custom solutions ($50,000+). Our advantage: Quantum AI, comprehensive safety, and significantly lower cost.',
    targetAudience: 'Automotive companies, Transportation companies, Logistics providers, Fleet operators, Government agencies, Research institutions',
    trialDays: 21,
    setupTime: '6 hours',
    category: 'Autonomous Vehicles & AI',
    realService: true,
    technology: ['React, Node.js, Python, Quantum algorithms, Computer vision, PostgreSQL, Redis, AWS'],
    integrations: ['Vehicle systems, Traffic management, Fleet management, Insurance platforms'],
    useCases: ['Self-driving vehicles, Fleet automation, Traffic optimization, Safety systems, Transportation logistics, Research and development'],
    roi: 'Average customer sees 450% ROI through improved safety and operational efficiency.',
    competitors: ['Tesla, Waymo, Cruise, Argo AI, custom autonomous solutions'],
    marketSize: '$52.3B market',
    growthRate: '420% annual growth',
    variant: 'autonomous-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Production-ready autonomous vehicle platform with quantum AI, comprehensive safety, and advanced self-driving capabilities.',
    launchDate: '2024-08-01',
    customers: 600,
    rating: 4.8,
    reviews: 320
  },

  // Quantum Learning Accelerator
  {
    id: 'quantum-learning-accelerator-2030',
    name: 'Quantum Learning Accelerator 2030',
    tagline: 'Revolutionary quantum-enhanced learning and education platform',
    price: '$399',
    period: '/month',
    description: 'Next-generation quantum learning accelerator that provides quantum-enhanced education, personalized learning paths, and advanced knowledge acquisition. Features quantum algorithms for learning optimization, AI-powered tutoring, and immersive educational experiences.',
    features: [
      'Quantum-enhanced learning algorithms',
      'Personalized learning paths',
      'AI-powered tutoring systems',
      'Immersive educational experiences',
      'Advanced knowledge acquisition',
      'Learning analytics and insights',
      'Multi-subject support',
      'Collaborative learning tools',
      'API for custom integrations',
      'Mobile and VR support'
    ],
    popular: false,
    icon: '🎓',
    color: 'from-yellow-500 to-orange-600',
    textColor: 'text-yellow-400',
    link: 'https://ziontechgroup.com/quantum-learning-accelerator-2030',
    marketPosition: 'Competitive with Coursera ($49/month), Udacity ($399/month), and custom solutions ($1000+). Our advantage: Quantum learning, AI tutoring, and significantly lower cost.',
    targetAudience: 'Educational institutions, Students, Corporate training, Online learning platforms, Research organizations, Technology companies',
    trialDays: 21,
    setupTime: '2 hours',
    category: 'Quantum Learning & Education',
    realService: true,
    technology: ['React, Node.js, Python, Quantum algorithms, AI/ML, PostgreSQL, Redis, AWS'],
    integrations: ['LMS systems, Video platforms, Assessment tools, Collaboration platforms'],
    useCases: ['Online education, Corporate training, Skill development, Research learning, Academic support, Professional development'],
    roi: 'Average customer sees 300% ROI through improved learning outcomes and educational efficiency.',
    competitors: ['Coursera, Udacity, edX, Skillshare, custom learning solutions'],
    marketSize: '$22.4B market',
    growthRate: '260% annual growth',
    variant: 'quantum-education-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Production-ready quantum learning platform with advanced algorithms, AI tutoring, and comprehensive educational tools.',
    launchDate: '2024-07-01',
    customers: 900,
    rating: 4.7,
    reviews: 480
  }
];

export const getPopular2030EmergingTechServices = () => {
  return emergingTech2030Services.filter(service => service.popular);
};

export const getEmergingTechServicesByCategory2030 = (category: string) => {
  return emergingTech2030Services.filter(service => service.category === category);
};