import React from 'react';
import { SEO } from '../../components/SEO';
import { 
  Brain, 
  Atom, 
  Link, 
  Wifi, 
  Shield, 
  Cpu, 
  Rocket, 
  TrendingUp, 
  Users, 
  Globe, 
  Building, 
  Zap,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Target,
  Lightbulb,
  Lock,
  Database,
  Network,
  Cloud,
  BarChart3,
  Workflow,
  Flask,
  Wallet,
  Server,
  Monitor,
  Activity,
  Gauge,
  Satellite,
  Microscope,
  Coins,
  ChartBar,
  Smartphone
} from 'lucide-react';

export default function ComprehensiveServicesOverview() {
  const serviceCategories = [
    {
      title: "AI & Machine Learning",
      description: "Revolutionary artificial intelligence solutions that transform business operations",
      color: "from-cyan-500 to-blue-600",
      services: [
        {
          name: "AI Workflow Automation",
          description: "Transform business operations with AI-powered workflow automation. Achieve 80% time reduction and 60% cost savings.",
          price: "$2,500/month",
          marketPrice: "$4,000/month",
          savings: "38% savings",
          features: ["Process Automation", "Smart Document Processing", "Predictive Analytics", "Real-time Insights"],
          icon: Workflow,
          path: "/services/ai-workflow-automation",
          rating: 4.9,
          reviewCount: 456
        },
        {
          name: "AI-Powered CRM",
          description: "Intelligent customer relationship management with predictive analytics and automated insights",
          price: "$1,500/month",
          marketPrice: "$2,800/month",
          savings: "46% savings",
          features: ["Predictive Analytics", "Automated Follow-ups", "Smart Lead Scoring", "Real-time Insights"],
          icon: Brain,
          path: "/services/ai-powered-crm",
          rating: 4.9,
          reviewCount: 342
        },
        {
          name: "AI Business Intelligence",
          description: "Advanced analytics and business intelligence powered by artificial intelligence",
          price: "$2,200/month",
          marketPrice: "$4,200/month",
          savings: "48% savings",
          features: ["Predictive Analytics", "Data Visualization", "Real-time Dashboards", "Automated Reporting"],
          icon: BarChart3,
          path: "/services/ai-business-intelligence",
          rating: 4.8,
          reviewCount: 289
        }
      ]
    },
    {
      title: "Emerging Technologies",
      description: "Cutting-edge solutions that define the future of technology",
      color: "from-purple-500 to-indigo-600",
      services: [
        {
          name: "Quantum Computing Solutions",
          description: "Revolutionary quantum computing for drug discovery, financial modeling, and AI acceleration with 1000x speedup.",
          price: "$4,200/month",
          marketPrice: "$7,200/month",
          savings: "42% savings",
          features: ["Quantum Cryptography", "Quantum ML", "Quantum Optimization", "Quantum Simulation"],
          icon: Atom,
          path: "/services/quantum-computing-solutions",
          rating: 4.8,
          reviewCount: 234
        },
        {
          name: "Blockchain & Web3 Solutions",
          description: "Build the future of decentralized applications with DeFi, NFTs, DAOs, and cross-chain interoperability.",
          price: "$6,200/month",
          marketPrice: "$12,000/month",
          savings: "48% savings",
          features: ["DeFi Platforms", "NFT Marketplaces", "Smart Contracts", "Cross-chain Bridges"],
          icon: Link,
          path: "/services/blockchain-web3-solutions",
          rating: 4.7,
          reviewCount: 189
        },
        {
          name: "Edge Computing & IoT",
          description: "Real-time processing and instant decision-making with our global edge infrastructure. Achieve 10x faster performance.",
          price: "$3,200/month",
          marketPrice: "$5,800/month",
          savings: "45% savings",
          features: ["Edge AI Processing", "IoT Management", "5G Optimization", "Global Edge Network"],
          icon: Wifi,
          path: "/services/edge-computing-iot-solutions",
          rating: 4.8,
          reviewCount: 312
        }
      ]
    },
    {
      title: "Cybersecurity & Infrastructure",
      description: "Enterprise-grade security and infrastructure solutions",
      color: "from-red-500 to-pink-600",
      services: [
        {
          name: "Cybersecurity Platform",
          description: "Comprehensive threat detection and response system with AI-powered security intelligence",
          price: "$1,800/month",
          marketPrice: "$3,200/month",
          savings: "44% savings",
          features: ["Threat Detection", "Incident Response", "Compliance Monitoring", "24/7 Protection"],
          icon: Shield,
          path: "/services/cybersecurity-platform",
          rating: 4.8,
          reviewCount: 189
        },
        {
          name: "IT Infrastructure",
          description: "Scalable and secure IT infrastructure solutions for modern businesses",
          price: "$2,500/month",
          marketPrice: "$4,500/month",
          savings: "44% savings",
          features: ["Cloud Migration", "Network Security", "Data Backup", "24/7 Support"],
          icon: Server,
          path: "/services/it-infrastructure",
          rating: 4.7,
          reviewCount: 267
        },
        {
          name: "Cloud Cost Optimization",
          description: "AI-driven cloud cost management that reduces spending by 30-50% automatically",
          price: "$350/month",
          marketPrice: "$650/month",
          savings: "46% savings",
          features: ["Cost Analysis", "Automated Optimization", "Resource Scheduling", "Budget Management"],
          icon: Cloud,
          path: "/services/cloud-optimization",
          rating: 4.7,
          reviewCount: 234
        }
      ]
    },
    {
      title: "Industry Solutions",
      description: "Tailored solutions for specific industry requirements",
      color: "from-green-500 to-emerald-600",
      services: [
        {
          name: "Healthcare Solutions",
          description: "HIPAA-compliant healthcare technology solutions with AI-powered diagnostics",
          price: "$4,500/month",
          marketPrice: "$8,200/month",
          savings: "45% savings",
          features: ["Patient Management", "AI Diagnostics", "Compliance Monitoring", "Telemedicine"],
          icon: Building,
          path: "/solutions/healthcare",
          rating: 4.9,
          reviewCount: 156
        },
        {
          name: "Financial Services",
          description: "Regulatory-compliant financial technology solutions with advanced security",
          price: "$5,200/month",
          marketPrice: "$9,800/month",
          savings: "47% savings",
          features: ["Risk Management", "Fraud Detection", "Compliance", "Real-time Analytics"],
          icon: ChartBar,
          path: "/solutions/financial",
          rating: 4.8,
          reviewCount: 198
        },
        {
          name: "Manufacturing Solutions",
          description: "Smart manufacturing solutions with IoT, AI, and predictive analytics",
          price: "$6,800/month",
          marketPrice: "$12,500/month",
          savings: "46% savings",
          features: ["Predictive Maintenance", "Quality Control", "Supply Chain", "Energy Optimization"],
          icon: Gauge,
          path: "/solutions/manufacturing",
          rating: 4.7,
          reviewCount: 145
        }
      ]
    }
  ];

  const benefits = [
    {
      title: "Cost Savings",
      description: "Average 40-50% cost reduction compared to market rates",
      icon: TrendingUp,
      metric: "40-50%"
    },
    {
      title: "Time to Market",
      description: "Rapid deployment with our proven methodologies",
      icon: Clock,
      metric: "2-4 weeks"
    },
    {
      title: "Customer Satisfaction",
      description: "Consistently high ratings across all services",
      icon: Star,
      metric: "4.8/5.0"
    },
    {
      title: "Global Support",
      description: "24/7 support across all time zones",
      icon: Globe,
      metric: "24/7"
    }
  ];

  const technologies = [
    { name: "AI/ML", icon: Brain, description: "Advanced machine learning and AI algorithms" },
    { name: "Quantum", icon: Atom, description: "Quantum computing and cryptography" },
    { name: "Blockchain", icon: Link, description: "Web3 and decentralized technologies" },
    { name: "Edge", icon: Wifi, description: "Edge computing and IoT solutions" },
    { name: "Cloud", icon: Cloud, description: "Multi-cloud and hybrid solutions" },
    { name: "Security", icon: Shield, description: "Enterprise-grade security" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_70%,rgba(34,221,210,0.1),transparent_50%)]"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,rgba(139,92,246,0.1),transparent_50%)]"></div>
        <div className="absolute bottom-0 left-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      </div>

      <SEO 
        title="Comprehensive Services Overview - Zion Tech Group" 
        description="Explore our complete portfolio of innovative technology services including AI, quantum computing, blockchain, edge computing, and more. Transform your business with cutting-edge solutions."
        keywords="technology services, AI solutions, quantum computing, blockchain, edge computing, cybersecurity, IT infrastructure, industry solutions"
        canonical="https://ziontechgroup.com/services/comprehensive-services-overview"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-gray-900/80 to-blue-900/80"></div>
        <div className="relative z-10 container mx-auto px-4 py-24 text-center">
          <div className="mb-6">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium backdrop-blur-sm">
              <Rocket className="w-4 h-4 mr-2" />
              Complete Service Portfolio
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Comprehensive
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Services Overview
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Discover our complete portfolio of innovative technology services designed to transform your business. 
            From AI and quantum computing to blockchain and edge computing, we provide cutting-edge solutions 
            that drive growth and innovation.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
              <span className="relative z-10">Explore Services</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm">
              Schedule Consultation
            </button>
          </div>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{benefit.metric}</div>
                <div className="text-sm text-gray-400">{benefit.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Service Portfolio
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive range of technology services designed to address every aspect of 
              your digital transformation journey.
            </p>
          </div>
          
          {serviceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-20">
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {category.title}
                </h3>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                  {category.description}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                        {service.name}
                      </h4>
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      
                      {/* Rating */}
                      <div className="flex items-center mb-4">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} />
                          ))}
                        </div>
                        <span className="text-sm text-gray-400 ml-2">{service.rating}</span>
                        <span className="text-sm text-gray-400 ml-2">({service.reviewCount} reviews)</span>
                      </div>
                      
                      {/* Pricing */}
                      <div className="mb-6">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                          <span className="text-sm text-gray-400 line-through">{service.marketPrice}</span>
                        </div>
                        <div className="text-sm text-green-400 font-medium">{service.savings}</div>
                      </div>
                      
                      {/* Features */}
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      
                      <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-blue-900/50 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Cutting-Edge Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We leverage the latest technologies and frameworks to deliver innovative solutions 
              that keep your business ahead of the curve.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <tech.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3>
                <p className="text-sm text-gray-300">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/50 via-blue-900/50 to-purple-900/50 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Choose from our comprehensive portfolio of innovative technology services and start your 
            digital transformation journey today. Our expert team is ready to help you succeed.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm">
              Schedule Consultation
            </button>
          </div>
          <div className="mt-8 text-sm text-gray-400">
            <p>Contact us: <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 302 464 0950</a></p>
            <p>Email: <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">kleber@ziontechgroup.com</a></p>
            <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </section>
    </div>
  );
}