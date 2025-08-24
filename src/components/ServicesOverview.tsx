import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Zap, 
  Shield, 
  Cloud, 
  Database, 
  Code, 
  ShoppingCart, 
  BarChart3, 
  Link as LinkIcon,
  Network,
  Monitor,
  Smartphone,
  CheckCircle,
  Star,
  Clock,
  Users,
  Globe
} from "lucide-react";

// Service categories with detailed information
const serviceCategories = [
  {
    title: "AI Services",
    description: "Cutting-edge artificial intelligence solutions that transform business operations",
    icon: <Zap className="w-8 h-8 text-zion-cyan" />,
    services: [
      {
        name: "AI Chatbot Builder Pro",
        price: "$299",
        features: ["No-code platform", "Multi-language support", "Analytics dashboard", "Platform integration"],
        benefits: ["24/7 customer support", "Reduced response time", "Scalable automation", "Cost-effective solution"]
      },
      {
        name: "AI Content Generator Suite",
        price: "$199",
        features: ["SEO optimization", "Tone adjustment", "Plagiarism detection", "100+ content pieces/month"],
        benefits: ["Faster content creation", "Improved SEO rankings", "Consistent brand voice", "Time savings"]
      },
      {
        name: "AI Image Generator Pro",
        price: "$399",
        features: ["Custom style training", "4K resolution", "Commercial licensing", "Design tool integration"],
        benefits: ["Unique visual content", "Brand consistency", "Cost-effective design", "Rapid prototyping"]
      }
    ],
    marketPrice: "$150-500",
    deliveryTime: "Immediate",
    link: "/micro-saas-services"
  },
  {
    title: "Business Solutions",
    description: "Data-driven insights and analytics to drive business growth and decision-making",
    icon: <BarChart3 className="w-8 h-8 text-zion-purple" />,
    services: [
      {
        name: "Business Intelligence Dashboard",
        price: "$599",
        features: ["Real-time analytics", "50+ data sources", "Custom dashboards", "Automated reporting"],
        benefits: ["Data-driven decisions", "Performance insights", "Operational efficiency", "Competitive advantage"]
      },
      {
        name: "Predictive Analytics Engine",
        price: "$799",
        features: ["Sales forecasting", "Customer behavior analysis", "Risk assessment", "ML models"],
        benefits: ["Future planning", "Customer insights", "Risk mitigation", "Revenue optimization"]
      }
    ],
    marketPrice: "$500-1500",
    deliveryTime: "1-3 weeks",
    link: "/micro-saas-services"
  },
  {
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets and ensure compliance",
    icon: <Shield className="w-8 h-8 text-zion-red" />,
    services: [
      {
        name: "24/7 Cybersecurity Monitoring",
        price: "$899",
        features: ["Threat detection", "SIEM integration", "Compliance reporting", "24/7 SOC support"],
        benefits: ["Continuous protection", "Compliance assurance", "Incident response", "Peace of mind"]
      },
      {
        name: "Penetration Testing Service",
        price: "$2,499",
        features: ["Web app testing", "Network security", "Mobile app testing", "Compliance documentation"],
        benefits: ["Vulnerability identification", "Security validation", "Compliance readiness", "Risk assessment"]
      }
    ],
    marketPrice: "$800-3000",
    deliveryTime: "Immediate - 2 weeks",
    link: "/micro-saas-services"
  },
  {
    title: "Cloud Services",
    description: "Scalable cloud solutions for modern business infrastructure and digital transformation",
    icon: <Cloud className="w-8 h-8 text-zion-blue" />,
    services: [
      {
        name: "Cloud Migration Expert",
        price: "$3,999",
        features: ["AWS/Azure/GCP", "Architecture design", "Data migration", "99.9% uptime guarantee"],
        benefits: ["Reduced costs", "Improved scalability", "Enhanced security", "Better performance"]
      },
      {
        name: "DevOps Automation Platform",
        price: "$699",
        features: ["CI/CD pipelines", "Kubernetes support", "Infrastructure as code", "Monitoring & alerting"],
        benefits: ["Faster deployments", "Reduced errors", "Team productivity", "Cost optimization"]
      }
    ],
    marketPrice: "$700-5000",
    deliveryTime: "1-4 weeks",
    link: "/micro-saas-services"
  },
  {
    title: "Data Services",
    description: "Enterprise-grade data solutions for analytics, warehousing, and business intelligence",
    icon: <Database className="w-8 h-8 text-zion-green" />,
    services: [
      {
        name: "Data Warehouse Solution",
        price: "$1,299",
        features: ["ETL pipelines", "Data modeling", "BI integration", "Data governance"],
        benefits: ["Centralized data", "Better insights", "Improved reporting", "Data quality"]
      },
      {
        name: "Database Performance Optimization",
        price: "$899",
        features: ["Query optimization", "Indexing strategies", "Performance monitoring", "Capacity planning"],
        benefits: ["Faster queries", "Better performance", "Reduced costs", "Improved user experience"]
      }
    ],
    marketPrice: "$900-2000",
    deliveryTime: "1-3 weeks",
    link: "/micro-saas-services"
  },
  {
    title: "Development",
    description: "Custom software development solutions for web, mobile, and enterprise applications",
    icon: <Code className="w-8 h-8 text-zion-orange" />,
    services: [
      {
        name: "Progressive Web App Development",
        price: "$2,999",
        features: ["Offline functionality", "Push notifications", "App-like experience", "SEO optimization"],
        benefits: ["Better user engagement", "Improved performance", "Cross-platform compatibility", "Enhanced SEO"]
      },
      {
        name: "Cross-Platform Mobile App",
        price: "$4,999",
        features: ["React Native/Flutter", "UI/UX design", "Backend integration", "App store deployment"],
        benefits: ["Cost-effective development", "Faster time to market", "Native performance", "Easy maintenance"]
      },
      {
        name: "Custom API Development",
        price: "$1,999",
        features: ["REST/GraphQL APIs", "Documentation", "Testing", "Developer portal"],
        benefits: ["System integration", "Scalable architecture", "Developer experience", "API monetization"]
      }
    ],
    marketPrice: "$2000-8000",
    deliveryTime: "3-8 weeks",
    link: "/micro-saas-services"
  },
  {
    title: "E-commerce",
    description: "Complete e-commerce solutions for online businesses and digital marketplaces",
    icon: <ShoppingCart className="w-8 h-8 text-zion-pink" />,
    services: [
      {
        name: "E-commerce Platform Development",
        price: "$5,999",
        features: ["Payment processing", "Inventory management", "Order fulfillment", "CRM integration"],
        benefits: ["Increased sales", "Better customer experience", "Operational efficiency", "Scalable growth"]
      }
    ],
    marketPrice: "$5000-15000",
    deliveryTime: "8-10 weeks",
    link: "/micro-saas-services"
  },
  {
    title: "Marketing",
    description: "AI-powered marketing automation and analytics solutions for business growth",
    icon: <BarChart3 className="w-8 h-8 text-zion-yellow" />,
    services: [
      {
        name: "Marketing Automation Platform",
        price: "$799",
        features: ["Email marketing", "Lead scoring", "Campaign management", "AI personalization"],
        benefits: ["Increased conversions", "Better lead quality", "Time savings", "ROI improvement"]
      }
    ],
    marketPrice: "$500-1500",
    deliveryTime: "2-3 weeks",
    link: "/micro-saas-services"
  },
  {
    title: "Integration",
    description: "Seamless third-party integrations and API synchronization services",
    icon: <LinkIcon className="w-8 h-8 text-zion-indigo" />,
    services: [
      {
        name: "Third-Party Integration Service",
        price: "$1,499",
        features: ["Payment gateways", "CRM systems", "Marketing tools", "Custom webhooks"],
        benefits: ["System connectivity", "Data consistency", "Workflow automation", "Reduced manual work"]
      }
    ],
    marketPrice: "$1000-3000",
    deliveryTime: "2-3 weeks",
    link: "/micro-saas-services"
  },
  {
    title: "Blockchain",
    description: "Next-generation blockchain and Web3 development solutions",
    icon: <Network className="w-8 h-8 text-zion-teal" />,
    services: [
      {
        name: "Smart Contract Development",
        price: "$3,999",
        features: ["Ethereum/Polygon/Solana", "Security auditing", "DeFi protocols", "NFT contracts"],
        benefits: ["Decentralized solutions", "Transparent transactions", "Automated execution", "Innovation leadership"]
      },
      {
        name: "Web3 DApp Development",
        price: "$5,999",
        features: ["Wallet integration", "Blockchain interaction", "Cross-chain compatibility", "User-friendly interfaces"],
        benefits: ["Future-proof technology", "User ownership", "Global accessibility", "Reduced intermediaries"]
      }
    ],
    marketPrice: "$4000-10000",
    deliveryTime: "4-8 weeks",
    link: "/micro-saas-services"
  },
  {
    title: "IoT",
    description: "Internet of Things platform development and hardware prototyping services",
    icon: <Monitor className="w-8 h-8 text-zion-lime" />,
    services: [
      {
        name: "IoT Platform Development",
        price: "$4,999",
        features: ["Device management", "Real-time monitoring", "Edge computing", "Cloud integration"],
        benefits: ["Connected devices", "Data insights", "Operational efficiency", "Innovation opportunities"]
      }
    ],
    marketPrice: "$4000-12000",
    deliveryTime: "8-10 weeks",
    link: "/micro-saas-services"
  },
  {
    title: "Hardware",
    description: "Rapid prototyping and hardware development services for IoT and embedded systems",
    icon: <Smartphone className="w-8 h-8 text-zion-gray" />,
    services: [
      {
        name: "Hardware Prototyping Service",
        price: "$2,999",
        features: ["3D printing", "PCB design", "Component sourcing", "Design validation"],
        benefits: ["Faster development", "Cost reduction", "Design validation", "Market testing"]
      }
    ],
    marketPrice: "$2000-8000",
    deliveryTime: "4-6 weeks",
    link: "/micro-saas-services"
  }
];

// Why choose Zion Tech Group
const whyChooseUs = [
  {
    title: "Expert Team",
    description: "Certified professionals with 10+ years of experience",
    icon: <Users className="w-6 h-6 text-zion-cyan" />
  },
  {
    title: "Global Reach",
    description: "Serving clients worldwide with 24/7 support",
    icon: <Globe className="w-6 h-6 text-zion-purple" />
  },
  {
    title: "Fast Delivery",
    description: "Quick turnaround times without compromising quality",
    icon: <Clock className="w-6 h-6 text-zion-green" />
  },
  {
    title: "Proven Results",
    description: "Track record of successful project deliveries",
    icon: <Star className="w-6 h-6 text-zion-yellow" />
  }
];

export function ServicesOverview() {
  return (
    <div className="py-20 bg-zion-blue-dark">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Comprehensive Technology Services
          </h2>
          <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
            Discover our complete range of professional services designed to accelerate your business growth and digital transformation
          </p>
        </div>

        {/* Service Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {serviceCategories.map((category, index) => (
            <div key={index} className="bg-zion-blue rounded-lg p-6 border border-zion-blue-light hover:border-zion-cyan/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-white text-xl font-bold">{category.title}</h3>
                  <p className="text-zion-slate-light text-sm">{category.description}</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                {category.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="bg-zion-blue-dark rounded p-4">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-white font-semibold">{service.name}</h4>
                      <span className="text-zion-cyan font-bold">{service.price}</span>
                    </div>
                    
                    <div className="mb-3">
                      <h5 className="text-zion-slate-light text-sm font-medium mb-2">Key Features:</h5>
                      <ul className="space-y-1">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-zion-slate-light text-sm">
                            <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="text-zion-slate-light text-sm font-medium mb-2">Benefits:</h5>
                      <ul className="space-y-1">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-zion-slate-light text-sm">
                            <Star className="w-4 h-4 text-zion-purple mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex items-center justify-between mb-4 text-sm">
                <div className="text-zion-slate-light">
                  <span className="font-medium">Market Price:</span> {category.marketPrice}
                </div>
                <div className="text-zion-slate-light">
                  <span className="font-medium">Delivery:</span> {category.deliveryTime}
                </div>
              </div>
              
              <Link to={category.link}>
                <Button className="w-full bg-zion-cyan hover:bg-zion-cyan-dark text-white">
                  View {category.title}
                </Button>
              </Link>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="bg-zion-blue rounded-lg p-8 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h3>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              We combine technical expertise with business acumen to deliver solutions that drive real results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {item.icon}
                </div>
                <h4 className="text-white text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-zion-slate-light">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Ready to Get Started?
          </h3>
          <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and discover how our services can transform your business
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/micro-saas-services">
              <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-8 py-4 text-lg">
                <Zap className="w-5 h-5 mr-2" />
                Explore All Services
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 px-8 py-4 text-lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}