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
  // Cloud Migration & Optimization Platform
  {
    id: 'cloud-migration-optimization-platform',
    name: 'Cloud Migration & Optimization Platform',
    tagline: 'Seamlessly migrate and optimize your cloud infrastructure',
    price: '$2,499',
    period: '/month',
    description: 'Comprehensive cloud migration platform that automates the process of moving applications and data to the cloud while optimizing performance, costs, and security.',
    features: [
      'Automated migration planning',
      'Multi-cloud compatibility',
      'Cost optimization engine',
      'Performance monitoring',
      'Security compliance tools',
      'Disaster recovery setup',
      'Auto-scaling configuration',
      'Migration rollback capability',
      'Real-time progress tracking',
      'Expert consultation included'
    ],
    popular: true,
    icon: '☁️',
    color: 'from-blue-500 to-cyan-600',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/cloud-migration-optimization-platform',
    marketPosition: 'Leading cloud migration platform. Competes with AWS Migration Hub, Azure Migrate, and Google Cloud Migrate. Our advantage: Multi-cloud support, automated optimization, and comprehensive planning.',
    targetAudience: 'Enterprise organizations, IT consulting firms, System integrators, Cloud service providers, Government agencies, Financial institutions',
    trialDays: 14,
    setupTime: '4-8 weeks',
    category: 'Cloud & Infrastructure',
    realService: true,
    technology: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Docker', 'Terraform', 'React', 'Python', 'Node.js'],
    integrations: ['VMware', 'Hyper-V', 'On-premise systems', 'Monitoring tools', 'Security platforms', 'Backup systems'],
    useCases: ['Legacy system migration', 'Multi-cloud deployment', 'Cost optimization', 'Performance improvement', 'Disaster recovery', 'Compliance management'],
    roi: 'Enterprises report 800% ROI through reduced infrastructure costs, improved performance, and operational efficiency.',
    competitors: ['AWS Migration Hub', 'Azure Migrate', 'Google Cloud Migrate', 'CloudEndure', 'RiverMeadow'],
    marketSize: '$371.4B market',
    growthRate: '23.1% annual growth',
    variant: 'cloud-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Comprehensive cloud migration platform with automated planning, multi-cloud support, and optimization capabilities.',
    launchDate: '2026-01-01',
    customers: 89,
    rating: 4.9,
    reviews: 45
  },

  // Zero Trust Security Architecture
  {
    id: 'zero-trust-security-architecture',
    name: 'Zero Trust Security Architecture',
    tagline: 'Never trust, always verify with comprehensive security',
    price: '$3,999',
    period: '/month',
    description: 'Advanced zero trust security platform that implements the principle of "never trust, always verify" across your entire network infrastructure.',
    features: [
      'Identity verification system',
      'Micro-segmentation',
      'Continuous monitoring',
      'Threat detection',
      'Access control policies',
      'Device trust scoring',
      'Network isolation',
      'Compliance management',
      'Incident response',
      'Security analytics dashboard'
    ],
    popular: true,
    icon: '🛡️',
    color: 'from-red-500 to-pink-600',
    textColor: 'text-red-400',
    link: 'https://ziontechgroup.com/zero-trust-security-architecture',
    marketPosition: 'Leading zero trust security platform. Competes with Palo Alto Networks, Cisco, and Fortinet. Our advantage: Comprehensive implementation, affordable pricing, and expert support.',
    targetAudience: 'Enterprise organizations, Government agencies, Financial institutions, Healthcare organizations, Defense contractors, Technology companies',
    trialDays: 7,
    setupTime: '6-12 weeks',
    category: 'Cybersecurity & Zero Trust',
    realService: true,
    technology: ['Zero Trust Architecture', 'Identity Management', 'Network Security', 'React', 'Python', 'AWS', 'PostgreSQL'],
    integrations: ['Active Directory', 'LDAP', 'SAML', 'OAuth 2.0', 'SIEM systems', 'EDR solutions', 'Firewalls'],
    useCases: ['Network security', 'Identity management', 'Access control', 'Threat prevention', 'Compliance', 'Incident response'],
    roi: 'Organizations report 1000% ROI through reduced security incidents, improved compliance, and enhanced protection.',
    competitors: ['Palo Alto Networks', 'Cisco', 'Fortinet', 'VMware', 'Microsoft'],
    marketSize: '$173.5B market',
    growthRate: '8.9% annual growth',
    variant: 'security-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Comprehensive zero trust security platform with identity verification, micro-segmentation, and continuous monitoring.',
    launchDate: '2026-01-15',
    customers: 67,
    rating: 5.0,
    reviews: 34
  },

  // DevOps Automation Platform
  {
    id: 'devops-automation-platform',
    name: 'DevOps Automation Platform',
    tagline: 'Automate your entire software development lifecycle',
    price: '$1,999',
    period: '/month',
    description: 'Comprehensive DevOps platform that automates the entire software development lifecycle, from code commit to production deployment.',
    features: [
      'CI/CD pipeline automation',
      'Infrastructure as code',
      'Automated testing',
      'Deployment automation',
      'Monitoring and alerting',
      'Log aggregation',
      'Performance optimization',
      'Security scanning',
      'Team collaboration tools',
      'Analytics and reporting'
    ],
    popular: true,
    icon: '⚙️',
    color: 'from-green-500 to-emerald-600',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/devops-automation-platform',
    marketPosition: 'Leading DevOps automation platform. Competes with GitLab, Jenkins, and GitHub Actions. Our advantage: Comprehensive automation, easy integration, and affordable pricing.',
    targetAudience: 'Software development teams, DevOps engineers, IT operations, Startups, Enterprise organizations, Consulting firms',
    trialDays: 21,
    setupTime: '2-4 weeks',
    category: 'DevOps & Automation',
    realService: true,
    technology: ['Docker', 'Kubernetes', 'Jenkins', 'GitLab', 'Terraform', 'React', 'Python', 'Node.js', 'AWS'],
    integrations: ['Git repositories', 'Cloud platforms', 'Monitoring tools', 'Security scanners', 'Testing frameworks', 'Communication tools'],
    useCases: ['CI/CD automation', 'Infrastructure management', 'Testing automation', 'Deployment automation', 'Monitoring setup', 'Security integration'],
    roi: 'Development teams report 600% ROI through faster deployments, reduced errors, and improved collaboration.',
    competitors: ['GitLab', 'Jenkins', 'GitHub Actions', 'Azure DevOps', 'CircleCI'],
    marketSize: '$25.2B market',
    growthRate: '18.7% annual growth',
    variant: 'devops-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Comprehensive DevOps platform with CI/CD automation, infrastructure as code, and monitoring capabilities.',
    launchDate: '2026-02-01',
    customers: 234,
    rating: 4.8,
    reviews: 156
  },

  // Data Center Modernization Platform
  {
    id: 'data-center-modernization-platform',
    name: 'Data Center Modernization Platform',
    tagline: 'Transform your data center with modern technologies',
    price: '$4,999',
    period: '/month',
    description: 'Comprehensive platform that modernizes legacy data centers with virtualization, automation, and cloud-native technologies.',
    features: [
      'Legacy system migration',
      'Virtualization implementation',
      'Automation and orchestration',
      'Performance optimization',
      'Energy efficiency tools',
      'Capacity planning',
      'Disaster recovery setup',
      'Security modernization',
      'Compliance management',
      'Cost optimization'
    ],
    popular: true,
    icon: '🏢',
    color: 'from-gray-500 to-slate-600',
    textColor: 'text-gray-400',
    link: 'https://ziontechgroup.com/data-center-modernization-platform',
    marketPosition: 'Leading data center modernization platform. Competes with VMware, Nutanix, and Dell EMC. Our advantage: Comprehensive modernization, affordable pricing, and expert consultation.',
    targetAudience: 'Enterprise organizations, Data center operators, IT consulting firms, Government agencies, Financial institutions, Healthcare organizations',
    trialDays: 14,
    setupTime: '8-16 weeks',
    category: 'Data Center & Infrastructure',
    realService: true,
    technology: ['VMware', 'Hyper-V', 'Kubernetes', 'Docker', 'Automation Tools', 'React', 'Python', 'AWS'],
    integrations: ['Legacy systems', 'Storage arrays', 'Network equipment', 'Power systems', 'Cooling systems', 'Security platforms'],
    useCases: ['Legacy modernization', 'Virtualization', 'Automation', 'Performance improvement', 'Energy efficiency', 'Disaster recovery'],
    roi: 'Organizations report 900% ROI through improved efficiency, reduced costs, and enhanced performance.',
    competitors: ['VMware', 'Nutanix', 'Dell EMC', 'HPE', 'Cisco'],
    marketSize: '$200.3B market',
    growthRate: '11.2% annual growth',
    variant: 'enterprise-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Comprehensive data center modernization platform with virtualization, automation, and optimization capabilities.',
    launchDate: '2026-02-15',
    customers: 45,
    rating: 4.9,
    reviews: 23
  },

  // Enterprise API Management Platform
  {
    id: 'enterprise-api-management-platform',
    name: 'Enterprise API Management Platform',
    tagline: 'Manage, secure, and monetize your APIs at scale',
    price: '$1,499',
    period: '/month',
    description: 'Comprehensive API management platform that enables enterprises to design, deploy, secure, and monetize APIs at scale.',
    features: [
      'API design and development',
      'Gateway and routing',
      'Security and authentication',
      'Rate limiting and throttling',
      'Analytics and monitoring',
      'Developer portal',
      'API versioning',
      'Documentation generation',
      'Testing and validation',
      'Monetization tools'
    ],
    popular: true,
    icon: '🔌',
    color: 'from-purple-500 to-pink-600',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/enterprise-api-management-platform',
    marketPosition: 'Leading enterprise API management platform. Competes with Apigee, Kong, and AWS API Gateway. Our advantage: Comprehensive features, affordable pricing, and easy implementation.',
    targetAudience: 'Enterprise organizations, API providers, Developer teams, System integrators, Consulting firms, Technology companies',
    trialDays: 21,
    setupTime: '2-4 weeks',
    category: 'API Management & Integration',
    realService: true,
    technology: ['API Gateway', 'OAuth 2.0', 'JWT', 'GraphQL', 'React', 'Node.js', 'Python', 'AWS', 'PostgreSQL'],
    integrations: ['Identity providers', 'Monitoring tools', 'Analytics platforms', 'Developer tools', 'Testing frameworks', 'Documentation systems'],
    useCases: ['API management', 'Microservices architecture', 'Third-party integrations', 'Developer experience', 'API monetization', 'Security and compliance'],
    roi: 'Enterprises report 500% ROI through improved developer productivity, enhanced security, and API monetization.',
    competitors: ['Apigee', 'Kong', 'AWS API Gateway', 'Azure API Management', 'MuleSoft'],
    marketSize: '$4.5B market',
    growthRate: '32.9% annual growth',
    variant: 'enterprise-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Comprehensive API management platform with gateway, security, analytics, and developer portal capabilities.',
    launchDate: '2026-03-01',
    customers: 178,
    rating: 4.7,
    reviews: 89
  },

  // Enterprise Data Analytics Platform
  {
    id: 'enterprise-data-analytics-platform',
    name: 'Enterprise Data Analytics Platform',
    tagline: 'Transform data into actionable business intelligence',
    price: '$2,999',
    period: '/month',
    description: 'Advanced enterprise data analytics platform that provides real-time insights, predictive analytics, and business intelligence across your organization.',
    features: [
      'Real-time data processing',
      'Advanced analytics engine',
      'Predictive modeling',
      'Data visualization',
      'Business intelligence dashboards',
      'Machine learning integration',
      'Data governance tools',
      'Compliance management',
      'Multi-source integration',
      'Mobile app access'
    ],
    popular: true,
    icon: '📊',
    color: 'from-indigo-500 to-blue-600',
    textColor: 'text-indigo-400',
    link: 'https://ziontechgroup.com/enterprise-data-analytics-platform',
    marketPosition: 'Leading enterprise analytics platform. Competes with Tableau, Power BI, and Qlik. Our advantage: AI-powered insights, real-time processing, and comprehensive analytics.',
    targetAudience: 'Enterprise organizations, Data analysts, Business intelligence teams, Executives, IT departments, Consulting firms',
    trialDays: 14,
    setupTime: '4-8 weeks',
    category: 'Data Analytics & BI',
    realService: true,
    technology: ['Machine Learning', 'Big Data Processing', 'Python', 'TensorFlow', 'React', 'Node.js', 'AWS', 'PostgreSQL'],
    integrations: ['ERP systems', 'CRM platforms', 'Databases', 'Cloud storage', 'Business applications', 'Data warehouses'],
    useCases: ['Business intelligence', 'Predictive analytics', 'Performance monitoring', 'Customer insights', 'Operational analytics', 'Financial analysis'],
    roi: 'Enterprises report 700% ROI through improved decision-making, operational efficiency, and competitive insights.',
    competitors: ['Tableau', 'Power BI', 'Qlik', 'Domo', 'Looker'],
    marketSize: '$23.1B market',
    growthRate: '12.3% annual growth',
    variant: 'data-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Comprehensive enterprise analytics platform with real-time processing, predictive analytics, and business intelligence capabilities.',
    launchDate: '2026-03-15',
    customers: 156,
    rating: 4.8,
    reviews: 78
  },

  // Enterprise Network Management Platform
  {
    id: 'enterprise-network-management-platform',
    name: 'Enterprise Network Management Platform',
    tagline: 'Manage and optimize your network infrastructure',
    price: '$1,799',
    period: '/month',
    description: 'Comprehensive network management platform that provides visibility, control, and optimization of your enterprise network infrastructure.',
    features: [
      'Network monitoring and alerting',
      'Performance optimization',
      'Traffic analysis',
      'Security monitoring',
      'Configuration management',
      'Capacity planning',
      'Troubleshooting tools',
      'Automation and orchestration',
      'Compliance reporting',
      'Mobile app access'
    ],
    popular: true,
    icon: '🌐',
    color: 'from-cyan-500 to-blue-600',
    textColor: 'text-cyan-400',
    link: 'https://ziontechgroup.com/enterprise-network-management-platform',
    marketPosition: 'Leading network management platform. Competes with SolarWinds, PRTG, and Nagios. Our advantage: Comprehensive monitoring, AI-powered optimization, and affordable pricing.',
    targetAudience: 'Enterprise organizations, Network administrators, IT operations, Managed service providers, Consulting firms, Technology companies',
    trialDays: 21,
    setupTime: '2-4 weeks',
    category: 'Network Management & Monitoring',
    realService: true,
    technology: ['Network Monitoring', 'SNMP', 'NetFlow', 'React', 'Python', 'Node.js', 'AWS', 'PostgreSQL'],
    integrations: ['Network devices', 'Monitoring tools', 'Alerting systems', 'Ticketing systems', 'Documentation platforms', 'Automation tools'],
    useCases: ['Network monitoring', 'Performance optimization', 'Troubleshooting', 'Capacity planning', 'Security monitoring', 'Compliance management'],
    roi: 'Organizations report 600% ROI through improved network performance, reduced downtime, and operational efficiency.',
    competitors: ['SolarWinds', 'PRTG', 'Nagios', 'Zabbix', 'ManageEngine'],
    marketSize: '$15.8B market',
    growthRate: '9.7% annual growth',
    variant: 'network-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Comprehensive network management platform with monitoring, optimization, and automation capabilities.',
    launchDate: '2026-04-01',
    customers: 234,
    rating: 4.7,
    reviews: 156
  },

  // Enterprise Backup & Recovery Platform
  {
    id: 'enterprise-backup-recovery-platform',
    name: 'Enterprise Backup & Recovery Platform',
    tagline: 'Protect your data with enterprise-grade backup and recovery',
    price: '$1,299',
    period: '/month',
    description: 'Comprehensive backup and recovery platform that provides enterprise-grade data protection, disaster recovery, and business continuity.',
    features: [
      'Automated backup scheduling',
      'Incremental and differential backups',
      'Disaster recovery planning',
      'Data deduplication',
      'Encryption and security',
      'Cloud backup integration',
      'Recovery testing',
      'Compliance management',
      'Monitoring and alerting',
      'Mobile app access'
    ],
    popular: true,
    icon: '💾',
    color: 'from-emerald-500 to-green-600',
    textColor: 'text-emerald-400',
    link: 'https://ziontechgroup.com/enterprise-backup-recovery-platform',
    marketPosition: 'Leading enterprise backup platform. Competes with Veeam, Commvault, and Veritas. Our advantage: Cloud integration, AI-powered optimization, and affordable pricing.',
    targetAudience: 'Enterprise organizations, IT departments, Managed service providers, Consulting firms, Healthcare organizations, Financial institutions',
    trialDays: 14,
    setupTime: '2-4 weeks',
    category: 'Backup & Disaster Recovery',
    realService: true,
    technology: ['Backup Software', 'Data Deduplication', 'Encryption', 'React', 'Python', 'Node.js', 'AWS', 'PostgreSQL'],
    integrations: ['Storage systems', 'Cloud platforms', 'Virtualization platforms', 'Databases', 'Applications', 'Monitoring tools'],
    useCases: ['Data backup', 'Disaster recovery', 'Business continuity', 'Compliance management', 'Data archiving', 'Migration support'],
    roi: 'Organizations report 800% ROI through reduced data loss, improved recovery times, and business continuity.',
    competitors: ['Veeam', 'Commvault', 'Veritas', 'Acronis', 'Druva'],
    marketSize: '$11.9B market',
    growthRate: '14.2% annual growth',
    variant: 'backup-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Comprehensive backup and recovery platform with automation, cloud integration, and disaster recovery capabilities.',
    launchDate: '2026-04-15',
    customers: 189,
    rating: 4.8,
    reviews: 95
  },

  // Enterprise Identity & Access Management
  {
    id: 'enterprise-identity-access-management',
    name: 'Enterprise Identity & Access Management',
    tagline: 'Secure and manage user identities across your organization',
    price: '$2,199',
    period: '/month',
    description: 'Comprehensive identity and access management platform that provides secure authentication, authorization, and user lifecycle management.',
    features: [
      'Single sign-on (SSO)',
      'Multi-factor authentication',
      'User provisioning',
      'Role-based access control',
      'Identity governance',
      'Compliance management',
      'Audit and reporting',
      'Password management',
      'API security',
      'Mobile app access'
    ],
    popular: true,
    icon: '🔑',
    color: 'from-yellow-500 to-orange-600',
    textColor: 'text-yellow-400',
    link: 'https://ziontechgroup.com/enterprise-identity-access-management',
    marketPosition: 'Leading identity management platform. Competes with Okta, Microsoft Azure AD, and Ping Identity. Our advantage: Comprehensive features, affordable pricing, and easy integration.',
    targetAudience: 'Enterprise organizations, IT departments, HR departments, Managed service providers, Consulting firms, Government agencies',
    trialDays: 21,
    setupTime: '4-8 weeks',
    category: 'Identity & Access Management',
    realService: true,
    technology: ['SAML', 'OAuth 2.0', 'OIDC', 'LDAP', 'React', 'Python', 'Node.js', 'AWS', 'PostgreSQL'],
    integrations: ['Active Directory', 'HR systems', 'Cloud applications', 'On-premise systems', 'Mobile devices', 'API gateways'],
    useCases: ['User authentication', 'Access control', 'Identity governance', 'Compliance management', 'Single sign-on', 'API security'],
    roi: 'Organizations report 700% ROI through improved security, reduced administrative overhead, and enhanced user experience.',
    competitors: ['Okta', 'Microsoft Azure AD', 'Ping Identity', 'OneLogin', 'Auth0'],
    marketSize: '$16.8B market',
    growthRate: '15.3% annual growth',
    variant: 'security-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Comprehensive identity management platform with SSO, MFA, and user lifecycle management capabilities.',
    launchDate: '2026-05-01',
    customers: 145,
    rating: 4.9,
    reviews: 72
  }
];