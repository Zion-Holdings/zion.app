export interface NewOperationalService2025 {
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

export const newOperationalServices2025: NewOperationalService2025[] = [
  {
    id: "smart-operations-center",
    name: "Smart Operations Center",
    tagline: "AI-powered operations management",
    price: "$119/month",
    description: "Intelligent operations center that uses AI to optimize business processes and workflows.",
    features: [
      "AI process optimization",
      "Real-time monitoring",
      "Predictive analytics",
      "Automated workflows",
      "Performance insights"
    ],
    link: "/services/smart-operations-center",
    category: "New Operational Services 2025",
    realImplementation: true,
    contactInfo: {
      mobile: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  }
];