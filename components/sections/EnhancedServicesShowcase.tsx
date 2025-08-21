import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, ExternalLink, Star, Zap, Shield, 
  TrendingUp, Clock, DollarSign, Check, Sparkles,
  Brain, Rocket, Globe, FlaskConical, Cpu, Factory
} from 'lucide-react';
import Button from '../ui/Button';
import { EnhancedRealMicroSaasService } from '../../data/enhanced-real-micro-saas-services';

interface EnhancedServicesShowcaseProps {
  services: EnhancedRealMicroSaasService[];
  title?: string;
  subtitle?: string;
  showFilters?: boolean;
  maxServices?: number;
}

export default function EnhancedServicesShowcase({
  services,
  title = "Revolutionary Micro SAAS Services",
  subtitle = "Discover cutting-edge solutions that transform your business",
  showFilters = true,
  maxServices
}: EnhancedServicesShowcaseProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState<'innovation' | 'price' | 'rating' | 'name'>('innovation');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = ['All', ...Array.from(new Set(services.map(s => s.category)))];
  
  const filteredServices = maxServices 
    ? services.slice(0, maxServices)
    : services.filter(service => 
        selectedCategory === 'All' || service.category === selectedCategory
      );

  // Sort services
  filteredServices.sort((a, b) => {
    switch (sortBy) {
      case 'innovation':
        return (b.realImplementation ? 1 : 0) - (a.realImplementation ? 1 : 0) || 
               (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
      case 'price':
        return parseFloat(a.price.replace('$', '').replace(',', '')) - 
               parseFloat(b.price.replace('$', '').replace(',', ''));
      case 'rating':
        return b.rating - a.rating;
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  const getVariantColor = (variant: string) => {
    switch (variant) {
      case 'quantum-advanced':
      case 'quantum-cyberpunk':
      case 'quantum-space':
        return 'from-cyan-500 to-blue-600';
      case 'holographic-matrix':
      case 'holographic-neural':
        return 'from-purple-500 to-pink-600';
      case 'neural-quantum':
      case 'neural-cyberpunk':
        return 'from-green-500 to-teal-600';
      case 'cyberpunk-holographic':
        return 'from-red-500 to-orange-600';
      default:
        return 'from-cyan-500 to-purple-600';
    }
  };

  const getCategoryIcon = (category: string) => {
    if (category.includes('Quantum') || category.includes('AI')) return <Brain className="w-5 h-5" />;
    if (category.includes('Manufacturing') || category.includes('Autonomous')) return <Factory className="w-5 h-5" />;
    if (category.includes('Cybersecurity') || category.includes('Security')) return <Shield className="w-5 h-5" />;
    if (category.includes('Space') || category.includes('Aerospace')) return <Rocket className="w-5 h-5" />;
    if (category.includes('Metaverse') || category.includes('VR')) return <Globe className="w-5 h-5" />;
    if (category.includes('Healthcare') || category.includes('Biomedical')) return <FlaskConical className="w-5 h-5" />;
    if (category.includes('Finance') || category.includes('Trading')) return <TrendingUp className="w-5 h-5" />;
    return <Cpu className="w-5 h-5" />;
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-gradient-cyan">{title}</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        {/* Filters */}
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row gap-4 justify-between items-center mb-8 bg-slate-900/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50"
          >
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                      : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-slate-800/50 border border-slate-600 rounded-lg px-3 py-2 text-slate-300 text-sm focus:outline-none focus:border-cyan-500"
              >
                <option value="innovation">Most Innovative</option>
                <option value="price">Price Low-High</option>
                <option value="rating">Highest Rated</option>
                <option value="name">Name A-Z</option>
              </select>

              <div className="flex bg-slate-800/50 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-all duration-200 ${
                    viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-all duration-200 ${
                    viewMode === 'list' ? 'bg-cyan-500 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Services Grid */}
        <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
          <AnimatePresence>
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 ${
                  viewMode === 'list' ? 'flex' : ''
                }`}
              >
                {/* Service Header */}
                <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${getVariantColor(service.variant)} flex items-center justify-center text-white text-2xl`}>
                        {service.icon}
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          {getCategoryIcon(service.category)}
                          <span className="text-xs text-slate-400 bg-slate-800/50 px-2 py-1 rounded-full">
                            {service.category}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {service.popular && (
                      <div className="flex items-center space-x-1 bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded-full text-xs">
                        <Star className="w-3 h-3 fill-current" />
                        <span>Popular</span>
                      </div>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-slate-300 text-sm mb-4">{service.tagline}</p>

                  {/* Price and Trial */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                      <span className="text-slate-400">{service.period}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-slate-400">
                      <Clock className="w-4 h-4" />
                      <span>{service.trialDays} days free</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm text-slate-300">
                        <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 3 && (
                      <div className="text-sm text-slate-400">
                        +{service.features.length - 3} more features
                      </div>
                    )}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                    <div>
                      <div className="text-lg font-bold text-white">{service.rating}</div>
                      <div className="text-xs text-slate-400">Rating</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-white">{service.customers.toLocaleString()}</div>
                      <div className="text-xs text-slate-400">Customers</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-white">{service.reviews.toLocaleString()}</div>
                      <div className="text-xs text-slate-400">Reviews</div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-3">
                    <Button
                      href={service.link}
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                    <Button
                      href="/contact"
                      variant="outline"
                      className="border-slate-600 text-slate-300 hover:border-cyan-500 hover:text-cyan-400 py-2 px-4 rounded-lg text-sm font-medium transition-all duration-200"
                    >
                      Contact
                    </Button>
                  </div>
                </div>

                {/* List view additional info */}
                {viewMode === 'list' && (
                  <div className="w-80 p-6 bg-slate-800/30 border-l border-slate-700/50">
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-slate-400 mb-2">Technology Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.technology.slice(0, 4).map((tech, idx) => (
                            <span key={idx} className="text-xs bg-slate-700/50 text-slate-300 px-2 py-1 rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-slate-400 mb-2">ROI</h4>
                        <p className="text-sm text-slate-300">{service.roi}</p>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-slate-400 mb-2">Market Size</h4>
                        <p className="text-sm text-slate-300">{service.marketSize}</p>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-slate-400 mb-2">Growth Rate</h4>
                        <p className="text-sm text-slate-300">{service.growthRate}</p>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View All Button */}
        {maxServices && services.length > maxServices && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button
              href="/services"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-200 transform hover:scale-105"
            >
              View All {services.length} Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}