import React from 'react';
import SEO from '../components/SEO';
import Layout from '../components/layout/Layout';
import { real2037Q1Additions } from '../data/real-2037-q1-additions';
import { real2037Q2Additions } from '../data/real-2037-q2-additions';
import { motion } from 'framer-motion';

const Revolutionary2037ServicesShowcase: React.FC = () => {
  const allServices = [...real2037Q1Additions, ...real2037Q2Additions];

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

  return (
    <Layout>
      <SEO 
        title="Revolutionary 2037 Services Showcase | Zion Tech Group"
        description="Discover our cutting-edge 2037 services portfolio featuring AI, Quantum Computing, Space Technology, and Blockchain solutions. Transform your business with next-generation technology."
        keywords="AI services, quantum computing, space technology, blockchain, micro SAAS, 2037, Zion Tech Group"
        canonical="https://ziontechgroup.com/revolutionary-2037-services-showcase"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 animate-pulse"></div>
          <div className="relative z-10 max-w-6xl mx-auto text-center">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Revolutionary 2037
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Experience the future of technology with our cutting-edge 2037 services portfolio. 
              From AI-powered solutions to quantum computing breakthroughs, we're pioneering 
              the next generation of business transformation.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                Explore Services
              </button>
              <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105">
                Get Pricing
              </button>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Our Revolutionary 2037 Services
            </motion.h2>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {allServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  className="relative group"
                  variants={itemVariants}
                >
                  <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105">
                    {/* Popular Badge */}
                    {service.popular && (
                      <div className="absolute -top-3 -right-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                        POPULAR
                      </div>
                    )}
                    
                    {/* Service Icon */}
                    <div className="text-4xl mb-4">{service.icon}</div>
                    
                    {/* Service Name */}
                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {service.name}
                    </h3>
                    
                    {/* Tagline */}
                    <p className="text-gray-400 text-sm mb-3">
                      {service.tagline}
                    </p>
                    
                    {/* Description */}
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                      {service.description}
                    </p>
                    
                    {/* Features */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                      <ul className="text-xs text-gray-400 space-y-1">
                        {service.features.slice(0, 4).map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <span className="text-cyan-400 mr-2">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Pricing */}
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-2xl font-bold text-white">{service.price}</span>
                        <span className="text-gray-400 text-sm">/{service.period}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-400">Market Price:</div>
                        <div className="text-sm text-gray-300 line-through">{service.marketPrice}</div>
                      </div>
                    </div>
                    
                    {/* CTA Button */}
                    <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-3 px-4 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                      Get Started
                    </button>
                    
                    {/* Contact Info */}
                    <div className="mt-4 pt-4 border-t border-gray-700/50">
                      <div className="text-xs text-gray-400 space-y-1">
                        <div className="flex items-center">
                          <span className="text-cyan-400 mr-2">📱</span>
                          {service.contactInfo.mobile}
                        </div>
                        <div className="flex items-center">
                          <span className="text-cyan-400 mr-2">✉️</span>
                          {service.contactInfo.email}
                        </div>
                        <div className="flex items-center">
                          <span className="text-cyan-400 mr-2">📍</span>
                          {service.contactInfo.address}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Contact our team of experts to discuss how our revolutionary 2037 services 
              can drive innovation and growth in your organization.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <a 
                href="tel:+13024640950"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Call Now: +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105"
              >
                Email Us
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Revolutionary2037ServicesShowcase;