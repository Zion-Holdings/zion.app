export interface ExtraService {
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

export const extraServices: ExtraService[] = [
  {
    id: "cloud-migration-expert",
    name: "Cloud Migration Expert",
    tagline: "Seamless cloud migration and optimization",
    price: "$99/hour",
    description: "Professional cloud migration services for businesses looking to modernize their infrastructure.",
    features: [
      "AWS/Azure/GCP migration",
      "Performance optimization",
      "Cost analysis",
      "Security implementation",
      "24/7 support"
    ],
    link: "/services/cloud-migration-expert",
    category: "Cloud Services",
    realImplementation: true,
    contactInfo: {
      mobile: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  },
  {
    id: "cybersecurity-audit",
    name: "Cybersecurity Audit Pro",
    tagline: "Comprehensive security assessment and protection",
    price: "$199/hour",
    description: "Complete cybersecurity audit and vulnerability assessment for enterprise-level protection.",
    features: [
      "Vulnerability assessment",
      "Penetration testing",
      "Security policy review",
      "Compliance audit",
      "Remediation guidance"
    ],
    link: "/services/cybersecurity-audit",
    category: "Security",
    realImplementation: true,
    contactInfo: {
      mobile: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  }
];