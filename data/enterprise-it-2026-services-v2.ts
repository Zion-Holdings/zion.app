export interface EnterpriseIt2026ServiceV2 {
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

export const enterpriseIT2026ServicesV2: EnterpriseIt2026ServiceV2[] = [
  {
    id: "2026-enterprise-it-v2",
    name: "2026 Enterprise IT Solutions V2",
    tagline: "Enhanced enterprise IT solutions",
    price: "$449/month",
    description: "Enhanced version of the 2026 enterprise IT solutions with additional features and capabilities.",
    features: [
      "Enhanced enterprise IT",
      "Advanced solutions",
      "Improved infrastructure",
      "Better security",
      "Enhanced support"
    ],
    link: "/services/2026-enterprise-it-v2",
    category: "Enterprise IT 2026 V2",
    realImplementation: true,
    contactInfo: {
      mobile: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  }
];