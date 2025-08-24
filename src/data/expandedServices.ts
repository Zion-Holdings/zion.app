import { ProductListing } from "@/types/listings";

// AI & Machine Learning Services
export const AI_SERVICES: ProductListing[] = [
  {
    id: "ai-automation-1",
    title: "AI-Powered Process Automation Suite",
    description: "Complete workflow automation solution using AI to streamline business processes, reduce manual tasks, and increase operational efficiency by up to 300%. Includes process mapping, RPA integration, and analytics dashboard.",
    category: "AI Automation",
    subcategory: "Process Optimization",
    price: 2499,
    currency: "$",
    tags: ["Process Automation", "RPA", "Workflow Optimization", "AI Integration"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
      email: "kleber@ziontechgroup.com",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T10:00:00.000Z",
    rating: 4.9,
    reviewCount: 156,
    featured: true,
    location: "Global",
    availability: "2-3 Weeks",
    aiScore: 96
  },
  {
    id: "ai-predictive-2",
    title: "Predictive Analytics & Forecasting Platform",
    description: "Advanced AI-powered predictive analytics platform that analyzes historical data to forecast trends, customer behavior, and business outcomes with 95%+ accuracy. Includes machine learning models and real-time dashboards.",
    category: "AI Analytics",
    subcategory: "Predictive Modeling",
    price: 3999,
    currency: "$",
    tags: ["Predictive Analytics", "Machine Learning", "Forecasting", "Business Intelligence"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-20T14:30:00.000Z",
    rating: 4.8,
    reviewCount: 89,
    location: "Global",
    availability: "3-4 Weeks",
    aiScore: 94
  },
  {
    id: "ai-nlp-3",
    title: "Natural Language Processing API Suite",
    description: "Comprehensive NLP solution including sentiment analysis, text classification, entity extraction, and language translation. Supports 50+ languages with enterprise-grade accuracy and scalability.",
    category: "AI Development",
    subcategory: "NLP",
    price: 1799,
    currency: "$",
    tags: ["NLP", "Sentiment Analysis", "Text Processing", "API"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-01T09:15:00.000Z",
    rating: 4.7,
    reviewCount: 67,
    location: "Global",
    availability: "Immediate",
    aiScore: 92
  },
  {
    id: "ai-computer-vision-4",
    title: "Computer Vision & Image Recognition Platform",
    description: "Advanced computer vision solution for object detection, facial recognition, quality control, and automated inspection. Includes pre-trained models and custom training capabilities for industry-specific applications.",
    category: "AI Development",
    subcategory: "Computer Vision",
    price: 2999,
    currency: "$",
    tags: ["Computer Vision", "Image Recognition", "Object Detection", "Quality Control"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1624355834900-99cd2071585b?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-25T11:45:00.000Z",
    rating: 4.9,
    reviewCount: 134,
    location: "Global",
    availability: "2-3 Weeks",
    aiScore: 95
  }
];

// Cybersecurity Services
export const CYBERSECURITY_SERVICES: ProductListing[] = [
  {
    id: "cyber-pentest-1",
    title: "Comprehensive Penetration Testing Suite",
    description: "Full-spectrum penetration testing including web applications, mobile apps, network infrastructure, and social engineering. Includes detailed reports, remediation guidance, and compliance documentation for SOC 2, ISO 27001, and PCI DSS.",
    category: "Cybersecurity",
    subcategory: "Penetration Testing",
    price: 5999,
    currency: "$",
    tags: ["Penetration Testing", "Security Audit", "Compliance", "Vulnerability Assessment"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-10T08:00:00.000Z",
    rating: 4.9,
    reviewCount: 203,
    featured: true,
    location: "Global",
    availability: "1-2 Weeks",
    aiScore: 97
  },
  {
    id: "cyber-incident-response-2",
    title: "24/7 Incident Response & Threat Hunting",
    description: "Round-the-clock cybersecurity incident response team with advanced threat hunting capabilities. Includes real-time monitoring, rapid response protocols, and post-incident analysis with lessons learned documentation.",
    category: "Cybersecurity",
    subcategory: "Incident Response",
    price: 8999,
    currency: "$",
    tags: ["Incident Response", "Threat Hunting", "24/7 Monitoring", "Security Operations"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T12:30:00.000Z",
    rating: 4.8,
    reviewCount: 78,
    location: "Global",
    availability: "Immediate",
    aiScore: 93
  },
  {
    id: "cyber-compliance-3",
    title: "Cybersecurity Compliance & Governance",
    description: "Complete compliance management solution for SOC 2, ISO 27001, PCI DSS, HIPAA, and GDPR. Includes policy development, risk assessments, training programs, and audit preparation support.",
    category: "Cybersecurity",
    subcategory: "Compliance",
    price: 4499,
    currency: "$",
    tags: ["Compliance", "Governance", "Risk Management", "Policy Development"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-05T10:15:00.000Z",
    rating: 4.7,
    reviewCount: 92,
    location: "Global",
    availability: "2-3 Weeks",
    aiScore: 91
  }
];

// Cloud & DevOps Services
export const CLOUD_DEVOPS_SERVICES: ProductListing[] = [
  {
    id: "cloud-migration-1",
    title: "Enterprise Cloud Migration & Optimization",
    description: "End-to-end cloud migration services including assessment, planning, execution, and optimization. Supports AWS, Azure, and Google Cloud with cost optimization strategies and performance tuning.",
    category: "Cloud Services",
    subcategory: "Migration",
    price: 12999,
    currency: "$",
    tags: ["Cloud Migration", "AWS", "Azure", "Cost Optimization"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-12T09:45:00.000Z",
    rating: 4.8,
    reviewCount: 145,
    featured: true,
    location: "Global",
    availability: "4-6 Weeks",
    aiScore: 94
  },
  {
    id: "devops-automation-2",
    title: "DevOps Automation & CI/CD Pipeline",
    description: "Complete DevOps automation solution with CI/CD pipelines, infrastructure as code, automated testing, and deployment strategies. Includes monitoring, logging, and performance optimization tools.",
    category: "DevOps",
    subcategory: "Automation",
    price: 5499,
    currency: "$",
    tags: ["DevOps", "CI/CD", "Infrastructure as Code", "Automation"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-18T14:20:00.000Z",
    rating: 4.7,
    reviewCount: 89,
    location: "Global",
    availability: "3-4 Weeks",
    aiScore: 92
  },
  {
    id: "kubernetes-management-3",
    title: "Kubernetes Cluster Management & Optimization",
    description: "Professional Kubernetes management services including cluster design, deployment, monitoring, scaling, and optimization. Includes disaster recovery, backup strategies, and performance tuning.",
    category: "DevOps",
    subcategory: "Kubernetes",
    price: 3999,
    currency: "$",
    tags: ["Kubernetes", "Container Orchestration", "Cluster Management", "DevOps"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1523475496153-3a12d3e9ad12?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-01T11:30:00.000Z",
    rating: 4.6,
    reviewCount: 67,
    location: "Global",
    availability: "2-3 Weeks",
    aiScore: 89
  }
];

// Data & Analytics Services
export const DATA_ANALYTICS_SERVICES: ProductListing[] = [
  {
    id: "data-engineering-1",
    title: "Data Engineering & ETL Pipeline Development",
    description: "Complete data engineering solution including ETL pipeline development, data warehousing, data lake architecture, and real-time streaming. Supports big data technologies like Apache Spark, Kafka, and Snowflake.",
    category: "Data Analytics",
    subcategory: "Data Engineering",
    price: 7999,
    currency: "$",
    tags: ["Data Engineering", "ETL", "Data Warehousing", "Big Data"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-20T13:15:00.000Z",
    rating: 4.8,
    reviewCount: 112,
    featured: true,
    location: "Global",
    availability: "4-5 Weeks",
    aiScore: 93
  },
  {
    id: "business-intelligence-2",
    title: "Business Intelligence & Dashboard Development",
    description: "Custom BI solutions with interactive dashboards, KPI tracking, and data visualization. Includes data modeling, report automation, and mobile-responsive design for executive decision-making.",
    category: "Data Analytics",
    subcategory: "Business Intelligence",
    price: 3499,
    currency: "$",
    tags: ["Business Intelligence", "Dashboards", "Data Visualization", "KPI Tracking"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-25T15:45:00.000Z",
    rating: 4.7,
    reviewCount: 78,
    location: "Global",
    availability: "2-3 Weeks",
    aiScore: 90
  }
];

// Digital Transformation Services
export const DIGITAL_TRANSFORMATION_SERVICES: ProductListing[] = [
  {
    id: "digital-strategy-1",
    title: "Digital Transformation Strategy & Roadmap",
    description: "Comprehensive digital transformation consulting including current state assessment, future state vision, technology roadmap, and implementation strategy. Covers people, process, and technology transformation.",
    category: "Digital Transformation",
    subcategory: "Strategy",
    price: 15999,
    currency: "$",
    tags: ["Digital Transformation", "Strategy", "Technology Roadmap", "Change Management"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-10T10:00:00.000Z",
    rating: 4.9,
    reviewCount: 234,
    featured: true,
    location: "Global",
    availability: "6-8 Weeks",
    aiScore: 96
  },
  {
    id: "legacy-modernization-2",
    title: "Legacy System Modernization & Integration",
    description: "Legacy system assessment, modernization planning, and implementation services. Includes API development, microservices architecture, and seamless integration with modern cloud platforms.",
    category: "Digital Transformation",
    subcategory: "Modernization",
    price: 19999,
    currency: "$",
    tags: ["Legacy Modernization", "API Development", "Microservices", "System Integration"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T14:30:00.000Z",
    rating: 4.8,
    reviewCount: 156,
    location: "Global",
    availability: "8-12 Weeks",
    aiScore: 94
  }
];

// IoT & Edge Computing Services
export const IOT_EDGE_SERVICES: ProductListing[] = [
  {
    id: "iot-platform-1",
    title: "IoT Platform Development & Management",
    description: "End-to-end IoT solution including device management, data collection, real-time analytics, and predictive maintenance. Supports industrial IoT, smart cities, and connected devices.",
    category: "IoT & Edge Computing",
    subcategory: "Platform Development",
    price: 8999,
    currency: "$",
    tags: ["IoT", "Device Management", "Real-time Analytics", "Predictive Maintenance"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-01T09:00:00.000Z",
    rating: 4.7,
    reviewCount: 89,
    location: "Global",
    availability: "4-6 Weeks",
    aiScore: 91
  },
  {
    id: "edge-computing-2",
    title: "Edge Computing & Edge AI Solutions",
    description: "Edge computing infrastructure and AI deployment at the edge for low-latency applications. Includes edge device management, AI model optimization, and distributed computing architecture.",
    category: "IoT & Edge Computing",
    subcategory: "Edge AI",
    price: 6499,
    currency: "$",
    tags: ["Edge Computing", "Edge AI", "Low Latency", "Distributed Computing"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-28T11:45:00.000Z",
    rating: 4.6,
    reviewCount: 67,
    location: "Global",
    availability: "3-4 Weeks",
    aiScore: 88
  }
];

// Blockchain & Web3 Services
export const BLOCKCHAIN_WEB3_SERVICES: ProductListing[] = [
  {
    id: "blockchain-development-1",
    title: "Blockchain Development & Smart Contract Auditing",
    description: "Custom blockchain solutions, smart contract development, and comprehensive security auditing. Includes DeFi applications, NFT platforms, and enterprise blockchain integration.",
    category: "Blockchain & Web3",
    subcategory: "Development",
    price: 12999,
    currency: "$",
    tags: ["Blockchain", "Smart Contracts", "DeFi", "NFT"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1639762681485-074d7f5668f1?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-20T12:00:00.000Z",
    rating: 4.8,
    reviewCount: 134,
    featured: true,
    location: "Global",
    availability: "6-8 Weeks",
    aiScore: 93
  },
  {
    id: "web3-integration-2",
    title: "Web3 Integration & DeFi Solutions",
    description: "Web3 integration services for traditional businesses, DeFi protocol development, and cross-chain interoperability solutions. Includes wallet integration and decentralized application development.",
    category: "Blockchain & Web3",
    subcategory: "Web3 Integration",
    price: 7999,
    currency: "$",
    tags: ["Web3", "DeFi", "Cross-chain", "DApp Development"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1639762681485-074d7f5668f1?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-05T10:30:00.000Z",
    rating: 4.7,
    reviewCount: 78,
    location: "Global",
    availability: "4-5 Weeks",
    aiScore: 90
  }
];

// All services combined
export const ALL_EXPANDED_SERVICES: ProductListing[] = [
  ...AI_SERVICES,
  ...CYBERSECURITY_SERVICES,
  ...CLOUD_DEVOPS_SERVICES,
  ...DATA_ANALYTICS_SERVICES,
  ...DIGITAL_TRANSFORMATION_SERVICES,
  ...IOT_EDGE_SERVICES,
  ...BLOCKCHAIN_WEB3_SERVICES
];

// Service categories for filtering
export const EXPANDED_SERVICE_CATEGORIES = [
  { label: 'AI & Machine Learning', value: 'ai-ml' },
  { label: 'Cybersecurity', value: 'cybersecurity' },
  { label: 'Cloud & DevOps', value: 'cloud-devops' },
  { label: 'Data & Analytics', value: 'data-analytics' },
  { label: 'Digital Transformation', value: 'digital-transformation' },
  { label: 'IoT & Edge Computing', value: 'iot-edge' },
  { label: 'Blockchain & Web3', value: 'blockchain-web3' }
];