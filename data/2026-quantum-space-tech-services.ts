export interface QuantumSpaceTechService2026 {
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

export const quantumSpaceTechServices2026: QuantumSpaceTechService2026[] = [
  {
    id: "2026-quantum-space-tech",
    name: "2026 Quantum Space Tech Platform",
    tagline: "Quantum computing meets space technology",
    price: "$599/month",
    description: "Revolutionary platform combining quantum computing with advanced space technology for 2026.",
    features: [
      "Quantum computing",
      "Space technology",
      "Advanced algorithms",
      "Innovation platform",
      "Expert support"
    ],
    link: "/services/2026-quantum-space-tech",
    category: "Quantum Space Tech 2026",
    realImplementation: true,
    contactInfo: {
      mobile: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  }
];