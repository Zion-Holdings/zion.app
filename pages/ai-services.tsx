import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cpu, Zap, Shield, Globe, BarChart3, Rocket, Users, Target, Award } from 'lucide-react';
import Layout from '../components/layout/Layout';

export default function AIServices() {
  const services = [
    {
      icon: Brain,
      title: 'AI Content Automation Platform',
      description: 'Revolutionary AI-powered content creation and management system',
      features: ['Automated content generation', 'Multi-language support', 'SEO optimization', 'Content analytics'],
      href: '/intelligent-content-automation-platform'
    },
    {
      icon: Users,
      title: 'Intelligent HR Analytics Platform',
      description: 'AI-driven human resources insights and optimization',
      features: ['Employee performance analytics', 'Recruitment optimization', 'Workforce planning', 'Talent retention'],
      href: '/intelligent-hr-analytics-platform'
    },
    {
      icon: BarChart3,
      title: 'Intelligent Supply Chain Optimization',
      description: 'AI-powered supply chain management and optimization',
      features: ['Demand forecasting', 'Inventory optimization', 'Route optimization', 'Risk management'],
      href: '/intelligent-supply-chain-optimization'
    },
    {
      icon: Cpu,
      title: 'Quantum AI Brain-Computer Interface',
      description: 'Next-generation brain-computer interface technology',
      features: ['Neural signal processing', 'Real-time communication', 'Medical applications', 'Research tools'],
      href: '/quantum-ai-brain-computer-interface'
    },
    {
      icon: Rocket,
      title: 'Space Resource Mining Platform',
      description: 'AI-powered space exploration and resource extraction',
      features: ['Autonomous exploration', 'Resource mapping', 'Mining operations', 'Safety protocols'],
      href: '/space-resource-mining-platform'
    },
    {
      icon: Globe,
      title: 'Metaverse AI Development Platform',
      description: 'AI tools for building immersive virtual worlds',
      features: ['3D environment generation', 'NPC AI systems', 'User interaction', 'Content creation'],
      href: '/metaverse-ai-development-platform'
    }
  ];

  const stats = [
    { number: '50+', label: 'AI Services', icon: Brain },
    { number: '100+', label: 'AI Models', icon: Cpu },
    { number: '24/7', label: 'AI Operations', icon: Zap },
    { number: '99.9%', label: 'Uptime', icon: Shield }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                AI Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Revolutionary AI solutions that transform businesses and accelerate human progress. 
                From content automation to quantum brain-computer interfaces.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 bg-black/30">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our AI Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cutting-edge AI solutions designed to solve complex business challenges and drive innovation
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <a href={service.href} className="block">
                    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 h-full hover:bg-gray-700/50 transition-all duration-300 hover:scale-105">
                      <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <service.icon className="w-8 h-8 text-cyan-400" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                      <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-400">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let our AI experts help you implement cutting-edge solutions that drive growth and innovation
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </a>
                <a
                  href="/services"
                  className="px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300"
                >
                  View All Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
