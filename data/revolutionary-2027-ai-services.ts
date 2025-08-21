export interface Revolutionary2027AiService {
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

export const revolutionary2027AIServices: Revolutionary2027AiService[] = [
  {
    id: "2027-revolutionary-ai",
    name: "2027 Revolutionary AI Platform",
    tagline: "Revolutionary AI for 2027",
    price: "$399/month",
    description: "Revolutionary AI platform that transforms how businesses use artificial intelligence in 2027.",
    features: [
      "Revolutionary AI",
      "Transformative capabilities",
      "Advanced algorithms",
      "Innovation platform",
      "Future-ready AI"
    ],
    link: "/services/2027-revolutionary-ai",
    category: "Revolutionary 2027 AI",
    realImplementation: true,
    contactInfo: {
      mobile: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  }
];