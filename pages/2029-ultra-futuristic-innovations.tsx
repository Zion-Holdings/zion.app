import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Rocket, Brain, Atom, Globe, Zap, Sparkles, Shield, Star, TrendingUp, Eye, Timer } from 'lucide-react';
import UltraFuturisticBackground2029 from '../components/backgrounds/UltraFuturisticBackground2029';
import UltraFuturisticNavigation2029 from '../components/layout/UltraFuturisticNavigation2029';
import UltraFuturisticFooter2029 from '../components/layout/UltraFuturisticFooter2029';
import UltraFuturistic2029ServiceShowcase from '../components/sections/UltraFuturistic2029ServiceShowcase';
import { cuttingEdge2029Services } from '../data/2029-cutting-edge-innovations';
import { spaceColonization2029Services } from '../data/2029-space-colonization-services';

export default function UltraFuturistic2029InnovationsPage() {
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const all2029Services = [...cuttingEdge2029Services, ...spaceColonization2029Services];

  return (
    <>
      <Head>
        <title>2029 Ultra-Futuristic Innovations | Zion Tech Group</title>
        <meta name="description" content="Experience the future of technology with our revolutionary 2029 services including AI consciousness simulation, quantum brain-computer interfaces, and Mars colonization automation." />
        <meta name="keywords" content="2029 technology, AI consciousness, quantum computing, Mars colonization, space technology, ultra-futuristic innovations" />
        <meta name="author" content="Zion Tech Group" />
        <meta property="og:title" content="2029 Ultra-Futuristic Innovations | Zion Tech Group" />
        <meta property="og:description" content="Experience the future of technology with our revolutionary 2029 services." />
        <meta property="og:url" content="https://ziontechgroup.com/2029-ultra-futuristic-innovations" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/2029-ultra-futuristic-innovations" />
      </Head>

      {/* Futuristic Background */}
      <UltraFuturisticBackground2029 />

      {/* Navigation */}
      <UltraFuturisticNavigation2029 />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-full px-6 py-3 mb-8">
                <Rocket className="w-5 h-5 text-purple-400" />
                <span className="text-purple-400 font-medium">2029 Technology Preview</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-8 leading-tight"
            >
              2029 Ultra-Futuristic
              <br />
              <span className="text-white">Innovations</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed"
            >
              Experience the future of technology with our revolutionary services that push the boundaries 
              of what's possible. From AI consciousness simulation to Mars colonization automation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <a
                href="#services"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-200 text-lg font-semibold shadow-lg hover:shadow-purple-500/25"
              >
                Explore Innovations
              </a>
              <a
                href="/contact"
                className="px-8 py-4 bg-gray-900/50 text-white rounded-xl hover:bg-purple-900/30 border border-gray-700 hover:border-purple-500/50 transition-all duration-200 text-lg font-semibold"
              >
                Get Started
              </a>
            </motion.div>
          </div>
        </section>

        {/* Innovation Categories Overview */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Innovation Categories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our 2029 innovations span across multiple cutting-edge technology domains
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: '🧠 AI Consciousness & Innovation',
                  description: 'Revolutionary AI systems with human-like consciousness and reasoning capabilities',
                  icon: Brain,
                  color: 'from-purple-600 to-pink-600',
                  services: cuttingEdge2029Services.filter(s => s.category.includes('Consciousness') || s.category.includes('Business'))
                },
                {
                  title: '⚛️ Quantum & Neuroscience',
                  description: 'Quantum computing meets brain-computer interfaces for unprecedented capabilities',
                  icon: Atom,
                  color: 'from-indigo-600 to-purple-600',
                  services: cuttingEdge2029Services.filter(s => s.category.includes('Neuroscience') || s.category.includes('Time'))
                },
                {
                  title: '🚀 Space Colonization & Mining',
                  description: 'Automated space exploration, colonization, and resource extraction systems',
                  icon: Rocket,
                  color: 'from-red-600 to-orange-600',
                  services: spaceColonization2029Services.filter(s => s.category.includes('Colonization') || s.category.includes('Mining'))
                },
                {
                  title: '🏠 Space Architecture & Energy',
                  description: 'Advanced habitat design and space-based energy harvesting platforms',
                  icon: Globe,
                  color: 'from-green-600 to-teal-600',
                  services: spaceColonization2029Services.filter(s => s.category.includes('Architecture') || s.category.includes('Energy'))
                },
                {
                  title: '👁️ AI Reality Augmentation',
                  description: 'Real-time AI-powered reality enhancement and content generation',
                  icon: Eye,
                  color: 'from-orange-600 to-red-600',
                  services: cuttingEdge2029Services.filter(s => s.category.includes('Augmented Reality'))
                },
                {
                  title: '⏰ Quantum Time Manipulation',
                  description: 'Quantum-based time perception manipulation and optimization',
                  icon: Timer,
                  color: 'from-green-600 to-emerald-600',
                  services: cuttingEdge2029Services.filter(s => s.category.includes('Time'))
                }
              ].map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 group"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{category.title}</h3>
                  <p className="text-gray-300 mb-6">{category.description}</p>
                  <div className="space-y-2">
                    {category.services.slice(0, 3).map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">{service.name}</span>
                        <span className="text-purple-400 font-semibold">{service.price}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-700/50">
                    <span className="text-xs text-gray-500">
                      {category.services.length} innovation{category.services.length !== 1 ? 's' : ''} available
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Showcase */}
        <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative">
          <UltraFuturistic2029ServiceShowcase 
            services={all2029Services}
            title="2029 Ultra-Futuristic Services"
            subtitle="Explore our complete portfolio of revolutionary 2029 technology solutions"
            maxServices={20}
          />
        </section>

        {/* Innovation Stats */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Innovation Impact
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our 2029 innovations are already transforming industries and creating new possibilities
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { label: 'Revolutionary Services', value: all2029Services.filter(s => s.innovationLevel === 'Revolutionary').length, icon: Rocket, color: 'from-purple-500 to-pink-500' },
                { label: 'Patent Pending', value: all2029Services.filter(s => s.patentStatus === 'Patent Pending').length, icon: Shield, color: 'from-blue-500 to-cyan-500' },
                { label: 'Total Customers', value: all2029Services.reduce((sum, s) => sum + s.customers, 0), icon: Star, color: 'from-yellow-500 to-orange-500' },
                { label: 'Average Rating', value: (all2029Services.reduce((sum, s) => sum + s.rating, 0) / all2029Services.length).toFixed(1), icon: TrendingUp, color: 'from-green-500 to-teal-500' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className={`w-20 h-20 bg-gradient-to-br ${stat.color} rounded-3xl flex items-center justify-center mx-auto mb-6`}>
                    <stat.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-3xl p-12 backdrop-blur-sm"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Experience 2029?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join the future of technology with our revolutionary 2029 innovations. 
                Contact us today to discover how we can transform your business.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-200 text-lg font-semibold shadow-lg hover:shadow-purple-500/25"
                >
                  Get Started Today
                </a>
                <a
                  href={`tel:${contactInfo.mobile}`}
                  className="px-8 py-4 bg-gray-900/50 text-white rounded-xl hover:bg-purple-900/30 border border-gray-700 hover:border-purple-500/50 transition-all duration-200 text-lg font-semibold"
                >
                  Call Now
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <UltraFuturisticFooter2029 />
    </>
  );
}