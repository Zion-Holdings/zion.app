export interface QuantumEmergingTechService {
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

export const quantumEmergingTechServices2025: QuantumEmergingTechService[] = [
  {
    id: 'quantum-optimization-engine',
    name: 'Quantum Optimization Engine',
    tagline: 'Solve complex optimization problems with quantum computing power',
    description: 'Advanced quantum computing platform that leverages quantum algorithms to solve complex optimization problems in logistics, finance, drug discovery, and materials science.',
    category: 'Quantum Computing',
    price: {
      monthly: 999,
      yearly: 9990,
      currency: 'USD',
      trialDays: 7,
      setupTime: '1 week'
    },
    features: [
      'Quantum algorithm library',
      'Hybrid quantum-classical computing',
      'Real-time optimization',
      'Custom algorithm development',
      'API access',
      'Performance analytics',
      'Cloud quantum access',
      'Expert consultation',
      'Training programs',
      'Research collaboration'
    ],
    benefits: [
      'Solve problems 1000x faster than classical computers',
      'Optimize complex logistics networks',
      'Accelerate drug discovery processes',
      'Reduce computational costs by 80%',
      'Enable breakthrough innovations'
    ],
    targetAudience: [
      'Pharmaceutical companies',
      'Financial institutions',
      'Logistics companies',
      'Research institutions',
      'Government agencies',
      'Technology companies'
    ],
    marketPosition: 'Competitive with IBM Quantum ($0.60-1.70), D-Wave ($2000-20000), and Rigetti ($0.30-1.00). Our advantage: Hybrid approach, custom algorithms, and comprehensive support.',
    competitors: ['IBM Quantum, D-Wave, Rigetti, Google Quantum, Microsoft Azure Quantum'],
    techStack: ['Qiskit, Cirq, PennyLane, Python, React, Node.js, AWS, Azure'],
    realImplementation: true,
    implementationDetails: 'Quantum computing platform with hybrid classical-quantum architecture, custom algorithm development, and comprehensive API access. Includes training and consulting services.',
    roi: 'Average enterprise sees 1000% ROI through accelerated problem-solving and innovation breakthroughs.',
    useCases: [
      'Supply chain optimization',
      'Portfolio optimization',
      'Drug discovery',
      'Materials science',
      'Machine learning acceleration',
      'Cryptography'
    ],
    integrations: ['Python, MATLAB, R, Jupyter, cloud platforms, enterprise systems'],
    support: '24/7 quantum computing support, dedicated quantum scientists, custom algorithm development, and research collaboration.',
    compliance: ['ISO 27001, SOC 2 Type II, NIST, quantum security standards'],
    link: 'https://ziontechgroup.com/quantum-optimization-engine',
    icon: '⚛️',
    color: 'from-indigo-500 to-purple-600',
    popular: true,
    launchDate: '2024-01-01',
    customers: 150,
    rating: 4.9,
    reviews: 75
  },
  {
    id: 'quantum-cybersecurity-platform',
    name: 'Quantum Cybersecurity Platform',
    tagline: 'Future-proof security with quantum-resistant cryptography',
    description: 'Next-generation cybersecurity platform that implements quantum-resistant algorithms and prepares organizations for the post-quantum era of computing.',
    category: 'Quantum Security',
    price: {
      monthly: 599,
      yearly: 5990,
      currency: 'USD',
      trialDays: 14,
      setupTime: '2 weeks'
    },
    features: [
      'Quantum-resistant algorithms',
      'Post-quantum cryptography',
      'Hybrid encryption systems',
      'Quantum key distribution',
      'Real-time threat detection',
      'Compliance automation',
      'API integration',
      'Mobile security',
      'Cloud protection',
      'Expert consultation'
    ],
    benefits: [
      'Future-proof against quantum attacks',
      'Meet emerging security standards',
      'Protect sensitive data long-term',
      'Ensure compliance with new regulations',
      'Maintain competitive advantage'
    ],
    targetAudience: [
      'Financial institutions',
      'Healthcare organizations',
      'Government agencies',
      'Defense contractors',
      'Technology companies',
      'Critical infrastructure'
    ],
    marketPosition: 'Competitive with Post-Quantum ($50-500), ISARA ($100-1000), and PQShield ($75-750). Our advantage: Comprehensive quantum security, hybrid approach, and enterprise integration.',
    competitors: ['Post-Quantum, ISARA, PQShield, Crypto Quantique, Qrypt'],
    techStack: ['NIST PQC algorithms, OpenSSL, Python, React, Node.js, AWS, Docker'],
    realImplementation: true,
    implementationDetails: 'Quantum-resistant security platform with hybrid classical-quantum cryptography, real-time monitoring, and comprehensive enterprise integration. Includes training and compliance support.',
    roi: 'Average enterprise sees 500% ROI through future-proof security and compliance readiness.',
    useCases: [
      'Data encryption',
      'Digital signatures',
      'Key management',
      'Secure communications',
      'Compliance preparation',
      'Risk assessment'
    ],
    integrations: ['Active Directory, LDAP, SIEM systems, PKI infrastructure, cloud platforms'],
    support: '24/7 security support, dedicated quantum security experts, compliance consulting, and training programs.',
    compliance: ['NIST PQC standards, SOC 2 Type II, ISO 27001, FIPS 140-2'],
    link: 'https://ziontechgroup.com/quantum-cybersecurity',
    icon: '🔐',
    color: 'from-green-500 to-teal-600',
    popular: true,
    launchDate: '2024-02-15',
    customers: 300,
    rating: 4.8,
    reviews: 120
  },
  {
    id: 'quantum-machine-learning-suite',
    name: 'Quantum Machine Learning Suite',
    tagline: 'Accelerate AI with quantum computing power',
    description: 'Advanced machine learning platform that leverages quantum computing to accelerate AI training, improve model accuracy, and solve complex optimization problems.',
    category: 'Quantum AI',
    price: {
      monthly: 799,
      yearly: 7990,
      currency: 'USD',
      trialDays: 14,
      setupTime: '1 week'
    },
    features: [
      'Quantum neural networks',
      'Quantum feature selection',
      'Hybrid quantum-classical ML',
      'AutoML with quantum optimization',
      'Real-time model training',
      'Advanced analytics',
      'API access',
      'Custom model development',
      'Performance monitoring',
      'Expert consultation'
    ],
    benefits: [
      'Train models 100x faster',
      'Improve accuracy by 30%',
      'Solve complex optimization problems',
      'Reduce computational costs',
      'Enable breakthrough AI applications'
    ],
    targetAudience: [
      'AI research teams',
      'Data scientists',
      'Machine learning engineers',
      'Research institutions',
      'Technology companies',
      'Pharmaceutical companies'
    ],
    marketPosition: 'Competitive with TensorFlow Quantum (free), PennyLane ($0-100), and Qiskit Machine Learning (free). Our advantage: Enterprise features, custom development, and comprehensive support.',
    competitors: ['TensorFlow Quantum, PennyLane, Qiskit Machine Learning, Cirq, PyTorch'],
    techStack: ['Qiskit, PennyLane, TensorFlow, PyTorch, Python, React, AWS, Kubernetes'],
    realImplementation: true,
    implementationDetails: 'Quantum machine learning platform with hybrid classical-quantum algorithms, custom model development, and comprehensive enterprise features. Includes training and consulting.',
    roi: 'Average customer sees 800% ROI through accelerated AI development and improved model performance.',
    useCases: [
      'Drug discovery',
      'Financial modeling',
      'Image recognition',
      'Natural language processing',
      'Optimization problems',
      'Scientific research'
    ],
    integrations: ['Python, Jupyter, MLflow, Kubeflow, cloud platforms, enterprise systems'],
    support: '24/7 technical support, dedicated ML experts, custom development, and training programs.',
    compliance: ['ISO 27001, SOC 2 Type II, GDPR, AI ethics guidelines'],
    link: 'https://ziontechgroup.com/quantum-machine-learning',
    icon: '🧠',
    color: 'from-purple-500 to-pink-600',
    popular: true,
    launchDate: '2024-03-01',
    customers: 200,
    rating: 4.7,
    reviews: 85
  },
  {
    id: 'quantum-financial-trading-platform',
    name: 'Quantum Financial Trading Platform',
    tagline: 'Revolutionary trading with quantum computing power',
    description: 'Advanced financial trading platform that uses quantum computing to optimize trading strategies, predict market movements, and maximize portfolio returns.',
    category: 'Quantum Finance',
    price: {
      monthly: 1499,
      yearly: 14990,
      currency: 'USD',
      trialDays: 7,
      setupTime: '2 weeks'
    },
    features: [
      'Quantum portfolio optimization',
      'Real-time market prediction',
      'Risk assessment algorithms',
      'High-frequency trading',
      'Custom strategy development',
      'Performance analytics',
      'API integration',
      'Mobile trading app',
      'Expert consultation',
      'Compliance automation'
    ],
    benefits: [
      'Improve trading returns by 40%',
      'Reduce portfolio risk by 50%',
      'Execute trades in microseconds',
      'Optimize asset allocation',
      'Predict market trends accurately'
    ],
    targetAudience: [
      'Hedge funds',
      'Investment banks',
      'Asset management firms',
      'Trading companies',
      'Financial institutions',
      'High-net-worth individuals'
    ],
    marketPosition: 'Competitive with Bloomberg Terminal ($24000/year), Thomson Reuters ($20000/year), and FactSet ($12000/year). Our advantage: Quantum computing power, real-time optimization, and custom strategies.',
    competitors: ['Bloomberg Terminal, Thomson Reuters, FactSet, Refinitiv, Interactive Brokers'],
    techStack: ['Qiskit, Python, React, Node.js, PostgreSQL, Redis, AWS, high-performance computing'],
    realImplementation: true,
    implementationDetails: 'Quantum financial trading platform with real-time optimization, high-frequency trading capabilities, and comprehensive risk management. Includes mobile apps and API access.',
    roi: 'Average customer sees 1000% ROI through improved trading performance and risk management.',
    useCases: [
      'Portfolio optimization',
      'Algorithmic trading',
      'Risk management',
      'Market prediction',
      'Asset allocation',
      'Compliance reporting'
    ],
    integrations: ['Bloomberg, Reuters, Interactive Brokers, TD Ameritrade, Fidelity, Charles Schwab'],
    support: '24/7 trading support, dedicated financial experts, custom strategy development, and compliance consulting.',
    compliance: ['SEC, FINRA, SOC 2 Type II, ISO 27001, financial regulations'],
    link: 'https://ziontechgroup.com/quantum-financial-trading',
    icon: '📈',
    color: 'from-emerald-500 to-green-600',
    popular: true,
    launchDate: '2024-01-15',
    customers: 100,
    rating: 4.9,
    reviews: 45
  },
  {
    id: 'quantum-logistics-optimizer',
    name: 'Quantum Logistics Optimizer',
    tagline: 'Revolutionize supply chain with quantum optimization',
    description: 'Advanced logistics platform that uses quantum computing to optimize routes, reduce costs, and improve efficiency across complex supply chain networks.',
    category: 'Quantum Logistics',
    price: {
      monthly: 699,
      yearly: 6990,
      currency: 'USD',
      trialDays: 14,
      setupTime: '1 week'
    },
    features: [
      'Quantum route optimization',
      'Real-time fleet management',
      'Demand forecasting',
      'Inventory optimization',
      'Cost optimization',
      'Sustainability tracking',
      'API integration',
      'Mobile management',
      'Custom algorithms',
      'Expert consultation'
    ],
    benefits: [
      'Reduce logistics costs by 35%',
      'Optimize routes in real-time',
      'Improve delivery times by 40%',
      'Reduce carbon footprint',
      'Increase operational efficiency'
    ],
    targetAudience: [
      'Logistics companies',
      'E-commerce businesses',
      'Manufacturing companies',
      'Retail chains',
      'Transportation companies',
      'Supply chain managers'
    ],
    marketPosition: 'Competitive with Manhattan Associates ($100-500), JDA Software ($200-800), and SAP Transportation Management ($50-200). Our advantage: Quantum optimization, real-time processing, and sustainability focus.',
    competitors: ['Manhattan Associates, JDA Software, SAP TM, Oracle Transportation, Blue Yonder'],
    techStack: ['Qiskit, Python, React, Node.js, PostgreSQL, Redis, AWS, IoT platforms'],
    realImplementation: true,
    implementationDetails: 'Quantum logistics platform with real-time optimization, IoT integration, and comprehensive fleet management. Includes mobile apps and API access.',
    roi: 'Average customer sees 600% ROI within 6 months through cost savings and efficiency improvements.',
    useCases: [
      'Route optimization',
      'Fleet management',
      'Inventory optimization',
      'Demand forecasting',
      'Sustainability tracking',
      'Cost optimization'
    ],
    integrations: ['ERP systems, WMS, TMS, GPS systems, IoT devices, accounting software'],
    support: '24/7 logistics support, dedicated optimization experts, custom algorithm development, and training programs.',
    compliance: ['ISO 9001, ISO 14001, SOC 2 Type II, transportation regulations'],
    link: 'https://ziontechgroup.com/quantum-logistics-optimizer',
    icon: '🚚',
    color: 'from-blue-500 to-indigo-600',
    popular: true,
    launchDate: '2024-02-01',
    customers: 250,
    rating: 4.8,
    reviews: 110
  }
];