import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Link as LinkIcon, 
  DollarSign as Coins, 
  Shield, 
  Zap, 
  Database,
  Globe,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Lock,
  Network,
  Wallet,
  BarChart3
} from "lucide-react";
import { TrustedBySection } from "@/components/TrustedBySection";

const blockchainServices = [
  {
    id: "smart-contracts",
    title: "Smart Contract Development",
    description: "Custom smart contract development for DeFi, NFTs, and enterprise blockchain solutions with comprehensive auditing.",
    price: 3500,
    currency: "$",
    period: "/project",
    features: [
      "Custom smart contract development",
      "Security auditing & testing",
      "Gas optimization",
      "Multi-chain deployment",
      "Documentation & training",
      "Ongoing support"
    ],
    icon: <Zap className="h-8 w-8" />,
    category: "Development",
    badge: "Popular",
    link: "/services",
    image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&w=800&h=500"
  },
  {
    id: "defi-platform",
    title: "DeFi Platform Development",
    description: "Complete DeFi platform development including DEX, lending protocols, yield farming, and liquidity management.",
    price: 15000,
    currency: "$",
    period: "/platform",
    features: [
      "DEX development",
      "Lending protocols",
      "Yield farming",
      "Liquidity management",
      "Security audits",
      "UI/UX design"
    ],
    icon: <Coins className="h-8 w-8" />,
    category: "DeFi",
    badge: "Enterprise",
    link: "/services",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&h=500"
  },
  {
    id: "nft-marketplace",
    title: "NFT Marketplace Development",
    description: "Custom NFT marketplace with minting, trading, auctions, and royalty distribution systems.",
    price: 8000,
    currency: "$",
    period: "/marketplace",
    features: [
      "NFT minting & trading",
      "Auction system",
      "Royalty distribution",
      "Multi-chain support",
      "Admin dashboard",
      "Analytics & reporting"
    ],
    icon: <Database className="h-8 w-8" />,
    category: "NFTs",
    badge: "Featured",
    link: "/services",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&h=500"
  },
  {
    id: "enterprise-blockchain",
    title: "Enterprise Blockchain Solutions",
    description: "Private blockchain networks for enterprise use cases including supply chain, identity management, and asset tracking.",
    price: 25000,
    currency: "$",
    period: "/solution",
    features: [
      "Private blockchain setup",
      "Consensus mechanisms",
      "Identity management",
      "Supply chain tracking",
      "Integration APIs",
      "Training & support"
    ],
    icon: <Network className="h-8 w-8" />,
    category: "Enterprise",
    badge: "Custom",
    link: "/services",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&h=500"
  },
  {
    id: "blockchain-security",
    title: "Blockchain Security & Auditing",
    description: "Comprehensive security audits, penetration testing, and vulnerability assessment for blockchain applications.",
    price: 5000,
    currency: "$",
    period: "/audit",
    features: [
      "Smart contract auditing",
      "Penetration testing",
      "Vulnerability assessment",
      "Security best practices",
      "Compliance checking",
      "Remediation guidance"
    ],
    icon: <Shield className="h-8 w-8" />,
    category: "Security",
    badge: "Critical",
    link: "/services",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&h=500"
  },
  {
    id: "blockchain-consulting",
    title: "Blockchain Strategy Consulting",
    description: "Strategic consulting for blockchain adoption, tokenomics design, and regulatory compliance guidance.",
    price: 3000,
    currency: "$",
    period: "/day",
    features: [
      "Blockchain strategy",
      "Tokenomics design",
      "Regulatory compliance",
      "Technology selection",
      "Implementation roadmap",
      "Risk assessment"
    ],
    icon: <BarChart3 className="h-8 w-8" />,
    category: "Consulting",
    badge: "Expert",
    link: "/services",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&h=500"
  }
];

const blockchainBenefits = [
  {
    title: "Transparency",
    description: "Immutable, transparent records that build trust and enable verifiable transactions",
    icon: <Globe className="h-6 w-6" />
  },
  {
    title: "Security",
    description: "Cryptographic security and decentralized architecture protect against fraud and attacks",
    icon: <Lock className="h-6 w-6" />
  },
  {
    title: "Efficiency",
    description: "Automated smart contracts reduce intermediaries and streamline complex processes",
    icon: <Zap className="h-6 w-6" />
  },
  {
    title: "Innovation",
    description: "Enable new business models and revenue streams through tokenization and DeFi",
    icon: <TrendingUp className="h-6 w-6" />
  }
];

const useCases = [
  {
    title: "Supply Chain Management",
    description: "Track products from origin to consumer with immutable records and real-time visibility",
    icon: <LinkIcon className="h-6 w-6" />
  },
  {
    title: "Digital Identity",
    description: "Self-sovereign identity solutions for secure, privacy-preserving authentication",
    icon: <Shield className="h-6 w-6" />
  },
  {
    title: "Asset Tokenization",
    description: "Convert real-world assets into digital tokens for fractional ownership and trading",
    icon: <Coins className="h-6 w-6" />
  },
  {
    title: "Decentralized Finance",
    description: "Build financial services without intermediaries using smart contracts and DeFi protocols",
    icon: <Wallet className="h-6 w-6" />
  }
];

export default function BlockchainServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-zion-blue via-zion-purple to-zion-blue-dark py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Blockchain Solutions for the
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple-light">
                Digital Economy
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge blockchain technology. From DeFi platforms to enterprise solutions, 
              we deliver secure, scalable, and innovative blockchain applications.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/request-quote">
                <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-8 py-3">
                  Start Your Project
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
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Blockchain?</h2>
            <p className="text-zion-slate-light text-lg">
              Leverage the power of decentralized technology to create trust, transparency, and efficiency
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {blockchainBenefits.map((benefit, index) => (
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

      {/* Use Cases Section */}
      <section className="py-16 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Blockchain Use Cases</h2>
            <p className="text-zion-slate-light text-lg">
              Discover how blockchain technology can transform your industry
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="text-center p-6 border border-zion-blue-light rounded-lg">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-zion-purple rounded-full mb-4">
                  <div className="text-white">
                    {useCase.icon}
                  </div>
                </div>
                <h3 className="text-white text-xl font-semibold mb-2">{useCase.title}</h3>
                <p className="text-zion-slate-light">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blockchain Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Blockchain Service Portfolio</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Choose from our comprehensive range of blockchain solutions designed to address your specific business needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blockchainServices.map((service) => (
              <Card key={service.id} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary" className="bg-zion-purple/20 text-zion-purple">
                      {service.category}
                    </Badge>
                    {service.badge && (
                      <Badge variant="outline" className="border-zion-cyan text-zion-cyan">
                        {service.badge}
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-zion-blue/10 rounded-lg">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-4">
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-zion-purple">
                      {service.currency}{service.price}
                    </span>
                    <span className="text-muted-foreground">{service.period}</span>
                  </div>
                  <ul className="space-y-2">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardContent className="pt-0">
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
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-zion-blue">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Build the Future with Blockchain?
            </h2>
            <p className="text-zion-slate-light text-lg mb-8">
              Join the blockchain revolution and transform your business with decentralized technology
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/request-quote">
                <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-8 py-3">
                  Get Blockchain Quote
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 px-8 py-3">
                  Contact Blockchain Experts
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