export interface EnhancedMicroSaasService {
  id: string;
  name: string;
  description: string;
  category: string;
  price: {
    monthly: number;
    yearly: number;
    currency: string;
  };
  features: string[];
  benefits: string[];
  useCases: string[];
  targetAudience: string[];
  technology: string[];
  integrations: string[];
  support: string[];
  deployment: string[];
  scalability: string;
  security: string[];
  compliance: string[];
  roi: string;
  implementationTime: string;
  contactInfo: {
    email: string;
    phone: string;
    website: string;
  };
  demoUrl?: string;
  documentationUrl?: string;
  caseStudies?: string[];
  testimonials?: Array<{
    name: string;
    company: string;
    role: string;
    content: string;
    rating: number;
  }>;
  tags: string[];
  isFeatured?: boolean;
  isNew?: boolean;
  isPopular?: boolean;
}

export const ENHANCED_MICRO_SAAS_SERVICES: EnhancedMicroSaasService[] = [
  {
    id: "ai-powered-customer-intelligence",
    name: "AI-Powered Customer Intelligence Platform",
    description: "Advanced customer behavior analysis and predictive insights using machine learning algorithms to drive personalized marketing strategies and increase customer lifetime value.",
    category: "AI & Analytics",
    price: {
      monthly: 299,
      yearly: 2999,
      currency: "USD"
    },
    features: [
      "Real-time customer behavior tracking",
      "Predictive analytics and forecasting",
      "Personalized recommendation engine",
      "Customer segmentation automation",
      "Churn prediction and prevention",
      "Sentiment analysis and feedback processing",
      "Multi-channel attribution modeling",
      "A/B testing optimization",
      "Customer journey mapping",
      "ROI tracking and reporting"
    ],
    benefits: [
      "Increase customer retention by 35%",
      "Boost conversion rates by 28%",
      "Reduce customer acquisition costs by 22%",
      "Improve customer satisfaction scores",
      "Data-driven decision making",
      "Automated customer insights"
    ],
    useCases: [
      "E-commerce customer personalization",
      "SaaS subscription optimization",
      "Retail customer experience enhancement",
      "Financial services customer management",
      "Healthcare patient engagement"
    ],
    targetAudience: [
      "E-commerce businesses",
      "SaaS companies",
      "Retail chains",
      "Financial institutions",
      "Healthcare providers"
    ],
    technology: [
      "Machine Learning",
      "Natural Language Processing",
      "Big Data Analytics",
      "Real-time Processing",
      "Cloud Computing"
    ],
    integrations: [
      "Shopify",
      "WooCommerce",
      "Salesforce",
      "HubSpot",
      "Google Analytics",
      "Facebook Pixel",
      "Stripe",
      "Zapier"
    ],
    support: [
      "24/7 technical support",
      "Dedicated account manager",
      "Implementation consulting",
      "Training and workshops",
      "API documentation"
    ],
    deployment: [
      "Cloud-based SaaS",
      "API-first architecture",
      "White-label solutions",
      "Custom integrations"
    ],
    scalability: "Handles millions of customer interactions with sub-second response times",
    security: [
      "SOC 2 Type II compliance",
      "GDPR compliance",
      "End-to-end encryption",
      "Regular security audits",
      "Data backup and recovery"
    ],
    compliance: [
      "GDPR",
      "CCPA",
      "SOC 2",
      "ISO 27001",
      "HIPAA (for healthcare)"
    ],
    roi: "Average ROI of 450% within 12 months",
    implementationTime: "2-4 weeks",
    contactInfo: {
      email: "sales@ziontechgroup.com",
      phone: "+1-555-0123",
      website: "https://ziontechgroup.com/ai-customer-intelligence"
    },
    demoUrl: "https://demo.ziontechgroup.com/ai-customer-intelligence",
    documentationUrl: "https://docs.ziontechgroup.com/ai-customer-intelligence",
    caseStudies: [
      "E-commerce giant increased revenue by 42%",
      "SaaS startup reduced churn by 38%",
      "Retail chain improved customer satisfaction by 31%"
    ],
    testimonials: [
      {
        name: "Sarah Johnson",
        company: "TechFlow Inc",
        role: "VP of Marketing",
        content: "This platform transformed our customer understanding and increased our conversion rates dramatically.",
        rating: 5
      }
    ],
    tags: ["AI", "Analytics", "Customer Intelligence", "Machine Learning", "Personalization"],
    isFeatured: true,
    isNew: true
  },
  {
    id: "quantum-secure-communication",
    name: "Quantum-Secure Communication Platform",
    description: "Next-generation encrypted communication system using quantum cryptography principles to provide unbreakable security for sensitive business communications.",
    category: "Cybersecurity",
    price: {
      monthly: 499,
      yearly: 4999,
      currency: "USD"
    },
    features: [
      "Quantum key distribution",
      "End-to-end encryption",
      "Secure file sharing",
      "Video conferencing security",
      "Document encryption",
      "Access control management",
      "Audit logging",
      "Compliance reporting",
      "Multi-factor authentication",
      "Zero-knowledge architecture"
    ],
    benefits: [
      "Unbreakable encryption security",
      "Future-proof against quantum attacks",
      "Compliance with strict regulations",
      "Protection of intellectual property",
      "Secure remote work capabilities",
      "Trusted by government agencies"
    ],
    useCases: [
      "Government communications",
      "Financial services",
      "Healthcare data protection",
      "Legal document security",
      "Military communications"
    ],
    targetAudience: [
      "Government agencies",
      "Financial institutions",
      "Healthcare organizations",
      "Legal firms",
      "Defense contractors"
    ],
    technology: [
      "Quantum Cryptography",
      "Post-Quantum Algorithms",
      "Blockchain Security",
      "Zero-Trust Architecture",
      "Hardware Security Modules"
    ],
    integrations: [
      "Active Directory",
      "LDAP",
      "SAML",
      "OAuth 2.0",
      "REST APIs",
      "WebRTC",
      "SFTP",
      "VPN"
    ],
    support: [
      "24/7 security monitoring",
      "Dedicated security team",
      "Incident response",
      "Security training",
      "Compliance consulting"
    ],
    deployment: [
      "On-premises",
      "Hybrid cloud",
      "Private cloud",
      "Government cloud"
    ],
    scalability: "Supports enterprise-scale deployments with thousands of users",
    security: [
      "Quantum-resistant encryption",
      "Hardware security modules",
      "Regular penetration testing",
      "Security certifications",
      "Threat intelligence"
    ],
    compliance: [
      "FIPS 140-2",
      "Common Criteria",
      "NIST standards",
      "ISO 27001",
      "FedRAMP"
    ],
    roi: "Protection against data breaches worth millions",
    implementationTime: "4-8 weeks",
    contactInfo: {
      email: "security@ziontechgroup.com",
      phone: "+1-555-0124",
      website: "https://ziontechgroup.com/quantum-security"
    },
    demoUrl: "https://demo.ziontechgroup.com/quantum-security",
    documentationUrl: "https://docs.ziontechgroup.com/quantum-security",
    caseStudies: [
      "Government agency secured classified communications",
      "Bank protected $2B in daily transactions",
      "Healthcare system secured patient data"
    ],
    testimonials: [
      {
        name: "Michael Chen",
        company: "SecureBank",
        role: "Chief Security Officer",
        content: "The quantum security gives us confidence in protecting our most sensitive financial data.",
        rating: 5
      }
    ],
    tags: ["Quantum Security", "Encryption", "Cybersecurity", "Government", "Compliance"],
    isFeatured: true,
    isPopular: true
  },
  {
    id: "autonomous-cloud-optimization",
    name: "Autonomous Cloud Optimization Engine",
    description: "AI-driven cloud infrastructure management that automatically optimizes costs, performance, and security while reducing manual intervention by 90%.",
    category: "Cloud Infrastructure",
    price: {
      monthly: 199,
      yearly: 1999,
      currency: "USD"
    },
    features: [
      "Automatic cost optimization",
      "Performance monitoring",
      "Security vulnerability detection",
      "Resource scaling automation",
      "Cost forecasting",
      "Multi-cloud management",
      "Compliance monitoring",
      "Backup optimization",
      "Disaster recovery automation",
      "Real-time alerts and notifications"
    ],
    benefits: [
      "Reduce cloud costs by 30-40%",
      "Improve performance by 25%",
      "Eliminate security vulnerabilities",
      "Automate routine tasks",
      "Ensure compliance",
      "Optimize resource utilization"
    ],
    useCases: [
      "Multi-cloud environments",
      "DevOps automation",
      "Cost optimization",
      "Security compliance",
      "Performance monitoring"
    ],
    targetAudience: [
      "Cloud architects",
      "DevOps engineers",
      "IT managers",
      "Startups",
      "Enterprises"
    ],
    technology: [
      "Machine Learning",
      "Container Orchestration",
      "Infrastructure as Code",
      "Monitoring and Alerting",
      "Automation Tools"
    ],
    integrations: [
      "AWS",
      "Azure",
      "Google Cloud",
      "Kubernetes",
      "Docker",
      "Terraform",
      "Ansible",
      "Prometheus"
    ],
    support: [
      "24/7 monitoring",
      "Expert cloud engineers",
      "Implementation support",
      "Training programs",
      "Best practices guidance"
    ],
    deployment: [
      "SaaS platform",
      "API integration",
      "Custom deployment",
      "Hybrid solutions"
    ],
    scalability: "Manages infrastructure from startups to Fortune 500 companies",
    security: [
      "SOC 2 compliance",
      "Data encryption",
      "Access controls",
      "Audit logging",
      "Security monitoring"
    ],
    compliance: [
      "SOC 2",
      "ISO 27001",
      "GDPR",
      "HIPAA",
      "PCI DSS"
    ],
    roi: "Average cost savings of $50,000+ annually",
    implementationTime: "1-2 weeks",
    contactInfo: {
      email: "cloud@ziontechgroup.com",
      phone: "+1-555-0125",
      website: "https://ziontechgroup.com/cloud-optimization"
    },
    demoUrl: "https://demo.ziontechgroup.com/cloud-optimization",
    documentationUrl: "https://docs.ziontechgroup.com/cloud-optimization",
    caseStudies: [
      "Startup reduced cloud costs by 45%",
      "Enterprise improved performance by 30%",
      "E-commerce site reduced downtime by 99%"
    ],
    testimonials: [
      {
        name: "David Rodriguez",
        company: "CloudTech Solutions",
        role: "DevOps Lead",
        content: "The autonomous optimization has saved us countless hours and significant costs.",
        rating: 5
      }
    ],
    tags: ["Cloud", "AI", "Automation", "Cost Optimization", "DevOps"],
    isFeatured: true,
    isNew: true
  },
  {
    id: "blockchain-supply-chain",
    name: "Blockchain Supply Chain Transparency Platform",
    description: "End-to-end supply chain visibility using blockchain technology to ensure product authenticity, ethical sourcing, and compliance with sustainability standards.",
    category: "Blockchain & Supply Chain",
    price: {
      monthly: 399,
      yearly: 3999,
      currency: "USD"
    },
    features: [
      "Product traceability",
      "Smart contracts",
      "Supplier verification",
      "Quality assurance",
      "Sustainability tracking",
      "Compliance reporting",
      "Real-time monitoring",
      "Data analytics",
      "Mobile app access",
      "API integration"
    ],
    benefits: [
      "Complete supply chain visibility",
      "Prevent counterfeit products",
      "Ensure ethical sourcing",
      "Improve compliance",
      "Build consumer trust",
      "Reduce fraud and waste"
    ],
    useCases: [
      "Food safety tracking",
      "Luxury goods authentication",
      "Pharmaceutical verification",
      "Sustainable sourcing",
      "Regulatory compliance"
    ],
    targetAudience: [
      "Manufacturers",
      "Retailers",
      "Logistics companies",
      "Regulatory bodies",
      "Consumers"
    ],
    technology: [
      "Blockchain",
      "IoT sensors",
      "QR codes",
      "Mobile apps",
      "Cloud computing"
    ],
    integrations: [
      "ERP systems",
      "WMS platforms",
      "E-commerce platforms",
      "Logistics providers",
      "Payment gateways"
    ],
    support: [
      "Implementation consulting",
      "Technical support",
      "Training programs",
      "Compliance guidance",
      "Ongoing maintenance"
    ],
    deployment: [
      "Cloud-based platform",
      "On-premises option",
      "Hybrid deployment",
      "Custom solutions"
    ],
    scalability: "Handles global supply chains with millions of products",
    security: [
      "Blockchain immutability",
      "Encrypted data",
      "Access controls",
      "Audit trails",
      "Regular security updates"
    ],
    compliance: [
      "FDA regulations",
      "EU regulations",
      "ISO standards",
      "Industry-specific compliance",
      "Sustainability standards"
    ],
    roi: "Reduced fraud losses and improved efficiency worth 200-300% ROI",
    implementationTime: "6-12 weeks",
    contactInfo: {
      email: "blockchain@ziontechgroup.com",
      phone: "+1-555-0126",
      website: "https://ziontechgroup.com/blockchain-supply-chain"
    },
    demoUrl: "https://demo.ziontechgroup.com/blockchain-supply-chain",
    documentationUrl: "https://docs.ziontechgroup.com/blockchain-supply-chain",
    caseStudies: [
      "Food company improved traceability by 100%",
      "Luxury brand eliminated counterfeits",
      "Pharma company ensured compliance"
    ],
    testimonials: [
      {
        name: "Lisa Wang",
        company: "Global Foods Inc",
        role: "Supply Chain Director",
        content: "The blockchain platform has revolutionized our supply chain transparency and consumer trust.",
        rating: 5
      }
    ],
    tags: ["Blockchain", "Supply Chain", "Transparency", "Sustainability", "Compliance"],
    isFeatured: true,
    isPopular: true
  },
  {
    id: "ai-content-generation",
    name: "AI Content Generation Studio",
    description: "Advanced AI-powered content creation platform that generates high-quality, SEO-optimized content for blogs, social media, marketing materials, and business communications.",
    category: "AI & Content",
    price: {
      monthly: 149,
      yearly: 1499,
      currency: "USD"
    },
    features: [
      "AI content generation",
      "SEO optimization",
      "Plagiarism detection",
      "Content templates",
      "Multi-language support",
      "Brand voice customization",
      "Content scheduling",
      "Performance analytics",
      "Collaboration tools",
      "API access"
    ],
    benefits: [
      "Save 80% of content creation time",
      "Improve SEO rankings",
      "Maintain consistent brand voice",
      "Scale content production",
      "Reduce content costs",
      "Increase engagement rates"
    ],
    useCases: [
      "Blog content creation",
      "Social media posts",
      "Marketing copy",
      "Product descriptions",
      "Email campaigns"
    ],
    targetAudience: [
      "Marketing teams",
      "Content creators",
      "Small businesses",
      "E-commerce companies",
      "Agencies"
    ],
    technology: [
      "Natural Language Processing",
      "Machine Learning",
      "GPT models",
      "SEO algorithms",
      "Content optimization"
    ],
    integrations: [
      "WordPress",
      "Shopify",
      "Mailchimp",
      "Hootsuite",
      "Google Analytics",
      "Social media platforms"
    ],
    support: [
      "Content strategy consulting",
      "Technical support",
      "Training programs",
      "Best practices guide",
      "Content optimization tips"
    ],
    deployment: [
      "Web-based platform",
      "Mobile app",
      "API integration",
      "Browser extension"
    ],
    scalability: "Generates unlimited content for businesses of any size",
    security: [
      "Data encryption",
      "User authentication",
      "Content privacy",
      "Regular backups",
      "GDPR compliance"
    ],
    compliance: [
      "GDPR",
      "CCPA",
      "Content guidelines",
      "Copyright compliance",
      "Accessibility standards"
    ],
    roi: "Average time savings worth $10,000+ monthly for content teams",
    implementationTime: "1-2 days",
    contactInfo: {
      email: "content@ziontechgroup.com",
      phone: "+1-555-0127",
      website: "https://ziontechgroup.com/ai-content"
    },
    demoUrl: "https://demo.ziontechgroup.com/ai-content",
    documentationUrl: "https://docs.ziontechgroup.com/ai-content",
    caseStudies: [
      "Marketing agency increased content output by 300%",
      "E-commerce site improved SEO by 45%",
      "Startup saved $50K in content costs"
    ],
    testimonials: [
      {
        name: "Alex Thompson",
        company: "Digital Marketing Pro",
        role: "Content Director",
        content: "This AI platform has transformed our content strategy and dramatically improved our SEO performance.",
        rating: 5
      }
    ],
    tags: ["AI", "Content Creation", "SEO", "Marketing", "Automation"],
    isFeatured: true,
    isNew: true
  }
];

export const getServiceByCategory = (category: string) => {
  return ENHANCED_MICRO_SAAS_SERVICES.filter(service => 
    service.category.toLowerCase() === category.toLowerCase()
  );
};

export const getFeaturedServices = () => {
  return ENHANCED_MICRO_SAAS_SERVICES.filter(service => service.isFeatured);
};

export const getNewServices = () => {
  return ENHANCED_MICRO_SAAS_SERVICES.filter(service => service.isNew);
};

export const getPopularServices = () => {
  return ENHANCED_MICRO_SAAS_SERVICES.filter(service => service.isPopular);
};

export const getServiceById = (id: string) => {
  return ENHANCED_MICRO_SAAS_SERVICES.find(service => service.id === id);
};

export const searchServices = (query: string) => {
  const searchTerm = query.toLowerCase();
  return ENHANCED_MICRO_SAAS_SERVICES.filter(service =>
    service.name.toLowerCase().includes(searchTerm) ||
    service.description.toLowerCase().includes(searchTerm) ||
    service.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
    service.category.toLowerCase().includes(searchTerm)
  );
};