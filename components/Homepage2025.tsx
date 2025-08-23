import React from 'react';
import Layout from './layout/Layout';
import UltraFuturisticServiceCard2026 from './ui/UltraFuturisticServiceCard2026';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Star, 
  Brain, Atom, Shield, Zap, TrendingUp, Globe, MapPin,
  Rocket, MessageCircle
} from 'lucide-react';

const Homepage2025: React.FC = () => {
  return (
    <Layout>
      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
          {/* Enhanced Background Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rounded-lg animate-pulse"></div>
            <div className="absolute top-40 right-32 w-24 h-24 border border-purple-400/20 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute bottom-32 left-32 w-40 h-40 border border-pink-400/20 transform rotate-45 animate-pulse delay-2000"></div>
            {/* New floating elements */}
            <div className="absolute top-1/4 left-1/4 w-16 h-16 border border-blue-400/15 rounded-full animate-bounce delay-500"></div>
            <div className="absolute top-3/4 right-1/4 w-20 h-20 border border-green-400/15 transform rotate-12 animate-pulse delay-1500"></div>
            <div className="absolute top-1/2 left-1/2 w-12 h-12 border border-yellow-400/15 rounded-lg animate-spin delay-3000"></div>
          </div>
          
          <div className="text-center max-w-5xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Enhanced Company Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full text-cyan-400 text-sm font-medium backdrop-blur-sm"
              >
                <Star className="w-5 h-5 text-yellow-400" />
                <span className="font-semibold">Innovation Leader 2025</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </motion.div>
              
              {/* Enhanced Main Title */}
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="text-6xl md:text-8xl font-black mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 via-purple-600 to-pink-500 bg-clip-text text-transparent leading-tight"
              >
                Zion Tech Group
              </motion.h1>
              
              {/* Enhanced Subtitle */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-xl md:text-3xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed font-light"
              >
                Pioneering the future of technology with <span className="text-cyan-400 font-semibold">innovative solutions</span> that drive <span className="text-purple-400 font-semibold">business transformation</span>
              </motion.p>
              
              {/* Enhanced CTA Section */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
              >
                <Link href="/get-started">
                  <button className="group px-10 py-5 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-bold rounded-xl hover:from-cyan-600 hover:via-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-110 shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50">
                    <span className="flex items-center gap-3 text-lg">
                      <Zap className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                      Get Started
                      <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                    </span>
                  </button>
                </Link>
                <Link href="/services">
                  <button className="group px-10 py-5 border-2 border-cyan-400 text-cyan-400 font-bold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-110 shadow-lg shadow-cyan-400/20 hover:shadow-cyan-400/40">
                    <span className="flex items-center gap-3 text-lg">
                      <Brain className="w-6 h-6 group-hover:scale-110 transition-transform" />
                      Explore Services
                    </span>
                  </button>
                </Link>
                <Link href="/comprehensive-2025-services-showcase">
                  <button className="group px-10 py-5 border-2 border-purple-400 text-purple-400 font-bold rounded-xl hover:bg-purple-400 hover:text-black transition-all duration-300 transform hover:scale-110 shadow-lg shadow-purple-400/20 hover:shadow-purple-400/40">
                    <span className="flex items-center gap-3 text-lg">
                      <Rocket className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
                      2025 Showcase
                    </span>
                  </button>
                </Link>
              </motion.div>
              
              {/* Enhanced Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="flex flex-wrap items-center justify-center gap-8 text-sm"
              >
                <motion.div 
                  className="flex items-center space-x-3 group cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="p-2 bg-green-500/20 rounded-full group-hover:bg-green-500/30 transition-colors">
                    <Shield className="w-5 h-5 text-green-400" />
                  </div>
                  <span className="text-gray-300 group-hover:text-green-400 transition-colors font-medium">Enterprise Security</span>
                </motion.div>
                <motion.div 
                  className="flex items-center space-x-3 group cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="p-2 bg-blue-500/20 rounded-full group-hover:bg-blue-500/30 transition-colors">
                    <Globe className="w-5 h-5 text-blue-400" />
                  </div>
                  <span className="text-gray-300 group-hover:text-blue-400 transition-colors font-medium">Global Reach</span>
                </motion.div>
                <motion.div 
                  className="flex items-center space-x-3 group cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="p-2 bg-purple-500/20 rounded-full group-hover:bg-purple-500/30 transition-colors">
                    <TrendingUp className="w-5 h-5 text-purple-400" />
                  </div>
                  <span className="text-gray-300 group-hover:text-purple-400 transition-colors font-medium">Proven Results</span>
                </motion.div>
                <motion.div 
                  className="flex items-center space-x-3 group cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="p-2 bg-cyan-500/20 rounded-full group-hover:bg-cyan-500/30 transition-colors">
                    <Atom className="w-5 h-5 text-cyan-400" />
                  </div>
                  <span className="text-gray-300 group-hover:text-cyan-400 transition-colors font-medium">Innovation First</span>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Company Stats */}
        <section className="py-24 px-4 bg-gradient-to-b from-black/40 via-black/20 to-black/40 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5"></div>
          {/* Floating background elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-10 left-10 w-20 h-20 border border-cyan-400/10 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute bottom-10 right-10 w-16 h-16 border border-purple-400/10 rounded-lg animate-pulse delay-2000"></div>
            <div className="absolute top-1/2 left-1/2 w-24 h-24 border border-pink-400/10 transform rotate-45 animate-pulse delay-3000"></div>
          </div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Our Impact in Numbers
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Delivering measurable results across industries with cutting-edge technology solutions
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            >
              <motion.div 
                className="p-8 group hover:bg-white/10 rounded-2xl transition-all duration-500 border border-cyan-400/20 hover:border-cyan-400/40"
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-5xl font-black text-cyan-400 mb-3 group-hover:text-cyan-300 transition-colors">50+</div>
                <div className="text-gray-200 text-lg font-semibold mb-2">AI Services</div>
                <div className="text-sm text-cyan-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  Cutting-edge solutions
                </div>
              </motion.div>
              <motion.div 
                className="p-8 group hover:bg-white/10 rounded-2xl transition-all duration-500 border border-blue-400/20 hover:border-blue-400/40"
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-5xl font-black text-blue-400 mb-3 group-hover:text-blue-300 transition-colors">100+</div>
                <div className="text-gray-200 text-lg font-semibold mb-2">Quantum Solutions</div>
                <div className="text-sm text-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  Next-gen computing
                </div>
              </motion.div>
              <motion.div 
                className="p-8 group hover:bg-white/10 rounded-2xl transition-all duration-500 border border-purple-400/20 hover:border-purple-400/40"
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-5xl font-black text-purple-400 mb-3 group-hover:text-purple-300 transition-colors">24/7</div>
                <div className="text-gray-200 text-lg font-semibold mb-2">Autonomous Operations</div>
                <div className="text-sm text-purple-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  Always available
                </div>
              </motion.div>
              <motion.div 
                className="p-8 group hover:bg-white/10 rounded-2xl transition-all duration-500 border border-green-400/20 hover:border-green-400/40"
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-5xl font-black text-green-400 mb-3 group-hover:text-green-300 transition-colors">∞</div>
                <div className="text-gray-200 text-lg font-semibold mb-2">Future Possibilities</div>
                <div className="text-sm text-green-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  Unlimited potential
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Services Preview */}
        <section className="py-24 px-4 bg-gradient-to-b from-black/20 to-black/40 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/3 via-purple-500/3 to-pink-500/3"></div>
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, #06b6d4 1px, transparent 1px), radial-gradient(circle at 75% 75%, #a855f7 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}></div>
          </div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Revolutionary Services
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Discover our comprehensive range of <span className="text-cyan-400 font-semibold">cutting-edge technology solutions</span> designed to <span className="text-purple-400 font-semibold">transform your business</span>
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
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
            </motion.div>
            
            <div className="text-center mt-12">
              <Link href="/services">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 mx-auto shadow-lg shadow-purple-500/25">
                  View All Services
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
            </div>
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

        {/* New Interactive Features Section */}
        <section className="py-24 px-4 bg-gradient-to-b from-black/40 to-black/60 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-cyan-500/5"></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Experience the difference with our <span className="text-purple-400 font-semibold">innovative approach</span> and <span className="text-cyan-400 font-semibold">proven results</span>
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="group p-8 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-500 hover:bg-gradient-to-br hover:from-cyan-500/20 hover:to-blue-500/20"
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">AI-First Approach</h3>
                <p className="text-gray-300 leading-relaxed">
                  Every solution we build incorporates cutting-edge AI technology, ensuring your business stays ahead of the curve with intelligent automation and insights.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="group p-8 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl border border-purple-400/20 hover:border-purple-400/40 transition-all duration-500 hover:bg-gradient-to-br hover:from-purple-500/20 hover:to-pink-500/20"
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Future-Ready Solutions</h3>
                <p className="text-gray-300 leading-relaxed">
                  Our quantum-ready infrastructure and space technology solutions prepare your business for the next decade of technological advancement.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="group p-8 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl border border-green-400/20 hover:border-green-400/40 transition-all duration-500 hover:bg-gradient-to-br hover:from-green-500/20 hover:to-emerald-500/20"
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise Security</h3>
                <p className="text-gray-300 leading-relaxed">
                  Built-in security at every layer with zero-trust architecture and quantum-resistant encryption to protect your most valuable assets.
                </p>
              </motion.div>
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center mt-16"
            >
              <Link href="/contact">
                <button className="group px-12 py-6 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 text-white font-bold rounded-2xl hover:from-purple-700 hover:via-pink-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-110 shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/50">
                  <span className="flex items-center gap-3 text-xl">
                    <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform" />
                    Start Your Transformation
                    <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
                  </span>
                </button>
              </Link>
            </motion.div>
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
        </section>
      </main>
    </Layout>
  );
};

export default Homepage2025;