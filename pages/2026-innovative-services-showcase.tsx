import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Star, TrendingUp, Phone, Zap, DollarSign, Shield, Mail, MapPin, Rocket, Brain, Atom, Sparkles, Target, Globe, Database, Cloud, Lock, Palette, Layers, Microscope, Satellite, Cpu, Users, Star as StarIcon } from 'lucide-react';
import Button from '../components/ui/Button';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import UltraAdvancedNavigation from '../components/layout/UltraAdvancedNavigation';
import { innovative2026MicroSaasServices } from '../data/innovative-2026-micro-saas-services';
import { emergingTech2026Services } from '../data/emerging-tech-2026-services';

export default function Innovative2026ServicesShowcase() {
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  // Combine all 2026 services
  const all2026Services = [
    ...innovative2026MicroSaasServices,
    ...emergingTech2026Services
  ];

  // Service statistics
  const serviceStats = {
    totalServices: all2026Services.length,
    aiServices: all2026Services.filter(s => s.category.includes('AI')).length,
    quantumServices: all2026Services.filter(s => s.category.includes('Quantum')).length,
    emergingTech: all2026Services.filter(s => s.category.includes('Emerging')).length,
    averagePrice: '$1,299',
    totalMarketSize: '$289.7B',
    averageROI: '550%'
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <UltraAdvancedFuturisticBackground 
      intensity="extreme" 
      colorScheme="quantum-fusion"
      particleCount={600}
      animationSpeed={2.5}
      enableHolographic={true}
      enableQuantumEffects={true}
    >
      <div className="min-h-screen">
        <Head>
          <title>2026 Innovative Services Showcase - Zion Tech Group | Revolutionary AI, Quantum & Emerging Tech</title>
          <meta name="description" content="Discover Zion Tech Group's revolutionary 2026 services: AI-powered solutions, quantum computing platforms, and cutting-edge emerging technologies. Contact: +1 302 464 0950" />
          <meta name="keywords" content="2026 services, AI services, quantum computing, emerging technology, neuromorphic computing, DNA computing, photonic computing, holographic display, swarm robotics, quantum internet, biometric AI, quantum energy" />
          <meta name="author" content="Zion Tech Group" />
          <meta name="robots" content="index, follow" />
          <meta property="og:title" content="2026 Innovative Services Showcase - Zion Tech Group" />
          <meta property="og:description" content="Revolutionary AI, quantum computing, and emerging technology services for 2026. Contact: +1 302 464 0950" />
          <meta property="og:url" content="https://ziontechgroup.com/2026-innovative-services-showcase" />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://ziontechgroup.com/2026-innovative-services-showcase" />
        </Head>

        <UltraAdvancedNavigation />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-6xl mx-auto"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 mb-8">
                <Sparkles className="w-5 h-5 text-purple-400 mr-2" />
                <span className="text-purple-300 font-medium">2026 Innovation Showcase</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Revolutionary
                </span>
                <br />
                <span className="text-white">2026 Services</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                Experience the future of technology with our cutting-edge AI, quantum computing, and emerging technology services. 
                Transform your business with unprecedented capabilities and achieve extraordinary ROI.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  href="#services"
                  variant="primary"
                  size="lg"
                  className="group"
                >
                  Explore Services
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button
                  href={`tel:${contactInfo.mobile}`}
                  variant="secondary"
                  size="lg"
                  className="group"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call {contactInfo.mobile}
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-20 bg-gradient-to-r from-black/50 to-purple-900/20">
          <div className="container mx-auto px-4">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              <motion.div variants={itemVariants} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{serviceStats.totalServices}+</div>
                <div className="text-gray-400">Innovative Services</div>
              </motion.div>
              
              <motion.div variants={itemVariants} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{serviceStats.aiServices}</div>
                <div className="text-gray-400">AI-Powered Solutions</div>
              </motion.div>
              
              <motion.div variants={itemVariants} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{serviceStats.quantumServices}</div>
                <div className="text-gray-400">Quantum Services</div>
              </motion.div>
              
              <motion.div variants={itemVariants} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{serviceStats.averageROI}</div>
                <div className="text-gray-400">Average ROI</div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services" className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Revolutionary <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">2026 Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our comprehensive portfolio of cutting-edge services designed to propel your business into the future
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {all2026Services.map((service, index) => (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  className="group relative"
                >
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700/50 backdrop-blur-xl hover:border-purple-500/50 transition-all duration-500 hover:scale-105">
                    {/* Service Icon */}
                    <div className="absolute top-4 right-4 text-4xl">{service.icon}</div>
                    
                    {/* Popular Badge */}
                    {service.popular && (
                      <div className="absolute top-4 left-4">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 text-xs font-semibold text-white">
                          <StarIcon className="w-3 h-3 mr-1" />
                          Popular
                        </div>
                      </div>
                    )}

                    <div className="p-6">
                      {/* Service Header */}
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                          {service.name}
                        </h3>
                        <p className="text-gray-400 text-sm mb-3">{service.tagline}</p>
                        
                        {/* Price */}
                        <div className="flex items-baseline mb-4">
                          <span className="text-3xl font-bold text-white">{service.price}</span>
                          <span className="text-gray-400 ml-1">{service.period}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <li key={idx} className="flex items-start text-xs text-gray-400">
                              <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        {service.features.length > 3 && (
                          <p className="text-xs text-gray-500 mt-2">+{service.features.length - 3} more features</p>
                        )}
                      </div>

                      {/* Category & Technology */}
                      <div className="mb-6">
                        <div className="flex items-center justify-between text-xs">
                          <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full">
                            {service.category}
                          </span>
                          <span className="text-gray-500">
                            {service.technology.slice(0, 2).join(', ')}
                          </span>
                        </div>
                      </div>

                      {/* ROI & Market Info */}
                      <div className="mb-6 space-y-2">
                        <div className="text-xs">
                          <span className="text-gray-500">ROI: </span>
                          <span className="text-green-400 font-semibold">{service.roi.split(' ')[0]} ROI</span>
                        </div>
                        <div className="text-xs">
                          <span className="text-gray-500">Market: </span>
                          <span className="text-blue-400">{service.marketSize}</span>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <Button
                          href={service.link}
                          variant="primary"
                          size="sm"
                          className="flex-1 group-hover:bg-purple-600 transition-colors"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        
                        <Button
                          href={`mailto:${contactInfo.email}?subject=Inquiry about ${service.name}`}
                          variant="secondary"
                          size="sm"
                          className="px-4"
                        >
                          <Mail className="w-4 h-4" />
                        </Button>
                      </div>

                      {/* Contact Info */}
                      <div className="mt-4 pt-4 border-t border-gray-700/50">
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span>Contact: {contactInfo.mobile}</span>
                          <span>{contactInfo.email}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900/30 to-blue-900/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the future of technology with our revolutionary 2026 services. 
                Get in touch to discuss how we can help you achieve extraordinary results.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  href={`tel:${contactInfo.mobile}`}
                  variant="primary"
                  size="lg"
                  className="group"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call {contactInfo.mobile}
                </Button>
                
                <Button
                  href={`mailto:${contactInfo.email}?subject=2026 Services Inquiry`}
                  variant="secondary"
                  size="lg"
                  className="group"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Email Us
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black/50 border-t border-gray-800/50 py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-white font-bold text-lg mb-4">Zion Tech Group</h3>
                <p className="text-gray-400 text-sm">
                  Revolutionary AI, quantum computing, and emerging technology services for the future.
                </p>
              </div>
              
              <div>
                <h4 className="text-white font-semibold mb-4">Contact</h4>
                <div className="space-y-2 text-sm text-gray-400">
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 mr-2" />
                    {contactInfo.mobile}
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 mr-2" />
                    {contactInfo.email}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    {contactInfo.address}
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-white font-semibold mb-4">Services</h4>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>AI & Machine Learning</div>
                  <div>Quantum Computing</div>
                  <div>Emerging Technology</div>
                  <div>IT Solutions</div>
                </div>
              </div>
              
              <div>
                <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                <div className="space-y-2 text-sm text-gray-400">
                  <Link href="/" className="hover:text-white transition-colors">Home</Link>
                  <Link href="/services" className="hover:text-white transition-colors">Services</Link>
                  <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
                  <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-800/50 mt-8 pt-8 text-center text-sm text-gray-400">
              <p>&copy; 2026 Zion Tech Group. All rights reserved. | {contactInfo.website}</p>
            </div>
          </div>
        </footer>
      </div>
    </UltraAdvancedFuturisticBackground>
  );
}