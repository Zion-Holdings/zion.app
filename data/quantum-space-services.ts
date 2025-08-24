export interface QuantumSpaceService {
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

export const quantumSpaceServices: QuantumSpaceService[] = [
  {
    id: "quantum-computing-platform",
    name: "Quantum Computing Platform",
    tagline: "Next-generation quantum computing solutions",
    price: "$199/month",
    description: "Advanced quantum computing platform for complex calculations and simulations.",
    features: [
      "Quantum algorithms",
      "Simulation tools",
      "API access",
      "Documentation",
      "Support services"
    ],
    link: "/services/quantum-computing-platform",
    category: "Quantum Computing",
    realImplementation: true,
    contactInfo: {
      mobile: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  }
];