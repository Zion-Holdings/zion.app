export interface EmergingTechService2029 {
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

export const emergingTechServices2029: EmergingTechService2029[] = [
  {
    id: "2029-emerging-tech-service",
    name: "2029 Emerging Tech Service Platform",
    tagline: "Emerging tech services for 2029",
    price: "$399/month",
    description: "Advanced platform showcasing emerging technology services and innovations for 2029.",
    features: [
      "Emerging tech services",
      "Innovation platform",
      "Future capabilities",
      "Advanced features",
      "Expert insights"
    ],
    link: "/services/2029-emerging-tech-service",
    category: "Emerging Tech Services 2029",
    realImplementation: true,
    contactInfo: {
      mobile: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  }
];