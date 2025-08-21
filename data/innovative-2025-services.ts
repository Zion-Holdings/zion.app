export interface Innovative2025Service {
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

export const innovative2025Services: Innovative2025Service[] = [
  {
    id: "ai-innovation-hub",
    name: "AI Innovation Hub",
    tagline: "Center for AI innovation and development",
    price: "$159/month",
    description: "Comprehensive AI innovation platform that provides tools and resources for AI development.",
    features: [
      "AI development tools",
      "Innovation resources",
      "Collaboration platform",
      "Research database",
      "Expert support"
    ],
    link: "/services/ai-innovation-hub",
    category: "Innovative 2025 Services",
    realImplementation: true,
    contactInfo: {
      mobile: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  }
];