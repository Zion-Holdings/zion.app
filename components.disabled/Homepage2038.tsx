import React from 'react';
import Layout from './layout/Layout';
import UltraFuturisticServiceCard2038 from './ui/UltraFuturisticServiceCard2038';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Star, 
  Brain, Atom, Shield, Zap, TrendingUp, Globe,
  Rocket, Target, Cpu, Cloud, Lock, Users, Award,
  CheckCircle, Sparkles, Infinity, Zap as Lightning
} from 'lucide-react';

// Import new services
import { innovative2038MicroSaasServices } from '../data/innovative-2038-micro-saas-services';
import { innovative2038ITServices } from '../data/innovative-2038-it-services';
import { innovative2038AIServices } from '../data/innovative-2038-ai-services';

const Homepage2038: React.FC = () => {
  // Get featured services from each category
  const featuredMicroSaas = innovative2038MicroSaasServices.filter(s => s.popular).slice(0, 3);
  const featuredIT = innovative2038ITServices.filter(s => s.popular).slice(0, 3);
  const featuredAI = innovative2038AIServices.filter(s => s.popular).slice(0, 3);

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
            <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-blue-400/20 rounded-full animate-pulse delay-1500"></div>
            <div className="absolute top-1/3 right-1/4 w-20 h-20 border border-green-400/20 transform rotate-12 animate-pulse delay-500"></div>
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
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full text-cyan-400 text-sm font-medium backdrop-blur-sm"
              >
                <Star className="w-4 h-4" />
                <span>Innovation Leader 2038</span>
                <Sparkles className="w-4 h-4" />
              </motion.div>
              
              <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight">
                Zion Tech Group
              </h1>
              <p className="text-2xl md:text-3xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed">
                Pioneering the future of technology with revolutionary AI, quantum computing, and consciousness evolution solutions
              </p>
              
              {/* Enhanced CTA Section */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-10">
                <Link href="/get-started">
                  <motion.button 
                    className="group px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 text-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="flex items-center gap-3">
                      Get Started
                      <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </motion.button>
                </Link>
                <Link href="/services">
                  <motion.button 
                    className="px-10 py-5 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 text-lg backdrop-blur-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Explore Services
                  </motion.button>
                </Link>
              </div>
              
              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-400"
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
                  <Award className="w-5 h-5 text-yellow-400" />
                  <span>Industry Leader</span>
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
                className="p-8 group hover:bg-white/5 rounded-2xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-5xl font-bold text-cyan-400 mb-3 group-hover:text-cyan-300 transition-colors">100+</div>
                <div className="text-gray-300 text-lg">AI Services</div>
                <div className="text-sm text-cyan-400 mt-3 opacity-0 group-hover:opacity-100 transition-opacity">Cutting-edge solutions</div>
              </motion.div>
              <motion.div 
                className="p-8 group hover:bg-white/5 rounded-2xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-5xl font-bold text-blue-400 mb-3 group-hover:text-blue-300 transition-colors">200+</div>
                <div className="text-gray-300 text-lg">Quantum Solutions</div>
                <div className="text-sm text-blue-400 mt-3 opacity-0 group-hover:opacity-100 transition-opacity">Next-gen computing</div>
              </motion.div>
              <motion.div 
                className="p-8 group hover:bg-white/5 rounded-2xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-5xl font-bold text-purple-400 mb-3 group-hover:text-purple-300 transition-colors">24/7</div>
                <div className="text-gray-300 text-lg">Autonomous Operations</div>
                <div className="text-sm text-purple-400 mt-3 opacity-0 group-hover:opacity-100 transition-opacity">Always available</div>
              </motion.div>
              <motion.div 
                className="p-8 group hover:bg-white/5 rounded-2xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-5xl font-bold text-green-400 mb-3 group-hover:text-green-300 transition-colors">∞</div>
                <div className="text-gray-300 text-lg">Future Possibilities</div>
                <div className="text-sm text-green-400 mt-3 opacity-0 group-hover:opacity-100 transition-opacity">Unlimited potential</div>
              </motion.div>
            </motion.div>
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
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Revolutionary AI Services
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Experience the next evolution of artificial intelligence with our consciousness evolution and quantum AI platforms
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {featuredAI.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <UltraFuturisticServiceCard2038
                    service={service}
                    variant="consciousness"
                  />
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <Link href="/ai-services">
                <motion.button
                  className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-xl hover:bg-purple-400 hover:text-black transition-all duration-300 transform hover:scale-105 text-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View All AI Services
                </motion.button>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Micro SAAS Services */}
        <section className="py-24 px-4 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
                Innovative Micro SAAS
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Transform your business with our cutting-edge micro SAAS solutions designed for the future
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {featuredMicroSaas.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <UltraFuturisticServiceCard2038
                    service={service}
                    variant="automation"
                  />
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <Link href="/services">
                <motion.button
                  className="px-8 py-4 border-2 border-emerald-400 text-emerald-400 font-semibold rounded-xl hover:bg-emerald-400 hover:text-black transition-all duration-300 transform hover:scale-105 text-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore All Services
                </motion.button>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured IT Services */}
        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                Advanced IT Infrastructure
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Build the future with our quantum cloud infrastructure and AI-powered DevOps automation
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {featuredIT.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <UltraFuturisticServiceCard2038
                    service={service}
                    variant="quantum"
                  />
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <Link href="/it-services">
                <motion.button
                  className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-xl hover:bg-blue-400 hover:text-black transition-all duration-300 transform hover:scale-105 text-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View All IT Services
                </motion.button>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 px-4 bg-black/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                We're not just building technology - we're shaping the future of human consciousness and computing
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Brain className="w-12 h-12" />,
                  title: "AI Consciousness Evolution",
                  description: "Leading the development of artificial consciousness and emotional intelligence",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  icon: <Atom className="w-12 h-12" />,
                  title: "Quantum Computing Power",
                  description: "Access to the most advanced quantum computing capabilities available",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  icon: <Shield className="w-12 h-12" />,
                  title: "Future-Proof Security",
                  description: "Quantum-resistant encryption and zero-trust security frameworks",
                  color: "from-red-500 to-orange-500"
                },
                {
                  icon: <Rocket className="w-12 h-12" />,
                  title: "Innovation First",
                  description: "Constantly pushing the boundaries of what's possible in technology",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  icon: <Users className="w-12 h-12" />,
                  title: "Global Expertise",
                  description: "World-class team with experience across cutting-edge technologies",
                  color: "from-indigo-500 to-purple-500"
                },
                {
                  icon: <Award className="w-12 h-12" />,
                  title: "Proven Results",
                  description: "Track record of delivering transformative solutions to leading organizations",
                  color: "from-yellow-500 to-orange-500"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-8 group hover:bg-white/5 rounded-2xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Ready to Shape the Future?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join the revolution in AI consciousness, quantum computing, and next-generation technology. 
                Let's build the future together.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/contact">
                  <motion.button
                    className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 text-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="flex items-center gap-3">
                      Get Started Today
                      <ArrowRight className="w-6 h-6" />
                    </span>
                  </motion.button>
                </Link>
                <Link href="/services">
                  <motion.button
                    className="px-10 py-5 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 text-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Explore Our Services
                  </motion.button>
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