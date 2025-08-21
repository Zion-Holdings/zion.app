export interface EmergingTech2026ServiceV3 {
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

export const emergingTech2026ServicesV3: EmergingTech2026ServiceV3[] = [
  {
    id: "2026-emerging-tech-v3",
    name: "2026 Emerging Tech Platform V3",
    tagline: "Third generation emerging tech",
    price: "$399/month",
    description: "Third generation of the 2026 emerging tech platform with enhanced capabilities and features.",
    features: [
      "Third generation tech",
      "Enhanced capabilities",
      "Advanced features",
      "Improved platform",
      "Better performance"
    ],
    link: "/services/2026-emerging-tech-v3",
    category: "Emerging Tech 2026 V3",
    realImplementation: true,
    contactInfo: {
      mobile: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  }
];