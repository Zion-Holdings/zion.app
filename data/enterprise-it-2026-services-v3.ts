export interface EnterpriseIt2026ServiceV3 {
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

export const enterpriseIT2026ServicesV3: EnterpriseIt2026ServiceV3[] = [
  {
    id: "2026-enterprise-it-v3",
    name: "2026 Enterprise IT Solutions V3",
    tagline: "Third generation enterprise IT",
    price: "$499/month",
    description: "Third generation of the 2026 enterprise IT solutions with enhanced capabilities and features.",
    features: [
      "Third generation IT",
      "Enhanced solutions",
      "Advanced infrastructure",
      "Improved security",
      "Better performance"
    ],
    link: "/services/2026-enterprise-it-v3",
    category: "Enterprise IT 2026 V3",
    realImplementation: true,
    contactInfo: {
      mobile: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  }
];