import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { COMPREHENSIVE_SERVICES } from '../data/comprehensiveServices';
import { Link } from 'react-router-dom';

export default function InnovativeMicroSaasServices() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedService, setSelectedService] = useState<any>(null);

  const allServices = [...COMPREHENSIVE_SERVICES];
  const categories = ['all', ...Array.from(new Set(allServices.map(service => service.category)))];
  
  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (service.tags && service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())));
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

  const openServiceModal = (service: any) => {
    setSelectedService(service);
  };

  const closeServiceModal = () => {
    setSelectedService(null);
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
            Innovative Micro SAAS Solutions
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
            Discover our cutting-edge collection of 50+ innovative micro SAAS services designed to transform your business with AI, blockchain, cybersecurity, and advanced technology solutions
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-zion-blue-light/20 backdrop-blur-sm rounded-lg p-6 border border-zion-cyan/30">
              <div className="text-3xl font-bold text-zion-cyan mb-2">{allServices.length}+</div>
              <div className="text-zion-slate-light">Total Services</div>
            </div>
            <div className="bg-zion-blue-light/20 backdrop-blur-sm rounded-lg p-6 border border-zion-cyan/30">
              <div className="text-3xl font-bold text-zion-cyan mb-2">{categories.length - 1}</div>
              <div className="text-zion-slate-light">Categories</div>
            </div>
            <div className="bg-zion-blue-light/20 backdrop-blur-sm rounded-lg p-6 border border-zion-cyan/30">
              <div className="text-3xl font-bold text-zion-cyan mb-2">24/7</div>
              <div className="text-zion-slate-light">Support</div>
            </div>
            <div className="bg-zion-blue-light/20 backdrop-blur-sm rounded-lg p-6 border border-zion-cyan/30">
              <div className="text-3xl font-bold text-zion-cyan mb-2">100%</div>
              <div className="text-zion-slate-light">Satisfaction</div>
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
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-zion-cyan text-zion-blue-dark font-semibold shadow-lg shadow-zion-cyan/30'
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
              className="group relative"
            >
              <div className="bg-zion-blue-light/10 backdrop-blur-sm rounded-xl p-6 border border-zion-cyan/20 hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 h-full">
                {/* Service Header */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-zion-cyan bg-zion-cyan/10 px-3 py-1 rounded-full">
                      {service.subcategory}
                    </span>
                    <span className="text-2xl font-bold text-zion-cyan">
                      {service.currency}{service.price}
                      <span className="text-sm text-zion-slate-light">/mo</span>
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-zion-slate-light text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features Preview */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-zion-slate-light mb-2">Key Features:</h4>
                  <div className="space-y-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center text-xs text-zion-slate-light">
                        <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                    {service.features.length > 3 && (
                      <div className="text-xs text-zion-cyan mt-2">
                        +{service.features.length - 3} more features
                      </div>
                    )}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-zion-slate-light mb-2">Benefits:</h4>
                  <div className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <div key={index} className="flex items-center text-xs text-zion-slate-light">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {service.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs bg-zion-blue-light/20 text-zion-slate-light px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={() => openServiceModal(service)}
                    className="flex-1 bg-zion-cyan text-zion-blue-dark font-semibold py-2 px-4 rounded-lg hover:bg-zion-cyan/90 transition-colors"
                  >
                    Learn More
                  </button>
                  <a
                    href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                    className="flex-1 bg-transparent border border-zion-cyan text-zion-cyan font-semibold py-2 px-4 rounded-lg hover:bg-zion-cyan hover:text-zion-blue-dark transition-colors"
                  >
                    Get Quote
                  </a>
                </div>

                {/* Contact Info */}
                <div className="mt-4 pt-4 border-t border-zion-cyan/20">
                  <div className="text-xs text-zion-slate-light">
                    <div className="flex items-center mb-1">
                      <svg className="w-3 h-3 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      {service.contactInfo.email}
                    </div>
                    <div className="flex items-center">
                      <svg className="w-3 h-3 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      {service.contactInfo.phone}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-20"
        >
          <div className="bg-zion-blue-light/10 backdrop-blur-sm rounded-2xl p-12 border border-zion-cyan/30">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Our team of experts is ready to help you implement the perfect solution for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Business Transformation Consultation"
                className="bg-zion-cyan text-zion-blue-dark font-bold py-4 px-8 rounded-lg hover:bg-zion-cyan/90 transition-colors text-lg"
              >
                Schedule Consultation
              </a>
              <a
                href="tel:+13024640950"
                className="bg-transparent border-2 border-zion-cyan text-zion-cyan font-bold py-4 px-8 rounded-lg hover:bg-zion-cyan hover:text-zion-blue-dark transition-colors text-lg"
              >
                Call Now: +1 302 464 0950
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Service Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-zion-blue-dark rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              {/* Modal Header */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">{selectedService.title}</h2>
                  <p className="text-zion-slate-light text-lg">{selectedService.description}</p>
                </div>
                <button
                  onClick={closeServiceModal}
                  className="text-zion-slate-light hover:text-white transition-colors"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Service Details */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column */}
                <div>
                  <div className="bg-zion-blue-light/10 rounded-xl p-6 mb-6">
                    <h3 className="text-xl font-bold text-white mb-4">Pricing & Delivery</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-zion-slate-light">Price:</span>
                        <span className="text-2xl font-bold text-zion-cyan">
                          {selectedService.currency}{selectedService.price}/{selectedService.pricingModel}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zion-slate-light">Market Price:</span>
                        <span className="text-zion-cyan">{selectedService.marketPrice}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zion-slate-light">Delivery:</span>
                        <span className="text-zion-cyan">{selectedService.estimatedDelivery}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zion-slate-light">Support:</span>
                        <span className="text-zion-cyan capitalize">{selectedService.supportLevel}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-zion-blue-light/10 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-white mb-4">Target Audience</h3>
                    <div className="space-y-2">
                      {selectedService.targetAudience.map((audience, index) => (
                        <div key={index} className="flex items-center text-zion-slate-light">
                          <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3"></div>
                          {audience}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div>
                  <div className="bg-zion-blue-light/10 rounded-xl p-6 mb-6">
                    <h3 className="text-xl font-bold text-white mb-4">Features</h3>
                    <div className="space-y-2">
                      {selectedService.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-zion-slate-light">
                          <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-zion-blue-light/10 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-white mb-4">Benefits</h3>
                    <div className="space-y-2">
                      {selectedService.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center text-zion-slate-light">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Use Cases */}
              <div className="mt-8">
                <h3 className="text-xl font-bold text-white mb-4">Use Cases</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {selectedService.useCases.map((useCase, index) => (
                    <div key={index} className="bg-zion-blue-light/10 rounded-lg p-4 text-center">
                      <span className="text-zion-slate-light">{useCase}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact & CTA */}
              <div className="mt-8 pt-8 border-t border-zion-cyan/30">
                <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                  <div className="text-center lg:text-left">
                    <h3 className="text-xl font-bold text-white mb-2">Ready to Get Started?</h3>
                    <p className="text-zion-slate-light">
                      Contact us today to discuss your requirements and get a personalized quote.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={`mailto:${selectedService.contactInfo.email}?subject=Inquiry about ${selectedService.title}`}
                      className="bg-zion-cyan text-zion-blue-dark font-bold py-3 px-6 rounded-lg hover:bg-zion-cyan/90 transition-colors"
                    >
                      Get Quote
                    </a>
                    <a
                      href="tel:+13024640950"
                      className="bg-transparent border border-zion-cyan text-zion-cyan font-bold py-3 px-6 rounded-lg hover:bg-zion-cyan hover:text-zion-blue-dark transition-colors"
                    >
                      Call Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}