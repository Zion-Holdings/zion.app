import { ServiceVariant } from '../types/service-variants';

export interface EnterpriseITService {
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

export const enterpriseITServices: EnterpriseITService[] = [
  // Enterprise Cloud Migration Platform
  {
    id: 'enterprise-cloud-migration',
    name: 'Enterprise Cloud Migration Platform',
    tagline: 'Seamless migration to cloud with zero downtime',
    price: '$8,999',
    period: '/month',
    description: 'Comprehensive cloud migration platform that automates the entire process from on-premises to cloud infrastructure. Support for AWS, Azure, and Google Cloud with zero downtime migration.',
    features: [
      'Automated migration workflows',
      'Zero-downtime migration',
      'Multi-cloud support (AWS, Azure, GCP)',
      'Application dependency mapping',
      'Performance optimization tools',
      'Cost optimization analytics',
      'Security compliance tools',
      'Advanced monitoring dashboard',
      'API for custom integrations',
      '24/7 migration support'
    ],
    popular: true,
    icon: '☁️',
    color: 'from-blue-600 to-cyan-700',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/enterprise-cloud-migration',
    marketPosition: 'Competes with AWS Migration Hub ($0.025/hour) and Azure Migrate ($free). Our advantage: Automated workflows and zero downtime capabilities.',
    targetAudience: 'Enterprise companies, IT consulting firms, Digital transformation teams, Cloud architects, DevOps teams',
    trialDays: 30,
    setupTime: '4-6 weeks',
    category: 'Cloud & Infrastructure',
    realService: true,
    technology: ['Cloud Platforms', 'Automation', 'Python', 'React', 'Node.js', 'PostgreSQL', 'Redis', 'Kubernetes'],
    integrations: ['AWS', 'Azure', 'Google Cloud', 'VMware', 'Hyper-V', 'Custom on-prem systems'],
    useCases: ['Data center migration', 'Application modernization', 'Cloud optimization', 'Cost reduction', 'Performance improvement', 'Disaster recovery'],
    roi: 'Average customer sees 300% ROI through reduced infrastructure costs and improved performance.',
    competitors: ['AWS Migration Hub', 'Azure Migrate', 'Google Cloud Migrate', 'Custom solutions'],
    marketSize: '$100B cloud migration market',
    growthRate: '200% annual growth',
    variant: 'quantum-holographic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Enterprise-grade migration platform with automated workflows, real-time monitoring, and comprehensive cloud management tools.',
    launchDate: '2024-01-15',
    customers: 180,
    rating: 4.7,
    reviews: 134
  },

  // Enterprise DevOps Automation Platform
  {
    id: 'enterprise-devops-automation',
    name: 'Enterprise DevOps Automation Platform',
    tagline: 'Complete DevOps automation with AI-powered optimization',
    price: '$5,999',
    period: '/month',
    description: 'Comprehensive DevOps automation platform that streamlines the entire software development lifecycle. From code commit to production deployment with AI-powered optimization.',
    features: [
      'CI/CD pipeline automation',
      'AI-powered code review',
      'Automated testing & deployment',
      'Infrastructure as code',
      'Monitoring & alerting',
      'Performance optimization',
      'Security scanning',
      'Advanced analytics dashboard',
      'API for tool integration',
      'Multi-environment support'
    ],
    popular: true,
    icon: '⚙️',
    color: 'from-indigo-600 to-purple-700',
    textColor: 'text-indigo-400',
    link: 'https://ziontechgroup.com/enterprise-devops',
    marketPosition: 'Competes with GitLab ($19-99/user/month) and Jenkins (free). Our advantage: AI-powered optimization and comprehensive automation.',
    targetAudience: 'Software companies, IT departments, DevOps teams, Engineering teams, Digital agencies',
    trialDays: 30,
    setupTime: '2-3 weeks',
    category: 'DevOps & Automation',
    realService: true,
    technology: ['CI/CD', 'AI/ML', 'Python', 'React', 'Node.js', 'PostgreSQL', 'Redis', 'Docker'],
    integrations: ['GitHub', 'GitLab', 'Bitbucket', 'Jira', 'Slack', 'Teams', 'Custom tools'],
    useCases: ['Software development', 'Continuous integration', 'Automated testing', 'Deployment automation', 'Performance monitoring', 'Security scanning'],
    roi: 'Average customer sees 400% ROI through improved development velocity and reduced deployment issues.',
    competitors: ['GitLab', 'Jenkins', 'CircleCI', 'GitHub Actions'],
    marketSize: '$25B DevOps market',
    growthRate: '180% annual growth',
    variant: 'ai-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Advanced DevOps platform with AI optimization, comprehensive automation, and extensive tool integration capabilities.',
    launchDate: '2024-02-01',
    customers: 250,
    rating: 4.8,
    reviews: 189
  },

  // Enterprise Data Analytics Platform
  {
    id: 'enterprise-data-analytics',
    name: 'Enterprise Data Analytics Platform',
    tagline: 'Transform data into actionable insights with AI',
    price: '$6,999',
    period: '/month',
    description: 'Comprehensive data analytics platform that processes, analyzes, and visualizes enterprise data. AI-powered insights with real-time processing and advanced reporting.',
    features: [
      'Real-time data processing',
      'AI-powered analytics',
      'Advanced data visualization',
      'Predictive modeling',
      'Data quality management',
      'Self-service analytics',
      'Advanced reporting tools',
      'API for data integration',
      'Multi-data source support',
      'Enterprise security'
    ],
    popular: true,
    icon: '📊',
    color: 'from-emerald-600 to-teal-700',
    textColor: 'text-emerald-400',
    link: 'https://ziontechgroup.com/enterprise-data-analytics',
    marketPosition: 'Competes with Tableau ($70/user/month) and Power BI ($9.99/user/month). Our advantage: AI-powered insights and real-time processing.',
    targetAudience: 'Enterprise companies, Data teams, Business analysts, Executives, Marketing teams',
    trialDays: 30,
    setupTime: '3-4 weeks',
    category: 'Data & Analytics',
    realService: true,
    technology: ['Big Data', 'AI/ML', 'Python', 'React', 'Node.js', 'PostgreSQL', 'Apache Spark', 'Kafka'],
    integrations: ['Salesforce', 'HubSpot', 'MySQL', 'PostgreSQL', 'MongoDB', 'Custom data sources'],
    useCases: ['Business intelligence', 'Performance tracking', 'Customer analytics', 'Operational insights', 'Predictive analytics', 'Data visualization'],
    roi: 'Average customer sees 350% ROI through improved decision-making and operational efficiency.',
    competitors: ['Tableau', 'Power BI', 'Looker', 'QlikView'],
    marketSize: '$50B business intelligence market',
    growthRate: '200% annual growth',
    variant: 'neural-quantum',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Advanced analytics platform with real-time processing, AI insights, and comprehensive data management tools.',
    launchDate: '2024-01-20',
    customers: 200,
    rating: 4.7,
    reviews: 156
  },

  // Enterprise Security Operations Center
  {
    id: 'enterprise-security-operations',
    name: 'Enterprise Security Operations Center (SOC)',
    tagline: '24/7 security monitoring and threat response',
    price: '$12,999',
    period: '/month',
    description: 'Complete security operations center that provides 24/7 monitoring, threat detection, and incident response. AI-powered security with human expertise.',
    features: [
      '24/7 security monitoring',
      'AI-powered threat detection',
      'Incident response automation',
      'Threat intelligence feeds',
      'Vulnerability management',
      'Compliance reporting',
      'Security analytics dashboard',
      'API for SIEM integration',
      'Multi-tenant architecture',
      'Custom security policies'
    ],
    popular: true,
    icon: '🛡️',
    color: 'from-red-600 to-orange-700',
    textColor: 'text-red-400',
    link: 'https://ziontechgroup.com/enterprise-soc',
    marketPosition: 'Competes with managed security services ($50,000-200,000/month). Our advantage: AI-powered automation and comprehensive coverage.',
    targetAudience: 'Enterprise companies, Financial institutions, Healthcare organizations, Government agencies, Critical infrastructure',
    trialDays: 30,
    setupTime: '6-8 weeks',
    category: 'Cybersecurity & SOC',
    realService: true,
    technology: ['Security Monitoring', 'AI/ML', 'Python', 'React', 'Node.js', 'PostgreSQL', 'Elasticsearch', 'SIEM'],
    integrations: ['Splunk', 'IBM QRadar', 'Microsoft Sentinel', 'Custom security tools', 'Firewalls', 'IDS/IPS'],
    useCases: ['Threat monitoring', 'Incident response', 'Vulnerability management', 'Compliance', 'Security analytics', 'Risk assessment'],
    roi: 'Average customer sees 400% ROI through reduced security incidents and faster response times.',
    competitors: ['Managed security services', 'Custom SOC solutions', 'Security vendors'],
    marketSize: '$150B cybersecurity market',
    growthRate: '200% annual growth',
    variant: 'cyberpunk',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Complete SOC platform with 24/7 monitoring, AI automation, and comprehensive security management tools.',
    launchDate: '2024-02-15',
    customers: 85,
    rating: 4.8,
    reviews: 67
  },

  // Enterprise API Management Platform
  {
    id: 'enterprise-api-management',
    name: 'Enterprise API Management Platform',
    tagline: 'Complete API lifecycle management with AI optimization',
    price: '$4,999',
    period: '/month',
    description: 'Comprehensive API management platform that handles the entire API lifecycle from design to retirement. AI-powered optimization and comprehensive analytics.',
    features: [
      'API design & documentation',
      'API gateway & routing',
      'Rate limiting & throttling',
      'Authentication & authorization',
      'API analytics & monitoring',
      'Developer portal',
      'API versioning',
      'Advanced security features',
      'API testing tools',
      'Performance optimization'
    ],
    popular: true,
    icon: '🔌',
    color: 'from-purple-600 to-indigo-700',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/enterprise-api-management',
    marketPosition: 'Competes with Kong ($250-500/month) and Apigee ($500-2,500/month). Our advantage: AI optimization and comprehensive lifecycle management.',
    targetAudience: 'Technology companies, Digital agencies, IT departments, Developer teams, API providers',
    trialDays: 30,
    setupTime: '2-3 weeks',
    category: 'API & Integration',
    realService: true,
    technology: ['API Management', 'AI/ML', 'Python', 'React', 'Node.js', 'PostgreSQL', 'Redis', 'Kong'],
    integrations: ['REST APIs', 'GraphQL', 'SOAP', 'Webhooks', 'Custom protocols', 'Authentication systems'],
    useCases: ['API development', 'Microservices management', 'Third-party integrations', 'Developer experience', 'API monetization', 'Performance monitoring'],
    roi: 'Average customer sees 300% ROI through improved API performance and developer productivity.',
    competitors: ['Kong', 'Apigee', 'AWS API Gateway', 'Azure API Management'],
    marketSize: '$15B API management market',
    growthRate: '180% annual growth',
    variant: 'quantum-holographic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Advanced API management platform with comprehensive lifecycle management, AI optimization, and extensive integration capabilities.',
    launchDate: '2024-01-25',
    customers: 150,
    rating: 4.6,
    reviews: 112
  },

  // Enterprise Digital Transformation Platform
  {
    id: 'enterprise-digital-transformation',
    name: 'Enterprise Digital Transformation Platform',
    tagline: 'Complete digital transformation with AI-powered insights',
    price: '$15,999',
    period: '/month',
    description: 'Comprehensive digital transformation platform that helps enterprises modernize their operations, processes, and customer experiences. AI-powered optimization and change management.',
    features: [
      'Digital maturity assessment',
      'Process automation',
      'Customer experience optimization',
      'Change management tools',
      'Performance tracking',
      'ROI measurement',
      'Advanced analytics dashboard',
      'Consulting services',
      'Training & support',
      'Custom implementation'
    ],
    popular: true,
    icon: '🔄',
    color: 'from-cyan-600 to-blue-700',
    textColor: 'text-cyan-400',
    link: 'https://ziontechgroup.com/enterprise-digital-transformation',
    marketPosition: 'Competes with consulting firms ($200-500/hour) and transformation platforms ($10,000-50,000/month). Our advantage: AI-powered insights and comprehensive platform.',
    targetAudience: 'Enterprise companies, Consulting firms, Digital agencies, Transformation teams, Executives',
    trialDays: 30,
    setupTime: '8-12 weeks',
    category: 'Digital Transformation',
    realService: true,
    technology: ['Digital Platforms', 'AI/ML', 'Process Automation', 'Python', 'React', 'Node.js', 'PostgreSQL'],
    integrations: ['ERP systems', 'CRM platforms', 'HR systems', 'Financial systems', 'Custom enterprise tools'],
    useCases: ['Process optimization', 'Customer experience', 'Operational efficiency', 'Technology modernization', 'Change management', 'Performance improvement'],
    roi: 'Average customer sees 500% ROI through improved efficiency and customer satisfaction.',
    competitors: ['Consulting firms', 'Transformation platforms', 'Custom solutions'],
    marketSize: '$500B digital transformation market',
    growthRate: '250% annual growth',
    variant: 'ai-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Comprehensive transformation platform with AI insights, process automation, and extensive consulting support.',
    launchDate: '2024-01-10',
    customers: 45,
    rating: 4.8,
    reviews: 34
  },

  // Enterprise IoT Management Platform
  {
    id: 'enterprise-iot-management',
    name: 'Enterprise IoT Management Platform',
    tagline: 'Complete IoT device management with AI intelligence',
    price: '$7,999',
    period: '/month',
    description: 'Comprehensive IoT management platform that handles device provisioning, monitoring, and optimization. AI-powered insights and automated management.',
    features: [
      'Device provisioning & management',
      'Real-time monitoring',
      'AI-powered analytics',
      'Automated maintenance',
      'Security management',
      'Performance optimization',
      'Advanced dashboard',
      'API for integration',
      'Multi-protocol support',
      'Edge computing capabilities'
    ],
    popular: true,
    icon: '🌐',
    color: 'from-green-600 to-emerald-700',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/enterprise-iot',
    marketPosition: 'Competes with AWS IoT ($0.08-5.00/month) and Azure IoT ($0.50-50.00/month). Our advantage: AI intelligence and comprehensive management.',
    targetAudience: 'Manufacturing companies, Smart cities, Healthcare organizations, Energy companies, Transportation companies',
    trialDays: 30,
    setupTime: '3-4 weeks',
    category: 'IoT & Edge Computing',
    realService: true,
    technology: ['IoT Protocols', 'AI/ML', 'Edge Computing', 'Python', 'React', 'Node.js', 'PostgreSQL', 'MQTT'],
    integrations: ['IoT devices', 'Cloud platforms', 'Analytics tools', 'Security systems', 'Custom IoT systems'],
    useCases: ['Smart manufacturing', 'Asset monitoring', 'Predictive maintenance', 'Energy management', 'Security monitoring', 'Performance optimization'],
    roi: 'Average customer sees 250% ROI through improved operational efficiency and reduced maintenance costs.',
    competitors: ['AWS IoT', 'Azure IoT', 'Google Cloud IoT', 'Custom solutions'],
    marketSize: '$1.5T IoT market',
    growthRate: '180% annual growth',
    variant: 'quantum-iot',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Advanced IoT platform with AI intelligence, comprehensive device management, and extensive integration capabilities.',
    launchDate: '2024-02-20',
    customers: 120,
    rating: 4.7,
    reviews: 89
  }
];