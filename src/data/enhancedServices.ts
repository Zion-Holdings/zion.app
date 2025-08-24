export interface EnhancedService {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  price: number;
  currency: string;
  pricingModel: 'one-time' | 'monthly' | 'yearly' | 'per-user' | 'per-project' | 'usage-based' | 'per-hour';
  features: string[];
  benefits: string[];
  useCases: string[];
  targetAudience: string[];
  tags: string[];
  estimatedDelivery: string;
  supportLevel: 'basic' | 'standard' | 'premium' | 'enterprise';
  marketPrice: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
  technologyStack?: string[];
  integrations?: string[];
  compliance?: string[];
}

export const ENHANCED_SERVICES: EnhancedService[] = [
  // AI & Machine Learning Services
  {
    id: 'ai-content-generation',
    title: 'AI Content Generation Platform',
    description: 'Advanced AI-powered content creation platform for blogs, social media, marketing copy, and technical documentation with SEO optimization.',
    category: 'AI Services',
    subcategory: 'Content Creation',
    price: 299,
    currency: 'USD',
    pricingModel: 'monthly',
    features: [
      'GPT-4 powered content generation',
      'SEO optimization',
      'Multi-language support',
      'Brand voice customization',
      'Content scheduling',
      'Analytics dashboard'
    ],
    benefits: [
      'Save 70% on content creation costs',
      'Increase content output by 10x',
      'Improve SEO rankings',
      'Maintain consistent brand voice',
      'Scale content marketing efforts'
    ],
    useCases: [
      'Blog content creation',
      'Social media posts',
      'Marketing copy',
      'Technical documentation',
      'Product descriptions'
    ],
    targetAudience: ['Marketing teams', 'Content creators', 'Small businesses', 'Agencies'],
    tags: ['AI', 'Content', 'Marketing', 'SEO', 'Automation'],
    estimatedDelivery: '2-3 weeks',
    supportLevel: 'premium',
    marketPrice: '$299-599/month',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    },
    technologyStack: ['OpenAI GPT-4', 'React', 'Node.js', 'MongoDB'],
    integrations: ['WordPress', 'Shopify', 'HubSpot', 'Mailchimp'],
    compliance: ['GDPR', 'CCPA', 'SOC 2']
  },
  {
    id: 'ai-chatbot-builder',
    title: 'AI Chatbot Builder Suite',
    description: 'No-code AI chatbot creation platform with advanced NLP, multi-channel deployment, and analytics dashboard.',
    category: 'AI Services',
    subcategory: 'Chatbots',
    price: 199,
    currency: 'USD',
    pricingModel: 'monthly',
    features: [
      'No-code chatbot builder',
      'Advanced NLP capabilities',
      'Multi-channel deployment',
      'Analytics dashboard',
      'Custom integrations',
      '24/7 availability'
    ],
    benefits: [
      'Reduce customer support costs by 60%',
      'Handle 80% of inquiries automatically',
      'Improve customer satisfaction',
      'Scale support operations',
      'Gather customer insights'
    ],
    useCases: [
      'Customer support',
      'Lead qualification',
      'Appointment booking',
      'FAQ handling',
      'Order tracking'
    ],
    targetAudience: ['E-commerce', 'Service businesses', 'Healthcare', 'Education'],
    tags: ['AI', 'Chatbot', 'Customer Support', 'Automation', 'NLP'],
    estimatedDelivery: '3-4 weeks',
    supportLevel: 'standard',
    marketPrice: '$199-399/month',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    },
    technologyStack: ['Dialogflow', 'React', 'Node.js', 'PostgreSQL'],
    integrations: ['Slack', 'WhatsApp', 'Facebook Messenger', 'Website'],
    compliance: ['GDPR', 'HIPAA', 'SOC 2']
  },
  {
    id: 'ai-business-analytics',
    title: 'AI-Powered Business Analytics',
    description: 'Machine learning-driven business intelligence platform with predictive analytics and automated insights.',
    category: 'AI Services',
    subcategory: 'Analytics',
    price: 499,
    currency: 'USD',
    pricingModel: 'monthly',
    features: [
      'Predictive analytics',
      'Automated insights',
      'Real-time dashboards',
      'Custom reports',
      'Data visualization',
      'Machine learning models'
    ],
    benefits: [
      'Improve decision-making accuracy by 40%',
      'Identify trends before competitors',
      'Automate data analysis',
      'Reduce manual reporting time',
      'Increase revenue through insights'
    ],
    useCases: [
      'Sales forecasting',
      'Customer behavior analysis',
      'Risk assessment',
      'Performance optimization',
      'Market trend analysis'
    ],
    targetAudience: ['Enterprises', 'Financial services', 'Healthcare', 'Retail'],
    tags: ['AI', 'Analytics', 'Business Intelligence', 'Machine Learning', 'Predictive'],
    estimatedDelivery: '4-6 weeks',
    supportLevel: 'enterprise',
    marketPrice: '$499-999/month',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    },
    technologyStack: ['Python', 'TensorFlow', 'React', 'PostgreSQL'],
    integrations: ['Salesforce', 'HubSpot', 'QuickBooks', 'Google Analytics'],
    compliance: ['GDPR', 'SOC 2', 'ISO 27001']
  },
  // IT Infrastructure Services
  {
    id: 'cloud-migration',
    title: 'Cloud Migration & Optimization',
    description: 'Complete cloud migration solution for AWS, Azure, or Google Cloud with minimal downtime and cost optimization.',
    category: 'IT Services',
    subcategory: 'Cloud',
    price: 5000,
    currency: 'USD',
    pricingModel: 'per-project',
    features: [
      'Multi-cloud strategy',
      'Zero-downtime migration',
      'Cost optimization',
      'Security assessment',
      'Performance monitoring',
      'Disaster recovery'
    ],
    benefits: [
      'Reduce infrastructure costs by 25-40%',
      'Improve scalability and flexibility',
      'Enhance security posture',
      'Increase performance',
      'Reduce maintenance overhead'
    ],
    useCases: [
      'Legacy system migration',
      'Data center consolidation',
      'Application modernization',
      'Disaster recovery setup',
      'Performance optimization'
    ],
    targetAudience: ['Enterprises', 'Mid-size companies', 'Healthcare', 'Financial services'],
    tags: ['Cloud', 'Migration', 'AWS', 'Azure', 'Optimization'],
    estimatedDelivery: '8-12 weeks',
    supportLevel: 'premium',
    marketPrice: '$5,000-25,000',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    },
    technologyStack: ['AWS', 'Azure', 'Terraform', 'Docker', 'Kubernetes'],
    integrations: ['Active Directory', 'LDAP', 'SAML', 'OAuth'],
    compliance: ['SOC 2', 'ISO 27001', 'HIPAA', 'PCI DSS']
  },
  {
    id: 'cybersecurity-assessment',
    title: 'Cybersecurity Assessment',
    description: 'Comprehensive security audit including penetration testing, vulnerability assessment, and compliance review.',
    category: 'Security',
    subcategory: 'Assessment',
    price: 3000,
    currency: 'USD',
    pricingModel: 'per-project',
    features: [
      'Penetration testing',
      'Vulnerability assessment',
      'Compliance review',
      'Security audit report',
      'Remediation guidance',
      'Ongoing monitoring'
    ],
    benefits: [
      'Identify security vulnerabilities',
      'Meet compliance requirements',
      'Protect customer data',
      'Reduce security risks',
      'Improve security posture'
    ],
    useCases: [
      'Compliance audits',
      'Security assessments',
      'Pre-acquisition due diligence',
      'Risk management',
      'Security improvements'
    ],
    targetAudience: ['Enterprises', 'Healthcare', 'Financial services', 'E-commerce'],
    tags: ['Security', 'Cybersecurity', 'Penetration Testing', 'Compliance', 'Audit'],
    estimatedDelivery: '4-6 weeks',
    supportLevel: 'premium',
    marketPrice: '$3,000-15,000',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    },
    technologyStack: ['Nmap', 'Metasploit', 'Burp Suite', 'OWASP ZAP'],
    integrations: ['SIEM systems', 'Vulnerability scanners', 'Security tools'],
    compliance: ['SOC 2', 'ISO 27001', 'PCI DSS', 'HIPAA']
  },
  // Micro SAAS Platforms
  {
    id: 'business-process-automation',
    title: 'Business Process Automation',
    description: 'End-to-end automation solutions that streamline operations and reduce manual tasks by up to 80%.',
    category: 'Micro SAAS',
    subcategory: 'Automation',
    price: 199,
    currency: 'USD',
    pricingModel: 'monthly',
    features: [
      'Workflow automation',
      'Process mapping',
      'Integration capabilities',
      'Analytics dashboard',
      'Custom workflows',
      'Mobile access'
    ],
    benefits: [
      'Reduce manual tasks by 80%',
      'Improve process efficiency',
      'Reduce errors and delays',
      'Increase productivity',
      'Better process visibility'
    ],
    useCases: [
      'Invoice processing',
      'Employee onboarding',
      'Customer service workflows',
      'Approval processes',
      'Data entry automation'
    ],
    targetAudience: ['Small businesses', 'Medium enterprises', 'Service companies', 'Manufacturing'],
    tags: ['Automation', 'Workflow', 'Process', 'Productivity', 'Integration'],
    estimatedDelivery: '3-4 weeks',
    supportLevel: 'standard',
    marketPrice: '$199-399/month',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    },
    technologyStack: ['Node.js', 'React', 'PostgreSQL', 'Redis'],
    integrations: ['Slack', 'Microsoft 365', 'Google Workspace', 'Zapier'],
    compliance: ['GDPR', 'SOC 2']
  },
  {
    id: 'project-management-saas',
    title: 'Project Management SaaS Platform',
    description: 'Comprehensive project management solution with task tracking, team collaboration, and resource management.',
    category: 'Micro SAAS',
    subcategory: 'Project Management',
    price: 149,
    currency: 'USD',
    pricingModel: 'per-user',
    features: [
      'Task management',
      'Team collaboration',
      'Resource allocation',
      'Time tracking',
      'Reporting and analytics',
      'Mobile applications'
    ],
    benefits: [
      'Improve project delivery by 30%',
      'Enhance team collaboration',
      'Better resource utilization',
      'Real-time project visibility',
      'Reduce project risks'
    ],
    useCases: [
      'Software development',
      'Marketing campaigns',
      'Construction projects',
      'Event planning',
      'Product launches'
    ],
    targetAudience: ['Project teams', 'Agencies', 'Consulting firms', 'Construction'],
    tags: ['Project Management', 'Collaboration', 'Task Tracking', 'Resource Management'],
    estimatedDelivery: '4-5 weeks',
    supportLevel: 'standard',
    marketPrice: '$149-299/user/month',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    },
    technologyStack: ['React', 'Node.js', 'PostgreSQL', 'Socket.io'],
    integrations: ['Slack', 'Microsoft Teams', 'Google Calendar', 'Jira'],
    compliance: ['GDPR', 'SOC 2']
  },
  // Development Services
  {
    id: 'custom-software-development',
    title: 'Custom Software Development',
    description: 'Tailored software solutions built to meet specific business requirements with modern technologies and best practices.',
    category: 'Development',
    subcategory: 'Custom Software',
    price: 150,
    currency: 'USD',
    pricingModel: 'per-hour',
    features: [
      'Custom application development',
      'Modern tech stack',
      'Responsive design',
      'API development',
      'Testing and QA',
      'Deployment and maintenance'
    ],
    benefits: [
      'Tailored to business needs',
      'Competitive advantage',
      'Scalable solutions',
      'Modern technology',
      'Ongoing support'
    ],
    useCases: [
      'Business applications',
      'E-commerce platforms',
      'Customer portals',
      'Internal tools',
      'Mobile applications'
    ],
    targetAudience: ['Businesses', 'Startups', 'Enterprises', 'Government'],
    tags: ['Development', 'Custom Software', 'Web Apps', 'Mobile Apps', 'APIs'],
    estimatedDelivery: '8-16 weeks',
    supportLevel: 'premium',
    marketPrice: '$150-250/hour',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    },
    technologyStack: ['React', 'Node.js', 'Python', 'PostgreSQL', 'AWS'],
    integrations: ['Third-party APIs', 'Payment gateways', 'Authentication systems'],
    compliance: ['GDPR', 'SOC 2', 'PCI DSS']
  },
  // Analytics Services
  {
    id: 'data-analytics-platform',
    title: 'Data Analytics Platform',
    description: 'Comprehensive data analytics solution with real-time dashboards, predictive modeling, and business intelligence.',
    category: 'Analytics',
    subcategory: 'Business Intelligence',
    price: 399,
    currency: 'USD',
    pricingModel: 'monthly',
    features: [
      'Real-time dashboards',
      'Data visualization',
      'Predictive modeling',
      'Custom reports',
      'Data integration',
      'Advanced analytics'
    ],
    benefits: [
      'Data-driven decision making',
      'Identify business opportunities',
      'Improve operational efficiency',
      'Better customer insights',
      'Competitive advantage'
    ],
    useCases: [
      'Sales analytics',
      'Customer analytics',
      'Operational analytics',
      'Financial analytics',
      'Marketing analytics'
    ],
    targetAudience: ['Enterprises', 'Data teams', 'Business analysts', 'Executives'],
    tags: ['Analytics', 'Business Intelligence', 'Data Visualization', 'Predictive', 'Reporting'],
    estimatedDelivery: '6-8 weeks',
    supportLevel: 'enterprise',
    marketPrice: '$399-799/month',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    },
    technologyStack: ['Python', 'React', 'PostgreSQL', 'Redis', 'Apache Spark'],
    integrations: ['Salesforce', 'HubSpot', 'QuickBooks', 'Google Analytics'],
    compliance: ['GDPR', 'SOC 2', 'ISO 27001']
  }
];