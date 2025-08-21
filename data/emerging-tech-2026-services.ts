export interface EmergingTech2026Service {
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

export const emergingTech2026Services: EmergingTech2026Service[] = [
  {
    id: "2026-emerging-tech",
    name: "2026 Emerging Tech Platform",
    tagline: "Cutting-edge emerging technologies",
    price: "$299/month",
    description: "Platform showcasing the latest emerging technologies for 2026 and beyond.",
    features: [
      "Emerging tech showcase",
      "Innovation platform",
      "Future technology",
      "Research database",
      "Expert insights"
    ],
    link: "/services/2026-emerging-tech",
    category: "Emerging Tech 2026",
    realImplementation: true,
    contactInfo: {
      mobile: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  }
];