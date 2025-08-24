export interface ServiceExpansion2025 {
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

export const serviceExpansions2025: ServiceExpansion2025[] = [
  {
    id: "ai-workflow-automation",
    name: "AI Workflow Automation",
    tagline: "Intelligent process automation and optimization",
    price: "$89/month",
    description: "Advanced AI-powered workflow automation platform that streamlines business processes.",
    features: [
      "Process automation",
      "AI optimization",
      "Workflow analytics",
      "Integration capabilities",
      "Custom workflows"
    ],
    link: "/services/ai-workflow-automation",
    category: "Service Expansions 2025",
    realImplementation: true,
    contactInfo: {
      mobile: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  }
];