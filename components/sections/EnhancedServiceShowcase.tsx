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
    ...enhancedRealMicroSaasServices
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: '🚀', count: allServices.length },
    { id: 'ai', name: 'AI & Machine Learning', icon: '🧠', count: innovativeAIServices.length },
    { id: 'quantum', name: 'Quantum Computing', icon: '⚛️', count: quantumSpaceServices.filter(s => s.name.toLowerCase().includes('quantum')).length },
    { id: 'space', name: 'Space Technology', icon: '🚀', count: quantumSpaceServices.filter(s => s.name.toLowerCase().includes('space')).length },
    { id: 'enterprise', name: 'Enterprise IT', icon: '🏢', count: enterpriseITServices.length },
    { id: 'saas', name: 'Micro SaaS', icon: '💻', count: enhancedRealMicroSaasServices.length }
  ];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || 
      (selectedCategory === 'ai' && innovativeAIServices.includes(service)) ||
      (selectedCategory === 'quantum' && service.name.toLowerCase().includes('quantum')) ||
      (selectedCategory === 'space' && service.name.toLowerCase().includes('space')) ||
      (selectedCategory === 'enterprise' && enterpriseITServices.includes(service)) ||
      (selectedCategory === 'saas' && enhancedRealMicroSaasServices.includes(service));
    
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
            {/* Search */}
            <div className="mb-8">
              <div className="relative max-w-md mx-auto">
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-4 bg-gray-900/50 border border-gray-700 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <SearchIcon className="w-5 h-5 text-gray-400" />
                </div>
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700'
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                  <span className="ml-2 px-2 py-1 bg-gray-700/50 rounded-full text-xs">
                    {category.count}
                  </span>
                </motion.button>
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
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                layout
                className="group relative"
              >
                <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 h-full transition-all duration-500 hover:scale-105 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/25">
                  {/* Service Icon */}
                  <div className="text-6xl mb-6">{service.icon}</div>

                  {/* Popular Badge */}
                  {service.popular && (
                    <div className="absolute top-6 right-6">
                      <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold rounded-full">
                        POPULAR
                      </span>
                    </div>
                  )}

                  {/* Service Info */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                      {service.name}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">
                      {service.price}
                      <span className="text-lg text-gray-400">{service.period}</span>
                    </div>
                    <div className="text-sm text-gray-400">
                      {service.trialDays} day free trial
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    {service.features.length > 3 && (
                      <div className="text-sm text-cyan-400 mt-2">
                        +{service.features.length - 3} more features
                      </div>
                    )}
                  </div>

                  {/* Market Data */}
                  <div className="mb-6 p-4 bg-gray-800/50 rounded-2xl">
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-gray-400">Market Size:</span>
                      <span className="text-cyan-400 font-semibold">{service.marketSize}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-gray-400">Growth Rate:</span>
                      <span className="text-green-400 font-semibold">{service.growthRate}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">ROI:</span>
                      <span className="text-yellow-400 font-semibold">{service.roi.split(' ').slice(0, 3).join(' ')}</span>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="mb-6 p-4 bg-gray-800/50 rounded-2xl">
                    <div className="text-sm text-gray-400 mb-2">Contact Information:</div>
                    <div className="space-y-1 text-xs text-gray-300">
                      <div>📱 {service.contactInfo.mobile}</div>
                      <div>✉️ {service.contactInfo.email}</div>
                      <div>📍 {service.contactInfo.address}</div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <motion.a
                      href={service.link}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-2xl font-semibold text-center hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 inline" />
                    </motion.a>
                    <motion.a
                      href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.name}`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 border border-cyan-500 text-cyan-400 rounded-2xl font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
                    >
                      Contact
                    </motion.a>
                  </div>

                  {/* Service Stats */}
                  <div className="mt-6 pt-6 border-t border-gray-700/50">
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {service.customers.toLocaleString()}+ customers
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 mr-1 text-yellow-400" />
                        {service.rating}/5 ({service.reviews})
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of companies already leveraging our cutting-edge AI and technology services to achieve unprecedented growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="mailto:kleber@ziontechgroup.com?subject=Business Transformation Consultation"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
              >
                Start Your Transformation
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </motion.a>
              <motion.a
                href="tel:+13024640950"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-2xl font-semibold text-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Call +1 302 464 0950
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Search Icon Component
const SearchIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

export default EnhancedServiceShowcase;