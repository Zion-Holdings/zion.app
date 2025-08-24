import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Brain, Rocket, Target, Cpu, Globe, Eye, 
  ChevronRight, Star, TrendingUp, Zap, Shield,
  ArrowRight, Search, Filter, Grid, List,
  Phone, Mail, MapPin, ExternalLink, Sparkles
} from 'lucide-react';
import UltraFuturisticBackground2029 from '../components/ui/UltraFuturisticBackground2029';
import UltraFuturisticNavigation2029V2 from '../components/layout/UltraFuturisticNavigation2029V2';
import UltraFuturisticFooter2029V2 from '../components/layout/UltraFuturisticFooter2029V2';
import ComprehensiveServicesShowcase2029 from '../components/sections/ComprehensiveServicesShowcase2029';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

export default function InnovationsPage() {
  return (
    <UltraFuturisticBackground2029>
      <div className="min-h-screen bg-black/90">
        <Head>
          <title>2029 Innovations - Zion Tech Group | AI, Quantum, Space Tech Breakthroughs</title>
          <meta name="description" content="Discover our groundbreaking 2029 innovations in AI consciousness, quantum computing, space technology, and enterprise solutions. Transform your business with next-generation technology." />
          <meta name="keywords" content="AI innovations, quantum computing, space technology, enterprise solutions, Zion Tech Group, 2029 technology" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          
          {/* Open Graph */}
          <meta property="og:title" content="2029 Innovations - Zion Tech Group" />
          <meta property="og:description" content="Discover our groundbreaking 2029 innovations in AI consciousness, quantum computing, space technology, and enterprise solutions." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://ziontechgroup.com/innovations" />
          <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
          
          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="2029 Innovations - Zion Tech Group" />
          <meta name="twitter:description" content="Discover our groundbreaking 2029 innovations in AI consciousness, quantum computing, space technology, and enterprise solutions." />
          <meta name="twitter:image" content="https://ziontechgroup.com/og-image.jpg" />
        </Head>

        {/* Enhanced Navigation */}
        <UltraFuturisticNavigation2029V2 />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="mb-8"
              >
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mb-6">
                  <Sparkles className="w-12 h-12 text-white" />
                </div>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-7xl font-bold mb-8"
              >
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  2029 Innovations
                </span>
                <br />
                <span className="text-white">
                  Breakthrough
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12"
              >
                Experience the future today with our revolutionary innovations in AI consciousness, 
                quantum computing, space technology, and enterprise solutions that are reshaping 
                industries and unlocking unprecedented possibilities.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              >
                <a
                  href="#innovations"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 text-lg"
                >
                  <Eye className="w-5 h-5 mr-2" />
                  Explore Innovations
                </a>
                
                <a
                  href={`mailto:${contactInfo.email}?subject=Innovation Partnership Inquiry`}
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500 hover:text-white transition-all duration-300 transform hover:scale-105 text-lg"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Partner With Us
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Innovation Categories Overview */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Innovation <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Categories</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our innovations span across four revolutionary domains, each pushing the boundaries 
                of what's possible in technology and business transformation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Brain,
                  title: 'AI Consciousness',
                  description: 'Revolutionary AI consciousness development and emotional intelligence platforms',
                  color: 'from-violet-600 via-purple-600 to-indigo-600',
                  features: ['Consciousness Evolution', 'Emotional Intelligence', 'Creative Orchestration', 'Autonomous Business Management']
                },
                {
                  icon: Globe,
                  title: 'Quantum Technology',
                  description: 'Quantum-AI fusion and breakthrough quantum computing solutions',
                  color: 'from-indigo-600 via-blue-600 to-cyan-600',
                  features: ['Quantum-AI Fusion', 'Quantum Internet Security', 'DNA Computing', 'Quantum Financial Trading']
                },
                {
                  icon: Rocket,
                  title: 'Space Technology',
                  description: 'Next-generation space exploration and metaverse digital reality',
                  color: 'from-teal-600 via-emerald-600 to-green-600',
                  features: ['Space Mining Automation', 'Metaverse Digital Reality', 'AI Health Analytics', 'Holographic Events']
                },
                {
                  icon: Cpu,
                  title: 'Enterprise IT',
                  description: 'AI-powered enterprise solutions and intelligent business optimization',
                  color: 'from-blue-600 via-cyan-600 to-teal-600',
                  features: ['Business Intelligence', 'Supply Chain Optimization', 'HR Analytics', 'Cybersecurity']
                }
              ].map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className={`p-8 rounded-2xl bg-gradient-to-br ${category.color} bg-opacity-10 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-500 h-full hover:transform hover:scale-105 backdrop-blur-sm`}>
                    <div className="text-center mb-6">
                      <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${category.color} rounded-full mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <category.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                        {category.title}
                      </h3>
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {category.description}
                      </p>
                    </div>
                    
                    <div className="space-y-3">
                      {category.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-sm text-gray-300">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Comprehensive Services Showcase */}
        <section id="innovations" className="py-20">
          <ComprehensiveServicesShowcase2029 />
        </section>

        {/* Innovation Impact Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Innovation <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Impact</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our innovations are already transforming industries and creating unprecedented value 
                for businesses worldwide.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: TrendingUp,
                  title: 'Market Leadership',
                  description: 'First-to-market solutions in AI consciousness, quantum-AI fusion, and space technology',
                  stats: '15+ First-to-market innovations'
                },
                {
                  icon: Zap,
                  title: 'ROI Performance',
                  description: 'Exceptional return on investment with our breakthrough solutions',
                  stats: 'Up to 1500% ROI'
                },
                {
                  icon: Shield,
                  title: 'Future-Proofing',
                  description: 'Solutions designed for the next decade of technological advancement',
                  stats: '2029+ Future-ready'
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-8 bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700/50 rounded-2xl backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-500"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mb-6">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="text-cyan-400 font-bold text-lg">
                    {item.stats}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 border border-gray-700/50 rounded-2xl p-12 backdrop-blur-sm">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Lead the <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Future?</span>
                </h2>
                <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
                  Partner with Zion Tech Group to access the most advanced innovations of 2029. 
                  Transform your business and lead your industry into the future.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <a
                    href={`mailto:${contactInfo.email}?subject=Innovation Partnership Inquiry`}
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 text-lg"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Start Innovation Partnership
                  </a>
                  
                  <div className="flex items-center space-x-6 text-gray-300">
                    <div className="flex items-center space-x-2">
                      <Phone className="w-5 h-5 text-cyan-400" />
                      <span>{contactInfo.mobile}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="w-5 h-5 text-cyan-400" />
                      <span>{contactInfo.email}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Footer */}
        <UltraFuturisticFooter2029V2 />
      </div>
    </UltraFuturisticBackground2029>
  );
}