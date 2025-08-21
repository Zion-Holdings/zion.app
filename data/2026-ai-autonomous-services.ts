export interface AiAutonomousService2026 {
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

export const aiAutonomousServices2026: AiAutonomousService2026[] = [
  {
    id: "2026-ai-autonomous",
    name: "2026 AI Autonomous Platform",
    tagline: "Fully autonomous AI systems",
    price: "$499/month",
    description: "Revolutionary AI autonomous platform that operates independently with minimal human intervention.",
    features: [
      "Autonomous operation",
      "Self-learning capabilities",
      "Independent decision making",
      "Advanced AI algorithms",
      "24/7 operation"
    ],
    link: "/services/2026-ai-autonomous",
    category: "AI Autonomous 2026",
    realImplementation: true,
    contactInfo: {
      mobile: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  }
];