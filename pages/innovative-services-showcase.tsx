import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Star, Users, TrendingUp, DollarSign, Clock, 
  CheckCircle, ArrowRight, Zap, Shield, Rocket,
  Brain, Globe, Lock, Code, Database, Cloud,
  Phone, Mail, MapPin
} from 'lucide-react';
import Button from '../components/ui/Button';
import UltraAdvancedQuantumBackground from '../components/ui/UltraAdvancedQuantumBackground';
import { nextGenAIServices } from '../data/next-gen-ai-services';
import { emergingTechServices } from '../data/emerging-tech-services';
import { enterpriseBlockchainServices } from '../data/enterprise-blockchain-services';

export default function InnovativeServicesShowcase() {
  const allInnovativeServices = [
    ...nextGenAIServices,
    ...emergingTechServices,
    ...enterpriseBlockchainServices
  ];

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const stats = [
    { label: 'Innovative Services', value: allInnovativeServices.length, icon: Rocket, color: 'text-blue-400' },
    { label: 'Total Customers', value: allInnovativeServices.reduce((sum, s) => sum + (s.customers || 0), 0), icon: Users, color: 'text-green-400' },
    { label: 'Average Rating', value: (allInnovativeServices.reduce((sum, s) => sum + (s.rating || 0), 0) / allInnovativeServices.length).toFixed(1), icon: Star, color: 'text-yellow-400' },
    { label: 'Market Growth', value: '500%+', icon: TrendingUp, color: 'text-purple-400' }
  ];

  const categories = [
    { id: 'ai', name: 'Next-Gen AI', icon: '🧠', services: nextGenAIServices },
    { id: 'emerging', name: 'Emerging Tech', icon: '🌟', services: emergingTechServices },
    { id: 'blockchain', name: 'Blockchain & DeFi', icon: '⛓️', services: enterpriseBlockchainServices }
  ];

  return (
    <UltraAdvancedQuantumBackground intensity="high" colorScheme="neural">
      <div className="min-h-screen">
        <Head>
          <title>Innovative Services Showcase - Zion Tech Group | Cutting-Edge AI & Technology</title>
          <meta name="description" content="Explore our most innovative AI, quantum, and blockchain services. Transform your business with cutting-edge technology solutions. Contact: +1 302 464 0950" />
          <meta name="keywords" content="innovative AI services, quantum computing, blockchain solutions, emerging technology, Zion Tech Group" />
          <meta name="author" content="Zion Tech Group" />
          <meta property="og:title" content="Innovative Services Showcase - Zion Tech Group" />
          <meta property="og:description" content="Cutting-edge AI, quantum, and blockchain services for business transformation" />
          <meta property="og:url" content="https://ziontechgroup.com/innovative-services-showcase" />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://ziontechgroup.com/innovative-services-showcase" />
        </Head>

        {/* Hero Section */}
        <section className="relative z-10 pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
                Innovative Services Showcase
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Discover the future of business technology with our most cutting-edge AI, quantum, and blockchain solutions
              </p>
              <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
                From neural interfaces to quantum internet security, explore services that are reshaping industries and delivering unprecedented ROI.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <Button 
                  href="/contact" 
                  variant="primary"
                  className="text-lg px-8 py-4"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  href="/pricing" 
                  variant="secondary"
                  className="text-lg px-8 py-4"
                >
                  View Pricing
                  <DollarSign className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`${stat.color} mb-2 flex justify-center`}>
                    <stat.icon className="w-8 h-8" />
                  </div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Category Showcases */}
        {categories.map((category, categoryIndex) => (
          <section key={category.id} className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              {/* Category Header */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
                  {category.icon} {category.name}
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  {category.id === 'ai' && 'Next-generation AI services that push the boundaries of what\'s possible in business automation and intelligence.'}
                  {category.id === 'emerging' && 'Cutting-edge emerging technologies that are reshaping industries and creating new possibilities.'}
                  {category.id === 'blockchain' && 'Enterprise-grade blockchain solutions that provide transparency, security, and efficiency.'}
                </p>
              </motion.div>

              {/* Services Grid */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 + 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {category.services.map((service, serviceIndex) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="group"
                  >
                    <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 h-full">
                      {/* Popular Badge */}
                      {service.popular && (
                        <div className="absolute -top-3 left-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                          ⭐ Most Popular
                        </div>
                      )}

                      {/* Header */}
                      <div className="mb-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="text-3xl">{service.icon}</div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-white">{service.price}</div>
                            <div className="text-sm text-gray-400">{service.period}</div>
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                          {service.name}
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {service.tagline}
                        </p>
                      </div>

                      {/* Features */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-300 mb-3 flex items-center">
                          <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                          Key Features
                        </h4>
                        <ul className="space-y-2">
                          {service.features.slice(0, 4).map((feature, idx) => (
                            <li key={idx} className="text-sm text-gray-400 flex items-start">
                              <span className="text-cyan-400 mr-2">•</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                        <div>
                          <div className="text-lg font-bold text-white">{service.rating}</div>
                          <div className="text-xs text-gray-400">Rating</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-white">{service.customers?.toLocaleString() || '0'}</div>
                          <div className="text-xs text-gray-400">Customers</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-white">{service.trialDays}</div>
                          <div className="text-xs text-gray-400">Trial Days</div>
                        </div>
                      </div>

                      {/* ROI Highlight */}
                      <div className="mb-6 p-4 bg-gradient-to-r from-green-900/20 to-blue-900/20 rounded-lg border border-green-500/20">
                        <div className="text-sm text-green-400 font-semibold mb-1">🚀 ROI Promise</div>
                        <div className="text-xs text-gray-300 leading-relaxed">
                          {service.roi}
                        </div>
                      </div>

                      {/* Market Position */}
                      <div className="mb-6 p-4 bg-gray-800/30 rounded-lg">
                        <div className="text-sm text-cyan-400 font-semibold mb-2">📊 Market Position</div>
                        <div className="text-xs text-gray-300 leading-relaxed">
                          {service.marketPosition}
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="mt-auto">
                        <Button
                          href={service.link}
                          variant="primary"
                          className="w-full group-hover:bg-cyan-500 transition-colors"
                        >
                          Get Started
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>

                      {/* Contact Info */}
                      <div className="mt-4 text-center">
                        <div className="text-xs text-gray-500">
                          Contact: <span className="text-cyan-400">{service.contactInfo.mobile}</span>
                        </div>
                        <div className="text-xs text-gray-500">
                          Email: <span className="text-cyan-400">{service.contactInfo.email}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
        ))}

        {/* Call to Action */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-cyan-900/20 to-purple-900/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20">
                <h3 className="text-3xl font-bold text-white mb-6">
                  Ready to Lead the Future?
                </h3>
                <p className="text-gray-300 mb-8 max-w-3xl mx-auto text-lg">
                  Don't just follow trends—set them. Our innovative services are designed to give you a competitive edge 
                  that lasts. Join the companies already transforming their industries with our cutting-edge technology.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
                  <div className="text-center p-4 bg-gray-800/30 rounded-lg">
                    <div className="text-3xl mb-2">🚀</div>
                    <div className="text-lg font-semibold text-white mb-2">First-Mover Advantage</div>
                    <div className="text-sm text-gray-300">Be among the first to adopt revolutionary technology</div>
                  </div>
                  <div className="text-center p-4 bg-gray-800/30 rounded-lg">
                    <div className="text-3xl mb-2">💎</div>
                    <div className="text-lg font-semibold text-white mb-2">Exclusive Access</div>
                    <div className="text-sm text-gray-300">Access to cutting-edge solutions before competitors</div>
                  </div>
                  <div className="text-center p-4 bg-gray-800/30 rounded-lg">
                    <div className="text-3xl mb-2">🎯</div>
                    <div className="text-lg font-semibold text-white mb-2">Proven Results</div>
                    <div className="text-sm text-gray-300">Track record of delivering exceptional ROI</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <Button href="/contact" variant="primary" className="text-lg px-8 py-4">
                    Schedule Innovation Consultation
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <Button href="/pricing" variant="secondary" className="text-lg px-8 py-4">
                    View Innovation Pricing
                    <DollarSign className="ml-2 w-5 h-5" />
                  </Button>
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-400 max-w-2xl mx-auto">
                  <div className="flex items-center justify-center">
                    <Phone className="w-4 h-4 mr-2 text-cyan-400" />
                    <span className="text-cyan-400">{contactInfo.mobile}</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Mail className="w-4 h-4 mr-2 text-cyan-400" />
                    <span className="text-cyan-400">{contactInfo.email}</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <MapPin className="w-4 h-4 mr-2 text-cyan-400" />
                    <span className="text-cyan-400">{contactInfo.address}</span>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-500">
                    🌐 Visit our website: <a href={contactInfo.website} className="text-cyan-400 hover:text-cyan-300 transition-colors">{contactInfo.website}</a>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </UltraAdvancedQuantumBackground>
  );
}