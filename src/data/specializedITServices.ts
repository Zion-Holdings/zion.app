export interface SpecializedITService {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  price: number;
  currency: string;
  pricingModel: 'one-time' | 'monthly' | 'yearly' | 'per-user' | 'per-project' | 'usage-based' | 'freemium' | 'per-hour' | 'per-person';
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
  aiScore?: number;
  rating?: number;
  reviewCount?: number;
  featured?: boolean;
  location?: string;
  availability?: string;
  demoUrl?: string;
  documentationUrl?: string;
  technology?: string[];
  integrations?: string[];
  compliance?: string[];
  scalability?: string;
  deployment?: string;
  onsiteSupport?: boolean;
  emergencyResponse?: string;
}

export const SPECIALIZED_IT_SERVICES: SpecializedITService[] = [
  // Cloud Migration & Optimization
  {
    id: "cloud-migration-optimization",
    title: "Cloud Migration & Optimization",
    description: "Comprehensive cloud migration services including assessment, planning, execution, and optimization for AWS, Azure, and Google Cloud platforms.",
    category: "Cloud Services",
    subcategory: "Migration & Optimization",
    price: 2500,
    currency: "$",
    pricingModel: "per-project",
    features: [
      "Cloud readiness assessment",
      "Migration strategy planning",
      "Data migration and synchronization",
      "Application refactoring",
      "Performance optimization",
      "Cost optimization analysis",
      "Security and compliance setup",
      "Disaster recovery planning",
      "Training and documentation",
      "Post-migration support"
    ],
    benefits: [
      "Reduce infrastructure costs by 40%",
      "Improve application performance",
      "Enhance scalability and flexibility",
      "Strengthen security posture",
      "Enable remote work capabilities"
    ],
    useCases: [
      "Legacy system modernization",
      "Data center consolidation",
      "Application modernization",
      "Disaster recovery implementation",
      "Cost optimization initiatives"
    ],
    targetAudience: [
      "IT directors",
      "System administrators",
      "DevOps teams",
      "Business owners",
      "Operations managers"
    ],
    tags: ["Cloud Migration", "AWS", "Azure", "Google Cloud", "DevOps", "Optimization"],
    estimatedDelivery: "8-12 weeks",
    supportLevel: "premium",
    marketPrice: "$2,500 - $25,000/project",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    aiScore: 92,
    rating: 4.8,
    reviewCount: 89,
    featured: true,
    location: "Global",
    availability: "24/7",
    demoUrl: "https://ziontechgroup.com/demo/cloud-migration",
    documentationUrl: "https://ziontechgroup.com/docs/cloud-migration",
    technology: ["AWS", "Azure", "Google Cloud", "Terraform", "Docker", "Kubernetes"],
    integrations: ["Active Directory", "LDAP", "SAML", "OAuth", "REST APIs"],
    compliance: ["SOC 2", "ISO 27001", "HIPAA", "PCI DSS", "GDPR"],
    scalability: "Enterprise-grade with auto-scaling",
    deployment: "Multi-cloud with hybrid options",
    onsiteSupport: true,
    emergencyResponse: "4-hour response time"
  },

  // Cybersecurity Assessment & Implementation
  {
    id: "cybersecurity-assessment-implementation",
    title: "Cybersecurity Assessment & Implementation",
    description: "Comprehensive cybersecurity services including vulnerability assessments, penetration testing, security implementation, and ongoing monitoring.",
    category: "Cybersecurity",
    subcategory: "Assessment & Implementation",
    price: 1800,
    currency: "$",
    pricingModel: "per-project",
    features: [
      "Vulnerability assessment",
      "Penetration testing",
      "Security architecture design",
      "Firewall and IDS/IPS setup",
      "Endpoint protection implementation",
      "Security awareness training",
      "Incident response planning",
      "Compliance gap analysis",
      "Security monitoring setup",
      "Ongoing security maintenance"
    ],
    benefits: [
      "Identify and remediate security vulnerabilities",
      "Achieve compliance with industry standards",
      "Protect against cyber threats",
      "Reduce security incident risks",
      "Build customer trust and confidence"
    ],
    useCases: [
      "Security audits and assessments",
      "Compliance requirements",
      "Incident response preparation",
      "Security infrastructure setup",
      "Employee security training"
    ],
    targetAudience: [
      "CISOs and security teams",
      "IT managers",
      "Compliance officers",
      "Business owners",
      "Risk managers"
    ],
    tags: ["Cybersecurity", "Penetration Testing", "Vulnerability Assessment", "Compliance", "Security Implementation"],
    estimatedDelivery: "4-8 weeks",
    supportLevel: "enterprise",
    marketPrice: "$1,800 - $15,000/project",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    aiScore: 95,
    rating: 4.9,
    reviewCount: 156,
    featured: true,
    location: "Global",
    availability: "24/7",
    demoUrl: "https://ziontechgroup.com/demo/cybersecurity-assessment",
    documentationUrl: "https://ziontechgroup.com/docs/cybersecurity-assessment",
    technology: ["Nmap", "Metasploit", "Wireshark", "Nessus", "Qualys", "CrowdStrike"],
    integrations: ["SIEM systems", "EDR solutions", "Firewall management", "Active Directory"],
    compliance: ["NIST", "ISO 27001", "SOC 2", "PCI DSS", "HIPAA", "SOX"],
    scalability: "Enterprise-grade security solutions",
    deployment: "On-premise and cloud hybrid",
    onsiteSupport: true,
    emergencyResponse: "2-hour response time"
  },

  // Network Infrastructure Design & Implementation
  {
    id: "network-infrastructure-design",
    title: "Network Infrastructure Design & Implementation",
    description: "Complete network infrastructure services including design, implementation, optimization, and ongoing management for enterprise networks.",
    category: "Network Services",
    subcategory: "Infrastructure Design",
    price: 3200,
    currency: "$",
    pricingModel: "per-project",
    features: [
      "Network architecture design",
      "Hardware selection and procurement",
      "Network implementation and configuration",
      "Wireless network setup",
      "Network security implementation",
      "Performance optimization",
      "Monitoring and alerting setup",
      "Documentation and training",
      "Ongoing network management",
      "24/7 network monitoring"
    ],
    benefits: [
      "Optimize network performance",
      "Improve network security",
      "Reduce network downtime",
      "Enhance scalability",
      "Streamline network management"
    ],
    useCases: [
      "New office setup",
      "Network expansion",
      "Network modernization",
      "Performance optimization",
      "Security enhancement"
    ],
    targetAudience: [
      "IT directors",
      "Network administrators",
      "System administrators",
      "Business owners",
      "Facility managers"
    ],
    tags: ["Network Design", "Infrastructure", "Cisco", "Juniper", "Aruba", "Network Security"],
    estimatedDelivery: "6-10 weeks",
    supportLevel: "premium",
    marketPrice: "$3,200 - $35,000/project",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    aiScore: 91,
    rating: 4.7,
    reviewCount: 134,
    featured: true,
    location: "Global",
    availability: "24/7",
    demoUrl: "https://ziontechgroup.com/demo/network-infrastructure",
    documentationUrl: "https://ziontechgroup.com/docs/network-infrastructure",
    technology: ["Cisco", "Juniper", "Aruba", "Ubiquiti", "Palo Alto", "Fortinet"],
    integrations: ["Active Directory", "LDAP", "RADIUS", "TACACS+", "SNMP"],
    compliance: ["ISO 27001", "SOC 2", "Industry-specific standards"],
    scalability: "Enterprise-grade with growth planning",
    deployment: "On-premise with cloud management",
    onsiteSupport: true,
    emergencyResponse: "4-hour response time"
  },

  // Data Backup & Disaster Recovery
  {
    id: "data-backup-disaster-recovery",
    title: "Data Backup & Disaster Recovery",
    description: "Comprehensive data protection services including backup strategy, disaster recovery planning, and business continuity implementation.",
    category: "Data Protection",
    subcategory: "Backup & Recovery",
    price: 1200,
    currency: "$",
    pricingModel: "per-project",
    features: [
      "Backup strategy assessment",
      "Backup infrastructure design",
      "Automated backup implementation",
      "Disaster recovery planning",
      "Recovery testing and validation",
      "Offsite backup setup",
      "Cloud backup integration",
      "Monitoring and alerting",
      "Recovery procedures documentation",
      "Regular recovery testing"
    ],
    benefits: [
      "Protect critical business data",
      "Minimize data loss risks",
      "Ensure business continuity",
      "Meet compliance requirements",
      "Reduce recovery time objectives"
    ],
    useCases: [
      "Data protection planning",
      "Compliance requirements",
      "Business continuity planning",
      "Risk mitigation",
      "Insurance requirements"
    ],
    targetAudience: [
      "IT managers",
      "Data protection officers",
      "Risk managers",
      "Business owners",
      "Compliance officers"
    ],
    tags: ["Data Backup", "Disaster Recovery", "Business Continuity", "Data Protection", "Compliance"],
    estimatedDelivery: "3-6 weeks",
    supportLevel: "premium",
    marketPrice: "$1,200 - $12,000/project",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    aiScore: 93,
    rating: 4.8,
    reviewCount: 98,
    featured: true,
    location: "Global",
    availability: "24/7",
    demoUrl: "https://ziontechgroup.com/demo/data-backup-recovery",
    documentationUrl: "https://ziontechgroup.com/docs/data-backup-recovery",
    technology: ["Veeam", "Commvault", "Rubrik", "AWS S3", "Azure Backup", "Google Cloud Storage"],
    integrations: ["VMware", "Hyper-V", "Physical servers", "Cloud platforms"],
    compliance: ["SOC 2", "ISO 27001", "HIPAA", "PCI DSS", "SOX"],
    scalability: "Enterprise-grade with growth planning",
    deployment: "Hybrid on-premise and cloud",
    onsiteSupport: true,
    emergencyResponse: "2-hour response time"
  },

  // IT Consulting & Strategy
  {
    id: "it-consulting-strategy",
    title: "IT Consulting & Strategy",
    description: "Strategic IT consulting services to help organizations align technology with business objectives and optimize IT investments.",
    category: "IT Consulting",
    subcategory: "Strategy & Planning",
    price: 150,
    currency: "$",
    pricingModel: "per-hour",
    features: [
      "IT strategy development",
      "Technology roadmap planning",
      "IT governance framework",
      "Technology assessment",
      "Vendor evaluation",
      "Cost optimization analysis",
      "Risk assessment",
      "Change management planning",
      "Performance metrics definition",
      "Strategic recommendations"
    ],
    benefits: [
      "Align IT with business goals",
      "Optimize technology investments",
      "Reduce IT costs",
      "Improve operational efficiency",
      "Mitigate technology risks"
    ],
    useCases: [
      "IT strategy development",
      "Technology transformation",
      "Digital transformation",
      "IT cost optimization",
      "Technology vendor selection"
    ],
    targetAudience: [
      "C-level executives",
      "IT directors",
      "Business owners",
      "Operations managers",
      "Strategic planners"
    ],
    tags: ["IT Consulting", "Strategy", "Technology Planning", "Digital Transformation", "IT Governance"],
    estimatedDelivery: "Ongoing",
    supportLevel: "premium",
    marketPrice: "$150 - $300/hour",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    aiScore: 94,
    rating: 4.8,
    reviewCount: 167,
    featured: true,
    location: "Global",
    availability: "Business hours + emergency",
    demoUrl: "https://ziontechgroup.com/demo/it-consulting",
    documentationUrl: "https://ziontechgroup.com/docs/it-consulting",
    technology: ["Strategic frameworks", "Assessment tools", "Planning methodologies"],
    integrations: ["Business systems", "IT management tools", "Analytics platforms"],
    compliance: ["Industry best practices", "Regulatory requirements", "Standards frameworks"],
    scalability: "Adaptable to organization size",
    deployment: "On-site and remote consulting",
    onsiteSupport: true,
    emergencyResponse: "24-hour response time"
  },

  // Managed IT Services
  {
    id: "managed-it-services",
    title: "Managed IT Services",
    description: "Comprehensive managed IT services including 24/7 monitoring, proactive maintenance, help desk support, and strategic IT management.",
    category: "Managed Services",
    subcategory: "IT Management",
    price: 75,
    currency: "$",
    pricingModel: "per-user",
    features: [
      "24/7 network monitoring",
      "Proactive maintenance",
      "Help desk support",
      "Security management",
      "Backup and recovery",
      "Software updates",
      "Hardware maintenance",
      "Performance optimization",
      "Strategic IT planning",
      "Monthly reporting"
    ],
    benefits: [
      "Reduce IT operational costs",
      "Improve system reliability",
      "Enhance security posture",
      "Focus on core business",
      "Predictable IT costs"
    ],
    useCases: [
      "Small to medium businesses",
      "Growing organizations",
      "Companies without IT staff",
      "Organizations needing 24/7 support",
      "Compliance-focused businesses"
    ],
    targetAudience: [
      "Small business owners",
      "IT managers",
      "Operations managers",
      "Business owners",
      "Compliance officers"
    ],
    tags: ["Managed Services", "IT Management", "24/7 Support", "Proactive Maintenance", "Help Desk"],
    estimatedDelivery: "Immediate",
    supportLevel: "premium",
    marketPrice: "$75 - $150/user/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    aiScore: 92,
    rating: 4.7,
    reviewCount: 234,
    featured: true,
    location: "Global",
    availability: "24/7",
    demoUrl: "https://ziontechgroup.com/demo/managed-it-services",
    documentationUrl: "https://ziontechgroup.com/docs/managed-it-services",
    technology: ["RMM tools", "PSA platforms", "Monitoring systems", "Help desk software"],
    integrations: ["Business systems", "Cloud platforms", "Security tools", "Backup solutions"],
    compliance: ["SOC 2", "ISO 27001", "Industry-specific standards"],
    scalability: "Per-user pricing with volume discounts",
    deployment: "Hybrid on-premise and cloud management",
    onsiteSupport: true,
    emergencyResponse: "1-hour response time"
  },

  // Software Development & Customization
  {
    id: "software-development-customization",
    title: "Software Development & Customization",
    description: "Custom software development services including web applications, mobile apps, enterprise software, and system integration.",
    category: "Software Development",
    subcategory: "Custom Development",
    price: 85,
    currency: "$",
    pricingModel: "per-hour",
    features: [
      "Requirements analysis",
      "Custom software development",
      "Web application development",
      "Mobile app development",
      "API development",
      "Database design",
      "System integration",
      "Testing and quality assurance",
      "Deployment and training",
      "Ongoing maintenance"
    ],
    benefits: [
      "Custom solutions for specific needs",
      "Competitive advantage",
      "Process automation",
      "Improved efficiency",
      "Scalable technology solutions"
    ],
    useCases: [
      "Business process automation",
      "Customer portal development",
      "Internal tool development",
      "System integration",
      "Legacy system modernization"
    ],
    targetAudience: [
      "Business owners",
      "Operations managers",
      "IT managers",
      "Product managers",
      "Startup founders"
    ],
    tags: ["Software Development", "Custom Development", "Web Applications", "Mobile Apps", "System Integration"],
    estimatedDelivery: "Project-based",
    supportLevel: "premium",
    marketPrice: "$85 - $200/hour",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    aiScore: 93,
    rating: 4.8,
    reviewCount: 189,
    featured: true,
    location: "Global",
    availability: "Business hours + project support",
    demoUrl: "https://ziontechgroup.com/demo/software-development",
    documentationUrl: "https://ziontechgroup.com/docs/software-development",
    technology: ["React", "Node.js", "Python", "Java", "Swift", "Kotlin", "PostgreSQL", "MongoDB"],
    integrations: ["Third-party APIs", "Business systems", "Cloud platforms", "Legacy systems"],
    compliance: ["Security best practices", "Industry standards", "Accessibility guidelines"],
    scalability: "Scalable architecture design",
    deployment: "Cloud-native with on-premise options",
    onsiteSupport: true,
    emergencyResponse: "24-hour response time"
  },

  // IT Training & Certification
  {
    id: "it-training-certification",
    title: "IT Training & Certification",
    description: "Comprehensive IT training programs including technical skills, certifications, and professional development for IT teams.",
    category: "Training & Education",
    subcategory: "IT Skills Development",
    price: 1200,
    currency: "$",
    pricingModel: "per-person",
    features: [
      "Skills assessment",
      "Customized training programs",
      "Technical skills training",
      "Certification preparation",
      "Hands-on labs",
      "Online learning modules",
      "Instructor-led training",
      "Progress tracking",
      "Certification vouchers",
      "Post-training support"
    ],
    benefits: [
      "Improve team skills",
      "Increase productivity",
      "Reduce support tickets",
      "Enhance career development",
      "Achieve industry certifications"
    ],
    useCases: [
      "Team skill development",
      "New technology adoption",
      "Certification preparation",
      "Onboarding new staff",
      "Professional development"
    ],
    targetAudience: [
      "IT managers",
      "System administrators",
      "Developers",
      "Support technicians",
      "Business owners"
    ],
    tags: ["IT Training", "Certification", "Skills Development", "Professional Development", "Technical Training"],
    estimatedDelivery: "Scheduled",
    supportLevel: "standard",
    marketPrice: "$1,200 - $3,000/person",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    aiScore: 90,
    rating: 4.6,
    reviewCount: 145,
    featured: true,
    location: "Global",
    availability: "Scheduled + on-demand",
    demoUrl: "https://ziontechgroup.com/demo/it-training",
    documentationUrl: "https://ziontechgroup.com/docs/it-training",
    technology: ["Learning management systems", "Virtual labs", "Video conferencing", "Assessment tools"],
    integrations: ["HR systems", "Learning platforms", "Certification bodies"],
    compliance: ["Training standards", "Industry certifications", "Quality assurance"],
    scalability: "Group and individual training",
    deployment: "Hybrid online and in-person",
    onsiteSupport: true,
    emergencyResponse: "Business hours support"
  }
];

export default SPECIALIZED_IT_SERVICES;