export interface Revolutionary2026Innovation {
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

export const revolutionary2026Innovations: Revolutionary2026Innovation[] = [
  {
    id: "2026-revolutionary-innovation",
    name: "2026 Revolutionary Innovation Platform",
    tagline: "Breakthrough innovations for 2026",
    price: "$399/month",
    description: "Platform showcasing revolutionary innovations and breakthrough technologies for 2026.",
    features: [
      "Revolutionary innovations",
      "Breakthrough technologies",
      "Future capabilities",
      "Innovation platform",
      "Expert insights"
    ],
    link: "/services/2026-revolutionary-innovation",
    category: "Revolutionary 2026 Innovations",
    realImplementation: true,
    contactInfo: {
      mobile: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  }
];