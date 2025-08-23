import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Brain, Atom, Shield, Zap, TrendingUp, Globe, 
  Rocket, Star, Sparkles, ArrowRight, Phone, Mail, MapPin
} from 'lucide-react';
import Link from 'next/link';

const Comprehensive2025InnovativeServicesShowcase: React.FC = () => {
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const innovativeServices = [
    // AI Services
    {
      id: 'ai-autonomous-content-factory-pro',
      name: 'AI Autonomous Content Factory Pro',
      tagline: 'Fully autonomous content creation and distribution',
      price: '$1,299',
      period: 'month',
      category: 'AI Content Creation',
      icon: '🏭',
      features: [
        'Autonomous content ideation and research',
        'Multi-format content generation',
        'Real-time trend analysis',
        'Cross-platform distribution',
        'Performance optimization'
      ],
      popular: true,
      variant: 'ai'
    },
    {
      id: 'ai-emotional-intelligence-platform-2040',
      name: 'AI Emotional Intelligence Platform 2040',
      tagline: 'Next-generation emotional AI with consciousness',
      price: '$2,499',
      period: 'month',
      category: 'AI Emotional Intelligence',
      icon: '💝',
      features: [
        'Real-time emotional state detection',
        'Multi-modal emotion analysis',
        'Empathy training and development',
        'Therapeutic conversation simulation',
        'Personalized emotional support'
      ],
      popular: true,
      variant: 'ai'
    },
    {
      id: 'ai-quantum-hybrid-computing-platform',
      name: 'AI Quantum Hybrid Computing Platform',
      tagline: 'Quantum-classical AI fusion for unprecedented performance',
      price: '$3,999',
      period: 'month',
      category: 'Quantum AI',
      icon: '⚛️🧠',
      features: [
        'Quantum-classical algorithm optimization',
        'Hybrid neural network architectures',
        'Quantum-enhanced machine learning',
        'Real-time quantum simulation',
        'Quantum error correction'
      ],
      popular: false,
      variant: 'quantum'
    },
    {
      id: 'ai-autonomous-business-intelligence-2040',
      name: 'AI Autonomous Business Intelligence 2040',
      tagline: 'Consciousness-driven business insights',
      price: '$1,899',
      period: 'month',
      category: 'AI Business Intelligence',
      icon: '📊🧠',
      features: [
        'Autonomous data discovery and analysis',
        'Predictive business modeling',
        'Real-time anomaly detection',
        'Strategic recommendation engine',
        'ROI optimization suggestions'
      ],
      popular: true,
      variant: 'ai'
    },
    {
      id: 'ai-brain-computer-interface-platform',
      name: 'AI Brain-Computer Interface Platform',
      tagline: 'Neural interface technology for the future',
      price: '$4,999',
      period: 'month',
      category: 'Neural Technology',
      icon: '🧠💻',
      features: [
        'Neural signal processing',
        'Brain-computer communication',
        'Thought-to-text conversion',
        'Cognitive enhancement tools',
        'Accessibility solutions'
      ],
      popular: false,
      variant: 'neural'
    },
    
    // IT Services
    {
      id: 'quantum-secure-cloud-infrastructure-2040',
      name: 'Quantum-Secure Cloud Infrastructure 2040',
      tagline: 'Future-proof cloud security with quantum cryptography',
      price: '$2,999',
      period: 'month',
      category: 'Quantum Security',
      icon: '🔐☁️',
      features: [
        'Quantum key distribution (QKD)',
        'Post-quantum cryptography',
        'Zero-trust architecture',
        'Multi-cloud orchestration',
        'Automated security compliance'
      ],
      popular: true,
      variant: 'quantum'
    },
    {
      id: 'autonomous-devops-platform-2040',
      name: 'Autonomous DevOps Platform 2040',
      tagline: 'Self-healing infrastructure with AI consciousness',
      price: '$1,799',
      period: 'month',
      category: 'DevOps Automation',
      icon: '🤖⚙️',
      features: [
        'Autonomous infrastructure management',
        'Self-healing systems',
        'Predictive maintenance',
        'Intelligent scaling',
        'Cost optimization'
      ],
      popular: true,
      variant: 'ai'
    },
    {
      id: 'edge-computing-orchestration-platform',
      name: 'Edge Computing Orchestration Platform',
      tagline: 'Intelligent edge computing management',
      price: '$1,499',
      period: 'month',
      category: 'Edge Computing',
      icon: '🌐⚡',
      features: [
        'Global edge network orchestration',
        'Intelligent resource allocation',
        'Real-time performance optimization',
        'Multi-cloud edge management',
        'Automated scaling'
      ],
      popular: true,
      variant: 'edge'
    },
    
    // Micro SAAS Services
    {
      id: 'ai-autonomous-hr-platform',
      name: 'AI Autonomous HR Platform',
      tagline: 'Fully autonomous human resources management',
      price: '$899',
      period: 'month',
      category: 'HR Technology',
      icon: '👥🤖',
      features: [
        'Autonomous candidate screening',
        'AI-powered interviews',
        'Employee performance analysis',
        'Automated onboarding',
        'Predictive retention analytics'
      ],
      popular: true,
      variant: 'ai'
    },
    {
      id: 'quantum-financial-trading-platform',
      name: 'Quantum Financial Trading Platform',
      tagline: 'Quantum-powered trading intelligence',
      price: '$4,999',
      period: 'month',
      category: 'Financial Technology',
      icon: '💰⚛️',
      features: [
        'Quantum market analysis',
        'High-frequency trading',
        'Risk management',
        'Portfolio optimization',
        'Algorithmic trading'
      ],
      popular: false,
      variant: 'quantum'
    },
    {
      id: 'ai-autonomous-marketing-platform',
      name: 'AI Autonomous Marketing Platform',
      tagline: 'Self-driving marketing campaigns',
      price: '$1,199',
      period: 'month',
      category: 'Marketing Technology',
      icon: '📢🤖',
      features: [
        'Autonomous campaign creation',
        'Real-time optimization',
        'Multi-channel management',
        'Audience targeting',
        'ROI tracking'
      ],
      popular: true,
      variant: 'ai'
    }
  ];

  const getVariantStyles = (variant: string) => {
    switch (variant) {
      case 'ai':
        return 'from-purple-500/20 to-pink-500/20 border-purple-400/30';
      case 'quantum':
        return 'from-cyan-500/20 to-blue-500/20 border-cyan-400/30';
      case 'neural':
        return 'from-pink-500/20 to-purple-500/20 border-pink-400/30';
      case 'edge':
        return 'from-green-500/20 to-emerald-500/20 border-green-400/30';
      default:
        return 'from-gray-500/20 to-gray-600/20 border-gray-400/30';
    }
  };

  const getVariantTextColor = (variant: string) => {
    switch (variant) {
      case 'ai':
        return 'text-purple-400';
      case 'quantum':
        return 'text-cyan-400';
      case 'neural':
        return 'text-pink-400';
      case 'edge':
        return 'text-green-400';
      default:
        return 'text-gray-400';
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        {/* Futuristic Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rounded-lg animate-pulse"></div>
          <div className="absolute top-40 right-32 w-24 h-24 border border-purple-400/20 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-32 w-40 h-40 border border-pink-400/20 transform rotate-45 animate-pulse delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 border border-blue-400/10 rounded-full animate-pulse delay-3000"></div>
        </div>

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-full text-purple-400 text-sm font-medium">
                <Star className="w-4 h-4" />
                <span>Innovation Leader 2025</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Comprehensive 2025
              </h1>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Innovative Services Showcase
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Discover our revolutionary AI, IT, and Micro SAAS solutions that are shaping the future of technology
              </p>
              
              {/* Contact Information */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <div className="flex items-center space-x-2 text-cyan-400">
                  <Phone className="w-5 h-5" />
                  <span>{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center space-x-2 text-purple-400">
                  <Mail className="w-5 h-5" />
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex items-center space-x-2 text-pink-400">
                  <MapPin className="w-5 h-5" />
                  <span>{contactInfo.address}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Revolutionary Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the future of technology with our cutting-edge solutions
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {innovativeServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`group relative p-6 rounded-2xl border bg-gradient-to-br ${getVariantStyles(service.variant)} hover:scale-105 transition-all duration-300 cursor-pointer`}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold rounded-full">
                        POPULAR
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center space-y-4">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className={`text-xl font-bold ${getVariantTextColor(service.variant)}`}>
                      {service.name}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">
                      {service.tagline}
                    </p>
                    
                    <div className="text-3xl font-bold text-white mb-2">
                      {service.price}
                      <span className="text-lg text-gray-400">/{service.period}</span>
                    </div>
                    
                    <div className="text-xs text-gray-400 mb-4">
                      {service.category}
                    </div>
                    
                    <ul className="text-left space-y-2 text-sm text-gray-300">
                      {service.features.slice(0, 5).map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link href={`/services/${service.id}`}>
                      <button className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join the future of technology with Zion Tech Group's innovative solutions
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                    <span className="flex items-center gap-2">
                      Get Started Today
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  </button>
                </Link>
                <Link href="/services">
                  <button className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-black transition-all duration-300 transform hover:scale-105">
                    View All Services
                  </button>
                </Link>
              </div>
              
              {/* Contact Information */}
              <div className="mt-12 p-6 bg-black/30 rounded-2xl border border-purple-400/20">
                <h3 className="text-2xl font-bold text-white mb-4">Contact Us</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div className="flex flex-col items-center space-y-2">
                    <Phone className="w-6 h-6 text-cyan-400" />
                    <span className="text-gray-300">{contactInfo.mobile}</span>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <Mail className="w-6 h-6 text-purple-400" />
                    <span className="text-gray-300">{contactInfo.email}</span>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <MapPin className="w-6 h-6 text-pink-400" />
                    <span className="text-gray-300">{contactInfo.address}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Comprehensive2025InnovativeServicesShowcase;