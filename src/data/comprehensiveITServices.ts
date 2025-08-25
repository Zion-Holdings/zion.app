export interface ComprehensiveITService {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  description: string;
  price: number;
  pricingModel: string;
  duration: string;
  teamSize: string;
  features: string[];
  benefits: string[];
  targetAudience: string[];
  tags: string[];
  marketPrice: string;
  roi: string;
  competitors: string[];
  technology: string[];
  integrations: string[];
  compliance: string[];
  estimatedDelivery: string;
  supportLevel: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
    address: string;
  };
  demoUrl?: string;
  documentationUrl?: string;
  freeConsultation: boolean;
  maintenanceIncluded: boolean;
  warrantyPeriod: string;
}

export const COMPREHENSIVE_IT_SERVICES: ComprehensiveITService[] = [
  // Cloud Migration & Optimization
  {
    id: "cloud-migration-enterprise",
    name: "Enterprise Cloud Migration Suite",
    category: "Cloud Services",
    subcategory: "Migration & Optimization",
    description: "Comprehensive cloud migration solution for large enterprises including AWS, Azure, and Google Cloud with zero-downtime migration and cost optimization.",
    price: 25000,
    pricingModel: "one-time",
    duration: "12-16 weeks",
    teamSize: "8-12 people",
    features: [
      "Multi-cloud migration strategy",
      "Zero-downtime migration",
      "Cost optimization analysis",
      "Security and compliance setup",
      "Performance monitoring",
      "Disaster recovery planning",
      "Team training and documentation",
      "Post-migration support"
    ],
    benefits: [
      "Reduce infrastructure costs by 30-50%",
      "Improve scalability and flexibility",
      "Enhanced security and compliance",
      "Better disaster recovery",
      "24/7 monitoring and support"
    ],
    targetAudience: [
      "Large enterprises",
      "Fortune 500 companies",
      "Healthcare organizations",
      "Financial institutions",
      "Government agencies"
    ],
    tags: ["Cloud Migration", "AWS", "Azure", "Google Cloud", "Enterprise", "DevOps"],
    marketPrice: "$25,000 - $100,000",
    roi: "200% within 18 months",
    competitors: ["Accenture", "Deloitte", "IBM", "Capgemini", "Infosys"],
    technology: ["AWS", "Azure", "Google Cloud", "Terraform", "Kubernetes", "Docker"],
    integrations: ["Active Directory", "SAP", "Oracle", "Salesforce", "Custom applications"],
    compliance: ["SOC 2", "ISO 27001", "HIPAA", "PCI DSS", "FedRAMP"],
    estimatedDelivery: "12-16 weeks",
    supportLevel: "enterprise",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    demoUrl: "https://ziontechgroup.com/demo/cloud-migration",
    documentationUrl: "https://ziontechgroup.com/docs/cloud-migration",
    freeConsultation: true,
    maintenanceIncluded: true,
    warrantyPeriod: "2 years"
  },

  // Cybersecurity Assessment & Implementation
  {
    id: "cybersecurity-enterprise-suite",
    name: "Enterprise Cybersecurity Suite",
    category: "Cybersecurity",
    subcategory: "Assessment & Implementation",
    description: "Comprehensive cybersecurity solution including threat assessment, security implementation, monitoring, and incident response for enterprise organizations.",
    price: 35000,
    pricingModel: "one-time",
    duration: "16-20 weeks",
    teamSize: "10-15 people",
    features: [
      "Comprehensive security audit",
      "Penetration testing",
      "Security architecture design",
      "SIEM implementation",
      "Endpoint protection setup",
      "Network security hardening",
      "Security awareness training",
      "Incident response planning"
    ],
    benefits: [
      "Protect against 99.9% of cyber threats",
      "Meet compliance requirements",
      "Reduce security incidents by 80%",
      "Improve incident response time",
      "Enhanced brand reputation"
    ],
    targetAudience: [
      "Financial institutions",
      "Healthcare organizations",
      "Government agencies",
      "Manufacturing companies",
      "Technology companies"
    ],
    tags: ["Cybersecurity", "Threat Detection", "Compliance", "Incident Response", "Security Architecture"],
    marketPrice: "$35,000 - $150,000",
    roi: "300% within 24 months",
    competitors: ["CrowdStrike", "Palo Alto Networks", "Cisco", "Fortinet", "Check Point"],
    technology: ["SIEM", "EDR", "Firewalls", "IDS/IPS", "Vulnerability scanners", "Security tools"],
    integrations: ["Active Directory", "LDAP", "SSO", "VPN", "Email security"],
    compliance: ["SOC 2", "ISO 27001", "NIST", "HIPAA", "PCI DSS", "FedRAMP"],
    estimatedDelivery: "16-20 weeks",
    supportLevel: "enterprise",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    demoUrl: "https://ziontechgroup.com/demo/cybersecurity",
    documentationUrl: "https://ziontechgroup.com/docs/cybersecurity",
    freeConsultation: true,
    maintenanceIncluded: true,
    warrantyPeriod: "3 years"
  },

  // Data Analytics & Business Intelligence
  {
    id: "enterprise-bi-platform",
    name: "Enterprise BI & Analytics Platform",
    category: "Data Analytics",
    subcategory: "Business Intelligence",
    description: "Advanced business intelligence platform that transforms raw data into actionable insights with real-time dashboards and predictive analytics.",
    price: 40000,
    pricingModel: "one-time",
    duration: "20-24 weeks",
    teamSize: "12-18 people",
    features: [
      "Data warehouse design",
      "ETL pipeline development",
      "Real-time analytics",
      "Predictive modeling",
      "Custom dashboards",
      "Mobile BI applications",
      "Data governance",
      "Performance optimization"
    ],
    benefits: [
      "Improve decision-making by 60%",
      "Reduce reporting time by 80%",
      "Identify new business opportunities",
      "Optimize operations",
      "Data-driven culture"
    ],
    targetAudience: [
      "Large enterprises",
      "Data-driven companies",
      "Financial services",
      "Healthcare organizations",
      "Manufacturing companies"
    ],
    tags: ["Business Intelligence", "Data Analytics", "Data Warehouse", "Predictive Analytics", "Real-time"],
    marketPrice: "$40,000 - $200,000",
    roi: "250% within 18 months",
    competitors: ["Tableau", "Power BI", "Qlik", "Looker", "MicroStrategy"],
    technology: ["Python", "R", "SQL Server", "PostgreSQL", "Apache Spark", "Kafka"],
    integrations: ["ERP systems", "CRM platforms", "Cloud databases", "API gateways"],
    compliance: ["GDPR", "CCPA", "SOC 2", "Industry regulations"],
    estimatedDelivery: "20-24 weeks",
    supportLevel: "enterprise",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    demoUrl: "https://ziontechgroup.com/demo/bi-platform",
    documentationUrl: "https://ziontechgroup.com/docs/bi-platform",
    freeConsultation: true,
    maintenanceIncluded: true,
    warrantyPeriod: "2 years"
  },

  // DevOps & CI/CD Implementation
  {
    id: "enterprise-devops-suite",
    name: "Enterprise DevOps Suite",
    category: "DevOps",
    subcategory: "CI/CD & Automation",
    description: "Complete DevOps transformation including CI/CD pipelines, infrastructure as code, monitoring, and automation for enterprise development teams.",
    price: 30000,
    pricingModel: "one-time",
    duration: "14-18 weeks",
    teamSize: "8-12 people",
    features: [
      "CI/CD pipeline setup",
      "Infrastructure as code",
      "Container orchestration",
      "Monitoring and alerting",
      "Security scanning",
      "Performance optimization",
      "Team training",
      "Documentation and best practices"
    ],
    benefits: [
      "Reduce deployment time by 90%",
      "Improve code quality by 40%",
      "Faster time to market",
      "Reduced human error",
      "Better team collaboration"
    ],
    targetAudience: [
      "Software development teams",
      "Technology companies",
      "Financial services",
      "Healthcare organizations",
      "E-commerce companies"
    ],
    tags: ["DevOps", "CI/CD", "Automation", "Infrastructure as Code", "Monitoring"],
    marketPrice: "$30,000 - $120,000",
    roi: "300% within 12 months",
    competitors: ["GitLab", "Jenkins", "CircleCI", "GitHub Actions", "Azure DevOps"],
    technology: ["Jenkins", "GitLab", "Docker", "Kubernetes", "Terraform", "Ansible"],
    integrations: ["Git repositories", "Cloud platforms", "Monitoring tools", "Security scanners"],
    compliance: ["SOC 2", "ISO 27001", "Industry standards"],
    estimatedDelivery: "14-18 weeks",
    supportLevel: "enterprise",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    demoUrl: "https://ziontechgroup.com/demo/devops-suite",
    documentationUrl: "https://ziontechgroup.com/docs/devops-suite",
    freeConsultation: true,
    maintenanceIncluded: true,
    warrantyPeriod: "2 years"
  },

  // Digital Transformation Consulting
  {
    id: "digital-transformation-consulting",
    name: "Digital Transformation Consulting",
    category: "Digital Transformation",
    subcategory: "Strategic Consulting",
    description: "Comprehensive digital transformation consulting service that helps organizations modernize their technology, processes, and culture for the digital age.",
    price: 50000,
    pricingModel: "one-time",
    duration: "24-32 weeks",
    teamSize: "15-25 people",
    features: [
      "Digital maturity assessment",
      "Technology roadmap planning",
      "Process optimization",
      "Change management",
      "Technology implementation",
      "Training and adoption",
      "Performance measurement",
      "Continuous improvement"
    ],
    benefits: [
      "Increase operational efficiency by 40%",
      "Improve customer experience",
      "Reduce operational costs",
      "Enable innovation",
      "Future-proof organization"
    ],
    targetAudience: [
      "Traditional enterprises",
      "Manufacturing companies",
      "Retail organizations",
      "Healthcare providers",
      "Financial institutions"
    ],
    tags: ["Digital Transformation", "Strategic Consulting", "Change Management", "Process Optimization", "Innovation"],
    marketPrice: "$50,000 - $500,000",
    roi: "400% within 36 months",
    competitors: ["McKinsey", "BCG", "Bain", "Deloitte", "Accenture"],
    technology: ["Cloud platforms", "AI/ML", "IoT", "Mobile", "Analytics"],
    integrations: ["Legacy systems", "Cloud services", "Modern platforms", "Third-party tools"],
    compliance: ["Industry regulations", "Data protection", "Security standards"],
    estimatedDelivery: "24-32 weeks",
    supportLevel: "enterprise",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    demoUrl: "https://ziontechgroup.com/demo/digital-transformation",
    documentationUrl: "https://ziontechgroup.com/docs/digital-transformation",
    freeConsultation: true,
    maintenanceIncluded: false,
    warrantyPeriod: "1 year"
  },

  // Enterprise Application Development
  {
    id: "enterprise-app-development",
    name: "Enterprise Application Development",
    category: "Software Development",
    subcategory: "Custom Applications",
    description: "Custom enterprise application development including web apps, mobile apps, and system integrations tailored to specific business requirements.",
    price: 45000,
    pricingModel: "one-time",
    duration: "18-24 weeks",
    teamSize: "10-15 people",
    features: [
      "Requirements analysis",
      "Custom UI/UX design",
      "Full-stack development",
      "Mobile app development",
      "API development",
      "Database design",
      "Testing and QA",
      "Deployment and training"
    ],
    benefits: [
      "Custom solution for business needs",
      "Improved operational efficiency",
      "Better user experience",
      "Scalable architecture",
      "Ongoing support and maintenance"
    ],
    targetAudience: [
      "Large enterprises",
      "Government agencies",
      "Healthcare organizations",
      "Financial institutions",
      "Manufacturing companies"
    ],
    tags: ["Custom Development", "Web Applications", "Mobile Apps", "API Development", "Enterprise"],
    marketPrice: "$45,000 - $200,000",
    roi: "250% within 18 months",
    competitors: ["Accenture", "Infosys", "Tata Consultancy", "Wipro", "Cognizant"],
    technology: ["React", "Node.js", "Python", "Java", "Mobile frameworks", "Cloud platforms"],
    integrations: ["ERP systems", "CRM platforms", "Legacy systems", "Third-party APIs"],
    compliance: ["SOC 2", "ISO 27001", "Industry regulations"],
    estimatedDelivery: "18-24 weeks",
    supportLevel: "enterprise",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    demoUrl: "https://ziontechgroup.com/demo/enterprise-apps",
    documentationUrl: "https://ziontechgroup.com/docs/enterprise-apps",
    freeConsultation: true,
    maintenanceIncluded: true,
    warrantyPeriod: "2 years"
  },

  // IT Infrastructure Modernization
  {
    id: "it-infrastructure-modernization",
    name: "IT Infrastructure Modernization",
    category: "Infrastructure",
    subcategory: "Modernization",
    description: "Complete IT infrastructure modernization including network upgrades, server virtualization, storage optimization, and security enhancements.",
    price: 35000,
    pricingModel: "one-time",
    duration: "16-20 weeks",
    teamSize: "12-18 people",
    features: [
      "Infrastructure assessment",
      "Network modernization",
      "Server virtualization",
      "Storage optimization",
      "Security enhancements",
      "Backup and recovery",
      "Performance optimization",
      "Documentation and training"
    ],
    benefits: [
      "Improve performance by 50%",
      "Reduce maintenance costs by 30%",
      "Enhanced security posture",
      "Better scalability",
      "Improved reliability"
    ],
    targetAudience: [
      "Medium to large enterprises",
      "Healthcare organizations",
      "Educational institutions",
      "Government agencies",
      "Manufacturing companies"
    ],
    tags: ["Infrastructure", "Modernization", "Virtualization", "Network", "Storage"],
    marketPrice: "$35,000 - $150,000",
    roi: "200% within 18 months",
    competitors: ["Dell", "HP", "Cisco", "VMware", "Microsoft"],
    technology: ["VMware", "Hyper-V", "Cisco", "Dell", "HP", "Storage solutions"],
    integrations: ["Active Directory", "Email systems", "File servers", "Backup systems"],
    compliance: ["Industry standards", "Security frameworks", "Regulatory requirements"],
    estimatedDelivery: "16-20 weeks",
    supportLevel: "enterprise",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    demoUrl: "https://ziontechgroup.com/demo/infrastructure-modernization",
    documentationUrl: "https://ziontechgroup.com/docs/infrastructure-modernization",
    freeConsultation: true,
    maintenanceIncluded: true,
    warrantyPeriod: "3 years"
  },

  // Managed IT Services
  {
    id: "managed-it-services-enterprise",
    name: "Enterprise Managed IT Services",
    category: "Managed Services",
    subcategory: "IT Operations",
    description: "Comprehensive managed IT services including 24/7 monitoring, help desk support, security management, and proactive maintenance.",
    price: 15000,
    pricingModel: "monthly",
    duration: "Ongoing",
    teamSize: "Dedicated team",
    features: [
      "24/7 monitoring and alerting",
      "Help desk support",
      "Security management",
      "Backup and recovery",
      "Patch management",
      "Performance optimization",
      "Compliance monitoring",
      "Strategic IT planning"
    ],
    benefits: [
      "Reduce IT costs by 25-40%",
      "Improve system reliability",
      "Enhanced security posture",
      "Predictable IT expenses",
      "Focus on core business"
    ],
    targetAudience: [
      "Medium to large enterprises",
      "Healthcare organizations",
      "Financial institutions",
      "Educational institutions",
      "Manufacturing companies"
    ],
    tags: ["Managed Services", "IT Operations", "24/7 Support", "Monitoring", "Maintenance"],
    marketPrice: "$15,000 - $50,000/month",
    roi: "150% within 12 months",
    competitors: ["IBM", "HPE", "Dell", "Accenture", "Cognizant"],
    technology: ["Monitoring tools", "Help desk systems", "Security tools", "Backup solutions"],
    integrations: ["Client systems", "Cloud platforms", "Security tools", "Communication platforms"],
    compliance: ["SOC 2", "ISO 27001", "Industry regulations"],
    estimatedDelivery: "2-4 weeks",
    supportLevel: "enterprise",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    demoUrl: "https://ziontechgroup.com/demo/managed-services",
    documentationUrl: "https://ziontechgroup.com/docs/managed-services",
    freeConsultation: true,
    maintenanceIncluded: true,
    warrantyPeriod: "Ongoing"
  },

  // Data Center Design & Implementation
  {
    id: "data-center-design-implementation",
    name: "Data Center Design & Implementation",
    category: "Infrastructure",
    subcategory: "Data Centers",
    description: "Complete data center design and implementation including power, cooling, networking, security, and disaster recovery solutions.",
    price: 100000,
    pricingModel: "one-time",
    duration: "24-32 weeks",
    teamSize: "20-30 people",
    features: [
      "Data center design",
      "Power and cooling systems",
      "Network infrastructure",
      "Security systems",
      "Disaster recovery",
      "Monitoring and management",
      "Documentation and training",
      "Post-implementation support"
    ],
    benefits: [
      "Optimized data center performance",
      "Enhanced security and reliability",
      "Improved energy efficiency",
      "Better disaster recovery",
      "Scalable infrastructure"
    ],
    targetAudience: [
      "Large enterprises",
      "Cloud providers",
      "Colocation facilities",
      "Government agencies",
      "Financial institutions"
    ],
    tags: ["Data Center", "Infrastructure", "Power", "Cooling", "Security", "Disaster Recovery"],
    marketPrice: "$100,000 - $1,000,000",
    roi: "200% within 36 months",
    competitors: ["Schneider Electric", "Eaton", "APC", "Cisco", "Dell"],
    technology: ["UPS systems", "Cooling systems", "Network equipment", "Security systems"],
    integrations: ["Building management", "Monitoring systems", "Security platforms"],
    compliance: ["TIA-942", "Uptime Institute", "Industry standards"],
    estimatedDelivery: "24-32 weeks",
    supportLevel: "enterprise",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    demoUrl: "https://ziontechgroup.com/demo/data-center",
    documentationUrl: "https://ziontechgroup.com/docs/data-center",
    freeConsultation: true,
    maintenanceIncluded: true,
    warrantyPeriod: "5 years"
  },

  // Network Security & SD-WAN
  {
    id: "network-security-sdwan",
    name: "Network Security & SD-WAN Implementation",
    category: "Network Security",
    subcategory: "SD-WAN & Security",
    description: "Advanced network security and SD-WAN implementation for enterprise networks with centralized management and enhanced security.",
    price: 28000,
    pricingModel: "one-time",
    duration: "12-16 weeks",
    teamSize: "8-12 people",
    features: [
      "SD-WAN design and implementation",
      "Network security architecture",
      "Firewall configuration",
      "VPN setup",
      "Traffic optimization",
      "Centralized management",
      "Performance monitoring",
      "Security policy implementation"
    ],
    benefits: [
      "Improve network performance by 40%",
      "Reduce network costs by 30%",
      "Enhanced security posture",
      "Better network visibility",
      "Simplified management"
    ],
    targetAudience: [
      "Multi-location enterprises",
      "Healthcare organizations",
      "Financial institutions",
      "Educational institutions",
      "Manufacturing companies"
    ],
    tags: ["Network Security", "SD-WAN", "Firewall", "VPN", "Traffic Optimization"],
    marketPrice: "$28,000 - $120,000",
    roi: "250% within 18 months",
    competitors: ["Cisco", "VMware", "Fortinet", "Palo Alto", "Juniper"],
    technology: ["SD-WAN", "Firewalls", "VPN", "Network monitoring", "Security tools"],
    integrations: ["Active Directory", "SIEM systems", "Network management", "Security platforms"],
    compliance: ["SOC 2", "ISO 27001", "Industry regulations"],
    estimatedDelivery: "12-16 weeks",
    supportLevel: "enterprise",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    demoUrl: "https://ziontechgroup.com/demo/network-security",
    documentationUrl: "https://ziontechgroup.com/docs/network-security",
    freeConsultation: true,
    maintenanceIncluded: true,
    warrantyPeriod: "3 years"
  }
];

export const getServicesByCategory = (category: string) => {
  return COMPREHENSIVE_IT_SERVICES.filter(service => service.category === category);
};

export const getServicesBySubcategory = (subcategory: string) => {
  return COMPREHENSIVE_IT_SERVICES.filter(service => service.subcategory === subcategory);
};

export const getServicesByPriceRange = (minPrice: number, maxPrice: number) => {
  return COMPREHENSIVE_IT_SERVICES.filter(service => 
    service.price >= minPrice && service.price <= maxPrice
  );
};

export const getServicesByTechnology = (technology: string) => {
  return COMPREHENSIVE_IT_SERVICES.filter(service => 
    service.technology.includes(technology)
  );
};

export const getServicesBySupportLevel = (level: string) => {
  return COMPREHENSIVE_IT_SERVICES.filter(service => service.supportLevel === level);
};

export const getServicesWithMaintenance = () => {
  return COMPREHENSIVE_IT_SERVICES.filter(service => service.maintenanceIncluded);
};

export const getServicesByDuration = (maxDuration: string) => {
  return COMPREHENSIVE_IT_SERVICES.filter(service => {
    const serviceDuration = parseInt(service.duration.split('-')[0]);
    const maxDurationNum = parseInt(maxDuration.split('-')[0]);
    return serviceDuration <= maxDurationNum;
  });
};