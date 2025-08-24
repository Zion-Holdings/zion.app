export interface FuturisticInnovation2028 {
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

export const futuristic2028Services: FuturisticInnovation2028[] = [
  {
    id: "2028-futuristic-innovation",
    name: "2028 Futuristic Innovation Platform",
    tagline: "Futuristic innovations for 2028",
    price: "$399/month",
    description: "Futuristic innovation platform that showcases breakthrough technologies for 2028.",
    features: [
      "Futuristic innovations",
      "Breakthrough technologies",
      "Future capabilities",
      "Innovation platform",
      "Expert insights"
    ],
    link: "/services/2028-futuristic-innovation",
    category: "Futuristic Innovations 2028",
    realImplementation: true,
    contactInfo: {
      mobile: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  }
];