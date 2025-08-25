export interface EmergingTechService {
  id: string;
  title: string;
  description: string;
  category: 'Blockchain' | 'IoT' | 'Edge Computing' | '5G' | 'AR/VR' | 'Robotics' | 'Quantum Computing' | 'Biotechnology' | 'Green Tech' | 'Space Tech';
  subcategory: string;
  price: {
    monthly?: number;
    yearly?: number;
    oneTime?: number;
    currency: string;
    pricingModel: string;
  };
  features: string[];
  benefits: string[];
  useCases: string[];
  targetAudience: string[];
  marketPrice: string;
  competitiveAdvantage: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
    address: string;
  };
  rating: number;
  reviewCount: number;
  launchDate: string;
  status: 'Active' | 'Beta' | 'Coming Soon';
  innovationScore: number;
}

export const EMERGING_TECH_SERVICES: EmergingTechService[] = [
  // Blockchain Services
  {
    id: 'enterprise-blockchain-platform',
    title: 'Zion Enterprise Blockchain Platform',
    description: 'Scalable enterprise blockchain solutions for supply chain management, digital identity, and decentralized applications.',
    category: 'Blockchain',
    subcategory: 'Enterprise Solutions',
    price: {
      monthly: 299,
      yearly: 2990,
      currency: '$',
      pricingModel: 'subscription'
    },
    features: [
      'Multi-consensus mechanisms',
      'Smart contract development',
      'Interoperability protocols',
      'Scalability solutions',
      'Security auditing',
      'Compliance frameworks',
      'API integration',
      'Analytics dashboard'
    ],
    benefits: [
      'Reduce transaction costs by 40-80%',
      'Improve supply chain transparency',
      'Enhance data security and integrity',
      'Automate complex business processes',
      'Build trust through decentralization'
    ],
    useCases: [
      'Supply chain tracking',
      'Digital identity management',
      'Cross-border payments',
      'Asset tokenization',
      'Voting systems',
      'Intellectual property protection'
    ],
    targetAudience: [
      'Financial institutions',
      'Manufacturing companies',
      'Healthcare organizations',
      'Government agencies',
      'Logistics companies',
      'Real estate firms'
    ],
    marketPrice: '$299 - $1,999/month',
    competitiveAdvantage: 'Enterprise-grade scalability, regulatory compliance, and seamless integration with existing systems',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/enterprise-blockchain',
      address: '364 E Main St STE 1008, Middletown DE 19709'
    },
    rating: 4.8,
    reviewCount: 156,
    launchDate: '2024-01-01',
    status: 'Active',
    innovationScore: 92
  },

  // IoT Services
  {
    id: 'iot-ecosystem-platform',
    title: 'Zion IoT Ecosystem Platform',
    description: 'Comprehensive IoT platform for device management, data collection, analytics, and automation across industries.',
    category: 'IoT',
    subcategory: 'Platform Solutions',
    price: {
      monthly: 199,
      yearly: 1990,
      currency: '$',
      pricingModel: 'subscription'
    },
    features: [
      'Device management and provisioning',
      'Real-time data collection',
      'Edge computing capabilities',
      'Advanced analytics and ML',
      'Security and encryption',
      'Scalable infrastructure',
      'API and SDK support',
      'Custom dashboards'
    ],
    benefits: [
      'Monitor and control devices remotely',
      'Collect real-time operational data',
      'Automate business processes',
      'Improve operational efficiency',
      'Reduce maintenance costs'
    ],
    useCases: [
      'Smart manufacturing',
      'Connected healthcare',
      'Smart cities',
      'Agricultural monitoring',
      'Energy management',
      'Fleet tracking'
    ],
    targetAudience: [
      'Manufacturing companies',
      'Healthcare providers',
      'Municipalities',
      'Agricultural businesses',
      'Energy companies',
      'Transportation firms'
    ],
    marketPrice: '$199 - $899/month',
    competitiveAdvantage: 'End-to-end IoT solution, edge computing capabilities, and industry-specific templates',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/iot-ecosystem',
      address: '364 E Main St STE 1008, Middletown DE 19709'
    },
    rating: 4.7,
    reviewCount: 234,
    launchDate: '2023-12-01',
    status: 'Active',
    innovationScore: 89
  },

  // Edge Computing Services
  {
    id: 'edge-computing-orchestrator',
    title: 'Zion Edge Computing Orchestrator',
    description: 'Intelligent edge computing platform that optimizes data processing, reduces latency, and improves application performance.',
    category: 'Edge Computing',
    subcategory: 'Orchestration Platform',
    price: {
      monthly: 249,
      yearly: 2490,
      currency: '$',
      pricingModel: 'subscription'
    },
    features: [
      'Distributed edge nodes',
      'Intelligent workload distribution',
      'Real-time data processing',
      'Edge AI capabilities',
      'Security and encryption',
      'Performance monitoring',
      'Automated scaling',
      'Multi-cloud integration'
    ],
    benefits: [
      'Reduce latency by 60-80%',
      'Lower bandwidth costs',
      'Improve application performance',
      'Enhanced data privacy',
      'Real-time decision making'
    ],
    useCases: [
      'Autonomous vehicles',
      'Industrial automation',
      'Real-time analytics',
      'Content delivery networks',
      'Smart retail',
      'Telecommunications'
    ],
    targetAudience: [
      'Technology companies',
      'Telecommunications providers',
      'Manufacturing companies',
      'Retail chains',
      'Transportation companies',
      'Content providers'
    ],
    marketPrice: '$249 - $1,299/month',
    competitiveAdvantage: 'Intelligent workload distribution, edge AI integration, and seamless multi-cloud support',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/edge-computing',
      address: '364 E Main St STE 1008, Middletown DE 19709'
    },
    rating: 4.9,
    reviewCount: 178,
    launchDate: '2024-02-01',
    status: 'Active',
    innovationScore: 94
  },

  // 5G Services
  {
    id: '5g-network-optimization',
    title: 'Zion 5G Network Optimization',
    description: 'Advanced 5G network optimization and management solutions for telecommunications providers and enterprises.',
    category: '5G',
    subcategory: 'Network Management',
    price: {
      monthly: 399,
      yearly: 3990,
      currency: '$',
      pricingModel: 'subscription'
    },
    features: [
      'Network performance monitoring',
      'Traffic optimization algorithms',
      'Quality of service management',
      'Network slicing capabilities',
      'Security and threat detection',
      'Analytics and reporting',
      'Automated optimization',
      'API integration'
    ],
    benefits: [
      'Improve network performance by 30-50%',
      'Reduce operational costs',
      'Enhance user experience',
      'Optimize resource utilization',
      'Enable new 5G use cases'
    ],
    useCases: [
      'Telecommunications networks',
      'Enterprise 5G deployments',
      'Smart city infrastructure',
      'Industrial automation',
      'Connected vehicles',
      'Augmented reality applications'
    ],
    targetAudience: [
      'Telecommunications providers',
      'Large enterprises',
      'Government agencies',
      'Smart city initiatives',
      'Industrial companies',
      'Technology providers'
    ],
    marketPrice: '$399 - $2,499/month',
    competitiveAdvantage: 'AI-powered optimization, comprehensive monitoring, and automated network management',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/5g-optimization',
      address: '364 E Main St STE 1008, Middletown DE 19709'
    },
    rating: 4.8,
    reviewCount: 145,
    launchDate: '2024-01-15',
    status: 'Active',
    innovationScore: 91
  },

  // AR/VR Services
  {
    id: 'ar-vr-enterprise-platform',
    title: 'Zion AR/VR Enterprise Platform',
    description: 'Comprehensive augmented and virtual reality platform for training, collaboration, and customer engagement.',
    category: 'AR/VR',
    subcategory: 'Enterprise Platform',
    price: {
      monthly: 179,
      yearly: 1790,
      currency: '$',
      pricingModel: 'subscription'
    },
    features: [
      '3D content creation tools',
      'Multi-user collaboration',
      'Cross-platform compatibility',
      'Analytics and insights',
      'Custom app development',
      'Integration APIs',
      'Content management system',
      'Device management'
    ],
    benefits: [
      'Improve training effectiveness by 40%',
      'Reduce training costs',
      'Enhance remote collaboration',
      'Create immersive customer experiences',
      'Increase employee engagement'
    ],
    useCases: [
      'Employee training and onboarding',
      'Remote collaboration',
      'Customer product demonstrations',
      'Design and prototyping',
      'Virtual events and conferences',
      'Healthcare training'
    ],
    targetAudience: [
      'Training organizations',
      'Manufacturing companies',
      'Healthcare providers',
      'Educational institutions',
      'Real estate companies',
      'Event organizers'
    ],
    marketPrice: '$179 - $799/month',
    competitiveAdvantage: 'Enterprise-grade platform, comprehensive toolset, and seamless integration capabilities',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ar-vr-platform',
      address: '364 E Main St STE 1008, Middletown DE 19709'
    },
    rating: 4.6,
    reviewCount: 189,
    launchDate: '2023-11-01',
    status: 'Active',
    innovationScore: 88
  },

  // Robotics Services
  {
    id: 'intelligent-robotics-automation',
    title: 'Zion Intelligent Robotics Automation',
    description: 'AI-powered robotics solutions for manufacturing, logistics, and service industries.',
    category: 'Robotics',
    subcategory: 'Automation Solutions',
    price: {
      monthly: 0,
      yearly: 0,
      oneTime: 25000,
      currency: '$',
      pricingModel: 'one-time'
    },
    features: [
      'AI-powered decision making',
      'Computer vision integration',
      'Collaborative robot systems',
      'Safety monitoring',
      'Performance analytics',
      'Remote operation capabilities',
      'Custom programming',
      'Maintenance support'
    ],
    benefits: [
      'Increase productivity by 25-40%',
      'Reduce operational costs',
      'Improve product quality',
      'Enhance workplace safety',
      '24/7 operation capability'
    ],
    useCases: [
      'Manufacturing automation',
      'Warehouse logistics',
      'Quality inspection',
      'Material handling',
      'Assembly operations',
      'Service robotics'
    ],
    targetAudience: [
      'Manufacturing companies',
      'Logistics providers',
      'Warehouse operators',
      'Quality control teams',
      'Service industries',
      'Research institutions'
    ],
    marketPrice: '$25,000 - $100,000',
    competitiveAdvantage: 'AI-powered intelligence, collaborative capabilities, and comprehensive safety features',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/intelligent-robotics',
      address: '364 E Main St STE 1008, Middletown DE 19709'
    },
    rating: 4.9,
    reviewCount: 67,
    launchDate: '2024-01-01',
    status: 'Active',
    innovationScore: 95
  },

  // Quantum Computing Services
  {
    id: 'quantum-computing-simulation',
    title: 'Zion Quantum Computing Simulation',
    description: 'Advanced quantum computing simulation and optimization platform for research and enterprise applications.',
    category: 'Quantum Computing',
    subcategory: 'Simulation Platform',
    price: {
      monthly: 599,
      yearly: 5990,
      currency: '$',
      pricingModel: 'subscription'
    },
    features: [
      'Quantum circuit simulator',
      'Algorithm optimization tools',
      'Performance benchmarking',
      'Multi-qubit support',
      'Cloud-based access',
      'Real-time collaboration',
      'API integration',
      'Expert consultation'
    ],
    benefits: [
      'Accelerate quantum research',
      'Reduce hardware costs',
      'Faster algorithm development',
      'Collaborative development',
      'Future-proof technology'
    ],
    useCases: [
      'Cryptography research',
      'Drug discovery',
      'Financial modeling',
      'Optimization problems',
      'Machine learning',
      'Material science'
    ],
    targetAudience: [
      'Research institutions',
      'Pharmaceutical companies',
      'Financial services',
      'Technology companies',
      'Government agencies',
      'Universities'
    ],
    marketPrice: '$599 - $3,999/month',
    competitiveAdvantage: 'Advanced simulation capabilities, expert consultation, and comprehensive toolset',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/quantum-simulation',
      address: '364 E Main St STE 1008, Middletown DE 19709'
    },
    rating: 4.9,
    reviewCount: 89,
    launchDate: '2024-01-01',
    status: 'Active',
    innovationScore: 96
  },

  // Biotechnology Services
  {
    id: 'ai-biotech-research-platform',
    title: 'Zion AI Biotech Research Platform',
    description: 'AI-powered biotechnology research platform for drug discovery, genetic analysis, and bioinformatics.',
    category: 'Biotechnology',
    subcategory: 'Research Platform',
    price: {
      monthly: 449,
      yearly: 4490,
      currency: '$',
      pricingModel: 'subscription'
    },
    features: [
      'AI-powered drug discovery',
      'Genetic sequence analysis',
      'Protein structure prediction',
      'Clinical trial optimization',
      'Data visualization tools',
      'Collaborative research tools',
      'Compliance management',
      'API integration'
    ],
    benefits: [
      'Accelerate drug discovery by 3-5x',
      'Reduce research costs',
      'Improve success rates',
      'Enable personalized medicine',
      'Streamline regulatory compliance'
    ],
    useCases: [
      'Drug discovery and development',
      'Genetic research',
      'Clinical trials',
      'Personalized medicine',
      'Agricultural biotechnology',
      'Environmental biotechnology'
    ],
    targetAudience: [
      'Pharmaceutical companies',
      'Biotechnology firms',
      'Research institutions',
      'Healthcare providers',
      'Agricultural companies',
      'Environmental organizations'
    ],
    marketPrice: '$449 - $2,999/month',
    competitiveAdvantage: 'Advanced AI algorithms, comprehensive research tools, and regulatory compliance features',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-biotech',
      address: '364 E Main St STE 1008, Middletown DE 19709'
    },
    rating: 4.8,
    reviewCount: 123,
    launchDate: '2023-12-01',
    status: 'Active',
    innovationScore: 93
  },

  // Green Technology Services
  {
    id: 'sustainable-tech-solutions',
    title: 'Zion Sustainable Tech Solutions',
    description: 'Comprehensive sustainable technology solutions for renewable energy, waste management, and environmental monitoring.',
    category: 'Green Tech',
    subcategory: 'Sustainability Solutions',
    price: {
      monthly: 199,
      yearly: 1990,
      currency: '$',
      pricingModel: 'subscription'
    },
    features: [
      'Renewable energy optimization',
      'Carbon footprint tracking',
      'Waste management systems',
      'Environmental monitoring',
      'Sustainability reporting',
      'Compliance management',
      'Analytics dashboard',
      'Mobile applications'
    ],
    benefits: [
      'Reduce carbon footprint by 20-40%',
      'Lower energy costs',
      'Improve sustainability metrics',
      'Meet regulatory requirements',
      'Enhance brand reputation'
    ],
    useCases: [
      'Corporate sustainability',
      'Renewable energy management',
      'Waste reduction programs',
      'Environmental compliance',
      'Green building certification',
      'Supply chain sustainability'
    ],
    targetAudience: [
      'Large corporations',
      'Government agencies',
      'Educational institutions',
      'Healthcare organizations',
      'Manufacturing companies',
      'Real estate developers'
    ],
    marketPrice: '$199 - $1,299/month',
    competitiveAdvantage: 'Comprehensive sustainability platform, regulatory compliance, and measurable impact tracking',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/sustainable-tech',
      address: '364 E Main St STE 1008, Middletown DE 19709'
    },
    rating: 4.7,
    reviewCount: 167,
    launchDate: '2024-01-01',
    status: 'Active',
    innovationScore: 90
  },

  // Space Technology Services
  {
    id: 'space-tech-innovation-platform',
    title: 'Zion Space Tech Innovation Platform',
    description: 'Advanced space technology solutions for satellite operations, space data analytics, and aerospace applications.',
    category: 'Space Tech',
    subcategory: 'Innovation Platform',
    price: {
      monthly: 799,
      yearly: 7990,
      currency: '$',
      pricingModel: 'subscription'
    },
    features: [
      'Satellite mission planning',
      'Space data analytics',
      'Orbital mechanics calculations',
      'Ground station management',
      'Space weather monitoring',
      'Launch vehicle optimization',
      'Space debris tracking',
      'Expert consultation'
    ],
    benefits: [
      'Optimize satellite operations',
      'Reduce mission costs',
      'Improve data quality',
      'Enhance mission success rates',
      'Access to space expertise'
    ],
    useCases: [
      'Satellite communications',
      'Earth observation',
      'Space exploration',
      'Aerospace engineering',
      'Defense applications',
      'Scientific research'
    ],
    targetAudience: [
      'Space agencies',
      'Satellite operators',
      'Aerospace companies',
      'Defense contractors',
      'Research institutions',
      'Telecommunications companies'
    ],
    marketPrice: '$799 - $5,999/month',
    competitiveAdvantage: 'Comprehensive space technology platform, expert consultation, and advanced analytics capabilities',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/space-tech',
      address: '364 E Main St STE 1008, Middletown DE 19709'
    },
    rating: 4.9,
    reviewCount: 78,
    launchDate: '2024-02-01',
    status: 'Active',
    innovationScore: 97
  }
];

export const getEmergingTechServiceByCategory = (category: string) => {
  return EMERGING_TECH_SERVICES.filter(service => service.category === category);
};

export const getEmergingTechServiceBySubcategory = (subcategory: string) => {
  return EMERGING_TECH_SERVICES.filter(service => service.subcategory === subcategory);
};

export const getFeaturedEmergingTechServices = () => {
  return EMERGING_TECH_SERVICES.filter(service => service.rating >= 4.7).slice(0, 8);
};

export const getServicesByInnovationScore = (minScore: number) => {
  return EMERGING_TECH_SERVICES.filter(service => service.innovationScore >= minScore);
};