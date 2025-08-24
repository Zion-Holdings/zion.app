<<<<<<< HEAD
export interface EnhancedService {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  price: number;
  currency: string;
  pricingModel: 'one-time' | 'subscription' | 'usage-based' | 'project-based';
  features: string[];
  benefits: string[];
  useCases: string[];
  marketPrice: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
  tags: string[];
  author: {
    name: string;
    id: string;
    avatarUrl?: string;
  };
  images: string[];
  createdAt: string;
  aiScore: number;
  rating: number;
  reviewCount: number;
  availability: 'immediate' | 'within-week' | 'within-month';
  location: string;
  certifications: string[];
  languages: string[];
}

export const ENHANCED_SERVICES: EnhancedService[] = [
  // AI & Machine Learning Services
  {
    id: "ai-automation-suite",
    title: "AI-Powered Business Process Automation Suite",
    description: "Complete automation solution that uses AI to streamline business processes, reduce manual work by 80%, and increase operational efficiency across departments.",
    category: "AI & Machine Learning",
    subcategory: "Process Automation",
    price: 2500,
    currency: "$",
    pricingModel: "subscription",
    features: [
      "Intelligent document processing with 99.9% accuracy",
      "Automated workflow orchestration",
      "Real-time analytics dashboard",
      "Custom AI model training",
      "Multi-language support",
      "API integration capabilities",
      "24/7 monitoring and alerts"
    ],
    benefits: [
      "Reduce operational costs by 40-60%",
      "Eliminate manual data entry errors",
      "Scale operations without additional staff",
      "Improve customer response times",
      "Ensure compliance and audit trails"
    ],
    useCases: [
      "Invoice processing and accounts payable",
      "Customer service ticket routing",
      "HR onboarding automation",
      "Sales lead qualification",
      "Inventory management optimization"
    ],
    marketPrice: "$2,500/month - Industry standard: $3,000-5,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/ai-automation"
    },
    tags: ["AI Automation", "Process Optimization", "Business Intelligence", "RPA", "Machine Learning"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T10:00:00.000Z",
    aiScore: 98,
    rating: 4.9,
    reviewCount: 156,
    availability: "within-week",
    location: "Global",
    certifications: ["ISO 27001", "SOC 2 Type II", "GDPR Compliant"],
    languages: ["English", "Spanish", "French", "German", "Portuguese"]
=======
import { ProductListing } from "@/types/listings";

// Enhanced comprehensive services with real, innovative micro SAAS solutions
export const ENHANCED_SERVICES: ProductListing[] = [
  // AI & Machine Learning Services
  {
    id: "ai-automation-suite",
    title: "AI Workflow Automation Suite",
    description: "End-to-end AI automation platform for business processes, document processing, and customer service. Includes RPA, NLP, and predictive analytics with 99.9% uptime SLA.",
    category: "AI & Automation",
    subcategory: "Business Process Automation",
    price: 2999,
    currency: "$",
    tags: ["AI Automation", "RPA", "Workflow", "Business Intelligence"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T10:00:00.000Z",
    rating: 4.9,
    reviewCount: 156,
    featured: true,
    location: "Global",
    availability: "Immediate",
    aiScore: 98
  },
  {
    id: "ai-content-intelligence",
    title: "AI Content Intelligence Platform",
    description: "Advanced content analysis and optimization platform using NLP and machine learning. Provides SEO insights, content scoring, and automated optimization recommendations.",
    category: "AI & Content",
    subcategory: "Content Marketing",
    price: 1499,
    currency: "$",
    tags: ["Content AI", "SEO", "NLP", "Marketing"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-01T14:30:00.000Z",
    rating: 4.8,
    reviewCount: 89,
    location: "Global",
    availability: "1-2 Weeks",
    aiScore: 94
  },
  {
    id: "ai-predictive-analytics",
    title: "Predictive Analytics & Forecasting Engine",
    description: "Enterprise-grade predictive analytics platform with machine learning models for sales forecasting, demand planning, and risk assessment. Includes real-time dashboards and API access.",
    category: "AI & Analytics",
    subcategory: "Business Intelligence",
    price: 3999,
    currency: "$",
    tags: ["Predictive Analytics", "ML Models", "Forecasting", "Business Intelligence"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-20T11:15:00.000Z",
    rating: 4.9,
    reviewCount: 134,
    featured: true,
    location: "Global",
    availability: "2-3 Weeks",
    aiScore: 96
>>>>>>> cursor/expand-services-and-deploy-updates-7114
  },

  // Cybersecurity Services
  {
<<<<<<< HEAD
    id: "zero-trust-security-framework",
    title: "Zero-Trust Security Framework Implementation",
    description: "Comprehensive zero-trust security implementation that provides continuous verification, least-privilege access, and advanced threat detection for modern enterprises.",
    category: "Cybersecurity",
    subcategory: "Zero Trust",
    price: 15000,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Identity and access management (IAM) system",
      "Multi-factor authentication (MFA)",
      "Network segmentation and micro-segmentation",
      "Continuous monitoring and analytics",
      "Threat intelligence integration",
      "Compliance reporting dashboard",
      "Security awareness training modules"
    ],
    benefits: [
      "Reduce security breaches by 90%",
      "Meet regulatory compliance requirements",
      "Protect against insider threats",
      "Enable secure remote work",
      "Improve incident response times"
    ],
    useCases: [
      "Enterprise network security",
      "Cloud infrastructure protection",
      "Remote workforce security",
      "Healthcare data protection",
      "Financial services compliance"
    ],
    marketPrice: "$15,000 - Industry standard: $20,000-50,000",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/zero-trust-security"
    },
    tags: ["Zero Trust", "Cybersecurity", "Network Security", "Compliance", "IAM"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-10T14:30:00.000Z",
    aiScore: 96,
    rating: 4.8,
    reviewCount: 89,
    availability: "within-month",
    location: "Global",
    certifications: ["CISSP", "CISM", "CompTIA Security+", "ISO 27001"],
    languages: ["English", "Spanish", "French", "German"]
=======
    id: "cyber-threat-intelligence",
    title: "Cyber Threat Intelligence Platform",
    description: "Real-time threat intelligence and security monitoring platform with AI-powered threat detection, automated response, and compliance reporting for SOC teams.",
    category: "Cybersecurity",
    subcategory: "Threat Intelligence",
    price: 2499,
    currency: "$",
    tags: ["Threat Intelligence", "SOC", "Compliance", "AI Security"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-10T09:45:00.000Z",
    rating: 4.9,
    reviewCount: 78,
    location: "Global",
    availability: "Immediate",
    aiScore: 95
  },
  {
    id: "zero-trust-security",
    title: "Zero Trust Security Framework Implementation",
    description: "Complete zero trust security implementation including identity management, network segmentation, and continuous monitoring. Customized for enterprise environments.",
    category: "Cybersecurity",
    subcategory: "Zero Trust",
    price: 5999,
    currency: "$",
    tags: ["Zero Trust", "Identity Management", "Network Security", "Compliance"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-25T16:20:00.000Z",
    rating: 4.8,
    reviewCount: 67,
    location: "Global",
    availability: "3-4 Weeks",
    aiScore: 92
>>>>>>> cursor/expand-services-and-deploy-updates-7114
  },

  // Cloud & DevOps Services
  {
    id: "multi-cloud-orchestration",
<<<<<<< HEAD
    title: "Multi-Cloud Orchestration & Cost Optimization Platform",
    description: "Intelligent platform that manages multiple cloud providers, optimizes costs, and provides unified monitoring and governance across AWS, Azure, GCP, and private clouds.",
    category: "Cloud & DevOps",
    subcategory: "Multi-Cloud Management",
    price: 8000,
    currency: "$",
    pricingModel: "subscription",
    features: [
      "Unified cloud management dashboard",
      "Automated cost optimization algorithms",
      "Multi-cloud security policies",
      "Performance monitoring and alerting",
      "Resource provisioning automation",
      "Compliance and governance tools",
      "Cost forecasting and budgeting"
    ],
    benefits: [
      "Reduce cloud costs by 25-40%",
      "Simplify multi-cloud operations",
      "Improve security posture",
      "Enable faster deployment",
      "Ensure compliance across clouds"
    ],
    useCases: [
      "Enterprise cloud strategy",
      "Cost optimization initiatives",
      "Disaster recovery planning",
      "Multi-region deployments",
      "Hybrid cloud environments"
    ],
    marketPrice: "$8,000/month - Industry standard: $10,000-15,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/multi-cloud-orchestration"
    },
    tags: ["Multi-Cloud", "Cost Optimization", "DevOps", "Cloud Management", "Automation"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-12T09:15:00.000Z",
    aiScore: 94,
    rating: 4.7,
    reviewCount: 134,
    availability: "within-week",
    location: "Global",
    certifications: ["AWS Solutions Architect", "Azure Solutions Architect", "Google Cloud Professional"],
    languages: ["English", "Spanish", "French", "German", "Portuguese"]
=======
    title: "Multi-Cloud Orchestration Platform",
    description: "Unified management platform for AWS, Azure, and Google Cloud with automated provisioning, cost optimization, and disaster recovery orchestration.",
    category: "Cloud & DevOps",
    subcategory: "Multi-Cloud Management",
    price: 3499,
    currency: "$",
    tags: ["Multi-Cloud", "DevOps", "Cost Optimization", "Disaster Recovery"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-05T13:10:00.000Z",
    rating: 4.7,
    reviewCount: 92,
    location: "Global",
    availability: "2-3 Weeks",
    aiScore: 89
  },
  {
    id: "devops-automation-suite",
    title: "DevOps Automation & CI/CD Suite",
    description: "Comprehensive DevOps automation platform with GitOps workflows, automated testing, deployment pipelines, and infrastructure as code management.",
    category: "Cloud & DevOps",
    subcategory: "DevOps Automation",
    price: 1999,
    currency: "$",
    tags: ["DevOps", "CI/CD", "GitOps", "Infrastructure as Code"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-30T10:25:00.000Z",
    rating: 4.8,
    reviewCount: 113,
    location: "Global",
    availability: "1-2 Weeks",
    aiScore: 91
>>>>>>> cursor/expand-services-and-deploy-updates-7114
  },

  // Data & Analytics Services
  {
<<<<<<< HEAD
    id: "real-time-data-pipeline",
    title: "Real-Time Data Pipeline & Analytics Platform",
    description: "Enterprise-grade real-time data processing platform that ingests, processes, and analyzes streaming data from multiple sources with sub-second latency.",
    category: "Data & Analytics",
    subcategory: "Real-Time Processing",
    price: 12000,
    currency: "$",
    pricingModel: "subscription",
    features: [
      "Real-time data ingestion from 100+ sources",
      "Stream processing with Apache Kafka/Spark",
      "Real-time analytics dashboard",
      "Machine learning model deployment",
      "Data quality monitoring",
      "Scalable architecture (up to 1M events/sec)",
      "Advanced alerting and notifications"
    ],
    benefits: [
      "Make data-driven decisions in real-time",
      "Reduce data processing latency by 95%",
      "Scale to handle massive data volumes",
      "Enable predictive analytics",
      "Improve operational efficiency"
    ],
    useCases: [
      "Financial trading systems",
      "IoT device monitoring",
      "E-commerce personalization",
      "Fraud detection",
      "Supply chain optimization"
    ],
    marketPrice: "$12,000/month - Industry standard: $15,000-25,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/real-time-data-pipeline"
    },
    tags: ["Real-Time Analytics", "Data Pipeline", "Stream Processing", "Big Data", "Machine Learning"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-08T16:45:00.000Z",
    aiScore: 97,
    rating: 4.9,
    reviewCount: 112,
    availability: "within-month",
    location: "Global",
    certifications: ["Apache Kafka", "Apache Spark", "Data Engineering", "Machine Learning"],
    languages: ["English", "Spanish", "French", "German", "Portuguese"]
  },

  // Blockchain & Web3 Services
  {
    id: "enterprise-blockchain-solutions",
    title: "Enterprise Blockchain & Web3 Integration Services",
    description: "Complete blockchain solutions for enterprises including smart contract development, DeFi integration, NFT marketplaces, and Web3 infrastructure setup.",
    category: "Blockchain & Web3",
    subcategory: "Enterprise Solutions",
    price: 25000,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Custom smart contract development",
      "Multi-chain integration (Ethereum, Polygon, Solana)",
      "DeFi protocol integration",
      "NFT marketplace development",
      "Web3 wallet integration",
      "Blockchain analytics dashboard",
      "Security auditing and testing"
    ],
    benefits: [
      "Enable new business models",
      "Reduce transaction costs",
      "Improve transparency and trust",
      "Access to DeFi opportunities",
      "Future-proof your business"
    ],
    useCases: [
      "Supply chain transparency",
      "Digital asset management",
      "Decentralized finance",
      "Gaming and metaverse",
      "Identity verification"
    ],
    marketPrice: "$25,000 - Industry standard: $50,000-150,000",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/enterprise-blockchain"
    },
    tags: ["Blockchain", "Web3", "Smart Contracts", "DeFi", "NFTs", "Cryptocurrency"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-05T11:20:00.000Z",
    aiScore: 95,
    rating: 4.8,
    reviewCount: 67,
    availability: "within-month",
    location: "Global",
    certifications: ["Blockchain Development", "Smart Contract Security", "Web3 Development"],
    languages: ["English", "Spanish", "French", "German"]
=======
    id: "real-time-data-streaming",
    title: "Real-Time Data Streaming Platform",
    description: "High-performance real-time data streaming platform with Kafka integration, stream processing, and real-time analytics dashboards for IoT and financial applications.",
    category: "Data & Analytics",
    subcategory: "Real-Time Processing",
    price: 2799,
    currency: "$",
    tags: ["Real-Time", "Data Streaming", "Kafka", "IoT Analytics"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-15T08:50:00.000Z",
    rating: 4.6,
    reviewCount: 56,
    location: "Global",
    availability: "2-3 Weeks",
    aiScore: 88
  },
  {
    id: "data-governance-platform",
    title: "Data Governance & Compliance Platform",
    description: "Enterprise data governance solution with data lineage, quality monitoring, privacy controls, and automated compliance reporting for GDPR, CCPA, and industry regulations.",
    category: "Data & Analytics",
    subcategory: "Data Governance",
    price: 4499,
    currency: "$",
    tags: ["Data Governance", "Compliance", "Privacy", "Data Lineage"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-18T12:40:00.000Z",
    rating: 4.9,
    reviewCount: 89,
    location: "Global",
    availability: "3-4 Weeks",
    aiScore: 93
>>>>>>> cursor/expand-services-and-deploy-updates-7114
  },

  // IoT & Edge Computing Services
  {
<<<<<<< HEAD
    id: "iot-edge-intelligence",
    title: "IoT Edge Intelligence & Predictive Maintenance Platform",
    description: "Advanced IoT platform that processes data at the edge, provides predictive maintenance insights, and enables real-time decision making for industrial applications.",
    category: "IoT & Edge Computing",
    subcategory: "Industrial IoT",
    price: 18000,
    currency: "$",
    pricingModel: "subscription",
    features: [
      "Edge computing infrastructure",
      "IoT device management",
      "Predictive maintenance algorithms",
      "Real-time monitoring dashboard",
      "Data analytics and reporting",
      "Integration with existing systems",
      "Scalable device onboarding"
    ],
    benefits: [
      "Reduce equipment downtime by 60%",
      "Lower maintenance costs",
      "Improve operational efficiency",
      "Enable predictive insights",
      "Real-time decision making"
    ],
    useCases: [
      "Manufacturing equipment monitoring",
      "Smart building management",
      "Fleet management",
      "Energy grid optimization",
      "Healthcare device monitoring"
    ],
    marketPrice: "$18,000/month - Industry standard: $25,000-40,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/iot-edge-intelligence"
    },
    tags: ["IoT", "Edge Computing", "Predictive Maintenance", "Industrial", "Smart Manufacturing"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-14T13:10:00.000Z",
    aiScore: 93,
    rating: 4.7,
    reviewCount: 78,
    availability: "within-month",
    location: "Global",
    certifications: ["IoT Development", "Edge Computing", "Industrial Automation"],
    languages: ["English", "Spanish", "French", "German", "Portuguese"]
  },

  // Quantum Computing Services
  {
    id: "quantum-computing-solutions",
    title: "Quantum Computing Solutions & Algorithm Development",
    description: "Cutting-edge quantum computing services including algorithm development, quantum software, and hybrid classical-quantum solutions for complex computational problems.",
    category: "Quantum Computing",
    subcategory: "Algorithm Development",
    price: 50000,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Custom quantum algorithm development",
      "Quantum software development",
      "Hybrid classical-quantum solutions",
      "Quantum machine learning",
      "Optimization problem solving",
      "Quantum cryptography",
      "Performance benchmarking"
    ],
    benefits: [
      "Solve previously intractable problems",
      "Exponential speedup for specific tasks",
      "Future-proof your technology stack",
      "Competitive advantage in research",
      "Access to quantum computing resources"
    ],
    useCases: [
      "Drug discovery and molecular modeling",
      "Financial portfolio optimization",
      "Logistics and supply chain",
      "Cryptography and security",
      "Machine learning acceleration"
    ],
    marketPrice: "$50,000 - Industry standard: $100,000-500,000",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/quantum-computing"
    },
    tags: ["Quantum Computing", "Quantum Algorithms", "Quantum Software", "Research", "Innovation"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-03T15:30:00.000Z",
    aiScore: 99,
    rating: 4.9,
    reviewCount: 23,
    availability: "within-month",
    location: "Global",
    certifications: ["Quantum Computing", "Quantum Algorithms", "Research & Development"],
    languages: ["English", "Spanish", "French", "German"]
  },

  // AR/VR & Metaverse Services
  {
    id: "metaverse-development-platform",
    title: "Metaverse Development Platform & AR/VR Solutions",
    description: "Complete metaverse development platform for creating immersive experiences, virtual worlds, and AR/VR applications for business, education, and entertainment.",
    category: "AR/VR & Metaverse",
    subcategory: "Development Platform",
    price: 22000,
    currency: "$",
    pricingModel: "subscription",
    features: [
      "3D world building tools",
      "Avatar creation and customization",
      "Multi-user virtual spaces",
      "AR/VR application development",
      "Cross-platform compatibility",
      "Analytics and user insights",
      "Content management system"
    ],
    benefits: [
      "Create immersive brand experiences",
      "Enable remote collaboration",
      "Reduce travel costs",
      "Increase user engagement",
      "Future-proof your digital presence"
    ],
    useCases: [
      "Virtual events and conferences",
      "Remote training and education",
      "Virtual real estate tours",
      "Gaming and entertainment",
      "Virtual shopping experiences"
    ],
    marketPrice: "$22,000/month - Industry standard: $30,000-50,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/metaverse-platform"
    },
    tags: ["Metaverse", "AR/VR", "3D Development", "Virtual Worlds", "Immersive Technology"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1593508512255-86ab42a8c5ea?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1593508512255-86ab42a8c5ea?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-11T12:45:00.000Z",
    aiScore: 94,
    rating: 4.8,
    reviewCount: 89,
    availability: "within-week",
    location: "Global",
    certifications: ["Unity Development", "Unreal Engine", "AR/VR Development"],
    languages: ["English", "Spanish", "French", "German", "Portuguese"]
  },

  // Green Tech & Sustainability Services
  {
    id: "sustainability-analytics-platform",
    title: "Sustainability Analytics & Carbon Footprint Management Platform",
    description: "Comprehensive platform for tracking, analyzing, and optimizing environmental impact, carbon footprint, and sustainability metrics for businesses and organizations.",
    category: "Green Tech & Sustainability",
    subcategory: "Analytics Platform",
    price: 6000,
    currency: "$",
    pricingModel: "subscription",
    features: [
      "Carbon footprint calculation",
      "Sustainability metrics tracking",
      "Environmental impact reporting",
      "Green technology recommendations",
      "Compliance monitoring",
      "Stakeholder communication tools",
      "Goal setting and progress tracking"
    ],
    benefits: [
      "Reduce environmental impact",
      "Meet sustainability goals",
      "Improve brand reputation",
      "Comply with regulations",
      "Identify cost-saving opportunities"
    ],
    useCases: [
      "Corporate sustainability reporting",
      "Supply chain optimization",
      "Energy efficiency improvement",
      "Waste reduction initiatives",
      "ESG compliance"
    ],
    marketPrice: "$6,000/month - Industry standard: $8,000-15,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/sustainability-analytics"
    },
    tags: ["Sustainability", "Carbon Footprint", "Green Tech", "ESG", "Environmental Impact"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-16T08:20:00.000Z",
    aiScore: 92,
    rating: 4.7,
    reviewCount: 145,
    availability: "immediate",
    location: "Global",
    certifications: ["Sustainability Management", "ESG Reporting", "Environmental Compliance"],
    languages: ["English", "Spanish", "French", "German", "Portuguese"]
  },

  // FinTech & Digital Banking Services
  {
    id: "digital-banking-platform",
    title: "Digital Banking & FinTech Platform Development",
    description: "Complete digital banking solution including mobile apps, payment processing, financial analytics, and regulatory compliance for modern financial institutions.",
    category: "FinTech & Digital Banking",
    subcategory: "Platform Development",
    price: 35000,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Mobile banking applications",
      "Payment processing systems",
      "Financial analytics dashboard",
      "Regulatory compliance tools",
      "Multi-currency support",
      "Security and fraud detection",
      "API integration capabilities"
    ],
    benefits: [
      "Modernize banking operations",
      "Improve customer experience",
      "Reduce operational costs",
      "Ensure regulatory compliance",
      "Enable new financial products"
    ],
    useCases: [
      "Digital banking transformation",
      "Neo-bank development",
      "Payment platform creation",
      "Financial app development",
      "Regulatory compliance"
    ],
    marketPrice: "$35,000 - Industry standard: $75,000-200,000",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/digital-banking"
    },
    tags: ["FinTech", "Digital Banking", "Payment Processing", "Financial Apps", "Regulatory Compliance"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-07T10:15:00.000Z",
    aiScore: 96,
    rating: 4.8,
    reviewCount: 156,
    availability: "within-month",
    location: "Global",
    certifications: ["FinTech Development", "Banking Compliance", "Payment Processing"],
    languages: ["English", "Spanish", "French", "German", "Portuguese"]
  }
];

// Service categories for filtering
export const ENHANCED_SERVICE_CATEGORIES = [
  { label: 'AI & Machine Learning', value: 'ai-machine-learning' },
  { label: 'Cybersecurity', value: 'cybersecurity' },
  { label: 'Cloud & DevOps', value: 'cloud-devops' },
  { label: 'Data & Analytics', value: 'data-analytics' },
  { label: 'Blockchain & Web3', value: 'blockchain-web3' },
  { label: 'IoT & Edge Computing', value: 'iot-edge-computing' },
  { label: 'Quantum Computing', value: 'quantum-computing' },
  { label: 'AR/VR & Metaverse', value: 'ar-vr-metaverse' },
  { label: 'Green Tech & Sustainability', value: 'green-tech-sustainability' },
  { label: 'FinTech & Digital Banking', value: 'fintech-digital-banking' }
];

// Pricing tiers for comparison
export const PRICING_TIERS = {
  starter: { name: 'Starter', price: '$2,500-8,000/month', features: ['Basic features', 'Standard support', 'Up to 10 users'] },
  professional: { name: 'Professional', price: '$8,000-18,000/month', features: ['Advanced features', 'Priority support', 'Up to 100 users'] },
  enterprise: { name: 'Enterprise', price: '$18,000-50,000/month', features: ['Full features', '24/7 support', 'Unlimited users', 'Custom development'] }
=======
    id: "iot-edge-computing",
    title: "IoT Edge Computing & Analytics Platform",
    description: "Edge computing platform for IoT devices with local AI processing, real-time analytics, and cloud synchronization. Ideal for industrial IoT and smart city applications.",
    category: "IoT & Edge",
    subcategory: "Edge Computing",
    price: 3799,
    currency: "$",
    tags: ["IoT", "Edge Computing", "AI Processing", "Industrial IoT"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1591405351990-4726e331f141?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-08T15:15:00.000Z",
    rating: 4.7,
    reviewCount: 73,
    location: "Global",
    availability: "4-5 Weeks",
    aiScore: 90
  },

  // Blockchain & Web3 Services
  {
    id: "blockchain-development-suite",
    title: "Enterprise Blockchain Development Suite",
    description: "Complete blockchain development platform with smart contract templates, DApp frameworks, and enterprise integration tools for supply chain, finance, and healthcare.",
    category: "Blockchain & Web3",
    subcategory: "Enterprise Blockchain",
    price: 5499,
    currency: "$",
    tags: ["Blockchain", "Smart Contracts", "DApps", "Enterprise"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-22T14:20:00.000Z",
    rating: 4.8,
    reviewCount: 45,
    location: "Global",
    availability: "5-6 Weeks",
    aiScore: 89
  },

  // Digital Transformation Services
  {
    id: "digital-transformation-consulting",
    title: "Digital Transformation Strategy & Implementation",
    description: "End-to-end digital transformation consulting including strategy development, technology selection, change management, and implementation roadmap for enterprise organizations.",
    category: "Digital Transformation",
    subcategory: "Strategy & Consulting",
    price: 8999,
    currency: "$",
    tags: ["Digital Transformation", "Strategy", "Change Management", "Technology"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-01T09:30:00.000Z",
    rating: 4.9,
    reviewCount: 167,
    featured: true,
    location: "Global",
    availability: "6-8 Weeks",
    aiScore: 95
  },

  // API & Integration Services
  {
    id: "api-gateway-platform",
    title: "Enterprise API Gateway & Management Platform",
    description: "Scalable API gateway with rate limiting, authentication, monitoring, and developer portal. Includes API versioning, documentation, and analytics dashboard.",
    category: "API & Integration",
    subcategory: "API Management",
    price: 1999,
    currency: "$",
    tags: ["API Gateway", "API Management", "Developer Portal", "Analytics"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-28T11:45:00.000Z",
    rating: 4.7,
    reviewCount: 78,
    location: "Global",
    availability: "2-3 Weeks",
    aiScore: 87
  },

  // Mobile & App Development Services
  {
    id: "cross-platform-app-framework",
    title: "Cross-Platform Mobile App Development Framework",
    description: "React Native and Flutter-based mobile app development framework with pre-built components, backend integration, and deployment automation for iOS and Android.",
    category: "Mobile & App Development",
    subcategory: "Cross-Platform",
    price: 2499,
    currency: "$",
    tags: ["Mobile Apps", "React Native", "Flutter", "Cross-Platform"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-12T13:25:00.000Z",
    rating: 4.8,
    reviewCount: 94,
    location: "Global",
    availability: "3-4 Weeks",
    aiScore: 90
  },

  // Testing & Quality Assurance Services
  {
    id: "ai-powered-testing-platform",
    title: "AI-Powered Testing & Quality Assurance Platform",
    description: "Intelligent testing platform with automated test case generation, visual regression testing, and AI-driven bug prediction. Reduces testing time by 70%.",
    category: "Testing & QA",
    subcategory: "AI Testing",
    price: 1799,
    currency: "$",
    tags: ["AI Testing", "Automation", "Quality Assurance", "Test Generation"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-25T10:15:00.000Z",
    rating: 4.6,
    reviewCount: 67,
    location: "Global",
    availability: "2-3 Weeks",
    aiScore: 88
  },

  // Customer Experience Services
  {
    id: "customer-experience-analytics",
    title: "Customer Experience Analytics & Optimization Platform",
    description: "Comprehensive CX analytics platform with sentiment analysis, journey mapping, and predictive customer behavior modeling. Includes A/B testing and optimization tools.",
    category: "Customer Experience",
    subcategory: "Analytics & Optimization",
    price: 2299,
    currency: "$",
    tags: ["Customer Experience", "Analytics", "Sentiment Analysis", "Journey Mapping"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-03T16:40:00.000Z",
    rating: 4.8,
    reviewCount: 82,
    location: "Global",
    availability: "2-3 Weeks",
    aiScore: 91
  },

  // Financial Technology Services
  {
    id: "fintech-compliance-platform",
    title: "FinTech Compliance & Risk Management Platform",
    description: "Regulatory compliance platform for financial services with automated reporting, risk assessment, and audit trail management. Supports multiple jurisdictions.",
    category: "Financial Technology",
    subcategory: "Compliance & Risk",
    price: 4999,
    currency: "$",
    tags: ["FinTech", "Compliance", "Risk Management", "Regulatory"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-20T12:30:00.000Z",
    rating: 4.9,
    reviewCount: 56,
    location: "Global",
    availability: "4-5 Weeks",
    aiScore: 92
  },

  // Healthcare Technology Services
  {
    id: "healthcare-ai-platform",
    title: "Healthcare AI & Telemedicine Platform",
    description: "AI-powered healthcare platform with diagnostic assistance, patient monitoring, and telemedicine capabilities. HIPAA compliant with advanced security features.",
    category: "Healthcare Technology",
    subcategory: "AI & Telemedicine",
    price: 6999,
    currency: "$",
    tags: ["Healthcare AI", "Telemedicine", "HIPAA", "Diagnostic"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1576091160399-112c8b0a0b1a?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-10T14:15:00.000Z",
    rating: 4.9,
    reviewCount: 34,
    location: "Global",
    availability: "6-8 Weeks",
    aiScore: 94
  },

  // Supply Chain & Logistics Services
  {
    id: "supply-chain-visibility",
    title: "Supply Chain Visibility & Optimization Platform",
    description: "End-to-end supply chain visibility platform with real-time tracking, demand forecasting, and optimization algorithms. Integrates with major ERP and logistics systems.",
    category: "Supply Chain & Logistics",
    subcategory: "Visibility & Optimization",
    price: 3799,
    currency: "$",
    tags: ["Supply Chain", "Visibility", "Optimization", "Logistics"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-30T09:20:00.000Z",
    rating: 4.7,
    reviewCount: 89,
    location: "Global",
    availability: "4-5 Weeks",
    aiScore: 89
  }
];

// Service categories for better organization
export const SERVICE_CATEGORIES = [
  {
    id: "ai-automation",
    name: "AI & Automation",
    description: "Intelligent automation solutions powered by artificial intelligence",
    icon: "🤖",
    services: ENHANCED_SERVICES.filter(s => s.category === "AI & Automation" || s.category === "AI & Content" || s.category === "AI & Analytics")
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity",
    description: "Advanced security solutions for modern digital threats",
    icon: "🔒",
    services: ENHANCED_SERVICES.filter(s => s.category === "Cybersecurity")
  },
  {
    id: "cloud-devops",
    name: "Cloud & DevOps",
    description: "Cloud infrastructure and development operations solutions",
    icon: "☁️",
    services: ENHANCED_SERVICES.filter(s => s.category === "Cloud & DevOps")
  },
  {
    id: "data-analytics",
    name: "Data & Analytics",
    description: "Data-driven insights and analytics platforms",
    icon: "📊",
    services: ENHANCED_SERVICES.filter(s => s.category === "Data & Analytics")
  },
  {
    id: "iot-edge",
    name: "IoT & Edge Computing",
    description: "Internet of Things and edge computing solutions",
    icon: "🌐",
    services: ENHANCED_SERVICES.filter(s => s.category === "IoT & Edge")
  },
  {
    id: "blockchain-web3",
    name: "Blockchain & Web3",
    description: "Decentralized technology and Web3 solutions",
    icon: "⛓️",
    services: ENHANCED_SERVICES.filter(s => s.category === "Blockchain & Web3")
  },
  {
    id: "digital-transformation",
    name: "Digital Transformation",
    description: "End-to-end digital transformation consulting and implementation",
    icon: "🚀",
    services: ENHANCED_SERVICES.filter(s => s.category === "Digital Transformation")
  },
  {
    id: "api-integration",
    name: "API & Integration",
    description: "API management and system integration solutions",
    icon: "🔗",
    services: ENHANCED_SERVICES.filter(s => s.category === "API & Integration")
  },
  {
    id: "mobile-apps",
    name: "Mobile & App Development",
    description: "Cross-platform mobile application development",
    icon: "📱",
    services: ENHANCED_SERVICES.filter(s => s.category === "Mobile & App Development")
  },
  {
    id: "testing-qa",
    name: "Testing & Quality Assurance",
    description: "AI-powered testing and quality assurance platforms",
    icon: "🧪",
    services: ENHANCED_SERVICES.filter(s => s.category === "Testing & QA")
  },
  {
    id: "customer-experience",
    name: "Customer Experience",
    description: "Customer experience optimization and analytics",
    icon: "👥",
    services: ENHANCED_SERVICES.filter(s => s.category === "Customer Experience")
  },
  {
    id: "fintech",
    name: "Financial Technology",
    description: "FinTech compliance and risk management solutions",
    icon: "💰",
    services: ENHANCED_SERVICES.filter(s => s.category === "Financial Technology")
  },
  {
    id: "healthcare-tech",
    name: "Healthcare Technology",
    description: "AI-powered healthcare and telemedicine solutions",
    icon: "🏥",
    services: ENHANCED_SERVICES.filter(s => s.category === "Healthcare Technology")
  },
  {
    id: "supply-chain",
    name: "Supply Chain & Logistics",
    description: "Supply chain visibility and optimization platforms",
    icon: "📦",
    services: ENHANCED_SERVICES.filter(s => s.category === "Supply Chain & Logistics")
  }
];

// Pricing tiers for different service levels
export const PRICING_TIERS = {
  basic: {
    name: "Basic",
    description: "Essential features for small businesses",
    priceRange: "$500 - $2,000",
    features: ["Core functionality", "Basic support", "Standard SLA", "Email support"]
  },
  professional: {
    name: "Professional",
    description: "Advanced features for growing businesses",
    priceRange: "$2,000 - $5,000",
    features: ["Advanced features", "Priority support", "Enhanced SLA", "Phone & email support", "Custom integrations"]
  },
  enterprise: {
    name: "Enterprise",
    description: "Full-featured solutions for large organizations",
    priceRange: "$5,000 - $15,000+",
    features: ["All features", "24/7 support", "Premium SLA", "Dedicated account manager", "Custom development", "On-premise options"]
  }
};

// Contact information
export const CONTACT_INFO = {
  mobile: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  address: "364 E Main St STE 1008 Middletown DE 19709",
  website: "https://ziontechgroup.com",
  businessHours: "Monday - Friday: 9:00 AM - 6:00 PM EST",
  emergencySupport: "24/7 emergency support available for enterprise clients"
>>>>>>> cursor/expand-services-and-deploy-updates-7114
};