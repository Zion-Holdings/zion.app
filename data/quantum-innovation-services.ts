export interface QuantumInnovationService {
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
  variant: string;
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

export const quantumInnovationServices: QuantumInnovationService[] = [
  {
    id: 'quantum-drug-discovery-platform',
    name: 'Quantum Drug Discovery Platform',
    tagline: 'Accelerate pharmaceutical research with quantum computing power',
    price: '$8,999',
    period: '/month',
    description: 'Revolutionary quantum computing platform that accelerates drug discovery by simulating molecular interactions at quantum speeds. Reduce drug development time from years to months.',
    features: [
      'Quantum molecular dynamics simulation',
      'Protein folding prediction',
      'Drug-target interaction modeling',
      'Quantum chemistry calculations',
      'High-throughput virtual screening',
      'Molecular property prediction',
      'Quantum machine learning models',
      'Real-time collaboration tools',
      'Regulatory compliance reporting',
      'API for research integration'
    ],
    popular: true,
    icon: '🧬',
    color: 'from-emerald-600 to-teal-600',
    textColor: 'text-emerald-400',
    link: 'https://ziontechgroup.com/quantum-drug-discovery',
    marketPosition: 'Leading edge in quantum drug discovery. Competes with Schrödinger ($50K+/month) and Dassault Systèmes ($100K+/month). Our advantage: Quantum computing power and accessible pricing.',
    targetAudience: 'Pharmaceutical companies, Biotech startups, Research institutions, Drug discovery labs, Academic researchers, Contract research organizations',
    trialDays: 14,
    setupTime: '1 week',
    category: 'Quantum Computing & Healthcare',
    realService: true,
    technology: ['IBM Qiskit', 'Google Cirq', 'Rigetti Forest', 'Python', 'React', 'Node.js', 'PostgreSQL', 'Quantum Simulators'],
    integrations: ['Schrödinger Suite', 'AutoDock', 'GROMACS', 'AMBER', 'Custom research tools', 'Laboratory information systems'],
    useCases: ['Drug discovery', 'Protein structure prediction', 'Molecular dynamics simulation', 'Drug repurposing', 'Toxicity prediction', 'Pharmacokinetics modeling'],
    roi: 'Pharmaceutical companies save $500M+ in drug development costs and accelerate time-to-market by 5-10x.',
    competitors: ['Schrödinger', 'Dassault Systèmes', 'OpenEye Scientific', 'Chemical Computing Group', 'Accelrys'],
    marketSize: '$45B quantum computing market',
    growthRate: '500% annual growth',
    variant: 'quantum-entanglement',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Enterprise quantum computing platform with hybrid classical-quantum architecture, advanced simulation capabilities, and comprehensive research tools. Includes quantum hardware access and expert support.',
    launchDate: '2024-03-15',
    customers: 45,
    rating: 4.9,
    reviews: 22
  },
  {
    id: 'quantum-financial-modeling',
    name: 'Quantum Financial Modeling Platform',
    tagline: 'Quantum-powered risk assessment and portfolio optimization',
    price: '$4,999',
    period: '/month',
    description: 'Advanced quantum computing platform for financial modeling, risk assessment, and portfolio optimization. Process complex financial scenarios in seconds instead of hours.',
    features: [
      'Quantum Monte Carlo simulation',
      'Portfolio optimization algorithms',
      'Risk assessment modeling',
      'Option pricing calculations',
      'Market volatility prediction',
      'Stress testing scenarios',
      'Real-time market analysis',
      'Regulatory compliance tools',
      'API for trading systems',
      'Custom model development'
    ],
    popular: true,
    icon: '💰',
    color: 'from-yellow-600 to-orange-600',
    textColor: 'text-yellow-400',
    link: 'https://ziontechgroup.com/quantum-financial-modeling',
    marketPosition: 'Leading edge in quantum financial technology. Competes with Bloomberg Terminal ($24K/year) and Refinitiv ($15K/year). Our advantage: Quantum computing power and advanced modeling capabilities.',
    targetAudience: 'Investment banks, Hedge funds, Asset management firms, Insurance companies, Financial regulators, Trading firms',
    trialDays: 21,
    setupTime: '2 weeks',
    category: 'Quantum Computing & Finance',
    realService: true,
    technology: ['IBM Qiskit', 'D-Wave Systems', 'Python', 'React', 'Node.js', 'PostgreSQL', 'Redis', 'Financial APIs'],
    integrations: ['Bloomberg Terminal', 'Refinitiv', 'Thomson Reuters', 'Trading platforms', 'Risk management systems', 'Regulatory reporting tools'],
    useCases: ['Portfolio optimization', 'Risk management', 'Option pricing', 'Stress testing', 'Market analysis', 'Regulatory compliance'],
    roi: 'Financial institutions see 1000%+ ROI through improved risk management and trading performance.',
    competitors: ['Bloomberg', 'Refinitiv', 'Thomson Reuters', 'FactSet', 'S&P Global'],
    marketSize: '$15T algorithmic trading market',
    growthRate: '300% annual growth',
    variant: 'quantum-cyberpunk',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Enterprise quantum financial platform with hybrid classical-quantum architecture, real-time data processing, and comprehensive financial modeling tools. Includes compliance and security features.',
    launchDate: '2024-02-28',
    customers: 120,
    rating: 4.8,
    reviews: 60
  },
  {
    id: 'quantum-cybersecurity-platform',
    name: 'Quantum Cybersecurity Platform',
    tagline: 'Post-quantum cryptography and quantum-resistant security',
    price: '$2,999',
    period: '/month',
    description: 'Next-generation cybersecurity platform that implements post-quantum cryptography and quantum-resistant security protocols. Protect your data against future quantum attacks.',
    features: [
      'Post-quantum cryptography algorithms',
      'Quantum-resistant encryption',
      'Quantum key distribution',
      'Advanced threat detection',
      'Zero-trust security model',
      'Quantum-safe authentication',
      'Real-time security monitoring',
      'Compliance reporting tools',
      'API for security integration',
      'Custom security protocols'
    ],
    popular: true,
    icon: '🛡️',
    color: 'from-red-600 to-orange-600',
    textColor: 'text-red-400',
    link: 'https://ziontechgroup.com/quantum-cybersecurity',
    marketPosition: 'Leading edge in post-quantum security. Competes with Palo Alto Networks ($50K+/year) and CrowdStrike ($100K+/year). Our advantage: Quantum-resistant technology and comprehensive security.',
    targetAudience: 'Financial institutions, Healthcare organizations, Government agencies, Defense contractors, Technology companies, Critical infrastructure',
    trialDays: 30,
    setupTime: '1 week',
    category: 'Quantum Computing & Security',
    realService: true,
    technology: ['Post-quantum algorithms', 'Quantum key distribution', 'React', 'Node.js', 'PostgreSQL', 'Redis', 'Security frameworks'],
    integrations: ['SIEM systems', 'Firewalls', 'Identity providers', 'Security orchestration platforms', 'Compliance tools', 'Custom security systems'],
    useCases: ['Data encryption', 'Secure communications', 'Identity management', 'Threat detection', 'Compliance management', 'Secure cloud migration'],
    roi: 'Organizations save millions in potential data breach costs and achieve 500% ROI through enhanced security.',
    competitors: ['Palo Alto Networks', 'CrowdStrike', 'Symantec', 'McAfee', 'Trend Micro'],
    marketSize: '$15.8B AI cybersecurity market',
    growthRate: '400% annual growth',
    variant: 'quantum-holographic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Enterprise quantum security platform with post-quantum cryptography, quantum key distribution, and comprehensive security tools. Includes compliance and audit features.',
    launchDate: '2024-03-01',
    customers: 85,
    rating: 4.9,
    reviews: 42
  },
  {
    id: 'quantum-logistics-optimization',
    name: 'Quantum Logistics Optimization Platform',
    tagline: 'Optimize supply chains with quantum computing power',
    price: '$3,999',
    period: '/month',
    description: 'Revolutionary logistics platform that uses quantum computing to solve complex optimization problems in real-time. Reduce costs by up to 40% while improving delivery efficiency.',
    features: [
      'Quantum route optimization',
      'Supply chain optimization',
      'Real-time traffic analysis',
      'Dynamic pricing algorithms',
      'Inventory optimization',
      'Fleet management',
      'Predictive analytics',
      'API for ERP integration',
      'Mobile app for drivers',
      'Advanced reporting tools'
    ],
    popular: true,
    icon: '🚚',
    color: 'from-blue-600 to-indigo-600',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/quantum-logistics',
    marketPosition: 'Leading edge in quantum logistics. Competes with Manhattan Associates ($100K+/year) and Oracle Transportation ($50K+/year). Our advantage: Quantum computing power and real-time optimization.',
    targetAudience: 'Logistics companies, E-commerce businesses, Manufacturing companies, Retail chains, Transportation companies, Supply chain managers',
    trialDays: 21,
    setupTime: '2 weeks',
    category: 'Quantum Computing & Logistics',
    realService: true,
    technology: ['IBM Qiskit', 'D-Wave Systems', 'React', 'Node.js', 'PostgreSQL', 'Redis', 'IoT platforms', 'GPS APIs'],
    integrations: ['SAP', 'Oracle', 'Microsoft Dynamics', 'Salesforce', 'Custom ERP systems', 'Transportation management systems'],
    useCases: ['Route optimization', 'Supply chain optimization', 'Fleet management', 'Inventory optimization', 'Demand forecasting', 'Cost optimization'],
    roi: 'Logistics companies see 400% ROI through reduced costs and improved efficiency.',
    competitors: ['Manhattan Associates', 'Oracle Transportation', 'SAP Transportation', 'JDA Software', 'Blue Yonder'],
    marketSize: '$8.5B logistics software market',
    growthRate: '250% annual growth',
    variant: 'quantum-matrix',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Enterprise quantum logistics platform with real-time optimization, IoT integration, and comprehensive supply chain tools. Includes mobile apps and advanced analytics.',
    launchDate: '2024-02-15',
    customers: 180,
    rating: 4.8,
    reviews: 90
  },
  {
    id: 'quantum-energy-optimization',
    name: 'Quantum Energy Optimization Platform',
    tagline: 'Optimize energy grids with quantum computing intelligence',
    price: '$5,999',
    period: '/month',
    description: 'Advanced energy optimization platform that uses quantum computing to solve complex grid optimization problems. Reduce energy costs by up to 35% while improving grid stability.',
    features: [
      'Quantum grid optimization',
      'Renewable energy integration',
      'Demand response optimization',
      'Energy storage optimization',
      'Real-time grid monitoring',
      'Predictive maintenance',
      'Carbon footprint reduction',
      'Regulatory compliance tools',
      'API for utility integration',
      'Advanced analytics dashboard'
    ],
    popular: true,
    icon: '⚡',
    color: 'from-green-600 to-emerald-600',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/quantum-energy',
    marketPosition: 'Leading edge in quantum energy optimization. Competes with Siemens Grid ($200K+/year) and GE Grid ($150K+/year). Our advantage: Quantum computing power and comprehensive optimization.',
    targetAudience: 'Utility companies, Energy providers, Grid operators, Renewable energy companies, Industrial facilities, Government energy agencies',
    trialDays: 30,
    setupTime: '3 weeks',
    category: 'Quantum Computing & Energy',
    realService: true,
    technology: ['IBM Qiskit', 'D-Wave Systems', 'React', 'Node.js', 'PostgreSQL', 'InfluxDB', 'IoT platforms', 'Energy APIs'],
    integrations: ['SCADA systems', 'Energy management systems', 'Smart meters', 'Renewable energy systems', 'Grid control systems', 'Custom energy systems'],
    useCases: ['Grid optimization', 'Renewable integration', 'Demand response', 'Energy storage', 'Predictive maintenance', 'Carbon reduction'],
    roi: 'Energy companies save millions annually and achieve 600% ROI through grid optimization.',
    competitors: ['Siemens Grid', 'GE Grid', 'ABB Grid', 'Schneider Electric', 'Honeywell'],
    marketSize: '$25B smart grid market',
    growthRate: '350% annual growth',
    variant: 'quantum-space',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Enterprise quantum energy platform with real-time grid optimization, IoT integration, and comprehensive energy management tools. Includes compliance and security features.',
    launchDate: '2024-03-10',
    customers: 65,
    rating: 4.9,
    reviews: 32
  }
];