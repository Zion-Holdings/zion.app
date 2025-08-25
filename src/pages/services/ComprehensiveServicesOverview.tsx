import React from 'react';
import { SEO } from '../../components/SEO';
import { 
  Brain, 
  Target, 
  Users, 
  Scale, 
  Heart, 
  Zap, 
  TrendingUp, 
  Shield, 
  Globe,
  CheckCircle,
  ArrowRight,
  Star,
  Cpu,
  Database,
  Cloud,
  Lock
} from 'lucide-react';

export default function ComprehensiveServicesOverview() {
  const aiServices = [
    {
      id: "ai-business-intelligence",
      title: "AI Business Intelligence",
      description: "Transform data into actionable intelligence with AI-powered analytics and predictive insights",
      price: "$299/month",
      features: ["Predictive Analytics", "Real-time Dashboards", "Natural Language Querying", "Automated Reporting"],
      icon: Brain,
      category: "AI & Analytics",
      rating: 4.9,
      reviewCount: 456,
      path: "/services/ai-business-intelligence",
      color: "from-cyan-500 to-blue-500",
      benefits: ["30% improvement in forecast accuracy", "10x faster insights", "Real-time data streaming", "AI-powered recommendations"]
    },
    {
      id: "ai-marketing-automation",
      title: "AI Marketing Automation",
      description: "Revolutionize marketing with AI-powered automation and personalized campaigns",
      price: "$199/month",
      features: ["AI Targeting", "Content Generation", "Campaign Optimization", "Multi-channel Orchestration"],
      icon: Target,
      category: "Marketing & Sales",
      rating: 4.8,
      reviewCount: 389,
      path: "/services/ai-marketing-automation",
      color: "from-purple-500 to-pink-500",
      benefits: ["3.5x increase in email open rates", "2.8x higher conversion rates", "40% reduction in costs", "5.2x ROI improvement"]
    },
    {
      id: "ai-hr-recruitment",
      title: "AI HR & Recruitment",
      description: "Transform hiring with AI-powered candidate screening and predictive analytics",
      price: "$299/month",
      features: ["AI Screening", "Predictive Analytics", "Video Interviews", "Pipeline Management"],
      icon: Users,
      category: "HR & Recruitment",
      rating: 4.9,
      reviewCount: 234,
      path: "/services/ai-hr-recruitment",
      color: "from-green-500 to-blue-500",
      benefits: ["60% faster time-to-hire", "45% reduction in costs", "3.2x better candidates", "85% retention rates"]
    },
    {
      id: "ai-legal-tech",
      title: "AI Legal Tech",
      description: "Revolutionize legal practice with AI-powered contract analysis and research automation",
      price: "$199/month",
      features: ["Contract Analysis", "Legal Research", "Document Generation", "Compliance Monitoring"],
      icon: Scale,
      category: "Legal & Compliance",
      rating: 4.8,
      reviewCount: 178,
      path: "/services/ai-legal-tech",
      color: "from-indigo-500 to-purple-500",
      benefits: ["90% faster document review", "75% reduction in research time", "60% lower costs", "95% compliance accuracy"]
    },
    {
      id: "ai-healthcare-solutions",
      title: "AI Healthcare Solutions",
      description: "Transform healthcare with AI-powered diagnosis and predictive analytics",
      price: "$399/month",
      features: ["AI Diagnosis", "Medical Imaging", "Predictive Analytics", "Patient Monitoring"],
      icon: Heart,
      category: "Healthcare",
      rating: 4.9,
      reviewCount: 312,
      path: "/services/ai-healthcare-solutions",
      color: "from-red-500 to-pink-500",
      benefits: ["95% diagnostic accuracy", "60% faster diagnosis", "40% cost reduction", "80% patient satisfaction"]
    }
  ];

  const itServices = [
    {
      id: "cybersecurity",
      title: "Cybersecurity Solutions",
      description: "Advanced threat detection and response with AI-powered security intelligence",
      price: "$599/month",
      features: ["Threat Detection", "Incident Response", "Compliance Monitoring", "24/7 Protection"],
      icon: Shield,
      category: "Security",
      rating: 4.9,
      reviewCount: 267,
      path: "/services/cybersecurity",
      color: "from-orange-500 to-red-500"
    },
    {
      id: "cloud-devops",
      title: "Cloud & DevOps",
      description: "Streamlined cloud infrastructure and automated deployment pipelines",
      price: "$499/month",
      features: ["Cloud Migration", "CI/CD Pipelines", "Infrastructure as Code", "Monitoring & Alerting"],
      icon: Cloud,
      category: "Infrastructure",
      rating: 4.8,
      reviewCount: 198,
      path: "/services/cloud-devops",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: "it-infrastructure",
      title: "IT Infrastructure",
      description: "Comprehensive IT infrastructure management and optimization",
      price: "$799/month",
      features: ["Network Management", "Server Administration", "Data Center Operations", "24/7 Support"],
      icon: Cpu,
      category: "Infrastructure",
      rating: 4.7,
      reviewCount: 145,
      path: "/services/it-infrastructure",
      color: "from-gray-500 to-blue-500"
    }
  ];

  const emergingTech = [
    {
      id: "quantum-technology",
      title: "Quantum Technology",
      description: "Next-generation quantum computing and cryptography solutions",
      price: "$2,999/month",
      features: ["Quantum Computing", "Quantum Cryptography", "Quantum Sensors", "Research Collaboration"],
      icon: Zap,
      category: "Emerging Tech",
      rating: 4.9,
      reviewCount: 89,
      path: "/services/quantum-technology",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: "ai-autonomous-systems",
      title: "AI Autonomous Systems",
      description: "Intelligent autonomous systems for industrial and commercial applications",
      price: "$1,999/month",
      features: ["Autonomous Vehicles", "Robotic Process Automation", "Smart Manufacturing", "Predictive Maintenance"],
      icon: Brain,
      category: "Emerging Tech",
      rating: 4.8,
      reviewCount: 156,
      path: "/services/ai-autonomous-systems",
      color: "from-green-500 to-cyan-500"
    }
  ];

  const categories = [
    {
      name: "AI & Analytics",
      description: "Intelligent solutions that transform data into actionable insights",
      icon: Brain,
      count: 5,
      color: "from-cyan-500 to-blue-500"
    },
    {
      name: "Marketing & Sales",
      description: "AI-powered automation and optimization for business growth",
      icon: Target,
      count: 1,
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "HR & Recruitment",
      description: "Intelligent hiring and human resource management solutions",
      icon: Users,
      count: 1,
      color: "from-green-500 to-blue-500"
    },
    {
      name: "Legal & Compliance",
      description: "AI-enhanced legal practice and regulatory compliance tools",
      icon: Scale,
      count: 1,
      color: "from-indigo-500 to-purple-500"
    },
    {
      name: "Healthcare",
      description: "AI-powered medical diagnosis and healthcare optimization",
      icon: Heart,
      count: 1,
      color: "from-red-500 to-pink-500"
    },
    {
      name: "IT Infrastructure",
      description: "Comprehensive technology infrastructure and management",
      icon: Cpu,
      count: 3,
      color: "from-gray-500 to-blue-500"
    },
    {
      name: "Emerging Tech",
      description: "Cutting-edge technologies for future innovation",
      icon: Zap,
      count: 2,
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      <SEO 
        title="Comprehensive Services Overview - Zion Tech Group" 
        description="Explore our complete portfolio of AI-powered micro SAAS solutions, IT services, and emerging technology solutions."
        keywords="AI services, micro SAAS, IT solutions, cybersecurity, cloud computing, quantum technology, healthcare AI"
        canonical="https://ziontechgroup.com/services/comprehensive-overview"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-600/20 to-purple-600/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 py-24 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-cyan-500/20 border border-cyan-500/50 rounded-full text-cyan-400 text-sm font-medium mb-6">
              <Globe className="w-4 h-4 mr-2" />
              Complete Service Portfolio
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Comprehensive Services
            </span>
            <span className="block text-3xl md:text-4xl text-gray-300 mt-4">
              AI-Powered Solutions for Every Business Need
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Discover our complete portfolio of innovative AI-powered micro SAAS solutions, 
            comprehensive IT services, and cutting-edge emerging technologies designed to 
            transform your business and drive growth.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
              <span className="relative z-10">Explore Services</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105">
              Schedule Consultation
            </button>
          </div>

          {/* Service Counts */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">15+</div>
              <div className="text-gray-400 text-sm">Total Services</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">5</div>
              <div className="text-gray-400 text-sm">AI Solutions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">7</div>
              <div className="text-gray-400 text-sm">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-gray-400 text-sm">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Service Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive range of services organized by category and specialization.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {category.name}
                </h3>
                <p className="text-gray-300 mb-4">
                  {category.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-cyan-400 font-semibold">{category.count} Services</span>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              AI-Powered Micro SAAS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your business with our cutting-edge AI solutions designed for rapid deployment and maximum impact.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div key={index} className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white text-sm ml-1">{service.rating}</span>
                    <span className="text-gray-400 text-sm ml-1">({service.reviewCount})</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {service.description}
                </p>
                
                <div className="mb-4">
                  <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}</div>
                  <div className="text-sm text-gray-400">{service.category}</div>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-cyan-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {service.benefits && (
                  <div className="mb-6 p-4 bg-gray-700/30 rounded-lg">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-xs text-gray-300">• {benefit}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <button className="w-full py-3 px-6 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-300">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Services Section */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              IT Infrastructure & Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive IT solutions to build, secure, and optimize your technology infrastructure.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white text-sm ml-1">{service.rating}</span>
                    <span className="text-gray-400 text-sm ml-1">({service.reviewCount})</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {service.description}
                </p>
                
                <div className="mb-4">
                  <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}</div>
                  <div className="text-sm text-gray-400">{service.category}</div>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-cyan-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full py-3 px-6 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-300">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emerging Tech Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Emerging Technology Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay ahead of the curve with our cutting-edge emerging technology solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {emergingTech.map((service, index) => (
              <div key={index} className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white text-sm ml-1">{service.rating}</span>
                    <span className="text-gray-400 text-sm ml-1">({service.reviewCount})</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {service.description}
                </p>
                
                <div className="mb-4">
                  <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}</div>
                  <div className="text-sm text-gray-400">{service.category}</div>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-cyan-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full py-3 px-6 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-300">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/50 via-blue-900/50 to-purple-900/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Choose from our comprehensive portfolio of AI-powered solutions and IT services 
            to accelerate your digital transformation journey.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
              <span className="relative z-10">Start Free Trial</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold rounded-lg transition-all duration-300 hover:scale-105">
              Schedule Consultation
            </button>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm">
              Need enterprise solutions? <a href="/contact" className="text-cyan-400 hover:text-cyan-300 underline">Contact our sales team</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}