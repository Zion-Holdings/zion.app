import React from 'react';
import Layout from './layout/Layout';
import UltraFuturisticServiceCard2026 from './ui/UltraFuturisticServiceCard2026';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Star, 
  Brain, Atom, Shield, Zap, TrendingUp, Globe, MapPin,
  Rocket, Target, Cpu, Cloud, Lock, Users, BarChart3,
  Sparkles, Infinity, Eye, Heart, Code, Palette
} from 'lucide-react';

const Homepage2025: React.FC = () => {
  return (
    <Layout>
      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section with Enhanced Background */}
        <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
          {/* Enhanced Futuristic Background Elements */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Animated Grid Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 25% 25%, rgba(6, 182, 212, 0.1) 0%, transparent 50%),
                                radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)`
              }}></div>
            </div>
            
            {/* Floating Geometric Elements */}
            <div className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rounded-lg animate-pulse"></div>
            <div className="absolute top-40 right-32 w-24 h-24 border border-purple-400/20 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute bottom-32 left-32 w-40 h-40 border border-pink-400/20 transform rotate-45 animate-pulse delay-2000"></div>
            
            {/* Additional Futuristic Elements */}
            <div className="absolute top-1/3 right-1/4 w-16 h-16 border border-blue-400/20 transform rotate-12 animate-pulse delay-500"></div>
            <div className="absolute bottom-1/3 right-1/3 w-20 h-20 border border-green-400/20 rounded-full animate-pulse delay-1500"></div>
            
            {/* Particle Effects */}
            <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-cyan-400/40 rounded-full animate-bounce delay-300"></div>
            <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400/40 rounded-full animate-bounce delay-700"></div>
            <div className="absolute top-1/2 left-1/4 w-1.5 h-1.5 bg-pink-400/40 rounded-full animate-bounce delay-1000"></div>
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
                className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full text-cyan-400 text-sm font-medium backdrop-blur-sm"
              >
                <Sparkles className="w-5 h-5 animate-pulse" />
                <span>Innovation Leader 2025</span>
                <Star className="w-4 h-4 text-yellow-400" />
              </motion.div>
              
              {/* Enhanced Main Title */}
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 via-purple-600 to-pink-500 bg-clip-text text-transparent leading-tight"
              >
                Zion Tech Group
              </motion.h1>
              
              {/* Enhanced Subtitle */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
              >
                Pioneering the future of technology with <span className="text-cyan-400 font-semibold">innovative solutions</span> that drive business transformation and <span className="text-purple-400 font-semibold">revolutionary AI capabilities</span>
              </motion.p>
              
              {/* Enhanced CTA Section */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
              >
                <Link href="/get-started">
                  <button className="group px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40">
                    <span className="flex items-center gap-3 text-lg">
                      Get Started
                      <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                    </span>
                  </button>
                </Link>
                <Link href="/services">
                  <button className="px-10 py-5 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
                    <span className="text-lg">Explore Services</span>
                  </button>
                </Link>
                <Link href="/comprehensive-2025-services-showcase">
                  <button className="px-10 py-5 border-2 border-purple-400 text-purple-400 font-semibold rounded-xl hover:bg-purple-400 hover:text-black transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
                    <span className="text-lg">2025 Showcase</span>
                  </button>
                </Link>
              </motion.div>
              
              {/* Enhanced Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-400"
              >
                <div className="flex items-center space-x-2 group">
                  <Shield className="w-5 h-5 text-green-400 group-hover:text-green-300 transition-colors" />
                  <span className="group-hover:text-gray-300 transition-colors">Enterprise Security</span>
                </div>
                <div className="flex items-center space-x-2 group">
                  <Globe className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
                  <span className="group-hover:text-gray-300 transition-colors">Global Reach</span>
                </div>
                <div className="flex items-center space-x-2 group">
                  <TrendingUp className="w-5 h-5 text-purple-400 group-hover:text-purple-300 transition-colors" />
                  <span className="group-hover:text-gray-300 transition-colors">Proven Results</span>
                </div>
                <div className="flex items-center space-x-2 group">
                  <Users className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                  <span className="group-hover:text-gray-300 transition-colors">Expert Team</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Company Stats Section */}
        <section className="py-24 px-4 bg-gradient-to-r from-black/40 via-cyan-500/5 to-purple-500/5 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            >
              <motion.div 
                className="p-8 group hover:bg-white/5 rounded-2xl transition-all duration-300 border border-cyan-400/20 hover:border-cyan-400/40"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-5xl font-bold text-cyan-400 mb-3 group-hover:text-cyan-300 transition-colors">50+</div>
                <div className="text-gray-300 text-lg mb-2">AI Services</div>
                <div className="text-sm text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">Cutting-edge solutions</div>
              </motion.div>
              <motion.div 
                className="p-8 group hover:bg-white/5 rounded-2xl transition-all duration-300 border border-blue-400/20 hover:border-blue-400/40"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-5xl font-bold text-blue-400 mb-3 group-hover:text-blue-300 transition-colors">100+</div>
                <div className="text-gray-300 text-lg mb-2">Quantum Solutions</div>
                <div className="text-sm text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">Next-gen computing</div>
              </motion.div>
              <motion.div 
                className="p-8 group hover:bg-white/5 rounded-2xl transition-all duration-300 border border-purple-400/20 hover:border-purple-400/40"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-5xl font-bold text-purple-400 mb-3 group-hover:text-purple-300 transition-colors">24/7</div>
                <div className="text-gray-300 text-lg mb-2">Autonomous Operations</div>
                <div className="text-sm text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity">Always available</div>
              </motion.div>
              <motion.div 
                className="p-8 group hover:bg-white/5 rounded-2xl transition-all duration-300 border border-green-400/20 hover:border-green-400/40"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-5xl font-bold text-green-400 mb-3 group-hover:text-green-300 transition-colors">∞</div>
                <div className="text-gray-300 text-lg mb-2">Future Possibilities</div>
                <div className="text-sm text-green-400 opacity-0 group-hover:opacity-100 transition-opacity">Unlimited potential</div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Services Preview Section */}
        <section className="py-24 px-4 bg-gradient-to-br from-purple-900/10 via-transparent to-cyan-900/10">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Our Revolutionary Services
              </h2>
              <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Discover our comprehensive range of <span className="text-cyan-400">cutting-edge technology solutions</span> designed to transform your business and propel you into the future
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
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
            
            <div className="text-center">
              <Link href="/services">
                <button className="px-10 py-5 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-3 mx-auto shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 text-lg">
                  View All Revolutionary Services
                  <ArrowRight className="w-6 h-6" />
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Enhanced Why Choose Us Section */}
        <section className="py-24 px-4 bg-gradient-to-r from-black/30 via-purple-500/5 to-pink-500/5 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5"></div>
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
              <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                We combine <span className="text-purple-400">cutting-edge technology</span> with <span className="text-pink-400">proven expertise</span> to deliver exceptional results that transform your business
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              <motion.div 
                className="text-center p-8 group hover:bg-white/5 rounded-2xl transition-all duration-300 border border-cyan-400/20 hover:border-cyan-400/40"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Brain className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">AI-First Approach</h3>
                <p className="text-gray-300 leading-relaxed">Leading-edge artificial intelligence solutions that adapt and evolve with your business needs</p>
              </motion.div>
              
              <motion.div 
                className="text-center p-8 group hover:bg-white/5 rounded-2xl transition-all duration-300 border border-blue-400/20 hover:border-blue-400/40"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Atom className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Quantum Innovation</h3>
                <p className="text-gray-300 leading-relaxed">Next-generation quantum computing and security solutions that solve previously impossible problems</p>
              </motion.div>
              
              <motion.div 
                className="text-center p-8 group hover:bg-white/5 rounded-2xl transition-all duration-300 border border-purple-400/20 hover:border-purple-400/40"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Enterprise Security</h3>
                <p className="text-gray-300 leading-relaxed">Military-grade security and compliance solutions that protect your business from evolving threats</p>
              </motion.div>
              
              <motion.div 
                className="text-center p-8 group hover:bg-white/5 rounded-2xl transition-all duration-300 border border-green-400/20 hover:border-green-400/40"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Rapid Deployment</h3>
                <p className="text-gray-300 leading-relaxed">Fast implementation and continuous optimization that gets you results quickly and efficiently</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Enhanced 2038 Services Preview Section */}
        <section className="py-24 px-4 bg-gradient-to-r from-purple-900/10 via-pink-900/10 to-cyan-900/10 relative">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-32 h-32 border border-purple-400/20 rounded-lg animate-pulse"></div>
            <div className="absolute top-40 right-32 w-24 h-24 border border-pink-400/20 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute bottom-32 left-32 w-40 h-40 border border-cyan-400/20 transform rotate-45 animate-pulse delay-2000"></div>
          </div>
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
                2038 Cutting-Edge Services
              </h2>
              <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Experience the future with our <span className="text-purple-400">revolutionary 2038 services</span> that push the boundaries of what's possible and redefine technology
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="group bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-400/30 rounded-3xl p-8 hover:border-purple-400/60 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
              >
                <div className="text-5xl mb-6">🌟</div>
                <h3 className="text-2xl font-bold text-white mb-4">AI Holographic Meetings</h3>
                <p className="text-gray-300 text-base mb-6 leading-relaxed">Revolutionary holographic collaboration with AI assistance for immersive remote meetings</p>
                <div className="text-3xl font-bold text-purple-400 mb-4">$299/month</div>
                <Link href="/innovative-2038-cutting-edge-showcase">
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 text-lg">
                    Learn More
                  </button>
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="group bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-400/30 rounded-3xl p-8 hover:border-blue-400/60 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
              >
                <div className="text-5xl mb-6">💊</div>
                <h3 className="text-2xl font-bold text-white mb-4">Quantum Drug Discovery</h3>
                <p className="text-gray-300 text-base mb-6 leading-relaxed">Quantum-powered AI for accelerated pharmaceutical research and molecular modeling</p>
                <div className="text-3xl font-bold text-blue-400 mb-4">$1999/month</div>
                <Link href="/innovative-2038-cutting-edge-showcase">
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 text-lg">
                    Learn More
                  </button>
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="group bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-400/30 rounded-3xl p-8 hover:border-green-400/60 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20"
              >
                <div className="text-5xl mb-6">⚖️</div>
                <h3 className="text-2xl font-bold text-white mb-4">Autonomous Legal AI</h3>
                <p className="text-gray-300 text-base mb-6 leading-relaxed">AI-powered legal research and document analysis for comprehensive legal support</p>
                <div className="text-3xl font-bold text-green-400 mb-4">$199/month</div>
                <Link href="/innovative-2038-cutting-edge-showcase">
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 text-lg">
                    Learn More
                  </button>
                </Link>
              </motion.div>
            </div>
            
            <div className="text-center">
              <Link href="/innovative-2038-cutting-edge-showcase">
                <button className="px-10 py-5 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 flex items-center gap-3 mx-auto text-lg">
                  Explore All 2038 Revolutionary Services
                  <ArrowRight className="w-6 h-6" />
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-24 px-4 relative bg-gradient-to-r from-green-500/5 via-teal-500/5 to-emerald-500/5">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-teal-500/5"></div>
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-green-400 via-teal-500 to-emerald-500 bg-clip-text text-transparent">
                Ready to Transform Your Business?
              </h2>
              <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                Join the future of technology with Zion Tech Group. Let's build something <span className="text-green-400">extraordinary</span> together and revolutionize your industry.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                <a href="tel:+1 302 464 0950" className="px-10 py-5 bg-gradient-to-r from-green-500 to-teal-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-green-500/25 hover:shadow-green-500/40 text-lg">
                  Call Now: +1 302 464 0950
                </a>
                <a href="mailto:kleber@ziontechgroup.com" className="px-10 py-5 border-2 border-green-400 text-green-400 font-semibold rounded-xl hover:bg-green-400 hover:text-black transition-all duration-300 transform hover:scale-105 text-lg">
                  Email Us
                </a>
              </div>
              <div className="text-gray-400 text-lg">
                <MapPin className="w-6 h-6 inline mr-3" />
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