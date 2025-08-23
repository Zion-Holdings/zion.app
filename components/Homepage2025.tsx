import React from 'react';
import Layout from './layout/Layout';
import UltraFuturisticServiceCard2026 from './ui/UltraFuturisticServiceCard2026';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Brain, Atom, Shield, Zap, Search, MessageCircle, Phone, Mail, Check, Star, TrendingUp, Globe, MapPin
} from 'lucide-react';

const Homepage2025: React.FC = () => {
  const [showFloatingActions, setShowFloatingActions] = React.useState(true);
  
  return (
    <Layout>
      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rounded-lg animate-pulse"></div>
            <div className="absolute top-40 right-32 w-24 h-24 border border-purple-400/20 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute bottom-32 left-32 w-40 h-40 border border-pink-400/20 transform rotate-45 animate-pulse delay-2000"></div>
          </div>
          
          <div className="text-center max-w-4xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {/* Company Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full text-cyan-400 text-sm font-medium"
              >
                <Star className="w-4 h-4" />
                <span>Innovation Leader 2025</span>
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Zion Tech Group
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Pioneering the future of technology with innovative solutions that drive business transformation
              </p>
              
              {/* Enhanced CTA Section */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link href="/get-started">
                  <button className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                    <span className="flex items-center gap-2">
                      Get Started
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                </Link>
                <Link href="/services">
                  <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105">
                    Learn More
                  </button>
                </Link>
                <Link href="/comprehensive-2025-services-showcase">
                  <button className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-black transition-all duration-300 transform hover:scale-105">
                    2025 Services Showcase
                  </button>
                </Link>
              </div>
              
              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex items-center justify-center space-x-6 text-sm text-gray-400"
              >
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-green-400" />
                  <span>Enterprise Security</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="w-4 h-4 text-blue-400" />
                  <span>Global Reach</span>
                </div>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-4 h-4 text-purple-400" />
                  <span>Proven Results</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Company Stats */}
        <section className="py-20 px-4 bg-black/30 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            >
              <motion.div 
                className="p-6 group hover:bg-white/5 rounded-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl font-bold text-cyan-400 mb-2 group-hover:text-cyan-300 transition-colors">50+</div>
                <div className="text-gray-300">AI Services</div>
                <div className="text-xs text-cyan-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">Cutting-edge solutions</div>
              </motion.div>
              <motion.div 
                className="p-6 group hover:bg-white/5 rounded-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl font-bold text-blue-400 mb-2 group-hover:text-blue-300 transition-colors">100+</div>
                <div className="text-gray-300">Quantum Solutions</div>
                <div className="text-xs text-blue-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">Next-gen computing</div>
              </motion.div>
              <motion.div 
                className="p-6 group hover:bg-white/5 rounded-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl font-bold text-purple-400 mb-2 group-hover:text-purple-300 transition-colors">24/7</div>
                <div className="text-gray-300">Autonomous Operations</div>
                <div className="text-xs text-purple-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">Always available</div>
              </motion.div>
              <motion.div 
                className="p-6 group hover:bg-white/5 rounded-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl font-bold text-green-400 mb-2 group-hover:text-green-300 transition-colors">∞</div>
                <div className="text-gray-300">Future Possibilities</div>
                <div className="text-xs text-green-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">Unlimited potential</div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Our Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our comprehensive range of cutting-edge technology solutions designed to transform your business
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <UltraFuturisticServiceCard2026
                service={{
                  id: 'ai-ml',
                  name: 'AI & Machine Learning',
                  tagline: 'Advanced artificial intelligence solutions',
                  description: 'Advanced artificial intelligence solutions for modern businesses',
                  price: '$999',
                  period: 'month',
                  features: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision'],
                  popular: true,
                  category: 'AI',
                  icon: '🧠'
                }}
                variant="ai"
              />
              <UltraFuturisticServiceCard2026
                service={{
                  id: 'quantum-computing',
                  name: 'Quantum Computing',
                  tagline: 'Next-generation computing solutions',
                  description: 'Next-generation computing solutions for complex problems',
                  price: '$1999',
                  period: 'month',
                  features: ['Quantum Algorithms', 'Quantum Security', 'Quantum Simulation'],
                  popular: false,
                  category: 'Quantum',
                  icon: '⚛️'
                }}
                variant="quantum"
              />
              <UltraFuturisticServiceCard2026
                service={{
                  id: 'process-automation',
                  name: 'Process Automation',
                  tagline: 'Intelligent automation solutions',
                  description: 'Intelligent automation to streamline your operations',
                  price: '$799',
                  period: 'month',
                  features: ['Workflow Automation', 'RPA', 'AI Integration', 'Analytics'],
                  popular: true,
                  category: 'Automation',
                  icon: '⚡'
                }}
                variant="automation"
              />
              <UltraFuturisticServiceCard2026
                service={{
                  id: 'ai-holographic-meetings',
                  name: 'AI Holographic Meetings',
                  tagline: 'Next-generation holographic collaboration',
                  description: 'Revolutionary platform for lifelike holographic meetings with AI assistance',
                  price: '$299',
                  period: 'month',
                  features: ['3D Holographic Projections', 'AI Translation', 'Gesture Control', 'Immersive Collaboration'],
                  popular: true,
                  category: 'AI & Holographic',
                  icon: '🌟'
                }}
                variant="ai"
              />
              <UltraFuturisticServiceCard2026
                service={{
                  id: 'quantum-drug-discovery',
                  name: 'Quantum Drug Discovery',
                  tagline: 'Accelerate pharmaceutical research',
                  description: 'Quantum-powered AI platform for accelerated drug discovery and molecular modeling',
                  price: '$1999',
                  period: 'month',
                  features: ['Quantum Molecular Modeling', 'AI Drug Screening', 'Predictive Analytics', 'Clinical Optimization'],
                  popular: false,
                  category: 'Quantum Healthcare',
                  icon: '💊'
                }}
                variant="quantum"
              />
              <UltraFuturisticServiceCard2026
                service={{
                  id: 'autonomous-legal-ai',
                  name: 'Autonomous Legal AI',
                  tagline: 'AI-powered legal assistance',
                  description: 'Intelligent legal assistant for research, analysis, and case preparation',
                  price: '$199',
                  period: 'month',
                  features: ['Autonomous Research', 'Document Analysis', 'Case Law Synthesis', 'Risk Assessment'],
                  popular: true,
                  category: 'AI Legal Tech',
                  icon: '⚖️'
                }}
                variant="automation"
              />
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/demo"
              className="border border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 backdrop-blur-md hover:bg-white/10"
            >
              Request Demo
            </Link>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-gray-400 text-sm">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-gray-400 text-sm">AI Solutions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">25+</div>
              <div className="text-gray-400 text-sm">Quantum Services</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-gray-400 text-sm">Uptime SLA</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        {/* Enhanced Animated Background */}
        <div className="absolute inset-0">
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-20 w-40 h-40 border border-cyan-500/30 rounded-full"
          />
          <motion.div
            animate={{ 
              rotate: -360,
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-40 right-32 w-32 h-32 border border-purple-500/30 rounded-full"
          />
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.3, 1],
              opacity: [0.4, 0.7, 0.4]
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-32 left-1/4 w-28 h-28 border border-blue-500/30 rounded-full"
          />
          <motion.div
            animate={{ 
              rotate: -360,
              scale: [1, 1.15, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-20 right-1/3 w-36 h-36 border border-green-500/30 rounded-full"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Revolutionary 2038
              </span>
              <br />
              <span className="text-white">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Experience the future of technology with our cutting-edge portfolio featuring AI consciousness evolution, 
              quantum computing, space technology, and innovative micro SAAS solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="group bg-gradient-to-br from-cyan-900/30 to-blue-900/30 border border-cyan-500/30 rounded-2xl p-8 backdrop-blur-sm hover:border-cyan-500/60 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 transform hover:scale-105"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">AI Consciousness Evolution</h3>
              <p className="text-gray-300 mb-6">
                Advanced AI systems that evolve and develop consciousness, pushing the boundaries of machine intelligence and emotional understanding.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-sm text-cyan-300">
                  <Check className="w-4 h-4" />
                  <span>Consciousness development</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-cyan-300">
                  <Check className="w-4 h-4" />
                  <span>Emotional intelligence</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-cyan-300">
                  <Check className="w-4 h-4" />
                  <span>Ethical reasoning</span>
                </div>
              </div>
              <Link
                href="/comprehensive-services-showcase-2038"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group-hover:translate-x-1 duration-300"
              >
                Explore AI Services <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
                        </motion.div>

            {/* Quantum Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="group bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-2xl p-8 backdrop-blur-sm hover:border-purple-500/60 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 transform hover:scale-105"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Atom className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Quantum Computing</h3>
              <p className="text-gray-300 mb-6">
                Next-generation quantum systems with error correction, quantum AI fusion, and unprecedented computational power.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-sm text-purple-300">
                  <Check className="w-4 h-4" />
                  <span>Quantum error correction</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-purple-300">
                  <Check className="w-4 h-4" />
                  <span>Quantum AI fusion</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-purple-300">
                  <Check className="w-4 h-4" />
                  <span>Quantum security</span>
                </div>
              </div>
              <Link
                href="/comprehensive-services-showcase-2038"
                className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors group-hover:translate-x-1 duration-300"
              >
                Explore Quantum Services <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>

            {/* Space Technology */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="group bg-gradient-to-br from-blue-900/30 to-indigo-900/30 border border-blue-500/30 rounded-2xl p-8 backdrop-blur-sm hover:border-blue-500/60 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 transform hover:scale-105"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Space Technology</h3>
              <p className="text-gray-300 mb-6">
                Revolutionary space solutions including debris mitigation, autonomous satellites, and interplanetary infrastructure.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-sm text-blue-300">
                  <Check className="w-4 h-4" />
                  <span>Space debris mitigation</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-blue-300">
                  <Check className="w-4 h-4" />
                  <span>Autonomous satellites</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-blue-300">
                  <Check className="w-4 h-4" />
                  <span>Interplanetary infrastructure</span>
                </div>
              </div>
              <Link
                href="/comprehensive-services-showcase-2038"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors group-hover:translate-x-1 duration-300"
              >
                Explore Space Services <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>
          </div>

          {/* View All Services CTA */}
          <div className="text-center mt-12">
            <Link href="/comprehensive-services-showcase-2038">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 mx-auto shadow-lg shadow-cyan-500/25">
                View All 2038 Services
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 px-4 bg-black/20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We combine cutting-edge technology with proven expertise to deliver exceptional results
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div 
                className="text-center p-6 group hover:bg-white/5 rounded-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">AI-First Approach</h3>
                <p className="text-gray-300">Leading-edge artificial intelligence solutions that adapt and evolve</p>
              </motion.div>
              
              <motion.div 
                className="text-center p-6 group hover:bg-white/5 rounded-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Atom className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Quantum Innovation</h3>
                <p className="text-gray-300">Next-generation quantum computing and security solutions</p>
              </motion.div>
              
              <motion.div 
                className="text-center p-6 group hover:bg-white/5 rounded-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Enterprise Security</h3>
                <p className="text-gray-300">Military-grade security and compliance solutions</p>
              </motion.div>
              
              <motion.div 
                className="text-center p-6 group hover:bg-white/5 rounded-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Rapid Deployment</h3>
                <p className="text-gray-300">Fast implementation and continuous optimization</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 2038 Services Preview */}
        <section className="py-20 px-4 bg-gradient-to-r from-purple-900/10 to-pink-900/10 relative">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-32 h-32 border border-purple-400/20 rounded-lg animate-pulse"></div>
            <div className="absolute top-40 right-32 w-24 h-24 border border-pink-400/20 rounded-full animate-pulse delay-1000"></div>
          </div>
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
                2038 Cutting-Edge Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the future with our revolutionary 2038 services that push the boundaries of what's possible
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="group bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-400/30 rounded-2xl p-6 hover:border-purple-400/60 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-4xl mb-4">🌟</div>
                <h3 className="text-xl font-bold text-white mb-2">AI Holographic Meetings</h3>
                <p className="text-gray-300 text-sm mb-4">Revolutionary holographic collaboration with AI assistance</p>
                <div className="text-2xl font-bold text-purple-400 mb-2">$299/month</div>
                <Link href="/innovative-2038-cutting-edge-showcase">
                  <button className="w-full px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300">
                    Learn More
                  </button>
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="group bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-400/30 rounded-2xl p-6 hover:border-blue-400/60 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-4xl mb-4">💊</div>
                <h3 className="text-xl font-bold text-white mb-2">Quantum Drug Discovery</h3>
                <p className="text-gray-300 text-sm mb-4">Quantum-powered AI for accelerated pharmaceutical research</p>
                <div className="text-2xl font-bold text-blue-400 mb-2">$1999/month</div>
                <Link href="/innovative-2038-cutting-edge-showcase">
                  <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-700 transition-all duration-300">
                    Learn More
                  </button>
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="group bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-400/30 rounded-2xl p-6 hover:border-green-400/60 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-4xl mb-4">⚖️</div>
                <h3 className="text-xl font-bold text-white mb-2">Autonomous Legal AI</h3>
                <p className="text-gray-300 text-sm mb-4">AI-powered legal research and document analysis</p>
                <div className="text-2xl font-bold text-green-400 mb-2">$199/month</div>
                <Link href="/innovative-2038-cutting-edge-showcase">
                  <button className="w-full px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300">
                    Learn More
                  </button>
                </Link>
              </motion.div>
            </div>
            
            <div className="text-center">
              <Link href="/innovative-2038-cutting-edge-showcase">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25 flex items-center gap-2 mx-auto">
                  Explore All 2038 Services
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-teal-500/5"></div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join the future of technology with Zion Tech Group. Let's build something extraordinary together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a href="tel:+1 302 464 0950" className="px-8 py-4 bg-gradient-to-r from-green-500 to-teal-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/25">
                  Call Now: +1 302 464 0950
                </a>
                <a href="mailto:kleber@ziontechgroup.com" className="px-8 py-4 border-2 border-green-400 text-green-400 font-semibold rounded-lg hover:bg-green-400 hover:text-black transition-all duration-300 transform hover:scale-105">
                  Email Us
                </a>
              </div>
              <div className="text-gray-400">
                <MapPin className="w-5 h-5 inline mr-2" />
                364 E Main St STE 1008 Middletown DE 19709
              </div>
            </motion.div>
          </div>

          {/* View All Services CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link
              href="/comprehensive-services-showcase-2038"
              className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
            >
              View All 2038 Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </section>

        {/* Performance & Innovation */}
        <section className="py-20 px-4 bg-black">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Performance & Innovation
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our commitment to excellence drives every solution we deliver.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise Security</h3>
                <p className="text-gray-300">
                  Military-grade security protocols protecting your most valuable assets.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Lightning Fast</h3>
                <p className="text-gray-300">
                  Optimized performance delivering results in milliseconds, not minutes.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Brain className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">AI-Powered</h3>
                <p className="text-gray-300">
                  Intelligent automation that learns and adapts to your business needs.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-cyan-900/20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the future of technology with Zion Tech Group
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Today
                </Link>
                <Link
                  href="/demo"
                  className="border border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 backdrop-blur-md hover:bg-white/10"
                >
                  Request Demo
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Floating Action Buttons */}
        <AnimatePresence>
          {showFloatingActions && (
            <>
              {/* Contact Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: 100 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.8, x: 100 }}
                transition={{ duration: 0.3 }}
                className="fixed bottom-24 right-6 z-50"
              >
                <Link
                  href="/contact"
                  className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-110 group"
                  aria-label="Contact Us"
                >
                  <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                </Link>
              </motion.div>

              {/* Phone Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: 100 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.8, x: 100 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="fixed bottom-36 right-6 z-50"
              >
                <a
                  href="tel:+1-302-464-0950"
                  className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300 hover:scale-110 group"
                  aria-label="Call Us"
                >
                  <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                </a>
              </motion.div>

              {/* Email Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: 100 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.8, x: 100 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="fixed bottom-48 right-6 z-50"
              >
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="flex items-center justify-center w-14 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-110 group"
                  aria-label="Email Us"
                >
                  <Mail className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                </a>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </main>
    </Layout>
  );
};

export default Homepage2025;