"use client";

import { useState } from "react";

interface Service {
  id: string;
  name: string;
  category: "AI Services" | "IT Services" | "Micro SAAS" | "Digital Economy";
  description: string;
  features: string[];
  benefits: string[];
  pricing: {
    starter: string;
    professional: string;
    enterprise: string;
  };
  link: string;
  icon: string;
}

const services: Service[] = [
  // AI Services
  {
    id: "zion-gpt-enterprise",
    name: "ZionGPT Enterprise",
    category: "AI Services",
    description: "Advanced AI-powered business intelligence and automation platform with custom training and deployment capabilities.",
    features: [
      "Custom AI model training on your data",
      "Multi-language support (100+ languages)",
      "Advanced analytics and insights",
      "API integration and webhooks",
      "Real-time data processing",
      "Custom prompt engineering",
      "Role-based access control",
      "Audit trails and compliance"
    ],
    benefits: [
      "Increase productivity by 300%",
      "Reduce operational costs by 40%",
      "24/7 intelligent automation",
      "Scalable AI infrastructure",
      "Enterprise-grade security"
    ],
    pricing: {
      starter: "$299/month",
      professional: "$899/month", 
      enterprise: "Custom pricing"
    },
    link: "https://ziontechgroup.com/ai-services/zion-gpt",
    icon: "🤖"
  },
  {
    id: "ai-content-generation",
    name: "AI Content Generation Suite",
    category: "AI Services",
    description: "Comprehensive AI-powered content creation platform for marketing, documentation, and creative projects.",
    features: [
      "Multi-format content generation (blogs, social media, emails)",
      "SEO-optimized content creation",
      "Brand voice customization",
      "Multi-language content",
      "Content scheduling and automation",
      "Performance analytics",
      "Plagiarism detection",
      "Collaborative editing tools"
    ],
    benefits: [
      "10x faster content creation",
      "Consistent brand messaging",
      "Improved SEO rankings",
      "Cost-effective content strategy",
      "Scalable content operations"
    ],
    pricing: {
      starter: "$199/month",
      professional: "$499/month",
      enterprise: "Custom pricing"
    },
    link: "https://ziontechgroup.com/ai-services/content-generation",
    icon: "✍️"
  },
  {
    id: "ai-data-analytics",
    name: "AI-Powered Data Analytics",
    category: "AI Services",
    description: "Intelligent data analysis and visualization platform with predictive insights and automated reporting.",
    features: [
      "Real-time data processing",
      "Predictive analytics and forecasting",
      "Interactive dashboards",
      "Automated report generation",
      "Data quality monitoring",
      "Integration with 100+ data sources",
      "Advanced visualization tools",
      "Custom ML model deployment"
    ],
    benefits: [
      "Data-driven decision making",
      "Identify hidden patterns and trends",
      "Automated insights delivery",
      "Improved operational efficiency",
      "Competitive advantage through analytics"
    ],
    pricing: {
      starter: "$399/month",
      professional: "$799/month",
      enterprise: "Custom pricing"
    },
    link: "https://ziontechgroup.com/ai-services/data-analytics",
    icon: "📊"
  },
  
  // IT Services
  {
    id: "cloud-infrastructure",
    name: "Cloud Infrastructure Management",
    category: "IT Services",
    description: "End-to-end cloud infrastructure design, deployment, and management for scalable business solutions.",
    features: [
      "Multi-cloud strategy and implementation",
      "Infrastructure as Code (IaC)",
      "Auto-scaling and load balancing",
      "Disaster recovery planning",
      "Security and compliance",
      "24/7 monitoring and support",
      "Cost optimization",
      "Performance tuning"
    ],
    benefits: [
      "Reduced infrastructure costs by 30%",
      "Improved system reliability (99.9% uptime)",
      "Faster deployment cycles",
      "Enhanced security posture",
      "Scalable architecture"
    ],
    pricing: {
      starter: "$2,500/month",
      professional: "$5,000/month",
      enterprise: "Custom pricing"
    },
    link: "https://ziontechgroup.com/it-services/cloud-infrastructure",
    icon: "☁️"
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity & Compliance",
    category: "IT Services",
    description: "Comprehensive cybersecurity solutions including threat detection, incident response, and compliance management.",
    features: [
      "Security assessment and penetration testing",
      "Threat detection and response",
      "Vulnerability management",
      "Compliance auditing (SOC2, ISO27001, GDPR)",
      "Security awareness training",
      "Incident response planning",
      "Security monitoring 24/7",
      "Regular security updates"
    ],
    benefits: [
      "Protect against cyber threats",
      "Meet regulatory requirements",
      "Build customer trust",
      "Reduce security risks",
      "Comprehensive protection"
    ],
    pricing: {
      starter: "$1,500/month",
      professional: "$3,500/month",
      enterprise: "Custom pricing"
    },
    link: "https://ziontechgroup.com/it-services/cybersecurity",
    icon: "🔒"
  },
  {
    id: "devops-automation",
    name: "DevOps & CI/CD Automation",
    category: "IT Services",
    description: "Streamlined development operations with automated testing, deployment, and monitoring pipelines.",
    features: [
      "CI/CD pipeline design and implementation",
      "Automated testing and quality gates",
      "Container orchestration (Kubernetes)",
      "Infrastructure monitoring",
      "Performance optimization",
      "Security scanning integration",
      "Deployment automation",
      "Rollback capabilities"
    ],
    benefits: [
      "Faster time to market",
      "Improved code quality",
      "Reduced deployment risks",
      "Better team collaboration",
      "Increased development velocity"
    ],
    pricing: {
      starter: "$2,000/month",
      professional: "$4,500/month",
      enterprise: "Custom pricing"
    },
    link: "https://ziontechgroup.com/it-services/devops",
    icon: "⚡"
  },
  
  // Micro SAAS
  {
    id: "digital-marketplace",
    name: "Digital Marketplace Platform",
    category: "Micro SAAS",
    description: "White-label marketplace solution for businesses to create their own digital commerce platforms.",
    features: [
      "Multi-vendor marketplace",
      "Payment processing integration",
      "Inventory management",
      "Order tracking system",
      "Customer reviews and ratings",
      "Mobile-responsive design",
      "Analytics dashboard",
      "Multi-language support"
    ],
    benefits: [
      "Launch marketplace in 2 weeks",
      "Reduce development costs by 70%",
      "Scalable architecture",
      "Customizable branding",
      "Integrated payment solutions"
    ],
    pricing: {
      starter: "$299/month",
      professional: "$699/month",
      enterprise: "Custom pricing"
    },
    link: "https://ziontechgroup.com/saas/marketplace",
    icon: "🛒"
  },
  {
    id: "project-management",
    name: "Project Management Suite",
    category: "Micro SAAS",
    description: "Comprehensive project management solution with task tracking, team collaboration, and resource management.",
    features: [
      "Task and milestone tracking",
      "Team collaboration tools",
      "Resource allocation",
      "Time tracking and reporting",
      "Gantt charts and timelines",
      "File sharing and storage",
      "Mobile applications",
      "Integration with popular tools"
    ],
    benefits: [
      "Improve project delivery by 40%",
      "Better team coordination",
      "Real-time project visibility",
      "Resource optimization",
      "Streamlined workflows"
    ],
    pricing: {
      starter: "$15/user/month",
      professional: "$25/user/month",
      enterprise: "Custom pricing"
    },
    link: "https://ziontechgroup.com/saas/project-management",
    icon: "📋"
  },
  {
    id: "crm-system",
    name: "Customer Relationship Management",
    category: "Micro SAAS",
    description: "Intelligent CRM system with lead management, sales automation, and customer analytics.",
    features: [
      "Lead capture and scoring",
      "Sales pipeline management",
      "Email marketing automation",
      "Customer analytics",
      "Mobile CRM app",
      "Integration capabilities",
      "Custom reporting",
      "Multi-currency support"
    ],
    benefits: [
      "Increase sales by 25%",
      "Better customer retention",
      "Automated sales processes",
      "Improved customer insights",
      "Streamlined operations"
    ],
    pricing: {
      starter: "$29/user/month",
      professional: "$59/user/month",
      enterprise: "Custom pricing"
    },
    link: "https://ziontechgroup.com/saas/crm",
    icon: "👥"
  },
  
  // Digital Economy
  {
    id: "zion-ecosystem",
    name: "Zion Digital Economy Platform",
    category: "Digital Economy",
    description: "Complete digital economy solution with marketplace, governance, identity, and token systems.",
    features: [
      "Integrated marketplace and job platform",
      "DAO governance and voting systems",
      "Digital identity and KYC/AML",
      "Token rewards and incentives",
      "Regional dashboards",
      "Partner API access",
      "White-label solutions",
      "Multi-currency support"
    ],
    benefits: [
      "Launch digital economy in one click",
      "Sovereign governance systems",
      "Integrated token economics",
      "Scalable regional deployment",
      "Complete ecosystem solution"
    ],
    pricing: {
      starter: "$999/month",
      professional: "$2,499/month",
      enterprise: "Custom pricing"
    },
    link: "https://ziontechgroup.com/digital-economy",
    icon: "🌐"
  },
  {
    id: "blockchain-solutions",
    name: "Blockchain & Web3 Solutions",
    category: "Digital Economy",
    description: "Enterprise blockchain solutions including smart contracts, DeFi platforms, and Web3 integration.",
    features: [
      "Smart contract development",
      "DeFi platform creation",
      "NFT marketplace development",
      "Wallet integration",
      "Cross-chain interoperability",
      "Security auditing",
      "Regulatory compliance",
      "Performance optimization"
    ],
    benefits: [
      "Future-proof technology stack",
      "Enhanced transparency and security",
      "Reduced transaction costs",
      "New revenue opportunities",
      "Competitive advantage"
    ],
    pricing: {
      starter: "$5,000/month",
      professional: "$12,000/month",
      enterprise: "Custom pricing"
    },
    link: "https://ziontechgroup.com/blockchain-solutions",
    icon: "⛓️"
  },
  {
    id: "quantum-computing",
    name: "Quantum Computing Solutions",
    category: "AI Services",
    description: "Next-generation quantum computing applications for optimization, cryptography, and scientific research.",
    features: [
      "Quantum algorithm development",
      "Optimization problem solving",
      "Cryptographic security",
      "Quantum machine learning",
      "Simulation and modeling",
      "Quantum error correction",
      "Hybrid classical-quantum systems",
      "Industry-specific applications"
    ],
    benefits: [
      "Exponential computational power",
      "Solve previously intractable problems",
      "Revolutionary security protocols",
      "Breakthrough scientific discoveries",
      "Competitive quantum advantage"
    ],
    pricing: {
      starter: "$2,500/month",
      professional: "$7,500/month",
      enterprise: "Custom pricing"
    },
    link: "https://ziontechgroup.com/quantum-computing",
    icon: "⚛️"
  },
  {
    id: "edge-computing",
    name: "Edge Computing & IoT",
    category: "IT Services",
    description: "Distributed computing infrastructure for real-time data processing and IoT device management.",
    features: [
      "Edge node deployment",
      "Real-time data processing",
      "IoT device management",
      "5G network optimization",
      "Latency reduction",
      "Bandwidth optimization",
      "Security at the edge",
      "Scalable architecture"
    ],
    benefits: [
      "Ultra-low latency processing",
      "Reduced bandwidth costs",
      "Enhanced privacy and security",
      "Real-time decision making",
      "Scalable IoT deployments"
    ],
    pricing: {
      starter: "$1,200/month",
      professional: "$3,500/month",
      enterprise: "Custom pricing"
    },
    link: "https://ziontechgroup.com/edge-computing",
    icon: "🌐"
  },
  {
    id: "metaverse-platform",
    name: "Metaverse Development Platform",
    category: "Digital Economy",
    description: "Complete metaverse infrastructure for virtual worlds, digital twins, and immersive experiences.",
    features: [
      "3D world creation tools",
      "Avatar customization systems",
      "Virtual event platforms",
      "Digital asset marketplace",
      "Spatial computing integration",
      "Multi-user collaboration",
      "VR/AR device support",
      "Blockchain integration"
    ],
    benefits: [
      "New digital revenue streams",
      "Enhanced customer engagement",
      "Virtual collaboration spaces",
      "Immersive brand experiences",
      "Future-ready platform"
    ],
    pricing: {
      starter: "$1,500/month",
      professional: "$4,500/month",
      enterprise: "Custom pricing"
    },
    link: "https://ziontechgroup.com/metaverse-platform",
    icon: "🌍"
  }
];

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = ["All", ...Array.from(new Set(services.map(s => s.category)))];
  
  const filteredServices = services.filter(service => {
    const matchesCategory = selectedCategory === "All" || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Zion Tech Group Services</h1>
        <p className="text-xl opacity-80 max-w-3xl mx-auto">
          Comprehensive micro SAAS, IT services, and AI solutions to accelerate your digital transformation
        </p>
      </div>

      {/* Contact Information */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div>
            <div className="font-semibold">📱 Contact</div>
            <div>+1 302 464 0950</div>
          </div>
          <div>
            <div className="font-semibold">✉️ Email</div>
            <div>kleber@ziontechgroup.com</div>
          </div>
          <div>
            <div className="font-semibold">📍 Address</div>
            <div>364 E Main St STE 1008<br />Middletown DE 19709</div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="flex gap-2 flex-wrap">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm ${
                selectedCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
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
          className="px-4 py-2 bg-zinc-800 border border-white/10 rounded-lg text-white placeholder-zinc-400"
        />
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map(service => (
          <div key={service.id} className="bg-zinc-900 border border-white/10 rounded-lg p-6 hover:border-white/20 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">{service.icon}</span>
              <div>
                <h3 className="font-semibold text-lg">{service.name}</h3>
                <span className="text-sm text-blue-400">{service.category}</span>
              </div>
            </div>
            
            <p className="text-sm opacity-80 mb-4">{service.description}</p>
            
            <div className="space-y-3 mb-4">
              <div>
                <div className="font-semibold text-sm mb-2">Key Features:</div>
                <ul className="text-xs space-y-1 opacity-80">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <li key={index}>• {feature}</li>
                  ))}
                  {service.features.length > 3 && (
                    <li className="text-blue-400">+{service.features.length - 3} more features</li>
                  )}
                </ul>
              </div>
              
              <div>
                <div className="font-semibold text-sm mb-2">Benefits:</div>
                <ul className="text-xs space-y-1 opacity-80">
                  {service.benefits.slice(0, 2).map((benefit, index) => (
                    <li key={index}>• {benefit}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-2 mb-4">
              <div className="text-sm font-semibold">Pricing:</div>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div>
                  <div className="opacity-60">Starter</div>
                  <div className="font-semibold">{service.pricing.starter}</div>
                </div>
                <div>
                  <div className="opacity-60">Professional</div>
                  <div className="font-semibold">{service.pricing.professional}</div>
                </div>
                <div>
                  <div className="opacity-60">Enterprise</div>
                  <div className="font-semibold">{service.pricing.enterprise}</div>
                </div>
              </div>
            </div>

            <a
              href={service.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors"
            >
              Learn More
            </a>
          </div>
        ))}
      </div>

      {/* Specialized Services */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-center">Specialized Service Pages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a href="/services/ai-automation" className="bg-gradient-to-r from-green-600 to-blue-600 rounded-lg p-6 text-white hover:scale-105 transition-transform">
            <div className="text-3xl mb-3">🤖</div>
            <h3 className="text-xl font-semibold mb-2">AI Workflow Automation</h3>
            <p className="opacity-90 mb-4">Transform your business processes with intelligent automation powered by cutting-edge AI technology</p>
            <div className="text-sm opacity-80">Learn more about our AI automation services →</div>
          </a>
          
          <a href="/services/blockchain-web3" className="bg-gradient-to-r from-orange-600 to-purple-600 rounded-lg p-6 text-white hover:scale-105 transition-transform">
            <div className="text-3xl mb-3">⛓️</div>
            <h3 className="text-xl font-semibold mb-2">Blockchain & Web3 Solutions</h3>
            <p className="opacity-90 mb-4">Enterprise-grade blockchain infrastructure and Web3 integration services for the future of decentralized business</p>
            <div className="text-sm opacity-80">Explore our blockchain solutions →</div>
          </a>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center space-y-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 text-white">
        <h2 className="text-2xl font-bold">Ready to Transform Your Business?</h2>
        <p className="opacity-90 max-w-2xl mx-auto">
          Let our team of experts help you choose the right services and create a customized solution that fits your business needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Started Today
          </a>
          <a
            href="tel:+13024640950"
            className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
          >
            Call Now
          </a>
        </div>
      </div>
    </div>
  );
}