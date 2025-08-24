export interface PracticalMicroSaas2027 {
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

export const practicalMicroSaas2027: PracticalMicroSaas2027[] = [
  {
    id: "2027-practical-micro-saas",
    name: "2027 Practical Micro SAAS Platform",
    tagline: "Practical micro SAAS for 2027",
    price: "$129/month",
    description: "Practical micro SAAS platform designed for 2027 with real-world business applications.",
    features: [
      "Practical solutions",
      "Business applications",
      "Real-world use cases",
      "Easy integration",
      "Affordable pricing"
    ],
    link: "/services/2027-practical-micro-saas",
    category: "Practical Micro SAAS 2027",
    realImplementation: true,
    contactInfo: {
      mobile: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  }
];