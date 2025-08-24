export interface CuttingEdgeInnovation2027 {
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

export const cuttingEdge2027Innovations: CuttingEdgeInnovation2027[] = [
  {
    id: "2027-cutting-edge-innovation",
    name: "2027 Cutting-Edge Innovation Platform",
    tagline: "Cutting-edge innovations for 2027",
    price: "$799/month",
    description: "Advanced platform showcasing cutting-edge innovations and breakthrough technologies for 2027.",
    features: [
      "Cutting-edge innovations",
      "Breakthrough technologies",
      "Future capabilities",
      "Innovation platform",
      "Expert insights"
    ],
    link: "/services/2027-cutting-edge-innovation",
    category: "Cutting-Edge Innovations 2027",
    realImplementation: true,
    contactInfo: {
      mobile: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  }
];