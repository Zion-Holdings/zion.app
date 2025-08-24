import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Brain, 
  Link as LinkIcon, 
  Settings as Wifi, 
  Shield, 
  Zap, 
  Globe,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Zap as Cpu,
  Cloud,
  Database,
  Users,
  BarChart3,
  PenTool,
  Eye,
  Lock,
  AlertTriangle,
  TrendingUp as Activity,
  Smartphone,
  Network,
  DollarSign as Coins,
  Wallet
} from "lucide-react";
import { TrustedBySection } from "@/components/TrustedBySection";

const serviceCategories = [
  {
    id: "ai-services",
    title: "AI & Machine Learning Services",
    description: "Transform your business with cutting-edge artificial intelligence solutions",
    icon: <Brain className="h-12 w-12" />,
    color: "from-blue-500 to-purple-600",
    services: [
      {
        title: "AI Content Generation",
        description: "Automated content creation for blogs, social media, and marketing materials",
        price: 299,
        period: "/month",
        features: ["Unlimited content", "Multi-language support", "SEO optimization", "Brand voice customization"],
        link: "/ai-services"
      },
      {
        title: "AI-Powered Customer Support Bot",
        description: "Intelligent chatbot with natural language processing for 24/7 support",
        price: 450,
        period: "/month",
        features: ["NLP capabilities", "Multi-channel integration", "Lead qualification", "Analytics dashboard"],
        link: "/ai-services"
      },
      {
        title: "AI-Powered Video Analytics",
        description: "Computer vision platform for surveillance and behavioral analysis",
        price: 1800,
        period: "/month",
        features: ["Real-time detection", "Facial recognition", "Behavioral analysis", "Custom training"],
        link: "/ai-services"
      },
      {
        title: "Predictive Analytics Dashboard",
        description: "Business intelligence with predictive modeling for forecasting",
        price: 800,
        period: "/month",
        features: ["Predictive modeling", "Real-time dashboards", "Custom algorithms", "Data visualization"],
        link: "/ai-services"
      }
    ]
  },
  {
    id: "blockchain-services",
    title: "Blockchain & Web3 Solutions",
    description: "Build the future with decentralized technology and smart contracts",
    icon: <LinkIcon className="h-12 w-12" />,
    color: "from-orange-500 to-red-600",
    services: [
      {
        title: "Smart Contract Development",
        description: "Custom smart contracts for DeFi, NFTs, and enterprise solutions",
        price: 3500,
        period: "/project",
        features: ["Custom development", "Security auditing", "Gas optimization", "Multi-chain deployment"],
        link: "/blockchain-services"
      },
      {
        title: "DeFi Platform Development",
        description: "Complete DeFi platform with DEX, lending, and yield farming",
        price: 15000,
        period: "/platform",
        features: ["DEX development", "Lending protocols", "Yield farming", "Security audits"],
        link: "/blockchain-services"
      },
      {
        title: "NFT Marketplace Development",
        description: "Custom NFT marketplace with minting, trading, and auctions",
        price: 8000,
        period: "/marketplace",
        features: ["NFT minting", "Auction system", "Royalty distribution", "Multi-chain support"],
        link: "/blockchain-services"
      },
      {
        title: "Enterprise Blockchain Solutions",
        description: "Private blockchain networks for supply chain and identity management",
        price: 25000,
        period: "/solution",
        features: ["Private blockchain", "Consensus mechanisms", "Identity management", "Integration APIs"],
        link: "/blockchain-services"
      }
    ]
  },
  {
    id: "iot-services",
    title: "IoT & Edge Computing",
    description: "Connect and optimize your world with intelligent IoT solutions",
    icon: <Wifi className="h-12 w-12" />,
    color: "from-green-500 to-teal-600",
    services: [
      {
        title: "IoT Device Management Platform",
        description: "Complete IoT solution with device provisioning and monitoring",
        price: 1200,
        period: "/month",
        features: ["Device provisioning", "Real-time monitoring", "Data collection", "Analytics dashboard"],
        link: "/iot-services"
      },
      {
        title: "IoT Data Analytics & Insights",
        description: "Advanced analytics for IoT data processing and predictive maintenance",
        price: 800,
        period: "/month",
        features: ["Real-time processing", "Machine learning", "Predictive maintenance", "Custom dashboards"],
        link: "/iot-services"
      },
      {
        title: "Edge Computing Platform",
        description: "Distributed edge computing for real-time data processing",
        price: 2000,
        period: "/month",
        features: ["Edge deployment", "Local processing", "Real-time analytics", "Edge AI models"],
        link: "/iot-services"
      },
      {
        title: "IoT System Integration",
        description: "Seamless integration with existing enterprise systems",
        price: 3000,
        period: "/project",
        features: ["System integration", "API development", "Data mapping", "Workflow automation"],
        link: "/iot-services"
      }
    ]
  },
  {
    id: "cybersecurity-services",
    title: "Cybersecurity & Compliance",
    description: "Protect your business with enterprise-grade security solutions",
    icon: <Shield className="h-12 w-12" />,
    color: "from-red-500 to-pink-600",
    services: [
      {
        title: "AI-Powered Threat Detection",
        description: "Advanced cybersecurity with machine learning threat detection",
        price: 1200,
        period: "/month",
        features: ["Real-time detection", "Behavioral analysis", "Automated response", "24/7 SOC support"],
        link: "/cybersecurity-services"
      },
      {
        title: "Zero-Trust Security Framework",
        description: "Zero-trust architecture with identity verification and monitoring",
        price: 4200,
        period: "/month",
        features: ["Identity verification", "Micro-segmentation", "Continuous monitoring", "Access control"],
        link: "/cybersecurity-services"
      },
      {
        title: "Penetration Testing & Assessment",
        description: "Comprehensive security testing and vulnerability assessment",
        price: 2500,
        period: "/assessment",
        features: ["External testing", "Internal assessment", "Web app testing", "Social engineering"],
        link: "/cybersecurity-services"
      },
      {
        title: "Incident Response & Forensics",
        description: "Rapid response to security incidents with digital forensics",
        price: 3500,
        period: "/incident",
        features: ["24/7 response", "Digital forensics", "Evidence preservation", "Recovery planning"],
        link: "/cybersecurity-services"
      }
    ]
  },
  {
    id: "traditional-it",
    title: "Traditional IT & Infrastructure",
    description: "Reliable IT services for modern business needs",
    icon: <Cpu className="h-12 w-12" />,
    color: "from-gray-500 to-blue-600",
    services: [
      {
        title: "Cloud Infrastructure Management",
        description: "24/7 monitoring and management of cloud infrastructure",
        price: 3000,
        period: "/month",
        features: ["24/7 monitoring", "Performance optimization", "Security management", "Cost efficiency"],
        link: "/services"
      },
      {
        title: "IT Infrastructure Modernization",
        description: "Transform legacy systems into modern, agile infrastructure",
        price: 8500,
        period: "/project",
        features: ["Digital transformation", "Legacy modernization", "Infrastructure upgrade", "Training & support"],
        link: "/services"
      },
      {
        title: "API Gateway & Management",
        description: "Enterprise-grade API management with rate limiting and monitoring",
        price: 650,
        period: "/month",
        features: ["API management", "Rate limiting", "Authentication", "Developer portal"],
        link: "/services"
      },
      {
        title: "Multi-Cloud Cost Optimization",
        description: "Automated cost optimization across AWS, Azure, and Google Cloud",
        price: 550,
        period: "/month",
        features: ["Cost optimization", "Resource scaling", "Automation", "Multi-cloud support"],
        link: "/services"
      }
    ]
  }
];

const benefits = [
  {
    title: "Innovation First",
    description: "Cutting-edge technology solutions that keep you ahead of the competition",
    icon: <Zap className="h-6 w-6" />
  },
  {
    title: "Expert Team",
    description: "Certified professionals with deep expertise in their respective domains",
    icon: <Users className="h-6 w-6" />
  },
  {
    title: "Scalable Solutions",
    description: "Services that grow with your business and adapt to changing needs",
    icon: <TrendingUp className="h-6 w-6" />
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock support and monitoring for critical services",
    icon: <Globe className="h-6 w-6" />
  }
];

export default function ServicesOverviewPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-zion-blue via-zion-purple to-zion-blue-dark py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Complete Technology
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple-light">
                Service Portfolio
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              From AI and blockchain to IoT and cybersecurity, we offer comprehensive technology solutions 
              that drive innovation and business growth. Choose from our extensive portfolio of services.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/request-quote">
                <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-8 py-3">
                  Get Custom Quote
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 px-8 py-3">
                  Schedule Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-zion-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-zion-slate-light text-lg">
              Comprehensive solutions backed by expertise and innovation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-zion-cyan rounded-full mb-4">
                  <div className="text-white">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-white text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-zion-slate-light">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Service Categories</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Explore our comprehensive range of technology services designed to meet your business needs
            </p>
          </div>
          
          {serviceCategories.map((category) => (
            <div key={category.id} className="mb-16">
              <div className="text-center mb-8">
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${category.color} rounded-full mb-4`}>
                  <div className="text-white">
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                <p className="text-muted-foreground">{category.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.services.map((service, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                      <CardDescription className="text-sm">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pb-4">
                      <div className="mb-4">
                        <span className="text-2xl font-bold text-zion-purple">
                          ${service.price}
                        </span>
                        <span className="text-muted-foreground text-sm">{service.period}</span>
                      </div>
                      <ul className="space-y-2 mb-4">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button asChild className="w-full">
                        <Link to={service.link}>
                          Learn More
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-zion-blue">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-zion-slate-light text-lg mb-8">
              Choose from our comprehensive portfolio of technology services and start your digital transformation journey
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/request-quote">
                <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-8 py-3">
                  Get Started Today
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 px-8 py-3">
                  Contact Our Experts
                </Button>
              </Link>
            </div>
            <div className="mt-8 text-zion-slate-light">
              <p>📞 <strong>Mobile:</strong> +1 302 464 0950</p>
              <p>📧 <strong>Email:</strong> kleber@ziontechgroup.com</p>
              <p>📍 <strong>Address:</strong> 364 E Main St STE 1008 Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>

      <TrustedBySection />
    </div>
  );
}