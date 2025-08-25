export interface Service {
  id: string;
  name: string;
  description: string;
  category: string;
  subcategory: string;
  price: number;
  pricingModel: 'one-time' | 'subscription' | 'usage-based' | 'enterprise';
  features: string[];
  benefits: string[];
  useCases: string[];
  technologies: string[];
  rating: number;
  reviews: number;
  deliveryTime: string;
  support: string;
  demoUrl?: string;
  documentationUrl?: string;
  apiAccess: boolean;
  customization: boolean;
  integration: string[];
  compliance: string[];
  targetMarket: string[];
  roi: string;
  competitors: string[];
  marketTrend: 'growing' | 'stable' | 'emerging' | 'mature';
}

export const COMPREHENSIVE_SERVICES: Service[] = [
  // AI & Machine Learning Services
  {
    id: "ai-chatbot-enterprise",
    name: "Enterprise AI Chatbot Platform",
    description: "Advanced conversational AI platform with multi-language support, sentiment analysis, and seamless CRM integration for enterprise customer service.",
    category: "AI Services",
    subcategory: "Conversational AI",
    price: 4999,
    pricingModel: "subscription",
    features: [
      "Multi-language support (50+ languages)",
      "Sentiment analysis & emotion detection",
      "CRM integration (Salesforce, HubSpot)",
      "Advanced NLP with custom training",
      "Analytics dashboard & reporting",
      "24/7 availability & scalability",
      "Custom branding & white-labeling",
      "API access & webhook support"
    ],
    benefits: [
      "Reduce customer service costs by 60%",
      "Improve response time to under 1 second",
      "Handle 10,000+ concurrent conversations",
      "Increase customer satisfaction by 40%"
    ],
    useCases: [
      "Customer support automation",
      "Sales qualification & lead generation",
      "Product recommendations",
      "Appointment scheduling",
      "Technical support & troubleshooting"
    ],
    technologies: ["OpenAI GPT-4", "BERT", "TensorFlow", "React", "Node.js", "MongoDB"],
    rating: 4.9,
    reviews: 127,
    deliveryTime: "2-3 weeks",
    support: "24/7 priority support with dedicated account manager",
    demoUrl: "https://ziontechgroup.com/demo/ai-chatbot",
    documentationUrl: "https://docs.ziontechgroup.com/ai-chatbot",
    apiAccess: true,
    customization: true,
    integration: ["Salesforce", "HubSpot", "Zendesk", "Slack", "Microsoft Teams"],
    compliance: ["GDPR", "SOC 2", "HIPAA", "PCI DSS"],
    targetMarket: ["Enterprise", "E-commerce", "Healthcare", "Financial Services"],
    roi: "300% within 6 months",
    competitors: ["Intercom", "Drift", "Crisp"],
    marketTrend: "growing"
  },
  {
    id: "ai-predictive-analytics",
    name: "AI-Powered Predictive Analytics Suite",
    description: "Comprehensive predictive analytics platform using machine learning to forecast business trends, customer behavior, and market opportunities.",
    category: "AI Services",
    subcategory: "Predictive Analytics",
    price: 8999,
    pricingModel: "subscription",
    features: [
      "Real-time data processing & analysis",
      "Custom ML model development",
      "Automated feature engineering",
      "Predictive modeling & forecasting",
      "Interactive dashboards & visualizations",
      "Data quality monitoring & validation",
      "Model performance tracking",
      "Automated retraining & optimization"
    ],
    benefits: [
      "Increase revenue by 25% through better forecasting",
      "Reduce operational costs by 30%",
      "Improve decision-making accuracy by 80%",
      "Identify new business opportunities faster"
    ],
    useCases: [
      "Sales forecasting & demand planning",
      "Customer churn prediction",
      "Inventory optimization",
      "Risk assessment & fraud detection",
      "Market trend analysis"
    ],
    technologies: ["Python", "TensorFlow", "PyTorch", "Apache Spark", "Kubernetes", "React"],
    rating: 4.8,
    reviews: 89,
    deliveryTime: "4-6 weeks",
    support: "Business hours support with emergency hotline",
    demoUrl: "https://ziontechgroup.com/demo/predictive-analytics",
    documentationUrl: "https://docs.ziontechgroup.com/predictive-analytics",
    apiAccess: true,
    customization: true,
    integration: ["Tableau", "Power BI", "Salesforce", "SAP", "Oracle"],
    compliance: ["GDPR", "SOC 2", "ISO 27001"],
    targetMarket: ["Manufacturing", "Retail", "Financial Services", "Healthcare"],
    roi: "400% within 12 months",
    competitors: ["DataRobot", "H2O.ai", "RapidMiner"],
    marketTrend: "growing"
  },
  {
    id: "ai-computer-vision",
    name: "Computer Vision AI Platform",
    description: "Advanced computer vision platform for image recognition, object detection, and visual analytics across multiple industries.",
    category: "AI Services",
    subcategory: "Computer Vision",
    price: 6999,
    pricingModel: "subscription",
    features: [
      "Real-time object detection & recognition",
      "Facial recognition & emotion analysis",
      "Image classification & tagging",
      "Video analytics & processing",
      "Custom model training",
      "Edge computing deployment",
      "API endpoints & SDKs",
      "Performance monitoring & optimization"
    ],
    benefits: [
      "Automate visual inspection processes",
      "Improve quality control accuracy by 95%",
      "Reduce manual review time by 80%",
      "Enable new AI-powered features"
    ],
    useCases: [
      "Quality control & inspection",
      "Security & surveillance",
      "Retail analytics & customer insights",
      "Medical imaging & diagnosis",
      "Autonomous vehicles & robotics"
    ],
    technologies: ["OpenCV", "TensorFlow", "PyTorch", "CUDA", "Docker", "Kubernetes"],
    rating: 4.7,
    reviews: 156,
    deliveryTime: "3-5 weeks",
    support: "24/7 technical support with SLAs",
    demoUrl: "https://ziontechgroup.com/demo/computer-vision",
    documentationUrl: "https://docs.ziontechgroup.com/computer-vision",
    apiAccess: true,
    customization: true,
    integration: ["AWS", "Azure", "Google Cloud", "NVIDIA", "Intel"],
    compliance: ["GDPR", "SOC 2", "FDA", "CE"],
    targetMarket: ["Manufacturing", "Healthcare", "Retail", "Security", "Automotive"],
    roi: "250% within 8 months",
    competitors: ["Clarifai", "Roboflow", "Scale AI"],
    marketTrend: "growing"
  },

  // Micro SAAS Solutions
  {
    id: "saas-project-management",
    name: "Smart Project Management Suite",
    description: "Intelligent project management platform with AI-powered task prioritization, team collaboration, and automated workflow optimization.",
    category: "Micro SAAS",
    subcategory: "Project Management",
    price: 29,
    pricingModel: "subscription",
    features: [
      "AI-powered task prioritization",
      "Real-time team collaboration",
      "Automated workflow optimization",
      "Resource allocation & planning",
      "Time tracking & reporting",
      "Gantt charts & Kanban boards",
      "Mobile apps (iOS/Android)",
      "Integrations with 100+ tools"
    ],
    benefits: [
      "Increase team productivity by 35%",
      "Reduce project delays by 50%",
      "Improve resource utilization by 40%",
      "Streamline communication & collaboration"
    ],
    useCases: [
      "Software development teams",
      "Marketing campaigns",
      "Event planning",
      "Product launches",
      "Client projects"
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "AWS", "Docker"],
    rating: 4.6,
    reviews: 234,
    deliveryTime: "Instant access",
    support: "Email & chat support with knowledge base",
    demoUrl: "https://ziontechgroup.com/demo/project-management",
    documentationUrl: "https://docs.ziontechgroup.com/project-management",
    apiAccess: true,
    customization: true,
    integration: ["Slack", "Microsoft Teams", "GitHub", "Jira", "Trello"],
    compliance: ["GDPR", "SOC 2"],
    targetMarket: ["Startups", "Small Business", "Medium Business", "Enterprise"],
    roi: "200% within 3 months",
    competitors: ["Asana", "Monday.com", "ClickUp"],
    marketTrend: "mature"
  },
  {
    id: "saas-crm-intelligence",
    name: "AI-Powered CRM Intelligence",
    description: "Next-generation CRM platform with AI-driven insights, predictive lead scoring, and automated sales process optimization.",
    category: "Micro SAAS",
    subcategory: "Customer Relationship Management",
    price: 49,
    pricingModel: "subscription",
    features: [
      "AI-powered lead scoring",
      "Predictive sales analytics",
      "Automated follow-up sequences",
      "Customer behavior analysis",
      "Sales forecasting & pipeline management",
      "Email marketing automation",
      "Mobile CRM app",
      "Advanced reporting & dashboards"
    ],
    benefits: [
      "Increase sales conversion by 45%",
      "Reduce sales cycle time by 30%",
      "Improve customer retention by 25%",
      "Automate repetitive sales tasks"
    ],
    useCases: [
      "B2B sales teams",
      "E-commerce businesses",
      "Real estate agencies",
      "Insurance companies",
      "Consulting firms"
    ],
    technologies: ["React", "Python", "TensorFlow", "PostgreSQL", "Redis", "AWS"],
    rating: 4.8,
    reviews: 189,
    deliveryTime: "Instant access",
    support: "24/7 support with dedicated success manager",
    demoUrl: "https://ziontechgroup.com/demo/crm-intelligence",
    documentationUrl: "https://docs.ziontechgroup.com/crm-intelligence",
    apiAccess: true,
    customization: true,
    integration: ["Gmail", "Outlook", "Slack", "Zapier", "HubSpot"],
    compliance: ["GDPR", "SOC 2", "CCPA"],
    targetMarket: ["Sales Teams", "Small Business", "Medium Business"],
    roi: "300% within 6 months",
    competitors: ["Salesforce", "HubSpot", "Pipedrive"],
    marketTrend: "growing"
  },
  {
    id: "saas-marketing-automation",
    name: "Intelligent Marketing Automation Platform",
    description: "AI-driven marketing automation platform that personalizes customer experiences, optimizes campaigns, and maximizes ROI across all channels.",
    category: "Micro SAAS",
    subcategory: "Marketing Automation",
    price: 39,
    pricingModel: "subscription",
    features: [
      "AI-powered personalization",
      "Multi-channel campaign management",
      "Behavioral targeting & segmentation",
      "A/B testing & optimization",
      "Email marketing automation",
      "Social media management",
      "Analytics & attribution",
      "Lead nurturing workflows"
    ],
    benefits: [
      "Increase marketing ROI by 200%",
      "Improve customer engagement by 60%",
      "Reduce manual marketing tasks by 80%",
      "Personalize customer experiences at scale"
    ],
    useCases: [
      "E-commerce marketing",
      "B2B lead generation",
      "Content marketing",
      "Social media campaigns",
      "Email marketing"
    ],
    technologies: ["React", "Python", "Machine Learning", "PostgreSQL", "Redis", "AWS"],
    rating: 4.7,
    reviews: 167,
    deliveryTime: "Instant access",
    support: "Business hours support with emergency hotline",
    demoUrl: "https://ziontechgroup.com/demo/marketing-automation",
    documentationUrl: "https://docs.ziontechgroup.com/marketing-automation",
    apiAccess: true,
    customization: true,
    integration: ["Shopify", "WooCommerce", "Mailchimp", "Facebook", "Google Ads"],
    compliance: ["GDPR", "CAN-SPAM", "CCPA"],
    targetMarket: ["E-commerce", "B2B Companies", "Marketing Agencies"],
    roi: "250% within 4 months",
    competitors: ["Mailchimp", "ActiveCampaign", "ConvertKit"],
    marketTrend: "growing"
  },

  // IT Infrastructure Services
  {
    id: "it-cloud-migration",
    name: "Enterprise Cloud Migration Service",
    description: "Comprehensive cloud migration service including assessment, planning, execution, and optimization for enterprise applications and infrastructure.",
    category: "IT Services",
    subcategory: "Cloud Migration",
    price: 25000,
    pricingModel: "one-time",
    features: [
      "Cloud readiness assessment",
      "Migration strategy & planning",
      "Application refactoring",
      "Data migration & validation",
      "Performance optimization",
      "Security & compliance setup",
      "Training & documentation",
      "Post-migration support"
    ],
    benefits: [
      "Reduce infrastructure costs by 40%",
      "Improve application performance by 60%",
      "Enhance scalability & flexibility",
      "Strengthen security & compliance"
    ],
    useCases: [
      "Legacy system modernization",
      "Data center consolidation",
      "Application modernization",
      "Disaster recovery setup",
      "Global expansion"
    ],
    technologies: ["AWS", "Azure", "Google Cloud", "Kubernetes", "Docker", "Terraform"],
    rating: 4.9,
    reviews: 78,
    deliveryTime: "8-12 weeks",
    support: "Dedicated project team with 24/7 support",
    demoUrl: "https://ziontechgroup.com/demo/cloud-migration",
    documentationUrl: "https://docs.ziontechgroup.com/cloud-migration",
    apiAccess: false,
    customization: true,
    integration: ["VMware", "Hyper-V", "On-premise systems"],
    compliance: ["SOC 2", "ISO 27001", "HIPAA", "PCI DSS"],
    targetMarket: ["Enterprise", "Large Business", "Government"],
    roi: "150% within 18 months",
    competitors: ["Accenture", "Deloitte", "AWS Professional Services"],
    marketTrend: "growing"
  },
  {
    id: "it-cybersecurity-audit",
    name: "Comprehensive Cybersecurity Audit",
    description: "Full-spectrum cybersecurity assessment including penetration testing, vulnerability assessment, compliance review, and security roadmap development.",
    category: "IT Services",
    subcategory: "Cybersecurity",
    price: 15000,
    pricingModel: "one-time",
    features: [
      "Penetration testing (internal/external)",
      "Vulnerability assessment",
      "Security architecture review",
      "Compliance gap analysis",
      "Social engineering testing",
      "Incident response planning",
      "Security roadmap development",
      "Executive summary & recommendations"
    ],
    benefits: [
      "Identify and fix security vulnerabilities",
      "Ensure compliance with regulations",
      "Improve security posture",
      "Reduce cyber risk exposure"
    ],
    useCases: [
      "Compliance requirements",
      "Security posture assessment",
      "Pre-acquisition due diligence",
      "Annual security review",
      "Incident response preparation"
    ],
    technologies: ["Nmap", "Metasploit", "Burp Suite", "Nessus", "Custom tools"],
    rating: 4.8,
    reviews: 92,
    deliveryTime: "3-4 weeks",
    support: "Business hours support with emergency contact",
    demoUrl: "https://ziontechgroup.com/demo/cybersecurity-audit",
    documentationUrl: "https://docs.ziontechgroup.com/cybersecurity-audit",
    apiAccess: false,
    customization: true,
    integration: ["SIEM systems", "Security tools", "Compliance platforms"],
    compliance: ["SOC 2", "ISO 27001", "NIST", "GDPR", "HIPAA"],
    targetMarket: ["Enterprise", "Healthcare", "Financial Services", "Government"],
    roi: "200% through risk reduction",
    competitors: ["Deloitte", "PwC", "KPMG"],
    marketTrend: "growing"
  },
  {
    id: "it-managed-services",
    name: "24/7 Managed IT Services",
    description: "Comprehensive managed IT services including monitoring, maintenance, support, and strategic technology consulting for businesses of all sizes.",
    category: "IT Services",
    subcategory: "Managed Services",
    price: 2999,
    pricingModel: "subscription",
    features: [
      "24/7 network monitoring",
      "Proactive maintenance",
      "Help desk support",
      "Security management",
      "Backup & disaster recovery",
      "Strategic technology consulting",
      "Vendor management",
      "Monthly reporting & analytics"
    ],
    benefits: [
      "Reduce IT costs by 30%",
      "Improve system uptime to 99.9%",
      "Enhance security posture",
      "Focus on core business activities"
    ],
    useCases: [
      "Small business IT management",
      "Medium business IT operations",
      "Enterprise IT support",
      "Healthcare IT compliance",
      "Financial services IT security"
    ],
    technologies: ["SolarWinds", "ConnectWise", "Kaseya", "Microsoft 365", "AWS"],
    rating: 4.7,
    reviews: 145,
    deliveryTime: "1-2 weeks setup",
    support: "24/7 support with guaranteed response times",
    demoUrl: "https://ziontechgroup.com/demo/managed-services",
    documentationUrl: "https://docs.ziontechgroup.com/managed-services",
    apiAccess: false,
    customization: true,
    integration: ["Existing IT infrastructure", "Cloud platforms", "Security tools"],
    compliance: ["SOC 2", "ISO 27001", "HIPAA", "PCI DSS"],
    targetMarket: ["Small Business", "Medium Business", "Enterprise"],
    roi: "180% within 12 months",
    competitors: ["Datto", "ConnectWise", "Kaseya"],
    marketTrend: "mature"
  },

  // Emerging Technology Services
  {
    id: "quantum-computing-consulting",
    name: "Quantum Computing Strategy & Consulting",
    description: "Strategic consulting services to help organizations understand, prepare for, and leverage quantum computing opportunities in their industry.",
    category: "Emerging Tech",
    subcategory: "Quantum Computing",
    price: 50000,
    pricingModel: "one-time",
    features: [
      "Quantum readiness assessment",
      "Use case identification & prioritization",
      "Technology roadmap development",
      "Vendor evaluation & selection",
      "Talent acquisition strategy",
      "Investment planning & ROI analysis",
      "Risk assessment & mitigation",
      "Implementation planning"
    ],
    benefits: [
      "Prepare for quantum advantage",
      "Identify competitive opportunities",
      "Optimize technology investments",
      "Build quantum expertise internally"
    ],
    useCases: [
      "Financial services optimization",
      "Drug discovery & development",
      "Logistics & supply chain",
      "Cryptography & security",
      "Machine learning acceleration"
    ],
    technologies: ["IBM Qiskit", "Google Cirq", "Microsoft Q#", "D-Wave", "Rigetti"],
    rating: 4.9,
    reviews: 34,
    deliveryTime: "6-8 weeks",
    support: "Dedicated consultant with ongoing support",
    demoUrl: "https://ziontechgroup.com/demo/quantum-consulting",
    documentationUrl: "https://docs.ziontechgroup.com/quantum-consulting",
    apiAccess: false,
    customization: true,
    integration: ["Existing IT infrastructure", "Cloud platforms"],
    compliance: ["Industry-specific regulations"],
    targetMarket: ["Fortune 500", "Research Institutions", "Government"],
    roi: "300% through competitive advantage",
    competitors: ["McKinsey", "BCG", "Deloitte"],
    marketTrend: "emerging"
  },
  {
    id: "blockchain-enterprise",
    name: "Enterprise Blockchain Solutions",
    description: "Custom blockchain development services for enterprise applications including supply chain, identity management, and decentralized finance solutions.",
    category: "Emerging Tech",
    subcategory: "Blockchain",
    price: 35000,
    pricingModel: "one-time",
    features: [
      "Custom blockchain development",
      "Smart contract development",
      "DApp development",
      "Integration with existing systems",
      "Security auditing & testing",
      "Performance optimization",
      "Governance framework design",
      "Training & documentation"
    ],
    benefits: [
      "Increase transparency & traceability",
      "Reduce intermediaries & costs",
      "Improve security & trust",
      "Enable new business models"
    ],
    useCases: [
      "Supply chain tracking",
      "Digital identity management",
      "Cross-border payments",
      "Asset tokenization",
      "Voting systems"
    ],
    technologies: ["Ethereum", "Hyperledger", "Polkadot", "Solana", "Rust", "Solidity"],
    rating: 4.6,
    reviews: 67,
    deliveryTime: "10-14 weeks",
    support: "Dedicated development team with ongoing support",
    demoUrl: "https://ziontechgroup.com/demo/blockchain-solutions",
    documentationUrl: "https://docs.ziontechgroup.com/blockchain-solutions",
    apiAccess: true,
    customization: true,
    integration: ["ERP systems", "CRM platforms", "Payment gateways"],
    compliance: ["GDPR", "SOC 2", "Industry-specific regulations"],
    targetMarket: ["Financial Services", "Manufacturing", "Healthcare", "Government"],
    roi: "250% within 18 months",
    competitors: ["ConsenSys", "R3", "IBM Blockchain"],
    marketTrend: "growing"
  }
];

export const SERVICE_CATEGORIES = [
  { id: 1, name: "AI Services", count: 15, icon: "🤖", description: "Advanced AI and machine learning solutions" },
  { id: 2, name: "Micro SAAS", count: 12, icon: "💻", description: "Scalable software-as-a-service solutions" },
  { id: 3, name: "IT Services", count: 18, icon: "🖥️", description: "Comprehensive IT infrastructure and support" },
  { id: 4, name: "Emerging Tech", count: 8, icon: "🔮", description: "Cutting-edge technology solutions" },
  { id: 5, name: "Cybersecurity", count: 10, icon: "🔒", description: "Advanced security and compliance services" },
  { id: 6, name: "Cloud Solutions", count: 14, icon: "☁️", description: "Cloud migration and optimization" },
  { id: 7, name: "Data Analytics", count: 9, icon: "📊", description: "Business intelligence and analytics" },
  { id: 8, name: "Digital Transformation", count: 11, icon: "🚀", description: "End-to-end digital transformation" }
];

export const SERVICE_ADDONS = [
  {
    id: "custom-ai-model",
    name: "Custom AI Model Training",
    description: "Specialized training for your specific use case and data",
    price: 4999,
    category: "AI Services",
    features: ["Custom dataset preparation", "Model architecture design", "Training & optimization", "Deployment support"]
  },
  {
    id: "api-access",
    name: "Enterprise API Access",
    description: "Full API access with comprehensive documentation and support",
    price: 1999,
    category: "All Services",
    features: ["RESTful APIs", "GraphQL support", "Rate limiting", "Analytics dashboard"]
  },
  {
    id: "24-7-support",
    name: "24/7 Priority Support",
    description: "Round-the-clock technical support with guaranteed response times",
    price: 3999,
    category: "All Services",
    features: ["Dedicated support team", "SLA guarantees", "Emergency hotline", "Priority ticket handling"]
  },
  {
    id: "white-label",
    name: "White-Label Solution",
    description: "Customize and rebrand our solutions as your own",
    price: 9999,
    category: "All Services",
    features: ["Custom branding", "Logo integration", "Color schemes", "Domain customization"]
  },
  {
    id: "on-premise",
    name: "On-Premise Deployment",
    description: "Deploy our solutions in your own data center",
    price: 15000,
    category: "All Services",
    features: ["Local installation", "Data sovereignty", "Custom security", "Integration support"]
  }
];

export const INDUSTRY_SOLUTIONS = [
  {
    id: "healthcare-ai",
    name: "Healthcare AI Solutions",
    description: "AI-powered healthcare solutions for diagnosis, treatment planning, and patient care optimization",
    price: 25000,
    category: "Healthcare",
    features: ["Medical image analysis", "Predictive diagnostics", "Patient monitoring", "Drug discovery support"]
  },
  {
    id: "fintech-solutions",
    name: "FinTech Innovation Platform",
    description: "Comprehensive financial technology solutions for modern banking and financial services",
    price: 35000,
    category: "Financial Services",
    features: ["Digital banking", "Payment processing", "Risk assessment", "Compliance automation"]
  },
  {
    id: "manufacturing-ai",
    name: "Smart Manufacturing AI",
    description: "AI-driven manufacturing solutions for predictive maintenance, quality control, and process optimization",
    price: 28000,
    category: "Manufacturing",
    features: ["Predictive maintenance", "Quality control", "Supply chain optimization", "Energy management"]
  },
  {
    id: "retail-intelligence",
    name: "Retail Intelligence Platform",
    description: "AI-powered retail solutions for customer insights, inventory management, and personalized experiences",
    price: 22000,
    category: "Retail",
    features: ["Customer behavior analysis", "Inventory optimization", "Personalized marketing", "Demand forecasting"]
  }
];