import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, TrendingUp, Zap, Brain, Rocket, Globe, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { aiAutonomousServices2026 } from '../../data/2026-ai-autonomous-services';
import { quantumSpaceTechServices2026 } from '../../data/2026-quantum-space-tech-services';
import { metaverseDigitalRealityServices2026 } from '../../data/2026-metaverse-digital-reality-services';

export default function Revolutionary2026ServicesShowcase() {
  // Get featured services from each category
  const featuredAIServices = aiAutonomousServices2026.slice(0, 3);
  const featuredQuantumServices = quantumSpaceTechServices2026.slice(0, 3);
  const featuredMetaverseServices = metaverseDigitalRealityServices2026.slice(0, 3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-transparent to-cyan-900/30"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-pink-900/20 via-transparent to-blue-900/20"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 px-4 py-2 rounded-full border border-purple-500/30 mb-6">
            <Sparkles className="w-5 h-5 text-purple-400" />
            <span className="text-purple-300 text-sm font-medium">2026 Revolutionary Innovations</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              The Future is Now
            </span>
          </h2>
          
          <p className="text-gray-300 text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            Experience the most advanced AI, quantum computing, and metaverse technologies ever created. 
            <span className="text-purple-400 font-semibold"> 1000% ROI guaranteed</span> with our revolutionary solutions.
          </p>

          {/* Service Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">{aiAutonomousServices2026.length}</div>
              <div className="text-gray-400 text-sm">AI Autonomous Services</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400">{quantumSpaceTechServices2026.length}</div>
              <div className="text-gray-400 text-sm">Quantum Space Tech</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400">{metaverseDigitalRealityServices2026.length}</div>
              <div className="text-gray-400 text-sm">Metaverse Services</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">∞</div>
              <div className="text-gray-400 text-sm">Possibilities</div>
            </div>
          </div>
        </motion.div>

        {/* AI Autonomous Services Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center space-x-3 mb-12">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white">AI Autonomous Services</h3>
              <p className="text-blue-300">Fully autonomous AI systems that run your business</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredAIServices.map((service, index) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-black/40 backdrop-blur-xl border border-blue-500/20 rounded-2xl p-6 hover:border-blue-500/40 transition-all duration-300 h-full">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="text-3xl">{service.icon}</div>
                    <div>
                      <h4 className="text-xl font-bold text-white">{service.name}</h4>
                      <p className="text-blue-300 text-sm">{service.tagline}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span className="text-gray-400 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-blue-400">{service.price}</span>
                      <span className="text-gray-400">{service.period}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-yellow-400 text-sm">{service.rating}</span>
                      <span className="text-gray-400 text-sm">({service.reviews})</span>
                    </div>
                  </div>

                  <Link 
                    href={service.link} 
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link 
              href="/services?category=ai-autonomous"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30"
            >
              View All AI Autonomous Services <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </motion.div>

        {/* Quantum Space Tech Services Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center space-x-3 mb-12">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
              <Rocket className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white">Quantum Space Technology</h3>
              <p className="text-indigo-300">Revolutionary quantum-powered space exploration and technology</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredQuantumServices.map((service, index) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-black/40 backdrop-blur-xl border border-indigo-500/20 rounded-2xl p-6 hover:border-indigo-500/40 transition-all duration-300 h-full">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="text-3xl">{service.icon}</div>
                    <div>
                      <h4 className="text-xl font-bold text-white">{service.name}</h4>
                      <p className="text-indigo-300 text-sm">{service.tagline}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                        <span className="text-gray-400 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-indigo-400">{service.price}</span>
                      <span className="text-gray-400">{service.period}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-yellow-400 text-sm">{service.rating}</span>
                      <span className="text-gray-400 text-sm">({service.reviews})</span>
                    </div>
                  </div>

                  <Link 
                    href={service.link} 
                    className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors text-sm font-medium"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link 
              href="/services?category=quantum-space"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30"
            >
              View All Quantum Space Services <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </motion.div>

        {/* Metaverse & Digital Reality Services Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center space-x-3 mb-12">
            <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white">Metaverse & Digital Reality</h3>
              <p className="text-pink-300">Immersive virtual worlds and consciousness interfaces</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredMetaverseServices.map((service, index) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 to-rose-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-black/40 backdrop-blur-xl border border-pink-500/20 rounded-2xl p-6 hover:border-pink-500/40 transition-all duration-300 h-full">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="text-3xl">{service.icon}</div>
                    <div>
                      <h4 className="text-xl font-bold text-white">{service.name}</h4>
                      <p className="text-pink-300 text-sm">{service.tagline}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                        <span className="text-gray-400 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-pink-400">{service.price}</span>
                      <span className="text-gray-400">{service.period}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-yellow-400 text-sm">{service.rating}</span>
                      <span className="text-gray-400 text-sm">({service.reviews})</span>
                    </div>
                  </div>

                  <Link 
                    href={service.link} 
                    className="inline-flex items-center text-pink-400 hover:text-pink-300 transition-colors text-sm font-medium"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link 
              href="/services?category=metaverse"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-600 to-rose-600 text-white font-semibold rounded-xl hover:from-pink-700 hover:to-rose-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30"
            >
              View All Metaverse Services <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </motion.div>

        {/* Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-900/40 via-pink-900/40 to-cyan-900/40 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-12">
            <h3 className="text-4xl font-bold text-white mb-6">
              Ready to Experience the Future?
            </h3>
            <p className="text-gray-300 text-xl mb-8 max-w-3xl mx-auto">
              Join thousands of companies already achieving unprecedented success with our revolutionary 2026 technologies. 
              <span className="text-purple-400 font-semibold"> Contact us today</span> to start your transformation.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link 
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30"
              >
                <Zap className="w-5 h-5 mr-2" />
                Get Started Today
              </Link>
              
              <Link 
                href="/services"
                className="inline-flex items-center px-8 py-4 border border-purple-500/50 text-purple-300 font-semibold rounded-xl hover:bg-purple-500/10 transition-all duration-300"
              >
                Explore All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-400 text-sm mb-2">Contact Information</p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm">
                <span className="text-purple-300">📱 +1 302 464 0950</span>
                <span className="text-purple-300">✉️ kleber@ziontechgroup.com</span>
                <span className="text-purple-300">🌐 ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}