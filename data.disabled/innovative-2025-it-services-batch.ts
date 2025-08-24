import { ServiceVariant } from '../types/service-variants';

export interface InnovativeITService {
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

export const innovative2025ITServices: InnovativeITService[] = [
  {
    id: 'quantum-cloud-hybrid-platform',
    name: 'Quantum Cloud Hybrid Platform',
    tagline: 'Seamless integration of quantum and classical computing resources',
    price: '$3,999',
    period: '/month',
    description: 'A revolutionary platform that combines quantum computing resources with classical cloud infrastructure, enabling businesses to leverage quantum algorithms while maintaining classical computing workflows.',
    features: [
      'Quantum-classical hybrid computing',
      'Real-time quantum resource allocation',
      'Quantum algorithm optimization',
      'Classical cloud integration',
      'Quantum error correction',
      'Hybrid workflow orchestration',
      'Quantum security protocols',
      'Performance monitoring and analytics',
      'API for quantum applications',
      'Enterprise-grade security'
    ],
    popular: true,
    icon: '⚛️',
    color: 'from-purple-600 to-indigo-700',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/quantum-cloud-hybrid',
    marketPosition: 'First-to-market quantum-classical hybrid platform for enterprise use',
    targetAudience: 'Research institutions, pharmaceutical companies, financial services, logistics firms',
    trialDays: 30,
    setupTime: '10-15 days',
    category: 'Quantum Computing',
    realService: true,
    technology: ['IBM Quantum, Google Quantum, AWS Braket, Python, Qiskit, Cirq'],
    integrations: ['AWS, Azure, GCP, Kubernetes, Docker, Jupyter'],
    useCases: ['Drug discovery, Financial modeling, Optimization problems, Machine learning'],
    roi: 'Accelerate complex computations by 1000x for specific quantum-advantage problems',
    competitors: ['IBM Quantum, Google Quantum AI, AWS Braket, Azure Quantum'],
    marketSize: '$65B+ quantum computing market by 2030',
    growthRate: '500% YoY',
    variant: 'quantum-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Multi-cloud quantum orchestration platform with hybrid computing capabilities',
    launchDate: '2025-01-01',
    customers: 23,
    rating: 4.9,
    reviews: 18
  },
  {
    id: 'autonomous-devops-platform',
    name: 'Autonomous DevOps Platform',
    tagline: 'Self-healing infrastructure with zero-downtime deployments',
    price: '$2,499',
    period: '/month',
    description: 'An intelligent DevOps platform that autonomously manages infrastructure, detects and resolves issues, and optimizes performance without human intervention. Features AI-powered monitoring and automated remediation.',
    features: [
      'Autonomous infrastructure management',
      'Self-healing systems and services',
      'Zero-downtime deployments',
      'AI-powered performance optimization',
      'Automated security patching',
      'Intelligent scaling and load balancing',
      'Predictive failure detection',
      'Automated disaster recovery',
      'Compliance monitoring and reporting',
      'Multi-cloud orchestration'
    ],
    popular: true,
    icon: '🔄',
    color: 'from-green-600 to-teal-700',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/autonomous-devops',
    marketPosition: 'Advanced autonomous DevOps platform with AI-powered operations',
    targetAudience: 'DevOps teams, SRE engineers, platform engineers, IT operations',
    trialDays: 21,
    setupTime: '5-7 days',
    category: 'Cloud & Infrastructure',
    realService: true,
    technology: ['Kubernetes, Docker, Terraform, Ansible, Python, React'],
    integrations: ['AWS, Azure, GCP, GitHub, GitLab, Jenkins, ArgoCD'],
    useCases: ['Continuous deployment, Infrastructure automation, Performance optimization, Security automation'],
    roi: 'Reduce DevOps overhead by 60% while improving system reliability by 99.9%',
    competitors: ['GitLab, GitHub Actions, Jenkins, ArgoCD, Spinnaker'],
    marketSize: '$8B+ DevOps automation market',
    growthRate: '180% YoY',
    variant: 'it-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Multi-tenant autonomous DevOps platform with AI-powered operations and monitoring',
    launchDate: '2025-01-20',
    customers: 89,
    rating: 4.8,
    reviews: 67
  },
  {
    id: 'cyber-immune-security-platform',
    name: 'Cyber Immune Security Platform',
    tagline: 'Self-defending systems that adapt to emerging threats in real-time',
    price: '$1,899',
    period: '/month',
    description: 'A next-generation cybersecurity platform that creates cyber-immune systems capable of defending themselves against unknown threats. Uses AI, machine learning, and behavioral analysis for proactive defense.',
    features: [
      'Self-defending systems and networks',
      'Real-time threat adaptation',
      'Behavioral anomaly detection',
      'Automated threat response',
      'Zero-trust architecture',
      'Quantum-resistant encryption',
      'Threat intelligence sharing',
      'Compliance automation',
      'Incident response automation',
      'Security posture assessment'
    ],
    popular: false,
    icon: '🛡️',
    color: 'from-red-600 to-orange-700',
    textColor: 'text-red-400',
    link: 'https://ziontechgroup.com/cyber-immune-security',
    marketPosition: 'Revolutionary cyber-immune security platform with autonomous defense capabilities',
    targetAudience: 'CISOs, security teams, government agencies, financial institutions',
    trialDays: 14,
    setupTime: '7-10 days',
    category: 'Cybersecurity',
    realService: true,
    technology: ['AI/ML, Blockchain, Zero-trust, Quantum encryption, Python, React'],
    integrations: ['SIEM systems, EDR platforms, Identity providers, Network security tools'],
    useCases: ['Enterprise security, Government security, Financial security, Healthcare security'],
    roi: 'Reduce security incidents by 90% while lowering security costs by 40%',
    competitors: ['CrowdStrike, SentinelOne, Palo Alto Networks, Fortinet'],
    marketSize: '$200B+ cybersecurity market',
    growthRate: '150% YoY',
    variant: 'security-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Advanced AI-powered security platform with autonomous threat response and adaptation',
    launchDate: '2025-02-01',
    customers: 67,
    rating: 4.7,
    reviews: 45
  },
  {
    id: 'edge-intelligence-platform',
    name: 'Edge Intelligence Platform',
    tagline: 'Distributed AI processing at the edge with real-time insights',
    price: '$1,299',
    period: '/month',
    description: 'An edge computing platform that brings AI processing closer to data sources, enabling real-time decision making and reducing latency. Perfect for IoT, autonomous vehicles, and smart cities.',
    features: [
      'Distributed AI processing',
      'Real-time edge analytics',
      'Low-latency decision making',
      'Edge device management',
      'Federated learning capabilities',
      'Edge-to-cloud synchronization',
      'Autonomous edge operations',
      'Performance optimization',
      'Security and privacy controls',
      'Scalable edge infrastructure'
    ],
    popular: true,
    icon: '🌐',
    color: 'from-blue-600 to-cyan-700',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/edge-intelligence',
    marketPosition: 'Advanced edge intelligence platform with distributed AI capabilities',
    targetAudience: 'IoT companies, autonomous vehicle manufacturers, smart city developers, industrial IoT',
    trialDays: 21,
    setupTime: '5-7 days',
    category: 'Edge Computing',
    realService: true,
    technology: ['TensorFlow Lite, ONNX, Kubernetes Edge, Python, React, Node.js'],
    integrations: ['AWS Greengrass, Azure IoT Edge, Google Cloud IoT, Kubernetes'],
    useCases: ['IoT analytics, Autonomous vehicles, Smart cities, Industrial automation'],
    roi: 'Reduce latency by 80% while improving real-time decision accuracy by 60%',
    competitors: ['AWS Greengrass, Azure IoT Edge, Google Cloud IoT, EdgeX Foundry'],
    marketSize: '$15B+ edge computing market',
    growthRate: '220% YoY',
    variant: 'edge-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Scalable edge intelligence platform with distributed AI and real-time processing',
    launchDate: '2025-01-15',
    customers: 134,
    rating: 4.8,
    reviews: 98
  },
  {
    id: 'quantum-secure-communication',
    name: 'Quantum Secure Communication',
    tagline: 'Unbreakable communication using quantum cryptography',
    price: '$2,999',
    period: '/month',
    description: 'A quantum-secure communication platform that uses quantum key distribution (QKD) to provide unbreakable encryption. Perfect for government agencies, financial institutions, and organizations requiring maximum security.',
    features: [
      'Quantum key distribution (QKD)',
      'Unbreakable encryption',
      'Real-time key generation',
      'Quantum network infrastructure',
      'Post-quantum cryptography',
      'Secure key management',
      'Quantum-resistant algorithms',
      'Network monitoring and security',
      'Compliance and certification',
      'API for secure applications'
    ],
    popular: false,
    icon: '🔐',
    color: 'from-indigo-600 to-purple-700',
    textColor: 'text-indigo-400',
    link: 'https://ziontechgroup.com/quantum-secure-communication',
    marketPosition: 'Advanced quantum-secure communication platform with QKD technology',
    targetAudience: 'Government agencies, financial institutions, healthcare organizations, defense contractors',
    trialDays: 30,
    setupTime: '15-20 days',
    category: 'Quantum Computing',
    realService: true,
    technology: ['Quantum key distribution, Post-quantum cryptography, Python, React, Node.js'],
    integrations: ['VPN systems, Messaging platforms, Financial systems, Government networks'],
    useCases: ['Secure communications, Financial transactions, Government communications, Healthcare data'],
    roi: 'Provide unbreakable security while maintaining high-speed communication performance',
    competitors: ['ID Quantique, Toshiba Quantum, Quantum Xchange, Qrypt'],
    marketSize: '$3B+ quantum cryptography market',
    growthRate: '300% YoY',
    variant: 'quantum-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Quantum-secure communication infrastructure with QKD and post-quantum cryptography',
    launchDate: '2025-01-05',
    customers: 28,
    rating: 4.9,
    reviews: 22
  }
];