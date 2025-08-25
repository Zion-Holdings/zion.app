export interface Service {
  id: string;
  name: string;
  category: string;
<<<<<<< HEAD
  features: string[];
  pricing: {
    type: 'one-time' | 'monthly' | 'hourly' | 'project-based';
    amount: number;
    currency: string;
    description: string;
  }[];
  benefits: string[];
  useCases: string[];
  targetAudience: string[];
  contactInfo: {
    email: string;
    phone: string;
    website?: string;
  };
  status: 'available' | 'coming-soon' | 'beta';
  tags: string[];
  supportLevel: 'basic' | 'premium' | 'enterprise';
  marketPrice: {
    min: number;
    max: number;
    average: number;
    currency: string;
  };
}

export const serviceCategories = [
  'AI & Machine Learning',
  'Cloud & Infrastructure',
  'Cybersecurity',
  'Data Analytics',
  'Digital Transformation',
  'E-commerce Solutions',
  'Mobile Development',
  'Web Development',
  'Business Process Automation',
  'IT Consulting'
];

export const COMPREHENSIVE_SERVICES: ComprehensiveService[] = [
  {
    id: 'ai-ml-platform',
    title: 'AI & Machine Learning Platform',
    description: 'Enterprise-grade AI and machine learning platform for predictive analytics, natural language processing, and computer vision applications.',
    category: 'AI & Machine Learning',
    features: [
      'Custom ML model development',
      'Data preprocessing & feature engineering',
      'Model training & optimization',
      'Real-time inference API',
      'Model monitoring & retraining',
      'AutoML capabilities',
      'Integration with existing systems',
      'Scalable cloud infrastructure'
    ],
    pricing: [
      {
        type: 'project-based',
        amount: 25000,
        currency: 'USD',
        description: 'Custom AI solution development'
      },
      {
        type: 'monthly',
        amount: 5000,
        currency: 'USD',
        description: 'Platform hosting & maintenance'
      },
      {
        type: 'hourly',
        amount: 150,
        currency: 'USD',
        description: 'Consulting & support'
      }
    ],
    benefits: [
      'Automate complex decision-making processes',
      'Improve prediction accuracy by 40%',
      'Reduce operational costs through automation',
      'Gain competitive advantage with AI insights',
      'Scale AI capabilities as business grows'
    ],
    useCases: [
      'Customer behavior prediction',
      'Fraud detection systems',
      'Supply chain optimization',
      'Quality control automation',
      'Predictive maintenance'
    ],
    targetAudience: ['Enterprises', 'Financial services', 'Healthcare', 'Manufacturing', 'Retail'],
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    status: 'available',
    tags: ['AI', 'Machine Learning', 'Predictive Analytics', 'Automation'],
    supportLevel: 'enterprise',
    marketPrice: {
      min: 15000,
      max: 100000,
      average: 50000,
      currency: 'USD'
    }
  },
  {
    id: 'cloud-infrastructure',
    title: 'Cloud Infrastructure Solutions',
    description: 'Comprehensive cloud infrastructure design, migration, and management services for optimal performance and cost efficiency.',
    category: 'Cloud & Infrastructure',
    features: [
      'Multi-cloud strategy & architecture',
      'Infrastructure as Code (IaC)',
      'Automated scaling & load balancing',
      'Disaster recovery planning',
      'Cost optimization & monitoring',
      'Security & compliance setup',
      'Performance optimization',
      '24/7 monitoring & support'
    ],
    pricing: [
      {
        type: 'project-based',
        amount: 15000,
        currency: 'USD',
        description: 'Initial setup & migration'
      },
      {
        type: 'monthly',
        amount: 3000,
        currency: 'USD',
        description: 'Ongoing management & support'
      },
      {
        type: 'hourly',
        amount: 120,
        currency: 'USD',
        description: 'Consulting & optimization'
      }
    ],
    benefits: [
      'Reduce infrastructure costs by 30-50%',
      'Improve system reliability & uptime',
      'Enable rapid scaling & deployment',
      'Enhance security & compliance',
      'Optimize performance & user experience'
    ],
    useCases: [
      'Legacy system migration',
      'High-traffic application hosting',
      'Data center consolidation',
      'Global application deployment',
      'Disaster recovery implementation'
    ],
    targetAudience: ['Medium businesses', 'Enterprises', 'Startups', 'E-commerce', 'SaaS companies'],
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    status: 'available',
    tags: ['Cloud Computing', 'Infrastructure', 'DevOps', 'Migration'],
    supportLevel: 'premium',
    marketPrice: {
      min: 10000,
      max: 75000,
      average: 35000,
      currency: 'USD'
    }
  },
  {
    id: 'cybersecurity-suite',
    title: 'Cybersecurity Suite',
    description: 'Comprehensive cybersecurity solutions including threat detection, vulnerability assessment, and incident response.',
    category: 'Cybersecurity',
    features: [
      'Threat detection & monitoring',
      'Vulnerability assessment',
      'Penetration testing',
      'Security awareness training',
      'Incident response planning',
      'Compliance management',
      'Security architecture review',
      '24/7 security operations'
    ],
    pricing: [
      {
        type: 'monthly',
        amount: 2500,
        currency: 'USD',
        description: 'Security monitoring & support'
      },
      {
        type: 'project-based',
        amount: 20000,
        currency: 'USD',
        description: 'Security assessment & implementation'
      },
      {
        type: 'hourly',
        amount: 200,
        currency: 'USD',
        description: 'Emergency response & consulting'
      }
    ],
    benefits: [
      'Protect against 99.9% of cyber threats',
      'Meet industry compliance requirements',
      'Reduce security incident response time',
      'Protect customer data & trust',
      'Minimize financial & reputational risk'
    ],
    useCases: [
      'Financial services security',
      'Healthcare data protection',
      'E-commerce security',
      'Government compliance',
      'Critical infrastructure protection'
    ],
    targetAudience: ['Financial services', 'Healthcare', 'E-commerce', 'Government', 'Enterprises'],
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    status: 'available',
    tags: ['Cybersecurity', 'Threat Detection', 'Compliance', 'Incident Response'],
    supportLevel: 'enterprise',
    marketPrice: {
      min: 15000,
      max: 100000,
      average: 45000,
      currency: 'USD'
    }
  }
];

export default COMPREHENSIVE_SERVICES;
=======
  description: string;
  features: string[];
  tags: string[];
  price: string;
  duration: string;
  icon: string;
}

export const COMPREHENSIVE_SERVICES: Service[] = [
  {
    id: "web-development",
    name: "Web Development",
    category: "Development",
    description: "Custom web applications built with modern technologies and best practices",
    features: [
      "Responsive design",
      "SEO optimization",
      "Performance optimization",
      "Security implementation"
    ],
    tags: ["React", "Node.js", "TypeScript", "Web"],
    price: "$5,000+",
    duration: "4-8 weeks",
    icon: "🌐"
  },
  {
    id: "mobile-development",
    name: "Mobile Development",
    category: "Development",
    description: "Native and cross-platform mobile applications for iOS and Android",
    features: [
      "Cross-platform development",
      "Native performance",
      "App store optimization",
      "Push notifications"
    ],
    tags: ["React Native", "Flutter", "iOS", "Android"],
    price: "$8,000+",
    duration: "6-12 weeks",
    icon: "📱"
  },
  {
    id: "cloud-infrastructure",
    name: "Cloud Infrastructure",
    category: "Infrastructure",
    description: "Scalable cloud solutions using AWS, Azure, and Google Cloud",
    features: [
      "Auto-scaling",
      "Load balancing",
      "Monitoring & alerting",
      "Disaster recovery"
    ],
    tags: ["AWS", "Azure", "GCP", "DevOps"],
    price: "$3,000+",
    duration: "2-4 weeks",
    icon: "☁️"
  },
  {
    id: "data-analytics",
    name: "Data Analytics",
    category: "Analytics",
    description: "Turn your data into actionable insights with advanced analytics",
    features: [
      "Data visualization",
      "Predictive analytics",
      "Real-time dashboards",
      "Custom reporting"
    ],
    tags: ["Python", "SQL", "Tableau", "ML"],
    price: "$6,000+",
    duration: "4-6 weeks",
    icon: "📊"
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity",
    category: "Security",
    description: "Comprehensive security solutions to protect your digital assets",
    features: [
      "Security audits",
      "Penetration testing",
      "Compliance consulting",
      "Incident response"
    ],
    tags: ["Security", "Compliance", "Audit", "Testing"],
    price: "$4,000+",
    duration: "2-6 weeks",
    icon: "🔒"
  },
  {
    id: "ai-ml",
    name: "AI & Machine Learning",
    category: "AI/ML",
    description: "Intelligent solutions that learn and adapt to your business needs",
    features: [
      "Custom AI models",
      "Natural language processing",
      "Computer vision",
      "Predictive modeling"
    ],
    tags: ["Python", "TensorFlow", "PyTorch", "AI"],
    price: "$10,000+",
    duration: "8-16 weeks",
    icon: "🤖"
  }
];
>>>>>>> e338169a4e366a68d7d32ebaabd769477f9baeac
