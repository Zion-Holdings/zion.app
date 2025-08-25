import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { INNOVATIVE_MICRO_SAAS_SERVICES } from '../../data/innovativeMicroSaasServices';
import { EMERGING_TECH_SERVICES } from '../../data/emergingTechServices';
import { SPECIALIZED_IT_INFRASTRUCTURE_SERVICES } from '../../data/specializedITInfrastructureServices';

export default function InnovativeNewServices() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const allServices = [
    ...INNOVATIVE_MICRO_SAAS_SERVICES,
    ...EMERGING_TECH_SERVICES,
    ...SPECIALIZED_IT_INFRASTRUCTURE_SERVICES
  ];

  const categories = ['all', ...Array.from(new Set(allServices.map(service => service.category)))];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

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
    <div className="min-h-screen bg-zion-blue-dark text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-quantum-gradient opacity-20 animate-pulse"></div>
      <div className="absolute inset-0 bg-quantum-mesh"></div>
      
      {/* Matrix Rain Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-zion-cyan text-xs animate-matrix-rain"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${20 + Math.random() * 10}s`
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-holographic-gradient bg-clip-text text-transparent animate-holographic-shift">
            Innovative New Services
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
            Discover our cutting-edge micro SAAS solutions, emerging technologies, and specialized IT infrastructure services designed to transform your business and drive innovation
          </p>
          
          {/* Contact Information */}
          <div className="bg-zion-blue-light/20 backdrop-blur-sm rounded-lg p-6 mb-8 border border-zion-cyan/30">
            <h3 className="text-2xl font-bold text-zion-cyan mb-4">Ready to Get Started?</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-zion-cyan text-2xl mb-2">📞</div>
                <p className="font-semibold">Call Us</p>
                <p className="text-zion-slate-light">+1 302 464 0950</p>
              </div>
              <div>
                <div className="text-zion-cyan text-2xl mb-2">✉️</div>
                <p className="font-semibold">Email Us</p>
                <p className="text-zion-slate-light">kleber@ziontechgroup.com</p>
              </div>
              <div>
                <div className="text-zion-cyan text-2xl mb-2">🌐</div>
                <p className="font-semibold">Visit Us</p>
                <p className="text-zion-slate-light">ziontechgroup.com</p>
              </div>
            </div>
          </div>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search innovative services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 bg-zion-blue-light/20 border border-zion-cyan/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 backdrop-blur-sm"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-zion-cyan">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-zion-cyan text-zion-blue-dark shadow-lg shadow-zion-cyan/30'
                    : 'bg-zion-blue-light/20 text-zion-slate-light hover:bg-zion-blue-light/30 border border-zion-cyan/30'
                }`}
              >
                {category === 'all' ? 'All Services' : category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredServices.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="bg-zion-blue-light/10 backdrop-blur-sm rounded-xl p-6 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-xl hover:shadow-zion-cyan/10 group"
            >
              {/* Service Header */}
              <div className="mb-4">
                <h3 className="text-xl font-bold text-zion-cyan mb-2 group-hover:text-zion-cyan-light transition-colors">
                  {service.title}
                </h3>
                <p className="text-zion-slate-light text-sm mb-3">
                  {service.category} • {service.subcategory}
                </p>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl font-bold text-white">
                    ${service.price.toLocaleString()}
                    <span className="text-sm text-zion-slate-light ml-1">/{service.pricingModel}</span>
                  </span>
                  <span className="text-sm text-zion-slate-light">
                    {service.estimatedDelivery}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-zion-slate-light mb-4 line-clamp-3">
                {service.description}
              </p>

              {/* Features */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-zion-cyan mb-2">Key Features</h4>
                <div className="space-y-1">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <div key={index} className="flex items-center text-xs text-zion-slate-light">
                      <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                  {service.features.length > 3 && (
                    <div className="text-xs text-zion-slate-light text-center">
                      +{service.features.length - 3} more features
                    </div>
                  )}
                </div>
              </div>

              {/* Benefits */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-zion-cyan mb-2">Benefits</h4>
                <div className="space-y-1">
                  {service.benefits.slice(0, 2).map((benefit, index) => (
                    <div key={index} className="flex items-center text-xs text-zion-slate-light">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>

              {/* Market Info */}
              <div className="mb-4 p-3 bg-zion-blue-light/10 rounded-lg">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-zion-slate-light">Market Price:</span>
                  <span className="text-zion-cyan font-semibold">{service.marketPrice}</span>
                </div>
                <div className="flex justify-between items-center text-xs mt-1">
                  <span className="text-zion-slate-light">ROI:</span>
                  <span className="text-green-400 font-semibold">{service.roi}</span>
                </div>
              </div>

              {/* Tags */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {service.tags.slice(0, 4).map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-zion-blue-light/20 text-zion-slate-light text-xs rounded-full border border-zion-cyan/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contact Button */}
              <div className="text-center">
                <a
                  href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                  className="inline-block w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-light text-zion-blue-dark font-semibold py-3 px-6 rounded-lg hover:from-zion-cyan-light hover:to-zion-cyan transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-zion-cyan/30"
                >
                  Get Started Today
                </a>
                <p className="text-xs text-zion-slate-light mt-2">
                  Contact us for custom pricing and implementation
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-zion-cyan/20 to-zion-cyan-light/20 backdrop-blur-sm rounded-2xl p-12 border border-zion-cyan/30">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Our innovative services are designed to give you a competitive edge in today's rapidly evolving technology landscape. 
              Let's discuss how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-zion-cyan text-zion-blue-dark font-bold py-4 px-8 rounded-lg hover:bg-zion-cyan-light transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-zion-cyan/30"
              >
                📞 Call Now: +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="bg-transparent border-2 border-zion-cyan text-zion-cyan font-bold py-4 px-8 rounded-lg hover:bg-zion-cyan hover:text-zion-blue-dark transition-all duration-300 transform hover:scale-105"
              >
                ✉️ Email Us
              </a>
            </div>
            <p className="text-zion-slate-light mt-6">
              Visit us at <a href="https://ziontechgroup.com" className="text-zion-cyan hover:underline">ziontechgroup.com</a> for more information
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}