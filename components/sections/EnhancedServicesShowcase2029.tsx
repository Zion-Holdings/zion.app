import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Star, Zap, Crown, Gem, Brain, 
  Atom, Rocket, Globe, Cpu, Database, Shield
} from 'lucide-react';
import { cuttingEdge2029Services } from '../../data/2029-cutting-edge-innovations';
import { emergingTech2029Services } from '../../data/2029-emerging-tech-services';
import { microSaas2029Services } from '../../data/2029-micro-saas-innovations';

export default function EnhancedServicesShowcase2029() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const categories = [
    {
      title: '🚀 2029 Cutting-Edge Innovations',
      icon: Crown,
      color: 'from-violet-600 via-purple-600 to-indigo-700',
      services: cuttingEdge2029Services.slice(0, 4),
      description: 'Beyond the future of technology'
    },
    {
      title: '⚡ Emerging Technology Solutions',
      icon: Zap,
      color: 'from-blue-600 via-cyan-600 to-teal-700',
      services: emergingTech2029Services.slice(0, 4),
      description: 'Next-generation tech infrastructure'
    },
    {
      title: '💎 Micro SAAS Innovations',
      icon: Gem,
      color: 'from-emerald-600 via-green-600 to-teal-700',
      services: microSaas2029Services.slice(0, 4),
      description: 'Practical business solutions'
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(100,200,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(100,200,255,0.05)_1px,transparent_1px)] bg-[size:100px_100px]" />
      
      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-purple-500/30 text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <Crown className="w-4 h-4 text-cyan-400" />
            <span>2029 Service Portfolio</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">
              Cutting-Edge
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Technology Services
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive portfolio of innovative services designed to transform your business 
            and propel you into the future of technology.
          </p>
        </motion.div>

        {/* Service Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-20"
        >
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="relative"
            >
              {/* Category Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">{category.title}</h3>
                    <p className="text-gray-400 text-lg">{category.description}</p>
                  </div>
                </div>
                
                <Link
                  href={`/services#${category.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  className="hidden md:flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 group"
                >
                  <span className="font-medium">View All</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.services.map((service, serviceIndex) => (
                  <motion.div
                    key={service.id}
                    variants={itemVariants}
                    whileHover={{ y: -10, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden"
                  >
                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Service Icon */}
                    <div className="relative z-10 mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-3`}>
                        <span className="text-2xl">{service.icon}</span>
                      </div>
                    </div>

                    {/* Service Content */}
                    <div className="relative z-10">
                      <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                        {service.name}
                      </h4>
                      
                      <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-2 mb-4">
                        {service.features.slice(0, 3).map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                            <span className="text-xs text-gray-500">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Price and CTA */}
                      <div className="flex items-center justify-between">
                        <div className="text-right">
                          <div className="text-2xl font-bold text-white">{service.price}</div>
                          <div className="text-xs text-gray-500">{service.period}</div>
                        </div>
                        
                        <Link
                          href={service.link}
                          className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl text-white hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform group-hover:scale-110"
                        >
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>

                      {/* Popular Badge */}
                      {service.popular && (
                        <div className="absolute top-4 right-4">
                          <div className="inline-flex items-center space-x-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                            <Star className="w-3 h-3" />
                            <span>Popular</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                  </motion.div>
                ))}
              </div>

              {/* View All Button for Mobile */}
              <div className="md:hidden text-center mt-8">
                <Link
                  href={`/services#${category.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 group"
                >
                  <span className="font-medium">View All Services</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-purple-500/30 rounded-3xl p-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of companies already leveraging our cutting-edge technology solutions 
              to stay ahead of the competition.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                href="/contact"
                className="group inline-flex items-center space-x-3 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <Link
                href="/pricing"
                className="group inline-flex items-center space-x-3 border-2 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:border-cyan-400"
              >
                <span>View Pricing</span>
                <Zap className="w-5 h-5 group-hover:text-cyan-300 transition-colors duration-300" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}