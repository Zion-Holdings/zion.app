export const SAMPLE_SERVICES = [
  // AI & Machine Learning Services
  { 
    id: 'ai-development-1', 
    title: 'AI Development & Integration', 
    category: 'ai-service', 
    image: 'https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?w=800&auto=format',
    description: 'Full-stack AI development services including custom ML models, API integration, and deployment',
    price: 5000,
    currency: '$',
    tags: ['AI', 'Machine Learning', 'API Integration']
  },
  { 
    id: 'ai-consulting-1', 
    title: 'AI Strategy Consulting', 
    category: 'ai-service', 
    image: 'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=800&auto=format',
    description: 'Strategic AI implementation planning, ROI analysis, and technology roadmap development',
    price: 3500,
    currency: '$',
    tags: ['AI Strategy', 'Consulting', 'ROI Analysis']
  },
  { 
    id: 'ml-training-1', 
    title: 'Custom ML Model Training', 
    category: 'ai-service', 
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format',
    description: 'Specialized machine learning model training for computer vision, NLP, and predictive analytics',
    price: 8000,
    currency: '$',
    tags: ['ML Training', 'Computer Vision', 'NLP']
  },
  
  // IT Infrastructure Services
  { 
    id: 'cloud-migration-1', 
    title: 'Cloud Migration & Support', 
    category: 'it-service', 
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format',
    description: 'End-to-end cloud migration services with 24/7 support and optimization',
    price: 3000,
    currency: '$',
    tags: ['Cloud Migration', 'AWS', 'Azure', 'DevOps']
  },
  { 
    id: 'it-consulting-1', 
    title: 'IT Infrastructure Consulting', 
    category: 'it-service', 
    image: 'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=800&auto=format',
    description: 'Comprehensive IT infrastructure assessment, planning, and modernization services',
    price: 4500,
    currency: '$',
    tags: ['Infrastructure', 'Digital Transformation', 'Consulting']
  },
  { 
    id: 'cybersecurity-1', 
    title: 'Cybersecurity Assessment', 
    category: 'it-service', 
    image: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=800&auto=format',
    description: 'Full security audit, penetration testing, and compliance framework implementation',
    price: 6000,
    currency: '$',
    tags: ['Cybersecurity', 'Penetration Testing', 'Compliance']
  },
  
  // Micro SAAS Solutions
  { 
    id: 'saas-automation-1', 
    title: 'Business Process Automation', 
    category: 'saas-service', 
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format',
    description: 'Custom workflow automation and business process optimization solutions',
    price: 2500,
    currency: '$',
    tags: ['Automation', 'Workflow', 'Process Optimization']
  },
  { 
    id: 'saas-analytics-1', 
    title: 'Business Intelligence Dashboard', 
    category: 'saas-service', 
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format',
    description: 'Custom BI dashboards with real-time analytics and KPI tracking',
    price: 4000,
    currency: '$',
    tags: ['BI', 'Analytics', 'Dashboard', 'KPI Tracking']
  },
  { 
    id: 'saas-crm-1', 
    title: 'Custom CRM Development', 
    category: 'saas-service', 
    image: 'https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?w=800&auto=format',
    description: 'Tailored customer relationship management system with advanced features',
    price: 7000,
    currency: '$',
    tags: ['CRM', 'Custom Development', 'Customer Management']
  },
  
  // Talent & Equipment
  { 
    id: 'talent-1', 
    title: 'AI Engineer', 
    category: 'talent', 
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&auto=format',
    description: 'Senior AI engineer with 5+ years experience in ML, deep learning, and production deployment',
    price: 120,
    currency: '$/hr',
    tags: ['AI Engineer', 'Machine Learning', 'Deep Learning']
  },
  { 
    id: 'talent-2', 
    title: 'Data Scientist', 
    category: 'talent', 
    image: 'https://images.unsplash.com/photo-1573497491765-dccce02b29df?w=800&auto=format',
    description: 'Expert data scientist specializing in big data analytics and predictive modeling',
    price: 95,
    currency: '$/hr',
    tags: ['Data Science', 'Big Data', 'Predictive Analytics']
  },
  { 
    id: 'equipment-1', 
    title: 'High-Performance Workstation', 
    category: 'equipment', 
    image: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?w=800&auto=format',
    description: 'GPU-accelerated workstation for AI/ML development and data processing',
    price: 3500,
    currency: '$',
    tags: ['Workstation', 'GPU', 'AI Development']
  },
  { 
    id: 'equipment-2', 
    title: 'Server Rack Infrastructure', 
    category: 'equipment', 
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format',
    description: 'Enterprise-grade server rack with networking equipment for scalable deployments',
    price: 8500,
    currency: '$',
    tags: ['Server Rack', 'Networking', 'Enterprise']
  },
];

// New comprehensive service categories
export const SERVICE_CATEGORIES = [
  {
    id: 'ai-services',
    name: 'AI & Machine Learning',
    description: 'Cutting-edge artificial intelligence and machine learning solutions',
    services: [
      'Custom AI Development',
      'ML Model Training',
      'AI Strategy Consulting',
      'Natural Language Processing',
      'Computer Vision Solutions',
      'Predictive Analytics',
      'AI Integration Services',
      'Model Deployment & MLOps'
    ],
    avgPrice: 6000,
    icon: '🤖'
  },
  {
    id: 'it-services',
    name: 'IT Infrastructure',
    description: 'Comprehensive IT infrastructure and digital transformation services',
    services: [
      'Cloud Migration',
      'DevOps Implementation',
      'Infrastructure Modernization',
      'Cybersecurity Services',
      'Network Architecture',
      'Data Center Design',
      'IT Strategy Consulting',
      '24/7 Support & Monitoring'
    ],
    avgPrice: 4500,
    icon: '🖥️'
  },
  {
    id: 'saas-solutions',
    name: 'Micro SAAS Solutions',
    description: 'Custom software-as-a-service applications for business automation',
    services: [
      'Business Process Automation',
      'Custom CRM Development',
      'BI Dashboard Creation',
      'Workflow Management',
      'Project Management Tools',
      'Inventory Management',
      'Customer Portal Development',
      'API Integration Services'
    ],
    avgPrice: 3500,
    icon: '☁️'
  },
  {
    id: 'data-services',
    name: 'Data & Analytics',
    description: 'Advanced data engineering, analytics, and business intelligence',
    services: [
      'Big Data Engineering',
      'Data Pipeline Development',
      'Business Intelligence',
      'Data Visualization',
      'ETL Process Design',
      'Data Quality Management',
      'Real-time Analytics',
      'Data Strategy Consulting'
    ],
    avgPrice: 5000,
    icon: '📊'
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    description: 'Comprehensive security solutions and compliance services',
    services: [
      'Security Audits',
      'Penetration Testing',
      'Compliance Framework',
      'Incident Response',
      'Security Training',
      'Vulnerability Assessment',
      'Security Architecture',
      'Threat Intelligence'
    ],
    avgPrice: 5500,
    icon: '🔒'
  },
  {
    id: 'digital-transformation',
    name: 'Digital Transformation',
    description: 'End-to-end digital transformation and innovation consulting',
    services: [
      'Digital Strategy',
      'Process Reengineering',
      'Technology Assessment',
      'Change Management',
      'Innovation Consulting',
      'Legacy System Modernization',
      'Digital Maturity Assessment',
      'Transformation Roadmap'
    ],
    avgPrice: 7000,
    icon: '🚀'
  }
];

// Service pricing tiers
export const SERVICE_PRICING_TIERS = [
  {
    name: 'Starter',
    price: 1500,
    currency: '$',
    description: 'Basic implementation and setup',
    features: [
      'Initial consultation',
      'Basic implementation',
      'Documentation',
      '30 days support'
    ]
  },
  {
    name: 'Professional',
    price: 4500,
    currency: '$',
    description: 'Full-service implementation with customization',
    features: [
      'Comprehensive consultation',
      'Custom development',
      'Testing & deployment',
      '90 days support',
      'Training & documentation'
    ]
  },
  {
    name: 'Enterprise',
    price: 12000,
    currency: '$',
    description: 'Enterprise-grade solution with ongoing support',
    features: [
      'Strategic planning',
      'Enterprise customization',
      'Full deployment',
      '1 year support',
      'Training & certification',
      'Performance optimization',
      'Scalability planning'
    ]
  }
];
