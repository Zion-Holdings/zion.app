export interface RealMarketService {
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

export const realMarketServices: RealMarketService[] = [
  {
    id: "market-analysis-platform",
    name: "Market Analysis Platform",
    tagline: "Comprehensive market research and analysis",
    price: "$69/month",
    description: "Advanced market analysis platform providing insights and trends for business decision making.",
    features: [
      "Market research tools",
      "Trend analysis",
      "Competitor tracking",
      "Data visualization",
      "Report generation"
    ],
    link: "/services/market-analysis-platform",
    category: "Market Services",
    realImplementation: true,
    contactInfo: {
      mobile: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  }
];