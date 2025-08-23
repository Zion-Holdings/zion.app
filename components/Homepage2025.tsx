import React from 'react';
import Layout from './layout/Layout';
import UltraAdvancedServiceCard2025 from './ui/UltraAdvancedServiceCard2025';
import UltraAdvancedFuturisticBackground2025 from './backgrounds/UltraAdvancedFuturisticBackground2025';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Star, 
  Brain, Atom, Shield, Zap, TrendingUp, Globe, MapPin,
  Rocket, Cpu, Database, Cloud, Lock, Users, Target
} from 'lucide-react';

// Import new service data
import { aiAutonomousServices } from '../data/2025-innovative-ai-autonomous-services';
import { quantumSpaceInnovationServices } from '../data/2025-quantum-space-innovations';

const Homepage2025: React.FC = () => {
  return (
    <Layout>
      {/* Enhanced Background */}
      <UltraAdvancedFuturisticBackground2025 />
      
      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
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
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full text-cyan-400 text-sm font-medium backdrop-blur-sm"
              >
                <Star className="w-4 h-4" />
                <span>Innovation Leader 2025</span>
              </motion.div>
              
              <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight">
                Zion Tech Group
              </h1>
              <p className="text-2xl md:text-3xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                Pioneering the future of technology with innovative solutions that drive business transformation and human advancement
              </p>
              
              {/* Enhanced CTA Section */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-10">
                <Link href="/get-started">
                  <motion.button 
                    className="group px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 backdrop-blur-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="flex items-center gap-3 text-lg">
                      Get Started
                      <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </motion.button>
                </Link>
                <Link href="/services">
                  <motion.button 
                    className="px-10 py-5 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-lg">Explore Services</span>
                  </motion.button>
                </Link>
                <Link href="/comprehensive-2025-services-showcase">
                  <motion.button 
                    className="px-10 py-5 border-2 border-purple-400 text-purple-400 font-semibold rounded-xl hover:bg-purple-400 hover:text-black transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-lg">2025 Showcase</span>
                  </motion.button>
                </Link>
              </div>
              
              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex items-center justify-center space-x-8 text-sm text-gray-400"
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
        <section className="py-24 px-4 bg-black/30 relative backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">500+</div>
                <div className="text-gray-300">Services Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">200+</div>
                <div className="text-gray-300">Enterprise Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-pink-400 mb-2">24/7</div>
                <div className="text-gray-300">Support Available</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Services Section */}
        <section className="py-24 px-4 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Featured Services 2025
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the cutting-edge of technology with our most innovative and advanced services
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {/* AI Autonomous Services */}
              {aiAutonomousServices.slice(0, 3).map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <UltraAdvancedServiceCard2025
                    service={{
                      ...service,
                      period: service.period,
                      rating: service.rating,
                      reviews: service.reviews,
                      technology: service.technology,
                      realImplementation: service.realImplementation,
                      launchDate: service.launchDate,
                      customers: service.customers
                    }}
                    variant={index === 0 ? 'ai' : index === 1 ? 'premium' : 'default'}
                  />
                </motion.div>
              ))}
            </div>

            {/* Quantum & Space Services */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {quantumSpaceInnovationServices.slice(0, 3).map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <UltraAdvancedServiceCard2025
                    service={{
                      ...service,
                      period: service.period,
                      rating: service.rating,
                      reviews: service.reviews,
                      technology: service.technology,
                      realImplementation: service.realImplementation,
                      launchDate: service.launchDate,
                      customers: service.customers
                    }}
                    variant={index === 0 ? 'quantum' : index === 1 ? 'space' : 'premium'}
                  />
                </motion.div>
              ))}
            </div>
            
            <div className="text-center">
              <Link href="/services">
                <motion.button 
                  className="px-10 py-5 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25 flex items-center gap-3 mx-auto text-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View All Services
                  <ArrowRight className="w-6 h-6" />
                </motion.button>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-24 px-4 bg-black/20 relative backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We combine cutting-edge technology with proven expertise to deliver exceptional results and drive innovation
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div 
                className="text-center p-8 group hover:bg-white/5 rounded-2xl transition-all duration-300 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Brain className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">AI-First Approach</h3>
                <p className="text-gray-300">Leading-edge artificial intelligence solutions that adapt and evolve with your business needs</p>
              </motion.div>
              
              <motion.div 
                className="text-center p-8 group hover:bg-white/5 rounded-2xl transition-all duration-300 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Atom className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">Quantum Innovation</h3>
                <p className="text-gray-300">Next-generation quantum computing and security solutions for the future</p>
              </motion.div>
              
              <motion.div 
                className="text-center p-8 group hover:bg-white/5 rounded-2xl transition-all duration-300 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">Enterprise Security</h3>
                <p className="text-gray-300">Military-grade security and compliance solutions for enterprise environments</p>
              </motion.div>
              
              <motion.div 
                className="text-center p-8 group hover:bg-white/5 rounded-2xl transition-all duration-300 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">Rapid Deployment</h3>
                <p className="text-gray-300">Fast implementation and continuous optimization for maximum efficiency</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Technology Stack Section */}
        <section className="py-24 px-4 relative">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent">
                Cutting-Edge Technology Stack
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Built on the latest technologies and frameworks for maximum performance and scalability
              </p>
            </motion.div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: Brain, name: 'AI/ML', color: 'from-cyan-500 to-blue-600' },
                { icon: Atom, name: 'Quantum', color: 'from-purple-500 to-pink-600' },
                { icon: Cpu, name: 'Edge Computing', color: 'from-green-500 to-emerald-600' },
                { icon: Database, name: 'Big Data', color: 'from-orange-500 to-red-600' },
                { icon: Cloud, name: 'Cloud Native', color: 'from-blue-500 to-indigo-600' },
                { icon: Lock, name: 'Cybersecurity', color: 'from-red-500 to-pink-600' },
                { icon: Users, name: 'Collaboration', color: 'from-teal-500 to-cyan-600' },
                { icon: Target, name: 'Analytics', color: 'from-yellow-500 to-orange-600' }
              ].map((tech, index) => (
                <motion.div
                  key={tech.name}
                  className="text-center p-6 group hover:bg-white/5 rounded-2xl transition-all duration-300 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${tech.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <tech.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{tech.name}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-teal-500/5"></div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Join the future of technology with Zion Tech Group. Let's build something extraordinary together.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-10">
                <a href="tel:+1 302 464 0950" className="px-10 py-5 bg-gradient-to-r from-green-500 to-teal-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/25 text-lg">
                  Call Now: +1 302 464 0950
                </a>
                <a href="mailto:kleber@ziontechgroup.com" className="px-10 py-5 border-2 border-green-400 text-green-400 font-semibold rounded-xl hover:bg-green-400 hover:text-black transition-all duration-300 transform hover:scale-105 text-lg">
                  Email Us
                </a>
              </div>
              <div className="text-gray-400 flex items-center justify-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>364 E Main St STE 1008 Middletown DE 19709</span>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Homepage2025;