export interface EmergingTech2026ServiceV2 {
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

export const emergingTech2026ServicesV2: EmergingTech2026ServiceV2[] = [
  {
    id: "2026-emerging-tech-v2",
    name: "2026 Emerging Tech Platform V2",
    tagline: "Enhanced emerging technologies",
    price: "$349/month",
    description: "Enhanced version of the 2026 emerging tech platform with additional capabilities and features.",
    features: [
      "Enhanced emerging tech",
      "Advanced capabilities",
      "Improved platform",
      "Better features",
      "Enhanced support"
    ],
    link: "/services/2026-emerging-tech-v2",
    category: "Emerging Tech 2026 V2",
    realImplementation: true,
    contactInfo: {
      mobile: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  }
];