export interface InnovativeAiService {
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

export const innovativeAIServices: InnovativeAiService[] = [
  {
    id: "ai-predictive-analytics",
    name: "AI Predictive Analytics",
    tagline: "Future-proof your business with predictive insights",
    price: "$89/month",
    description: "Advanced predictive analytics platform that uses machine learning to forecast trends and business outcomes.",
    features: [
      "Machine learning models",
      "Real-time predictions",
      "Custom algorithms",
      "Data visualization",
      "API integration"
    ],
    link: "/services/ai-predictive-analytics",
    category: "AI & Analytics",
    realImplementation: true,
    contactInfo: {
      mobile: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  }
];