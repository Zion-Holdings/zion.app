import { ProductListing } from "@/types/listings";

export interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "ai-services",
    name: "AI & Machine Learning",
    description: "Cutting-edge artificial intelligence and machine learning solutions",
    icon: "🤖",
    color: "from-purple-500 to-indigo-600"
  },
  {
    id: "it-services",
    name: "IT & Infrastructure",
    description: "Comprehensive IT support and infrastructure management",
    icon: "💻",
    color: "from-blue-500 to-cyan-600"
  },
  {
    id: "cloud-services",
    name: "Cloud & DevOps",
    description: "Cloud migration, management, and DevOps automation",
    icon: "☁️",
    color: "from-cyan-500 to-teal-600"
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity",
    description: "Advanced security solutions and threat protection",
    icon: "🔒",
    color: "from-red-500 to-pink-600"
  },
  {
    id: "data-services",
    name: "Data & Analytics",
    description: "Data engineering, analytics, and business intelligence",
    icon: "📊",
    color: "from-green-500 to-emerald-600"
  },
  {
    id: "web-development",
    name: "Web & Mobile Development",
    description: "Custom web and mobile application development",
    icon: "🌐",
    color: "from-orange-500 to-amber-600"
  },
  {
    id: "business-solutions",
    name: "Business Solutions",
    description: "Digital transformation and business process optimization",
    icon: "💼",
    color: "from-indigo-500 to-purple-600"
  },
  {
    id: "consulting",
    name: "IT Consulting",
    description: "Strategic technology consulting and advisory services",
    icon: "🎯",
    color: "from-teal-500 to-green-600"
  }
];

export const COMPREHENSIVE_SERVICES: ProductListing[] = [
  // AI & Machine Learning Services
  {
    id: "ai-chatbot-development",
    title: "Custom AI Chatbot Development",
    description: "Intelligent chatbot solutions powered by GPT-4, Claude, or custom models. Includes natural language processing, multi-language support, and seamless integration with your existing systems. Perfect for customer service, sales, and internal operations.",
    category: "AI & Machine Learning",
    subcategory: "Chatbots",
    price: 2999,
    currency: "$",
    tags: ["AI Chatbot", "GPT-4", "Customer Service", "NLP", "Integration"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T10:00:00.000Z",
    rating: 4.9,
    reviewCount: 47,
    aiScore: 95,
    location: "Global",
    availability: "2-3 weeks"
  },
  {
    id: "ai-content-generation",
    title: "AI Content Generation Suite",
    description: "Complete AI-powered content creation platform for blogs, social media, marketing materials, and technical documentation. Features multiple AI models, content optimization, SEO integration, and multi-language support. Includes API access and white-label options.",
    category: "AI & Machine Learning",
    subcategory: "Content Creation",
    price: 1499,
    currency: "$",
    tags: ["Content Generation", "AI Writing", "SEO", "Marketing", "Multi-language"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-20T14:30:00.000Z",
    rating: 4.8,
    reviewCount: 89,
    aiScore: 92,
    location: "Global",
    availability: "Immediate"
  },
  {
    id: "machine-learning-models",
    title: "Custom Machine Learning Model Development",
    description: "End-to-end development of custom ML models for predictive analytics, image recognition, natural language processing, and more. Includes data preparation, model training, deployment, and ongoing monitoring. Perfect for businesses looking to leverage their data for competitive advantage.",
    category: "AI & Machine Learning",
    subcategory: "Model Development",
    price: 7999,
    currency: "$",
    tags: ["Machine Learning", "Custom Models", "Predictive Analytics", "Data Science", "Deployment"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-01T09:15:00.000Z",
    rating: 4.9,
    reviewCount: 34,
    aiScore: 96,
    location: "Global",
    availability: "4-6 weeks"
  },
  {
    id: "ai-automation-workflows",
    title: "AI-Powered Workflow Automation",
    description: "Intelligent automation solutions that streamline business processes using AI. Automate repetitive tasks, document processing, data entry, and decision-making workflows. Includes process analysis, implementation, and optimization services.",
    category: "AI & Machine Learning",
    subcategory: "Automation",
    price: 4499,
    currency: "$",
    tags: ["Workflow Automation", "Process Optimization", "AI Integration", "Business Efficiency", "RPA"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-25T11:45:00.000Z",
    rating: 4.7,
    reviewCount: 56,
    aiScore: 89,
    location: "Global",
    availability: "3-4 weeks"
  },

  // IT & Infrastructure Services
  {
    id: "it-infrastructure-audit",
    title: "IT Infrastructure Assessment & Audit",
    description: "Comprehensive evaluation of your current IT infrastructure, identifying bottlenecks, security vulnerabilities, and optimization opportunities. Includes detailed reporting, recommendations, and implementation roadmap. Essential for businesses planning digital transformation.",
    category: "IT & Infrastructure",
    subcategory: "Assessment",
    price: 2499,
    currency: "$",
    tags: ["Infrastructure Audit", "IT Assessment", "Security Review", "Optimization", "Digital Transformation"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-10T08:00:00.000Z",
    rating: 4.8,
    reviewCount: 67,
    aiScore: 87,
    location: "Global",
    availability: "1-2 weeks"
  },
  {
    id: "network-security-setup",
    title: "Network Security Implementation",
    description: "Complete network security setup including firewalls, VPNs, intrusion detection systems, and security monitoring. Features advanced threat protection, 24/7 monitoring, and compliance with industry standards. Includes staff training and documentation.",
    category: "IT & Infrastructure",
    subcategory: "Security",
    price: 5999,
    currency: "$",
    tags: ["Network Security", "Firewall", "VPN", "Threat Protection", "Compliance"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-18T13:20:00.000Z",
    rating: 4.9,
    reviewCount: 42,
    aiScore: 91,
    location: "Global",
    availability: "2-3 weeks"
  },
  {
    id: "hardware-procurement",
    title: "IT Hardware Procurement & Setup",
    description: "End-to-end hardware procurement service including needs assessment, vendor selection, purchasing, installation, and configuration. Covers workstations, servers, networking equipment, and peripherals. Includes warranty management and support setup.",
    category: "IT & Infrastructure",
    subcategory: "Hardware",
    price: 1999,
    currency: "$",
    tags: ["Hardware Procurement", "Vendor Management", "Installation", "Configuration", "Support"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-22T15:10:00.000Z",
    rating: 4.7,
    reviewCount: 38,
    aiScore: 84,
    location: "Global",
    availability: "1-3 weeks"
  },

  // Cloud & DevOps Services
  {
    id: "cloud-migration-strategy",
    title: "Cloud Migration Strategy & Implementation",
    description: "Comprehensive cloud migration service covering strategy development, infrastructure design, data migration, and application deployment. Supports AWS, Azure, and Google Cloud. Includes cost optimization, security implementation, and performance monitoring.",
    category: "Cloud & DevOps",
    subcategory: "Migration",
    price: 8999,
    currency: "$",
    tags: ["Cloud Migration", "AWS", "Azure", "GCP", "Cost Optimization"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-12T10:30:00.000Z",
    rating: 4.9,
    reviewCount: 73,
    aiScore: 93,
    location: "Global",
    availability: "6-8 weeks"
  },
  {
    id: "devops-automation",
    title: "DevOps Automation & CI/CD Pipeline",
    description: "Complete DevOps automation setup including continuous integration, continuous deployment, automated testing, and infrastructure as code. Features Docker containerization, Kubernetes orchestration, and monitoring tools. Includes team training and best practices implementation.",
    category: "Cloud & DevOps",
    subcategory: "Automation",
    price: 6499,
    currency: "$",
    tags: ["DevOps", "CI/CD", "Docker", "Kubernetes", "Automation"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-28T16:45:00.000Z",
    rating: 4.8,
    reviewCount: 51,
    aiScore: 90,
    location: "Global",
    availability: "4-5 weeks"
  },
  {
    id: "cloud-cost-optimization",
    title: "Cloud Cost Optimization & Management",
    description: "Comprehensive cloud cost analysis and optimization service. Identifies cost-saving opportunities, implements resource scheduling, and provides ongoing monitoring and reporting. Includes rightsizing recommendations, reserved instance planning, and cost allocation strategies.",
    category: "Cloud & DevOps",
    subcategory: "Cost Management",
    price: 3499,
    currency: "$",
    tags: ["Cost Optimization", "Resource Management", "Cloud Monitoring", "Cost Analysis", "Savings"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-05T12:15:00.000Z",
    rating: 4.7,
    reviewCount: 29,
    aiScore: 88,
    location: "Global",
    availability: "2-3 weeks"
  },

  // Cybersecurity Services
  {
    id: "security-audit-assessment",
    title: "Comprehensive Security Audit & Assessment",
    description: "In-depth security evaluation including penetration testing, vulnerability assessment, compliance review, and risk analysis. Covers network, application, and physical security. Includes detailed reporting, remediation guidance, and ongoing security monitoring setup.",
    category: "Cybersecurity",
    subcategory: "Audit",
    price: 7499,
    currency: "$",
    tags: ["Security Audit", "Penetration Testing", "Vulnerability Assessment", "Compliance", "Risk Analysis"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T09:00:00.000Z",
    rating: 4.9,
    reviewCount: 61,
    aiScore: 94,
    location: "Global",
    availability: "3-4 weeks"
  },
  {
    id: "incident-response-planning",
    title: "Incident Response Planning & Training",
    description: "Complete incident response program development including plan creation, team training, tabletop exercises, and ongoing maintenance. Features automated threat detection, response playbooks, and communication protocols. Essential for business continuity and compliance.",
    category: "Cybersecurity",
    subcategory: "Incident Response",
    price: 5499,
    currency: "$",
    tags: ["Incident Response", "Security Training", "Threat Detection", "Business Continuity", "Compliance"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-30T14:20:00.000Z",
    rating: 4.8,
    reviewCount: 35,
    aiScore: 89,
    location: "Global",
    availability: "4-5 weeks"
  },
  {
    id: "compliance-framework",
    title: "Compliance Framework Implementation",
    description: "Implementation of industry-standard compliance frameworks including SOC 2, ISO 27001, GDPR, HIPAA, and PCI DSS. Includes gap analysis, policy development, control implementation, and audit preparation. Ensures regulatory compliance and builds customer trust.",
    category: "Cybersecurity",
    subcategory: "Compliance",
    price: 9999,
    currency: "$",
    tags: ["Compliance", "SOC 2", "ISO 27001", "GDPR", "HIPAA", "PCI DSS"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-01T11:30:00.000Z",
    rating: 4.9,
    reviewCount: 28,
    aiScore: 92,
    location: "Global",
    availability: "8-12 weeks"
  },

  // Data & Analytics Services
  {
    id: "data-warehouse-design",
    title: "Data Warehouse Design & Implementation",
    description: "End-to-end data warehouse solution including architecture design, ETL pipeline development, data modeling, and analytics dashboard creation. Features real-time data processing, advanced analytics, and business intelligence tools. Perfect for data-driven decision making.",
    category: "Data & Analytics",
    subcategory: "Data Warehouse",
    price: 12999,
    currency: "$",
    tags: ["Data Warehouse", "ETL", "Data Modeling", "Analytics", "Business Intelligence"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-20T13:45:00.000Z",
    rating: 4.9,
    reviewCount: 44,
    aiScore: 95,
    location: "Global",
    availability: "8-10 weeks"
  },
  {
    id: "predictive-analytics",
    title: "Predictive Analytics & Machine Learning",
    description: "Advanced predictive analytics solutions using machine learning algorithms for forecasting, trend analysis, and pattern recognition. Includes data preparation, model development, validation, and deployment. Applications in sales forecasting, risk assessment, and operational optimization.",
    category: "Data & Analytics",
    subcategory: "Predictive Analytics",
    price: 8999,
    currency: "$",
    tags: ["Predictive Analytics", "Machine Learning", "Forecasting", "Risk Assessment", "Pattern Recognition"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-25T15:30:00.000Z",
    rating: 4.8,
    reviewCount: 52,
    aiScore: 93,
    location: "Global",
    availability: "6-8 weeks"
  },
  {
    id: "data-visualization",
    title: "Interactive Data Visualization & Dashboards",
    description: "Custom data visualization solutions including interactive dashboards, charts, and reports. Features real-time data updates, drill-down capabilities, and mobile-responsive design. Integrates with various data sources and provides actionable insights for stakeholders.",
    category: "Data & Analytics",
    subcategory: "Visualization",
    price: 3999,
    currency: "$",
    tags: ["Data Visualization", "Interactive Dashboards", "Real-time", "Mobile-responsive", "Insights"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-03T10:15:00.000Z",
    rating: 4.7,
    reviewCount: 38,
    aiScore: 87,
    location: "Global",
    availability: "3-4 weeks"
  },

  // Web & Mobile Development Services
  {
    id: "custom-web-application",
    title: "Custom Web Application Development",
    description: "Full-stack web application development using modern technologies like React, Node.js, and cloud-native architecture. Includes responsive design, user experience optimization, and integration with existing systems. Features scalable architecture and performance optimization.",
    category: "Web & Mobile Development",
    subcategory: "Web Applications",
    price: 15999,
    currency: "$",
    tags: ["Web Development", "React", "Node.js", "Full-stack", "Responsive Design"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-18T12:00:00.000Z",
    rating: 4.9,
    reviewCount: 67,
    aiScore: 91,
    location: "Global",
    availability: "10-12 weeks"
  },
  {
    id: "mobile-app-development",
    title: "Cross-Platform Mobile App Development",
    description: "Native-quality mobile applications for iOS and Android using React Native or Flutter. Includes user interface design, backend integration, testing, and app store deployment. Features offline functionality, push notifications, and analytics integration.",
    category: "Web & Mobile Development",
    subcategory: "Mobile Apps",
    price: 19999,
    currency: "$",
    tags: ["Mobile Development", "React Native", "Flutter", "iOS", "Android", "Cross-platform"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-22T16:30:00.000Z",
    rating: 4.8,
    reviewCount: 41,
    aiScore: 89,
    location: "Global",
    availability: "12-16 weeks"
  },
  {
    id: "ecommerce-platform",
    title: "E-commerce Platform Development",
    description: "Custom e-commerce solutions with advanced features including inventory management, payment processing, order fulfillment, and customer relationship management. Features mobile-responsive design, SEO optimization, and integration with popular payment gateways.",
    category: "Web & Mobile Development",
    subcategory: "E-commerce",
    price: 24999,
    currency: "$",
    tags: ["E-commerce", "Payment Processing", "Inventory Management", "CRM", "SEO"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-01T14:45:00.000Z",
    rating: 4.9,
    reviewCount: 33,
    aiScore: 92,
    location: "Global",
    availability: "14-18 weeks"
  },

  // Business Solutions Services
  {
    id: "digital-transformation",
    title: "Digital Transformation Strategy & Implementation",
    description: "Comprehensive digital transformation program including strategy development, process optimization, technology implementation, and change management. Covers all aspects of modernizing business operations for the digital age. Includes ROI analysis and success metrics.",
    category: "Business Solutions",
    subcategory: "Digital Transformation",
    price: 29999,
    currency: "$",
    tags: ["Digital Transformation", "Process Optimization", "Change Management", "Technology Implementation", "ROI"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T11:00:00.000Z",
    rating: 4.9,
    reviewCount: 25,
    aiScore: 94,
    location: "Global",
    availability: "16-20 weeks"
  },
  {
    id: "business-process-automation",
    title: "Business Process Automation & Optimization",
    description: "End-to-end business process automation using RPA, workflow management, and AI-powered decision engines. Identifies automation opportunities, implements solutions, and provides ongoing optimization. Results in increased efficiency, reduced costs, and improved accuracy.",
    category: "Business Solutions",
    subcategory: "Process Automation",
    price: 12999,
    currency: "$",
    tags: ["Process Automation", "RPA", "Workflow Management", "Efficiency", "Cost Reduction"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-28T13:15:00.000Z",
    rating: 4.8,
    reviewCount: 38,
    aiScore: 90,
    location: "Global",
    availability: "8-10 weeks"
  },
  {
    id: "customer-experience-optimization",
    title: "Customer Experience Optimization & Analytics",
    description: "Comprehensive customer experience improvement program including journey mapping, user research, interface optimization, and analytics implementation. Features A/B testing, user feedback collection, and performance measurement. Results in increased customer satisfaction and retention.",
    category: "Business Solutions",
    subcategory: "Customer Experience",
    price: 8999,
    currency: "$",
    tags: ["Customer Experience", "User Research", "Journey Mapping", "A/B Testing", "Analytics"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-05T15:30:00.000Z",
    rating: 4.7,
    reviewCount: 31,
    aiScore: 88,
    location: "Global",
    availability: "6-8 weeks"
  },

  // IT Consulting Services
  {
    id: "technology-strategy-consulting",
    title: "Technology Strategy & Roadmap Consulting",
    description: "Strategic technology consulting including current state assessment, future state vision, technology roadmap development, and implementation planning. Covers emerging technologies, vendor selection, and investment prioritization. Essential for technology-driven business growth.",
    category: "IT Consulting",
    subcategory: "Strategy",
    price: 14999,
    currency: "$",
    tags: ["Technology Strategy", "Roadmap Planning", "Vendor Selection", "Investment Planning", "Emerging Tech"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-12T09:30:00.000Z",
    rating: 4.9,
    reviewCount: 42,
    aiScore: 93,
    location: "Global",
    availability: "4-6 weeks"
  },
  {
    id: "vendor-management",
    title: "IT Vendor Management & Procurement",
    description: "Comprehensive vendor management service including vendor evaluation, contract negotiation, performance monitoring, and relationship management. Covers software, hardware, and service providers. Includes cost optimization, SLA management, and risk mitigation strategies.",
    category: "IT Consulting",
    subcategory: "Vendor Management",
    price: 7999,
    currency: "$",
    tags: ["Vendor Management", "Contract Negotiation", "Performance Monitoring", "Cost Optimization", "SLA Management"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-25T12:45:00.000Z",
    rating: 4.8,
    reviewCount: 29,
    aiScore: 87,
    location: "Global",
    availability: "3-4 weeks"
  },
  {
    id: "disaster-recovery-planning",
    title: "Disaster Recovery & Business Continuity Planning",
    description: "Comprehensive disaster recovery and business continuity planning including risk assessment, recovery strategy development, testing procedures, and ongoing maintenance. Features automated backup systems, failover procedures, and recovery time objectives. Essential for business resilience.",
    category: "IT Consulting",
    subcategory: "Disaster Recovery",
    price: 11999,
    currency: "$",
    tags: ["Disaster Recovery", "Business Continuity", "Risk Assessment", "Backup Systems", "Failover"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-02T10:00:00.000Z",
    rating: 4.9,
    reviewCount: 23,
    aiScore: 91,
    location: "Global",
    availability: "6-8 weeks"
  }
];

// Service pricing tiers for different business sizes
export const SERVICE_PRICING_TIERS = {
  startup: {
    name: "Startup",
    description: "Perfect for small businesses and startups",
    discount: 0.15, // 15% discount
    features: ["Basic support", "Standard delivery", "Documentation included"]
  },
  smb: {
    name: "Small & Medium Business",
    description: "Ideal for growing businesses",
    discount: 0.05, // 5% discount
    features: ["Priority support", "Fast delivery", "Training included", "30-day support"]
  },
  enterprise: {
    name: "Enterprise",
    description: "For large organizations with complex needs",
    discount: 0, // No discount
    features: ["Dedicated support", "Custom delivery", "Full training", "90-day support", "Custom features"]
  }
};

// Contact information
export const CONTACT_INFO = {
  mobile: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  address: "364 E Main St STE 1008 Middletown DE 19709",
  website: "https://ziontechgroup.com",
  businessHours: "Monday - Friday: 9:00 AM - 6:00 PM EST",
  emergencySupport: "24/7 emergency IT support available"
};

// Service guarantees
export const SERVICE_GUARANTEES = [
  "100% satisfaction guarantee",
  "30-day money-back guarantee",
  "Free consultation and assessment",
  "Transparent pricing with no hidden fees",
  "Certified professionals and experts",
  "Ongoing support and maintenance",
  "Compliance with industry standards",
  "Data security and confidentiality"
];