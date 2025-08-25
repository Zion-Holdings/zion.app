export interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  price: {
    basic: number;
    professional: number;
    enterprise: number;
  };
  features: string[];
  tags: string[];
  featured: boolean;
  popular: boolean;
  estimatedTime: string;
  included: string[];
  notIncluded: string[];
  requirements: string[];
  deliverables: string[];
  technologies: string[];
  certifications: string[];
  support: string[];
  warranty: string;
  location: string[];
  languages: string[];
  availability: string;
  rating: number;
  reviews: number;
  provider: {
    name: string;
    verified: boolean;
    rating: number;
    completedProjects: number;
    responseTime: string;
    location: string;
    languages: string[];
    certifications: string[];
    specialties: string[];
  };
}

export const ENHANCED_SERVICES: Service[] = [
  {
    id: "ai-ml-consulting",
    title: "AI & Machine Learning Consulting",
    description: "Expert consultation on implementing AI and ML solutions for your business",
    category: "AI & Machine Learning",
    subcategory: "Consulting",
    price: {
      basic: 150,
      professional: 250,
      enterprise: 400
    },
    features: [
      "AI Strategy Development",
      "Technology Assessment",
      "Implementation Roadmap",
      "ROI Analysis",
      "Team Training",
      "Ongoing Support"
    ],
    tags: ["AI", "Machine Learning", "Consulting", "Strategy", "Digital Transformation"],
    featured: true,
    popular: true,
    estimatedTime: "2-4 weeks",
    included: [
      "Initial Assessment",
      "Strategy Document",
      "Implementation Plan",
      "Technology Recommendations",
      "Cost Analysis"
    ],
    notIncluded: [
      "Actual Implementation",
      "Hardware/Software",
      "Ongoing Maintenance"
    ],
    requirements: [
      "Business Requirements Document",
      "Current Technology Stack",
      "Budget Constraints",
      "Timeline Expectations"
    ],
    deliverables: [
      "AI Strategy Report",
      "Implementation Roadmap",
      "Technology Architecture",
      "Cost-Benefit Analysis",
      "Risk Assessment"
    ],
    technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "AWS SageMaker"],
    certifications: ["AWS ML Specialty", "Google Cloud ML Engineer", "Microsoft Azure AI Engineer"],
    support: ["Email Support", "Phone Consultation", "Monthly Review Calls"],
    warranty: "30-day satisfaction guarantee",
    location: ["Remote", "On-site", "Hybrid"],
    languages: ["English", "Spanish", "Portuguese"],
    availability: "24/7",
    rating: 4.9,
    reviews: 127,
    provider: {
      name: "AI Solutions Pro",
      verified: true,
      rating: 4.9,
      completedProjects: 89,
      responseTime: "<2 hours",
      location: "United States",
      languages: ["English", "Spanish"],
      certifications: ["AWS ML Specialty", "Google Cloud ML Engineer"],
      specialties: ["Computer Vision", "Natural Language Processing", "Predictive Analytics"]
    }
  },
  {
    id: "cybersecurity-audit",
    title: "Cybersecurity Audit & Assessment",
    description: "Comprehensive security assessment to identify vulnerabilities and improve protection",
    category: "Cybersecurity",
    subcategory: "Audit & Assessment",
    price: {
      basic: 200,
      professional: 350,
      enterprise: 600
    },
    features: [
      "Vulnerability Assessment",
      "Penetration Testing",
      "Security Policy Review",
      "Compliance Check",
      "Risk Analysis",
      "Remediation Plan"
    ],
    tags: ["Cybersecurity", "Security Audit", "Penetration Testing", "Compliance", "Risk Assessment"],
    featured: true,
    popular: true,
    estimatedTime: "1-3 weeks",
    included: [
      "Security Assessment",
      "Vulnerability Report",
      "Risk Analysis",
      "Remediation Recommendations",
      "Compliance Report"
    ],
    notIncluded: [
      "Security Tool Implementation",
      "Ongoing Monitoring",
      "Incident Response"
    ],
    requirements: [
      "Network Access",
      "System Documentation",
      "Security Policies",
      "Compliance Requirements"
    ],
    deliverables: [
      "Security Assessment Report",
      "Vulnerability Database",
      "Risk Matrix",
      "Remediation Roadmap",
      "Compliance Checklist"
    ],
    technologies: ["Nmap", "Metasploit", "Wireshark", "Nessus", "OpenVAS"],
    certifications: ["CISSP", "CEH", "OSCP", "CISM", "CompTIA Security+"],
    support: ["24/7 Emergency Support", "Weekly Status Updates", "Monthly Review"],
    warranty: "90-day remediation support",
    location: ["Remote", "On-site"],
    languages: ["English", "French", "German"],
    availability: "Business Hours + Emergency",
    rating: 4.8,
    reviews: 94,
    provider: {
      name: "SecureNet Solutions",
      verified: true,
      rating: 4.8,
      completedProjects: 156,
      responseTime: "<1 hour",
      location: "United Kingdom",
      languages: ["English", "French", "German"],
      certifications: ["CISSP", "CEH", "OSCP"],
      specialties: ["Network Security", "Application Security", "Cloud Security"]
    }
  },
  {
    id: "cloud-migration",
    title: "Cloud Migration & DevOps",
    description: "Seamless migration to cloud platforms with DevOps automation and best practices",
    category: "Cloud & Infrastructure",
    subcategory: "Migration",
    price: {
      basic: 300,
      professional: 500,
      enterprise: 800
    },
    features: [
      "Cloud Strategy Planning",
      "Migration Execution",
      "DevOps Implementation",
      "CI/CD Pipeline Setup",
      "Monitoring & Alerting",
      "Cost Optimization"
    ],
    tags: ["Cloud Migration", "DevOps", "AWS", "Azure", "Google Cloud", "CI/CD"],
    featured: true,
    popular: true,
    estimatedTime: "4-8 weeks",
    included: [
      "Migration Strategy",
      "Infrastructure as Code",
      "CI/CD Pipeline",
      "Monitoring Setup",
      "Documentation",
      "Team Training"
    ],
    notIncluded: [
      "Cloud Infrastructure Costs",
      "Third-party Tools",
      "Ongoing Operations"
    ],
    requirements: [
      "Current Infrastructure Documentation",
      "Application Dependencies",
      "Performance Requirements",
      "Budget Approval"
    ],
    deliverables: [
      "Migration Plan",
      "Infrastructure Code",
      "CI/CD Pipeline",
      "Monitoring Dashboard",
      "Runbooks",
      "Training Materials"
    ],
    technologies: ["AWS", "Azure", "Google Cloud", "Terraform", "Docker", "Kubernetes"],
    certifications: ["AWS Solutions Architect", "Azure Solutions Architect", "Google Cloud Professional"],
    support: ["24/7 Support", "Weekly Reviews", "Monthly Optimization"],
    warranty: "6-month post-migration support",
    location: ["Remote", "On-site"],
    languages: ["English", "Spanish", "Portuguese"],
    availability: "24/7",
    rating: 4.7,
    reviews: 203,
    provider: {
      name: "CloudTech Experts",
      verified: true,
      rating: 4.7,
      completedProjects: 234,
      responseTime: "<4 hours",
      location: "Canada",
      languages: ["English", "French"],
      certifications: ["AWS Solutions Architect", "Azure Solutions Architect"],
      specialties: ["AWS", "Azure", "Kubernetes", "Terraform"]
    }
  },
  {
    id: "data-analytics",
    title: "Data Analytics & Business Intelligence",
    description: "Transform raw data into actionable insights with advanced analytics solutions",
    category: "Data & Analytics",
    subcategory: "Business Intelligence",
    price: {
      basic: 180,
      professional: 300,
      enterprise: 500
    },
    features: [
      "Data Strategy Development",
      "ETL Pipeline Design",
      "Dashboard Creation",
      "Predictive Analytics",
      "Data Governance",
      "Performance Optimization"
    ],
    tags: ["Data Analytics", "Business Intelligence", "ETL", "Data Visualization", "Predictive Analytics"],
    featured: true,
    popular: false,
    estimatedTime: "3-6 weeks",
    included: [
      "Data Assessment",
      "ETL Pipeline",
      "Analytics Dashboard",
      "Data Dictionary",
      "Governance Framework"
    ],
    notIncluded: [
      "Data Sources",
      "Third-party Tools",
      "Ongoing Data Processing"
    ],
    requirements: [
      "Data Sources Access",
      "Business Requirements",
      "Performance Expectations",
      "Compliance Requirements"
    ],
    deliverables: [
      "Data Strategy Document",
      "ETL Pipeline",
      "Analytics Dashboard",
      "Data Dictionary",
      "Governance Policy",
      "Training Materials"
    ],
    technologies: ["Python", "SQL", "Tableau", "Power BI", "Apache Spark", "Snowflake"],
    certifications: ["Tableau Desktop Specialist", "Power BI Data Analyst", "Google Data Analytics"],
    support: ["Email Support", "Weekly Reviews", "Monthly Optimization"],
    warranty: "60-day support period",
    location: ["Remote", "On-site"],
    languages: ["English", "Spanish"],
    availability: "Business Hours",
    rating: 4.6,
    reviews: 78,
    provider: {
      name: "DataInsight Pro",
      verified: true,
      rating: 4.6,
      completedProjects: 67,
      responseTime: "<8 hours",
      location: "Australia",
      languages: ["English"],
      certifications: ["Tableau Desktop Specialist", "Power BI Data Analyst"],
      specialties: ["Data Engineering", "Business Intelligence", "Predictive Analytics"]
    }
  },
  {
    id: "web-development",
    title: "Custom Web Application Development",
    description: "Full-stack web applications built with modern technologies and best practices",
    category: "Web & Mobile",
    subcategory: "Development",
    price: {
      basic: 250,
      professional: 450,
      enterprise: 750
    },
    features: [
      "Custom Design",
      "Full-stack Development",
      "Responsive Layout",
      "Performance Optimization",
      "Security Implementation",
      "Testing & Deployment"
    ],
    tags: ["Web Development", "React", "Node.js", "Full-stack", "Custom Development"],
    featured: false,
    popular: true,
    estimatedTime: "6-12 weeks",
    included: [
      "UI/UX Design",
      "Frontend Development",
      "Backend Development",
      "Database Design",
      "Testing",
      "Deployment"
    ],
    notIncluded: [
      "Hosting",
      "Domain Registration",
      "Ongoing Maintenance",
      "Content Creation"
    ],
    requirements: [
      "Project Requirements",
      "Design Preferences",
      "Target Audience",
      "Performance Requirements"
    ],
    deliverables: [
      "Source Code",
      "Documentation",
      "Deployment Guide",
      "User Manual",
      "Maintenance Guide"
    ],
    technologies: ["React", "Node.js", "TypeScript", "PostgreSQL", "AWS", "Docker"],
    certifications: ["AWS Developer Associate", "Microsoft Certified Developer", "Google Cloud Developer"],
    support: ["3-month post-launch support", "Bug fixes", "Performance optimization"],
    warranty: "90-day bug-free guarantee",
    location: ["Remote", "On-site"],
    languages: ["English", "Spanish", "Portuguese"],
    availability: "Business Hours",
    rating: 4.8,
    reviews: 156,
    provider: {
      name: "WebDev Masters",
      verified: true,
      rating: 4.8,
      completedProjects: 189,
      responseTime: "<6 hours",
      location: "Brazil",
      languages: ["English", "Portuguese", "Spanish"],
      certifications: ["AWS Developer Associate", "Microsoft Certified Developer"],
      specialties: ["React", "Node.js", "Full-stack Development", "E-commerce"]
    }
  }
];

export const SERVICE_CATEGORIES = [
  {
    id: "ai-ml",
    name: "AI & Machine Learning",
    description: "Artificial intelligence and machine learning solutions",
    services: ["ai-ml-consulting"],
    icon: "🤖",
    color: "from-purple-500 to-pink-500"
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity",
    description: "Security solutions and protection services",
    services: ["cybersecurity-audit"],
    icon: "🔒",
    color: "from-red-500 to-orange-500"
  },
  {
    id: "cloud-infrastructure",
    name: "Cloud & Infrastructure",
    description: "Cloud migration and infrastructure management",
    services: ["cloud-migration"],
    icon: "☁️",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: "data-analytics",
    name: "Data & Analytics",
    description: "Data processing and business intelligence",
    services: ["data-analytics"],
    icon: "📊",
    color: "from-green-500 to-emerald-500"
  },
  {
    id: "web-mobile",
    name: "Web & Mobile",
    description: "Custom application development",
    services: ["web-development"],
    icon: "💻",
    color: "from-indigo-500 to-purple-500"
  }
];

export const FEATURED_SERVICES = ENHANCED_SERVICES.filter(service => service.featured);

export const POPULAR_SERVICES = ENHANCED_SERVICES.filter(service => service.popular);

export const getServiceById = (id: string): Service | undefined => {
  return ENHANCED_SERVICES.find(service => service.id === id);
};

export const getServicesByCategory = (category: string): Service[] => {
  return ENHANCED_SERVICES.filter(service => service.category === category);
};

export const searchServices = (query: string): Service[] => {
  const searchTerm = query.toLowerCase();
  return ENHANCED_SERVICES.filter(service => 
    service.title.toLowerCase().includes(searchTerm) ||
    service.description.toLowerCase().includes(searchTerm) ||
    service.tags.some(tag => tag.toLowerCase().includes(searchTerm))
  );
};