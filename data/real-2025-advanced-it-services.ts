import { ServiceVariant } from '../types/service-variants';

export interface AdvancedITService {
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

export const real2025AdvancedITServices: AdvancedITService[] = [
  {
    id: 'zero-trust-security-framework',
    name: 'Zero Trust Security Framework',
    tagline: 'Comprehensive zero trust implementation with continuous verification',
    price: '$599',
    period: '/month',
    description: 'Enterprise-grade zero trust security framework that implements continuous verification, least privilege access, and micro-segmentation. Provides comprehensive security monitoring and threat detection.',
    features: [
      'Identity and access management (IAM)',
      'Multi-factor authentication (MFA)',
      'Network micro-segmentation',
      'Continuous monitoring and analytics',
      'Threat detection and response',
      'Compliance reporting (SOC2, HIPAA, PCI)',
      'API security and monitoring',
      'Cloud security posture management',
      'Security automation and orchestration'
    ],
    popular: true,
    icon: '🛡️',
    color: 'from-red-600 to-pink-700',
    textColor: 'text-red-400',
    link: 'https://ziontechgroup.com/zero-trust-security-framework',
    marketPosition: 'Competes with Palo Alto Networks, CrowdStrike, and Okta; provides comprehensive zero trust implementation.',
    targetAudience: 'Enterprise security teams, CTOs, Compliance officers',
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Cybersecurity',
    realService: true,
    technology: ['Kubernetes, Istio, OAuth 2.0, SAML, OpenID Connect'],
    integrations: ['Active Directory, LDAP, SAML providers, SIEM systems'],
    useCases: ['Enterprise security, Compliance requirements, Threat prevention'],
    roi: 'Reduce security incidents by 80% and achieve compliance faster.',
    competitors: ['Palo Alto Networks, CrowdStrike, Okta, ForgeRock'],
    marketSize: '$45B+ cybersecurity market',
    growthRate: '40% YoY',
    variant: 'security-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Multi-tenant SaaS with zero trust architecture, continuous monitoring, and automated threat response.',
    launchDate: '2025-01-10',
    customers: 23,
    rating: 4.9,
    reviews: 18
  },
  {
    id: 'multi-cloud-orchestration-platform',
    name: 'Multi-Cloud Orchestration Platform',
    tagline: 'Unified management across AWS, Azure, GCP, and private clouds',
    price: '$449',
    period: '/month',
    description: 'Advanced multi-cloud orchestration platform that provides unified management, cost optimization, and governance across multiple cloud providers. Features automated resource provisioning and cost management.',
    features: [
      'Multi-cloud resource management',
      'Automated cost optimization',
      'Unified monitoring and logging',
      'Policy-based governance',
      'Resource provisioning automation',
      'Cost allocation and budgeting',
      'Performance optimization',
      'Disaster recovery orchestration',
      'Compliance and audit reporting'
    ],
    popular: true,
    icon: '☁️',
    color: 'from-blue-600 to-indigo-700',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/multi-cloud-orchestration',
    marketPosition: 'Alternative to Terraform Cloud, CloudHealth, and Flexera; provides unified multi-cloud management.',
    targetAudience: 'Cloud architects, DevOps teams, IT operations',
    trialDays: 21,
    setupTime: '1 week',
    category: 'Cloud Management',
    realService: true,
    technology: ['Kubernetes, Terraform, Ansible, Python, Go'],
    integrations: ['AWS, Azure, GCP, VMware, OpenStack'],
    useCases: ['Multi-cloud management, Cost optimization, Resource governance'],
    roi: 'Reduce cloud costs by 25% and improve resource utilization by 40%.',
    competitors: ['Terraform Cloud, CloudHealth, Flexera, RightScale'],
    marketSize: '$28B+ cloud management market',
    growthRate: '35% YoY',
    variant: 'cloud-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Multi-tenant SaaS with cloud provider integrations, cost optimization engine, and governance framework.',
    launchDate: '2025-01-20',
    customers: 38,
    rating: 4.7,
    reviews: 25
  },
  {
    id: 'ai-powered-devops-automation',
    name: 'AI-Powered DevOps Automation',
    tagline: 'Intelligent CI/CD pipeline optimization and deployment automation',
    price: '$329',
    period: '/month',
    description: 'Next-generation DevOps automation platform that uses AI to optimize CI/CD pipelines, predict deployment risks, and automate infrastructure management. Reduces deployment failures and improves release velocity.',
    features: [
      'AI-powered pipeline optimization',
      'Automated testing and quality gates',
      'Deployment risk prediction',
      'Infrastructure as code automation',
      'Performance monitoring and alerting',
      'Rollback automation',
      'Security scanning integration',
      'Team collaboration tools',
      'Comprehensive analytics and reporting'
    ],
    popular: true,
    icon: '🚀',
    color: 'from-green-600 to-teal-700',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/ai-powered-devops-automation',
    marketPosition: 'Competes with GitLab CI/CD, Jenkins, and CircleCI; adds AI-powered optimization and automation.',
    targetAudience: 'DevOps engineers, Platform teams, Development teams',
    trialDays: 14,
    setupTime: '3 days',
    category: 'DevOps & Automation',
    realService: true,
    technology: ['Kubernetes, Docker, Jenkins, GitLab, Python'],
    integrations: ['GitHub, GitLab, Bitbucket, Slack, Jira, PagerDuty'],
    useCases: ['CI/CD optimization, Deployment automation, Infrastructure management'],
    roi: 'Reduce deployment failures by 70% and improve release velocity by 50%.',
    competitors: ['GitLab CI/CD, Jenkins, CircleCI, GitHub Actions'],
    marketSize: '$20B+ DevOps tools market',
    growthRate: '30% YoY',
    variant: 'devops-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Multi-tenant SaaS with AI optimization engine, CI/CD automation, and comprehensive DevOps tools.',
    launchDate: '2025-01-25',
    customers: 52,
    rating: 4.8,
    reviews: 37
  },
  {
    id: 'enterprise-data-governance-suite',
    name: 'Enterprise Data Governance Suite',
    tagline: 'Comprehensive data governance with privacy compliance and quality management',
    price: '$499',
    period: '/month',
    description: 'Enterprise-grade data governance platform that ensures data quality, privacy compliance, and regulatory adherence. Features data lineage tracking, quality monitoring, and automated compliance reporting.',
    features: [
      'Data lineage and cataloging',
      'Data quality monitoring',
      'Privacy compliance (GDPR, CCPA)',
      'Data classification and tagging',
      'Access control and audit logging',
      'Regulatory reporting automation',
      'Data retention policies',
      'Integration with data warehouses',
      'Real-time data quality alerts'
    ],
    popular: true,
    icon: '📊',
    color: 'from-purple-600 to-violet-700',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/enterprise-data-governance',
    marketPosition: 'Competes with Collibra, Alation, and Informatica; provides comprehensive data governance.',
    targetAudience: 'Data governance teams, Compliance officers, Data architects',
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Data Management',
    realService: true,
    technology: ['Apache Atlas, Apache Ranger, Elasticsearch, PostgreSQL'],
    integrations: ['Snowflake, BigQuery, Redshift, Databricks, Tableau'],
    useCases: ['Data compliance, Quality management, Regulatory reporting'],
    roi: 'Ensure 100% compliance and improve data quality by 60%.',
    competitors: ['Collibra, Alation, Informatica, Data.World'],
    marketSize: '$32B+ data governance market',
    growthRate: '25% YoY',
    variant: 'data-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Multi-tenant SaaS with data governance engine, compliance framework, and quality monitoring.',
    launchDate: '2025-02-01',
    customers: 28,
    rating: 4.8,
    reviews: 19
  },
  {
    id: 'intelligent-network-monitoring',
    name: 'Intelligent Network Monitoring',
    tagline: 'AI-powered network performance monitoring and troubleshooting',
    price: '$279',
    period: '/month',
    description: 'Advanced network monitoring platform that uses AI to detect network issues, predict failures, and provide automated troubleshooting. Features real-time monitoring, performance analytics, and alert management.',
    features: [
      'Real-time network monitoring',
      'AI-powered issue detection',
      'Performance analytics and reporting',
      'Automated troubleshooting',
      'Network topology mapping',
      'Bandwidth utilization tracking',
      'Security threat detection',
      'Mobile app for network engineers',
      'Integration with network devices'
    ],
    popular: true,
    icon: '🌐',
    color: 'from-cyan-600 to-blue-700',
    textColor: 'text-cyan-400',
    link: 'https://ziontechgroup.com/intelligent-network-monitoring',
    marketPosition: 'Alternative to SolarWinds, PRTG, and Nagios; adds AI-powered monitoring and automation.',
    targetAudience: 'Network engineers, IT operations, System administrators',
    trialDays: 14,
    setupTime: '2 days',
    category: 'Network Management',
    realService: true,
    technology: ['Python, SNMP, NetFlow, Elasticsearch, Redis'],
    integrations: ['Cisco, Juniper, Arista, VMware, AWS, Azure'],
    useCases: ['Network monitoring, Performance optimization, Issue resolution'],
    roi: 'Reduce network downtime by 60% and improve issue resolution time by 50%.',
    competitors: ['SolarWinds, PRTG, Nagios, Zabbix'],
    marketSize: '$15B+ network monitoring market',
    growthRate: '20% YoY',
    variant: 'monitoring-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Multi-tenant SaaS with AI monitoring engine, network device integrations, and automated troubleshooting.',
    launchDate: '2025-01-30',
    customers: 67,
    rating: 4.7,
    reviews: 48
  },
  {
    id: 'container-security-platform',
    name: 'Container Security Platform',
    tagline: 'Comprehensive container security with vulnerability scanning and runtime protection',
    price: '$199',
    period: '/month',
    description: 'Enterprise container security platform that provides vulnerability scanning, runtime protection, and compliance monitoring for containerized applications. Integrates with major container platforms and CI/CD tools.',
    features: [
      'Container vulnerability scanning',
      'Runtime security monitoring',
      'Image signing and verification',
      'Compliance monitoring (CIS, NIST)',
      'Integration with CI/CD pipelines',
      'Security policy enforcement',
      'Threat detection and response',
      'Comprehensive reporting',
      'API for custom integrations'
    ],
    popular: true,
    icon: '📦',
    color: 'from-orange-600 to-red-700',
    textColor: 'text-orange-400',
    link: 'https://ziontechgroup.com/container-security-platform',
    marketPosition: 'Competes with Aqua Security, Snyk, and Twistlock; provides comprehensive container security.',
    targetAudience: 'DevOps engineers, Security teams, Platform engineers',
    trialDays: 14,
    setupTime: '1 day',
    category: 'Container Security',
    realService: true,
    technology: ['Kubernetes, Docker, OPA, Falco, PostgreSQL'],
    integrations: ['Docker Hub, ECR, ACR, GCR, Jenkins, GitLab'],
    useCases: ['Container security, Vulnerability management, Compliance'],
    roi: 'Prevent 95% of container security incidents and achieve compliance faster.',
    competitors: ['Aqua Security, Snyk, Twistlock, Anchore'],
    marketSize: '$18B+ container security market',
    growthRate: '45% YoY',
    variant: 'security-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Multi-tenant SaaS with container security engine, vulnerability scanning, and runtime protection.',
    launchDate: '2025-02-05',
    customers: 43,
    rating: 4.8,
    reviews: 31
  },
  {
    id: 'api-gateway-and-management',
    name: 'API Gateway and Management',
    tagline: 'Enterprise API gateway with security, monitoring, and developer portal',
    price: '$249',
    period: '/month',
    description: 'Comprehensive API gateway platform that provides security, rate limiting, monitoring, and developer portal capabilities. Features advanced authentication, analytics, and API versioning.',
    features: [
      'API gateway and routing',
      'Authentication and authorization',
      'Rate limiting and throttling',
      'API monitoring and analytics',
      'Developer portal and documentation',
      'API versioning and lifecycle management',
      'Security policies and threat protection',
      'Integration with identity providers',
      'Comprehensive API analytics'
    ],
    popular: true,
    icon: '🔌',
    color: 'from-emerald-600 to-green-700',
    textColor: 'text-emerald-400',
    link: 'https://ziontechgroup.com/api-gateway-management',
    marketPosition: 'Alternative to Kong, AWS API Gateway, and Azure API Management; provides comprehensive API management.',
    targetAudience: 'API developers, Platform engineers, DevOps teams',
    trialDays: 14,
    setupTime: '2 days',
    category: 'API Management',
    realService: true,
    technology: ['Kong, OpenAPI, OAuth 2.0, JWT, PostgreSQL'],
    integrations: ['Auth0, Okta, AWS Cognito, Azure AD, Google Cloud IAM'],
    useCases: ['API security, Developer experience, API governance'],
    roi: 'Improve API security by 90% and reduce development time by 30%.',
    competitors: ['Kong, AWS API Gateway, Azure API Management, Tyk'],
    marketSize: '$25B+ API management market',
    growthRate: '35% YoY',
    variant: 'api-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Multi-tenant SaaS with API gateway engine, security framework, and developer portal.',
    launchDate: '2025-02-10',
    customers: 56,
    rating: 4.7,
    reviews: 39
  },
  {
    id: 'disaster-recovery-as-a-service',
    name: 'Disaster Recovery as a Service',
    tagline: 'Automated disaster recovery with RTO/RPO optimization and testing',
    price: '$399',
    period: '/month',
    description: 'Enterprise disaster recovery platform that provides automated backup, replication, and recovery capabilities. Features RTO/RPO optimization, automated testing, and multi-cloud recovery options.',
    features: [
      'Automated backup and replication',
      'RTO/RPO optimization',
      'Multi-cloud recovery options',
      'Automated disaster recovery testing',
      'Recovery orchestration',
      'Compliance and audit reporting',
      'Integration with cloud providers',
      'Real-time monitoring and alerting',
      'Recovery time objectives (RTO) management'
    ],
    popular: true,
    icon: '🔄',
    color: 'from-blue-600 to-purple-700',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/disaster-recovery-service',
    marketPosition: 'Competes with AWS DR, Azure Site Recovery, and Veeam; provides comprehensive DRaaS.',
    targetAudience: 'IT operations, Business continuity teams, Risk managers',
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Disaster Recovery',
    realService: true,
    technology: ['VMware, Hyper-V, AWS, Azure, GCP, Veeam'],
    integrations: ['AWS, Azure, GCP, VMware, Hyper-V, Nutanix'],
    useCases: ['Business continuity, Data protection, Compliance'],
    roi: 'Reduce RTO by 80% and ensure 99.9% recovery success rate.',
    competitors: ['AWS DR, Azure Site Recovery, Veeam, Zerto'],
    marketSize: '$20B+ disaster recovery market',
    growthRate: '30% YoY',
    variant: 'backup-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Multi-tenant SaaS with DR orchestration engine, cloud integrations, and automated testing.',
    launchDate: '2025-02-15',
    customers: 34,
    rating: 4.8,
    reviews: 24
  }
];