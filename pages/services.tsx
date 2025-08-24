import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Brain, Shield, Rocket, Cpu, Database, Atom, Target, Star, 
  Sparkles, Zap, Users, Award, Clock, CheckCircle, Globe, Code, Server,
  ChevronRight, ExternalLink, TrendingUp, BarChart3, Cloud, Network,
  Lock, Eye, BarChart, FileText, Settings, Monitor, Smartphone, DollarSign
} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';

export default function ServicesPage() {
  const serviceCategories = [
    {
      name: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      services: [
        {
          name: 'AI Business Intelligence',
          description: 'Transform data into actionable insights with AI-powered analytics',
          price: '$499/month',
          features: ['AI-powered dashboards', 'Predictive analytics', 'Real-time insights'],
          link: '/ai-business-intelligence'
        },
        {
          name: 'AI Autonomous Systems',
          description: 'Revolutionary autonomous AI solutions that adapt and evolve',
          price: '$799/month',
          features: ['Self-learning algorithms', 'Autonomous decision making', 'Continuous optimization'],
          link: '/ai-autonomous-systems'
        },
        {
          name: 'AI Content Generation',
          description: 'Automated content creation with AI-powered personalization',
          price: '$299/month',
          features: ['Content automation', 'Personalization engine', 'Multi-format output'],
          link: '/ai-content-generation'
        }
      ]
    },
    {
      name: 'Cybersecurity',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      services: [
        {
          name: 'Quantum Cybersecurity',
          description: 'Future-proof security with quantum-resistant encryption',
          price: '$799/month',
          features: ['Quantum-resistant encryption', 'AI threat detection', 'Zero-trust architecture'],
          link: '/quantum-cybersecurity'
        },
        {
          name: 'Advanced Security Suite',
          description: 'Comprehensive security solutions for enterprise protection',
          price: '$599/month',
          features: ['Threat intelligence', 'Incident response', 'Compliance automation'],
          link: '/advanced-cybersecurity-suite'
        }
      ]
    },
    {
      name: 'IT Infrastructure',
      icon: Server,
      color: 'from-blue-500 to-cyan-500',
      services: [
        {
          name: 'Edge Computing Orchestration',
          description: 'Deploy and manage applications at the edge with intelligent orchestration',
          price: '$399/month',
          features: ['Edge deployment', 'Load balancing', 'Performance optimization'],
          link: '/edge-computing-orchestration'
        },
        {
          name: 'Cloud Infrastructure Management',
          description: 'Optimize cloud resources with AI-powered management',
          price: '$299/month',
          features: ['Resource optimization', 'Cost management', 'Performance monitoring'],
          link: '/cloud-infrastructure-management'
        }
      ]
    },
    {
      name: 'Quantum Technologies',
      icon: Atom,
      color: 'from-indigo-500 to-purple-500',
      services: [
        {
          name: 'Quantum Neural Networks',
          description: 'Quantum-powered AI with advanced consciousness capabilities',
          price: '$999/month',
          features: ['Quantum algorithms', 'Neural optimization', 'Consciousness simulation'],
          link: '/quantum-neural-networks'
        },
        {
          name: 'Quantum Financial Trading',
          description: 'Quantum computing for high-frequency trading and risk analysis',
          price: '$1,299/month',
          features: ['Quantum algorithms', 'Risk assessment', 'Portfolio optimization'],
          link: '/quantum-financial-trading'
        }
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>Services - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Comprehensive AI, cybersecurity, and IT infrastructure services. Transform your business with cutting-edge technology solutions." />
        <meta name="keywords" content="AI services, cybersecurity, IT infrastructure, quantum computing, edge computing" />
        <link rel="canonical" href="https://ziontechgroup.com/services" />
      </Head>

      <EnhancedNavigation />

      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
            >
              Our Services
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Revolutionary AI, cybersecurity, and IT infrastructure solutions designed to transform your business and drive innovation.
            </motion.p>
          </div>
        </section>

        {/* Services Categories */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {serviceCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                className="mb-16"
              >
                <div className="text-center mb-12">
                  <div className={`inline-flex p-3 rounded-full bg-gradient-to-r ${category.color} mb-4`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4">{category.name}</h2>
                  <p className="text-gray-400 max-w-2xl mx-auto">
                    Cutting-edge solutions designed to address the most complex challenges in {category.name.toLowerCase()}.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                      className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
                    >
                      <h3 className="text-xl font-semibold text-white mb-3">{service.name}</h3>
                      <p className="text-gray-400 mb-4">{service.description}</p>
                      
                      <div className="mb-4">
                        <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                      </div>

                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <a
                        href={service.link}
                        className="inline-flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
                      >
                        Learn More
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </a>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-2xl p-12 border border-cyan-500/20"
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let&apos;s discuss how our cutting-edge solutions can drive innovation and growth for your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
                >
                  Get Started
                  <Rocket className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="/pricing"
                  className="inline-flex items-center justify-center px-8 py-4 border border-cyan-500/50 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-200"
                >
                  View Pricing
                  <DollarSign className="w-5 h-5 ml-2" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <EnhancedFooter />
    </>
  );
}