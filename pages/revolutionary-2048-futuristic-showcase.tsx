import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Brain, 
  Globe, 
  Clock, 
  Atom, 
  Database, 
  Star, 
  Rocket,
  ArrowRight,
  CheckCircle,
  Users,
  TrendingUp,
  Shield,
  Cpu,
  Infinity,
  Target
} from 'lucide-react';
import { revolutionary2048FuturisticServices } from '../data/revolutionary-2048-futuristic-services';

const Revolutionary2048FuturisticShowcase: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const serviceVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Head>
        <title>Revolutionary 2048 Futuristic Services - Zion Tech Group</title>
        <meta name="description" content="Explore the future with Zion Tech Group's revolutionary 2048 futuristic services including quantum consciousness transfer, multi-dimensional reality fabrication, and quantum physics manipulation platforms." />
        <meta name="keywords" content="quantum consciousness, multi-dimensional reality, quantum time manipulation, quantum gravity, matter transmutation, energy manipulation, space manipulation, information manipulation, 2048, futuristic services" />
        <link rel="canonical" href="https://ziontechgroup.com/revolutionary-2048-futuristic-showcase" />
      </Head>

      {/* Hero Section */}
      <motion.div 
        className="relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div 
            className="text-center"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-white mb-6"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Revolutionary 2048
              </span>
              <br />
              <span className="text-white">Futuristic Services</span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Experience the future of technology with our groundbreaking quantum consciousness transfer, 
              multi-dimensional reality fabrication, and universal physics manipulation platforms.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                Explore Services
              </button>
              <button className="border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white/10">
                Contact Us
              </button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Services Grid */}
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center text-white mb-16"
          variants={itemVariants}
        >
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Revolutionary Services
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {revolutionary2048FuturisticServices.map((service, index) => (
            <motion.div
              key={service.id}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer group"
              variants={serviceVariants}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                transition: { duration: 0.3 }
              }}
              onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                  {index === 0 && <Brain className="w-8 h-8 text-white" />}
                  {index === 1 && <Globe className="w-8 h-8 text-white" />}
                  {index === 2 && <Clock className="w-8 h-8 text-white" />}
                  {index === 3 && <Atom className="w-8 h-8 text-white" />}
                  {index === 4 && <Database className="w-8 h-8 text-white" />}
                  {index === 5 && <Zap className="w-8 h-8 text-white" />}
                  {index === 6 && <Rocket className="w-8 h-8 text-white" />}
                  {index === 7 && <Infinity className="w-8 h-8 text-white" />}
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-400">Starting at</div>
                  <div className="text-xl font-bold text-white">{service.pricing.starter}</div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {service.name}
              </h3>
              <p className="text-gray-300 mb-4 line-clamp-3">
                {service.description}
              </p>

              <div className="flex items-center justify-between">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
                  {service.category}
                </span>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </div>

              {/* Expanded Service Details */}
              {selectedService === service.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-6 pt-6 border-t border-white/10"
                >
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Features</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {service.features.slice(0, 6).map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Benefits</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {service.benefits.slice(0, 4).map((benefit, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-300">
                            <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-400">Market Size:</span>
                        <div className="text-white font-semibold">{service.marketSize}</div>
                      </div>
                      <div>
                        <span className="text-gray-400">Type:</span>
                        <div className="text-white font-semibold">{service.type}</div>
                      </div>
                    </div>

                    <div className="pt-4">
                      <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                        Get Started
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Contact Section */}
      <motion.div 
        className="bg-white/5 backdrop-blur-lg border-t border-white/10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Shape the Future?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Join the revolution and be part of the most advanced technological breakthroughs 
              that will define the future of humanity and consciousness.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Expert Team</h3>
                <p className="text-gray-300">World-class scientists and engineers</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Secure & Reliable</h3>
                <p className="text-gray-300">Enterprise-grade security protocols</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Future-Proof</h3>
                <p className="text-gray-300">Cutting-edge quantum technology</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Zion Tech Group</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div>
                  <div className="flex items-center mb-3">
                    <Target className="w-5 h-5 text-blue-400 mr-3" />
                    <span className="text-gray-300">Address:</span>
                  </div>
                  <p className="text-white ml-8">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
                
                <div>
                  <div className="flex items-center mb-3">
                    <Cpu className="w-5 h-5 text-purple-400 mr-3" />
                    <span className="text-gray-300">Contact:</span>
                  </div>
                  <p className="text-white ml-8">
                    Email: kleber@ziontechgroup.com<br />
                    Mobile: +1 302 464 0950
                  </p>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <a 
                  href="https://ziontechgroup.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                >
                  Visit Website
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <footer className="bg-black/20 border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2025 Zion Tech Group. All rights reserved. | 
            <span className="text-blue-400 ml-2">
              Revolutionary 2048 Futuristic Services
            </span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Revolutionary2048FuturisticShowcase;