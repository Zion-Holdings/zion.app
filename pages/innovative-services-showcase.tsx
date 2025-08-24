import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Brain, Rocket, Dna, Globe, TrendingUp, Shield, 
  Wifi, Package, Bot, Lock, Car, Building2,
  DollarSign, Monitor, Users, FileText, Search, Phone,
  Star, CheckCircle, ArrowRight, ExternalLink
} from 'lucide-react';
import { innovativeMicroSaasServices } from '../data/innovative-micro-saas-services';
import { emergingTechServices } from '../data/emerging-tech-services';
import UltraFuturisticMatrixBackground from '../components/ui/UltraFuturisticMatrixBackground';

export default function InnovativeServicesShowcase() {
  const allServices = [...innovativeMicroSaasServices, ...emergingTechServices];

  const categories = [
    { name: 'Quantum AI & Neuroscience', icon: Brain, color: 'from-purple-600 to-pink-600' },
    { name: 'Space Technology', icon: Rocket, color: 'from-blue-600 to-indigo-600' },
    { name: 'Biotech & AI', icon: Dna, color: 'from-green-600 to-emerald-600' },
    { name: 'Metaverse & AI', icon: Globe, color: 'from-violet-600 to-purple-600' },
    { name: 'Quantum Finance', icon: TrendingUp, color: 'from-yellow-600 to-orange-600' },
    { name: 'Quantum Cybersecurity', icon: Shield, color: 'from-red-600 to-pink-600' },
    { name: 'Quantum IoT', icon: Wifi, color: 'from-blue-600 to-cyan-600' },
    { name: 'Quantum Logistics', icon: Package, color: 'from-green-600 to-blue-600' },
    { name: 'Quantum Robotics', icon: Bot, color: 'from-gray-600 to-slate-600' },
    { name: 'Autonomous Vehicles', icon: Car, color: 'from-blue-600 to-green-600' },
    { name: 'Autonomous Manufacturing', icon: Building2, color: 'from-gray-600 to-blue-600' },
    { name: 'AI Sales & Marketing', icon: DollarSign, color: 'from-green-600 to-yellow-600' },
    { name: 'AI Content & Media', icon: Monitor, color: 'from-purple-600 to-pink-600' },
    { name: 'AI HR & Legal', icon: Users, color: 'from-blue-600 to-indigo-600' },
    { name: 'AI Research & Analytics', icon: Search, color: 'from-green-600 to-blue-600' },
    { name: 'AI Communication', icon: Phone, color: 'from-blue-600 to-green-600' }
  ];

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="quantum-matrix-grid"></div>
      <div className="holographic-rings"></div>
      <div className="neural-network-pattern"></div>
      <div className="cyberpunk-grid"></div>
      <div className="quantum-field-effect"></div>
      
      <Head>
        <title>Innovative Services Showcase - Zion Tech Group | Revolutionary AI & Quantum Solutions</title>
        <meta name="description" content="Explore our most innovative and revolutionary AI, quantum computing, and emerging technology services. First-to-market solutions with breakthrough capabilities." />
        <meta name="keywords" content="innovative AI, quantum computing, neural interface, space technology, biotech, autonomous systems, revolutionary technology" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Innovative Services Showcase - Zion Tech Group" />
        <meta property="og:description" content="Explore our most innovative and revolutionary AI, quantum computing, and emerging technology services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/innovative-services-showcase" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
      </Head>

      {/* Enhanced Header */}
      <header className="relative z-10 bg-black/80 backdrop-blur-xl border-b border-purple-500/20">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="holographic-text text-5xl md:text-6xl font-bold mb-6">
              Innovative Services Showcase
            </h1>
            <p className="quantum-text text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Discover our most revolutionary and first-to-market AI, quantum computing, and emerging technology solutions
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <span className="px-6 py-3 bg-purple-500/20 border border-purple-500/40 rounded-full text-purple-400 font-semibold">
                🚀 First-to-Market
              </span>
              <span className="px-6 py-3 bg-cyan-500/20 border border-cyan-500/40 rounded-full text-cyan-400 font-semibold">
                🧠 Revolutionary AI
              </span>
              <span className="px-6 py-3 bg-green-500/20 border border-green-500/40 rounded-full text-green-400 font-semibold">
                ⚛️ Quantum Computing
              </span>
              <span className="px-6 py-3 bg-pink-500/20 border border-pink-500/40 rounded-full text-pink-400 font-semibold">
                🌟 Breakthrough Technology
              </span>
            </div>
          </div>
        </div>
      </header>

      <UltraFuturisticMatrixBackground>
        <div className="min-h-screen relative z-10">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                Revolutionary Micro SAAS Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Experience the future of business with our cutting-edge micro SAAS solutions powered by quantum AI, autonomous systems, and breakthrough technology.
              </p>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30">
                  <div className="text-3xl font-bold text-purple-400 mb-2">25+</div>
                  <div className="text-gray-300">Innovative Services</div>
                </div>
                <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30">
                  <div className="text-3xl font-bold text-blue-400 mb-2">$50B+</div>
                  <div className="text-gray-300">Market Value</div>
                </div>
                <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 backdrop-blur-sm rounded-xl p-6 border border-green-500/30">
                  <div className="text-3xl font-bold text-green-400 mb-2">500%+</div>
                  <div className="text-gray-300">Average ROI</div>
                </div>
                <div className="bg-gradient-to-br from-yellow-600/20 to-orange-600/20 backdrop-blur-sm rounded-xl p-6 border border-yellow-500/30">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
                  <div className="text-gray-300">AI Support</div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-600/30 max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Zion Tech Group</h3>
                <div className="space-y-4 text-left">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-300">{contactInfo.mobile}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <ExternalLink className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300">{contactInfo.email}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">{contactInfo.address}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Service Categories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive range of innovative services across cutting-edge technology domains
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {categories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <motion.div
                    key={category.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group cursor-pointer"
                  >
                    <div className={`bg-gradient-to-br ${category.color} p-6 rounded-xl text-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl`}>
                      <Icon className="w-8 h-8 mx-auto mb-3 text-white" />
                      <h3 className="text-sm font-semibold text-white leading-tight">
                        {category.name}
                      </h3>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Featured Services Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Featured Revolutionary Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our most innovative and game-changing micro SAAS solutions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allServices.filter(service => service.popular).slice(0, 9).map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-600/30 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-4xl">{service.icon}</div>
                      {service.popular && (
                        <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                          Popular
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                      {service.name}
                    </h3>
                    
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                      {service.description}
                    </p>

                    <div className="flex items-center justify-between mb-4">
                      <div className="text-2xl font-bold text-purple-400">
                        {service.price}
                        <span className="text-sm text-gray-400">{service.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-300">{service.rating}</span>
                        <span className="text-xs text-gray-500">({service.reviews})</span>
                      </div>
                    </div>

                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-xs text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="text-xs">
                        <span className="text-gray-400">Market Size:</span>
                        <span className="text-green-400 ml-2">{service.marketSize}</span>
                      </div>
                      <div className="text-xs">
                        <span className="text-gray-400">Growth Rate:</span>
                        <span className="text-blue-400 ml-2">{service.growthRate}</span>
                      </div>
                      <div className="text-xs">
                        <span className="text-gray-400">ROI:</span>
                        <span className="text-purple-400 ml-2">{service.roi}</span>
                      </div>
                    </div>

                    <div className="flex space-x-3">
                      <a
                        href={service.link}
                        className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center py-3 px-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center space-x-2"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                      <button className="bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-lg transition-colors duration-300">
                        <Phone className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Market Analysis Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Market Analysis & Competitive Advantage
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Understand why our services outperform competitors and deliver exceptional ROI
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-900/50 to-indigo-900/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30">
                <h3 className="text-2xl font-bold text-white mb-6">Competitive Advantages</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white">Quantum AI Integration</h4>
                      <p className="text-gray-300 text-sm">First-to-market quantum AI capabilities in multiple domains</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white">Cost Leadership</h4>
                      <p className="text-gray-300 text-sm">90% cost reduction compared to enterprise competitors</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white">Performance Superiority</h4>
                      <p className="text-gray-300 text-sm">99.9% accuracy and 500%+ ROI across all services</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-900/50 to-emerald-900/50 backdrop-blur-sm rounded-2xl p-8 border border-green-500/30">
                <h3 className="text-2xl font-bold text-white mb-6">Market Opportunities</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <TrendingUp className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white">Quantum Computing</h4>
                      <p className="text-gray-300 text-sm">$1.5B market with 300% annual growth</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <TrendingUp className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white">Space Technology</h4>
                      <p className="text-gray-300 text-sm">$469B space economy with 150% growth</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <TrendingUp className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white">Biotech AI</h4>
                      <p className="text-gray-300 text-sm">$1.5T market with 200% annual growth</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the future of business with our revolutionary micro SAAS services. Get started with a free trial today.
              </p>
              
              <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Zion Tech Group</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <Phone className="w-8 h-8 mx-auto mb-3 text-cyan-400" />
                    <div className="text-white font-semibold">Phone</div>
                    <div className="text-gray-300">{contactInfo.mobile}</div>
                  </div>
                  <div className="text-center">
                    <ExternalLink className="w-8 h-8 mx-auto mb-3 text-purple-400" />
                    <div className="text-white font-semibold">Email</div>
                    <div className="text-gray-300">{contactInfo.email}</div>
                  </div>
                  <div className="text-center">
                    <CheckCircle className="w-8 h-8 mx-auto mb-3 text-green-400" />
                    <div className="text-white font-semibold">Address</div>
                    <div className="text-gray-300 text-sm">{contactInfo.address}</div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://ziontechgroup.com"
                    className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>Visit Website</span>
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <a
                    href={`tel:${contactInfo.mobile}`}
                    className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>Call Now</span>
                    <Phone className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        </div>
      </UltraFuturisticMatrixBackground>
    </div>
  );
}