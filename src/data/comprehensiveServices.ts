export interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
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
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'ai-services',
    name: 'AI & Machine Learning',
    description: 'Cutting-edge AI solutions and machine learning services',
    icon: '🤖',
    color: 'from-purple-500 to-indigo-600'
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    description: 'Comprehensive security solutions and protection services',
    icon: '🔒',
    color: 'from-red-500 to-pink-600'
  },
  {
    id: 'cloud-services',
    name: 'Cloud & DevOps',
    description: 'Cloud infrastructure, migration, and DevOps automation',
    icon: '☁️',
    color: 'from-blue-500 to-cyan-600'
  },
  {
    id: 'data-analytics',
    name: 'Data & Analytics',
    description: 'Data engineering, analytics, and business intelligence',
    icon: '📊',
    color: 'from-green-500 to-emerald-600'
  },
  {
    id: 'web-development',
    name: 'Web & Mobile Development',
    description: 'Full-stack development and mobile app solutions',
    icon: '💻',
    color: 'from-orange-500 to-yellow-600'
  },
  {
    id: 'it-consulting',
    name: 'IT Consulting',
    description: 'Strategic IT consulting and digital transformation',
    icon: '🎯',
    color: 'from-teal-500 to-blue-600'
  },
  {
    id: 'blockchain',
    name: 'Blockchain & Web3',
    description: 'Blockchain development and Web3 solutions',
    icon: '⛓️',
    color: 'from-indigo-500 to-purple-600'
  },
  {
    id: 'automation',
    name: 'Process Automation',
    description: 'Business process automation and RPA solutions',
    icon: '⚡',
    color: 'from-yellow-500 to-orange-600'
  },
  {
    id: 'iot-edge',
    name: 'IoT & Edge Computing',
    description: 'Internet of Things and edge computing solutions',
    icon: '🌐',
    color: 'from-emerald-500 to-teal-600'
  },
  {
    id: 'quantum-computing',
    name: 'Quantum Computing',
    description: 'Quantum computing applications and research',
    icon: '⚛️',
    color: 'from-violet-500 to-purple-600'
  },
  {
    id: 'augmented-reality',
    name: 'AR/VR & Metaverse',
    description: 'Augmented reality, virtual reality, and metaverse solutions',
    icon: '🥽',
    color: 'from-pink-500 to-rose-600'
  },
  {
    id: 'green-tech',
    name: 'Green Technology',
    description: 'Sustainable technology and environmental solutions',
    icon: '🌱',
    color: 'from-green-500 to-emerald-600'
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