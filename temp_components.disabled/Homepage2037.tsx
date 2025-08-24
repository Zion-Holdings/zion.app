import React from 'react';
import Layout from './layout/Layout';
import UltraFuturisticServiceCard2026 from './ui/UltraFuturisticServiceCard2026';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Star, Users, Award, Clock, 
  Brain, Atom, Shield, Rocket, Zap,
  TrendingUp, Globe, Cpu, Database, Cloud,
  Lock, Palette, Target, CheckCircle, Sparkles
} from 'lucide-react';

// Import new service data
import { realMicroSaasServices2025 } from '../data/real-micro-saas-services-2025';
import { realITServices2025 } from '../data/real-it-services-2025';
import { realAIServices2025 } from '../data/real-ai-services-2025';

const Homepage2037: React.FC = () => {
  // Get featured services from each category
  const featuredMicroSaas = realMicroSaasServices2025.filter(service => service.popular).slice(0, 3);
  const featuredIT = realITServices2025.filter(service => service.popular).slice(0, 3);
  const featuredAI = realAIServices2025.filter(service => service.popular).slice(0, 3);

  return (
    <Layout>
      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 relative">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
          </div>
          
          <div className="text-center max-w-5xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              {/* Main heading with enhanced typography */}
              <div className="mb-8">
                <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight">
                  Zion Tech Group
                </h1>
                <div className="text-2xl md:text-3xl text-gray-300 mb-4 font-light">
                  Pioneering the Future of Technology
                </div>
                <div className="text-xl md:text-2xl text-cyan-400 font-medium">
                  Revolutionary AI • Quantum Computing • Enterprise Solutions
                </div>
              </div>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                Transform your business with cutting-edge AI, quantum computing, and enterprise solutions. 
                We deliver innovative technology that drives business transformation and shapes the future.
              </p>
              
              {/* Enhanced CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link href="/contact">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg rounded-2xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40"
                  >
                    Start Your Transformation
                  </motion.button>
                </Link>
                <Link href="/services">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-5 border-2 border-cyan-400 text-cyan-400 font-bold text-lg rounded-2xl hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105"
                  >
                    Explore Services
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Company Stats */}
        <section className="py-24 px-4 bg-black/40 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Trusted by Industry Leaders
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our innovative solutions are powering the future of technology across industries
              </p>
            </motion.div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300"
              >
                <div className="text-5xl font-bold text-cyan-400 mb-3">50+</div>
                <div className="text-gray-300 text-lg">AI Services</div>
                <div className="text-cyan-400 text-sm mt-2">Revolutionary Solutions</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
              >
                <div className="text-5xl font-bold text-blue-400 mb-3">100+</div>
                <div className="text-gray-300 text-lg">Quantum Solutions</div>
                <div className="text-blue-400 text-sm mt-2">Future Technology</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
              >
                <div className="text-5xl font-bold text-purple-400 mb-3">24/7</div>
                <div className="text-gray-300 text-lg">Autonomous Operations</div>
                <div className="text-purple-400 text-sm mt-2">Always Available</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-gradient-to-br from-green-500/10 to-teal-500/10 rounded-2xl border border-green-500/20 hover:border-green-500/40 transition-all duration-300"
              >
                <div className="text-5xl font-bold text-green-400 mb-3">∞</div>
                <div className="text-gray-300 text-lg">Future Possibilities</div>
                <div className="text-green-400 text-sm mt-2">Limitless Innovation</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Featured AI Services */}
        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center space-x-3 mb-6">
                <Brain className="w-8 h-8 text-cyan-400" />
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Revolutionary AI Services
                </h2>
              </div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the future of artificial intelligence with our breakthrough consciousness and emotional intelligence platforms
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredAI.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <UltraFuturisticServiceCard2026
                    service={{
                      id: service.id,
                      name: service.name,
                      tagline: service.tagline,
                      description: service.description,
                      price: service.price,
                      period: service.period,
                      features: service.features.slice(0, 5),
                      popular: service.popular,
                      category: service.category,
                      icon: service.icon
                    }}
                    variant="ai"
                  />
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Link href="/ai-services">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 mx-auto shadow-lg shadow-cyan-500/25">
                  View All AI Services
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Featured Enterprise IT Services */}
        <section className="py-24 px-4 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center space-x-3 mb-6">
                <Shield className="w-8 h-8 text-blue-400" />
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Enterprise IT Solutions
                </h2>
              </div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Future-proof your enterprise with quantum-secure infrastructure and autonomous operations
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredIT.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <UltraFuturisticServiceCard2026
                    service={{
                      id: service.id,
                      name: service.name,
                      tagline: service.tagline,
                      description: service.description,
                      price: service.price,
                      period: service.period,
                      features: service.features.slice(0, 5),
                      popular: service.popular,
                      category: service.category,
                      icon: service.icon
                    }}
                    variant="enterprise"
                  />
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Link href="/it-services">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 mx-auto shadow-lg shadow-blue-500/25">
                  View All IT Services
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Featured Micro SAAS Services */}
        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center space-x-3 mb-6">
                <Rocket className="w-8 h-8 text-green-400" />
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent">
                  Micro SAAS Solutions
                </h2>
              </div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your business operations with intelligent automation and AI-powered insights
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredMicroSaas.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <UltraFuturisticServiceCard2026
                    service={{
                      id: service.id,
                      name: service.name,
                      tagline: service.tagline,
                      description: service.description,
                      price: service.price,
                      period: service.period,
                      features: service.features.slice(0, 5),
                      popular: service.popular,
                      category: service.category,
                      icon: service.icon
                    }}
                    variant="automation"
                  />
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Link href="/micro-saas">
                <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-teal-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 mx-auto shadow-lg shadow-green-500/25">
                  View All SAAS Solutions
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Why Choose Us Section */}
        <section className="py-24 px-4 bg-black/30">
          <div className="max-w-7xl mx-auto">
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">AI-First Approach</h3>
                <p className="text-gray-300 leading-relaxed">Leading-edge artificial intelligence solutions that adapt, evolve, and transform your business operations</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 group"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Atom className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Quantum Innovation</h3>
                <p className="text-gray-300 leading-relaxed">Next-generation quantum computing and security solutions that prepare you for the future</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise Security</h3>
                <p className="text-gray-300 leading-relaxed">Military-grade security and compliance solutions that protect your most valuable assets</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-gradient-to-br from-green-500/10 to-teal-500/10 rounded-2xl border border-green-500/20 hover:border-green-500/40 transition-all duration-300 group"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Rapid Deployment</h3>
                <p className="text-gray-300 leading-relaxed">Fast implementation and continuous optimization to get you up and running quickly</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Enhanced Call to Action */}
        <section className="py-24 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-3xl blur-3xl"></div>
              
              <div className="relative z-10 p-12 bg-gradient-to-r from-black/80 to-gray-900/80 backdrop-blur-xl rounded-3xl border border-cyan-500/30">
                <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-green-400 via-cyan-400 to-teal-500 bg-clip-text text-transparent">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                  Join the future of technology with Zion Tech Group. Let's build something extraordinary together and shape the future of your industry.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <Link href="/contact">
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-12 py-5 bg-gradient-to-r from-green-500 to-teal-600 text-white font-bold text-xl rounded-2xl hover:from-green-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-green-500/25"
                    >
                      Start Your Journey Today
                    </motion.button>
                  </Link>
                  <Link href="/demo">
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-12 py-5 border-2 border-green-400 text-green-400 font-bold text-xl rounded-2xl hover:bg-green-400 hover:text-black transition-all duration-300 transform hover:scale-105"
                    >
                      Request Demo
                    </motion.button>
                  </Link>
                </div>
                
                <div className="mt-8 text-gray-400">
                  <p className="text-sm">Contact us: <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 302 464 0950</a></p>
                  <p className="text-sm">Email: <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">kleber@ziontechgroup.com</a></p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Homepage2037;