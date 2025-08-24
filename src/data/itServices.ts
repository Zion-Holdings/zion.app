export interface ITService {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  pricing: {
    hourly: number;
    daily: number;
    monthly: number;
    currency: string;
    features: string[];
  };
  features: string[];
  benefits: string[];
  useCases: string[];
  targetAudience: string[];
  technologies: string[];
  support: string[];
  website: string;
  contactEmail: string;
  phone: string;
  address: string;
  rating: number;
  reviewCount: number;
  experience: string;
  tags: string[];
  image: string;
  availability: string;
  responseTime: string;
  createdAt: string;
}

export const IT_SERVICES: ITService[] = [
  {
    id: "ai-development-integration",
    title: "AI Development & Integration Services",
    description: "Full-stack AI development services including custom model training, API integration, and enterprise AI solutions deployment.",
    category: "Development",
    subcategory: "AI & Machine Learning",
    pricing: {
      hourly: 85,
      daily: 680,
      monthly: 13600,
      currency: "$",
      features: ["Custom AI model development", "API integration", "Data pipeline setup", "Model training & optimization", "Deployment & monitoring"]
    },
    features: [
      "Custom AI model development and training",
      "Natural language processing solutions",
      "Computer vision and image recognition",
      "Predictive analytics and forecasting",
      "AI-powered automation workflows",
      "Real-time data processing systems",
      "Model deployment and scaling",
      "Performance monitoring and optimization"
    ],
    benefits: [
      "Reduce operational costs by 30-50% through automation",
      "Improve decision-making with AI-powered insights",
      "Scale operations without proportional headcount increase",
      "Gain competitive advantage with cutting-edge AI capabilities",
      "Enhance customer experience with intelligent interactions"
    ],
    useCases: [
      "E-commerce recommendation engines",
      "Customer service chatbots",
      "Predictive maintenance systems",
      "Fraud detection and prevention",
      "Content generation and optimization"
    ],
    targetAudience: ["Enterprise businesses", "Tech startups", "E-commerce companies", "Financial institutions", "Healthcare organizations"],
    technologies: ["Python", "TensorFlow", "PyTorch", "AWS SageMaker", "Google Cloud AI", "Azure ML", "Docker", "Kubernetes"],
    support: ["24/7 technical support", "Dedicated project manager", "Training and documentation", "Ongoing maintenance", "Performance optimization"],
    website: "https://ziontechgroup.com/ai-development",
    contactEmail: "kleber@ziontechgroup.com",
    phone: "+1 302 464 0950",
    address: "364 E Main St STE 1008 Middletown DE 19709",
    rating: 4.9,
    reviewCount: 156,
    experience: "8+ years",
    tags: ["AI Development", "Machine Learning", "API Integration", "Custom Solutions", "Enterprise AI"],
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&auto=format",
    availability: "24/7",
    responseTime: "2 hours",
    createdAt: "2024-01-15T10:00:00.000Z"
  },
  {
    id: "cloud-infrastructure-management",
    title: "Cloud Infrastructure Management",
    description: "Comprehensive cloud infrastructure management including migration, optimization, monitoring, and 24/7 support across all major cloud platforms.",
    category: "Infrastructure",
    subcategory: "Cloud Management",
    pricing: {
      hourly: 75,
      daily: 600,
      monthly: 12000,
      currency: "$",
      features: ["24/7 monitoring", "Performance optimization", "Cost management", "Security compliance", "Disaster recovery"]
    },
    features: [
      "Multi-cloud infrastructure management",
      "Automated scaling and load balancing",
      "Cost optimization and resource management",
      "Security and compliance monitoring",
      "Backup and disaster recovery",
      "Performance monitoring and alerting",
      "Infrastructure as Code (IaC)",
      "Migration and modernization services"
    ],
    benefits: [
      "Reduce cloud costs by 25-40% through optimization",
      "Improve system reliability and uptime",
      "Enhance security and compliance posture",
      "Scale infrastructure automatically based on demand",
      "Focus on core business while we manage IT infrastructure"
    ],
    useCases: [
      "Cloud migration projects",
      "Infrastructure modernization",
      "Multi-cloud management",
      "DevOps automation",
      "Compliance and security management"
    ],
    targetAudience: ["Medium to large businesses", "Tech companies", "Financial services", "Healthcare organizations", "E-commerce platforms"],
    technologies: ["AWS", "Azure", "Google Cloud", "Terraform", "Ansible", "Docker", "Kubernetes", "Jenkins"],
    support: ["24/7 infrastructure monitoring", "Emergency response team", "Monthly optimization reports", "Security audits", "Performance tuning"],
    website: "https://ziontechgroup.com/cloud-management",
    contactEmail: "kleber@ziontechgroup.com",
    phone: "+1 302 464 0950",
    address: "364 E Main St STE 1008 Middletown DE 19709",
    rating: 4.8,
    reviewCount: 203,
    experience: "10+ years",
    tags: ["Cloud Management", "Infrastructure", "DevOps", "Cost Optimization", "Security"],
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format",
    availability: "24/7",
    responseTime: "1 hour",
    createdAt: "2024-01-20T14:30:00.000Z"
  },
  {
    id: "cybersecurity-assessment",
    title: "Cybersecurity Assessment & Protection",
    description: "Comprehensive cybersecurity services including penetration testing, vulnerability assessments, compliance audits, and security implementation.",
    category: "Security",
    subcategory: "Cybersecurity",
    pricing: {
      hourly: 95,
      daily: 760,
      monthly: 15200,
      currency: "$",
      features: ["Penetration testing", "Vulnerability assessment", "Compliance reporting", "Security implementation", "Ongoing monitoring"]
    },
    features: [
      "Comprehensive security assessments",
      "Penetration testing and ethical hacking",
      "Vulnerability scanning and remediation",
      "Compliance audits (SOC2, ISO27001, HIPAA)",
      "Security policy development",
      "Incident response planning",
      "Employee security training",
      "Ongoing security monitoring"
    ],
    benefits: [
      "Protect against cyber threats and data breaches",
      "Meet industry compliance requirements",
      "Reduce security incident response time",
      "Build customer trust and confidence",
      "Avoid costly security breaches and fines"
    ],
    useCases: [
      "Security compliance audits",
      "Penetration testing",
      "Security policy development",
      "Incident response planning",
      "Employee security awareness"
    ],
    targetAudience: ["Healthcare organizations", "Financial institutions", "E-commerce businesses", "Educational institutions", "Government agencies"],
    technologies: ["Nessus", "Metasploit", "Burp Suite", "Wireshark", "Nmap", "OpenVAS", "Qualys", "Rapid7"],
    support: ["Emergency incident response", "Compliance consulting", "Security training", "Ongoing monitoring", "Regular security updates"],
    website: "https://ziontechgroup.com/cybersecurity",
    contactEmail: "kleber@ziontechgroup.com",
    phone: "+1 302 464 0950",
    address: "364 E Main St STE 1008 Middletown DE 19709",
    rating: 4.9,
    reviewCount: 189,
    experience: "12+ years",
    tags: ["Cybersecurity", "Penetration Testing", "Compliance", "Security Audits", "Incident Response"],
    image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=800&auto=format",
    availability: "24/7",
    responseTime: "30 minutes",
    createdAt: "2024-01-10T09:15:00.000Z"
  },
  {
    id: "data-analytics-business-intelligence",
    title: "Data Analytics & Business Intelligence",
    description: "Advanced data analytics and business intelligence solutions to transform raw data into actionable insights for strategic decision-making.",
    category: "Analytics",
    subcategory: "Business Intelligence",
    pricing: {
      hourly: 70,
      daily: 560,
      monthly: 11200,
      currency: "$",
      features: ["Data analysis", "Dashboard creation", "Report automation", "Predictive analytics", "Data visualization"]
    },
    features: [
      "Data warehouse design and implementation",
      "ETL pipeline development",
      "Interactive dashboards and reports",
      "Predictive analytics and forecasting",
      "Data quality assessment and improvement",
      "Real-time data processing",
      "Advanced data visualization",
      "Automated reporting and alerts"
    ],
    benefits: [
      "Make data-driven decisions with confidence",
      "Identify trends and opportunities early",
      "Improve operational efficiency",
      "Enhance customer understanding",
      "Automate reporting and save time"
    ],
    useCases: [
      "Sales and marketing analytics",
      "Financial reporting and analysis",
      "Customer behavior analysis",
      "Operational performance tracking",
      "Predictive maintenance"
    ],
    targetAudience: ["Business analysts", "Data scientists", "Marketing teams", "Operations managers", "Executive leadership"],
    technologies: ["Power BI", "Tableau", "Python", "R", "SQL", "Apache Spark", "Hadoop", "AWS Redshift"],
    support: ["Data analysis consulting", "Dashboard development", "Training and support", "Ongoing maintenance", "Performance optimization"],
    website: "https://ziontechgroup.com/data-analytics",
    contactEmail: "kleber@ziontechgroup.com",
    phone: "+1 302 464 0950",
    address: "364 E Main St STE 1008 Middletown DE 19709",
    rating: 4.7,
    reviewCount: 134,
    experience: "9+ years",
    tags: ["Data Analytics", "Business Intelligence", "Data Visualization", "Predictive Analytics", "Reporting"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format",
    availability: "Business hours",
    responseTime: "4 hours",
    createdAt: "2024-01-25T11:45:00.000Z"
  },
  {
    id: "web-development-ecommerce",
    title: "Web Development & E-commerce Solutions",
    description: "Full-stack web development services including custom websites, e-commerce platforms, and web applications with modern technologies.",
    category: "Development",
    subcategory: "Web Development",
    pricing: {
      hourly: 65,
      daily: 520,
      monthly: 10400,
      currency: "$",
      features: ["Custom web development", "E-commerce integration", "Responsive design", "SEO optimization", "Performance optimization"]
    },
    features: [
      "Custom website development",
      "E-commerce platform development",
      "Responsive and mobile-first design",
      "SEO optimization and performance",
      "Content management systems",
      "Payment gateway integration",
      "Analytics and tracking setup",
      "Ongoing maintenance and support"
    ],
    benefits: [
      "Increase online presence and visibility",
      "Improve user experience and conversion rates",
      "Scale your business online",
      "Reduce development time and costs",
      "Get ongoing support and maintenance"
    ],
    useCases: [
      "Business website development",
      "E-commerce store creation",
      "Web application development",
      "Website redesign and optimization",
      "Performance improvement"
    ],
    targetAudience: ["Small businesses", "E-commerce startups", "Service companies", "Non-profit organizations", "Personal brands"],
    technologies: ["React", "Vue.js", "Node.js", "PHP", "WordPress", "Shopify", "WooCommerce", "Laravel"],
    support: ["Development consultation", "Design and development", "Testing and deployment", "Training and support", "Ongoing maintenance"],
    website: "https://ziontechgroup.com/web-development",
    contactEmail: "kleber@ziontechgroup.com",
    phone: "+1 302 464 0950",
    address: "364 E Main St STE 1008 Middletown DE 19709",
    rating: 4.8,
    reviewCount: 178,
    experience: "7+ years",
    tags: ["Web Development", "E-commerce", "Responsive Design", "SEO", "Performance"],
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&auto=format",
    availability: "Business hours",
    responseTime: "8 hours",
    createdAt: "2024-01-18T16:20:00.000Z"
  },
  {
    id: "network-infrastructure-setup",
    title: "Network Infrastructure Setup & Management",
    description: "Complete network infrastructure services including design, implementation, security, and ongoing management for businesses of all sizes.",
    category: "Infrastructure",
    subcategory: "Network Management",
    pricing: {
      hourly: 80,
      daily: 640,
      monthly: 12800,
      currency: "$",
      features: ["Network design", "Implementation", "Security setup", "Monitoring", "Ongoing management"]
    },
    features: [
      "Network architecture design",
      "Hardware installation and configuration",
      "Security implementation (firewalls, VPNs)",
      "Wireless network setup",
      "Network monitoring and alerting",
      "Performance optimization",
      "Disaster recovery planning",
      "Ongoing maintenance and support"
    ],
    benefits: [
      "Improve network performance and reliability",
      "Enhance security and data protection",
      "Reduce network downtime and issues",
      "Scale network infrastructure as business grows",
      "Get professional network management"
    ],
    useCases: [
      "New office network setup",
      "Network infrastructure upgrade",
      "Security enhancement",
      "Performance optimization",
      "Disaster recovery planning"
    ],
    targetAudience: ["Small to medium businesses", "Office environments", "Retail locations", "Healthcare facilities", "Educational institutions"],
    technologies: ["Cisco", "Juniper", "Fortinet", "Ubiquiti", "Meraki", "VMware", "Hyper-V", "Windows Server"],
    support: ["Network design consultation", "Implementation and setup", "Security configuration", "Ongoing monitoring", "Emergency support"],
    website: "https://ziontechgroup.com/network-infrastructure",
    contactEmail: "kleber@ziontechgroup.com",
    phone: "+1 302 464 0950",
    address: "364 E Main St STE 1008 Middletown DE 19709",
    rating: 4.7,
    reviewCount: 145,
    experience: "11+ years",
    tags: ["Network Infrastructure", "Network Security", "Wireless Networks", "Performance", "Monitoring"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format",
    availability: "24/7",
    responseTime: "2 hours",
    createdAt: "2024-01-22T15:30:00.000Z"
  }
];

export const getITServicesByCategory = (category: string) => {
  return IT_SERVICES.filter(service => service.category === category);
};

export const getITServicesBySubcategory = (subcategory: string) => {
  return IT_SERVICES.filter(service => service.subcategory === subcategory);
};

export const searchITServices = (query: string) => {
  const lowercaseQuery = query.toLowerCase();
  return IT_SERVICES.filter(service => 
    service.title.toLowerCase().includes(lowercaseQuery) ||
    service.description.toLowerCase().includes(lowercaseQuery) ||
    service.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};