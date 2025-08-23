import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Star, Brain, Atom, Shield, Rocket, Cloud, 
  Eye, Layers, Zap, BarChart3, Settings, 
  ShoppingBag, FileText, Video, Code, 
  ChevronRight, ArrowRight, Sparkles, Crown,
  Award, TrendingUp, Users, Briefcase, Handshake
} from 'lucide-react';
import Link from 'next/link';
import { cuttingEdgeInnovativeServices2025, innovativeITServices2025, innovativeAIServices2025 } from '../data/2025-cutting-edge-innovative-services';

const CuttingEdgeInnovativeServicesShowcase2025: React.FC = () => {
  const seoConfig = {
    title: "2025 Cutting-Edge Innovative Services Showcase - Zion Tech Group",
    description: "Explore our revolutionary 2025 services including AI consciousness evolution, quantum AI brain-computer interfaces, autonomous content factories, and cutting-edge space technology solutions.",
    keywords: "2025 services, AI consciousness, quantum AI, brain-computer interface, autonomous content, space technology, cutting-edge technology, innovative solutions, Zion Tech Group",
    image: "/og-image.svg",
    url: "https://ziontechgroup.com/2025-cutting-edge-innovative-services-showcase",
    type: "website"
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const categoryColors = {
    'AI & Consciousness': 'from-purple-500 to-pink-500',
    'Quantum & Neural Tech': 'from-blue-500 to-cyan-500',
    'AI & Content': 'from-green-500 to-emerald-500',
    'Quantum & Logistics': 'from-indigo-500 to-purple-500',
    'Metaverse & AI': 'from-pink-500 to-red-500',
    'Quantum & Security': 'from-green-500 to-blue-500',
    'Space Technology': 'from-orange-500 to-red-500',
    'Enterprise AI': 'from-cyan-500 to-blue-500',
    'Quantum & Finance': 'from-yellow-500 to-orange-500',
    'AI & Healthcare': 'from-green-500 to-teal-500',
    'Quantum & Cloud': 'from-blue-500 to-indigo-500',
    'AI & Marketing': 'from-purple-500 to-indigo-500',
    'Quantum & Analytics': 'from-cyan-500 to-teal-500',
    'AI & Legal': 'from-gray-500 to-slate-500',
    'Quantum & IoT': 'from-blue-500 to-green-500',
    'AI & Customer Service': 'from-orange-500 to-yellow-500'
  };

  return (
    <Layout>
      <div className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              {/* Badge */}
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/50 rounded-full text-cyan-400 text-sm font-medium backdrop-blur-sm"
                style={{
                  boxShadow: '0 0 20px rgba(6, 182, 212, 0.5)',
                }}
              >
                <Sparkles className="w-4 h-4" />
                <span>2025 Innovation Showcase</span>
                <Star className="w-4 h-4 text-yellow-400" />
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                variants={itemVariants}
                className="text-5xl md:text-7xl font-bold text-white mb-8"
              >
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Cutting-Edge
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                  Innovative Services
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                variants={itemVariants}
                className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
              >
                Experience the future of technology with our revolutionary 2025 services portfolio. 
                From AI consciousness evolution to quantum brain-computer interfaces, 
                discover solutions that will transform your business.
              </motion.p>

              {/* Stats */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">15+</div>
                  <div className="text-gray-400">Innovative Services</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">8+</div>
                  <div className="text-gray-400">Technology Categories</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">24/7</div>
                  <div className="text-gray-400">Support Available</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">∞</div>
                  <div className="text-gray-400">Possibilities</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Revolutionary <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">2025 Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive portfolio of cutting-edge services designed to drive innovation and transformation
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cuttingEdgeInnovativeServices2025.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105 h-full"
                    style={{
                      boxShadow: '0 0 30px rgba(6, 182, 212, 0.2)',
                    }}>
                    
                    {/* Service Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl">{service.icon || '🚀'}</span>
                        <span className="text-sm text-cyan-400 font-medium">{service.category}</span>
                      </div>
                      {service.popular && (
                        <span className="px-2 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold rounded-full">
                          POPULAR
                        </span>
                      )}
                    </div>

                    {/* Service Title */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                      {service.name}
                    </h3>

                    {/* Service Description */}
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Pricing */}
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                      <div className="text-gray-400">{service.period}</div>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <div className="text-sm text-gray-400 mb-2">Key Features:</div>
                      <div className="flex flex-wrap gap-2">
                        {service.features?.slice(0, 3).map((feature, featureIndex) => (
                          <span
                            key={featureIndex}
                            className="px-2 py-1 bg-cyan-500/20 border border-cyan-400/30 rounded-full text-cyan-400 text-xs"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Benefits */}
                    {service.benefits && (
                      <div className="mb-6">
                        <div className="text-sm text-gray-400 mb-2">Benefits:</div>
                        <ul className="space-y-1">
                          {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="text-xs text-gray-300 flex items-center space-x-2">
                              <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Use Cases */}
                    {service.useCases && (
                      <div className="mb-6">
                        <div className="text-sm text-gray-400 mb-2">Perfect for:</div>
                        <div className="flex flex-wrap gap-1">
                          {service.useCases.slice(0, 2).map((useCase, useCaseIndex) => (
                            <span
                              key={useCaseIndex}
                              className="px-2 py-1 bg-purple-500/20 border border-purple-400/30 rounded-full text-purple-400 text-xs"
                            >
                              {useCase}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* CTA Button */}
                    <div className="mt-auto">
                      <Link href={`/services/${service.id}`}>
                        <button className="w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 group-hover:shadow-lg group-hover:shadow-cyan-500/25">
                          <span className="flex items-center justify-center space-x-2">
                            Learn More
                            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </span>
                        </button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* IT Services Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Advanced <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">IT Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                ArrowRight-generation IT infrastructure and solutions powered by quantum computing and AI
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {innovativeITServices2025.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-indigo-400/50 transition-all duration-300 hover:transform hover:scale-105 h-full">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Settings className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">{service.name}</h3>
                      <p className="text-gray-300 mb-4">{service.description}</p>
                      <div className="text-2xl font-bold text-indigo-400 mb-4">{service.price}</div>
                      <Link href={`/services/${service.id}`}>
                        <button className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium rounded-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                          Explore Service
                        </button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Services Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Revolutionary <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">AI Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the future of artificial intelligence with consciousness and quantum enhancement
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {innovativeAIServices2025.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105 h-full">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Brain className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                      <p className="text-gray-300 mb-6 text-lg">{service.description}</p>
                      <div className="text-3xl font-bold text-purple-400 mb-6">{service.price}</div>
                      <Link href={`/services/${service.id}`}>
                        <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-medium rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                          Discover AI Service
                        </button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-3xl p-12"
              style={{
                boxShadow: '0 0 50px rgba(6, 182, 212, 0.4)',
              }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join the future of technology with our revolutionary 2025 services. 
                Experience AI consciousness, quantum computing, and autonomous solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                    <span className="flex items-center space-x-2">
                      Get Started Today
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  </button>
                </Link>
                <Link href="/services">
                  <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105">
                    View All Services
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CuttingEdgeInnovativeServicesShowcase2025;