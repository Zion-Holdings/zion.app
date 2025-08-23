import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Grid, List, Filter,
  Brain, Atom, Shield, Target, Rocket,
  ArrowRight, Check, Star, TrendingUp,
  Building, Zap, Globe, Lock, Database
} from 'lucide-react';

// Import our new cutting-edge services
import { cuttingEdgeMicroSaasServices } from '../data/2025-cutting-edge-micro-saas-expansion';
import { innovativeITInfrastructureServices } from '../data/2025-innovative-it-infrastructure-expansion';
import { innovativeAIServices } from '../data/2025-innovative-ai-services-expansion';

const CuttingEdgeServicesShowcase: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'popular' | 'price' | 'rating' | 'newest'>('popular');

  // Combine all services
  const allServices = [
    ...cuttingEdgeMicroSaasServices,
    ...innovativeITInfrastructureServices,
    ...innovativeAIServices
  ];

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(allServices.map(service => service.category)))];

  // Filter and sort services
  const filteredServices = allServices
    .filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'popular':
          return b.popular ? 1 : -1;
        case 'price':
          return parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', ''));
        case 'rating':
          return b.rating - a.rating;
        case 'newest':
          return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime();
        default:
          return 0;
      }
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <SEO 
        title="2025 Cutting-Edge Services Showcase | Zion Tech Group"
        description="Discover our latest cutting-edge micro SAAS services, IT infrastructure solutions, and AI-powered platforms. Real, innovative, and market-ready solutions for 2025."
        keywords={["cutting-edge services", "micro SAAS", "IT infrastructure", "AI services", "2025", "innovation", "Zion Tech Group"]}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              2025 Cutting-Edge Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Discover our latest innovative micro SAAS services, IT infrastructure solutions, and AI-powered platforms. 
              Real, market-ready solutions designed for the future.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-blue-600/20 px-4 py-2 rounded-full border border-blue-400/30">
                🚀 Micro SAAS Solutions
              </span>
              <span className="bg-purple-600/20 px-4 py-2 rounded-full border border-purple-400/30">
                🏗️ IT Infrastructure
              </span>
              <span className="bg-indigo-600/20 px-4 py-2 rounded-full border border-indigo-400/30">
                🤖 AI-Powered Platforms
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Ready to Transform Your Business?</h3>
              <p className="text-blue-100">Get in touch with our experts today</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 text-sm">
              <div className="flex items-center gap-2">
                <span>📱</span>
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center gap-2">
                <span>✉️</span>
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span>📍</span>
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Sort and View Controls */}
            <div className="flex items-center gap-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="popular">Most Popular</option>
                <option value="price">Price: Low to High</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest First</option>
              </select>

              <div className="flex border border-gray-300 rounded-lg">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-6"
          style={{
            gridTemplateColumns: viewMode === 'grid' ? 'repeat(auto-fill, minmax(400px, 1fr))' : '1fr'
          }}
        >
          {filteredServices.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden ${
                viewMode === 'list' ? 'flex' : ''
              }`}
            >
              {/* Service Header */}
              <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`text-3xl ${service.color.includes('from-') ? 'bg-gradient-to-r ' + service.color + ' p-3 rounded-lg' : 'bg-gray-100 p-3 rounded-lg'}`}>
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{service.name}</h3>
                      <p className="text-gray-600 text-sm">{service.tagline}</p>
                    </div>
                  </div>
                  {service.popular && (
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      POPULAR
                    </span>
                  )}
                </div>

                <p className="text-gray-700 mb-4 leading-relaxed">{service.description}</p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <div className="grid grid-cols-1 gap-1">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 4 && (
                      <div className="text-sm text-gray-500 mt-1">
                        +{service.features.length - 4} more features
                      </div>
                    )}
                  </div>
                </div>

                {/* Market Info */}
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div>
                    <span className="text-gray-500">Market Size:</span>
                    <div className="font-medium text-gray-900">{service.marketSize}</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Growth Rate:</span>
                    <div className="font-medium text-gray-900">{service.growthRate}</div>
                  </div>
                </div>

                {/* ROI and Competitors */}
                <div className="mb-4">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">Expected ROI:</div>
                    <div className="font-semibold text-blue-900">{service.roi}</div>
                  </div>
                </div>

                {/* Technology Stack */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Technology Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technology.slice(0, 3).map((tech, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                    {service.technology.length > 3 && (
                      <span className="text-gray-500 text-xs">+{service.technology.length - 3} more</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Service Sidebar */}
              <div className={`bg-gray-50 p-6 ${viewMode === 'list' ? 'w-80 flex-shrink-0' : ''}`}>
                {/* Pricing */}
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    {service.price}
                    <span className="text-lg text-gray-500">{service.period}</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    {service.trialDays}-day free trial
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{service.customers}</div>
                    <div className="text-xs text-gray-500">Customers</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{service.rating}</div>
                    <div className="text-xs text-gray-500">Rating</div>
                  </div>
                </div>

                {/* Setup Info */}
                <div className="mb-6">
                  <div className="text-sm text-gray-600 mb-2">Setup Time:</div>
                  <div className="font-medium text-gray-900">{service.setupTime}</div>
                </div>

                {/* Target Audience */}
                <div className="mb-6">
                  <div className="text-sm text-gray-600 mb-2">Target Audience:</div>
                  <div className="text-sm text-gray-900">{service.targetAudience}</div>
                </div>

                {/* CTA Button */}
                <a
                  href={service.link}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold text-center block hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
                >
                  Learn More
                  <ArrowRight className="inline-block w-4 h-4 ml-2" />
                </a>

                {/* Contact Info */}
                <div className="mt-4 text-center">
                  <div className="text-xs text-gray-500 mb-2">Questions? Contact us:</div>
                  <div className="text-xs text-gray-700">
                    <div>📱 {service.contactInfo.mobile}</div>
                    <div>✉️ {service.contactInfo.email}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No services found</h3>
            <p className="text-gray-600">Try adjusting your search terms or filters</p>
          </div>
        )}
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Our cutting-edge services are designed to give you a competitive advantage in 2025 and beyond. 
            Get started today with a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Get Free Consultation
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors duration-200"
            >
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CuttingEdgeServicesShowcase;