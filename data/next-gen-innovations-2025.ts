export interface NextGenInnovation2025 {
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

export const nextGenInnovations2025: NextGenInnovation2025[] = [
  {
    id: "next-gen-ai-suite",
    name: "Next-Gen AI Suite",
    tagline: "Future-ready AI solutions",
    price: "$179/month",
    description: "Next-generation AI suite that provides cutting-edge artificial intelligence capabilities.",
    features: [
      "Next-gen AI models",
      "Advanced capabilities",
      "Future-ready features",
      "Innovation platform",
      "Expert support"
    ],
    link: "/services/next-gen-ai-suite",
    category: "Next-Gen Innovations 2025",
    realImplementation: true,
    contactInfo: {
      mobile: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  }
];