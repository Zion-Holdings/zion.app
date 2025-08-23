import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Rocket, Brain, Atom, Shield, Zap, Target, Users, Star, 
  TrendingUp, Award, Clock, Heart, Lightbulb, Globe, Cpu,
  Database, Lock, Cloud, Settings, Eye, BookOpen, CheckCircle
} from 'lucide-react';

const ComprehensiveServicesShowcase2025: React.FC = () => {
  const serviceCategories = [
    {
      title: "AI & Consciousness",
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      color: "from-purple-500/20 to-purple-600/20",
      borderColor: "border-purple-400/30",
      services: [
        { name: "AI Consciousness Evolution", href: "/ai-consciousness-evolution-2029", featured: true },
        { name: "AI Emotional Intelligence", href: "/ai-emotional-intelligence-training", featured: true },
        { name: "AI Autonomous Research", href: "/ai-autonomous-research-assistant" },
        { name: "AI Predictive Maintenance", href: "/ai-predictive-maintenance-platform" },
        { name: "AI Content Personalization", href: "/ai-content-personalization-engine" },
        { name: "AI Autonomous Ecosystem", href: "/ai-autonomous-ecosystem-manager" }
      ]
    },
    {
      title: "Quantum Technology",
      icon: <Atom className="w-8 h-8 text-blue-400" />,
      color: "from-blue-500/20 to-blue-600/20",
      borderColor: "border-blue-400/30",
      services: [
        { name: "Quantum Neural Networks", href: "/quantum-neural-network-platform", featured: true },
        { name: "Quantum Financial Trading", href: "/quantum-financial-trading", featured: true },
        { name: "Quantum Materials Discovery", href: "/quantum-materials-discovery-platform" },
        { name: "Quantum Bio-Computing", href: "/quantum-bio-computing-platform" },
        { name: "Quantum Internet Security", href: "/quantum-internet-security-platform" },
        { name: "Quantum Cloud Infrastructure", href: "/quantum-cloud-infrastructure-platform" }
      ]
    },
    {
      title: "Space Technology",
      icon: <Rocket className="w-8 h-8 text-cyan-400" />,
      color: "from-cyan-500/20 to-cyan-600/20",
      borderColor: "border-cyan-400/30",
      services: [
        { name: "Space Resource Mining", href: "/space-resource-mining-platform", featured: true },
        { name: "AI-Powered Space Technology", href: "/ai-powered-space-technology" },
        { name: "Space Technology AI Platform", href: "/space-technology-ai-platform" },
        { name: "Space Technology Solutions", href: "/space-technology" }
      ]
    },
    {
      title: "Enterprise IT Solutions",
      icon: <Shield className="w-8 h-8 text-green-400" />,
      color: "from-green-500/20 to-green-600/20",
      borderColor: "border-green-400/30",
      services: [
        { name: "Quantum-Secure Cloud", href: "/quantum-secure-cloud-infrastructure", featured: true },
        { name: "Autonomous IT Operations", href: "/autonomous-it-operations-center", featured: true },
        { name: "Edge Computing Orchestration", href: "/edge-computing-orchestration-platform" },
        { name: "Blockchain Infrastructure", href: "/blockchain-infrastructure-platform" },
        { name: "AI-Powered DevOps", href: "/ai-powered-devops-platform" },
        { name: "Zero Trust Security", href: "/zero-trust-security-platform" }
      ]
    },
    {
      title: "Micro SAAS Solutions",
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      color: "from-yellow-500/20 to-yellow-600/20",
      borderColor: "border-yellow-400/30",
      services: [
        { name: "AI Customer Success", href: "/ai-customer-success-platform", featured: true },
        { name: "Supply Chain Optimization", href: "/intelligent-supply-chain-optimization", featured: true },
        { name: "HR Analytics Platform", href: "/intelligent-hr-analytics-platform" },
        { name: "Sales Intelligence AI", href: "/ai-sales-intelligence-platform" },
        { name: "Content Automation", href: "/intelligent-content-automation-platform" },
        { name: "Smart CRM Suite", href: "/smart-crm-intelligence-suite" }
      ]
    },
    {
      title: "Industry Solutions",
      icon: <Target className="w-8 h-8 text-pink-400" />,
      color: "from-pink-500/20 to-pink-600/20",
      borderColor: "border-pink-400/30",
      services: [
        { name: "Healthcare Solutions", href: "/healthcare-solutions", featured: true },
        { name: "Financial Solutions", href: "/financial-solutions", featured: true },
        { name: "Government Technology", href: "/government-technology-solutions" },
        { name: "Retail Technology", href: "/retail-technology-solutions" },
        { name: "Manufacturing AI", href: "/manufacturing-ai-solutions" },
        { name: "Education Technology", href: "/education-technology-solutions" }
      ]
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900/20 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full">
                  <Star className="w-12 h-12 text-yellow-400" />
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
                Comprehensive Services Showcase 2025
              </h1>
              <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-8">
                Discover our complete portfolio of cutting-edge technology solutions, 
                from AI consciousness evolution to quantum computing and space technology.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105">
                  Explore All Services
                </button>
                <button className="px-8 py-4 border border-purple-400/30 text-purple-400 font-semibold rounded-lg hover:bg-purple-400/10 transition-all duration-300">
                  View Pricing
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Categories */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Complete Service Portfolio
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Our comprehensive suite of services covers every aspect of modern technology, 
                from artificial intelligence to quantum computing and beyond.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {serviceCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`p-8 bg-gradient-to-br ${category.color} backdrop-blur-sm rounded-xl border ${category.borderColor} hover:border-opacity-50 transition-all duration-300`}
                >
                  <div className="flex items-center mb-6">
                    {category.icon}
                    <h3 className="text-2xl font-bold text-white ml-3">{category.title}</h3>
                  </div>
                  <div className="space-y-3">
                    {category.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex items-center justify-between">
                        <a
                          href={service.href}
                          className="text-white/80 hover:text-white transition-colors flex items-center"
                        >
                          {service.featured && (
                            <Star className="w-4 h-4 text-yellow-400 mr-2" />
                          )}
                          {service.name}
                        </a>
                        {service.featured && (
                          <span className="text-xs bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-2 py-1 rounded-full">
                            Featured
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-white/70 mb-8">
                Choose from our comprehensive portfolio of cutting-edge solutions 
                and take your business to the next level of technological innovation.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105">
                  Get Started Today
                </button>
                <button className="px-8 py-4 border border-purple-400/30 text-purple-400 font-semibold rounded-lg hover:bg-purple-400/10 transition-all duration-300">
                  Schedule Consultation
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ComprehensiveServicesShowcase2025;