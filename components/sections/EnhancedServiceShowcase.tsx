import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, ExternalLink, Star, Users, TrendingUp, 
  Shield, Zap, Brain, Rocket, Dna, Globe, Cpu,
  CheckCircle, Clock, DollarSign, Target
} from 'lucide-react';
import { innovativeAIServices } from '../../data/innovative-ai-services';
import { quantumSpaceServices } from '../../data/quantum-space-services';
import { enterpriseITServices } from '../../data/enterprise-it-services';
import { enhancedRealMicroSaasServices } from '../../data/enhanced-real-micro-saas-services';
import { nextGenerationAIServices } from '../../data/next-generation-ai-services';
import { emergingTechnologyServices } from '../../data/emerging-technology-services';
import { comprehensiveITSolutions } from '../../data/comprehensive-it-solutions';
import { marketValidatedServices } from '../../data/market-validated-services';
import { newRealInnovations } from '../../data/new-real-innovations';

interface ServiceShowcaseProps {
  className?: string;
  title?: string;
  subtitle?: string;
  showFilters?: boolean;
}

const EnhancedServiceShowcase: React.FC<ServiceShowcaseProps> = ({
  className = '',
  title = 'Revolutionary AI & Technology Services',
  subtitle = 'Discover the future of business with our cutting-edge solutions',
  showFilters = true
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const allServices = [
    ...innovativeAIServices,
    ...quantumSpaceServices,
    ...enterpriseITServices,
    ...enhancedRealMicroSaasServices,
    ...nextGenerationAIServices,
    ...emergingTechnologyServices,
    ...comprehensiveITSolutions,
    ...marketValidatedServices,
    ...newRealInnovations
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: '🚀', count: allServices.length },
    { id: 'ai', name: 'AI & Machine Learning', icon: '🧠', count: innovativeAIServices.length + nextGenerationAIServices.length },
    { id: 'quantum', name: 'Quantum Computing', icon: '⚛️', count: quantumSpaceServices.filter(s => s.name.toLowerCase().includes('quantum')).length },
    { id: 'space', name: 'Space Technology', icon: '🚀', count: quantumSpaceServices.filter(s => s.name.toLowerCase().includes('space')).length },
    { id: 'enterprise', name: 'Enterprise IT', icon: '🏢', count: enterpriseITServices.length + comprehensiveITSolutions.length },
    { id: 'saas', name: 'Micro SaaS', icon: '💻', count: enhancedRealMicroSaasServices.length },
    { id: 'emerging', name: 'Emerging Tech', icon: '🌟', count: emergingTechnologyServices.length }
  ];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || 
      (selectedCategory === 'ai' && (innovativeAIServices.includes(service) || nextGenerationAIServices.includes(service))) ||
      (selectedCategory === 'quantum' && service.name.toLowerCase().includes('quantum')) ||
      (selectedCategory === 'space' && service.name.toLowerCase().includes('space')) ||
      (selectedCategory === 'enterprise' && (enterpriseITServices.includes(service) || comprehensiveITSolutions.includes(service))) ||
      (selectedCategory === 'saas' && enhancedRealMicroSaasServices.includes(service)) ||
      (selectedCategory === 'emerging' && emergingTechnologyServices.includes(service));
    
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className={`py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
            {title}
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </motion.div>

        {/* Filters */}
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-4 bg-gray-800/60 border border-gray-700 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/40 transition-colors"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-2xl border transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'border-cyan-500/40 bg-cyan-500/20 text-cyan-300'
                      : 'border-gray-700 bg-gray-800/40 text-gray-300 hover:border-gray-600 hover:bg-gray-700/40'
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                  <span className="ml-2 px-2 py-1 bg-gray-700/60 rounded-full text-xs">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredServices.slice(0, 12).map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group relative bg-gray-800/60 border border-gray-700 rounded-2xl p-6 hover:border-cyan-500/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                {/* Service Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="text-3xl">{service.icon}</div>
                  {service.popular && (
                    <div className="flex items-center space-x-1 text-yellow-400 text-sm">
                      <Star className="w-4 h-4 fill-current" />
                      <span>Popular</span>
                    </div>
                  )}
                </div>

                {/* Service Name & Tagline */}
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                  {service.tagline}
                </p>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-bold text-cyan-400">
                    {service.price}
                    <span className="text-gray-400 text-lg">{service.period}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <Users className="w-4 h-4" />
                    <span>{service.customers?.toLocaleString() || 'N/A'}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <div className="text-sm text-gray-400 mb-2">Key Features:</div>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span className="line-clamp-1">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Market Info */}
                <div className="mb-6 p-3 bg-gray-700/40 rounded-lg">
                  <div className="text-xs text-gray-400 mb-1">Market Position</div>
                  <div className="text-sm text-gray-300 line-clamp-2">
                    {service.marketPosition}
                  </div>
                </div>

                {/* ROI & Setup */}
                <div className="flex items-center justify-between mb-6 text-sm">
                  <div className="flex items-center space-x-1 text-green-400">
                    <TrendingUp className="w-4 h-4" />
                    <span>{service.roi.split(' ')[0]} ROI</span>
                  </div>
                  <div className="flex items-center space-x-1 text-blue-400">
                    <Clock className="w-4 h-4" />
                    <span>{service.setupTime}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-xl text-center text-sm font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
                  >
                    Learn More
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                  <a
                    href="/contact"
                    className="flex-1 bg-gray-700/60 text-white px-4 py-2 rounded-xl text-center text-sm font-medium hover:bg-gray-600/60 transition-all duration-300 border border-gray-600 hover:border-gray-500"
                  >
                    Contact Us
                  </a>
                </div>

                {/* Contact Info */}
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <div className="text-xs text-gray-400 mb-2">Contact Information:</div>
                  <div className="text-xs text-gray-300 space-y-1">
                    <div>📱 {service.contactInfo.mobile}</div>
                    <div>✉️ {service.contactInfo.email}</div>
                    <div>🌐 {service.contactInfo.website}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Services Button */}
        {filteredServices.length > 12 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <a
              href="/services"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-2xl font-medium hover:from-purple-600 hover:to-pink-700 transition-all duration-300 text-lg"
            >
              View All {filteredServices.length} Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default EnhancedServiceShowcase;