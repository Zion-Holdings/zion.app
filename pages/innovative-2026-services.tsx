import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Star, CheckCircle, Phone, Mail, MapPin, Rocket, Shield, Zap, Brain, Cpu } from 'lucide-react';
import Button from '../components/ui/Button';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import UltraAdvancedNavigation from '../components/layout/UltraAdvancedNavigation';
import { innovative2026Services } from '../data/innovative-2026-services';
import { revolutionaryAIServices2026 } from '../data/revolutionary-ai-services-2026';
import { enterpriseITSolutions2026 } from '../data/enterprise-it-solutions-2026';
import { cybersecuritySolutions2026 } from '../data/cybersecurity-solutions-2026';

export default function Innovative2026ServicesPage() {
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  // Combine all 2026 services
  const all2026Services = [
    ...innovative2026Services,
    ...revolutionaryAIServices2026,
    ...enterpriseITSolutions2026,
    ...cybersecuritySolutions2026
  ];

  const serviceCategories = [
    {
      title: 'AI & Consciousness',
      services: innovative2026Services.filter(s => s.category.includes('AI')),
      icon: Brain,
      color: 'from-purple-500 to-indigo-600'
    },
    {
      title: 'Quantum & Neural Interface',
      services: innovative2026Services.filter(s => s.category.includes('Quantum')),
      icon: Cpu,
      color: 'from-cyan-500 to-blue-600'
    },
    {
      title: 'Revolutionary AI Services',
      services: revolutionaryAIServices2026,
      icon: Zap,
      color: 'from-pink-500 to-rose-600'
    },
    {
      title: 'Enterprise IT Solutions',
      services: enterpriseITSolutions2026,
      icon: Shield,
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Cybersecurity Solutions',
      services: cybersecuritySolutions2026,
      icon: Shield,
      color: 'from-red-500 to-pink-600'
    }
  ];

  return (
    <UltraAdvancedFuturisticBackground 
      intensity="extreme" 
      colorScheme="quantum-fusion"
      particleCount={500}
      animationSpeed={2.0}
      enableHolographic={true}
      enableQuantumEffects={true}
    >
      <div className="min-h-screen">
        <Head>
          <title>2026 Innovative Services - Zion Tech Group | Revolutionary AI, Quantum & IT Solutions</title>
          <meta name="description" content="Experience the future with Zion Tech Group's 2026 innovative services. AI consciousness simulation, quantum neural interfaces, and revolutionary cybersecurity solutions. Contact: +1 302 464 0950" />
          <meta name="keywords" content="2026 innovative services, AI consciousness simulation, quantum neural interface, AI time series prediction, quantum internet security, AI emotional intelligence, Zion Tech Group" />
          <meta name="author" content="Zion Tech Group" />
          <meta property="og:title" content="2026 Innovative Services - Zion Tech Group" />
          <meta property="og:description" content="Revolutionary AI, quantum computing, and cybersecurity solutions for 2026" />
          <meta property="og:url" content="https://ziontechgroup.com/innovative-2026-services" />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://ziontechgroup.com/innovative-2026-services" />
        </Head>

        {/* Navigation */}
        <UltraAdvancedNavigation />

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  2026 Revolutionary Services
                </span>
              </h1>
              <p className="text-2xl md:text-3xl text-gray-300 max-w-5xl mx-auto leading-relaxed mb-12">
                Experience the future with our cutting-edge AI, quantum computing, and cybersecurity solutions that push the boundaries of what's possible
              </p>
              
              {/* Service Statistics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-cyan-400 mb-2">{all2026Services.length}</div>
                  <div className="text-gray-400">Total Services</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-purple-400 mb-2">$15B+</div>
                  <div className="text-gray-400">Market Size</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-pink-400 mb-2">500%+</div>
                  <div className="text-gray-400">Average ROI</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-green-400 mb-2">4.9/5</div>
                  <div className="text-gray-400">Customer Rating</div>
                </motion.div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button 
                    href="#services" 
                    variant="primary"
                    size="lg"
                    className="text-xl px-12 py-6 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 shadow-2xl hover:shadow-cyan-500/30 border-0"
                  >
                    <span className="flex items-center">
                      <Rocket className="mr-3 w-7 h-7" />
                      Explore Services
                    </span>
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                >
                  <Button 
                    href="/contact" 
                    variant="secondary"
                    size="lg"
                    className="text-xl px-12 py-6 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 shadow-2xl hover:shadow-purple-500/30 border-0"
                  >
                    <span className="flex items-center">
                      <Phone className="mr-3 w-7 h-7" />
                      Contact Us
                    </span>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services by Category */}
        <section id="services" className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {serviceCategories.map((category, categoryIndex) => (
              <div key={category.title} className="mb-24">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center mb-16"
                >
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${category.color} rounded-2xl mb-6 shadow-2xl`}>
                    <category.icon className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
                    {category.title}
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Revolutionary solutions that redefine the boundaries of technology and innovation
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 30, scale: 0.9 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.7, delay: serviceIndex * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, y: -8 }}
                      className="group p-8 bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-gray-700/50 rounded-3xl hover:border-cyan-500/60 hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-500 relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative z-10">
                        <div className="text-4xl mb-4">{service.icon}</div>
                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                          {service.name}
                        </h3>
                        <p className="text-gray-300 text-base leading-relaxed mb-6">
                          {service.description}
                        </p>
                        
                        {/* Features */}
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                          <ul className="space-y-2">
                            {service.features.slice(0, 3).map((feature, index) => (
                              <li key={index} className="flex items-center text-sm text-gray-300">
                                <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Pricing and Rating */}
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-3xl font-bold text-cyan-400">{service.price}</span>
                          <span className="text-gray-400">{service.period}</span>
                        </div>
                        <div className="text-sm text-gray-400 mb-4">
                          <span className="text-yellow-400">★</span> {service.rating}/5 ({service.reviews} reviews)
                        </div>

                        {/* Market Info */}
                        <div className="mb-6 p-4 bg-gray-800/40 rounded-lg">
                          <div className="text-sm text-gray-300 mb-2">
                            <strong>Market Size:</strong> {service.marketSize}
                          </div>
                          <div className="text-sm text-gray-300 mb-2">
                            <strong>Growth Rate:</strong> {service.growthRate}
                          </div>
                          <div className="text-sm text-gray-300">
                            <strong>ROI:</strong> {service.roi}
                          </div>
                        </div>

                        <Button 
                          href={service.link} 
                          variant="primary"
                          size="sm"
                          className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                        >
                          Learn More
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
                Ready to Experience the <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Future</span>?
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Contact our team to learn more about our 2026 innovative services and start your transformation journey
              </p>
            </motion.div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="group flex items-center justify-center space-x-4 p-6 bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-gray-700/50 rounded-2xl hover:border-cyan-500/60 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-sm text-cyan-400 font-medium mb-1">Phone</div>
                  <div className="text-lg text-white font-semibold">{contactInfo.mobile}</div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="group flex items-center justify-center space-x-4 p-6 bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-gray-700/50 rounded-2xl hover:border-purple-500/60 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-sm text-purple-400 font-medium mb-1">Email</div>
                  <div className="text-lg text-white font-semibold">{contactInfo.email}</div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="group flex items-center justify-center space-x-4 p-6 bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-gray-700/50 rounded-2xl hover:border-green-500/60 hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-sm text-green-400 font-medium mb-1">Address</div>
                  <div className="text-lg text-white font-semibold">{contactInfo.address}</div>
                </div>
              </motion.div>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Button 
                href="/contact" 
                variant="primary"
                size="lg"
                className="text-xl px-12 py-6 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 shadow-2xl hover:shadow-cyan-500/30 border-0"
              >
                <span className="flex items-center">
                  <Rocket className="mr-3 w-7 h-7" />
                  Start Your Transformation
                </span>
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </UltraAdvancedFuturisticBackground>
  );
}