export interface Revolutionary2026AiService {
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

export const revolutionary2026AIServices: Revolutionary2026AiService[] = [
  {
    id: "2026-revolutionary-ai",
    name: "2026 Revolutionary AI Platform",
    tagline: "Revolutionary AI for 2026",
    price: "$249/month",
    description: "Revolutionary AI platform that transforms how businesses use artificial intelligence in 2026.",
    features: [
      "Revolutionary AI",
      "Transformative capabilities",
      "Advanced algorithms",
      "Innovation platform",
      "Future-ready AI"
    ],
    link: "/services/2026-revolutionary-ai",
    category: "Revolutionary 2026 AI",
    realImplementation: true,
    contactInfo: {
      mobile: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  }
];