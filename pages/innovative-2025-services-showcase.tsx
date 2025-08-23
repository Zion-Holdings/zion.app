import React, { useState } from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Search, Grid, List,
  Brain, ArrowRight, Check, Heart, Star, Zap,
  Globe, RocketIcon, Cpu, Cloud, Building
} from 'lucide-react';

// Import our new innovative service data
import { innovativeAIServices2025 } from '../data/innovative-2025-ai-services';
import { innovativeITInfrastructure2025 } from '../data/innovative-2025-it-infrastructure';
import { innovativeMicroSaas2025 } from '../data/innovative-2025-micro-saas';
import { innovativeSpaceTech2025 } from '../data/innovative-2025-space-tech';

const Innovative2025ServicesShowcase: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Combine all innovative services
  const allInnovativeServices = [
    ...innovativeAIServices2025,
    ...innovativeITInfrastructure2025,
    ...innovativeMicroSaas2025,
    ...innovativeSpaceTech2025
  ];

  // Filter services based on search and category
  const filteredServices = allInnovativeServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category.toLowerCase().includes(selectedCategory.toLowerCase());
    return matchesSearch && matchesCategory;
  });

  const categories = [
    { id: 'all', name: 'All Services', icon: <Grid className="w-5 h-5" />, count: allInnovativeServices.length },
    { id: 'ai', name: 'AI Services', icon: <Brain className="w-5 h-5" />, count: innovativeAIServices2025.length },
    { id: 'it', name: 'IT Infrastructure', icon: <Cpu className="w-5 h-5" />, count: innovativeITInfrastructure2025.length },
    { id: 'saas', name: 'Micro SAAS', icon: <Cloud className="w-5 h-5" />, count: innovativeMicroSaas2025.length },
    { id: 'space', name: 'Space Technology', icon: <RocketIcon className="w-5 h-5" />, count: innovativeSpaceTech2025.length },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <SEO 
        title="Innovative 2025 Services Showcase | Zion Tech Group"
        description="Discover our cutting-edge 2025 services including AI platforms, quantum computing, space technology, and innovative micro SAAS solutions. Transform your business with next-generation technology."
        keywords={["AI services 2025", "quantum computing", "space technology", "micro SAAS", "IT infrastructure", "innovative solutions", "Zion Tech Group"]}
      />
      
      {/* Header */}
      <header className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full text-cyan-400 text-sm font-medium mb-6">
              <Star className="w-4 h-4" />
              <span>Innovation Leader 2025</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Innovative 2025 Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Pioneering the future with cutting-edge AI, quantum computing, space technology, and innovative micro SAAS solutions that drive business transformation
            </p>
            
            {/* Contact Information */}
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400/20 max-w-2xl mx-auto">
              <h3 className="text-lg font-semibold text-cyan-400 mb-4">Contact Zion Tech Group</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Globe className="w-4 h-4 text-blue-400" />
                  <span>Website: <a href="https://ziontechgroup.com" className="text-cyan-400 hover:underline">ziontechgroup.com</a></span>
                </div>
                <div className="flex items-center space-x-2">
                  <Heart className="w-4 h-4 text-red-400" />
                  <span>Email: <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:underline">kleber@ziontechgroup.com</a></span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="w-4 h-4 text-yellow-400" />
                  <span>Phone: <a href="tel:+13024640950" className="text-cyan-400 hover:underline">+1 302 464 0950</a></span>
                </div>
                <div className="flex items-center space-x-2">
                  <Building className="w-4 h-4 text-green-400" />
                  <span>Address: 364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Services Overview */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Service Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive portfolio of innovative services designed to transform your business operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg">
                    {category.icon}
                  </div>
                  <span className="text-2xl font-bold text-cyan-400">{category.count}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{category.name}</h3>
                <p className="text-sm text-gray-400">
                  {category.id === 'all' && 'Complete portfolio of innovative services'}
                  {category.id === 'ai' && 'Advanced AI and machine learning solutions'}
                  {category.id === 'it' && 'Next-generation IT infrastructure and security'}
                  {category.id === 'saas' && 'Innovative micro SAAS applications'}
                  {category.id === 'space' && 'Cutting-edge space technology solutions'}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search innovative services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  viewMode === 'grid'
                    ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-400/30'
                    : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  viewMode === 'list'
                    ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-400/30'
                    : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid/List */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {filteredServices.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold mb-2">No services found</h3>
              <p className="text-gray-400">Try adjusting your search terms or category filters</p>
            </motion.div>
          ) : (
            <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-6'}>
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105 ${
                    viewMode === 'list' ? 'p-6' : 'p-6'
                  }`}
                >
                  {/* Service Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`text-3xl ${service.icon}`}></div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                        <p className="text-sm text-gray-400">{service.category}</p>
                      </div>
                    </div>
                    {service.popular && (
                      <span className="px-2 py-1 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-400/30 rounded-full text-yellow-400 text-xs font-medium">
                        Popular
                      </span>
                    )}
                  </div>

                  {/* Service Details */}
                  <div className="space-y-4">
                    <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
                    
                    {/* Pricing */}
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-cyan-400">
                        {service.price}<span className="text-sm text-gray-400">{service.period}</span>
                      </div>
                      <div className="text-sm text-gray-400">
                        {service.trialDays} day trial
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-gray-300">Key Features:</h4>
                      <div className="grid grid-cols-1 gap-1">
                        {service.features.slice(0, 4).map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2 text-xs text-gray-400">
                            <Check className="w-3 h-3 text-green-400 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                        {service.features.length > 4 && (
                          <div className="text-xs text-cyan-400">
                            +{service.features.length - 4} more features
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Market Info */}
                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div>
                        <span className="text-gray-400">Market Size:</span>
                        <div className="text-cyan-400 font-medium">{service.marketSize}</div>
                      </div>
                      <div>
                        <span className="text-gray-400">Growth Rate:</span>
                        <div className="text-green-400 font-medium">{service.growthRate}</div>
                      </div>
                    </div>

                    {/* ROI */}
                    <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-400/20 rounded-lg p-3">
                      <div className="text-xs text-gray-400 mb-1">Expected ROI</div>
                      <div className="text-sm text-green-400 font-medium">{service.roi}</div>
                    </div>

                    {/* CTA */}
                    <div className="flex space-x-3">
                      <a
                        href={service.link}
                        className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center py-3 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                      >
                        Learn More
                      </a>
                      <a
                        href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.name}`}
                        className="px-4 py-3 border border-cyan-400 text-cyan-400 rounded-lg font-medium hover:bg-cyan-400 hover:text-black transition-all duration-300"
                      >
                        Contact
                      </a>
                    </div>

                    {/* Contact Info */}
                    <div className="pt-4 border-t border-gray-700/50">
                      <div className="text-xs text-gray-400 mb-2">Contact Information:</div>
                      <div className="space-y-1 text-xs">
                        <div className="flex items-center space-x-2">
                          <Zap className="w-3 h-3 text-yellow-400" />
                          <span>{service.contactInfo.mobile}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Heart className="w-3 h-3 text-red-400" />
                          <span>{service.contactInfo.email}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Globe className="w-3 h-3 text-blue-400" />
                          <span>{service.contactInfo.website}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-12 border border-cyan-400/20"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the future of technology with our innovative 2025 services. Contact us today to discuss how we can help you achieve your business goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Innovative 2025 Services Inquiry"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
              >
                <span className="flex items-center gap-2">
                  Get Started Today
                  <ArrowRight className="w-5 h-5" />
                </span>
              </a>
              <a
                href="tel:+13024640950"
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105"
              >
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Innovative2025ServicesShowcase;