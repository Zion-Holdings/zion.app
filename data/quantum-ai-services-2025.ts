export interface QuantumAiService2025 {
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

export const quantumAIServices2025: QuantumAiService2025[] = [
  {
    id: "quantum-ai-hybrid",
    name: "Quantum AI Hybrid Platform",
    tagline: "Combining quantum computing with artificial intelligence",
    price: "$299/month",
    description: "Revolutionary platform that combines quantum computing capabilities with advanced AI algorithms.",
    features: [
      "Quantum AI algorithms",
      "Hybrid processing",
      "Advanced simulations",
      "Real-time optimization",
      "Enterprise support"
    ],
    link: "/services/quantum-ai-hybrid",
    category: "Quantum AI",
    realImplementation: true,
    contactInfo: {
      mobile: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  }
];