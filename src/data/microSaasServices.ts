export interface MicroSaasService {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  price: {
    monthly: number;
    yearly: number;
    currency: string;
    pricingModel: 'subscription' | 'usage' | 'one-time' | 'enterprise';
  };
  features: string[];
  benefits: string[];
  useCases: string[];
  targetAudience: string[];
  integration: string[];
  support: string[];
  website: string;
  contact: {
    email: string;
    phone: string;
    address: string;
  };
  rating: number;
  reviewCount: number;
  launchDate: string;
  status: 'live' | 'beta' | 'coming-soon';
  tags: string[];
  image: string;
  demoUrl?: string;
  documentationUrl?: string;
}

export const MICRO_SAAS_SERVICES: MicroSaasService[] = [
  // AI & Machine Learning Services
  {
    id: 'ai-content-generator',
    title: 'Zion AI Content Studio',
    description: 'AI-powered content generation platform for marketing, blogs, and social media with advanced customization and brand voice training.',
    category: 'AI Services',
    subcategory: 'Content Generation',
    price: {
      monthly: 49,
      yearly: 490,
      currency: '$',
      pricingModel: 'subscription'
    },
    features: [
      'AI-powered content generation',
      'Brand voice customization',
      'Multi-language support',
      'SEO optimization',
      'Content calendar management',
      'Plagiarism detection',
      'Team collaboration tools',
      'Analytics and performance tracking'
    ],
    benefits: [
      'Save 80% time on content creation',
      'Improve SEO rankings with AI-optimized content',
      'Maintain consistent brand voice across all channels',
      'Scale content production without hiring more writers'
    ],
    useCases: [
      'Marketing agencies',
      'E-commerce businesses',
      'Content creators',
      'Small to medium businesses',
      'Startups'
    ],
    targetAudience: ['Marketing teams', 'Content creators', 'Business owners', 'Agencies'],
    integration: ['WordPress', 'Shopify', 'HubSpot', 'Mailchimp', 'Social media platforms'],
    support: ['24/7 chat support', 'Email support', 'Video tutorials', 'Live webinars'],
    website: 'https://ziontechgroup.com/ai-content-studio',
    contact: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    },
    rating: 4.8,
    reviewCount: 156,
    launchDate: '2024-01-15',
    status: 'live',
    tags: ['AI', 'Content Generation', 'Marketing', 'SEO', 'Automation'],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&h=500'
  },
  {
    id: 'ai-chatbot-platform',
    title: 'Zion AI Chatbot Builder',
    description: 'No-code AI chatbot creation platform with advanced NLP, multi-language support, and seamless integration capabilities.',
    category: 'AI Services',
    subcategory: 'Chatbots',
    price: {
      monthly: 79,
      yearly: 790,
      currency: '$',
      pricingModel: 'subscription'
    },
    features: [
      'No-code chatbot builder',
      'Advanced NLP processing',
      'Multi-language support',
      'Custom integrations',
      'Analytics dashboard',
      'A/B testing',
      'Voice recognition',
      'Sentiment analysis'
    ],
    benefits: [
      'Reduce customer support costs by 60%',
      'Provide 24/7 customer service',
      'Improve customer satisfaction scores',
      'Scale support operations efficiently'
    ],
    useCases: [
      'Customer support',
      'Lead generation',
      'E-commerce assistance',
      'Appointment booking',
      'FAQ automation'
    ],
    targetAudience: ['Customer service teams', 'E-commerce businesses', 'Service providers', 'Startups'],
    integration: ['Website', 'Facebook Messenger', 'WhatsApp', 'Slack', 'CRM systems'],
    support: ['Priority support', 'Implementation assistance', 'Training sessions', 'Custom development'],
    website: 'https://ziontechgroup.com/ai-chatbot',
    contact: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    },
    rating: 4.9,
    reviewCount: 89,
    launchDate: '2024-02-01',
    status: 'live',
    tags: ['AI', 'Chatbots', 'Customer Service', 'Automation', 'NLP'],
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&h=500'
  },
  {
    id: 'ai-data-analytics',
    title: 'Zion AI Data Insights',
    description: 'Intelligent data analytics platform that transforms raw data into actionable business insights using AI and machine learning.',
    category: 'AI Services',
    subcategory: 'Data Analytics',
    price: {
      monthly: 99,
      yearly: 990,
      currency: '$',
      pricingModel: 'subscription'
    },
    features: [
      'AI-powered data processing',
      'Predictive analytics',
      'Real-time dashboards',
      'Custom reporting',
      'Data visualization',
      'Automated insights',
      'Data integration',
      'Advanced forecasting'
    ],
    benefits: [
      'Make data-driven decisions faster',
      'Identify hidden business opportunities',
      'Predict market trends and customer behavior',
      'Optimize business operations with AI insights'
    ],
    useCases: [
      'Business intelligence',
      'Sales forecasting',
      'Customer behavior analysis',
      'Operational optimization',
      'Risk assessment'
    ],
    targetAudience: ['Data analysts', 'Business intelligence teams', 'Executives', 'Marketing teams'],
    integration: ['Excel', 'Google Analytics', 'Salesforce', 'HubSpot', 'Database systems'],
    support: ['Data migration assistance', 'Custom dashboard creation', 'Training programs', 'Dedicated account manager'],
    website: 'https://ziontechgroup.com/ai-analytics',
    contact: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    },
    rating: 4.7,
    reviewCount: 203,
    launchDate: '2023-11-20',
    status: 'live',
    tags: ['AI', 'Data Analytics', 'Business Intelligence', 'Predictive Analytics', 'Machine Learning'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500'
  },

  // IT Infrastructure Services
  {
    id: 'cloud-optimization',
    title: 'Zion Cloud Optimizer',
    description: 'Intelligent cloud cost optimization and performance monitoring platform that reduces cloud spending by up to 40%.',
    category: 'IT Services',
    subcategory: 'Cloud Management',
    price: {
      monthly: 149,
      yearly: 1490,
      currency: '$',
      pricingModel: 'usage'
    },
    features: [
      'Automated cost optimization',
      'Performance monitoring',
      'Resource scaling',
      'Cost forecasting',
      'Multi-cloud management',
      'Security compliance',
      'Backup automation',
      'Disaster recovery'
    ],
    benefits: [
      'Reduce cloud costs by 40%',
      'Improve application performance',
      'Ensure security compliance',
      'Automate resource management'
    ],
    useCases: [
      'Cloud cost management',
      'Performance optimization',
      'Security compliance',
      'Resource planning',
      'Disaster recovery'
    ],
    targetAudience: ['DevOps teams', 'Cloud architects', 'IT managers', 'Startups', 'Enterprise companies'],
    integration: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Docker'],
    support: ['24/7 monitoring', 'Emergency response', 'Performance optimization', 'Cost analysis reports'],
    website: 'https://ziontechgroup.com/cloud-optimizer',
    contact: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    },
    rating: 4.8,
    reviewCount: 127,
    launchDate: '2024-01-10',
    status: 'live',
    tags: ['Cloud', 'Cost Optimization', 'Performance', 'DevOps', 'Security'],
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&h=500'
  },
  {
    id: 'cybersecurity-suite',
    title: 'Zion CyberShield',
    description: 'Comprehensive cybersecurity platform with threat detection, vulnerability assessment, and automated incident response.',
    category: 'IT Services',
    subcategory: 'Cybersecurity',
    price: {
      monthly: 199,
      yearly: 1990,
      currency: '$',
      pricingModel: 'subscription'
    },
    features: [
      'Real-time threat detection',
      'Vulnerability scanning',
      'Automated incident response',
      'Security compliance reporting',
      'Employee security training',
      'Dark web monitoring',
      'Penetration testing',
      'Security awareness dashboard'
    ],
    benefits: [
      'Protect against 99.9% of cyber threats',
      'Meet compliance requirements automatically',
      'Reduce security incidents by 80%',
      'Improve security awareness across organization'
    ],
    useCases: [
      'Threat protection',
      'Compliance management',
      'Incident response',
      'Security training',
      'Risk assessment'
    ],
    targetAudience: ['Security teams', 'IT managers', 'Compliance officers', 'Small businesses', 'Enterprise companies'],
    integration: ['SIEM systems', 'Firewalls', 'Endpoint protection', 'Active Directory', 'Cloud platforms'],
    support: ['24/7 security monitoring', 'Incident response team', 'Compliance consulting', 'Security training'],
    website: 'https://ziontechgroup.com/cybershield',
    contact: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    },
    rating: 4.9,
    reviewCount: 94,
    launchDate: '2023-12-15',
    status: 'live',
    tags: ['Cybersecurity', 'Threat Detection', 'Compliance', 'Incident Response', 'Security Training'],
    image: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500'
  },

  // Innovation & Emerging Tech
  {
    id: 'blockchain-solutions',
    title: 'Zion Blockchain Studio',
    description: 'Enterprise blockchain development platform for creating secure, scalable decentralized applications and smart contracts.',
    category: 'Innovation',
    subcategory: 'Blockchain',
    price: {
      monthly: 299,
      yearly: 2990,
      currency: '$',
      pricingModel: 'enterprise'
    },
    features: [
      'Smart contract development',
      'DApp creation tools',
      'Blockchain infrastructure',
      'Token development',
      'DeFi protocol integration',
      'Cross-chain solutions',
      'Security auditing',
      'Performance optimization'
    ],
    benefits: [
      'Build secure blockchain applications',
      'Reduce development time by 60%',
      'Ensure compliance with regulations',
      'Scale blockchain infrastructure efficiently'
    ],
    useCases: [
      'Supply chain tracking',
      'Digital identity management',
      'Decentralized finance',
      'NFT marketplaces',
      'Voting systems'
    ],
    targetAudience: ['Blockchain developers', 'Enterprises', 'Financial institutions', 'Startups', 'Government agencies'],
    integration: ['Ethereum', 'Polygon', 'Solana', 'Hyperledger', 'Traditional systems'],
    support: ['Custom development', 'Security auditing', 'Compliance consulting', 'Technical training'],
    website: 'https://ziontechgroup.com/blockchain-studio',
    contact: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    },
    rating: 4.6,
    reviewCount: 67,
    launchDate: '2024-02-15',
    status: 'beta',
    tags: ['Blockchain', 'Smart Contracts', 'DeFi', 'DApps', 'Innovation'],
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&h=500'
  },
  {
    id: 'iot-platform',
    title: 'Zion IoT Hub',
    description: 'Comprehensive IoT platform for connecting, managing, and analyzing data from smart devices and sensors.',
    category: 'Innovation',
    subcategory: 'Internet of Things',
    price: {
      monthly: 179,
      yearly: 1790,
      currency: '$',
      pricingModel: 'usage'
    },
    features: [
      'Device management',
      'Real-time data collection',
      'Edge computing',
      'Predictive maintenance',
      'Data visualization',
      'API integration',
      'Security protocols',
      'Scalable infrastructure'
    ],
    benefits: [
      'Connect unlimited IoT devices',
      'Reduce operational costs by 30%',
      'Improve predictive maintenance',
      'Gain real-time insights from sensors'
    ],
    useCases: [
      'Smart cities',
      'Industrial IoT',
      'Smart homes',
      'Healthcare monitoring',
      'Environmental monitoring'
    ],
    targetAudience: ['IoT developers', 'Manufacturing companies', 'Smart city planners', 'Healthcare providers', 'Utilities'],
    integration: ['MQTT', 'HTTP', 'CoAP', 'Cloud platforms', 'Enterprise systems'],
    support: ['Device onboarding', 'Custom protocol development', 'Performance optimization', '24/7 monitoring'],
    website: 'https://ziontechgroup.com/iot-hub',
    contact: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    },
    rating: 4.7,
    reviewCount: 83,
    launchDate: '2024-01-20',
    status: 'live',
    tags: ['IoT', 'Edge Computing', 'Predictive Maintenance', 'Smart Devices', 'Data Analytics'],
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&h=500'
  },

  // Business Solutions
  {
    id: 'workflow-automation',
    title: 'Zion Workflow Engine',
    description: 'Powerful workflow automation platform that streamlines business processes and eliminates manual tasks.',
    category: 'Business Solutions',
    subcategory: 'Automation',
    price: {
      monthly: 89,
      yearly: 890,
      currency: '$',
      pricingModel: 'subscription'
    },
    features: [
      'Visual workflow builder',
      'Process automation',
      'Integration connectors',
      'Approval workflows',
      'Task management',
      'Performance analytics',
      'Mobile app',
      'Custom forms'
    ],
    benefits: [
      'Automate repetitive tasks',
      'Improve process efficiency by 70%',
      'Reduce human errors',
      'Track process performance in real-time'
    ],
    useCases: [
      'HR processes',
      'Sales workflows',
      'Customer onboarding',
      'Invoice processing',
      'Project management'
    ],
    targetAudience: ['Business analysts', 'Operations managers', 'HR teams', 'Sales teams', 'Small businesses'],
    integration: ['CRM systems', 'ERP platforms', 'Email services', 'Document management', 'Payment gateways'],
    support: ['Process consulting', 'Workflow design', 'Integration assistance', 'Training programs'],
    website: 'https://ziontechgroup.com/workflow-engine',
    contact: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    },
    rating: 4.8,
    reviewCount: 142,
    launchDate: '2023-10-15',
    status: 'live',
    tags: ['Workflow Automation', 'Business Process', 'Productivity', 'Integration', 'Analytics'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=500'
  },
  {
    id: 'customer-experience',
    title: 'Zion CX Platform',
    description: 'All-in-one customer experience platform that helps businesses understand, engage, and delight their customers.',
    category: 'Business Solutions',
    subcategory: 'Customer Experience',
    price: {
      monthly: 129,
      yearly: 1290,
      currency: '$',
      pricingModel: 'subscription'
    },
    features: [
      'Customer journey mapping',
      'Feedback collection',
      'Sentiment analysis',
      'Personalization engine',
      'Omnichannel support',
      'Customer analytics',
      'Loyalty programs',
      'A/B testing'
    ],
    benefits: [
      'Increase customer satisfaction by 40%',
      'Improve customer retention',
      'Personalize customer interactions',
      'Optimize customer journey'
    ],
    useCases: [
      'Customer feedback management',
      'Personalization strategies',
      'Customer support optimization',
      'Loyalty program management',
      'Customer journey optimization'
    ],
    targetAudience: ['Customer success teams', 'Marketing teams', 'Product managers', 'E-commerce businesses', 'Service providers'],
    integration: ['CRM systems', 'Email platforms', 'Social media', 'Website analytics', 'Support tools'],
    support: ['Customer journey consulting', 'Implementation assistance', 'Best practices training', 'Performance optimization'],
    website: 'https://ziontechgroup.com/cx-platform',
    contact: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    },
    rating: 4.9,
    reviewCount: 178,
    launchDate: '2023-09-20',
    status: 'live',
    tags: ['Customer Experience', 'Personalization', 'Analytics', 'Feedback', 'Loyalty'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&h=500'
  }
];

export const getServicesByCategory = (category: string) => {
  return MICRO_SAAS_SERVICES.filter(service => service.category === category);
};

export const getServicesBySubcategory = (subcategory: string) => {
  return MICRO_SAAS_SERVICES.filter(service => service.subcategory === subcategory);
};

export const getServiceById = (id: string) => {
  return MICRO_SAAS_SERVICES.find(service => service.id === id);
};

export const getPopularServices = (limit: number = 6) => {
  return MICRO_SAAS_SERVICES
    .sort((a, b) => b.rating - a.rating)
    .slice(0, limit);
};