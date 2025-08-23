"use client";

import { useState } from "react";

interface Service {
  id: string;
  name: string;
  category: "AI Services" | "IT Services" | "Micro SAAS" | "Digital Economy";
  description: string;
  features: string[];
  pricing: string;
  startingPrice: number;
  contactLink: string;
  icon: string;
  popular?: boolean;
}

const services: Service[] = [
  // AI Services
  {
    id: "zion-gpt",
    name: "ZionGPT Core",
    category: "AI Services",
    description: "Enterprise-grade AI assistant with custom knowledge base integration, multi-language support, and advanced reasoning capabilities.",
    features: [
      "Custom knowledge base training",
      "Multi-language support (100+ languages)",
      "Advanced reasoning and problem-solving",
      "API integration and webhooks",
      "Real-time learning and adaptation",
      "Enterprise security and compliance"
    ],
    pricing: "Starting at $299/month",
    startingPrice: 299,
    contactLink: "mailto:kleber@ziontechgroup.com?subject=ZionGPT%20Core%20Inquiry",
    icon: "🤖"
  },
  {
    id: "resume-ai",
    name: "Resume Builder + Proposal AI",
    category: "AI Services",
    description: "AI-powered resume creation and business proposal generation with industry-specific templates and optimization.",
    features: [
      "AI-powered content generation",
      "Industry-specific templates",
      "ATS optimization",
      "Real-time collaboration",
      "Export to multiple formats",
      "Performance analytics"
    ],
    pricing: "Starting at $49/month",
    startingPrice: 49,
    contactLink: "mailto:kleber@ziontechgroup.com?subject=Resume%20AI%20Inquiry",
    icon: "📝"
  },
  {
    id: "ai-moderation",
    name: "AI Content Moderation",
    category: "AI Services",
    description: "Automated content moderation system for platforms, ensuring compliance and maintaining community standards.",
    features: [
      "Real-time content analysis",
      "Multi-language detection",
      "Custom policy configuration",
      "Bias detection and mitigation",
      "Audit trails and reporting",
      "API integration"
    ],
    pricing: "Starting at $199/month",
    startingPrice: 199,
    contactLink: "mailto:kleber@ziontechgroup.com?subject=AI%20Moderation%20Inquiry",
    icon: "🛡️"
  },
  {
    id: "ai-analytics",
    name: "AI Business Intelligence",
    category: "AI Services",
    description: "Advanced analytics and business intelligence powered by AI, providing actionable insights and predictive modeling.",
    features: [
      "Predictive analytics",
      "Natural language queries",
      "Automated reporting",
      "Real-time dashboards",
      "Data visualization",
      "Custom ML models"
    ],
    pricing: "Starting at $399/month",
    startingPrice: 399,
    contactLink: "mailto:kleber@ziontechgroup.com?subject=AI%20Analytics%20Inquiry",
    icon: "📊"
  },

  // IT Services
  {
    id: "cloud-migration",
    name: "Cloud Migration & DevOps",
    category: "IT Services",
    description: "End-to-end cloud migration services with DevOps implementation, ensuring smooth transitions and optimal performance.",
    features: [
      "Multi-cloud strategy planning",
      "Infrastructure as Code (IaC)",
      "CI/CD pipeline setup",
      "Performance optimization",
      "Security and compliance",
      "24/7 monitoring and support"
    ],
    pricing: "Starting at $5,000",
    startingPrice: 5000,
    contactLink: "mailto:kleber@ziontechgroup.com?subject=Cloud%20Migration%20Inquiry",
    icon: "☁️"
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity & Compliance",
    category: "IT Services",
    description: "Comprehensive cybersecurity solutions including penetration testing, compliance audits, and security infrastructure setup.",
    features: [
      "Penetration testing",
      "Security audits and assessments",
      "Compliance frameworks (SOC2, ISO27001)",
      "Incident response planning",
      "Security awareness training",
      "Ongoing monitoring and support"
    ],
    pricing: "Starting at $3,500",
    startingPrice: 3500,
    contactLink: "mailto:kleber@ziontechgroup.com?subject=Cybersecurity%20Inquiry",
    icon: "🔒"
  },
  {
    id: "network-infrastructure",
    name: "Network Infrastructure",
    category: "IT Services",
    description: "Design, implementation, and maintenance of enterprise-grade network infrastructure and connectivity solutions.",
    features: [
      "Network design and planning",
      "Hardware procurement and setup",
      "Wireless network optimization",
      "VPN and remote access",
      "Network security implementation",
      "Ongoing maintenance and support"
    ],
    pricing: "Starting at $2,500",
    startingPrice: 2500,
    contactLink: "mailto:kleber@ziontechgroup.com?subject=Network%20Infrastructure%20Inquiry",
    icon: "🌐"
  },
  {
    id: "it-consulting",
    name: "IT Strategy & Consulting",
    category: "IT Services",
    description: "Strategic IT consulting services to help organizations align technology with business objectives and digital transformation goals.",
    features: [
      "Technology roadmap planning",
      "Digital transformation strategy",
      "Vendor selection and management",
      "Cost optimization analysis",
      "Risk assessment and mitigation",
      "Change management support"
    ],
    pricing: "Starting at $150/hour",
    startingPrice: 150,
    contactLink: "mailto:kleber@ziontechgroup.com?subject=IT%20Consulting%20Inquiry",
    icon: "💡"
  },

  // Micro SAAS
  {
    id: "marketplace-platform",
    name: "Digital Marketplace Platform",
    category: "Micro SAAS",
    description: "White-label marketplace solution for jobs, talent, and projects with integrated payment processing and governance.",
    features: [
      "Custom branding and theming",
      "Multi-currency support",
      "Integrated payment gateways",
      "User management and roles",
      "Analytics and reporting",
      "Mobile-responsive design"
    ],
    pricing: "Starting at $999/month",
    startingPrice: 999,
    contactLink: "mailto:kleber@ziontechgroup.com?subject=Marketplace%20Platform%20Inquiry",
    icon: "🏪"
  },
  {
    id: "token-system",
    name: "Token Economy Platform",
    category: "Micro SAAS",
    description: "Complete token system with rewards, governance, and economic incentives for community engagement and loyalty.",
    features: [
      "Custom token creation",
      "Reward distribution system",
      "Governance voting mechanisms",
      "Staking and liquidity pools",
      "Multi-chain support",
      "Analytics and reporting"
    ],
    pricing: "Starting at $799/month",
    startingPrice: 799,
    contactLink: "mailto:kleber@ziontechgroup.com?subject=Token%20System%20Inquiry",
    icon: "🪙"
  },
  {
    id: "kyc-aml",
    name: "KYC/AML Verification System",
    category: "Micro SAAS",
    description: "Comprehensive identity verification and compliance system for financial services and regulated industries.",
    features: [
      "Document verification",
      "Biometric authentication",
      "Compliance reporting",
      "Risk scoring",
      "Multi-jurisdiction support",
      "API integration"
    ],
    pricing: "Starting at $299/month",
    startingPrice: 299,
    contactLink: "mailto:kleber@ziontechgroup.com?subject=KYC%20AML%20Inquiry",
    icon: "🆔"
  },
  {
    id: "dao-platform",
    name: "DAO Governance Platform",
    category: "Micro SAAS",
    description: "Complete DAO platform with proposal creation, voting mechanisms, and treasury management for decentralized organizations.",
    features: [
      "Proposal creation and management",
      "Multiple voting mechanisms",
      "Treasury management",
      "Member onboarding",
      "Governance analytics",
      "Integration with major wallets"
    ],
    pricing: "Starting at $599/month",
    startingPrice: 599,
    contactLink: "mailto:kleber@ziontechgroup.com?subject=DAO%20Platform%20Inquiry",
    icon: "🏛️"
  },

  // Digital Economy
  {
    id: "zion-os",
    name: "Zion OS - Digital Economy Platform",
    category: "Digital Economy",
    description: "Complete sovereign digital economy platform with marketplace, governance, identity, and AI-powered tools.",
    features: [
      "One-click deployment",
      "Custom vertical markets",
      "Multi-language support",
      "Regional customization",
      "AI-powered tools",
      "White-label solutions"
    ],
    pricing: "Starting at $1,999/month",
    startingPrice: 1999,
    contactLink: "mailto:kleber@ziontechgroup.com?subject=Zion%20OS%20Inquiry",
    icon: "🚀",
    popular: true
  },
  {
    id: "incubator-grants",
    name: "Incubator & Grants Platform",
    category: "Digital Economy",
    description: "Platform for managing startup incubators, grant programs, and funding distribution with transparent governance.",
    features: [
      "Application management",
      "Review and scoring systems",
      "Fund distribution tracking",
      "Progress monitoring",
      "Impact measurement",
      "Reporting and analytics"
    ],
    pricing: "Starting at $899/month",
    startingPrice: 899,
    contactLink: "mailto:kleber@ziontechgroup.com?subject=Incubator%20Grants%20Inquiry",
    icon: "🌱"
  },
  {
    id: "academy-platform",
    name: "Zion Academy Platform",
    category: "Digital Economy",
    description: "Comprehensive learning management system with AI-powered content creation, assessment, and certification.",
    features: [
      "AI content generation",
      "Interactive assessments",
      "Certification tracking",
      "Learning analytics",
      "Multi-format support",
      "Mobile learning"
    ],
    pricing: "Starting at $399/month",
    startingPrice: 399,
    contactLink: "mailto:kleber@ziontechgroup.com?subject=Academy%20Platform%20Inquiry",
    icon: "🎓"
  },
  {
    id: "blockchain-identity",
    name: "Blockchain Identity & Credentials",
    category: "Digital Economy",
    description: "Self-sovereign identity solution with verifiable credentials, zero-knowledge proofs, and cross-platform compatibility.",
    features: [
      "Self-sovereign identity",
      "Verifiable credentials",
      "Zero-knowledge proofs",
      "Cross-platform compatibility",
      "Privacy-preserving verification",
      "Multi-chain support"
    ],
    pricing: "Starting at $699/month",
    startingPrice: 699,
    contactLink: "mailto:kleber@ziontechgroup.com?subject=Blockchain%20Identity%20Inquiry",
    icon: "🆔"
  },
  {
    id: "ai-legal-assistant",
    name: "AI Legal Assistant",
    category: "AI Services",
    description: "Intelligent legal research, document analysis, and contract review powered by advanced AI and legal knowledge bases.",
    features: [
      "Legal research automation",
      "Contract analysis and review",
      "Compliance checking",
      "Legal document generation",
      "Case law research",
      "Regulatory updates"
    ],
    pricing: "Starting at $599/month",
    startingPrice: 599,
    contactLink: "mailto:kleber@ziontechgroup.com?subject=AI%20Legal%20Assistant%20Inquiry",
    icon: "⚖️"
  },
  {
    id: "quantum-computing",
    name: "Quantum Computing Solutions",
    category: "AI Services",
    description: "Quantum computing consulting, algorithm development, and hybrid quantum-classical solutions for complex optimization problems.",
    features: [
      "Quantum algorithm development",
      "Hybrid quantum-classical solutions",
      "Optimization problem solving",
      "Quantum machine learning",
      "Performance benchmarking",
      "Expert consultation"
    ],
    pricing: "Starting at $2,999/month",
    startingPrice: 2999,
    contactLink: "mailto:kleber@ziontechgroup.com?subject=Quantum%20Computing%20Inquiry",
    icon: "⚛️"
  },
  {
    id: "edge-computing",
    name: "Edge Computing Infrastructure",
    category: "IT Services",
    description: "Edge computing solutions for IoT, real-time processing, and distributed computing with low-latency performance.",
    features: [
      "Edge node deployment",
      "Real-time data processing",
      "IoT integration",
      "Low-latency networking",
      "Distributed computing",
      "Edge AI deployment"
    ],
    pricing: "Starting at $1,500/month",
    startingPrice: 1500,
    contactLink: "mailto:kleber@ziontechgroup.com?subject=Edge%20Computing%20Inquiry",
    icon: "🌐"
  },
  {
    id: "metaverse-platform",
    name: "Metaverse Development Platform",
    category: "Digital Economy",
    description: "Complete metaverse platform with 3D environments, virtual events, NFT integration, and social interaction tools.",
    features: [
      "3D environment creation",
      "Virtual event hosting",
      "NFT integration",
      "Social interaction tools",
      "Cross-platform compatibility",
      "Custom avatars and assets"
    ],
    pricing: "Starting at $1,799/month",
    startingPrice: 1799,
    contactLink: "mailto:kleber@ziontechgroup.com?subject=Metaverse%20Platform%20Inquiry",
    icon: "🌌"
  },
  {
    id: "ai-healthcare",
    name: "AI Healthcare Solutions",
    category: "AI Services",
    description: "AI-powered healthcare solutions including diagnostic assistance, patient monitoring, and medical research automation.",
    features: [
      "Medical image analysis",
      "Patient data analytics",
      "Diagnostic assistance",
      "Drug discovery support",
      "Clinical trial optimization",
      "Healthcare compliance"
    ],
    pricing: "Starting at $899/month",
    startingPrice: 899,
    contactLink: "mailto:kleber@ziontechgroup.com?subject=AI%20Healthcare%20Inquiry",
    icon: "🏥"
  },
  {
    id: "fintech-platform",
    name: "FinTech Platform Solutions",
    category: "Micro SAAS",
    description: "Complete financial technology platform with payment processing, lending, investment management, and regulatory compliance.",
    features: [
      "Payment processing",
      "Lending automation",
      "Investment management",
      "Regulatory compliance",
      "Risk assessment",
      "Multi-currency support"
    ],
    pricing: "Starting at $1,299/month",
    startingPrice: 1299,
    contactLink: "mailto:kleber@ziontechgroup.com?subject=FinTech%20Platform%20Inquiry",
    icon: "💰"
  },
  {
    id: "supply-chain-ai",
    name: "AI-Powered Supply Chain",
    category: "AI Services",
    description: "Intelligent supply chain optimization with demand forecasting, inventory management, and logistics automation.",
    features: [
      "Demand forecasting",
      "Inventory optimization",
      "Logistics automation",
      "Supplier management",
      "Risk assessment",
      "Performance analytics"
    ],
    pricing: "Starting at $799/month",
    startingPrice: 799,
    contactLink: "mailto:kleber@ziontechgroup.com?subject=Supply%20Chain%20AI%20Inquiry",
    icon: "📦"
  },
  {
    id: "iot-platform",
    name: "IoT Platform & Analytics",
    category: "IT Services",
    description: "Comprehensive IoT platform with device management, data collection, real-time analytics, and automation capabilities.",
    features: [
      "Device management",
      "Data collection",
      "Real-time analytics",
      "Automation workflows",
      "Security protocols",
      "Scalable infrastructure"
    ],
    pricing: "Starting at $699/month",
    startingPrice: 699,
    contactLink: "mailto:kleber@ziontechgroup.com?subject=IoT%20Platform%20Inquiry",
    icon: "🔌"
  }
];

const categories = ["All", "AI Services", "IT Services", "Micro SAAS", "Digital Economy"];

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredServices = services.filter(service => {
    const matchesCategory = selectedCategory === "All" || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedServices = filteredServices.sort((a, b) => a.startingPrice - b.startingPrice);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Our Services & Solutions</h1>
        <p className="text-xl opacity-80 max-w-3xl mx-auto">
          Comprehensive micro SAAS, IT services, and AI solutions to power your digital transformation. 
          From enterprise AI to complete digital economy platforms.
        </p>
      </div>

      {/* Contact Info */}
      <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg p-6 border border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div>
            <div className="font-semibold text-blue-400">📱 Contact Us</div>
            <div className="text-sm opacity-80">+1 302 464 0950</div>
          </div>
          <div>
            <div className="font-semibold text-purple-400">✉️ Email</div>
            <div className="text-sm opacity-80">kleber@ziontechgroup.com</div>
          </div>
          <div>
            <div className="font-semibold text-green-400">📍 Location</div>
            <div className="text-sm opacity-80">364 E Main St STE 1008<br />Middletown DE 19709</div>
          </div>
        </div>
      </div>

      {/* Service Category Navigation */}
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Explore Our Service Categories</h2>
          <p className="opacity-80">Click on a category to explore specialized solutions</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <a href="/services/ai-solutions" className="p-6 rounded-lg border border-white/10 bg-gradient-to-br from-blue-600/10 to-purple-600/10 hover:from-blue-600/20 hover:to-purple-600/20 transition-all text-center">
            <div className="text-4xl mb-3">🤖</div>
            <h3 className="font-semibold mb-2">AI Solutions</h3>
            <p className="text-sm opacity-80">Advanced AI services and automation</p>
          </a>
          <a href="/services/it-solutions" className="p-6 rounded-lg border border-white/10 bg-gradient-to-br from-green-600/10 to-blue-600/10 hover:from-green-600/20 hover:to-blue-600/20 transition-all text-center">
            <div className="text-4xl mb-3">💻</div>
            <h3 className="font-semibold mb-2">IT Solutions</h3>
            <p className="text-sm opacity-80">Enterprise IT and infrastructure</p>
          </a>
          <a href="/services/micro-saas" className="p-6 rounded-lg border border-white/10 bg-gradient-to-br from-purple-600/10 to-pink-600/10 hover:from-purple-600/20 hover:to-pink-600/20 transition-all text-center">
            <div className="text-4xl mb-3">🚀</div>
            <h3 className="font-semibold mb-2">Micro SAAS</h3>
            <p className="text-sm opacity-80">Innovative software solutions</p>
          </a>
          <a href="/services" className="p-6 rounded-lg border border-white/10 bg-gradient-to-br from-orange-600/10 to-red-600/10 hover:from-orange-600/20 hover:to-red-600/20 transition-all text-center">
            <div className="text-4xl mb-3">🌟</div>
            <h3 className="font-semibold mb-2">All Services</h3>
            <p className="text-sm opacity-80">Complete service overview</p>
          </a>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="flex gap-2 flex-wrap">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                selectedCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-white/10 text-white/80 hover:bg-white/20"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <input
          type="text"
          placeholder="Search services..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-blue-500"
        />
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedServices.map(service => (
          <div
            key={service.id}
            className={`relative rounded-lg border p-6 transition-all hover:scale-105 ${
              service.popular
                ? "border-blue-500/50 bg-gradient-to-br from-blue-600/10 to-purple-600/10"
                : "border-white/10 bg-white/5 hover:border-white/20"
            }`}
          >
            {service.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  Most Popular
                </span>
              </div>
            )}
            
            <div className="text-4xl mb-4">{service.icon}</div>
            <div className="mb-2">
              <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/60">
                {service.category}
              </span>
            </div>
            <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
            <p className="text-sm opacity-80 mb-4">{service.description}</p>
            
            <div className="space-y-3 mb-4">
              <div className="text-sm">
                <span className="font-semibold text-blue-400">Key Features:</span>
                <ul className="mt-2 space-y-1">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="text-green-400">✓</span>
                      <span className="text-xs opacity-80">{feature}</span>
                    </li>
                  ))}
                  {service.features.length > 3 && (
                    <li className="text-xs opacity-60">+{service.features.length - 3} more features</li>
                  )}
                </ul>
              </div>
            </div>

            <div className="border-t border-white/10 pt-4 space-y-3">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">{service.pricing}</div>
                <div className="text-xs opacity-60">Starting price</div>
              </div>
              
              <a
                href={service.contactLink}
                className="w-full block text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-semibold"
              >
                Get Started
              </a>
              
              <a
                href={`https://ziontechgroup.com/services/${service.id}`}
                className="w-full block text-center text-blue-400 hover:text-blue-300 text-sm underline"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="text-center space-y-6 py-12 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-lg border border-white/10">
        <h2 className="text-3xl font-bold">Ready to Transform Your Business?</h2>
        <p className="text-xl opacity-80 max-w-2xl mx-auto">
          Let's discuss how our services can help you achieve your digital transformation goals. 
          Get in touch for a personalized consultation and custom solution.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=Service%20Consultation%20Request"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-semibold text-lg"
          >
            Schedule Consultation
          </a>
          <a
            href="tel:+13024640950"
            className="border border-white/20 text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-all font-semibold text-lg"
          >
            Call Now: +1 302 464 0950
          </a>
        </div>
      </div>

      {/* Pricing Comparison */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-center">Service Pricing Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.slice(1).map(category => {
            const categoryServices = services.filter(s => s.category === category);
            const avgPrice = categoryServices.reduce((sum, s) => sum + s.startingPrice, 0) / categoryServices.length;
            const minPrice = Math.min(...categoryServices.map(s => s.startingPrice));
            
            return (
              <div key={category} className="text-center p-4 rounded-lg bg-white/5 border border-white/10">
                <h3 className="font-semibold mb-2">{category}</h3>
                <div className="text-2xl font-bold text-blue-400">${Math.round(avgPrice)}</div>
                <div className="text-sm opacity-60">Average starting price</div>
                <div className="text-xs opacity-40 mt-1">From ${minPrice}/month</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}