export interface EmergingTechService2025 {
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

export const emergingTechServices2025: EmergingTechService2025[] = [
  {
    id: "metaverse-platform",
    name: "Metaverse Development Platform",
    tagline: "Create immersive virtual experiences",
    price: "$249/month",
    description: "Advanced metaverse development platform for building virtual worlds and experiences.",
    features: [
      "3D world building",
      "Avatar customization",
      "Virtual commerce",
      "Social interactions",
      "Cross-platform support"
    ],
    link: "/services/metaverse-platform",
    category: "Emerging Tech 2025",
    realImplementation: true,
    contactInfo: {
      mobile: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  }
];