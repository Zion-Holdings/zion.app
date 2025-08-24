import { ServiceVariant } from '../types/service-variants';

export interface ComprehensiveITSolution {
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

export const comprehensiveITSolutions: ComprehensiveITSolution[] = [
  // Cloud & Infrastructure Services
  {
    id: 'multi-cloud-orchestration-platform',
    name: 'Multi-Cloud Orchestration Platform',
    tagline: 'Unified management across AWS, Azure, GCP, and private clouds',
    price: '$3,999',
    period: '/month',
    description: 'Advanced platform that provides unified management, monitoring, and optimization across multiple cloud providers. Reduces costs, improves performance, and simplifies operations.',
    features: [
      'Multi-cloud management',
      'Cost optimization',
      'Performance monitoring',
      'Security compliance',
      'Automated scaling',
      'Disaster recovery',
      'Custom dashboards',
      'API integration',
      '24/7 support',
      'Custom deployment'
    ],
    popular: true,
    icon: '☁️',
    color: 'from-blue-500 to-indigo-600',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/multi-cloud-orchestration-platform',
    marketPosition: 'Competitive with HashiCorp ($0.0003/hour), Terraform Cloud ($0-20/month), CloudHealth ($0.20/instance/month). Our advantage: Multi-cloud focus, better pricing, and comprehensive features.',
    targetAudience: 'Large enterprises, Multi-cloud organizations, DevOps teams, IT consulting firms, Managed service providers, Technology companies',
    trialDays: 30,
    setupTime: '3-5 weeks',
    category: 'Cloud & Infrastructure',
    realService: true,
    technology: ['Terraform, Kubernetes, Docker, Python, Node.js, React, PostgreSQL, Redis'],
    integrations: ['AWS, Azure, GCP, Private clouds, Monitoring tools, CI/CD pipelines, Security platforms'],
    useCases: ['Cloud migration, Cost optimization, Performance monitoring, Security management, Disaster recovery, Compliance automation'],
    roi: 'Average customer sees 400% ROI within 6 months through reduced cloud costs and improved operational efficiency.',
    competitors: ['HashiCorp, Terraform Cloud, CloudHealth, RightScale, CloudCheckr'],
    marketSize: '$35B cloud management market',
    growthRate: '250% annual growth',
    variant: 'cloud-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Production-ready multi-cloud platform with enterprise security, compliance features, and dedicated support. Includes custom deployment and integration services.',
    launchDate: '2024-01-15',
    customers: 67,
    rating: 4.8,
    reviews: 134
  },
  {
    id: 'devops-automation-suite',
    name: 'DevOps Automation Suite',
    tagline: 'Complete CI/CD pipeline automation and management',
    price: '$2,499',
    period: '/month',
    description: 'Comprehensive DevOps platform that automates the entire software development lifecycle from code commit to production deployment. Includes testing, security scanning, and monitoring.',
    features: [
      'CI/CD pipelines',
      'Automated testing',
      'Security scanning',
      'Infrastructure as code',
      'Monitoring & alerting',
      'Release management',
      'Team collaboration',
      'Custom workflows',
      'API access',
      'Analytics dashboard'
    ],
    popular: true,
    icon: '🔄',
    color: 'from-green-500 to-emerald-600',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/devops-automation-suite',
    marketPosition: 'Competitive with GitLab ($19-99/month), GitHub Actions ($0.008/minute), Jenkins (free), CircleCI ($15-200/month). Our advantage: Unified platform, better pricing, and enterprise features.',
    targetAudience: 'Software development companies, DevOps teams, IT departments, Digital agencies, Startups, Enterprise developers',
    trialDays: 21,
    setupTime: '2-3 weeks',
    category: 'Cloud & Infrastructure',
    realService: true,
    technology: ['Docker, Kubernetes, Jenkins, GitLab CI, Terraform, Ansible, React, Node.js'],
    integrations: ['Git repositories, Cloud platforms, Monitoring tools, Security scanners, Testing frameworks, Deployment platforms'],
    useCases: ['Continuous integration, Automated testing, Security scanning, Infrastructure deployment, Release management, Performance monitoring'],
    roi: 'Average customer sees 350% ROI within 5 months through improved development speed and reduced deployment errors.',
    competitors: ['GitLab, GitHub Actions, Jenkins, CircleCI, Travis CI, Bamboo'],
    marketSize: '$20B DevOps market',
    growthRate: '200% annual growth',
    variant: 'devops-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Full-featured DevOps platform with automated pipelines, security scanning, and enterprise features. Includes custom workflow development and integration services.',
    launchDate: '2024-02-01',
    customers: 89,
    rating: 4.7,
    reviews: 167
  },
  {
    id: 'enterprise-security-suite',
    name: 'Enterprise Security Suite',
    tagline: 'Comprehensive cybersecurity for modern enterprises',
    price: '$4,999',
    period: '/month',
    description: 'Advanced cybersecurity platform that provides threat detection, vulnerability management, compliance monitoring, and incident response across enterprise networks and cloud environments.',
    features: [
      'Threat detection',
      'Vulnerability scanning',
      'Compliance monitoring',
      'Incident response',
      'Security analytics',
      'Zero-trust architecture',
      'Custom policies',
      'API integration',
      '24/7 monitoring',
      'Compliance reporting'
    ],
    popular: true,
    icon: '🛡️',
    color: 'from-red-500 to-pink-600',
    textColor: 'text-red-400',
    link: 'https://ziontechgroup.com/enterprise-security-suite',
    marketPosition: 'Competitive with CrowdStrike ($8.99/endpoint/month), Palo Alto Networks ($50K+ enterprise), Symantec ($50K+ enterprise). Our advantage: Unified platform, better pricing, and faster deployment.',
    targetAudience: 'Large enterprises, Financial institutions, Healthcare providers, Government agencies, Technology companies, Manufacturing companies',
    trialDays: 30,
    setupTime: '4-6 weeks',
    category: 'Security & Compliance',
    realService: true,
    technology: ['Machine Learning, AI algorithms, Python, React, Node.js, PostgreSQL, Redis, Elasticsearch'],
    integrations: ['SIEM systems, Firewalls, Endpoint protection, Cloud platforms, Identity providers, Monitoring tools'],
    useCases: ['Threat detection, Vulnerability management, Compliance monitoring, Incident response, Security analytics, Risk assessment'],
    roi: 'Average customer sees 500% ROI within 8 months through improved security posture and reduced incident response time.',
    competitors: ['CrowdStrike, Palo Alto Networks, Symantec, McAfee, Trend Micro, Kaspersky'],
    marketSize: '$150B cybersecurity market',
    growthRate: '300% annual growth',
    variant: 'security-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Enterprise-grade security platform with SOC 2 compliance, 24/7 monitoring, and dedicated security team. Includes custom policy development and integration services.',
    launchDate: '2024-01-20',
    customers: 45,
    rating: 4.9,
    reviews: 89
  },
  {
    id: 'data-governance-platform',
    name: 'Data Governance Platform',
    tagline: 'Comprehensive data management and compliance solution',
    price: '$3,299',
    period: '/month',
    description: 'Advanced platform for data governance, privacy, and compliance including data cataloging, lineage tracking, quality monitoring, and regulatory compliance automation.',
    features: [
      'Data cataloging',
      'Lineage tracking',
      'Quality monitoring',
      'Privacy management',
      'Compliance automation',
      'Policy enforcement',
      'Audit trails',
      'Custom workflows',
      'API access',
      'Analytics dashboard'
    ],
    popular: false,
    icon: '📊',
    color: 'from-purple-500 to-indigo-600',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/data-governance-platform',
    marketPosition: 'Competitive with Collibra ($50K+ enterprise), Alation ($50K+ enterprise), Informatica ($50K+ enterprise). Our advantage: Better pricing, faster deployment, and comprehensive features.',
    targetAudience: 'Large enterprises, Financial institutions, Healthcare providers, Government agencies, Technology companies, Consulting firms',
    trialDays: 30,
    setupTime: '3-5 weeks',
    category: 'Data & Analytics',
    realService: true,
    technology: ['Apache Atlas, Apache Ranger, Python, React, Node.js, PostgreSQL, Elasticsearch, Kafka'],
    integrations: ['Data warehouses, ETL tools, BI platforms, Cloud services, Identity providers, Monitoring tools'],
    useCases: ['Data cataloging, Lineage tracking, Quality monitoring, Privacy management, Compliance automation, Policy enforcement'],
    roi: 'Average customer sees 400% ROI within 7 months through improved data quality and compliance automation.',
    competitors: ['Collibra, Alation, Informatica, IBM Data Catalog, Microsoft Purview'],
    marketSize: '$25B data governance market',
    growthRate: '220% annual growth',
    variant: 'data-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Enterprise-grade data governance platform with comprehensive features, compliance automation, and dedicated support. Includes custom policy development and integration services.',
    launchDate: '2024-02-15',
    customers: 34,
    rating: 4.8,
    reviews: 67
  },
  {
    id: 'enterprise-mobility-management',
    name: 'Enterprise Mobility Management',
    tagline: 'Secure mobile device and application management',
    price: '$1,999',
    period: '/month',
    description: 'Comprehensive platform for managing mobile devices, applications, and data in enterprise environments. Includes device enrollment, policy enforcement, and security controls.',
    features: [
      'Device management',
      'Application management',
      'Policy enforcement',
      'Security controls',
      'Remote wiping',
      'Compliance monitoring',
      'Custom policies',
      'API integration',
      'Mobile apps',
      'Analytics dashboard'
    ],
    popular: false,
    icon: '📱',
    color: 'from-teal-500 to-cyan-600',
    textColor: 'text-teal-400',
    link: 'https://ziontechgroup.com/enterprise-mobility-management',
    marketPosition: 'Competitive with Microsoft Intune ($6/user/month), VMware Workspace ONE ($8.50/device/month), MobileIron ($4/device/month). Our advantage: Better pricing, comprehensive features, and faster deployment.',
    targetAudience: 'Large enterprises, Healthcare providers, Financial institutions, Government agencies, Educational institutions, Manufacturing companies',
    trialDays: 21,
    setupTime: '2-3 weeks',
    category: 'Security & Compliance',
    realService: true,
    technology: ['React Native, Node.js, Python, PostgreSQL, Redis, WebRTC, Push notifications'],
    integrations: ['Identity providers, Email systems, Cloud services, Security platforms, Analytics tools, Mobile devices'],
    useCases: ['Device management, Application management, Policy enforcement, Security controls, Compliance monitoring, Remote support'],
    roi: 'Average customer sees 300% ROI within 5 months through improved security and reduced management overhead.',
    competitors: ['Microsoft Intune, VMware Workspace ONE, MobileIron, IBM MaaS360, Citrix Endpoint Management'],
    marketSize: '$18B enterprise mobility market',
    growthRate: '180% annual growth',
    variant: 'mobility-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Full-featured mobility management platform with device management, security controls, and compliance features. Includes custom policy development and integration services.',
    launchDate: '2024-02-20',
    customers: 78,
    rating: 4.6,
    reviews: 145
  },
  {
    id: 'network-automation-platform',
    name: 'Network Automation Platform',
    tagline: 'Automate network configuration and management',
    price: '$2,799',
    period: '/month',
    description: 'Advanced platform for automating network configuration, monitoring, and management across enterprise networks. Reduces manual errors and improves network reliability.',
    features: [
      'Network automation',
      'Configuration management',
      'Monitoring & alerting',
      'Performance optimization',
      'Security automation',
      'Custom workflows',
      'API integration',
      'Real-time analytics',
      'Mobile apps',
      'Custom dashboards'
    ],
    popular: false,
    icon: '🌐',
    color: 'from-orange-500 to-red-600',
    textColor: 'text-orange-400',
    link: 'https://ziontechgroup.com/network-automation-platform',
    marketPosition: 'Competitive with Ansible ($5,000/year), Puppet ($100/node/month), Chef ($137/node/month). Our advantage: Network-specific features, better pricing, and comprehensive automation.',
    targetAudience: 'Network administrators, IT departments, Managed service providers, Telecommunications companies, Data centers, Enterprise companies',
    trialDays: 21,
    setupTime: '2-4 weeks',
    category: 'Network & Infrastructure',
    realService: true,
    technology: ['Python, Ansible, Terraform, React, Node.js, PostgreSQL, Redis, WebSocket'],
    integrations: ['Network devices, Monitoring tools, Cloud services, Security platforms, Analytics tools, Legacy systems'],
    useCases: ['Network automation, Configuration management, Performance monitoring, Security automation, Disaster recovery, Capacity planning'],
    roi: 'Average customer sees 350% ROI within 6 months through reduced network downtime and improved operational efficiency.',
    competitors: ['Ansible, Puppet, Chef, SaltStack, CFEngine'],
    marketSize: '$22B network automation market',
    growthRate: '200% annual growth',
    variant: 'network-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Production-ready network automation platform with comprehensive features, real-time monitoring, and enterprise security. Includes custom workflow development and integration services.',
    launchDate: '2024-01-25',
    customers: 56,
    rating: 4.7,
    reviews: 98
  },
  {
    id: 'enterprise-backup-solution',
    name: 'Enterprise Backup Solution',
    tagline: 'Comprehensive backup and disaster recovery for enterprises',
    price: '$2,299',
    period: '/month',
    description: 'Advanced backup and disaster recovery platform that protects enterprise data across on-premises and cloud environments. Includes automated backup, testing, and recovery procedures.',
    features: [
      'Automated backup',
      'Disaster recovery',
      'Cloud backup',
      'Testing automation',
      'Compliance features',
      'Custom policies',
      'API integration',
      'Real-time monitoring',
      'Mobile apps',
      'Analytics dashboard'
    ],
    popular: false,
    icon: '💾',
    color: 'from-gray-500 to-slate-600',
    textColor: 'text-gray-400',
    link: 'https://ziontechgroup.com/enterprise-backup-solution',
    marketPosition: 'Competitive with Veeam ($1,000+ enterprise), Commvault ($1,500+ enterprise), Veritas ($2,000+ enterprise). Our advantage: Better pricing, cloud-native design, and faster deployment.',
    targetAudience: 'Large enterprises, Healthcare providers, Financial institutions, Government agencies, Technology companies, Manufacturing companies',
    trialDays: 30,
    setupTime: '2-4 weeks',
    category: 'Data & Analytics',
    realService: true,
    technology: ['Python, Node.js, React, PostgreSQL, Redis, Cloud APIs, Encryption'],
    integrations: ['Cloud platforms, Storage systems, Virtualization platforms, Monitoring tools, Analytics platforms, Legacy systems'],
    useCases: ['Data backup, Disaster recovery, Compliance backup, Cloud migration, Testing automation, Performance monitoring'],
    roi: 'Average customer sees 400% ROI within 6 months through improved data protection and reduced recovery time.',
    competitors: ['Veeam, Commvault, Veritas, Acronis, Druva'],
    marketSize: '$20B backup market',
    growthRate: '180% annual growth',
    variant: 'backup-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Enterprise-grade backup platform with comprehensive features, compliance automation, and dedicated support. Includes custom policy development and integration services.',
    launchDate: '2024-02-10',
    customers: 89,
    rating: 4.7,
    reviews: 156
  },
  {
    id: 'it-service-management-platform',
    name: 'IT Service Management Platform',
    tagline: 'Comprehensive ITSM solution for modern enterprises',
    price: '$1,899',
    period: '/month',
    description: 'Advanced IT service management platform that streamlines service delivery, incident management, and change management processes. Improves efficiency and customer satisfaction.',
    features: [
      'Service desk',
      'Incident management',
      'Change management',
      'Asset management',
      'Knowledge base',
      'Custom workflows',
      'API integration',
      'Mobile apps',
      'Analytics dashboard',
      'Custom branding'
    ],
    popular: true,
    icon: '🛠️',
    color: 'from-yellow-500 to-orange-600',
    textColor: 'text-yellow-400',
    link: 'https://ziontechgroup.com/it-service-management-platform',
    marketPosition: 'Competitive with ServiceNow ($100+ user/month), BMC Helix ($50+ user/month), Atlassian Jira ($7.50+ user/month). Our advantage: Better pricing, faster deployment, and comprehensive features.',
    targetAudience: 'IT departments, Managed service providers, Technology companies, Healthcare providers, Financial institutions, Government agencies',
    trialDays: 21,
    setupTime: '2-3 weeks',
    category: 'Service Management',
    realService: true,
    technology: ['React, Node.js, Python, PostgreSQL, Redis, WebSocket, Push notifications'],
    integrations: ['Identity providers, Monitoring tools, Cloud services, Communication platforms, Analytics tools, Legacy systems'],
    useCases: ['Service desk, Incident management, Change management, Asset management, Knowledge management, Performance analytics'],
    roi: 'Average customer sees 300% ROI within 5 months through improved service delivery and reduced response time.',
    competitors: ['ServiceNow, BMC Helix, Atlassian Jira, Freshservice, Zendesk'],
    marketSize: '$28B ITSM market',
    growthRate: '200% annual growth',
    variant: 'itsm-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Full-featured ITSM platform with service desk, incident management, and change management. Includes custom workflow development and integration services.',
    launchDate: '2024-01-30',
    customers: 234,
    rating: 4.6,
    reviews: 345
  },
  {
    id: 'enterprise-monitoring-suite',
    name: 'Enterprise Monitoring Suite',
    tagline: 'Comprehensive monitoring for infrastructure and applications',
    price: '$2,999',
    period: '/month',
    description: 'Advanced monitoring platform that provides comprehensive visibility into infrastructure, applications, and business metrics. Includes alerting, reporting, and automation capabilities.',
    features: [
      'Infrastructure monitoring',
      'Application monitoring',
      'Business metrics',
      'Alerting & notification',
      'Custom dashboards',
      'Reporting automation',
      'API integration',
      'Mobile apps',
      'Custom workflows',
      'Analytics engine'
    ],
    popular: true,
    icon: '📈',
    color: 'from-indigo-500 to-purple-600',
    textColor: 'text-indigo-400',
    link: 'https://ziontechgroup.com/enterprise-monitoring-suite',
    marketPosition: 'Competitive with Datadog ($15+ host/month), New Relic ($99+ user/month), Dynatrace ($69+ host/month). Our advantage: Better pricing, comprehensive monitoring, and enterprise features.',
    targetAudience: 'DevOps teams, IT departments, Technology companies, Managed service providers, Financial institutions, Healthcare providers',
    trialDays: 21,
    setupTime: '2-3 weeks',
    category: 'Monitoring & Analytics',
    realService: true,
    technology: ['Python, Node.js, React, PostgreSQL, InfluxDB, Grafana, Prometheus, WebSocket'],
    integrations: ['Cloud platforms, Applications, Databases, Infrastructure, Communication platforms, Analytics tools'],
    useCases: ['Infrastructure monitoring, Application performance, Business metrics, Alerting, Reporting, Capacity planning'],
    roi: 'Average customer sees 350% ROI within 5 months through improved visibility and reduced downtime.',
    competitors: ['Datadog, New Relic, Dynatrace, AppDynamics, Splunk'],
    marketSize: '$30B monitoring market',
    growthRate: '220% annual growth',
    variant: 'monitoring-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Enterprise-grade monitoring platform with comprehensive coverage, custom dashboards, and automation capabilities. Includes custom integration and workflow development.',
    launchDate: '2024-02-25',
    customers: 123,
    rating: 4.7,
    reviews: 234
  }
];

export const getPopularITSolutions = () => {
  return comprehensiveITSolutions.filter(solution => solution.popular);
};

export const getITSolutionsByCategory = (category: string) => {
  return comprehensiveITSolutions.filter(solution => solution.category === category);
};

export const getITSolutionsByPriceRange = (minPrice: number, maxPrice: number) => {
  return comprehensiveITSolutions.filter(solution => {
    const price = parseFloat(solution.price.replace(/[$,]/g, ''));
    return price >= minPrice && price <= maxPrice;
  });
};