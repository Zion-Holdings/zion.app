export interface ITService {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  price: number;
  currency: string;
  pricingModel: 'one-time' | 'monthly' | 'yearly' | 'per-user' | 'per-project' | 'usage-based' | 'hourly';
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
  featured?: boolean;
  aiScore?: number;
  rating?: number;
  reviewCount?: number;
  marketSize?: string;
  roi?: string;
  expertise?: string[];
  certifications?: string[];
  technologies?: string[];
  caseStudies?: string[];
  testimonials?: string[];
  availability?: string;
  responseTime?: string;
  sla?: string;
}

export const ENHANCED_IT_SERVICES: ITService[] = [
  // Cloud Infrastructure & Migration
  {
    id: "cloud-infrastructure-migration",
    title: "Cloud Infrastructure Migration & Optimization",
    description: "Comprehensive cloud migration services including AWS, Azure, and Google Cloud Platform setup, migration, and optimization for improved performance and cost efficiency.",
    category: "Cloud Services",
    subcategory: "Infrastructure & Migration",
    price: 5000,
    currency: "$",
    pricingModel: "per-project",
    features: [
      "Multi-cloud strategy planning",
      "Legacy system migration",
      "Performance optimization",
      "Cost optimization and monitoring",
      "Security implementation",
      "Disaster recovery setup",
      "24/7 monitoring and support",
      "Compliance and governance"
    ],
    benefits: [
      "Reduce infrastructure costs by 40-60%",
      "Improve system performance by 3x",
      "Enhance scalability and flexibility",
      "Reduce downtime by 99.9%",
      "Improve security posture"
    ],
    useCases: [
      "Enterprise cloud migration",
      "Startup infrastructure setup",
      "Legacy system modernization",
      "Multi-cloud optimization",
      "Disaster recovery planning"
    ],
    targetAudience: [
      "Enterprise companies",
      "Startups and scale-ups",
      "IT directors",
      "DevOps teams",
      "Business owners"
    ],
    tags: ["Cloud Migration", "AWS", "Azure", "GCP", "DevOps", "Infrastructure"],
    estimatedDelivery: "4-8 weeks",
    supportLevel: "enterprise",
    marketPrice: "$5,000 - $50,000",
    featured: true,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    expertise: ["AWS Solutions Architect", "Azure Administrator", "GCP Professional"],
    certifications: ["AWS Certified Solutions Architect", "Azure Solutions Architect", "GCP Professional Cloud Architect"],
    technologies: ["AWS", "Azure", "GCP", "Terraform", "Docker", "Kubernetes"],
    caseStudies: ["Fortune 500 Cloud Migration", "Startup Infrastructure Setup", "Multi-cloud Optimization"],
    testimonials: ["'Reduced our infrastructure costs by 50%'", "'Improved performance significantly'", "'Seamless migration experience'"],
    availability: "24/7",
    responseTime: "1 hour",
    sla: "99.9% uptime guarantee"
  },

  // Cybersecurity & Compliance
  {
    id: "cybersecurity-compliance-suite",
    title: "Cybersecurity & Compliance Suite",
    description: "Comprehensive cybersecurity services including threat detection, vulnerability assessment, penetration testing, and compliance management for various industry standards.",
    category: "Security",
    subcategory: "Cybersecurity & Compliance",
    price: 3000,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "24/7 threat monitoring and detection",
      "Vulnerability assessment and scanning",
      "Penetration testing services",
      "Security awareness training",
      "Incident response planning",
      "Compliance management (SOC2, ISO27001, HIPAA)",
      "Security policy development",
      "Regular security audits"
    ],
    benefits: [
      "Protect against 99.9% of cyber threats",
      "Achieve compliance certifications faster",
      "Reduce security incident response time by 80%",
      "Improve employee security awareness",
      "Minimize compliance risks and penalties"
    ],
    useCases: [
      "Enterprise security management",
      "Healthcare compliance (HIPAA)",
      "Financial services security",
      "E-commerce security",
      "Startup security foundation"
    ],
    targetAudience: [
      "CISOs and security teams",
      "Healthcare organizations",
      "Financial institutions",
      "E-commerce businesses",
      "Compliance officers"
    ],
    tags: ["Cybersecurity", "Compliance", "SOC2", "ISO27001", "HIPAA", "Penetration Testing"],
    estimatedDelivery: "2-4 weeks",
    supportLevel: "enterprise",
    marketPrice: "$3,000 - $15,000/month",
    featured: true,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    expertise: ["Cybersecurity", "Compliance", "Penetration Testing", "Incident Response"],
    certifications: ["CISSP", "CEH", "CompTIA Security+", "ISO27001 Lead Auditor"],
    technologies: ["SIEM", "EDR", "Firewall", "IDS/IPS", "Vulnerability Scanners"],
    caseStudies: ["Healthcare HIPAA Compliance", "Financial Services Security", "E-commerce Security"],
    testimonials: ["'Achieved SOC2 compliance in record time'", "'Prevented major security breach'", "'Excellent security expertise'"],
    availability: "24/7",
    responseTime: "30 minutes",
    sla: "99.99% security incident response"
  },

  // DevOps & CI/CD Implementation
  {
    id: "devops-cicd-implementation",
    title: "DevOps & CI/CD Implementation",
    description: "Complete DevOps transformation services including CI/CD pipeline setup, automation, monitoring, and team training for faster software delivery and improved quality.",
    category: "DevOps",
    subcategory: "CI/CD & Automation",
    price: 4000,
    currency: "$",
    pricingModel: "per-project",
    features: [
      "CI/CD pipeline design and implementation",
      "Infrastructure as Code (IaC)",
      "Automated testing and deployment",
      "Monitoring and alerting setup",
      "Performance optimization",
      "Team training and best practices",
      "Git workflow optimization",
      "Container orchestration"
    ],
    benefits: [
      "Reduce deployment time by 80%",
      "Improve code quality by 60%",
      "Reduce production bugs by 70%",
      "Increase team productivity by 3x",
      "Faster time to market"
    ],
    useCases: [
      "Software development teams",
      "Startup DevOps setup",
      "Enterprise transformation",
      "Microservices architecture",
      "Legacy system modernization"
    ],
    targetAudience: [
      "Development teams",
      "DevOps engineers",
      "IT managers",
      "Startup founders",
      "Enterprise architects"
    ],
    tags: ["DevOps", "CI/CD", "Automation", "Docker", "Kubernetes", "Jenkins"],
    estimatedDelivery: "3-6 weeks",
    supportLevel: "premium",
    marketPrice: "$4,000 - $30,000",
    featured: true,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    expertise: ["DevOps", "CI/CD", "Automation", "Containerization", "Monitoring"],
    certifications: ["AWS DevOps Engineer", "Azure DevOps Engineer", "Kubernetes Administrator"],
    technologies: ["Jenkins", "GitLab CI", "Docker", "Kubernetes", "Terraform", "Ansible"],
    caseStudies: ["Startup DevOps Transformation", "Enterprise CI/CD Implementation", "Microservices Migration"],
    testimonials: ["'Deployment time reduced from days to minutes'", "'Team productivity increased significantly'", "'Excellent DevOps expertise'"],
    availability: "Business hours + on-call",
    responseTime: "2 hours",
    sla: "99.5% pipeline uptime"
  },

  // Data Analytics & Business Intelligence
  {
    id: "data-analytics-business-intelligence",
    title: "Data Analytics & Business Intelligence",
    description: "Comprehensive data analytics services including data warehousing, ETL processes, dashboard creation, and predictive analytics for data-driven decision making.",
    category: "Data & Analytics",
    subcategory: "Business Intelligence",
    price: 3500,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Data warehouse design and implementation",
      "ETL pipeline development",
      "Real-time dashboard creation",
      "Predictive analytics models",
      "Data quality management",
      "Performance optimization",
      "User training and support",
      "Regular maintenance and updates"
    ],
    benefits: [
      "Improve decision-making speed by 5x",
      "Increase data accuracy by 95%",
      "Reduce reporting time by 80%",
      "Uncover hidden business insights",
      "Enable predictive capabilities"
    ],
    useCases: [
      "Sales and marketing analytics",
      "Financial reporting and analysis",
      "Customer behavior analysis",
      "Operational efficiency monitoring",
      "Market trend analysis"
    ],
    targetAudience: [
      "Data analysts",
      "Business intelligence teams",
      "Executives and managers",
      "Marketing teams",
      "Operations managers"
    ],
    tags: ["Data Analytics", "Business Intelligence", "Data Warehousing", "ETL", "Predictive Analytics"],
    estimatedDelivery: "4-6 weeks",
    supportLevel: "premium",
    marketPrice: "$3,500 - $20,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    expertise: ["Data Engineering", "Business Intelligence", "Analytics", "Machine Learning"],
    certifications: ["AWS Data Analytics", "Azure Data Engineer", "Google Data Analytics"],
    technologies: ["Snowflake", "Tableau", "Power BI", "Python", "SQL", "Apache Spark"],
    caseStudies: ["Retail Analytics Platform", "Financial Reporting System", "Marketing Analytics Dashboard"],
    testimonials: ["'Transformed our data into actionable insights'", "'Reporting time reduced significantly'", "'Excellent analytics expertise'"],
    availability: "Business hours",
    responseTime: "4 hours",
    sla: "99% data availability"
  },

  // Network Infrastructure & Security
  {
    id: "network-infrastructure-security",
    title: "Network Infrastructure & Security",
    description: "Complete network infrastructure design, implementation, and security services including SD-WAN, network segmentation, and advanced threat protection.",
    category: "Networking",
    subcategory: "Infrastructure & Security",
    price: 2500,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Network design and architecture",
      "SD-WAN implementation",
      "Network segmentation and VLANs",
      "Advanced threat protection",
      "Load balancing and failover",
      "Network monitoring and alerting",
      "Performance optimization",
      "24/7 network support"
    ],
    benefits: [
      "Improve network performance by 3x",
      "Reduce security vulnerabilities by 90%",
      "Increase network reliability by 99.9%",
      "Reduce network downtime by 80%",
      "Improve user experience"
    ],
    useCases: [
      "Enterprise network setup",
      "Multi-site connectivity",
      "Network security hardening",
      "Performance optimization",
      "Disaster recovery planning"
    ],
    targetAudience: [
      "Network administrators",
      "IT directors",
      "System administrators",
      "Security teams",
      "Business owners"
    ],
    tags: ["Networking", "SD-WAN", "Network Security", "Load Balancing", "Monitoring"],
    estimatedDelivery: "3-5 weeks",
    supportLevel: "premium",
    marketPrice: "$2,500 - $15,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    expertise: ["Network Engineering", "Network Security", "SD-WAN", "Load Balancing"],
    certifications: ["Cisco CCNP", "Juniper JNCIP", "CompTIA Network+"],
    technologies: ["Cisco", "Juniper", "Fortinet", "Palo Alto", "VMware NSX"],
    caseStudies: ["Multi-site Network Setup", "Network Security Hardening", "Performance Optimization"],
    testimonials: ["'Network performance improved dramatically'", "'Security posture significantly enhanced'", "'Excellent network expertise'"],
    availability: "24/7",
    responseTime: "1 hour",
    sla: "99.9% network uptime"
  },

  // IT Support & Managed Services
  {
    id: "it-support-managed-services",
    title: "IT Support & Managed Services",
    description: "Comprehensive IT support and managed services including help desk support, system administration, backup management, and proactive monitoring.",
    category: "Support & Management",
    subcategory: "Managed Services",
    price: 150,
    currency: "$",
    pricingModel: "per-user",
    features: [
      "24/7 help desk support",
      "System administration and maintenance",
      "Backup and disaster recovery",
      "Proactive monitoring and alerting",
      "Software updates and patching",
      "User training and support",
      "IT strategy consulting",
      "Regular health checks and reports"
    ],
    benefits: [
      "Reduce IT costs by 30-50%",
      "Improve system reliability by 99.9%",
      "Reduce response time by 80%",
      "Proactive issue prevention",
      "Expert IT expertise on demand"
    ],
    useCases: [
      "Small business IT support",
      "Enterprise managed services",
      "Startup IT foundation",
      "Remote workforce support",
      "IT infrastructure management"
    ],
    targetAudience: [
      "Small business owners",
      "IT managers",
      "Startup founders",
      "HR managers",
      "Operations managers"
    ],
    tags: ["IT Support", "Managed Services", "Help Desk", "System Administration", "Monitoring"],
    estimatedDelivery: "1-2 weeks",
    supportLevel: "premium",
    marketPrice: "$150 - $500/user/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    expertise: ["IT Support", "System Administration", "Network Management", "Security"],
    certifications: ["CompTIA A+", "Microsoft 365", "ITIL Foundation", "Cisco CCNA"],
    technologies: ["Windows", "Linux", "Microsoft 365", "VMware", "Backup Solutions"],
    caseStudies: ["Small Business IT Transformation", "Enterprise Support Setup", "Startup IT Foundation"],
    testimonials: ["'IT issues resolved quickly'", "'Proactive support prevents problems'", "'Excellent IT expertise'"],
    availability: "24/7",
    responseTime: "15 minutes",
    sla: "99% first-call resolution"
  },

  // Software Development & Custom Solutions
  {
    id: "software-development-custom-solutions",
    title: "Software Development & Custom Solutions",
    description: "Full-stack software development services including web applications, mobile apps, APIs, and custom business solutions tailored to specific needs.",
    category: "Development",
    subcategory: "Custom Software",
    price: 150,
    currency: "$",
    pricingModel: "hourly",
    features: [
      "Full-stack web development",
      "Mobile app development (iOS/Android)",
      "API development and integration",
      "Database design and optimization",
      "UI/UX design and implementation",
      "Testing and quality assurance",
      "Deployment and maintenance",
      "Technical documentation"
    ],
    benefits: [
      "Custom solutions for specific needs",
      "Scalable and maintainable code",
      "Modern technology stack",
      "Ongoing support and updates",
      "Competitive advantage through technology"
    ],
    useCases: [
      "Custom business applications",
      "E-commerce platforms",
      "Customer portals",
      "Internal tools and systems",
      "API integrations"
    ],
    targetAudience: [
      "Business owners",
      "Product managers",
      "Startup founders",
      "IT directors",
      "Operations managers"
    ],
    tags: ["Software Development", "Web Development", "Mobile Apps", "APIs", "Custom Solutions"],
    estimatedDelivery: "8-16 weeks",
    supportLevel: "premium",
    marketPrice: "$150 - $300/hour",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    expertise: ["Full-stack Development", "Mobile Development", "API Development", "UI/UX Design"],
    certifications: ["AWS Developer", "Microsoft Developer", "Google Developer"],
    technologies: ["React", "Node.js", "Python", "Java", "Swift", "Kotlin", "AWS", "Azure"],
    caseStudies: ["E-commerce Platform", "Customer Portal", "Internal Management System"],
    testimonials: ["'Delivered exactly what we needed'", "'Excellent development quality'", "'Great communication throughout'"],
    availability: "Business hours",
    responseTime: "24 hours",
    sla: "95% on-time delivery"
  },

  // Digital Transformation Consulting
  {
    id: "digital-transformation-consulting",
    title: "Digital Transformation Consulting",
    description: "Strategic digital transformation consulting services including technology assessment, roadmap planning, and implementation guidance for modern business operations.",
    category: "Consulting",
    subcategory: "Digital Transformation",
    price: 250,
    currency: "$",
    pricingModel: "hourly",
    features: [
      "Technology assessment and audit",
      "Digital transformation roadmap",
      "Change management strategy",
      "Technology selection guidance",
      "Implementation planning",
      "ROI analysis and tracking",
      "Stakeholder training",
      "Ongoing advisory services"
    ],
    benefits: [
      "Clear transformation roadmap",
      "Reduced implementation risks",
      "Improved ROI on technology investments",
      "Faster adoption of new technologies",
      "Competitive advantage through technology"
    ],
    useCases: [
      "Legacy system modernization",
      "Cloud migration strategy",
      "Digital workplace transformation",
      "Customer experience improvement",
      "Operational efficiency optimization"
    ],
    targetAudience: [
      "C-level executives",
      "IT directors",
      "Business transformation leaders",
      "Operations managers",
      "Strategic planners"
    ],
    tags: ["Digital Transformation", "Consulting", "Strategy", "Change Management", "Technology Planning"],
    estimatedDelivery: "4-12 weeks",
    supportLevel: "enterprise",
    marketPrice: "$250 - $500/hour",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    expertise: ["Digital Transformation", "Change Management", "Technology Strategy", "Business Process Optimization"],
    certifications: ["Change Management", "Project Management", "ITIL Expert"],
    technologies: ["Enterprise Architecture", "Business Process Modeling", "Change Management Tools"],
    caseStudies: ["Enterprise Digital Transformation", "Legacy System Modernization", "Customer Experience Transformation"],
    testimonials: ["'Transformed our business operations'", "'Clear roadmap for success'", "'Excellent strategic guidance'"],
    availability: "Business hours",
    responseTime: "48 hours",
    sla: "90% client satisfaction"
  },

  // AI & Machine Learning Implementation
  {
    id: "ai-machine-learning-implementation",
    title: "AI & Machine Learning Implementation",
    description: "End-to-end AI and machine learning implementation services including model development, data preparation, deployment, and ongoing optimization.",
    category: "AI & ML",
    subcategory: "Implementation Services",
    price: 5000,
    currency: "$",
    pricingModel: "per-project",
    features: [
      "AI strategy and use case identification",
      "Data preparation and preprocessing",
      "Model development and training",
      "Model deployment and integration",
      "Performance monitoring and optimization",
      "User training and documentation",
      "Ongoing model maintenance",
      "Scalability planning"
    ],
    benefits: [
      "Automate repetitive tasks by 80%",
      "Improve decision accuracy by 40%",
      "Reduce operational costs by 30%",
      "Enable predictive capabilities",
      "Competitive advantage through AI"
    ],
    useCases: [
      "Predictive analytics",
      "Process automation",
      "Customer segmentation",
      "Fraud detection",
      "Recommendation systems"
    ],
    targetAudience: [
      "Data scientists",
      "Business analysts",
      "IT directors",
      "Operations managers",
      "Product managers"
    ],
    tags: ["AI", "Machine Learning", "Data Science", "Predictive Analytics", "Automation"],
    estimatedDelivery: "6-12 weeks",
    supportLevel: "enterprise",
    marketPrice: "$5,000 - $100,000",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    expertise: ["Machine Learning", "Data Science", "AI Strategy", "Model Deployment"],
    certifications: ["AWS Machine Learning", "Azure AI Engineer", "Google ML Engineer"],
    technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "AWS SageMaker", "Azure ML"],
    caseStudies: ["Predictive Analytics Platform", "Process Automation System", "Customer Segmentation Model"],
    testimonials: ["'AI transformed our operations'", "'Excellent ML implementation'", "'Great ROI on AI investment'"],
    availability: "Business hours",
    responseTime: "24 hours",
    sla: "95% model accuracy"
  }
];

export const IT_SERVICE_CATEGORIES = [
  "Cloud Services",
  "Security",
  "DevOps",
  "Data & Analytics",
  "Networking",
  "Support & Management",
  "Development",
  "Consulting",
  "AI & ML"
];

export const IT_SERVICE_PRICING_MODELS = [
  { name: "Hourly", description: "Flexible hourly rates for consulting and development", range: "$150-500/hour" },
  { name: "Monthly", description: "Recurring monthly services for ongoing support", range: "$150-15,000/month" },
  { name: "Per Project", description: "Fixed project pricing for specific deliverables", range: "$5,000-100,000" }
];