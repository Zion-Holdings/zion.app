export interface ITService {
  id: string;
  title: string;
  description: string;
  category: string;
  pricing: {
    hourly: number;
    project: number;
    monthly: number;
    currency: string;
    pricingModel: string;
  };
  features: string[];
  benefits: string[];
  deliverables: string[];
  timeline: string;
  expertise: string[];
  technologies: string[];
  certifications: string[];
  link: string;
  badge?: string;
  icon: string;
  image: string;
}

export const ENHANCED_IT_SERVICES: ITService[] = [
  {
    id: "ai-development-integration",
    title: "AI Development & Integration",
    description: "Custom AI solution development, machine learning model training, and seamless integration with existing business systems.",
    category: "AI & Machine Learning",
    pricing: {
      hourly: 150,
      project: 15000,
      monthly: 5000,
      currency: "$",
      pricingModel: "Flexible - Hourly, Project-based, or Retainer"
    },
    features: [
      "Custom AI model development",
      "Machine learning pipeline creation",
      "Data preprocessing & cleaning",
      "Model training & optimization",
      "API integration & deployment",
      "Performance monitoring & maintenance"
    ],
    benefits: [
      "Increase operational efficiency by 40-60%",
      "Reduce manual processing time by 80%",
      "Improve decision-making accuracy",
      "Gain competitive advantage through AI"
    ],
    deliverables: [
      "Custom AI solution",
      "API documentation",
      "Integration guide",
      "Training materials",
      "Maintenance plan",
      "Performance reports"
    ],
    timeline: "8-16 weeks depending on complexity",
    expertise: [
      "Python, TensorFlow, PyTorch",
      "Natural Language Processing",
      "Computer Vision",
      "Predictive Analytics",
      "Deep Learning"
    ],
    technologies: [
      "Python", "TensorFlow", "PyTorch", "Scikit-learn",
      "AWS SageMaker", "Google Cloud AI", "Azure ML"
    ],
    certifications: [
      "AWS Machine Learning Specialty",
      "Google Cloud Professional ML Engineer",
      "Microsoft Azure AI Engineer"
    ],
    link: "https://ziontechgroup.com/ai-development-integration",
    badge: "Premium",
    icon: "🤖",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&h=500"
  },
  {
    id: "cloud-migration-strategy",
    title: "Cloud Migration Strategy & Implementation",
    description: "Comprehensive cloud migration planning, execution, and optimization for AWS, Azure, and Google Cloud platforms.",
    category: "Cloud Services",
    pricing: {
      hourly: 125,
      project: 25000,
      monthly: 8000,
      currency: "$",
      pricingModel: "Project-based with ongoing support options"
    },
    features: [
      "Cloud readiness assessment",
      "Migration strategy planning",
      "Data migration & synchronization",
      "Application refactoring",
      "Performance optimization",
      "Security & compliance setup"
    ],
    benefits: [
      "Reduce infrastructure costs by 30-50%",
      "Improve scalability & flexibility",
      "Enhance disaster recovery",
      "Increase operational efficiency"
    ],
    deliverables: [
      "Migration roadmap",
      "Cloud architecture design",
      "Migration execution plan",
      "Performance benchmarks",
      "Security assessment report",
      "Training & documentation"
    ],
    timeline: "12-24 weeks depending on scope",
    expertise: [
      "AWS, Azure, Google Cloud",
      "DevOps & CI/CD",
      "Container orchestration",
      "Infrastructure as Code",
      "Security & compliance"
    ],
    technologies: [
      "AWS", "Azure", "Google Cloud", "Kubernetes",
      "Docker", "Terraform", "Ansible", "Jenkins"
    ],
    certifications: [
      "AWS Solutions Architect Professional",
      "Microsoft Azure Solutions Architect Expert",
      "Google Cloud Professional Cloud Architect"
    ],
    link: "https://ziontechgroup.com/cloud-migration-strategy",
    icon: "☁️",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&h=500"
  },
  {
    id: "cybersecurity-audit-protection",
    title: "Cybersecurity Audit & Protection",
    description: "Comprehensive security assessment, penetration testing, and implementation of robust protection systems.",
    category: "Cybersecurity",
    pricing: {
      hourly: 175,
      project: 20000,
      monthly: 6000,
      currency: "$",
      pricingModel: "Project-based with ongoing monitoring options"
    },
    features: [
      "Security vulnerability assessment",
      "Penetration testing",
      "Security architecture review",
      "Incident response planning",
      "Security awareness training",
      "Compliance audit support"
    ],
    benefits: [
      "Identify and mitigate security risks",
      "Ensure compliance with regulations",
      "Protect sensitive data",
      "Build customer trust"
    ],
    deliverables: [
      "Security assessment report",
      "Vulnerability remediation plan",
      "Security policies & procedures",
      "Incident response playbook",
      "Compliance documentation",
      "Security training materials"
    ],
    timeline: "6-12 weeks depending on scope",
    expertise: [
      "Penetration testing",
      "Security architecture",
      "Compliance frameworks",
      "Incident response",
      "Threat intelligence"
    ],
    technologies: [
      "Nmap", "Metasploit", "Wireshark", "Burp Suite",
      "SIEM tools", "EDR solutions", "Firewall systems"
    ],
    certifications: [
      "Certified Ethical Hacker (CEH)",
      "Certified Information Systems Security Professional (CISSP)",
      "Offensive Security Certified Professional (OSCP)"
    ],
    link: "https://ziontechgroup.com/cybersecurity-audit-protection",
    badge: "Popular",
    icon: "🔒",
    image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"
  },
  {
    id: "data-analytics-business-intelligence",
    title: "Data Analytics & Business Intelligence",
    description: "Transform raw data into actionable insights with advanced analytics, visualization, and reporting solutions.",
    category: "Data & Analytics",
    pricing: {
      hourly: 140,
      project: 18000,
      monthly: 5500,
      currency: "$",
      pricingModel: "Project-based with ongoing analytics support"
    },
    features: [
      "Data warehouse design & implementation",
      "ETL pipeline development",
      "Advanced analytics & modeling",
      "Interactive dashboards",
      "Predictive analytics",
      "Real-time reporting"
    ],
    benefits: [
      "Make data-driven decisions",
      "Identify business opportunities",
      "Optimize operations",
      "Improve customer insights"
    ],
    deliverables: [
      "Data architecture design",
      "Analytics dashboards",
      "ETL pipelines",
      "Data models",
      "Analytics reports",
      "User training"
    ],
    timeline: "10-18 weeks depending on complexity",
    expertise: [
      "Data engineering",
      "Statistical analysis",
      "Machine learning",
      "Business intelligence",
      "Data visualization"
    ],
    technologies: [
      "Python", "R", "SQL", "Tableau", "Power BI",
      "Apache Spark", "Hadoop", "Snowflake"
    ],
    certifications: [
      "Microsoft Power BI Data Analyst",
      "Tableau Desktop Specialist",
      "Google Data Analytics Professional"
    ],
    link: "https://ziontechgroup.com/data-analytics-business-intelligence",
    icon: "📊",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"
  },
  {
    id: "digital-transformation-consulting",
    title: "Digital Transformation Consulting",
    description: "Strategic guidance and implementation support for digital transformation initiatives across your organization.",
    category: "Digital Transformation",
    pricing: {
      hourly: 200,
      project: 35000,
      monthly: 12000,
      currency: "$",
      pricingModel: "Strategic consulting with implementation support"
    },
    features: [
      "Digital maturity assessment",
      "Transformation roadmap development",
      "Change management strategy",
      "Technology selection & implementation",
      "Process optimization",
      "Performance measurement"
    ],
    benefits: [
      "Accelerate digital adoption",
      "Improve operational efficiency",
      "Enhance customer experience",
      "Increase competitive advantage"
    ],
    deliverables: [
      "Digital transformation strategy",
      "Implementation roadmap",
      "Change management plan",
      "Technology recommendations",
      "Process documentation",
      "Success metrics & KPIs"
    ],
    timeline: "16-32 weeks depending on scope",
    expertise: [
      "Strategic planning",
      "Change management",
      "Process optimization",
      "Technology implementation",
      "Performance measurement"
    ],
    technologies: [
      "Enterprise platforms", "Cloud solutions", "Automation tools",
      "Analytics platforms", "Integration tools"
    ],
    certifications: [
      "Project Management Professional (PMP)",
      "Change Management Professional",
      "Digital Transformation Specialist"
    ],
    link: "https://ziontechgroup.com/digital-transformation-consulting",
    badge: "Featured",
    icon: "🚀",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500"
  },
  {
    id: "devops-automation",
    title: "DevOps Automation & CI/CD",
    description: "Streamline software development with automated CI/CD pipelines, infrastructure as code, and monitoring solutions.",
    category: "DevOps",
    pricing: {
      hourly: 130,
      project: 15000,
      monthly: 4500,
      currency: "$",
      pricingModel: "Project-based with ongoing support"
    },
    features: [
      "CI/CD pipeline setup",
      "Infrastructure as Code",
      "Container orchestration",
      "Monitoring & alerting",
      "Security scanning",
      "Performance optimization"
    ],
    benefits: [
      "Accelerate software delivery",
      "Reduce deployment errors",
      "Improve system reliability",
      "Enhance team productivity"
    ],
    deliverables: [
      "CI/CD pipeline configuration",
      "Infrastructure code",
      "Monitoring setup",
      "Security policies",
      "Documentation",
      "Team training"
    ],
    timeline: "8-16 weeks depending on complexity",
    expertise: [
      "CI/CD tools",
      "Container technologies",
      "Infrastructure as Code",
      "Monitoring & observability",
      "Security automation"
    ],
    technologies: [
      "Jenkins", "GitLab CI", "GitHub Actions", "Docker",
      "Kubernetes", "Terraform", "Ansible", "Prometheus"
    ],
    certifications: [
      "AWS DevOps Engineer Professional",
      "Kubernetes Administrator (CKA)",
      "Terraform Associate"
    ],
    link: "https://ziontechgroup.com/devops-automation",
    icon: "⚡",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"
  },
  {
    id: "network-infrastructure-design",
    title: "Network Infrastructure Design & Implementation",
    description: "Design and implement robust, scalable network infrastructure with security, redundancy, and performance optimization.",
    category: "Network Infrastructure",
    pricing: {
      hourly: 120,
      project: 22000,
      monthly: 7000,
      currency: "$",
      pricingModel: "Project-based with ongoing maintenance"
    },
    features: [
      "Network architecture design",
      "Security implementation",
      "Performance optimization",
      "Disaster recovery setup",
      "Monitoring & management",
      "Documentation & training"
    ],
    benefits: [
      "Improve network performance",
      "Enhance security posture",
      "Reduce downtime",
      "Simplify management"
    ],
    deliverables: [
      "Network design documentation",
      "Implementation plan",
      "Security configuration",
      "Monitoring setup",
      "Disaster recovery plan",
      "User training"
    ],
    timeline: "12-20 weeks depending on scope",
    expertise: [
      "Network design",
      "Security implementation",
      "Performance optimization",
      "Disaster recovery",
      "Network management"
    ],
    technologies: [
      "Cisco", "Juniper", "Fortinet", "Palo Alto",
      "VMware", "Hyper-V", "Monitoring tools"
    ],
    certifications: [
      "Cisco Certified Network Professional (CCNP)",
      "Juniper Networks Certified Professional (JNCIP)",
      "CompTIA Network+"
    ],
    link: "https://ziontechgroup.com/network-infrastructure-design",
    icon: "🌐",
    image: "https://images.unsplash.com/photo-1523475496153-3a12d3e9ad12?auto=format&fit=crop&w=800&h=500"
  },
  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    description: "Custom mobile application development for iOS and Android with modern frameworks and best practices.",
    category: "Mobile Development",
    pricing: {
      hourly: 110,
      project: 25000,
      monthly: 6000,
      currency: "$",
      pricingModel: "Project-based with maintenance options"
    },
    features: [
      "Native & cross-platform development",
      "UI/UX design",
      "Backend integration",
      "Testing & quality assurance",
      "App store deployment",
      "Maintenance & updates"
    ],
    benefits: [
      "Reach mobile users",
      "Improve customer engagement",
      "Increase brand visibility",
      "Generate new revenue streams"
    ],
    deliverables: [
      "Mobile application",
      "Source code",
      "Documentation",
      "Testing reports",
      "Deployment guide",
      "Maintenance plan"
    ],
    timeline: "16-24 weeks depending on complexity",
    expertise: [
      "iOS development",
      "Android development",
      "Cross-platform frameworks",
      "UI/UX design",
      "Backend integration"
    ],
    technologies: [
      "Swift", "Kotlin", "React Native", "Flutter",
      "Node.js", "Firebase", "AWS Mobile"
    ],
    certifications: [
      "Apple Developer Certification",
      "Google Developer Certification",
      "React Native Certification"
    ],
    link: "https://ziontechgroup.com/mobile-app-development",
    icon: "📱",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&h=500"
  },
  {
    id: "web-application-development",
    title: "Web Application Development",
    description: "Modern web application development with responsive design, performance optimization, and security best practices.",
    category: "Web Development",
    pricing: {
      hourly: 100,
      project: 20000,
      monthly: 5000,
      currency: "$",
      pricingModel: "Project-based with ongoing support"
    },
    features: [
      "Frontend & backend development",
      "Responsive design",
      "Performance optimization",
      "Security implementation",
      "Testing & quality assurance",
      "Deployment & maintenance"
    ],
    benefits: [
      "Establish online presence",
      "Improve customer experience",
      "Increase operational efficiency",
      "Generate leads & sales"
    ],
    deliverables: [
      "Web application",
      "Source code",
      "Documentation",
      "Testing reports",
      "Deployment guide",
      "User training"
    ],
    timeline: "12-20 weeks depending on complexity",
    expertise: [
      "Frontend frameworks",
      "Backend development",
      "Database design",
      "Security implementation",
      "Performance optimization"
    ],
    technologies: [
      "React", "Vue.js", "Angular", "Node.js",
      "Python", "PHP", "MySQL", "PostgreSQL"
    ],
    certifications: [
      "Microsoft Certified: Azure Developer Associate",
      "AWS Certified Developer Associate",
      "Google Cloud Professional Developer"
    ],
    link: "https://ziontechgroup.com/web-application-development",
    icon: "💻",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=500"
  },
  {
    id: "it-consulting-advisory",
    title: "IT Consulting & Advisory Services",
    description: "Strategic IT consulting to align technology with business goals, optimize operations, and drive innovation.",
    category: "IT Consulting",
    pricing: {
      hourly: 180,
      project: 30000,
      monthly: 10000,
      currency: "$",
      pricingModel: "Strategic consulting with implementation support"
    },
    features: [
      "IT strategy development",
      "Technology assessment",
      "Vendor selection",
      "Project management",
      "Change management",
      "Performance optimization"
    ],
    benefits: [
      "Align IT with business goals",
      "Optimize technology investments",
      "Improve operational efficiency",
      "Drive innovation"
    ],
    deliverables: [
      "IT strategy document",
      "Technology roadmap",
      "Vendor recommendations",
      "Implementation plan",
      "Change management plan",
      "Success metrics"
    ],
    timeline: "20-40 weeks depending on scope",
    expertise: [
      "IT strategy",
      "Technology assessment",
      "Project management",
      "Change management",
      "Performance optimization"
    ],
    technologies: [
      "Enterprise platforms", "Cloud solutions", "Analytics tools",
      "Security solutions", "Integration platforms"
    ],
    certifications: [
      "Project Management Professional (PMP)",
      "ITIL Foundation",
      "Certified Information Systems Auditor (CISA)"
    ],
    link: "https://ziontechgroup.com/it-consulting-advisory",
    badge: "Premium",
    icon: "🎯",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&h=500"
  }
];

export const getITServiceById = (id: string): ITService | undefined => {
  return ENHANCED_IT_SERVICES.find(service => service.id === id);
};

export const getITServicesByCategory = (category: string): ITService[] => {
  return ENHANCED_IT_SERVICES.filter(service => service.category === category);
};

export const getITServiceCategories = (): string[] => {
  return [...new Set(ENHANCED_IT_SERVICES.map(service => service.category))];
};