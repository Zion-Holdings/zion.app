export interface SpecializedITService {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  price: number;
  currency: string;
  pricingModel: string;
  features: string[];
  benefits: string[];
  useCases: string[];
  targetAudience: string[];
  tags: string[];
  estimatedDelivery: string;
  supportLevel: string;
  marketPrice: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
  technology: string[];
  integrations: string[];
  compliance: string[];
  roi: string;
  competitors: string[];
  freeTrial: boolean;
  freeTrialDays: number;
  demoUrl: string;
  industryFocus: string[];
}

export const SPECIALIZED_IT_SERVICES: SpecializedITService[] = [
  // FinTech Solutions
  {
    id: "fintech-compliance-platform",
    title: "FinTech Compliance & Risk Management Platform",
    description: "Comprehensive compliance platform for financial institutions with real-time monitoring, automated reporting, and regulatory compliance management.",
    category: "FinTech & Banking",
    subcategory: "Compliance & Risk",
    price: 899,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Real-time compliance monitoring",
      "Automated regulatory reporting",
      "Risk assessment algorithms",
      "AML/KYC automation",
      "Transaction monitoring",
      "Regulatory change management",
      "Audit trail management",
      "Multi-jurisdiction compliance"
    ],
    benefits: [
      "Reduce compliance costs by 40%",
      "Automate 90% of regulatory reporting",
      "Real-time risk detection",
      "Ensure regulatory compliance",
      "Reduce audit preparation time"
    ],
    useCases: [
      "Banking compliance",
      "Payment processing",
      "Cryptocurrency exchanges",
      "Insurance companies",
      "Investment firms"
    ],
    targetAudience: [
      "Banks and credit unions",
      "FinTech startups",
      "Payment processors",
      "Insurance companies",
      "Investment firms"
    ],
    tags: ["FinTech", "Compliance", "Risk Management", "AML/KYC", "Regulatory Reporting"],
    estimatedDelivery: "4-6 weeks",
    supportLevel: "enterprise",
    marketPrice: "$899 - $5,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technology: ["AI/ML", "Blockchain", "Cloud Computing", "Real-time Processing", "Big Data"],
    integrations: ["Core Banking Systems", "Payment Gateways", "Regulatory APIs", "Risk Management Tools"],
    compliance: ["PCI DSS", "SOC 2", "ISO 27001", "GDPR", "Financial Regulations"],
    roi: "450% within 8 months",
    competitors: ["ComplyAdvantage", "Refinitiv", "LexisNexis", "Thomson Reuters"],
    freeTrial: true,
    freeTrialDays: 14,
    demoUrl: "https://demo.ziontechgroup.com/fintech-compliance",
    industryFocus: ["Banking", "FinTech", "Insurance", "Investment"]
  },

  // Healthcare IT Solutions
  {
    id: "healthcare-ai-platform",
    title: "Healthcare AI & Telemedicine Platform",
    description: "Advanced healthcare platform with AI-powered diagnostics, telemedicine capabilities, and patient management systems for modern healthcare providers.",
    category: "Healthcare IT",
    subcategory: "AI & Telemedicine",
    price: 699,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI-powered diagnostics",
      "Telemedicine consultations",
      "Patient management system",
      "Electronic health records",
      "Medical imaging analysis",
      "Prescription management",
      "Appointment scheduling",
      "Health analytics dashboard"
    ],
    benefits: [
      "Improve diagnostic accuracy by 30%",
      "Reduce patient wait times by 60%",
      "Streamline healthcare operations",
      "Enhance patient care quality",
      "Reduce administrative overhead"
    ],
    useCases: [
      "Primary care practices",
      "Specialist consultations",
      "Remote patient monitoring",
      "Medical imaging analysis",
      "Healthcare analytics"
    ],
    targetAudience: [
      "Hospitals and clinics",
      "Private practices",
      "Telemedicine providers",
      "Medical imaging centers",
      "Healthcare networks"
    ],
    tags: ["Healthcare", "AI", "Telemedicine", "EHR", "Medical Imaging", "Patient Care"],
    estimatedDelivery: "5-7 weeks",
    supportLevel: "enterprise",
    marketPrice: "$699 - $3,500/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technology: ["AI/ML", "Computer Vision", "Natural Language Processing", "Cloud Computing", "IoT"],
    integrations: ["EHR Systems", "Medical Devices", "Insurance Systems", "Pharmacy Systems"],
    compliance: ["HIPAA", "HITECH", "FDA", "SOC 2", "ISO 27001"],
    roi: "400% within 10 months",
    competitors: ["Epic", "Cerner", "Teladoc", "Amwell"],
    freeTrial: true,
    freeTrialDays: 21,
    demoUrl: "https://demo.ziontechgroup.com/healthcare-ai",
    industryFocus: ["Healthcare", "Medical", "Pharmaceutical", "Telemedicine"]
  },

  // Manufacturing & Industry 4.0
  {
    id: "industry-4-0-platform",
    title: "Industry 4.0 & Smart Manufacturing Platform",
    description: "Comprehensive Industry 4.0 platform integrating IoT, AI, and automation for smart manufacturing, predictive maintenance, and supply chain optimization.",
    category: "Manufacturing & Industry 4.0",
    subcategory: "Smart Manufacturing",
    price: 799,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "IoT device integration",
      "Predictive maintenance",
      "Quality control automation",
      "Supply chain optimization",
      "Energy management",
      "Production analytics",
      "Digital twin integration",
      "Real-time monitoring"
    ],
    benefits: [
      "Reduce downtime by 40%",
      "Improve quality by 30%",
      "Reduce energy costs by 25%",
      "Optimize production efficiency",
      "Real-time decision making"
    ],
    useCases: [
      "Smart manufacturing",
      "Predictive maintenance",
      "Quality control",
      "Supply chain management",
      "Energy optimization"
    ],
    targetAudience: [
      "Manufacturing companies",
      "Industrial facilities",
      "Automotive industry",
      "Chemical plants",
      "Food processing"
    ],
    tags: ["Industry 4.0", "IoT", "Smart Manufacturing", "Predictive Maintenance", "Automation"],
    estimatedDelivery: "6-8 weeks",
    supportLevel: "enterprise",
    marketPrice: "$799 - $4,500/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technology: ["IoT", "AI/ML", "Edge Computing", "Cloud Computing", "Digital Twin"],
    integrations: ["ERP Systems", "MES Systems", "SCADA Systems", "PLM Software"],
    compliance: ["ISO 27001", "IEC 62443", "Industry-specific standards"],
    roi: "500% within 12 months",
    competitors: ["Siemens", "GE Digital", "PTC", "Rockwell Automation"],
    freeTrial: true,
    freeTrialDays: 30,
    demoUrl: "https://demo.ziontechgroup.com/industry-4-0",
    industryFocus: ["Manufacturing", "Industrial", "Automotive", "Chemical"]
  },

  // Retail & E-commerce Solutions
  {
    id: "retail-omnichannel-platform",
    title: "Retail Omnichannel & AI Commerce Platform",
    description: "Advanced omnichannel retail platform with AI-powered personalization, inventory management, and seamless customer experience across all channels.",
    category: "Retail & E-commerce",
    subcategory: "Omnichannel Commerce",
    price: 599,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Omnichannel inventory management",
      "AI-powered personalization",
      "Customer journey tracking",
      "Unified commerce platform",
      "Predictive analytics",
      "Mobile commerce",
      "Social commerce integration",
      "Loyalty program management"
    ],
    benefits: [
      "Increase sales by 25-40%",
      "Improve customer retention by 30%",
      "Reduce inventory costs by 20%",
      "Unified customer experience",
      "Data-driven decision making"
    ],
    useCases: [
      "Brick-and-mortar retail",
      "E-commerce platforms",
      "Mobile commerce",
      "Social commerce",
      "Loyalty programs"
    ],
    targetAudience: [
      "Retail chains",
      "E-commerce businesses",
      "Fashion brands",
      "Consumer goods",
      "Department stores"
    ],
    tags: ["Retail", "E-commerce", "Omnichannel", "AI", "Personalization", "Mobile Commerce"],
    estimatedDelivery: "4-6 weeks",
    supportLevel: "premium",
    marketPrice: "$599 - $2,800/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technology: ["AI/ML", "Cloud Computing", "Mobile Development", "API Integration", "Big Data"],
    integrations: ["POS Systems", "E-commerce Platforms", "Payment Gateways", "Social Media"],
    compliance: ["PCI DSS", "GDPR", "CCPA", "SOC 2"],
    roi: "400% within 8 months",
    competitors: ["Shopify Plus", "Salesforce Commerce", "Adobe Commerce", "BigCommerce"],
    freeTrial: true,
    freeTrialDays: 21,
    demoUrl: "https://demo.ziontechgroup.com/retail-omnichannel",
    industryFocus: ["Retail", "E-commerce", "Fashion", "Consumer Goods"]
  },

  // Logistics & Supply Chain
  {
    id: "logistics-ai-platform",
    title: "AI-Powered Logistics & Supply Chain Platform",
    description: "Intelligent logistics platform with route optimization, demand forecasting, and real-time tracking for efficient supply chain management.",
    category: "Logistics & Supply Chain",
    subcategory: "AI Optimization",
    price: 649,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Route optimization",
      "Demand forecasting",
      "Real-time tracking",
      "Warehouse management",
      "Fleet management",
      "Cost optimization",
      "Sustainability tracking",
      "Risk management"
    ],
    benefits: [
      "Reduce logistics costs by 25-35%",
      "Improve delivery times by 30%",
      "Optimize warehouse operations",
      "Reduce carbon footprint",
      "Real-time visibility"
    ],
    useCases: [
      "E-commerce logistics",
      "Manufacturing supply chains",
      "Retail distribution",
      "Cold chain logistics",
      "International shipping"
    ],
    targetAudience: [
      "Logistics companies",
      "E-commerce businesses",
      "Manufacturing companies",
      "Retail chains",
      "3PL providers"
    ],
    tags: ["Logistics", "Supply Chain", "AI", "Route Optimization", "Fleet Management", "Warehouse"],
    estimatedDelivery: "5-7 weeks",
    supportLevel: "premium",
    marketPrice: "$649 - $3,200/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technology: ["AI/ML", "IoT", "GPS", "Cloud Computing", "Big Data Analytics"],
    integrations: ["ERP Systems", "WMS Systems", "TMS Systems", "Carrier APIs"],
    compliance: ["ISO 28000", "C-TPAT", "GDPR", "Industry-specific regulations"],
    roi: "450% within 10 months",
    competitors: ["Flexport", "Convoy", "Project44", "FourKites"],
    freeTrial: true,
    freeTrialDays: 21,
    demoUrl: "https://demo.ziontechgroup.com/logistics-ai",
    industryFocus: ["Logistics", "Supply Chain", "E-commerce", "Manufacturing"]
  },

  // Education Technology
  {
    id: "edtech-ai-platform",
    title: "AI-Powered Education Technology Platform",
    description: "Comprehensive EdTech platform with personalized learning, adaptive assessments, and virtual classroom capabilities for modern education.",
    category: "Education Technology",
    subcategory: "AI Learning",
    price: 449,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Personalized learning paths",
      "Adaptive assessments",
      "Virtual classrooms",
      "Content management",
      "Student analytics",
      "Parent communication",
      "Mobile learning",
      "Gamification"
    ],
    benefits: [
      "Improve learning outcomes by 35%",
      "Reduce administrative workload by 40%",
      "Personalized student experience",
      "Real-time progress tracking",
      "Engaging learning environment"
    ],
    useCases: [
      "K-12 education",
      "Higher education",
      "Corporate training",
      "Online learning",
      "Special education"
    ],
    targetAudience: [
      "Schools and districts",
      "Universities",
      "Training companies",
      "EdTech startups",
      "Corporate trainers"
    ],
    tags: ["EdTech", "AI", "Personalized Learning", "Virtual Classrooms", "Adaptive Learning"],
    estimatedDelivery: "4-6 weeks",
    supportLevel: "premium",
    marketPrice: "$449 - $2,200/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technology: ["AI/ML", "Natural Language Processing", "Cloud Computing", "Mobile Development", "WebRTC"],
    integrations: ["LMS Systems", "Student Information Systems", "Content Providers", "Assessment Tools"],
    compliance: ["FERPA", "COPPA", "GDPR", "Accessibility Standards"],
    roi: "350% within 8 months",
    competitors: ["Canvas", "Blackboard", "Moodle", "Coursera"],
    freeTrial: true,
    freeTrialDays: 30,
    demoUrl: "https://demo.ziontechgroup.com/edtech-ai",
    industryFocus: ["Education", "Training", "EdTech", "Corporate Learning"]
  },

  // Real Estate Technology
  {
    id: "proptech-platform",
    title: "Proptech & Real Estate Management Platform",
    description: "Advanced real estate platform with AI-powered property valuation, virtual tours, and comprehensive property management solutions.",
    category: "Real Estate Technology",
    subcategory: "Property Management",
    price: 549,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI property valuation",
      "Virtual property tours",
      "Property management",
      "Tenant screening",
      "Maintenance tracking",
      "Financial reporting",
      "Market analytics",
      "Mobile app access"
    ],
    benefits: [
      "Increase property value by 15-25%",
      "Reduce vacancy rates by 30%",
      "Streamline property management",
      "Improve tenant satisfaction",
      "Data-driven decisions"
    ],
    useCases: [
      "Property management",
      "Real estate investment",
      "Commercial real estate",
      "Residential rentals",
      "Property development"
    ],
    targetAudience: [
      "Property managers",
      "Real estate investors",
      "Real estate agencies",
      "Property developers",
      "Landlords"
    ],
    tags: ["Proptech", "Real Estate", "AI", "Virtual Tours", "Property Management", "Valuation"],
    estimatedDelivery: "4-6 weeks",
    supportLevel: "premium",
    marketPrice: "$549 - $2,600/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technology: ["AI/ML", "Computer Vision", "3D Modeling", "Cloud Computing", "Mobile Development"],
    integrations: ["MLS Systems", "Property Management Software", "Payment Processors", "Insurance APIs"],
    compliance: ["Fair Housing Laws", "Real Estate Regulations", "GDPR", "SOC 2"],
    roi: "400% within 10 months",
    competitors: ["Buildium", "AppFolio", "Yardi", "RealPage"],
    freeTrial: true,
    freeTrialDays: 21,
    demoUrl: "https://demo.ziontechgroup.com/proptech",
    industryFocus: ["Real Estate", "Property Management", "Construction", "Development"]
  }
];

export const SPECIALIZED_SERVICE_CATEGORIES = [
  {
    id: 'enterprise-infrastructure',
    name: 'Enterprise Infrastructure',
    icon: '🏢',
    count: 2,
    description: 'Modern enterprise infrastructure solutions for large organizations'
  },
  {
    id: 'digital-transformation',
    name: 'Digital Transformation',
    icon: '🔄',
    count: 2,
    description: 'End-to-end digital transformation services'
  },
  {
    id: 'industry-solutions',
    name: 'Industry Solutions',
    icon: '🏭',
    count: 2,
    description: 'Specialized solutions for specific industries'
  },
  {
    id: 'advanced-analytics',
    name: 'Advanced Analytics',
    icon: '📊',
    count: 1,
    description: 'Advanced analytics and business intelligence solutions'
  },
  {
    id: 'integration-services',
    name: 'Integration Services',
    icon: '🔗',
    count: 1,
    description: 'Enterprise integration and system connectivity services'
  },
  {
    id: 'managed-services',
    name: 'Managed Services',
    icon: '⚙️',
    count: 1,
    description: 'Comprehensive managed IT services'
  }
];

export const CONTACT_INFO = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008, Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};