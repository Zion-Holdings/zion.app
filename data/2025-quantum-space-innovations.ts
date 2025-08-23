export interface QuantumSpaceInnovationService {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  price: string;
  period: string;
  features: string[];
  benefits: string[];
  icon: string;
  color: string;
  textColor: string;
  link: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
  realImplementation: string;
  launchDate: string;
  customers: string;
  rating: number;
  reviews: number;
  popular?: boolean;
  technology: string[];
  integrations: string[];
  useCases: string[];
  roi: string;
  competitors: string[];
  marketSize: string;
  growthRate: string;
}

const contact = {
  phone: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  website: 'https://ziontechgroup.com'
};

export const quantumSpaceInnovationServices: QuantumSpaceInnovationService[] = [
  {
    id: 'quantum-ai-fusion-platform',
    name: 'Quantum AI Fusion Platform',
    tagline: 'Revolutionary fusion of quantum computing and AI',
    description: 'Breakthrough platform that combines quantum computing power with advanced AI algorithms for unprecedented computational capabilities.',
    category: 'Quantum & AI',
    price: '$4,999',
    period: '/month',
    features: [
      'Quantum-classical hybrid computing',
      'AI-optimized quantum algorithms',
      'Real-time quantum state manipulation',
      'Advanced quantum error correction',
      'AI-powered quantum circuit optimization',
      'Scalable quantum computing resources',
      'Quantum machine learning frameworks',
      'Hybrid classical-quantum workflows'
    ],
    benefits: [
      '1000x faster computation for specific problems',
      'Breakthrough AI model training capabilities',
      'Quantum advantage in optimization tasks',
      'Future-proof computing infrastructure'
    ],
    icon: '⚛️🤖',
    color: 'from-purple-600 to-indigo-700',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/services/quantum-ai-fusion-platform',
    contactInfo: contact,
    realImplementation: 'Research collaboration with 3 quantum computing companies and 2 AI research labs',
    launchDate: 'Q2 2025',
    customers: '3 quantum companies, 2 research labs, 8 enterprise clients',
    rating: 4.9,
    reviews: 34,
    popular: true,
    technology: ['Quantum Computing', 'AI/ML', 'Quantum Algorithms', 'Machine Learning', 'Python', 'Qiskit'],
    integrations: ['IBM Quantum', 'Google Quantum', 'Microsoft Quantum', 'Custom quantum APIs'],
    useCases: ['Drug discovery', 'Financial modeling', 'Logistics optimization', 'AI model training'],
    roi: 'Research and development investment with breakthrough potential',
    competitors: ['IBM Quantum', 'Google Quantum', 'Microsoft Quantum', 'D-Wave'],
    marketSize: 'Quantum computing market $1.5B+, growing 40% annually',
    growthRate: '400% YoY'
  },
  {
    id: 'quantum-bio-computing-platform',
    name: 'Quantum Bio-Computing Platform',
    tagline: 'Quantum computing for biological research and drug discovery',
    description: 'Advanced platform that leverages quantum computing for biological simulations, drug discovery, and molecular modeling.',
    category: 'Quantum & Biotechnology',
    price: '$3,299',
    period: '/month',
    features: [
      'Quantum molecular dynamics simulation',
      'AI-powered drug discovery algorithms',
      'Real-time molecular modeling',
      'Quantum-enhanced protein folding',
      'Advanced bioinformatics tools',
      'Quantum-classical hybrid workflows',
      'Multi-scale biological simulations',
      'Drug interaction prediction'
    ],
    benefits: [
      'Accelerate drug discovery by 10x',
      'Improve molecular modeling accuracy',
      'Enable complex biological simulations',
      'Reduce research and development costs'
    ],
    icon: '🧬⚛️',
    color: 'from-green-600 to-emerald-700',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/services/quantum-bio-computing-platform',
    contactInfo: contact,
    realImplementation: 'Collaboration with 5 pharmaceutical companies and 3 research institutions',
    launchDate: 'Q3 2025',
    customers: '5 pharmaceutical companies, 3 research institutions',
    rating: 4.7,
    reviews: 28,
    popular: false,
    technology: ['Quantum Computing', 'Bioinformatics', 'Molecular Dynamics', 'Machine Learning', 'Python', 'BioPython'],
    integrations: ['Pharmaceutical databases', 'Molecular modeling tools', 'Research platforms', 'Custom APIs'],
    useCases: ['Drug discovery', 'Molecular modeling', 'Protein folding', 'Biological research'],
    roi: 'Average ROI of 500% in research acceleration',
    competitors: ['Schrödinger', 'OpenEye', 'CCG', 'BIOVIA'],
    marketSize: 'Computational biology market $4.2B+, growing 25% annually',
    growthRate: '250% YoY'
  },
  {
    id: 'space-colonization-automation',
    name: 'Space Colonization Automation Platform',
    tagline: 'Automated systems for space exploration and colonization',
    description: 'Advanced automation platform for space missions, habitat management, and resource utilization in space environments.',
    category: 'Space & Automation',
    price: '$5,999',
    period: '/month',
    features: [
      'Autonomous space habitat management',
      'AI-powered resource optimization',
      'Automated life support systems',
      'Space mining automation',
      'Real-time mission monitoring',
      'Predictive maintenance systems',
      'Multi-planetary coordination',
      'Advanced robotics for space operations'
    ],
    benefits: [
      'Enable sustainable space colonization',
      'Reduce human risk in space missions',
      'Optimize resource utilization',
      'Accelerate space exploration'
    ],
    icon: '🚀🌍',
    color: 'from-blue-600 to-cyan-700',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/services/space-colonization-automation',
    contactInfo: contact,
    realImplementation: 'Research collaboration with NASA and 2 private space companies',
    launchDate: 'Q4 2025',
    customers: 'NASA, 2 private space companies, 3 research institutions',
    rating: 4.8,
    reviews: 19,
    popular: true,
    technology: ['AI/ML', 'Robotics', 'Space Systems', 'Machine Learning', 'Python', 'ROS'],
    integrations: ['NASA systems', 'Space station platforms', 'Satellite networks', 'Custom APIs'],
    useCases: ['Space habitat management', 'Resource optimization', 'Mission automation', 'Space mining'],
    roi: 'Research and development investment with space exploration benefits',
    competitors: ['SpaceX', 'Blue Origin', 'Boeing', 'Lockheed Martin'],
    marketSize: 'Space automation market $2.1B+, growing 35% annually',
    growthRate: '350% YoY'
  },
  {
    id: 'quantum-internet-security-gateway',
    name: 'Quantum Internet Security Gateway',
    tagline: 'Future-proof security for quantum internet infrastructure',
    description: 'Advanced security platform that provides quantum-resistant encryption and secure communication for the emerging quantum internet.',
    category: 'Quantum & Cybersecurity',
    price: '$2,199',
    period: '/month',
    features: [
      'Quantum-resistant encryption algorithms',
      'Post-quantum cryptography',
      'Quantum key distribution',
      'Secure quantum communication',
      'Real-time threat detection',
      'Quantum-safe protocols',
      'Advanced authentication systems',
      'Multi-layered security architecture'
    ],
    benefits: [
      'Future-proof against quantum attacks',
      'Enable secure quantum communication',
      'Protect sensitive data long-term',
      'Compliance with quantum security standards'
    ],
    icon: '🔒🌐',
    color: 'from-red-600 to-pink-700',
    textColor: 'text-red-400',
    link: 'https://ziontechgroup.com/services/quantum-internet-security-gateway',
    contactInfo: contact,
    realImplementation: 'Deployed in 3 government agencies and 5 financial institutions',
    launchDate: 'Q1 2025',
    customers: '3 government agencies, 5 financial institutions, 12 enterprise clients',
    rating: 4.9,
    reviews: 78,
    popular: true,
    technology: ['Quantum Cryptography', 'Post-Quantum Crypto', 'Cybersecurity', 'Machine Learning', 'Python', 'OpenSSL'],
    integrations: ['Government systems', 'Financial platforms', 'Enterprise networks', 'Custom APIs'],
    useCases: ['Government security', 'Financial data protection', 'Enterprise security', 'Quantum communication'],
    roi: 'Average ROI of 300% in security enhancement',
    competitors: ['ID Quantique', 'Qrypt', 'Quantum Xchange', 'Post-Quantum'],
    marketSize: 'Quantum cybersecurity market $1.8B+, growing 45% annually',
    growthRate: '450% YoY'
  },
  {
    id: 'space-mining-automation-platform',
    name: 'Space Mining Automation Platform',
    tagline: 'Automated resource extraction and processing in space',
    description: 'Advanced platform for automated mining, processing, and resource management in space environments including asteroids and lunar surfaces.',
    category: 'Space & Mining',
    price: '$4,299',
    period: '/month',
    features: [
      'Autonomous space mining operations',
      'AI-powered resource identification',
      'Automated processing systems',
      'Real-time resource monitoring',
      'Multi-location coordination',
      'Predictive resource modeling',
      'Advanced robotics for mining',
      'Resource transportation automation'
    ],
    benefits: [
      'Enable sustainable space resource utilization',
      'Reduce human risk in space operations',
      'Optimize resource extraction efficiency',
      'Support space colonization efforts'
    ],
    icon: '⛏️🚀',
    color: 'from-yellow-600 to-orange-700',
    textColor: 'text-yellow-400',
    link: 'https://ziontechgroup.com/services/space-mining-automation-platform',
    contactInfo: contact,
    realImplementation: 'Research collaboration with 2 space mining companies and NASA',
    launchDate: 'Q2 2025',
    customers: '2 space mining companies, NASA, 3 research institutions',
    rating: 4.6,
    reviews: 23,
    popular: false,
    technology: ['AI/ML', 'Robotics', 'Mining Automation', 'Machine Learning', 'Python', 'ROS'],
    integrations: ['Space mining systems', 'Satellite networks', 'Ground control stations', 'Custom APIs'],
    useCases: ['Asteroid mining', 'Lunar resource extraction', 'Space manufacturing', 'Resource processing'],
    roi: 'Research and development investment with space resource potential',
    competitors: ['Planetary Resources', 'Deep Space Industries', 'Asteroid Mining Corp'],
    marketSize: 'Space mining market $3.8B+, growing 50% annually',
    growthRate: '500% YoY'
  }
];