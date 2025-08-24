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
    id: 'ai-content-generation-suite',
    title: 'AI Content Generation Suite',
    description: 'Advanced AI-powered content creation platform for marketing, social media, blogs, and technical documentation with SEO optimization.',
    category: 'AI',
    subcategory: 'Content Generation',
    price: {
      min: 3000,
      max: 15000,
      currency: '$',
      pricingModel: 'subscription'
    },
    features: [
      'Multi-format Content Generation',
      'SEO Optimization',
      'Brand Voice Consistency',
      'Plagiarism Detection',
      'Content Analytics',
      'Multi-language Support'
    ],
    benefits: [
      'Increase content production by 10x',
      'Improve SEO rankings by 40%',
      'Maintain consistent brand voice',
      'Reduce content creation costs by 70%'
    ],
    useCases: [
      'Marketing Content Creation',
      'Social Media Management',
      'Blog Writing',
      'Technical Documentation'
    ],
    targetAudience: 'Marketing Agencies, Content Creators, Businesses',
    averageMarketPrice: '$5,000 - $25,000',
    contactLink: 'mailto:kleber@ziontechgroup.com?subject=AI Content Generation Suite Inquiry',
    rating: 4.9,
    reviewCount: 89,
    deliveryTime: '2-3 weeks',
    tags: ['AI', 'Content Generation', 'SEO', 'Marketing', 'Automation'],
    image: '/images/services/ai-content.jpg',
    createdAt: '2024-02-01',
    isNew: true,
    isPremium: true
  },
  {
    id: 'predictive-analytics-platform',
    title: 'Predictive Analytics Platform',
    description: 'Enterprise-grade predictive analytics solution using machine learning to forecast trends, customer behavior, and business outcomes.',
    category: 'AI',
    subcategory: 'Predictive Analytics',
    price: {
      min: 20000,
      max: 100000,
      currency: '$',
      pricingModel: 'project'
    },
    features: [
      'Advanced ML Algorithms',
      'Real-time Data Processing',
      'Custom Model Training',
      'Interactive Dashboards',
      'API Integration',
      'Automated Insights'
    ],
    benefits: [
      'Improve decision accuracy by 85%',
      'Reduce operational costs by 30%',
      'Identify new business opportunities',
      'Optimize resource allocation'
    ],
    useCases: [
      'Sales Forecasting',
      'Customer Churn Prediction',
      'Inventory Optimization',
      'Risk Assessment'
    ],
    targetAudience: 'Enterprises, Financial Services, Retail',
    averageMarketPrice: '$50,000 - $200,000',
    contactLink: 'mailto:kleber@ziontechgroup.com?subject=Predictive Analytics Platform Inquiry',
    rating: 4.7,
    reviewCount: 156,
    deliveryTime: '8-12 weeks',
    tags: ['AI', 'Predictive Analytics', 'Machine Learning', 'Business Intelligence'],
    image: '/images/services/predictive-analytics.jpg',
    createdAt: '2024-01-20',
    isPopular: true
  },
  {
    id: 'cybersecurity-threat-detection',
    title: 'AI-Powered Cybersecurity Threat Detection',
    description: 'Next-generation cybersecurity platform using artificial intelligence to detect, prevent, and respond to cyber threats in real-time.',
    category: 'Security',
    subcategory: 'Threat Detection',
    price: {
      min: 15000,
      max: 80000,
      currency: '$',
      pricingModel: 'subscription'
    },
    features: [
      'Real-time Threat Detection',
      'Behavioral Analysis',
      'Automated Response',
      'Threat Intelligence',
      'Compliance Reporting',
      '24/7 Monitoring'
    ],
    benefits: [
      'Detect threats 90% faster than traditional methods',
      'Reduce false positives by 75%',
      'Automated incident response',
      'Compliance with industry standards'
    ],
    useCases: [
      'Enterprise Security',
      'Financial Institutions',
      'Healthcare Organizations',
      'Government Agencies'
    ],
    targetAudience: 'Enterprises, Financial Services, Healthcare',
    averageMarketPrice: '$30,000 - $100,000',
    contactLink: 'mailto:kleber@ziontechgroup.com?subject=Cybersecurity Threat Detection Inquiry',
    rating: 4.8,
    reviewCount: 203,
    deliveryTime: '6-8 weeks',
    tags: ['Security', 'AI', 'Cybersecurity', 'Threat Detection', 'Compliance'],
    image: '/images/services/cybersecurity.jpg',
    createdAt: '2024-01-10',
    isPopular: true,
    isPremium: true
  },
  {
    id: 'blockchain-supply-chain',
    title: 'Blockchain Supply Chain Management',
    description: 'Transparent and secure supply chain management solution using blockchain technology for traceability, compliance, and efficiency.',
    category: 'Integration',
    subcategory: 'Blockchain Solutions',
    price: {
      min: 25000,
      max: 120000,
      currency: '$',
      pricingModel: 'project'
    },
    features: [
      'End-to-end Traceability',
      'Smart Contracts',
      'Real-time Tracking',
      'Compliance Management',
      'Supplier Verification',
      'Analytics Dashboard'
    ],
    benefits: [
      'Improve supply chain transparency by 100%',
      'Reduce fraud and counterfeiting',
      'Streamline compliance processes',
      'Enhance supplier relationships'
    ],
    useCases: [
      'Food Safety Tracking',
      'Pharmaceutical Supply Chain',
      'Luxury Goods Authentication',
      'Manufacturing Supply Chain'
    ],
    targetAudience: 'Manufacturing, Food & Beverage, Pharmaceuticals',
    averageMarketPrice: '$75,000 - $300,000',
    contactLink: 'mailto:kleber@ziontechgroup.com?subject=Blockchain Supply Chain Inquiry',
    rating: 4.6,
    reviewCount: 78,
    deliveryTime: '12-16 weeks',
    tags: ['Blockchain', 'Supply Chain', 'Traceability', 'Compliance', 'IoT'],
    image: '/images/services/blockchain.jpg',
    createdAt: '2024-01-28',
    isNew: true
  },
  {
    id: 'iot-platform-enterprise',
    title: 'Enterprise IoT Management Platform',
    description: 'Comprehensive IoT platform for managing connected devices, collecting data, and enabling smart business operations.',
    category: 'Automation',
    subcategory: 'IoT Solutions',
    price: {
      min: 30000,
      max: 150000,
      currency: '$',
      pricingModel: 'project'
    },
    features: [
      'Device Management',
      'Data Collection & Analytics',
      'Real-time Monitoring',
      'Automated Alerts',
      'Integration APIs',
      'Scalable Architecture'
    ],
    benefits: [
      'Monitor thousands of devices in real-time',
      'Reduce operational costs by 25%',
      'Improve asset utilization',
      'Enable predictive maintenance'
    ],
    useCases: [
      'Smart Manufacturing',
      'Building Management',
      'Asset Tracking',
      'Environmental Monitoring'
    ],
    targetAudience: 'Manufacturing, Real Estate, Utilities',
    averageMarketPrice: '$100,000 - $500,000',
    contactLink: 'mailto:kleber@ziontechgroup.com?subject=IoT Platform Inquiry',
    rating: 4.7,
    reviewCount: 134,
    deliveryTime: '10-14 weeks',
    tags: ['IoT', 'Automation', 'Real-time Monitoring', 'Predictive Maintenance'],
    image: '/images/services/iot-platform.jpg',
    createdAt: '2024-01-18',
    isPremium: true
  },
  {
    id: 'data-warehouse-enterprise',
    title: 'Enterprise Data Warehouse Solution',
    description: 'Scalable data warehouse solution for storing, processing, and analyzing large volumes of structured and unstructured data.',
    category: 'Analytics',
    subcategory: 'Data Management',
    price: {
      min: 50000,
      max: 250000,
      currency: '$',
      pricingModel: 'project'
    },
    features: [
      'Multi-source Data Integration',
      'Real-time Processing',
      'Advanced Analytics',
      'Data Governance',
      'Scalable Architecture',
      'Security & Compliance'
    ],
    benefits: [
      'Process data 100x faster than traditional systems',
      'Reduce storage costs by 40%',
      'Enable real-time business intelligence',
      'Ensure data quality and compliance'
    ],
    useCases: [
      'Business Intelligence',
      'Customer Analytics',
      'Operational Reporting',
      'Regulatory Compliance'
    ],
    targetAudience: 'Enterprises, Financial Services, Healthcare',
    averageMarketPrice: '$150,000 - $1,000,000',
    contactLink: 'mailto:kleber@ziontechgroup.com?subject=Data Warehouse Solution Inquiry',
    rating: 4.8,
    reviewCount: 189,
    deliveryTime: '16-24 weeks',
    tags: ['Data Warehouse', 'Big Data', 'Analytics', 'Business Intelligence'],
    image: '/images/services/data-warehouse.jpg',
    createdAt: '2024-01-05',
    isPopular: true
  },
  {
    id: 'microservices-architecture',
    title: 'Microservices Architecture Development',
    description: 'Modern microservices architecture design and implementation for scalable, maintainable, and resilient applications.',
    category: 'Development',
    subcategory: 'Architecture',
    price: {
      min: 40000,
      max: 200000,
      currency: '$',
      pricingModel: 'project'
    },
    features: [
      'Service Design & Architecture',
      'API Gateway Implementation',
      'Service Discovery',
      'Load Balancing',
      'Monitoring & Logging',
      'Container Orchestration'
    ],
    benefits: [
      'Improve application scalability by 10x',
      'Reduce deployment time by 80%',
      'Enable independent service updates',
      'Better fault isolation and resilience'
    ],
    useCases: [
      'E-commerce Platforms',
      'Financial Applications',
      'Healthcare Systems',
      'Enterprise Applications'
    ],
    targetAudience: 'Enterprises, Startups, Digital Agencies',
    averageMarketPrice: '$100,000 - $500,000',
    contactLink: 'mailto:kleber@ziontechgroup.com?subject=Microservices Architecture Inquiry',
    rating: 4.9,
    reviewCount: 167,
    deliveryTime: '14-20 weeks',
    tags: ['Microservices', 'Architecture', 'Scalability', 'API Design', 'DevOps'],
    image: '/images/services/microservices.jpg',
    createdAt: '2024-01-22',
    isPremium: true
  },
  {
    id: 'saas-billing-platform',
    title: 'Enterprise SaaS Billing Platform',
    description: 'Comprehensive billing and subscription management platform for SaaS businesses with advanced pricing models and analytics.',
    category: 'SAAS',
    subcategory: 'Billing & Subscriptions',
    price: {
      min: 20000,
      max: 100000,
      currency: '$',
      pricingModel: 'project'
    },
    features: [
      'Flexible Pricing Models',
      'Subscription Management',
      'Payment Processing',
      'Revenue Analytics',
      'Tax Management',
      'Multi-currency Support'
    ],
    benefits: [
      'Increase revenue by 25% through better pricing',
      'Reduce billing errors by 90%',
      'Automate subscription management',
      'Improve customer retention'
    ],
    useCases: [
      'SaaS Applications',
      'Subscription Services',
      'Digital Products',
      'Membership Platforms'
    ],
    targetAudience: 'SaaS Companies, Digital Businesses, Startups',
    averageMarketPrice: '$50,000 - $200,000',
    contactLink: 'mailto:kleber@ziontechgroup.com?subject=SaaS Billing Platform Inquiry',
    rating: 4.7,
    reviewCount: 145,
    deliveryTime: '8-12 weeks',
    tags: ['SaaS', 'Billing', 'Subscriptions', 'Revenue Management'],
    image: '/images/services/saas-billing.jpg',
    createdAt: '2024-01-30',
    isNew: true
  },
  {
    id: 'ai-video-analytics',
    title: 'AI Video Analytics Platform',
    description: 'Advanced video analytics platform using computer vision and AI to extract insights from video content for security and business intelligence.',
    category: 'AI',
    subcategory: 'Computer Vision',
    price: {
      min: 25000,
      max: 120000,
      currency: '$',
      pricingModel: 'project'
    },
    features: [
      'Real-time Video Processing',
      'Object Detection & Tracking',
      'Behavioral Analysis',
      'Facial Recognition',
      'Custom AI Models',
      'Cloud & Edge Deployment'
    ],
    benefits: [
      'Automate video monitoring 24/7',
      'Reduce security incidents by 60%',
      'Extract business insights from video',
      'Improve operational efficiency'
    ],
    useCases: [
      'Security Surveillance',
      'Retail Analytics',
      'Traffic Management',
      'Quality Control'
    ],
    targetAudience: 'Security Companies, Retail, Transportation',
    averageMarketPrice: '$75,000 - $300,000',
    contactLink: 'mailto:kleber@ziontechgroup.com?subject=AI Video Analytics Inquiry',
    rating: 4.8,
    reviewCount: 98,
    deliveryTime: '10-14 weeks',
    tags: ['AI', 'Computer Vision', 'Video Analytics', 'Security', 'Automation'],
    image: '/images/services/video-analytics.jpg',
    createdAt: '2024-02-05',
    isNew: true,
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
  },
  {
    id: 'ai-powered-crm',
    title: 'AI-Powered CRM Platform',
    description: 'Intelligent customer relationship management system with AI-driven insights, predictive analytics, and automated workflows.',
    category: 'SAAS',
    subcategory: 'Customer Management',
    price: {
      min: 15000,
      max: 80000,
      currency: '$',
      pricingModel: 'subscription'
    },
    features: [
      'AI Lead Scoring',
      'Predictive Analytics',
      'Automated Workflows',
      'Customer Segmentation',
      'Sales Forecasting',
      'Integration APIs'
    ],
    benefits: [
      'Increase sales conversion by 35%',
      'Reduce manual data entry by 80%',
      'Improve customer retention',
      'Better sales forecasting accuracy'
    ],
    useCases: [
      'Sales Management',
      'Customer Support',
      'Marketing Automation',
      'Lead Generation'
    ],
    targetAudience: 'Sales Teams, Marketing Agencies, Businesses',
    averageMarketPrice: '$25,000 - $100,000',
    contactLink: 'mailto:kleber@ziontechgroup.com?subject=AI-Powered CRM Inquiry',
    rating: 4.8,
    reviewCount: 178,
    deliveryTime: '6-10 weeks',
    tags: ['AI', 'CRM', 'Sales Automation', 'Customer Management'],
    image: '/images/services/ai-crm.jpg',
    createdAt: '2024-02-10',
    isNew: true,
    isPremium: true
  },
  {
    id: 'quantum-computing-simulation',
    title: 'Quantum Computing Simulation Platform',
    description: 'Advanced quantum computing simulation platform for research, optimization problems, and algorithm development.',
    category: 'AI',
    subcategory: 'Quantum Computing',
    price: {
      min: 50000,
      max: 300000,
      currency: '$',
      pricingModel: 'project'
    },
    features: [
      'Quantum Circuit Simulator',
      'Algorithm Development Tools',
      'Optimization Solvers',
      'Research Collaboration',
      'Performance Analytics',
      'Cloud Integration'
    ],
    benefits: [
      'Solve complex optimization problems',
      'Accelerate research and development',
      'Enable quantum algorithm testing',
      'Reduce computational costs'
    ],
    useCases: [
      'Research Institutions',
      'Financial Modeling',
      'Drug Discovery',
      'Logistics Optimization'
    ],
    targetAudience: 'Research Institutions, Financial Services, Pharmaceutical',
    averageMarketPrice: '$200,000 - $1,000,000',
    contactLink: 'mailto:kleber@ziontechgroup.com?subject=Quantum Computing Simulation Inquiry',
    rating: 4.9,
    reviewCount: 45,
    deliveryTime: '20-30 weeks',
    tags: ['Quantum Computing', 'AI', 'Research', 'Optimization', 'Simulation'],
    image: '/images/services/quantum-computing.jpg',
    createdAt: '2024-02-15',
    isNew: true,
    isPremium: true
  },
  {
    id: 'edge-computing-platform',
    title: 'Edge Computing Platform',
    description: 'Distributed edge computing platform for processing data closer to the source, reducing latency and improving performance.',
    category: 'Cloud',
    subcategory: 'Edge Computing',
    price: {
      min: 30000,
      max: 150000,
      currency: '$',
      pricingModel: 'project'
    },
    features: [
      'Distributed Processing',
      'Low Latency Operations',
      'Edge Device Management',
      'Data Synchronization',
      'Security & Encryption',
      'Scalable Architecture'
    ],
    benefits: [
      'Reduce latency by 90%',
      'Lower bandwidth costs',
      'Improve real-time processing',
      'Enhanced data privacy'
    ],
    useCases: [
      'IoT Applications',
      'Real-time Analytics',
      'Autonomous Vehicles',
      'Smart Cities'
    ],
    targetAudience: 'IoT Companies, Automotive, Smart City Projects',
    averageMarketPrice: '$100,000 - $500,000',
    contactLink: 'mailto:kleber@ziontechgroup.com?subject=Edge Computing Platform Inquiry',
    rating: 4.7,
    reviewCount: 89,
    deliveryTime: '12-18 weeks',
    tags: ['Edge Computing', 'IoT', 'Real-time', 'Distributed Systems'],
    image: '/images/services/edge-computing.jpg',
    createdAt: '2024-01-25',
    isPremium: true
  },
  {
    id: 'digital-twin-platform',
    title: 'Digital Twin Platform',
    description: 'Comprehensive digital twin solution for creating virtual replicas of physical assets, processes, and systems.',
    category: 'Automation',
    subcategory: 'Digital Twins',
    price: {
      min: 40000,
      max: 200000,
      currency: '$',
      pricingModel: 'project'
    },
    features: [
      '3D Modeling & Visualization',
      'Real-time Data Integration',
      'Predictive Maintenance',
      'Simulation Engine',
      'Analytics Dashboard',
      'IoT Integration'
    ],
    benefits: [
      'Improve operational efficiency by 30%',
      'Reduce maintenance costs by 40%',
      'Enable predictive maintenance',
      'Better decision making'
    ],
    useCases: [
      'Manufacturing',
      'Building Management',
      'Infrastructure Monitoring',
      'Product Development'
    ],
    targetAudience: 'Manufacturing, Real Estate, Infrastructure',
    averageMarketPrice: '$150,000 - $800,000',
    contactLink: 'mailto:kleber@ziontechgroup.com?subject=Digital Twin Platform Inquiry',
    rating: 4.8,
    reviewCount: 67,
    deliveryTime: '16-24 weeks',
    tags: ['Digital Twin', 'IoT', '3D Modeling', 'Predictive Maintenance'],
    image: '/images/services/digital-twin.jpg',
    createdAt: '2024-01-30',
    isNew: true
  },
  {
    id: 'ai-ethics-compliance',
    title: 'AI Ethics & Compliance Platform',
    description: 'Comprehensive platform for ensuring AI systems meet ethical standards, regulatory requirements, and industry best practices.',
    category: 'AI',
    subcategory: 'Ethics & Compliance',
    price: {
      min: 25000,
      max: 120000,
      currency: '$',
      pricingModel: 'subscription'
    },
    features: [
      'Bias Detection & Mitigation',
      'Explainable AI',
      'Compliance Monitoring',
      'Audit Trails',
      'Risk Assessment',
      'Regulatory Reporting'
    ],
    benefits: [
      'Ensure AI fairness and transparency',
      'Meet regulatory requirements',
      'Reduce legal and reputational risks',
      'Build trust with stakeholders'
    ],
    useCases: [
      'Financial Services',
      'Healthcare AI',
      'Government Systems',
      'Enterprise AI'
    ],
    targetAudience: 'Financial Services, Healthcare, Government, Enterprises',
    averageMarketPrice: '$75,000 - $300,000',
    contactLink: 'mailto:kleber@ziontechgroup.com?subject=AI Ethics & Compliance Inquiry',
    rating: 4.9,
    reviewCount: 123,
    deliveryTime: '8-12 weeks',
    tags: ['AI Ethics', 'Compliance', 'Bias Detection', 'Explainable AI'],
    image: '/images/services/ai-ethics.jpg',
    createdAt: '2024-02-20',
    isNew: true,
    isPremium: true
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