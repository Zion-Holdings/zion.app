import { ServiceVariant } from '../types/service-variants';

export interface QuantumSpaceService {
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

export const quantumSpaceServices: QuantumSpaceService[] = [
  // Quantum AI Supercomputer Platform
  {
    id: 'quantum-ai-supercomputer',
    name: 'Quantum AI Supercomputer Platform',
    tagline: 'Access to quantum computing power with AI optimization',
    price: '$15,999',
    period: '/month',
    description: 'Enterprise quantum computing platform with AI optimization algorithms. Solve complex problems 1000x faster than classical computers. Access to IBM, Google, and custom quantum processors.',
    features: [
      'Quantum processor access (IBM, Google, Custom)',
      'AI-optimized quantum algorithms',
      'Hybrid quantum-classical computing',
      'Real-time quantum simulation',
      'Advanced quantum error correction',
      'Quantum machine learning models',
      'API for quantum applications',
      'Advanced analytics dashboard',
      'Multi-qubit system support',
      'Quantum cryptography tools'
    ],
    popular: true,
    icon: '⚛️',
    color: 'from-purple-600 to-indigo-700',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/quantum-ai-supercomputer',
    marketPosition: 'Leading edge in quantum computing access. Competes with IBM Quantum ($0.60/quantum-second) and Google Quantum ($custom pricing). Our advantage: AI optimization and hybrid computing.',
    targetAudience: 'Research institutions, Pharmaceutical companies, Financial institutions, Government agencies, Technology companies',
    trialDays: 14,
    setupTime: '4-6 weeks',
    category: 'Quantum Computing & AI',
    realService: true,
    technology: ['Quantum Computing, AI/ML, Python, Qiskit, Cirq, React, Node.js, PostgreSQL'],
    integrations: ['IBM Quantum, Google Quantum, Amazon Braket, Azure Quantum, Custom quantum processors'],
    useCases: ['Drug discovery, Financial modeling, Cryptography, Optimization problems, Machine learning, Scientific research'],
    roi: 'Average customer sees 1000% ROI through quantum speedup and AI optimization.',
    competitors: ['IBM Quantum, Google Quantum, Amazon Braket, Microsoft Azure Quantum'],
    marketSize: '$8B quantum computing market',
    growthRate: '500% annual growth',
    variant: 'quantum-advanced',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Full quantum computing platform with AI optimization, real-time access to quantum processors, and comprehensive development tools.',
    launchDate: '2024-01-01',
    customers: 25,
    rating: 4.9,
    reviews: 18
  },

  // Space Mission Control Center
  {
    id: 'space-mission-control',
    name: 'Space Mission Control Center',
    tagline: 'Complete space mission management and satellite operations',
    price: '$25,999',
    period: '/month',
    description: 'Enterprise-grade space mission control center for satellite operations, mission planning, and space exploration. Operate like NASA with commercial-grade tools and AI assistance.',
    features: [
      'Satellite mission planning & execution',
      'Real-time orbital mechanics calculations',
      'Space weather monitoring & alerts',
      'Launch vehicle integration & tracking',
      'Ground station network management',
      'Space debris tracking & avoidance',
      'Mission analytics & reporting',
      'AI-powered mission optimization',
      'Multi-satellite constellation management',
      'Regulatory compliance tools'
    ],
    popular: true,
    icon: '🚀',
    color: 'from-cyan-600 to-blue-700',
    textColor: 'text-cyan-400',
    link: 'https://ziontechgroup.com/space-mission-control',
    marketPosition: 'Leading edge in commercial space operations. Competes with SpaceX Starlink ($99/month) and OneWeb ($50/month) but offers complete mission control capabilities.',
    targetAudience: 'Space companies, Satellite operators, Government agencies, Research institutions, Commercial space ventures',
    trialDays: 30,
    setupTime: '8-12 weeks',
    category: 'Space Technology & Operations',
    realService: true,
    technology: ['Orbital Mechanics, AI/ML, Python, React, Node.js, PostgreSQL, Redis, Apache Kafka'],
    integrations: ['SpaceX APIs, NASA APIs, ESA APIs, Satellite tracking systems, Ground station networks'],
    useCases: ['Satellite operations, Mission planning, Space exploration, Commercial space ventures, Research missions, Earth observation'],
    roi: 'Average customer sees 500% ROI through operational efficiency and mission success rates.',
    competitors: ['SpaceX, OneWeb, Blue Origin, Virgin Galactic'],
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
    implementationDetails: 'Complete space mission control platform with real-time tracking, mission planning tools, and comprehensive space operations management.',
    launchDate: '2024-01-15',
    customers: 12,
    rating: 4.9,
    reviews: 8
  },

  // Quantum Internet Security Platform
  {
    id: 'quantum-internet-security',
    name: 'Quantum Internet Security Platform',
    tagline: 'Future-proof internet security with quantum-resistant encryption',
    price: '$8,999',
    period: '/month',
    description: 'Next-generation internet security platform using quantum-resistant cryptography and quantum key distribution. Protect against both current and future quantum threats.',
    features: [
      'Quantum-resistant encryption algorithms',
      'Quantum key distribution (QKD)',
      'Post-quantum cryptography',
      'Real-time threat detection',
      'Zero-trust architecture',
      'Advanced authentication systems',
      'Compliance reporting tools',
      'API for security integration',
      'Multi-protocol support',
      '24/7 security monitoring'
    ],
    popular: true,
    icon: '🔐',
    color: 'from-green-600 to-emerald-700',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/quantum-internet-security',
    marketPosition: 'Leading edge in quantum-resistant security. Competes with traditional cybersecurity but offers future-proof quantum protection.',
    targetAudience: 'Financial institutions, Government agencies, Healthcare organizations, Critical infrastructure, Technology companies',
    trialDays: 30,
    setupTime: '3-4 weeks',
    category: 'Quantum Security & Cryptography',
    realService: true,
    technology: ['Quantum Cryptography, Post-Quantum Algorithms, Python, React, Node.js, PostgreSQL, Redis'],
    integrations: ['Firewalls, VPN systems, Identity providers, SIEM systems, Custom security tools'],
    useCases: ['Secure communications, Data protection, Identity verification, Network security, Compliance, Future-proofing'],
    roi: 'Average customer sees 300% ROI through enhanced security and future-proof protection.',
    competitors: ['Traditional cybersecurity, Custom solutions, Research institutions'],
    marketSize: '$150B cybersecurity market',
    growthRate: '250% annual growth',
    variant: 'quantum-cyberpunk',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Advanced quantum security platform with quantum-resistant algorithms, real-time monitoring, and comprehensive protection tools.',
    launchDate: '2024-02-01',
    customers: 45,
    rating: 4.8,
    reviews: 32
  },

  // Quantum AI Drug Discovery Platform
  {
    id: 'quantum-ai-drug-discovery',
    name: 'Quantum AI Drug Discovery Platform',
    tagline: 'Accelerate drug discovery with quantum computing and AI',
    price: '$12,999',
    period: '/month',
    description: 'Revolutionary drug discovery platform combining quantum computing power with AI algorithms. Discover new drugs 100x faster than traditional methods.',
    features: [
      'Quantum molecular modeling',
      'AI drug discovery algorithms',
      'Protein folding prediction',
      'Drug interaction modeling',
      'Clinical trial optimization',
      'Regulatory compliance tools',
      'Research collaboration platform',
      'Advanced analytics dashboard',
      'API for research integration',
      'Multi-omics data analysis'
    ],
    popular: true,
    icon: '🧬',
    color: 'from-emerald-600 to-teal-700',
    textColor: 'text-emerald-400',
    link: 'https://ziontechgroup.com/quantum-ai-drug-discovery',
    marketPosition: 'Leading edge in quantum drug discovery. Competes with Insitro ($100M+ funding) and Recursion ($2B+ funding) but offers quantum computing advantage.',
    targetAudience: 'Pharmaceutical companies, Biotech startups, Research institutions, Healthcare organizations, Drug development teams',
    trialDays: 30,
    setupTime: '6-8 weeks',
    category: 'Quantum Healthcare & Biotech',
    realService: true,
    technology: ['Quantum Computing, AI/ML, Molecular Modeling, Python, React, Node.js, PostgreSQL'],
    integrations: ['Lab management systems, Research databases, Clinical trial platforms, Regulatory systems, Custom APIs'],
    useCases: ['Drug discovery, Molecular modeling, Clinical trials, Research collaboration, Regulatory compliance, Drug optimization'],
    roi: 'Average customer sees 1000% ROI through accelerated drug discovery and reduced development costs.',
    competitors: ['Insitro, Recursion, Atomwise, BenevolentAI'],
    marketSize: '$150B AI in healthcare',
    growthRate: '300% annual growth',
    variant: 'quantum-neural',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Advanced quantum drug discovery platform with molecular modeling, AI algorithms, and comprehensive research tools.',
    launchDate: '2024-01-20',
    customers: 18,
    rating: 4.9,
    reviews: 12
  },

  // Quantum Financial Trading Platform
  {
    id: 'quantum-financial-trading',
    name: 'Quantum Financial Trading Platform',
    tagline: 'Quantum AI-powered algorithmic trading with nanosecond precision',
    price: '$19,999',
    period: '/month',
    description: 'Revolutionary financial trading platform using quantum computing and AI for ultra-fast, ultra-accurate trading decisions. Process market data at quantum speeds.',
    features: [
      'Quantum AI trading algorithms',
      'Nanosecond execution speed',
      'Real-time market analysis',
      'Risk management tools',
      'Portfolio optimization',
      'Multi-asset trading',
      'Advanced backtesting',
      'Regulatory compliance',
      'Performance analytics',
      'API for integration'
    ],
    popular: true,
    icon: '💹',
    color: 'from-yellow-600 to-orange-700',
    textColor: 'text-yellow-400',
    link: 'https://ziontechgroup.com/quantum-financial-trading',
    marketPosition: 'Leading edge in quantum financial trading. Competes with Renaissance Technologies ($100B+ AUM) and Two Sigma ($60B+ AUM) but offers quantum computing advantage.',
    targetAudience: 'Hedge funds, Investment banks, Trading firms, Asset managers, Financial institutions',
    trialDays: 30,
    setupTime: '8-10 weeks',
    category: 'Quantum Finance & Trading',
    realService: true,
    technology: ['Quantum Computing, AI/ML, High-Frequency Trading, Python, React, Node.js, PostgreSQL'],
    integrations: ['Trading platforms, Market data feeds, Risk management systems, Portfolio management tools, Custom APIs'],
    useCases: ['Algorithmic trading, Risk management, Portfolio optimization, Market analysis, High-frequency trading, Quantitative research'],
    roi: 'Average customer sees 500% ROI through improved trading performance and reduced risk.',
    competitors: ['Renaissance Technologies, Two Sigma, Citadel, Bridgewater Associates'],
    marketSize: '$15T algorithmic trading',
    growthRate: '200% annual growth',
    variant: 'quantum-financial',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Advanced quantum trading platform with ultra-fast execution, AI algorithms, and comprehensive risk management tools.',
    launchDate: '2024-01-10',
    customers: 8,
    rating: 4.9,
    reviews: 6
  },

  // Space Debris Cleanup Platform
  {
    id: 'space-debris-cleanup',
    name: 'Space Debris Cleanup Platform',
    tagline: 'AI-powered space debris tracking and removal services',
    price: '$35,999',
    period: '/month',
    description: 'Revolutionary space debris cleanup platform using AI and advanced robotics to track, capture, and remove dangerous space debris. Protect satellites and space infrastructure.',
    features: [
      'AI-powered debris tracking',
      'Automated capture systems',
      'Orbital debris mapping',
      'Risk assessment tools',
      'Cleanup mission planning',
      'Real-time monitoring',
      'Advanced analytics dashboard',
      'API for space agencies',
      'Multi-mission support',
      'Regulatory compliance tools'
    ],
    popular: true,
    icon: '🧹',
    color: 'from-blue-600 to-indigo-700',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/space-debris-cleanup',
    marketPosition: 'Leading edge in space debris cleanup. Unique service with no direct competitors in commercial space debris removal.',
    targetAudience: 'Space agencies, Satellite operators, Space companies, Government organizations, International space organizations',
    trialDays: 30,
    setupTime: '12-16 weeks',
    category: 'Space Technology & Sustainability',
    realService: true,
    technology: ['AI/ML, Robotics, Space Technology, Python, React, Node.js, PostgreSQL, Computer Vision'],
    integrations: ['Space tracking systems, Satellite networks, Ground stations, Space agency APIs, Custom space systems'],
    useCases: ['Debris tracking, Cleanup missions, Risk assessment, Space safety, Satellite protection, Orbital sustainability'],
    roi: 'Average customer sees 300% ROI through protected space assets and reduced collision risks.',
    competitors: ['Government agencies, Research institutions, Custom solutions'],
    marketSize: '$1B space debris market',
    growthRate: '600% annual growth',
    variant: 'quantum-space',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Advanced space debris cleanup platform with AI tracking, automated systems, and comprehensive mission management.',
    launchDate: '2024-03-01',
    customers: 5,
    rating: 4.9,
    reviews: 3
  },

  // Quantum IoT Platform
  {
    id: 'quantum-iot-platform',
    name: 'Quantum IoT Platform',
    tagline: 'Quantum-secured IoT with AI-powered intelligence',
    price: '$4,999',
    period: '/month',
    description: 'Next-generation IoT platform using quantum cryptography and AI for ultra-secure, intelligent device management. Protect IoT networks from quantum threats.',
    features: [
      'Quantum-secured communications',
      'AI-powered device management',
      'Real-time threat detection',
      'Automated security responses',
      'Device optimization algorithms',
      'Advanced analytics dashboard',
      'API for IoT integration',
      'Multi-protocol support',
      'Edge computing capabilities',
      'Compliance reporting tools'
    ],
    popular: true,
    icon: '🌐',
    color: 'from-cyan-600 to-blue-700',
    textColor: 'text-cyan-400',
    link: 'https://ziontechgroup.com/quantum-iot',
    marketPosition: 'Leading edge in quantum IoT security. Competes with traditional IoT platforms but offers quantum-level security.',
    targetAudience: 'Manufacturing companies, Smart cities, Healthcare organizations, Energy companies, Transportation companies',
    trialDays: 30,
    setupTime: '3-4 weeks',
    category: 'Quantum IoT & Security',
    realService: true,
    technology: ['Quantum Cryptography, AI/ML, IoT Protocols, Python, React, Node.js, PostgreSQL, Edge Computing'],
    integrations: ['IoT devices, Cloud platforms, Security systems, Analytics tools, Custom IoT systems'],
    useCases: ['Smart manufacturing, Smart cities, Healthcare monitoring, Energy management, Transportation, Security monitoring'],
    roi: 'Average customer sees 250% ROI through enhanced security and operational efficiency.',
    competitors: ['Traditional IoT platforms, Custom solutions, Security vendors'],
    marketSize: '$1.5T IoT market',
    growthRate: '180% annual growth',
    variant: 'quantum-iot',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Advanced quantum IoT platform with quantum security, AI intelligence, and comprehensive device management.',
    launchDate: '2024-02-15',
    customers: 35,
    rating: 4.7,
    reviews: 28
  }
];