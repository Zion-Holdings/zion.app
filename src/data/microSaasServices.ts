export interface MicroSaasService {
  id: string;
  title: string;
  description: string;
  category: 'AI' | 'IT' | 'Development' | 'Analytics' | 'Security' | 'Automation' | 'Integration' | 'Consulting';
  subcategory: string;
  features: string[];
  pricing: {
    monthly: number;
    yearly: number;
    enterprise: number;
    currency: string;
  };
  benefits: string[];
  useCases: string[];
  targetAudience: string[];
  integration: string[];
  support: string[];
  link: string;
  demoLink?: string;
  rating: number;
  reviewCount: number;
  launchDate: string;
  status: 'Live' | 'Beta' | 'Coming Soon';
  techStack: string[];
  compliance: string[];
  apiAccess: boolean;
  whiteLabel: boolean;
  customBranding: boolean;
}

export const MICRO_SAAS_SERVICES: MicroSaasService[] = [
  // AI Services
  {
    id: 'ai-content-generator',
    title: 'Zion AI Content Generator',
    description: 'AI-powered content creation platform for blogs, social media, and marketing materials with advanced NLP and creative writing capabilities.',
    category: 'AI',
    subcategory: 'Content Creation',
    features: [
      'Multi-language content generation',
      'SEO-optimized writing',
      'Brand voice customization',
      'Plagiarism detection',
      'Content scheduling',
      'Analytics dashboard',
      'Team collaboration tools',
      'API access for developers'
    ],
    pricing: {
      monthly: 49,
      yearly: 490,
      enterprise: 1999,
      currency: '$'
    },
    benefits: [
      'Save 80% of content creation time',
      'Improve SEO rankings with AI-optimized content',
      'Maintain consistent brand voice across all channels',
      'Scale content production without additional staff',
      'Reduce content creation costs by 60%'
    ],
    useCases: [
      'Marketing agencies',
      'E-commerce businesses',
      'Content creators',
      'Startups',
      'Enterprise marketing teams'
    ],
    targetAudience: ['Marketing professionals', 'Content creators', 'Business owners', 'Agencies'],
    integration: ['WordPress', 'Shopify', 'HubSpot', 'Mailchimp', 'Social media platforms'],
    support: ['24/7 live chat', 'Email support', 'Video tutorials', 'Community forum', 'Priority support for enterprise'],
    link: 'https://ziontechgroup.com/ai-content-generator',
    demoLink: 'https://ziontechgroup.com/ai-content-generator/demo',
    rating: 4.8,
    reviewCount: 342,
    launchDate: '2024-01-15',
    status: 'Live',
    techStack: ['OpenAI GPT-4', 'BERT', 'TensorFlow', 'React', 'Node.js', 'PostgreSQL'],
    compliance: ['GDPR', 'CCPA', 'SOC 2', 'ISO 27001'],
    apiAccess: true,
    whiteLabel: true,
    customBranding: true
  },
  {
    id: 'ai-customer-support',
    title: 'Zion AI Customer Support',
    description: 'Intelligent customer support automation with natural language processing, sentiment analysis, and seamless human handoff capabilities.',
    category: 'AI',
    subcategory: 'Customer Service',
    features: [
      '24/7 automated customer support',
      'Multi-language support',
      'Sentiment analysis',
      'Smart ticket routing',
      'Knowledge base integration',
      'Live chat handoff',
      'Performance analytics',
      'Custom chatbot training'
    ],
    pricing: {
      monthly: 79,
      yearly: 790,
      enterprise: 2499,
      currency: '$'
    },
    benefits: [
      'Reduce support costs by 70%',
      'Improve customer satisfaction scores',
      'Handle 10x more support requests',
      'Provide instant responses 24/7',
      'Scale support operations efficiently'
    ],
    useCases: [
      'E-commerce platforms',
      'SaaS companies',
      'Financial services',
      'Healthcare providers',
      'Educational institutions'
    ],
    targetAudience: ['Customer support managers', 'Business owners', 'Operations teams', 'Customer success teams'],
    integration: ['Zendesk', 'Intercom', 'Freshdesk', 'Slack', 'Microsoft Teams', 'CRM systems'],
    support: ['Implementation support', 'Training sessions', '24/7 technical support', 'Custom integration help'],
    link: 'https://ziontechgroup.com/ai-customer-support',
    demoLink: 'https://ziontechgroup.com/ai-customer-support/demo',
    rating: 4.9,
    reviewCount: 287,
    launchDate: '2024-02-01',
    status: 'Live',
    techStack: ['NLP', 'Machine Learning', 'Python', 'React', 'WebSocket', 'Redis'],
    compliance: ['GDPR', 'HIPAA', 'PCI DSS', 'SOC 2'],
    apiAccess: true,
    whiteLabel: true,
    customBranding: true
  },
  {
    id: 'ai-data-analytics',
    title: 'Zion AI Data Analytics',
    description: 'Advanced business intelligence platform with AI-powered insights, predictive analytics, and automated reporting for data-driven decision making.',
    category: 'AI',
    subcategory: 'Analytics',
    features: [
      'Real-time data processing',
      'Predictive analytics',
      'Automated reporting',
      'Custom dashboards',
      'Data visualization',
      'Anomaly detection',
      'Forecasting models',
      'API integrations'
    ],
    pricing: {
      monthly: 99,
      yearly: 990,
      enterprise: 3999,
      currency: '$'
    },
    benefits: [
      'Uncover hidden business insights',
      'Predict market trends and opportunities',
      'Automate routine reporting tasks',
      'Make data-driven decisions faster',
      'Identify growth opportunities'
    ],
    useCases: [
      'Financial services',
      'Retail analytics',
      'Healthcare data analysis',
      'Manufacturing optimization',
      'Marketing performance tracking'
    ],
    targetAudience: ['Data analysts', 'Business intelligence teams', 'Executives', 'Marketing teams', 'Operations managers'],
    integration: ['Google Analytics', 'Salesforce', 'HubSpot', 'Stripe', 'Shopify', 'Custom APIs'],
    support: ['Data migration assistance', 'Custom dashboard creation', 'Analytics training', 'Priority support'],
    link: 'https://ziontechgroup.com/ai-data-analytics',
    demoLink: 'https://ziontechgroup.com/ai-data-analytics/demo',
    rating: 4.7,
    reviewCount: 156,
    launchDate: '2024-01-20',
    status: 'Live',
    techStack: ['Python', 'TensorFlow', 'Apache Spark', 'React', 'D3.js', 'PostgreSQL'],
    compliance: ['GDPR', 'SOC 2', 'ISO 27001', 'HIPAA'],
    apiAccess: true,
    whiteLabel: false,
    customBranding: true
  },
  // IT Services
  {
    id: 'cloud-migration-pro',
    title: 'Zion Cloud Migration Pro',
    description: 'Comprehensive cloud migration service with automated tools, cost optimization, and zero-downtime migration strategies for enterprise applications.',
    category: 'IT',
    subcategory: 'Cloud Services',
    features: [
      'Automated migration tools',
      'Cost optimization analysis',
      'Zero-downtime migration',
      'Security compliance',
      'Performance monitoring',
      'Backup and disaster recovery',
      '24/7 support',
      'Migration consulting'
    ],
    pricing: {
      monthly: 299,
      yearly: 2990,
      enterprise: 9999,
      currency: '$'
    },
    benefits: [
      'Reduce cloud costs by 30-40%',
      'Improve application performance',
      'Enhance security and compliance',
      'Reduce migration risks',
      'Accelerate time to market'
    ],
    useCases: [
      'Legacy system modernization',
      'Multi-cloud strategies',
      'Disaster recovery planning',
      'Application scaling',
      'Cost optimization'
    ],
    targetAudience: ['IT directors', 'DevOps engineers', 'System administrators', 'CTOs', 'Operations managers'],
    integration: ['AWS', 'Azure', 'Google Cloud', 'VMware', 'Docker', 'Kubernetes'],
    support: ['Migration planning', 'Implementation support', 'Training', '24/7 technical support', 'Post-migration optimization'],
    link: 'https://ziontechgroup.com/cloud-migration-pro',
    demoLink: 'https://ziontechgroup.com/cloud-migration-pro/demo',
    rating: 4.8,
    reviewCount: 89,
    launchDate: '2024-02-10',
    status: 'Live',
    techStack: ['Terraform', 'Ansible', 'Docker', 'Kubernetes', 'Python', 'Bash'],
    compliance: ['SOC 2', 'ISO 27001', 'PCI DSS', 'HIPAA'],
    apiAccess: true,
    whiteLabel: true,
    customBranding: true
  },
  {
    id: 'cybersecurity-suite',
    title: 'Zion Cybersecurity Suite',
    description: 'Comprehensive cybersecurity platform with threat detection, vulnerability assessment, compliance monitoring, and incident response automation.',
    category: 'IT',
    subcategory: 'Security',
    features: [
      'Real-time threat detection',
      'Vulnerability scanning',
      'Compliance monitoring',
      'Incident response automation',
      'Security awareness training',
      'Penetration testing',
      'Security audits',
      '24/7 monitoring'
    ],
    pricing: {
      monthly: 199,
      yearly: 1990,
      enterprise: 6999,
      currency: '$'
    },
    benefits: [
      'Protect against 99.9% of cyber threats',
      'Achieve compliance faster',
      'Reduce security incidents by 80%',
      'Lower insurance premiums',
      'Protect brand reputation'
    ],
    useCases: [
      'Financial services',
      'Healthcare organizations',
      'E-commerce platforms',
      'Educational institutions',
      'Government agencies'
    ],
    targetAudience: ['CISOs', 'Security managers', 'IT directors', 'Compliance officers', 'Risk managers'],
    integration: ['SIEM systems', 'Firewalls', 'EDR solutions', 'Identity providers', 'Cloud platforms'],
    support: ['Security assessment', 'Implementation support', 'Training programs', '24/7 security operations center'],
    link: 'https://ziontechgroup.com/cybersecurity-suite',
    demoLink: 'https://ziontechgroup.com/cybersecurity-suite/demo',
    rating: 4.9,
    reviewCount: 134,
    launchDate: '2024-01-25',
    status: 'Live',
    techStack: ['Python', 'Elasticsearch', 'Kafka', 'React', 'Machine Learning', 'Blockchain'],
    compliance: ['SOC 2', 'ISO 27001', 'PCI DSS', 'HIPAA', 'GDPR', 'NIST'],
    apiAccess: true,
    whiteLabel: true,
    customBranding: true
  },
  // Development Services
  {
    id: 'api-development-platform',
    title: 'Zion API Development Platform',
    description: 'Full-stack API development platform with automated testing, documentation generation, monitoring, and deployment tools for modern applications.',
    category: 'Development',
    subcategory: 'API Development',
    features: [
      'API design and prototyping',
      'Automated testing',
      'Documentation generation',
      'Performance monitoring',
      'Rate limiting',
      'Authentication services',
      'Deployment automation',
      'Version control'
    ],
    pricing: {
      monthly: 149,
      yearly: 1490,
      enterprise: 4999,
      currency: '$'
    },
    benefits: [
      'Reduce API development time by 60%',
      'Improve API reliability and performance',
      'Automate testing and deployment',
      'Generate comprehensive documentation',
      'Scale API infrastructure efficiently'
    ],
    useCases: [
      'Microservices architecture',
      'Mobile app backends',
      'Third-party integrations',
      'Internal tool development',
      'Public API services'
    ],
    targetAudience: ['Backend developers', 'DevOps engineers', 'API architects', 'Product managers', 'Technical leads'],
    integration: ['GitHub', 'GitLab', 'Jenkins', 'AWS', 'Azure', 'Google Cloud'],
    support: ['Architecture consulting', 'Implementation support', 'Best practices training', 'Performance optimization'],
    link: 'https://ziontechgroup.com/api-development-platform',
    demoLink: 'https://ziontechgroup.com/api-development-platform/demo',
    rating: 4.6,
    reviewCount: 78,
    launchDate: '2024-02-15',
    status: 'Live',
    techStack: ['Node.js', 'Python', 'GraphQL', 'OpenAPI', 'Docker', 'Kubernetes'],
    compliance: ['SOC 2', 'ISO 27001'],
    apiAccess: true,
    whiteLabel: false,
    customBranding: true
  },
  // Automation Services
  {
    id: 'workflow-automation',
    title: 'Zion Workflow Automation',
    description: 'Intelligent workflow automation platform that streamlines business processes, reduces manual tasks, and improves operational efficiency.',
    category: 'Automation',
    subcategory: 'Business Process Automation',
    features: [
      'Visual workflow designer',
      'AI-powered process optimization',
      'Integration with 500+ apps',
      'Real-time monitoring',
      'Analytics and reporting',
      'Custom triggers and actions',
      'Role-based access control',
      'Mobile app support'
    ],
    pricing: {
      monthly: 89,
      yearly: 890,
      enterprise: 2999,
      currency: '$'
    },
    benefits: [
      'Reduce manual tasks by 70%',
      'Improve process efficiency',
      'Eliminate human errors',
      'Accelerate business operations',
      'Reduce operational costs'
    ],
    useCases: [
      'HR process automation',
      'Finance and accounting',
      'Customer onboarding',
      'Marketing automation',
      'Sales process optimization'
    ],
    targetAudience: ['Operations managers', 'Process improvement teams', 'Business analysts', 'IT managers', 'Department heads'],
    integration: ['Salesforce', 'HubSpot', 'Slack', 'Microsoft 365', 'Google Workspace', 'Zapier'],
    support: ['Process analysis', 'Workflow design', 'Implementation support', 'Training programs', 'Ongoing optimization'],
    link: 'https://ziontechgroup.com/workflow-automation',
    demoLink: 'https://ziontechgroup.com/workflow-automation/demo',
    rating: 4.7,
    reviewCount: 203,
    launchDate: '2024-01-30',
    status: 'Live',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'WebSocket', 'Machine Learning'],
    compliance: ['SOC 2', 'ISO 27001', 'GDPR'],
    apiAccess: true,
    whiteLabel: true,
    customBranding: true
  },
  // Integration Services
  {
    id: 'enterprise-integration-hub',
    title: 'Zion Enterprise Integration Hub',
    description: 'Comprehensive enterprise integration platform that connects disparate systems, automates data flows, and provides real-time synchronization.',
    category: 'Integration',
    subcategory: 'Enterprise Integration',
    features: [
      'Pre-built connectors',
      'Custom integration development',
      'Real-time data synchronization',
      'Data transformation tools',
      'Error handling and retry logic',
      'Monitoring and alerting',
      'API management',
      'Security and compliance'
    ],
    pricing: {
      monthly: 399,
      yearly: 3990,
      enterprise: 12999,
      currency: '$'
    },
    benefits: [
      'Connect any system or application',
      'Eliminate data silos',
      'Improve data accuracy and consistency',
      'Reduce integration costs',
      'Accelerate digital transformation'
    ],
    useCases: [
      'ERP system integration',
      'CRM data synchronization',
      'E-commerce platform integration',
      'Financial system connectivity',
      'Legacy system modernization'
    ],
    targetAudience: ['Enterprise architects', 'Integration specialists', 'IT directors', 'Data engineers', 'Business analysts'],
    integration: ['SAP', 'Oracle', 'Salesforce', 'Microsoft Dynamics', 'NetSuite', 'Custom systems'],
    support: ['Integration consulting', 'Custom development', 'Implementation support', 'Training and documentation'],
    link: 'https://ziontechgroup.com/enterprise-integration-hub',
    demoLink: 'https://ziontechgroup.com/enterprise-integration-hub/demo',
    rating: 4.8,
    reviewCount: 67,
    launchDate: '2024-02-20',
    status: 'Live',
    techStack: ['Apache Camel', 'Spring Boot', 'Kafka', 'PostgreSQL', 'Redis', 'Docker'],
    compliance: ['SOC 2', 'ISO 27001', 'PCI DSS', 'HIPAA'],
    apiAccess: true,
    whiteLabel: true,
    customBranding: true
  },
  // Consulting Services
  {
    id: 'digital-transformation-consulting',
    title: 'Zion Digital Transformation Consulting',
    description: 'Strategic consulting services to help organizations navigate digital transformation, implement new technologies, and optimize business processes.',
    category: 'Consulting',
    subcategory: 'Digital Transformation',
    features: [
      'Digital maturity assessment',
      'Technology roadmap planning',
      'Change management strategies',
      'Process optimization',
      'Technology implementation',
      'Training and development',
      'Performance monitoring',
      'Ongoing support'
    ],
    pricing: {
      monthly: 0,
      yearly: 0,
      enterprise: 15000,
      currency: '$'
    },
    benefits: [
      'Accelerate digital transformation',
      'Reduce implementation risks',
      'Improve ROI on technology investments',
      'Enhance competitive advantage',
      'Future-proof your organization'
    ],
    useCases: [
      'Legacy system modernization',
      'Cloud migration strategies',
      'AI and automation implementation',
      'Customer experience transformation',
      'Operational efficiency improvement'
    ],
    targetAudience: ['C-level executives', 'IT directors', 'Operations managers', 'Digital transformation leaders'],
    integration: ['All major platforms and systems'],
    support: ['Strategic consulting', 'Implementation support', 'Change management', 'Training programs', 'Ongoing advisory'],
    link: 'https://ziontechgroup.com/digital-transformation-consulting',
    demoLink: 'https://ziontechgroup.com/digital-transformation-consulting/demo',
    rating: 4.9,
    reviewCount: 45,
    launchDate: '2024-01-10',
    status: 'Live',
    techStack: ['Consulting methodologies', 'Assessment tools', 'Project management', 'Change management frameworks'],
    compliance: ['Industry best practices', 'Regulatory compliance'],
    apiAccess: false,
    whiteLabel: false,
    customBranding: false
  }
];

export const getServicesByCategory = (category: string) => {
  return MICRO_SAAS_SERVICES.filter(service => service.category === category);
};

export const getServicesBySubcategory = (subcategory: string) => {
  return MICRO_SAAS_SERVICES.filter(service => service.subcategory === subcategory);
};

export const getFeaturedServices = () => {
  return MICRO_SAAS_SERVICES.filter(service => service.rating >= 4.7);
};

export const getNewServices = () => {
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
  return MICRO_SAAS_SERVICES.filter(service => new Date(service.launchDate) >= thirtyDaysAgo);
};