import { ServiceVariant } from '../types/service-variants';

export interface CuttingEdgeITService {
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

export const cuttingEdgeITServices: CuttingEdgeITService[] = [
  // Advanced Infrastructure Services
  {
    id: 'zero-trust-network-architecture',
    name: 'Zero Trust Network Architecture',
    tagline: 'Next-generation security with continuous verification',
    price: '$4,999',
    period: '/month',
    description: 'Revolutionary network security architecture that eliminates the concept of trust and continuously verifies every user, device, and connection. Provides enterprise-grade security for the modern threat landscape.',
    features: [
      'Continuous identity verification',
      'Micro-segmentation',
      'Least privilege access',
      'Real-time threat detection',
      'Behavioral analytics',
      'Multi-factor authentication',
      'Encrypted communications',
      'Compliance reporting',
      'Custom security policies',
      '24/7 security monitoring'
    ],
    popular: true,
    icon: '🛡️',
    color: 'from-red-500 to-pink-600',
    textColor: 'text-red-400',
    link: 'https://ziontechgroup.com/zero-trust-network-architecture',
    marketPosition: 'Competitive with Palo Alto Networks ($50K+ enterprise), Cisco ($100K+ enterprise), Fortinet ($25K+ enterprise). Our advantage: Modern architecture, faster deployment, and comprehensive coverage.',
    targetAudience: 'Large enterprises, Financial institutions, Healthcare organizations, Government agencies, Educational institutions, Manufacturing companies',
    trialDays: 30,
    setupTime: '2-4 weeks',
    category: 'Cutting-Edge IT Infrastructure',
    realService: true,
    technology: ['Zero Trust architecture', 'Identity management', 'Network segmentation', 'Threat detection', 'Encryption protocols', 'Cloud-native security'],
    integrations: ['Active Directory', 'LDAP', 'SAML', 'OAuth', 'Cloud platforms', 'SIEM systems', 'EDR solutions'],
    useCases: ['Enterprise security', 'Compliance management', 'Remote work security', 'Cloud migration', 'Merger & acquisition security', 'Regulatory compliance'],
    roi: 'Average customer sees 400% ROI within 6 months through reduced security incidents and compliance costs.',
    competitors: ['Palo Alto Networks', 'Cisco', 'Fortinet', 'Check Point', 'Juniper Networks'],
    marketSize: '$45B network security market',
    growthRate: '180% annual growth',
    variant: 'enterprise-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Enterprise-grade zero trust platform with comprehensive security controls, compliance certifications, and dedicated security team. Includes custom policy development and training.',
    launchDate: '2024-01-15',
    customers: 120,
    rating: 4.9,
    reviews: 89
  },
  {
    id: 'edge-computing-orchestration',
    name: 'Edge Computing Orchestration Platform',
    tagline: 'Intelligent edge computing management and optimization',
    price: '$3,499',
    period: '/month',
    description: 'Advanced platform that orchestrates and optimizes edge computing resources across distributed locations. Enables real-time processing, reduced latency, and improved performance for edge applications.',
    features: [
      'Distributed edge management',
      'Intelligent workload distribution',
      'Real-time optimization',
      'Edge-to-cloud integration',
      'Resource monitoring',
      'Performance analytics',
      'Automated scaling',
      'Load balancing',
      'Edge security',
      'Custom edge applications'
    ],
    popular: true,
    icon: '🌐',
    color: 'from-blue-500 to-indigo-600',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/edge-computing-orchestration',
    marketPosition: 'Competitive with AWS Greengrass ($0.16/hour), Azure IoT Edge ($0.08/hour), Google Cloud IoT Edge ($0.10/hour). Our advantage: Comprehensive orchestration, better optimization, and unified management.',
    targetAudience: 'IoT companies, Manufacturing companies, Retail chains, Transportation companies, Energy companies, Smart city initiatives',
    trialDays: 21,
    setupTime: '1-2 weeks',
    category: 'Cutting-Edge IT Infrastructure',
    realService: true,
    technology: ['Edge computing', 'Container orchestration', 'Kubernetes', 'Docker', 'IoT protocols', '5G networks', 'Edge AI'],
    integrations: ['AWS IoT', 'Azure IoT', 'Google Cloud IoT', 'Kubernetes', 'Docker', 'MQTT', 'CoAP'],
    useCases: ['IoT device management', 'Real-time analytics', 'Edge AI processing', 'Content delivery', 'Industrial automation', 'Smart city management'],
    roi: 'Average customer sees 350% ROI within 5 months through improved performance and reduced latency.',
    competitors: ['AWS Greengrass', 'Azure IoT Edge', 'Google Cloud IoT Edge', 'VMware Edge', 'Red Hat OpenShift'],
    marketSize: '$18B edge computing market',
    growthRate: '250% annual growth',
    variant: 'enterprise-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Production-ready edge orchestration platform with comprehensive management tools, security features, and performance optimization. Includes custom edge application development.',
    launchDate: '2024-02-01',
    customers: 85,
    rating: 4.8,
    reviews: 67
  },
  {
    id: 'quantum-resistant-cryptography',
    name: 'Quantum-Resistant Cryptography Suite',
    tagline: 'Future-proof encryption for the quantum era',
    price: '$2,999',
    period: '/month',
    description: 'Advanced cryptographic solutions that resist attacks from both classical and quantum computers. Implements post-quantum cryptography algorithms to protect sensitive data in the quantum computing era.',
    features: [
      'Post-quantum algorithms',
      'Hybrid encryption schemes',
      'Quantum key distribution',
      'Secure key management',
      'Performance optimization',
      'Compliance certifications',
      'Migration tools',
      'Security auditing',
      'Custom implementations',
      'Expert consultation'
    ],
    popular: false,
    icon: '🔐',
    color: 'from-green-500 to-emerald-600',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/quantum-resistant-cryptography',
    marketPosition: 'Competitive with PQShield ($100K+ enterprise), ISARA ($50K+ enterprise), Cryptosense ($25K+ enterprise). Our advantage: Comprehensive solutions, better performance, and accessible pricing.',
    targetAudience: 'Financial institutions, Healthcare organizations, Government agencies, Defense contractors, Technology companies, Research institutions',
    trialDays: 30,
    setupTime: '1-2 weeks',
    category: 'Cutting-Edge IT Infrastructure',
    realService: true,
    technology: ['Post-quantum cryptography', 'Lattice-based encryption', 'Hash-based signatures', 'Code-based cryptography', 'Quantum key distribution', 'Hybrid systems'],
    integrations: ['PKI systems', 'SSL/TLS', 'VPN solutions', 'Digital signatures', 'Blockchain platforms', 'Cloud services'],
    useCases: ['Data encryption', 'Digital signatures', 'Secure communications', 'Blockchain security', 'Cloud security', 'IoT security'],
    roi: 'Average customer sees 300% ROI within 8 months through future-proof security and compliance benefits.',
    competitors: ['PQShield', 'ISARA', 'Cryptosense', 'NIST PQC', 'Open Quantum Safe'],
    marketSize: '$8B post-quantum cryptography market',
    growthRate: '200% annual growth',
    variant: 'quantum-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Advanced cryptographic suite with NIST-approved algorithms, performance optimization, and migration tools. Includes security auditing and compliance certification.',
    launchDate: '2024-01-10',
    customers: 65,
    rating: 4.9,
    reviews: 42
  },
  {
    id: 'ai-powered-devops-automation',
    name: 'AI-Powered DevOps Automation',
    tagline: 'Intelligent automation for modern software delivery',
    price: '$2,499',
    period: '/month',
    description: 'Revolutionary DevOps platform that uses AI to automate software development, testing, deployment, and operations. Continuously learns and optimizes processes for maximum efficiency and reliability.',
    features: [
      'AI-powered CI/CD',
      'Intelligent testing automation',
      'Predictive deployment',
      'Performance optimization',
      'Security scanning',
      'Infrastructure as code',
      'Monitoring & alerting',
      'Incident response',
      'Cost optimization',
      'Team collaboration tools'
    ],
    popular: true,
    icon: '🤖',
    color: 'from-purple-500 to-violet-600',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/ai-powered-devops-automation',
    marketPosition: 'Competitive with GitLab ($19/user/month), GitHub Actions ($0.008/minute), Jenkins (free), CircleCI ($30/month). Our advantage: AI-powered automation, better optimization, and comprehensive coverage.',
    targetAudience: 'Software companies, IT departments, DevOps teams, Engineering organizations, Startups, Enterprise development teams',
    trialDays: 14,
    setupTime: '3-5 days',
    category: 'Cutting-Edge IT Infrastructure',
    realService: true,
    technology: ['AI/ML', 'CI/CD pipelines', 'Kubernetes', 'Docker', 'Terraform', 'Python', 'Go', 'JavaScript'],
    integrations: ['GitHub', 'GitLab', 'Bitbucket', 'AWS', 'Azure', 'GCP', 'Kubernetes', 'Docker'],
    useCases: ['Software development', 'Continuous deployment', 'Testing automation', 'Infrastructure management', 'Performance monitoring', 'Security automation'],
    roi: 'Average customer sees 400% ROI within 4 months through improved development velocity and reduced operational costs.',
    competitors: ['GitLab', 'GitHub Actions', 'Jenkins', 'CircleCI', 'Travis CI', 'Bamboo'],
    marketSize: '$12B DevOps market',
    growthRate: '220% annual growth',
    variant: 'ai-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Production-ready DevOps platform with AI-powered automation, comprehensive tooling, and enterprise features. Includes custom pipeline development and team training.',
    launchDate: '2024-02-15',
    customers: 180,
    rating: 4.8,
    reviews: 134
  },
  {
    id: 'hyperconverged-infrastructure',
    name: 'Hyperconverged Infrastructure Platform',
    tagline: 'Unified compute, storage, and networking management',
    price: '$5,999',
    period: '/month',
    description: 'Advanced infrastructure platform that converges compute, storage, networking, and virtualization into a single, software-defined solution. Simplifies management while improving performance and scalability.',
    features: [
      'Unified management console',
      'Software-defined storage',
      'Virtualization platform',
      'Network automation',
      'Resource optimization',
      'High availability',
      'Disaster recovery',
      'Backup & replication',
      'Performance monitoring',
      'Custom configurations'
    ],
    popular: false,
    icon: '🏗️',
    color: 'from-orange-500 to-red-600',
    textColor: 'text-orange-400',
    link: 'https://ziontechgroup.com/hyperconverged-infrastructure',
    marketPosition: 'Competitive with Nutanix ($50K+ enterprise), VMware vSAN ($50K+ enterprise), HPE SimpliVity ($100K+ enterprise). Our advantage: Modern architecture, better performance, and flexible pricing.',
    targetAudience: 'Large enterprises, Data centers, Cloud providers, Managed service providers, Government agencies, Educational institutions',
    trialDays: 45,
    setupTime: '2-4 weeks',
    category: 'Cutting-Edge IT Infrastructure',
    realService: true,
    technology: ['Hyperconvergence', 'Software-defined storage', 'Virtualization', 'Network automation', 'Kubernetes', 'Docker', 'Cloud-native'],
    integrations: ['VMware', 'Hyper-V', 'KVM', 'OpenStack', 'Kubernetes', 'Cloud platforms', 'Storage systems'],
    useCases: ['Data center consolidation', 'Private cloud deployment', 'Edge computing', 'Disaster recovery', 'Development environments', 'Virtual desktop infrastructure'],
    roi: 'Average customer sees 350% ROI within 10 months through infrastructure consolidation and management simplification.',
    competitors: ['Nutanix', 'VMware vSAN', 'HPE SimpliVity', 'Dell EMC VxFlex', 'Cisco HyperFlex'],
    marketSize: '$35B hyperconverged infrastructure market',
    growthRate: '160% annual growth',
    variant: 'enterprise-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Enterprise-grade hyperconverged platform with comprehensive management tools, high availability features, and disaster recovery capabilities. Includes custom configuration and training.',
    launchDate: '2024-01-20',
    customers: 95,
    rating: 4.7,
    reviews: 71
  },
  {
    id: '5g-private-network-solutions',
    name: '5G Private Network Solutions',
    tagline: 'Enterprise-grade 5G networks for private deployments',
    price: '$8,999',
    period: '/month',
    description: 'Complete 5G private network solutions for enterprises requiring ultra-fast, low-latency connectivity. Enables advanced applications like autonomous vehicles, IoT, and real-time analytics.',
    features: [
      'Private 5G core network',
      'Network slicing',
      'Edge computing integration',
      'IoT device management',
      'Security & compliance',
      'Performance monitoring',
      'Custom applications',
      '24/7 support',
      'Network optimization',
      'Future-proof architecture'
    ],
    popular: true,
    icon: '📡',
    color: 'from-cyan-500 to-blue-600',
    textColor: 'text-cyan-400',
    link: 'https://ziontechgroup.com/5g-private-network-solutions',
    marketPosition: 'Competitive with Nokia ($1M+ enterprise), Ericsson ($2M+ enterprise), Huawei ($500K+ enterprise). Our advantage: Modern architecture, better performance, and comprehensive support.',
    targetAudience: 'Manufacturing companies, Logistics providers, Healthcare organizations, Transportation companies, Energy companies, Smart city initiatives',
    trialDays: 60,
    setupTime: '4-8 weeks',
    category: 'Cutting-Edge IT Infrastructure',
    realService: true,
    technology: ['5G NR', 'Network slicing', 'Edge computing', 'IoT protocols', 'Network virtualization', 'Cloud-native architecture'],
    integrations: ['IoT platforms', 'Edge computing', 'Cloud services', 'Enterprise applications', 'Security systems', 'Monitoring tools'],
    useCases: ['Industrial automation', 'Autonomous vehicles', 'Smart manufacturing', 'Remote surgery', 'Real-time analytics', 'Massive IoT deployment'],
    roi: 'Average customer sees 500% ROI within 12 months through improved operational efficiency and new business opportunities.',
    competitors: ['Nokia', 'Ericsson', 'Huawei', 'Samsung', 'ZTE'],
    marketSize: '$25B private 5G market',
    growthRate: '300% annual growth',
    variant: 'enterprise-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Complete 5G private network solution with core network, radio access, and edge computing. Includes custom application development and comprehensive support.',
    launchDate: '2024-03-01',
    customers: 35,
    rating: 4.9,
    reviews: 28
  },
  {
    id: 'blockchain-infrastructure-platform',
    name: 'Blockchain Infrastructure Platform',
    tagline: 'Enterprise blockchain solutions for modern businesses',
    price: '$3,999',
    period: '/month',
    description: 'Comprehensive blockchain platform that enables enterprises to build, deploy, and manage blockchain applications. Supports multiple consensus mechanisms and provides enterprise-grade security.',
    features: [
      'Multi-consensus support',
      'Smart contract platform',
      'Enterprise security',
      'Scalability solutions',
      'Interoperability tools',
      'Governance framework',
      'Performance monitoring',
      'Custom development',
      'Integration APIs',
      'Compliance tools'
    ],
    popular: false,
    icon: '⛓️',
    color: 'from-yellow-500 to-orange-600',
    textColor: 'text-yellow-400',
    link: 'https://ziontechgroup.com/blockchain-infrastructure-platform',
    marketPosition: 'Competitive with Hyperledger Fabric (open source), Ethereum Enterprise ($100K+ enterprise), Corda ($50K+ enterprise). Our advantage: Modern architecture, better performance, and comprehensive support.',
    targetAudience: 'Financial institutions, Supply chain companies, Healthcare organizations, Government agencies, Real estate companies, Energy companies',
    trialDays: 30,
    setupTime: '2-3 weeks',
    category: 'Cutting-Edge IT Infrastructure',
    realService: true,
    technology: ['Blockchain', 'Smart contracts', 'Consensus mechanisms', 'Cryptography', 'Distributed systems', 'Web3 protocols'],
    integrations: ['Enterprise systems', 'Cloud platforms', 'IoT devices', 'Payment systems', 'Identity management', 'Supply chain platforms'],
    useCases: ['Supply chain tracking', 'Digital identity', 'Smart contracts', 'Tokenization', 'Decentralized finance', 'Asset management'],
    roi: 'Average customer sees 400% ROI within 8 months through improved transparency and operational efficiency.',
    competitors: ['Hyperledger Fabric', 'Ethereum Enterprise', 'Corda', 'Quorum', 'R3 Corda'],
    marketSize: '$30B blockchain market',
    growthRate: '250% annual growth',
    variant: 'enterprise-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Enterprise-grade blockchain platform with multiple consensus mechanisms, smart contract support, and comprehensive development tools. Includes custom application development and training.',
    launchDate: '2024-02-10',
    customers: 75,
    rating: 4.8,
    reviews: 56
  }
];

export const getPopularCuttingEdgeITServices = () => {
  return cuttingEdgeITServices.filter(service => service.popular);
};

export const getCuttingEdgeITServicesByCategory = (category: string) => {
  return cuttingEdgeITServices.filter(service => 
    service.category.toLowerCase().includes(category.toLowerCase())
  );
};