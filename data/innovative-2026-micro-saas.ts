export interface Innovative2026MicroSaas {
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

export const innovative2026MicroSaasServices: Innovative2026MicroSaas[] = [
  {
    id: "2026-micro-saas",
    name: "2026 Micro SAAS Platform",
    tagline: "Next-generation micro SAAS solutions",
    price: "$89/month",
    description: "Innovative micro SAAS platform designed for 2026 with advanced features and capabilities.",
    features: [
      "Micro SAAS solutions",
      "Advanced features",
      "Scalable platform",
      "Integration capabilities",
      "Future-ready architecture"
    ],
    link: "/services/2026-micro-saas",
    category: "Innovative 2026 Micro SAAS",
    realImplementation: true,
    contactInfo: {
      mobile: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  }
];