export interface InnovativeMicroSaasV3 {
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

export const innovativeMicroSaasServicesV3: InnovativeMicroSaasV3[] = [
  {
    id: "ai-customer-support",
    name: "AI Customer Support Platform",
    tagline: "24/7 intelligent customer support automation",
    price: "$59/month",
    description: "Advanced AI-powered customer support platform that provides instant responses and escalates complex issues.",
    features: [
      "AI chatbot integration",
      "Multi-language support",
      "Ticket management",
      "Analytics dashboard",
      "CRM integration"
    ],
    link: "/services/ai-customer-support",
    category: "Customer Support",
    realImplementation: true,
    contactInfo: {
      mobile: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  }
];