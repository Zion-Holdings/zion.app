export interface PracticalBusinessSolution2028 {
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

export const practicalBusinessSolutions2028: PracticalBusinessSolution2028[] = [
  {
    id: "2028-practical-business-solution",
    name: "2028 Practical Business Solution Platform",
    tagline: "Practical business solutions for 2028",
    price: "$249/month",
    description: "Practical business solution platform that provides real-world solutions for 2028.",
    features: [
      "Practical solutions",
      "Business applications",
      "Real-world use cases",
      "Easy integration",
      "Affordable pricing"
    ],
    link: "/services/2028-practical-business-solution",
    category: "Practical Business Solutions 2028",
    realImplementation: true,
    contactInfo: {
      mobile: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  }
];