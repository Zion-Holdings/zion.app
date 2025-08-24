import { ServiceVariant } from '../types/service-variants';

export interface InnovativeQuantumService {
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

export const innovativeQuantumServices: InnovativeQuantumService[] = [
  {
    id: 'quantum-computing-platform',
    name: 'Quantum Computing Platform',
    tagline: 'Advanced quantum computing platform with quantum algorithms and optimization capabilities',
    price: '$25,999',
    period: '/month',
    description: 'Revolutionary quantum computing platform that provides access to quantum processors, quantum algorithms, and quantum optimization capabilities for solving complex computational problems.',
    features: [
      'Quantum processor access',
      'Quantum algorithms',
      'Optimization capabilities',
      'Real-time computation',
      'Performance analytics',
      'Integration capabilities',
      'Custom quantum models',
      'Multi-qubit support',
      'Compliance management'
    ],
    popular: true,
    icon: '⚛️',
    color: 'from-blue-600 to-indigo-700',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/quantum-computing-platform',
    marketPosition: 'Leading quantum computing platform with advanced algorithms and optimization capabilities.',
    targetAudience: 'Research institutions, Technology companies, Financial institutions, Government agencies'],
    trialDays: 60,
    setupTime: '3 months',
    category: 'Quantum Computing',
    realService: true,
    technology: ['Quantum computing, Quantum algorithms, Optimization, Quantum mechanics, Python'],
    integrations: ['Quantum processors, Classical computers, Cloud platforms, Analytics tools'],
    useCases: ['Complex optimization, Cryptography, Drug discovery, Financial modeling'],
    roi: 'Solve previously unsolvable problems and achieve exponential speedup for specific applications',
    competitors: ['IBM Quantum, Google Quantum, D-Wave, Rigetti'],
    marketSize: '$65.2B+ quantum computing market',
    growthRate: '580% YoY',
    variant: 'quantum-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Advanced quantum computing platform with quantum algorithms and optimization capabilities.',
    launchDate: '2025-01-01',
    customers: 45,
    rating: 4.8,
    reviews: 32
  },
  {
    id: 'quantum-cryptography-platform',
    name: 'Quantum Cryptography Platform',
    tagline: 'Unbreakable quantum cryptography with quantum key distribution and secure communications',
    price: '$18,999',
    period: '/month',
    description: 'Advanced quantum cryptography platform that uses quantum mechanics to provide unbreakable encryption, quantum key distribution, and secure communications for high-security applications.',
    features: [
      'Quantum key distribution',
      'Unbreakable encryption',
      'Secure communications',
      'Real-time security',
      'Performance analytics',
      'Integration capabilities',
      'Custom security models',
      'Multi-channel support',
      'Compliance management'
    ],
    popular: false,
    icon: '🔐',
    color: 'from-yellow-600 to-orange-700',
    textColor: 'text-yellow-400',
    link: 'https://ziontechgroup.com/quantum-cryptography-platform',
    marketPosition: 'Advanced quantum cryptography platform for unbreakable encryption and secure communications.',
    targetAudience: 'Government agencies, Military organizations, Financial institutions, High-security companies'],
    trialDays: 60,
    setupTime: '3 months',
    category: 'Quantum Computing',
    realService: true,
    technology: ['Quantum cryptography, Quantum key distribution, Quantum mechanics, Security protocols, Python'],
    integrations: ['Quantum networks, Communication systems, Security systems, Government networks'],
    useCases: ['Secure communications, Government security, Military applications, Financial security'],
    roi: 'Provide unbreakable encryption and achieve 100% security for critical communications',
    competitors: ['ID Quantique, QuintessenceLabs, MagiQ Technologies, QuantumCTek'],
    marketSize: '$28.4B+ quantum cryptography market',
    growthRate: '720% YoY',
    variant: 'quantum-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Advanced quantum cryptography platform with quantum key distribution and unbreakable encryption capabilities.',
    launchDate: '2025-01-06',
    customers: 12,
    rating: 4.7,
    reviews: 8
  },
  {
    id: 'quantum-machine-learning',
    name: 'Quantum Machine Learning',
    tagline: 'Quantum-powered machine learning with quantum algorithms and quantum neural networks',
    price: '$19,999',
    period: '/month',
    description: 'Revolutionary quantum machine learning platform that uses quantum computing to accelerate machine learning algorithms, create quantum neural networks, and solve complex AI problems.',
    features: [
      'Quantum machine learning algorithms',
      'Quantum neural networks',
      'AI acceleration',
      'Real-time learning',
      'Performance analytics',
      'Integration capabilities',
      'Custom quantum models',
      'Multi-algorithm support',
      'Compliance management'
    ],
    popular: true,
    icon: '🧠',
    color: 'from-green-600 to-emerald-700',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/quantum-machine-learning',
    marketPosition: 'Leading quantum machine learning platform with quantum algorithms and AI acceleration.',
    targetAudience: 'AI companies, Research institutions, Technology companies, Data science teams'],
    trialDays: 60,
    setupTime: '3 months',
    category: 'Quantum Computing',
    realService: true,
    technology: ['Quantum computing, Machine learning, Quantum algorithms, Neural networks, Python'],
    integrations: ['Quantum processors, Machine learning frameworks, Data platforms, Analytics tools'],
    useCases: ['AI acceleration, Pattern recognition, Optimization problems, Data analysis'],
    roi: 'Accelerate machine learning by 1000x and solve previously unsolvable AI problems',
    competitors: ['IBM Quantum, Google Quantum, Microsoft Quantum, Amazon Braket'],
    marketSize: '$42.8B+ quantum AI market',
    growthRate: '680% YoY',
    variant: 'quantum-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Advanced quantum machine learning platform with quantum algorithms and AI acceleration capabilities.',
    launchDate: '2025-01-11',
    customers: 28,
    rating: 4.6,
    reviews: 19
  },
  {
    id: 'quantum-simulation-platform',
    name: 'Quantum Simulation Platform',
    tagline: 'Quantum-powered simulation platform for molecular dynamics and material science',
    price: '$21,999',
    period: '/month',
    description: 'Advanced quantum simulation platform that uses quantum computing to simulate quantum systems, model molecular dynamics, and solve complex scientific problems for research and industry.',
    features: [
      'Quantum system simulation',
      'Molecular dynamics',
      'Scientific modeling',
      'Real-time simulation',
      'Performance analytics',
      'Integration capabilities',
      'Custom simulation models',
      'Multi-system support',
      'Compliance management'
    ],
    popular: false,
    icon: '🔬',
    color: 'from-purple-600 to-violet-700',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/quantum-simulation-platform',
    marketPosition: 'Advanced quantum simulation platform for quantum systems and scientific modeling.',
    targetAudience: 'Research institutions, Pharmaceutical companies, Material science firms, Government agencies'],
    trialDays: 60,
    setupTime: '3 months',
    category: 'Quantum Computing',
    realService: true,
    technology: ['Quantum computing, Quantum simulation, Molecular dynamics, Scientific modeling, Python'],
    integrations: ['Quantum processors, Scientific databases, Research tools, Analytics platforms'],
    useCases: ['Quantum simulation, Molecular modeling, Scientific research, Material discovery'],
    roi: 'Simulate quantum systems with perfect accuracy and accelerate scientific discovery by 1000x',
    competitors: ['IBM Quantum, Google Quantum, D-Wave, Rigetti'],
    marketSize: '$38.6B+ quantum simulation market',
    growthRate: '640% YoY',
    variant: 'quantum-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Advanced quantum simulation platform with quantum system simulation and scientific modeling capabilities.',
    launchDate: '2025-01-16',
    customers: 18,
    rating: 4.5,
    reviews: 12
  },
  {
    id: 'quantum-financial-modeling',
    name: 'Quantum Financial Modeling',
    tagline: 'Quantum-powered financial modeling with quantum algorithms and risk optimization',
    price: '$24,999',
    period: '/month',
    description: 'Revolutionary quantum financial modeling platform that uses quantum computing to optimize financial portfolios, model complex financial systems, and solve advanced financial problems.',
    features: [
      'Quantum financial algorithms',
      'Portfolio optimization',
      'Risk modeling',
      'Real-time analysis',
      'Performance analytics',
      'Integration capabilities',
      'Custom financial models',
      'Multi-asset support',
      'Compliance management'
    ],
    popular: true,
    icon: '💰',
    color: 'from-red-600 to-pink-700',
    textColor: 'text-red-400',
    link: 'https://ziontechgroup.com/quantum-financial-modeling',
    marketPosition: 'Leading quantum financial modeling platform with quantum algorithms and risk optimization.',
    targetAudience: 'Financial institutions, Investment firms, Hedge funds, Risk management teams'],
    trialDays: 60,
    setupTime: '3 months',
    category: 'Quantum Computing',
    realService: true,
    technology: ['Quantum computing, Financial modeling, Portfolio optimization, Risk analysis, Python'],
    integrations: ['Financial databases, Trading platforms, Risk management systems, Analytics tools'],
    useCases: ['Portfolio optimization, Risk modeling, Financial analysis, Trading strategies'],
    roi: 'Optimize portfolios with 100% efficiency and reduce financial risk by 90%',
    competitors: ['IBM Quantum, Google Quantum, D-Wave, Rigetti'],
    marketSize: '$52.4B+ quantum finance market',
    growthRate: '760% YoY',
    variant: 'quantum-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Advanced quantum financial modeling platform with quantum algorithms and risk optimization capabilities.',
    launchDate: '2025-01-21',
    customers: 34,
    rating: 4.7,
    reviews: 24
  }
];