export interface SpecializedITService {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  price: {
    monthly: number;
    yearly: number;
    oneTime?: number;
    currency: string;
  };
  features: string[];
  benefits: string[];
  targetAudience: string[];
  useCases: string[];
  integration: string[];
  pricingTier: 'Starter' | 'Professional' | 'Enterprise' | 'Custom';
  website: string;
  contactInfo: {
    email: string;
    phone: string;
    address: string;
  };
  rating: number;
  reviewCount: number;
  launchDate: string;
  status: 'Active' | 'Beta' | 'Coming Soon';
  marketPrice: string;
  estimatedDelivery: string;
  supportLevel: string;
}

export const SPECIALIZED_IT_SERVICES: SpecializedITService[] = [
  // Cloud-Native Application Development
  {
    id: 'cloud-native-app-development',
    title: 'Zion Cloud-Native Application Development',
    description: 'Full-stack cloud-native application development services using modern technologies like Kubernetes, Docker, and serverless architectures.',
    category: 'Application Development',
    subcategory: 'Cloud-Native',
    price: {
      monthly: 0,
      yearly: 0,
      oneTime: 15000,
      currency: '$'
    },
    features: [
      'Microservices architecture',
      'Container orchestration',
      'Serverless functions',
      'CI/CD pipelines',
      'Auto-scaling',
      'Multi-cloud deployment',
      'Performance monitoring',
      'Security best practices'
    ],
    benefits: [
      'Faster time to market',
      'Improved scalability',
      'Better resource utilization',
      'Reduced operational costs',
      'Enhanced reliability'
    ],
    targetAudience: [
      'Startups',
      'Enterprise companies',
      'Digital agencies',
      'Product teams',
      'IT departments'
    ],
    useCases: [
      'Web applications',
      'Mobile apps',
      'API development',
      'E-commerce platforms',
      'Business applications'
    ],
    integration: [
      'AWS',
      'Azure',
      'Google Cloud',
      'Kubernetes',
      'Docker',
      'Jenkins',
      'GitHub'
    ],
    pricingTier: 'Custom',
    website: 'https://ziontechgroup.com/cloud-native-development',
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008, Middletown DE 19709'
    },
    rating: 4.9,
    reviewCount: 89,
    launchDate: '2024-01-01',
    status: 'Active',
    marketPrice: '$15,000 - $100,000+',
    estimatedDelivery: '8-16 weeks',
    supportLevel: 'premium'
  },

  // Data Center Modernization
  {
    id: 'data-center-modernization',
    title: 'Zion Data Center Modernization',
    description: 'Comprehensive data center modernization services including infrastructure upgrades, virtualization, and cloud migration strategies.',
    category: 'Infrastructure',
    subcategory: 'Data Center',
    price: {
      monthly: 0,
      yearly: 0,
      oneTime: 25000,
      currency: '$'
    },
    features: [
      'Infrastructure assessment',
      'Virtualization planning',
      'Cloud migration strategy',
      'Performance optimization',
      'Security hardening',
      'Disaster recovery',
      'Capacity planning',
      'Cost optimization'
    ],
    benefits: [
      'Improved performance',
      'Reduced operational costs',
      'Enhanced security',
      'Better scalability',
      'Increased reliability'
    ],
    targetAudience: [
      'Large enterprises',
      'Government agencies',
      'Healthcare organizations',
      'Financial institutions',
      'Educational institutions'
    ],
    useCases: [
      'Legacy system upgrades',
      'Cloud migration',
      'Performance optimization',
      'Security improvements',
      'Capacity expansion'
    ],
    integration: [
      'VMware',
      'Hyper-V',
      'AWS',
      'Azure',
      'Google Cloud',
      'Cisco',
      'Dell EMC'
    ],
    pricingTier: 'Custom',
    website: 'https://ziontechgroup.com/data-center-modernization',
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008, Middletown DE 19709'
    },
    rating: 4.8,
    reviewCount: 67,
    launchDate: '2024-01-15',
    status: 'Active',
    marketPrice: '$25,000 - $500,000+',
    estimatedDelivery: '12-24 weeks',
    supportLevel: 'premium'
  },

  // Network Security & Compliance
  {
    id: 'network-security-compliance',
    title: 'Zion Network Security & Compliance',
    description: 'Comprehensive network security services including firewall management, intrusion detection, and compliance monitoring for various regulatory frameworks.',
    category: 'Security',
    subcategory: 'Network Security',
    price: {
      monthly: 899,
      yearly: 8990,
      currency: '$'
    },
    features: [
      'Firewall management',
      'Intrusion detection',
      'Vulnerability scanning',
      'Compliance monitoring',
      'Security audits',
      'Incident response',
      'Security training',
      '24/7 monitoring'
    ],
    benefits: [
      'Enhanced security posture',
      'Regulatory compliance',
      'Reduced security risks',
      'Better threat detection',
      'Lower insurance costs'
    ],
    targetAudience: [
      'Financial institutions',
      'Healthcare organizations',
      'Government agencies',
      'Technology companies',
      'Educational institutions'
    ],
    useCases: [
      'PCI DSS compliance',
      'HIPAA compliance',
      'SOX compliance',
      'GDPR compliance',
      'General security'
    ],
    integration: [
      'Cisco ASA',
      'Palo Alto Networks',
      'Check Point',
      'Splunk',
      'Qualys',
      'Nessus'
    ],
    pricingTier: 'Enterprise',
    website: 'https://ziontechgroup.com/network-security',
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008, Middletown DE 19709'
    },
    rating: 4.9,
    reviewCount: 156,
    launchDate: '2024-01-10',
    status: 'Active',
    marketPrice: '$899 - $3,500/month',
    estimatedDelivery: '2-4 weeks',
    supportLevel: 'premium'
  },

  // Digital Transformation Consulting
  {
    id: 'digital-transformation-consulting',
    title: 'Zion Digital Transformation Consulting',
    description: 'Strategic digital transformation consulting services to help organizations modernize their operations, processes, and technology stack.',
    category: 'Consulting',
    subcategory: 'Digital Transformation',
    price: {
      monthly: 0,
      yearly: 0,
      oneTime: 5000,
      currency: '$'
    },
    features: [
      'Digital maturity assessment',
      'Strategy development',
      'Process optimization',
      'Technology roadmap',
      'Change management',
      'Training programs',
      'Implementation support',
      'Success metrics'
    ],
    benefits: [
      'Improved efficiency',
      'Better customer experience',
      'Increased competitiveness',
      'Cost optimization',
      'Future-ready organization'
    ],
    targetAudience: [
      'Mid-size companies',
      'Large enterprises',
      'Government agencies',
      'Non-profit organizations',
      'Educational institutions'
    ],
    useCases: [
      'Process automation',
      'Customer experience improvement',
      'Operational efficiency',
      'Technology modernization',
      'Cultural change'
    ],
    integration: [
      'Business process tools',
      'Project management',
      'Change management',
      'Training platforms',
      'Analytics tools'
    ],
    pricingTier: 'Custom',
    website: 'https://ziontechgroup.com/digital-transformation',
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008, Middletown DE 19709'
    },
    rating: 4.7,
    reviewCount: 78,
    launchDate: '2024-02-01',
    status: 'Active',
    marketPrice: '$5,000 - $50,000+',
    estimatedDelivery: '4-12 weeks',
    supportLevel: 'premium'
  },

  // IoT Platform Development
  {
    id: 'iot-platform-development',
    title: 'Zion IoT Platform Development',
    description: 'Custom IoT platform development services for collecting, analyzing, and managing data from connected devices and sensors.',
    category: 'IoT Development',
    subcategory: 'Platform Development',
    price: {
      monthly: 0,
      yearly: 0,
      oneTime: 20000,
      currency: '$'
    },
    features: [
      'Device connectivity',
      'Data collection',
      'Real-time analytics',
      'Device management',
      'Security protocols',
      'Scalable architecture',
      'Mobile applications',
      'API development'
    ],
    benefits: [
      'Real-time insights',
      'Operational efficiency',
      'Predictive maintenance',
      'Cost optimization',
      'Competitive advantage'
    ],
    targetAudience: [
      'Manufacturing companies',
      'Smart cities',
      'Healthcare organizations',
      'Retail chains',
      'Energy companies'
    ],
    useCases: [
      'Smart manufacturing',
      'Asset tracking',
      'Environmental monitoring',
      'Predictive maintenance',
      'Energy management'
    ],
    integration: [
      'MQTT',
      'HTTP/HTTPS',
      'CoAP',
      'AWS IoT',
      'Azure IoT',
      'Google Cloud IoT'
    ],
    pricingTier: 'Custom',
    website: 'https://ziontechgroup.com/iot-platform',
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008, Middletown DE 19709'
    },
    rating: 4.6,
    reviewCount: 45,
    launchDate: '2024-01-20',
    status: 'Active',
    marketPrice: '$20,000 - $150,000+',
    estimatedDelivery: '16-24 weeks',
    supportLevel: 'premium'
  },

  // API Development & Management
  {
    id: 'api-development-management',
    title: 'Zion API Development & Management',
    description: 'Comprehensive API development and management services including design, development, testing, and ongoing maintenance.',
    category: 'API Services',
    subcategory: 'Development & Management',
    price: {
      monthly: 599,
      yearly: 5990,
      currency: '$'
    },
    features: [
      'API design & architecture',
      'RESTful API development',
      'GraphQL APIs',
      'API testing',
      'Documentation',
      'Rate limiting',
      'Security implementation',
      'Performance monitoring'
    ],
    benefits: [
      'Faster integration',
      'Better scalability',
      'Improved security',
      'Reduced development time',
      'Enhanced user experience'
    ],
    targetAudience: [
      'Software companies',
      'E-commerce businesses',
      'Financial services',
      'Healthcare organizations',
      'Government agencies'
    ],
    useCases: [
      'Mobile app backends',
      'Third-party integrations',
      'Microservices',
      'Data sharing',
      'Partner integrations'
    ],
    integration: [
      'Swagger/OpenAPI',
      'Postman',
      'AWS API Gateway',
      'Azure API Management',
      'Kong',
      'Custom tools'
    ],
    pricingTier: 'Professional',
    website: 'https://ziontechgroup.com/api-development',
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008, Middletown DE 19709'
    },
    rating: 4.8,
    reviewCount: 123,
    launchDate: '2024-01-05',
    status: 'Active',
    marketPrice: '$599 - $2,500/month',
    estimatedDelivery: '2-4 weeks',
    supportLevel: 'premium'
  },

  // Database Optimization & Migration
  {
    id: 'database-optimization-migration',
    title: 'Zion Database Optimization & Migration',
    description: 'Database performance optimization, migration services, and ongoing maintenance for improved performance and reliability.',
    category: 'Database Services',
    subcategory: 'Optimization & Migration',
    price: {
      monthly: 799,
      yearly: 7990,
      currency: '$'
    },
    features: [
      'Performance analysis',
      'Query optimization',
      'Index optimization',
      'Migration planning',
      'Data validation',
      'Backup strategies',
      'Monitoring setup',
      'Performance tuning'
    ],
    benefits: [
      'Improved performance',
      'Reduced costs',
      'Better reliability',
      'Enhanced scalability',
      'Optimized storage'
    ],
    targetAudience: [
      'E-commerce businesses',
      'Financial services',
      'Healthcare organizations',
      'Technology companies',
      'Government agencies'
    ],
    useCases: [
      'Performance improvement',
      'Cloud migration',
      'Version upgrades',
      'Consolidation',
      'Disaster recovery'
    ],
    integration: [
      'MySQL',
      'PostgreSQL',
      'MongoDB',
      'Oracle',
      'SQL Server',
      'AWS RDS',
      'Azure SQL'
    ],
    pricingTier: 'Professional',
    website: 'https://ziontechgroup.com/database-optimization',
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008, Middletown DE 19709'
    },
    rating: 4.7,
    reviewCount: 89,
    launchDate: '2024-02-10',
    status: 'Active',
    marketPrice: '$799 - $3,000/month',
    estimatedDelivery: '2-4 weeks',
    supportLevel: 'premium'
  },

  // DevOps Automation & CI/CD
  {
    id: 'devops-automation-cicd',
    title: 'Zion DevOps Automation & CI/CD',
    description: 'Comprehensive DevOps automation services including CI/CD pipeline setup, infrastructure as code, and automated testing.',
    category: 'DevOps',
    subcategory: 'Automation & CI/CD',
    price: {
      monthly: 699,
      yearly: 6990,
      currency: '$'
    },
    features: [
      'CI/CD pipeline setup',
      'Infrastructure as code',
      'Automated testing',
      'Deployment automation',
      'Monitoring setup',
      'Security scanning',
      'Performance testing',
      'Rollback strategies'
    ],
    benefits: [
      'Faster deployments',
      'Reduced errors',
      'Better collaboration',
      'Improved quality',
      'Cost optimization'
    ],
    targetAudience: [
      'Development teams',
      'DevOps engineers',
      'IT operations',
      'Startups',
      'Enterprise companies'
    ],
    useCases: [
      'Application deployment',
      'Infrastructure management',
      'Testing automation',
      'Release management',
      'Performance monitoring'
    ],
    integration: [
      'Jenkins',
      'GitHub Actions',
      'GitLab CI',
      'Terraform',
      'Ansible',
      'Docker',
      'Kubernetes'
    ],
    pricingTier: 'Professional',
    website: 'https://ziontechgroup.com/devops-automation',
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008, Middletown DE 19709'
    },
    rating: 4.8,
    reviewCount: 134,
    launchDate: '2024-01-15',
    status: 'Active',
    marketPrice: '$699 - $2,500/month',
    estimatedDelivery: '2-3 weeks',
    supportLevel: 'premium'
  },

  // Mobile App Development
  {
    id: 'mobile-app-development',
    title: 'Zion Mobile App Development',
    description: 'Native and cross-platform mobile application development services for iOS and Android platforms with modern development practices.',
    category: 'Mobile Development',
    subcategory: 'App Development',
    price: {
      monthly: 0,
      yearly: 0,
      oneTime: 12000,
      currency: '$'
    },
    features: [
      'Native iOS development',
      'Native Android development',
      'Cross-platform development',
      'UI/UX design',
      'Testing & QA',
      'App store submission',
      'Maintenance & updates',
      'Performance optimization'
    ],
    benefits: [
      'Enhanced user experience',
      'Better performance',
      'Platform-specific features',
      'Faster development',
      'Cost optimization'
    ],
    targetAudience: [
      'Startups',
      'Small businesses',
      'Enterprise companies',
      'Digital agencies',
      'Product teams'
    ],
    useCases: [
      'Business applications',
      'E-commerce apps',
      'Social media apps',
      'Utility apps',
      'Entertainment apps'
    ],
    integration: [
      'React Native',
      'Flutter',
      'Swift',
      'Kotlin',
      'Firebase',
      'AWS Mobile',
      'Custom APIs'
    ],
    pricingTier: 'Custom',
    website: 'https://ziontechgroup.com/mobile-development',
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008, Middletown DE 19709'
    },
    rating: 4.9,
    reviewCount: 167,
    launchDate: '2024-01-01',
    status: 'Active',
    marketPrice: '$12,000 - $80,000+',
    estimatedDelivery: '8-16 weeks',
    supportLevel: 'premium'
  },

  // Cloud Migration Services
  {
    id: 'cloud-migration-services',
    title: 'Zion Cloud Migration Services',
    description: 'Comprehensive cloud migration services including assessment, planning, execution, and optimization for various cloud platforms.',
    category: 'Cloud Services',
    subcategory: 'Migration',
    price: {
      monthly: 0,
      yearly: 0,
      oneTime: 18000,
      currency: '$'
    },
    features: [
      'Migration assessment',
      'Strategy planning',
      'Application migration',
      'Data migration',
      'Testing & validation',
      'Performance optimization',
      'Cost optimization',
      'Training & support'
    ],
    benefits: [
      'Reduced infrastructure costs',
      'Improved scalability',
      'Better performance',
      'Enhanced security',
      'Increased flexibility'
    ],
    targetAudience: [
      'Enterprise companies',
      'Government agencies',
      'Healthcare organizations',
      'Financial institutions',
      'Educational institutions'
    ],
    useCases: [
      'Application migration',
      'Data center migration',
      'Hybrid cloud setup',
      'Multi-cloud strategy',
      'Disaster recovery'
    ],
    integration: [
      'AWS',
      'Azure',
      'Google Cloud',
      'VMware',
      'Docker',
      'Kubernetes',
      'Terraform'
    ],
    pricingTier: 'Custom',
    website: 'https://ziontechgroup.com/cloud-migration',
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008, Middletown DE 19709'
    },
    rating: 4.8,
    reviewCount: 98,
    launchDate: '2024-01-20',
    status: 'Active',
    marketPrice: '$18,000 - $200,000+',
    estimatedDelivery: '12-20 weeks',
    supportLevel: 'premium'
  }
];

export const SPECIALIZED_IT_CATEGORIES = [
  {
    label: 'Application Development',
    value: 'application-development',
    description: 'Custom application development services'
  },
  {
    label: 'Infrastructure',
    value: 'infrastructure',
    description: 'Infrastructure modernization and optimization'
  },
  {
    label: 'Security',
    value: 'security',
    description: 'Comprehensive security services and compliance'
  },
  {
    label: 'Consulting',
    value: 'consulting',
    description: 'Strategic technology consulting services'
  },
  {
    label: 'IoT Development',
    value: 'iot-development',
    description: 'Internet of Things platform development'
  },
  {
    label: 'API Services',
    value: 'api-services',
    description: 'API development and management services'
  },
  {
    label: 'Database Services',
    value: 'database-services',
    description: 'Database optimization and migration services'
  },
  {
    label: 'DevOps',
    value: 'devops',
    description: 'DevOps automation and CI/CD services'
  },
  {
    label: 'Mobile Development',
    value: 'mobile-development',
    description: 'Mobile application development services'
  },
  {
    label: 'Cloud Services',
    value: 'cloud-services',
    description: 'Cloud migration and optimization services'
  }
];

export const CONTACT_INFO = {
  mobile: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  address: "364 E Main St STE 1008, Middletown DE 19709",
  website: "https://ziontechgroup.com"
};