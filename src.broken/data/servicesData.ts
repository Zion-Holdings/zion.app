import { ServiceCategory, ITService, AIService, MicroSAAS } from '@/types/services';

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'ai-services',
    name: 'AI & Machine Learning',
    description: 'Cutting-edge artificial intelligence solutions for business automation and insights',
    icon: '🤖',
    color: 'bg-gradient-to-r from-purple-500 to-pink-500'
  },
  {
    id: 'it-services',
    name: 'IT Infrastructure & Support',
    description: 'Comprehensive IT services for modern business operations',
    icon: '🖥️',
    color: 'bg-gradient-to-r from-blue-500 to-cyan-500'
  },
  {
    id: 'micro-saas',
    name: 'Micro SAAS Solutions',
    description: 'Specialized software-as-a-service tools for specific business needs',
    icon: '☁️',
    color: 'bg-gradient-to-r from-green-500 to-emerald-500'
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity & Compliance',
    description: 'Advanced security solutions to protect your digital assets',
    icon: '🔒',
    color: 'bg-gradient-to-r from-red-500 to-orange-500'
  },
  {
    id: 'data-analytics',
    name: 'Data Analytics & BI',
    description: 'Transform data into actionable business intelligence',
    icon: '📊',
    color: 'bg-gradient-to-r from-indigo-500 to-purple-500'
  },
  {
    id: 'cloud-solutions',
    name: 'Cloud & DevOps',
    description: 'Scalable cloud infrastructure and development operations',
    icon: '☁️',
    color: 'bg-gradient-to-r from-sky-500 to-blue-500'
  }
];

export const AI_SERVICES: AIService[] = [
  {
    id: 'ai-customer-service',
    title: 'AI Customer Service Automation',
    description: 'Intelligent chatbot system with natural language processing for 24/7 customer support',
    category: 'AI & Machine Learning',
    provider: {
      id: 'zion-ai',
      name: 'Zion AI Solutions',
      logo: 'https://ziontechgroup.com/assets/logo.png',
      rating: 4.8,
      reviewCount: 156,
      location: 'Middletown, DE',
      verified: true,
      specialties: ['AI', 'Customer Service', 'Automation']
    },
    pricing: {
      basic: {
        price: 299,
        currency: '$',
        period: 'month',
        features: ['Up to 1,000 conversations/month', 'Basic NLP', 'Email support', 'Standard templates']
      },
      professional: {
        price: 799,
        currency: '$',
        period: 'month',
        features: ['Up to 10,000 conversations/month', 'Advanced NLP', 'Phone support', 'Custom branding', 'Analytics dashboard'],
        popular: true
      },
      enterprise: {
        price: 2499,
        currency: '$',
        period: 'month',
        features: ['Unlimited conversations', 'Custom AI training', 'Dedicated support', 'API access', 'White-label solution']
      }
    },
    features: ['Natural Language Processing', 'Multi-language support', 'Integration with CRM systems', 'Sentiment analysis', 'Automated ticket routing'],
    benefits: ['24/7 customer support', 'Reduced response time', 'Cost savings', 'Improved customer satisfaction', 'Scalable solution'],
    useCases: ['E-commerce support', 'Help desk automation', 'Lead qualification', 'FAQ handling', 'Appointment booking'],
    technologies: ['GPT-4', 'BERT', 'TensorFlow', 'Python', 'React'],
    deploymentTime: '2-4 weeks',
    support: ['Email support', 'Phone support', 'Documentation', 'Training sessions', 'API documentation'],
    integrations: ['Salesforce', 'HubSpot', 'Zendesk', 'Slack', 'Microsoft Teams'],
    security: ['SOC 2 Type II', 'GDPR compliant', 'End-to-end encryption', 'Regular security audits'],
    compliance: ['GDPR', 'CCPA', 'HIPAA', 'SOC 2'],
    images: ['https://images.unsplash.com/photo-1557555187-807fa78b1c7e?auto=format&fit=crop&w=800&h=500'],
    demoUrl: 'https://ziontechgroup.com/demo/ai-customer-service',
    documentationUrl: 'https://docs.ziontechgroup.com/ai-customer-service',
    createdAt: '2024-01-15T00:00:00.000Z',
    updatedAt: '2024-12-19T00:00:00.000Z',
    tags: ['AI', 'Customer Service', 'Automation', 'NLP', 'Chatbot'],
    aiScore: 95,
    marketTrend: 'rising',
    industryFocus: ['E-commerce', 'Healthcare', 'Finance', 'Education'],
    aiModel: 'GPT-4 + Custom BERT',
    accuracy: 94.2,
    trainingData: '10M+ customer interactions',
    customization: true,
    apiAccess: true,
    realTimeProcessing: true
  },
  {
    id: 'ai-content-generation',
    title: 'AI Content Generation Suite',
    description: 'Advanced AI-powered content creation for blogs, marketing materials, and social media',
    category: 'AI & Machine Learning',
    provider: {
      id: 'zion-content',
      name: 'Zion Content AI',
      logo: 'https://ziontechgroup.com/assets/logo.png',
      rating: 4.7,
      reviewCount: 89,
      location: 'Middletown, DE',
      verified: true,
      specialties: ['Content Creation', 'AI Writing', 'Marketing']
    },
    pricing: {
      basic: {
        price: 199,
        currency: '$',
        period: 'month',
        features: ['Up to 50 articles/month', 'Basic templates', 'SEO optimization', 'Email support']
      },
      professional: {
        price: 499,
        currency: '$',
        period: 'month',
        features: ['Up to 200 articles/month', 'Custom templates', 'Advanced SEO', 'Priority support', 'Analytics'],
        popular: true
      },
      enterprise: {
        price: 1499,
        currency: '$',
        period: 'month',
        features: ['Unlimited content', 'Custom AI training', 'Dedicated writer', 'API access', 'White-label']
      }
    },
    features: ['Multi-format content generation', 'SEO optimization', 'Brand voice customization', 'Plagiarism detection', 'Content scheduling'],
    benefits: ['10x faster content creation', 'Improved SEO rankings', 'Consistent brand voice', 'Cost-effective content', 'Scalable production'],
    useCases: ['Blog writing', 'Social media posts', 'Email campaigns', 'Product descriptions', 'Technical documentation'],
    technologies: ['GPT-4', 'Claude', 'BERT', 'Python', 'Node.js'],
    deploymentTime: '1-2 weeks',
    support: ['Email support', 'Chat support', 'Content strategy consultation', 'Training sessions'],
    integrations: ['WordPress', 'HubSpot', 'Mailchimp', 'Buffer', 'Hootsuite'],
    security: ['SOC 2 Type II', 'GDPR compliant', 'Content encryption', 'Access controls'],
    compliance: ['GDPR', 'CCPA', 'Copyright compliance'],
    images: ['https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&h=500'],
    demoUrl: 'https://ziontechgroup.com/demo/ai-content',
    documentationUrl: 'https://docs.ziontechgroup.com/ai-content',
    createdAt: '2024-02-01T00:00:00.000Z',
    updatedAt: '2024-12-19T00:00:00.000Z',
    tags: ['AI', 'Content Creation', 'Writing', 'SEO', 'Marketing'],
    aiScore: 92,
    marketTrend: 'rising',
    industryFocus: ['Marketing', 'Publishing', 'E-commerce', 'Education'],
    aiModel: 'GPT-4 + Claude + Custom Models',
    accuracy: 91.8,
    trainingData: '5M+ articles and content pieces',
    customization: true,
    apiAccess: true,
    realTimeProcessing: true
  },
  {
    id: 'ai-data-analytics',
    title: 'AI-Powered Business Intelligence',
    description: 'Intelligent data analysis and predictive insights for data-driven decision making',
    category: 'AI & Machine Learning',
    provider: {
      id: 'zion-analytics',
      name: 'Zion Analytics',
      logo: 'https://ziontechgroup.com/assets/logo.png',
      rating: 4.9,
      reviewCount: 234,
      location: 'Middletown, DE',
      verified: true,
      specialties: ['Data Analytics', 'Business Intelligence', 'Predictive Analytics']
    },
    pricing: {
      basic: {
        price: 399,
        currency: '$',
        period: 'month',
        features: ['Up to 10GB data', 'Basic dashboards', 'Standard reports', 'Email support']
      },
      professional: {
        price: 999,
        currency: '$',
        period: 'month',
        features: ['Up to 100GB data', 'Advanced dashboards', 'Predictive analytics', 'Priority support', 'Custom reports'],
        popular: true
      },
      enterprise: {
        price: 2999,
        currency: '$',
        period: 'month',
        features: ['Unlimited data', 'Custom AI models', 'Dedicated analyst', 'API access', 'White-label solution']
      }
    },
    features: ['Predictive analytics', 'Natural language queries', 'Automated insights', 'Real-time dashboards', 'Custom ML models'],
    benefits: ['Faster decision making', 'Predictive insights', 'Automated reporting', 'Cost reduction', 'Competitive advantage'],
    useCases: ['Sales forecasting', 'Customer segmentation', 'Risk assessment', 'Performance optimization', 'Market analysis'],
    technologies: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Python', 'React'],
    deploymentTime: '3-6 weeks',
    support: ['Email support', 'Phone support', 'Data consultation', 'Training sessions', 'Custom development'],
    integrations: ['Salesforce', 'HubSpot', 'Google Analytics', 'MySQL', 'PostgreSQL'],
    security: ['SOC 2 Type II', 'GDPR compliant', 'Data encryption', 'Access controls', 'Audit logs'],
    compliance: ['GDPR', 'CCPA', 'SOC 2', 'HIPAA'],
    images: ['https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500'],
    demoUrl: 'https://ziontechgroup.com/demo/ai-analytics',
    documentationUrl: 'https://docs.ziontechgroup.com/ai-analytics',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-12-19T00:00:00.000Z',
    tags: ['AI', 'Analytics', 'Business Intelligence', 'Predictive Analytics', 'Data Science'],
    aiScore: 96,
    marketTrend: 'rising',
    industryFocus: ['Finance', 'Healthcare', 'Retail', 'Manufacturing'],
    aiModel: 'Custom ML Models + TensorFlow',
    accuracy: 93.5,
    trainingData: '100M+ data points across industries',
    customization: true,
    apiAccess: true,
    realTimeProcessing: true
  }
];

export const IT_SERVICES: ITService[] = [
  {
    id: 'onsite-it-support',
    title: 'Onsite IT Support & Infrastructure',
    description: 'Comprehensive onsite IT services including network setup, hardware maintenance, and technical support',
    category: 'IT Infrastructure & Support',
    provider: {
      id: 'zion-it',
      name: 'Zion IT Services',
      logo: 'https://ziontechgroup.com/assets/logo.png',
      rating: 4.8,
      reviewCount: 178,
      location: 'Middletown, DE',
      verified: true,
      specialties: ['IT Support', 'Infrastructure', 'Network Security']
    },
    pricing: {
      basic: {
        price: 150,
        currency: '$',
        period: 'hour',
        features: ['Basic troubleshooting', 'Hardware installation', 'Software setup', 'Email support']
      },
      professional: {
        price: 125,
        currency: '$',
        period: 'hour',
        features: ['Advanced troubleshooting', 'Network configuration', 'Security setup', 'Phone support', 'Remote assistance'],
        popular: true
      },
      enterprise: {
        price: 100,
        currency: '$',
        period: 'hour',
        features: ['Full IT management', '24/7 monitoring', 'Dedicated technician', 'Emergency response', 'SLA guarantee']
      }
    },
    features: ['Network setup & configuration', 'Hardware installation & maintenance', 'Software deployment', 'Security implementation', 'Backup solutions'],
    benefits: ['Reduced downtime', 'Improved security', 'Cost-effective IT management', 'Expert technical support', 'Scalable solutions'],
    useCases: ['Office setup', 'Network expansion', 'Security upgrades', 'Hardware upgrades', 'Disaster recovery'],
    technologies: ['Cisco', 'Microsoft', 'VMware', 'Linux', 'Windows Server'],
    deploymentTime: '1-3 days',
    support: ['Onsite support', 'Remote assistance', '24/7 emergency support', 'Preventive maintenance', 'Training sessions'],
    integrations: ['Active Directory', 'Office 365', 'Google Workspace', 'VPN solutions', 'Backup systems'],
    security: ['Firewall configuration', 'VPN setup', 'Access controls', 'Security audits', 'Compliance monitoring'],
    compliance: ['SOC 2', 'HIPAA', 'PCI DSS', 'GDPR'],
    images: ['https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&h=500'],
    demoUrl: 'https://ziontechgroup.com/demo/onsite-it',
    documentationUrl: 'https://docs.ziontechgroup.com/onsite-it',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-12-19T00:00:00.000Z',
    tags: ['IT Support', 'Infrastructure', 'Network', 'Hardware', 'Security'],
    aiScore: 85,
    marketTrend: 'stable',
    industryFocus: ['Healthcare', 'Finance', 'Education', 'Manufacturing'],
    serviceType: 'onsite',
    responseTime: '4 hours',
    coverage: ['Delaware', 'Maryland', 'Pennsylvania', 'New Jersey'],
    emergencySupport: true,
    sla: '99.9% uptime guarantee'
  },
  {
    id: 'cloud-migration',
    title: 'Cloud Migration & Optimization',
    description: 'Seamless migration to cloud platforms with optimization for performance and cost efficiency',
    category: 'IT Infrastructure & Support',
    provider: {
      id: 'zion-cloud',
      name: 'Zion Cloud Solutions',
      logo: 'https://ziontechgroup.com/assets/logo.png',
      rating: 4.9,
      reviewCount: 145,
      location: 'Middletown, DE',
      verified: true,
      specialties: ['Cloud Migration', 'AWS', 'Azure', 'Google Cloud']
    },
    pricing: {
      basic: {
        price: 5000,
        currency: '$',
        period: 'project',
        features: ['Basic migration planning', 'Single application migration', 'Basic testing', 'Email support']
      },
      professional: {
        price: 15000,
        currency: '$',
        period: 'project',
        features: ['Comprehensive migration', 'Multiple applications', 'Performance optimization', 'Phone support', 'Training'],
        popular: true
      },
      enterprise: {
        price: 50000,
        currency: '$',
        period: 'project',
        features: ['Full enterprise migration', 'Custom optimization', 'Dedicated team', '24/7 support', 'SLA guarantee']
      }
    },
    features: ['Migration planning & strategy', 'Application assessment', 'Performance optimization', 'Cost optimization', 'Security implementation'],
    benefits: ['Reduced infrastructure costs', 'Improved scalability', 'Enhanced security', 'Better performance', 'Disaster recovery'],
    useCases: ['Legacy system migration', 'Data center consolidation', 'Application modernization', 'Disaster recovery setup', 'Cost optimization'],
    technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes'],
    deploymentTime: '4-12 weeks',
    support: ['Project management', 'Technical support', 'Training sessions', 'Post-migration support', 'Performance monitoring'],
    integrations: ['Active Directory', 'Office 365', 'SAP', 'Oracle', 'Custom applications'],
    security: ['Identity management', 'Encryption', 'Compliance monitoring', 'Security audits', 'Access controls'],
    compliance: ['SOC 2', 'HIPAA', 'PCI DSS', 'GDPR', 'FedRAMP'],
    images: ['https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&h=500'],
    demoUrl: 'https://ziontechgroup.com/demo/cloud-migration',
    documentationUrl: 'https://docs.ziontechgroup.com/cloud-migration',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-12-19T00:00:00.000Z',
    tags: ['Cloud Migration', 'AWS', 'Azure', 'Optimization', 'DevOps'],
    aiScore: 88,
    marketTrend: 'rising',
    industryFocus: ['Finance', 'Healthcare', 'Manufacturing', 'Retail'],
    serviceType: 'hybrid',
    responseTime: '24 hours',
    coverage: ['Global'],
    emergencySupport: true,
    sla: '99.95% uptime guarantee'
  }
];

export const MICRO_SAAS_SERVICES: MicroSAAS[] = [
  {
    id: 'project-management-saas',
    title: 'Smart Project Management Platform',
    description: 'Intelligent project management with AI-powered task automation, team collaboration, and progress tracking',
    category: 'Micro SAAS Solutions',
    provider: {
      id: 'zion-projects',
      name: 'Zion Project Solutions',
      logo: 'https://ziontechgroup.com/assets/logo.png',
      rating: 4.7,
      reviewCount: 267,
      location: 'Middletown, DE',
      verified: true,
      specialties: ['Project Management', 'Team Collaboration', 'AI Automation']
    },
    pricing: {
      basic: {
        price: 29,
        currency: '$',
        period: 'month',
        features: ['Up to 10 users', 'Basic project templates', 'Task management', 'Email support']
      },
      professional: {
        price: 79,
        currency: '$',
        period: 'month',
        features: ['Up to 50 users', 'Advanced templates', 'AI automation', 'Priority support', 'Analytics'],
        popular: true
      },
      enterprise: {
        price: 199,
        currency: '$',
        period: 'month',
        features: ['Unlimited users', 'Custom automation', 'Dedicated support', 'API access', 'White-label']
      }
    },
    features: ['AI-powered task automation', 'Real-time collaboration', 'Progress tracking', 'Resource management', 'Time tracking'],
    benefits: ['Improved productivity', 'Better team coordination', 'Reduced project delays', 'Cost savings', 'Data-driven insights'],
    useCases: ['Software development', 'Marketing campaigns', 'Event planning', 'Product launches', 'Client projects'],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'AI/ML'],
    deploymentTime: '1-2 weeks',
    support: ['Email support', 'Chat support', 'Video tutorials', 'Training sessions', 'API documentation'],
    integrations: ['Slack', 'Microsoft Teams', 'Google Workspace', 'GitHub', 'Jira'],
    security: ['SOC 2 Type II', 'GDPR compliant', 'Data encryption', 'Access controls', 'Regular backups'],
    compliance: ['GDPR', 'CCPA', 'SOC 2'],
    images: ['https://images.unsplash.com/photo-1559027615-ce3b7d81f40a?auto=format&fit=crop&w=800&h=500'],
    demoUrl: 'https://ziontechgroup.com/demo/project-management',
    documentationUrl: 'https://docs.ziontechgroup.com/project-management',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-12-19T00:00:00.000Z',
    tags: ['Project Management', 'Team Collaboration', 'AI Automation', 'Productivity', 'Analytics'],
    aiScore: 89,
    marketTrend: 'rising',
    industryFocus: ['Technology', 'Marketing', 'Consulting', 'Education'],
    userLimit: 1000,
    whiteLabel: true,
    apiRateLimit: '1000 requests/hour',
    dataRetention: '7 years',
    backupFrequency: 'Daily',
    uptime: 99.9
  },
  {
    id: 'crm-saas',
    title: 'AI-Powered CRM System',
    description: 'Intelligent customer relationship management with AI-driven insights, automation, and predictive analytics',
    category: 'Micro SAAS Solutions',
    provider: {
      id: 'zion-crm',
      name: 'Zion CRM Solutions',
      logo: 'https://ziontechgroup.com/assets/logo.png',
      rating: 4.8,
      reviewCount: 189,
      location: 'Middletown, DE',
      verified: true,
      specialties: ['CRM', 'Sales Automation', 'AI Analytics']
    },
    pricing: {
      basic: {
        price: 49,
        currency: '$',
        period: 'month',
        features: ['Up to 5 users', 'Basic contact management', 'Email integration', 'Email support']
      },
      professional: {
        price: 99,
        currency: '$',
        period: 'month',
        features: ['Up to 25 users', 'Advanced automation', 'AI insights', 'Priority support', 'Analytics'],
        popular: true
      },
      enterprise: {
        price: 249,
        currency: '$',
        period: 'month',
        features: ['Unlimited users', 'Custom AI models', 'Dedicated support', 'API access', 'White-label']
      }
    },
    features: ['AI-powered lead scoring', 'Automated follow-ups', 'Sales forecasting', 'Pipeline management', 'Customer insights'],
    benefits: ['Increased sales', 'Better customer relationships', 'Automated workflows', 'Data-driven decisions', 'Improved efficiency'],
    useCases: ['Sales management', 'Customer support', 'Lead generation', 'Account management', 'Sales forecasting'],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'AI/ML'],
    deploymentTime: '1-2 weeks',
    support: ['Email support', 'Phone support', 'Video tutorials', 'Training sessions', 'Custom development'],
    integrations: ['Gmail', 'Outlook', 'Slack', 'Zapier', 'Salesforce'],
    security: ['SOC 2 Type II', 'GDPR compliant', 'Data encryption', 'Access controls', 'Audit logs'],
    compliance: ['GDPR', 'CCPA', 'SOC 2'],
    images: ['https://images.unsplash.com/photo-1518441902114-f0ce5d1fb743?auto=format&fit=crop&w=800&h=500'],
    demoUrl: 'https://ziontechgroup.com/demo/crm',
    documentationUrl: 'https://docs.ziontechgroup.com/crm',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-12-19T00:00:00.000Z',
    tags: ['CRM', 'Sales Automation', 'AI Analytics', 'Lead Management', 'Customer Insights'],
    aiScore: 91,
    marketTrend: 'rising',
    industryFocus: ['Sales', 'Marketing', 'Real Estate', 'Consulting'],
    userLimit: 500,
    whiteLabel: true,
    apiRateLimit: '2000 requests/hour',
    dataRetention: '10 years',
    backupFrequency: 'Real-time',
    uptime: 99.95
  },
  {
    id: 'hr-management-saas',
    title: 'HR Management & Talent Platform',
    description: 'Comprehensive HR solution with AI-powered recruitment, employee management, and performance analytics',
    category: 'Micro SAAS Solutions',
    provider: {
      id: 'zion-hr',
      name: 'Zion HR Solutions',
      logo: 'https://ziontechgroup.com/assets/logo.png',
      rating: 4.6,
      reviewCount: 134,
      location: 'Middletown, DE',
      verified: true,
      specialties: ['HR Management', 'Recruitment', 'Performance Analytics']
    },
    pricing: {
      basic: {
        price: 39,
        currency: '$',
        period: 'month',
        features: ['Up to 25 employees', 'Basic HR functions', 'Employee portal', 'Email support']
      },
      professional: {
        price: 89,
        currency: '$',
        period: 'month',
        features: ['Up to 100 employees', 'AI recruitment', 'Performance tracking', 'Priority support', 'Analytics'],
        popular: true
      },
      enterprise: {
        price: 199,
        currency: '$',
        period: 'month',
        features: ['Unlimited employees', 'Custom AI models', 'Dedicated support', 'API access', 'White-label']
      }
    },
    features: ['AI-powered recruitment', 'Employee onboarding', 'Performance management', 'Time tracking', 'Benefits administration'],
    benefits: ['Faster hiring', 'Better employee retention', 'Improved performance', 'Compliance automation', 'Cost savings'],
    useCases: ['Recruitment', 'Employee management', 'Performance reviews', 'Time tracking', 'Benefits management'],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'AI/ML'],
    deploymentTime: '2-3 weeks',
    support: ['Email support', 'Phone support', 'HR consultation', 'Training sessions', 'Compliance support'],
    integrations: ['ADP', 'Paychex', 'Slack', 'Microsoft Teams', 'Google Workspace'],
    security: ['SOC 2 Type II', 'GDPR compliant', 'Data encryption', 'Access controls', 'Audit logs'],
    compliance: ['GDPR', 'CCPA', 'SOC 2', 'HIPAA'],
    images: ['https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&h=500'],
    demoUrl: 'https://ziontechgroup.com/demo/hr-management',
    documentationUrl: 'https://docs.ziontechgroup.com/hr-management',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-12-19T00:00:00.000Z',
    tags: ['HR Management', 'Recruitment', 'Performance Analytics', 'Employee Portal', 'Compliance'],
    aiScore: 87,
    marketTrend: 'stable',
    industryFocus: ['Technology', 'Healthcare', 'Finance', 'Manufacturing'],
    userLimit: 2000,
    whiteLabel: true,
    apiRateLimit: '1500 requests/hour',
    dataRetention: '7 years',
    backupFrequency: 'Daily',
    uptime: 99.9
  }
];

export const CYBERSECURITY_SERVICES: ITService[] = [
  {
    id: 'security-audit',
    title: 'Comprehensive Security Audit & Penetration Testing',
    description: 'In-depth security assessment including vulnerability scanning, penetration testing, and compliance verification',
    category: 'Cybersecurity & Compliance',
    provider: {
      id: 'zion-security',
      name: 'Zion Security Solutions',
      logo: 'https://ziontechgroup.com/assets/logo.png',
      rating: 4.9,
      reviewCount: 98,
      location: 'Middletown, DE',
      verified: true,
      specialties: ['Cybersecurity', 'Penetration Testing', 'Compliance']
    },
    pricing: {
      basic: {
        price: 2500,
        currency: '$',
        period: 'audit',
        features: ['Basic vulnerability scan', 'Security report', 'Remediation guidance', 'Email support']
      },
      professional: {
        price: 7500,
        currency: '$',
        period: 'audit',
        features: ['Full penetration testing', 'Compliance assessment', 'Detailed report', 'Phone support', 'Follow-up consultation'],
        popular: true
      },
      enterprise: {
        price: 25000,
        currency: '$',
        period: 'audit',
        features: ['Comprehensive security audit', 'Custom testing scenarios', 'Dedicated team', '24/7 support', 'Ongoing monitoring']
      }
    },
    features: ['Vulnerability assessment', 'Penetration testing', 'Compliance verification', 'Security reporting', 'Remediation guidance'],
    benefits: ['Identify security gaps', 'Meet compliance requirements', 'Reduce security risks', 'Improve security posture', 'Protect customer data'],
    useCases: ['Security compliance', 'Risk assessment', 'Incident response', 'Security training', 'Compliance audits'],
    technologies: ['Nessus', 'Metasploit', 'Burp Suite', 'Wireshark', 'Custom tools'],
    deploymentTime: '2-4 weeks',
    support: ['Email support', 'Phone support', 'Security consultation', 'Training sessions', 'Incident response'],
    integrations: ['SIEM systems', 'Firewall management', 'Vulnerability scanners', 'Compliance tools'],
    security: ['Secure testing environment', 'Data protection', 'Access controls', 'Audit logs', 'Confidentiality agreements'],
    compliance: ['SOC 2', 'HIPAA', 'PCI DSS', 'GDPR', 'ISO 27001'],
    images: ['https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&h=500'],
    demoUrl: 'https://ziontechgroup.com/demo/security-audit',
    documentationUrl: 'https://docs.ziontechgroup.com/security-audit',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-12-19T00:00:00.000Z',
    tags: ['Cybersecurity', 'Penetration Testing', 'Compliance', 'Security Audit', 'Risk Assessment'],
    aiScore: 90,
    marketTrend: 'rising',
    industryFocus: ['Finance', 'Healthcare', 'Government', 'Technology'],
    serviceType: 'hybrid',
    responseTime: '24 hours',
    coverage: ['Global'],
    emergencySupport: true,
    sla: '99.99% security guarantee'
  }
];

export const DATA_ANALYTICS_SERVICES: AIService[] = [
  {
    id: 'business-intelligence',
    title: 'Advanced Business Intelligence Platform',
    description: 'Comprehensive BI solution with real-time dashboards, predictive analytics, and automated reporting',
    category: 'Data Analytics & BI',
    provider: {
      id: 'zion-bi',
      name: 'Zion Business Intelligence',
      logo: 'https://ziontechgroup.com/assets/logo.png',
      rating: 4.8,
      reviewCount: 156,
      location: 'Middletown, DE',
      verified: true,
      specialties: ['Business Intelligence', 'Data Analytics', 'Predictive Analytics']
    },
    pricing: {
      basic: {
        price: 599,
        currency: '$',
        period: 'month',
        features: ['Up to 50GB data', 'Basic dashboards', 'Standard reports', 'Email support']
      },
      professional: {
        price: 1299,
        currency: '$',
        period: 'month',
        features: ['Up to 500GB data', 'Advanced dashboards', 'Predictive analytics', 'Priority support', 'Custom reports'],
        popular: true
      },
      enterprise: {
        price: 3999,
        currency: '$',
        period: 'month',
        features: ['Unlimited data', 'Custom AI models', 'Dedicated analyst', 'API access', 'White-label solution']
      }
    },
    features: ['Real-time dashboards', 'Predictive analytics', 'Automated reporting', 'Data visualization', 'Custom AI models'],
    benefits: ['Faster insights', 'Predictive capabilities', 'Automated reporting', 'Better decisions', 'Competitive advantage'],
    useCases: ['Sales analytics', 'Customer insights', 'Operational efficiency', 'Financial analysis', 'Market research'],
    technologies: ['Power BI', 'Tableau', 'Python', 'R', 'Machine Learning'],
    deploymentTime: '4-8 weeks',
    support: ['Email support', 'Phone support', 'Data consultation', 'Training sessions', 'Custom development'],
    integrations: ['Salesforce', 'HubSpot', 'SAP', 'Oracle', 'Custom databases'],
    security: ['SOC 2 Type II', 'GDPR compliant', 'Data encryption', 'Access controls', 'Audit logs'],
    compliance: ['GDPR', 'CCPA', 'SOC 2', 'HIPAA'],
    images: ['https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500'],
    demoUrl: 'https://ziontechgroup.com/demo/business-intelligence',
    documentationUrl: 'https://docs.ziontechgroup.com/business-intelligence',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-12-19T00:00:00.000Z',
    tags: ['Business Intelligence', 'Data Analytics', 'Predictive Analytics', 'Dashboards', 'Reporting'],
    aiScore: 94,
    marketTrend: 'rising',
    industryFocus: ['Finance', 'Healthcare', 'Retail', 'Manufacturing'],
    aiModel: 'Custom ML Models + TensorFlow + PyTorch',
    accuracy: 95.2,
    trainingData: '500M+ data points across industries',
    customization: true,
    apiAccess: true,
    realTimeProcessing: true
  }
];

export const CLOUD_SOLUTIONS: ITService[] = [
  {
    id: 'devops-automation',
    title: 'DevOps Automation & CI/CD Pipeline',
    description: 'Complete DevOps solution with automated deployment, monitoring, and infrastructure management',
    category: 'Cloud & DevOps',
    provider: {
      id: 'zion-devops',
      name: 'Zion DevOps Solutions',
      logo: 'https://ziontechgroup.com/assets/logo.png',
      rating: 4.7,
      reviewCount: 123,
      location: 'Middletown, DE',
      verified: true,
      specialties: ['DevOps', 'CI/CD', 'Cloud Infrastructure']
    },
    pricing: {
      basic: {
        price: 299,
        currency: '$',
        period: 'month',
        features: ['Basic CI/CD pipeline', 'Git integration', 'Basic monitoring', 'Email support']
      },
      professional: {
        price: 799,
        currency: '$',
        period: 'month',
        features: ['Advanced automation', 'Full monitoring', 'Infrastructure as code', 'Priority support', 'Training'],
        popular: true
      },
      enterprise: {
        price: 2499,
        currency: '$',
        period: 'month',
        features: ['Custom automation', 'Dedicated team', '24/7 monitoring', 'API access', 'White-label solution']
      }
    },
    features: ['CI/CD pipeline automation', 'Infrastructure as code', 'Monitoring & alerting', 'Auto-scaling', 'Security scanning'],
    benefits: ['Faster deployments', 'Reduced errors', 'Better scalability', 'Cost optimization', 'Improved security'],
    useCases: ['Software deployment', 'Infrastructure management', 'Application monitoring', 'Security automation', 'Performance optimization'],
    technologies: ['Docker', 'Kubernetes', 'Jenkins', 'Terraform', 'AWS/Azure'],
    deploymentTime: '2-4 weeks',
    support: ['Email support', 'Phone support', 'DevOps consultation', 'Training sessions', 'Custom development'],
    integrations: ['GitHub', 'GitLab', 'AWS', 'Azure', 'Google Cloud'],
    security: ['SOC 2 Type II', 'GDPR compliant', 'Security scanning', 'Access controls', 'Audit logs'],
    compliance: ['SOC 2', 'GDPR', 'ISO 27001'],
    images: ['https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&h=500'],
    demoUrl: 'https://ziontechgroup.com/demo/devops-automation',
    documentationUrl: 'https://docs.ziontechgroup.com/devops-automation',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-12-19T00:00:00.000Z',
    tags: ['DevOps', 'CI/CD', 'Automation', 'Cloud Infrastructure', 'Monitoring'],
    aiScore: 86,
    marketTrend: 'rising',
    industryFocus: ['Technology', 'Finance', 'Healthcare', 'E-commerce'],
    serviceType: 'remote',
    responseTime: '4 hours',
    coverage: ['Global'],
    emergencySupport: true,
    sla: '99.9% uptime guarantee'
  }
];

export const ALL_SERVICES = [
  ...AI_SERVICES,
  ...IT_SERVICES,
  ...MICRO_SAAS_SERVICES,
  ...CYBERSECURITY_SERVICES,
  ...DATA_ANALYTICS_SERVICES,
  ...CLOUD_SOLUTIONS
];