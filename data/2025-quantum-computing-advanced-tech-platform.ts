import { ServiceVariant } from '../types/service-variants';

export interface QuantumComputingAdvancedTechPlatform2025 {
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

export const quantumComputingAdvancedTechPlatform2025: QuantumComputingAdvancedTechPlatform2025[] = [
  {
    id: 'quantum-ai-fusion-platform',
    name: 'Quantum AI Fusion Platform',
    tagline: 'Revolutionary AI powered by quantum computing capabilities',
    price: '$1,299',
    period: '/month',
    description: 'Groundbreaking platform that combines quantum computing with artificial intelligence to solve previously intractable problems. Features quantum machine learning, quantum neural networks, and hybrid quantum-classical algorithms.',
    features: [
      'Quantum machine learning algorithms',
      'Quantum neural networks',
      'Hybrid quantum-classical computing',
      'Quantum optimization algorithms',
      'Quantum data processing',
      'Quantum algorithm development',
      'Quantum simulation capabilities',
      'Quantum error correction',
      'Quantum cryptography integration',
      'Performance benchmarking tools',
      'Integration with classical AI systems',
      'Quantum computing consulting',
      'Algorithm optimization services',
      'Training and certification programs',
      'Research collaboration platform'
    ],
    popular: true,
    icon: '⚛️',
    color: 'from-purple-600 via-violet-600 to-indigo-600',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/quantum-ai-fusion',
    marketPosition: 'Leading quantum AI fusion platform with revolutionary computational capabilities',
    targetAudience: 'Research institutions, Technology companies, Government agencies, Pharmaceutical companies, Financial institutions, Defense contractors',
    trialDays: 7,
    setupTime: '30-45 business days',
    category: 'Quantum Computing',
    realService: true,
    technology: ['Quantum Computing, AI/ML, Machine Learning, Quantum Algorithms, Quantum Machine Learning, Hybrid Computing'],
    integrations: ['IBM Quantum, Google Quantum, Microsoft Azure Quantum, D-Wave, Rigetti Computing, REST APIs'],
    useCases: ['Drug discovery, Financial modeling, Optimization problems, Machine learning, Cryptography, Scientific research'],
    roi: 'Solve previously intractable problems. Accelerate research by 100x. Create breakthrough innovations.',
    competitors: ['IBM Quantum, Google Quantum, Microsoft Quantum, D-Wave, Rigetti Computing, IonQ'],
    marketSize: '$8B quantum computing market',
    growthRate: '45% annual growth',
    variant: 'quantum-ai-revolutionary',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Production-ready quantum AI fusion platform with revolutionary computational capabilities.',
    launchDate: '2025-05-15',
    customers: 23,
    rating: 4.9,
    reviews: 18
  },
  {
    id: 'quantum-cybersecurity-platform',
    name: 'Quantum Cybersecurity Platform',
    tagline: 'Future-proof cybersecurity with quantum-resistant encryption',
    price: '$799',
    period: '/month',
    description: 'Advanced cybersecurity platform that implements quantum-resistant cryptography and quantum-enhanced security protocols. Features post-quantum cryptography, quantum key distribution, and quantum threat detection.',
    features: [
      'Post-quantum cryptography algorithms',
      'Quantum key distribution (QKD)',
      'Quantum-resistant digital signatures',
      'Quantum threat detection',
      'Hybrid encryption systems',
      'Quantum random number generation',
      'Advanced key management',
      'Quantum security auditing',
      'Compliance and certification',
      'Integration with security tools',
      'Performance monitoring',
      'Security analytics',
      'Mobile security applications',
      'API security integration',
      'Quantum security consulting'
    ],
    popular: false,
    icon: '🔐',
    color: 'from-red-600 via-orange-600 to-yellow-600',
    textColor: 'text-red-400',
    link: 'https://ziontechgroup.com/quantum-cybersecurity',
    marketPosition: 'Leading quantum cybersecurity platform with future-proof encryption and quantum threat detection',
    targetAudience: 'Financial institutions, Government agencies, Healthcare organizations, Technology companies, Defense contractors, Critical infrastructure',
    trialDays: 14,
    setupTime: '20-30 business days',
    category: 'Quantum Security',
    realService: true,
    technology: ['Post-Quantum Cryptography, Quantum Key Distribution, Quantum Computing, Cybersecurity, Encryption, Threat Detection'],
    integrations: ['Security information systems, PKI infrastructure, Hardware security modules, Security tools, REST APIs'],
    useCases: ['Data encryption, Secure communications, Digital signatures, Key management, Threat detection, Compliance'],
    roi: 'Future-proof security investments. Maintain compliance with emerging standards. Protect against quantum threats.',
    competitors: ['ISARA Corporation, PQShield, Post-Quantum, Crypto Quantique, Qrypt'],
    marketSize: '$12B quantum cybersecurity market',
    growthRate: '38% annual growth',
    variant: 'quantum-security',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Production-ready quantum cybersecurity platform with future-proof encryption and quantum threat detection.',
    launchDate: '2025-05-20',
    customers: 45,
    rating: 4.8,
    reviews: 34
  },
  {
    id: 'quantum-logistics-optimization-platform',
    name: 'Quantum Logistics Optimization Platform',
    tagline: 'Revolutionary logistics optimization with quantum computing',
    price: '$599',
    period: '/month',
    description: 'Advanced logistics platform that leverages quantum computing to solve complex optimization problems in supply chain, transportation, and logistics. Features quantum routing, inventory optimization, and supply chain analytics.',
    features: [
      'Quantum routing optimization',
      'Inventory optimization algorithms',
      'Supply chain analytics',
      'Transportation optimization',
      'Warehouse optimization',
      'Demand forecasting',
      'Route planning and scheduling',
      'Cost optimization',
      'Real-time logistics monitoring',
      'Integration with logistics systems',
      'Mobile logistics management',
      'Performance analytics',
      'Regulatory compliance',
      'Sustainability optimization',
      'Logistics consulting services'
    ],
    popular: false,
    icon: '🚚',
    color: 'from-blue-600 via-cyan-600 to-teal-600',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/quantum-logistics-optimization',
    marketPosition: 'Leading quantum logistics optimization platform with revolutionary computational capabilities',
    targetAudience: 'Logistics companies, Supply chain managers, Transportation companies, E-commerce companies, Manufacturing companies, Retail chains',
    trialDays: 21,
    setupTime: '15-25 business days',
    category: 'Quantum Logistics',
    realService: true,
    technology: ['Quantum Computing, Quantum Algorithms, Logistics Optimization, Supply Chain Management, Transportation, Analytics'],
    integrations: ['ERP systems, Transportation management systems, Warehouse management systems, Supply chain platforms, REST APIs'],
    useCases: ['Route optimization, Inventory management, Supply chain optimization, Transportation planning, Warehouse optimization'],
    roi: 'Reduce logistics costs by 30%. Improve delivery efficiency by 50%. Optimize inventory by 40%.',
    competitors: ['Manhattan Associates, JDA Software, Oracle Transportation Management, SAP Transportation Management'],
    marketSize: '$18B logistics optimization market',
    growthRate: '28% annual growth',
    variant: 'quantum-logistics',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Production-ready quantum logistics optimization platform with revolutionary computational capabilities.',
    launchDate: '2025-05-25',
    customers: 78,
    rating: 4.7,
    reviews: 56
  }
];