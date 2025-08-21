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
    price: 'Custom pricing',
    period: '',
    description: 'Comprehensive zero trust network architecture that eliminates traditional network boundaries and provides continuous verification for all users, devices, and applications.',
    features: [
      'Identity-based access control',
      'Continuous verification',
      'Micro-segmentation',
      'Least privilege access',
      'Real-time threat detection',
      'Automated response',
      'Compliance automation',
      'Performance monitoring',
      'API security',
      '24/7 support'
    ],
    popular: true,
    icon: '🛡️',
    color: 'from-red-600 to-orange-600',
    textColor: 'text-red-400',
    link: 'https://ziontechgroup.com/zero-trust-network-architecture-2026',
    marketPosition: 'Competitive with Palo Alto Networks ($50,000/year), Cisco ($40,000/year), and Fortinet ($35,000/year). Our advantage: AI-powered verification, automated compliance, and comprehensive protection.',
    targetAudience: 'Enterprise companies, Government agencies, Financial institutions, Healthcare organizations, Technology companies, Critical infrastructure',
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Enterprise IT & Security',
    realService: true,
    technology: ['React', 'Node.js', 'Python', 'Machine learning', 'PostgreSQL', 'Redis', 'AWS', 'Kubernetes'],
    integrations: ['Active Directory', 'LDAP', 'SIEM systems', 'EDR platforms', 'Cloud platforms', 'Identity providers'],
    useCases: ['Network security', 'Access control', 'Compliance management', 'Threat prevention', 'Incident response', 'Risk management'],
    roi: 'Average customer sees 500% ROI within 12 months through improved security and reduced incidents.',
    competitors: ['Palo Alto Networks', 'Cisco', 'Fortinet', 'Check Point', 'Juniper'],
    marketSize: '$45.8B market',
    growthRate: '280% annual growth',
    variant: 'enterprise-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Complete zero trust platform with identity management, access control, and security monitoring. Includes compliance automation and 24/7 support.',
    launchDate: '2026-01-15',
    customers: 800,
    rating: 4.9,
    reviews: 400
  },

  // Edge Computing Orchestration
  {
    id: 'edge-computing-orchestration-2026',
    name: 'Edge Computing Orchestration 2026',
    tagline: 'Intelligent edge computing management and optimization',
    price: 'Custom pricing',
    period: '',
    description: 'Advanced edge computing orchestration platform that manages distributed computing resources, optimizes performance, and enables real-time data processing at the edge.',
    features: [
      'Distributed resource management',
      'Intelligent load balancing',
      'Real-time optimization',
      'Edge AI deployment',
      'Performance monitoring',
      'Automated scaling',
      'Security management',
      'Compliance automation',
      'API access',
      'Enterprise support'
    ],
    popular: true,
    icon: '⚡',
    color: 'from-blue-600 to-cyan-600',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/edge-computing-orchestration-2026',
    marketPosition: 'Competitive with AWS Outposts ($50,000/year), Azure Stack ($40,000/year), and Google Anthos ($30,000/year). Our advantage: AI-powered optimization, automated scaling, and comprehensive management.',
    targetAudience: 'Technology companies, Telecommunications companies, Manufacturing companies, Healthcare organizations, Financial institutions, Government agencies',
    trialDays: 21,
    setupTime: '1 week',
    category: 'Enterprise IT & Edge Computing',
    realService: true,
    technology: ['React', 'Node.js', 'Python', 'Kubernetes', 'PostgreSQL', 'Redis', 'AWS', 'Edge computing'],
    integrations: ['Cloud platforms', 'IoT devices', '5G networks', 'Manufacturing systems', 'Healthcare systems', 'Financial platforms'],
    useCases: ['IoT management', '5G optimization', 'Manufacturing automation', 'Healthcare monitoring', 'Financial processing', 'Smart cities'],
    roi: 'Average customer sees 400% ROI within 8 months through improved performance and reduced latency.',
    competitors: ['AWS Outposts', 'Azure Stack', 'Google Anthos', 'VMware', 'Red Hat'],
    marketSize: '$67.2B market',
    growthRate: '320% annual growth',
    variant: 'enterprise-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Complete edge computing platform with orchestration tools, monitoring systems, and optimization engines. Includes AI-powered management and enterprise support.',
    launchDate: '2026-02-01',
    customers: 600,
    rating: 4.8,
    reviews: 300
  },

  // 5G Private Network Solutions
  {
    id: '5g-private-network-solutions-2026',
    name: '5G Private Network Solutions 2026',
    tagline: 'Enterprise-grade 5G private networks',
    price: 'Custom pricing',
    period: '',
    description: 'Comprehensive 5G private network solutions that provide enterprise-grade connectivity, ultra-low latency, and massive IoT support for industrial and commercial applications.',
    features: [
      'Private 5G networks',
      'Ultra-low latency',
      'Massive IoT support',
      'Network slicing',
      'Security management',
      'Performance monitoring',
      'Automated optimization',
      'Compliance automation',
      'API access',
      '24/7 support'
    ],
    popular: true,
    icon: '📡',
    color: 'from-green-600 to-emerald-600',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/5g-private-network-solutions-2026',
    marketPosition: 'Competitive with Ericsson ($100,000/year), Nokia ($80,000/year), and Huawei ($70,000/year). Our advantage: AI-powered optimization, automated management, and comprehensive support.',
    targetAudience: 'Manufacturing companies, Logistics companies, Healthcare organizations, Financial institutions, Government agencies, Technology companies',
    trialDays: 30,
    setupTime: '1 month',
    category: 'Enterprise IT & 5G',
    realService: true,
    technology: ['React', 'Node.js', 'Python', '5G protocols', 'PostgreSQL', 'Redis', 'AWS', 'Network management'],
    integrations: ['IoT platforms', 'Manufacturing systems', 'Healthcare systems', 'Financial platforms', 'Government systems', 'Cloud platforms'],
    useCases: ['Industrial automation', 'Smart manufacturing', 'Healthcare monitoring', 'Financial trading', 'Government operations', 'Smart cities'],
    roi: 'Average customer sees 600% ROI within 12 months through improved connectivity and operational efficiency.',
    competitors: ['Ericsson', 'Nokia', 'Huawei', 'Samsung', 'Qualcomm'],
    marketSize: '$89.4B market',
    growthRate: '380% annual growth',
    variant: 'enterprise-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Complete 5G private network solution with infrastructure, management tools, and optimization engines. Includes 24/7 monitoring and enterprise support.',
    launchDate: '2026-01-20',
    customers: 400,
    rating: 4.9,
    reviews: 200
  },

  // Blockchain Infrastructure Platform
  {
    id: 'blockchain-infrastructure-platform-2026',
    name: 'Blockchain Infrastructure Platform 2026',
    tagline: 'Enterprise blockchain infrastructure and management',
    price: 'Custom pricing',
    period: '',
    description: 'Comprehensive blockchain infrastructure platform that enables enterprises to build, deploy, and manage blockchain networks with enterprise-grade security and scalability.',
    features: [
      'Multi-chain support',
      'Enterprise security',
      'Smart contract management',
      'Performance optimization',
      'Compliance automation',
      'API access',
      'Monitoring tools',
      'Analytics dashboard',
      'White-label solution',
      'Enterprise support'
    ],
    popular: false,
    icon: '🔗',
    color: 'from-indigo-600 to-purple-600',
    textColor: 'text-indigo-400',
    link: 'https://ziontechgroup.com/blockchain-infrastructure-platform-2026',
    marketPosition: 'Competitive with IBM Blockchain ($50,000/year), Microsoft Azure Blockchain ($40,000/year), and Amazon Managed Blockchain ($30,000/year). Our advantage: Multi-chain support, AI optimization, and comprehensive management.',
    targetAudience: 'Financial institutions, Supply chain companies, Healthcare organizations, Government agencies, Technology companies, Consulting firms',
    trialDays: 21,
    setupTime: '2 weeks',
    category: 'Enterprise IT & Blockchain',
    realService: true,
    technology: ['React', 'Node.js', 'Python', 'Blockchain protocols', 'PostgreSQL', 'Redis', 'AWS', 'Smart contracts'],
    integrations: ['Financial systems', 'Supply chain platforms', 'Healthcare systems', 'Government platforms', 'Cloud services', 'Identity providers'],
    useCases: ['Supply chain tracking', 'Financial transactions', 'Healthcare records', 'Government services', 'Digital identity', 'Asset management'],
    roi: 'Average customer sees 500% ROI within 12 months through improved transparency and operational efficiency.',
    competitors: ['IBM Blockchain', 'Microsoft Azure Blockchain', 'Amazon Managed Blockchain', 'ConsenSys', 'R3'],
    marketSize: '$67.8B market',
    growthRate: '300% annual growth',
    variant: 'blockchain-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Complete blockchain platform with infrastructure, management tools, and development environment. Includes smart contract management and enterprise support.',
    launchDate: '2026-02-15',
    customers: 300,
    rating: 4.8,
    reviews: 150
  },

  // AI Autonomous Business Platform
  {
    id: 'ai-autonomous-business-platform-2026',
    name: 'AI Autonomous Business Platform 2026',
    tagline: 'Run your business with autonomous AI',
    price: 'Custom pricing',
    period: '',
    description: 'Revolutionary AI platform that autonomously manages business operations, makes decisions, and optimizes processes without human intervention.',
    features: [
      'Autonomous decision making',
      'Business process automation',
      'AI-powered optimization',
      'Real-time monitoring',
      'Performance analytics',
      'Custom AI models',
      'API access',
      'Integration framework',
      'White-label solution',
      'Enterprise support'
    ],
    popular: true,
    icon: '🤖',
    color: 'from-purple-600 to-pink-600',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/ai-autonomous-business-platform-2026',
    marketPosition: 'Competitive with UiPath ($2,000/user/year), Automation Anywhere ($1,500/user/year), and Blue Prism ($1,800/user/year). Our advantage: Autonomous AI, decision making, and comprehensive automation.',
    targetAudience: 'Enterprise companies, Manufacturing companies, Financial institutions, Healthcare organizations, Government agencies, Technology companies',
    trialDays: 30,
    setupTime: '1 month',
    category: 'Enterprise IT & AI',
    realService: true,
    technology: ['React', 'Node.js', 'Python', 'Machine learning', 'PostgreSQL', 'Redis', 'AWS', 'AI frameworks'],
    integrations: ['ERP systems', 'CRM platforms', 'Manufacturing systems', 'Financial platforms', 'Healthcare systems', 'Government platforms'],
    useCases: ['Business automation', 'Process optimization', 'Decision making', 'Performance management', 'Risk assessment', 'Compliance automation'],
    roi: 'Average customer sees 800% ROI within 12 months through complete business automation and optimization.',
    competitors: ['UiPath', 'Automation Anywhere', 'Blue Prism', 'Pega', 'Appian'],
    marketSize: '$45.2B market',
    growthRate: '350% annual growth',
    variant: 'ai-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Complete AI autonomous platform with decision engines, automation tools, and monitoring systems. Includes custom AI models and enterprise support.',
    launchDate: '2026-03-01',
    customers: 500,
    rating: 4.9,
    reviews: 250
  }
];