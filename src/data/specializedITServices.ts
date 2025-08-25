export interface SpecializedITService {
  id: string;
  title: string;
  description: string;
  category: 'Enterprise Infrastructure' | 'Digital Transformation' | 'Industry Solutions' | 'Advanced Analytics' | 'Integration Services' | 'Managed Services' | 'Consulting' | 'Training & Support';
  subcategory: string;
  price: {
    monthly: number;
    yearly: number;
    enterprise: number;
    oneTime: number;
    currency: string;
  };
  features: string[];
  benefits: string[];
  useCases: string[];
  targetAudience: string[];
  technologies: string[];
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
  industryFocus: string[];
}

export const SPECIALIZED_IT_SERVICES: SpecializedITService[] = [
  // Enterprise Infrastructure Services
  {
    id: 'zion-enterprise-architecture-transformation',
    title: 'Zion Enterprise Architecture Transformation',
    description: 'Comprehensive enterprise architecture transformation service that modernizes legacy systems, implements microservices architecture, and establishes scalable digital foundations.',
    category: 'Enterprise Infrastructure',
    subcategory: 'Architecture Modernization',
    price: {
      monthly: 0,
      yearly: 0,
      enterprise: 0,
      oneTime: 50000,
      currency: '$'
    },
    features: [
      'Legacy system assessment and analysis',
      'Microservices architecture design',
      'API-first strategy development',
      'Data architecture optimization',
      'Security architecture implementation',
      'Performance optimization',
      'Scalability planning',
      'Migration roadmap creation'
    ],
    benefits: [
      'Reduce technical debt by 60%',
      'Improve system performance by 300%',
      'Enable rapid feature development',
      'Enhance system reliability',
      'Future-proof architecture foundation'
    ],
    useCases: [
      'Legacy system modernization',
      'Digital transformation initiatives',
      'Microservices migration',
      'API strategy development',
      'Enterprise scalability planning'
    ],
    targetAudience: [
      'Chief Technology Officers',
      'Enterprise Architects',
      'IT Directors',
      'Digital Transformation Leaders',
      'System Architects'
    ],
    technologies: [
      'Microservices Architecture',
      'API Management',
      'Container Technologies',
      'Cloud Platforms',
      'DevOps Practices'
    ],
    integration: [
      'Existing enterprise systems',
      'Cloud platforms',
      'Monitoring tools',
      'Security frameworks',
      'Development tools'
    ],
    pricingTier: 'Custom',
    website: 'https://ziontechgroup.com/enterprise-architecture',
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008, Middletown DE 19709'
    },
    rating: 4.9,
    reviewCount: 45,
    launchDate: '2024-01-10',
    status: 'Active',
    marketPrice: '$50,000 - $500,000',
    estimatedDelivery: '12-24 weeks',
    supportLevel: 'Dedicated Enterprise Support Team',
    industryFocus: ['Financial Services', 'Healthcare', 'Manufacturing', 'Retail', 'Government']
  },

  {
    id: 'zion-hybrid-cloud-orchestration-platform',
    title: 'Zion Hybrid Cloud Orchestration Platform',
    description: 'Advanced hybrid cloud orchestration platform that seamlessly manages workloads across on-premises, private cloud, and public cloud environments with intelligent resource optimization.',
    category: 'Enterprise Infrastructure',
    subcategory: 'Cloud Orchestration',
    price: {
      monthly: 899,
      yearly: 8990,
      enterprise: 29999,
      oneTime: 0,
      currency: '$'
    },
    features: [
      'Multi-cloud workload management',
      'Intelligent resource allocation',
      'Cost optimization algorithms',
      'Security and compliance automation',
      'Performance monitoring',
      'Disaster recovery orchestration',
      'API management',
      'Custom dashboards'
    ],
    benefits: [
      'Reduce cloud costs by 40%',
      'Improve resource utilization by 60%',
      'Enhance security posture',
      'Simplify multi-cloud management',
      'Accelerate deployment cycles'
    ],
    useCases: [
      'Hybrid cloud management',
      'Multi-cloud operations',
      'Workload optimization',
      'Cost management',
      'Compliance automation'
    ],
    targetAudience: [
      'Cloud Architects',
      'DevOps Engineers',
      'Infrastructure Managers',
      'IT Operations Teams',
      'Security Engineers'
    ],
    technologies: [
      'Kubernetes',
      'Terraform',
      'Cloud APIs',
      'Monitoring tools',
      'Security frameworks'
    ],
    integration: [
      'AWS, Azure, GCP',
      'On-premises systems',
      'Monitoring platforms',
      'Security tools',
      'CI/CD pipelines'
    ],
    pricingTier: 'Enterprise',
    website: 'https://ziontechgroup.com/hybrid-cloud',
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008, Middletown DE 19709'
    },
    rating: 4.8,
    reviewCount: 78,
    launchDate: '2024-02-15',
    status: 'Active',
    marketPrice: '$899 - $29,999/month',
    estimatedDelivery: '4-6 weeks',
    supportLevel: '24/7 Enterprise Support',
    industryFocus: ['Technology', 'Financial Services', 'Healthcare', 'Manufacturing', 'Retail']
  },

  // Digital Transformation Services
  {
    id: 'zion-digital-workplace-transformation',
    title: 'Zion Digital Workplace Transformation',
    description: 'End-to-end digital workplace transformation service that modernizes collaboration, communication, and productivity tools for the hybrid work environment.',
    category: 'Digital Transformation',
    subcategory: 'Workplace Modernization',
    price: {
      monthly: 0,
      yearly: 0,
      enterprise: 0,
      oneTime: 75000,
      currency: '$'
    },
    features: [
      'Collaboration platform implementation',
      'Communication tools integration',
      'Productivity suite deployment',
      'Mobile-first strategy',
      'Security and compliance',
      'Change management',
      'Training and adoption',
      'Ongoing optimization'
    ],
    benefits: [
      'Increase productivity by 35%',
      'Improve employee satisfaction',
      'Reduce operational costs',
      'Enhance collaboration',
      'Support hybrid work models'
    ],
    useCases: [
      'Remote work enablement',
      'Collaboration improvement',
      'Productivity enhancement',
      'Digital transformation',
      'Workplace modernization'
    ],
    targetAudience: [
      'Chief Human Resources Officers',
      'IT Directors',
      'Change Management Teams',
      'Operations Managers',
      'Employee Experience Leaders'
    ],
    technologies: [
      'Microsoft 365',
      'Google Workspace',
      'Slack, Teams',
      'Video conferencing',
      'Mobile applications'
    ],
    integration: [
      'Existing IT systems',
      'HR platforms',
      'Security tools',
      'Communication systems',
      'Productivity tools'
    ],
    pricingTier: 'Custom',
    website: 'https://ziontechgroup.com/digital-workplace',
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008, Middletown DE 19709'
    },
    rating: 4.7,
    reviewCount: 92,
    launchDate: '2024-01-25',
    status: 'Active',
    marketPrice: '$75,000 - $300,000',
    estimatedDelivery: '16-20 weeks',
    supportLevel: 'Dedicated Transformation Team',
    industryFocus: ['Professional Services', 'Technology', 'Financial Services', 'Healthcare', 'Education']
  },

  {
    id: 'zion-customer-experience-transformation',
    title: 'Zion Customer Experience Transformation',
    description: 'Comprehensive customer experience transformation service that leverages AI, analytics, and digital technologies to create seamless, personalized customer journeys.',
    category: 'Digital Transformation',
    subcategory: 'Customer Experience',
    price: {
      monthly: 0,
      yearly: 0,
      enterprise: 0,
      oneTime: 100000,
      currency: '$'
    },
    features: [
      'Customer journey mapping',
      'Omnichannel strategy',
      'AI-powered personalization',
      'Analytics and insights',
      'Integration services',
      'Change management',
      'Performance optimization',
      'Ongoing support'
    ],
    benefits: [
      'Increase customer satisfaction by 45%',
      'Improve conversion rates by 30%',
      'Reduce customer churn',
      'Enhance brand loyalty',
      'Optimize customer lifetime value'
    ],
    useCases: [
      'Customer experience improvement',
      'Digital transformation',
      'Omnichannel strategy',
      'Personalization implementation',
      'Customer journey optimization'
    ],
    targetAudience: [
      'Chief Customer Officers',
      'Marketing Directors',
      'Customer Experience Managers',
      'Digital Transformation Leaders',
      'Product Managers'
    ],
    technologies: [
      'Customer Data Platforms',
      'AI and Machine Learning',
      'Analytics platforms',
      'Marketing automation',
      'CRM systems'
    ],
    integration: [
      'Existing customer systems',
      'Marketing platforms',
      'Analytics tools',
      'CRM systems',
      'E-commerce platforms'
    ],
    pricingTier: 'Custom',
    website: 'https://ziontechgroup.com/customer-experience',
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008, Middletown DE 19709'
    },
    rating: 4.9,
    reviewCount: 67,
    launchDate: '2024-03-05',
    status: 'Active',
    marketPrice: '$100,000 - $500,000',
    estimatedDelivery: '20-24 weeks',
    supportLevel: 'Dedicated CX Transformation Team',
    industryFocus: ['Retail', 'E-commerce', 'Financial Services', 'Healthcare', 'Travel & Hospitality']
  },

  // Industry Solutions
  {
    id: 'zion-healthcare-digital-transformation-suite',
    title: 'Zion Healthcare Digital Transformation Suite',
    description: 'Comprehensive digital transformation solution specifically designed for healthcare organizations, including patient engagement, operational efficiency, and compliance automation.',
    category: 'Industry Solutions',
    subcategory: 'Healthcare',
    price: {
      monthly: 1299,
      yearly: 12990,
      enterprise: 39999,
      oneTime: 0,
      currency: '$'
    },
    features: [
      'Patient portal and engagement',
      'Electronic health records integration',
      'Telemedicine platform',
      'Compliance automation (HIPAA)',
      'Operational analytics',
      'Staff productivity tools',
      'Security and privacy',
      'Mobile applications'
    ],
    benefits: [
      'Improve patient satisfaction by 50%',
      'Reduce administrative costs by 30%',
      'Enhance compliance automation',
      'Streamline operations',
      'Improve care quality'
    ],
    useCases: [
      'Patient engagement',
      'Operational efficiency',
      'Compliance management',
      'Telemedicine services',
      'Healthcare analytics'
    ],
    targetAudience: [
      'Chief Medical Officers',
      'Healthcare Administrators',
      'IT Directors',
      'Compliance Officers',
      'Clinical Staff'
    ],
    technologies: [
      'Healthcare APIs',
      'HIPAA-compliant platforms',
      'Telemedicine solutions',
      'Analytics tools',
      'Security frameworks'
    ],
    integration: [
      'Electronic Health Records',
      'Practice management systems',
      'Billing systems',
      'Laboratory systems',
      'Pharmacy systems'
    ],
    pricingTier: 'Enterprise',
    website: 'https://ziontechgroup.com/healthcare-solutions',
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008, Middletown DE 19709'
    },
    rating: 4.8,
    reviewCount: 156,
    launchDate: '2024-01-15',
    status: 'Active',
    marketPrice: '$1,299 - $39,999/month',
    estimatedDelivery: '8-12 weeks',
    supportLevel: 'Healthcare-Specific Support Team',
    industryFocus: ['Healthcare', 'Medical Practices', 'Hospitals', 'Clinics', 'Healthcare Networks']
  },

  {
    id: 'zion-financial-services-innovation-platform',
    title: 'Zion Financial Services Innovation Platform',
    description: 'Advanced financial services innovation platform that enables digital banking, fintech integration, regulatory compliance, and customer experience transformation.',
    category: 'Industry Solutions',
    subcategory: 'Financial Services',
    price: {
      monthly: 1999,
      yearly: 19990,
      enterprise: 59999,
      oneTime: 0,
      currency: '$'
    },
    features: [
      'Digital banking platform',
      'Fintech integration hub',
      'Regulatory compliance automation',
      'Risk management tools',
      'Customer analytics',
      'API management',
      'Security and fraud detection',
      'Mobile banking applications'
    ],
    benefits: [
      'Accelerate digital transformation',
      'Improve regulatory compliance',
      'Enhance customer experience',
      'Reduce operational costs',
      'Enable fintech partnerships'
    ],
    useCases: [
      'Digital banking',
      'Fintech integration',
      'Regulatory compliance',
      'Risk management',
      'Customer experience'
    ],
    targetAudience: [
      'Chief Technology Officers',
      'Chief Risk Officers',
      'Digital Banking Directors',
      'Compliance Officers',
      'Product Managers'
    ],
    technologies: [
      'Banking APIs',
      'Blockchain technology',
      'AI and Machine Learning',
      'Security frameworks',
      'Compliance tools'
    ],
    integration: [
      'Core banking systems',
      'Payment processors',
      'Regulatory reporting systems',
      'Risk management platforms',
      'Customer systems'
    ],
    pricingTier: 'Enterprise',
    website: 'https://ziontechgroup.com/financial-services',
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008, Middletown DE 19709'
    },
    rating: 4.9,
    reviewCount: 89,
    launchDate: '2024-02-20',
    status: 'Active',
    marketPrice: '$1,999 - $59,999/month',
    estimatedDelivery: '12-16 weeks',
    supportLevel: 'Financial Services Expert Support',
    industryFocus: ['Banks', 'Credit Unions', 'Fintech Companies', 'Investment Firms', 'Insurance Companies']
  },

  // Advanced Analytics Services
  {
    id: 'zion-real-time-business-intelligence-platform',
    title: 'Zion Real-Time Business Intelligence Platform',
    description: 'Advanced real-time business intelligence platform that provides instant insights, predictive analytics, and automated reporting for data-driven decision making.',
    category: 'Advanced Analytics',
    subcategory: 'Business Intelligence',
    price: {
      monthly: 599,
      yearly: 5990,
      enterprise: 19999,
      oneTime: 0,
      currency: '$'
    },
    features: [
      'Real-time data processing',
      'Predictive analytics',
      'Automated reporting',
      'Interactive dashboards',
      'Data visualization',
      'Alert systems',
      'API access',
      'Mobile applications'
    ],
    benefits: [
      'Make decisions 10x faster',
      'Identify opportunities proactively',
      'Reduce manual reporting time',
      'Improve data accuracy',
      'Enable data-driven culture'
    ],
    useCases: [
      'Business intelligence',
      'Performance monitoring',
      'Predictive analytics',
      'Operational reporting',
      'Strategic planning'
    ],
    targetAudience: [
      'Business Analysts',
      'Data Scientists',
      'Executives',
      'Operations Managers',
      'Marketing Teams'
    ],
    technologies: [
      'Real-time processing',
      'Machine Learning',
      'Data visualization',
      'Cloud computing',
      'API frameworks'
    ],
    integration: [
      'Data warehouses',
      'ERP systems',
      'CRM platforms',
      'Marketing tools',
      'Custom data sources'
    ],
    pricingTier: 'Professional',
    website: 'https://ziontechgroup.com/business-intelligence',
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008, Middletown DE 19709'
    },
    rating: 4.7,
    reviewCount: 234,
    launchDate: '2024-01-30',
    status: 'Active',
    marketPrice: '$599 - $19,999/month',
    estimatedDelivery: '4-6 weeks',
    supportLevel: 'Premium Analytics Support',
    industryFocus: ['All Industries', 'Technology', 'Financial Services', 'Retail', 'Manufacturing']
  },

  // Integration Services
  {
    id: 'zion-enterprise-integration-hub',
    title: 'Zion Enterprise Integration Hub',
    description: 'Comprehensive enterprise integration platform that connects disparate systems, automates workflows, and enables seamless data flow across the organization.',
    category: 'Integration Services',
    subcategory: 'System Integration',
    price: {
      monthly: 799,
      yearly: 7990,
      enterprise: 24999,
      oneTime: 0,
      currency: '$'
    },
    features: [
      'API management',
      'Data transformation',
      'Workflow automation',
      'Real-time synchronization',
      'Error handling',
      'Monitoring and alerting',
      'Security and compliance',
      'Custom connectors'
    ],
    benefits: [
      'Eliminate data silos',
      'Automate manual processes',
      'Improve data accuracy',
      'Reduce integration costs',
      'Accelerate time to market'
    ],
    useCases: [
      'System integration',
      'Data synchronization',
      'Workflow automation',
      'API management',
      'Legacy system modernization'
    ],
    targetAudience: [
      'Integration Architects',
      'DevOps Engineers',
      'Data Engineers',
      'IT Managers',
      'Business Analysts'
    ],
    technologies: [
      'API management',
      'ETL/ELT tools',
      'Workflow engines',
      'Message queues',
      'Data transformation'
    ],
    integration: [
      'ERP systems',
      'CRM platforms',
      'Cloud services',
      'Legacy systems',
      'Third-party APIs'
    ],
    pricingTier: 'Professional',
    website: 'https://ziontechgroup.com/enterprise-integration',
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008, Middletown DE 19709'
    },
    rating: 4.8,
    reviewCount: 167,
    launchDate: '2024-02-10',
    status: 'Active',
    marketPrice: '$799 - $24,999/month',
    estimatedDelivery: '6-8 weeks',
    supportLevel: 'Integration Expert Support',
    industryFocus: ['All Industries', 'Technology', 'Financial Services', 'Healthcare', 'Manufacturing']
  },

  // Managed Services
  {
    id: 'zion-24-7-it-operations-center',
    title: 'Zion 24/7 IT Operations Center',
    description: 'Comprehensive 24/7 IT operations center that provides proactive monitoring, incident management, and technical support for enterprise IT infrastructure.',
    category: 'Managed Services',
    subcategory: 'IT Operations',
    price: {
      monthly: 1499,
      yearly: 14990,
      enterprise: 49999,
      oneTime: 0,
      currency: '$'
    },
    features: [
      '24/7 proactive monitoring',
      'Incident management',
      'Performance optimization',
      'Security monitoring',
      'Backup and recovery',
      'Capacity planning',
      'Technical support',
      'Monthly reporting'
    ],
    benefits: [
      'Reduce downtime by 80%',
      'Improve system performance',
      'Reduce IT staff workload',
      'Enhance security posture',
      'Predict and prevent issues'
    ],
    useCases: [
      'IT operations management',
      'Infrastructure monitoring',
      'Incident response',
      'Performance optimization',
      'Security monitoring'
    ],
    targetAudience: [
      'IT Directors',
      'Operations Managers',
      'System Administrators',
      'Network Engineers',
      'Security Teams'
    ],
    technologies: [
      'Monitoring tools',
      'Automation platforms',
      'Security tools',
      'Backup systems',
      'Communication platforms'
    ],
    integration: [
      'Existing IT systems',
      'Monitoring tools',
      'Security platforms',
      'Communication systems',
      'Reporting tools'
    ],
    pricingTier: 'Enterprise',
    website: 'https://ziontechgroup.com/it-operations',
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008, Middletown DE 19709'
    },
    rating: 4.9,
    reviewCount: 123,
    launchDate: '2024-01-20',
    status: 'Active',
    marketPrice: '$1,499 - $49,999/month',
    estimatedDelivery: '2-4 weeks',
    supportLevel: '24/7 Operations Center Support',
    industryFocus: ['All Industries', 'Technology', 'Financial Services', 'Healthcare', 'Manufacturing']
  }
];

export const SPECIALIZED_SERVICE_CATEGORIES = [
  {
    id: 'enterprise-infrastructure',
    name: 'Enterprise Infrastructure',
    icon: '🏢',
    count: 2,
    description: 'Modern enterprise infrastructure solutions for large organizations'
  },
  {
    id: 'digital-transformation',
    name: 'Digital Transformation',
    icon: '🔄',
    count: 2,
    description: 'End-to-end digital transformation services'
  },
  {
    id: 'industry-solutions',
    name: 'Industry Solutions',
    icon: '🏭',
    count: 2,
    description: 'Specialized solutions for specific industries'
  },
  {
    id: 'advanced-analytics',
    name: 'Advanced Analytics',
    icon: '📊',
    count: 1,
    description: 'Advanced analytics and business intelligence solutions'
  },
  {
    id: 'integration-services',
    name: 'Integration Services',
    icon: '🔗',
    count: 1,
    description: 'Enterprise integration and system connectivity services'
  },
  {
    id: 'managed-services',
    name: 'Managed Services',
    icon: '⚙️',
    count: 1,
    description: 'Comprehensive managed IT services'
  }
];

export const CONTACT_INFO = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008, Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};