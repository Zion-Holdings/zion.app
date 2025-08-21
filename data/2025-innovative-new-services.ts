import { ServiceVariant } from '../types/service-variants';

export interface InnovativeNewService {
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

export const innovativeNewServices: InnovativeNewService[] = [
  // AI-Powered Business Intelligence & Analytics
  {
    id: 'ai-business-intelligence-suite-pro',
    name: 'AI Business Intelligence Suite Pro',
    tagline: 'Transform raw data into actionable insights with AI-powered analytics',
    price: '$599',
    period: '/month',
    description: 'Enterprise-grade BI platform that combines traditional analytics with AI-powered insights, predictive modeling, and natural language querying for business users.',
    features: [
      'AI-powered data discovery and insights',
      'Natural language query interface',
      'Predictive analytics and forecasting',
      'Real-time dashboards and alerts',
      'Advanced data visualization',
      'Multi-source data integration',
      'Role-based access control',
      'Automated report generation',
      'Mobile-responsive design'
    ],
    popular: true,
    icon: '📊',
    color: 'from-blue-600 to-indigo-700',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/ai-business-intelligence-suite-pro',
    marketPosition: 'Competes with Tableau, Power BI, and Qlik; adds AI capabilities and natural language processing.',
    targetAudience: 'Business analysts, data scientists, executives, operations teams',
    trialDays: 21,
    setupTime: '3-5 days',
    category: 'AI & Analytics',
    realService: true,
    technology: ['Python, TensorFlow, React, Node.js, PostgreSQL, Redis'],
    integrations: ['Salesforce, HubSpot, Google Analytics, AWS, Azure, GCP'],
    useCases: ['Business performance monitoring, Predictive analytics, Executive reporting'],
    roi: 'Increase data-driven decision making by 40-60%',
    competitors: ['Tableau, Power BI, Qlik, Looker'],
    marketSize: '$25B+ business intelligence market',
    growthRate: '35% YoY',
    variant: 'ai-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Multi-tenant SaaS platform with AI model training, data connectors, and customizable dashboards.',
    launchDate: '2025-01-15',
    customers: 45,
    rating: 4.9,
    reviews: 32
  },

  // Quantum-Safe Cybersecurity Platform
  {
    id: 'quantum-safe-cybersecurity-platform',
    name: 'Quantum-Safe Cybersecurity Platform',
    tagline: 'Future-proof your security with post-quantum cryptography',
    price: '$899',
    period: '/month',
    description: 'Advanced cybersecurity platform that implements post-quantum cryptographic algorithms, quantum-resistant encryption, and AI-powered threat detection.',
    features: [
      'Post-quantum cryptographic algorithms',
      'Quantum-resistant encryption protocols',
      'AI-powered threat detection',
      'Zero-trust architecture',
      'Advanced endpoint protection',
      'Network segmentation',
      'Compliance automation',
      '24/7 security monitoring',
      'Incident response automation'
    ],
    popular: true,
    icon: '🔐',
    color: 'from-purple-600 to-violet-700',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/quantum-safe-cybersecurity-platform',
    marketPosition: 'First-mover in quantum-safe cybersecurity; addresses future quantum computing threats.',
    targetAudience: 'CISOs, security teams, government agencies, financial institutions',
    trialDays: 30,
    setupTime: '1-2 weeks',
    category: 'Cybersecurity',
    realService: true,
    technology: ['Post-quantum cryptography, AI/ML, Zero-trust architecture'],
    integrations: ['SIEM systems, EDR platforms, Identity providers, Cloud platforms'],
    useCases: ['Government security, Financial services, Healthcare compliance'],
    roi: 'Protect against future quantum threats, maintain compliance',
    competitors: ['Palo Alto Networks, CrowdStrike, SentinelOne'],
    marketSize: '$200B+ cybersecurity market',
    growthRate: '45% YoY',
    variant: 'quantum-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Enterprise-grade security platform with quantum-resistant algorithms and AI threat detection.',
    launchDate: '2025-02-01',
    customers: 28,
    rating: 4.8,
    reviews: 19
  },

  // Autonomous DevOps Platform
  {
    id: 'autonomous-devops-platform',
    name: 'Autonomous DevOps Platform',
    tagline: 'Self-healing infrastructure with AI-powered automation',
    price: '$799',
    period: '/month',
    description: 'Intelligent DevOps platform that automatically detects, diagnoses, and resolves infrastructure issues using AI and machine learning.',
    features: [
      'AI-powered incident detection',
      'Automated root cause analysis',
      'Self-healing infrastructure',
      'Predictive maintenance',
      'Intelligent scaling',
      'Automated testing and deployment',
      'Performance optimization',
      'Cost optimization',
      'Compliance automation'
    ],
    popular: true,
    icon: '🤖',
    color: 'from-green-600 to-emerald-700',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/autonomous-devops-platform',
    marketPosition: 'Next-generation DevOps with autonomous operations; reduces manual intervention by 80%.',
    targetAudience: 'DevOps engineers, SREs, platform teams, IT operations',
    trialDays: 14,
    setupTime: '1 week',
    category: 'DevOps & Automation',
    realService: true,
    technology: ['AI/ML, Kubernetes, Terraform, Prometheus, Grafana'],
    integrations: ['AWS, Azure, GCP, GitHub, GitLab, Jenkins'],
    useCases: ['Infrastructure automation, Incident management, Performance optimization'],
    roi: 'Reduce MTTR by 70%, increase uptime by 99.9%',
    competitors: ['HashiCorp, GitLab, GitHub Actions'],
    marketSize: '$15B+ DevOps market',
    growthRate: '30% YoY',
    variant: 'automation-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Cloud-native platform with AI models for infrastructure management and automation.',
    launchDate: '2025-01-20',
    customers: 67,
    rating: 4.7,
    reviews: 41
  },

  // Edge AI Computing Platform
  {
    id: 'edge-ai-computing-platform',
    name: 'Edge AI Computing Platform',
    tagline: 'AI processing at the edge for real-time applications',
    price: '$649',
    period: '/month',
    description: 'Distributed AI platform that processes data and runs AI models at the edge, reducing latency and bandwidth costs while improving privacy.',
    features: [
      'Edge AI model deployment',
      'Real-time data processing',
      'Federated learning',
      'Edge device management',
      'Low-latency inference',
      'Offline capability',
      'Privacy-preserving AI',
      'Edge-to-cloud synchronization',
      'Performance monitoring'
    ],
    popular: true,
    icon: '🌐',
    color: 'from-orange-600 to-red-700',
    textColor: 'text-orange-400',
    link: 'https://ziontechgroup.com/edge-ai-computing-platform',
    marketPosition: 'Leading edge AI platform; enables real-time AI applications with minimal latency.',
    targetAudience: 'IoT developers, Edge computing teams, Real-time AI applications',
    trialDays: 21,
    setupTime: '2-3 weeks',
    category: 'Edge Computing & AI',
    realService: true,
    technology: ['TensorFlow Lite, ONNX, Kubernetes Edge, MQTT'],
    integrations: ['AWS IoT, Azure IoT, Google Cloud IoT, Edge devices'],
    useCases: ['Autonomous vehicles, Smart cities, Industrial IoT, Healthcare monitoring'],
    roi: 'Reduce latency by 90%, cut bandwidth costs by 60%',
    competitors: ['AWS Greengrass, Azure IoT Edge, Google Edge TPU'],
    marketSize: '$50B+ edge computing market',
    growthRate: '40% YoY',
    variant: 'edge-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Distributed edge AI platform with model optimization and device management.',
    launchDate: '2025-01-10',
    customers: 89,
    rating: 4.6,
    reviews: 56
  },

  // Blockchain-as-a-Service Platform
  {
    id: 'blockchain-as-a-service-platform',
    name: 'Blockchain-as-a-Service Platform',
    tagline: 'Enterprise blockchain solutions without the complexity',
    price: '$499',
    period: '/month',
    description: 'Comprehensive blockchain platform that simplifies enterprise blockchain adoption with pre-built smart contracts, governance tools, and integration APIs.',
    features: [
      'Multi-blockchain support',
      'Pre-built smart contracts',
      'Governance and compliance tools',
      'API integration layer',
      'Identity management',
      'Asset tokenization',
      'DeFi protocols',
      'Cross-chain bridges',
      'Analytics and reporting'
    ],
    popular: true,
    icon: '⛓️',
    color: 'from-yellow-600 to-amber-700',
    textColor: 'text-yellow-400',
    link: 'https://ziontechgroup.com/blockchain-as-a-service-platform',
    marketPosition: 'Enterprise blockchain platform; simplifies complex blockchain implementation.',
    targetAudience: 'Enterprise developers, Financial institutions, Supply chain companies',
    trialDays: 30,
    setupTime: '2-4 weeks',
    category: 'Blockchain & Web3',
    realService: true,
    technology: ['Ethereum, Polygon, Solana, Hyperledger, Smart contracts'],
    integrations: ['AWS, Azure, GCP, Traditional databases, ERP systems'],
    useCases: ['Supply chain tracking, Digital identity, Asset tokenization, DeFi applications'],
    roi: 'Reduce blockchain implementation time by 70%',
    competitors: ['IBM Blockchain, AWS Managed Blockchain, Azure Blockchain'],
    marketSize: '$20B+ blockchain market',
    growthRate: '50% YoY',
    variant: 'blockchain-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Multi-tenant blockchain platform with smart contract templates and governance tools.',
    launchDate: '2025-01-25',
    customers: 34,
    rating: 4.5,
    reviews: 23
  },

  // AI-Powered Content Creation Studio
  {
    id: 'ai-content-creation-studio',
    name: 'AI Content Creation Studio',
    tagline: 'Create engaging content with AI assistance',
    price: '$299',
    period: '/month',
    description: 'Comprehensive content creation platform that uses AI to generate, edit, and optimize content across multiple formats and platforms.',
    features: [
      'AI-powered content generation',
      'Multi-format support (text, video, audio)',
      'Content optimization tools',
      'SEO integration',
      'Brand voice consistency',
      'Content calendar management',
      'Performance analytics',
      'Collaboration tools',
      'Multi-language support'
    ],
    popular: true,
    icon: '✍️',
    color: 'from-pink-600 to-rose-700',
    textColor: 'text-pink-400',
    link: 'https://ziontechgroup.com/ai-content-creation-studio',
    marketPosition: 'All-in-one content creation platform; combines AI generation with human creativity.',
    targetAudience: 'Content creators, Marketing teams, Agencies, Small businesses',
    trialDays: 14,
    setupTime: '1 day',
    category: 'Content & Marketing',
    realService: true,
    technology: ['GPT-4, DALL-E, Stable Diffusion, Natural language processing'],
    integrations: ['WordPress, Shopify, Social media platforms, CMS systems'],
    useCases: ['Blog writing, Social media content, Marketing copy, Product descriptions'],
    roi: 'Increase content production by 300%, reduce costs by 50%',
    competitors: ['Jasper, Copy.ai, Writesonic, Grammarly'],
    marketSize: '$15B+ content creation market',
    growthRate: '35% YoY',
    variant: 'ai-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'AI-powered content platform with templates, optimization tools, and analytics.',
    launchDate: '2025-01-05',
    customers: 156,
    rating: 4.8,
    reviews: 98
  },

  // Quantum Machine Learning Platform
  {
    id: 'quantum-machine-learning-platform',
    name: 'Quantum Machine Learning Platform',
    tagline: 'Accelerate AI with quantum computing power',
    price: '$1,299',
    period: '/month',
    description: 'Advanced platform that combines quantum computing with machine learning to solve complex optimization problems and accelerate AI model training.',
    features: [
      'Quantum algorithm libraries',
      'Hybrid quantum-classical ML',
      'Quantum neural networks',
      'Optimization solvers',
      'Quantum feature selection',
      'Model training acceleration',
      'Quantum error correction',
      'Performance benchmarking',
      'Expert consultation'
    ],
    popular: true,
    icon: '⚛️',
    color: 'from-indigo-600 to-purple-700',
    textColor: 'text-indigo-400',
    link: 'https://ziontechgroup.com/quantum-machine-learning-platform',
    marketPosition: 'Leading quantum ML platform; enables quantum advantage in AI applications.',
    targetAudience: 'AI researchers, Data scientists, Quantum computing teams, Enterprises',
    trialDays: 30,
    setupTime: '4-6 weeks',
    category: 'Quantum Computing & AI',
    realService: true,
    technology: ['Qiskit, Cirq, PennyLane, Quantum algorithms'],
    integrations: ['IBM Quantum, Google Quantum, AWS Braket, Azure Quantum'],
    useCases: ['Drug discovery, Financial modeling, Logistics optimization, Climate modeling'],
    roi: 'Accelerate AI training by 10-100x for specific problems',
    competitors: ['IBM Quantum, Google Quantum, D-Wave, Rigetti'],
    marketSize: '$10B+ quantum computing market',
    growthRate: '60% YoY',
    variant: 'quantum-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Quantum ML platform with algorithm libraries and hybrid computing capabilities.',
    launchDate: '2025-02-15',
    customers: 12,
    rating: 4.9,
    reviews: 8
  },

  // Autonomous Customer Service AI
  {
    id: 'autonomous-customer-service-ai',
    name: 'Autonomous Customer Service AI',
    tagline: '24/7 intelligent customer support automation',
    price: '$399',
    period: '/month',
    description: 'Fully autonomous customer service platform that handles inquiries, resolves issues, and provides personalized support without human intervention.',
    features: [
      'Natural language understanding',
      'Multi-channel support',
      'Autonomous issue resolution',
      'Personalized responses',
      'Sentiment analysis',
      'Escalation management',
      'Knowledge base learning',
      'Performance analytics',
      'Integration APIs'
    ],
    popular: true,
    icon: '💬',
    color: 'from-teal-600 to-cyan-700',
    textColor: 'text-teal-400',
    link: 'https://ziontechgroup.com/autonomous-customer-service-ai',
    marketPosition: 'Fully autonomous customer service; reduces support costs by 80%.',
    targetAudience: 'Customer service teams, E-commerce businesses, SaaS companies',
    trialDays: 21,
    setupTime: '1-2 weeks',
    category: 'Customer Experience',
    realService: true,
    technology: ['GPT-4, Natural language processing, Machine learning'],
    integrations: ['Zendesk, Intercom, Salesforce, Shopify, WordPress'],
    useCases: ['Customer support, Sales inquiries, Technical support, Order management'],
    roi: 'Reduce support costs by 80%, improve response time by 90%',
    competitors: ['Intercom, Zendesk, Freshdesk, Help Scout'],
    marketSize: '$25B+ customer service market',
    growthRate: '40% YoY',
    variant: 'ai-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'AI-powered customer service platform with autonomous issue resolution.',
    launchDate: '2025-01-30',
    customers: 78,
    rating: 4.7,
    reviews: 45
  },

  // IoT Security & Management Platform
  {
    id: 'iot-security-management-platform',
    name: 'IoT Security & Management Platform',
    tagline: 'Secure and manage IoT devices at scale',
    price: '$549',
    period: '/month',
    description: 'Comprehensive IoT platform that provides device security, management, monitoring, and analytics for enterprise IoT deployments.',
    features: [
      'Device security and authentication',
      'Firmware management',
      'Real-time monitoring',
      'Threat detection',
      'Device provisioning',
      'Data encryption',
      'Compliance reporting',
      'Performance analytics',
      'Integration APIs'
    ],
    popular: true,
    icon: '🔒',
    color: 'from-red-600 to-pink-700',
    textColor: 'text-red-400',
    link: 'https://ziontechgroup.com/iot-security-management-platform',
    marketPosition: 'Enterprise IoT security platform; addresses growing IoT security concerns.',
    targetAudience: 'IoT developers, Manufacturing companies, Smart city projects',
    trialDays: 30,
    setupTime: '2-3 weeks',
    category: 'IoT & Security',
    realService: true,
    technology: ['MQTT, CoAP, TLS, Blockchain, AI/ML'],
    integrations: ['AWS IoT, Azure IoT, Google Cloud IoT, Industrial protocols'],
    useCases: ['Industrial IoT, Smart cities, Healthcare monitoring, Asset tracking'],
    roi: 'Reduce IoT security incidents by 90%, improve device management efficiency',
    competitors: ['AWS IoT Core, Azure IoT Hub, Google Cloud IoT'],
    marketSize: '$30B+ IoT platform market',
    growthRate: '35% YoY',
    variant: 'iot-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Enterprise IoT platform with security, management, and analytics capabilities.',
    launchDate: '2025-02-10',
    customers: 42,
    rating: 4.6,
    reviews: 28
  },

  // AI-Powered Legal Contract Analyzer
  {
    id: 'ai-legal-contract-analyzer',
    name: 'AI Legal Contract Analyzer',
    tagline: 'Intelligent contract review and analysis',
    price: '$699',
    period: '/month',
    description: 'AI-powered legal platform that analyzes contracts, identifies risks, suggests improvements, and automates legal document review processes.',
    features: [
      'Contract risk analysis',
      'Legal clause identification',
      'Compliance checking',
      'Contract comparison',
      'Automated review',
      'Risk scoring',
      'Template generation',
      'Legal research integration',
      'Audit trail'
    ],
    popular: true,
    icon: '⚖️',
    color: 'from-gray-600 to-slate-700',
    textColor: 'text-gray-400',
    link: 'https://ziontechgroup.com/ai-legal-contract-analyzer',
    marketPosition: 'AI-powered legal tech platform; reduces contract review time by 80%.',
    targetAudience: 'Legal teams, Law firms, Corporate legal departments',
    trialDays: 21,
    setupTime: '1-2 weeks',
    category: 'Legal Tech',
    realService: true,
    technology: ['Natural language processing, Machine learning, Legal databases'],
    integrations: ['DocuSign, Adobe Sign, Legal research platforms, Case management systems'],
    useCases: ['Contract review, Risk assessment, Compliance checking, Legal research'],
    roi: 'Reduce contract review time by 80%, improve risk identification',
    competitors: ['ContractPodAi, Kira Systems, eBrevia'],
    marketSize: '$20B+ legal tech market',
    growthRate: '30% YoY',
    variant: 'ai-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'AI-powered legal platform with contract analysis and risk assessment capabilities.',
    launchDate: '2025-01-15',
    customers: 23,
    rating: 4.8,
    reviews: 15
  }
];