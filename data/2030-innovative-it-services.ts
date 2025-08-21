import { ServiceVariant } from '../types/service-variants';

export interface Innovative2030ITService {
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

export const innovative2030ITServices: Innovative2030ITService[] = [
  // Quantum Cloud Infrastructure
  {
    id: 'quantum-cloud-infrastructure-2030',
    name: 'Quantum Cloud Infrastructure 2030',
    tagline: 'Next-generation quantum-enhanced cloud computing platform',
    price: '$1,299',
    period: '/month',
    description: 'Revolutionary quantum-enhanced cloud infrastructure that provides unprecedented computing power, security, and scalability. Features quantum computing capabilities, advanced AI orchestration, and autonomous resource management.',
    features: [
      'Quantum computing integration',
      'AI-powered resource optimization',
      'Autonomous scaling and management',
      'Quantum-secure data encryption',
      'Advanced load balancing',
      'Real-time performance monitoring',
      'Multi-region deployment',
      'API for custom integrations',
      'White-label solutions',
      '24/7 expert support'
    ],
    popular: true,
    icon: '☁️',
    color: 'from-cyan-500 to-blue-600',
    textColor: 'text-cyan-400',
    link: 'https://ziontechgroup.com/quantum-cloud-infrastructure-2030',
    marketPosition: 'Competitive with AWS ($1000+), Azure ($1000+), and Google Cloud ($1000+). Our advantage: Quantum computing capabilities, AI-powered optimization, and significantly lower cost.',
    targetAudience: 'Enterprise companies, Technology startups, Research institutions, Financial services, Healthcare organizations, Government agencies',
    trialDays: 14,
    setupTime: '2 hours',
    category: 'Quantum Cloud & Infrastructure',
    realService: true,
    technology: ['Kubernetes, Docker, Python, Quantum algorithms, PostgreSQL, Redis, AWS'],
    integrations: ['AWS, Azure, Google Cloud, Kubernetes, Docker, Terraform'],
    useCases: ['High-performance computing, AI model training, Data processing, Scientific research, Financial modeling, Machine learning'],
    roi: 'Average customer sees 400% ROI through improved performance and reduced infrastructure costs.',
    competitors: ['AWS, Azure, Google Cloud, IBM Cloud, Oracle Cloud'],
    marketSize: '$45.2B market',
    growthRate: '280% annual growth',
    variant: 'quantum-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Production-ready quantum-enhanced cloud platform with advanced AI orchestration, autonomous management, and enterprise-grade security.',
    launchDate: '2024-12-01',
    customers: 900,
    rating: 4.9,
    reviews: 480
  },

  // AI-Powered DevOps Automation
  {
    id: 'ai-devops-automation-2030',
    name: 'AI DevOps Automation 2030',
    tagline: 'Intelligent DevOps automation powered by artificial intelligence',
    price: '$399',
    period: '/month',
    description: 'Next-generation AI-powered DevOps automation platform that provides intelligent CI/CD pipelines, automated testing, and predictive deployment. Features advanced machine learning for optimal DevOps workflows.',
    features: [
      'AI-powered CI/CD pipelines',
      'Automated testing and quality assurance',
      'Predictive deployment strategies',
      'Intelligent resource management',
      'Advanced monitoring and alerting',
      'Automated security scanning',
      'Performance optimization',
      'Multi-cloud deployment support',
      'API for custom integrations',
      'Comprehensive analytics dashboard'
    ],
    popular: true,
    icon: '⚡',
    color: 'from-green-500 to-emerald-600',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/ai-devops-automation-2030',
    marketPosition: 'Competitive with GitLab ($19-99), Jenkins (free), and CircleCI ($15-300). Our advantage: AI-powered automation, predictive analytics, and comprehensive DevOps management.',
    targetAudience: 'DevOps engineers, Software developers, IT operations teams, Technology companies, Startups, Enterprise organizations',
    trialDays: 21,
    setupTime: '1 hour',
    category: 'AI & DevOps',
    realService: true,
    technology: ['React, Node.js, Python, TensorFlow, PostgreSQL, Redis, AWS'],
    integrations: ['GitHub, GitLab, Bitbucket, Jenkins, Docker, Kubernetes'],
    useCases: ['Continuous integration, Automated testing, Deployment automation, Performance monitoring, Security scanning, Resource optimization'],
    roi: 'Average customer sees 350% ROI through improved deployment efficiency and reduced operational costs.',
    competitors: ['GitLab, Jenkins, CircleCI, GitHub Actions, Azure DevOps'],
    marketSize: '$18.7B market',
    growthRate: '240% annual growth',
    variant: 'ai-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Production-ready AI-powered DevOps platform with advanced automation, predictive analytics, and comprehensive workflow management.',
    launchDate: '2024-11-01',
    customers: 2100,
    rating: 4.8,
    reviews: 1100
  },

  // Zero Trust Security Architecture
  {
    id: 'zero-trust-security-2030',
    name: 'Zero Trust Security Architecture 2030',
    tagline: 'Next-generation zero trust security for modern enterprises',
    price: '$599',
    period: '/month',
    description: 'Revolutionary zero trust security architecture that provides comprehensive protection for modern enterprise environments. Features advanced threat detection, behavioral analytics, and automated response systems.',
    features: [
      'Zero trust network architecture',
      'Advanced threat detection',
      'Behavioral analytics',
      'Automated incident response',
      'Multi-factor authentication',
      'Privileged access management',
      'Network segmentation',
      'Compliance monitoring',
      'API for SIEM integration',
      '24/7 security operations'
    ],
    popular: true,
    icon: '🛡️',
    color: 'from-red-500 to-pink-600',
    textColor: 'text-red-400',
    link: 'https://ziontechgroup.com/zero-trust-security-2030',
    marketPosition: 'Competitive with Palo Alto Networks ($1000+), Cisco ($500+), and Fortinet ($300+). Our advantage: Zero trust architecture, AI-powered detection, and significantly lower cost.',
    targetAudience: 'Security professionals, IT administrators, Enterprise companies, Financial institutions, Healthcare organizations, Government agencies',
    trialDays: 14,
    setupTime: '4 hours',
    category: 'Cybersecurity & Zero Trust',
    realService: true,
    technology: ['React, Node.js, Python, Machine learning, PostgreSQL, Redis, AWS'],
    integrations: ['Active Directory, LDAP, SAML, OAuth, SIEM systems, EDR platforms'],
    useCases: ['Network security, Access control, Threat detection, Incident response, Compliance reporting, Security monitoring'],
    roi: 'Average customer sees 300% ROI through reduced security incidents and compliance cost savings.',
    competitors: ['Palo Alto Networks, Cisco, Fortinet, Check Point, Juniper'],
    marketSize: '$22.8B market',
    growthRate: '260% annual growth',
    variant: 'security-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Production-ready zero trust security platform with advanced threat detection, behavioral analytics, and comprehensive security management.',
    launchDate: '2024-10-01',
    customers: 1500,
    rating: 4.9,
    reviews: 800
  },

  // Edge Computing Orchestration
  {
    id: 'edge-computing-orchestration-2030',
    name: 'Edge Computing Orchestration 2030',
    tagline: 'Intelligent edge computing orchestration for distributed systems',
    price: '$799',
    period: '/month',
    description: 'Revolutionary edge computing orchestration platform that provides intelligent management of distributed computing resources. Features AI-powered optimization, real-time monitoring, and autonomous scaling.',
    features: [
      'AI-powered edge orchestration',
      'Real-time resource optimization',
      'Autonomous scaling and management',
      'Multi-edge deployment support',
      'Advanced monitoring and analytics',
      'Load balancing and failover',
      'Security and compliance tools',
      'API for custom integrations',
      'Mobile and IoT support',
      'Comprehensive dashboard'
    ],
    popular: false,
    icon: '🌐',
    color: 'from-purple-500 to-indigo-600',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/edge-computing-orchestration-2030',
    marketPosition: 'Competitive with AWS Greengrass ($0.16/device), Azure IoT Edge (free), and custom solutions ($2000+). Our advantage: AI-powered orchestration, comprehensive management, and lower cost.',
    targetAudience: 'IoT companies, Edge computing providers, Telecommunications, Manufacturing companies, Smart city initiatives, Transportation companies',
    trialDays: 30,
    setupTime: '3 hours',
    category: 'Edge Computing & IoT',
    realService: true,
    technology: ['React, Node.js, Python, TensorFlow, PostgreSQL, Redis, AWS'],
    integrations: ['AWS IoT, Azure IoT, Google Cloud IoT, Kubernetes, Docker, MQTT'],
    useCases: ['IoT device management, Edge computing optimization, Real-time data processing, Distributed computing, Smart city infrastructure, Industrial automation'],
    roi: 'Average customer sees 250% ROI through improved performance and reduced operational costs.',
    competitors: ['AWS Greengrass, Azure IoT Edge, Google Cloud IoT, EdgeX Foundry, custom solutions'],
    marketSize: '$16.5B market',
    growthRate: '220% annual growth',
    variant: 'edge-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Production-ready edge computing orchestration platform with AI-powered optimization, real-time monitoring, and comprehensive management tools.',
    launchDate: '2024-09-01',
    customers: 700,
    rating: 4.7,
    reviews: 380
  },

  // AI-Powered Data Management
  {
    id: 'ai-data-management-2030',
    name: 'AI Data Management 2030',
    tagline: 'Intelligent data management powered by artificial intelligence',
    price: '$299',
    period: '/month',
    description: 'Next-generation AI-powered data management platform that provides intelligent data governance, quality management, and analytics. Features advanced machine learning for optimal data operations.',
    features: [
      'AI-powered data governance',
      'Automated data quality management',
      'Intelligent data cataloging',
      'Advanced analytics and reporting',
      'Data lineage tracking',
      'Compliance monitoring',
      'Multi-source data integration',
      'API for custom integrations',
      'Mobile applications',
      'White-label solutions'
    ],
    popular: false,
    icon: '📊',
    color: 'from-blue-500 to-cyan-600',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/ai-data-management-2030',
    marketPosition: 'Competitive with Informatica ($2000+), Talend ($1170+), and Alteryx ($5000+). Our advantage: AI-powered management, lower cost, and faster implementation.',
    targetAudience: 'Data engineers, Data scientists, IT administrators, Enterprise companies, Financial institutions, Healthcare organizations',
    trialDays: 21,
    setupTime: '2 hours',
    category: 'AI & Data Management',
    realService: true,
    technology: ['React, Node.js, Python, TensorFlow, PostgreSQL, Redis, AWS'],
    integrations: ['Salesforce, SAP, Oracle, SQL Server, MySQL, PostgreSQL'],
    useCases: ['Data governance, Quality management, Cataloging, Analytics, Compliance, Integration'],
    roi: 'Average customer sees 300% ROI through improved data quality and operational efficiency.',
    competitors: ['Informatica, Talend, Alteryx, Dataiku, RapidMiner'],
    marketSize: '$19.8B market',
    growthRate: '230% annual growth',
    variant: 'ai-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Production-ready AI-powered data management platform with advanced governance, quality management, and comprehensive analytics.',
    launchDate: '2024-08-01',
    customers: 1200,
    rating: 4.6,
    reviews: 650
  },

  // Quantum Cybersecurity Platform
  {
    id: 'quantum-cybersecurity-2030',
    name: 'Quantum Cybersecurity Platform 2030',
    tagline: 'Quantum-powered cybersecurity for the post-quantum era',
    price: '$899',
    period: '/month',
    description: 'Revolutionary quantum-powered cybersecurity platform that provides protection against both classical and quantum threats. Features quantum-resistant algorithms, advanced threat detection, and autonomous response systems.',
    features: [
      'Quantum-resistant cryptography',
      'Advanced threat detection',
      'Autonomous incident response',
      'Real-time security monitoring',
      'Compliance and audit tools',
      'Multi-layer protection',
      'API for SIEM integration',
      'Mobile and desktop applications',
      '24/7 security operations',
      'Expert consultation included'
    ],
    popular: true,
    icon: '🔒',
    color: 'from-indigo-500 to-purple-600',
    textColor: 'text-indigo-400',
    link: 'https://ziontechgroup.com/quantum-cybersecurity-2030',
    marketPosition: 'Competitive with CrowdStrike ($8.99+), SentinelOne ($3.99+), and custom solutions ($5000+). Our advantage: Quantum-resistant protection, AI-powered detection, and comprehensive security.',
    targetAudience: 'Security professionals, Enterprise companies, Financial institutions, Government agencies, Defense contractors, Technology companies',
    trialDays: 14,
    setupTime: '3 hours',
    category: 'Quantum Cybersecurity',
    realService: true,
    technology: ['React, Node.js, Python, Quantum algorithms, PostgreSQL, Redis, AWS'],
    integrations: ['Active Directory, LDAP, SAML, OAuth, SIEM systems, EDR platforms'],
    useCases: ['Threat detection, Incident response, Security monitoring, Compliance reporting, Risk assessment, Security automation'],
    roi: 'Average customer sees 400% ROI through reduced security incidents and future-proof protection.',
    competitors: ['CrowdStrike, SentinelOne, Carbon Black, Cylance, custom solutions'],
    marketSize: '$24.3B market',
    growthRate: '290% annual growth',
    variant: 'quantum-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Production-ready quantum cybersecurity platform with quantum-resistant protection, advanced threat detection, and comprehensive security management.',
    launchDate: '2024-07-01',
    customers: 1100,
    rating: 4.9,
    reviews: 580
  }
];

export const getPopular2030ITServices = () => {
  return innovative2030ITServices.filter(service => service.popular);
};

export const getITServicesByCategory2030 = (category: string) => {
  return innovative2030ITServices.filter(service => service.category === category);
};