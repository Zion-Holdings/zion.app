import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Grid, List, Filter, DollarSign,
  Brain, Atom, Shield, Target, Rocket,
  ArrowRight, Check, Palette, Heart, Truck, GraduationCap,
  Building, Cpu, Zap, Star, TrendingUp, Users, Globe,
  Phone, Mail, MapPin, ExternalLink
} from 'lucide-react';

// Import our new innovative 2025 services
import { innovativeAIAutomationServices2025 } from '../data/2025-innovative-ai-automation-services';
import { innovativeITInfrastructureServices2025 } from '../data/2025-innovative-it-infrastructure-services';
import { innovativeMicroSaasServices2025 } from '../data/2025-innovative-micro-saas-services';
import { innovativeBusinessSolutions2025 } from '../data/2025-innovative-business-solutions';

const Innovative2025PricingShowcase: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filteredServices, setFilteredServices] = useState<any[]>([]);

  // Combine all services
  const allServices = [
    ...innovativeAIAutomationServices2025,
    ...innovativeITInfrastructureServices2025,
    ...innovativeMicroSaasServices2025,
    ...innovativeBusinessSolutions2025
  ];

  // Categories for filtering
  const categories = [
    { id: 'all', name: 'All Services', icon: Globe, count: allServices.length },
    { id: 'ai-automation', name: 'AI & Automation', icon: Brain, count: innovativeAIAutomationServices2025.length },
    { id: 'it-infrastructure', name: 'IT Infrastructure', icon: Cpu, count: innovativeITInfrastructureServices2025.length },
    { id: 'micro-saas', name: 'Micro SAAS', icon: Building, count: innovativeMicroSaasServices2025.length },
    { id: 'business-solutions', name: 'Business Solutions', icon: Target, count: innovativeBusinessSolutions2025.length }
  ];

  // Price ranges for filtering
  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'all' },
    { id: 'budget', name: 'Budget ($0-$500)', range: '0-500' },
    { id: 'mid-range', name: 'Mid-Range ($500-$1500)', range: '500-1500' },
    { id: 'premium', name: 'Premium ($1500+)', range: '1500+' }
  ];

  useEffect(() => {
    let filtered = allServices;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => {
        if (selectedCategory === 'ai-automation') return innovativeAIAutomationServices2025.includes(service);
        if (selectedCategory === 'it-infrastructure') return innovativeITInfrastructureServices2025.includes(service);
        if (selectedCategory === 'micro-saas') return innovativeMicroSaasServices2025.includes(service);
        if (selectedCategory === 'business-solutions') return innovativeBusinessSolutions2025.includes(service);
        return true;
      });
    }

    // Filter by price range
    if (priceRange !== 'all') {
      filtered = filtered.filter(service => {
        const starterPrice = parseFloat(service.pricing.starter.replace('$', '').replace('/month', ''));
        if (priceRange === '0-500') return starterPrice <= 500;
        if (priceRange === '500-1500') return starterPrice > 500 && starterPrice <= 1500;
        if (priceRange === '1500+') return starterPrice > 1500;
        return true;
      });
    }

    setFilteredServices(filtered);
  }, [searchTerm, selectedCategory, priceRange]);

  const getCategoryIcon = (category: string) => {
    if (category.includes('AI') || category.includes('Automation')) return Brain;
    if (category.includes('IT') || category.includes('Infrastructure')) return Cpu;
    if (category.includes('Micro SAAS')) return Building;
    if (category.includes('Business')) return Target;
    return Globe;
  };

  const getCategoryColor = (category: string) => {
    if (category.includes('AI') || category.includes('Automation')) return 'from-purple-600 to-pink-600';
    if (category.includes('IT') || category.includes('Infrastructure')) return 'from-blue-600 to-cyan-600';
    if (category.includes('Micro SAAS')) return 'from-green-600 to-emerald-600';
    if (category.includes('Business')) return 'from-orange-600 to-red-600';
    return 'from-gray-600 to-slate-600';
  };

  const formatPrice = (price: string) => {
    return price.replace('/month', '');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="Innovative 2025 Pricing Showcase | Zion Tech Group"
        description="Explore comprehensive pricing for our innovative 2025 AI, IT infrastructure, micro SAAS, and business solutions. Competitive pricing with enterprise-grade features."
        keywords="pricing, AI services, IT infrastructure, micro SAAS, business solutions, 2025, competitive pricing"
        image="https://ziontechgroup.com/og-innovative-2025-pricing.jpg"
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30 rounded-full text-green-400 text-sm font-medium mb-6">
              <DollarSign className="w-4 h-4" />
              <span>Transparent Pricing</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 bg-clip-text text-transparent">
                Innovative 2025
              </span>
              <br />
              <span className="text-white">Pricing Showcase</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover competitive pricing for our comprehensive collection of cutting-edge AI, IT infrastructure, micro SAAS, and business solutions designed to transform your business in 2025.
            </p>
            
            {/* Contact Information */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 mb-8 inline-block">
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-white">
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-green-400" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-green-400" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-green-400" />
                  <span>364 E Main St STE 1008 Middletown DE 19709</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Visit Our Website
                <ExternalLink className="w-5 h-5" />
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Pricing Inquiry for 2025 Services"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 backdrop-blur-xl border border-white/20"
              >
                Get Custom Quote
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    <category.icon className="w-4 h-4" />
                    <span>{category.name}</span>
                    <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>

              {/* Price Range Filter */}
              <div className="flex flex-wrap gap-2">
                {priceRanges.map((range) => (
                  <button
                    key={range.id}
                    onClick={() => setPriceRange(range.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                      priceRange === range.id
                        ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    <DollarSign className="w-4 h-4" />
                    <span>{range.name}</span>
                  </button>
                ))}
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center gap-2 bg-white/10 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-all duration-300 ${
                    viewMode === 'grid'
                      ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-all duration-300 ${
                    viewMode === 'list'
                      ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Results Count */}
          <div className="text-white mb-8">
            <p className="text-lg">
              Showing <span className="text-green-400 font-semibold">{filteredServices.length}</span> of{' '}
              <span className="text-green-400 font-semibold">{allServices.length}</span> services
            </p>
          </div>

          {/* Services Grid */}
          <AnimatePresence>
            {filteredServices.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <div className="text-gray-400 text-xl">
                  No services found matching your criteria.
                </div>
              </motion.div>
            ) : (
              <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}>
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-white/10 ${
                      viewMode === 'list' ? 'flex' : ''
                    }`}
                  >
                    {/* Service Header */}
                    <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${getCategoryColor(service.category)} rounded-xl flex items-center justify-center shadow-lg`}>
                          {React.createElement(getCategoryIcon(service.category), { className: "w-6 h-6 text-white" })}
                        </div>
                        <span className="text-xs bg-white/20 text-white px-2 py-1 rounded-full">
                          {service.type}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                      <p className="text-gray-300 mb-4">{service.tagline}</p>
                      <p className="text-gray-400 text-sm mb-4">{service.description}</p>

                      {/* Pricing Section */}
                      <div className="bg-white/5 rounded-xl p-4 mb-6">
                        <div className="text-sm text-gray-400 mb-3 font-medium">Pricing Plans:</div>
                        <div className="space-y-2">
                          {service.pricing.starter && (
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-300">Starter:</span>
                              <span className="text-lg font-bold text-green-400">{formatPrice(service.pricing.starter)}</span>
                            </div>
                          )}
                          {service.pricing.professional && (
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-300">Professional:</span>
                              <span className="text-lg font-bold text-blue-400">{formatPrice(service.pricing.professional)}</span>
                            </div>
                          )}
                          {service.pricing.enterprise && (
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-300">Enterprise:</span>
                              <span className="text-lg font-bold text-purple-400">{formatPrice(service.pricing.enterprise)}</span>
                            </div>
                          )}
                          {service.pricing.custom && (
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-300">Custom:</span>
                              <span className="text-sm text-cyan-400">{service.pricing.custom}</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Features Preview */}
                      <div className="mb-4">
                        <div className="text-sm text-gray-400 mb-2">Key Features:</div>
                        <div className="flex flex-wrap gap-1">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <span
                              key={idx}
                              className="text-xs bg-white/10 text-white px-2 py-1 rounded-full"
                            >
                              {feature}
                            </span>
                          ))}
                          {service.features.length > 3 && (
                            <span className="text-xs bg-white/20 text-white px-2 py-1 rounded-full">
                              +{service.features.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Benefits */}
                      <div className="mb-6">
                        <div className="text-sm text-gray-400 mb-2">Key Benefits:</div>
                        <ul className="space-y-1">
                          {service.benefits.slice(0, 3).map((benefit, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                              <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Market Info */}
                      <div className="mb-6 text-sm">
                        <div className="flex items-center justify-between text-gray-400 mb-2">
                          <span>Market Size:</span>
                          <span className="text-green-400 font-semibold">{service.marketSize}</span>
                        </div>
                        <div className="text-gray-400">
                          <span>Target:</span> {service.targetAudience}
                        </div>
                      </div>

                      {/* CTA Buttons */}
                      <div className="flex flex-col gap-2">
                        <a
                          href={service.slug}
                          className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-3 px-4 rounded-xl font-semibold text-center transition-all duration-300 transform hover:scale-105"
                        >
                          Learn More
                        </a>
                        <a
                          href={`mailto:${service.contact}?subject=Pricing Inquiry for ${service.name}`}
                          className="w-full bg-white/10 hover:bg-white/20 text-white py-3 px-4 rounded-xl font-semibold text-center transition-all duration-300 border border-white/20"
                        >
                          Get Pricing Quote
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Pricing Comparison CTA */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-green-500/20 to-emerald-600/20 backdrop-blur-xl rounded-3xl p-12 border border-white/20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Need Custom Pricing?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our services are designed to scale with your business. Contact us for custom pricing, 
              volume discounts, and enterprise solutions tailored to your specific needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                Call for Custom Quote
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Custom Pricing Inquiry"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 backdrop-blur-xl border border-white/20"
              >
                <Mail className="w-5 h-5" />
                Request Custom Pricing
              </a>
            </div>

            <div className="mt-8 text-gray-300">
              <p>Visit us at: <a href="https://ziontechgroup.com" className="text-green-400 hover:text-green-300">https://ziontechgroup.com</a></p>
              <p>Address: 364 E Main St STE 1008 Middletown DE 19709</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Innovative2025PricingShowcase;