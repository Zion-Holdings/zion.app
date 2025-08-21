import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Star, TrendingUp, Phone, Zap, DollarSign, Shield, Mail, MapPin, Rocket, Brain, Sparkles, Atom, Dna, Target, Microscope } from 'lucide-react';
import Button from '../components/ui/Button';
import UltraFuturisticBackground2034 from '../components/ui/UltraFuturisticBackground2034';
import UltraFuturisticNavigation2034 from '../components/layout/UltraFuturisticNavigation2034';
import UltraFuturisticFooter2034 from '../components/layout/UltraFuturisticFooter2034';
import UltraFuturisticServiceShowcase2034 from '../components/sections/UltraFuturisticServiceShowcase2034';
import { motion } from 'framer-motion';
import { ultimateFuturisticServices2034 } from '../data/2034-ultimate-futuristic-services';
// Import new 2034 services from remote
import { cuttingEdge2034Services } from '../data/2034-cutting-edge-innovations';
import { emergingTech2034Services } from '../data/2034-emerging-tech-breakthroughs';

export default function HomePage() {
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const heroFeatures = [
    '🧠 AI Consciousness & Emotional Intelligence',
    '⚛️ Quantum Computing & Emerging Tech',
    '🌌 Space Technology & Metaverse',
    '🏙️ Enterprise IT & Cybersecurity',
    '🎯 Micro SAAS & Business Solutions',
    '🔬 Research & Development'
  ];

  const stats = [
    { number: '500+', label: 'Revolutionary Services', icon: Rocket },
    { number: '$2T+', label: 'Market Opportunity', icon: DollarSign },
    { number: '50+', label: 'Technology Breakthroughs', icon: Brain },
    { number: '24/7', label: 'Future Support', icon: Shield }
  ];

  return (
    <>
      <Head>
        <title>Zion Tech Group - 2034 Future Technology | Revolutionary AI, Quantum Computing & Space Tech</title>
        <meta name="description" content="Leading the future of technology with revolutionary AI consciousness platforms, quantum computing solutions, space technology innovations, and innovative micro SAAS services. Transform your business with cutting-edge technology." />
        <meta name="keywords" content="AI consciousness, quantum computing, space technology, metaverse, micro SAAS, enterprise IT, cybersecurity, future technology, 2034" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Zion Tech Group - 2034 Future Technology" />
        <meta property="og:description" content="Revolutionary AI consciousness, quantum computing, space technology, and micro SAAS solutions for tomorrow." />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Zion Tech Group" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - 2034 Future Technology" />
        <meta name="twitter:description" content="Revolutionary AI consciousness, quantum computing, space technology, and micro SAAS solutions for tomorrow." />
        
        {/* Contact Information */}
        <meta name="contact:phone" content="+1 302 464 0950" />
        <meta name="contact:email" content="kleber@ziontechgroup.com" />
        <meta name="contact:address" content="364 E Main St STE 1008 Middletown DE 19709" />
        
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Head>

      <UltraFuturisticBackground2034 
        intensity="high" 
        colorScheme="quantum-fusion"
        particleCount={600}
        animationSpeed={2.0}
        enableHolographic={true}
        enableQuantumEffects={true}
        enableNeonEffects={true}
        enableSpaceEffects={true}
      >
        <UltraFuturisticNavigation2034 />
        
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center pt-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 border border-cyan-500/30 rounded-full text-cyan-300 text-lg font-medium mb-8"
            >
              <Star className="w-5 h-5 mr-2 text-cyan-400" />
              2034 Future Technology Revolution
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight"
            >
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Shape
              </span>
              <br />
              <span className="text-white">The Future</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed"
            >
              Experience the future with our revolutionary AI consciousness platforms, quantum computing solutions, 
              space technology innovations, and cutting-edge micro SAAS services that transform businesses and advance humanity.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
            >
              <motion.a
                href="/comprehensive-services-showcase-2025"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold text-lg rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 shadow-2xl shadow-cyan-500/25"
              >
                <span>Explore All Services</span>
                <ArrowRight className="w-6 h-6" />
              </motion.a>
              
              <motion.a
                href={`tel:${contactInfo.mobile}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-3 px-8 py-4 bg-black/50 border-2 border-cyan-500/50 text-cyan-300 font-bold text-lg rounded-xl hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-200"
              >
                <span>Call Now</span>
                <Phone className="w-6 h-6" />
              </motion.a>
            </motion.div>

            {/* Hero Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto"
            >
              {heroFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="flex items-center space-x-3 p-4 bg-black/30 border border-cyan-500/20 rounded-lg backdrop-blur-sm"
                >
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-gray-300 font-medium">{feature}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 border border-cyan-500/30 rounded-2xl flex items-center justify-center">
                      <stat.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Featured Services Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Featured <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Revolutionary Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our most innovative and transformative services that are reshaping industries and driving the future of technology.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* AI Consciousness Development Platform */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="group relative"
              >
                <div className="bg-black/40 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6 h-full hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-bold flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Popular
                  </div>
                  <div className="text-4xl mb-4">🧠🌟</div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    AI Consciousness Development Platform
                  </h3>
                  <p className="text-gray-300 mb-4">Develop AI systems with advanced consciousness capabilities</p>
                  <div className="flex items-baseline mb-4">
                    <span className="text-3xl font-bold text-white">$4,999</span>
                    <span className="text-gray-400 ml-1">/month</span>
                  </div>
                  <a
                    href="/comprehensive-services-showcase-2025?category=ai-innovations"
                    className="inline-flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 group-hover:shadow-2xl group-hover:shadow-cyan-500/25"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>

              {/* Zero-Trust Network Security Platform */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="group relative"
              >
                <div className="bg-black/40 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6 h-full hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-red-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center">
                    <Shield className="w-4 h-4 mr-1" />
                    Enterprise
                  </div>
                  <div className="text-4xl mb-4">🔒🛡️</div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    Zero-Trust Network Security Platform
                  </h3>
                  <p className="text-gray-300 mb-4">Next-generation network security with zero-trust architecture</p>
                  <div className="flex items-baseline mb-4">
                    <span className="text-3xl font-bold text-white">$2,999</span>
                    <span className="text-gray-400 ml-1">/month</span>
                  </div>
                  <a
                    href="/comprehensive-services-showcase-2025?category=it-innovations"
                    className="inline-flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 group-hover:shadow-2xl group-hover:shadow-cyan-500/25"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>

              {/* AI Customer Success Automation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="group relative"
              >
                <div className="bg-black/40 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6 h-full hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center">
                    <Target className="w-4 h-4 mr-1" />
                    Micro SAAS
                  </div>
                  <div className="text-4xl mb-4">🤖💼</div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    AI Customer Success Automation
                  </h3>
                  <p className="text-gray-300 mb-4">Automate customer success with intelligent AI</p>
                  <div className="flex items-baseline mb-4">
                    <span className="text-3xl font-bold text-white">$299</span>
                    <span className="text-gray-400 ml-1">/month</span>
                  </div>
                  <a
                    href="/comprehensive-services-showcase-2025?category=micro-saas"
                    className="inline-flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 group-hover:shadow-2xl group-hover:shadow-cyan-500/25"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mt-12"
            >
              <a
                href="/comprehensive-services-showcase-2025"
                className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold text-lg rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-200 shadow-2xl shadow-purple-500/25"
              >
                <span>View All Services</span>
                <ArrowRight className="w-6 h-6" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* Services Showcase */}
        <UltraFuturisticServiceShowcase2034 />

        {/* Why Choose Us Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Zion Tech Group</span>?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We're not just building the future – we're defining it. Our revolutionary approach combines 
                cutting-edge technology with visionary thinking to create solutions that transform industries.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Brain,
                  title: 'AI Consciousness Pioneer',
                  description: 'Leading the development of AI consciousness and emotional intelligence platforms that bridge the gap between human and artificial intelligence.',
                  color: 'from-pink-500 to-rose-500'
                },
                {
                  icon: Atom,
                  title: 'Quantum Innovation Leader',
                  description: 'At the forefront of quantum computing, developing solutions that solve previously impossible problems and unlock new possibilities.',
                  color: 'from-cyan-500 to-blue-500'
                },
                {
                  icon: Rocket,
                  title: 'Space Technology Visionary',
                  description: 'Pioneering space mining, metaverse development, and interplanetary technologies that expand human horizons beyond Earth.',
                  color: 'from-purple-500 to-indigo-500'
                },
                {
                  icon: Shield,
                  title: 'Enterprise Security Expert',
                  description: 'Providing next-generation cybersecurity and enterprise solutions that protect businesses in an increasingly complex digital world.',
                  color: 'from-green-500 to-emerald-500'
                },
                {
                  icon: Target,
                  title: 'Micro SAAS Innovator',
                  description: 'Creating ready-to-use business solutions that accelerate growth and streamline operations for modern enterprises.',
                  color: 'from-yellow-500 to-orange-500'
                },
                {
                  icon: Microscope,
                  title: 'Research & Development Hub',
                  description: 'Driving breakthrough technologies through cutting-edge research and development in emerging fields.',
                  color: 'from-blue-500 to-cyan-500'
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group relative"
                >
                  <div className="bg-gradient-to-br from-black/50 to-black/30 border border-cyan-500/30 rounded-2xl p-8 h-full backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300">
                    <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 border border-cyan-500/30 rounded-3xl p-12 text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Shape <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Tomorrow</span>?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join the revolution and transform your business with cutting-edge technology. 
                Our team of experts is ready to guide you into the future.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold text-lg rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 shadow-2xl shadow-cyan-500/25"
                >
                  <span>Get Started Today</span>
                  <ArrowRight className="w-6 h-6" />
                </motion.a>
                
                <motion.a
                  href="tel:+13024640950"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center space-x-3 px-8 py-4 bg-black/50 border-2 border-cyan-500/50 text-cyan-300 font-bold text-lg rounded-xl hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-200"
                >
                  <Phone className="w-6 h-6" />
                  <span>Call +1 302 464 0950</span>
                </motion.a>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
                <div className="flex items-center justify-center space-x-3 text-gray-300">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <span>{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-gray-300">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <span>{contactInfo.address}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <UltraFuturisticFooter2034 />
      </UltraFuturisticBackground2034>
    </>
  );
}