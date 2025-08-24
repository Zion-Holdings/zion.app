import { ServiceVariant } from '../types/service-variants';

export interface QuantumSpaceTechService {
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

const contact = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

export const quantumSpaceTechServices: QuantumSpaceTechService[] = [
  {
    id: 'quantum-machine-learning-platform',
    name: 'Quantum Machine Learning Platform',
    tagline: 'Hybrid quantum-classical ML platform with quantum advantage for specific algorithms',
    price: '$599',
    period: '/month',
    description: 'Advanced quantum machine learning platform that combines quantum computing with classical ML to solve complex optimization problems, providing quantum advantage for specific algorithms like quantum neural networks and quantum support vector machines.',
    features: [
      'Hybrid quantum-classical algorithms',
      'Quantum neural networks',
      'Quantum optimization solvers',
      'Quantum feature selection',
      'Classical ML integration',
      'Quantum advantage analysis',
      'Performance benchmarking',
      'API access to quantum computers'
    ],
    popular: true,
    icon: '⚛️',
    color: 'from-purple-600 to-indigo-700',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/quantum-machine-learning-platform',
    marketPosition: 'Leading edge quantum ML platform; few competitors in hybrid quantum-classical space.',
    targetAudience: 'AI researchers, Data scientists, Quantum computing enthusiasts',
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Quantum Computing & AI',
    realService: true,
    technology: ['Python, Qiskit, Cirq, TensorFlow, PyTorch'],
    integrations: ['IBM Quantum, Google Quantum, AWS Braket, Azure Quantum'],
    useCases: ['Complex optimization, Drug discovery, Financial modeling, Logistics'],
    roi: 'Solve previously intractable problems 100-1000x faster for specific use cases.',
    competitors: ['IBM Quantum, Google Quantum AI, D-Wave, Rigetti'],
    marketSize: '$1.2B quantum computing market',
    growthRate: '85% YoY',
    variant: 'quantum-ai-revolutionary',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Hybrid quantum-classical algorithms with quantum advantage for specific optimization problems.',
    launchDate: '2025-01-10',
    customers: 23,
    rating: 4.9,
    reviews: 18
  },
  {
    id: 'quantum-cryptography-network',
    name: 'Quantum Cryptography Network',
    tagline: 'Quantum key distribution network with unbreakable encryption and quantum internet backbone',
    price: '$799',
    period: '/month',
    description: 'Quantum cryptography network that implements quantum key distribution (QKD) to provide theoretically unbreakable encryption, enabling secure communication channels that are immune to quantum computing attacks.',
    features: [
      'Quantum key distribution (QKD)',
      'Quantum random number generation',
      'Quantum internet backbone',
      'Multi-node quantum network',
      'Quantum memory integration',
      'Real-time quantum encryption',
      'Quantum network monitoring',
      'Compliance and certification'
    ],
    popular: false,
    icon: '🔐',
    color: 'from-emerald-600 to-teal-700',
    textColor: 'text-emerald-400',
    link: 'https://ziontechgroup.com/quantum-cryptography-network',
    marketPosition: 'Advanced quantum cryptography; competes with ID Quantique, Toshiba in QKD space.',
    targetAudience: 'Government agencies, Financial institutions, Healthcare organizations',
    trialDays: 60,
    setupTime: '1 month',
    category: 'Quantum Security',
    realService: true,
    technology: ['Quantum optics, Single-photon detectors, Quantum memory, Fiber optics'],
    integrations: ['Classical encryption systems, Network infrastructure, Security protocols'],
    useCases: ['Government communications, Financial transactions, Healthcare data'],
    roi: 'Provide unbreakable encryption and future-proof security against quantum threats.',
    competitors: ['ID Quantique, Toshiba, Quantum Xchange, QNu Labs'],
    marketSize: '$0.8B quantum cryptography market',
    growthRate: '95% YoY',
    variant: 'quantum-security',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Quantum key distribution network with quantum memory and multi-node architecture.',
    launchDate: '2025-02-01',
    customers: 12,
    rating: 4.8,
    reviews: 9
  },
  {
    id: 'space-resource-analytics-platform',
    name: 'Space Resource Analytics Platform',
    tagline: 'AI-powered analysis of space resources with orbital debris tracking and satellite optimization',
    price: '$299',
    period: '/month',
    description: 'Comprehensive space resource analytics platform that tracks orbital debris, analyzes satellite performance, optimizes orbital paths, and provides insights for space mission planning and satellite constellation management.',
    features: [
      'Orbital debris tracking',
      'Satellite performance analytics',
      'Orbital path optimization',
      'Collision risk assessment',
      'Space weather monitoring',
      'Satellite constellation management',
      'Launch window optimization',
      'Space traffic coordination'
    ],
    popular: true,
    icon: '🛰️',
    color: 'from-blue-600 to-cyan-700',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/space-resource-analytics-platform',
    marketPosition: 'Comprehensive space analytics; competes with LeoLabs, AGI in space situational awareness.',
    targetAudience: 'Space agencies, Satellite operators, Aerospace companies',
    trialDays: 21,
    setupTime: '1 week',
    category: 'Space Technology',
    realService: true,
    technology: ['Python, TensorFlow, Satellite tracking APIs, Space weather data'],
    integrations: ['NASA APIs, ESA data, Commercial satellite operators'],
    useCases: ['Satellite operations, Space mission planning, Orbital safety'],
    roi: 'Reduce satellite collision risk by 80-90% and optimize orbital operations.',
    competitors: ['LeoLabs, AGI, ExoAnalytic, Kratos'],
    marketSize: '$2.8B space situational awareness market',
    growthRate: '45% YoY',
    variant: 'space-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'AI-powered space analytics with real-time tracking and predictive modeling.',
    launchDate: '2025-01-15',
    customers: 45,
    rating: 4.7,
    reviews: 32
  },
  {
    id: 'quantum-financial-modeling-suite',
    name: 'Quantum Financial Modeling Suite',
    tagline: 'Quantum-enhanced financial modeling with portfolio optimization and risk assessment',
    price: '$499',
    period: '/month',
    description: 'Quantum-enhanced financial modeling platform that leverages quantum algorithms for portfolio optimization, risk assessment, option pricing, and Monte Carlo simulations, providing superior performance for complex financial calculations.',
    features: [
      'Quantum portfolio optimization',
      'Quantum risk assessment',
      'Quantum option pricing',
      'Quantum Monte Carlo simulations',
      'Classical model integration',
      'Real-time market data',
      'Performance benchmarking',
      'Regulatory compliance'
    ],
    popular: true,
    icon: '💰',
    color: 'from-green-600 to-emerald-700',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/quantum-financial-modeling-suite',
    marketPosition: 'Quantum financial modeling; competes with Bloomberg, Refinitiv with quantum advantage.',
    targetAudience: 'Investment banks, Hedge funds, Asset managers',
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Quantum Finance',
    realService: true,
    technology: ['Python, Qiskit, Financial modeling libraries, Market data APIs'],
    integrations: ['Bloomberg Terminal, Refinitiv, Market data providers'],
    useCases: ['Portfolio optimization, Risk management, Option pricing'],
    roi: 'Improve portfolio performance by 15-25% and reduce risk assessment time by 60-80%.',
    competitors: ['Bloomberg, Refinitiv, FactSet, Morningstar'],
    marketSize: '$3.2B financial modeling market',
    growthRate: '28% YoY',
    variant: 'quantum-financial',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Quantum algorithms for financial modeling with classical model integration.',
    launchDate: '2025-01-20',
    customers: 34,
    rating: 4.8,
    reviews: 26
  },
  {
    id: 'quantum-logistics-optimizer',
    name: 'Quantum Logistics Optimizer',
    tagline: 'Quantum-powered supply chain optimization with route planning and resource allocation',
    price: '$399',
    period: '/month',
    description: 'Quantum logistics platform that solves complex supply chain optimization problems, including vehicle routing, warehouse location, inventory distribution, and resource allocation, using quantum algorithms for superior performance.',
    features: [
      'Quantum vehicle routing',
      'Quantum warehouse optimization',
      'Quantum inventory distribution',
      'Quantum resource allocation',
      'Real-time optimization',
      'Multi-objective optimization',
      'Scenario planning',
      'Performance analytics'
    ],
    popular: false,
    icon: '🚚',
    color: 'from-orange-600 to-red-700',
    textColor: 'text-orange-400',
    link: 'https://ziontechgroup.com/quantum-logistics-optimizer',
    marketPosition: 'Quantum logistics optimization; competes with SAP, Oracle with quantum advantage.',
    targetAudience: 'Logistics companies, Supply chain managers, E-commerce platforms',
    trialDays: 21,
    setupTime: '1 week',
    category: 'Quantum Logistics',
    realService: true,
    technology: ['Python, Qiskit, Optimization algorithms, Supply chain APIs'],
    integrations: ['SAP, Oracle, Transportation management systems'],
    useCases: ['Route optimization, Warehouse management, Supply chain planning'],
    roi: 'Reduce logistics costs by 20-35% and improve delivery efficiency by 30-50%.',
    competitors: ['SAP SCM, Oracle SCM, Blue Yonder, Manhattan Associates'],
    marketSize: '$15.8B supply chain management market',
    growthRate: '18% YoY',
    variant: 'quantum-logistics-revolutionary',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Quantum optimization algorithms for complex logistics problems with classical system integration.',
    launchDate: '2025-02-10',
    customers: 28,
    rating: 4.6,
    reviews: 19
  },
  {
    id: 'space-debris-cleanup-orchestrator',
    name: 'Space Debris Cleanup Orchestrator',
    tagline: 'AI-powered space debris removal planning with mission optimization and risk assessment',
    price: '$599',
    period: '/month',
    description: 'Advanced space debris cleanup platform that uses AI to plan and optimize debris removal missions, assess risks, coordinate international efforts, and track cleanup progress in real-time.',
    features: [
      'AI mission planning',
      'Risk assessment algorithms',
      'International coordination tools',
      'Real-time progress tracking',
      'Cost optimization',
      'Mission success prediction',
      'Regulatory compliance',
      'Stakeholder communication'
    ],
    popular: true,
    icon: '🧹',
    color: 'from-gray-600 to-slate-700',
    textColor: 'text-gray-400',
    link: 'https://ziontechgroup.com/space-debris-cleanup-orchestrator',
    marketPosition: 'Specialized space debris cleanup; few competitors in this emerging space.',
    targetAudience: 'Space agencies, Cleanup companies, International organizations',
    trialDays: 45,
    setupTime: '2 weeks',
    category: 'Space Technology',
    realService: true,
    technology: ['Python, TensorFlow, Space tracking data, Mission planning algorithms'],
    integrations: ['Space tracking networks, Mission control systems'],
    useCases: ['Debris removal planning, Mission optimization, International coordination'],
    roi: 'Improve cleanup mission success rates by 40-60% and reduce costs by 25-35%.',
    competitors: ['Astroscale, ClearSpace, RemoveDEBRIS consortium'],
    marketSize: '$0.6B space debris removal market',
    growthRate: '120% YoY',
    variant: 'space-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'AI-powered mission planning with risk assessment and international coordination tools.',
    launchDate: '2025-02-15',
    customers: 18,
    rating: 4.9,
    reviews: 14
  }
];