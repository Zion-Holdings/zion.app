import React from 'react';
import SEO from '../components/SEO';
import Layout from '../components/layout/Layout';
import { real2036InnovativeServices } from '../data/real-2036-innovative-services';
import { real2036ITServices } from '../data/real-2036-it-services';
import { real2036AIServices } from '../data/real-2036-ai-services';
import { motion } from 'framer-motion';

const ServicesMarketing2036: React.FC = () => {
  const allServices = [
    ...real2036InnovativeServices,
    ...real2036ITServices,
    ...real2036AIServices
  ];

  const categories = [...new Set(allServices.map(service => service.category))];

  return (
    <Layout>
      <SEO 
        title="2036 Services Marketing - Zion Tech Group"
        description="Comprehensive marketing information for our 2036 innovative services. Discover features, benefits, pricing, and market opportunities."
        keywords="AI services marketing, quantum computing solutions, IT services pricing, micro SAAS marketing, 2036 technology solutions"
      />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-cyan-900/20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.1),transparent_50%)]" />
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400/30 rounded-full"
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                delay: i * 0.5,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="text-center max-w-6xl mx-auto relative z-10">
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            2036 Services Marketing
          </motion.h1>
          <motion.p 
            className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Comprehensive marketing information for our cutting-edge 2036 services. 
            Discover features, benefits, pricing, and market opportunities that will transform your business.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <a href="#services" className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-cyan-500/25">
              Explore Services
            </a>
            <a href="/contact" className="px-10 py-5 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105">
              Get Started
            </a>
          </motion.div>
        </div>
      </section>

      {/* Market Overview */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Market Opportunity & Competitive Landscape
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <motion.div 
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/30"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-purple-400 mb-4">$450B+</div>
              <div className="text-xl text-gray-300">Total Addressable Market</div>
              <div className="text-gray-400 mt-2">AI, Quantum, and IT Services</div>
            </motion.div>
            
            <motion.div 
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-cyan-900/20 to-green-900/20 border border-cyan-500/30"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-cyan-400 mb-4">25%+</div>
              <div className="text-xl text-gray-300">Annual Growth Rate</div>
              <div className="text-gray-400 mt-2">Emerging Technology Sector</div>
            </motion.div>
            
            <motion.div 
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/30"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-green-400 mb-4">10,000+</div>
              <div className="text-xl text-gray-300">Enterprise Customers</div>
              <div className="text-gray-400 mt-2">Global Market Reach</div>
            </motion.div>

            <motion.div 
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-orange-900/20 to-red-900/20 border border-orange-500/30"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-orange-400 mb-4">$2.5M+</div>
              <div className="text-xl text-gray-300">Average Customer Value</div>
              <div className="text-gray-400 mt-2">Enterprise Solutions</div>
            </motion.div>
          </div>

          {/* Competitive Analysis */}
          <motion.div 
            className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Competitive Advantages</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-3">🚀</div>
                <h4 className="text-lg font-semibold text-cyan-400 mb-2">First-Mover Advantage</h4>
                <p className="text-gray-400 text-sm">Pioneering 2036 technology solutions before competitors</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🧠</div>
                <h4 className="text-lg font-semibold text-purple-400 mb-2">AI Innovation</h4>
                <p className="text-gray-400 text-sm">Advanced AI consciousness and emotional intelligence</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">⚛️</div>
                <h4 className="text-lg font-semibold text-green-400 mb-2">Quantum Computing</h4>
                <p className="text-gray-400 text-sm">Quantum-AI hybrid solutions for complex problems</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Marketing */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Service Portfolio & Marketing Details
          </motion.h2>
          
          {categories.map((category, categoryIndex) => (
            <motion.section 
              key={category} 
              className="mb-20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {category}
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {allServices
                  .filter(service => service.category === category)
                  .map((service, serviceIndex) => (
                    <motion.div
                      key={service.id}
                      className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: serviceIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {/* Service Header */}
                      <div className="mb-6">
                        <div className="flex items-center justify-between mb-4">
                          <span className="px-3 py-1 text-xs font-semibold text-cyan-400 bg-cyan-400/10 rounded-full border border-cyan-400/20">
                            {service.category}
                          </span>
                          <div className="flex items-center space-x-2">
                            <span className="text-yellow-400">★</span>
                            <span className="text-sm text-gray-300">{service.rating}</span>
                          </div>
                        </div>
                        
                        <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                          {service.name}
                        </h4>
                        
                        <p className="text-gray-400 text-sm mb-4">
                          {service.tagline}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="mb-6">
                        <h5 className="text-white font-semibold mb-3">Key Features:</h5>
                        <ul className="space-y-2">
                          {service.features.map((feature, index) => (
                            <li key={index} className="flex items-center text-sm text-gray-400">
                              <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Market Information */}
                      <div className="mb-6 p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
                        <div className="grid grid-cols-2 gap-4 text-center">
                          <div>
                            <div className="text-2xl font-bold text-cyan-400 mb-1">
                              {service.price}
                              <span className="text-sm text-gray-400">{service.period}</span>
                            </div>
                            <div className="text-sm text-gray-400">Pricing</div>
                          </div>
                          {service.marketSize && (
                            <div>
                              <div className="text-2xl font-bold text-green-400 mb-1">
                                {service.marketSize}
                              </div>
                              <div className="text-sm text-gray-400">Market Size</div>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Additional Information */}
                      {service.benefits && (
                        <div className="mb-6">
                          <h5 className="text-white font-semibold mb-3">Benefits:</h5>
                          <ul className="space-y-2">
                            {service.benefits.slice(0, 3).map((benefit, index) => (
                              <li key={index} className="flex items-center text-sm text-gray-400">
                                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Use Cases */}
                      {service.useCases && (
                        <div className="mb-6">
                          <h5 className="text-white font-semibold mb-3">Use Cases:</h5>
                          <div className="flex flex-wrap gap-2">
                            {service.useCases.slice(0, 4).map((useCase, index) => (
                              <span key={index} className="px-2 py-1 text-xs bg-blue-900/30 text-blue-300 rounded border border-blue-700/50">
                                {useCase}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* CTA */}
                      <div className="flex justify-between items-center">
                        <a
                          href={service.link}
                          className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                        >
                          Learn More
                        </a>
                        
                        <div className="text-right">
                          <div className="text-sm text-gray-400">Launch Date</div>
                          <div className="text-sm text-cyan-400">{service.launchDate}</div>
                        </div>
                      </div>

                      {/* Hover Effect */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </motion.div>
                  ))}
              </div>
            </motion.section>
          ))}
        </div>
      </section>

      {/* Pricing Strategy */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Pricing Strategy & Market Positioning
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div 
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/30"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-white mb-4">Premium Pricing</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Positioned as premium solutions for enterprise customers, with pricing reflecting the advanced technology and value delivered.
              </p>
            </motion.div>
            
            <motion.div 
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-cyan-900/20 to-green-900/20 border border-cyan-500/30"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-white mb-4">Value-Based Pricing</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Pricing based on the value delivered to customers, including cost savings, efficiency gains, and competitive advantages.
              </p>
            </motion.div>
            
            <motion.div 
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/30"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-white mb-4">Market Penetration</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Strategic pricing to penetrate new markets and establish market leadership in emerging technology sectors.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to Market Our 2036 Services?
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Partner with us to bring cutting-edge 2036 technology solutions to your market. 
            Join our network of enterprise partners and resellers.
          </motion.p>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400 mb-2">📱</div>
              <div className="text-white font-semibold">Mobile</div>
              <div className="text-gray-400">+1 302 464 0950</div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400 mb-2">✉️</div>
              <div className="text-white font-semibold">Email</div>
              <div className="text-gray-400">kleber@ziontechgroup.com</div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400 mb-2">📍</div>
              <div className="text-white font-semibold">Address</div>
              <div className="text-gray-400">364 E Main St STE 1008<br />Middletown DE 19709</div>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <a
              href="/contact"
              className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-cyan-500/25"
            >
              Partner With Us
            </a>
            <a
              href="/quote"
              className="px-10 py-5 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              Get Marketing Kit
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesMarketing2036;