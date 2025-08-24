export interface ExpandedService {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  price: number;
  currency: string;
  pricingModel: 'one-time' | 'subscription' | 'usage-based' | 'project-based';
  features: string[];
  benefits: string[];
  useCases: string[];
  marketPrice: string;
  contactLink: string;
  tags: string[];
  author: string;
  images: string[];
  createdAt: string;
  aiScore: number;
  rating: number;
  reviewCount: number;
  isNew: boolean;
  isFeatured: boolean;
}

export const EXPANDED_SERVICES: ExpandedService[] = [
  {
    id: 'ai-business-process-automation',
    title: 'AI-Powered Business Process Automation',
    description: 'Intelligent automation platform that uses AI to streamline business processes, reduce manual work, and increase operational efficiency.',
    category: 'AI & Automation',
    subcategory: 'Process Automation',
    price: 2500,
    currency: 'USD',
    pricingModel: 'subscription',
    features: [
      'AI-powered workflow automation',
      'Process mining and optimization',
      'Intelligent document processing',
      'Real-time process monitoring',
      'Custom automation rules engine',
      'Integration with existing systems',
      'Analytics and reporting dashboard',
      '24/7 automated operations'
    ],
    benefits: [
      'Reduce manual work by 70-90%',
      'Improve process accuracy and consistency',
      'Faster processing times',
      'Cost savings through efficiency gains',
      'Scalable automation solutions',
      'Compliance and audit trail',
      'Real-time insights and optimization'
    ],
    useCases: [
      'Invoice processing and approval workflows',
      'Customer onboarding automation',
      'HR process automation',
      'Supply chain optimization',
      'Quality control automation',
      'Compliance monitoring and reporting'
    ],
    marketPrice: '$2,000 - $5,000/month',
    contactLink: 'https://ziontechgroup.com/contact',
    tags: ['AI', 'Automation', 'Business Process', 'Workflow', 'Efficiency'],
    author: 'Zion Tech Group',
    images: ['/images/services/ai-automation-1.jpg', '/images/services/ai-automation-2.jpg'],
    createdAt: '2024-01-15',
    aiScore: 95,
    rating: 4.8,
    reviewCount: 127,
    isNew: true,
    isFeatured: true
  },
  {
    id: 'ai-content-generation-marketing',
    title: 'AI Content Generation & Marketing Suite',
    description: 'Comprehensive AI-powered content creation platform for marketing, social media, and brand communication with advanced personalization.',
    category: 'AI & Automation',
    subcategory: 'Content Creation',
    price: 1800,
    currency: 'USD',
    pricingModel: 'subscription',
    features: [
      'AI-powered content generation',
      'Multi-language content creation',
      'Brand voice consistency',
      'SEO optimization tools',
      'Social media content scheduling',
      'Performance analytics',
      'A/B testing capabilities',
      'Content calendar management'
    ],
    benefits: [
      'Generate content 10x faster',
      'Maintain consistent brand voice',
      'Improve SEO rankings',
      'Increase engagement rates',
      'Reduce content creation costs',
      'Scale content production easily',
      'Data-driven content optimization'
    ],
    useCases: [
      'Blog and article writing',
      'Social media content creation',
      'Email marketing campaigns',
      'Product descriptions',
      'Marketing copy generation',
      'Content localization'
    ],
    marketPrice: '$1,500 - $3,500/month',
    contactLink: 'https://ziontechgroup.com/contact',
    tags: ['AI', 'Content Creation', 'Marketing', 'SEO', 'Social Media'],
    author: 'Zion Tech Group',
    images: ['/images/services/content-ai-1.jpg', '/images/services/content-ai-2.jpg'],
    createdAt: '2024-01-20',
    aiScore: 92,
    rating: 4.7,
    reviewCount: 89,
    isNew: true,
    isFeatured: true
  },
  {
    id: 'zero-trust-security',
    title: 'Zero Trust Security Implementation',
    description: 'Comprehensive zero trust security framework implementation with continuous verification, least privilege access, and advanced threat protection.',
    category: 'Cybersecurity',
    subcategory: 'Zero Trust',
    price: 8500,
    currency: 'USD',
    pricingModel: 'project-based',
    features: [
      'Identity and access management',
      'Multi-factor authentication',
      'Network segmentation',
      'Continuous monitoring',
      'Threat detection and response',
      'Compliance reporting',
      'Security policy enforcement',
      'Incident response automation'
    ],
    benefits: [
      'Reduce security breaches by 90%',
      'Comply with industry regulations',
      'Protect against insider threats',
      'Improve security visibility',
      'Reduce attack surface',
      'Enable secure remote work',
      'Lower security incident costs'
    ],
    useCases: [
      'Enterprise security transformation',
      'Cloud security implementation',
      'Compliance requirements',
      'Remote workforce security',
      'Third-party access management',
      'Critical infrastructure protection'
    ],
    marketPrice: '$7,000 - $15,000',
    contactLink: 'https://ziontechgroup.com/contact',
    tags: ['Security', 'Zero Trust', 'Compliance', 'IAM', 'Threat Protection'],
    author: 'Zion Tech Group',
    images: ['/images/services/zero-trust-1.jpg', '/images/services/zero-trust-2.jpg'],
    createdAt: '2024-01-10',
    aiScore: 98,
    rating: 4.9,
    reviewCount: 156,
    isNew: false,
    isFeatured: true
  },
  {
    id: 'ai-threat-detection-response',
    title: 'AI-Powered Threat Detection & Response',
    description: 'Advanced AI-driven cybersecurity platform that provides real-time threat detection, automated response, and predictive security analytics.',
    category: 'Cybersecurity',
    subcategory: 'Threat Detection',
    price: 4200,
    currency: 'USD',
    pricingModel: 'subscription',
    features: [
      'AI-powered threat detection',
      'Behavioral analysis',
      'Automated incident response',
      'Threat intelligence feeds',
      'Real-time monitoring',
      'Forensic analysis tools',
      'Compliance reporting',
      '24/7 security operations'
    ],
    benefits: [
      'Detect threats 60% faster',
      'Reduce false positives by 80%',
      'Automate 70% of responses',
      'Improve threat visibility',
      'Reduce incident response time',
      'Lower security operation costs',
      'Proactive threat prevention'
    ],
    useCases: [
      'Enterprise security monitoring',
      'Critical infrastructure protection',
      'Financial services security',
      'Healthcare data protection',
      'Government security',
      'Retail fraud prevention'
    ],
    marketPrice: '$3,500 - $6,000/month',
    contactLink: 'https://ziontechgroup.com/contact',
    tags: ['AI', 'Security', 'Threat Detection', 'Incident Response', 'Analytics'],
    author: 'Zion Tech Group',
    images: ['/images/services/threat-detection-1.jpg', '/images/services/threat-detection-2.jpg'],
    createdAt: '2024-01-25',
    aiScore: 96,
    rating: 4.8,
    reviewCount: 203,
    isNew: true,
    isFeatured: true
  },
  {
    id: 'multi-cloud-orchestration',
    title: 'Multi-Cloud Orchestration Platform',
    description: 'Enterprise-grade platform for managing, orchestrating, and optimizing workloads across multiple cloud providers with unified governance.',
    category: 'Cloud & DevOps',
    subcategory: 'Cloud Management',
    price: 3200,
    currency: 'USD',
    pricingModel: 'subscription',
    features: [
      'Multi-cloud resource management',
      'Automated workload placement',
      'Cost optimization engine',
      'Unified monitoring dashboard',
      'Policy-based governance',
      'Disaster recovery orchestration',
      'Performance optimization',
      'Compliance management'
    ],
    benefits: [
      'Reduce cloud costs by 25-40%',
      'Improve resource utilization',
      'Avoid vendor lock-in',
      'Enhance disaster recovery',
      'Simplify cloud operations',
      'Ensure compliance',
      'Optimize performance'
    ],
    useCases: [
      'Enterprise cloud strategy',
      'Cost optimization initiatives',
      'Disaster recovery planning',
      'Compliance requirements',
      'Performance optimization',
      'Vendor diversification'
    ],
    marketPrice: '$2,500 - $5,000/month',
    contactLink: 'https://ziontechgroup.com/contact',
    tags: ['Cloud', 'DevOps', 'Orchestration', 'Cost Optimization', 'Governance'],
    author: 'Zion Tech Group',
    images: ['/images/services/multi-cloud-1.jpg', '/images/services/multi-cloud-2.jpg'],
    createdAt: '2024-01-18',
    aiScore: 94,
    rating: 4.7,
    reviewCount: 178,
    isNew: false,
    isFeatured: true
  },
  {
    id: 'devops-automation-cicd',
    title: 'DevOps Automation & CI/CD Pipeline',
    description: 'End-to-end DevOps automation platform with advanced CI/CD pipelines, infrastructure as code, and automated testing capabilities.',
    category: 'Cloud & DevOps',
    subcategory: 'DevOps',
    price: 2800,
    currency: 'USD',
    pricingModel: 'subscription',
    features: [
      'Automated CI/CD pipelines',
      'Infrastructure as code',
      'Automated testing suite',
      'Deployment automation',
      'Monitoring and alerting',
      'Security scanning',
      'Performance testing',
      'Rollback capabilities'
    ],
    benefits: [
      'Deploy 10x faster',
      'Reduce deployment failures by 80%',
      'Improve code quality',
      'Automate repetitive tasks',
      'Enhance team productivity',
      'Reduce manual errors',
      'Faster time to market'
    ],
    useCases: [
      'Software development teams',
      'Digital transformation projects',
      'Microservices architecture',
      'Cloud-native applications',
      'Legacy system modernization',
      'Continuous delivery initiatives'
    ],
    marketPrice: '$2,000 - $4,500/month',
    contactLink: 'https://ziontechgroup.com/contact',
    tags: ['DevOps', 'CI/CD', 'Automation', 'Infrastructure', 'Testing'],
    author: 'Zion Tech Group',
    images: ['/images/services/devops-1.jpg', '/images/services/devops-2.jpg'],
    createdAt: '2024-01-22',
    aiScore: 93,
    rating: 4.6,
    reviewCount: 145,
    isNew: false,
    isFeatured: false
  },
  {
    id: 'real-time-business-intelligence',
    title: 'Real-Time Business Intelligence Platform',
    description: 'Advanced BI platform providing real-time insights, interactive dashboards, and predictive analytics for data-driven decision making.',
    category: 'Data & Analytics',
    subcategory: 'Business Intelligence',
    price: 3800,
    currency: 'USD',
    pricingModel: 'subscription',
    features: [
      'Real-time data processing',
      'Interactive dashboards',
      'Predictive analytics',
      'Data visualization tools',
      'Automated reporting',
      'Mobile BI access',
      'Data integration',
      'Advanced analytics'
    ],
    benefits: [
      'Make decisions 5x faster',
      'Improve data accuracy',
      'Identify trends early',
      'Optimize business processes',
      'Increase operational efficiency',
      'Better resource allocation',
      'Competitive advantage'
    ],
    useCases: [
      'Executive dashboards',
      'Sales performance tracking',
      'Operational monitoring',
      'Financial reporting',
      'Customer analytics',
      'Supply chain optimization'
    ],
    marketPrice: '$3,000 - $6,000/month',
    contactLink: 'https://ziontechgroup.com/contact',
    tags: ['BI', 'Analytics', 'Real-time', 'Dashboards', 'Predictive'],
    author: 'Zion Tech Group',
    images: ['/images/services/bi-platform-1.jpg', '/images/services/bi-platform-2.jpg'],
    createdAt: '2024-01-12',
    aiScore: 91,
    rating: 4.5,
    reviewCount: 234,
    isNew: false,
    isFeatured: false
  },
  {
    id: 'data-governance-compliance',
    title: 'Data Governance & Compliance Platform',
    description: 'Comprehensive data governance solution ensuring data quality, privacy, and regulatory compliance across the organization.',
    category: 'Data & Analytics',
    subcategory: 'Data Governance',
    price: 4500,
    currency: 'USD',
    pricingModel: 'subscription',
    features: [
      'Data quality management',
      'Privacy protection tools',
      'Compliance monitoring',
      'Data lineage tracking',
      'Policy enforcement',
      'Audit reporting',
      'Risk assessment',
      'Data catalog'
    ],
    benefits: [
      'Ensure regulatory compliance',
      'Improve data quality',
      'Reduce compliance risks',
      'Protect customer privacy',
      'Enhance data trust',
      'Streamline audits',
      'Reduce legal exposure'
    ],
    useCases: [
      'GDPR compliance',
      'HIPAA compliance',
      'SOX compliance',
      'Data privacy protection',
      'Data quality improvement',
      'Regulatory reporting'
    ],
    marketPrice: '$3,500 - $7,000/month',
    contactLink: 'https://ziontechgroup.com/contact',
    tags: ['Data Governance', 'Compliance', 'Privacy', 'Quality', 'Regulatory'],
    author: 'Zion Tech Group',
    images: ['/images/services/data-governance-1.jpg', '/images/services/data-governance-2.jpg'],
    createdAt: '2024-01-08',
    aiScore: 97,
    rating: 4.8,
    reviewCount: 189,
    isNew: false,
    isFeatured: true
  },
  {
    id: 'digital-workplace-transformation',
    title: 'Digital Workplace Transformation',
    description: 'Comprehensive digital transformation solution modernizing workplace technology, collaboration tools, and employee experience.',
    category: 'Digital Transformation',
    subcategory: 'Workplace Modernization',
    price: 6500,
    currency: 'USD',
    pricingModel: 'project-based',
    features: [
      'Modern collaboration tools',
      'Digital workflow automation',
      'Employee experience platform',
      'Mobile-first design',
      'Integration services',
      'Change management',
      'Training and adoption',
      'Performance analytics'
    ],
    benefits: [
      'Improve productivity by 30%',
      'Enhance employee satisfaction',
      'Reduce operational costs',
      'Enable remote work',
      'Streamline processes',
      'Improve communication',
      'Faster decision making'
    ],
    useCases: [
      'Remote work enablement',
      'Collaboration improvement',
      'Process digitization',
      'Employee experience enhancement',
      'Technology modernization',
      'Change management'
    ],
    marketPrice: '$5,000 - $12,000',
    contactLink: 'https://ziontechgroup.com/contact',
    tags: ['Digital Transformation', 'Workplace', 'Collaboration', 'Employee Experience', 'Modernization'],
    author: 'Zion Tech Group',
    images: ['/images/services/digital-workplace-1.jpg', '/images/services/digital-workplace-2.jpg'],
    createdAt: '2024-01-05',
    aiScore: 89,
    rating: 4.4,
    reviewCount: 167,
    isNew: false,
    isFeatured: false
  },
  {
    id: 'customer-experience-optimization',
    title: 'Customer Experience Optimization Platform',
    description: 'AI-powered platform for optimizing customer journeys, personalizing experiences, and improving customer satisfaction and loyalty.',
    category: 'Digital Transformation',
    subcategory: 'Customer Experience',
    price: 3900,
    currency: 'USD',
    pricingModel: 'subscription',
    features: [
      'Customer journey mapping',
      'Personalization engine',
      'Omnichannel optimization',
      'Customer feedback analysis',
      'Predictive analytics',
      'A/B testing tools',
      'Performance monitoring',
      'ROI measurement'
    ],
    benefits: [
      'Increase customer satisfaction by 40%',
      'Improve conversion rates',
      'Reduce customer churn',
      'Enhance brand loyalty',
      'Optimize customer journeys',
      'Data-driven decisions',
      'Better customer insights'
    ],
    useCases: [
      'E-commerce optimization',
      'Customer service improvement',
      'Marketing personalization',
      'Product experience enhancement',
      'Customer journey optimization',
      'Loyalty program management'
    ],
    marketPrice: '$3,000 - $6,500/month',
    contactLink: 'https://ziontechgroup.com/contact',
    tags: ['Customer Experience', 'Personalization', 'Analytics', 'Optimization', 'Journey Mapping'],
    author: 'Zion Tech Group',
    images: ['/images/services/cx-optimization-1.jpg', '/images/services/cx-optimization-2.jpg'],
    createdAt: '2024-01-30',
    aiScore: 90,
    rating: 4.6,
    reviewCount: 112,
    isNew: true,
    isFeatured: false
  },
  {
    id: 'enterprise-iot-platform',
    title: 'Enterprise IoT Platform & Analytics',
    description: 'Scalable IoT platform for enterprise applications with real-time data collection, analytics, and intelligent automation capabilities.',
    category: 'IoT & Edge Computing',
    subcategory: 'IoT Platform',
    price: 5200,
    currency: 'USD',
    pricingModel: 'subscription',
    features: [
      'IoT device management',
      'Real-time data collection',
      'Edge computing capabilities',
      'Advanced analytics',
      'Predictive maintenance',
      'Security and privacy',
      'Scalable architecture',
      'Integration APIs'
    ],
    benefits: [
      'Monitor assets in real-time',
      'Predict equipment failures',
      'Optimize operations',
      'Reduce maintenance costs',
      'Improve safety',
      'Data-driven insights',
      'Scalable IoT deployment'
    ],
    useCases: [
      'Smart manufacturing',
      'Asset monitoring',
      'Predictive maintenance',
      'Energy management',
      'Supply chain tracking',
      'Environmental monitoring'
    ],
    marketPrice: '$4,000 - $8,000/month',
    contactLink: 'https://ziontechgroup.com/contact',
    tags: ['IoT', 'Edge Computing', 'Analytics', 'Predictive Maintenance', 'Asset Monitoring'],
    author: 'Zion Tech Group',
    images: ['/images/services/iot-platform-1.jpg', '/images/services/iot-platform-2.jpg'],
    createdAt: '2024-01-14',
    aiScore: 88,
    rating: 4.3,
    reviewCount: 98,
    isNew: false,
    isFeatured: false
  },
  {
    id: 'enterprise-blockchain-solutions',
    title: 'Enterprise Blockchain Solutions',
    description: 'Custom blockchain solutions for enterprise applications including supply chain, identity management, and secure transactions.',
    category: 'Blockchain & Web3',
    subcategory: 'Blockchain Development',
    price: 7500,
    currency: 'USD',
    pricingModel: 'project-based',
    features: [
      'Custom blockchain development',
      'Smart contract development',
      'Supply chain solutions',
      'Identity management',
      'Secure transactions',
      'Integration services',
      'Compliance features',
      'Performance optimization'
    ],
    benefits: [
      'Enhance transparency',
      'Improve security',
      'Reduce fraud',
      'Streamline processes',
      'Enable trustless transactions',
      'Compliance automation',
      'Cost reduction'
    ],
    useCases: [
      'Supply chain tracking',
      'Digital identity management',
      'Secure transactions',
      'Asset tokenization',
      'Compliance automation',
      'Cross-border payments'
    ],
    marketPrice: '$6,000 - $15,000',
    contactLink: 'https://ziontechgroup.com/contact',
    tags: ['Blockchain', 'Web3', 'Smart Contracts', 'Supply Chain', 'Identity Management'],
    author: 'Zion Tech Group',
    images: ['/images/services/blockchain-1.jpg', '/images/services/blockchain-2.jpg'],
    createdAt: '2024-01-28',
    aiScore: 85,
    rating: 4.2,
    reviewCount: 76,
    isNew: true,
    isFeatured: false
  }
];

export const SERVICE_CATEGORIES = [
  'AI & Automation',
  'Cybersecurity',
  'Cloud & DevOps',
  'Data & Analytics',
  'Digital Transformation',
  'IoT & Edge Computing',
  'Blockchain & Web3'
];

export const FEATURED_SERVICES = EXPANDED_SERVICES.filter(service => service.isFeatured);
export const NEW_SERVICES = EXPANDED_SERVICES.filter(service => service.isNew);