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
    id: "ai-ml-1",
    title: "Custom Machine Learning Model Development",
    description: "End-to-end ML solution from data preprocessing to model deployment. Includes data engineering, feature engineering, model training, validation, and production deployment with monitoring.",
    category: "AI & ML",
    subcategory: "Custom Development",
    price: 8999,
    currency: "$",
    tags: ["Machine Learning", "Data Science", "Model Development", "AI Engineering"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-12T09:00:00.000Z",
    rating: 4.8,
    reviewCount: 89,
    featured: true,
    location: "Global",
    availability: "4-6 Weeks",
    aiScore: 94
  },
  {
    id: "ai-chatbot-1",
    title: "Intelligent Conversational AI Platform",
    description: "Advanced chatbot and virtual assistant platform with natural language processing, sentiment analysis, and multi-language support. Integrates with CRM, e-commerce, and customer service systems.",
    category: "AI & ML",
    subcategory: "Conversational AI",
    price: 3499,
    currency: "$",
    tags: ["Chatbot", "NLP", "Virtual Assistant", "Customer Service"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-10T11:00:00.000Z",
    rating: 4.7,
    reviewCount: 203,
    featured: false,
    location: "Global",
    availability: "3-4 Weeks",
    aiScore: 92
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
    id: "cyber-incident-1",
    title: "Incident Response & Digital Forensics",
    description: "24/7 incident response team with digital forensics capabilities. Rapid response to security breaches, evidence collection, threat hunting, and recovery services. Includes post-incident analysis and security hardening.",
    category: "Cybersecurity",
    subcategory: "Incident Response",
    price: 7999,
    currency: "$",
    tags: ["Incident Response", "Digital Forensics", "Threat Hunting", "Security Recovery"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-08T14:00:00.000Z",
    rating: 4.8,
    reviewCount: 156,
    featured: true,
    location: "Global",
    availability: "Immediate",
    aiScore: 95
  }
];

// Cloud & DevOps Services
export const CLOUD_DEVOPS_SERVICES: ProductListing[] = [
  {
    id: "cloud-migration-1",
    title: "Enterprise Cloud Migration & Optimization",
    description: "End-to-end cloud migration services including assessment, planning, migration execution, and optimization. Supports AWS, Azure, and Google Cloud with cost optimization and security best practices.",
    category: "Cloud & DevOps",
    subcategory: "Migration",
    price: 12999,
    currency: "$",
    tags: ["Cloud Migration", "AWS", "Azure", "Cost Optimization"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-05T10:00:00.000Z",
    rating: 4.9,
    reviewCount: 178,
    featured: true,
    location: "Global",
    availability: "6-8 Weeks",
    aiScore: 96
  },
  {
    id: "devops-automation-1",
    title: "DevOps Automation & CI/CD Pipeline",
    description: "Complete DevOps transformation with automated CI/CD pipelines, infrastructure as code, monitoring, and deployment automation. Includes Docker, Kubernetes, Terraform, and monitoring setup.",
    category: "Cloud & DevOps",
    subcategory: "Automation",
    price: 6499,
    currency: "$",
    tags: ["DevOps", "CI/CD", "Kubernetes", "Infrastructure as Code"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-03T12:00:00.000Z",
    rating: 4.7,
    reviewCount: 134,
    featured: false,
    location: "Global",
    availability: "4-5 Weeks",
    aiScore: 93
  }
];

// Data & Analytics Services
export const DATA_ANALYTICS_SERVICES: ProductListing[] = [
  {
    id: "data-warehouse-1",
    title: "Enterprise Data Warehouse & BI Platform",
    description: "Complete data warehouse solution with ETL pipelines, data modeling, and business intelligence dashboards. Includes data governance, quality monitoring, and real-time analytics capabilities.",
    category: "Data & Analytics",
    subcategory: "Data Warehouse",
    price: 15999,
    currency: "$",
    tags: ["Data Warehouse", "ETL", "Business Intelligence", "Data Governance"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-01T09:00:00.000Z",
    rating: 4.8,
    reviewCount: 267,
    featured: true,
    location: "Global",
    availability: "8-10 Weeks",
    aiScore: 95
  }
];

// Digital Transformation Services
export const DIGITAL_TRANSFORMATION_SERVICES: ProductListing[] = [
  {
    id: "digital-strategy-1",
    title: "Digital Transformation Strategy & Implementation",
    description: "Comprehensive digital transformation consulting including strategy development, technology assessment, change management, and implementation roadmap. Focuses on business process optimization and technology adoption.",
    category: "Digital Transformation",
    subcategory: "Strategy",
    price: 19999,
    currency: "$",
    tags: ["Digital Strategy", "Change Management", "Process Optimization", "Technology Adoption"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2023-12-28T11:00:00.000Z",
    rating: 4.9,
    reviewCount: 189,
    featured: true,
    location: "Global",
    availability: "10-12 Weeks",
    aiScore: 98
  }
];

// IoT & Edge Computing Services
export const IOT_EDGE_SERVICES: ProductListing[] = [
  {
    id: "iot-platform-1",
    title: "IoT Platform & Edge Computing Solution",
    description: "End-to-end IoT platform with edge computing capabilities, device management, data collection, and real-time analytics. Includes security, scalability, and integration with existing systems.",
    category: "IoT & Edge",
    subcategory: "Platform",
    price: 8999,
    currency: "$",
    tags: ["IoT Platform", "Edge Computing", "Device Management", "Real-time Analytics"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2023-12-25T15:00:00.000Z",
    rating: 4.6,
    reviewCount: 98,
    featured: false,
    location: "Global",
    availability: "6-8 Weeks",
    aiScore: 91
  }
];

// Blockchain & Web3 Services
export const BLOCKCHAIN_WEB3_SERVICES: ProductListing[] = [
  {
    id: "blockchain-platform-1",
    title: "Enterprise Blockchain & Web3 Platform",
    description: "Custom blockchain development with smart contracts, DeFi protocols, and Web3 integration. Includes security auditing, tokenomics design, and regulatory compliance for enterprise applications.",
    category: "Blockchain & Web3",
    subcategory: "Platform Development",
    price: 24999,
    currency: "$",
    tags: ["Blockchain", "Smart Contracts", "DeFi", "Web3"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2023-12-20T13:00:00.000Z",
    rating: 4.7,
    reviewCount: 145,
    featured: true,
    location: "Global",
    availability: "12-16 Weeks",
    aiScore: 94
  }
];

export const ALL_EXPANDED_SERVICES: ProductListing[] = [
  ...AI_SERVICES,
  ...CYBERSECURITY_SERVICES,
  ...CLOUD_DEVOPS_SERVICES,
  ...DATA_ANALYTICS_SERVICES,
  ...DIGITAL_TRANSFORMATION_SERVICES,
  ...IOT_EDGE_SERVICES,
  ...BLOCKCHAIN_WEB3_SERVICES
];

export const EXPANDED_SERVICE_CATEGORIES = [
  { label: 'AI & Machine Learning', value: 'ai-ml' },
  { label: 'Cybersecurity', value: 'cybersecurity' },
  { label: 'Cloud & DevOps', value: 'cloud-devops' },
  { label: 'Data & Analytics', value: 'data-analytics' },
  { label: 'Digital Transformation', value: 'digital-transformation' },
  { label: 'IoT & Edge Computing', value: 'iot-edge' },
  { label: 'Blockchain & Web3', value: 'blockchain-web3' }
];

// Contact Information
export const CONTACT_INFO = {
  mobile: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  address: "364 E Main St STE 1008 Middletown DE 19709",
  domain: "https://ziontechgroup.com"
};