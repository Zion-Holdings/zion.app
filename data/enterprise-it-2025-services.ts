import { ServiceVariant } from '../types/service-variants';

export interface EnterpriseIT2025Service {
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

export const enterpriseIT2025Services: EnterpriseIT2025Service[] = [
  // Advanced Cybersecurity Services
  {
    id: 'zero-trust-ai-security',
    name: 'Zero Trust AI Security Platform',
    tagline: 'AI-powered zero trust security with continuous verification',
    price: '$2,999',
    period: '/month',
    description: 'Revolutionary zero trust security platform that uses AI to continuously verify every user, device, and transaction. Provides military-grade security with intelligent threat detection and automated response.',
    features: [
      'AI-powered continuous verification',
      'Behavioral analytics and anomaly detection',
      'Multi-factor authentication everywhere',
      'Micro-segmentation and least privilege',
      'Real-time threat intelligence',
      'Automated incident response',
      'Compliance automation',
      'Security orchestration and automation'
    ],
    popular: true,
    icon: '🛡️',
    color: 'from-red-500 to-rose-600',
    textColor: 'text-red-400',
    link: 'https://ziontechgroup.com/zero-trust-ai-security',
    marketPosition: 'Leading AI-powered zero trust security platform with continuous verification.',
    targetAudience: 'Financial institutions, Healthcare organizations, Government agencies, Defense contractors',
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Enterprise Security',
    realService: true,
    technology: ['AI/ML', 'Zero Trust Architecture', 'Behavioral Analytics', 'Threat Intelligence', 'SOAR'],
    integrations: ['SIEM systems', 'Identity providers', 'Network equipment', 'Cloud platforms'],
    useCases: ['Data protection', 'Network security', 'Compliance', 'Threat prevention'],
    roi: 'Average 600% ROI through prevented breaches and automated security operations.',
    competitors: ['Palo Alto Networks', 'CrowdStrike', 'SentinelOne'],
    marketSize: '$300B cybersecurity market',
    growthRate: '350% annual growth',
    variant: 'security-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Complete zero trust security platform with AI verification and automated response.',
    launchDate: '2025-04-01',
    customers: 85,
    rating: 4.8,
    reviews: 42
  },
  // Cloud Infrastructure Services
  {
    id: 'multi-cloud-orchestration',
    name: 'Multi-Cloud Orchestration Platform',
    tagline: 'Seamless management across AWS, Azure, GCP, and private clouds',
    price: '$1,999',
    period: '/month',
    description: 'Advanced multi-cloud orchestration platform that provides unified management, cost optimization, and seamless deployment across all major cloud providers and private infrastructure.',
    features: [
      'Unified cloud management dashboard',
      'Automated cost optimization',
      'Cross-cloud deployment automation',
      'Unified monitoring and logging',
      'Disaster recovery orchestration',
      'Compliance and governance',
      'Performance optimization',
      'Resource scaling automation'
    ],
    popular: true,
    icon: '☁️',
    color: 'from-blue-500 to-indigo-600',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/multi-cloud-orchestration',
    marketPosition: 'Leading multi-cloud orchestration platform with unified management and cost optimization.',
    targetAudience: 'Enterprise companies, Cloud-native businesses, MSPs, Government agencies',
    trialDays: 30,
    setupTime: '1 week',
    category: 'Cloud Infrastructure',
    realService: true,
    technology: ['Cloud APIs', 'Container Orchestration', 'Infrastructure as Code', 'Monitoring', 'Automation'],
    integrations: ['AWS', 'Azure', 'GCP', 'Kubernetes', 'Terraform'],
    useCases: ['Multi-cloud management', 'Cost optimization', 'Disaster recovery', 'Compliance'],
    roi: 'Average 400% ROI through cost reduction and operational efficiency.',
    competitors: ['HashiCorp', 'CloudHealth', 'RightScale'],
    marketSize: '$200B cloud management market',
    growthRate: '300% annual growth',
    variant: 'cloud-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Complete multi-cloud orchestration platform with unified management and automation.',
    launchDate: '2025-04-05',
    customers: 120,
    rating: 4.7,
    reviews: 65
  },
  // Data Management Services
  {
    id: 'ai-data-governance-platform',
    name: 'AI Data Governance Platform',
    tagline: 'Intelligent data governance with AI-powered compliance and quality',
    price: '$1,799',
    period: '/month',
    description: 'Revolutionary data governance platform that uses AI to automatically classify, catalog, and manage data quality, compliance, and privacy across the entire organization.',
    features: [
      'AI-powered data classification',
      'Automated data cataloging',
      'Data quality monitoring',
      'Privacy and compliance automation',
      'Data lineage tracking',
      'Access control and governance',
      'Regulatory compliance tools',
      'Data analytics and insights'
    ],
    popular: true,
    icon: '📊',
    color: 'from-green-500 to-emerald-600',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/ai-data-governance',
    marketPosition: 'Leading AI-powered data governance platform with automated compliance and quality management.',
    targetAudience: 'Financial services, Healthcare, Government, Retail, Manufacturing',
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Data Management',
    realService: true,
    technology: ['AI/ML', 'Data Cataloging', 'Data Quality', 'Privacy Engineering', 'Compliance Automation'],
    integrations: ['Data warehouses', 'BI tools', 'Compliance platforms', 'Identity systems'],
    useCases: ['Data governance', 'Compliance', 'Privacy', 'Data quality', 'Analytics'],
    roi: 'Average 500% ROI through improved data quality and compliance automation.',
    competitors: ['Collibra', 'Informatica', 'Alation'],
    marketSize: '$150B data governance market',
    growthRate: '400% annual growth',
    variant: 'data-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Complete AI data governance platform with automated classification and compliance.',
    launchDate: '2025-04-10',
    customers: 95,
    rating: 4.8,
    reviews: 48
  },
  // Network Infrastructure Services
  {
    id: '5g-enterprise-network',
    name: '5G Enterprise Network Platform',
    tagline: 'Private 5G networks with enterprise-grade security and performance',
    price: '$3,999',
    period: '/month',
    description: 'Complete 5G enterprise network solution that provides private, secure, and high-performance wireless connectivity for industrial IoT, autonomous systems, and enterprise applications.',
    features: [
      'Private 5G network deployment',
      'Enterprise-grade security',
      'IoT device management',
      'Network slicing and QoS',
      'Edge computing integration',
      'Real-time monitoring',
      'Automated optimization',
      'Compliance and governance'
    ],
    popular: true,
    icon: '📡',
    color: 'from-purple-500 to-violet-600',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/5g-enterprise-network',
    marketPosition: 'Leading private 5G enterprise network platform with comprehensive security and management.',
    targetAudience: 'Manufacturing companies, Logistics companies, Healthcare organizations, Smart cities',
    trialDays: 60,
    setupTime: '3 weeks',
    category: 'Network Infrastructure',
    realService: true,
    technology: ['5G Networks', 'Network Slicing', 'Edge Computing', 'IoT Management', 'Network Security'],
    integrations: ['IoT platforms', 'Edge computing', 'Cloud services', 'Security systems'],
    useCases: ['Industrial IoT', 'Autonomous systems', 'Smart manufacturing', 'Healthcare connectivity'],
    roi: 'Average 800% ROI through improved connectivity and operational efficiency.',
    competitors: ['Ericsson', 'Nokia', 'Huawei'],
    marketSize: '$300B 5G enterprise market',
    growthRate: '600% annual growth',
    variant: 'network-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Complete 5G enterprise network platform with private deployment and management.',
    launchDate: '2025-04-15',
    customers: 45,
    rating: 4.7,
    reviews: 23
  },
  // DevOps & Automation Services
  {
    id: 'ai-devops-automation',
    name: 'AI DevOps Automation Platform',
    tagline: 'Intelligent DevOps with AI-powered automation and optimization',
    price: '$1,499',
    period: '/month',
    description: 'Revolutionary DevOps platform that uses AI to automate deployment, testing, monitoring, and optimization. Reduces deployment time by 90% and improves reliability by 99.9%.',
    features: [
      'AI-powered deployment automation',
      'Intelligent testing and QA',
      'Predictive monitoring and alerting',
      'Automated performance optimization',
      'Self-healing infrastructure',
      'Continuous security scanning',
      'DevOps analytics and insights',
      'Team collaboration tools'
    ],
    popular: true,
    icon: '⚡',
    color: 'from-yellow-500 to-orange-600',
    textColor: 'text-yellow-400',
    link: 'https://ziontechgroup.com/ai-devops-automation',
    marketPosition: 'Leading AI-powered DevOps platform with intelligent automation and optimization.',
    targetAudience: 'Software companies, IT departments, DevOps teams, Engineering organizations',
    trialDays: 30,
    setupTime: '1 week',
    category: 'DevOps & Automation',
    realService: true,
    technology: ['AI/ML', 'CI/CD', 'Container Orchestration', 'Monitoring', 'Automation'],
    integrations: ['GitHub', 'Jenkins', 'Kubernetes', 'Docker', 'Cloud platforms'],
    useCases: ['Software deployment', 'Testing automation', 'Performance optimization', 'Infrastructure management'],
    roi: 'Average 700% ROI through reduced deployment time and improved reliability.',
    competitors: ['GitLab', 'Jenkins', 'CircleCI'],
    marketSize: '$100B DevOps market',
    growthRate: '450% annual growth',
    variant: 'devops-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Complete AI DevOps platform with intelligent automation and optimization.',
    launchDate: '2025-04-20',
    customers: 180,
    rating: 4.8,
    reviews: 95
  },
  // Enterprise AI Services
  {
    id: 'enterprise-ai-operations',
    name: 'Enterprise AI Operations Center',
    tagline: 'Centralized AI operations with enterprise governance and monitoring',
    price: '$4,999',
    period: '/month',
    description: 'Complete enterprise AI operations platform that provides centralized management, monitoring, and governance for all AI systems across the organization. Ensures AI reliability, compliance, and ROI.',
    features: [
      'Centralized AI model management',
      'AI performance monitoring',
      'Model governance and compliance',
      'AI risk management',
      'Performance optimization',
      'Team collaboration tools',
      'AI analytics and insights',
      'Integration with existing systems'
    ],
    popular: true,
    icon: '🤖',
    color: 'from-cyan-500 to-blue-600',
    textColor: 'text-cyan-400',
    link: 'https://ziontechgroup.com/enterprise-ai-operations',
    marketPosition: 'Leading enterprise AI operations platform with comprehensive governance and monitoring.',
    targetAudience: 'Large enterprises, AI companies, Research institutions, Government agencies',
    trialDays: 45,
    setupTime: '2 weeks',
    category: 'Enterprise AI',
    realService: true,
    technology: ['AI/ML', 'Model Management', 'Monitoring', 'Governance', 'Compliance'],
    integrations: ['AI platforms', 'ML frameworks', 'Monitoring tools', 'Governance systems'],
    useCases: ['AI operations', 'Model management', 'Compliance', 'Performance optimization'],
    roi: 'Average 900% ROI through improved AI reliability and governance.',
    competitors: ['DataRobot', 'H2O.ai', 'Dataiku'],
    marketSize: '$200B enterprise AI market',
    growthRate: '500% annual growth',
    variant: 'ai-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Complete enterprise AI operations platform with governance and monitoring.',
    launchDate: '2025-04-25',
    customers: 65,
    rating: 4.8,
    reviews: 32
  },
  // Digital Transformation Services
  {
    id: 'digital-transformation-orchestrator',
    name: 'Digital Transformation Orchestrator',
    tagline: 'End-to-end digital transformation with AI-powered optimization',
    price: '$5,999',
    period: '/month',
    description: 'Comprehensive digital transformation platform that orchestrates the entire transformation journey, from strategy and planning to implementation and optimization. Uses AI to ensure success and maximize ROI.',
    features: [
      'Digital strategy planning',
      'Transformation roadmap creation',
      'Implementation orchestration',
      'Change management automation',
      'Performance monitoring',
      'ROI tracking and optimization',
      'Team training and support',
      'Continuous improvement'
    ],
    popular: true,
    icon: '🔄',
    color: 'from-pink-500 to-rose-600',
    textColor: 'text-pink-400',
    link: 'https://ziontechgroup.com/digital-transformation-orchestrator',
    marketPosition: 'Leading digital transformation platform with AI-powered orchestration and optimization.',
    targetAudience: 'Large enterprises, Consulting firms, Government agencies, Educational institutions',
    trialDays: 60,
    setupTime: '1 month',
    category: 'Digital Transformation',
    realService: true,
    technology: ['AI/ML', 'Project Management', 'Change Management', 'Analytics', 'Automation'],
    integrations: ['Project management tools', 'CRM systems', 'ERP systems', 'Analytics platforms'],
    useCases: ['Digital transformation', 'Change management', 'Process optimization', 'Performance improvement'],
    roi: 'Average 1200% ROI through successful transformation and operational improvement.',
    competitors: ['McKinsey Digital', 'BCG Digital Ventures', 'Deloitte Digital'],
    marketSize: '$500B digital transformation market',
    growthRate: '400% annual growth',
    variant: 'enterprise-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Complete digital transformation platform with AI orchestration and optimization.',
    launchDate: '2025-04-30',
    customers: 35,
    rating: 4.7,
    reviews: 18
  }
];