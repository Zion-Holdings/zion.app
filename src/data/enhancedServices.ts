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
  {
    id: 'ai-chatbot-platform',
    title: 'AI-Powered Chatbot Platform',
    description: 'Enterprise-grade conversational AI platform with natural language processing, multi-language support, and seamless integration capabilities.',
    category: 'AI',
    subcategory: 'Conversational AI',
    price: {
      min: 5000,
      max: 25000,
      currency: '$',
      pricingModel: 'project'
    },
    features: [
      'Natural Language Processing',
      'Multi-language Support',
      'Custom Training Models',
      'Analytics Dashboard',
      'API Integration',
      '24/7 Support'
    ],
    benefits: [
      'Reduce customer service costs by 60%',
      'Improve response time to under 1 second',
      'Handle unlimited concurrent conversations',
      'Scalable across multiple channels'
    ],
    useCases: [
      'Customer Support Automation',
      'Lead Qualification',
      'Appointment Scheduling',
      'FAQ Management'
    ],
    targetAudience: 'E-commerce, Healthcare, Financial Services',
    averageMarketPrice: '$15,000 - $50,000',
    contactLink: 'mailto:kleber@ziontechgroup.com?subject=AI Chatbot Platform Inquiry',
    rating: 4.8,
    reviewCount: 127,
    deliveryTime: '4-6 weeks',
    tags: ['AI', 'Chatbot', 'NLP', 'Automation', 'Customer Service'],
    image: '/images/services/ai-chatbot.jpg',
    createdAt: '2024-01-15',
    isPopular: true,
    isPremium: true
  },
  {
    id: 'cloud-migration-suite',
    title: 'Cloud Migration & Optimization Suite',
    description: 'Comprehensive cloud migration solution including assessment, planning, execution, and optimization for AWS, Azure, and Google Cloud.',
    category: 'Cloud',
    subcategory: 'Migration Services',
    price: {
      min: 15000,
      max: 100000,
      currency: '$',
      pricingModel: 'project'
    },
    features: [
      'Infrastructure Assessment',
      'Migration Planning',
      'Data Migration Tools',
      'Performance Optimization',
      'Security Implementation',
      'Post-migration Support'
    ],
    benefits: [
      'Reduce infrastructure costs by 40-60%',
      'Improve application performance by 3x',
      'Enhanced security and compliance',
      'Scalable and flexible infrastructure'
    ],
    useCases: [
      'Legacy System Modernization',
      'Multi-cloud Strategy',
      'Disaster Recovery Setup',
      'Cost Optimization'
    ],
    targetAudience: 'Enterprises, Mid-size Companies, Startups',
    averageMarketPrice: '$50,000 - $200,000',
    contactLink: 'mailto:kleber@ziontechgroup.com?subject=Cloud Migration Suite Inquiry',
    rating: 4.9,
    reviewCount: 89,
    deliveryTime: '8-12 weeks',
    tags: ['Cloud', 'Migration', 'AWS', 'Azure', 'Optimization'],
    image: '/images/services/cloud-migration.jpg',
    createdAt: '2024-01-10',
    isPopular: true,
    isPremium: true
  },
  {
    id: 'cybersecurity-audit',
    title: 'Comprehensive Cybersecurity Audit',
    description: 'Full-stack security assessment including penetration testing, vulnerability analysis, compliance review, and remediation recommendations.',
    category: 'Security',
    subcategory: 'Security Assessment',
    price: {
      min: 8000,
      max: 35000,
      currency: '$',
      pricingModel: 'project'
    },
    features: [
      'Penetration Testing',
      'Vulnerability Assessment',
      'Compliance Review (SOC2, GDPR, HIPAA)',
      'Security Architecture Review',
      'Incident Response Planning',
      'Employee Security Training'
    ],
    benefits: [
      'Identify and fix security vulnerabilities',
      'Ensure compliance with regulations',
      'Protect against data breaches',
      'Build customer trust and confidence'
    ],
    useCases: [
      'Pre-compliance Preparation',
      'Security Posture Assessment',
      'Merger & Acquisition Due Diligence',
      'Regular Security Reviews'
    ],
    targetAudience: 'Financial Services, Healthcare, E-commerce, Government',
    averageMarketPrice: '$25,000 - $75,000',
    contactLink: 'mailto:kleber@ziontechgroup.com?subject=Cybersecurity Audit Inquiry',
    rating: 4.7,
    reviewCount: 156,
    deliveryTime: '3-4 weeks',
    tags: ['Security', 'Audit', 'Compliance', 'Penetration Testing', 'Vulnerability'],
    image: '/images/services/cybersecurity-audit.jpg',
    createdAt: '2024-01-20',
    isPopular: true,
    isPremium: true
  },
  {
    id: 'data-analytics-platform',
    title: 'Advanced Data Analytics Platform',
    description: 'Enterprise data analytics solution with real-time processing, machine learning insights, and interactive dashboards for business intelligence.',
    category: 'Analytics',
    subcategory: 'Business Intelligence',
    price: {
      min: 12000,
      max: 60000,
      currency: '$',
      pricingModel: 'project'
    },
    features: [
      'Real-time Data Processing',
      'Machine Learning Models',
      'Interactive Dashboards',
      'Data Visualization Tools',
      'API Integration',
      'Custom Reporting Engine'
    ],
    benefits: [
      'Make data-driven decisions faster',
      'Identify hidden business opportunities',
      'Improve operational efficiency',
      'Predict future trends and patterns'
    ],
    useCases: [
      'Business Performance Monitoring',
      'Customer Behavior Analysis',
      'Predictive Maintenance',
      'Financial Forecasting'
    ],
    targetAudience: 'Retail, Manufacturing, Healthcare, Financial Services',
    averageMarketPrice: '$40,000 - $150,000',
    contactLink: 'mailto:kleber@ziontechgroup.com?subject=Data Analytics Platform Inquiry',
    rating: 4.6,
    reviewCount: 94,
    deliveryTime: '6-8 weeks',
    tags: ['Analytics', 'BI', 'Machine Learning', 'Data Visualization', 'Real-time'],
    image: '/images/services/data-analytics.jpg',
    createdAt: '2024-01-25',
    isNew: true,
    isPremium: true
  },
  {
    id: 'mobile-app-development',
    title: 'Cross-Platform Mobile App Development',
    description: 'Native-quality mobile applications for iOS and Android using React Native, Flutter, or native development with modern UI/UX design.',
    category: 'Development',
    subcategory: 'Mobile Development',
    price: {
      min: 15000,
      max: 80000,
      currency: '$',
      pricingModel: 'project'
    },
    features: [
      'Cross-platform Development',
      'Native Performance',
      'Modern UI/UX Design',
      'Push Notifications',
      'Offline Functionality',
      'App Store Deployment'
    ],
    benefits: [
      'Reach both iOS and Android users',
      'Faster development and deployment',
      'Consistent user experience',
      'Lower maintenance costs'
    ],
    useCases: [
      'E-commerce Applications',
      'Social Media Apps',
      'Business Tools',
      'Entertainment Platforms'
    ],
    targetAudience: 'Startups, SMEs, Enterprises, Agencies',
    averageMarketPrice: '$30,000 - $100,000',
    contactLink: 'mailto:kleber@ziontechgroup.com?subject=Mobile App Development Inquiry',
    rating: 4.8,
    reviewCount: 203,
    deliveryTime: '8-16 weeks',
    tags: ['Mobile', 'React Native', 'Flutter', 'iOS', 'Android', 'Cross-platform'],
    image: '/images/services/mobile-app.jpg',
    createdAt: '2024-01-05',
    isPopular: true
  },
  {
    id: 'saas-platform-development',
    title: 'Custom SaaS Platform Development',
    description: 'End-to-end SaaS platform development including user management, subscription billing, analytics, and multi-tenant architecture.',
    category: 'SAAS',
    subcategory: 'Platform Development',
    price: {
      min: 25000,
      max: 150000,
      currency: '$',
      pricingModel: 'project'
    },
    features: [
      'Multi-tenant Architecture',
      'User Management System',
      'Subscription Billing',
      'Analytics Dashboard',
      'API Development',
      'Scalable Infrastructure'
    ],
    benefits: [
      'Recurring revenue model',
      'Scalable business growth',
      'Automated customer management',
      'Data-driven insights'
    ],
    useCases: [
      'B2B Software Platforms',
      'Subscription Services',
      'Marketplace Applications',
      'Business Tools'
    ],
    targetAudience: 'Startups, Entrepreneurs, Enterprises, Agencies',
    averageMarketPrice: '$75,000 - $300,000',
    contactLink: 'mailto:kleber@ziontechgroup.com?subject=SaaS Platform Development Inquiry',
    rating: 4.9,
    reviewCount: 67,
    deliveryTime: '12-20 weeks',
    tags: ['SaaS', 'Multi-tenant', 'Subscription', 'Billing', 'Platform'],
    image: '/images/services/saas-platform.jpg',
    createdAt: '2024-01-12',
    isPremium: true
  },
  {
    id: 'it-consulting-services',
    title: 'Strategic IT Consulting Services',
    description: 'Comprehensive IT strategy consulting including technology assessment, digital transformation planning, and implementation guidance.',
    category: 'Consulting',
    subcategory: 'Strategic Planning',
    price: {
      min: 150,
      max: 300,
      currency: '$',
      pricingModel: 'hourly'
    },
    features: [
      'Technology Assessment',
      'Digital Transformation Strategy',
      'Architecture Planning',
      'Vendor Selection',
      'Implementation Roadmap',
      'Change Management'
    ],
    benefits: [
      'Optimize technology investments',
      'Improve operational efficiency',
      'Reduce technical debt',
      'Align IT with business goals'
    ],
    useCases: [
      'Digital Transformation',
      'Technology Modernization',
      'IT Strategy Development',
      'Vendor Evaluation'
    ],
    targetAudience: 'Enterprises, Mid-size Companies, Government, Non-profits',
    averageMarketPrice: '$200 - $500/hour',
    contactLink: 'mailto:kleber@ziontechgroup.com?subject=IT Consulting Services Inquiry',
    rating: 4.7,
    reviewCount: 189,
    deliveryTime: 'Flexible',
    tags: ['Consulting', 'Strategy', 'Digital Transformation', 'Architecture', 'Planning'],
    image: '/images/services/it-consulting.jpg',
    createdAt: '2024-01-08',
    isPopular: true
  },
  {
    id: 'automation-workflow',
    title: 'Business Process Automation',
    description: 'End-to-end workflow automation solutions using RPA, AI, and custom integrations to streamline business operations and reduce manual work.',
    category: 'Automation',
    subcategory: 'Workflow Automation',
    price: {
      min: 8000,
      max: 45000,
      currency: '$',
      pricingModel: 'project'
    },
    features: [
      'RPA Implementation',
      'Workflow Design',
      'API Integration',
      'Custom Automation Scripts',
      'Monitoring Dashboard',
      'Process Analytics'
    ],
    benefits: [
      'Reduce manual work by 70-90%',
      'Improve process accuracy',
      'Faster task completion',
      'Better resource allocation'
    ],
    useCases: [
      'Invoice Processing',
      'Customer Onboarding',
      'Data Entry Automation',
      'Report Generation'
    ],
    targetAudience: 'Manufacturing, Healthcare, Financial Services, Retail',
    averageMarketPrice: '$25,000 - $80,000',
    contactLink: 'mailto:kleber@ziontechgroup.com?subject=Business Process Automation Inquiry',
    rating: 4.6,
    reviewCount: 112,
    deliveryTime: '6-10 weeks',
    tags: ['Automation', 'RPA', 'Workflow', 'Process', 'Integration'],
    image: '/images/services/automation-workflow.jpg',
    createdAt: '2024-01-18',
    isNew: true
  },
  {
    id: 'api-integration-suite',
    title: 'Enterprise API Integration Suite',
    description: 'Comprehensive API integration platform connecting disparate systems, applications, and data sources with real-time synchronization.',
    category: 'Integration',
    subcategory: 'API Development',
    price: {
      min: 10000,
      max: 55000,
      currency: '$',
      pricingModel: 'project'
    },
    features: [
      'API Development',
      'Data Synchronization',
      'Real-time Integration',
      'Error Handling',
      'Monitoring & Logging',
      'Documentation'
    ],
    benefits: [
      'Connect all business systems',
      'Real-time data consistency',
      'Improved operational efficiency',
      'Better decision making'
    ],
    useCases: [
      'CRM Integration',
      'ERP System Connection',
      'Third-party Service Integration',
      'Data Warehouse Integration'
    ],
    targetAudience: 'Enterprises, SaaS Companies, E-commerce, Financial Services',
    averageMarketPrice: '$35,000 - $100,000',
    contactLink: 'mailto:kleber@ziontechgroup.com?subject=API Integration Suite Inquiry',
    rating: 4.8,
    reviewCount: 78,
    deliveryTime: '8-12 weeks',
    tags: ['Integration', 'API', 'Real-time', 'Synchronization', 'Enterprise'],
    image: '/images/services/api-integration.jpg',
    createdAt: '2024-01-22',
    isPremium: true
  },
  {
    id: 'web-development-enterprise',
    title: 'Enterprise Web Development',
    description: 'Scalable web applications and platforms built with modern technologies, focusing on performance, security, and user experience.',
    category: 'Development',
    subcategory: 'Web Development',
    price: {
      min: 20000,
      max: 120000,
      currency: '$',
      pricingModel: 'project'
    },
    features: [
      'Modern Tech Stack (React, Node.js, Python)',
      'Responsive Design',
      'Performance Optimization',
      'Security Implementation',
      'SEO Optimization',
      'Content Management System'
    ],
    benefits: [
      'Professional online presence',
      'Improved user engagement',
      'Better search engine rankings',
      'Scalable architecture'
    ],
    useCases: [
      'Corporate Websites',
      'E-commerce Platforms',
      'Web Applications',
      'Portals & Dashboards'
    ],
    targetAudience: 'Enterprises, SMEs, Startups, Agencies',
    averageMarketPrice: '$50,000 - $200,000',
    contactLink: 'mailto:kleber@ziontechgroup.com?subject=Enterprise Web Development Inquiry',
    rating: 4.7,
    reviewCount: 245,
    deliveryTime: '10-18 weeks',
    tags: ['Web Development', 'React', 'Node.js', 'Responsive', 'SEO', 'CMS'],
    image: '/images/services/web-development.jpg',
    createdAt: '2024-01-03',
    isPopular: true
  }
];

// Helper functions
export const getServicesByCategory = (category: string): EnhancedService[] => {
  if (category === 'all') return ENHANCED_SERVICES;
  return ENHANCED_SERVICES.filter(service => service.category === category);
};

export const getPopularServices = (): EnhancedService[] => {
  return ENHANCED_SERVICES.filter(service => service.isPopular).slice(0, 6);
};

export const getNewServices = (): EnhancedService[] => {
  return ENHANCED_SERVICES.filter(service => service.isNew).slice(0, 6);
};

export const getPremiumServices = (): EnhancedService[] => {
  return ENHANCED_SERVICES.filter(service => service.isPremium).slice(0, 6);
};

export const getServicesByPricingModel = (pricingModel: string): EnhancedService[] => {
  if (pricingModel === 'all') return ENHANCED_SERVICES;
  return ENHANCED_SERVICES.filter(service => service.price.pricingModel === pricingModel);
};

export const searchServices = (query: string): EnhancedService[] => {
  const searchTerm = query.toLowerCase();
  return ENHANCED_SERVICES.filter(service => 
    service.title.toLowerCase().includes(searchTerm) ||
    service.description.toLowerCase().includes(searchTerm) ||
    service.tags.some(tag => tag.toLowerCase().includes(searchTerm))
  );
};