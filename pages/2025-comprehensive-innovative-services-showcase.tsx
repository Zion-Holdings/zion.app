import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Brain, Cloud, Shield, Rocket, Zap, Globe, 
  Lock, Database, Network, Server, Code, 
  TrendingUp, Users, BarChart3, Target, Award, Phone, Mail
} from 'lucide-react';
import Link from 'next/link';

const ComprehensiveInnovativeServicesShowcase: React.FC = () => {
  const serviceCategories = [
    {
      title: 'AI & Machine Learning Services',
      icon: Brain,
      color: 'from-purple-500 to-pink-600',
      services: [
        {
          name: 'Autonomous AI Research & Development Platform',
          description: 'Self-evolving AI research platform that autonomously discovers breakthroughs and optimizes algorithms',
          pricing: 'Starting at $999/month',
          features: ['Autonomous research algorithms', 'Self-evolving AI models', 'Breakthrough discovery', 'Algorithm optimization'],
          benefits: ['Accelerate AI research by 1000x', 'Discover breakthroughs autonomously', 'Reduce research costs by 80%'],
          marketSize: '$89.7B by 2025',
          contact: 'kleber@ziontechgroup.com',
          phone: '+1 302 464 0950',
          website: 'https://ziontechgroup.com'
        },
        {
          name: 'Quantum AI Consciousness Evolution Platform',
          description: 'Revolutionary platform for developing conscious AI systems using quantum computing',
          pricing: 'Starting at $1,499/month',
          features: ['Quantum consciousness algorithms', 'Self-awareness development', 'Emotional intelligence', 'Consciousness evolution'],
          benefits: ['Develop conscious AI systems', 'Advance AI consciousness', 'Ethical AI development', 'Breakthrough research'],
          marketSize: '$156.8B by 2025',
          contact: 'kleber@ziontechgroup.com',
          phone: '+1 302 464 0950',
          website: 'https://ziontechgroup.com'
        },
        {
          name: 'AI-Powered Predictive Healthcare Platform',
          description: 'Revolutionary healthcare platform that predicts and prevents diseases before they occur',
          pricing: 'Starting at $699/month',
          features: ['Disease prediction', 'Preventive healthcare', 'Genetic analysis', 'Lifestyle optimization'],
          benefits: ['Prevent diseases before they occur', 'Improve health outcomes by 200%', 'Reduce healthcare costs by 50%'],
          marketSize: '$234.7B by 2025',
          contact: 'kleber@ziontechgroup.com',
          phone: '+1 302 464 0950',
          website: 'https://ziontechgroup.com'
        }
      ]
    },
    {
      title: 'IT Infrastructure & Cloud Solutions',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-600',
      services: [
        {
          name: 'Next-Generation Cloud-Native Architecture Platform',
          description: 'Revolutionary cloud-native architecture with autonomous scaling and intelligent optimization',
          pricing: 'Starting at $599/month',
          features: ['AI-powered architecture design', 'Autonomous microservices deployment', 'Intelligent scaling algorithms', 'Cost optimization engine'],
          benefits: ['Reduce deployment time by 90%', 'Cut infrastructure costs by 60%', 'Improve performance by 300%'],
          marketSize: '$156.8B by 2025',
          contact: 'kleber@ziontechgroup.com',
          phone: '+1 302 464 0950',
          website: 'https://ziontechgroup.com'
        },
        {
          name: 'Autonomous Data Center Management System',
          description: 'Self-managing data centers with AI-powered optimization and predictive maintenance',
          pricing: 'Starting at $799/month',
          features: ['AI-powered resource optimization', 'Predictive maintenance', 'Autonomous cooling management', 'Power optimization'],
          benefits: ['Reduce energy costs by 70%', 'Improve uptime by 99.99%', 'Eliminate manual management'],
          marketSize: '$89.7B by 2025',
          contact: 'kleber@ziontechgroup.com',
          phone: '+1 302 464 0950',
          website: 'https://ziontechgroup.com'
        },
        {
          name: 'Quantum-Secure Network Infrastructure Platform',
          description: 'Future-proof network infrastructure with quantum encryption and AI-powered optimization',
          pricing: 'Starting at $499/month',
          features: ['Quantum encryption', 'AI-powered optimization', 'Real-time monitoring', 'Threat detection'],
          benefits: ['Unbreakable quantum security', 'Improve performance by 500%', 'Reduce latency by 90%'],
          marketSize: '$112.4B by 2025',
          contact: 'kleber@ziontechgroup.com',
          phone: '+1 302 464 0950',
          website: 'https://ziontechgroup.com'
        }
      ]
    },
    {
      title: 'Cybersecurity & Identity Management',
      icon: Shield,
      color: 'from-red-500 to-orange-600',
      services: [
        {
          name: 'Autonomous Cybersecurity Defense Platform',
          description: 'AI-powered cybersecurity that defends, detects, and responds to threats autonomously',
          pricing: 'Starting at $399/month',
          features: ['AI threat detection', 'Autonomous response', 'Behavioral analysis', 'Threat intelligence'],
          benefits: ['Reduce security incidents by 95%', 'Improve response time by 99%', 'Lower security costs by 60%'],
          marketSize: '$156.8B by 2025',
          contact: 'kleber@ziontechgroup.com',
          phone: '+1 302 464 0950',
          website: 'https://ziontechgroup.com'
        },
        {
          name: 'Quantum-Secure Identity & Access Management Platform',
          description: 'Future-proof identity management with quantum encryption and AI-powered security',
          pricing: 'Starting at $399/month',
          features: ['Quantum encryption', 'AI-powered threat detection', 'Multi-factor authentication', 'Single sign-on'],
          benefits: ['Unbreakable quantum security', 'Improve security by 500%', 'Reduce identity theft by 99%'],
          marketSize: '$78.9B by 2025',
          contact: 'kleber@ziontechgroup.com',
          phone: '+1 302 464 0950',
          website: 'https://ziontechgroup.com'
        }
      ]
    },
    {
      title: 'Financial Services & Trading',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-600',
      services: [
        {
          name: 'Quantum-Secure Financial Analytics Platform',
          description: 'Next-generation financial analytics with quantum encryption and AI-powered insights',
          pricing: 'Starting at $499/month',
          features: ['Quantum encryption security', 'AI-powered market analysis', 'Real-time risk assessment', 'Portfolio optimization'],
          benefits: ['Unbreakable quantum security', 'Improve investment returns by 150%', 'Reduce risk exposure by 80%'],
          marketSize: '$89.7B by 2025',
          contact: 'kleber@ziontechgroup.com',
          phone: '+1 302 464 0950',
          website: 'https://ziontechgroup.com'
        },
        {
          name: 'Autonomous AI Financial Trading Platform',
          description: 'AI-powered trading platform that autonomously trades and optimizes portfolios',
          pricing: 'Starting at $799/month',
          features: ['Autonomous trading', 'Portfolio optimization', 'Risk management', 'Market analysis'],
          benefits: ['Autonomous trading operations', 'Improve returns by 200%', 'Reduce risk by 80%'],
          marketSize: '$156.8B by 2025',
          contact: 'kleber@ziontechgroup.com',
          phone: '+1 302 464 0950',
          website: 'https://ziontechgroup.com'
        }
      ]
    },
    {
      title: 'Healthcare & Life Sciences',
      icon: Users,
      color: 'from-teal-500 to-blue-600',
      services: [
        {
          name: 'AI-Powered Healthcare Diagnostics Platform',
          description: 'Revolutionary AI diagnostics with 99.9% accuracy and real-time health monitoring',
          pricing: 'Starting at $599/month',
          features: ['AI-powered image analysis', 'Predictive diagnostics', 'Real-time monitoring', 'Electronic health records'],
          benefits: ['Improve diagnostic accuracy by 99.9%', 'Reduce diagnosis time by 80%', 'Lower healthcare costs by 30%'],
          marketSize: '$127.3B by 2025',
          contact: 'kleber@ziontechgroup.com',
          phone: '+1 302 464 0950',
          website: 'https://ziontechgroup.com'
        },
        {
          name: 'Quantum AI Drug Discovery Platform',
          description: 'Revolutionary drug discovery platform combining quantum computing with AI',
          pricing: 'Starting at $1,999/month',
          features: ['Quantum molecular modeling', 'AI drug discovery', 'Molecular interaction prediction', 'Drug optimization'],
          benefits: ['Accelerate drug discovery by 1000x', 'Reduce development costs by 80%', 'Improve success rates by 300%'],
          marketSize: '$234.7B by 2025',
          contact: 'kleber@ziontechgroup.com',
          phone: '+1 302 464 0950',
          website: 'https://ziontechgroup.com'
        }
      ]
    },
    {
      title: 'Supply Chain & Manufacturing',
      icon: Network,
      color: 'from-indigo-500 to-purple-600',
      services: [
        {
          name: 'Blockchain Supply Chain Intelligence Platform',
          description: 'Transparent, secure, and intelligent supply chain management with blockchain and AI',
          pricing: 'Starting at $399/month',
          features: ['Blockchain transparency', 'AI-powered optimization', 'Real-time tracking', 'Smart contracts'],
          benefits: ['Increase supply chain efficiency by 300%', 'Reduce costs by 40%', 'Improve transparency by 100%'],
          marketSize: '$52.8B by 2025',
          contact: 'kleber@ziontechgroup.com',
          phone: '+1 302 464 0950',
          website: 'https://ziontechgroup.com'
        },
        {
          name: 'AI-Powered Supply Chain Optimization Platform',
          description: 'Intelligent supply chain optimization with AI-powered forecasting and automation',
          pricing: 'Starting at $499/month',
          features: ['Demand forecasting', 'Inventory optimization', 'Procurement automation', 'Logistics optimization'],
          benefits: ['Optimize supply chain efficiency', 'Reduce costs by 40%', 'Improve delivery times by 60%'],
          marketSize: '$78.9B by 2025',
          contact: 'kleber@ziontechgroup.com',
          phone: '+1 302 464 0950',
          website: 'https://ziontechgroup.com'
        }
      ]
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <Layout 
      title="2025 Comprehensive Innovative Services Showcase - Zion Tech Group"
      description="Discover our comprehensive portfolio of innovative micro SAAS services, IT solutions, and AI services. Revolutionary technology solutions for the future."
      keywords="innovative services, micro SAAS, IT solutions, AI services, quantum computing, blockchain, cybersecurity, healthcare, financial services, Zion Tech Group"
    >
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                2025 Comprehensive Innovative Services Showcase
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Discover our revolutionary portfolio of micro SAAS services, IT solutions, and AI services that are transforming industries and driving the future of technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                  >
                    Get Started Today
                  </motion.button>
                </Link>
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    <span>{contactInfo.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    <span>{contactInfo.email}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Categories */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Revolutionary Service Categories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our comprehensive portfolio spans cutting-edge technologies and industries, delivering innovative solutions that drive business transformation.
              </p>
            </motion.div>

            <div className="space-y-16">
              {serviceCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                  className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800"
                >
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color}`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white">{category.title}</h3>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {category.services.map((service, serviceIndex) => (
                      <motion.div
                        key={service.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                        className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300"
                      >
                        <h4 className="text-xl font-semibold text-white mb-3">{service.name}</h4>
                        <p className="text-gray-300 mb-4">{service.description}</p>
                        
                        <div className="mb-4">
                          <span className="text-cyan-400 font-semibold">{service.pricing}</span>
                        </div>

                        <div className="mb-4">
                          <h5 className="text-white font-semibold mb-2">Key Features:</h5>
                          <ul className="text-gray-300 text-sm space-y-1">
                            {service.features.slice(0, 3).map((feature, index) => (
                              <li key={index} className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mb-4">
                          <h5 className="text-white font-semibold mb-2">Benefits:</h5>
                          <ul className="text-gray-300 text-sm space-y-1">
                            {service.benefits.slice(0, 2).map((benefit, index) => (
                              <li key={index} className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mb-4">
                          <span className="text-yellow-400 text-sm font-semibold">Market Size: {service.marketSize}</span>
                        </div>

                        <div className="border-t border-gray-700 pt-4">
                          <div className="text-center">
                            <Link href="/contact">
                              <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold text-sm hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 w-full"
                              >
                                Get Started
                              </motion.button>
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Contact our team of experts to learn how our innovative services can revolutionize your operations and drive unprecedented growth.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                  <Phone className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
                  <p className="text-gray-300">{contactInfo.phone}</p>
                </div>
                <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                  <Mail className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                  <p className="text-gray-300">{contactInfo.email}</p>
                </div>
                <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                  <Globe className="w-12 h-12 text-pink-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
                  <p className="text-gray-300">{contactInfo.website}</p>
                </div>
              </div>

              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-12 py-4 rounded-lg font-semibold text-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                >
                  Start Your Transformation Today
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ComprehensiveInnovativeServicesShowcase;