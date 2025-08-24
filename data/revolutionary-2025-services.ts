export interface Revolutionary2025Service {
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

export const revolutionary2025Services: Revolutionary2025Service[] = [
  {
    id: "revolutionary-ai-platform",
    name: "Revolutionary AI Platform",
    tagline: "Next-generation AI capabilities",
    price: "$199/month",
    description: "Revolutionary AI platform that pushes the boundaries of what's possible with artificial intelligence.",
    features: [
      "Advanced AI models",
      "Revolutionary algorithms",
      "Breakthrough capabilities",
      "Future-ready architecture",
      "Cutting-edge features"
    ],
    link: "/services/revolutionary-ai-platform",
    category: "Revolutionary 2025 Services",
    realImplementation: true,
    contactInfo: {
      mobile: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  }
];