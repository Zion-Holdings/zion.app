export interface InnovativeService {
  id: string;
  title: string;
  description: string;
  category: 'Quantum Computing' | 'Blockchain & Web3' | 'Internet of Things' | 'Edge Computing' | 'Augmented Reality' | 'Robotic Process Automation' | 'Natural Language Processing' | 'Computer Vision' | 'Predictive Analytics' | 'Autonomous Systems';
  subcategory: string;
  price: {
    monthly: number;
    yearly: number;
    enterprise: number;
    currency: string;
  };
  features: string[];
  benefits: string[];
  targetAudience: string[];
  useCases: string[];
  integration: string[];
  pricingTier: 'Starter' | 'Professional' | 'Enterprise' | 'Custom';
  website: string;
  contactInfo: {
    email: string;
    phone: string;
    address: string;
  };
  rating: number;
  reviewCount: number;
  launchDate: string;
  status: 'Active' | 'Beta' | 'Coming Soon';
  marketPrice: string;
  estimatedDelivery: string;
  supportLevel: string;
  innovationScore: number;
  tags: string[];
}

export const INNOVATIVE_SERVICES: InnovativeService[] = [
  // Quantum Computing Services
  {
    id: 'zion-quantum-optimization-platform',
    title: 'Zion Quantum Optimization Platform',
    description: 'Advanced quantum computing platform that solves complex optimization problems in logistics, finance, and scientific research using quantum algorithms and hybrid quantum-classical approaches.',
    category: 'Quantum Computing',
    subcategory: 'Optimization & Simulation',
    price: {
      monthly: 2999,
      yearly: 29990,
      enterprise: 99999,
      currency: '$'
    },
    features: [
      'Quantum algorithm library (QAOA, VQE, QSVM)',
      'Hybrid quantum-classical optimization',
      'Real-time quantum circuit simulation',
      'Multi-qubit system support (up to 1000 qubits)',
      'Cloud-based quantum access',
      'Performance benchmarking and comparison',
      'Quantum error correction',
      'Custom quantum algorithm development',
      'Integration with classical optimization tools',
      'Real-time collaboration and sharing'
    ],
    benefits: [
      'Solve optimization problems 1000x faster than classical computers',
      'Reduce logistics costs by 30-50%',
      'Optimize financial portfolios with quantum algorithms',
      'Accelerate scientific research and discovery',
      'Future-proof technology investment',
      'Competitive advantage in complex problem solving'
    ],
    targetAudience: [
      'Research institutions and universities',
      'Pharmaceutical companies',
      'Financial services and hedge funds',
      'Logistics and supply chain companies',
      'Government agencies and defense',
      'Technology companies and startups'
    ],
    useCases: [
      'Supply chain optimization',
      'Portfolio optimization and risk management',
      'Drug discovery and molecular modeling',
      'Climate modeling and prediction',
      'Cryptography and security',
      'Machine learning optimization'
    ],
    integration: [
      'IBM Quantum, Google Quantum, AWS Braket',
      'Python quantum libraries (Qiskit, Cirq)',
      'Classical optimization tools (CPLEX, Gurobi)',
      'Cloud platforms (AWS, Azure, GCP)',
      'Scientific computing platforms (MATLAB, R)',
      'Jupyter notebooks and development environments'
    ],
    pricingTier: 'Enterprise',
    website: 'https://ziontechgroup.com/quantum-optimization',
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008, Middletown DE 19709'
    },
    rating: 4.9,
    reviewCount: 89,
    launchDate: '2024-01-05',
    status: 'Active',
    marketPrice: '$2,999 - $99,999/month',
    estimatedDelivery: '4-6 weeks setup',
    supportLevel: '24/7 dedicated support',
    innovationScore: 99,
    tags: ['Quantum Computing', 'Optimization', 'Scientific Computing', 'Research', 'Future Tech']
  },

  // Blockchain & Web3 Services
  {
    id: 'zion-blockchain-enterprise-suite',
    title: 'Zion Blockchain Enterprise Suite',
    description: 'Comprehensive blockchain and Web3 platform that enables enterprises to build, deploy, and manage decentralized applications with enterprise-grade security and scalability.',
    category: 'Blockchain & Web3',
    subcategory: 'Enterprise Blockchain',
    price: {
      monthly: 499,
      yearly: 4990,
      enterprise: 19999,
      currency: '$'
    },
    features: [
      'Multi-blockchain support (Ethereum, Polygon, Solana, Hyperledger)',
      'Smart contract development and deployment',
      'DeFi protocol integration and management',
      'NFT marketplace and management platform',
      'Cross-chain interoperability solutions',
      'Enterprise-grade security and compliance',
      'Real-time blockchain analytics and monitoring',
      'Gas optimization and cost management',
      'Regulatory compliance tools (KYC/AML)',
      'API gateway for enterprise integration'
    ],
    benefits: [
      'Reduce transaction costs by 60-80%',
      'Improve transparency and traceability',
      'Enable new business models and revenue streams',
      'Automate complex business processes',
      'Enhance security and reduce fraud',
      'Future-proof technology infrastructure'
    ],
    targetAudience: [
      'Financial institutions and banks',
      'Supply chain and logistics companies',
      'Healthcare organizations',
      'Real estate companies',
      'Government agencies',
      'Technology companies and startups'
    ],
    useCases: [
      'Supply chain traceability',
      'Digital identity management',
      'Cross-border payments',
      'Asset tokenization',
      'Smart contracts for business processes',
      'Decentralized finance applications'
    ],
    integration: [
      'Enterprise systems (ERP, CRM, SCM)',
      'Cloud platforms (AWS, Azure, GCP)',
      'Payment processors and banking systems',
      'IoT devices and sensors',
      'Mobile applications',
      'Web applications and APIs'
    ],
    pricingTier: 'Enterprise',
    website: 'https://ziontechgroup.com/blockchain-enterprise',
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008, Middletown DE 19709'
    },
    rating: 4.8,
    reviewCount: 156,
    launchDate: '2024-01-20',
    status: 'Active',
    marketPrice: '$499 - $19,999/month',
    estimatedDelivery: '3-4 weeks setup',
    supportLevel: '24/7 enterprise support',
    innovationScore: 97,
    tags: ['Blockchain', 'Web3', 'DeFi', 'Smart Contracts', 'Enterprise']
  },

  // Internet of Things Services
  {
    id: 'zion-iot-intelligence-platform',
    title: 'Zion IoT Intelligence Platform',
    description: 'Comprehensive IoT platform that connects, monitors, and analyzes data from millions of devices to provide real-time insights and automated decision-making capabilities.',
    category: 'Internet of Things',
    subcategory: 'IoT Analytics & Automation',
    price: {
      monthly: 199,
      yearly: 1990,
      enterprise: 7999,
      currency: '$'
    },
    features: [
      'Connect and manage 1M+ IoT devices',
      'Real-time data processing and analytics',
      'AI-powered predictive maintenance',
      'Edge computing capabilities',
      'Device management and provisioning',
      'Security and encryption (TLS, AES)',
      'Custom dashboard and visualization',
      'API integration and webhooks',
      'Mobile app for device monitoring',
      'Multi-cloud deployment support'
    ],
    benefits: [
      'Reduce operational costs by 25-40%',
      'Improve equipment uptime by 30%',
      'Enable predictive maintenance',
      'Real-time monitoring and alerts',
      'Scalable IoT infrastructure',
      'Data-driven decision making'
    ],
    targetAudience: [
      'Manufacturing companies',
      'Smart city initiatives',
      'Healthcare facilities',
      'Energy and utilities',
      'Transportation and logistics',
      'Retail and hospitality'
    ],
    useCases: [
      'Industrial IoT monitoring',
      'Smart building management',
      'Predictive maintenance',
      'Environmental monitoring',
      'Asset tracking and management',
      'Energy consumption optimization'
    ],
    integration: [
      'IoT protocols (MQTT, CoAP, HTTP)',
      'Cloud platforms (AWS IoT, Azure IoT, Google Cloud IoT)',
      'Enterprise systems (ERP, MES, SCADA)',
      'Mobile applications',
      'Web dashboards',
      'Third-party IoT platforms'
    ],
    pricingTier: 'Enterprise',
    website: 'https://ziontechgroup.com/iot-intelligence',
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008, Middletown DE 19709'
    },
    rating: 4.7,
    reviewCount: 134,
    launchDate: '2024-02-01',
    status: 'Active',
    marketPrice: '$199 - $7,999/month',
    estimatedDelivery: '2-3 weeks setup',
    supportLevel: '24/7 support',
    innovationScore: 95,
    tags: ['IoT', 'Edge Computing', 'Predictive Maintenance', 'Real-time Analytics', 'Device Management']
  },

  // Edge Computing Services
  {
    id: 'zion-edge-computing-orchestrator',
    title: 'Zion Edge Computing Orchestrator',
    description: 'Advanced edge computing platform that processes data closer to the source, reducing latency and enabling real-time applications in distributed environments.',
    category: 'Edge Computing',
    subcategory: 'Edge Analytics & Processing',
    price: {
      monthly: 299,
      yearly: 2990,
      enterprise: 11999,
      currency: '$'
    },
    features: [
      'Distributed edge node management',
      'Real-time data processing at the edge',
      'AI/ML model deployment to edge devices',
      'Edge-to-cloud synchronization',
      'Load balancing and failover',
      'Edge security and encryption',
      'Custom edge application development',
      'Performance monitoring and optimization',
      'Multi-location edge deployment',
      'Edge computing templates and libraries'
    ],
    benefits: [
      'Reduce latency by 80-90%',
      'Lower bandwidth costs by 60%',
      'Enable real-time applications',
      'Improve reliability and uptime',
      'Process data closer to users',
      'Scalable edge infrastructure'
    ],
    targetAudience: [
      'Telecommunications companies',
      'Content delivery networks',
      'Manufacturing and industrial companies',
      'Smart city initiatives',
      'Healthcare organizations',
      'Financial services'
    ],
    useCases: [
      'Content delivery and streaming',
      'Industrial automation',
      'Autonomous vehicles',
      'Smart cities and infrastructure',
      'Healthcare monitoring',
      'Financial trading systems'
    ],
    integration: [
      'Cloud platforms (AWS, Azure, GCP)',
      'Kubernetes and container orchestration',
      '5G networks and telecommunications',
      'IoT platforms and devices',
      'Enterprise applications',
      'Mobile and web applications'
    ],
    pricingTier: 'Enterprise',
    website: 'https://ziontechgroup.com/edge-computing',
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008, Middletown DE 19709'
    },
    rating: 4.8,
    reviewCount: 98,
    launchDate: '2024-01-15',
    status: 'Active',
    marketPrice: '$299 - $11,999/month',
    estimatedDelivery: '3-4 weeks setup',
    supportLevel: '24/7 support',
    innovationScore: 96,
    tags: ['Edge Computing', 'Real-time Processing', 'Distributed Systems', 'Low Latency', 'Edge AI']
  },

  // Augmented Reality Services
  {
    id: 'zion-ar-enterprise-platform',
    title: 'Zion AR Enterprise Platform',
    description: 'Enterprise-grade augmented reality platform that enables immersive training, remote assistance, and interactive experiences for businesses across industries.',
    category: 'Augmented Reality',
    subcategory: 'Enterprise AR Solutions',
    price: {
      monthly: 399,
      yearly: 3990,
      enterprise: 15999,
      currency: '$'
    },
    features: [
      'Cross-platform AR development (iOS, Android, HoloLens)',
      '3D model creation and management',
      'Real-time object recognition',
      'Spatial mapping and tracking',
      'Collaborative AR experiences',
      'AR content management system',
      'Analytics and performance tracking',
      'Integration with enterprise systems',
      'Custom AR application development',
      'AR hardware compatibility and optimization'
    ],
    benefits: [
      'Improve training effectiveness by 40%',
      'Reduce travel costs by 60%',
      'Enhance customer engagement',
      'Streamline complex procedures',
      'Enable remote collaboration',
      'Create immersive brand experiences'
    ],
    targetAudience: [
      'Manufacturing companies',
      'Healthcare organizations',
      'Training and education institutions',
      'Retail and e-commerce',
      'Architecture and construction',
      'Marketing and advertising agencies'
    ],
    useCases: [
      'Employee training and onboarding',
      'Remote technical assistance',
      'Product visualization and design',
      'Interactive marketing campaigns',
      'Quality control and inspection',
      'Virtual showrooms and experiences'
    ],
    integration: [
      '3D modeling software (Blender, Maya, 3ds Max)',
      'Enterprise systems (ERP, CRM, PLM)',
      'Cloud platforms and storage',
      'Mobile applications',
      'Web platforms',
      'IoT devices and sensors'
    ],
    pricingTier: 'Enterprise',
    website: 'https://ziontechgroup.com/ar-enterprise',
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008, Middletown DE 19709'
    },
    rating: 4.7,
    reviewCount: 112,
    launchDate: '2024-02-10',
    status: 'Active',
    marketPrice: '$399 - $15,999/month',
    estimatedDelivery: '4-5 weeks setup',
    supportLevel: '24/7 support',
    innovationScore: 94,
    tags: ['Augmented Reality', 'Immersive Technology', '3D Visualization', 'Remote Collaboration', 'Training']
  },

  // Robotic Process Automation Services
  {
    id: 'zion-rpa-intelligence-suite',
    title: 'Zion RPA Intelligence Suite',
    description: 'Intelligent robotic process automation platform that combines AI and machine learning to automate complex business processes and workflows across organizations.',
    category: 'Robotic Process Automation',
    subcategory: 'Intelligent Process Automation',
    price: {
      monthly: 249,
      yearly: 2490,
      enterprise: 9999,
      currency: '$'
    },
    features: [
      'AI-powered process discovery and analysis',
      'Visual process designer with drag-and-drop interface',
      'Cognitive automation with NLP and computer vision',
      'Process mining and optimization',
      'Real-time process monitoring and analytics',
      'Integration with 500+ business applications',
      'Scalable automation infrastructure',
      'Advanced reporting and dashboards',
      'Role-based access control and security',
      'Mobile app for process monitoring'
    ],
    benefits: [
      'Reduce manual work by 80-90%',
      'Improve process accuracy by 95%',
      'Increase operational efficiency by 60%',
      'Reduce processing time by 70%',
      'Lower operational costs by 40%',
      'Enable 24/7 business operations'
    ],
    targetAudience: [
      'Operations managers',
      'Process improvement teams',
      'Finance and accounting departments',
      'HR and recruitment teams',
      'Customer service managers',
      'IT and automation teams'
    ],
    useCases: [
      'Data entry and processing',
      'Invoice processing and approval',
      'Customer service automation',
      'HR onboarding and offboarding',
      'Financial reporting and reconciliation',
      'Compliance and audit processes'
    ],
    integration: [
      'ERP systems (SAP, Oracle, NetSuite)',
      'CRM platforms (Salesforce, HubSpot)',
      'Accounting software (QuickBooks, Xero)',
      'Email and communication platforms',
      'Web applications and APIs',
      'Desktop applications and legacy systems'
    ],
    pricingTier: 'Professional',
    website: 'https://ziontechgroup.com/rpa-intelligence',
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008, Middletown DE 19709'
    },
    rating: 4.8,
    reviewCount: 187,
    launchDate: '2024-01-25',
    status: 'Active',
    marketPrice: '$249 - $9,999/month',
    estimatedDelivery: '2-3 weeks setup',
    supportLevel: '24/7 support',
    innovationScore: 93,
    tags: ['RPA', 'Process Automation', 'AI Automation', 'Workflow Optimization', 'Cognitive Automation']
  }
];

export const INNOVATIVE_SERVICE_CATEGORIES = [
  {
    label: 'Quantum Computing',
    value: 'quantum-computing',
    description: 'Next-generation computing solutions using quantum mechanics',
    icon: '⚛️',
    serviceCount: 1
  },
  {
    label: 'Blockchain & Web3',
    value: 'blockchain-web3',
    description: 'Decentralized applications and blockchain solutions',
    icon: '🔗',
    serviceCount: 1
  },
  {
    label: 'Internet of Things',
    value: 'iot',
    description: 'Connected devices and smart systems',
    icon: '🌐',
    serviceCount: 1
  },
  {
    label: 'Edge Computing',
    value: 'edge-computing',
    description: 'Distributed computing at the network edge',
    icon: '⚡',
    serviceCount: 1
  },
  {
    label: 'Augmented Reality',
    value: 'augmented-reality',
    description: 'Immersive AR experiences for enterprises',
    icon: '👁️',
    serviceCount: 1
  },
  {
    label: 'Robotic Process Automation',
    value: 'rpa',
    description: 'Intelligent automation of business processes',
    icon: '🤖',
    serviceCount: 1
  }
];

export const CONTACT_INFO = {
  mobile: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  address: "364 E Main St STE 1008, Middletown DE 19709",
  website: "https://ziontechgroup.com"
};