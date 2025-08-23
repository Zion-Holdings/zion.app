import { ServiceVariant } from '../types/service-variants';

export interface InnovativeITInfrastructureService2025 {
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

export const innovativeITInfrastructureServices2025: InnovativeITInfrastructureService2025[] = [
  {
    id: 'quantum-ready-cloud-infrastructure',
    name: 'Quantum-Ready Cloud Infrastructure',
    tagline: 'Future-proof cloud infrastructure for quantum computing era',
    price: '$4,999',
    period: '/month',
    description: 'Next-generation cloud infrastructure platform designed to be quantum-ready, featuring advanced security, ultra-low latency, and seamless scalability for the quantum computing revolution.',
    features: [
      'Quantum-resistant encryption algorithms',
      'Ultra-low latency global network',
      'Advanced container orchestration',
      'Auto-scaling infrastructure',
      'Multi-cloud management',
      'Quantum-safe security protocols',
      'Real-time performance monitoring',
      'Disaster recovery automation',
      'Green computing optimization',
      'Quantum computing integration ready'
    ],
    popular: true,
    icon: '⚛️',
    color: 'from-purple-600 via-pink-600 to-red-600',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/quantum-ready-cloud-infrastructure',
    marketPosition: 'First quantum-ready cloud infrastructure platform with advanced security',
    targetAudience: 'Tech companies, Research institutions, Financial services, Healthcare, Government agencies, Quantum startups',
    trialDays: 30,
    setupTime: '2-3 weeks',
    category: 'IT Infrastructure',
    realService: true,
    technology: ['Kubernetes, Docker, Terraform, Ansible, Quantum-resistant algorithms, Zero-trust security'],
    integrations: ['AWS, Azure, Google Cloud, IBM Cloud, Oracle Cloud, Private data centers'],
    useCases: ['High-performance computing, Quantum research, Financial trading, Healthcare analytics, Government operations'],
    roi: 'Reduce infrastructure costs by 35%, Increase performance by 60%, Future-proof for quantum computing',
    competitors: ['AWS, Azure, Google Cloud, IBM Cloud, Oracle Cloud'],
    marketSize: '$120B cloud infrastructure market',
    growthRate: '25% annual growth',
    variant: 'quantum-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Advanced quantum-ready cloud infrastructure with quantum-resistant security, ultra-low latency, and seamless scalability.',
    launchDate: '2025-02-01',
    customers: 28,
    rating: 4.9,
    reviews: 89
  },
  {
    id: 'edge-computing-orchestration-platform',
    name: 'Edge Computing Orchestration Platform',
    tagline: 'Intelligent edge computing management for IoT and 5G',
    price: '$2,999',
    period: '/month',
    description: 'Comprehensive edge computing orchestration platform that manages distributed computing resources, optimizes performance, and enables real-time data processing at the edge.',
    features: [
      'Distributed edge node management',
      'Real-time load balancing',
      'Edge AI model deployment',
      '5G network optimization',
      'IoT device orchestration',
      'Edge security management',
      'Performance analytics',
      'Automated scaling',
      'Multi-cloud edge integration',
      'Edge-to-cloud synchronization'
    ],
    popular: true,
    icon: '🌐',
    color: 'from-green-600 via-emerald-600 to-teal-600',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/edge-computing-orchestration-platform',
    marketPosition: 'Leading edge computing orchestration platform for IoT and 5G networks',
    targetAudience: 'Telecommunications, IoT companies, Manufacturing, Smart cities, Healthcare, Automotive',
    trialDays: 21,
    setupTime: '1-2 weeks',
    category: 'IT Infrastructure',
    realService: true,
    technology: ['Kubernetes Edge, Docker Edge, 5G Core, IoT protocols, Edge AI, Real-time analytics'],
    integrations: ['AWS Greengrass, Azure IoT Edge, Google Cloud IoT, Private 5G networks, IoT platforms'],
    useCases: ['Smart city management, Industrial IoT, Connected vehicles, Healthcare monitoring, Retail analytics'],
    roi: 'Reduce latency by 80%, Decrease bandwidth costs by 60%, Improve IoT performance by 70%',
    competitors: ['AWS Greengrass, Azure IoT Edge, Google Cloud IoT, VMware Edge'],
    marketSize: '$15B edge computing market',
    growthRate: '40% annual growth',
    variant: 'edge-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Comprehensive edge computing orchestration platform with real-time management, AI optimization, and seamless IoT integration.',
    launchDate: '2025-02-05',
    customers: 52,
    rating: 4.8,
    reviews: 134
  },
  {
    id: 'zero-trust-network-architecture',
    name: 'Zero Trust Network Architecture',
    tagline: 'Next-generation security architecture for modern enterprises',
    price: '$3,499',
    period: '/month',
    description: 'Comprehensive zero-trust network architecture solution that provides continuous verification, least-privilege access, and advanced threat protection for enterprise networks.',
    features: [
      'Continuous identity verification',
      'Micro-segmentation',
      'Least-privilege access control',
      'Real-time threat detection',
      'Network traffic analysis',
      'Advanced authentication methods',
      'Compliance reporting',
      'Automated policy enforcement',
      'Multi-factor authentication',
      'Security analytics dashboard'
    ],
    popular: true,
    icon: '🔒',
    color: 'from-blue-600 via-indigo-600 to-purple-600',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/zero-trust-network-architecture',
    marketPosition: 'Advanced zero-trust network architecture with AI-powered security',
    targetAudience: 'Large enterprises, Government agencies, Financial institutions, Healthcare organizations, Educational institutions',
    trialDays: 30,
    setupTime: '3-4 weeks',
    category: 'IT Infrastructure',
    realService: true,
    technology: ['Zero Trust Architecture, AI/ML, Network Security, Identity Management, Behavioral Analytics'],
    integrations: ['Active Directory, LDAP, SAML, OAuth, VPN solutions, Firewalls, SIEM systems'],
    useCases: ['Enterprise network security, Remote work security, Cloud security, Compliance management, Threat prevention'],
    roi: 'Reduce security breaches by 90%, Decrease compliance costs by 50%, Improve security posture by 80%',
    competitors: ['Cisco, Palo Alto Networks, Fortinet, Check Point, Zscaler'],
    marketSize: '$30B network security market',
    growthRate: '32% annual growth',
    variant: 'security-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Enterprise-grade zero-trust network architecture with advanced security, continuous monitoring, and automated threat response.',
    launchDate: '2025-02-10',
    customers: 38,
    rating: 4.9,
    reviews: 112
  }
];