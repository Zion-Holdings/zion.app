export interface MicroSaasService {
  id: string;
  title: string;
  description: string;
  category: 'AI Services' | 'IT Services' | 'Micro SAAS' | 'Development' | 'Analytics' | 'Security' | 'Cloud' | 'Automation';
  price: number;
  currency: string;
  pricingModel: 'one-time' | 'monthly' | 'yearly' | 'usage-based' | 'hourly';
  features: string[];
  benefits: string[];
  targetAudience: string[];
  marketPrice: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
  tags: string[];
  aiScore: number;
  rating: number;
  reviewCount: number;
  availability: string;
  location: string;
  featured: boolean;
  images: string[];
  createdAt: string;
}

export const MICRO_SAAS_SERVICES: MicroSaasService[] = [
  // AI Services
  {
    id: "ai-chatbot-builder",
    title: "AI Chatbot Builder Pro",
    description: "Build intelligent chatbots for customer service, sales, and support with our no-code AI platform. Integrates with WhatsApp, Facebook, and your website.",
    category: "AI Services",
    price: 299,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "No-code chatbot builder",
      "Multi-language support",
      "WhatsApp Business API integration",
      "Facebook Messenger integration",
      "Website widget",
      "Analytics dashboard",
      "Custom AI training",
      "24/7 customer support"
    ],
    benefits: [
      "Reduce customer service costs by 60%",
      "Handle 1000+ conversations simultaneously",
      "24/7 availability",
      "Instant response times",
      "Scalable solution"
    ],
    targetAudience: ["E-commerce", "SaaS companies", "Customer service teams", "Small businesses"],
    marketPrice: "Starting from $299/month (Industry average: $500-800/month)",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    tags: ["AI Chatbot", "Customer Service", "Automation", "WhatsApp", "Facebook"],
    aiScore: 95,
    rating: 4.8,
    reviewCount: 156,
    availability: "Immediate",
    location: "Global",
    featured: true,
    images: ["https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T10:00:00.000Z"
  },
  {
    id: "ai-content-generator",
    title: "AI Content Generator Suite",
    description: "Generate high-quality blog posts, social media content, product descriptions, and marketing copy using advanced AI. Includes SEO optimization and brand voice training.",
    category: "AI Services",
    price: 199,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Blog post generation",
      "Social media content",
      "Product descriptions",
      "Email marketing copy",
      "SEO optimization",
      "Brand voice training",
      "Plagiarism checker",
      "Content calendar"
    ],
    benefits: [
      "Save 20+ hours per week on content creation",
      "Improve SEO rankings",
      "Consistent brand voice",
      "High-quality, original content",
      "Cost-effective content strategy"
    ],
    targetAudience: ["Marketing teams", "Content creators", "E-commerce", "Agencies"],
    marketPrice: "Starting from $199/month (Industry average: $300-600/month)",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    tags: ["Content Generation", "AI Writing", "SEO", "Marketing", "Copywriting"],
    aiScore: 92,
    rating: 4.7,
    reviewCount: 234,
    availability: "Immediate",
    location: "Global",
    featured: true,
    images: ["https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-20T14:30:00.000Z"
  },
  {
    id: "ai-data-analytics",
    title: "AI-Powered Business Intelligence",
    description: "Transform your business data into actionable insights with AI-driven analytics. Includes predictive modeling, automated reporting, and real-time dashboards.",
    category: "AI Services",
    price: 499,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Real-time data visualization",
      "Predictive analytics",
      "Automated reporting",
      "Custom dashboards",
      "Data integration",
      "Machine learning models",
      "API access",
      "White-label solution"
    ],
    benefits: [
      "Make data-driven decisions faster",
      "Identify trends and opportunities",
      "Reduce manual reporting time",
      "Improve business performance",
      "Competitive advantage"
    ],
    targetAudience: ["Enterprises", "Data teams", "Business analysts", "Executives"],
    marketPrice: "Starting from $499/month (Industry average: $1000-2000/month)",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    tags: ["Business Intelligence", "Analytics", "Predictive Modeling", "Dashboard", "AI"],
    aiScore: 94,
    rating: 4.9,
    reviewCount: 89,
    availability: "2-3 weeks",
    location: "Global",
    featured: true,
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-01T09:15:00.000Z"
  },

  // IT Services
  {
    id: "cloud-migration-expert",
    title: "Cloud Migration & Optimization Expert",
    description: "Professional cloud migration services for AWS, Azure, and Google Cloud. Includes cost optimization, security setup, and performance tuning.",
    category: "IT Services",
    price: 2500,
    currency: "$",
    pricingModel: "one-time",
    features: [
      "Cloud strategy planning",
      "Migration execution",
      "Cost optimization",
      "Security configuration",
      "Performance tuning",
      "Training and documentation",
      "Post-migration support",
      "Compliance assistance"
    ],
    benefits: [
      "Reduce infrastructure costs by 30-50%",
      "Improve scalability and performance",
      "Enhanced security and compliance",
      "24/7 monitoring and support",
      "Expert guidance throughout process"
    ],
    targetAudience: ["Enterprises", "SMBs", "Startups", "Government agencies"],
    marketPrice: "Starting from $2,500 (Industry average: $5,000-15,000)",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    tags: ["Cloud Migration", "AWS", "Azure", "Google Cloud", "DevOps"],
    aiScore: 88,
    rating: 4.6,
    reviewCount: 67,
    availability: "2-4 weeks",
    location: "Global",
    featured: false,
    images: ["https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-25T11:45:00.000Z"
  },
  {
    id: "cybersecurity-audit",
    title: "Comprehensive Cybersecurity Audit",
    description: "Complete security assessment including penetration testing, vulnerability scanning, compliance review, and security recommendations.",
    category: "IT Services",
    price: 3500,
    currency: "$",
    pricingModel: "one-time",
    features: [
      "Penetration testing",
      "Vulnerability assessment",
      "Security policy review",
      "Compliance audit",
      "Risk assessment",
      "Security recommendations",
      "Remediation guidance",
      "Follow-up testing"
    ],
    benefits: [
      "Identify security vulnerabilities",
      "Meet compliance requirements",
      "Protect customer data",
      "Reduce security risks",
      "Build customer trust"
    ],
    targetAudience: ["Financial services", "Healthcare", "E-commerce", "Enterprises"],
    marketPrice: "Starting from $3,500 (Industry average: $8,000-20,000)",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    tags: ["Cybersecurity", "Penetration Testing", "Compliance", "Security Audit", "Risk Assessment"],
    aiScore: 91,
    rating: 4.8,
    reviewCount: 45,
    availability: "1-2 weeks",
    location: "Global",
    featured: false,
    images: ["https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-05T16:20:00.000Z"
  },
  {
    id: "it-consulting",
    title: "Strategic IT Consulting & Digital Transformation",
    description: "Expert IT consulting to help businesses modernize their technology infrastructure, improve efficiency, and drive digital transformation.",
    category: "IT Services",
    price: 150,
    currency: "$",
    pricingModel: "hourly",
    features: [
      "Technology assessment",
      "Digital transformation strategy",
      "Process optimization",
      "Technology selection",
      "Implementation planning",
      "Change management",
      "ROI analysis",
      "Ongoing support"
    ],
    benefits: [
      "Optimize technology investments",
      "Improve operational efficiency",
      "Stay competitive in digital age",
      "Reduce technology costs",
      "Expert guidance and support"
    ],
    targetAudience: ["SMBs", "Enterprises", "Non-profits", "Government"],
    marketPrice: "Starting from $150/hour (Industry average: $200-400/hour)",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    tags: ["IT Consulting", "Digital Transformation", "Strategy", "Process Optimization", "Technology"],
    aiScore: 87,
    rating: 4.7,
    reviewCount: 123,
    availability: "Immediate",
    location: "Global",
    featured: false,
    images: ["https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-30T13:10:00.000Z"
  },

  // Micro SAAS
  {
    id: "project-management-saas",
    title: "Project Management & Team Collaboration Platform",
    description: "All-in-one project management solution with task tracking, team collaboration, time tracking, and project analytics. Perfect for remote teams.",
    category: "Micro SAAS",
    price: 29,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Task management",
      "Team collaboration",
      "Time tracking",
      "Project analytics",
      "File sharing",
      "Calendar integration",
      "Mobile app",
      "API access"
    ],
    benefits: [
      "Improve team productivity by 25%",
      "Better project visibility",
      "Reduce communication overhead",
      "Track project progress",
      "Affordable solution"
    ],
    targetAudience: ["Remote teams", "Agencies", "Startups", "SMBs"],
    marketPrice: "Starting from $29/month (Industry average: $50-100/month)",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    tags: ["Project Management", "Team Collaboration", "Task Tracking", "Productivity", "Remote Work"],
    aiScore: 89,
    rating: 4.6,
    reviewCount: 178,
    availability: "Immediate",
    location: "Global",
    featured: true,
    images: ["https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-10T08:45:00.000Z"
  },
  {
    id: "inventory-management-saas",
    title: "Smart Inventory Management System",
    description: "AI-powered inventory management with demand forecasting, automated reordering, barcode scanning, and real-time analytics for retail and e-commerce.",
    category: "Micro SAAS",
    price: 79,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Inventory tracking",
      "Demand forecasting",
      "Automated reordering",
      "Barcode scanning",
      "Real-time analytics",
      "Multi-location support",
      "Mobile app",
      "Integration APIs"
    ],
    benefits: [
      "Reduce stockouts by 80%",
      "Optimize inventory levels",
      "Save time on manual counting",
      "Improve cash flow",
      "Data-driven decisions"
    ],
    targetAudience: ["Retail stores", "E-commerce", "Warehouses", "Manufacturing"],
    marketPrice: "Starting from $79/month (Industry average: $150-300/month)",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    tags: ["Inventory Management", "Demand Forecasting", "Barcode Scanning", "Retail", "E-commerce"],
    aiScore: 93,
    rating: 4.8,
    reviewCount: 92,
    availability: "Immediate",
    location: "Global",
    featured: false,
    images: ["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-12T10:30:00.000Z"
  },
  {
    id: "crm-saas",
    title: "Customer Relationship Management (CRM) Platform",
    description: "Comprehensive CRM solution with lead management, sales tracking, customer support, and marketing automation. Designed for growing businesses.",
    category: "Micro SAAS",
    price: 49,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Lead management",
      "Sales tracking",
      "Customer support",
      "Marketing automation",
      "Email campaigns",
      "Analytics dashboard",
      "Mobile app",
      "Integration tools"
    ],
    benefits: [
      "Increase sales by 30%",
      "Improve customer retention",
      "Streamline sales process",
      "Better customer insights",
      "Affordable enterprise features"
    ],
    targetAudience: ["Sales teams", "Marketing agencies", "SMBs", "Startups"],
    marketPrice: "Starting from $49/month (Industry average: $100-200/month)",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    tags: ["CRM", "Sales Management", "Lead Management", "Marketing Automation", "Customer Support"],
    aiScore: 90,
    rating: 4.7,
    reviewCount: 145,
    availability: "Immediate",
    location: "Global",
    featured: true,
    images: ["https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-08T15:20:00.000Z"
  },

  // Development Services
  {
    id: "web-app-development",
    title: "Custom Web Application Development",
    description: "Full-stack web application development using modern technologies. From concept to deployment with ongoing maintenance and support.",
    category: "Development",
    price: 8000,
    currency: "$",
    pricingModel: "one-time",
    features: [
      "Custom web applications",
      "Responsive design",
      "Database design",
      "API development",
      "Testing and QA",
      "Deployment",
      "Documentation",
      "3 months support"
    ],
    benefits: [
      "Custom solution for your needs",
      "Modern, scalable architecture",
      "Professional development team",
      "Ongoing support and maintenance",
      "Competitive pricing"
    ],
    targetAudience: ["Startups", "SMBs", "Enterprises", "Non-profits"],
    marketPrice: "Starting from $8,000 (Industry average: $15,000-50,000)",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    tags: ["Web Development", "Custom Applications", "Full-stack", "Responsive Design", "API Development"],
    aiScore: 86,
    rating: 4.5,
    reviewCount: 78,
    availability: "6-8 weeks",
    location: "Global",
    featured: false,
    images: ["https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-15T12:00:00.000Z"
  },
  {
    id: "mobile-app-development",
    title: "Cross-Platform Mobile App Development",
    description: "Native-quality mobile applications for iOS and Android using React Native or Flutter. Includes app store submission and maintenance.",
    category: "Development",
    price: 12000,
    currency: "$",
    pricingModel: "one-time",
    features: [
      "Cross-platform development",
      "iOS and Android apps",
      "UI/UX design",
      "Testing and QA",
      "App store submission",
      "Push notifications",
      "Analytics integration",
      "6 months support"
    ],
    benefits: [
      "Single codebase for both platforms",
      "Native performance",
      "Faster time to market",
      "Cost-effective development",
      "Ongoing support"
    ],
    targetAudience: ["Startups", "SMBs", "Enterprises", "Mobile-first businesses"],
    marketPrice: "Starting from $12,000 (Industry average: $25,000-80,000)",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    tags: ["Mobile Development", "React Native", "Flutter", "iOS", "Android"],
    aiScore: 88,
    rating: 4.6,
    reviewCount: 56,
    availability: "8-10 weeks",
    location: "Global",
    featured: false,
    images: ["https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-18T09:30:00.000Z"
  }
];

export const getServiceCategories = () => {
  const categories = [...new Set(MICRO_SAAS_SERVICES.map(service => service.category))];
  return categories.map(category => ({
    value: category.toLowerCase().replace(/\s+/g, '-'),
    label: category,
    count: MICRO_SAAS_SERVICES.filter(service => service.category === category).length
  }));
};

export const getServicesByCategory = (category: string) => {
  return MICRO_SAAS_SERVICES.filter(service => 
    service.category.toLowerCase().replace(/\s+/g, '-') === category
  );
};

export const getFeaturedServices = () => {
  return MICRO_SAAS_SERVICES.filter(service => service.featured);
};