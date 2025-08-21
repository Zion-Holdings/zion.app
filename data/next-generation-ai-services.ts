export interface NextGenerationAiService {
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

export const nextGenerationAIServices: NextGenerationAiService[] = [
  {
    id: "ai-decision-engine",
    name: "AI Decision Engine",
    tagline: "Intelligent decision-making for complex scenarios",
    price: "$129/month",
    description: "Advanced AI decision engine that processes complex data to provide optimal business decisions.",
    features: [
      "Multi-criteria analysis",
      "Real-time processing",
      "Custom algorithms",
      "Decision tracking",
      "Performance metrics"
    ],
    link: "/services/ai-decision-engine",
    category: "Next-Gen AI",
    realImplementation: true,
    contactInfo: {
      mobile: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  }
];