export interface EnterpriseIt2026Service {
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

export const enterpriseIT2026Services: EnterpriseIt2026Service[] = [
  {
    id: "2026-enterprise-it",
    name: "2026 Enterprise IT Solutions",
    tagline: "Future-ready enterprise IT",
    price: "$399/month",
    description: "Comprehensive enterprise IT solutions designed for 2026 and beyond.",
    features: [
      "Enterprise architecture",
      "Future-ready solutions",
      "Scalable infrastructure",
      "Advanced security",
      "24/7 support"
    ],
    link: "/services/2026-enterprise-it",
    category: "Enterprise IT 2026",
    realImplementation: true,
    contactInfo: {
      mobile: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  }
];