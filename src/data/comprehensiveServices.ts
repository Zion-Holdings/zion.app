export interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  count?: number;
}

export interface MicroService {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  price: number;
  currency: string;
  pricingModel: 'one-time' | 'monthly' | 'hourly' | 'project-based';
  features: string[];
  benefits: string[];
  marketPrice: string;
  deliveryTime: string;
  tags: string[];
  author: {
    name: string;
    id: string;
    avatarUrl?: string;
    verified: boolean;
  };
  images: string[];
  rating: number;
  reviewCount: number;
  aiScore: number;
  featured: boolean;
  popular: boolean;
  contactInfo: {
    email: string;
    phone: string;
    website: string;
  };
  // Backward compatibility properties
  support?: string;
  technologies?: string[];
  priceType?: string;
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'ai-services',
    name: 'AI & Machine Learning',
    description: 'Cutting-edge AI solutions and machine learning services',
    icon: '🤖',
    color: 'from-purple-500 to-indigo-600',
    count: 0
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    description: 'Comprehensive security solutions and protection services',
    icon: '🔒',
    color: 'from-red-500 to-pink-600',
    count: 0
  },
  {
    id: 'cloud-services',
    name: 'Cloud & DevOps',
    description: 'Cloud infrastructure, migration, and DevOps automation',
    icon: '☁️',
    color: 'from-blue-500 to-cyan-600',
    count: 0
  },
  {
    id: 'data-analytics',
    name: 'Data & Analytics',
    description: 'Data engineering, analytics, and business intelligence',
    icon: '📊',
    color: 'from-green-500 to-emerald-600',
    count: 0
  },
  {
    id: 'web-development',
    name: 'Web & Mobile Development',
    description: 'Full-stack development and mobile app solutions',
    icon: '💻',
    color: 'from-orange-500 to-yellow-600',
    count: 0
  },
  {
    id: 'it-consulting',
    name: 'IT Consulting',
    description: 'Strategic IT consulting and digital transformation',
    icon: '🎯',
    color: 'from-teal-500 to-blue-600',
    count: 0
  },
  {
    id: 'blockchain',
    name: 'Blockchain & Web3',
    description: 'Blockchain development and Web3 solutions',
    icon: '⛓️',
    color: 'from-indigo-500 to-purple-600',
    count: 0
  },
  {
    id: 'automation',
    name: 'Process Automation',
    description: 'Business process automation and RPA solutions',
    icon: '⚡',
    color: 'from-yellow-500 to-orange-600',
    count: 0
  },
  {
    id: 'iot-edge',
    name: 'IoT & Edge Computing',
    description: 'Internet of Things and edge computing solutions',
    icon: '🌐',
    color: 'from-emerald-500 to-teal-600',
    count: 0
  },
  {
    id: 'quantum-computing',
    name: 'Quantum Computing',
    description: 'Quantum algorithms and computing solutions',
    icon: '⚛️',
    color: 'from-violet-500 to-purple-600',
    count: 0
  },
  {
    id: 'augmented-reality',
    name: 'AR/VR & Metaverse',
    description: 'Augmented reality, virtual reality, and metaverse solutions',
    icon: '🥽',
    color: 'from-pink-500 to-rose-600',
    count: 0
  },
  {
    id: 'green-tech',
    name: 'Green Technology',
    description: 'Sustainable and environmentally friendly tech solutions',
    icon: '🌱',
    color: 'from-green-400 to-emerald-500',
    count: 0
  },
  {
    id: 'blockchain-services',
    name: 'Blockchain & Web3',
    description: 'Blockchain, smart contracts, DeFi, and Web3 solutions',
    icon: '⛓️',
    color: 'from-indigo-500 to-purple-600',
    count: 0
  },
  {
    id: 'data-services',
    name: 'Data & Analytics',
    description: 'Advanced data analytics, BI, and insights platforms',
    icon: '📊',
    color: 'from-blue-500 to-cyan-600',
    count: 0
  },
  {
    id: 'space-tech',
    name: 'Space Technology',
    description: 'Advanced space and satellite technology solutions',
    icon: '🚀',
    color: 'from-indigo-500 to-purple-600',
    count: 0
  },
  {
    id: 'biotech-ai',
    name: 'Biotech AI',
    description: 'AI-powered biotechnology and pharmaceutical solutions',
    icon: '🧬',
    color: 'from-pink-500 to-rose-600',
    count: 0
  },
  {
    id: 'autonomous-tech',
    name: 'Autonomous Technology',
    description: 'Self-driving vehicles and autonomous systems',
    icon: '🚗',
    color: 'from-blue-500 to-cyan-600',
    count: 0
  }
];

export const MICRO_SERVICES: MicroService[] = [
  // AI & Machine Learning Services
  {
    id: 'ai-chatbot-development',
    title: 'AI Chatbot Development & Integration',
    description: 'Custom AI-powered chatbots for customer service, sales, and support with natural language processing capabilities.',
    category: 'ai-services',
    subcategory: 'Chatbots',
    price: 2500,
    currency: 'USD',
    pricingModel: 'project-based',
    features: [
      'Custom chatbot design and development',
      'Natural language processing integration',
      'Multi-platform deployment (web, mobile, social)',
      'Analytics and performance tracking',
      '24/7 customer support integration',
      'Custom training on your business data'
    ],
    benefits: [
      'Reduce customer service costs by 30-50%',
      'Improve response time from hours to seconds',
      'Handle multiple customer inquiries simultaneously',
      'Scalable solution that grows with your business',
      '24/7 availability without additional staff costs'
    ],
    marketPrice: '$2,000 - $8,000',
    deliveryTime: '2-4 weeks',
    tags: ['AI Chatbot', 'NLP', 'Customer Service', 'Automation', 'Integration'],
    author: {
      name: 'Zion AI Solutions',
      id: 'zion-ai-solutions',
      verified: true
    },
    images: ['https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format'],
    rating: 4.9,
    reviewCount: 156,
    aiScore: 95,
    featured: true,
    popular: true,
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'ai-content-generation',
    title: 'AI Content Generation & Marketing',
    description: 'AI-powered content creation for blogs, social media, marketing materials, and product descriptions.',
    category: 'ai-services',
    subcategory: 'Content Creation',
    price: 1500,
    currency: 'USD',
    pricingModel: 'monthly',
    features: [
      'AI-powered blog post generation',
      'Social media content creation',
      'Product description optimization',
      'SEO-optimized content',
      'Brand voice consistency',
      'Content calendar management'
    ],
    benefits: [
      'Generate 10x more content in less time',
      'Improve SEO rankings with optimized content',
      'Maintain consistent brand voice across all channels',
      'Reduce content creation costs by 60%',
      'Scale content marketing efforts efficiently'
    ],
    marketPrice: '$1,200 - $3,000/month',
    deliveryTime: '1-2 weeks setup',
    tags: ['Content Creation', 'AI Writing', 'Marketing', 'SEO', 'Social Media'],
    author: {
      name: 'Zion Content AI',
      id: 'zion-content-ai',
      verified: true
    },
    images: ['https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&auto=format'],
    rating: 4.8,
    reviewCount: 89,
    aiScore: 92,
    featured: true,
    popular: false,
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'ai-data-analysis',
    title: 'AI-Powered Data Analysis & Insights',
    description: 'Advanced data analytics using machine learning to uncover hidden patterns and provide actionable business insights.',
    category: 'ai-services',
    subcategory: 'Data Analytics',
    price: 3500,
    currency: 'USD',
    pricingModel: 'project-based',
    features: [
      'Predictive analytics modeling',
      'Customer behavior analysis',
      'Sales forecasting and trend analysis',
      'Custom dashboard creation',
      'Real-time data monitoring',
      'Automated reporting systems'
    ],
    benefits: [
      'Make data-driven decisions with confidence',
      'Identify new business opportunities',
      'Optimize operations and reduce costs',
      'Improve customer retention rates',
      'Stay ahead of market trends'
    ],
    marketPrice: '$3,000 - $10,000',
    deliveryTime: '3-5 weeks',
    tags: ['Data Analytics', 'Machine Learning', 'Business Intelligence', 'Predictive Analytics', 'Reporting'],
    author: {
      name: 'Zion Data Intelligence',
      id: 'zion-data-intelligence',
      verified: true
    },
    images: ['https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format'],
    rating: 4.9,
    reviewCount: 203,
    aiScore: 96,
    featured: true,
    popular: true,
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      website: 'https://ziontechgroup.com'
    }
  },

  // Cybersecurity Services
  {
    id: 'cyber-security-audit',
    title: 'Comprehensive Cybersecurity Audit & Assessment',
    description: 'Full security assessment including penetration testing, vulnerability scanning, and compliance review.',
    category: 'cybersecurity',
    subcategory: 'Security Audit',
    price: 4500,
    currency: 'USD',
    pricingModel: 'project-based',
    features: [
      'Penetration testing (external & internal)',
      'Vulnerability assessment',
      'Security policy review',
      'Compliance audit (SOC2, ISO27001, GDPR)',
      'Security awareness training',
      'Detailed remediation roadmap'
    ],
    benefits: [
      'Identify and fix security vulnerabilities',
      'Meet compliance requirements',
      'Protect customer data and trust',
      'Reduce risk of data breaches',
      'Improve security posture'
    ],
    marketPrice: '$4,000 - $15,000',
    deliveryTime: '2-3 weeks',
    tags: ['Cybersecurity', 'Penetration Testing', 'Compliance', 'Security Audit', 'Vulnerability Assessment'],
    author: {
      name: 'Zion Cyber Security',
      id: 'zion-cyber-security',
      verified: true
    },
    images: ['https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=800&auto=format'],
    rating: 4.9,
    reviewCount: 178,
    aiScore: 94,
    featured: true,
    popular: true,
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'incident-response',
    title: '24/7 Incident Response & Threat Hunting',
    description: 'Round-the-clock security monitoring, threat detection, and incident response services.',
    category: 'cybersecurity',
    subcategory: 'Incident Response',
    price: 2500,
    currency: 'USD',
    pricingModel: 'monthly',
    features: [
      '24/7 security monitoring',
      'Real-time threat detection',
      'Incident response team',
      'Forensic analysis',
      'Threat intelligence feeds',
      'Monthly security reports'
    ],
    benefits: [
      'Immediate response to security incidents',
      'Reduce downtime and data loss',
      'Professional incident handling',
      'Compliance with security regulations',
      'Peace of mind with 24/7 protection'
    ],
    marketPrice: '$2,000 - $8,000/month',
    deliveryTime: 'Immediate activation',
    tags: ['Incident Response', 'Threat Hunting', 'Security Monitoring', '24/7 Support', 'Forensics'],
    author: {
      name: 'Zion Security Operations',
      id: 'zion-security-ops',
      verified: true
    },
    images: ['https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format'],
    rating: 4.8,
    reviewCount: 134,
    aiScore: 91,
    featured: false,
    popular: true,
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      website: 'https://ziontechgroup.com'
    }
  },

  // Cloud & DevOps Services
  {
    id: 'cloud-migration',
    title: 'Cloud Migration & Infrastructure Setup',
    description: 'Complete cloud migration services including AWS, Azure, and Google Cloud with optimization and cost management.',
    category: 'cloud-services',
    subcategory: 'Cloud Migration',
    price: 8000,
    currency: 'USD',
    pricingModel: 'project-based',
    features: [
      'Multi-cloud strategy planning',
      'Application migration and testing',
      'Data migration and backup',
      'Performance optimization',
      'Cost optimization and monitoring',
      'Security and compliance setup'
    ],
    benefits: [
      'Reduce infrastructure costs by 30-50%',
      'Improve scalability and performance',
      'Enhanced disaster recovery',
      'Access to latest cloud technologies',
      'Professional migration expertise'
    ],
    marketPrice: '$5,000 - $25,000',
    deliveryTime: '4-8 weeks',
    tags: ['Cloud Migration', 'AWS', 'Azure', 'Google Cloud', 'Infrastructure', 'DevOps'],
    author: {
      name: 'Zion Cloud Solutions',
      id: 'zion-cloud-solutions',
      verified: true
    },
    images: ['https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format'],
    rating: 4.9,
    reviewCount: 267,
    aiScore: 93,
    featured: true,
    popular: true,
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'devops-automation',
    title: 'DevOps Automation & CI/CD Pipeline',
    description: 'Complete DevOps automation including CI/CD pipelines, infrastructure as code, and monitoring setup.',
    category: 'cloud-services',
    subcategory: 'DevOps',
    price: 4000,
    currency: 'USD',
    pricingModel: 'project-based',
    features: [
      'CI/CD pipeline setup (Jenkins, GitLab, GitHub Actions)',
      'Infrastructure as Code (Terraform, CloudFormation)',
      'Container orchestration (Kubernetes, Docker)',
      'Monitoring and alerting setup',
      'Automated testing integration',
      'Deployment automation'
    ],
    benefits: [
      'Reduce deployment time from days to minutes',
      'Improve code quality and reliability',
      'Automate repetitive tasks',
      'Faster time to market',
      'Better collaboration between teams'
    ],
    marketPrice: '$3,500 - $12,000',
    deliveryTime: '3-4 weeks',
    tags: ['DevOps', 'CI/CD', 'Automation', 'Kubernetes', 'Terraform', 'Monitoring'],
    author: {
      name: 'Zion DevOps Team',
      id: 'zion-devops-team',
      verified: true
    },
    images: ['https://images.unsplash.com/photo-1593642532973-d31b6557fa68?w=800&auto=format'],
    rating: 4.8,
    reviewCount: 156,
    aiScore: 89,
    featured: false,
    popular: true,
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      website: 'https://ziontechgroup.com'
    }
  },

  // Data & Analytics Services
  {
    id: 'data-warehouse',
    title: 'Data Warehouse Design & Implementation',
    description: 'Enterprise data warehouse solutions with ETL processes, data modeling, and business intelligence integration.',
    category: 'data-analytics',
    subcategory: 'Data Engineering',
    price: 12000,
    currency: 'USD',
    pricingModel: 'project-based',
    features: [
      'Data warehouse architecture design',
      'ETL pipeline development',
      'Data modeling and schema design',
      'Business intelligence integration',
      'Data quality and governance',
      'Performance optimization'
    ],
    benefits: [
      'Centralized data management',
      'Improved data quality and consistency',
      'Faster reporting and analytics',
      'Better business decision making',
      'Scalable data infrastructure'
    ],
    marketPrice: '$10,000 - $50,000',
    deliveryTime: '6-10 weeks',
    tags: ['Data Warehouse', 'ETL', 'Data Modeling', 'Business Intelligence', 'Data Engineering'],
    author: {
      name: 'Zion Data Engineering',
      id: 'zion-data-engineering',
      verified: true
    },
    images: ['https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format'],
    rating: 4.9,
    reviewCount: 89,
    aiScore: 95,
    featured: true,
    popular: false,
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'business-intelligence',
    title: 'Business Intelligence Dashboard Development',
    description: 'Custom BI dashboards and reporting solutions using Power BI, Tableau, or custom web applications.',
    category: 'data-analytics',
    subcategory: 'Business Intelligence',
    price: 3500,
    currency: 'USD',
    pricingModel: 'project-based',
    features: [
      'Custom dashboard design',
      'Data visualization and charts',
      'Interactive reports and filters',
      'Real-time data integration',
      'Mobile-responsive design',
      'User access management'
    ],
    benefits: [
      'Real-time business insights',
      'Improved decision making',
      'Better data visibility',
      'Reduced reporting time',
      'Enhanced user experience'
    ],
    marketPrice: '$3,000 - $15,000',
    deliveryTime: '3-4 weeks',
    tags: ['Business Intelligence', 'Dashboards', 'Data Visualization', 'Reporting', 'Analytics'],
    author: {
      name: 'Zion BI Solutions',
      id: 'zion-bi-solutions',
      verified: true
    },
    images: ['https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format'],
    rating: 4.7,
    reviewCount: 112,
    aiScore: 88,
    featured: false,
    popular: true,
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      website: 'https://ziontechgroup.com'
    }
  },

  // Web & Mobile Development
  {
    id: 'fullstack-development',
    title: 'Full-Stack Web Application Development',
    description: 'Complete web application development using modern technologies like React, Node.js, and cloud deployment.',
    category: 'web-development',
    subcategory: 'Web Development',
    price: 15000,
    currency: 'USD',
    pricingModel: 'project-based',
    features: [
      'Custom web application development',
      'Responsive design and UI/UX',
      'Backend API development',
      'Database design and integration',
      'Cloud deployment and hosting',
      'Ongoing maintenance and support'
    ],
    benefits: [
      'Custom solution tailored to your needs',
      'Modern, scalable architecture',
      'Professional user experience',
      'SEO-optimized and fast loading',
      'Mobile-responsive design'
    ],
    marketPrice: '$12,000 - $50,000',
    deliveryTime: '8-12 weeks',
    tags: ['Web Development', 'Full-Stack', 'React', 'Node.js', 'API Development', 'UI/UX'],
    author: {
      name: 'Zion Web Development',
      id: 'zion-web-development',
      verified: true
    },
    images: ['https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format'],
    rating: 4.9,
    reviewCount: 234,
    aiScore: 92,
    featured: true,
    popular: true,
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'mobile-app-development',
    title: 'Cross-Platform Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android using React Native or Flutter.',
    category: 'web-development',
    subcategory: 'Mobile Development',
    price: 12000,
    currency: 'USD',
    pricingModel: 'project-based',
    features: [
      'Cross-platform mobile app development',
      'Native iOS and Android apps',
      'UI/UX design and prototyping',
      'Backend integration and APIs',
      'App store submission',
      'Post-launch support and updates'
    ],
    benefits: [
      'Reach both iOS and Android users',
      'Faster development time',
      'Cost-effective solution',
      'Consistent user experience',
      'Easy maintenance and updates'
    ],
    marketPrice: '$10,000 - $40,000',
    deliveryTime: '6-10 weeks',
    tags: ['Mobile Development', 'React Native', 'Flutter', 'iOS', 'Android', 'Cross-Platform'],
    author: {
      name: 'Zion Mobile Solutions',
      id: 'zion-mobile-solutions',
      verified: true
    },
    images: ['https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format'],
    rating: 4.8,
    reviewCount: 167,
    aiScore: 90,
    featured: false,
    popular: true,
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      website: 'https://ziontechgroup.com'
    }
  },

  // IT Consulting Services
  {
    id: 'digital-transformation',
    title: 'Digital Transformation Strategy & Consulting',
    description: 'Comprehensive digital transformation consulting to modernize your business operations and technology stack.',
    category: 'it-consulting',
    subcategory: 'Strategy Consulting',
    price: 8000,
    currency: 'USD',
    pricingModel: 'project-based',
    features: [
      'Technology assessment and audit',
      'Digital transformation roadmap',
      'Change management strategy',
      'Technology stack modernization',
      'Process optimization',
      'Implementation planning'
    ],
    benefits: [
      'Clear transformation roadmap',
      'Improved operational efficiency',
      'Competitive advantage',
      'Better customer experience',
      'Future-proof technology strategy'
    ],
    marketPrice: '$7,000 - $25,000',
    deliveryTime: '4-6 weeks',
    tags: ['Digital Transformation', 'Strategy', 'Consulting', 'Change Management', 'Technology Audit'],
    author: {
      name: 'Zion Digital Consulting',
      id: 'zion-digital-consulting',
      verified: true
    },
    images: ['https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format'],
    rating: 4.9,
    reviewCount: 145,
    aiScore: 94,
    featured: true,
    popular: true,
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'it-infrastructure',
    title: 'IT Infrastructure Assessment & Optimization',
    description: 'Comprehensive IT infrastructure review, optimization, and modernization planning.',
    category: 'it-consulting',
    subcategory: 'Infrastructure',
    price: 5000,
    currency: 'USD',
    pricingModel: 'project-based',
    features: [
      'Infrastructure performance analysis',
      'Capacity planning and optimization',
      'Security and compliance review',
      'Cost optimization recommendations',
      'Technology roadmap planning',
      'Implementation guidance'
    ],
    benefits: [
      'Optimize infrastructure performance',
      'Reduce operational costs',
      'Improve security posture',
      'Better scalability planning',
      'Technology modernization roadmap'
    ],
    marketPrice: '$4,000 - $15,000',
    deliveryTime: '3-4 weeks',
    tags: ['IT Infrastructure', 'Optimization', 'Capacity Planning', 'Cost Optimization', 'Technology Roadmap'],
    author: {
      name: 'Zion Infrastructure Consulting',
      id: 'zion-infrastructure-consulting',
      verified: true
    },
    images: ['https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format'],
    rating: 4.7,
    reviewCount: 98,
    aiScore: 87,
    featured: false,
    popular: false,
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      website: 'https://ziontechgroup.com'
    }
  },

  // Blockchain & Web3 Services
  {
    id: 'smart-contract-development',
    title: 'Smart Contract Development & Audit',
    description: 'Ethereum smart contract development, testing, and security auditing for DeFi and NFT projects.',
    category: 'blockchain',
    subcategory: 'Smart Contracts',
    price: 6000,
    currency: 'USD',
    pricingModel: 'project-based',
    features: [
      'Custom smart contract development',
      'Security audit and testing',
      'Gas optimization',
      'Frontend integration',
      'Deployment and verification',
      'Documentation and support'
    ],
    benefits: [
      'Secure and audited smart contracts',
      'Gas-optimized for cost efficiency',
      'Professional development expertise',
      'Reduced security risks',
      'Compliance with best practices'
    ],
    marketPrice: '$5,000 - $20,000',
    deliveryTime: '4-6 weeks',
    tags: ['Smart Contracts', 'Ethereum', 'DeFi', 'NFT', 'Blockchain', 'Security Audit'],
    author: {
      name: 'Zion Blockchain Solutions',
      id: 'zion-blockchain-solutions',
      verified: true
    },
    images: ['https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format'],
    rating: 4.8,
    reviewCount: 78,
    aiScore: 91,
    featured: false,
    popular: true,
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'web3-integration',
    title: 'Web3 Integration & Wallet Connectivity',
    description: 'Web3 integration services including wallet connectivity, blockchain data integration, and decentralized features.',
    category: 'blockchain',
    subcategory: 'Web3 Integration',
    price: 4000,
    currency: 'USD',
    pricingModel: 'project-based',
    features: [
      'Wallet integration (MetaMask, WalletConnect)',
      'Blockchain data integration',
      'DeFi protocol integration',
      'NFT marketplace integration',
      'Web3 authentication',
      'Cross-chain compatibility'
    ],
    benefits: [
      'Modern Web3 user experience',
      'Access to DeFi and NFT markets',
      'Enhanced user engagement',
      'Future-proof technology stack',
      'Competitive advantage in Web3 space'
    ],
    marketPrice: '$3,500 - $12,000',
    deliveryTime: '3-4 weeks',
    tags: ['Web3', 'Blockchain Integration', 'Wallet Connectivity', 'DeFi', 'NFT', 'Cross-Chain'],
    author: {
      name: 'Zion Web3 Solutions',
      id: 'zion-web3-solutions',
      verified: true
    },
    images: ['https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format'],
    rating: 4.7,
    reviewCount: 56,
    aiScore: 89,
    featured: false,
    popular: false,
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      website: 'https://ziontechgroup.com'
    }
  },

  // Process Automation Services
  {
    id: 'rpa-automation',
    title: 'RPA Process Automation & Workflow Optimization',
    description: 'Robotic Process Automation solutions to automate repetitive tasks and optimize business workflows.',
    category: 'automation',
    subcategory: 'RPA',
    price: 3500,
    currency: 'USD',
    pricingModel: 'project-based',
    features: [
      'Process analysis and mapping',
      'RPA bot development',
      'Workflow automation',
      'Integration with existing systems',
      'Monitoring and reporting',
      'Training and support'
    ],
    benefits: [
      'Reduce manual work by 70-90%',
      'Improve accuracy and consistency',
      '24/7 operation capability',
      'Scalable automation solution',
      'Quick ROI and cost savings'
    ],
    marketPrice: '$3,000 - $15,000',
    deliveryTime: '3-5 weeks',
    tags: ['RPA', 'Process Automation', 'Workflow Optimization', 'Bot Development', 'Business Process'],
    author: {
      name: 'Zion Automation Solutions',
      id: 'zion-automation-solutions',
      verified: true
    },
    images: ['https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format'],
    rating: 4.8,
    reviewCount: 123,
    aiScore: 90,
    featured: false,
    popular: true,
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'api-integration',
    title: 'API Integration & Automation Services',
    description: 'Custom API integration services to connect your business systems and automate data flows.',
    category: 'automation',
    subcategory: 'API Integration',
    price: 2500,
    currency: 'USD',
    pricingModel: 'project-based',
    features: [
      'API design and development',
      'Third-party system integration',
      'Data synchronization',
      'Webhook implementation',
      'Error handling and monitoring',
      'Documentation and testing'
    ],
    benefits: [
      'Seamless system integration',
      'Automated data synchronization',
      'Reduced manual data entry',
      'Improved data accuracy',
      'Enhanced operational efficiency'
    ],
    marketPrice: '$2,000 - $8,000',
    deliveryTime: '2-3 weeks',
    tags: ['API Integration', 'System Integration', 'Data Synchronization', 'Webhooks', 'Automation'],
    author: {
      name: 'Zion Integration Services',
      id: 'zion-integration-services',
      verified: true
    },
    images: ['https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format'],
    rating: 4.7,
    reviewCount: 89,
    aiScore: 86,
    featured: false,
    popular: false,
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      website: 'https://ziontechgroup.com'
    }
  },

  // IoT & Edge Computing Services
  {
    id: 'iot-platform',
    title: 'IoT Platform Development & Management',
    description: 'Complete IoT platform solutions including device management, data collection, and real-time analytics.',
    category: 'iot-edge',
    subcategory: 'IoT Platform',
    price: 15000,
    currency: 'USD',
    pricingModel: 'project-based',
    features: [
      'IoT device management platform',
      'Real-time data collection and processing',
      'Edge computing implementation',
      'Device connectivity and protocols',
      'Analytics and visualization',
      'Security and monitoring'
    ],
    benefits: [
      'Centralized IoT device management',
      'Real-time operational insights',
      'Improved efficiency and automation',
      'Predictive maintenance capabilities',
      'Scalable IoT infrastructure'
    ],
    marketPrice: '$12,000 - $50,000',
    deliveryTime: '8-12 weeks',
    tags: ['IoT', 'Edge Computing', 'Device Management', 'Real-time Analytics', 'Predictive Maintenance'],
    author: {
      name: 'Zion IoT Solutions',
      id: 'zion-iot-solutions',
      verified: true
    },
    images: ['https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&auto=format'],
    rating: 4.8,
    reviewCount: 67,
    aiScore: 93,
    featured: true,
    popular: false,
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      website: 'https://ziontechgroup.com'
    }
  },

  // Quantum Computing Services
  {
    id: 'quantum-algorithms',
    title: 'Quantum Algorithm Development & Optimization',
    description: 'Quantum computing algorithm development for optimization, cryptography, and machine learning applications.',
    category: 'quantum-computing',
    subcategory: 'Algorithm Development',
    price: 25000,
    currency: 'USD',
    pricingModel: 'project-based',
    features: [
      'Quantum algorithm design',
      'Optimization problem solving',
      'Quantum machine learning',
      'Cryptography applications',
      'Simulation and testing',
      'Performance optimization'
    ],
    benefits: [
      'Exponential speedup for complex problems',
      'Breakthrough optimization solutions',
      'Future-proof technology investment',
      'Competitive advantage in research',
      'Access to quantum computing resources'
    ],
    marketPrice: '$20,000 - $100,000',
    deliveryTime: '12-16 weeks',
    tags: ['Quantum Computing', 'Algorithm Development', 'Optimization', 'Machine Learning', 'Cryptography'],
    author: {
      name: 'Zion Quantum Research',
      id: 'zion-quantum-research',
      verified: true
    },
    images: ['https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&auto=format'],
    rating: 4.9,
    reviewCount: 23,
    aiScore: 98,
    featured: true,
    popular: false,
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      website: 'https://ziontechgroup.com'
    }
  },

  // AR/VR & Metaverse Services
  {
    id: 'ar-vr-development',
    title: 'AR/VR Application Development & Metaverse Solutions',
    description: 'Immersive AR/VR applications and metaverse platform development for gaming, education, and business.',
    category: 'augmented-reality',
    subcategory: 'AR/VR Development',
    price: 18000,
    currency: 'USD',
    pricingModel: 'project-based',
    features: [
      'AR/VR application development',
      '3D modeling and animation',
      'Metaverse platform development',
      'Cross-platform compatibility',
      'Interactive user experiences',
      'Performance optimization'
    ],
    benefits: [
      'Immersive user experiences',
      'Enhanced engagement and retention',
      'Innovative marketing opportunities',
      'Virtual collaboration platforms',
      'Future-ready technology stack'
    ],
    marketPrice: '$15,000 - $60,000',
    deliveryTime: '10-14 weeks',
    tags: ['AR/VR', 'Metaverse', '3D Modeling', 'Immersive Technology', 'Virtual Reality'],
    author: {
      name: 'Zion Immersive Tech',
      id: 'zion-immersive-tech',
      verified: true
    },
    images: ['https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=800&auto=format'],
    rating: 4.8,
    reviewCount: 45,
    aiScore: 94,
    featured: true,
    popular: true,
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      website: 'https://ziontechgroup.com'
    }
  },

  // Green Technology Services
  {
    id: 'sustainable-tech',
    title: 'Sustainable Technology Solutions & Green IT',
    description: 'Environmentally conscious technology solutions including energy optimization, carbon tracking, and sustainable practices.',
    category: 'green-tech',
    subcategory: 'Sustainable Solutions',
    price: 8000,
    currency: 'USD',
    pricingModel: 'project-based',
    features: [
      'Energy efficiency optimization',
      'Carbon footprint tracking',
      'Sustainable IT practices',
      'Green cloud solutions',
      'Environmental compliance',
      'Sustainability reporting'
    ],
    benefits: [
      'Reduce environmental impact',
      'Lower energy costs',
      'Meet sustainability goals',
      'Improve brand reputation',
      'Compliance with regulations'
    ],
    marketPrice: '$6,000 - $25,000',
    deliveryTime: '4-6 weeks',
    tags: ['Green Technology', 'Sustainability', 'Energy Efficiency', 'Carbon Tracking', 'Environmental Compliance'],
    author: {
      name: 'Zion Green Tech',
      id: 'zion-green-tech',
      verified: true
    },
    images: ['https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&auto=format'],
    rating: 4.7,
    reviewCount: 78,
    aiScore: 89,
    featured: false,
    popular: true,
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      website: 'https://ziontechgroup.com'
    }
  },

  // Advanced AI Services
  {
    id: 'ai-ethics-governance',
    title: 'AI Ethics & Governance Framework Development',
    description: 'Comprehensive AI ethics and governance frameworks to ensure responsible AI development and deployment.',
    category: 'ai-services',
    subcategory: 'AI Governance',
    price: 12000,
    currency: 'USD',
    pricingModel: 'project-based',
    features: [
      'AI ethics framework development',
      'Bias detection and mitigation',
      'Transparency and explainability',
      'Compliance and auditing',
      'Risk assessment and management',
      'Training and implementation'
    ],
    benefits: [
      'Ensure responsible AI deployment',
      'Meet regulatory requirements',
      'Build trust with stakeholders',
      'Reduce AI-related risks',
      'Competitive advantage in responsible AI'
    ],
    marketPrice: '$10,000 - $40,000',
    deliveryTime: '6-8 weeks',
    tags: ['AI Ethics', 'Governance', 'Bias Detection', 'Transparency', 'Compliance', 'Risk Management'],
    author: {
      name: 'Zion AI Governance',
      id: 'zion-ai-governance',
      verified: true
    },
    images: ['https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format'],
    rating: 4.9,
    reviewCount: 34,
    aiScore: 96,
    featured: true,
    popular: false,
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      website: 'https://ziontechgroup.com'
    }
  },

  // Advanced Cybersecurity Services
  {
    id: 'ai-threat-detection',
    title: 'AI-Powered Threat Detection & Response',
    description: 'Next-generation cybersecurity using artificial intelligence for advanced threat detection and automated response.',
    category: 'cybersecurity',
    subcategory: 'AI Security',
    price: 6000,
    currency: 'USD',
    pricingModel: 'monthly',
    features: [
      'AI-powered threat detection',
      'Behavioral analysis',
      'Automated incident response',
      'Threat intelligence integration',
      'Real-time monitoring',
      'Machine learning adaptation'
    ],
    benefits: [
      'Detect threats before they cause damage',
      'Automated response reduces response time',
      'Continuous learning improves detection',
      'Reduce false positives',
      '24/7 intelligent monitoring'
    ],
    marketPrice: '$5,000 - $20,000/month',
    deliveryTime: '2-3 weeks setup',
    tags: ['AI Security', 'Threat Detection', 'Automated Response', 'Behavioral Analysis', 'Machine Learning'],
    author: {
      name: 'Zion AI Security',
      id: 'zion-ai-security',
      verified: true
    },
    images: ['https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format'],
    rating: 4.9,
    reviewCount: 89,
    aiScore: 95,
    featured: true,
    popular: true,
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      website: 'https://ziontechgroup.com'
    }
  },

  // Specialized AI Services
  {
    id: 'ai-video-analysis',
    title: 'AI Video Analysis & Computer Vision Solutions',
    description: 'Advanced computer vision solutions for video analysis, object detection, and automated video processing.',
    category: 'ai-services',
    subcategory: 'Computer Vision',
    price: 8000,
    currency: 'USD',
    pricingModel: 'project-based',
    features: [
      'Real-time video analysis',
      'Object detection and tracking',
      'Facial recognition systems',
      'Video content moderation',
      'Automated video editing',
      'Performance analytics'
    ],
    benefits: [
      'Automate video processing tasks',
      'Improve content moderation efficiency',
      'Enhanced security and surveillance',
      'Real-time insights from video data',
      'Scalable video analysis platform'
    ],
    marketPrice: '$6,000 - $25,000',
    deliveryTime: '6-8 weeks',
    tags: ['Computer Vision', 'Video Analysis', 'Object Detection', 'AI Processing', 'Real-time Analytics'],
    author: {
      name: 'Zion Vision AI',
      id: 'zion-vision-ai',
      verified: true
    },
    images: ['https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format'],
    rating: 4.8,
    reviewCount: 67,
    aiScore: 94,
    featured: true,
    popular: false,
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      website: 'https://ziontechgroup.com'
    }
  },

  // Advanced Data Services
  {
    id: 'real-time-analytics',
    title: 'Real-Time Analytics & Streaming Data Solutions',
    description: 'High-performance real-time analytics platforms for processing streaming data and providing instant insights.',
    category: 'data-analytics',
    subcategory: 'Real-Time Analytics',
    price: 15000,
    currency: 'USD',
    pricingModel: 'project-based',
    features: [
      'Real-time data streaming',
      'Live dashboard creation',
      'Stream processing engines',
      'Real-time alerting',
      'Performance optimization',
      'Scalable infrastructure'
    ],
    benefits: [
      'Instant business insights',
      'Proactive decision making',
      'Real-time monitoring capabilities',
      'Improved operational efficiency',
      'Competitive advantage through speed'
    ],
    marketPrice: '$12,000 - $50,000',
    deliveryTime: '8-12 weeks',
    tags: ['Real-Time Analytics', 'Streaming Data', 'Live Dashboards', 'Performance Monitoring', 'Instant Insights'],
    author: {
      name: 'Zion Real-Time Solutions',
      id: 'zion-realtime-solutions',
      verified: true
    },
    images: ['https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format'],
    rating: 4.9,
    reviewCount: 45,
    aiScore: 96,
    featured: true,
    popular: true,
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      website: 'https://ziontechgroup.com'
    }
  },

  // Advanced Cloud Services
  {
    id: 'multi-cloud-orchestration',
    title: 'Multi-Cloud Orchestration & Management',
    description: 'Comprehensive multi-cloud management platform for orchestrating workloads across AWS, Azure, Google Cloud, and private clouds.',
    category: 'cloud-services',
    subcategory: 'Multi-Cloud',
    price: 20000,
    currency: 'USD',
    pricingModel: 'project-based',
    features: [
      'Multi-cloud workload orchestration',
      'Unified management dashboard',
      'Cost optimization across clouds',
      'Security and compliance management',
      'Performance monitoring',
      'Automated failover'
    ],
    benefits: [
      'Avoid vendor lock-in',
      'Optimize costs across cloud providers',
      'Improved reliability and redundancy',
      'Centralized management',
      'Flexible cloud strategy'
    ],
    marketPrice: '$15,000 - $75,000',
    deliveryTime: '10-16 weeks',
    tags: ['Multi-Cloud', 'Orchestration', 'AWS', 'Azure', 'Google Cloud', 'Management Platform'],
    author: {
      name: 'Zion Multi-Cloud Solutions',
      id: 'zion-multicloud-solutions',
      verified: true
    },
    images: ['https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format'],
    rating: 4.9,
    reviewCount: 34,
    aiScore: 97,
    featured: true,
    popular: false,
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      website: 'https://ziontechgroup.com'
    }
  },

  // Advanced Web3 Services
  {
    id: 'defi-protocol-development',
    title: 'DeFi Protocol Development & Smart Contract Auditing',
    description: 'Complete DeFi protocol development including smart contracts, frontend applications, and comprehensive security auditing.',
    category: 'blockchain',
    subcategory: 'DeFi Development',
    price: 30000,
    currency: 'USD',
    pricingModel: 'project-based',
    features: [
      'Custom DeFi protocol development',
      'Smart contract development',
      'Security auditing and testing',
      'Frontend application development',
      'Integration with existing DeFi protocols',
      'Documentation and deployment'
    ],
    benefits: [
      'Secure and audited DeFi protocols',
      'Custom financial solutions',
      'Reduced development risks',
      'Professional DeFi expertise',
      'Compliance with best practices'
    ],
    marketPrice: '$25,000 - $100,000',
    deliveryTime: '12-20 weeks',
    tags: ['DeFi', 'Smart Contracts', 'Blockchain', 'Financial Protocols', 'Security Auditing', 'Web3'],
    author: {
      name: 'Zion DeFi Solutions',
      id: 'zion-defi-solutions',
      verified: true
    },
    images: ['https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format'],
    rating: 4.9,
    reviewCount: 23,
    aiScore: 98,
    featured: true,
    popular: true,
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      website: 'https://ziontechgroup.com'
    }
  },

  // Advanced AI & Machine Learning Services
  {
    id: 'ai-voice-assistant',
    title: 'AI Voice Assistant Development',
    description: 'Custom voice assistants with natural language processing for businesses and applications.',
    category: 'ai-services',
    subcategory: 'Voice AI',
    price: 4500,
    currency: 'USD',
    pricingModel: 'project-based',
    features: [
      'Custom voice recognition',
      'Natural language understanding',
      'Multi-language support',
      'Integration with business systems',
      'Voice analytics and insights',
      'Custom wake word training'
    ],
    benefits: [
      'Improve customer engagement',
      'Reduce call center costs',
      '24/7 voice support availability',
      'Multi-language customer service',
      'Enhanced user experience'
    ],
    marketPrice: '$3,500 - $12,000',
    deliveryTime: '4-6 weeks',
    tags: ['Voice AI', 'NLP', 'Voice Recognition', 'Customer Service', 'Automation'],
    author: {
      name: 'Zion Voice AI',
      id: 'zion-voice-ai',
      verified: true
    },
    images: ['https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format'],
    rating: 4.8,
    reviewCount: 92,
    aiScore: 94,
    featured: true,
    popular: false,
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      website: 'https://ziontechgroup.com'
    }
  },

  {
    id: 'ai-predictive-maintenance',
    title: 'AI Predictive Maintenance Solutions',
    description: 'Machine learning-based predictive maintenance for industrial equipment and machinery.',
    category: 'ai-services',
    subcategory: 'Industrial AI',
    price: 6000,
    currency: 'USD',
    pricingModel: 'project-based',
    features: [
      'Equipment health monitoring',
      'Predictive failure analysis',
      'Maintenance scheduling optimization',
      'Real-time alerts and notifications',
      'Historical data analysis',
      'Cost optimization recommendations'
    ],
    benefits: [
      'Reduce unplanned downtime by 30-50%',
      'Lower maintenance costs',
      'Extend equipment lifespan',
      'Improve operational efficiency',
      'Data-driven decision making'
    ],
    marketPrice: '$4,000 - $15,000',
    deliveryTime: '6-8 weeks',
    tags: ['Predictive Maintenance', 'Industrial AI', 'IoT', 'Machine Learning', 'Equipment Monitoring'],
    author: {
      name: 'Zion Industrial AI',
      id: 'zion-industrial-ai',
      verified: true
    },
    images: ['https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format'],
    rating: 4.9,
    reviewCount: 78,
    aiScore: 95,
    featured: true,
    popular: true,
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      website: 'https://ziontechgroup.com'
    }
  },

  // Advanced Cybersecurity Services
  {
    id: 'quantum-encryption',
    title: 'Quantum-Resistant Encryption Solutions',
    description: 'Future-proof encryption solutions resistant to quantum computing attacks.',
    category: 'cybersecurity',
    subcategory: 'Quantum Security',
    price: 8000,
    currency: 'USD',
    pricingModel: 'project-based',
    features: [
      'Post-quantum cryptography',
      'Quantum key distribution',
      'Hybrid encryption systems',
      'Migration planning',
      'Compliance assessment',
      'Long-term security strategy'
    ],
    benefits: [
      'Future-proof security against quantum threats',
      'Meet upcoming security standards',
      'Protect long-term data security',
      'Stay ahead of emerging threats',
      'Compliance with future regulations'
    ],
    marketPrice: '$6,000 - $20,000',
    deliveryTime: '8-12 weeks',
    tags: ['Quantum Security', 'Post-Quantum Cryptography', 'Encryption', 'Future-Proof Security'],
    author: {
      name: 'Zion Quantum Security',
      id: 'zion-quantum-security',
      verified: true
    },
    images: ['https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&auto=format'],
    rating: 4.8,
    reviewCount: 56,
    aiScore: 93,
    featured: false,
    popular: false,
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      website: 'https://ziontechgroup.com'
    }
  },

  // Advanced Cloud & DevOps Services
  {
    id: 'kubernetes-orchestration',
    title: 'Kubernetes Orchestration & Management',
    description: 'Enterprise-grade Kubernetes deployment, management, and optimization services.',
    category: 'cloud-services',
    subcategory: 'Container Orchestration',
    price: 4500,
    currency: 'USD',
    pricingModel: 'monthly',
    features: [
      'Kubernetes cluster setup',
      'Multi-cluster management',
      'Auto-scaling configuration',
      'Monitoring and alerting',
      'Security hardening',
      'Performance optimization'
    ],
    benefits: [
      'Improved application scalability',
      'Better resource utilization',
      'Automated deployment processes',
      'Enhanced security posture',
      'Reduced operational overhead'
    ],
    marketPrice: '$3,500 - $10,000/month',
    deliveryTime: '2-3 weeks setup',
    tags: ['Kubernetes', 'Container Orchestration', 'DevOps', 'Microservices', 'Cloud Native'],
    author: {
      name: 'Zion Cloud Native',
      id: 'zion-cloud-native',
      verified: true
    },
    images: ['https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format'],
    rating: 4.8,
    reviewCount: 112,
    aiScore: 91,
    featured: false,
    popular: true,
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      website: 'https://ziontechgroup.com'
    }
  },

  {
    id: 'serverless-architecture',
    title: 'Serverless Architecture Design & Implementation',
    description: 'Design and implement scalable serverless solutions using AWS Lambda, Azure Functions, and more.',
    category: 'cloud-services',
    subcategory: 'Serverless',
    price: 3500,
    currency: 'USD',
    pricingModel: 'project-based',
    features: [
      'Serverless architecture design',
      'Function development and deployment',
      'API gateway configuration',
      'Event-driven architecture',
      'Cost optimization',
      'Monitoring and debugging'
    ],
    benefits: [
      'Pay only for actual usage',
      'Automatic scaling',
      'Reduced operational overhead',
      'Faster time to market',
      'Built-in high availability'
    ],
    marketPrice: '$2,500 - $8,000',
    deliveryTime: '3-5 weeks',
    tags: ['Serverless', 'AWS Lambda', 'Azure Functions', 'Event-Driven', 'Microservices'],
    author: {
      name: 'Zion Serverless',
      id: 'zion-serverless',
      verified: true
    },
    images: ['https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format'],
    rating: 4.7,
    reviewCount: 89,
    aiScore: 89,
    featured: false,
    popular: false,
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      website: 'https://ziontechgroup.com'
    }
  },

  // Advanced Data & Analytics Services
  {
    id: 'real-time-analytics',
    title: 'Real-Time Data Analytics & Streaming',
    description: 'Real-time data processing and analytics solutions using Apache Kafka, Spark, and modern streaming technologies.',
    category: 'data-analytics',
    subcategory: 'Real-Time Analytics',
    price: 7000,
    currency: 'USD',
    pricingModel: 'project-based',
    features: [
      'Real-time data pipeline design',
      'Stream processing implementation',
      'Real-time dashboard creation',
      'Data streaming architecture',
      'Performance optimization',
      'Monitoring and alerting'
    ],
    benefits: [
      'Instant insights from live data',
      'Real-time decision making',
      'Improved customer experience',
      'Operational efficiency gains',
      'Competitive advantage'
    ],
    marketPrice: '$5,000 - $18,000',
    deliveryTime: '6-8 weeks',
    tags: ['Real-Time Analytics', 'Streaming', 'Apache Kafka', 'Apache Spark', 'Data Pipeline'],
    author: {
      name: 'Zion Real-Time Analytics',
      id: 'zion-real-time-analytics',
      verified: true
    },
    images: ['https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format'],
    rating: 4.9,
    reviewCount: 67,
    aiScore: 94,
    featured: true,
    popular: false,
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      website: 'https://ziontechgroup.com'
    }
  },

  {
    id: 'ai-data-governance',
    title: 'AI-Powered Data Governance & Quality',
    description: 'Intelligent data governance solutions ensuring data quality, compliance, and trust.',
    category: 'data-analytics',
    subcategory: 'Data Governance',
    price: 5000,
    currency: 'USD',
    pricingModel: 'monthly',
    features: [
      'Data quality assessment',
      'Automated data profiling',
      'Compliance monitoring',
      'Data lineage tracking',
      'Privacy protection',
      'Governance automation'
    ],
    benefits: [
      'Ensure data accuracy and reliability',
      'Meet regulatory compliance requirements',
      'Build trust in data assets',
      'Reduce data-related risks',
      'Improve decision-making quality'
    ],
    marketPrice: '$3,500 - $12,000/month',
    deliveryTime: '3-4 weeks setup',
    tags: ['Data Governance', 'Data Quality', 'Compliance', 'Privacy', 'Data Lineage'],
    author: {
      name: 'Zion Data Governance',
      id: 'zion-data-governance',
      verified: true
    },
    images: ['https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format'],
    rating: 4.8,
    reviewCount: 78,
    aiScore: 92,
    featured: false,
    popular: true,
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      website: 'https://ziontechgroup.com'
    }
  },

  // Advanced Web & Mobile Development
  {
    id: 'progressive-web-apps',
    title: 'Progressive Web App (PWA) Development',
    description: 'Modern progressive web applications with offline capabilities and native app-like experience.',
    category: 'web-development',
    subcategory: 'PWA Development',
    price: 4000,
    currency: 'USD',
    pricingModel: 'project-based',
    features: [
      'PWA architecture design',
      'Service worker implementation',
      'Offline functionality',
      'Push notifications',
      'App-like experience',
      'Cross-platform compatibility'
    ],
    benefits: [
      'Native app-like experience',
      'Offline functionality',
      'Faster loading times',
      'Reduced development costs',
      'Better user engagement'
    ],
    marketPrice: '$3,000 - $10,000',
    deliveryTime: '4-6 weeks',
    tags: ['PWA', 'Progressive Web App', 'Service Workers', 'Offline First', 'Mobile Web'],
    author: {
      name: 'Zion PWA Development',
      id: 'zion-pwa-dev',
      verified: true
    },
    images: ['https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format'],
    rating: 4.8,
    reviewCount: 95,
    aiScore: 90,
    featured: false,
    popular: true,
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      website: 'https://ziontechgroup.com'
    }
  },

  {
    id: 'cross-platform-mobile',
    title: 'Cross-Platform Mobile App Development',
    description: 'Native-quality mobile applications for iOS and Android using React Native, Flutter, or Xamarin.',
    category: 'web-development',
    subcategory: 'Mobile Development',
    price: 6000,
    currency: 'USD',
    pricingModel: 'project-based',
    features: [
      'Cross-platform architecture',
      'Native performance optimization',
      'Platform-specific features',
      'App store deployment',
      'Testing and quality assurance',
      'Maintenance and updates'
    ],
    benefits: [
      'Single codebase for multiple platforms',
      'Faster development time',
      'Cost-effective solution',
      'Consistent user experience',
      'Easier maintenance'
    ],
    marketPrice: '$4,500 - $15,000',
    deliveryTime: '6-10 weeks',
    tags: ['React Native', 'Flutter', 'Cross-Platform', 'Mobile Apps', 'iOS', 'Android'],
    author: {
      name: 'Zion Mobile Development',
      id: 'zion-mobile-dev',
      verified: true
    },
    images: ['https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format'],
    rating: 4.9,
    reviewCount: 156,
    aiScore: 91,
    featured: true,
    popular: true,
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      website: 'https://ziontechgroup.com'
    }
  },

  // Advanced IT Consulting Services
  {
    id: 'digital-transformation',
    title: 'Digital Transformation Strategy & Implementation',
    description: 'Comprehensive digital transformation consulting helping businesses modernize and compete in the digital age.',
    category: 'it-consulting',
    subcategory: 'Digital Transformation',
    price: 15000,
    currency: 'USD',
    pricingModel: 'project-based',
    features: [
      'Digital maturity assessment',
      'Transformation roadmap',
      'Technology stack modernization',
      'Change management',
      'Process optimization',
      'Success metrics and KPIs'
    ],
    benefits: [
      'Modernize business operations',
      'Improve customer experience',
      'Increase operational efficiency',
      'Gain competitive advantage',
      'Future-proof your business'
    ],
    marketPrice: '$10,000 - $50,000',
    deliveryTime: '12-20 weeks',
    tags: ['Digital Transformation', 'Strategy', 'Modernization', 'Change Management', 'Process Optimization'],
    author: {
      name: 'Zion Digital Transformation',
      id: 'zion-digital-transform',
      verified: true
    },
    images: ['https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format'],
    rating: 4.9,
    reviewCount: 89,
    aiScore: 95,
    featured: true,
    popular: true,
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      website: 'https://ziontechgroup.com'
    }
  },

  {
    id: 'enterprise-architecture',
    title: 'Enterprise Architecture Design & Optimization',
    description: 'Strategic enterprise architecture planning and optimization for large organizations.',
    category: 'it-consulting',
    subcategory: 'Enterprise Architecture',
    price: 12000,
    currency: 'USD',
    pricingModel: 'project-based',
    features: [
      'Current state assessment',
      'Target architecture design',
      'Technology roadmap planning',
      'Integration strategy',
      'Governance framework',
      'Implementation planning'
    ],
    benefits: [
      'Optimize technology investments',
      'Improve system integration',
      'Reduce technical debt',
      'Enable business agility',
      'Standardize processes'
    ],
    marketPrice: '$8,000 - $30,000',
    deliveryTime: '10-16 weeks',
    tags: ['Enterprise Architecture', 'Technology Strategy', 'Integration', 'Governance', 'Roadmap'],
    author: {
      name: 'Zion Enterprise Architecture',
      id: 'zion-enterprise-arch',
      verified: true
    },
    images: ['https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format'],
    rating: 4.8,
    reviewCount: 67,
    aiScore: 93,
    featured: false,
    popular: false,
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      website: 'https://ziontechgroup.com'
    }
  },

  // Advanced Blockchain & Web3 Services
  {
    id: 'defi-platform-development',
    title: 'DeFi Platform Development & Smart Contracts',
    description: 'Decentralized finance platform development with smart contracts and DeFi protocols.',
    category: 'blockchain',
    subcategory: 'DeFi Development',
    price: 10000,
    currency: 'USD',
    pricingModel: 'project-based',
    features: [
      'DeFi protocol design',
      'Smart contract development',
      'Security auditing',
      'Tokenomics design',
      'Liquidity pool implementation',
      'Yield farming mechanisms'
    ],
    benefits: [
      'Launch innovative DeFi products',
      'Secure smart contract implementation',
      'Compliance with DeFi standards',
      'Access to new financial markets',
      'Revenue from DeFi protocols'
    ],
    marketPrice: '$7,000 - $25,000',
    deliveryTime: '12-16 weeks',
    tags: ['DeFi', 'Smart Contracts', 'Blockchain', 'Cryptocurrency', 'Yield Farming'],
    author: {
      name: 'Zion DeFi Development',
      id: 'zion-defi-dev',
      verified: true
    },
    images: ['https://images.unsplash.com/photo-1639762681485-074d7f9c9449?w=800&800&auto=format'],
    rating: 4.8,
    reviewCount: 78,
    aiScore: 94,
    featured: true,
    popular: false,
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      website: 'https://ziontechgroup.com'
    }
  },

  {
    id: 'nft-marketplace-development',
    title: 'NFT Marketplace Development & Smart Contracts',
    description: 'Custom NFT marketplace development with minting, trading, and auction capabilities.',
    category: 'blockchain',
    subcategory: 'NFT Development',
    price: 8000,
    currency: 'USD',
    pricingModel: 'project-based',
    features: [
      'NFT marketplace design',
      'Smart contract development',
      'Minting functionality',
      'Trading and auction systems',
      'Wallet integration',
      'Metadata management'
    ],
    benefits: [
      'Launch NFT business quickly',
      'Custom marketplace features',
      'Revenue from trading fees',
      'Brand building opportunities',
      'Access to NFT market'
    ],
    marketPrice: '$5,000 - $20,000',
    deliveryTime: '8-12 weeks',
    tags: ['NFT', 'Marketplace', 'Smart Contracts', 'Blockchain', 'Digital Art'],
    author: {
      name: 'Zion NFT Development',
      id: 'zion-nft-dev',
      verified: true
    },
    images: ['https://images.unsplash.com/photo-1639762681485-074d7f9c9449?w=800&800&auto=format'],
    rating: 4.7,
    reviewCount: 89,
    aiScore: 91,
    featured: false,
    popular: true,
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      website: 'https://ziontechgroup.com'
    }
  },

  // Advanced Process Automation Services
  {
    id: 'rpa-implementation',
    title: 'Robotic Process Automation (RPA) Implementation',
    description: 'End-to-end RPA solutions to automate repetitive business processes and workflows.',
    category: 'automation',
    subcategory: 'RPA',
    price: 7000,
    currency: 'USD',
    pricingModel: 'project-based',
    features: [
      'Process analysis and mapping',
      'RPA bot development',
      'Workflow automation',
      'Integration with existing systems',
      'Monitoring and analytics',
      'Training and support'
    ],
    benefits: [
      'Reduce manual work by 70-90%',
      'Improve accuracy and consistency',
      '24/7 process execution',
      'Scalable automation solution',
      'Quick ROI (3-6 months)'
    ],
    marketPrice: '$5,000 - $20,000',
    deliveryTime: '6-10 weeks',
    tags: ['RPA', 'Process Automation', 'Workflow Automation', 'Business Process', 'Efficiency'],
    author: {
      name: 'Zion RPA Solutions',
      id: 'zion-rpa-solutions',
      verified: true
    },
    images: ['https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format'],
    rating: 4.9,
    reviewCount: 112,
    aiScore: 93,
    featured: true,
    popular: true,
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      website: 'https://ziontechgroup.com'
    }
  },

  {
    id: 'workflow-automation',
    title: 'Business Workflow Automation & Optimization',
    description: 'Comprehensive workflow automation solutions to streamline business operations and improve efficiency.',
    category: 'automation',
    subcategory: 'Workflow Automation',
    price: 5000,
    currency: 'USD',
    pricingModel: 'project-based',
    features: [
      'Workflow analysis and design',
      'Automation implementation',
      'Integration with business systems',
      'Process monitoring',
      'Performance analytics',
      'Continuous optimization'
    ],
    benefits: [
      'Streamline business processes',
      'Reduce manual errors',
      'Improve operational efficiency',
      'Better resource allocation',
      'Enhanced compliance tracking'
    ],
    marketPrice: '$3,500 - $12,000',
    deliveryTime: '4-8 weeks',
    tags: ['Workflow Automation', 'Business Process', 'Efficiency', 'Process Optimization', 'Integration'],
    author: {
      name: 'Zion Workflow Automation',
      id: 'zion-workflow-automation',
      verified: true
    },
    images: ['https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format'],
    rating: 4.8,
    reviewCount: 95,
    aiScore: 90,
    featured: false,
    popular: false,
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      website: 'https://ziontechgroup.com'
    }
  },

  // Advanced IoT & Edge Computing Services
  {
    id: 'iot-platform-development',
    title: 'IoT Platform Development & Management',
    description: 'End-to-end IoT platform development with device management, data collection, and analytics.',
    category: 'iot-edge',
    subcategory: 'IoT Platform',
    price: 12000,
    currency: 'USD',
    pricingModel: 'project-based',
    features: [
      'IoT platform architecture',
      'Device management system',
      'Data collection and storage',
      'Real-time analytics',
      'Security and authentication',
      'Scalability planning'
    ],
    benefits: [
      'Centralized IoT device management',
      'Real-time data insights',
      'Scalable IoT infrastructure',
      'Enhanced security and privacy',
      'Reduced operational costs'
    ],
    marketPrice: '$8,000 - $30,000',
    deliveryTime: '12-20 weeks',
    tags: ['IoT Platform', 'Device Management', 'Real-Time Analytics', 'Edge Computing', 'Smart Devices'],
    author: {
      name: 'Zion IoT Solutions',
      id: 'zion-iot-solutions',
      verified: true
    },
    images: ['https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format'],
    rating: 4.8,
    reviewCount: 67,
    aiScore: 92,
    featured: true,
    popular: false,
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      website: 'https://ziontechgroup.com'
    }
  },

  {
    id: 'edge-computing-solutions',
    title: 'Edge Computing Solutions & Optimization',
    description: 'Edge computing infrastructure and optimization for low-latency, high-performance applications.',
    category: 'iot-edge',
    subcategory: 'Edge Computing',
    price: 8000,
    currency: 'USD',
    pricingModel: 'project-based',
    features: [
      'Edge infrastructure design',
      'Latency optimization',
      'Data processing at edge',
      'Security implementation',
      'Performance monitoring',
      'Scalability planning'
    ],
    benefits: [
      'Ultra-low latency processing',
      'Reduced bandwidth usage',
      'Improved user experience',
      'Enhanced privacy and security',
      'Cost-effective data processing'
    ],
    marketPrice: '$6,000 - $20,000',
    deliveryTime: '8-12 weeks',
    tags: ['Edge Computing', 'Low Latency', 'Performance Optimization', 'IoT', 'Real-Time Processing'],
    author: {
      name: 'Zion Edge Computing',
      id: 'zion-edge-computing',
      verified: true
    },
    images: ['https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format'],
    rating: 4.7,
    reviewCount: 78,
    aiScore: 89,
    featured: false,
    popular: false,
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      website: 'https://ziontechgroup.com'
    }
  },

  // Advanced Quantum Computing Services
  {
    id: 'quantum-algorithm-development',
    title: 'Quantum Algorithm Development & Optimization',
    description: 'Custom quantum algorithm development for specific business problems and optimization challenges.',
    category: 'quantum-computing',
    subcategory: 'Algorithm Development',
    price: 15000,
    currency: 'USD',
    pricingModel: 'project-based',
    features: [
      'Problem analysis and quantum mapping',
      'Custom algorithm development',
      'Quantum circuit optimization',
      'Simulation and testing',
      'Performance benchmarking',
      'Documentation and training'
    ],
    benefits: [
      'Solve complex optimization problems',
      'Exponential speedup for specific tasks',
      'Competitive advantage in research',
      'Future-proof technology investment',
      'Access to quantum computing capabilities'
    ],
    marketPrice: '$10,000 - $40,000',
    deliveryTime: '16-24 weeks',
    tags: ['Quantum Computing', 'Algorithm Development', 'Optimization', 'Quantum Circuits', 'Research'],
    author: {
      name: 'Zion Quantum Computing',
      id: 'zion-quantum-computing',
      verified: true
    },
    images: ['https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&auto=format'],
    rating: 4.8,
    reviewCount: 45,
    aiScore: 96,
    featured: true,
    popular: false,
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      website: 'https://ziontechgroup.com'
    }
  },

  {
    id: 'quantum-software-development',
    title: 'Quantum Software Development & Integration',
    description: 'Quantum software development and integration with classical computing systems.',
    category: 'quantum-computing',
    subcategory: 'Software Development',
    price: 10000,
    currency: 'USD',
    pricingModel: 'project-based',
    features: [
      'Quantum software architecture',
      'Hybrid quantum-classical systems',
      'API development and integration',
      'Testing and validation',
      'Performance optimization',
      'Documentation and support'
    ],
    benefits: [
      'Bridge quantum and classical computing',
      'Prepare for quantum advantage',
      'Innovative software solutions',
      'Research and development capabilities',
      'Future technology positioning'
    ],
    marketPrice: '$7,000 - $25,000',
    deliveryTime: '12-18 weeks',
    tags: ['Quantum Software', 'Hybrid Systems', 'API Development', 'Integration', 'Quantum Advantage'],
    author: {
      name: 'Zion Quantum Software',
      id: 'zion-quantum-software',
      verified: true
    },
    images: ['https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&auto=format'],
    rating: 4.7,
    reviewCount: 56,
    aiScore: 94,
    featured: false,
    popular: false,
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      website: 'https://ziontechgroup.com'
    }
  },

  // Advanced AR/VR & Metaverse Services
  {
    id: 'ar-vr-application-development',
    title: 'AR/VR Application Development & Deployment',
    description: 'Custom augmented and virtual reality applications for business, education, and entertainment.',
    category: 'augmented-reality',
    subcategory: 'AR/VR Development',
    price: 8000,
    currency: 'USD',
    pricingModel: 'project-based',
    features: [
      'AR/VR application design',
      '3D modeling and animation',
      'Interactive user experience',
      'Multi-platform deployment',
      'Performance optimization',
      'Testing and quality assurance'
    ],
    benefits: [
      'Immersive user experiences',
      'Enhanced training and education',
      'Innovative marketing solutions',
      'Competitive differentiation',
      'New revenue opportunities'
    ],
    marketPrice: '$6,000 - $20,000',
    deliveryTime: '8-14 weeks',
    tags: ['AR/VR', 'Augmented Reality', 'Virtual Reality', '3D Modeling', 'Immersive Experience'],
    author: {
      name: 'Zion AR/VR Development',
      id: 'zion-ar-vr-dev',
      verified: true
    },
    images: ['https://images.unsplash.com/photo-1593508512255-86ab42a8c620?w=800&auto=format'],
    rating: 4.8,
    reviewCount: 78,
    aiScore: 91,
    featured: true,
    popular: false,
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      website: 'https://ziontechgroup.com'
    }
  },

  {
    id: 'metaverse-platform-development',
    title: 'Metaverse Platform Development & Strategy',
    description: 'Custom metaverse platform development with virtual worlds, avatars, and social interactions.',
    category: 'augmented-reality',
    subcategory: 'Metaverse Development',
    price: 15000,
    currency: 'USD',
    pricingModel: 'project-based',
    features: [
      'Metaverse platform architecture',
      'Virtual world design',
      'Avatar system development',
      'Social interaction features',
      'Monetization systems',
      'Scalability planning'
    ],
    benefits: [
      'Create immersive virtual experiences',
      'Build engaged communities',
      'New revenue streams',
      'Brand presence in metaverse',
      'Future technology positioning'
    ],
    marketPrice: '$10,000 - $40,000',
    deliveryTime: '16-24 weeks',
    tags: ['Metaverse', 'Virtual Worlds', 'Avatars', 'Social Interaction', 'Virtual Reality'],
    author: {
      name: 'Zion Metaverse Development',
      id: 'zion-metaverse-dev',
      verified: true
    },
    images: ['https://images.unsplash.com/photo-1593508512255-86ab42a8c620?w=800&auto=format'],
    rating: 4.7,
    reviewCount: 67,
    aiScore: 93,
    featured: false,
    popular: true,
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      website: 'https://ziontechgroup.com'
    }
  },

  // Advanced Green Technology Services
  {
    id: 'carbon-footprint-tracking',
    title: 'Carbon Footprint Tracking & Reduction Solutions',
    description: 'AI-powered carbon footprint tracking and reduction strategies for businesses and organizations.',
    category: 'green-tech',
    subcategory: 'Carbon Management',
    price: 4000,
    currency: 'USD',
    pricingModel: 'monthly',
    features: [
      'Carbon footprint calculation',
      'Real-time monitoring',
      'Reduction strategy planning',
      'Compliance reporting',
      'Sustainability metrics',
      'Progress tracking'
    ],
    benefits: [
      'Meet sustainability goals',
      'Reduce environmental impact',
      'Comply with regulations',
      'Improve brand reputation',
      'Cost savings from efficiency'
    ],
    marketPrice: '$3,000 - $10,000/month',
    deliveryTime: '2-3 weeks setup',
    tags: ['Carbon Footprint', 'Sustainability', 'Environmental Compliance', 'Green Technology', 'Monitoring'],
    author: {
      name: 'Zion Green Solutions',
      id: 'zion-green-solutions',
      verified: true
    },
    images: ['https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&auto=format'],
    rating: 4.8,
    reviewCount: 89,
    aiScore: 90,
    featured: false,
    popular: true,
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      website: 'https://ziontechgroup.com'
    }
  },

  {
    id: 'renewable-energy-monitoring',
    title: 'Renewable Energy Monitoring & Optimization',
    description: 'Smart monitoring and optimization solutions for renewable energy systems and sustainability initiatives.',
    category: 'green-tech',
    subcategory: 'Energy Monitoring',
    price: 6000,
    currency: 'USD',
    pricingModel: 'project-based',
    features: [
      'Energy system monitoring',
      'Performance optimization',
      'Predictive maintenance',
      'Efficiency analytics',
      'Integration with smart grids',
      'Sustainability reporting'
    ],
    benefits: [
      'Maximize energy efficiency',
      'Reduce energy costs',
      'Improve sustainability metrics',
      'Predictive maintenance savings',
      'Compliance with energy regulations'
    ],
    marketPrice: '$4,500 - $15,000',
    deliveryTime: '6-10 weeks',
    tags: ['Renewable Energy', 'Energy Monitoring', 'Sustainability', 'Smart Grids', 'Energy Efficiency'],
    author: {
      name: 'Zion Energy Solutions',
      id: 'zion-energy-solutions',
      verified: true
    },
    images: ['https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&auto=format'],
    rating: 4.7,
    reviewCount: 67,
    aiScore: 89,
    featured: false,
    popular: false,
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      website: 'https://ziontechgroup.com'
    }
  },

  // Advanced Blockchain & Web3 Services
  {
    id: 'blockchain-smart-contracts',
    title: 'Blockchain Smart Contract Development',
    description: 'Custom smart contracts for DeFi, NFTs, DAOs, and enterprise blockchain solutions with security auditing.',
    category: 'blockchain-services',
    subcategory: 'Smart Contracts',
    price: 8000,
    currency: 'USD',
    pricingModel: 'project-based',
    features: [
      'Custom smart contract development',
      'Security auditing and testing',
      'Gas optimization',
      'Multi-chain deployment',
      'Integration with existing systems',
      'Ongoing maintenance and updates'
    ],
    benefits: [
      'Automate complex business processes',
      'Reduce intermediary costs',
      'Enhance transparency and trust',
      'Enable new business models',
      'Cross-border transaction capabilities'
    ],
    marketPrice: '$5,000 - $25,000',
    deliveryTime: '6-10 weeks',
    tags: ['Blockchain', 'Smart Contracts', 'DeFi', 'NFTs', 'Web3', 'Security'],
    author: {
      name: 'Zion Blockchain',
      id: 'zion-blockchain',
      verified: true
    },
    images: ['https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format'],
    rating: 4.9,
    reviewCount: 134,
    aiScore: 96,
    featured: true,
    popular: true,
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      website: 'https://ziontechgroup.com'
    }
  },

  // Advanced Cybersecurity Services
  {
    id: 'zero-trust-security',
    title: 'Zero Trust Security Architecture',
    description: 'Implement comprehensive zero trust security framework for modern enterprise environments.',
    category: 'cybersecurity',
    subcategory: 'Zero Trust',
    price: 12000,
    currency: 'USD',
    pricingModel: 'project-based',
    features: [
      'Identity and access management',
      'Network segmentation',
      'Continuous monitoring',
      'Threat detection and response',
      'Compliance frameworks',
      'Security training and awareness'
    ],
    benefits: [
      'Reduce attack surface by 80%',
      'Improve compliance posture',
      'Enhanced threat detection',
      'Simplified security management',
      'Better user experience'
    ],
    marketPrice: '$8,000 - $30,000',
    deliveryTime: '8-12 weeks',
    tags: ['Zero Trust', 'Cybersecurity', 'IAM', 'Network Security', 'Compliance'],
    author: {
      name: 'Zion Cybersecurity',
      id: 'zion-cybersecurity',
      verified: true
    },
    images: ['https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format'],
    rating: 4.8,
    reviewCount: 89,
    aiScore: 93,
    featured: true,
    popular: false,
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      website: 'https://ziontechgroup.com'
    }
  },

  // Advanced Cloud & DevOps Services
  {
    id: 'multi-cloud-strategy',
    title: 'Multi-Cloud Strategy & Management',
    description: 'Design and implement multi-cloud architectures for optimal performance, cost, and reliability.',
    category: 'cloud-services',
    subcategory: 'Multi-Cloud',
    price: 15000,
    currency: 'USD',
    pricingModel: 'project-based',
    features: [
      'Multi-cloud architecture design',
      'Cost optimization strategies',
      'Performance monitoring',
      'Disaster recovery planning',
      'Security and compliance',
      'Ongoing management and optimization'
    ],
    benefits: [
      'Avoid vendor lock-in',
      'Optimize costs across providers',
      'Improve reliability and uptime',
      'Enhanced security posture',
      'Flexible scaling options'
    ],
    marketPrice: '$10,000 - $40,000',
    deliveryTime: '10-16 weeks',
    tags: ['Multi-Cloud', 'Cloud Architecture', 'DevOps', 'Cost Optimization', 'Disaster Recovery'],
    author: {
      name: 'Zion Cloud Solutions',
      id: 'zion-cloud-solutions',
      verified: true
    },
    images: ['https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format'],
    rating: 4.7,
    reviewCount: 67,
    aiScore: 91,
    featured: false,
    popular: true,
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      website: 'https://ziontechgroup.com'
    }
  },

  // Advanced Data & Analytics Services
  {
    id: 'real-time-analytics',
    title: 'Real-Time Data Analytics Platform',
    description: 'Build real-time analytics platforms for instant insights and decision-making capabilities.',
    category: 'data-services',
    subcategory: 'Real-Time Analytics',
    price: 18000,
    currency: 'USD',
    pricingModel: 'project-based',
    features: [
      'Real-time data processing',
      'Interactive dashboards',
      'Predictive analytics',
      'Data visualization',
      'API integration',
      'Scalable infrastructure'
    ],
    benefits: [
      'Instant business insights',
      'Improved decision-making',
      'Enhanced customer experience',
      'Operational efficiency gains',
      'Competitive advantage'
    ],
    marketPrice: '$12,000 - $50,000',
    deliveryTime: '12-18 weeks',
    tags: ['Real-Time Analytics', 'Big Data', 'Data Visualization', 'Predictive Analytics', 'Business Intelligence'],
    author: {
      name: 'Zion Data Analytics',
      id: 'zion-data-analytics',
      verified: true
    },
    images: ['https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format'],
    rating: 4.9,
    reviewCount: 112,
    aiScore: 95,
    featured: true,
    popular: true,
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      website: 'https://ziontechgroup.com'
    }
  },

  // Advanced IoT & Edge Computing Services
  {
    id: 'iot-edge-computing',
    title: 'IoT Edge Computing Solutions',
    description: 'Deploy intelligent edge computing solutions for IoT devices with real-time processing capabilities.',
    category: 'iot-services',
    subcategory: 'Edge Computing',
    price: 22000,
    currency: 'USD',
    pricingModel: 'project-based',
    features: [
      'Edge computing infrastructure',
      'IoT device management',
      'Real-time data processing',
      'Local AI inference',
      'Security and encryption',
      'Scalable deployment'
    ],
    benefits: [
      'Reduced latency and bandwidth costs',
      'Enhanced privacy and security',
      'Offline operation capabilities',
      'Improved reliability',
      'Cost-effective scaling'
    ],
    marketPrice: '$15,000 - $60,000',
    deliveryTime: '14-20 weeks',
    tags: ['IoT', 'Edge Computing', 'Real-Time Processing', 'AI Inference', 'Device Management'],
    author: {
      name: 'Zion IoT Solutions',
      id: 'zion-iot-solutions',
      verified: true
    },
    images: ['https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&auto=format'],
    rating: 4.8,
    reviewCount: 78,
    aiScore: 94,
    featured: true,
    popular: false,
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      website: 'https://ziontechgroup.com'
    }
  },

  // NEW INNOVATIVE SERVICES
  {
    id: 'quantum-computing-simulation',
    title: 'Quantum Computing Simulation Platform',
    description: 'Advanced quantum computing simulation and optimization platform for research and development with hybrid quantum-classical computing capabilities.',
    category: 'quantum-computing',
    subcategory: 'Simulation',
    price: 50000,
    currency: 'USD',
    pricingModel: 'project-based',
    features: [
      'Quantum algorithm simulation',
      'Hybrid quantum-classical computing',
      'Optimization problem solving',
      'Research collaboration tools',
      'Performance benchmarking',
      'API for researchers',
      'Educational modules'
    ],
    benefits: [
      'Solve problems 1000x faster than classical computers',
      'Unlock new computational possibilities',
      'Future-proof technology investment',
      'Competitive advantage in research',
      'Train quantum computing talent'
    ],
    marketPrice: '$30,000 - $100,000',
    deliveryTime: '20-24 weeks',
    tags: ['Quantum Computing', 'Simulation', 'Research', 'Optimization', 'Advanced Tech'],
    author: {
      name: 'Zion Quantum Solutions',
      id: 'zion-quantum-solutions',
      verified: true
    },
    images: ['https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format'],
    rating: 4.9,
    reviewCount: 23,
    aiScore: 98,
    featured: true,
    popular: true,
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'metaverse-enterprise-platform',
    title: 'Enterprise Metaverse Platform',
    description: 'Complete metaverse solution for businesses with virtual offices, training environments, and immersive customer experiences.',
    category: 'metaverse-vr',
    subcategory: 'Enterprise Platform',
    price: 8000,
    currency: 'USD',
    pricingModel: 'monthly',
    features: [
      '3D virtual environments',
      'VR/AR integration',
      'Collaborative workspaces',
      'Custom branding',
      'Analytics dashboard',
      'Multi-platform support',
      'Avatar customization'
    ],
    benefits: [
      'Reduce travel costs by 60%',
      'Improve team collaboration',
      'Enhanced customer engagement',
      'Future-ready business platform',
      'Virtual training and onboarding'
    ],
    marketPrice: '$5,000 - $15,000/month',
    deliveryTime: '6-8 weeks',
    tags: ['Metaverse', 'VR/AR', 'Virtual Collaboration', 'Immersive Tech', 'Future of Work'],
    author: {
      name: 'Zion Metaverse Solutions',
      id: 'zion-metaverse-solutions',
      verified: true
    },
    images: ['https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format'],
    rating: 4.8,
    reviewCount: 45,
    aiScore: 95,
    featured: true,
    popular: false,
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'green-tech-sustainability-platform',
    title: 'Green Technology Sustainability Platform',
    description: 'Comprehensive sustainability management platform for tracking carbon footprint, energy optimization, and environmental compliance.',
    category: 'green-tech',
    subcategory: 'Sustainability Management',
    price: 6000,
    currency: 'USD',
    pricingModel: 'monthly',
    features: [
      'Carbon footprint tracking',
      'Energy consumption monitoring',
      'Sustainability reporting',
      'Compliance management',
      'Predictive analytics',
      'Mobile app access',
      'Real-time monitoring'
    ],
    benefits: [
      'Reduce energy costs by 30%',
      'Achieve sustainability goals',
      'Compliance with regulations',
      'Improve brand reputation',
      'Data-driven environmental decisions'
    ],
    marketPrice: '$4,000 - $10,000/month',
    deliveryTime: '4-6 weeks',
    tags: ['Green Tech', 'Sustainability', 'Energy Management', 'Carbon Reduction', 'Compliance'],
    author: {
      name: 'Zion Green Solutions',
      id: 'zion-green-solutions',
      verified: true
    },
    images: ['https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format'],
    rating: 4.7,
    reviewCount: 78,
    aiScore: 93,
    featured: true,
    popular: false,
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'ai-legal-document-review',
    title: 'AI Legal Document Review & Analysis',
    description: 'Automated legal document analysis and review using natural language processing and machine learning for law firms and legal departments.',
    category: 'ai-services',
    subcategory: 'Legal Tech',
    price: 18000,
    currency: 'USD',
    pricingModel: 'project-based',
    features: [
      'Automated contract analysis',
      'Risk assessment scoring',
      'Compliance checking',
      'Document comparison',
      'Legal research assistance',
      'Custom training for law firms',
      'HIPAA and GDPR compliance'
    ],
    benefits: [
      'Reduce document review time by 80%',
      'Improve accuracy and consistency',
      'Identify potential risks faster',
      'Lower legal costs',
      '24/7 document processing'
    ],
    marketPrice: '$15,000 - $40,000',
    deliveryTime: '10-12 weeks',
    tags: ['AI', 'Legal Tech', 'Document Review', 'NLP', 'Compliance', 'Automation'],
    author: {
      name: 'Zion Legal AI',
      id: 'zion-legal-ai',
      verified: true
    },
    images: ['https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format'],
    rating: 4.8,
    reviewCount: 34,
    aiScore: 94,
    featured: true,
    popular: false,
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'fintech-payment-gateway',
    title: 'FinTech Payment Gateway & Processing',
    description: 'Secure and scalable payment processing platform with multi-currency support, fraud detection, and comprehensive compliance.',
    category: 'fintech',
    subcategory: 'Payment Processing',
    price: 30000,
    currency: 'USD',
    pricingModel: 'project-based',
    features: [
      'Multi-currency support',
      'Advanced fraud detection',
      'PCI DSS compliance',
      'Real-time analytics',
      'Mobile SDK',
      'Webhook integration',
      'Recurring billing support'
    ],
    benefits: [
      'Secure payment processing',
      'Global market access',
      'Reduce fraud losses',
      'Comprehensive compliance',
      'Scalable payment infrastructure'
    ],
    marketPrice: '$25,000 - $60,000',
    deliveryTime: '14-18 weeks',
    tags: ['FinTech', 'Payment Processing', 'Security', 'Multi-currency', 'Fraud Detection'],
    author: {
      name: 'Zion FinTech Solutions',
      id: 'zion-fintech-solutions',
      verified: true
    },
    images: ['https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format'],
    rating: 4.8,
    reviewCount: 67,
    aiScore: 96,
    featured: true,
    popular: true,
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'ai-healthcare-diagnosis',
    title: 'AI Healthcare Diagnosis Assistant',
    description: 'AI-powered medical diagnosis support system with image analysis, symptom assessment, and telemedicine integration.',
    category: 'ai-services',
    subcategory: 'Healthcare AI',
    price: 40000,
    currency: 'USD',
    pricingModel: 'project-based',
    features: [
      'Medical image analysis',
      'Symptom assessment',
      'Disease prediction models',
      'Integration with EHR systems',
      'HIPAA compliance',
      'Mobile app for doctors',
      'Telemedicine support'
    ],
    benefits: [
      'Improve diagnostic accuracy',
      'Reduce diagnosis time',
      'Support remote healthcare',
      'Assist medical professionals',
      '24/7 diagnostic support'
    ],
    marketPrice: '$35,000 - $80,000',
    deliveryTime: '16-20 weeks',
    tags: ['AI', 'Healthcare', 'Medical Diagnosis', 'Image Analysis', 'Telemedicine'],
    author: {
      name: 'Zion Healthcare AI',
      id: 'zion-healthcare-ai',
      verified: true
    },
    images: ['https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format'],
    rating: 4.9,
    reviewCount: 56,
    aiScore: 97,
    featured: true,
    popular: true,
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'blockchain-supply-chain',
    title: 'Blockchain Supply Chain Management',
    description: 'Transparent and secure supply chain management using blockchain technology for traceability, compliance, and fraud prevention.',
    category: 'blockchain',
    subcategory: 'Supply Chain',
    price: 35000,
    currency: 'USD',
    pricingModel: 'project-based',
    features: [
      'End-to-end traceability',
      'Smart contract automation',
      'Real-time monitoring',
      'Compliance reporting',
      'Integration with ERP systems',
      'Mobile tracking app',
      'Fraud detection'
    ],
    benefits: [
      'Complete supply chain transparency',
      'Reduce fraud and counterfeiting',
      'Automate compliance processes',
      'Improve supplier relationships',
      'Real-time visibility'
    ],
    marketPrice: '$25,000 - $70,000',
    deliveryTime: '16-20 weeks',
    tags: ['Blockchain', 'Supply Chain', 'Traceability', 'Compliance', 'Transparency'],
    author: {
      name: 'Zion Blockchain Solutions',
      id: 'zion-blockchain-solutions',
      verified: true
    },
    images: ['https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format'],
    rating: 4.8,
    reviewCount: 89,
    aiScore: 94,
    featured: true,
    popular: false,
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'ai-marketing-automation',
    title: 'AI Marketing Automation Suite',
    description: 'Intelligent marketing automation with personalized campaigns, predictive analytics, and ROI optimization for modern businesses.',
    category: 'ai-services',
    subcategory: 'Marketing AI',
    price: 15000,
    currency: 'USD',
    pricingModel: 'monthly',
    features: [
      'Personalized campaign creation',
      'Predictive customer behavior',
      'A/B testing automation',
      'ROI tracking and optimization',
      'Multi-channel integration',
      'Real-time performance analytics',
      'Customer segmentation'
    ],
    benefits: [
      'Increase marketing ROI by 40%',
      'Personalize customer experiences',
      'Automate repetitive tasks',
      'Data-driven decision making',
      'Scale marketing efforts efficiently'
    ],
    marketPrice: '$12,000 - $25,000/month',
    deliveryTime: '10-12 weeks',
    tags: ['AI', 'Marketing Automation', 'Personalization', 'Predictive Analytics', 'ROI Optimization'],
    author: {
      name: 'Zion Marketing AI',
      id: 'zion-marketing-ai',
      verified: true
    },
    images: ['https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format'],
    rating: 4.7,
    reviewCount: 123,
    aiScore: 93,
    featured: true,
    popular: true,
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'ai-robotics-automation',
    title: 'AI Robotics & Industrial Automation',
    description: 'Intelligent robotics solutions with AI-powered automation for manufacturing, logistics, and industrial processes.',
    category: 'ai-services',
    subcategory: 'Robotics & Automation',
    price: 75000,
    currency: 'USD',
    pricingModel: 'project-based',
    features: [
      'AI-powered robot control systems',
      'Computer vision integration',
      'Predictive maintenance',
      'Safety monitoring and compliance',
      'Integration with existing systems',
      'Remote monitoring and control',
      'Custom robot programming'
    ],
    benefits: [
      'Increase production efficiency by 60%',
      'Reduce operational costs by 40%',
      'Improve workplace safety',
      '24/7 operation capability',
      'Scalable automation solutions'
    ],
    marketPrice: '$50,000 - $150,000',
    deliveryTime: '20-28 weeks',
    tags: ['AI Robotics', 'Industrial Automation', 'Computer Vision', 'Manufacturing', 'Safety'],
    author: {
      name: 'Zion Robotics Solutions',
      id: 'zion-robotics-solutions',
      verified: true
    },
    images: ['https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format'],
    rating: 4.9,
    reviewCount: 34,
    aiScore: 96,
    featured: true,
    popular: false,
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'space-tech-satellite-solutions',
    title: 'Space Technology & Satellite Solutions',
    description: 'Advanced space technology solutions including satellite communication, space data analytics, and orbital optimization.',
    category: 'space-tech',
    subcategory: 'Satellite Solutions',
    price: 200000,
    currency: 'USD',
    pricingModel: 'project-based',
    features: [
      'Satellite communication systems',
      'Orbital optimization algorithms',
      'Space data analytics',
      'Ground station integration',
      'Mission planning software',
      'Real-time monitoring',
      'Regulatory compliance'
    ],
    benefits: [
      'Global communication coverage',
      'Advanced space data insights',
      'Optimized satellite operations',
      'Reduced operational costs',
      'Future-ready space infrastructure'
    ],
    marketPrice: '$150,000 - $500,000',
    deliveryTime: '32-40 weeks',
    tags: ['Space Technology', 'Satellite Solutions', 'Orbital Optimization', 'Space Data', 'Communication'],
    author: {
      name: 'Zion Space Solutions',
      id: 'zion-space-solutions',
      verified: true
    },
    images: ['https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format'],
    rating: 4.9,
    reviewCount: 12,
    aiScore: 99,
    featured: true,
    popular: true,
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'biotech-ai-drug-discovery',
    title: 'Biotech AI Drug Discovery Platform',
    description: 'AI-powered drug discovery platform using machine learning for pharmaceutical research and development.',
    category: 'biotech-ai',
    subcategory: 'Drug Discovery',
    price: 120000,
    currency: 'USD',
    pricingModel: 'project-based',
    features: [
      'AI molecular modeling',
      'Drug target identification',
      'Clinical trial optimization',
      'Regulatory compliance tools',
      'Collaborative research platform',
      'Data security and privacy',
      'Integration with lab systems'
    ],
    benefits: [
      'Accelerate drug discovery by 10x',
      'Reduce R&D costs significantly',
      'Improve success rates',
      'Faster time to market',
      'Enhanced research collaboration'
    ],
    marketPrice: '$100,000 - $300,000',
    deliveryTime: '24-32 weeks',
    tags: ['Biotech', 'AI Drug Discovery', 'Pharmaceuticals', 'Molecular Modeling', 'Clinical Trials'],
    author: {
      name: 'Zion Biotech AI',
      id: 'zion-biotech-ai',
      verified: true
    },
    images: ['https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format'],
    rating: 4.9,
    reviewCount: 28,
    aiScore: 98,
    featured: true,
    popular: true,
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'autonomous-vehicles-platform',
    title: 'Autonomous Vehicles & Transportation Platform',
    description: 'Complete autonomous vehicle solution with AI navigation, safety systems, and fleet management capabilities.',
    category: 'autonomous-tech',
    subcategory: 'Vehicle Platform',
    price: 180000,
    currency: 'USD',
    pricingModel: 'project-based',
    features: [
      'AI navigation and pathfinding',
      'Advanced safety systems',
      'Fleet management platform',
      'Real-time monitoring',
      'Regulatory compliance',
      'Integration with existing infrastructure',
      'Custom vehicle programming'
    ],
    benefits: [
      'Reduce transportation costs by 50%',
      'Improve safety and efficiency',
      '24/7 operation capability',
      'Scalable fleet management',
      'Future-ready transportation'
    ],
    marketPrice: '$150,000 - $400,000',
    deliveryTime: '28-36 weeks',
    tags: ['Autonomous Vehicles', 'AI Navigation', 'Fleet Management', 'Safety Systems', 'Transportation'],
    author: {
      name: 'Zion Autonomous Solutions',
      id: 'zion-autonomous-solutions',
      verified: true
    },
    images: ['https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format'],
    rating: 4.8,
    reviewCount: 45,
    aiScore: 95,
    featured: true,
    popular: false,
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'ai-cybersecurity-zero-trust',
    title: 'AI-Powered Zero Trust Cybersecurity',
    description: 'Next-generation cybersecurity platform implementing zero trust architecture with AI-driven threat detection and response.',
    category: 'cybersecurity',
    subcategory: 'Zero Trust Security',
    price: 45000,
    currency: 'USD',
    pricingModel: 'monthly',
    features: [
      'Zero trust architecture',
      'AI threat detection',
      'Identity verification',
      'Continuous monitoring',
      'Automated response',
      'Compliance reporting',
      'Multi-cloud support'
    ],
    benefits: [
      'Eliminate security breaches',
      'Reduce security overhead',
      'Compliance with regulations',
      'Real-time threat response',
      'Scalable security solution'
    ],
    marketPrice: '$35,000 - $80,000/month',
    deliveryTime: '12-16 weeks',
    tags: ['Zero Trust', 'AI Security', 'Cybersecurity', 'Identity Management', 'Compliance'],
    author: {
      name: 'Zion Zero Trust Security',
      id: 'zion-zero-trust-security',
      verified: true
    },
    images: ['https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format'],
    rating: 4.9,
    reviewCount: 67,
    aiScore: 97,
    featured: true,
    popular: true,
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      website: 'https://ziontechgroup.com'
    }
  }
];

// Helper functions
export const getServiceStats = () => {
  const totalServices = MICRO_SERVICES.length;
  const featuredCount = getFeaturedServices().length;
  const popularCount = getPopularServices().length;
  const totalValue = getTotalServiceValue();
  const averagePrice = getAverageServicePrice();
  const highAIScoreCount = getHighAIScoreServices().length;
  const topRatedCount = getTopRatedServices().length;

  return {
    totalServices,
    featuredCount,
    popularCount,
    totalValue,
    averagePrice,
    highAIScoreCount,
    topRatedCount
  };
};

export const getServicesBySubcategory = (subcategory: string): MicroService[] => {
  return MICRO_SERVICES.filter(service => service.subcategory === subcategory);
};

export const getServicesByAuthor = (authorId: string): MicroService[] => {
  return MICRO_SERVICES.filter(service => service.author.id === authorId);
};

export const getServicesByTags = (tags: string[]): MicroService[] => {
  return MICRO_SERVICES.filter(service => 
    tags.some(tag => service.tags.includes(tag))
  );
};

export const getServicesByRating = (minRating: number): MicroService[] => {
  return MICRO_SERVICES.filter(service => service.rating >= minRating);
};

export const getServicesByReviewCount = (minReviews: number): MicroService[] => {
  return MICRO_SERVICES.filter(service => service.reviewCount >= minReviews);
};

export const getServicesByPricingModel = (model: 'one-time' | 'monthly' | 'hourly' | 'project-based'): MicroService[] => {
  return MICRO_SERVICES.filter(service => service.pricingModel === model);
};

export const getServicesByDeliveryTime = (maxWeeks: number): MicroService[] => {
  return MICRO_SERVICES.filter(service => {
    const weeks = parseInt(service.deliveryTime.split('-')[0]);
    return weeks <= maxWeeks;
  });
};

export const getHighAIScoreServices = (minScore: number = 90): MicroService[] => {
  return MICRO_SERVICES.filter(service => service.aiScore >= minScore);
};

export const getTopRatedServices = (minRating: number = 4.5): MicroService[] => {
  return MICRO_SERVICES.filter(service => service.rating >= minRating);
};

export const getServicesByPriceRange = (minPrice: number, maxPrice: number): MicroService[] => {
  return MICRO_SERVICES.filter(service => 
    service.price >= minPrice && service.price <= maxPrice
  );
};

export const getServicesByCategory = (categoryId: string): MicroService[] => {
  return MICRO_SERVICES.filter(service => service.category === categoryId);
};

export const getFeaturedServices = (): MicroService[] => {
  return MICRO_SERVICES.filter(service => service.featured);
};

export const getPopularServices = (): MicroService[] => {
  return MICRO_SERVICES.filter(service => service.popular);
};

export const searchServices = (query: string): MicroService[] => {
  const lowercaseQuery = query.toLowerCase();
  return MICRO_SERVICES.filter(service => 
    service.title.toLowerCase().includes(lowercaseQuery) ||
    service.description.toLowerCase().includes(lowercaseQuery) ||
    service.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};

export const getTotalServiceValue = (): number => {
  return MICRO_SERVICES.reduce((total, service) => total + service.price, 0);
};

export const getAverageServicePrice = (): number => {
  const total = getTotalServiceValue();
  return total / MICRO_SERVICES.length;
};

export const getCategoryStats = () => {
  const stats: Record<string, { count: number; totalValue: number; avgRating: number; avgAIScore: number }> = {};
  
  SERVICE_CATEGORIES.forEach(category => {
    const services = getServicesByCategory(category.id);
    if (services.length > 0) {
      const totalValue = services.reduce((sum, service) => sum + service.price, 0);
      const avgRating = services.reduce((sum, service) => sum + service.rating, 0) / services.length;
      const avgAIScore = services.reduce((sum, service) => sum + service.aiScore, 0) / services.length;
      
      stats[category.id] = {
        count: services.length,
        totalValue,
        avgRating: Math.round(avgRating * 100) / 100,
        avgAIScore: Math.round(avgAIScore * 100) / 100
      };
    }
  });
  
  return stats;
};

export const getTrendingServices = (): MicroService[] => {
  // Services with high ratings, many reviews, and recent activity
  return MICRO_SERVICES
    .filter(service => service.rating >= 4.7 && service.reviewCount >= 50)
    .sort((a, b) => (b.rating * b.reviewCount) - (a.rating * a.reviewCount))
    .slice(0, 10);
};

export const getBudgetFriendlyServices = (maxPrice: number = 5000): MicroService[] => {
  return getServicesByPriceRange(0, maxPrice)
    .sort((a, b) => a.price - b.price);
};

export const getEnterpriseServices = (): MicroService[] => {
  // High-value services suitable for enterprise clients
  return MICRO_SERVICES
    .filter(service => service.price >= 10000 && service.rating >= 4.5)
    .sort((a, b) => b.price - a.price);
};

// Compatibility exports for backward compatibility
export const COMPREHENSIVE_SERVICES = MICRO_SERVICES;

export const CONTACT_INFO = {
  phone: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com',
  mobile: '+1 302 464 0950',
  businessHours: 'Monday - Friday: 9:00 AM - 6:00 PM EST'
};

export const SERVICE_PRICING_TIERS = [
  {
    name: 'Starter',
    title: 'Starter',
    price: '$999',
    priceValue: 999,
    features: ['Basic setup', 'Email support', 'Standard features'],
    popular: false,
    billingCycle: 'monthly'
  },
  {
    name: 'Professional',
    title: 'Professional',
    price: '$2,999',
    priceValue: 2999,
    features: ['Advanced features', 'Priority support', 'Custom integrations'],
    popular: true,
    billingCycle: 'monthly'
  },
  {
    name: 'Enterprise',
    title: 'Enterprise',
    price: '$9,999',
    priceValue: 9999,
    features: ['Full customization', '24/7 support', 'Dedicated team'],
    popular: false,
    billingCycle: 'monthly'
  }
];

export const SERVICE_GUARANTEES = [
  {
    title: 'Quality Assurance',
    description: '100% satisfaction guarantee or your money back',
    icon: '✅'
  },
  {
    title: 'On-Time Delivery',
    description: 'We deliver on schedule or you don\'t pay',
    icon: '⏰'
  },
  {
    title: 'Ongoing Support',
    description: 'Lifetime support for all our solutions',
    icon: '🔄'
  }
];

// Update category counts
export const updateCategoryCounts = () => {
  SERVICE_CATEGORIES.forEach(category => {
    category.count = MICRO_SERVICES.filter(s => s.category === category.id).length;
  });
};

// Call the function to update counts
updateCategoryCounts();