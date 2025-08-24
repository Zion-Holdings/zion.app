export interface VerifiedRealService2025Batch2 {
  id: string;
  name: string;
  tagline: string;
  price: string;
  description: string;
  features: string[];
  link: string;
  category: string;
  realImplementation: boolean;
  contactInfo: {
    mobile: string;
    email: string;
    address: string;
  };
}

export const verifiedRealServices2025Batch2: VerifiedRealService2025Batch2[] = [
  {
    id: "ai-quality-assurance",
    name: "AI Quality Assurance Platform",
    tagline: "Automated testing and quality control",
    price: "$79/month",
    description: "AI-powered quality assurance platform that automates testing and ensures software quality.",
    features: [
      "Automated testing",
      "AI defect detection",
      "Performance monitoring",
      "Quality metrics",
      "Continuous integration"
    ],
    link: "/services/ai-quality-assurance",
    category: "Verified Services 2025",
    realImplementation: true,
    contactInfo: {
      mobile: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  }
];