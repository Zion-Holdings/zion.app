import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Brain, Zap, Bot, Shield, BarChart3, 
  MessageSquare, Eye, Cpu, Network, Globe,
  ArrowRight, Star, CheckCircle
} from 'lucide-react';

const aiServices = [
  {
    category: 'AI Consciousness & Intelligence',
    services: [
      {
        name: 'AI Consciousness Evolution 2029',
        description: 'Advanced AI consciousness development platform',
        href: '/ai-consciousness-evolution-2029',
        icon: <Brain className="w-6 h-6 text-cyan-400" />,
        featured: true
      },
      {
        name: 'AI Emotional Intelligence Training',
        description: 'Emotion-aware AI systems and training',
        href: '/ai-emotional-intelligence-training',
        icon: <MessageSquare className="w-6 h-6 text-purple-400" />
      },
      {
        name: 'AI Autonomous Business Operations',
        description: 'Fully autonomous business process automation',
        href: '/autonomous-business-operations-platform',
        icon: <Bot className="w-6 h-6 text-green-400" />
      }
    ]
  },
  {
    category: 'AI Research & Development',
    services: [
      {
        name: 'AI Autonomous Research Assistant',
        description: 'Self-directed AI research and analysis',
        href: '/ai-autonomous-research-assistant',
        icon: <Eye className="w-6 h-6 text-blue-400" />
      },
      {
        name: 'AI Content Personalization Engine',
        description: 'Dynamic content adaptation and personalization',
        href: '/ai-content-personalization-engine',
        icon: <Globe className="w-6 h-6 text-yellow-400" />
      },
      {
        name: 'AI Ethics & Governance Framework',
        description: 'Ethical AI development and governance',
        href: '/ai-ethics-governance-framework',
        icon: <Shield className="w-6 h-6 text-red-400" />
      }
    ]
  },
  {
    category: 'AI Business Solutions',
    services: [
      {
        name: 'AI Customer Success Platform',
        description: 'Intelligent customer success automation',
        href: '/ai-customer-success-platform',
        icon: <Star className="w-6 h-6 text-pink-400" />
      },
      {
        name: 'AI Sales Intelligence Platform',
        description: 'Advanced sales intelligence and automation',
        href: '/ai-sales-intelligence-platform',
        icon: <BarChart3 className="w-6 h-6 text-emerald-400" />
      },
      {
        name: 'AI Predictive Maintenance Platform',
        description: 'Predictive maintenance and asset management',
        href: '/ai-predictive-maintenance-platform',
        icon: <Cpu className="w-6 h-6 text-orange-400" />
      }
    ]
  },
  {
    category: 'AI Infrastructure & Operations',
    services: [
      {
        name: 'AI Autonomous Ecosystem Manager',
        description: 'Ecosystem-wide AI management and optimization',
        href: '/ai-autonomous-ecosystem-manager',
        icon: <Network className="w-6 h-6 text-indigo-400" />
      },
      {
        name: 'AI-Powered DevOps Platform',
        description: 'Intelligent DevOps automation and optimization',
        href: '/ai-powered-devops-platform',
        icon: <Zap className="w-6 h-6 text-cyan-400" />
      },
      {
        name: 'AI-Powered IT Asset Management',
        description: 'Intelligent IT asset discovery and management',
        href: '/ai-powered-it-asset-management',
        icon: <CheckCircle className="w-6 h-6 text-green-400" />
      }
    ]
  }
];

const features = [
  'Advanced Machine Learning Models',
  'Real-time AI Processing',
  'Scalable AI Infrastructure',
  'Custom AI Model Training',
  'AI Ethics & Compliance',
  'Continuous Learning Systems',
  'Multi-modal AI Capabilities',
  'Enterprise AI Security'
];

export default function AIServices() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/20 to-purple-900/20"></div>
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              AI Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Revolutionary artificial intelligence solutions that transform businesses and drive innovation across industries
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Link>
              <Link 
                href="/services"
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-full font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Why Choose Our AI Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge AI technology combined with enterprise-grade reliability and ethical development practices
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services by Category */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              AI Services Portfolio
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI solutions designed for modern enterprises and innovative organizations
            </p>
          </motion.div>

          <div className="space-y-16">
            {aiServices.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              >
                <h3 className="text-3xl font-bold mb-8 text-center text-white">
                  {category.category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: categoryIndex * 0.2 + serviceIndex * 0.1 }}
                      className={`bg-gray-800/50 p-6 rounded-2xl border transition-all duration-300 hover:transform hover:scale-105 ${
                        service.featured 
                          ? 'border-cyan-500/50 bg-gradient-to-br from-gray-800/50 to-cyan-900/20' 
                          : 'border-gray-700 hover:border-cyan-500/50'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-4">
                        {service.icon}
                        {service.featured && (
                          <span className="px-3 py-1 bg-cyan-500 text-white text-xs font-semibold rounded-full">
                            Featured
                          </span>
                        )}
                      </div>
                      <h4 className="text-xl font-semibold text-white mb-3">{service.name}</h4>
                      <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                      <Link 
                        href={service.href}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-semibold"
                      >
                        Learn More <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 via-blue-900/20 to-purple-900/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Let our AI experts help you implement cutting-edge artificial intelligence solutions that drive real business results
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Your AI Journey
              </Link>
              <Link 
                href="/pricing"
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-full font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
