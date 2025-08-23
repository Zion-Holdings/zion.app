import React from 'react';
import Layout from './layout/Layout';
import UltraFuturisticServiceCard2026 from './ui/UltraFuturisticServiceCard2026';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Star, 
  Brain, Atom, Shield, Zap, TrendingUp, Globe
} from 'lucide-react';

const Homepage2025: React.FC = () => {
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
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center mt-12 space-y-4"
            >
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/innovative-2036-services-showcase">
                  <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-lg shadow-purple-500/25">
                    <Star className="w-5 h-5" />
                    Innovative 2036 Services
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
                <Link href="/services">
                  <button className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-black transition-all duration-300 transform hover:scale-105">
                    View All Services
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us */}
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 group hover:bg-white/5 rounded-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">AI-First Approach</h3>
                <p className="text-gray-300">Leading-edge artificial intelligence solutions that adapt and evolve</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center p-6 group hover:bg-white/5 rounded-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Atom className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Quantum Innovation</h3>
                <p className="text-gray-300">Next-generation quantum computing and security solutions</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center p-6 group hover:bg-white/5 rounded-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Enterprise Security</h3>
                <p className="text-gray-300">Military-grade security and compliance solutions</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center p-6 group hover:bg-white/5 rounded-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
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

        {/* Call to Action */}
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
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-teal-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/25">
                    Get Started Today
                  </button>
                </Link>
                <Link href="/demo">
                  <button className="px-8 py-4 border-2 border-green-400 text-green-400 font-semibold rounded-lg hover:bg-green-400 hover:text-black transition-all duration-300 transform hover:scale-105">
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

export default Homepage2025;