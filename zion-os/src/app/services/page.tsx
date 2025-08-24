"use client";

import { useState } from "react";

interface Service {
  id: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  benefits: string[];
  pricing: {
    starter: string;
    professional: string;
    enterprise: string;
    custom?: string;
  };
  status: "available" | "coming-soon" | "beta";
  link: string;
}

const services: Service[] = [
  // Existing Core Services
  {
    id: "zion-os",
    name: "Zion OS Platform",
    category: "Core Platform",
    description: "Unified deployment protocol for sovereign AI-powered digital economies with one-click deployment.",
    features: ["Instance deployment", "Feature toggles", "Multi-vertical support", "Governance systems", "API management"],
    benefits: ["Reduce deployment time from months to minutes", "Built-in compliance and governance", "Scalable architecture", "Multi-region support"],
    pricing: {
      starter: "$99/month",
      professional: "$299/month", 
      enterprise: "$999/month",
      custom: "Contact for custom pricing"
    },
    status: "available",
    link: "/multiverse/launch"
  },
  {
    id: "zion-gpt",
    name: "ZionGPT Core",
    category: "AI Services",
    description: "Advanced AI language model optimized for business applications, compliance, and industry-specific knowledge.",
    features: ["Custom fine-tuning", "Multi-language support", "Industry-specific models", "API access", "Enterprise security"],
    benefits: ["Improve customer service efficiency by 60%", "Reduce content creation time", "Ensure compliance accuracy", "Multi-language global reach"],
    pricing: {
      starter: "$49/month",
      professional: "$149/month",
      enterprise: "$499/month"
    },
    status: "available",
    link: "/services/zion-gpt"
  },
  {
    id: "resume-ai",
    name: "Resume Builder + Proposal AI",
    category: "AI Services",
    description: "Intelligent resume creation and proposal generation powered by AI with industry-specific optimization.",
    features: ["AI-powered resume building", "Proposal templates", "ATS optimization", "Industry customization", "Real-time feedback"],
    benefits: ["Increase interview success rate by 40%", "Save 5+ hours per proposal", "Professional presentation", "Industry-specific optimization"],
    pricing: {
      starter: "$19/month",
      professional: "$49/month",
      enterprise: "$129/month"
    },
    status: "available",
    link: "/services/resume-ai"
  },
  {
    id: "marketplace",
    name: "Digital Marketplace Platform",
    category: "E-commerce & Services",
    description: "Complete marketplace solution for jobs, talent, projects, and services with integrated payment processing.",
    features: ["Job posting & matching", "Talent marketplace", "Project management", "Payment processing", "Rating system"],
    benefits: ["Launch marketplace in 24 hours", "Reduce operational costs by 30%", "Increase revenue through commissions", "Built-in trust mechanisms"],
    pricing: {
      starter: "$79/month",
      professional: "$199/month",
      enterprise: "$599/month"
    },
    status: "available",
    link: "/services/marketplace"
  },

  // New AI-Powered Services
  {
    id: "ai-content-hub",
    name: "AI Content Hub",
    category: "AI Services",
    description: "Comprehensive content creation and management platform powered by advanced AI for blogs, social media, and marketing.",
    features: ["AI content generation", "SEO optimization", "Multi-platform publishing", "Content calendar", "Performance analytics"],
    benefits: ["Generate 10x more content", "Improve SEO rankings", "Save 20+ hours per week", "Increase engagement rates"],
    pricing: {
      starter: "$39/month",
      professional: "$99/month",
      enterprise: "$299/month"
    },
    status: "available",
    link: "/services/ai-content-hub"
  },
  {
    id: "ai-customer-support",
    name: "AI Customer Support Suite",
    category: "AI Services",
    description: "Intelligent customer support automation with chatbots, ticket routing, and sentiment analysis.",
    features: ["AI chatbots", "Smart ticket routing", "Sentiment analysis", "Knowledge base", "24/7 availability"],
    benefits: ["Reduce support costs by 50%", "Improve response time by 80%", "Increase customer satisfaction", "Handle 10x more inquiries"],
    pricing: {
      starter: "$29/month",
      professional: "$79/month",
      enterprise: "$199/month"
    },
    status: "available",
    link: "/services/ai-customer-support"
  },
  {
    id: "ai-data-analytics",
    name: "AI Data Analytics Platform",
    category: "AI Services",
    description: "Advanced business intelligence and analytics platform with AI-powered insights and predictive modeling.",
    features: ["Real-time dashboards", "Predictive analytics", "Custom reports", "Data visualization", "API integration"],
    benefits: ["Make data-driven decisions", "Identify trends before competitors", "Optimize business processes", "Increase ROI by 25%"],
    pricing: {
      starter: "$59/month",
      professional: "$149/month",
      enterprise: "$399/month"
    },
    status: "available",
    link: "/services/ai-data-analytics"
  },

  // New IT Services
  {
    id: "cloud-migration",
    name: "Cloud Migration Services",
    category: "IT Services",
    description: "Professional cloud migration and optimization services for businesses looking to modernize their infrastructure.",
    features: ["Infrastructure assessment", "Migration planning", "Data migration", "Performance optimization", "24/7 support"],
    benefits: ["Reduce infrastructure costs by 40%", "Improve scalability", "Enhanced security", "Better disaster recovery"],
    pricing: {
      starter: "$2,500",
      professional: "$7,500",
      enterprise: "$15,000+",
      custom: "Project-based pricing"
    },
    status: "available",
    link: "/services/cloud-migration"
  },
  {
    id: "cybersecurity-audit",
    name: "Cybersecurity Audit & Compliance",
    category: "IT Services",
    description: "Comprehensive security assessments and compliance consulting for businesses of all sizes.",
    features: ["Security assessment", "Penetration testing", "Compliance audit", "Security training", "Incident response planning"],
    benefits: ["Protect against cyber threats", "Meet compliance requirements", "Reduce security risks", "Build customer trust"],
    pricing: {
      starter: "$1,500",
      professional: "$4,500",
      enterprise: "$9,000+",
      custom: "Project-based pricing"
    },
    status: "available",
    link: "/services/cybersecurity-audit"
  },
  {
    id: "devops-automation",
    name: "DevOps Automation & CI/CD",
    category: "IT Services",
    description: "Streamline development and deployment processes with automated DevOps pipelines and infrastructure as code.",
    features: ["CI/CD pipelines", "Infrastructure as code", "Monitoring & alerting", "Automated testing", "Deployment automation"],
    benefits: ["Reduce deployment time by 80%", "Improve code quality", "Faster time to market", "Reduce human errors"],
    pricing: {
      starter: "$89/month",
      professional: "$199/month",
      enterprise: "$499/month"
    },
    status: "available",
    link: "/services/devops-automation"
  },

  // New Micro SAAS Solutions
  {
    id: "invoice-automation",
    name: "Invoice Automation System",
    category: "Business Automation",
    description: "Automate invoice processing, payment tracking, and financial reporting for small to medium businesses.",
    features: ["Automated invoice processing", "Payment tracking", "Financial reporting", "Integration with accounting software", "Mobile app"],
    benefits: ["Save 15+ hours per month", "Reduce payment delays", "Improve cash flow", "Better financial visibility"],
    pricing: {
      starter: "$25/month",
      professional: "$59/month",
      enterprise: "$129/month"
    },
    status: "available",
    link: "/services/invoice-automation"
  },
  {
    id: "hr-management",
    name: "HR Management Platform",
    category: "Business Automation",
    description: "Complete HR solution for employee management, time tracking, and performance evaluation.",
    features: ["Employee database", "Time tracking", "Performance reviews", "Leave management", "Payroll integration"],
    benefits: ["Streamline HR processes", "Improve employee satisfaction", "Reduce administrative overhead", "Better compliance"],
    pricing: {
      starter: "$35/month",
      professional: "$79/month",
      enterprise: "$179/month"
    },
    status: "available",
    link: "/services/hr-management"
  },
  {
    id: "project-management",
    name: "Project Management Suite",
    category: "Business Automation",
    description: "Comprehensive project management solution with task tracking, team collaboration, and resource management.",
    features: ["Task management", "Team collaboration", "Resource allocation", "Time tracking", "Reporting & analytics"],
    benefits: ["Improve project delivery by 30%", "Better team collaboration", "Resource optimization", "Real-time project visibility"],
    pricing: {
      starter: "$45/month",
      professional: "$99/month",
      enterprise: "$249/month"
    },
    status: "available",
    link: "/services/project-management"
  },

  // New Blockchain & Web3 Services
  {
    id: "smart-contract-audit",
    name: "Smart Contract Audit Services",
    category: "Blockchain & Web3",
    description: "Professional smart contract security audits and optimization for DeFi and NFT projects.",
    features: ["Security audit", "Code review", "Vulnerability assessment", "Gas optimization", "Documentation"],
    benefits: ["Ensure contract security", "Reduce risk of exploits", "Optimize gas costs", "Build investor confidence"],
    pricing: {
      starter: "$3,000",
      professional: "$8,000",
      enterprise: "$20,000+",
      custom: "Project-based pricing"
    },
    status: "available",
    link: "/services/smart-contract-audit"
  },
  {
    id: "nft-marketplace",
    name: "NFT Marketplace Platform",
    category: "Blockchain & Web3",
    description: "White-label NFT marketplace solution with minting, trading, and royalty distribution capabilities.",
    features: ["NFT minting", "Marketplace trading", "Royalty distribution", "Multi-chain support", "Analytics dashboard"],
    benefits: ["Launch NFT platform in days", "Generate revenue from trading fees", "Build engaged community", "Multi-chain flexibility"],
    pricing: {
      starter: "$99/month",
      professional: "$299/month",
      enterprise: "$799/month"
    },
    status: "available",
    link: "/services/nft-marketplace"
  },
  {
    id: "defi-protocol",
    name: "DeFi Protocol Development",
    category: "Blockchain & Web3",
    description: "Custom DeFi protocol development including lending, staking, and yield farming solutions.",
    features: ["Custom protocol design", "Smart contract development", "Security audit", "Frontend development", "Deployment support"],
    benefits: ["Launch innovative DeFi products", "Generate sustainable yields", "Build loyal user base", "Competitive advantage"],
    pricing: {
      starter: "$15,000",
      professional: "$35,000",
      enterprise: "$75,000+",
      custom: "Project-based pricing"
    },
    status: "available",
    link: "/services/defi-protocol"
  },

  // New Industry-Specific Solutions
  {
    id: "healthcare-compliance",
    name: "Healthcare Compliance Platform",
    category: "Industry Solutions",
    description: "HIPAA-compliant healthcare management system with patient records, scheduling, and billing automation.",
    features: ["HIPAA compliance", "Patient management", "Appointment scheduling", "Billing automation", "Electronic health records"],
    benefits: ["Ensure HIPAA compliance", "Improve patient care", "Reduce administrative costs", "Better patient experience"],
    pricing: {
      starter: "$199/month",
      professional: "$499/month",
      enterprise: "$1,299/month"
    },
    status: "available",
    link: "/services/healthcare-compliance"
  },
  {
    id: "legal-document-automation",
    name: "Legal Document Automation",
    category: "Industry Solutions",
    description: "AI-powered legal document generation and contract management system for law firms and businesses.",
    features: ["Document templates", "AI generation", "Contract management", "E-signature integration", "Compliance checking"],
    benefits: ["Reduce document creation time by 70%", "Ensure legal compliance", "Improve accuracy", "Better client service"],
    pricing: {
      starter: "$79/month",
      professional: "$179/month",
      enterprise: "$399/month"
    },
    status: "available",
    link: "/services/legal-document-automation"
  },
  {
    id: "education-lms",
    name: "Education LMS Platform",
    category: "Industry Solutions",
    description: "Complete learning management system for educational institutions and corporate training programs.",
    features: ["Course creation", "Student management", "Assessment tools", "Progress tracking", "Mobile learning"],
    benefits: ["Deliver engaging learning experiences", "Track student progress", "Reduce administrative overhead", "Improve learning outcomes"],
    pricing: {
      starter: "$49/month",
      professional: "$129/month",
      enterprise: "$299/month"
    },
    status: "available",
    link: "/services/education-lms"
  }
];

const categories = ["All", "Core Platform", "AI Services", "IT Services", "Business Automation", "Blockchain & Web3", "Industry Solutions"];

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredServices = services.filter(service => {
    const matchesCategory = selectedCategory === "All" || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Our Services & Solutions</h1>
        <p className="text-xl opacity-80 max-w-3xl mx-auto">
          Discover our comprehensive suite of micro SAAS services, IT solutions, and AI-powered tools designed to transform your business operations.
        </p>
      </div>

      {/* Contact Information */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div>
            <h3 className="font-semibold">Contact Us</h3>
            <p className="text-sm opacity-90">+1 302 464 0950</p>
          </div>
          <div>
            <h3 className="font-semibold">Email</h3>
            <p className="text-sm opacity-90">kleber@ziontechgroup.com</p>
          </div>
          <div>
            <h3 className="font-semibold">Address</h3>
            <p className="text-sm opacity-90">364 E Main St STE 1008<br />Middletown DE 19709</p>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Search services..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 p-3 bg-zinc-900 border border-white/10 rounded"
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="p-3 bg-zinc-900 border border-white/10 rounded"
        >
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map(service => (
          <div key={service.id} className="border border-white/10 rounded-lg p-6 hover:border-white/20 transition-colors">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-semibold">{service.name}</h3>
              <span className={`px-2 py-1 rounded text-xs ${
                service.status === 'available' ? 'bg-green-600 text-white' :
                service.status === 'beta' ? 'bg-yellow-600 text-white' :
                'bg-gray-600 text-white'
              }`}>
                {service.status === 'available' ? 'Available' :
                 service.status === 'beta' ? 'Beta' : 'Coming Soon'}
              </span>
            </div>
            
            <p className="text-sm opacity-80 mb-4">{service.description}</p>
            
            <div className="mb-4">
              <h4 className="font-semibold mb-2">Key Features:</h4>
              <ul className="text-sm space-y-1">
                {service.features.slice(0, 3).map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    {feature}
                  </li>
                ))}
                {service.features.length > 3 && (
                  <li className="text-xs opacity-60">+{service.features.length - 3} more features</li>
                )}
              </ul>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold mb-2">Benefits:</h4>
              <ul className="text-sm space-y-1">
                {service.benefits.slice(0, 2).map((benefit, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold mb-2">Pricing:</h4>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div>
                  <div className="font-medium">Starter</div>
                  <div className="opacity-80">{service.pricing.starter}</div>
                </div>
                <div>
                  <div className="font-medium">Professional</div>
                  <div className="opacity-80">{service.pricing.professional}</div>
                </div>
                <div>
                  <div className="font-medium">Enterprise</div>
                  <div className="opacity-80">{service.pricing.enterprise}</div>
                </div>
              </div>
              {service.pricing.custom && (
                <div className="text-xs opacity-80 mt-1">{service.pricing.custom}</div>
              )}
            </div>

            <a
              href={service.link}
              className="block w-full text-center py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded transition-colors"
            >
              Learn More
            </a>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center space-y-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8">
        <h2 className="text-2xl font-bold">Ready to Transform Your Business?</h2>
        <p className="opacity-90">Get started with our services today and experience the power of AI-driven innovation.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/multiverse/launch"
            className="px-6 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Launch Your Instance
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="px-6 py-3 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
          >
            Contact Sales
          </a>
        </div>
      </div>
    </div>
  );
}