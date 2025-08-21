import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Star, TrendingUp, Zap, Brain, Sparkles, Rocket, Shield, Globe, Cpu, Database, Phone, Mail, MapPin } from 'lucide-react';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import EnhancedNavigation2026 from '../components/layout/EnhancedNavigation2026';
import { innovative2026MicroSaasServicesV2 } from '../data/innovative-2026-micro-saas-v2';
import { emergingTech2026ServicesV2 } from '../data/emerging-tech-2026-services-v2';
import { enterpriseIT2026ServicesV2 } from '../data/enterprise-it-2026-services-v2';

export default function Innovations2026Showcase() {
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const allNewServices = [
    ...innovative2026MicroSaasServicesV2,
    ...emergingTech2026ServicesV2,
    ...enterpriseIT2026ServicesV2
  ];

  const categories = [
    { name: 'AI & Business Intelligence', icon: Brain, color: 'from-purple-600 to-indigo-700' },
    { name: 'Quantum & Cybersecurity', icon: Shield, color: 'from-blue-600 to-cyan-700' },
    { name: 'AI & Automation', icon: Zap, color: 'from-green-600 to-emerald-700' },
    { name: 'Metaverse & 3D', icon: Globe, color: 'from-pink-600 to-rose-700' },
    { name: 'Quantum & Finance', icon: TrendingUp, color: 'from-yellow-600 to-orange-700' },
    { name: 'AI & Legal Tech', icon: CheckCircle, color: 'from-indigo-600 to-purple-700' },
    { name: 'Space & AI', icon: Rocket, color: 'from-gray-600 to-slate-700' },
    { name: 'Biotech & AI', icon: Cpu, color: 'from-teal-600 to-cyan-700' },
    { name: 'Blockchain & Web3', icon: Database, color: 'from-orange-600 to-red-700' },
    { name: 'AI & Manufacturing', icon: Sparkles, color: 'from-slate-600 to-gray-700' }
  ];

  return (
    <UltraAdvancedFuturisticBackground 
      intensity="extreme" 
      colorScheme="neural-network"
      particleCount={500}
      animationSpeed={2.5}
      enableHolographic={true}
      enableQuantumEffects={true}
      enableNeuralNetwork={true}
    >
      <div className="min-h-screen">
        <Head>
          <title>2026 Innovations Showcase - Zion Tech Group | Revolutionary AI, Quantum & IT Services</title>
          <meta name="description" content="Explore Zion Tech Group's revolutionary 2026 innovations in AI, quantum computing, and IT services. Achieve 1000% ROI with our cutting-edge solutions. Contact: +1 302 464 0950" />
          <meta name="keywords" content="2026 innovations, AI services, quantum computing, IT services, micro SaaS, cybersecurity, blockchain, metaverse, IoT, edge computing" />
          <meta name="author" content="Zion Tech Group" />
          <meta name="robots" content="index, follow" />
          <meta property="og:title" content="2026 Innovations Showcase - Zion Tech Group" />
          <meta property="og:description" content="Revolutionary AI, quantum computing, and IT services for 2026. Contact: +1 302 464 0950" />
          <meta property="og:url" content="https://ziontechgroup.com/2026-innovations-showcase" />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://ziontechgroup.com/2026-innovations-showcase" />
        </Head>

        {/* Enhanced Navigation */}
        <EnhancedNavigation2026 />

        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-cyan-900/20"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-6">
                2026 Innovations Showcase
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Discover the future of technology with our revolutionary AI, quantum computing, and IT services. 
                Experience unprecedented innovation and achieve 1000% ROI with cutting-edge solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center gap-2 text-green-400">
                  <CheckCircle className="w-5 h-5" />
                  <span>1000+ Services Available</span>
                </div>
                <div className="flex items-center gap-2 text-blue-400">
                  <Star className="w-5 h-5" />
                  <span>1000% ROI Guarantee</span>
                </div>
                <div className="flex items-center gap-2 text-purple-400">
                  <TrendingUp className="w-5 h-5" />
                  <span>Market-Leading Innovation</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-6 rounded-xl border border-blue-500/30">
                  <Phone className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                  <p className="text-blue-300">{contactInfo.mobile}</p>
                </div>
                <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 p-6 rounded-xl border border-green-500/30">
                  <Mail className="w-8 h-8 text-green-400 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                  <p className="text-green-300">{contactInfo.email}</p>
                </div>
                <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 p-6 rounded-xl border border-purple-500/30">
                  <MapPin className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                  <p className="text-purple-300">{contactInfo.address}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Revolutionary Service Categories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive range of cutting-edge services designed to transform your business
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <motion.div
                    key={category.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`bg-gradient-to-br ${category.color} p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 group`}
                  >
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-6 group-hover:bg-white/20 transition-all duration-300">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">{category.name}</h3>
                      <p className="text-white/80 mb-6">
                        Cutting-edge solutions designed for the future of business and technology
                      </p>
                      <Link 
                        href={`/services#${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                        className="inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors duration-300"
                      >
                        Explore Services
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Featured Services */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Featured 2026 Innovations
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our most revolutionary services that are reshaping the future of technology
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allNewServices.slice(0, 9).map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-2xl font-bold text-white mb-3">{service.name}</h3>
                    <p className="text-gray-300 mb-4">{service.tagline}</p>
                    <div className="text-3xl font-bold text-green-400 mb-2">
                      {service.price}
                      <span className="text-lg text-gray-400">{service.period}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3 text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="text-center">
                    <Link 
                      href={service.link}
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 group-hover:scale-105"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-center mt-12"
            >
              <Link 
                href="/services"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 hover:scale-105"
              >
                View All Services
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Market Statistics */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Market-Leading Innovation
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our services are designed to provide unprecedented value and competitive advantage
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { label: 'Total Services', value: allNewServices.length.toString(), icon: Zap, color: 'from-blue-500 to-cyan-500' },
                { label: 'AI Services', value: allNewServices.filter(s => s.category.includes('AI')).length.toString(), icon: Brain, color: 'from-purple-500 to-pink-500' },
                { label: 'Quantum Services', value: allNewServices.filter(s => s.category.includes('Quantum')).length.toString(), icon: Shield, color: 'from-green-500 to-emerald-500' },
                { label: 'Enterprise Solutions', value: allNewServices.filter(s => s.category.includes('Enterprise')).length.toString(), icon: Database, color: 'from-orange-500 to-red-500' }
              ].map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`bg-gradient-to-br ${stat.color} p-8 rounded-2xl border border-white/20 text-center`}
                  >
                    <IconComponent className="w-12 h-12 text-white mx-auto mb-4" />
                    <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-white/80">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/50 to-blue-900/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Lead the Future?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join thousands of businesses already transforming their operations with our revolutionary 2026 innovations. 
                Experience unprecedented growth and competitive advantage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link 
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 hover:scale-105"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a 
                  href={`tel:${contactInfo.mobile}`}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 hover:scale-105"
                >
                  Call {contactInfo.mobile}
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900/80 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto text-center">
            <div className="text-gray-400 mb-6">
              <p>© 2026 Zion Tech Group. All rights reserved.</p>
              <p className="mt-2">
                Contact: {contactInfo.mobile} | {contactInfo.email} | {contactInfo.address}
              </p>
            </div>
            <div className="flex justify-center space-x-6">
              <Link href="/" className="text-gray-400 hover:text-white transition-colors duration-300">
                Home
              </Link>
              <Link href="/services" className="text-gray-400 hover:text-white transition-colors duration-300">
                Services
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-white transition-colors duration-300">
                Contact
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </UltraAdvancedFuturisticBackground>
  );
}