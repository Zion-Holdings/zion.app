export interface IndustrySpecificSolution {
  id: string;
  title: string;
  description: string;
  industry: string;
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
  industryExpertise: number;
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
  industryPartners: string[];
  certifications: string[];
}

export const INDUSTRY_SPECIFIC_SOLUTIONS: IndustrySpecificSolution[] = [
  {
    id: "healthcare-ai-diagnostics",
    title: "Healthcare AI Diagnostics & Patient Care Platform",
    description: "Comprehensive AI-powered healthcare platform for medical diagnostics, patient monitoring, treatment planning, and healthcare workflow optimization.",
    industry: "Healthcare",
    category: "AI Diagnostics",
    subcategory: "Patient Care",
    price: 2800,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI-powered medical image analysis",
      "Patient data integration and analytics",
      "Predictive health risk assessment",
      "Treatment recommendation engine",
      "Clinical decision support system",
      "Remote patient monitoring",
      "Healthcare workflow automation",
      "Compliance and audit trails",
      "Integration with EHR systems",
      "Mobile app for healthcare providers"
    ],
    benefits: [
      "Improve diagnostic accuracy by 30%",
      "Reduce diagnostic time by 40%",
      "Enhance patient outcomes and safety",
      "Optimize healthcare workflows",
      "Reduce healthcare costs",
      "Enable early disease detection"
    ],
    useCases: [
      "Radiology and medical imaging",
      "Pathology and laboratory testing",
      "Primary care and diagnostics",
      "Specialty medicine",
      "Emergency medicine",
      "Preventive care"
    ],
    targetAudience: [
      "Hospitals and medical centers",
      "Radiology departments",
      "Pathology laboratories",
      "Primary care clinics",
      "Specialty medical practices",
      "Healthcare technology companies"
    ],
    tags: ["Healthcare", "AI Diagnostics", "Medical Imaging", "Patient Care", "Clinical Decision Support"],
    estimatedDelivery: "8-16 weeks",
    supportLevel: "enterprise",
    marketPrice: "$2,800 - $12,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    industryExpertise: 98,
    rating: 4.9,
    reviewCount: 234,
    featured: true,
    location: "Global",
    availability: "24/7",
    demoUrl: "https://ziontechgroup.com/demo/healthcare-ai",
    documentationUrl: "https://ziontechgroup.com/docs/healthcare-ai",
    technology: ["TensorFlow", "PyTorch", "OpenCV", "DICOM", "FHIR", "HL7", "HIPAA-compliant cloud"],
    integrations: ["Epic", "Cerner", "Allscripts", "Medical imaging systems", "Lab information systems", "PACS"],
    compliance: ["HIPAA", "FDA", "CE Mark", "ISO 13485", "SOC 2", "GDPR"],
    roi: "400% within 18 months",
    competitors: ["IBM Watson Health", "Google Health", "Microsoft Healthcare", "Philips", "Siemens Healthineers"],
    industryPartners: ["Mayo Clinic", "Johns Hopkins", "Stanford Medicine", "Cleveland Clinic", "Medical associations"],
    certifications: ["FDA 510(k)", "CE Mark", "ISO 13485", "HIPAA Business Associate", "SOC 2 Type II"]
  },
  {
    id: "manufacturing-industry-4-0",
    title: "Manufacturing Industry 4.0 & Smart Factory Platform",
    description: "Comprehensive Industry 4.0 platform for smart manufacturing including IoT integration, predictive maintenance, quality control, and supply chain optimization.",
    industry: "Manufacturing",
    category: "Industry 4.0",
    subcategory: "Smart Factory",
    price: 2200,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "IoT sensor integration and monitoring",
      "Predictive maintenance and analytics",
      "Quality control and defect detection",
      "Supply chain optimization",
      "Production planning and scheduling",
      "Real-time performance monitoring",
      "Energy efficiency optimization",
      "Worker safety and compliance",
      "Integration with ERP and MES systems",
      "Mobile app for operators"
    ],
    benefits: [
      "Increase production efficiency by 25%",
      "Reduce downtime by 40%",
      "Improve quality by 30%",
      "Reduce energy costs by 20%",
      "Optimize supply chain operations",
      "Enhance worker safety"
    ],
    useCases: [
      "Automotive manufacturing",
      "Electronics production",
      "Pharmaceutical manufacturing",
      "Food and beverage processing",
      "Chemical manufacturing",
      "Aerospace and defense"
    ],
    targetAudience: [
      "Manufacturing companies",
      "Industrial facilities",
      "Production plants",
      "Quality control departments",
      "Operations managers",
      "Supply chain managers"
    ],
    tags: ["Manufacturing", "Industry 4.0", "IoT", "Predictive Maintenance", "Quality Control", "Smart Factory"],
    estimatedDelivery: "12-24 weeks",
    supportLevel: "premium",
    marketPrice: "$2,200 - $8,500/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    industryExpertise: 96,
    rating: 4.8,
    reviewCount: 189,
    featured: true,
    location: "Global",
    availability: "24/7",
    demoUrl: "https://ziontechgroup.com/demo/manufacturing-4-0",
    documentationUrl: "https://ziontechgroup.com/docs/manufacturing-4-0",
    technology: ["IoT platforms", "Machine learning", "Computer vision", "PLC integration", "SCADA systems", "Cloud computing"],
    integrations: ["SAP", "Oracle", "Siemens", "Rockwell Automation", "Mitsubishi", "ABB", "IoT platforms"],
    compliance: ["ISO 9001", "ISO 14001", "OHSAS 18001", "Industry 4.0 standards", "Safety regulations"],
    roi: "350% within 20 months",
    competitors: ["Siemens", "GE Digital", "PTC", "Rockwell Automation", "ABB", "Bosch"],
    industryPartners: ["Manufacturing associations", "Industry 4.0 consortia", "Technology partners", "Research institutions"],
    certifications: ["ISO 9001", "ISO 14001", "OHSAS 18001", "Industry 4.0", "Safety certifications"]
  },
  {
    id: "financial-services-ai",
    title: "Financial Services AI & Risk Management Platform",
    description: "Advanced AI platform for financial services including fraud detection, risk assessment, portfolio optimization, and regulatory compliance automation.",
    industry: "Financial Services",
    category: "AI & Risk Management",
    subcategory: "Financial Technology",
    price: 3500,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI-powered fraud detection and prevention",
      "Real-time risk assessment and monitoring",
      "Portfolio optimization and management",
      "Regulatory compliance automation",
      "Anti-money laundering (AML) detection",
      "Credit risk modeling and scoring",
      "Market analysis and forecasting",
      "Customer behavior analytics",
      "Integration with trading systems",
      "Comprehensive reporting and analytics"
    ],
    benefits: [
      "Reduce fraud losses by 70%",
      "Improve risk assessment accuracy by 40%",
      "Ensure 100% regulatory compliance",
      "Optimize portfolio performance",
      "Reduce operational costs",
      "Enhance customer experience"
    ],
    useCases: [
      "Banking and retail finance",
      "Investment management",
      "Insurance and risk assessment",
      "Trading and capital markets",
      "Credit and lending",
      "Regulatory compliance"
    ],
    targetAudience: [
      "Banks and credit unions",
      "Investment firms",
      "Insurance companies",
      "Trading desks",
      "Risk managers",
      "Compliance officers"
    ],
    tags: ["Financial Services", "AI", "Risk Management", "Fraud Detection", "Compliance", "FinTech"],
    estimatedDelivery: "10-20 weeks",
    supportLevel: "enterprise",
    marketPrice: "$3,500 - $15,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    industryExpertise: 97,
    rating: 4.9,
    reviewCount: 156,
    featured: true,
    location: "Global",
    availability: "24/7",
    demoUrl: "https://ziontechgroup.com/demo/financial-ai",
    documentationUrl: "https://ziontechgroup.com/docs/financial-ai",
    technology: ["Machine learning", "Deep learning", "Natural language processing", "Big data analytics", "Cloud computing"],
    integrations: ["Bloomberg", "Reuters", "Trading platforms", "Core banking systems", "Risk management tools", "Compliance systems"],
    compliance: ["Basel III", "Solvency II", "Dodd-Frank", "SOX", "GDPR", "PCI DSS", "AML regulations"],
    roi: "450% within 24 months",
    competitors: ["Palantir", "SAS", "IBM", "Oracle", "SAP", "FICO"],
    industryPartners: ["Financial institutions", "Regulatory bodies", "Industry associations", "Technology partners"],
    certifications: ["SOC 2 Type II", "ISO 27001", "PCI DSS", "Financial industry certifications", "Regulatory compliance"]
  },
  {
    id: "retail-ecommerce-ai",
    title: "Retail & E-commerce AI Optimization Platform",
    description: "Comprehensive AI platform for retail and e-commerce including customer personalization, inventory optimization, demand forecasting, and marketing automation.",
    industry: "Retail & E-commerce",
    category: "AI Optimization",
    subcategory: "Customer Experience",
    price: 1500,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI-powered customer personalization",
      "Demand forecasting and inventory optimization",
      "Dynamic pricing and revenue optimization",
      "Customer behavior analytics",
      "Marketing automation and optimization",
      "Fraud detection and prevention",
      "Supply chain optimization",
      "Customer service automation",
      "Multi-channel integration",
      "Performance analytics and reporting"
    ],
    benefits: [
      "Increase conversion rates by 35%",
      "Improve customer lifetime value by 40%",
      "Reduce inventory costs by 25%",
      "Optimize marketing ROI",
      "Enhance customer satisfaction",
      "Reduce operational costs"
    ],
    useCases: [
      "Online retail and marketplaces",
      "Brick-and-mortar retail",
      "Omnichannel retail",
      "Subscription services",
      "Direct-to-consumer brands",
      "Retail analytics and insights"
    ],
    targetAudience: [
      "E-commerce companies",
      "Retail chains",
      "Online marketplaces",
      "Direct-to-consumer brands",
      "Retail technology companies",
      "Marketing agencies"
    ],
    tags: ["Retail", "E-commerce", "AI", "Personalization", "Inventory Optimization", "Marketing Automation"],
    estimatedDelivery: "6-12 weeks",
    supportLevel: "premium",
    marketPrice: "$1,500 - $6,500/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    industryExpertise: 94,
    rating: 4.8,
    reviewCount: 267,
    featured: false,
    location: "Global",
    availability: "24/7",
    demoUrl: "https://ziontechgroup.com/demo/retail-ai",
    documentationUrl: "https://ziontechgroup.com/docs/retail-ai",
    technology: ["Machine learning", "Recommendation engines", "Natural language processing", "Computer vision", "Big data analytics"],
    integrations: ["Shopify", "WooCommerce", "Magento", "Salesforce", "HubSpot", "Google Analytics", "Facebook Ads"],
    compliance: ["GDPR", "CCPA", "PCI DSS", "SOC 2", "Industry-specific regulations"],
    roi: "320% within 15 months",
    competitors: ["Segment", "Amplitude", "Mixpanel", "Optimizely", "Dynamic Yield", "Klevu"],
    industryPartners: ["E-commerce platforms", "Retail associations", "Technology partners", "Marketing platforms"],
    certifications: ["SOC 2 Type II", "ISO 27001", "PCI DSS", "Retail industry certifications"]
  },
  {
    id: "energy-utility-optimization",
    title: "Energy & Utility AI Optimization Platform",
    description: "Advanced AI platform for energy and utility companies including grid optimization, demand forecasting, renewable energy integration, and predictive maintenance.",
    industry: "Energy & Utilities",
    category: "AI Optimization",
    subcategory: "Grid Management",
    price: 2800,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Smart grid optimization and management",
      "Energy demand forecasting and load balancing",
      "Renewable energy integration and optimization",
      "Predictive maintenance for infrastructure",
      "Energy efficiency optimization",
      "Real-time monitoring and analytics",
      "Grid stability and reliability management",
      "Customer energy management",
      "Integration with SCADA systems",
      "Compliance and regulatory reporting"
    ],
    benefits: [
      "Improve grid efficiency by 20%",
      "Reduce energy losses by 15%",
      "Optimize renewable energy integration",
      "Reduce maintenance costs by 30%",
      "Enhance grid reliability and stability",
      "Improve customer satisfaction"
    ],
    useCases: [
      "Electric power generation and distribution",
      "Natural gas distribution",
      "Water and wastewater management",
      "Renewable energy integration",
      "Smart city infrastructure",
      "Industrial energy management"
    ],
    targetAudience: [
      "Electric utilities",
      "Natural gas companies",
      "Water utilities",
      "Renewable energy companies",
      "Grid operators",
      "Energy technology companies"
    ],
    tags: ["Energy", "Utilities", "Smart Grid", "Renewable Energy", "Predictive Maintenance", "Grid Optimization"],
    estimatedDelivery: "12-24 weeks",
    supportLevel: "enterprise",
    marketPrice: "$2,800 - $12,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    industryExpertise: 95,
    rating: 4.8,
    reviewCount: 134,
    featured: false,
    location: "Global",
    availability: "24/7",
    demoUrl: "https://ziontechgroup.com/demo/energy-utility",
    documentationUrl: "https://ziontechgroup.com/docs/energy-utility",
    technology: ["IoT platforms", "Machine learning", "Predictive analytics", "SCADA systems", "Cloud computing", "Edge computing"],
    integrations: ["SCADA systems", "Energy management systems", "Metering systems", "Renewable energy platforms", "Grid control systems"],
    compliance: ["NERC CIP", "ISO standards", "Grid codes", "Environmental regulations", "Safety standards"],
    roi: "380% within 24 months",
    competitors: ["Siemens", "GE Digital", "ABB", "Schneider Electric", "Honeywell", "Itron"],
    industryPartners: ["Utility associations", "Grid operators", "Technology partners", "Research institutions"],
    certifications: ["NERC CIP", "ISO 27001", "Grid security certifications", "Energy industry standards"]
  },
  {
    id: "transportation-logistics-ai",
    title: "Transportation & Logistics AI Platform",
    description: "Comprehensive AI platform for transportation and logistics including route optimization, fleet management, supply chain optimization, and predictive analytics.",
    industry: "Transportation & Logistics",
    category: "AI Platform",
    subcategory: "Logistics Optimization",
    price: 1800,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI-powered route optimization and planning",
      "Fleet management and vehicle tracking",
      "Supply chain optimization and forecasting",
      "Real-time traffic and weather integration",
      "Predictive maintenance for vehicles",
      "Warehouse automation and optimization",
      "Last-mile delivery optimization",
      "Customer delivery tracking and notifications",
      "Integration with logistics systems",
      "Performance analytics and reporting"
    ],
    benefits: [
      "Reduce transportation costs by 25%",
      "Improve delivery efficiency by 30%",
      "Optimize fleet utilization",
      "Reduce fuel consumption",
      "Enhance customer satisfaction",
      "Improve supply chain visibility"
    ],
    useCases: [
      "Trucking and freight transportation",
      "Last-mile delivery services",
      "Warehouse and distribution centers",
      "Supply chain management",
      "Fleet operations",
      "Logistics optimization"
    ],
    targetAudience: [
      "Transportation companies",
      "Logistics providers",
      "E-commerce companies",
      "Manufacturing companies",
      "Retail chains",
      "Supply chain managers"
    ],
    tags: ["Transportation", "Logistics", "Route Optimization", "Fleet Management", "Supply Chain", "AI"],
    estimatedDelivery: "8-16 weeks",
    supportLevel: "premium",
    marketPrice: "$1,800 - $7,500/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    industryExpertise: 93,
    rating: 4.7,
    reviewCount: 189,
    featured: false,
    location: "Global",
    availability: "24/7",
    demoUrl: "https://ziontechgroup.com/demo/transportation-logistics",
    documentationUrl: "https://ziontechgroup.com/docs/transportation-logistics",
    technology: ["Machine learning", "Optimization algorithms", "IoT platforms", "GPS tracking", "Cloud computing", "Mobile apps"],
    integrations: ["TMS systems", "WMS systems", "ERP systems", "GPS tracking", "Weather services", "Traffic data"],
    compliance: ["DOT regulations", "Safety standards", "Environmental regulations", "Industry-specific standards"],
    roi: "300% within 18 months",
    competitors: ["Manhattan Associates", "JDA Software", "Oracle Transportation", "SAP Transportation", "Trimble"],
    industryPartners: ["Transportation associations", "Logistics providers", "Technology partners", "Industry experts"],
    certifications: ["ISO 9001", "Safety certifications", "Transportation industry standards", "Environmental compliance"]
  }
];