import { ProductListing } from "../types/listings";

export const SERVICE_CATEGORIES = [
  {
    id: "ai-services",
    name: "AI Services",
    description: "Cutting-edge artificial intelligence solutions for business automation and decision making",
    icon: "🤖",
    count: 10
  },
  {
    id: "micro-saas",
    name: "Micro SAAS",
    description: "Scalable software-as-a-service solutions for business growth and efficiency",
    icon: "💻",
    count: 10
  },
  {
    id: "it-services",
    name: "IT Services",
    description: "Comprehensive IT infrastructure and management services",
    icon: "🔧",
    count: 10
  },
  {
    id: "blockchain-web3",
    name: "Blockchain & Web3",
    description: "Next-generation blockchain and decentralized web solutions",
    icon: "⛓️",
    count: 5
  },
  {
    id: "iot-hardware",
    name: "IoT & Edge Computing",
    description: "Internet of Things and hardware integration solutions",
    icon: "📡",
    count: 5
  },
  {
    id: "emerging-tech",
    name: "Emerging Tech",
    description: "Cutting-edge technologies shaping the future of business",
    icon: "🚀",
    count: 5
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity Services",
    description: "Advanced security solutions for modern digital environments",
    icon: "🛡️",
    count: 2
  },
  {
    id: "data-analytics",
    name: "Data Science & Analytics",
    description: "Comprehensive data solutions for insights and decision making",
    icon: "📊",
    count: 2
  }
];

export const COMPREHENSIVE_SERVICES: ProductListing[] = [
  // AI Services
  {
    id: "ai-1",
    name: "AI-Powered Business Intelligence",
    description: "Advanced analytics platform using machine learning to provide actionable business insights, predictive modeling, and automated reporting.",
    category: "AI Services",
    price: 2999,
    rating: 4.9,
    image: "/images/ai-business-intelligence.jpg",
    features: [
      "Real-time data processing",
      "Predictive analytics",
      "Custom dashboard creation",
      "Automated reporting",
      "Multi-source data integration"
    ],
    addons: ["data-connector", "custom-alerts", "api-access"]
  },
  {
    id: "ai-2",
    name: "Natural Language Processing Engine",
    description: "Sophisticated NLP solution for text analysis, sentiment analysis, language translation, and automated content generation.",
    category: "AI Services",
    price: 2499,
    rating: 4.8,
    image: "/images/nlp-engine.jpg",
    features: [
      "Multi-language support",
      "Sentiment analysis",
      "Text classification",
      "Named entity recognition",
      "Content summarization"
    ],
    addons: ["custom-model", "api-integration", "training-data"]
  },
  {
    id: "ai-3",
    name: "Computer Vision Solutions",
    description: "Advanced image and video analysis using deep learning for object detection, facial recognition, and automated quality control.",
    category: "AI Services",
    price: 3999,
    rating: 4.9,
    image: "/images/computer-vision.jpg",
    features: [
      "Object detection & tracking",
      "Facial recognition",
      "Image classification",
      "Video analytics",
      "Quality control automation"
    ],
    addons: ["custom-model", "edge-deployment", "api-access"]
  },
  {
    id: "ai-4",
    name: "AI-Powered Customer Service",
    description: "Intelligent chatbot and customer support automation using natural language processing and machine learning.",
    category: "AI Services",
    price: 1999,
    rating: 4.7,
    image: "/images/ai-customer-service.jpg",
    features: [
      "24/7 automated support",
      "Multi-language support",
      "Sentiment analysis",
      "Escalation to humans",
      "Integration with CRM"
    ],
    addons: ["custom-training", "voice-support", "analytics-dashboard"]
  },
  {
    id: "ai-5",
    name: "Predictive Maintenance AI",
    description: "IoT-powered predictive maintenance system using machine learning to prevent equipment failures and optimize maintenance schedules.",
    category: "AI Services",
    price: 3499,
    rating: 4.8,
    image: "/images/predictive-maintenance.jpg",
    features: [
      "Real-time monitoring",
      "Failure prediction",
      "Maintenance optimization",
      "Cost analysis",
      "Mobile alerts"
    ],
    addons: ["iot-hardware", "custom-algorithms", "integration-support"]
  },

  // Micro SAAS Services
  {
    id: "saas-1",
    name: "Project Management Suite",
    description: "Comprehensive project management platform with task tracking, team collaboration, time management, and resource allocation.",
    category: "Micro SAAS",
    price: 49,
    rating: 4.6,
    image: "/images/project-management.jpg",
    features: [
      "Task management",
      "Team collaboration",
      "Time tracking",
      "Resource allocation",
      "Progress reporting"
    ],
    addons: ["advanced-analytics", "custom-workflows", "api-access"]
  },
  {
    id: "saas-2",
    name: "Marketing Automation Platform",
    description: "All-in-one marketing automation solution for email campaigns, social media management, lead nurturing, and analytics.",
    category: "Micro SAAS",
    price: 79,
    rating: 4.7,
    image: "/images/marketing-automation.jpg",
    features: [
      "Email automation",
      "Social media management",
      "Lead scoring",
      "Campaign analytics",
      "A/B testing"
    ],
    addons: ["advanced-segmentation", "crm-integration", "custom-templates"]
  },
  {
    id: "saas-3",
    name: "Financial Management Tool",
    description: "Comprehensive financial management platform for budgeting, expense tracking, invoicing, and financial reporting.",
    category: "Micro SAAS",
    price: 39,
    rating: 4.5,
    image: "/images/financial-management.jpg",
    features: [
      "Budget planning",
      "Expense tracking",
      "Invoice management",
      "Financial reporting",
      "Tax preparation"
    ],
    addons: ["bank-integration", "advanced-reporting", "multi-currency"]
  },
  {
    id: "saas-4",
    name: "HR Management System",
    description: "Complete HR solution for employee management, recruitment, performance tracking, and compliance management.",
    category: "Micro SAAS",
    price: 69,
    rating: 4.6,
    image: "/images/hr-management.jpg",
    features: [
      "Employee database",
      "Recruitment tools",
      "Performance management",
      "Compliance tracking",
      "Payroll integration"
    ],
    addons: ["advanced-analytics", "custom-workflows", "api-access"]
  },
  {
    id: "saas-5",
    name: "Inventory Management System",
    description: "Smart inventory management solution with real-time tracking, demand forecasting, and automated reordering.",
    category: "Micro SAAS",
    price: 59,
    rating: 4.7,
    image: "/images/inventory-management.jpg",
    features: [
      "Real-time tracking",
      "Demand forecasting",
      "Automated reordering",
      "Barcode scanning",
      "Multi-location support"
    ],
    addons: ["advanced-analytics", "supplier-integration", "mobile-app"]
  },

  // IT Services
  {
    id: "it-1",
    name: "Cloud Infrastructure Management",
    description: "Comprehensive cloud infrastructure management including migration, optimization, monitoring, and cost management.",
    category: "IT Services",
    price: 1999,
    rating: 4.8,
    image: "/images/cloud-infrastructure.jpg",
    features: [
      "Cloud migration",
      "Infrastructure optimization",
      "Cost management",
      "Performance monitoring",
      "Security compliance"
    ],
    addons: ["24-7-support", "disaster-recovery", "custom-automation"]
  },
  {
    id: "it-2",
    name: "Cybersecurity Assessment",
    description: "Comprehensive cybersecurity assessment including vulnerability scanning, penetration testing, and security audit.",
    category: "IT Services",
    price: 2999,
    rating: 4.9,
    image: "/images/cybersecurity.jpg",
    features: [
      "Vulnerability assessment",
      "Penetration testing",
      "Security audit",
      "Compliance review",
      "Remediation planning"
    ],
    addons: ["ongoing-monitoring", "incident-response", "security-training"]
  },
  {
    id: "it-3",
    name: "DevOps Implementation",
    description: "Complete DevOps implementation including CI/CD pipelines, infrastructure as code, and automated testing.",
    category: "IT Services",
    price: 3999,
    rating: 4.8,
    image: "/images/devops.jpg",
    features: [
      "CI/CD pipelines",
      "Infrastructure as code",
      "Automated testing",
      "Monitoring & logging",
      "Performance optimization"
    ],
    addons: ["custom-automation", "training-program", "ongoing-support"]
  },
  {
    id: "it-4",
    name: "Network Infrastructure",
    description: "Complete network infrastructure design, implementation, and management for optimal performance and security.",
    category: "IT Services",
    price: 2499,
    rating: 4.7,
    image: "/images/network-infrastructure.jpg",
    features: [
      "Network design",
      "Hardware installation",
      "Configuration management",
      "Performance monitoring",
      "Security implementation"
    ],
    addons: ["24-7-monitoring", "backup-solutions", "disaster-recovery"]
  },
  {
    id: "it-5",
    name: "Data Backup & Recovery",
    description: "Comprehensive data backup and disaster recovery solution ensuring business continuity and data protection.",
    category: "IT Services",
    price: 1499,
    rating: 4.6,
    image: "/images/data-backup.jpg",
    features: [
      "Automated backups",
      "Cloud storage",
      "Disaster recovery",
      "Data encryption",
      "Recovery testing"
    ],
    addons: ["offsite-backup", "custom-retention", "recovery-training"]
  },

  // Blockchain & Web3 Services
  {
    id: "blockchain-1",
    name: "Smart Contract Development",
    description: "Secure and audited smart contract development for DeFi, NFTs, and enterprise blockchain applications.",
    category: "Blockchain & Web3",
    price: 4999,
    rating: 4.9,
    image: "/images/smart-contracts.jpg",
    features: [
      "Smart contract development",
      "Security auditing",
      "Gas optimization",
      "Multi-chain deployment",
      "Testing & validation"
    ],
    addons: ["custom-audit", "deployment-support", "ongoing-maintenance"]
  },
  {
    id: "blockchain-2",
    name: "DeFi Platform Development",
    description: "Complete DeFi platform development including yield farming, liquidity pools, and automated market making.",
    category: "Blockchain & Web3",
    price: 8999,
    rating: 4.8,
    image: "/images/defi-platform.jpg",
    features: [
      "Yield farming protocols",
      "Liquidity pools",
      "AMM algorithms",
      "Governance tokens",
      "Security features"
    ],
    addons: ["custom-protocols", "audit-services", "launch-support"]
  },
  {
    id: "blockchain-3",
    name: "NFT Marketplace Development",
    description: "Custom NFT marketplace with minting, trading, and auction capabilities for digital art and collectibles.",
    category: "Blockchain & Web3",
    price: 3999,
    rating: 4.7,
    image: "/images/nft-marketplace.jpg",
    features: [
      "NFT minting",
      "Marketplace trading",
      "Auction system",
      "Royalty management",
      "Multi-chain support"
    ],
    addons: ["custom-features", "mobile-app", "analytics-dashboard"]
  },

  // IoT & Hardware Services
  {
    id: "iot-1",
    name: "IoT Platform Development",
    description: "Scalable IoT platform with device management, real-time monitoring, data analytics, and mobile app integration.",
    category: "IoT & Edge Computing",
    price: 5999,
    rating: 4.8,
    image: "/images/iot-platform.jpg",
    features: [
      "Device management",
      "Real-time monitoring",
      "Data analytics",
      "Mobile app integration",
      "Cloud infrastructure"
    ],
    addons: ["custom-hardware", "edge-computing", "ai-integration"]
  },
  {
    id: "iot-2",
    name: "Smart Home Automation",
    description: "Complete smart home automation system with IoT devices, voice control, and intelligent scheduling.",
    category: "IoT & Edge Computing",
    price: 2499,
    rating: 4.6,
    image: "/images/smart-home.jpg",
    features: [
      "IoT device integration",
      "Voice control",
      "Smart scheduling",
      "Energy optimization",
      "Security monitoring"
    ],
    addons: ["custom-devices", "mobile-app", "24-7-support"]
  },
  {
    id: "iot-3",
    name: "Industrial IoT Solutions",
    description: "Industrial IoT solutions for manufacturing, logistics, and supply chain optimization with predictive analytics.",
    category: "IoT & Edge Computing",
    price: 7999,
    rating: 4.9,
    image: "/images/industrial-iot.jpg",
    features: [
      "Sensor integration",
      "Real-time monitoring",
      "Predictive analytics",
      "Automation control",
      "Performance optimization"
    ],
    addons: ["custom-sensors", "edge-computing", "ai-integration"]
  },

  // Emerging Tech Services
  {
    id: "emerging-1",
    name: "Quantum Computing Consulting",
    description: "Expert consultation on quantum computing applications, algorithm development, and quantum advantage strategies.",
    category: "Emerging Tech",
    price: 9999,
    rating: 4.9,
    image: "/images/quantum-computing.jpg",
    features: [
      "Quantum algorithm design",
      "Application assessment",
      "Hardware evaluation",
      "Performance optimization",
      "Strategic planning"
    ],
    addons: ["custom-algorithms", "hardware-access", "ongoing-support"]
  },
  {
    id: "emerging-2",
    name: "Edge AI Solutions",
    description: "Edge AI solutions for real-time processing, low-latency applications, and offline AI capabilities.",
    category: "Emerging Tech",
    price: 4499,
    rating: 4.8,
    image: "/images/edge-ai.jpg",
    features: [
      "Edge AI models",
      "Real-time processing",
      "Low-latency inference",
      "Offline capabilities",
      "Hardware optimization"
    ],
    addons: ["custom-models", "hardware-deployment", "performance-tuning"]
  },
  {
    id: "emerging-3",
    name: "5G Network Solutions",
    description: "5G network planning, implementation, and optimization for enhanced connectivity and IoT applications.",
    category: "Emerging Tech",
    price: 6999,
    rating: 4.7,
    image: "/images/5g-network.jpg",
    features: [
      "Network planning",
      "Infrastructure deployment",
      "Performance optimization",
      "IoT integration",
      "Security implementation"
    ],
    addons: ["custom-infrastructure", "performance-monitoring", "ongoing-support"]
  },

  // New AI Services
  {
    id: "ai-6",
    name: "AI-Powered Content Generation",
    description: "Advanced content generation using GPT and custom language models for marketing, documentation, and creative writing",
    category: "AI Services",
    price: 1799,
    rating: 4.8,
    image: "/images/ai-content-generation.jpg",
    features: [
      "Multi-language content",
      "Brand voice customization",
      "SEO optimization",
      "Content scheduling",
      "Performance analytics"
    ],
    addons: ["custom-model", "api-access", "training-data"]
  },
  {
    id: "ai-7",
    name: "Predictive Analytics Platform",
    description: "Comprehensive predictive analytics solution for business forecasting, risk assessment, and trend analysis",
    category: "AI Services",
    price: 3499,
    rating: 4.9,
    image: "/images/predictive-analytics.jpg",
    features: [
      "Machine learning models",
      "Real-time predictions",
      "Risk assessment",
      "Trend analysis",
      "Automated reporting"
    ],
    addons: ["custom-model", "data-connector", "custom-alerts"]
  },

  // New Micro SAAS Services
  {
    id: "micro-6",
    name: "AI-Powered Project Management",
    description: "Intelligent project management platform with AI-driven insights, automation, and predictive analytics",
    category: "Micro SAAS",
    price: 299,
    rating: 4.8,
    image: "/images/ai-project-management.jpg",
    features: [
      "AI task prioritization",
      "Resource optimization",
      "Risk prediction",
      "Automated workflows",
      "Team collaboration"
    ],
    addons: ["advanced-analytics", "custom-workflows", "mobile-app"]
  },
  {
    id: "micro-7",
    name: "Smart Customer Support",
    description: "AI-powered customer support platform with chatbots, sentiment analysis, and automated ticket routing",
    category: "Micro SAAS",
    price: 199,
    rating: 4.7,
    image: "/images/smart-customer-support.jpg",
    features: [
      "Intelligent chatbots",
      "Sentiment analysis",
      "Automated routing",
      "Knowledge base",
      "Performance metrics"
    ],
    addons: ["custom-templates", "crm-integration", "advanced-analytics"]
  },

  // New IT Services
  {
    id: "it-6",
    name: "DevOps Automation",
    description: "Complete DevOps automation including CI/CD pipelines, infrastructure as code, and monitoring",
    category: "IT Services",
    price: 2499,
    rating: 4.8,
    image: "/images/devops-automation.jpg",
    features: [
      "CI/CD pipelines",
      "Infrastructure as code",
      "Automated testing",
      "Monitoring & alerting",
      "Security scanning"
    ],
    addons: ["24-7-support", "custom-automation", "disaster-recovery"]
  },
  {
    id: "it-7",
    name: "Data Center Migration",
    description: "Comprehensive data center migration services including planning, execution, and validation",
    category: "IT Services",
    price: 4999,
    rating: 4.9,
    image: "/images/data-center-migration.jpg",
    features: [
      "Migration planning",
      "Data validation",
      "Downtime minimization",
      "Performance testing",
      "Post-migration support"
    ],
    addons: ["24-7-support", "disaster-recovery", "custom-automation"]
  },

  // Additional AI Services
  {
    id: "ai-8",
    name: "AI-Powered Supply Chain Optimization",
    description: "Intelligent supply chain management using AI to predict demand, optimize inventory, and reduce costs",
    category: "AI Services",
    price: 4499,
    rating: 4.8,
    image: "/images/ai-supply-chain.jpg",
    features: [
      "Demand forecasting",
      "Inventory optimization",
      "Route optimization",
      "Supplier risk assessment",
      "Real-time monitoring"
    ],
    addons: ["custom-model", "data-connector", "custom-alerts"]
  },
  {
    id: "ai-9",
    name: "AI-Driven Financial Analysis",
    description: "Advanced financial analysis platform using machine learning for risk assessment, fraud detection, and investment insights",
    category: "AI Services",
    price: 5999,
    rating: 4.9,
    image: "/images/ai-financial-analysis.jpg",
    features: [
      "Risk assessment models",
      "Fraud detection",
      "Investment recommendations",
      "Market trend analysis",
      "Regulatory compliance"
    ],
    addons: ["custom-model", "api-access", "security-audit"]
  },
  {
    id: "ai-10",
    name: "AI-Powered Healthcare Diagnostics",
    description: "Medical imaging analysis and diagnostic support using advanced AI algorithms for improved accuracy",
    category: "AI Services",
    price: 7999,
    rating: 4.9,
    image: "/images/ai-healthcare.jpg",
    features: [
      "Medical image analysis",
      "Diagnostic support",
      "Patient data analysis",
      "Treatment recommendations",
      "HIPAA compliance"
    ],
    addons: ["custom-model", "api-access", "security-audit"]
  },

  // Additional Micro SAAS Services
  {
    id: "micro-8",
    name: "AI-Powered Inventory Management",
    description: "Intelligent inventory management system with predictive analytics and automated reordering",
    category: "Micro SAAS",
    price: 399,
    rating: 4.7,
    image: "/images/ai-inventory.jpg",
    features: [
      "Predictive analytics",
      "Automated reordering",
      "Multi-location support",
      "Barcode scanning",
      "Real-time tracking"
    ],
    addons: ["advanced-analytics", "custom-workflows", "mobile-app"]
  },
  {
    id: "micro-9",
    name: "Smart Accounting & Bookkeeping",
    description: "AI-powered accounting platform with automated categorization, expense tracking, and financial reporting",
    category: "Micro SAAS",
    price: 249,
    rating: 4.8,
    image: "/images/smart-accounting.jpg",
    features: [
      "Automated categorization",
      "Expense tracking",
      "Financial reporting",
      "Tax preparation",
      "Multi-currency support"
    ],
    addons: ["custom-templates", "crm-integration", "advanced-analytics"]
  },
  {
    id: "micro-10",
    name: "AI-Powered Sales Forecasting",
    description: "Intelligent sales forecasting platform using machine learning to predict revenue and optimize sales strategies",
    category: "Micro SAAS",
    price: 199,
    rating: 4.6,
    image: "/images/ai-sales-forecasting.jpg",
    features: [
      "Revenue prediction",
      "Sales trend analysis",
      "Lead scoring",
      "Performance metrics",
      "Custom dashboards"
    ],
    addons: ["custom-workflows", "crm-integration", "advanced-analytics"]
  },

  // Additional IT Services
  {
    id: "it-8",
    name: "Cloud-Native Application Development",
    description: "Modern cloud-native application development using microservices, containers, and serverless architecture",
    category: "IT Services",
    price: 3999,
    rating: 4.8,
    image: "/images/cloud-native-dev.jpg",
    features: [
      "Microservices architecture",
      "Container orchestration",
      "Serverless functions",
      "CI/CD pipelines",
      "Cloud optimization"
    ],
    addons: ["24-7-support", "custom-automation", "performance-tuning"]
  },
  {
    id: "it-9",
    name: "Zero-Trust Security Implementation",
    description: "Comprehensive zero-trust security framework implementation for modern enterprise environments",
    category: "IT Services",
    price: 5999,
    rating: 4.9,
    image: "/images/zero-trust-security.jpg",
    features: [
      "Identity verification",
      "Network segmentation",
      "Access control",
      "Threat detection",
      "Security monitoring"
    ],
    addons: ["security-audit", "incident-response", "24-7-support"]
  },
  {
    id: "it-10",
    name: "AI-Powered IT Operations",
    description: "Intelligent IT operations using AI for proactive monitoring, incident prediction, and automated resolution",
    category: "IT Services",
    price: 3499,
    rating: 4.8,
    image: "/images/ai-it-ops.jpg",
    features: [
      "Proactive monitoring",
      "Incident prediction",
      "Automated resolution",
      "Performance optimization",
      "Root cause analysis"
    ],
    addons: ["24-7-support", "custom-automation", "performance-tuning"]
  },

  // Additional Blockchain & Web3 Services
  {
    id: "bc-4",
    name: "DeFi Protocol Development",
    description: "Custom DeFi protocol development for lending, borrowing, and yield farming applications",
    category: "Blockchain & Web3",
    price: 8999,
    rating: 4.9,
    image: "/images/defi-protocol.jpg",
    features: [
      "Smart contract development",
      "Protocol design",
      "Security auditing",
      "Frontend development",
      "Testing and deployment"
    ],
    addons: ["security-audit", "deployment-support", "ongoing-maintenance"]
  },
  {
    id: "bc-5",
    name: "Web3 Identity Solutions",
    description: "Decentralized identity management solutions using blockchain for secure and privacy-preserving authentication",
    category: "Blockchain & Web3",
    price: 3999,
    rating: 4.7,
    image: "/images/web3-identity.jpg",
    features: [
      "DID implementation",
      "Verifiable credentials",
      "Privacy protection",
      "Cross-platform integration",
      "Compliance support"
    ],
    addons: ["custom-audit", "deployment-support", "ongoing-maintenance"]
  },

  // Additional IoT & Edge Computing Services
  {
    id: "iot-4",
    name: "Industrial IoT Platform",
    description: "Comprehensive industrial IoT platform for manufacturing, energy, and logistics optimization",
    category: "IoT & Edge Computing",
    price: 5999,
    rating: 4.8,
    image: "/images/industrial-iot.jpg",
    features: [
      "Sensor integration",
      "Real-time monitoring",
      "Predictive maintenance",
      "Energy optimization",
      "Safety monitoring"
    ],
    addons: ["custom-hardware", "edge-computing", "ai-integration"]
  },
  {
    id: "iot-5",
    name: "Smart Building Solutions",
    description: "Intelligent building management systems for energy efficiency, security, and occupant comfort",
    category: "IoT & Edge Computing",
    price: 4499,
    rating: 4.7,
    image: "/images/smart-building.jpg",
    features: [
      "Energy management",
      "Security systems",
      "Climate control",
      "Occupancy tracking",
      "Predictive maintenance"
    ],
    addons: ["custom-hardware", "edge-computing", "ai-integration"]
  },

  // Additional Emerging Technologies
  {
    id: "et-4",
    name: "AI-Powered Robotics",
    description: "Intelligent robotics solutions for automation, manufacturing, and service applications",
    category: "Emerging Technologies",
    price: 12999,
    rating: 4.8,
    image: "/images/ai-robotics.jpg",
    features: [
      "Robot programming",
      "AI integration",
      "Safety systems",
      "Performance optimization",
      "Maintenance support"
    ],
    addons: ["custom-algorithms", "hardware-access", "performance-tuning"]
  },
  {
    id: "et-5",
    name: "Edge AI Computing",
    description: "Edge computing solutions with integrated AI for real-time processing and decision making",
    category: "Emerging Technologies",
    price: 6999,
    rating: 4.9,
    image: "/images/edge-ai.jpg",
    features: [
      "Edge AI deployment",
      "Real-time processing",
      "Low-latency inference",
      "Resource optimization",
      "Scalable architecture"
    ],
    addons: ["custom-algorithms", "hardware-access", "performance-tuning"]
  },

  // New Category: Cybersecurity Services
  {
    id: "cyber-1",
    name: "Advanced Threat Detection",
    description: "Next-generation threat detection using AI and machine learning for proactive cybersecurity",
    category: "Cybersecurity Services",
    price: 3999,
    rating: 4.9,
    image: "/images/threat-detection.jpg",
    features: [
      "AI-powered detection",
      "Behavioral analysis",
      "Threat intelligence",
      "Real-time alerts",
      "Incident response"
    ],
    addons: ["security-audit", "incident-response", "24-7-support"]
  },
  {
    id: "cyber-2",
    name: "Cloud Security Assessment",
    description: "Comprehensive cloud security assessment and compliance for multi-cloud environments",
    category: "Cybersecurity Services",
    price: 2999,
    rating: 4.8,
    image: "/images/cloud-security.jpg",
    features: [
      "Multi-cloud security",
      "Compliance auditing",
      "Vulnerability assessment",
      "Security architecture",
      "Best practices"
    ],
    addons: ["security-audit", "incident-response", "24-7-support"]
  },

  // New Category: Data Science & Analytics
  {
    id: "data-1",
    name: "Big Data Analytics Platform",
    description: "Enterprise-grade big data analytics platform for processing and analyzing large-scale datasets",
    category: "Data Science & Analytics",
    price: 4999,
    rating: 4.8,
    image: "/images/big-data.jpg",
    features: [
      "Data processing",
      "Real-time analytics",
      "Machine learning",
      "Data visualization",
      "Scalable architecture"
    ],
    addons: ["custom-model", "data-connector", "api-access"]
  },
  {
    id: "data-2",
    name: "Data Lake Implementation",
    description: "Modern data lake architecture for centralized data storage, processing, and analytics",
    category: "Data Science & Analytics",
    price: 3499,
    rating: 4.7,
    image: "/images/data-lake.jpg",
    features: [
      "Data ingestion",
      "Storage optimization",
      "Processing pipelines",
      "Governance framework",
      "Security controls"
    ],
    addons: ["data-migration", "custom-automation", "24-7-support"]
  }
];

export const SERVICE_PRICING_TIERS = [
  {
    name: "Startup",
    description: "Perfect for small teams and MVPs",
    discount: "15% OFF",
    features: ["Basic Support", "Standard Features", "Community Access", "Email Support"]
  },
  {
    name: "Business",
    description: "Ideal for growing businesses",
    discount: "5% OFF",
    features: ["Priority Support", "Advanced Features", "Custom Integration", "Account Manager"]
  },
  {
    name: "Enterprise",
    description: "For large organizations",
    discount: "Custom",
    features: ["24/7 Support", "All Features", "Dedicated Manager", "On-site Consultation"]
  }
];

export const SERVICE_ADDONS = [
  // AI & Analytics Addons
  {
    id: "custom-model",
    name: "Custom AI Model Training",
    description: "Train custom AI models on your specific data for improved accuracy and relevance",
    price: 1499,
    category: "AI Services"
  },
  {
    id: "data-connector",
    name: "Data Connector Integration",
    description: "Connect your existing data sources and databases for seamless integration",
    price: 299,
    category: "AI Services"
  },
  {
    id: "custom-alerts",
    name: "Custom Alert System",
    description: "Configure personalized alerts and notifications based on your business rules",
    price: 199,
    category: "AI Services"
  },
  {
    id: "api-access",
    name: "API Access & Integration",
    description: "Full API access for custom integrations and third-party applications",
    price: 399,
    category: "AI Services"
  },
  {
    id: "training-data",
    name: "Training Data Preparation",
    description: "Professional data preparation and cleaning for optimal AI model performance",
    price: 799,
    category: "AI Services"
  },

  // Micro SAAS Addons
  {
    id: "advanced-analytics",
    name: "Advanced Analytics Dashboard",
    description: "Comprehensive analytics and reporting dashboard with custom metrics",
    price: 99,
    category: "Micro SAAS"
  },
  {
    id: "custom-workflows",
    name: "Custom Workflow Automation",
    description: "Tailored workflow automation to match your business processes",
    price: 149,
    category: "Micro SAAS"
  },
  {
    id: "crm-integration",
    name: "CRM Integration",
    description: "Seamless integration with popular CRM systems like Salesforce and HubSpot",
    price: 79,
    category: "Micro SAAS"
  },
  {
    id: "custom-templates",
    name: "Custom Templates & Branding",
    description: "Personalized templates and branding to match your company identity",
    price: 59,
    category: "Micro SAAS"
  },
  {
    id: "mobile-app",
    name: "Mobile App Development",
    description: "Native mobile applications for iOS and Android platforms",
    price: 299,
    category: "Micro SAAS"
  },

  // IT Services Addons
  {
    id: "24-7-support",
    name: "24/7 Technical Support",
    description: "Round-the-clock technical support and monitoring services",
    price: 499,
    category: "IT Services"
  },
  {
    id: "disaster-recovery",
    name: "Disaster Recovery Planning",
    description: "Comprehensive disaster recovery and business continuity planning",
    price: 899,
    category: "IT Services"
  },
  {
    id: "custom-automation",
    name: "Custom Automation Scripts",
    description: "Tailored automation scripts for your specific infrastructure needs",
    price: 399,
    category: "IT Services"
  },
  {
    id: "incident-response",
    name: "Incident Response Team",
    description: "Dedicated incident response team for security and technical issues",
    price: 699,
    category: "IT Services"
  },
  {
    id: "security-training",
    name: "Security Awareness Training",
    description: "Employee security training and awareness programs",
    price: 299,
    category: "IT Services"
  },

  // Blockchain Addons
  {
    id: "custom-audit",
    name: "Custom Security Audit",
    description: "Comprehensive security audit by blockchain security experts",
    price: 1999,
    category: "Blockchain & Web3"
  },
  {
    id: "deployment-support",
    name: "Deployment & Launch Support",
    description: "Full support for blockchain deployment and platform launch",
    price: 1499,
    category: "Blockchain & Web3"
  },
  {
    id: "ongoing-maintenance",
    name: "Ongoing Maintenance",
    description: "Continuous maintenance and updates for blockchain applications",
    price: 799,
    category: "Blockchain & Web3"
  },

  // IoT Addons
  {
    id: "custom-hardware",
    name: "Custom Hardware Development",
    description: "Development of custom IoT hardware for specific use cases",
    price: 2999,
    category: "IoT & Edge Computing"
  },
  {
    id: "edge-computing",
    name: "Edge Computing Implementation",
    description: "Edge computing solutions for real-time processing and reduced latency",
    price: 1499,
    category: "IoT & Edge Computing"
  },
  {
    id: "ai-integration",
    name: "AI Integration",
    description: "Integration of AI capabilities into IoT devices and platforms",
    price: 999,
    category: "IoT & Edge Computing"
  },

  // Emerging Tech Addons
  {
    id: "custom-algorithms",
    name: "Custom Quantum Algorithms",
    description: "Development of custom quantum algorithms for specific applications",
    price: 3999,
    category: "Emerging Tech"
  },
  {
    id: "hardware-access",
    name: "Quantum Hardware Access",
    description: "Access to quantum computing hardware for testing and development",
    price: 1999,
    category: "Emerging Tech"
  },
  {
    id: "performance-tuning",
    name: "Performance Tuning",
    description: "Optimization and tuning for maximum performance and efficiency",
    price: 799,
    category: "Emerging Tech"
  },

  // New Addon Services
  {
    id: "ai-training",
    name: "AI Model Training & Fine-tuning",
    description: "Custom training and fine-tuning of AI models for specific business use cases",
    price: 2499,
    category: "AI Services"
  },
  {
    id: "data-migration",
    name: "Data Migration & Integration",
    description: "Seamless data migration between systems with validation and testing",
    price: 899,
    category: "IT Services"
  },
  {
    id: "security-audit",
    name: "Comprehensive Security Audit",
    description: "Full security assessment including penetration testing and compliance review",
    price: 1999,
    category: "IT Services"
  },
  {
    id: "custom-development",
    name: "Custom Feature Development",
    description: "Development of custom features and integrations for existing platforms",
    price: 1499,
    category: "Micro SAAS"
  },
  {
    id: "consulting",
    name: "Strategic Technology Consulting",
    description: "Expert consultation on technology strategy and digital transformation",
    price: 299,
    category: "All Services"
  },

  // Additional Addon Services
  {
    id: "ai-optimization",
    name: "AI Model Optimization",
    description: "Performance optimization and fine-tuning of existing AI models for better accuracy and efficiency",
    price: 1799,
    category: "AI Services"
  },
  {
    id: "data-quality",
    name: "Data Quality Assessment",
    description: "Comprehensive data quality assessment and improvement recommendations",
    price: 799,
    category: "Data Science & Analytics"
  },
  {
    id: "performance-monitoring",
    name: "Advanced Performance Monitoring",
    description: "Real-time performance monitoring and alerting for critical systems",
    price: 599,
    category: "IT Services"
  },
  {
    id: "compliance-framework",
    name: "Compliance Framework Setup",
    description: "Setup and implementation of industry-specific compliance frameworks",
    price: 2499,
    category: "Cybersecurity Services"
  },
  {
    id: "integration-support",
    name: "Third-Party Integration Support",
    description: "Expert support for integrating with popular third-party platforms and APIs",
    price: 899,
    category: "Micro SAAS"
  },
  {
    id: "training-workshops",
    name: "Technology Training Workshops",
    description: "Custom training workshops for teams on new technologies and best practices",
    price: 1499,
    category: "All Services"
  },
  {
    id: "disaster-recovery-planning",
    name: "Disaster Recovery Planning",
    description: "Comprehensive disaster recovery planning and testing services",
    price: 1999,
    category: "IT Services"
  },
  {
    id: "vendor-selection",
    name: "Technology Vendor Selection",
    description: "Expert guidance in selecting the right technology vendors and solutions",
    price: 799,
    category: "All Services"
  }
];