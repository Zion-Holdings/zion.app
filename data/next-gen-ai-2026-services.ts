export interface NextGenAi2026Service {
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

export const nextGenAI2026Services: NextGenAi2026Service[] = [
  {
    id: "2026-next-gen-ai",
    name: "2026 Next-Gen AI Platform",
    tagline: "Next-generation AI for 2026",
    price: "$299/month",
    description: "Advanced next-generation AI platform designed specifically for 2026 with cutting-edge capabilities.",
    features: [
      "Next-gen AI capabilities",
      "Advanced algorithms",
      "Future-ready features",
      "Innovation platform",
      "Expert support"
    ],
    link: "/services/2026-next-gen-ai",
    category: "Next-Gen AI 2026",
    realImplementation: true,
    contactInfo: {
      mobile: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  }
];