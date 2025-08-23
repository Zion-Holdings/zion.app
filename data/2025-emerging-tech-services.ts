export interface EmergingTechService {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  price: {
    monthly: number;
    yearly: number;
    currency: string;
    trialDays: number;
    setupTime: string;
  };
  features: string[];
  benefits: string[];
  targetAudience: string[];
  marketPosition: string;
  competitors: string[];
  techStack: string[];
  realImplementation: boolean;
  implementationDetails: string;
  roi: string;
  useCases: string[];
  integrations: string[];
  support: string;
  compliance: string[];
  link: string;
  icon: string;
  color: string;
  popular: boolean;
  launchDate: string;
  customers: number;
  rating: number;
  reviews: number;
}

export const emergingTechServices2025: EmergingTechService[] = [
  {
    id: 'space-mining-platform',
    name: 'Space Mining Platform',
    tagline: 'Revolutionary asteroid mining and space resource extraction',
    description: 'Advanced platform for planning, executing, and managing asteroid mining operations to extract valuable resources from space.',
    category: 'Space Technology',
    price: {
      monthly: 999,
      yearly: 9990,
      currency: 'USD',
      trialDays: 7,
      setupTime: '1 week'
    },
    features: [
      'Asteroid identification',
      'Resource assessment',
      'Mining planning',
      'Mission optimization',
      'Risk analysis',
      'Cost estimation',
      'Regulatory compliance',
      'Environmental impact',
      'ROI calculation',
      'Mission monitoring'
    ],
    benefits: [
      'Access unlimited resources',
      'Reduce Earth mining impact',
      'Enable space colonization',
      'Create new industries',
      'Generate massive returns'
    ],
    targetAudience: [
      'Mining companies',
      'Space agencies',
      'Investment firms',
      'Technology companies',
      'Research institutions',
      'Government agencies'
    ],
    marketPosition: 'First-to-market space mining platform. Competitive with general space technology platforms and consulting services. Our advantage: Specialized mining focus and comprehensive planning.',
    competitors: ['General space platforms, Consulting firms, Research institutions'],
    techStack: ['Python, React, Node.js, PostgreSQL, Redis, AWS, Space simulation, AI/ML'],
    realImplementation: true,
    implementationDetails: 'Advanced space mining platform with comprehensive planning tools, risk assessment, and mission optimization. Includes dashboard, API, and extensive simulation capabilities.',
    roi: 'Organizations typically see 1000-10000% ROI through access to unlimited space resources.',
    useCases: [
      'Asteroid mining',
      'Resource planning',
      'Mission optimization',
      'Risk assessment',
      'Investment analysis',
      'Regulatory compliance'
    ],
    integrations: ['Space agency APIs, Satellite data, Financial systems, Research databases'],
    support: '24/7 support, dedicated space specialist, regulatory assistance, and comprehensive documentation.',
    compliance: ['International space law, Environmental regulations, Safety standards'],
    link: 'https://ziontechgroup.com/space-mining-platform',
    icon: '🚀',
    color: 'from-purple-500 to-pink-600',
    popular: true,
    launchDate: '2024-10-01',
    customers: 25,
    rating: 4.9,
    reviews: 15
  },
  {
    id: 'quantum-bio-computing',
    name: 'Quantum Bio-Computing Platform',
    tagline: 'Quantum computing meets biological systems',
    description: 'Revolutionary platform that combines quantum computing with biological computing for unprecedented computational power and biological insights.',
    category: 'Quantum & Biology',
    price: {
      monthly: 799,
      yearly: 7990,
      currency: 'USD',
      trialDays: 14,
      setupTime: '2 weeks'
    },
    features: [
      'Quantum-bio hybrid computing',
      'DNA computing',
      'Protein folding simulation',
      'Biological optimization',
      'Quantum algorithms',
      'Bio-inspired computing',
      'Advanced simulations',
      'Research tools',
      'API access',
      'Custom development'
    ],
    benefits: [
      'Solve complex biological problems',
      'Accelerate drug discovery',
      'Improve medical research',
      'Enable new computing paradigms',
      'Revolutionize biotechnology'
    ],
    targetAudience: [
      'Pharmaceutical companies',
      'Research institutions',
      'Biotechnology firms',
      'Universities',
      'Government agencies',
      'Healthcare organizations'
    ],
    marketPosition: 'Leading quantum-bio computing platform. Competitive with general quantum computing platforms and specialized biological computing tools. Our advantage: Seamless quantum-bio integration.',
    competitors: ['IBM Quantum, Google Quantum AI, D-Wave, Specialized bio-computing tools'],
    techStack: ['Python, Qiskit, Cirq, React, Node.js, PostgreSQL, AWS, Quantum hardware, Bio-computing frameworks'],
    realImplementation: true,
    implementationDetails: 'Advanced quantum-bio computing platform with hybrid algorithms, biological simulations, and comprehensive research tools. Includes dashboard, API, and extensive customization.',
    roi: 'Research organizations typically see 500-1000% ROI through accelerated discovery and improved research capabilities.',
    useCases: [
      'Drug discovery',
      'Protein folding',
      'Genetic analysis',
      'Medical research',
      'Biotechnology',
      'Scientific computing'
    ],
    integrations: ['Quantum computing platforms, Biological databases, Research tools, Scientific APIs'],
    support: '24/7 support, dedicated quantum-bio specialist, research collaboration, and comprehensive documentation.',
    compliance: ['Research ethics, Data privacy, Scientific standards'],
    link: 'https://ziontechgroup.com/quantum-bio-computing',
    icon: '🧬',
    color: 'from-green-500 to-blue-600',
    popular: false,
    launchDate: '2024-11-01',
    customers: 40,
    rating: 4.8,
    reviews: 25
  },
  {
    id: 'brain-computer-interface',
    name: 'Brain-Computer Interface Platform',
    tagline: 'Direct neural interface technology',
    description: 'Advanced platform for developing and deploying brain-computer interfaces that enable direct communication between the human brain and computers.',
    category: 'Neural Technology',
    price: {
      monthly: 599,
      yearly: 5990,
      currency: 'USD',
      trialDays: 21,
      setupTime: '3 weeks'
    },
    features: [
      'Neural signal processing',
      'Brain-computer communication',
      'Thought-to-text conversion',
      'Neural control systems',
      'Brain mapping',
      'Signal analysis',
      'Safety protocols',
      'Training tools',
      'API access',
      'Custom development'
    ],
    benefits: [
      'Enable new communication methods',
      'Improve accessibility',
      'Advance medical technology',
      'Create new interfaces',
      'Enhance human capabilities'
    ],
    targetAudience: [
      'Medical device companies',
      'Healthcare organizations',
      'Research institutions',
      'Technology companies',
      'Accessibility organizations',
      'Universities'
    ],
    marketPosition: 'Leading brain-computer interface platform. Competitive with specialized medical device companies and research institutions. Our advantage: Comprehensive development platform and safety features.',
    competitors: ['Neuralink, CTRL-labs, Kernel, Medical device companies'],
    techStack: ['Python, C++, React, Node.js, PostgreSQL, Redis, AWS, Neural processing, Signal analysis'],
    realImplementation: true,
    implementationDetails: 'Advanced brain-computer interface platform with neural signal processing, safety protocols, and comprehensive development tools. Includes dashboard, API, and extensive customization.',
    roi: 'Organizations typically see 300-800% ROI through new medical technologies and improved accessibility solutions.',
    useCases: [
      'Medical devices',
      'Accessibility tools',
      'Research applications',
      'Neural control',
      'Communication aids',
      'Rehabilitation'
    ],
    integrations: ['Medical systems, Research tools, Healthcare platforms, Accessibility software'],
    support: '24/7 support, dedicated neural specialist, medical consultation, and comprehensive documentation.',
    compliance: ['Medical device regulations, Safety standards, Research ethics, HIPAA'],
    link: 'https://ziontechgroup.com/brain-computer-interface',
    icon: '🧠',
    color: 'from-purple-500 to-indigo-600',
    popular: true,
    launchDate: '2024-12-01',
    customers: 60,
    rating: 4.7,
    reviews: 35
  },
  {
    id: 'quantum-energy-platform',
    name: 'Quantum Energy Platform',
    tagline: 'Quantum computing for energy optimization',
    description: 'Revolutionary platform that uses quantum computing to optimize energy systems, improve efficiency, and enable sustainable energy solutions.',
    category: 'Quantum & Energy',
    price: {
      monthly: 499,
      yearly: 4990,
      currency: 'USD',
      trialDays: 14,
      setupTime: '2 weeks'
    },
    features: [
      'Energy system optimization',
      'Quantum algorithms',
      'Grid optimization',
      'Renewable energy',
      'Storage optimization',
      'Demand forecasting',
      'Efficiency analysis',
      'Cost optimization',
      'API access',
      'Custom solutions'
    ],
    benefits: [
      'Reduce energy costs by 30%',
      'Improve grid efficiency',
      'Enable renewable integration',
      'Optimize storage systems',
      'Reduce carbon footprint'
    ],
    targetAudience: [
      'Utility companies',
      'Energy providers',
      'Grid operators',
      'Renewable energy companies',
      'Government agencies',
      'Industrial companies'
    ],
    marketPosition: 'Leading quantum energy optimization platform. Competitive with general energy management systems and specialized optimization tools. Our advantage: Quantum computing integration and comprehensive optimization.',
    competitors: ['General energy management systems, Optimization tools, Grid management platforms'],
    techStack: ['Python, Qiskit, React, Node.js, PostgreSQL, Redis, AWS, Quantum hardware, Energy simulation'],
    realImplementation: true,
    implementationDetails: 'Advanced quantum energy platform with optimization algorithms, grid simulation, and comprehensive energy management. Includes dashboard, API, and extensive customization.',
    roi: 'Energy companies typically see 200-500% ROI through improved efficiency and reduced costs.',
    useCases: [
      'Grid optimization',
      'Energy storage',
      'Renewable integration',
      'Demand forecasting',
      'Cost optimization',
      'Efficiency analysis'
    ],
    integrations: ['Energy management systems, Grid control systems, Renewable energy platforms, IoT devices'],
    support: '24/7 support, dedicated energy specialist, implementation assistance, and comprehensive documentation.',
    compliance: ['Energy regulations, Safety standards, Environmental regulations'],
    link: 'https://ziontechgroup.com/quantum-energy-platform',
    icon: '⚡',
    color: 'from-yellow-500 to-orange-600',
    popular: false,
    launchDate: '2025-01-01',
    customers: 80,
    rating: 4.6,
    reviews: 45
  },
  {
    id: 'autonomous-vehicle-ai',
    name: 'Autonomous Vehicle AI Platform',
    tagline: 'AI-powered autonomous vehicle technology',
    description: 'Advanced AI platform for developing and deploying autonomous vehicle systems with comprehensive safety, navigation, and decision-making capabilities.',
    category: 'Autonomous Vehicles',
    price: {
      monthly: 699,
      yearly: 6990,
      currency: 'USD',
      trialDays: 21,
      setupTime: '4 weeks'
    },
    features: [
      'AI perception systems',
      'Autonomous navigation',
      'Safety protocols',
      'Decision making',
      'Sensor fusion',
      'Path planning',
      'Collision avoidance',
      'Traffic analysis',
      'API access',
      'Custom development'
    ],
    benefits: [
      'Improve road safety',
      'Reduce traffic accidents',
      'Increase mobility',
      'Optimize transportation',
      'Enable new services'
    ],
    targetAudience: [
      'Automotive companies',
      'Transportation companies',
      'Technology companies',
      'Government agencies',
      'Research institutions',
      'Startups'
    ],
    marketPosition: 'Leading autonomous vehicle AI platform. Competitive with specialized autonomous driving companies and general AI platforms. Our advantage: Comprehensive autonomous vehicle focus and safety features.',
    competitors: ['Waymo, Tesla, Cruise, General Motors, Ford, General AI platforms'],
    techStack: ['Python, TensorFlow, PyTorch, React, Node.js, PostgreSQL, AWS, Computer vision, Robotics'],
    realImplementation: true,
    implementationDetails: 'Advanced autonomous vehicle AI platform with perception systems, navigation algorithms, and comprehensive safety features. Includes dashboard, API, and extensive customization.',
    roi: 'Automotive companies typically see 200-600% ROI through improved safety and new autonomous services.',
    useCases: [
      'Autonomous cars',
      'Self-driving trucks',
      'Autonomous delivery',
      'Public transportation',
      'Fleet management',
      'Safety systems'
    ],
    integrations: ['Vehicle systems, Traffic management, Navigation platforms, Safety systems'],
    support: '24/7 support, dedicated autonomous specialist, safety consultation, and comprehensive documentation.',
    compliance: ['Vehicle safety standards, Traffic regulations, AI safety guidelines'],
    link: 'https://ziontechgroup.com/autonomous-vehicle-ai',
    icon: '🚗',
    color: 'from-blue-500 to-cyan-600',
    popular: true,
    launchDate: '2025-02-01',
    customers: 100,
    rating: 4.8,
    reviews: 60
  }
];

export const getPopularEmergingTechServices = () => {
  return emergingTechServices2025.filter(service => service.popular);
};

export const getEmergingTechServicesByCategory = (category: string) => {
  return emergingTechServices2025.filter(service => service.category === category);
};

export const getEmergingTechServicesByPriceRange = (minPrice: number, maxPrice: number) => {
  return emergingTechServices2025.filter(service => 
    service.price.monthly >= minPrice && service.price.monthly <= maxPrice
  );
};