export interface Innovative2026AiServiceV3 {
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

export const innovative2026AIServicesV3: Innovative2026AiServiceV3[] = [
  {
    id: "2026-innovative-ai-v3",
    name: "2026 Innovative AI Platform V3",
    tagline: "Third generation innovative AI",
    price: "$349/month",
    description: "Third generation of the 2026 innovative AI platform with enhanced capabilities and features.",
    features: [
      "Third generation AI",
      "Enhanced capabilities",
      "Advanced features",
      "Improved performance",
      "Better integration"
    ],
    link: "/services/2026-innovative-ai-v3",
    category: "Innovative 2026 AI V3",
    realImplementation: true,
    contactInfo: {
      mobile: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  }
];