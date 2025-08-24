import { ServiceVariant } from '../types/service-variants';

export interface InnovativeITInfrastructureService {
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

export const innovativeITInfrastructureServices: InnovativeITInfrastructureService[] = [
  {
    id: 'edge-computing-orchestrator',
    name: 'Edge Computing Orchestrator',
    tagline: 'Distributed edge computing platform with intelligent workload distribution and latency optimization',
    price: '$249',
    period: '/month',
    description: 'Advanced edge computing platform that intelligently distributes workloads across global edge locations, optimizing for latency, cost, and performance while providing seamless failover and scaling.',
    features: [
      'Global edge node distribution',
      'Intelligent workload routing',
      'Automatic failover and scaling',
      'Real-time performance monitoring',
      'Cost optimization algorithms',
      'Multi-cloud edge management',
      'Edge function deployment',
      'Global load balancing'
    ],
    popular: true,
    icon: '🌐',
    color: 'from-indigo-600 to-purple-700',
    textColor: 'text-indigo-400',
    link: 'https://ziontechgroup.com/edge-computing-orchestrator',
    marketPosition: 'Competes with Cloudflare Workers, AWS Lambda@Edge; adds intelligent orchestration and cost optimization.',
    targetAudience: 'DevOps engineers, Platform architects, Global businesses',
    trialDays: 14,
    setupTime: '2 days',
    category: 'IT Infrastructure',
    realService: true,
    technology: ['Kubernetes, Docker, Node.js, Redis, PostgreSQL'],
    integrations: ['AWS, Azure, GCP, Cloudflare, DigitalOcean'],
    useCases: ['Global application deployment, Low-latency services, Edge computing optimization'],
    roi: 'Reduce global latency by 40-60% and infrastructure costs by 25-35%.',
    competitors: ['Cloudflare Workers, AWS Lambda@Edge, Azure Edge Zones'],
    marketSize: '$12.5B edge computing market',
    growthRate: '38% YoY',
    variant: 'edge-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Distributed orchestration engine with intelligent routing algorithms and global edge network.',
    launchDate: '2025-01-25',
    customers: 112,
    rating: 4.8,
    reviews: 76
  },
  {
    id: 'quantum-ready-security-framework',
    name: 'Quantum-Ready Security Framework',
    tagline: 'Post-quantum cryptography implementation with quantum-resistant algorithms and hybrid security',
    price: '$399',
    period: '/month',
    description: 'Future-proof security framework that implements post-quantum cryptography algorithms, hybrid encryption schemes, and quantum-resistant protocols to protect data against quantum computing threats.',
    features: [
      'Post-quantum cryptography algorithms',
      'Hybrid encryption schemes',
      'Quantum-resistant protocols',
      'Automated key rotation',
      'Compliance certifications',
      'Performance optimization',
      'Integration with existing systems',
      'Quantum threat monitoring'
    ],
    popular: false,
    icon: '🔐',
    color: 'from-emerald-600 to-teal-700',
    textColor: 'text-emerald-400',
    link: 'https://ziontechgroup.com/quantum-ready-security-framework',
    marketPosition: 'Leading edge quantum security; few competitors in post-quantum cryptography space.',
    targetAudience: 'Security architects, Compliance officers, Financial institutions',
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'IT Security',
    realService: true,
    technology: ['Python, Rust, OpenSSL, NIST PQC algorithms'],
    integrations: ['AWS KMS, Azure Key Vault, HashiCorp Vault'],
    useCases: ['Future-proof security, Compliance requirements, Quantum threat protection'],
    roi: 'Protect against future quantum threats and maintain compliance with emerging standards.',
    competitors: ['ISARA, PQShield, QuSecure'],
    marketSize: '$2.1B quantum security market',
    growthRate: '65% YoY',
    variant: 'quantum-security',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'NIST-approved post-quantum algorithms with hybrid encryption and automated key management.',
    launchDate: '2025-02-10',
    customers: 45,
    rating: 4.9,
    reviews: 32
  },
  {
    id: 'ai-powered-network-optimizer',
    name: 'AI-Powered Network Optimizer',
    tagline: 'Intelligent network optimization with machine learning-driven traffic analysis and automatic tuning',
    price: '$179',
    period: '/month',
    description: 'AI-driven network optimization platform that continuously analyzes network traffic patterns, automatically tunes configurations, and predicts potential issues before they impact performance.',
    features: [
      'ML-driven traffic analysis',
      'Automatic network tuning',
      'Predictive issue detection',
      'Performance optimization',
      'Real-time monitoring',
      'Automated troubleshooting',
      'Capacity planning insights',
      'Multi-vendor support'
    ],
    popular: true,
    icon: '📡',
    color: 'from-blue-600 to-cyan-700',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/ai-powered-network-optimizer',
    marketPosition: 'Advanced alternative to Cisco DNA, Aruba Central; adds AI-powered optimization and automation.',
    targetAudience: 'Network engineers, IT operations, Enterprise businesses',
    trialDays: 21,
    setupTime: '1 week',
    category: 'IT Infrastructure',
    realService: true,
    technology: ['Python, TensorFlow, Scikit-learn, SNMP, NetFlow'],
    integrations: ['Cisco, Aruba, Juniper, Meraki'],
    useCases: ['Network optimization, Performance improvement, Automated management'],
    roi: 'Improve network performance by 25-40% and reduce manual configuration by 60%.',
    competitors: ['Cisco DNA Center, Aruba Central, Juniper Mist'],
    marketSize: '$8.7B network management market',
    growthRate: '24% YoY',
    variant: 'network-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Machine learning models trained on network performance data and optimization patterns.',
    launchDate: '2025-01-30',
    customers: 89,
    rating: 4.7,
    reviews: 58
  },
  {
    id: 'zero-trust-access-platform',
    name: 'Zero Trust Access Platform',
    tagline: 'Comprehensive zero trust implementation with continuous verification and adaptive access control',
    price: '$299',
    period: '/month',
    description: 'Enterprise zero trust platform that implements continuous verification, adaptive access control, and micro-segmentation to provide secure access to applications and resources without traditional VPNs.',
    features: [
      'Continuous identity verification',
      'Adaptive access control',
      'Micro-segmentation',
      'Behavioral analytics',
      'Risk-based authentication',
      'Multi-factor authentication',
      'API security',
      'Compliance reporting'
    ],
    popular: true,
    icon: '🛡️',
    color: 'from-red-600 to-pink-700',
    textColor: 'text-red-400',
    link: 'https://ziontechgroup.com/zero-trust-access-platform',
    marketPosition: 'Competes with Okta, CrowdStrike; comprehensive zero trust with advanced behavioral analytics.',
    targetAudience: 'Security teams, IT administrators, Compliance officers',
    trialDays: 14,
    setupTime: '1 week',
    category: 'IT Security',
    realService: true,
    technology: ['Next.js, Node.js, Redis, PostgreSQL, OAuth 2.0'],
    integrations: ['Active Directory, Okta, Azure AD, Google Workspace'],
    useCases: ['Secure remote access, Identity management, Compliance'],
    roi: 'Reduce security incidents by 70-90% and improve compliance posture.',
    competitors: ['Okta, CrowdStrike, Zscaler, Palo Alto Networks'],
    marketSize: '$19.8B zero trust market',
    growthRate: '31% YoY',
    variant: 'security-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Zero trust architecture with continuous verification and adaptive access policies.',
    launchDate: '2025-02-05',
    customers: 156,
    rating: 4.8,
    reviews: 98
  },
  {
    id: 'intelligent-backup-orchestrator',
    name: 'Intelligent Backup Orchestrator',
    tagline: 'AI-driven backup optimization with intelligent scheduling and disaster recovery automation',
    price: '$129',
    period: '/month',
    description: 'Smart backup platform that uses AI to optimize backup schedules, predict storage needs, and automate disaster recovery processes while ensuring data integrity and compliance.',
    features: [
      'AI-driven backup scheduling',
      'Intelligent storage optimization',
      'Automated disaster recovery',
      'Data integrity verification',
      'Compliance automation',
      'Multi-cloud backup support',
      'Performance analytics',
      'Cost optimization'
    ],
    popular: false,
    icon: '💾',
    color: 'from-amber-600 to-orange-700',
    textColor: 'text-amber-400',
    link: 'https://ziontechgroup.com/intelligent-backup-orchestrator',
    marketPosition: 'Advanced alternative to Veeam, Commvault; adds AI optimization and automation.',
    targetAudience: 'IT administrators, DevOps engineers, Data protection teams',
    trialDays: 14,
    setupTime: '3 days',
    category: 'IT Infrastructure',
    realService: true,
    technology: ['Python, TensorFlow, Docker, Kubernetes, S3-compatible APIs'],
    integrations: ['AWS S3, Azure Blob, Google Cloud Storage, Veeam'],
    useCases: ['Data protection, Disaster recovery, Compliance'],
    roi: 'Reduce backup costs by 20-35% and improve recovery times by 50-70%.',
    competitors: ['Veeam, Commvault, Rubrik, Cohesity'],
    marketSize: '$11.2B backup and recovery market',
    growthRate: '19% YoY',
    variant: 'backup-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'AI-powered backup optimization with intelligent scheduling and automated recovery workflows.',
    launchDate: '2025-02-15',
    customers: 78,
    rating: 4.6,
    reviews: 45
  },
  {
    id: 'container-native-monitoring-suite',
    name: 'Container-Native Monitoring Suite',
    tagline: 'Kubernetes-native monitoring with distributed tracing and performance optimization',
    price: '$199',
    period: '/month',
    description: 'Container-native monitoring platform built specifically for Kubernetes environments, providing distributed tracing, performance metrics, and automated optimization recommendations.',
    features: [
      'Kubernetes-native monitoring',
      'Distributed tracing',
      'Performance optimization',
      'Automated scaling recommendations',
      'Resource utilization tracking',
      'Service mesh integration',
      'Custom metrics support',
      'Alert automation'
    ],
    popular: true,
    icon: '📊',
    color: 'from-green-600 to-emerald-700',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/container-native-monitoring-suite',
    marketPosition: 'Specialized Kubernetes monitoring; competes with Datadog, New Relic in container space.',
    targetAudience: 'DevOps engineers, Kubernetes administrators, Platform teams',
    trialDays: 14,
    setupTime: '2 days',
    category: 'IT Infrastructure',
    realService: true,
    technology: ['Go, Prometheus, Jaeger, Grafana, Kubernetes operators'],
    integrations: ['Kubernetes, Istio, Linkerd, Helm'],
    useCases: ['Container monitoring, Performance optimization, DevOps automation'],
    roi: 'Improve application performance by 20-35% and reduce incident response time by 40%.',
    competitors: ['Datadog, New Relic, Dynatrace, Splunk'],
    marketSize: '$6.8B container monitoring market',
    growthRate: '42% YoY',
    variant: 'monitoring-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Kubernetes-native monitoring with distributed tracing and automated optimization.',
    launchDate: '2025-01-20',
    customers: 134,
    rating: 4.7,
    reviews: 87
  }
];