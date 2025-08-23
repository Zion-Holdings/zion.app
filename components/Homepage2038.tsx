import React from 'react';
import Layout from './layout/Layout';
import UltraFuturisticServiceCard2026 from './ui/UltraFuturisticServiceCard2026';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Star, 
  Brain, Atom, Shield, Zap, TrendingUp, Globe,
  Rocket, Cpu, Database, Network, Lock, Cloud,
  Users, Target, Award, CheckCircle, Play, Phone,
  Mail, MapPin, Clock, DollarSign, BarChart3
} from 'lucide-react';
import Link from 'next/link';

const Homepage2038: React.FC = () => {
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
            <div className="absolute top-1/2 left-1/4 w-20 h-20 border border-blue-400/20 rounded-full animate-pulse delay-500"></div>
            <div className="absolute bottom-1/3 right-1/4 w-28 h-28 border border-green-400/20 transform rotate-12 animate-pulse delay-1500"></div>
          </div>
          
          <div className="text-center max-w-5xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Company Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full text-cyan-400 text-lg font-medium"
              >
                <Star className="w-5 h-5" />
                <span>Innovation Leader 2038</span>
              </motion.div>
              
              <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                Zion Tech Group
              </h1>
              <p className="text-2xl md:text-3xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                Pioneering the future of technology with quantum AI, autonomous systems, and revolutionary solutions that transform businesses and industries
              </p>
              
              {/* Enhanced CTA Section */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-10">
                <Link href="/get-started">
                  <button className="group px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 text-lg">
                    <span className="flex items-center gap-3">
                      Get Started
                      <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                </Link>
                <Link href="/services">
                  <button className="px-10 py-5 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 text-lg">
                    Explore Services
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="px-10 py-5 border-2 border-purple-400 text-purple-400 font-semibold rounded-xl hover:bg-purple-400 hover:text-black transition-all duration-300 transform hover:scale-105 text-lg">
                    Contact Us
                  </button>
                </Link>
              </div>
              
              {/* Enhanced Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-wrap items-center justify-center gap-8 text-base text-gray-400"
              >
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-green-400" />
                  <span>Enterprise Security</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="w-5 h-5 text-blue-400" />
                  <span>Global Reach</span>
                </div>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-purple-400" />
                  <span>Proven Results</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Rocket className="w-5 h-5 text-cyan-400" />
                  <span>Innovation First</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Company Stats */}
        <section className="py-24 px-4 bg-black/30 relative">
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
                className="p-8 group hover:bg-white/5 rounded-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-5xl font-bold text-cyan-400 mb-3 group-hover:text-cyan-300 transition-colors">100+</div>
                <div className="text-gray-300 text-lg">AI Services</div>
                <div className="text-sm text-cyan-400 mt-3 opacity-0 group-hover:opacity-100 transition-opacity">Cutting-edge solutions</div>
              </motion.div>
              <motion.div 
                className="p-8 group hover:bg-white/5 rounded-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-5xl font-bold text-blue-400 mb-3 group-hover:text-blue-300 transition-colors">200+</div>
                <div className="text-gray-300 text-lg">Quantum Solutions</div>
                <div className="text-sm text-blue-400 mt-3 opacity-0 group-hover:opacity-100 transition-opacity">Next-gen computing</div>
              </motion.div>
              <motion.div 
                className="p-8 group hover:bg-white/5 rounded-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-5xl font-bold text-purple-400 mb-3 group-hover:text-purple-300 transition-colors">24/7</div>
                <div className="text-gray-300 text-lg">Autonomous Operations</div>
                <div className="text-sm text-purple-400 mt-3 opacity-0 group-hover:opacity-100 transition-opacity">Always available</div>
              </motion.div>
              <motion.div 
                className="p-8 group hover:bg-white/5 rounded-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-5xl font-bold text-green-400 mb-3 group-hover:text-green-300 transition-colors">∞</div>
                <div className="text-gray-300 text-lg">Future Possibilities</div>
                <div className="text-sm text-green-400 mt-3 opacity-0 group-hover:opacity-100 transition-opacity">Unlimited potential</div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-400 via-blue-500 via-purple-600 to-pink-500 bg-clip-text text-transparent">
              Our Revolutionary Services
            </h2>
            <p className="text-2xl text-gray-300 mb-16 text-center max-w-4xl mx-auto">
              Discover cutting-edge quantum AI, autonomous systems, and revolutionary solutions that transform businesses and industries
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              <UltraFuturisticServiceCard2026
                service={{
                  id: 'ai-consciousness-evolution-platform-2038',
                  name: 'AI Consciousness Evolution Platform 2038',
                  tagline: 'Next-generation AI consciousness with quantum neural networks',
                  description: 'Revolutionary AI consciousness platform featuring quantum neural networks, advanced ethical reasoning, and multi-dimensional consciousness mapping.',
                  price: '$12,999',
                  period: '/month',
                  features: ['Quantum neural network consciousness', 'Multi-dimensional consciousness mapping', 'Advanced ethical reasoning engine'],
                  popular: true,
                  category: 'AI & Quantum Consciousness',
                  icon: '🧠⚛️'
                }}
                variant="ai"
              />
              <UltraFuturisticServiceCard2026
                service={{
                  id: 'quantum-cloud-infrastructure-2038',
                  name: 'Quantum Cloud Infrastructure 2038',
                  tagline: 'Next-generation quantum-enhanced cloud computing platform',
                  description: 'Revolutionary cloud infrastructure platform featuring quantum computing capabilities, advanced AI orchestration, and autonomous resource management.',
                  price: '$25,999',
                  period: '/month',
                  features: ['Quantum-enhanced cloud computing', 'AI-powered resource orchestration', 'Autonomous infrastructure management'],
                  popular: true,
                  category: 'Quantum Cloud Infrastructure',
                  icon: '⚛️☁️'
                }}
                variant="quantum"
              />
              <UltraFuturisticServiceCard2026
                service={{
                  id: 'quantum-ai-sales-automation',
                  name: 'Quantum AI Sales Automation',
                  tagline: 'Quantum-powered sales automation with AI intelligence',
                  description: 'Advanced sales automation platform powered by quantum AI, featuring intelligent lead scoring, autonomous outreach, and predictive sales analytics.',
                  price: '$4,999',
                  period: '/month',
                  features: ['Quantum AI lead scoring', 'Autonomous sales outreach', 'Predictive sales analytics'],
                  popular: true,
                  category: 'Quantum AI Sales',
                  icon: '⚛️💰'
                }}
                variant="automation"
              />
              <UltraFuturisticServiceCard2026
                service={{
                  id: 'quantum-cybersecurity-fortress',
                  name: 'Quantum Cybersecurity Fortress',
                  tagline: 'Quantum-resistant cybersecurity with AI threat detection',
                  description: 'Advanced cybersecurity platform featuring quantum-resistant encryption, AI-powered threat detection, and autonomous security response.',
                  price: '$18,999',
                  period: '/month',
                  features: ['Quantum-resistant encryption', 'AI-powered threat detection', 'Autonomous security response'],
                  popular: true,
                  category: 'Quantum Cybersecurity',
                  icon: '⚛️🛡️'
                }}
                variant="enterprise"
              />
            </div>
            <div className="text-center mt-20">
              <Link href="/services" className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 text-lg">
                View All Services
                <ArrowRight className="ml-3 w-6 h-6" />
              </Link>
            </div>
          </div>
        </section>

        {/* Innovation Showcase */}
        <section className="py-24 px-4 bg-gradient-to-b from-black via-gray-900/50 to-black">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Revolutionary Innovations
            </h2>
            <p className="text-2xl text-gray-300 mb-16 text-center max-w-4xl mx-auto">
              Experience the future with our breakthrough quantum computing, autonomous systems, and consciousness AI platforms
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-gradient-to-r from-purple-600/10 to-pink-600/10 border border-purple-500/30 rounded-2xl p-8 hover:border-purple-400/50 transition-all duration-300">
                  <div className="text-7xl mb-6">🧠⚛️</div>
                  <h3 className="text-3xl font-bold text-white mb-4">AI Consciousness Evolution 2038</h3>
                  <p className="text-gray-300 mb-6 text-lg">Develop AI systems with advanced consciousness, quantum neural networks, and ethical reasoning.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-purple-400">$12,999</span>
                    <span className="text-gray-400 text-lg">/month</span>
                  </div>
                </div>
              </div>
              
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-gradient-to-r from-blue-600/10 to-cyan-600/10 border border-blue-500/30 rounded-2xl p-8 hover:border-blue-400/50 transition-all duration-300">
                  <div className="text-7xl mb-6">⚛️☁️</div>
                  <h3 className="text-3xl font-bold text-white mb-4">Quantum Cloud Infrastructure</h3>
                  <p className="text-gray-300 mb-6 text-lg">Quantum-enhanced cloud computing with AI orchestration and autonomous resource management.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-blue-400">$25,999</span>
                    <span className="text-gray-400 text-lg">/month</span>
                  </div>
                </div>
              </div>
              
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-gradient-to-r from-green-600/10 to-emerald-600/10 border border-green-500/30 rounded-2xl p-8 hover:border-green-400/50 transition-all duration-300">
                  <div className="text-7xl mb-6">⚛️💰</div>
                  <h3 className="text-3xl font-bold text-white mb-4">Quantum AI Sales Automation</h3>
                  <p className="text-gray-300 mb-6 text-lg">Quantum-powered sales automation with intelligent lead scoring and autonomous outreach.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-green-400">$4,999</span>
                    <span className="text-gray-400 text-lg">/month</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 px-4 bg-black/20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
                We combine cutting-edge quantum technology with proven expertise to deliver transformative solutions
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 group hover:bg-white/5 rounded-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Brain className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">AI Excellence</h3>
                <p className="text-gray-300 text-lg">State-of-the-art artificial intelligence and quantum computing</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center p-8 group hover:bg-white/5 rounded-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Atom className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">Quantum Innovation</h3>
                <p className="text-gray-300 text-lg">Next-generation quantum computing and security solutions</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center p-8 group hover:bg-white/5 rounded-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">Enterprise Security</h3>
                <p className="text-gray-300 text-lg">Military-grade security and compliance solutions</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center p-8 group hover:bg-white/5 rounded-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">Rapid Deployment</h3>
                <p className="text-gray-300 text-lg">Fast implementation and continuous optimization</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-24 px-4 bg-gradient-to-b from-black via-gray-900/50 to-black">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 group hover:bg-white/5 rounded-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">Phone</h3>
                <p className="text-cyan-400 text-lg font-medium">+1 302 464 0950</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center p-8 group hover:bg-white/5 rounded-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">Email</h3>
                <p className="text-blue-400 text-lg font-medium">kleber@ziontechgroup.com</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center p-8 group hover:bg-white/5 rounded-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">Address</h3>
                <p className="text-purple-400 text-lg font-medium">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-24 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-teal-500/5"></div>
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Ready to Transform Your Business?
              </h2>
              <p className="text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
                Join hundreds of forward-thinking companies already leveraging our cutting-edge quantum technology solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/contact">
                  <button className="px-10 py-5 bg-gradient-to-r from-green-500 to-teal-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/25 text-lg">
                    Get Started Today
                  </button>
                </Link>
                <Link href="/demo">
                  <button className="px-10 py-5 border-2 border-green-400 text-green-400 font-semibold rounded-xl hover:bg-green-400 hover:text-black transition-all duration-300 transform hover:scale-105 text-lg">
                    Request Demo
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Homepage2038;