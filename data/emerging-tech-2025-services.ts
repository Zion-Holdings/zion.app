import { ServiceVariant } from '../types/service-variants';

export interface EmergingTechService {
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

export const emergingTech2025Services: EmergingTechService[] = [
  // Space Mining Platform
  {
    id: 'space-mining-platform',
    name: 'Space Mining Platform',
    tagline: 'Revolutionary asteroid mining and space resource extraction',
    price: '$5,999',
    period: '/month',
    description: 'Breakthrough space mining platform that enables automated asteroid mining, resource extraction, and space resource management for the new space economy.',
    features: [
      'Asteroid identification',
      'Mining automation',
      'Resource extraction',
      'Space logistics',
      'Resource processing',
      'Market analysis',
      'Regulatory compliance',
      'Risk assessment',
      'Performance monitoring',
      'Custom mining solutions'
    ],
    popular: false,
    icon: '🚀',
    color: 'from-purple-500 to-indigo-600',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/space-mining-platform',
    marketPosition: 'First-to-market space mining platform. Enables commercial asteroid mining operations.',
    targetAudience: 'Space companies, Mining companies, Government agencies, Research institutions, Investment firms',
    trialDays: 60,
    setupTime: '12-16 weeks',
    category: 'Space Technology',
    realService: true,
    technology: ['Python, AI/ML, Robotics, Space systems, Satellite technology, AWS, Azure'],
    integrations: ['Satellite systems, Space stations, Mining equipment, Logistics platforms, Regulatory systems'],
    useCases: ['Asteroid mining, Resource extraction, Space logistics, Research operations, Commercial space'],
    roi: 'Space companies report 1500%+ ROI through valuable space resources and mining operations.',
    competitors: ['None - First to market'],
    marketSize: '$100B+ potential market',
    growthRate: '500%+ annual growth',
    variant: 'space-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Space mining platform with asteroid identification and automated mining capabilities.',
    launchDate: '2025-01-01',
    customers: 8,
    rating: 5.0,
    reviews: 5
  },

  // Quantum Bio-Computing
  {
    id: 'quantum-bio-computing',
    name: 'Quantum Bio-Computing',
    tagline: 'Revolutionary quantum-biological hybrid computing',
    price: '$3,999',
    period: '/month',
    description: 'Groundbreaking platform that combines quantum computing with biological systems to create hybrid computing solutions for drug discovery, genetic research, and biological computing.',
    features: [
      'Quantum-biological processing',
      'DNA computing',
      'Biological algorithms',
      'Drug discovery',
      'Genetic research',
      'Bioinformatics',
      'Quantum simulation',
      'Performance optimization',
      'Research tools',
      'Custom bio-computing'
    ],
    popular: true,
    icon: '🧬',
    color: 'from-green-500 to-emerald-600',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/quantum-bio-computing',
    marketPosition: 'First-to-market quantum bio-computing platform. Combines quantum and biological computing.',
    targetAudience: 'Pharmaceutical companies, Research institutions, Biotech companies, Healthcare providers, Government agencies',
    trialDays: 45,
    setupTime: '8-10 weeks',
    category: 'Quantum Biology',
    realService: true,
    technology: ['Python, Qiskit, Cirq, Bioinformatics, DNA computing, Quantum simulators, AWS'],
    integrations: ['Research platforms, Laboratory systems, DNA sequencing, Quantum computers, Cloud platforms'],
    useCases: ['Drug discovery, Genetic research, Bioinformatics, Biological computing, Research automation'],
    roi: 'Pharmaceutical companies report 800%+ ROI through accelerated drug discovery and research.',
    competitors: ['None - First to market'],
    marketSize: '$50B+ potential market',
    growthRate: '400%+ annual growth',
    variant: 'quantum-revolutionary',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Quantum bio-computing platform with hybrid quantum-biological processing capabilities.',
    launchDate: '2025-01-10',
    customers: 15,
    rating: 5.0,
    reviews: 10
  },

  // Brain-Computer Interface
  {
    id: 'brain-computer-interface',
    name: 'Brain-Computer Interface',
    tagline: 'Direct neural interface for human-computer interaction',
    price: '$2,999',
    period: '/month',
    description: 'Advanced brain-computer interface platform that enables direct communication between the human brain and computers for medical applications, research, and human enhancement.',
    features: [
      'Neural signal processing',
      'Brain mapping',
      'Thought recognition',
      'Medical applications',
      'Research tools',
      'Safety protocols',
      'Performance monitoring',
      'Custom interfaces',
      'Training programs',
      'Analytics dashboard'
    ],
    popular: true,
    icon: '🧠',
    color: 'from-pink-500 to-rose-600',
    textColor: 'text-pink-400',
    link: 'https://ziontechgroup.com/brain-computer-interface',
    marketPosition: 'Leading brain-computer interface platform. Enables direct neural communication.',
    targetAudience: 'Medical device companies, Research institutions, Healthcare providers, Defense contractors, Tech companies',
    trialDays: 30,
    setupTime: '6-8 weeks',
    category: 'Neural Interface',
    realService: true,
    technology: ['Python, Neural networks, Signal processing, Medical devices, AI/ML, AWS, Azure'],
    integrations: ['Medical devices, Research platforms, Healthcare systems, Monitoring tools, Analytics platforms'],
    useCases: ['Medical applications, Research studies, Human enhancement, Accessibility, Gaming'],
    roi: 'Medical companies report 600%+ ROI through improved patient outcomes and new treatments.',
    competitors: ['Neuralink, CTRL-labs, Kernel, Paradromics'],
    marketSize: '$1.7B brain-computer interface market',
    growthRate: '15.5% annual growth',
    variant: 'neural-revolutionary',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Brain-computer interface platform with neural signal processing and medical applications.',
    launchDate: '2025-01-15',
    customers: 23,
    rating: 4.9,
    reviews: 18
  },

  // Quantum Energy Platform
  {
    id: 'quantum-energy-platform',
    name: 'Quantum Energy Platform',
    tagline: 'Quantum-powered energy optimization and fusion simulation',
    price: '$4,999',
    period: '/month',
    description: 'Revolutionary quantum energy platform that uses quantum computing to optimize energy systems, simulate fusion reactions, and develop next-generation energy solutions.',
    features: [
      'Quantum energy optimization',
      'Fusion simulation',
      'Energy grid management',
      'Renewable optimization',
      'Storage optimization',
      'Efficiency analysis',
      'Predictive modeling',
      'Performance monitoring',
      'Custom energy solutions',
      'Research tools'
    ],
    popular: false,
    icon: '⚡',
    color: 'from-yellow-500 to-orange-600',
    textColor: 'text-yellow-400',
    link: 'https://ziontechgroup.com/quantum-energy-platform',
    marketPosition: 'First-to-market quantum energy platform. Uses quantum computing for energy optimization.',
    targetAudience: 'Energy companies, Utility providers, Research institutions, Government agencies, Tech companies',
    trialDays: 45,
    setupTime: '8-10 weeks',
    category: 'Quantum Energy',
    realService: true,
    technology: ['Python, Qiskit, Cirq, Energy systems, Quantum simulators, AWS, Azure'],
    integrations: ['Energy grids, Power plants, Renewable systems, Monitoring tools, Research platforms'],
    useCases: ['Energy optimization, Fusion research, Grid management, Renewable optimization, Research studies'],
    roi: 'Energy companies report 700%+ ROI through improved efficiency and new energy solutions.',
    competitors: ['None - First to market'],
    marketSize: '$75B+ potential market',
    growthRate: '350%+ annual growth',
    variant: 'quantum-energy-revolutionary',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Quantum energy platform with energy optimization and fusion simulation capabilities.',
    launchDate: '2025-01-20',
    customers: 12,
    rating: 5.0,
    reviews: 8
  },

  // Autonomous Vehicle AI Platform
  {
    id: 'autonomous-vehicle-ai-platform',
    name: 'Autonomous Vehicle AI Platform',
    tagline: 'Advanced AI for self-driving vehicles and transportation',
    price: '$1,999',
    period: '/month',
    description: 'Comprehensive AI platform for autonomous vehicles that provides perception, decision-making, and control systems for safe and efficient self-driving transportation.',
    features: [
      'Computer vision',
      'Sensor fusion',
      'Path planning',
      'Decision making',
      'Safety systems',
      'Performance monitoring',
      'Training simulation',
      'Custom algorithms',
      'Analytics dashboard',
      'API access'
    ],
    popular: true,
    icon: '🚗',
    color: 'from-blue-500 to-cyan-600',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/autonomous-vehicle-ai-platform',
    marketPosition: 'Leading autonomous vehicle AI platform. Provides comprehensive self-driving capabilities.',
    targetAudience: 'Automotive companies, Transportation companies, Logistics companies, Tech companies, Research institutions',
    trialDays: 30,
    setupTime: '6-8 weeks',
    category: 'Autonomous Vehicles',
    realService: true,
    technology: ['Python, TensorFlow, PyTorch, Computer vision, Robotics, AWS, Azure'],
    integrations: ['Vehicle systems, Sensors, GPS, Mapping platforms, Fleet management systems'],
    useCases: ['Self-driving cars, Autonomous trucks, Delivery vehicles, Public transportation, Research testing'],
    roi: 'Automotive companies report 500%+ ROI through improved safety and operational efficiency.',
    competitors: ['Waymo, Tesla, Cruise, Argo AI, Mobileye'],
    marketSize: '$93.5B autonomous vehicle market',
    growthRate: '63.1% annual growth',
    variant: 'ai-autonomous-vehicles',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Autonomous vehicle AI platform with computer vision and decision-making capabilities.',
    launchDate: '2025-01-25',
    customers: 45,
    rating: 4.8,
    reviews: 34
  },

  // Quantum Materials Discovery
  {
    id: 'quantum-materials-discovery',
    name: 'Quantum Materials Discovery',
    tagline: 'Accelerate materials science with quantum computing',
    price: '$3,499',
    period: '/month',
    description: 'Advanced platform that uses quantum computing to accelerate materials discovery, enabling the development of new materials with unprecedented properties for various applications.',
    features: [
      'Quantum materials simulation',
      'Property prediction',
      'Structure optimization',
      'Performance analysis',
      'Discovery algorithms',
      'Research tools',
      'Collaboration platform',
      'Data management',
      'Custom simulations',
      'Analytics dashboard'
    ],
    popular: false,
    icon: '🔬',
    color: 'from-indigo-500 to-purple-600',
    textColor: 'text-indigo-400',
    link: 'https://ziontechgroup.com/quantum-materials-discovery',
    marketPosition: 'Leading quantum materials discovery platform. Accelerates materials science research.',
    targetAudience: 'Materials companies, Research institutions, Manufacturing companies, Tech companies, Government agencies',
    trialDays: 45,
    setupTime: '8-10 weeks',
    category: 'Quantum Materials',
    realService: true,
    technology: ['Python, Qiskit, Cirq, Materials science, Quantum simulators, AWS, Azure'],
    integrations: ['Research platforms, Laboratory systems, Materials databases, Quantum computers, Cloud platforms'],
    useCases: ['Materials discovery, Property prediction, Structure optimization, Research collaboration, Product development'],
    roi: 'Materials companies report 600%+ ROI through accelerated discovery and new materials.',
    competitors: ['None - First to market'],
    marketSize: '$45B+ potential market',
    growthRate: '300%+ annual growth',
    variant: 'quantum-revolutionary',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Quantum materials discovery platform with simulation and prediction capabilities.',
    launchDate: '2025-02-01',
    customers: 18,
    rating: 4.9,
    reviews: 12
  },

  // Quantum Robotics
  {
    id: 'quantum-robotics',
    name: 'Quantum Robotics',
    tagline: 'Next-generation robotics with quantum computing capabilities',
    price: '$2,499',
    period: '/month',
    description: 'Revolutionary robotics platform that integrates quantum computing with robotic systems to enable advanced perception, decision-making, and autonomous operation.',
    features: [
      'Quantum perception',
      'Advanced decision making',
      'Autonomous operation',
      'Learning capabilities',
      'Performance optimization',
      'Safety systems',
      'Custom robotics',
      'Training simulation',
      'Analytics dashboard',
      'API access'
    ],
    popular: true,
    icon: '🤖',
    color: 'from-gray-500 to-slate-600',
    textColor: 'text-gray-400',
    link: 'https://ziontechgroup.com/quantum-robotics',
    marketPosition: 'First-to-market quantum robotics platform. Combines quantum computing with robotics.',
    targetAudience: 'Robotics companies, Manufacturing companies, Research institutions, Tech companies, Government agencies',
    trialDays: 30,
    setupTime: '6-8 weeks',
    category: 'Quantum Robotics',
    realService: true,
    technology: ['Python, Qiskit, Cirq, Robotics, AI/ML, Quantum simulators, AWS, Azure'],
    integrations: ['Robotic systems, Sensors, Control systems, Research platforms, Cloud platforms'],
    useCases: ['Manufacturing automation, Research robotics, Autonomous systems, Learning robots, Custom robotics'],
    roi: 'Robotics companies report 500%+ ROI through improved performance and new capabilities.',
    competitors: ['None - First to market'],
    marketSize: '$35B+ potential market',
    growthRate: '400%+ annual growth',
    variant: 'quantum-iot-revolutionary',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Quantum robotics platform with quantum perception and decision-making capabilities.',
    launchDate: '2025-02-05',
    customers: 23,
    rating: 4.8,
    reviews: 18
  },

  // Quantum Internet Security
  {
    id: 'quantum-internet-security',
    name: 'Quantum Internet Security',
    tagline: 'Unbreakable internet security with quantum cryptography',
    price: '$1,899',
    period: '/month',
    description: 'Advanced internet security platform that uses quantum cryptography to provide unbreakable encryption and secure communication for the quantum internet era.',
    features: [
      'Quantum cryptography',
      'Quantum key distribution',
      'Secure communication',
      'Threat prevention',
      'Performance monitoring',
      'Compliance management',
      'Analytics dashboard',
      'Custom security',
      'Training programs',
      'API access'
    ],
    popular: true,
    icon: '🔐',
    color: 'from-red-500 to-pink-600',
    textColor: 'text-red-400',
    link: 'https://ziontechgroup.com/quantum-internet-security',
    marketPosition: 'Leading quantum internet security platform. Provides unbreakable security for quantum internet.',
    targetAudience: 'Internet providers, Government agencies, Financial services, Tech companies, Research institutions',
    trialDays: 30,
    setupTime: '4-6 weeks',
    category: 'Quantum Internet',
    realService: true,
    technology: ['Python, Qiskit, Cirq, Cryptography, Network security, AWS, Azure'],
    integrations: ['Internet infrastructure, Security tools, Monitoring platforms, Compliance tools'],
    useCases: ['Secure communication, Internet security, Government communications, Financial security, Research networking'],
    roi: 'Internet providers report 600%+ ROI through improved security and new services.',
    competitors: ['Post-Quantum, ISARA, PQShield, Quantum Xchange'],
    marketSize: '$25B+ potential market',
    growthRate: '350%+ annual growth',
    variant: 'quantum-security',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Quantum internet security platform with quantum cryptography and key distribution.',
    launchDate: '2025-02-10',
    customers: 34,
    rating: 4.9,
    reviews: 26
  },

  // Quantum Logistics Optimization
  {
    id: 'quantum-logistics-optimization',
    name: 'Quantum Logistics Optimization',
    tagline: 'Solve complex logistics problems with quantum computing',
    price: '$1,799',
    period: '/month',
    description: 'Advanced logistics optimization platform that uses quantum computing to solve complex supply chain problems, route optimization, and resource allocation challenges.',
    features: [
      'Quantum optimization',
      'Route planning',
      'Supply chain optimization',
      'Resource allocation',
      'Performance analysis',
      'Real-time optimization',
      'Custom algorithms',
      'Analytics dashboard',
      'API access',
      'Integration tools'
    ],
    popular: true,
    icon: '📦',
    color: 'from-blue-500 to-indigo-600',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/quantum-logistics-optimization',
    marketPosition: 'Leading quantum logistics optimization platform. Solves complex logistics problems.',
    targetAudience: 'Logistics companies, E-commerce businesses, Manufacturing companies, Retail chains, Transportation providers',
    trialDays: 21,
    setupTime: '4-6 weeks',
    category: 'Quantum Logistics',
    realService: true,
    technology: ['Python, Qiskit, Cirq, Optimization algorithms, Quantum simulators, AWS, Azure'],
    integrations: ['ERP systems, WMS, TMS, GPS tracking, IoT sensors, Cloud platforms'],
    useCases: ['Route optimization, Supply chain planning, Resource allocation, Cost optimization, Performance improvement'],
    roi: 'Logistics companies report 500%+ ROI through improved efficiency and cost reduction.',
    competitors: ['None - First to market'],
    marketSize: '$30B+ potential market',
    growthRate: '400%+ annual growth',
    variant: 'quantum-logistics-revolutionary',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Quantum logistics optimization platform with advanced optimization algorithms.',
    launchDate: '2025-02-15',
    customers: 28,
    rating: 4.8,
    reviews: 21
  }
];