import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap, Shield, Globe, Rocket } from 'lucide-react';
import { ENHANCED_MICRO_SAAS_SERVICES } from '../data/enhancedMicroSaasServices';
import { EMERGING_TECH_SERVICES } from '../data/emergingTechServices';

export default function Pricing() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPricingModel, setSelectedPricingModel] = useState('all');

  const allServices = [...ENHANCED_MICRO_SAAS_SERVICES, ...EMERGING_TECH_SERVICES];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesPricing = selectedPricingModel === 'all' || service.pricingModel === selectedPricingModel;
    return matchesCategory && matchesPricing;
  });

  const categories = ['all', ...Array.from(new Set(allServices.map(service => service.category)))];
  const pricingModels = ['all', ...Array.from(new Set(allServices.map(service => service.pricingModel)))];

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'AI & Machine Learning': <Zap className="w-5 h-5" />,
      'AI & Business Intelligence': <Star className="w-5 h-5" />,
      'AI & Customer Service': <Globe className="w-5 h-5" />,
      'AI & Sales': <Star className="w-5 h-5" />,
      'AI & Content Creation': <Zap className="w-5 h-5" />,
      'AI & Finance': <Star className="w-5 h-5" />,
      'AI & Healthcare': <Shield className="w-5 h-5" />,
      'AI & Supply Chain': <Globe className="w-5 h-5" />,
      'AI & Cybersecurity': <Shield className="w-5 h-5" />,
      'AI & Marketing': <Star className="w-5 h-5" />,
      'AI & Human Resources': <Globe className="w-5 h-5" />,
      'Quantum Computing': <Rocket className="w-5 h-5" />,
      'Blockchain & DeFi': <Globe className="w-5 h-5" />,
      'IoT & Edge Computing': <Zap className="w-5 h-5" />,
      'Extended Reality': <Rocket className="w-5 h-5" />,
      'Edge Computing': <Zap className="w-5 h-5" />,
      '5G & Networks': <Globe className="w-5 h-5" />,
      'Green Technology': <Shield className="w-5 h-5" />,
      'Digital Twins': <Rocket className="w-5 h-5" />
    };
    return iconMap[category] || <Star className="w-5 h-5" />;
  };

  const getSupportLevelColor = (level: string) => {
    const colorMap: { [key: string]: string } = {
      'standard': 'bg-blue-500',
      'premium': 'bg-purple-500',
      'enterprise': 'bg-cyan-500'
    };
    return colorMap[level] || 'bg-gray-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-blue">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Transparent
              </span>
              <br />
              <span className="text-white">Pricing</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Choose the perfect plan for your business. All our services come with transparent pricing, 
              no hidden fees, and flexible options to scale with your growth.
            </p>

            {/* Pricing Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
              {[
                { number: "28+", label: "Services Available", icon: "🚀" },
                { number: "3", label: "Support Tiers", icon: "⭐" },
                { number: "100%", label: "Transparent Pricing", icon: "💎" }
              ].map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                >
                  <div className="text-4xl mb-2">{stat.icon}</div>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="px-4 mb-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-cyan-500/20"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-white/20 border border-cyan-500/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Pricing Model Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Pricing Model</label>
                <select
                  value={selectedPricingModel}
                  onChange={(e) => setSelectedPricingModel(e.target.value)}
                  className="w-full px-4 py-3 bg-white/20 border border-cyan-500/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
                >
                  {pricingModels.map(model => (
                    <option key={model} value={model}>
                      {model === 'all' ? 'All Models' : model.charAt(0).toUpperCase() + model.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Results Count */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mb-12"
          >
            <p className="text-gray-300">
              Showing <span className="text-cyan-400 font-semibold">{filteredServices.length}</span> of{' '}
              <span className="text-cyan-400 font-semibold">{allServices.length}</span> services
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="group relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2"
              >
                {/* Category Badge */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="text-cyan-400">
                    {getCategoryIcon(service.category)}
                  </div>
                  <span className="text-sm text-cyan-400 font-medium">{service.category}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {service.description}
                </p>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl font-bold text-cyan-400">
                    {service.currency}{service.price}
                    <span className="text-sm text-gray-400 font-normal">/{service.pricingModel}</span>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium text-white ${getSupportLevelColor(service.supportLevel)}`}>
                    {service.supportLevel}
                  </div>
                </div>

                {/* Market Price */}
                <p className="text-sm text-gray-400 mb-4">
                  Market: <span className="text-cyan-400">{service.marketPrice}</span>
                </p>

                {/* Features */}
                <div className="mb-4">
                  <p className="text-sm text-gray-400 mb-2">Key Features:</p>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="text-sm text-gray-300 flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="mb-4">
                  <p className="text-sm text-gray-400 mb-2">Benefits:</p>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <li key={index} className="text-sm text-gray-300 flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-400" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Delivery Time */}
                <div className="text-sm text-gray-400 mb-4">
                  Delivery: <span className="text-cyan-400">{service.estimatedDelivery}</span>
                </div>

                {/* Contact Button */}
                <div className="flex gap-3">
                  <button className="flex-1 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105">
                    Get Started
                  </button>
                  <button className="px-4 py-2 border border-cyan-500/50 text-cyan-400 rounded-lg font-medium hover:bg-cyan-500/20 transition-colors">
                    Learn More
                  </button>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </motion.div>
            ))}
          </motion.div>

          {/* No Results */}
          {filteredServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-gray-400">Try adjusting your filters.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-lg rounded-2xl p-8 border border-cyan-500/30">
              <h3 className="text-3xl font-bold text-white mb-4">
                Need a Custom Solution?
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Contact our team to discuss your specific requirements and get a personalized quote.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold text-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105">
                  Get Custom Quote
                </button>
                <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-xl font-semibold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}