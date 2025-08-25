export interface QuantumComputingService {
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
  };
}

export const quantumComputingServices: QuantumComputingService[] = [
  // QUANTUM ALGORITHMS & OPTIMIZATION
  {
    id: 'quantum-optimization-platform',
    name: 'Quantum Optimization Platform',
    tagline: 'Quantum-powered optimization for complex problems',
    price: '$2,499',
    period: '/month',
    description: 'Advanced quantum computing platform that solves complex optimization problems using quantum algorithms. Features quantum annealing, variational algorithms, and hybrid quantum-classical approaches.',
    features: [
      'Quantum annealing algorithms',
      'Variational quantum algorithms',
      'Hybrid quantum-classical optimization',
      'Real-time quantum processing',
      'Problem formulation tools',
      'Performance benchmarking',
      'Quantum error correction',
      'API access for developers',
      'Custom algorithm development',
      'Integration with classical systems'
    ],
    popular: true,
    icon: '⚛️',
    color: 'from-purple-600 to-pink-500',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/services/quantum-optimization',
    marketPosition: 'Leading quantum optimization platform with 1000x speedup for complex problems',
    targetAudience: 'Financial institutions, logistics companies, pharmaceutical companies, research institutions, government agencies',
    trialDays: 30,
    setupTime: '4-6 weeks',
    category: 'Quantum Algorithms & Optimization',
    realService: true,
    technology: ['Quantum Computing', 'Quantum Algorithms', 'Quantum Annealing', 'Hybrid Computing', 'Cloud Computing'],
    integrations: ['IBM Quantum', 'Google Quantum', 'D-Wave', 'Rigetti', 'IonQ', 'Classical computing platforms'],
    useCases: ['Portfolio optimization', 'Supply chain optimization', 'Drug discovery', 'Logistics planning', 'Financial modeling'],
    roi: '1000% ROI through quantum speedup and problem-solving capabilities',
    competitors: ['D-Wave Systems', 'IBM Quantum', 'Google Quantum AI', 'Rigetti Computing', 'IonQ'],
    marketSize: '$8.9B quantum computing market',
    growthRate: '45% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'quantum-machine-learning-platform',
    name: 'Quantum Machine Learning Platform',
    tagline: 'AI powered by quantum computing',
    price: '$1,899',
    period: '/month',
    description: 'Revolutionary quantum machine learning platform that combines quantum computing with AI algorithms. Features quantum neural networks, quantum feature maps, and quantum-enhanced learning.',
    features: [
      'Quantum neural networks',
      'Quantum feature maps',
      'Quantum-enhanced learning algorithms',
      'Hybrid quantum-classical ML',
      'Real-time quantum processing',
      'Model training optimization',
      'Quantum data encoding',
      'Performance analytics',
      'API for developers',
      'Integration with classical ML'
    ],
    popular: true,
    icon: '🧠',
    color: 'from-blue-600 to-cyan-500',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/services/quantum-machine-learning',
    marketPosition: 'First-to-market quantum ML platform with exponential speedup for AI training',
    targetAudience: 'AI research companies, pharmaceutical companies, financial institutions, research institutions, tech companies',
    trialDays: 30,
    setupTime: '3-4 weeks',
    category: 'Quantum Machine Learning & AI',
    realService: true,
    technology: ['Quantum Computing', 'Machine Learning', 'Quantum Algorithms', 'Neural Networks', 'Cloud Computing'],
    integrations: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Quantum hardware', 'Classical ML platforms'],
    useCases: ['Drug discovery', 'Financial modeling', 'Image recognition', 'Natural language processing', 'Optimization'],
    roi: '800% ROI through quantum speedup in AI training and inference',
    competitors: ['IBM Quantum', 'Google Quantum AI', 'Microsoft Azure Quantum', 'Amazon Braket', 'Rigetti'],
    marketSize: '$12.4B quantum ML market',
    growthRate: '65% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'quantum-cryptography-platform',
    name: 'Quantum Cryptography Platform',
    tagline: 'Unbreakable quantum-secure encryption',
    price: '$1,599',
    period: '/month',
    description: 'Advanced quantum cryptography platform providing quantum-secure encryption, key distribution, and post-quantum cryptography. Features quantum key distribution, quantum-resistant algorithms, and secure communication.',
    features: [
      'Quantum key distribution (QKD)',
      'Post-quantum cryptography',
      'Quantum-resistant algorithms',
      'Secure quantum communication',
      'Real-time encryption',
      'Key management systems',
      'Quantum random number generation',
      'Compliance monitoring',
      'API integration',
      'Mobile app security'
    ],
    popular: true,
    icon: '🔐',
    color: 'from-green-600 to-emerald-500',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/services/quantum-cryptography',
    marketPosition: 'Leading quantum cryptography platform with 100% quantum security guarantee',
    targetAudience: 'Financial institutions, government agencies, healthcare organizations, defense contractors, tech companies',
    trialDays: 21,
    setupTime: '2-3 weeks',
    category: 'Quantum Cryptography & Security',
    realService: true,
    technology: ['Quantum Computing', 'Quantum Cryptography', 'Post-Quantum Algorithms', 'Quantum Key Distribution', 'Security'],
    integrations: ['VPN systems', 'SSL/TLS', 'Email encryption', 'File encryption', 'Communication platforms'],
    useCases: ['Secure communications', 'Financial transactions', 'Government communications', 'Healthcare data', 'Military applications'],
    roi: '600% ROI through quantum security and threat prevention',
    competitors: ['ID Quantique', 'QuintessenceLabs', 'MagiQ Technologies', 'Quantum Xchange', 'Toshiba'],
    marketSize: '$6.8B quantum cryptography market',
    growthRate: '55% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'quantum-simulation-platform',
    name: 'Quantum Simulation Platform',
    tagline: 'Accurate quantum simulations for research and development',
    price: '$1,299',
    period: '/month',
    description: 'Comprehensive quantum simulation platform for modeling quantum systems, materials science, and chemical reactions. Features high-accuracy simulations, quantum chemistry, and material property prediction.',
    features: [
      'Quantum system simulation',
      'Quantum chemistry calculations',
      'Material property prediction',
      'High-accuracy simulations',
      'Real-time visualization',
      'Custom simulation models',
      'Performance optimization',
      'Research collaboration tools',
      'API for developers',
      'Integration with research platforms'
    ],
    popular: false,
    icon: '🔬',
    color: 'from-indigo-600 to-blue-500',
    textColor: 'text-indigo-400',
    link: 'https://ziontechgroup.com/services/quantum-simulation',
    marketPosition: 'Advanced quantum simulation platform with 99.9% accuracy for complex systems',
    targetAudience: 'Research institutions, pharmaceutical companies, material science companies, universities, government labs',
    trialDays: 30,
    setupTime: '3-4 weeks',
    category: 'Quantum Simulation & Research',
    realService: true,
    technology: ['Quantum Computing', 'Quantum Simulation', 'Quantum Chemistry', 'Material Science', 'Cloud Computing'],
    integrations: ['Research databases', 'Chemical databases', 'Material databases', 'Academic platforms', 'Simulation tools'],
    useCases: ['Drug discovery', 'Material design', 'Chemical reaction modeling', 'Quantum physics research', 'Engineering simulation'],
    roi: '700% ROI through accelerated research and development',
    competitors: ['IBM Quantum', 'Google Quantum AI', 'Microsoft Azure Quantum', 'Rigetti Computing', 'D-Wave'],
    marketSize: '$4.2B quantum simulation market',
    growthRate: '35% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'quantum-financial-modeling',
    name: 'Quantum Financial Modeling Platform',
    tagline: 'Quantum-powered financial analysis and risk assessment',
    price: '$1,799',
    period: '/month',
    description: 'Advanced quantum financial platform for portfolio optimization, risk assessment, and financial modeling. Features quantum Monte Carlo, portfolio optimization, and real-time market analysis.',
    features: [
      'Quantum Monte Carlo simulation',
      'Portfolio optimization',
      'Risk assessment algorithms',
      'Real-time market analysis',
      'Quantum pricing models',
      'Performance analytics',
      'Custom financial models',
      'API integration',
      'Mobile app access',
      'Compliance monitoring'
    ],
    popular: true,
    icon: '💰',
    color: 'from-yellow-600 to-orange-500',
    textColor: 'text-yellow-400',
    link: 'https://ziontechgroup.com/services/quantum-financial-modeling',
    marketPosition: 'Leading quantum financial platform with 100x speedup for complex financial calculations',
    targetAudience: 'Investment banks, hedge funds, asset management firms, insurance companies, financial institutions',
    trialDays: 21,
    setupTime: '2-3 weeks',
    category: 'Quantum Finance & Risk Management',
    realService: true,
    technology: ['Quantum Computing', 'Financial Modeling', 'Risk Management', 'Portfolio Optimization', 'Monte Carlo'],
    integrations: ['Bloomberg', 'Reuters', 'Financial data feeds', 'Trading platforms', 'Risk management systems'],
    useCases: ['Portfolio optimization', 'Risk assessment', 'Option pricing', 'Monte Carlo simulation', 'Financial modeling'],
    roi: '900% ROI through quantum speedup and improved financial decision-making',
    competitors: ['Goldman Sachs Quantum', 'JP Morgan Quantum', 'Barclays Quantum', 'IBM Quantum', 'D-Wave'],
    marketSize: '$9.8B quantum finance market',
    growthRate: '75% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'quantum-drug-discovery',
    name: 'Quantum Drug Discovery Platform',
    tagline: 'Accelerated drug discovery with quantum computing',
    price: '$2,199',
    period: '/month',
    description: 'Revolutionary quantum platform for drug discovery and molecular modeling. Features quantum chemistry calculations, protein folding simulation, and drug-target interaction analysis.',
    features: [
      'Quantum chemistry calculations',
      'Protein folding simulation',
      'Drug-target interaction analysis',
      'Molecular dynamics simulation',
      'High-accuracy modeling',
      'Real-time visualization',
      'Custom molecular models',
      'Research collaboration tools',
      'API for developers',
      'Integration with research platforms'
    ],
    popular: true,
    icon: '💊',
    color: 'from-red-600 to-pink-500',
    textColor: 'text-red-400',
    link: 'https://ziontechgroup.com/services/quantum-drug-discovery',
    marketPosition: 'Leading quantum drug discovery platform with 1000x acceleration in molecular modeling',
    targetAudience: 'Pharmaceutical companies, biotech companies, research institutions, universities, government agencies',
    trialDays: 30,
    setupTime: '4-6 weeks',
    category: 'Quantum Drug Discovery & Healthcare',
    realService: true,
    technology: ['Quantum Computing', 'Quantum Chemistry', 'Molecular Modeling', 'Drug Discovery', 'Bioinformatics'],
    integrations: ['Chemical databases', 'Protein databases', 'Research platforms', 'Laboratory systems', 'Clinical trial systems'],
    useCases: ['Drug discovery', 'Protein folding', 'Molecular modeling', 'Chemical synthesis', 'Clinical research'],
    roi: '1200% ROI through accelerated drug discovery and reduced development time',
    competitors: ['IBM Quantum', 'Google Quantum AI', 'Microsoft Azure Quantum', 'Rigetti Computing', 'D-Wave'],
    marketSize: '$15.6B quantum drug discovery market',
    growthRate: '85% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  }
];

// Service categories
export const quantumComputingCategories = [
  'All',
  'Quantum Algorithms & Optimization',
  'Quantum Machine Learning & AI',
  'Quantum Cryptography & Security',
  'Quantum Simulation & Research',
  'Quantum Finance & Risk Management',
  'Quantum Drug Discovery & Healthcare'
];

export const getQuantumComputingServicesByCategory = (category: string) => {
  if (category === 'All') return quantumComputingServices;
  return quantumComputingServices.filter(service => service.category === category);
};

export const getPopularQuantumComputingServices = (limit: number = 6): QuantumComputingService[] => {
  return quantumComputingServices
    .filter(service => service.popular)
    .slice(0, limit);
};

export const getQuantumComputingServicesByTechnology = (technology: string): QuantumComputingService[] => {
  return quantumComputingServices.filter(service =>
    service.technology.some(tech =>
      tech.toLowerCase().includes(technology.toLowerCase())
    )
  );
};

export const getQuantumComputingServicesByPriceRange = (minPrice: number, maxPrice: number): QuantumComputingService[] => {
  return quantumComputingServices.filter(service => {
    const price = parseFloat(service.price.replace('$', '').replace(',', ''));
    return price >= minPrice && (maxPrice === Infinity || price <= maxPrice);
  });
};