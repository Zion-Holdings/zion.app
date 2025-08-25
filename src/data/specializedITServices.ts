export interface SpecializedITService {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  price: {
    starter: number;
    professional: number;
    enterprise: number;
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
  deliveryTime: string;
}

export const SPECIALIZED_IT_SERVICES: SpecializedITService[] = [
  // DevOps Automation Platform
  {
    id: 'zion-devops-automation',
    title: 'Zion DevOps Automation Platform',
    description: 'Comprehensive DevOps automation platform that streamlines CI/CD pipelines, infrastructure management, and deployment processes across multiple environments.',
    category: 'DevOps & Automation',
    subcategory: 'CI/CD & Deployment',
    price: {
      starter: 299,
      professional: 799,
      enterprise: 1999,
      currency: '$'
    },
    features: [
      'Multi-environment CI/CD pipelines',
      'Infrastructure as Code (IaC)',
      'Automated testing and deployment',
      'Container orchestration',
      'Monitoring and alerting',
      'Security scanning integration',
      'Multi-cloud deployment',
      'Performance optimization'
    ],
    benefits: [
      'Reduce deployment time by 80%',
      'Improve code quality and reliability',
      'Automate infrastructure management',
      'Reduce human errors',
      'Scale operations efficiently'
    ],
    targetAudience: [
      'DevOps engineers',
      'Software developers',
      'IT operations teams',
      'Startups and enterprises',
      'Cloud-native companies'
    ],
    useCases: [
      'Continuous integration and deployment',
      'Infrastructure automation',
      'Container management',
      'Multi-cloud deployments',
      'DevOps transformation'
    ],
    integration: [
      'GitHub',
      'GitLab',
      'Jenkins',
      'Docker',
      'Kubernetes',
      'AWS',
      'Azure',
      'GCP',
      'Terraform'
    ],
    pricingTier: 'Professional',
    website: 'https://ziontechgroup.com/services/devops-automation',
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008, Middletown DE 19709'
    },
    rating: 4.8,
    reviewCount: 189,
    launchDate: '2024-01-25',
    status: 'Active',
    marketPrice: '$299 - $1,999/month',
    deliveryTime: '3-4 weeks'
  },

  // API Management & Gateway
  {
    id: 'zion-api-management-gateway',
    title: 'Zion API Management & Gateway',
    description: 'Enterprise-grade API management platform that provides secure, scalable, and monitored API access with advanced analytics and developer portal capabilities.',
    category: 'API & Integration',
    subcategory: 'API Management',
    price: {
      starter: 199,
      professional: 599,
      enterprise: 1499,
      currency: '$'
    },
    features: [
      'API gateway and routing',
      'Rate limiting and throttling',
      'Authentication and authorization',
      'API analytics and monitoring',
      'Developer portal',
      'Documentation generation',
      'Version management',
      'Security policies'
    ],
    benefits: [
      'Centralize API management',
      'Improve API security',
      'Monitor API performance',
      'Streamline developer onboarding',
      'Reduce API maintenance costs'
    ],
    targetAudience: [
      'API developers',
      'Integration teams',
      'Enterprise architects',
      'Startups and enterprises',
      'Digital transformation teams'
    ],
    useCases: [
      'Microservices architecture',
      'Third-party integrations',
      'Mobile app backends',
      'Partner API access',
      'Internal API governance'
    ],
    integration: [
      'Kong',
      'AWS API Gateway',
      'Azure API Management',
      'Postman',
      'Swagger',
      'OAuth providers',
      'LDAP/Active Directory'
    ],
    pricingTier: 'Professional',
    website: 'https://ziontechgroup.com/services/api-management-gateway',
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008, Middletown DE 19709'
    },
    rating: 4.7,
    reviewCount: 145,
    launchDate: '2024-02-10',
    status: 'Active',
    marketPrice: '$199 - $1,499/month',
    deliveryTime: '2-3 weeks'
  },

  // Data Pipeline & ETL Platform
  {
    id: 'zion-data-pipeline-etl',
    title: 'Zion Data Pipeline & ETL Platform',
    description: 'Scalable data pipeline and ETL platform that automates data extraction, transformation, and loading processes with real-time processing capabilities.',
    category: 'Data & Analytics',
    subcategory: 'Data Engineering',
    price: {
      starter: 399,
      professional: 999,
      enterprise: 2499,
      currency: '$'
    },
    features: [
      'Real-time data streaming',
      'Batch processing pipelines',
      'Data transformation engine',
      'Schema evolution management',
      'Data quality monitoring',
      'Error handling and recovery',
      'Scalable infrastructure',
      'Multi-source connectors'
    ],
    benefits: [
      'Automate data workflows',
      'Improve data quality',
      'Reduce processing time',
      'Scale data operations',
      'Enable real-time analytics'
    ],
    targetAudience: [
      'Data engineers',
      'Data scientists',
      'Analytics teams',
      'Business intelligence teams',
      'Enterprise organizations'
    ],
    useCases: [
      'Data warehouse automation',
      'Real-time analytics',
      'Customer data integration',
      'IoT data processing',
      'Business intelligence automation'
    ],
    integration: [
      'Apache Kafka',
      'Apache Spark',
      'Snowflake',
      'BigQuery',
      'Redshift',
      'PostgreSQL',
      'MongoDB',
      'REST APIs'
    ],
    pricingTier: 'Professional',
    website: 'https://ziontechgroup.com/services/data-pipeline-etl',
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008, Middletown DE 19709'
    },
    rating: 4.9,
    reviewCount: 167,
    launchDate: '2024-01-30',
    status: 'Active',
    marketPrice: '$399 - $2,499/month',
    deliveryTime: '4-5 weeks'
  },

  // Network Security & Monitoring
  {
    id: 'zion-network-security-monitoring',
    title: 'Zion Network Security & Monitoring',
    description: 'Advanced network security and monitoring platform that provides real-time threat detection, network visibility, and automated incident response.',
    category: 'Network Security',
    subcategory: 'Threat Detection',
    price: {
      starter: 499,
      professional: 1299,
      enterprise: 2999,
      currency: '$'
    },
    features: [
      'Real-time threat detection',
      'Network traffic analysis',
      'Behavioral analytics',
      'Automated incident response',
      'Vulnerability scanning',
      'Compliance reporting',
      'SIEM integration',
      '24/7 monitoring'
    ],
    benefits: [
      'Detect threats in real-time',
      'Reduce incident response time',
      'Improve network visibility',
      'Automate security operations',
      'Maintain compliance'
    ],
    targetAudience: [
      'Network administrators',
      'Security analysts',
      'CISOs and security teams',
      'IT managers',
      'Enterprise organizations'
    ],
    useCases: [
      'Network security monitoring',
      'Threat hunting',
      'Incident response',
      'Compliance monitoring',
      'Security operations center'
    ],
    integration: [
      'Splunk',
      'ELK Stack',
      'Cisco',
      'Palo Alto Networks',
      'Fortinet',
      'Active Directory',
      'LDAP',
      'SIEM systems'
    ],
    pricingTier: 'Professional',
    website: 'https://ziontechgroup.com/services/network-security-monitoring',
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008, Middletown DE 19709'
    },
    rating: 4.8,
    reviewCount: 203,
    launchDate: '2024-02-05',
    status: 'Active',
    marketPrice: '$499 - $2,999/month',
    deliveryTime: '3-4 weeks'
  },

  // Cloud Migration & Modernization
  {
    id: 'zion-cloud-migration-modernization',
    title: 'Zion Cloud Migration & Modernization',
    description: 'Comprehensive cloud migration and modernization platform that helps organizations transition to cloud-native architectures with minimal disruption.',
    category: 'Cloud & Infrastructure',
    subcategory: 'Migration & Modernization',
    price: {
      starter: 999,
      professional: 2499,
      enterprise: 4999,
      currency: '$'
    },
    features: [
      'Migration assessment tools',
      'Automated migration workflows',
      'Application modernization',
      'Performance optimization',
      'Cost analysis and planning',
      'Security and compliance',
      'Training and support',
      'Post-migration monitoring'
    ],
    benefits: [
      'Reduce migration risks',
      'Accelerate cloud adoption',
      'Optimize cloud costs',
      'Improve application performance',
      'Enhance security posture'
    ],
    targetAudience: [
      'IT directors',
      'Cloud architects',
      'DevOps teams',
      'Enterprise organizations',
      'Digital transformation teams'
    ],
    useCases: [
      'Legacy application migration',
      'Data center consolidation',
      'Application modernization',
      'Multi-cloud strategies',
      'Disaster recovery planning'
    ],
    integration: [
      'AWS Migration Hub',
      'Azure Migrate',
      'Google Cloud Migrate',
      'VMware',
      'Hyper-V',
      'Docker',
      'Kubernetes',
      'Terraform'
    ],
    pricingTier: 'Enterprise',
    website: 'https://ziontechgroup.com/services/cloud-migration-modernization',
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008, Middletown DE 19709'
    },
    rating: 4.9,
    reviewCount: 89,
    launchDate: '2024-02-20',
    status: 'Active',
    marketPrice: '$999 - $4,999/month',
    deliveryTime: '6-8 weeks'
  }
];

export const SPECIALIZED_IT_CATEGORIES = [
  { 
    label: 'DevOps & Automation', 
    value: 'devops-automation',
    description: 'CI/CD pipelines and infrastructure automation'
  },
  { 
    label: 'API & Integration', 
    value: 'api-integration',
    description: 'API management and integration solutions'
  },
  { 
    label: 'Data & Analytics', 
    value: 'data-analytics',
    description: 'Data engineering and analytics platforms'
  },
  { 
    label: 'Network Security', 
    value: 'network-security',
    description: 'Network security and threat detection'
  },
  { 
    label: 'Cloud & Infrastructure', 
    value: 'cloud-infrastructure',
    description: 'Cloud migration and modernization'
  }
];

export const CONTACT_INFO = {
  mobile: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  address: "364 E Main St STE 1008, Middletown DE 19709",
  website: "https://ziontechgroup.com"
};