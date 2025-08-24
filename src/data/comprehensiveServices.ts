import { ProductListing } from "@/types/listings";

export const COMPREHENSIVE_SERVICES: ProductListing[] = [
  // AI & Machine Learning Services
  {
    id: "ai-automation-suite",
    title: "AI Business Process Automation Suite",
    description: "Complete automation solution for repetitive business tasks using AI. Includes document processing, email automation, customer service bots, and workflow optimization. Reduces manual work by 80% and increases efficiency across departments.",
    category: "AI & Automation",
    subcategory: "Business Process Automation",
    price: 2999,
    currency: "$",
    tags: ["AI Automation", "Process Optimization", "Workflow Management", "Document Processing"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T10:00:00.000Z",
    rating: 4.9,
    reviewCount: 156,
    featured: true,
    location: "Global",
    availability: "2-3 Weeks",
    aiScore: 96
  },
  {
    id: "ai-content-generation-pro",
    title: "AI Content Generation Pro Platform",
    description: "Enterprise-grade content creation platform with AI-powered writing assistance, SEO optimization, multi-language support, and brand voice consistency. Generates blog posts, marketing copy, social media content, and product descriptions.",
    category: "AI & Content",
    subcategory: "Content Generation",
    price: 1499,
    currency: "$",
    tags: ["Content Creation", "AI Writing", "SEO Optimization", "Multi-language"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-20T14:30:00.000Z",
    rating: 4.8,
    reviewCount: 89,
    location: "Global",
    availability: "Immediate",
    aiScore: 94
  },
  {
    id: "ai-predictive-analytics",
    title: "AI-Powered Predictive Analytics Engine",
    description: "Advanced predictive analytics platform using machine learning to forecast business trends, customer behavior, and market opportunities. Includes data visualization, automated reporting, and actionable insights for strategic decision-making.",
    category: "AI & Analytics",
    subcategory: "Predictive Analytics",
    price: 3999,
    currency: "$",
    tags: ["Predictive Analytics", "Machine Learning", "Business Intelligence", "Data Visualization"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-25T09:15:00.000Z",
    rating: 4.9,
    reviewCount: 67,
    featured: true,
    location: "Global",
    availability: "3-4 Weeks",
    aiScore: 95
  },

  // Cybersecurity Services
  {
    id: "cyber-threat-intelligence",
    title: "Cyber Threat Intelligence & Response Platform",
    description: "Real-time threat detection and response system with AI-powered analysis, automated incident response, and 24/7 monitoring. Protects against advanced persistent threats, ransomware, and zero-day vulnerabilities.",
    category: "Cybersecurity",
    subcategory: "Threat Intelligence",
    price: 5999,
    currency: "$",
    tags: ["Threat Detection", "Incident Response", "AI Security", "24/7 Monitoring"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-30T11:45:00.000Z",
    rating: 4.9,
    reviewCount: 134,
    featured: true,
    location: "Global",
    availability: "2-3 Weeks",
    aiScore: 97
  },
  {
    id: "compliance-automation",
    title: "Automated Compliance & Audit Management",
    description: "Streamlined compliance management for GDPR, HIPAA, SOX, and industry-specific regulations. Automated audit trails, policy management, and compliance reporting with real-time monitoring and alerts.",
    category: "Cybersecurity",
    subcategory: "Compliance Management",
    price: 3499,
    currency: "$",
    tags: ["Compliance", "GDPR", "HIPAA", "Audit Management", "Policy Automation"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-05T16:20:00.000Z",
    rating: 4.7,
    reviewCount: 78,
    location: "Global",
    availability: "1-2 Weeks",
    aiScore: 91
  },

  // Cloud & Infrastructure Services
  {
    id: "multi-cloud-orchestration",
    title: "Multi-Cloud Orchestration & Management Platform",
    description: "Unified management platform for AWS, Azure, Google Cloud, and private clouds. Includes cost optimization, performance monitoring, security management, and automated scaling across all cloud environments.",
    category: "Cloud & Infrastructure",
    subcategory: "Multi-Cloud Management",
    price: 4499,
    currency: "$",
    tags: ["Multi-Cloud", "Cost Optimization", "Performance Monitoring", "Automated Scaling"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-10T13:10:00.000Z",
    rating: 4.8,
    reviewCount: 92,
    location: "Global",
    availability: "2-3 Weeks",
    aiScore: 93
  },
  {
    id: "edge-computing-solution",
    title: "Edge Computing & IoT Management Solution",
    description: "Distributed edge computing platform for IoT devices, real-time data processing, and low-latency applications. Includes device management, data analytics, and edge AI capabilities for industrial and smart city applications.",
    category: "Cloud & Infrastructure",
    subcategory: "Edge Computing",
    price: 5499,
    currency: "$",
    tags: ["Edge Computing", "IoT Management", "Real-time Processing", "Edge AI"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1591405351990-4726e331f141?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-15T10:30:00.000Z",
    rating: 4.9,
    reviewCount: 45,
    featured: true,
    location: "Global",
    availability: "4-5 Weeks",
    aiScore: 94
  },

  // Data & Analytics Services
  {
    id: "real-time-data-pipeline",
    title: "Real-Time Data Pipeline & Streaming Analytics",
    description: "High-performance data streaming platform for real-time analytics, event processing, and live dashboards. Processes millions of events per second with sub-millisecond latency for financial, gaming, and IoT applications.",
    category: "Data & Analytics",
    subcategory: "Real-Time Analytics",
    price: 6999,
    currency: "$",
    tags: ["Real-Time Analytics", "Data Streaming", "Event Processing", "Live Dashboards"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-20T15:45:00.000Z",
    rating: 4.9,
    reviewCount: 56,
    featured: true,
    location: "Global",
    availability: "3-4 Weeks",
    aiScore: 96
  },
  {
    id: "data-governance-platform",
    title: "Enterprise Data Governance & Quality Platform",
    description: "Comprehensive data governance solution with data lineage, quality monitoring, privacy controls, and regulatory compliance. Ensures data accuracy, consistency, and security across all enterprise systems.",
    category: "Data & Analytics",
    subcategory: "Data Governance",
    price: 3999,
    currency: "$",
    tags: ["Data Governance", "Data Quality", "Privacy Controls", "Regulatory Compliance"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1523475496153-3a12d3e9ad12?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-25T12:00:00.000Z",
    rating: 4.7,
    reviewCount: 73,
    location: "Global",
    availability: "2-3 Weeks",
    aiScore: 90
  },

  // DevOps & Development Services
  {
    id: "ai-powered-devops",
    title: "AI-Powered DevOps Automation Platform",
    description: "Intelligent DevOps platform with automated testing, deployment, monitoring, and incident response. Uses machine learning to optimize CI/CD pipelines, predict failures, and automatically resolve common issues.",
    category: "DevOps & Development",
    subcategory: "DevOps Automation",
    price: 3999,
    currency: "$",
    tags: ["DevOps Automation", "CI/CD", "Automated Testing", "Incident Response"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-01T09:30:00.000Z",
    rating: 4.8,
    reviewCount: 88,
    location: "Global",
    availability: "2-3 Weeks",
    aiScore: 93
  },
  {
    id: "low-code-development-platform",
    title: "Enterprise Low-Code Development Platform",
    description: "Visual development platform for building enterprise applications without extensive coding. Includes pre-built components, workflow automation, database integration, and deployment tools for rapid application development.",
    category: "DevOps & Development",
    subcategory: "Low-Code Platform",
    price: 2499,
    currency: "$",
    tags: ["Low-Code", "Visual Development", "Workflow Automation", "Rapid Development"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-05T14:15:00.000Z",
    rating: 4.6,
    reviewCount: 112,
    location: "Global",
    availability: "Immediate",
    aiScore: 89
  },

  // Digital Transformation Services
  {
    id: "digital-workplace-solution",
    title: "Digital Workplace & Collaboration Platform",
    description: "Integrated digital workplace solution with team collaboration, project management, knowledge sharing, and productivity tools. Includes AI-powered insights, automation, and seamless integration with existing enterprise systems.",
    category: "Digital Transformation",
    subcategory: "Workplace Solutions",
    price: 1999,
    currency: "$",
    tags: ["Digital Workplace", "Team Collaboration", "Project Management", "Productivity Tools"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-10T11:20:00.000Z",
    rating: 4.7,
    reviewCount: 156,
    location: "Global",
    availability: "1-2 Weeks",
    aiScore: 88
  },
  {
    id: "customer-experience-platform",
    title: "AI-Powered Customer Experience Platform",
    description: "Omnichannel customer experience platform with personalized interactions, sentiment analysis, and predictive customer service. Integrates with CRM systems and provides real-time insights for improving customer satisfaction.",
    category: "Digital Transformation",
    subcategory: "Customer Experience",
    price: 3499,
    currency: "$",
    tags: ["Customer Experience", "Personalization", "Sentiment Analysis", "Predictive Service"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-15T16:40:00.000Z",
    rating: 4.8,
    reviewCount: 94,
    location: "Global",
    availability: "2-3 Weeks",
    aiScore: 92
  },

  // Blockchain & Web3 Services
  {
    id: "enterprise-blockchain-platform",
    title: "Enterprise Blockchain & Smart Contract Platform",
    description: "Scalable blockchain platform for enterprise applications with smart contract automation, digital asset management, and regulatory compliance. Supports private and consortium networks for supply chain, finance, and healthcare.",
    category: "Blockchain & Web3",
    subcategory: "Enterprise Blockchain",
    price: 8999,
    currency: "$",
    tags: ["Blockchain", "Smart Contracts", "Digital Assets", "Supply Chain"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-20T13:25:00.000Z",
    rating: 4.9,
    reviewCount: 67,
    featured: true,
    location: "Global",
    availability: "6-8 Weeks",
    aiScore: 95
  },
  {
    id: "defi-trading-platform",
    title: "DeFi Trading & Yield Farming Platform",
    description: "Decentralized finance platform with automated trading strategies, yield optimization, and risk management. Includes portfolio tracking, performance analytics, and integration with major DeFi protocols.",
    category: "Blockchain & Web3",
    subcategory: "DeFi Solutions",
    price: 5499,
    currency: "$",
    tags: ["DeFi", "Trading", "Yield Farming", "Risk Management"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-25T10:50:00.000Z",
    rating: 4.7,
    reviewCount: 43,
    location: "Global",
    availability: "4-5 Weeks",
    aiScore: 91
  },

  // Industry-Specific Solutions
  {
    id: "healthcare-ai-platform",
    title: "Healthcare AI & Clinical Decision Support",
    description: "AI-powered healthcare platform with clinical decision support, medical image analysis, patient risk assessment, and treatment recommendations. Compliant with HIPAA and FDA regulations for medical device applications.",
    category: "Healthcare & Life Sciences",
    subcategory: "Clinical AI",
    price: 12999,
    currency: "$",
    tags: ["Healthcare AI", "Clinical Decision Support", "Medical Imaging", "HIPAA Compliant"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1576091160399-112c8b7333e5?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-30T15:15:00.000Z",
    rating: 4.9,
    reviewCount: 89,
    featured: true,
    location: "Global",
    availability: "8-10 Weeks",
    aiScore: 96
  },
  {
    id: "fintech-compliance-suite",
    title: "FinTech Compliance & Risk Management Suite",
    description: "Comprehensive compliance solution for financial institutions with AML/KYC automation, fraud detection, regulatory reporting, and risk assessment. Integrates with banking systems and provides real-time monitoring.",
    category: "Financial Services",
    subcategory: "Compliance & Risk",
    price: 7999,
    currency: "$",
    tags: ["FinTech", "AML/KYC", "Fraud Detection", "Regulatory Compliance"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-04-05T12:30:00.000Z",
    rating: 4.8,
    reviewCount: 76,
    featured: true,
    location: "Global",
    availability: "4-6 Weeks",
    aiScore: 94
  },

  // Emerging Technology Services
  {
    id: "quantum-computing-simulation",
    title: "Quantum Computing Simulation & Optimization Platform",
    description: "Quantum computing simulation platform for algorithm development, optimization problems, and research applications. Includes quantum circuit design, error correction, and performance analysis tools.",
    category: "Emerging Technologies",
    subcategory: "Quantum Computing",
    price: 15999,
    currency: "$",
    tags: ["Quantum Computing", "Algorithm Development", "Optimization", "Research Tools"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-04-10T09:45:00.000Z",
    rating: 4.9,
    reviewCount: 34,
    featured: true,
    location: "Global",
    availability: "10-12 Weeks",
    aiScore: 97
  },
  {
    id: "ar-vr-enterprise-platform",
    title: "Enterprise AR/VR & Mixed Reality Platform",
    description: "Augmented and virtual reality platform for enterprise applications including training, design collaboration, remote assistance, and immersive experiences. Supports multiple devices and integrates with enterprise systems.",
    category: "Emerging Technologies",
    subcategory: "AR/VR Solutions",
    price: 6999,
    currency: "$",
    tags: ["AR/VR", "Mixed Reality", "Enterprise Training", "Immersive Experiences"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1622973536968-3ead9e780960?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-04-15T14:20:00.000Z",
    rating: 4.7,
    reviewCount: 58,
    location: "Global",
    availability: "6-8 Weeks",
    aiScore: 92
  }
];

// Service categories for better organization
export const SERVICE_CATEGORIES = [
  {
    id: "ai-automation",
    name: "AI & Automation",
    description: "Intelligent automation solutions powered by artificial intelligence",
    icon: "🤖",
    color: "from-purple-500 to-indigo-600",
    services: COMPREHENSIVE_SERVICES.filter(s => s.category === "AI & Automation" || s.category === "AI & Content" || s.category === "AI & Analytics")
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity",
    description: "Advanced security solutions for modern digital threats",
    icon: "🔒",
    color: "from-red-500 to-pink-600",
    services: COMPREHENSIVE_SERVICES.filter(s => s.category === "Cybersecurity")
  },
  {
    id: "cloud-infrastructure",
    name: "Cloud & Infrastructure",
    description: "Scalable cloud solutions and infrastructure management",
    icon: "☁️",
    color: "from-blue-500 to-cyan-600",
    services: COMPREHENSIVE_SERVICES.filter(s => s.category === "Cloud & Infrastructure")
  },
  {
    id: "data-analytics",
    name: "Data & Analytics",
    description: "Data-driven insights and analytics solutions",
    icon: "📊",
    color: "from-green-500 to-emerald-600",
    services: COMPREHENSIVE_SERVICES.filter(s => s.category === "Data & Analytics")
  },
  {
    id: "devops-development",
    name: "DevOps & Development",
    description: "Modern development and operations solutions",
    icon: "⚡",
    color: "from-yellow-500 to-orange-600",
    services: COMPREHENSIVE_SERVICES.filter(s => s.category === "DevOps & Development")
  },
  {
    id: "digital-transformation",
    name: "Digital Transformation",
    description: "End-to-end digital transformation solutions",
    icon: "🚀",
    color: "from-indigo-500 to-purple-600",
    services: COMPREHENSIVE_SERVICES.filter(s => s.category === "Digital Transformation")
  },
  {
    id: "blockchain-web3",
    name: "Blockchain & Web3",
    description: "Next-generation blockchain and decentralized solutions",
    icon: "⛓️",
    color: "from-gray-500 to-slate-600",
    services: COMPREHENSIVE_SERVICES.filter(s => s.category === "Blockchain & Web3")
  },
  {
    id: "industry-solutions",
    name: "Industry Solutions",
    description: "Specialized solutions for specific industries",
    icon: "🏢",
    color: "from-teal-500 to-cyan-600",
    services: COMPREHENSIVE_SERVICES.filter(s => s.category === "Healthcare & Life Sciences" || s.category === "Financial Services")
  },
  {
    id: "emerging-tech",
    name: "Emerging Technologies",
    description: "Cutting-edge technology solutions",
    icon: "🔮",
    color: "from-violet-500 to-purple-600",
    services: COMPREHENSIVE_SERVICES.filter(s => s.category === "Emerging Technologies")
  }
];

// Pricing tiers for different service levels
export const PRICING_TIERS = [
  {
    name: "Starter",
    price: "$999",
    description: "Perfect for small businesses and startups",
    features: [
      "Basic implementation",
      "Standard support",
      "Core features",
      "Documentation"
    ]
  },
  {
    name: "Professional",
    price: "$2,999",
    description: "Ideal for growing businesses",
    features: [
      "Full implementation",
      "Priority support",
      "Advanced features",
      "Customization",
      "Training sessions"
    ]
  },
  {
    name: "Enterprise",
    price: "$5,999+",
    description: "For large organizations",
    features: [
      "Custom development",
      "24/7 dedicated support",
      "All features",
      "Full customization",
      "On-site training",
      "SLA guarantees"
    ]
  }
];