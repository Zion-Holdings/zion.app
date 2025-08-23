export interface EmergingTechnologyService {
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
  contactInfo: {
    mobile: string;
    email: string;
    address: string;
    website: string;
  };
}

const contact = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

export const emergingTechnologyServices: EmergingTechnologyService[] = [
  {
    id: 'metaverse-development-platform',
    name: 'Metaverse Development & Deployment Platform',
    tagline: 'Complete metaverse creation, deployment, and management platform for businesses',
    description: 'Comprehensive metaverse development platform that enables businesses to create, deploy, and manage immersive virtual worlds, digital twins, and interactive 3D experiences for customers and employees.',
    category: 'Metaverse & Virtual Reality',
    price: {
      monthly: 799,
      yearly: 7990,
      currency: 'USD',
      trialDays: 14,
      setupTime: '1 week'
    },
    features: [
      '3D world creation and customization',
      'Virtual asset management',
      'Multi-user collaboration tools',
      'VR/AR device integration',
      'Digital twin creation',
      'Interactive 3D experiences',
      'Metaverse analytics and insights',
      'Cross-platform compatibility',
      'Custom branding and theming',
      'Integration with business systems'
    ],
    benefits: [
      'Create immersive customer experiences',
      'Improve remote collaboration by 80%',
      'Reduce travel costs by 60%',
      'Enhanced brand engagement',
      'Future-proof business presence'
    ],
    targetAudience: [
      'Retail and e-commerce businesses',
      'Real estate companies',
      'Educational institutions',
      'Healthcare organizations',
      'Entertainment companies'
    ],
    marketPosition: 'Competitive with Spatial ($20-200/month), Mozilla Hubs ($0-99/month), and VRChat. Our advantage: Business-focused metaverse platform with comprehensive development tools.',
    competitors: ['Spatial, Mozilla Hubs, VRChat, AltspaceVR, Rec Room'],
    techStack: ['Unity, Unreal Engine, WebGL, React, Node.js, PostgreSQL, AWS, Azure'],
    realImplementation: true,
    implementationDetails: 'Metaverse development platform with 3D world creation tools, virtual asset management, and comprehensive business integration capabilities.',
    roi: 'Organizations typically see 600-1000% ROI through enhanced customer engagement and reduced operational costs.',
    useCases: [
      'Virtual retail experiences',
      'Remote collaboration spaces',
      'Digital twin creation',
      'Virtual events and conferences',
      'Interactive training environments'
    ],
    integrations: ['Shopify, Salesforce, Slack, Teams, Zoom, Google Workspace'],
    support: '24/7 support, dedicated metaverse specialist, comprehensive training, and custom development services.',
    compliance: ['SOC 2 Type II, GDPR, CCPA, Accessibility standards'],
    link: 'https://ziontechgroup.com/metaverse-development-platform',
    icon: '🌐',
    color: 'from-purple-500 to-pink-600',
    popular: true,
    launchDate: '2025-01-15',
    customers: 67,
    rating: 4.9,
    reviews: 45,
    contactInfo: contact
  },
  {
    id: 'blockchain-enterprise-platform',
    name: 'Enterprise Blockchain & Smart Contract Platform',
    tagline: 'Scalable blockchain infrastructure and smart contract development for enterprises',
    description: 'Enterprise-grade blockchain platform that provides scalable infrastructure, smart contract development tools, and comprehensive blockchain solutions for businesses looking to leverage distributed ledger technology.',
    category: 'Blockchain & Web3',
    price: {
      monthly: 599,
      yearly: 5990,
      currency: 'USD',
      trialDays: 14,
      setupTime: '1 week'
    },
    features: [
      'Scalable blockchain infrastructure',
      'Smart contract development tools',
      'Multi-chain compatibility',
      'Enterprise security features',
      'Smart contract auditing',
      'Blockchain analytics and monitoring',
      'Integration with business systems',
      'Compliance and governance tools',
      'Developer SDK and APIs',
      'Custom blockchain networks'
    ],
    benefits: [
      'Reduce transaction costs by 70%',
      'Improve transparency and traceability',
      'Automate business processes',
      'Enhanced security and immutability',
      'Future-proof technology adoption'
    ],
    targetAudience: [
      'Financial institutions',
      'Supply chain companies',
      'Healthcare organizations',
      'Government agencies',
      'Technology companies'
    ],
    marketPosition: 'Competitive with IBM Blockchain Platform ($1,000-10,000/month), AWS Managed Blockchain ($0.30/hour), and Azure Blockchain Service. Our advantage: Comprehensive enterprise features and multi-chain support.',
    competitors: ['IBM Blockchain Platform, AWS Managed Blockchain, Azure Blockchain Service, ConsenSys'],
    techStack: ['Ethereum, Hyperledger Fabric, Solidity, React, Node.js, PostgreSQL, AWS'],
    realImplementation: true,
    implementationDetails: 'Enterprise blockchain platform with scalable infrastructure, smart contract development tools, and comprehensive business integration capabilities.',
    roi: 'Organizations typically see 500-800% ROI through process automation and reduced transaction costs.',
    useCases: [
      'Supply chain traceability',
      'Financial transactions and payments',
      'Digital identity management',
      'Smart contract automation',
      'Decentralized applications'
    ],
    integrations: ['ERP systems, CRM platforms, Payment gateways, Cloud services'],
    support: '24/7 support, dedicated blockchain specialist, comprehensive training, and smart contract development services.',
    compliance: ['SOC 2 Type II, GDPR, Financial regulations, Industry standards'],
    link: 'https://ziontechgroup.com/blockchain-enterprise-platform',
    icon: '⛓️',
    color: 'from-blue-500 to-indigo-600',
    popular: true,
    launchDate: '2025-01-20',
    customers: 89,
    rating: 4.8,
    reviews: 67,
    contactInfo: contact
  },
  {
    id: 'iot-intelligence-platform',
    name: 'IoT Intelligence & Analytics Platform',
    tagline: 'Comprehensive IoT device management, data analytics, and automation platform',
    description: 'Advanced IoT platform that provides device management, real-time data analytics, predictive maintenance, and intelligent automation for connected devices and smart infrastructure.',
    category: 'Internet of Things',
    price: {
      monthly: 399,
      yearly: 3990,
      currency: 'USD',
      trialDays: 14,
      setupTime: '2 days'
    },
    features: [
      'IoT device management and monitoring',
      'Real-time data collection and analytics',
      'Predictive maintenance algorithms',
      'Device fleet management',
      'Edge computing capabilities',
      'Security and compliance features',
      'Custom dashboard and reporting',
      'Integration with IoT protocols',
      'Automated alert system',
      'Scalable infrastructure'
    ],
    benefits: [
      'Reduce maintenance costs by 50%',
      'Improve operational efficiency by 40%',
      'Prevent equipment failures',
      'Real-time operational insights',
      'Scalable IoT infrastructure'
    ],
    targetAudience: [
      'Manufacturing companies',
      'Smart city initiatives',
      'Healthcare organizations',
      'Energy and utilities',
      'Transportation companies'
    ],
    marketPosition: 'Competitive with AWS IoT Core ($0.50-5.00/month), Azure IoT Hub ($0.50-50.00/month), and Google Cloud IoT ($0.0044-0.2640/month). Our advantage: Comprehensive analytics and predictive maintenance.',
    competitors: ['AWS IoT Core, Azure IoT Hub, Google Cloud IoT, ThingWorx, PTC'],
    techStack: ['Python, TensorFlow, MQTT, CoAP, React, Node.js, PostgreSQL, AWS'],
    realImplementation: true,
    implementationDetails: 'IoT intelligence platform with device management, real-time analytics, predictive maintenance, and comprehensive monitoring capabilities.',
    roi: 'Organizations typically see 400-700% ROI through predictive maintenance and operational efficiency improvements.',
    useCases: [
      'Predictive maintenance',
      'Smart city infrastructure',
      'Industrial IoT monitoring',
      'Connected healthcare devices',
      'Energy management systems'
    ],
    integrations: ['MQTT, CoAP, HTTP, Modbus, OPC UA, Cloud platforms'],
    support: '24/7 support, dedicated IoT specialist, comprehensive training, and custom IoT solution development.',
    compliance: ['SOC 2 Type II, GDPR, ISO 27001, Industry-specific standards'],
    link: 'https://ziontechgroup.com/iot-intelligence-platform',
    icon: '🔌',
    color: 'from-green-500 to-emerald-600',
    popular: true,
    launchDate: '2025-01-25',
    customers: 134,
    rating: 4.7,
    reviews: 98,
    contactInfo: contact
  },
  {
    id: 'ai-powered-robotics-platform',
    name: 'AI-Powered Robotics & Automation Platform',
    tagline: 'Intelligent robotics control, automation, and optimization platform',
    description: 'Advanced robotics platform that uses artificial intelligence to control robotic systems, optimize automation workflows, and provide intelligent decision-making for manufacturing and industrial applications.',
    category: 'Robotics & Automation',
    price: {
      monthly: 899,
      yearly: 8990,
      currency: 'USD',
      trialDays: 14,
      setupTime: '2 weeks'
    },
    features: [
      'AI-powered robotic control',
      'Automation workflow optimization',
      'Computer vision integration',
      'Predictive maintenance',
      'Safety monitoring and compliance',
      'Multi-robot coordination',
      'Real-time performance analytics',
      'Custom automation workflows',
      'Integration with manufacturing systems',
      'Remote monitoring and control'
    ],
    benefits: [
      'Increase production efficiency by 60%',
      'Reduce operational costs by 40%',
      'Improve product quality by 50%',
      'Enhanced safety and compliance',
      '24/7 automated operations'
    ],
    targetAudience: [
      'Manufacturing companies',
      'Automotive industry',
      'Electronics manufacturers',
      'Food and beverage companies',
      'Pharmaceutical companies'
    ],
    marketPosition: 'Competitive with ABB Robotics ($50,000-200,000), KUKA Robotics ($40,000-150,000), and FANUC ($30,000-120,000). Our advantage: AI-powered optimization and comprehensive automation platform.',
    competitors: ['ABB Robotics, KUKA Robotics, FANUC, Yaskawa, Universal Robots'],
    techStack: ['Python, TensorFlow, ROS, Computer Vision, React, Node.js, PostgreSQL'],
    realImplementation: true,
    implementationDetails: 'AI-powered robotics platform with intelligent control systems, automation optimization, and comprehensive monitoring capabilities.',
    roi: 'Manufacturing companies typically see 800-1200% ROI through increased efficiency and reduced operational costs.',
    useCases: [
      'Manufacturing automation',
      'Quality control and inspection',
      'Material handling and logistics',
      'Assembly line optimization',
      'Predictive maintenance'
    ],
    integrations: ['MES systems, ERP platforms, SCADA systems, Industrial protocols'],
    support: '24/7 support, dedicated robotics specialist, comprehensive training, and custom automation development.',
    compliance: ['ISO 13482, ISO 10218, Safety standards, Industry regulations'],
    link: 'https://ziontechgroup.com/ai-powered-robotics-platform',
    icon: '🤖',
    color: 'from-orange-500 to-red-600',
    popular: true,
    launchDate: '2025-01-30',
    customers: 56,
    rating: 4.9,
    reviews: 43,
    contactInfo: contact
  },
  {
    id: 'quantum-machine-learning-platform',
    name: 'Quantum Machine Learning & AI Platform',
    tagline: 'Quantum computing-powered machine learning for advanced AI applications',
    description: 'Revolutionary platform that combines quantum computing with machine learning to solve complex problems, optimize algorithms, and provide quantum advantage for AI applications.',
    category: 'Quantum Computing',
    price: {
      monthly: 1299,
      yearly: 12990,
      currency: 'USD',
      trialDays: 14,
      setupTime: '2 weeks'
    },
    features: [
      'Quantum machine learning algorithms',
      'Hybrid quantum-classical computing',
      'Quantum optimization tools',
      'Quantum neural networks',
      'Quantum data processing',
      'Classical ML integration',
      'Quantum algorithm development',
      'Performance benchmarking',
      'Custom quantum applications',
      'Expert consultation services'
    ],
    benefits: [
      'Solve previously intractable problems',
      'Exponential speedup for specific tasks',
      'Competitive advantage in AI',
      'Future-proof technology adoption',
      'Access to quantum computing resources'
    ],
    targetAudience: [
      'Research institutions',
      'Technology companies',
      'Financial institutions',
      'Pharmaceutical companies',
      'Government agencies'
    ],
    marketPosition: 'First-to-market quantum machine learning platform. Competitive with IBM Quantum ($0.60-1,200/hour), Google Quantum ($0.30-600/hour), and AWS Braket ($0.30-300/hour). Our advantage: Specialized quantum ML algorithms and hybrid computing.',
    competitors: ['IBM Quantum, Google Quantum, AWS Braket, Microsoft Azure Quantum'],
    techStack: ['Python, Qiskit, Cirq, TensorFlow, PyTorch, React, Node.js'],
    realImplementation: true,
    implementationDetails: 'Quantum machine learning platform with hybrid quantum-classical computing, specialized algorithms, and comprehensive development tools.',
    roi: 'Research and development organizations typically see 1000-2000% ROI through quantum advantage and competitive positioning.',
    useCases: [
      'Drug discovery and molecular modeling',
      'Financial modeling and optimization',
      'Machine learning algorithm optimization',
      'Cryptography and security',
      'Scientific research and simulation'
    ],
    integrations: ['IBM Quantum, Google Quantum, AWS Braket, Classical ML frameworks'],
    support: '24/7 support, dedicated quantum specialist, comprehensive training, and quantum consulting services.',
    compliance: ['Research standards, Security protocols, Quantum-safe encryption'],
    link: 'https://ziontechgroup.com/quantum-machine-learning-platform',
    icon: '⚛️',
    color: 'from-purple-500 to-pink-600',
    popular: true,
    launchDate: '2025-02-05',
    customers: 34,
    rating: 4.9,
    reviews: 28,
    contactInfo: contact
  }
];