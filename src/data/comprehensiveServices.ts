export interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  price: number;
  priceType: 'one-time' | 'monthly' | 'yearly' | 'per-user';
  features: string[];
  benefits: string[];
  useCases: string[];
  technologies: string[];
  deliveryTime: string;
  support: string;
  rating: number;
  reviewCount: number;
  featured: boolean;
}

export const COMPREHENSIVE_SERVICES: Service[] = [
  // AI & Machine Learning Services
  {
<<<<<<< HEAD
    id: "ai-automation-suite",
    title: "AI Workflow Automation Suite",
    description: "End-to-end AI workflow automation platform that streamlines business processes, reduces manual tasks by 80%, and provides intelligent decision-making capabilities. Includes process mapping, automation design, and performance analytics.",
    category: "AI & Automation",
    subcategory: "Workflow Automation",
    price: "2999",
    currency: "$",
    tags: ["AI Automation", "Workflow", "Process Optimization", "Business Intelligence"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T10:00:00.000Z",
=======
    id: "ai-chatbot-development",
    title: "AI Chatbot Development",
    description: "Custom AI-powered chatbots for customer service, sales, and support with natural language processing capabilities",
    category: "AI & Machine Learning",
    subcategory: "Chatbots",
    price: 2500,
    priceType: "one-time",
    features: [
      "Natural Language Processing (NLP)",
      "Multi-language support",
      "Integration with CRM systems",
      "Analytics dashboard",
      "24/7 availability",
      "Custom training data"
    ],
    benefits: [
      "Reduce customer service costs by 30%",
      "Improve response time to under 1 second",
      "Handle multiple conversations simultaneously",
      "Scalable customer support solution"
    ],
    useCases: [
      "E-commerce customer support",
      "Lead qualification and sales",
      "Technical support automation",
      "Appointment scheduling"
    ],
    technologies: ["Python", "TensorFlow", "OpenAI GPT", "Dialogflow", "React", "Node.js"],
    deliveryTime: "3-4 weeks",
    support: "3 months post-launch support included",
>>>>>>> bfd29442eb0d815cc7d437a97d09f1130ceb6a0c
    rating: 4.9,
    reviewCount: 47,
    featured: true
  },
  {
<<<<<<< HEAD
    id: "ai-customer-insights",
    title: "AI-Powered Customer Behavior Analytics",
    description: "Advanced customer behavior analysis platform using machine learning to predict customer needs, identify churn risks, and optimize customer experience. Real-time insights with actionable recommendations.",
    category: "AI & Analytics",
    subcategory: "Customer Intelligence",
    price: "1899",
    currency: "$",
    tags: ["Customer Analytics", "Behavior Prediction", "Churn Prevention", "CX Optimization"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-20T14:30:00.000Z",
=======
    id: "predictive-analytics-platform",
    title: "Predictive Analytics Platform",
    description: "Advanced data analytics platform with machine learning models for business forecasting and insights",
    category: "AI & Machine Learning",
    subcategory: "Analytics",
    price: 8000,
    priceType: "one-time",
    features: [
      "Real-time data processing",
      "Custom ML model development",
      "Interactive dashboards",
      "API integration",
      "Automated reporting",
      "Data visualization tools"
    ],
    benefits: [
      "Improve decision-making accuracy by 40%",
      "Identify market trends and opportunities",
      "Optimize resource allocation",
      "Reduce operational risks"
    ],
    useCases: [
      "Sales forecasting",
      "Inventory optimization",
      "Customer behavior analysis",
      "Risk assessment"
    ],
    technologies: ["Python", "Scikit-learn", "TensorFlow", "Apache Spark", "Tableau", "AWS"],
    deliveryTime: "6-8 weeks",
    support: "6 months post-launch support included",
>>>>>>> bfd29442eb0d815cc7d437a97d09f1130ceb6a0c
    rating: 4.8,
    reviewCount: 32,
    featured: true
  },
  {
<<<<<<< HEAD
    id: "ai-content-optimization",
    title: "AI Content Performance Optimizer",
    description: "Intelligent content optimization platform that analyzes content performance, suggests improvements, and automatically A/B tests variations to maximize engagement and conversion rates.",
    category: "AI & Marketing",
    subcategory: "Content Optimization",
    price: "799",
    currency: "$",
    tags: ["Content Marketing", "A/B Testing", "Performance Analytics", "SEO Optimization"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-01T09:15:00.000Z",
=======
    id: "computer-vision-solution",
    title: "Computer Vision Solution",
    description: "Custom computer vision applications for quality control, security, and automation using deep learning",
    category: "AI & Machine Learning",
    subcategory: "Computer Vision",
    price: 12000,
    priceType: "one-time",
    features: [
      "Object detection and recognition",
      "Image classification",
      "Real-time video processing",
      "Custom model training",
      "API endpoints",
      "Performance monitoring"
    ],
    benefits: [
      "Automate quality control processes",
      "Improve accuracy by 95%+",
      "Reduce manual inspection costs",
      "24/7 monitoring capability"
    ],
    useCases: [
      "Manufacturing quality control",
      "Security surveillance",
      "Medical imaging analysis",
      "Retail analytics"
    ],
    technologies: ["Python", "OpenCV", "TensorFlow", "PyTorch", "CUDA", "Docker"],
    deliveryTime: "8-10 weeks",
    support: "6 months post-launch support included",
    rating: 4.9,
    reviewCount: 28,
    featured: true
  },

  // Cloud & DevOps Services
  {
    id: "cloud-migration-service",
    title: "Cloud Migration Service",
    description: "Complete cloud migration solution for AWS, Azure, or Google Cloud with minimal downtime",
    category: "Cloud & DevOps",
    subcategory: "Migration",
    price: 15000,
    priceType: "one-time",
    features: [
      "Infrastructure assessment",
      "Migration planning and strategy",
      "Data migration tools",
      "Performance optimization",
      "Security configuration",
      "Post-migration support"
    ],
    benefits: [
      "Reduce infrastructure costs by 25-40%",
      "Improve scalability and flexibility",
      "Enhanced security and compliance",
      "Better disaster recovery"
    ],
    useCases: [
      "On-premises to cloud migration",
      "Multi-cloud strategy implementation",
      "Legacy system modernization",
      "Cost optimization"
    ],
    technologies: ["AWS", "Azure", "Google Cloud", "Terraform", "Docker", "Kubernetes"],
    deliveryTime: "4-6 weeks",
    support: "3 months post-migration support",
    rating: 4.8,
    reviewCount: 35,
    featured: true
  },
  {
    id: "devops-automation",
    title: "DevOps Automation Platform",
    description: "End-to-end DevOps automation with CI/CD pipelines, infrastructure as code, and monitoring",
    category: "Cloud & DevOps",
    subcategory: "Automation",
    price: 6000,
    priceType: "one-time",
    features: [
      "CI/CD pipeline setup",
      "Infrastructure as Code (IaC)",
      "Automated testing",
      "Monitoring and alerting",
      "Security scanning",
      "Performance optimization"
    ],
    benefits: [
      "Reduce deployment time by 80%",
      "Improve code quality and reliability",
      "Faster time to market",
      "Reduced human error"
    ],
    useCases: [
      "Software development teams",
      "Microservices architecture",
      "Containerized applications",
      "Multi-environment deployments"
    ],
    technologies: ["Jenkins", "GitLab CI", "Terraform", "Ansible", "Prometheus", "Grafana"],
    deliveryTime: "3-4 weeks",
    support: "6 months post-launch support included",
>>>>>>> bfd29442eb0d815cc7d437a97d09f1130ceb6a0c
    rating: 4.7,
    reviewCount: 41,
    featured: false
  },

  // Cybersecurity Services
  {
<<<<<<< HEAD
    id: "multi-cloud-orchestrator",
    title: "Multi-Cloud Infrastructure Orchestrator",
    description: "Unified platform for managing and optimizing multi-cloud environments (AWS, Azure, GCP). Features cost optimization, security compliance, and automated scaling across all cloud providers.",
    category: "Cloud & Infrastructure",
    subcategory: "Multi-Cloud Management",
    price: "3999",
    currency: "$",
    tags: ["Multi-Cloud", "Cost Optimization", "Security Compliance", "Auto-scaling"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-25T11:45:00.000Z",
    rating: 4.9,
    reviewCount: 67,
    featured: true,
    aiScore: 93,
    location: "Global",
    availability: "3-4 Weeks"
  },
  {
    id: "edge-computing-platform",
    title: "Edge Computing Performance Platform",
    description: "Distributed edge computing solution that brings computation closer to data sources, reducing latency by 60% and improving real-time processing capabilities for IoT and mobile applications.",
    category: "Cloud & Infrastructure",
    subcategory: "Edge Computing",
    price: "2499",
    currency: "$",
    tags: ["Edge Computing", "IoT", "Low Latency", "Real-time Processing"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-05T16:20:00.000Z",
    rating: 4.6,
    reviewCount: 45,
    aiScore: 89,
    location: "Global",
    availability: "2-3 Weeks"
  },

  // Cybersecurity & Compliance Services
  {
    id: "ai-threat-detection",
    title: "AI-Powered Threat Detection & Response",
    description: "Next-generation cybersecurity platform using machine learning to detect and respond to threats in real-time. Features behavioral analysis, automated incident response, and compliance reporting.",
    category: "Cybersecurity",
    subcategory: "Threat Detection",
    price: "4999",
    currency: "$",
    tags: ["Threat Detection", "AI Security", "Incident Response", "Compliance"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-30T13:10:00.000Z",
=======
    id: "cybersecurity-assessment",
    title: "Cybersecurity Assessment",
    description: "Comprehensive security audit including penetration testing, vulnerability assessment, and compliance review",
    category: "Cybersecurity",
    subcategory: "Assessment",
    price: 3500,
    priceType: "one-time",
    features: [
      "Penetration testing",
      "Vulnerability assessment",
      "Security architecture review",
      "Compliance audit",
      "Risk assessment",
      "Remediation roadmap"
    ],
    benefits: [
      "Identify security vulnerabilities",
      "Meet compliance requirements",
      "Protect against cyber threats",
      "Improve security posture"
    ],
    useCases: [
      "Financial services compliance",
      "Healthcare data protection",
      "E-commerce security",
      "Enterprise security audit"
    ],
    technologies: ["Nmap", "Metasploit", "Burp Suite", "OWASP ZAP", "Nessus", "Qualys"],
    deliveryTime: "2-3 weeks",
    support: "1 month post-assessment support",
>>>>>>> bfd29442eb0d815cc7d437a97d09f1130ceb6a0c
    rating: 4.9,
    reviewCount: 28,
    featured: true
  },
  {
    id: "security-monitoring",
    title: "24/7 Security Monitoring",
    description: "Round-the-clock security monitoring with threat detection, incident response, and security operations center",
    category: "Cybersecurity",
<<<<<<< HEAD
    subcategory: "Zero Trust",
    price: "3499",
    currency: "$",
    tags: ["Zero Trust", "Identity Management", "Network Security", "Continuous Monitoring"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-10T10:30:00.000Z",
=======
    subcategory: "Monitoring",
    price: 2500,
    priceType: "monthly",
    features: [
      "Real-time threat detection",
      "SIEM platform management",
      "Incident response",
      "Security analytics",
      "Compliance reporting",
      "Threat intelligence"
    ],
    benefits: [
      "Proactive threat detection",
      "Faster incident response",
      "Reduced security risks",
      "Compliance maintenance"
    ],
    useCases: [
      "Enterprise security operations",
      "Financial institutions",
      "Healthcare organizations",
      "Government agencies"
    ],
    technologies: ["Splunk", "ELK Stack", "IBM QRadar", "Microsoft Sentinel", "CrowdStrike", "Palo Alto"],
    deliveryTime: "2-3 weeks",
    support: "24/7 monitoring and support",
>>>>>>> bfd29442eb0d815cc7d437a97d09f1130ceb6a0c
    rating: 4.8,
    reviewCount: 52,
    featured: false
  },

  // Data & Analytics Services
  {
    id: "data-warehouse-solution",
    title: "Data Warehouse Solution",
    description: "Modern data warehouse with ETL pipelines, data modeling, and business intelligence dashboards",
    category: "Data & Analytics",
<<<<<<< HEAD
    subcategory: "Real-Time Processing",
    price: "2799",
    currency: "$",
    tags: ["Real-Time Analytics", "Data Pipeline", "Streaming", "Predictive Modeling"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-15T14:45:00.000Z",
=======
    subcategory: "Data Warehouse",
    price: 18000,
    priceType: "one-time",
    features: [
      "Data modeling and architecture",
      "ETL/ELT pipeline development",
      "Data quality management",
      "Performance optimization",
      "Business intelligence dashboards",
      "Data governance framework"
    ],
    benefits: [
      "Centralized data management",
      "Improved data quality and consistency",
      "Faster reporting and analytics",
      "Better decision-making insights"
    ],
    useCases: [
      "Business intelligence",
      "Customer analytics",
      "Financial reporting",
      "Operational analytics"
    ],
    technologies: ["Snowflake", "Amazon Redshift", "Google BigQuery", "Apache Airflow", "dbt", "Tableau"],
    deliveryTime: "8-12 weeks",
    support: "6 months post-launch support included",
>>>>>>> bfd29442eb0d815cc7d437a97d09f1130ceb6a0c
    rating: 4.7,
    reviewCount: 38,
    featured: false
  },
  {
    id: "real-time-analytics",
    title: "Real-Time Analytics Platform",
    description: "Streaming analytics platform for real-time data processing, monitoring, and decision-making",
    category: "Data & Analytics",
<<<<<<< HEAD
    subcategory: "Data Governance",
    price: "1999",
    currency: "$",
    tags: ["Data Governance", "Compliance", "Data Quality", "Privacy"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-20T09:20:00.000Z",
=======
    subcategory: "Streaming",
    price: 10000,
    priceType: "one-time",
    features: [
      "Real-time data streaming",
      "Stream processing engines",
      "Real-time dashboards",
      "Alerting and notifications",
      "Data pipeline monitoring",
      "Performance optimization"
    ],
    benefits: [
      "Immediate insights and actions",
      "Proactive problem detection",
      "Real-time decision making",
      "Improved operational efficiency"
    ],
    useCases: [
      "IoT data processing",
      "Financial trading systems",
      "E-commerce analytics",
      "Operational monitoring"
    ],
    technologies: ["Apache Kafka", "Apache Flink", "Apache Spark Streaming", "Redis", "InfluxDB", "Grafana"],
    deliveryTime: "6-8 weeks",
    support: "6 months post-launch support included",
>>>>>>> bfd29442eb0d815cc7d437a97d09f1130ceb6a0c
    rating: 4.6,
    reviewCount: 25,
    featured: false
  },

  // Micro SAAS Solutions
  {
<<<<<<< HEAD
    id: "ai-powered-devops",
    title: "AI-Powered DevOps Automation Platform",
    description: "Intelligent DevOps platform that automates CI/CD pipelines, predicts deployment risks, optimizes resource allocation, and provides intelligent monitoring and alerting. Reduces deployment time by 70%.",
    category: "DevOps & Development",
    subcategory: "DevOps Automation",
    price: "3299",
    currency: "$",
    tags: ["DevOps", "CI/CD", "Automation", "Monitoring"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-25T11:15:00.000Z",
=======
    id: "inventory-management-saas",
    title: "Inventory Management SAAS",
    description: "Cloud-based inventory management system with barcode scanning, forecasting, and multi-location support",
    category: "Micro SAAS",
    subcategory: "Business Management",
    price: 99,
    priceType: "monthly",
    features: [
      "Multi-location inventory tracking",
      "Barcode scanning integration",
      "Demand forecasting",
      "Automated reordering",
      "Real-time reporting",
      "Mobile app access"
    ],
    benefits: [
      "Reduce inventory costs by 20%",
      "Improve order fulfillment",
      "Prevent stockouts and overstock",
      "Streamline operations"
    ],
    useCases: [
      "Retail businesses",
      "Manufacturing companies",
      "E-commerce operations",
      "Distribution centers"
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "AWS", "Stripe"],
    deliveryTime: "4-6 weeks",
    support: "Ongoing support and updates",
>>>>>>> bfd29442eb0d815cc7d437a97d09f1130ceb6a0c
    rating: 4.8,
    reviewCount: 156,
    featured: true
  },
  {
<<<<<<< HEAD
    id: "code-quality-analyzer",
    title: "AI Code Quality & Security Analyzer",
    description: "Advanced static code analysis tool that identifies security vulnerabilities, code smells, and performance issues. Provides automated refactoring suggestions and maintains code quality standards.",
    category: "DevOps & Development",
    subcategory: "Code Quality",
    price: "899",
    currency: "$",
    tags: ["Code Analysis", "Security", "Quality", "Refactoring"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-01T15:30:00.000Z",
=======
    id: "project-management-saas",
    title: "Project Management SAAS",
    description: "Comprehensive project management platform with task tracking, team collaboration, and resource management",
    category: "Micro SAAS",
    subcategory: "Project Management",
    price: 149,
    priceType: "monthly",
    features: [
      "Task and milestone tracking",
      "Team collaboration tools",
      "Resource allocation",
      "Time tracking",
      "Gantt charts",
      "Integration with popular tools"
    ],
    benefits: [
      "Improve project delivery by 30%",
      "Better team collaboration",
      "Resource optimization",
      "Project visibility and control"
    ],
    useCases: [
      "Software development teams",
      "Marketing agencies",
      "Construction projects",
      "Event planning"
    ],
    technologies: ["Vue.js", "Laravel", "MySQL", "WebSockets", "AWS", "PayPal"],
    deliveryTime: "6-8 weeks",
    support: "Ongoing support and updates",
>>>>>>> bfd29442eb0d815cc7d437a97d09f1130ceb6a0c
    rating: 4.7,
    reviewCount: 89,
    featured: false
  },
  {
    id: "crm-saas",
    title: "CRM SAAS Platform",
    description: "Customer relationship management system with lead tracking, sales pipeline, and customer analytics",
    category: "Micro SAAS",
    subcategory: "Sales & Marketing",
    price: 199,
    priceType: "monthly",
    features: [
      "Lead and contact management",
      "Sales pipeline tracking",
      "Email marketing integration",
      "Customer analytics",
      "Automated workflows",
      "Mobile app access"
    ],
    benefits: [
      "Increase sales by 25%",
      "Improve customer retention",
      "Better lead management",
      "Streamlined sales process"
    ],
    useCases: [
      "Sales teams",
      "Marketing agencies",
      "Real estate companies",
      "Service businesses"
    ],
    technologies: ["Angular", "Django", "PostgreSQL", "Celery", "AWS", "Stripe"],
    deliveryTime: "8-10 weeks",
    support: "Ongoing support and updates",
    rating: 4.9,
    reviewCount: 203,
    featured: true
  },

  // Enterprise Solutions
  {
<<<<<<< HEAD
    id: "iot-platform-suite",
    title: "Enterprise IoT Platform & Management Suite",
    description: "Complete IoT solution including device management, data collection, real-time monitoring, and predictive maintenance. Supports thousands of devices with enterprise-grade security and scalability.",
    category: "IoT & Hardware",
    subcategory: "IoT Platform",
    price: "4499",
    currency: "$",
    tags: ["IoT", "Device Management", "Predictive Maintenance", "Enterprise"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1591405351990-4726e331f141?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-05T12:00:00.000Z",
    rating: 4.9,
    reviewCount: 89,
    featured: true,
    aiScore: 95,
    location: "Global",
    availability: "4-5 Weeks"
  },
  {
    id: "smart-building-automation",
    title: "Smart Building Automation & Energy Management",
    description: "Intelligent building management system that optimizes energy consumption, monitors environmental conditions, and provides predictive maintenance for HVAC, lighting, and security systems.",
    category: "IoT & Hardware",
    subcategory: "Building Automation",
    price: "5999",
    currency: "$",
    tags: ["Smart Building", "Energy Management", "HVAC", "Predictive Maintenance"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-10T10:45:00.000Z",
    rating: 4.8,
    reviewCount: 67,
    aiScore: 93,
    location: "Global",
    availability: "5-6 Weeks"
  },

  // Blockchain & Web3 Services
  {
    id: "enterprise-blockchain",
    title: "Enterprise Blockchain & Smart Contract Platform",
    description: "Permissioned blockchain platform for enterprise use cases including supply chain tracking, digital identity, and smart contract automation. Features high throughput, privacy controls, and regulatory compliance.",
    category: "Blockchain & Web3",
    subcategory: "Enterprise Blockchain",
    price: "7999",
    currency: "$",
    tags: ["Blockchain", "Smart Contracts", "Supply Chain", "Digital Identity"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-15T14:20:00.000Z",
    rating: 4.9,
    reviewCount: 45,
    featured: true,
    aiScore: 96,
    location: "Global",
    availability: "6-8 Weeks"
  },
  {
    id: "defi-analytics-platform",
    title: "DeFi Analytics & Risk Management Platform",
    description: "Comprehensive DeFi analytics platform providing real-time market data, yield optimization strategies, risk assessment, and portfolio tracking across multiple blockchain networks.",
    category: "Blockchain & Web3",
    subcategory: "DeFi Analytics",
    price: "1499",
    currency: "$",
    tags: ["DeFi", "Analytics", "Risk Management", "Yield Optimization"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-20T11:30:00.000Z",
    rating: 4.7,
    reviewCount: 123,
    aiScore: 90,
    location: "Global",
    availability: "2-3 Weeks"
  },

  // Digital Transformation Services
  {
    id: "digital-workplace-suite",
    title: "Digital Workplace & Collaboration Suite",
    description: "Integrated digital workplace platform combining communication, project management, document collaboration, and workflow automation. Enhances team productivity and remote work capabilities.",
    category: "Digital Transformation",
    subcategory: "Workplace Solutions",
    price: "1799",
    currency: "$",
    tags: ["Digital Workplace", "Collaboration", "Project Management", "Remote Work"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-25T09:15:00.000Z",
    rating: 4.8,
    reviewCount: 189,
    aiScore: 92,
    location: "Global",
    availability: "1-2 Weeks"
  },
  {
    id: "legacy-system-modernization",
    title: "Legacy System Modernization & Migration",
    description: "Comprehensive service for modernizing legacy systems including assessment, migration planning, data transformation, and new system implementation. Ensures business continuity and improved performance.",
    category: "Digital Transformation",
    subcategory: "System Modernization",
    price: "12999",
    currency: "$",
    tags: ["Legacy Modernization", "Migration", "Data Transformation", "Business Continuity"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-30T16:45:00.000Z",
    rating: 4.9,
    reviewCount: 78,
    featured: true,
    aiScore: 94,
    location: "Global",
    availability: "8-12 Weeks"
  }
];

// Service Categories for better organization
export const SERVICE_CATEGORIES = [
  {
    id: "ai-automation",
    name: "AI & Automation",
    description: "Intelligent automation solutions powered by artificial intelligence",
    icon: "🤖",
    services: COMPREHENSIVE_SERVICES.filter(s => s.category === "AI & Automation")
  },
  {
    id: "cloud-infrastructure",
    name: "Cloud & Infrastructure",
    description: "Scalable cloud solutions and infrastructure management",
    icon: "☁️",
    services: COMPREHENSIVE_SERVICES.filter(s => s.category === "Cloud & Infrastructure")
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity",
    description: "Advanced security solutions and threat protection",
    icon: "🔒",
    services: COMPREHENSIVE_SERVICES.filter(s => s.category === "Cybersecurity")
  },
  {
    id: "data-analytics",
    name: "Data & Analytics",
    description: "Data-driven insights and analytics solutions",
    icon: "📊",
    services: COMPREHENSIVE_SERVICES.filter(s => s.category === "Data & Analytics")
  },
  {
    id: "devops-development",
    name: "DevOps & Development",
    description: "Development tools and DevOps automation",
    icon: "⚡",
    services: COMPREHENSIVE_SERVICES.filter(s => s.category === "DevOps & Development")
  },
  {
    id: "iot-hardware",
    name: "IoT & Hardware",
    description: "Internet of Things and hardware solutions",
    icon: "🌐",
    services: COMPREHENSIVE_SERVICES.filter(s => s.category === "IoT & Hardware")
  },
  {
    id: "blockchain-web3",
    name: "Blockchain & Web3",
    description: "Blockchain technology and Web3 solutions",
    icon: "⛓️",
    services: COMPREHENSIVE_SERVICES.filter(s => s.category === "Blockchain & Web3")
=======
    id: "enterprise-erp",
    title: "Enterprise ERP Solution",
    description: "Comprehensive enterprise resource planning system integrating all business processes and operations",
    category: "Enterprise Solutions",
    subcategory: "ERP",
    price: 50000,
    priceType: "one-time",
    features: [
      "Financial management",
      "Supply chain management",
      "Human resources",
      "Manufacturing management",
      "Customer relationship management",
      "Business intelligence"
    ],
    benefits: [
      "Unified business processes",
      "Improved operational efficiency",
      "Better decision making",
      "Reduced operational costs"
    ],
    useCases: [
      "Large manufacturing companies",
      "Multi-national corporations",
      "Healthcare organizations",
      "Financial institutions"
    ],
    technologies: ["Java", "Spring Boot", "Oracle Database", "React", "Docker", "Kubernetes"],
    deliveryTime: "6-12 months",
    support: "2 years post-launch support included",
    rating: 4.8,
    reviewCount: 67,
    featured: true
>>>>>>> bfd29442eb0d815cc7d437a97d09f1130ceb6a0c
  },
  {
    id: "digital-transformation",
    title: "Digital Transformation Consulting",
    description: "End-to-end digital transformation services including strategy, implementation, and change management",
    category: "Enterprise Solutions",
    subcategory: "Consulting",
    price: 25000,
    priceType: "one-time",
    features: [
      "Digital strategy development",
      "Technology assessment",
      "Process optimization",
      "Change management",
      "Implementation support",
      "Performance monitoring"
    ],
    benefits: [
      "Modernize business operations",
      "Improve customer experience",
      "Increase operational efficiency",
      "Competitive advantage"
    ],
    useCases: [
      "Legacy system modernization",
      "Customer experience transformation",
      "Operational efficiency improvement",
      "Technology stack optimization"
    ],
    technologies: ["Strategy frameworks", "Change management", "Process optimization", "Technology implementation"],
    deliveryTime: "3-6 months",
    support: "1 year post-implementation support",
    rating: 4.9,
    reviewCount: 42,
    featured: true
  }
];

export const SERVICE_CATEGORIES = [
  {
    name: "AI & Machine Learning",
    description: "Cutting-edge artificial intelligence and machine learning solutions",
    icon: "🤖",
    count: 3
  },
  {
    name: "Cloud & DevOps",
    description: "Cloud infrastructure and development operations automation",
    icon: "☁️",
    count: 2
  },
  {
    name: "Cybersecurity",
    description: "Comprehensive security solutions and threat protection",
    icon: "🔒",
    count: 2
  },
  {
    name: "Data & Analytics",
    description: "Data processing, analytics, and business intelligence",
    icon: "📊",
    count: 2
  },
  {
    name: "Micro SAAS",
    description: "Scalable software-as-a-service solutions for businesses",
    icon: "💻",
    count: 3
  },
  {
    name: "Enterprise Solutions",
    description: "Large-scale enterprise systems and transformation services",
    icon: "🏢",
    count: 2
  }
];

export const CONTACT_INFO = {
  phone: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  address: "364 E Main St STE 1008 Middletown DE 19709",
  website: "https://ziontechgroup.com",
  businessHours: "Monday - Friday: 9:00 AM - 6:00 PM EST",
  emergencySupport: "24/7 emergency support available for enterprise clients"
};