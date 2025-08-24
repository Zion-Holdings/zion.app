
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Brain,
  Zap,
  Shield,
  Cloud,
  Building,
  ArrowRight,
  Star,
  Users,
  Server,
  BarChart3,
  Star as StarIcon
} from 'lucide-react';

const ServicesPage = () => {
  const serviceCategories = [
    {
      title: "AI & Autonomous Systems",
      description: "Revolutionary AI systems that operate independently",
      icon: Brain,
      color: "from-violet-500 to-purple-600",
      services: [
        { name: "AI Legal Research Assistant", href: "/ai-autonomous-legal-research-assistant" },
        { name: "AI Financial Risk Manager", href: "/ai-autonomous-financial-risk-manager" },
        { name: "AI Healthcare Diagnostics Pro", href: "/ai-autonomous-healthcare-diagnostics-pro" },
        { name: "AI Supply Chain Optimizer", href: "/ai-autonomous-supply-chain-optimizer" },
        { name: "AI Cybersecurity Sentinel", href: "/ai-autonomous-cybersecurity-sentinel" }
      ]
    },
    {
      title: "Quantum Technology",
      description: "Next-generation quantum computing solutions",
      icon: Brain,
      color: "from-blue-500 to-indigo-600",
      services: [
        { name: "Quantum Edge Computing Platform", href: "/quantum-edge-computing-platform" },
        { name: "Neuromorphic Computing Infrastructure", href: "/neuromorphic-computing-infrastructure" },
        { name: "Holographic Data Center Platform", href: "/holographic-data-center-platform" },
        { name: "Bio-Computing Infrastructure", href: "/bio-computing-infrastructure" },
        { name: "Quantum Internet Backbone", href: "/quantum-internet-backbone" }
      ]
    },
    {
      title: "IT Infrastructure",
      description: "Cutting-edge infrastructure solutions",
      icon: Server,
      color: "from-green-500 to-teal-600",
      services: [
        { name: "Cloud Migration Services", href: "/cloud-migration" },
        { name: "DevOps Automation", href: "/devops-automation" },
        { name: "Edge Computing Solutions", href: "/edge-computing" },
        { name: "Data Center Optimization", href: "/data-center-optimization" },
        { name: "5G Private Network Solutions", href: "/5g-private-network-solutions" }
      ]
    },
    {
      title: "Micro SAAS Solutions",
      description: "Innovative software-as-a-service solutions",
      icon: Building,
      color: "from-orange-500 to-red-600",
      services: [
        { name: "AI Content Factory Pro", href: "/ai-autonomous-content-factory-pro" },
        { name: "Quantum CRM Intelligence Suite", href: "/quantum-crm-intelligence-suite" },
        { name: "AI HR Platform", href: "/ai-autonomous-hr-platform" },
        { name: "Quantum Financial Intelligence Platform", href: "/quantum-financial-intelligence-platform" },
        { name: "AI Education Platform", href: "/ai-autonomous-education-platform" }
      ]
    },
    {
      title: "Cybersecurity",
      description: "Advanced security and protection solutions",
      icon: Shield,
      color: "from-red-500 to-pink-600",
      services: [
        { name: "Zero Trust Network Architecture", href: "/zero-trust-network-architecture" },
        { name: "Threat Intelligence Platform", href: "/threat-intelligence-platform" },
        { name: "Compliance Automation", href: "/compliance-automation" },
        { name: "SOC2 Compliance Automation", href: "/soc2-compliance-automation" },
        { name: "Vulnerability Assessment & Penetration Testing", href: "/vulnerability-assessment-penetration-testing" }
      ]
    },
    {
      title: "Industry Solutions",
      description: "Industry-specific technology solutions",
      icon: BarChart3,
      color: "from-yellow-500 to-orange-600",
      services: [
        { name: "Healthcare AI Solutions", href: "/healthcare-ai-solutions" },
        { name: "Financial Technology Solutions", href: "/financial-solutions" },
        { name: "Manufacturing AI Solutions", href: "/manufacturing-ai-solutions" },
        { name: "Retail Technology Solutions", href: "/retail-technology-solutions" },
        { name: "Energy & Utilities Solutions", href: "/energy-utilities-solutions" }
      ]
    }
  ];

  const featuredServices = [
    {
      title: "Quantum Edge Computing Platform",
      description: "Revolutionary edge computing platform that leverages quantum computing principles to deliver unprecedented performance and efficiency for distributed applications.",
      price: "$1,299/month",
      href: "/quantum-edge-computing-platform",
      icon: Brain,
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "AI Autonomous Legal Research Assistant",
      description: "Advanced AI-powered legal research tool that autonomously analyzes case law, statutes, and legal precedents to provide comprehensive legal insights.",
      price: "$899/month",
      href: "/ai-autonomous-legal-research-assistant",
      icon: Brain,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Zero Trust Network Architecture",
      description: "Comprehensive cybersecurity solution implementing zero-trust principles across your entire network infrastructure for maximum security.",
      price: "$2,199/month",
      href: "/zero-trust-network-architecture",
      icon: Shield,
      color: "from-red-500 to-orange-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Pioneering the future of technology with revolutionary AI autonomous systems, 
            quantum computing, and autonomous solutions that transform businesses worldwide.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="btn-primary text-lg px-8 py-4 flex items-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/contact" 
              className="btn-secondary text-lg px-8 py-4"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Featured Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our most innovative and transformative solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <div key={index} className="group bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <p className="text-gray-300 mb-4 line-clamp-3">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-cyan-400 font-semibold">{service.price}</span>
                  <Link 
                    to={service.href} 
                    className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center space-x-1"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Service Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive range of technology solutions
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <div key={index} className="group bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors duration-300">
                      {category.title}
                    </h3>
                    <p className="text-sm text-gray-400">{category.description}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {category.services.map((service, serviceIndex) => (
                    <Link 
                      key={serviceIndex}
                      to={service.href} 
                      className="flex items-center space-x-2 text-sm text-gray-300 hover:text-purple-400 transition-colors duration-300 group"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span>{service.name}</span>
                    </Link>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-gray-700/50">
                  <Link 
                    to={`/services/${category.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '-')}`}
                    className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors duration-300 text-sm font-medium"
                  >
                    <span>View All {category.title}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Let's discuss how our innovative solutions can drive your success and position you at the forefront of technological advancement.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="btn-primary text-lg px-8 py-4"
            >
              Get in Touch
            </Link>
            <Link 
              to="/get-started" 
              className="btn-secondary text-lg px-8 py-4"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
