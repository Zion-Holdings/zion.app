export interface ComprehensiveItSolution {
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

export const comprehensiveITSolutions: ComprehensiveItSolution[] = [
  {
    id: "full-stack-development",
    name: "Full-Stack Development Services",
    tagline: "End-to-end web application development",
    price: "$80/hour",
    description: "Complete full-stack development services from frontend to backend and database design.",
    features: [
      "Frontend development",
      "Backend APIs",
      "Database design",
      "DevOps integration",
      "Testing & deployment"
    ],
    link: "/services/full-stack-development",
    category: "IT Solutions",
    realImplementation: true,
    contactInfo: {
      mobile: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  }
];