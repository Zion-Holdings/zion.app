export interface Ultimate2026Service {
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

export const ultimate2026Services: Ultimate2026Service[] = [
  {
    id: "2026-ultimate-service",
    name: "2026 Ultimate Service Platform",
    tagline: "The ultimate platform for 2026",
    price: "$699/month",
    description: "The ultimate service platform for 2026, combining all cutting-edge technologies and capabilities.",
    features: [
      "Ultimate platform",
      "All technologies",
      "Maximum capabilities",
      "Premium features",
      "24/7 support"
    ],
    link: "/services/2026-ultimate-service",
    category: "Ultimate 2026 Services",
    realImplementation: true,
    contactInfo: {
      mobile: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  }
];