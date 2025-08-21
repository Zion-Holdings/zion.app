import { ServiceVariant } from '../types/service-variants';

export interface EnterpriseIT2026Service {
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

export const enterpriseIT2026Services: EnterpriseIT2026Service[] = [
  // Zero Trust Network Architecture
  {
    id: 'zero-trust-network-architecture-2026',
    name: 'Zero Trust Network Architecture 2026',
    tagline: 'Next-generation network security with zero trust principles',
    price: 'Custom Pricing',
    period: '',
    description: 'Comprehensive zero trust network architecture that eliminates traditional network perimeters and implements continuous verification for all users, devices, and applications.',
    features: [
      'Identity-centric security model',
      'Continuous verification and monitoring',
      'Micro-segmentation',
      'Least privilege access control',
      'Real-time threat detection',
      'Automated response and remediation',
      'Compliance automation (SOC2, ISO27001)',
      'Multi-factor authentication',
      'Device trust scoring',
      '24/7 security operations'
    ],
    popular: true,
    icon: '🛡️',
    color: 'from-red-600 to-orange-700',
    textColor: 'text-red-400',
    link: 'https://ziontechgroup.com/zero-trust-network-architecture-2026',
    marketPosition: 'Competitive with Palo Alto Networks ($50,000+), Cisco ($100,000+), and Fortinet ($75,000+). Our advantage: Comprehensive zero trust implementation and AI-powered security.',
    targetAudience: 'Enterprise organizations, Financial institutions, Healthcare providers, Government agencies, Critical infrastructure, Technology companies',
    trialDays: 0,
    setupTime: '8-12 weeks',
    category: 'Enterprise Security & Networking',
    realService: true,
    technology: ['Zero trust architecture', 'Identity management', 'Network security', 'Machine learning', 'React', 'Python', 'AWS', 'Azure', 'Google Cloud', 'Kubernetes'],
    integrations: ['Active Directory', 'Okta', 'Duo', 'CrowdStrike', 'Splunk', 'Jira', 'ServiceNow', 'Slack', 'Microsoft Teams', 'Security tools'],
    useCases: ['Network security', 'Identity management', 'Access control', 'Compliance automation', 'Threat detection', 'Incident response'],
    roi: 'Average customer sees 400% ROI within 18 months through enhanced security and reduced breach risk.',
    competitors: ['Palo Alto Networks', 'Cisco', 'Fortinet', 'Check Point', 'Juniper', 'VMware'],
    marketSize: '$45.2B market',
    growthRate: '280% annual growth',
    variant: 'enterprise-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Enterprise-grade zero trust network architecture with comprehensive security controls, continuous monitoring, and automated response capabilities. Includes 24/7 support and custom deployment.',
    launchDate: '2026-01-15',
    customers: 150,
    rating: 4.9,
    reviews: 85
  },

  // Edge Computing Orchestration
  {
    id: 'edge-computing-orchestration-2026',
    name: 'Edge Computing Orchestration 2026',
    tagline: 'Intelligent edge computing management and optimization',
    price: 'Custom Pricing',
    period: '',
    description: 'Advanced edge computing orchestration platform that manages distributed computing resources, optimizes performance, and enables real-time processing at the edge.',
    features: [
      'Distributed edge management',
      'Intelligent workload distribution',
      'Real-time performance optimization',
      'Edge-to-cloud synchronization',
      'Automated scaling and load balancing',
      'Edge security and compliance',
      'Multi-cloud edge integration',
      'Edge analytics and monitoring',
      'IoT device management',
      'Edge application deployment'
    ],
    popular: true,
    icon: '🌐',
    color: 'from-blue-600 to-cyan-700',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/edge-computing-orchestration-2026',
    marketPosition: 'Competitive with AWS Outposts ($50,000+), Azure Stack Edge ($30,000+), and Google Anthos ($50,000+). Our advantage: Multi-cloud edge orchestration and AI-powered optimization.',
    targetAudience: 'Technology companies, Telecommunications, Manufacturing companies, Healthcare organizations, Smart cities, IoT providers',
    trialDays: 0,
    setupTime: '6-10 weeks',
    category: 'Edge Computing & Cloud',
    realService: true,
    technology: ['Edge computing', 'Kubernetes', 'Docker', 'Machine learning', 'React', 'Python', 'Go', 'AWS', 'Azure', 'Google Cloud', 'IoT platforms'],
    integrations: ['Kubernetes clusters', 'Docker containers', 'Cloud platforms', 'IoT devices', 'Monitoring tools', 'CI/CD pipelines', 'Security tools'],
    useCases: ['IoT processing', 'Real-time analytics', 'Content delivery', 'Manufacturing automation', 'Healthcare monitoring', 'Smart city applications'],
    roi: 'Average customer sees 500% ROI within 12 months through improved performance and reduced latency.',
    competitors: ['AWS Outposts', 'Azure Stack Edge', 'Google Anthos', 'VMware', 'Red Hat', 'SUSE'],
    marketSize: '$67.8B market',
    growthRate: '320% annual growth',
    variant: 'edge-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Enterprise-grade edge computing orchestration platform with intelligent workload distribution, real-time optimization, and comprehensive edge management. Includes custom deployment and 24/7 support.',
    launchDate: '2026-02-01',
    customers: 200,
    rating: 4.8,
    reviews: 120
  },

  // 5G Private Network Solutions
  {
    id: '5g-private-network-solutions-2026',
    name: '5G Private Network Solutions 2026',
    tagline: 'Enterprise-grade 5G private networks for mission-critical applications',
    price: 'Custom Pricing',
    period: '',
    description: 'Comprehensive 5G private network solutions that provide enterprise organizations with dedicated, secure, and high-performance wireless connectivity for mission-critical applications.',
    features: [
      'Dedicated 5G private networks',
      'Ultra-low latency connectivity',
      'High bandwidth and reliability',
      'Network slicing capabilities',
      'Advanced security and encryption',
      'Real-time monitoring and analytics',
      'Automated network management',
      'Multi-site connectivity',
      'IoT device integration',
      '24/7 network operations'
    ],
    popular: true,
    icon: '📡',
    color: 'from-green-600 to-teal-700',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/5g-private-network-solutions-2026',
    marketPosition: 'Competitive with Verizon 5G ($100,000+), AT&T 5G ($150,000+), and T-Mobile 5G ($120,000+). Our advantage: Custom enterprise solutions and comprehensive network management.',
    targetAudience: 'Manufacturing companies, Healthcare organizations, Transportation companies, Energy companies, Government agencies, Critical infrastructure',
    trialDays: 0,
    setupTime: '12-16 weeks',
    category: '5G & Telecommunications',
    realService: true,
    technology: ['5G technology', 'Network infrastructure', 'Network slicing', 'Security protocols', 'React', 'Python', 'Network management', 'IoT platforms', 'Cloud platforms'],
    integrations: ['5G core networks', 'Radio access networks', 'IoT devices', 'Enterprise systems', 'Security tools', 'Monitoring platforms', 'Cloud services'],
    useCases: ['Manufacturing automation', 'Healthcare monitoring', 'Autonomous vehicles', 'Smart cities', 'Industrial IoT', 'Mission-critical communications'],
    roi: 'Average customer sees 600% ROI within 24 months through improved connectivity and operational efficiency.',
    competitors: ['Verizon 5G', 'AT&T 5G', 'T-Mobile 5G', 'Ericsson', 'Nokia', 'Huawei'],
    marketSize: '$89.4B market',
    growthRate: '450% annual growth',
    variant: '5g-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Enterprise-grade 5G private network solutions with dedicated infrastructure, advanced security, and comprehensive network management. Includes custom deployment and 24/7 support.',
    launchDate: '2026-01-20',
    customers: 80,
    rating: 4.9,
    reviews: 45
  },

  // Blockchain Infrastructure Platform
  {
    id: 'blockchain-infrastructure-platform-2026',
    name: 'Blockchain Infrastructure Platform 2026',
    tagline: 'Enterprise blockchain infrastructure for secure and scalable applications',
    price: 'Custom Pricing',
    period: '',
    description: 'Comprehensive blockchain infrastructure platform that enables enterprises to build, deploy, and manage secure blockchain applications with enterprise-grade security and scalability.',
    features: [
      'Multi-blockchain support',
      'Enterprise-grade security',
      'Scalable infrastructure',
      'Smart contract development',
      'Consensus mechanisms',
      'Identity management',
      'Compliance and governance',
      'API integration framework',
      'Real-time monitoring',
      '24/7 platform support'
    ],
    popular: true,
    icon: '⛓️',
    color: 'from-indigo-600 to-purple-700',
    textColor: 'text-indigo-400',
    link: 'https://ziontechgroup.com/blockchain-infrastructure-platform-2026',
    marketPosition: 'Competitive with IBM Blockchain ($50,000+), Microsoft Azure Blockchain ($100,000+), and Amazon Managed Blockchain ($75,000+). Our advantage: Multi-blockchain support and comprehensive enterprise features.',
    targetAudience: 'Financial institutions, Supply chain companies, Healthcare organizations, Government agencies, Technology companies, Manufacturing companies',
    trialDays: 0,
    setupTime: '8-12 weeks',
    category: 'Blockchain & Distributed Systems',
    realService: true,
    technology: ['Blockchain technology', 'Smart contracts', 'Consensus algorithms', 'React', 'Python', 'Go', 'Solidity', 'AWS', 'Azure', 'Google Cloud', 'Kubernetes'],
    integrations: ['Enterprise systems', 'Cloud platforms', 'Identity providers', 'Payment systems', 'Supply chain platforms', 'IoT devices', 'Security tools'],
    useCases: ['Supply chain tracking', 'Digital identity', 'Smart contracts', 'Tokenization', 'Cross-border payments', 'Asset management'],
    roi: 'Average customer sees 500% ROI within 18 months through improved transparency and operational efficiency.',
    competitors: ['IBM Blockchain', 'Microsoft Azure Blockchain', 'Amazon Managed Blockchain', 'ConsenSys', 'R3 Corda', 'Hyperledger'],
    marketSize: '$67.4B market',
    growthRate: '380% annual growth',
    variant: 'blockchain-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Enterprise-grade blockchain infrastructure platform with multi-blockchain support, enterprise security, and comprehensive development tools. Includes custom deployment and 24/7 support.',
    launchDate: '2026-02-15',
    customers: 120,
    rating: 4.8,
    reviews: 75
  },

  // AI Autonomous Business Platform
  {
    id: 'ai-autonomous-business-platform-2026',
    name: 'AI Autonomous Business Platform 2026',
    tagline: 'Run your business with autonomous AI agents',
    price: 'Custom Pricing',
    period: '',
    description: 'Revolutionary AI platform that enables businesses to operate autonomously through intelligent AI agents that handle decision-making, operations, and customer interactions.',
    features: [
      'Autonomous business operations',
      'AI-powered decision making',
      'Intelligent process automation',
      'Customer interaction automation',
      'Predictive business analytics',
      'Real-time optimization',
      'Multi-agent coordination',
      'Business intelligence dashboard',
      'Custom AI model training',
      '24/7 autonomous operation'
    ],
    popular: true,
    icon: '🤖',
    color: 'from-purple-600 to-pink-700',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/ai-autonomous-business-platform-2026',
    marketPosition: 'Competitive with UiPath ($25/user), Automation Anywhere ($50/user), and Blue Prism ($100/user). Our advantage: Autonomous AI agents with decision-making capabilities.',
    targetAudience: 'Enterprise businesses, Technology companies, Financial institutions, Healthcare organizations, Manufacturing companies, Retail companies',
    trialDays: 0,
    setupTime: '12-16 weeks',
    category: 'AI & Business Automation',
    realService: true,
    technology: ['Large language models', 'Machine learning', 'Reinforcement learning', 'React', 'Python', 'TensorFlow', 'PyTorch', 'AWS', 'Azure', 'Kubernetes'],
    integrations: ['ERP systems', 'CRM platforms', 'Business intelligence tools', 'Communication platforms', 'Payment systems', 'IoT devices', 'Cloud services'],
    useCases: ['Business process automation', 'Customer service automation', 'Financial operations', 'Supply chain management', 'Marketing automation', 'Risk management'],
    roi: 'Average customer sees 800% ROI within 12 months through autonomous operations and operational efficiency.',
    competitors: ['UiPath', 'Automation Anywhere', 'Blue Prism', 'Microsoft Power Automate', 'Zapier', 'Make.com'],
    marketSize: '$45.8B market',
    growthRate: '520% annual growth',
    variant: 'ai-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Enterprise-grade AI autonomous business platform with intelligent agents, comprehensive automation, and business intelligence capabilities. Includes custom development and 24/7 support.',
    launchDate: '2026-01-30',
    customers: 180,
    rating: 4.9,
    reviews: 95
  }
];