import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Star, TrendingUp, Zap, Shield, Brain, Atom, Globe, Rocket } from 'lucide-react';
import { innovative2026MicroSaasServices } from '../../data/innovative-2026-micro-saas';
import { emergingTech2026Services } from '../../data/emerging-tech-2026-services';
import { enterpriseIT2026Services } from '../../data/enterprise-it-2026-services';

const Enhanced2026ServicesShowcase = () => {
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
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const cardVariants = {
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
    <section className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium mb-6"
          >
            <Rocket className="w-4 h-4 mr-2" />
            2026 Innovation Preview
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
            Revolutionary 2026 Services
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experience the future of technology with our cutting-edge 2026 services. 
            From quantum computing to autonomous AI agents, we're redefining what's possible.
          </p>
        </motion.div>

        {/* AI & Micro SaaS Services */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="mb-20"
        >
          <motion.h3 
            variants={itemVariants}
            className="text-3xl font-bold text-white mb-8 text-center flex items-center justify-center"
          >
            <Brain className="w-8 h-8 mr-3 text-purple-400" />
            AI & Micro SaaS Innovation
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {innovative2026MicroSaasServices.map((service, index) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                whileHover="hover"
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 p-6 h-full">
                  {/* Service Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{service.icon}</div>
                    {service.popular && (
                      <div className="flex items-center bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                        <Star className="w-3 h-3 mr-1" />
                        Popular
                      </div>
                    )}
                  </div>

                  {/* Service Details */}
                  <h4 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {service.name}
                  </h4>
                  
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Price */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-white">
                      {service.price}
                      <span className="text-sm text-gray-400 font-normal">{service.period}</span>
                    </div>
                    <div className="text-sm text-gray-400">
                      {service.trialDays} days free
                    </div>
                  </div>

                  {/* Features Preview */}
                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-400 flex-shrink-0" />
                        <span className="line-clamp-1">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center group"
                  >
                    Explore Service
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </motion.button>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Emerging Technology Services */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="mb-20"
        >
          <motion.h3 
            variants={itemVariants}
            className="text-3xl font-bold text-white mb-8 text-center flex items-center justify-center"
          >
            <Atom className="w-8 h-8 mr-3 text-blue-400" />
            Emerging Technology
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {emergingTech2026Services.map((service, index) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                whileHover="hover"
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 p-6 h-full">
                  {/* Service Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{service.icon}</div>
                    {service.popular && (
                      <div className="flex items-center bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                        <Star className="w-3 h-3 mr-1" />
                        Popular
                      </div>
                    )}
                  </div>

                  {/* Service Details */}
                  <h4 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {service.name}
                  </h4>
                  
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Price */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-white">
                      {service.price}
                      <span className="text-sm text-gray-400 font-normal">{service.period}</span>
                    </div>
                    <div className="text-sm text-gray-400">
                      {service.trialDays} days free
                    </div>
                  </div>

                  {/* Features Preview */}
                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 mr-2 text-blue-400 flex-shrink-0" />
                        <span className="line-clamp-1">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center group"
                  >
                    Explore Service
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </motion.button>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enterprise IT Services */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="mb-20"
        >
          <motion.h3 
            variants={itemVariants}
            className="text-3xl font-bold text-white mb-8 text-center flex items-center justify-center"
          >
            <Shield className="w-8 h-8 mr-3 text-green-400" />
            Enterprise IT Solutions
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {enterpriseIT2026Services.map((service, index) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                whileHover="hover"
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 p-6 h-full">
                  {/* Service Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{service.icon}</div>
                    {service.popular && (
                      <div className="flex items-center bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                        <Star className="w-3 h-3 mr-1" />
                        Popular
                      </div>
                    )}
                  </div>

                  {/* Service Details */}
                  <h4 className="text-xl font-bold text-white mb-2 group-hover:text-green-300 transition-colors">
                    {service.name}
                  </h4>
                  
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Price */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-white">
                      {service.price}
                      <span className="text-sm text-gray-400 font-normal">{service.period}</span>
                    </div>
                    <div className="text-sm text-gray-400">
                      Custom pricing
                    </div>
                  </div>

                  {/* Features Preview */}
                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-400 flex-shrink-0" />
                        <span className="line-clamp-1">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center group"
                  >
                    Contact Sales
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </motion.button>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-emerald-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Experience the Future?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of organizations already leveraging our revolutionary 2026 services. 
              Get started today and transform your business with cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center"
              >
                <Zap className="w-5 h-5 mr-2" />
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-purple-500/50 text-purple-300 hover:bg-purple-500/20 font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center"
              >
                <Globe className="w-5 h-5 mr-2" />
                Schedule Demo
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Enhanced2026ServicesShowcase;