export interface ComprehensiveService {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  price: number;
  currency: string;
  pricingModel: 'one-time' | 'monthly' | 'yearly' | 'per-user' | 'per-project';
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
}

export const COMPREHENSIVE_SERVICES: ComprehensiveService[] = [
  // AI & Machine Learning Services
  {
    id: "ai-strategy-consulting",
    title: "AI Strategy & Implementation Consulting",
    description: "Comprehensive AI strategy development and implementation services to transform your business operations and drive competitive advantage through intelligent automation and data-driven decision making.",
    category: "AI & Machine Learning",
    subcategory: "Strategy & Consulting",
    price: 15000,
    currency: "$",
    pricingModel: "per-project",
    features: [
      "AI readiness assessment and gap analysis",
      "Custom AI strategy roadmap development",
      "Technology stack evaluation and selection",
      "Implementation planning and project management",
      "Change management and training programs",
      "ROI analysis and success metrics definition"
    ],
    benefits: [
      "Accelerated digital transformation",
      "Improved operational efficiency",
      "Enhanced customer experience",
      "Data-driven decision making",
      "Competitive market positioning",
      "Future-proof technology foundation"
    ],
    useCases: [
      "Enterprise digital transformation",
      "Process automation initiatives",
      "Customer experience optimization",
      "Predictive analytics implementation",
      "Intelligent document processing",
      "AI-powered recommendation systems"
    ],
    targetAudience: [
      "Enterprise organizations",
      "Mid-market companies",
      "Technology companies",
      "Financial services",
      "Healthcare organizations",
      "Manufacturing companies"
    ],
    tags: ["AI Strategy", "Digital Transformation", "Consulting", "Implementation", "ROI Analysis"],
    estimatedDelivery: "8-12 weeks",
    supportLevel: "premium",
    marketPrice: "$15,000 - $50,000",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "ai-model-development",
    title: "Custom AI Model Development",
    description: "End-to-end development of custom machine learning models tailored to your specific business needs, from data preparation to deployment and maintenance.",
    category: "AI & Machine Learning",
    subcategory: "Development",
    price: 25000,
    currency: "$",
    pricingModel: "per-project",
    features: [
      "Custom algorithm development",
      "Data preprocessing and feature engineering",
      "Model training and optimization",
      "Performance testing and validation",
      "API development and integration",
      "Model monitoring and maintenance"
    ],
    benefits: [
      "Tailored solutions for specific use cases",
      "Higher accuracy than off-the-shelf models",
      "Full ownership of intellectual property",
      "Scalable and maintainable architecture",
      "Continuous improvement capabilities",
      "Competitive differentiation"
    ],
    useCases: [
      "Predictive analytics",
      "Natural language processing",
      "Computer vision applications",
      "Recommendation systems",
      "Fraud detection",
      "Process optimization"
    ],
    targetAudience: [
      "Technology companies",
      "Financial services",
      "Healthcare organizations",
      "E-commerce platforms",
      "Manufacturing companies",
      "Research institutions"
    ],
    tags: ["Custom AI", "Machine Learning", "Model Development", "API Integration", "Performance Optimization"],
    estimatedDelivery: "12-20 weeks",
    supportLevel: "premium",
    marketPrice: "$25,000 - $100,000",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "ai-automation-platform",
    title: "AI-Powered Business Process Automation",
    description: "Intelligent automation platform that combines RPA, AI, and machine learning to streamline complex business processes and eliminate manual tasks.",
    category: "AI & Machine Learning",
    subcategory: "Automation",
    price: 8000,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Intelligent document processing",
      "Workflow automation",
      "Process mining and optimization",
      "Natural language processing",
      "Predictive analytics",
      "Integration with existing systems"
    ],
    benefits: [
      "70% reduction in manual processing time",
      "Improved accuracy and compliance",
      "Scalable operations",
      "Cost savings through efficiency gains",
      "Better employee satisfaction",
      "Real-time process insights"
    ],
    useCases: [
      "Invoice processing",
      "Customer service automation",
      "HR process automation",
      "Supply chain optimization",
      "Quality control automation",
      "Compliance monitoring"
    ],
    targetAudience: [
      "Medium to large enterprises",
      "Financial services",
      "Healthcare organizations",
      "Manufacturing companies",
      "Retail organizations",
      "Government agencies"
    ],
    tags: ["Process Automation", "RPA", "AI Integration", "Workflow Optimization", "Document Processing"],
    estimatedDelivery: "4-8 weeks",
    supportLevel: "standard",
    marketPrice: "$8,000 - $25,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Cybersecurity Services
  {
    id: "cybersecurity-audit",
    title: "Comprehensive Cybersecurity Audit & Assessment",
    description: "Thorough security assessment including penetration testing, vulnerability scanning, compliance review, and actionable recommendations to strengthen your security posture.",
    category: "Cybersecurity",
    subcategory: "Audit & Assessment",
    price: 12000,
    currency: "$",
    pricingModel: "one-time",
    features: [
      "Penetration testing (external & internal)",
      "Vulnerability assessment",
      "Security architecture review",
      "Compliance gap analysis",
      "Social engineering testing",
      "Detailed remediation roadmap"
    ],
    benefits: [
      "Identify security vulnerabilities",
      "Meet compliance requirements",
      "Reduce risk exposure",
      "Improve security awareness",
      "Protect customer data",
      "Maintain business continuity"
    ],
    useCases: [
      "Regulatory compliance",
      "Security posture assessment",
      "Pre-acquisition due diligence",
      "Annual security reviews",
      "Incident response preparation",
      "Security program development"
    ],
    targetAudience: [
      "Financial services",
      "Healthcare organizations",
      "E-commerce platforms",
      "Technology companies",
      "Government agencies",
      "Educational institutions"
    ],
    tags: ["Security Audit", "Penetration Testing", "Compliance", "Vulnerability Assessment", "Risk Management"],
    estimatedDelivery: "3-6 weeks",
    supportLevel: "premium",
    marketPrice: "$12,000 - $35,000",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Cloud Computing Services
  {
    id: "cloud-migration",
    title: "Cloud Migration & Optimization",
    description: "Seamless migration of your infrastructure to the cloud with optimization strategies to maximize performance and minimize costs.",
    category: "Cloud Computing",
    subcategory: "Migration",
    price: 18000,
    currency: "$",
    pricingModel: "per-project",
    features: [
      "Cloud readiness assessment",
      "Migration strategy planning",
      "Data migration and synchronization",
      "Application refactoring",
      "Performance optimization",
      "Cost optimization strategies"
    ],
    benefits: [
      "Reduced infrastructure costs",
      "Improved scalability and flexibility",
      "Enhanced disaster recovery",
      "Better performance and reliability",
      "Simplified maintenance",
      "Access to latest technologies"
    ],
    useCases: [
      "Legacy system modernization",
      "Data center consolidation",
      "Application modernization",
      "Disaster recovery setup",
      "Global expansion",
      "Cost optimization"
    ],
    targetAudience: [
      "Medium to large enterprises",
      "Technology companies",
      "Financial services",
      "Healthcare organizations",
      "Manufacturing companies",
      "Retail organizations"
    ],
    tags: ["Cloud Migration", "AWS", "Azure", "GCP", "Infrastructure", "Optimization"],
    estimatedDelivery: "8-16 weeks",
    supportLevel: "premium",
    marketPrice: "$18,000 - $75,000",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Web Development Services
  {
    id: "web-app-development",
    title: "Modern Web Application Development",
    description: "Full-stack web application development using cutting-edge technologies and best practices for optimal performance and user experience.",
    category: "Web Development",
    subcategory: "Full-Stack Development",
    price: 15000,
    currency: "$",
    pricingModel: "per-project",
    features: [
      "Responsive design and development",
      "Frontend and backend development",
      "Database design and optimization",
      "API development and integration",
      "Performance optimization",
      "Security implementation"
    ],
    benefits: [
      "Modern, scalable architecture",
      "Excellent user experience",
      "Mobile-first responsive design",
      "Fast loading times",
      "SEO optimization",
      "Easy maintenance and updates"
    ],
    useCases: [
      "E-commerce platforms",
      "Business management systems",
      "Customer portals",
      "Content management systems",
      "Web applications",
      "Progressive web apps"
    ],
    targetAudience: [
      "Startups and SMEs",
      "E-commerce businesses",
      "Service companies",
      "Educational institutions",
      "Non-profit organizations",
      "Government agencies"
    ],
    tags: ["Web Development", "React", "Node.js", "Full-Stack", "Responsive Design", "Performance"],
    estimatedDelivery: "6-12 weeks",
    supportLevel: "standard",
    marketPrice: "$15,000 - $50,000",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Mobile Development Services
  {
    id: "mobile-app-development",
    title: "Cross-Platform Mobile App Development",
    description: "Native-quality mobile applications for iOS and Android using cross-platform technologies for cost-effective development and maintenance.",
    category: "Mobile Development",
    subcategory: "Cross-Platform",
    price: 20000,
    currency: "$",
    pricingModel: "per-project",
    features: [
      "Cross-platform development (iOS & Android)",
      "Native performance optimization",
      "Offline functionality",
      "Push notifications",
      "App store deployment",
      "Maintenance and updates"
    ],
    benefits: [
      "Single codebase for multiple platforms",
      "Faster time to market",
      "Cost-effective development",
      "Consistent user experience",
      "Easy maintenance",
      "Wide device compatibility"
    ],
    useCases: [
      "Business applications",
      "E-commerce apps",
      "Social networking apps",
      "Utility applications",
      "Entertainment apps",
      "Educational apps"
    ],
    targetAudience: [
      "Startups and SMEs",
      "E-commerce businesses",
      "Service companies",
      "Educational institutions",
      "Healthcare organizations",
      "Government agencies"
    ],
    tags: ["Mobile Development", "React Native", "Flutter", "Cross-Platform", "iOS", "Android"],
    estimatedDelivery: "8-16 weeks",
    supportLevel: "standard",
    marketPrice: "$20,000 - $60,000",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Data Analytics Services
  {
    id: "data-analytics-platform",
    title: "Business Intelligence & Data Analytics Platform",
    description: "Comprehensive data analytics solution that transforms raw data into actionable insights for informed decision-making and business growth.",
    category: "Data Analytics",
    subcategory: "Business Intelligence",
    price: 10000,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Data integration and warehousing",
      "Real-time dashboards and reports",
      "Advanced analytics and forecasting",
      "Data visualization tools",
      "Custom KPI tracking",
      "Automated reporting"
    ],
    benefits: [
      "Data-driven decision making",
      "Improved operational efficiency",
      "Better customer insights",
      "Competitive advantage",
      "Cost optimization",
      "Risk mitigation"
    ],
    useCases: [
      "Sales performance analysis",
      "Customer behavior insights",
      "Operational efficiency tracking",
      "Financial reporting",
      "Market trend analysis",
      "Predictive analytics"
    ],
    targetAudience: [
      "Medium to large enterprises",
      "Financial services",
      "Retail organizations",
      "Manufacturing companies",
      "Healthcare organizations",
      "Technology companies"
    ],
    tags: ["Data Analytics", "Business Intelligence", "Dashboards", "Reporting", "Predictive Analytics"],
    estimatedDelivery: "4-8 weeks",
    supportLevel: "standard",
    marketPrice: "$10,000 - $30,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // DevOps & Automation Services
  {
    id: "devops-automation",
    title: "DevOps & CI/CD Pipeline Automation",
    description: "End-to-end DevOps implementation with automated CI/CD pipelines, infrastructure as code, and monitoring solutions for faster, more reliable software delivery.",
    category: "DevOps & Automation",
    subcategory: "CI/CD & Automation",
    price: 12000,
    currency: "$",
    pricingModel: "per-project",
    features: [
      "CI/CD pipeline setup and automation",
      "Infrastructure as code (IaC)",
      "Container orchestration",
      "Monitoring and alerting",
      "Security scanning integration",
      "Performance optimization"
    ],
    benefits: [
      "Faster software delivery",
      "Reduced deployment errors",
      "Improved collaboration",
      "Better resource utilization",
      "Enhanced security",
      "Scalable infrastructure"
    ],
    useCases: [
      "Software development teams",
      "Microservices architecture",
      "Cloud-native applications",
      "Legacy system modernization",
      "High-availability systems",
      "Multi-environment deployments"
    ],
    targetAudience: [
      "Technology companies",
      "Software development teams",
      "IT departments",
      "Startups",
      "Financial services",
      "Healthcare organizations"
    ],
    tags: ["DevOps", "CI/CD", "Automation", "Docker", "Kubernetes", "Infrastructure"],
    estimatedDelivery: "6-10 weeks",
    supportLevel: "standard",
    marketPrice: "$12,000 - $40,000",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Blockchain Services
  {
    id: "blockchain-solutions",
    title: "Blockchain & Smart Contract Development",
    description: "Custom blockchain solutions and smart contract development for decentralized applications, supply chain tracking, and secure digital transactions.",
    category: "Blockchain",
    subcategory: "Development",
    price: 30000,
    currency: "$",
    pricingModel: "per-project",
    features: [
      "Custom blockchain development",
      "Smart contract creation",
      "DApp development",
      "Token creation and management",
      "Blockchain integration",
      "Security auditing"
    ],
    benefits: [
      "Enhanced transparency and trust",
      "Reduced transaction costs",
      "Improved security",
      "Automated processes",
      "Global accessibility",
      "Immutable records"
    ],
    useCases: [
      "Supply chain tracking",
      "Digital identity management",
      "Decentralized finance (DeFi)",
      "NFT marketplaces",
      "Voting systems",
      "Asset tokenization"
    ],
    targetAudience: [
      "Financial services",
      "Supply chain companies",
      "Technology startups",
      "Government agencies",
      "Healthcare organizations",
      "Real estate companies"
    ],
    tags: ["Blockchain", "Smart Contracts", "DApps", "Ethereum", "DeFi", "NFTs"],
    estimatedDelivery: "12-24 weeks",
    supportLevel: "premium",
    marketPrice: "$30,000 - $100,000",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // IoT Solutions
  {
    id: "iot-platform",
    title: "IoT Platform & Device Management",
    description: "Comprehensive IoT platform for device management, data collection, and real-time monitoring with advanced analytics and automation capabilities.",
    category: "IoT Solutions",
    subcategory: "Platform Development",
    price: 25000,
    currency: "$",
    pricingModel: "per-project",
    features: [
      "IoT device management",
      "Real-time data collection",
      "Edge computing capabilities",
      "Advanced analytics",
      "Automation workflows",
      "Security and compliance"
    ],
    benefits: [
      "Real-time monitoring and control",
      "Predictive maintenance",
      "Operational efficiency",
      "Cost reduction",
      "Data-driven insights",
      "Scalable infrastructure"
    ],
    useCases: [
      "Smart manufacturing",
      "Connected buildings",
      "Asset tracking",
      "Environmental monitoring",
      "Predictive maintenance",
      "Smart cities"
    ],
    targetAudience: [
      "Manufacturing companies",
      "Building management",
      "Logistics companies",
      "Utility companies",
      "Government agencies",
      "Healthcare organizations"
    ],
    tags: ["IoT", "Device Management", "Edge Computing", "Real-time Analytics", "Automation"],
    estimatedDelivery: "16-24 weeks",
    supportLevel: "premium",
    marketPrice: "$25,000 - $80,000",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Digital Marketing Services
  {
    id: "digital-marketing-automation",
    title: "AI-Powered Digital Marketing Automation",
    description: "Intelligent marketing automation platform that leverages AI to optimize campaigns, personalize content, and maximize ROI across all digital channels.",
    category: "Digital Marketing",
    subcategory: "Automation",
    price: 5000,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Multi-channel campaign management",
      "AI-powered content optimization",
      "Customer segmentation and targeting",
      "Automated email marketing",
      "Social media automation",
      "ROI tracking and analytics"
    ],
    benefits: [
      "Increased conversion rates",
      "Reduced marketing costs",
      "Better customer engagement",
      "Personalized experiences",
      "Data-driven decisions",
      "Scalable campaigns"
    ],
    useCases: [
      "E-commerce marketing",
      "Lead generation campaigns",
      "Customer retention",
      "Brand awareness",
      "Product launches",
      "Event marketing"
    ],
    targetAudience: [
      "E-commerce businesses",
      "B2B companies",
      "Service providers",
      "Startups",
      "Educational institutions",
      "Non-profit organizations"
    ],
    tags: ["Digital Marketing", "Automation", "AI", "Campaign Management", "Analytics"],
    estimatedDelivery: "2-4 weeks",
    supportLevel: "standard",
    marketPrice: "$5,000 - $20,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // IT Consulting Services
  {
    id: "it-strategy-consulting",
    title: "IT Strategy & Digital Transformation Consulting",
    description: "Strategic IT consulting services to align technology with business objectives, optimize IT operations, and drive digital transformation initiatives.",
    category: "IT Consulting",
    subcategory: "Strategy",
    price: 20000,
    currency: "$",
    pricingModel: "per-project",
    features: [
      "IT strategy development",
      "Technology roadmap planning",
      "Digital transformation consulting",
      "IT governance and compliance",
      "Technology vendor selection",
      "Change management support"
    ],
    benefits: [
      "Aligned technology strategy",
      "Optimized IT operations",
      "Reduced technology costs",
      "Improved business agility",
      "Enhanced competitive advantage",
      "Future-ready infrastructure"
    ],
    useCases: [
      "Digital transformation",
      "IT modernization",
      "Technology consolidation",
      "Compliance and governance",
      "Merger and acquisition",
      "Technology assessment"
    ],
    targetAudience: [
      "Large enterprises",
      "Mid-market companies",
      "Government agencies",
      "Healthcare organizations",
      "Financial services",
      "Manufacturing companies"
    ],
    tags: ["IT Strategy", "Digital Transformation", "Consulting", "Governance", "Compliance"],
    estimatedDelivery: "8-16 weeks",
    supportLevel: "premium",
    marketPrice: "$20,000 - $75,000",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Software Testing Services
  {
    id: "software-testing-automation",
    title: "Automated Software Testing & Quality Assurance",
    description: "Comprehensive software testing services including automated testing, performance testing, and quality assurance to ensure reliable and high-quality software delivery.",
    category: "Software Testing",
    subcategory: "Automation",
    price: 8000,
    currency: "$",
    pricingModel: "per-project",
    features: [
      "Test automation framework development",
      "Performance and load testing",
      "Security testing",
      "API testing",
      "Mobile app testing",
      "Continuous testing integration"
    ],
    benefits: [
      "Faster testing cycles",
      "Improved test coverage",
      "Reduced manual effort",
      "Better quality assurance",
      "Faster time to market",
      "Cost-effective testing"
    ],
    useCases: [
      "Web application testing",
      "Mobile app testing",
      "API testing",
      "Performance testing",
      "Security testing",
      "Regression testing"
    ],
    targetAudience: [
      "Software development companies",
      "Technology startups",
      "E-commerce businesses",
      "Financial services",
      "Healthcare organizations",
      "Government agencies"
    ],
    tags: ["Software Testing", "Automation", "Quality Assurance", "Performance Testing", "Security Testing"],
    estimatedDelivery: "4-8 weeks",
    supportLevel: "standard",
    marketPrice: "$8,000 - $25,000",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  }
];

export const SERVICE_CATEGORIES = [
  {
    name: "AI & Machine Learning",
    description: "Transform your business with intelligent automation and data-driven insights",
    services: COMPREHENSIVE_SERVICES.filter(s => s.category === "AI & Machine Learning"),
    icon: "🤖",
    color: "from-purple-500 to-indigo-600"
  },
  {
    name: "Cybersecurity",
    description: "Protect your organization with comprehensive security solutions and monitoring",
    services: COMPREHENSIVE_SERVICES.filter(s => s.category === "Cybersecurity"),
    icon: "🔒",
    color: "from-red-500 to-pink-600"
  },
  {
    name: "Cloud Computing",
    description: "Modernize your infrastructure with cloud solutions and DevOps automation",
    services: COMPREHENSIVE_SERVICES.filter(s => s.category === "Cloud Computing"),
    icon: "☁️",
    color: "from-blue-500 to-cyan-600"
  },
  {
    name: "Data Analytics",
    description: "Unlock business insights with advanced analytics and data engineering",
    services: COMPREHENSIVE_SERVICES.filter(s => s.category === "Data Analytics"),
    icon: "📊",
    color: "from-green-500 to-emerald-600"
  },
  {
    name: "Digital Transformation",
    description: "Accelerate your digital journey with strategic transformation services",
    services: COMPREHENSIVE_SERVICES.filter(s => s.category === "Digital Transformation"),
    icon: "🚀",
    color: "from-orange-500 to-red-600"
  },
  {
    name: "Web Development",
    description: "Build custom applications and digital experiences for your business",
    services: COMPREHENSIVE_SERVICES.filter(s => s.category === "Web Development"),
    icon: "💻",
    color: "from-indigo-500 to-purple-600"
  },
  {
    name: "Mobile Development",
    description: "Create native-quality mobile applications for your business",
    services: COMPREHENSIVE_SERVICES.filter(s => s.category === "Mobile Development"),
    icon: "📱",
    color: "from-teal-500 to-blue-600"
  },
  {
    name: "IT Consulting",
    description: "Ensure smooth IT operations with strategic consulting services",
    services: COMPREHENSIVE_SERVICES.filter(s => s.category === "IT Consulting"),
    icon: "👔",
    color: "from-gray-500 to-slate-600"
  },
  {
    name: "Software Testing",
    description: "Ensure reliable and high-quality software delivery with comprehensive testing services",
    services: COMPREHENSIVE_SERVICES.filter(s => s.category === "Software Testing"),
    icon: "⚙️",
    color: "from-yellow-500 to-amber-600"
  },
  {
    name: "Blockchain",
    description: "Leverage decentralized technologies for innovation and transparency",
    services: COMPREHENSIVE_SERVICES.filter(s => s.category === "Blockchain"),
    icon: "⛓️",
    color: "from-yellow-500 to-amber-600"
  },
  {
    name: "IoT Solutions",
    description: "Connect and manage devices with advanced IoT platforms",
    services: COMPREHENSIVE_SERVICES.filter(s => s.category === "IoT Solutions"),
    icon: "🌐",
    color: "from-green-500 to-emerald-600"
  },
  {
    name: "Digital Marketing",
    description: "Optimize your digital marketing efforts with AI-powered automation",
    services: COMPREHENSIVE_SERVICES.filter(s => s.category === "Digital Marketing"),
    icon: "📈",
    color: "from-purple-500 to-indigo-600"
  }
];