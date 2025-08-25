export interface AdvancedITService {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  price: number;
  currency: string;
  pricingModel: 'monthly' | 'yearly' | 'one-time' | 'per-user' | 'per-project' | 'usage-based';
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
  rating: number;
  reviewCount: number;
  featured: boolean;
  location: string;
  availability: string;
  demoUrl: string;
  documentationUrl: string;
  technology: string[];
  integrations: string[];
  compliance: string[];
  roi: string;
  competitors: string[];
  onsiteSupport: boolean;
  globalCoverage: boolean;
}

export const ADVANCED_IT_SERVICES: AdvancedITService[] = [
  {
    id: "cloud-migration-enterprise",
    title: "Enterprise Cloud Migration & Optimization",
    description: "Comprehensive cloud migration service that helps enterprises move from on-premises infrastructure to cloud platforms with minimal downtime and maximum efficiency.",
    category: "Cloud Services",
    subcategory: "Migration & Optimization",
    price: 15000,
    currency: "$",
    pricingModel: "per-project",
    features: [
      "Comprehensive infrastructure assessment",
      "Cloud platform selection and architecture design",
      "Data migration strategy and execution",
      "Application refactoring and optimization",
      "Performance testing and optimization",
      "Security and compliance implementation",
      "Disaster recovery and backup solutions",
      "24/7 monitoring and support",
      "Cost optimization and management",
      "Training and knowledge transfer"
    ],
    benefits: [
      "Reduce infrastructure costs by 30-50%",
      "Improve scalability and flexibility",
      "Enhance security and compliance",
      "Reduce maintenance overhead",
      "Enable remote work capabilities",
      "Improve disaster recovery"
    ],
    useCases: [
      "Legacy system modernization",
      "Data center consolidation",
      "Application modernization",
      "Disaster recovery implementation",
      "Performance optimization",
      "Cost reduction initiatives"
    ],
    targetAudience: [
      "Large enterprises",
      "Financial institutions",
      "Healthcare organizations",
      "Manufacturing companies",
      "Government agencies",
      "Educational institutions"
    ],
    tags: ["Cloud Migration", "AWS", "Azure", "GCP", "DevOps", "Infrastructure"],
    estimatedDelivery: "8-16 weeks",
    supportLevel: "enterprise",
    marketPrice: "$15,000 - $100,000+",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    rating: 4.9,
    reviewCount: 89,
    featured: true,
    location: "Global",
    availability: "24/7",
    demoUrl: "https://ziontechgroup.com/demo/cloud-migration",
    documentationUrl: "https://ziontechgroup.com/docs/cloud-migration",
    technology: ["AWS", "Azure", "GCP", "Terraform", "Kubernetes", "Docker", "Ansible"],
    integrations: ["VMware", "Hyper-V", "Oracle", "SAP", "Microsoft", "Linux systems"],
    compliance: ["SOC 2", "ISO 27001", "GDPR", "HIPAA", "SOX", "PCI DSS"],
    roi: "200% within 18 months",
    competitors: ["Accenture", "Deloitte", "IBM", "AWS Professional Services", "Microsoft Consulting"],
    onsiteSupport: true,
    globalCoverage: true
  },
  {
    id: "cybersecurity-managed-services",
    title: "Managed Cybersecurity Services",
    description: "Comprehensive managed cybersecurity services providing 24/7 threat monitoring, incident response, vulnerability management, and security operations center (SOC) services.",
    category: "Cybersecurity",
    subcategory: "Managed Services",
    price: 2500,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "24/7 security monitoring and alerting",
      "Threat detection and response",
      "Vulnerability assessment and management",
      "Security incident response",
      "Compliance monitoring and reporting",
      "Security awareness training",
      "Penetration testing and assessments",
      "Security policy development",
      "Risk assessment and management",
      "Monthly security reports and recommendations"
    ],
    benefits: [
      "Reduce security incidents by 80%",
      "Improve threat detection by 90%",
      "Ensure 24/7 security coverage",
      "Reduce security team workload",
      "Improve compliance posture",
      "Proactive threat prevention"
    ],
    useCases: [
      "Enterprise security operations",
      "Compliance requirements",
      "Threat monitoring and response",
      "Security team augmentation",
      "Incident response support",
      "Security program development"
    ],
    targetAudience: [
      "CISOs and security teams",
      "IT managers",
      "Compliance officers",
      "Risk managers",
      "Small to medium businesses",
      "Healthcare organizations"
    ],
    tags: ["Cybersecurity", "Managed Services", "SOC", "Threat Detection", "Incident Response"],
    estimatedDelivery: "2-4 weeks",
    supportLevel: "premium",
    marketPrice: "$2,500 - $8,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    rating: 4.8,
    reviewCount: 156,
    featured: true,
    location: "Global",
    availability: "24/7",
    demoUrl: "https://ziontechgroup.com/demo/cybersecurity-services",
    documentationUrl: "https://ziontechgroup.com/docs/cybersecurity-services",
    technology: ["SIEM", "EDR", "Firewall", "IDS/IPS", "Vulnerability scanners", "Threat intelligence"],
    integrations: ["Active Directory", "Office 365", "AWS", "Azure", "Firewall systems", "Identity providers"],
    compliance: ["SOC 2", "ISO 27001", "NIST", "GDPR", "HIPAA", "PCI DSS"],
    roi: "300% within 12 months",
    competitors: ["Palo Alto Networks", "CrowdStrike", "SentinelOne", "FireEye", "Secureworks"],
    onsiteSupport: true,
    globalCoverage: true
  },
  {
    id: "devops-automation-platform",
    title: "DevOps Automation & CI/CD Platform",
    description: "Enterprise-grade DevOps automation platform that streamlines software development, testing, and deployment processes with advanced CI/CD pipelines and infrastructure automation.",
    category: "DevOps",
    subcategory: "Automation & CI/CD",
    price: 1800,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Automated CI/CD pipelines",
      "Infrastructure as Code (IaC)",
      "Container orchestration and management",
      "Automated testing and quality gates",
      "Deployment automation and rollback",
      "Monitoring and observability",
      "Security scanning and compliance",
      "Multi-cloud deployment support",
      "Team collaboration and workflow management",
      "Performance optimization and scaling"
    ],
    benefits: [
      "Reduce deployment time by 80%",
      "Improve code quality and reliability",
      "Reduce manual errors by 90%",
      "Enable faster time to market",
      "Improve team productivity",
      "Reduce infrastructure costs"
    ],
    useCases: [
      "Software development automation",
      "Microservices deployment",
      "Cloud-native applications",
      "Legacy application modernization",
      "Multi-environment management",
      "Continuous deployment"
    ],
    targetAudience: [
      "Development teams",
      "DevOps engineers",
      "Platform engineers",
      "IT operations teams",
      "Software companies",
      "Enterprise IT departments"
    ],
    tags: ["DevOps", "CI/CD", "Automation", "Kubernetes", "Docker", "Infrastructure as Code"],
    estimatedDelivery: "4-8 weeks",
    supportLevel: "premium",
    marketPrice: "$1,800 - $5,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    rating: 4.7,
    reviewCount: 234,
    featured: false,
    location: "Global",
    availability: "24/7",
    demoUrl: "https://ziontechgroup.com/demo/devops-automation",
    documentationUrl: "https://ziontechgroup.com/docs/devops-automation",
    technology: ["Jenkins", "GitLab CI", "GitHub Actions", "Kubernetes", "Docker", "Terraform", "Ansible"],
    integrations: ["GitHub", "GitLab", "Bitbucket", "Jira", "Slack", "Teams", "AWS", "Azure", "GCP"],
    compliance: ["SOC 2", "ISO 27001", "GDPR", "SOX"],
    roi: "250% within 10 months",
    competitors: ["GitLab", "GitHub", "Jenkins", "CircleCI", "Travis CI", "Azure DevOps"],
    onsiteSupport: true,
    globalCoverage: true
  },
  {
    id: "data-center-optimization",
    title: "Data Center Optimization & Modernization",
    description: "Comprehensive data center optimization services including infrastructure assessment, modernization planning, energy efficiency improvements, and capacity planning.",
    category: "Infrastructure",
    subcategory: "Data Center",
    price: 8000,
    currency: "$",
    pricingModel: "per-project",
    features: [
      "Data center infrastructure assessment",
      "Capacity planning and optimization",
      "Energy efficiency improvements",
      "Cooling system optimization",
      "Power management and UPS systems",
      "Network infrastructure optimization",
      "Storage optimization and consolidation",
      "Virtualization and consolidation",
      "Disaster recovery planning",
      "Performance monitoring and optimization"
    ],
    benefits: [
      "Reduce energy costs by 20-40%",
      "Improve capacity utilization by 30%",
      "Enhance reliability and uptime",
      "Reduce maintenance costs",
      "Improve operational efficiency",
      "Extend equipment lifespan"
    ],
    useCases: [
      "Data center consolidation",
      "Energy efficiency improvements",
      "Capacity expansion planning",
      "Infrastructure modernization",
      "Performance optimization",
      "Cost reduction initiatives"
    ],
    targetAudience: [
      "Data center operators",
      "IT infrastructure managers",
      "Facility managers",
      "Enterprise IT departments",
      "Colocation providers",
      "Cloud service providers"
    ],
    tags: ["Data Center", "Infrastructure", "Optimization", "Energy Efficiency", "Capacity Planning"],
    estimatedDelivery: "6-12 weeks",
    supportLevel: "enterprise",
    marketPrice: "$8,000 - $50,000+",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    rating: 4.8,
    reviewCount: 67,
    featured: false,
    location: "Global",
    availability: "24/7",
    demoUrl: "https://ziontechgroup.com/demo/data-center-optimization",
    documentationUrl: "https://ziontechgroup.com/docs/data-center-optimization",
    technology: ["VMware", "Hyper-V", "Storage systems", "Network equipment", "Power systems", "Cooling systems"],
    integrations: ["Enterprise systems", "Monitoring tools", "Management platforms", "Automation tools"],
    compliance: ["Uptime Institute", "TIA-942", "ISO 27001", "SOC 2"],
    roi: "180% within 24 months",
    competitors: ["Schneider Electric", "Eaton", "Vertiv", "HPE", "Dell EMC"],
    onsiteSupport: true,
    globalCoverage: true
  },
  {
    id: "network-security-architecture",
    title: "Network Security Architecture & Design",
    description: "Comprehensive network security architecture design and implementation services including zero-trust network design, segmentation, and advanced threat protection.",
    category: "Network Security",
    subcategory: "Architecture & Design",
    price: 12000,
    currency: "$",
    pricingModel: "per-project",
    features: [
      "Network security assessment and audit",
      "Zero-trust network architecture design",
      "Network segmentation and micro-segmentation",
      "Advanced threat protection implementation",
      "Firewall and IDS/IPS configuration",
      "VPN and remote access solutions",
      "Network monitoring and analytics",
      "Security policy development",
      "Compliance implementation",
      "Training and documentation"
    ],
    benefits: [
      "Improve network security posture",
      "Reduce attack surface",
      "Enable secure remote work",
      "Improve compliance",
      "Reduce security incidents",
      "Enable better threat detection"
    ],
    useCases: [
      "Network security redesign",
      "Zero-trust implementation",
      "Compliance requirements",
      "Remote work enablement",
      "Threat protection enhancement",
      "Security architecture review"
    ],
    targetAudience: [
      "Network administrators",
      "Security architects",
      "IT managers",
      "CISOs",
      "Compliance officers",
      "Enterprise IT departments"
    ],
    tags: ["Network Security", "Zero Trust", "Architecture", "Threat Protection", "Segmentation"],
    estimatedDelivery: "8-16 weeks",
    supportLevel: "premium",
    marketPrice: "$12,000 - $75,000+",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    rating: 4.9,
    reviewCount: 89,
    featured: true,
    location: "Global",
    availability: "24/7",
    demoUrl: "https://ziontechgroup.com/demo/network-security",
    documentationUrl: "https://ziontechgroup.com/docs/network-security",
    technology: ["Cisco", "Palo Alto", "Fortinet", "Check Point", "Juniper", "F5"],
    integrations: ["Active Directory", "SIEM", "Identity providers", "Monitoring tools", "Automation platforms"],
    compliance: ["NIST", "ISO 27001", "SOC 2", "PCI DSS", "HIPAA"],
    roi: "220% within 15 months",
    competitors: ["Cisco", "Palo Alto Networks", "Fortinet", "Check Point", "Juniper"],
    onsiteSupport: true,
    globalCoverage: true
  },
  {
    id: "disaster-recovery-solutions",
    title: "Disaster Recovery & Business Continuity",
    description: "Comprehensive disaster recovery and business continuity solutions including backup systems, recovery planning, testing, and managed recovery services.",
    category: "Business Continuity",
    subcategory: "Disaster Recovery",
    price: 3000,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Disaster recovery planning and assessment",
      "Backup system design and implementation",
      "Recovery time objective (RTO) optimization",
      "Recovery point objective (RPO) management",
      "Automated backup and replication",
      "Recovery testing and validation",
      "Business continuity planning",
      "Incident response procedures",
      "24/7 monitoring and support",
      "Regular recovery testing and drills"
    ],
    benefits: [
      "Minimize downtime and data loss",
      "Ensure business continuity",
      "Reduce recovery time",
      "Improve compliance",
      "Protect against ransomware",
      "Reduce business risk"
    ],
    useCases: [
      "Data protection and backup",
      "Business continuity planning",
      "Compliance requirements",
      "Ransomware protection",
      "High availability systems",
      "Regulatory compliance"
    ],
    targetAudience: [
      "IT managers",
      "Business continuity managers",
      "Risk managers",
      "Compliance officers",
      "Small to medium businesses",
      "Enterprise organizations"
    ],
    tags: ["Disaster Recovery", "Business Continuity", "Backup", "Recovery", "High Availability"],
    estimatedDelivery: "4-8 weeks",
    supportLevel: "premium",
    marketPrice: "$3,000 - $10,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    rating: 4.8,
    reviewCount: 123,
    featured: false,
    location: "Global",
    availability: "24/7",
    demoUrl: "https://ziontechgroup.com/demo/disaster-recovery",
    documentationUrl: "https://ziontechgroup.com/docs/disaster-recovery",
    technology: ["Veeam", "Commvault", "Rubrik", "Cohesity", "Zerto", "VMware SRM"],
    integrations: ["VMware", "Hyper-V", "Cloud platforms", "Storage systems", "Monitoring tools"],
    compliance: ["SOC 2", "ISO 27001", "GDPR", "HIPAA", "SOX"],
    roi: "400% within 12 months",
    competitors: ["Veeam", "Commvault", "Rubrik", "Cohesity", "Zerto"],
    onsiteSupport: true,
    globalCoverage: true
  }
];