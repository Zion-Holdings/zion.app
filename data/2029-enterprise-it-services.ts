export interface EnterpriseItService2029 {
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

export const enterpriseITServices2029: EnterpriseItService2029[] = [
  {
    id: "2029-enterprise-it",
    name: "2029 Enterprise IT Service Platform",
    tagline: "Enterprise IT services for 2029",
    price: "$599/month",
    description: "Advanced enterprise IT service platform designed for large organizations in 2029.",
    features: [
      "Enterprise IT services",
      "Scalable solutions",
      "Advanced security",
      "24/7 support",
      "Custom integration"
    ],
    link: "/services/2029-enterprise-it",
    category: "Enterprise IT Services 2029",
    realImplementation: true,
    contactInfo: {
      mobile: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  }
];