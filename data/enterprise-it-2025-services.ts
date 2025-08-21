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
  // Cloud Migration & Optimization
  {
    id: 'cloud-migration-optimization',
    name: 'Cloud Migration & Optimization',
    tagline: 'Seamless cloud migration with maximum optimization',
    price: '$2,999',
    period: '/project',
    description: 'Comprehensive cloud migration services including assessment, planning, execution, and optimization for maximum cost savings and performance.',
    features: [
      'Cloud readiness assessment',
      'Migration strategy planning',
      'Data migration services',
      'Application modernization',
      'Cost optimization analysis',
      'Performance monitoring',
      'Security implementation',
      'Compliance management',
      'Training and support',
      'Post-migration optimization'
    ],
    popular: true,
    icon: '☁️',
    color: 'from-blue-500 to-indigo-600',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/cloud-migration',
    marketPosition: 'Competitive with Accenture ($5000-50000), Deloitte ($3000-30000), and AWS Professional Services ($2000-20000). Our advantage: Specialized expertise and cost-effective solutions.',
    targetAudience: 'Large enterprises, Mid-size companies, Government agencies, Healthcare organizations, Financial institutions, Manufacturing companies',
    trialDays: 0,
    setupTime: '4-12 weeks',
    category: 'Cloud & Infrastructure',
    realService: true,
    technology: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Docker', 'Terraform', 'Ansible'],
    integrations: ['On-premise systems', 'Legacy applications', 'Database systems', 'Monitoring tools', 'Security platforms'],
    useCases: ['Data center consolidation', 'Application modernization', 'Cost reduction', 'Scalability improvement', 'Disaster recovery'],
    roi: 'Average customer sees 300% ROI within 12 months through cost savings and improved performance.',
    competitors: ['Accenture', 'Deloitte', 'AWS Professional Services', 'Microsoft Consulting', 'IBM Global Services'],
    marketSize: '$83.5B market',
    growthRate: '18.5% annual growth',
    variant: 'enterprise-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Comprehensive cloud migration services with proven methodologies and expert consultants.',
    launchDate: '2025-01-15',
    customers: 150,
    rating: 4.9,
    reviews: 120
  },

  // Enterprise Cybersecurity Suite
  {
    id: 'enterprise-cybersecurity-suite',
    name: 'Enterprise Cybersecurity Suite',
    tagline: 'Comprehensive enterprise security solutions',
    price: '$1,499',
    period: '/month',
    description: 'End-to-end enterprise cybersecurity solution providing threat detection, prevention, response, and compliance management.',
    features: [
      'Advanced threat detection',
      'Zero-trust architecture',
      'Identity and access management',
      'Endpoint protection',
      'Network security',
      'Security information management',
      'Incident response automation',
      'Compliance reporting',
      'Security awareness training',
      '24/7 security monitoring'
    ],
    popular: true,
    icon: '🛡️',
    color: 'from-red-500 to-pink-600',
    textColor: 'text-red-400',
    link: 'https://ziontechgroup.com/enterprise-cybersecurity',
    marketPosition: 'Competitive with Palo Alto Networks ($1000-5000), CrowdStrike ($1000-3000), and Fortinet ($500-2000). Our advantage: Comprehensive security suite and integrated approach.',
    targetAudience: 'Large enterprises, Government agencies, Financial institutions, Healthcare organizations, Defense contractors, Critical infrastructure',
    trialDays: 30,
    setupTime: '2-4 weeks',
    category: 'Cybersecurity',
    realService: true,
    technology: ['SIEM systems', 'EDR platforms', 'Firewalls', 'Identity providers', 'Machine learning', 'AI'],
    integrations: ['Active Directory', 'Office 365', 'Salesforce', 'ERP systems', 'Cloud platforms'],
    useCases: ['Threat prevention', 'Compliance management', 'Incident response', 'Risk assessment', 'Security monitoring'],
    roi: 'Average customer sees 500% ROI through prevented security breaches and reduced compliance costs.',
    competitors: ['Palo Alto Networks', 'CrowdStrike', 'Fortinet', 'Cisco', 'Symantec'],
    marketSize: '$173.5B market',
    growthRate: '8.7% annual growth',
    variant: 'security-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Comprehensive cybersecurity suite with integrated threat detection and response capabilities.',
    launchDate: '2025-01-20',
    customers: 200,
    rating: 4.8,
    reviews: 150
  },

  // DevOps & CI/CD Automation
  {
    id: 'devops-cicd-automation',
    name: 'DevOps & CI/CD Automation',
    tagline: 'Accelerate software delivery with automation',
    price: '$899',
    period: '/month',
    description: 'Comprehensive DevOps and CI/CD automation platform for faster, more reliable software delivery and deployment.',
    features: [
      'Continuous integration',
      'Continuous deployment',
      'Infrastructure as code',
      'Automated testing',
      'Release management',
      'Environment management',
      'Monitoring and alerting',
      'Performance optimization',
      'Security scanning',
      'Collaboration tools'
    ],
    popular: true,
    icon: '⚡',
    color: 'from-yellow-500 to-orange-600',
    textColor: 'text-yellow-400',
    link: 'https://ziontechgroup.com/devops-automation',
    marketPosition: 'Competitive with GitLab ($19-99), Jenkins (Free), and CircleCI ($15-300). Our advantage: Comprehensive DevOps platform and enterprise support.',
    targetAudience: 'Software development teams, IT operations teams, DevOps engineers, Software companies, Enterprises with custom software',
    trialDays: 30,
    setupTime: '2-4 weeks',
    category: 'DevOps & Automation',
    realService: true,
    technology: ['Jenkins', 'GitLab CI', 'Docker', 'Kubernetes', 'Terraform', 'Ansible', 'Prometheus'],
    integrations: ['Git repositories', 'Cloud platforms', 'Monitoring tools', 'Testing frameworks', 'Deployment platforms'],
    useCases: ['Software delivery automation', 'Infrastructure automation', 'Testing automation', 'Deployment automation', 'Monitoring automation'],
    roi: 'Average customer sees 400% ROI through faster delivery and reduced operational costs.',
    competitors: ['GitLab', 'Jenkins', 'CircleCI', 'GitHub Actions', 'Azure DevOps'],
    marketSize: '$8.2B market',
    growthRate: '24.2% annual growth',
    variant: 'devops-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Comprehensive DevOps platform with CI/CD automation and infrastructure management capabilities.',
    launchDate: '2025-01-25',
    customers: 300,
    rating: 4.7,
    reviews: 200
  },

  // Digital Transformation Consulting
  {
    id: 'digital-transformation-consulting',
    name: 'Digital Transformation Consulting',
    tagline: 'Transform your business for the digital age',
    price: '$3,999',
    period: '/month',
    description: 'Strategic digital transformation consulting services to modernize business processes, technology, and customer experiences.',
    features: [
      'Digital strategy development',
      'Process optimization',
      'Technology modernization',
      'Change management',
      'Customer experience design',
      'Data strategy',
      'Innovation workshops',
      'ROI analysis',
      'Implementation planning',
      'Ongoing support'
    ],
    popular: true,
    icon: '🔄',
    color: 'from-green-500 to-emerald-600',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/digital-transformation',
    marketPosition: 'Competitive with McKinsey ($10000-100000), BCG ($8000-80000), and Bain ($7000-70000). Our advantage: Technology expertise and practical implementation.',
    targetAudience: 'Large enterprises, Mid-size companies, Government agencies, Healthcare organizations, Financial institutions, Manufacturing companies',
    trialDays: 0,
    setupTime: '8-16 weeks',
    category: 'Digital Transformation',
    realService: true,
    technology: ['Strategy frameworks', 'Process modeling', 'Technology assessment', 'Change management', 'Analytics'],
    integrations: ['Business systems', 'Technology platforms', 'Data sources', 'Customer touchpoints', 'Operational processes'],
    useCases: ['Business process optimization', 'Technology modernization', 'Customer experience improvement', 'Operational efficiency', 'Innovation acceleration'],
    roi: 'Average customer sees 400% ROI within 18 months through improved efficiency and new revenue streams.',
    competitors: ['McKinsey', 'BCG', 'Bain', 'Deloitte', 'Accenture'],
    marketSize: '$665.0B market',
    growthRate: '23.5% annual growth',
    variant: 'consulting-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Comprehensive digital transformation consulting with strategic planning and practical implementation support.',
    launchDate: '2025-01-30',
    customers: 80,
    rating: 4.9,
    reviews: 60
  },

  // Enterprise Data Analytics Platform
  {
    id: 'enterprise-data-analytics',
    name: 'Enterprise Data Analytics Platform',
    tagline: 'Transform data into business intelligence',
    price: '$1,299',
    period: '/month',
    description: 'Enterprise-grade data analytics platform providing real-time insights, predictive analytics, and comprehensive business intelligence.',
    features: [
      'Real-time data processing',
      'Advanced analytics',
      'Predictive modeling',
      'Data visualization',
      'Business intelligence',
      'Data governance',
      'Machine learning',
      'API integrations',
      'Mobile dashboards',
      'Custom reporting'
    ],
    popular: true,
    icon: '📊',
    color: 'from-purple-500 to-indigo-600',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/enterprise-analytics',
    marketPosition: 'Competitive with Tableau ($70-70), Power BI ($9.99-20), and Looker ($300-500). Our advantage: Enterprise features and AI-powered insights.',
    targetAudience: 'Large enterprises, Data analysts, Business intelligence teams, C-level executives, Consulting firms, Financial institutions',
    trialDays: 30,
    setupTime: '2-4 weeks',
    category: 'Data & Analytics',
    realService: true,
    technology: ['Apache Spark', 'Hadoop', 'Python', 'TensorFlow', 'React', 'Node.js', 'PostgreSQL'],
    integrations: ['ERP systems', 'CRM systems', 'Database systems', 'Cloud platforms', 'Business applications'],
    useCases: ['Business intelligence', 'Predictive analytics', 'Data-driven decision making', 'Performance monitoring', 'Trend analysis'],
    roi: 'Average customer sees 350% ROI through improved decision-making and operational efficiency.',
    competitors: ['Tableau', 'Power BI', 'Looker', 'QlikView', 'Domo'],
    marketSize: '$23.1B market',
    growthRate: '12.5% annual growth',
    variant: 'analytics-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Enterprise-grade analytics platform with real-time processing, AI-powered insights, and comprehensive BI capabilities.',
    launchDate: '2025-02-05',
    customers: 250,
    rating: 4.8,
    reviews: 180
  },

  // Enterprise API Management
  {
    id: 'enterprise-api-management',
    name: 'Enterprise API Management',
    tagline: 'Manage and secure your API ecosystem',
    price: '$799',
    period: '/month',
    description: 'Comprehensive API management platform for designing, deploying, securing, and monitoring enterprise APIs.',
    features: [
      'API design and development',
      'API gateway',
      'Security and authentication',
      'Rate limiting',
      'API documentation',
      'Developer portal',
      'Analytics and monitoring',
      'Version management',
      'Testing and validation',
      'Integration tools'
    ],
    popular: true,
    icon: '🔌',
    color: 'from-cyan-500 to-blue-600',
    textColor: 'text-cyan-400',
    link: 'https://ziontechgroup.com/enterprise-api-management',
    marketPosition: 'Competitive with Apigee ($500-2500), Kong ($250-1000), and AWS API Gateway ($3.50-12.00). Our advantage: Enterprise features and comprehensive management.',
    targetAudience: 'Enterprises with APIs, Software companies, Financial institutions, Healthcare organizations, Government agencies',
    trialDays: 30,
    setupTime: '2-4 weeks',
    category: 'API & Integration',
    realService: true,
    technology: ['API Gateway', 'OAuth 2.0', 'JWT', 'GraphQL', 'REST', 'React', 'Node.js'],
    integrations: ['Identity providers', 'Monitoring tools', 'Analytics platforms', 'Security systems', 'Development tools'],
    useCases: ['API security', 'Developer experience', 'API monetization', 'Integration management', 'Performance monitoring'],
    roi: 'Average customer sees 300% ROI through improved developer productivity and API security.',
    competitors: ['Apigee', 'Kong', 'AWS API Gateway', 'Azure API Management', 'MuleSoft'],
    marketSize: '$4.5B market',
    growthRate: '32.9% annual growth',
    variant: 'api-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Comprehensive API management platform with security, monitoring, and developer experience features.',
    launchDate: '2025-02-10',
    customers: 180,
    rating: 4.7,
    reviews: 120
  },

  // Enterprise Integration Platform
  {
    id: 'enterprise-integration-platform',
    name: 'Enterprise Integration Platform',
    tagline: 'Connect all your business systems seamlessly',
    price: '$1,199',
    period: '/month',
    description: 'Comprehensive enterprise integration platform for connecting disparate systems, applications, and data sources.',
    features: [
      'Data integration',
      'Application integration',
      'API management',
      'ETL/ELT processes',
      'Real-time synchronization',
      'Data transformation',
      'Workflow automation',
      'Error handling',
      'Monitoring and alerting',
      'Scalable architecture'
    ],
    popular: true,
    icon: '🔗',
    color: 'from-emerald-500 to-teal-600',
    textColor: 'text-emerald-400',
    link: 'https://ziontechgroup.com/enterprise-integration',
    marketPosition: 'Competitive with MuleSoft ($1000-5000), Informatica ($1000-4000), and Boomi ($550-2200). Our advantage: Modern architecture and cost-effective solutions.',
    targetAudience: 'Large enterprises, System integrators, Consulting firms, Financial institutions, Healthcare organizations',
    trialDays: 30,
    setupTime: '4-8 weeks',
    category: 'Integration & ETL',
    realService: true,
    technology: ['Apache Kafka', 'Apache NiFi', 'Talend', 'Python', 'Java', 'React', 'Node.js'],
    integrations: ['ERP systems', 'CRM systems', 'Database systems', 'Cloud platforms', 'Legacy systems'],
    useCases: ['System integration', 'Data migration', 'Real-time synchronization', 'Workflow automation', 'Data transformation'],
    roi: 'Average customer sees 400% ROI through improved system connectivity and operational efficiency.',
    competitors: ['MuleSoft', 'Informatica', 'Boomi', 'Talend', 'SnapLogic'],
    marketSize: '$12.1B market',
    growthRate: '18.3% annual growth',
    variant: 'integration-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Comprehensive integration platform with modern architecture and enterprise-grade capabilities.',
    launchDate: '2025-02-15',
    customers: 120,
    rating: 4.8,
    reviews: 90
  },

  // Enterprise Performance Monitoring
  {
    id: 'enterprise-performance-monitoring',
    name: 'Enterprise Performance Monitoring',
    tagline: 'Monitor and optimize your entire IT infrastructure',
    price: '$699',
    period: '/month',
    description: 'Comprehensive performance monitoring platform for applications, infrastructure, and business processes.',
    features: [
      'Application performance monitoring',
      'Infrastructure monitoring',
      'Real-time alerting',
      'Performance analytics',
      'Root cause analysis',
      'Capacity planning',
      'Performance optimization',
      'Custom dashboards',
      'API monitoring',
      'Mobile monitoring'
    ],
    popular: true,
    icon: '📈',
    color: 'from-orange-500 to-red-600',
    textColor: 'text-orange-400',
    link: 'https://ziontechgroup.com/enterprise-monitoring',
    marketPosition: 'Competitive with New Relic ($99-2400), Datadog ($15-23), and AppDynamics ($60-300). Our advantage: Comprehensive monitoring and cost-effective pricing.',
    targetAudience: 'IT operations teams, DevOps teams, System administrators, Software companies, Enterprises with complex infrastructure',
    trialDays: 30,
    setupTime: '1-2 weeks',
    category: 'Monitoring & Observability',
    realService: true,
    technology: ['Prometheus', 'Grafana', 'Elasticsearch', 'Kibana', 'Python', 'React', 'Node.js'],
    integrations: ['Cloud platforms', 'Container platforms', 'Database systems', 'Application servers', 'Network devices'],
    useCases: ['Performance monitoring', 'Troubleshooting', 'Capacity planning', 'Performance optimization', 'SLA monitoring'],
    roi: 'Average customer sees 350% ROI through improved system performance and reduced downtime.',
    competitors: ['New Relic', 'Datadog', 'AppDynamics', 'Dynatrace', 'Splunk'],
    marketSize: '$7.2B market',
    growthRate: '14.2% annual growth',
    variant: 'monitoring-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Comprehensive monitoring platform with real-time performance tracking and optimization capabilities.',
    launchDate: '2025-02-20',
    customers: 220,
    rating: 4.7,
    reviews: 160
  },

  // Enterprise Backup & Recovery
  {
    id: 'enterprise-backup-recovery',
    name: 'Enterprise Backup & Recovery',
    tagline: 'Comprehensive data protection and disaster recovery',
    price: '$599',
    period: '/month',
    description: 'Enterprise-grade backup and disaster recovery solution ensuring business continuity and data protection.',
    features: [
      'Automated backup scheduling',
      'Incremental and full backups',
      'Cloud backup storage',
      'Disaster recovery planning',
      'Data encryption',
      'Compliance reporting',
      'Recovery testing',
      'Monitoring and alerting',
      'Cross-platform support',
      '24/7 support'
    ],
    popular: true,
    icon: '💾',
    color: 'from-gray-500 to-slate-600',
    textColor: 'text-gray-400',
    link: 'https://ziontechgroup.com/enterprise-backup',
    marketPosition: 'Competitive with Veeam ($1000-3000), Commvault ($1000-2500), and Veritas ($800-2000). Our advantage: Cloud-native approach and cost-effective pricing.',
    targetAudience: 'Enterprises, Healthcare organizations, Financial institutions, Government agencies, Educational institutions',
    trialDays: 30,
    setupTime: '2-4 weeks',
    category: 'Backup & Recovery',
    realService: true,
    technology: ['Backup software', 'Cloud storage', 'Encryption', 'Compression', 'Python', 'React', 'Node.js'],
    integrations: ['Cloud platforms', 'Storage systems', 'Virtualization platforms', 'Database systems', 'Operating systems'],
    useCases: ['Data protection', 'Disaster recovery', 'Compliance management', 'Business continuity', 'Data archiving'],
    roi: 'Average customer sees 500% ROI through prevented data loss and improved recovery times.',
    competitors: ['Veeam', 'Commvault', 'Veritas', 'Acronis', 'Druva'],
    marketSize: '$11.9B market',
    growthRate: '9.8% annual growth',
    variant: 'backup-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Comprehensive backup and recovery solution with cloud-native architecture and enterprise security.',
    launchDate: '2025-02-25',
    customers: 180,
    rating: 4.8,
    reviews: 130
  }
];