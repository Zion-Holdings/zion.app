import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Atom, 
  Rocket, 
  Shield, 
  Cpu, 
  Database, 
  Cloud, 
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  Zap,
  Network,
  Lock,
  TrendingUp,
  Users,
  Building,
  Car,
  Heart,
  DollarSign,
  GraduationCap,
  Factory
} from 'lucide-react';
import Link from 'next/link';

export default function ComprehensiveServicesShowcase2025() {
  const serviceCategories = [
    {
      title: "AI & Machine Learning",
      description: "Cutting-edge artificial intelligence and machine learning solutions",
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      color: "from-cyan-500/20 to-blue-500/20",
      borderColor: "border-cyan-500/30",
      services: [
        { name: "AI Automation", href: "/ai-automation-services", description: "Intelligent process automation" },
        { name: "Machine Learning", href: "/mlops-starter", description: "Custom ML models and algorithms" },
        { name: "Natural Language Processing", href: "/llm-gateway", description: "Advanced text analysis" },
        { name: "Computer Vision", href: "/computer-vision-solutions", description: "Image and video analysis" },
        { name: "AI Ethics & Governance", href: "/ai-ethics-automation", description: "Responsible AI development" }
      ]
    },
    {
      title: "Quantum Technology",
      description: "Next-generation quantum computing and technology solutions",
      icon: <Atom className="w-8 h-8 text-purple-400" />,
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30",
      services: [
        { name: "Quantum Computing", href: "/quantum-computing-platform", description: "Advanced quantum platforms" },
        { name: "Quantum Cybersecurity", href: "/quantum-cybersecurity", description: "Quantum-resistant security" },
        { name: "Quantum AI", href: "/quantum-ai-cognitive", description: "Hybrid quantum-classical AI" },
        { name: "Quantum Internet", href: "/quantum-internet-security-platform", description: "Secure quantum networks" },
        { name: "Quantum Financial", href: "/quantum-financial-trading", description: "Financial quantum solutions" }
      ]
    },
    {
      title: "Space Technology",
      description: "Innovative space exploration and satellite technology solutions",
      icon: <Rocket className="w-8 h-8 text-orange-400" />,
      color: "from-orange-500/20 to-red-500/20",
      borderColor: "border-orange-500/30",
      services: [
        { name: "Space Tech Platform", href: "/space-technology", description: "Space technology solutions" },
        { name: "AI Space Platform", href: "/space-technology-ai-platform", description: "AI-powered space tech" },
        { name: "Resource Mining", href: "/space-resource-mining-platform", description: "Space resource extraction" },
        { name: "Satellite Solutions", href: "/satellite-technology", description: "Advanced satellite systems" },
        { name: "Space Communications", href: "/space-communications", description: "Interplanetary communication" }
      ]
    },
    {
      title: "IT & Infrastructure",
      description: "Enterprise IT solutions and infrastructure management",
      icon: <Cpu className="w-8 h-8 text-green-400" />,
      color: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30",
      services: [
        { name: "IT Services", href: "/it-services", description: "Comprehensive IT solutions" },
        { name: "Cloud Infrastructure", href: "/cloud-infrastructure", description: "Scalable cloud platforms" },
        { name: "Cybersecurity", href: "/security", description: "Advanced security solutions" },
        { name: "DevOps & Automation", href: "/devops-automation", description: "Development automation" },
        { name: "Data Management", href: "/data-management", description: "Enterprise data solutions" }
      ]
    },
    {
      title: "Industry Solutions",
      description: "Specialized solutions for specific industry verticals",
      icon: <Building className="w-8 h-8 text-indigo-400" />,
      color: "from-indigo-500/20 to-purple-500/20",
      borderColor: "border-indigo-500/30",
      services: [
        { name: "Healthcare", href: "/healthcare-solutions", description: "Healthcare technology solutions" },
        { name: "Finance", href: "/financial-solutions", description: "Financial technology solutions" },
        { name: "Manufacturing", href: "/manufacturing-ai-solutions", description: "Manufacturing automation" },
        { name: "Retail", href: "/retail-technology-solutions", description: "Retail technology solutions" },
        { name: "Education", href: "/education-technology-solutions", description: "Educational technology" }
      ]
    },
    {
      title: "Specialized Services",
      description: "Advanced specialized technology services and platforms",
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      color: "from-yellow-500/20 to-orange-500/20",
      borderColor: "border-yellow-500/30",
      services: [
        { name: "Micro-SaaS", href: "/micro-saas", description: "Micro software-as-a-service" },
        { name: "API Solutions", href: "/api-solutions", description: "Advanced API platforms" },
        { name: "Edge Computing", href: "/edge-computing-orchestration", description: "Edge computing solutions" },
        { name: "Blockchain", href: "/blockchain-solutions", description: "Blockchain technology" },
        { name: "IoT Platforms", href: "/iot-platforms", description: "Internet of Things solutions" }
      ]
    }
  ];

  const featuredServices = [
    {
      name: "AI-Powered Business Automation",
      description: "Transform your operations with intelligent automation",
      href: "/ai-automation-services",
      icon: <Brain className="w-6 h-6" />,
      category: "AI & ML"
    },
    {
      name: "Quantum Cybersecurity Platform",
      description: "Future-proof security with quantum-resistant cryptography",
      href: "/quantum-cybersecurity",
      icon: <Shield className="w-6 h-6" />,
      category: "Quantum"
    },
    {
      name: "Space Resource Mining",
      description: "Pioneering space exploration and resource extraction",
      href: "/space-resource-mining-platform",
      icon: <Rocket className="w-6 h-6" />,
      category: "Space Tech"
    },
    {
      name: "Enterprise IT Solutions",
      description: "Comprehensive enterprise technology infrastructure",
      href: "/it-services",
      icon: <Cpu className="w-6 h-6" />,
      category: "IT & Infrastructure"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-blue-500/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mb-6">
              Comprehensive Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover our complete portfolio of cutting-edge technology solutions. From AI and quantum computing 
              to space technology and enterprise IT, we deliver innovation across every sector.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Get Started
              </Link>
              <Link href="/pricing" className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our most popular and innovative solutions that are transforming industries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-cyan-400">{service.icon}</div>
                  <span className="text-xs text-cyan-400 font-medium">{service.category}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{service.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                <Link 
                  href={service.href}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium text-sm group-hover:translate-x-1 transition-all duration-300"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Service Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive range of technology solutions organized by category
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-gradient-to-br ${category.color} border ${category.borderColor} rounded-xl p-6`}
              >
                <div className="flex items-center gap-3 mb-4">
                  {category.icon}
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{category.description}</p>
                <div className="space-y-3">
                  {category.services.map((service, idx) => (
                    <Link
                      key={idx}
                      href={service.href}
                      className="block p-3 bg-black/20 rounded-lg hover:bg-black/40 transition-all duration-300 group"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-white group-hover:text-cyan-300 transition-colors">
                            {service.name}
                          </h4>
                          <p className="text-sm text-gray-400">{service.description}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our comprehensive technology solutions can drive innovation and growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Schedule a Consultation
              </Link>
              <Link href="/case-studies" className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                View Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}