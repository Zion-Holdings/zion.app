import React from 'react';
import { motion } from 'framer-motion';
import { 
  Star, ArrowRight, Zap, Shield, Users, Globe, 
  TrendingUp, Clock, Target, Building, Rocket, 
  Brain, Atom, Microscope, Dna, Lightbulb,
  CheckCircle, ExternalLink, Sparkles
} from 'lucide-react';
import Link from 'next/link';
import { innovativeMicroSaasServicesV2 } from '../../data/2025-innovative-micro-saas-v2';
import { emergingTechBreakthroughServices } from '../../data/2025-emerging-tech-breakthroughs';

export default function UltraFuturisticServiceShowcase2034() {
  const popularServices = innovativeMicroSaasServicesV2.filter(service => service.popular);
  const breakthroughServices = emergingTechBreakthroughServices.filter(service => service.popular);

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
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
              2034 Future Technology Services
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Experience the next generation of AI, quantum computing, and emerging technologies. 
              Our cutting-edge solutions are designed to transform your business and propel you into the future.
            </p>
          </motion.div>
          
          <motion.div 
            className="mt-8 flex flex-wrap justify-center gap-4"
            variants={itemVariants}
          >
            <div className="flex items-center space-x-2 text-cyan-400">
              <Sparkles className="w-5 h-5" />
              <span className="text-sm font-medium">AI-Powered Solutions</span>
            </div>
            <div className="flex items-center space-x-2 text-purple-400">
              <Atom className="w-5 h-5" />
              <span className="text-sm font-medium">Quantum Technology</span>
            </div>
            <div className="flex items-center space-x-2 text-pink-400">
              <Rocket className="w-5 h-5" />
              <span className="text-sm font-medium">Space & Metaverse</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Popular Services Grid */}
        <motion.div
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h3 
            className="text-3xl font-bold text-white mb-12 text-center"
            variants={itemVariants}
          >
            🚀 Popular Micro SAAS Solutions
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularServices.map((service, index) => (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover="hover"
                className="group relative"
              >
                <div className={`relative p-6 rounded-2xl bg-gradient-to-br ${service.color} bg-opacity-10 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 h-full`}>
                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Service Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{service.icon}</div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-300">{service.rating}</span>
                    </div>
                  </div>

                  {/* Service Content */}
                  <h4 className="text-xl font-bold text-white mb-2">{service.name}</h4>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{service.description}</p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span className="text-xs text-gray-400">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                      <span className="text-gray-400">{service.period}</span>
                    </div>
                    <Link
                      href={service.link}
                      className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center space-x-2 group-hover:scale-105"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  {/* Hover Glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Breakthrough Technologies */}
        <motion.div
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h3 
            className="text-3xl font-bold text-white mb-12 text-center"
            variants={itemVariants}
          >
            🔬 Emerging Technology Breakthroughs
          </motion.h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {breakthroughServices.map((service, index) => (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover="hover"
                className="group relative"
              >
                <div className={`relative p-8 rounded-2xl bg-gradient-to-br ${service.color} bg-opacity-10 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 h-full`}>
                  {/* Service Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-5xl">{service.icon}</div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-cyan-400">{service.price}</div>
                      <div className="text-gray-400 text-sm">{service.period}</div>
                    </div>
                  </div>

                  {/* Service Content */}
                  <h4 className="text-2xl font-bold text-white mb-3">{service.name}</h4>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

                  {/* Key Features */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span className="text-sm text-gray-400">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Market Info */}
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                    <span>Market: {service.marketSize}</span>
                    <span>Growth: {service.growthRate}</span>
                  </div>

                  {/* CTA */}
                  <Link
                    href={service.link}
                    className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 group-hover:scale-105"
                  >
                    <span>Explore Technology</span>
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div 
            className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-2xl p-8"
            variants={itemVariants}
          >
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of forward-thinking companies already leveraging our cutting-edge technologies. 
              Get started today and secure your competitive advantage for the next decade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 group"
              >
                <span>Contact Our Team</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/pricing-enhanced-2026"
                className="px-8 py-4 border border-cyan-500/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center space-x-2 group"
              >
                <span>View Pricing</span>
                <TrendingUp className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}