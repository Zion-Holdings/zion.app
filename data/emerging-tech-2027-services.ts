export interface EmergingTech2027Service {
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

export const emergingTech2027Services: EmergingTech2027Service[] = [
  {
    id: "2027-emerging-tech",
    name: "2027 Emerging Tech Platform",
    tagline: "Emerging tech for 2027",
    price: "$349/month",
    description: "Advanced platform showcasing emerging technologies and innovations for 2027.",
    features: [
      "Emerging technologies",
      "Innovation platform",
      "Future capabilities",
      "Advanced features",
      "Expert insights"
    ],
    link: "/services/2027-emerging-tech",
    category: "Emerging Tech 2027",
    realImplementation: true,
    contactInfo: {
      mobile: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  }
];