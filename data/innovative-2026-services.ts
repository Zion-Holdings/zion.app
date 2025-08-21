export interface Innovative2026Service {
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

export const innovative2026Services: Innovative2026Service[] = [
  {
    id: "2026-ai-platform",
    name: "2026 AI Platform",
    tagline: "Future of AI technology",
    price: "$249/month",
    description: "Revolutionary AI platform designed for 2026 and beyond, featuring breakthrough technologies.",
    features: [
      "2026 AI capabilities",
      "Breakthrough features",
      "Future technology",
      "Advanced algorithms",
      "Innovation platform"
    ],
    link: "/services/2026-ai-platform",
    category: "Innovative 2026 Services",
    realImplementation: true,
    contactInfo: {
      mobile: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  }
];