import React from 'react';
import Layout from './layout/Layout';
import UltraFuturisticServiceCard2026 from './ui/UltraFuturisticServiceCard2026';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Star, Users, Award, Clock, 
  Brain, Atom, Rocket, Shield, Zap, Globe,
  TrendingUp, Target, Cpu, Database, Cloud, Lock,
  Sparkles, Lightbulb, CheckCircle, Play
} from 'lucide-react';
import { innovative2025Services } from '../data/innovative-2025-2026-services';

const Homepage2026: React.FC = () => {
  const featuredServices = innovative2025Services.filter(service => service.popular).slice(0, 6);

  return (
    <Layout>
      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full blur-3xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            />
          </div>

          <div className="text-center max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-6"
            >
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-full text-cyan-300 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                Pioneering the Future of Technology
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight"
            >
              Zion Tech Group
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              Empowering businesses with cutting-edge AI, quantum computing, and space technology solutions. 
              Transform your operations with our innovative micro SAAS services and enterprise-grade IT solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <Link href="/get-started">
                <button className="group px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-cyan-500/25">
                  <span className="flex items-center">
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </Link>
              
              <Link href="/services">
                <button className="px-10 py-5 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
                  <span className="flex items-center">
                    Explore Services
                    <Rocket className="w-5 h-5 ml-2" />
                  </span>
                </button>
              </Link>

              <Link href="/demo">
                <button className="px-10 py-5 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 text-purple-300 font-semibold rounded-xl hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
                  <span className="flex items-center">
                    <Play className="w-5 h-5 mr-2" />
                    Watch Demo
                  </span>
                </button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Company Stats */}
        <section className="py-24 px-4 bg-gradient-to-r from-black/40 via-black/20 to-black/40 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Industry Leaders
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Our innovative solutions have transformed businesses across industries, delivering measurable results and driving growth.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              <div className="p-8 text-center group">
                <motion.div
                  className="text-5xl font-bold text-cyan-400 mb-3 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  500+
                </motion.div>
                <div className="text-gray-300 font-medium">AI Services</div>
                <div className="text-sm text-gray-500 mt-2">Advanced Solutions</div>
              </div>
              
              <div className="p-8 text-center group">
                <motion.div
                  className="text-5xl font-bold text-blue-400 mb-3 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  200+
                </motion.div>
                <div className="text-gray-300 font-medium">Quantum Solutions</div>
                <div className="text-sm text-gray-500 mt-2">Next-Gen Computing</div>
              </div>
              
              <div className="p-8 text-center group">
                <motion.div
                  className="text-5xl font-bold text-purple-400 mb-3 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  24/7
                </motion.div>
                <div className="text-gray-300 font-medium">Autonomous Operations</div>
                <div className="text-sm text-gray-500 mt-2">Always Available</div>
              </div>
              
              <div className="p-8 text-center group">
                <motion.div
                  className="text-5xl font-bold text-green-400 mb-3 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  ∞
                </motion.div>
                <div className="text-gray-300 font-medium">Future Possibilities</div>
                <div className="text-sm text-gray-500 mt-2">Limitless Innovation</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Services */}
        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-full text-purple-300 text-sm font-medium mb-6">
                <Star className="w-4 h-4 mr-2" />
                Featured Services
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Revolutionary Solutions
              </h2>
              
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Discover our cutting-edge technology solutions designed to transform your business operations 
                and drive unprecedented growth in the digital age.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {featuredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <UltraFuturisticServiceCard2026
                    service={{
                      id: service.id,
                      name: service.name,
                      tagline: service.tagline,
                      description: service.description,
                      price: `$${service.price.monthly}/month`,
                      period: 'monthly',
                      features: service.features.slice(0, 5),
                      category: service.category,
                      icon: service.icon,
                      popular: service.popular
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center mt-16"
            >
              <Link href="/services">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 text-cyan-300 font-semibold rounded-xl hover:from-cyan-500/30 hover:to-blue-500/30 transition-all duration-300 backdrop-blur-sm">
                  <span className="flex items-center justify-center">
                    View All Services
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </span>
                </button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-24 px-4 bg-gradient-to-r from-black/40 via-black/20 to-black/40 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Cutting-Edge Technology
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Built on the latest advancements in AI, quantum computing, and emerging technologies
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {[
                { icon: Brain, name: 'AI & ML', desc: 'Advanced AI Solutions' },
                { icon: Atom, name: 'Quantum', desc: 'Quantum Computing' },
                { icon: Rocket, name: 'Space Tech', desc: 'Space Technology' },
                { icon: Cpu, name: 'IT Infrastructure', desc: 'Enterprise Solutions' },
                { icon: Database, name: 'Big Data', desc: 'Data Analytics' },
                { icon: Cloud, name: 'Cloud Native', desc: 'Cloud Solutions' },
                { icon: Lock, name: 'Security', desc: 'Zero Trust Security' },
                { icon: Globe, name: 'Global', desc: 'Worldwide Reach' }
              ].map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 group-hover:scale-105">
                    <tech.icon className="w-12 h-12 mx-auto mb-4 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                    <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3>
                    <p className="text-sm text-gray-400">{tech.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                Join thousands of businesses already leveraging our innovative solutions to drive growth, 
                reduce costs, and stay ahead of the competition.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link href="/contact">
                  <button className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-cyan-500/25">
                    <span className="flex items-center">
                      Get Started Today
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </span>
                  </button>
                </Link>
                
                <Link href="/demo">
                  <button className="px-10 py-5 border-2 border-purple-400 text-purple-400 font-semibold rounded-xl hover:bg-purple-400 hover:text-black transition-all duration-300 transform hover:scale-105">
                    <span className="flex items-center">
                      <Play className="w-5 h-5 mr-2" />
                      Schedule Demo
                    </span>
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

export default Homepage2026;