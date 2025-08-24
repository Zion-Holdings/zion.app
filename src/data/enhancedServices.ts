export interface EnhancedService {
  id: string;
  title: string;
  description: string;
  category: 'AI' | 'IT' | 'SAAS' | 'Development' | 'Consulting' | 'Security' | 'Analytics' | 'Cloud' | 'Automation' | 'Integration';
  subcategory: string;
  price: {
    min: number;
    max: number;
    currency: string;
    pricingModel: 'hourly' | 'monthly' | 'project' | 'subscription';
  };
  features: string[];
  benefits: string[];
  useCases: string[];
  targetAudience: string;
  averageMarketPrice: string;
  contactLink: string;
  demoLink?: string;
  rating: number;
  reviewCount: number;
  deliveryTime: string;
  tags: string[];
  image: string;
  createdAt?: string;
  isPopular?: boolean;
  isNew?: boolean;
  isPremium?: boolean;
}

export const ENHANCED_SERVICES: EnhancedService[] = [
  // AI Services
  {
    id: 'ai-1',
    title: 'AI-Powered Content Generation Suite',
    description: 'Advanced AI content creation platform that generates high-quality articles, marketing copy, and creative content using GPT-4 and custom-trained models.',
    category: 'AI',
    subcategory: 'Content Generation',
    price: {
      min: 299,
      max: 999,
      currency: '$',
      pricingModel: 'monthly'
    },
    features: [
      'Multi-language content generation',
      'SEO-optimized writing',
      'Brand voice customization',
      'Plagiarism-free content',
      'Bulk content creation',
      'API integration',
      'Content analytics dashboard'
    ],
    benefits: [
      '10x faster content creation',
      'Consistent brand messaging',
      'SEO performance improvement',
      'Cost reduction by 60%',
      '24/7 content availability'
    ],
    useCases: [
      'Marketing agencies',
      'E-commerce businesses',
      'Blog publishers',
      'Social media managers',
      'Content marketing teams'
    ],
    targetAudience: 'Marketing professionals, content creators, businesses needing regular content',
    averageMarketPrice: '$500-1500/month',
    contactLink: 'https://ziontechgroup.com/contact',
    demoLink: 'https://ziontechgroup.com/demo/ai-content',
    rating: 4.8,
    reviewCount: 156,
    deliveryTime: 'Instant setup, 24 hours for customization',
    tags: ['AI', 'Content Generation', 'Marketing', 'SEO', 'Automation'],
    image: 'https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?w=800&auto=format',
    createdAt: '2024-01-15T10:00:00.000Z',
    isPopular: true
  },
  {
    id: 'ai-2',
    title: 'Intelligent Customer Support Bot',
    description: 'AI-powered customer service chatbot that handles inquiries, provides instant responses, and escalates complex issues to human agents.',
    category: 'AI',
    subcategory: 'Customer Service',
    price: {
      min: 199,
      max: 799,
      currency: '$',
      pricingModel: 'monthly'
    },
    features: [
      'Natural language processing',
      'Multi-language support',
      'Integration with CRM systems',
      'Analytics and reporting',
      'Custom knowledge base',
      'Human handoff capability',
      'Voice and text support'
    ],
    benefits: [
      '24/7 customer support',
      '70% reduction in response time',
      'Cost savings of 40-60%',
      'Improved customer satisfaction',
      'Scalable support operations'
    ],
    useCases: [
      'E-commerce websites',
      'SaaS platforms',
      'Customer service centers',
      'Online businesses',
      'Support teams'
    ],
    targetAudience: 'Businesses with customer support needs, e-commerce platforms',
    averageMarketPrice: '$300-1000/month',
    contactLink: 'https://ziontechgroup.com/contact',
    demoLink: 'https://ziontechgroup.com/demo/support-bot',
    rating: 4.7,
    reviewCount: 89,
    deliveryTime: '1-2 weeks setup',
    tags: ['AI', 'Customer Service', 'Chatbot', 'Automation', 'Support'],
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format',
    createdAt: '2024-01-20T10:00:00.000Z',
    isNew: true
  },
  {
    id: 'ai-3',
    title: 'Predictive Analytics Platform',
    description: 'Machine learning platform that analyzes historical data to predict future trends, customer behavior, and business outcomes.',
    category: 'AI',
    subcategory: 'Analytics',
    price: {
      min: 499,
      max: 1999,
      currency: '$',
      pricingModel: 'monthly'
    },
    features: [
      'Advanced ML algorithms',
      'Real-time data processing',
      'Custom model training',
      'Interactive dashboards',
      'API access',
      'Data visualization',
      'Automated insights'
    ],
    benefits: [
      'Data-driven decision making',
      'Risk mitigation',
      'Revenue optimization',
      'Customer behavior insights',
      'Competitive advantage'
    ],
    useCases: [
      'Financial services',
      'Retail analytics',
      'Healthcare predictions',
      'Supply chain optimization',
      'Marketing campaigns'
    ],
    targetAudience: 'Data analysts, business intelligence teams, decision makers',
    averageMarketPrice: '$800-2500/month',
    contactLink: 'https://ziontechgroup.com/contact',
    demoLink: 'https://ziontechgroup.com/demo/predictive-analytics',
    rating: 4.9,
    reviewCount: 203,
    deliveryTime: '2-3 weeks implementation',
    tags: ['AI', 'Analytics', 'Machine Learning', 'Predictions', 'Business Intelligence'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format',
    createdAt: '2024-01-10T10:00:00.000Z',
    isPremium: true
  },

  // IT Services
  {
    id: 'it-1',
    title: 'Cloud Infrastructure Management',
    description: 'Comprehensive cloud infrastructure management service including setup, monitoring, optimization, and security for AWS, Azure, and Google Cloud.',
    category: 'IT',
    subcategory: 'Cloud Services',
    price: {
      min: 1500,
      max: 8000,
      currency: '$',
      pricingModel: 'monthly'
    },
    features: [
      'Multi-cloud management',
      '24/7 monitoring',
      'Cost optimization',
      'Security compliance',
      'Backup and disaster recovery',
      'Performance tuning',
      'Automated scaling'
    ],
    benefits: [
      'Reduced cloud costs by 30%',
      'Improved uptime to 99.9%',
      'Enhanced security posture',
      'Faster deployment cycles',
      'Expert cloud management'
    ],
    useCases: [
      'Enterprise applications',
      'Web applications',
      'Data centers',
      'DevOps teams',
      'IT departments'
    ],
    targetAudience: 'IT managers, DevOps engineers, cloud architects',
    averageMarketPrice: '$3000-10000/month',
    contactLink: 'https://ziontechgroup.com/contact',
    demoLink: 'https://ziontechgroup.com/demo/cloud-management',
    rating: 4.8,
    reviewCount: 134,
    deliveryTime: '2-4 weeks setup',
    tags: ['IT', 'Cloud', 'DevOps', 'Infrastructure', 'AWS', 'Azure'],
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format',
    createdAt: '2024-01-05T10:00:00.000Z',
    isPopular: true
  },
  {
    id: 'it-2',
    title: 'Cybersecurity Assessment & Protection',
    description: 'Comprehensive cybersecurity services including vulnerability assessments, penetration testing, security audits, and protection implementation.',
    category: 'IT',
    subcategory: 'Security',
    price: {
      min: 3000,
      max: 15000,
      currency: '$',
      pricingModel: 'project'
    },
    features: [
      'Vulnerability scanning',
      'Penetration testing',
      'Security audits',
      'Compliance assessments',
      'Incident response planning',
      'Security training',
      'Ongoing monitoring'
    ],
    benefits: [
      'Enhanced security posture',
      'Compliance achievement',
      'Risk mitigation',
      'Customer trust building',
      'Insurance premium reduction'
    ],
    useCases: [
      'Financial institutions',
      'Healthcare organizations',
      'E-commerce platforms',
      'Government agencies',
      'Enterprise businesses'
    ],
    targetAudience: 'CISOs, IT security managers, compliance officers',
    averageMarketPrice: '$5000-20000/project',
    contactLink: 'https://ziontechgroup.com/contact',
    demoLink: 'https://ziontechgroup.com/demo/cybersecurity',
    rating: 4.9,
    reviewCount: 178,
    deliveryTime: '3-6 weeks',
    tags: ['IT', 'Security', 'Cybersecurity', 'Compliance', 'Audit'],
    image: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=800&auto=format',
    createdAt: '2024-01-08T10:00:00.000Z',
    isPremium: true
  },
  {
    id: 'it-3',
    title: 'IT Infrastructure Modernization',
    description: 'Transform legacy IT systems into modern, scalable infrastructure using cloud-native technologies and microservices architecture.',
    category: 'IT',
    subcategory: 'Infrastructure',
    price: {
      min: 10000,
      max: 50000,
      currency: '$',
      pricingModel: 'project'
    },
    features: [
      'Legacy system assessment',
      'Cloud migration planning',
      'Microservices architecture',
      'Container orchestration',
      'CI/CD pipeline setup',
      'Performance optimization',
      'Training and documentation'
    ],
    benefits: [
      'Improved system performance',
      'Reduced maintenance costs',
      'Enhanced scalability',
      'Better user experience',
      'Future-proof technology'
    ],
    useCases: [
      'Enterprise applications',
      'Legacy system upgrades',
      'Digital transformation',
      'Performance optimization',
      'Technology modernization'
    ],
    targetAudience: 'CTOs, IT directors, system architects',
    averageMarketPrice: '$25000-75000/project',
    contactLink: 'https://ziontechgroup.com/contact',
    demoLink: 'https://ziontechgroup.com/demo/infrastructure-modernization',
    rating: 4.7,
    reviewCount: 92,
    deliveryTime: '3-6 months',
    tags: ['IT', 'Infrastructure', 'Modernization', 'Cloud', 'Microservices'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format',
    createdAt: '2024-01-12T10:00:00.000Z'
  },

  // SAAS Services
  {
    id: 'saas-1',
    title: 'Project Management Suite',
    description: 'Comprehensive project management platform with task tracking, team collaboration, time management, and reporting capabilities.',
    category: 'SAAS',
    subcategory: 'Project Management',
    price: {
      min: 15,
      max: 99,
      currency: '$',
      pricingModel: 'monthly'
    },
    features: [
      'Task and project tracking',
      'Team collaboration tools',
      'Time tracking and reporting',
      'Gantt charts and timelines',
      'Resource management',
      'Integration capabilities',
      'Mobile applications'
    ],
    benefits: [
      'Improved project delivery',
      'Better team collaboration',
      'Enhanced productivity',
      'Real-time visibility',
      'Cost and time savings'
    ],
    useCases: [
      'Software development',
      'Marketing campaigns',
      'Construction projects',
      'Event planning',
      'Product launches'
    ],
    targetAudience: 'Project managers, team leaders, business owners',
    averageMarketPrice: '$25-150/month per user',
    contactLink: 'https://ziontechgroup.com/contact',
    demoLink: 'https://ziontechgroup.com/demo/project-management',
    rating: 4.6,
    reviewCount: 445,
    deliveryTime: 'Instant setup',
    tags: ['SAAS', 'Project Management', 'Collaboration', 'Productivity', 'Team Management'],
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format',
    createdAt: '2024-01-18T10:00:00.000Z',
    isPopular: true
  },
  {
    id: 'saas-2',
    title: 'Customer Relationship Management (CRM)',
    description: 'Advanced CRM platform for managing customer interactions, sales pipelines, marketing campaigns, and customer analytics.',
    category: 'SAAS',
    subcategory: 'CRM',
    price: {
      min: 25,
      max: 199,
      currency: '$',
      pricingModel: 'monthly'
    },
    features: [
      'Contact management',
      'Sales pipeline tracking',
      'Email marketing integration',
      'Analytics and reporting',
      'Mobile applications',
      'API access',
      'Custom dashboards'
    ],
    benefits: [
      'Improved customer relationships',
      'Increased sales efficiency',
      'Better marketing ROI',
      'Enhanced customer insights',
      'Streamlined operations'
    ],
    useCases: [
      'Sales teams',
      'Marketing departments',
      'Customer service',
      'Small businesses',
      'Enterprise organizations'
    ],
    targetAudience: 'Sales managers, marketing professionals, business owners',
    averageMarketPrice: '$50-300/month per user',
    contactLink: 'https://ziontechgroup.com/contact',
    demoLink: 'https://ziontechgroup.com/demo/crm',
    rating: 4.8,
    reviewCount: 567,
    deliveryTime: '1-2 weeks setup',
    tags: ['SAAS', 'CRM', 'Sales', 'Marketing', 'Customer Management'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format',
    createdAt: '2024-01-16T10:00:00.000Z'
  },
  {
    id: 'saas-3',
    title: 'Business Intelligence Dashboard',
    description: 'Real-time business intelligence platform that transforms data into actionable insights with interactive dashboards and automated reporting.',
    category: 'SAAS',
    subcategory: 'Analytics',
    price: {
      min: 199,
      max: 999,
      currency: '$',
      pricingModel: 'monthly'
    },
    features: [
      'Real-time data visualization',
      'Custom dashboard creation',
      'Automated reporting',
      'Data integration',
      'Advanced analytics',
      'Mobile access',
      'White-label options'
    ],
    benefits: [
      'Data-driven decisions',
      'Improved operational efficiency',
      'Real-time insights',
      'Reduced reporting time',
      'Better performance tracking'
    ],
    useCases: [
      'Executive dashboards',
      'Sales analytics',
      'Marketing performance',
      'Financial reporting',
      'Operational metrics'
    ],
    targetAudience: 'Business analysts, executives, data scientists',
    averageMarketPrice: '$300-1200/month',
    contactLink: 'https://ziontechgroup.com/contact',
    demoLink: 'https://ziontechgroup.com/demo/business-intelligence',
    rating: 4.7,
    reviewCount: 234,
    deliveryTime: '2-3 weeks implementation',
    tags: ['SAAS', 'Analytics', 'Business Intelligence', 'Data Visualization', 'Reporting'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format',
    createdAt: '2024-01-22T10:00:00.000Z',
    isNew: true
  },

  // Development Services
  {
    id: 'dev-1',
    title: 'Custom Software Development',
    description: 'End-to-end custom software development services from concept to deployment, including web applications, mobile apps, and enterprise solutions.',
    category: 'Development',
    subcategory: 'Custom Development',
    price: {
      min: 5000,
      max: 100000,
      currency: '$',
      pricingModel: 'project'
    },
    features: [
      'Requirements analysis',
      'UI/UX design',
      'Full-stack development',
      'Testing and QA',
      'Deployment and maintenance',
      'Documentation',
      'Training and support'
    ],
    benefits: [
      'Tailored solutions',
      'Competitive advantage',
      'Scalable architecture',
      'Long-term support',
      'Technology expertise'
    ],
    useCases: [
      'Business applications',
      'E-commerce platforms',
      'Mobile applications',
      'Enterprise systems',
      'Startup MVPs'
    ],
    targetAudience: 'Business owners, product managers, startup founders',
    averageMarketPrice: '$15000-150000/project',
    contactLink: 'https://ziontechgroup.com/contact',
    demoLink: 'https://ziontechgroup.com/demo/custom-development',
    rating: 4.9,
    reviewCount: 312,
    deliveryTime: '2-12 months',
    tags: ['Development', 'Custom Software', 'Web Apps', 'Mobile Apps', 'Enterprise'],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format',
    createdAt: '2024-01-03T10:00:00.000Z',
    isPremium: true
  },
  {
    id: 'dev-2',
    title: 'API Development & Integration',
    description: 'Professional API development services including RESTful APIs, GraphQL, third-party integrations, and API management solutions.',
    category: 'Development',
    subcategory: 'API Services',
    price: {
      min: 3000,
      max: 25000,
      currency: '$',
      pricingModel: 'project'
    },
    features: [
      'API design and architecture',
      'RESTful and GraphQL APIs',
      'Third-party integrations',
      'API documentation',
      'Testing and validation',
      'Performance optimization',
      'Security implementation'
    ],
    benefits: [
      'Improved system connectivity',
      'Enhanced user experience',
      'Reduced development time',
      'Better scalability',
      'Increased efficiency'
    ],
    useCases: [
      'System integrations',
      'Mobile app backends',
      'E-commerce platforms',
      'Data sharing',
      'Third-party services'
    ],
    targetAudience: 'Developers, system architects, IT managers',
    averageMarketPrice: '$8000-40000/project',
    contactLink: 'https://ziontechgroup.com/contact',
    demoLink: 'https://ziontechgroup.com/demo/api-development',
    rating: 4.8,
    reviewCount: 189,
    deliveryTime: '3-8 weeks',
    tags: ['Development', 'API', 'Integration', 'Backend', 'Microservices'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d11fb3a1?w=800&auto=format',
    createdAt: '2024-01-14T10:00:00.000Z'
  },

  // Consulting Services
  {
    id: 'consulting-1',
    title: 'Digital Transformation Consulting',
    description: 'Strategic consulting services to help organizations navigate digital transformation, technology adoption, and process optimization.',
    category: 'Consulting',
    subcategory: 'Strategy',
    price: {
      min: 150,
      max: 500,
      currency: '$',
      pricingModel: 'hourly'
    },
    features: [
      'Technology assessment',
      'Digital strategy development',
      'Change management',
      'Process optimization',
      'Technology roadmap',
      'Implementation planning',
      'Training and support'
    ],
    benefits: [
      'Clear digital strategy',
      'Improved efficiency',
      'Competitive advantage',
      'Cost optimization',
      'Risk mitigation'
    ],
    useCases: [
      'Enterprise transformation',
      'Technology adoption',
      'Process improvement',
      'Change management',
      'Strategic planning'
    ],
    targetAudience: 'C-level executives, IT directors, business leaders',
    averageMarketPrice: '$200-800/hour',
    contactLink: 'https://ziontechgroup.com/contact',
    demoLink: 'https://ziontechgroup.com/demo/digital-transformation',
    rating: 4.9,
    reviewCount: 156,
    deliveryTime: 'Ongoing engagement',
    tags: ['Consulting', 'Digital Transformation', 'Strategy', 'Change Management', 'Technology'],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format',
    createdAt: '2024-01-01T10:00:00.000Z',
    isPopular: true
  },
  {
    id: 'consulting-2',
    title: 'AI Strategy & Implementation',
    description: 'Expert consulting on AI strategy development, implementation planning, and technology selection for business transformation.',
    category: 'Consulting',
    subcategory: 'AI Strategy',
    price: {
      min: 200,
      max: 600,
      currency: '$',
      pricingModel: 'hourly'
    },
    features: [
      'AI readiness assessment',
      'Strategy development',
      'Technology selection',
      'Implementation planning',
      'ROI analysis',
      'Change management',
      'Ongoing support'
    ],
    benefits: [
      'Clear AI roadmap',
      'Risk mitigation',
      'Cost optimization',
      'Competitive advantage',
      'Successful implementation'
    ],
    useCases: [
      'AI adoption planning',
      'Technology selection',
      'Implementation strategy',
      'ROI analysis',
      'Change management'
    ],
    targetAudience: 'CTOs, AI directors, innovation leaders',
    averageMarketPrice: '$300-1000/hour',
    contactLink: 'https://ziontechgroup.com/contact',
    demoLink: 'https://ziontechgroup.com/demo/ai-strategy',
    rating: 4.8,
    reviewCount: 98,
    deliveryTime: 'Ongoing engagement',
    tags: ['Consulting', 'AI Strategy', 'Implementation', 'Technology', 'Innovation'],
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format',
    createdAt: '2024-01-06T10:00:00.000Z'
  },

  // Automation Services
  {
    id: 'automation-1',
    title: 'Business Process Automation',
    description: 'Comprehensive business process automation services using RPA, workflow automation, and intelligent process optimization.',
    category: 'Automation',
    subcategory: 'Process Automation',
    price: {
      min: 2500,
      max: 15000,
      currency: '$',
      pricingModel: 'project'
    },
    features: [
      'Process analysis and mapping',
      'RPA implementation',
      'Workflow automation',
      'Integration development',
      'Monitoring and analytics',
      'Training and support',
      'Continuous improvement'
    ],
    benefits: [
      'Increased efficiency',
      'Cost reduction',
      'Error elimination',
      'Improved compliance',
      'Scalable operations'
    ],
    useCases: [
      'Data entry automation',
      'Invoice processing',
      'Customer onboarding',
      'Report generation',
      'Compliance monitoring'
    ],
    targetAudience: 'Operations managers, process improvement teams, business analysts',
    averageMarketPrice: '$8000-25000/project',
    contactLink: 'https://ziontechgroup.com/contact',
    demoLink: 'https://ziontechgroup.com/demo/process-automation',
    rating: 4.7,
    reviewCount: 167,
    deliveryTime: '4-12 weeks',
    tags: ['Automation', 'RPA', 'Process Improvement', 'Workflow', 'Efficiency'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format',
    createdAt: '2024-01-25T10:00:00.000Z',
    isNew: true
  },

  // Integration Services
  {
    id: 'integration-1',
    title: 'Enterprise System Integration',
    description: 'Professional integration services to connect disparate business systems, databases, and applications for seamless data flow.',
    category: 'Integration',
    subcategory: 'System Integration',
    price: {
      min: 5000,
      max: 50000,
      currency: '$',
      pricingModel: 'project'
    },
    features: [
      'System analysis and mapping',
      'API development',
      'Data transformation',
      'Real-time synchronization',
      'Error handling',
      'Monitoring and logging',
      'Documentation and training'
    ],
    benefits: [
      'Unified data view',
      'Improved efficiency',
      'Reduced manual work',
      'Better decision making',
      'Cost savings'
    ],
    useCases: [
      'ERP integrations',
      'CRM connections',
      'Database synchronization',
      'Third-party services',
      'Legacy system connections'
    ],
    targetAudience: 'IT managers, system administrators, business analysts',
    averageMarketPrice: '$15000-75000/project',
    contactLink: 'https://ziontechgroup.com/contact',
    demoLink: 'https://ziontechgroup.com/demo/system-integration',
    rating: 4.8,
    reviewCount: 134,
    deliveryTime: '6-16 weeks',
    tags: ['Integration', 'Systems', 'APIs', 'Data', 'Enterprise'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format',
    createdAt: '2024-01-09T10:00:00.000Z'
  }
];

export const getServicesByCategory = (category: string) => {
  return ENHANCED_SERVICES.filter(service => service.category === category);
};

export const getPopularServices = () => {
  return ENHANCED_SERVICES.filter(service => service.isPopular);
};

export const getNewServices = () => {
  return ENHANCED_SERVICES.filter(service => service.isNew);
};

export const getPremiumServices = () => {
  return ENHANCED_SERVICES.filter(service => service.isPremium);
};

export const searchServices = (query: string) => {
  const lowerQuery = query.toLowerCase();
  return ENHANCED_SERVICES.filter(service => 
    service.title.toLowerCase().includes(lowerQuery) ||
    service.description.toLowerCase().includes(lowerQuery) ||
    service.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
};