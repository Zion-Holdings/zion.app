export interface Revolutionary2027ItService {
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

export const revolutionary2027ITServices: Revolutionary2027ItService[] = [
  {
    id: "2027-revolutionary-it",
    name: "2027 Revolutionary IT Platform",
    tagline: "Revolutionary IT for 2027",
    price: "$349/month",
    description: "Revolutionary IT platform that transforms how businesses manage technology in 2027.",
    features: [
      "Revolutionary IT",
      "Transformative technology",
      "Advanced capabilities",
      "Innovation platform",
      "Future-ready solutions"
    ],
    link: "/services/2027-revolutionary-it",
    category: "Revolutionary 2027 IT",
    realImplementation: true,
    contactInfo: {
      mobile: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  }
];