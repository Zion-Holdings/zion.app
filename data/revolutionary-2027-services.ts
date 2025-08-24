export interface Revolutionary2027Service {
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

export const revolutionary2027Services: Revolutionary2027Service[] = [
  {
    id: "2027-revolutionary-service",
    name: "2027 Revolutionary Service Platform",
    tagline: "Revolutionary services for 2027",
    price: "$299/month",
    description: "Revolutionary service platform that transforms how businesses operate in 2027.",
    features: [
      "Revolutionary services",
      "Transformative capabilities",
      "Advanced technology",
      "Innovation platform",
      "Future-ready solutions"
    ],
    link: "/services/2027-revolutionary-service",
    category: "Revolutionary 2027 Services",
    realImplementation: true,
    contactInfo: {
      mobile: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  }
];