import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Grid, List, Filter,
  Brain, Atom, Shield, Target, Rocket,
  ArrowRight, Check, Palette, Heart, Truck, GraduationCap,
  Building, Cpu, Star, Users, Globe, Zap
} from 'lucide-react';

// Import our new enterprise service data
import { advancedEnterpriseAutomationServices2025 } from '../data/2025-advanced-enterprise-automation-services';
import { advancedAIMLEnterpriseServices2025 } from '../data/2025-advanced-ai-ml-enterprise-services';
import { advancedCloudDevOpsServices2025 } from '../data/2025-advanced-cloud-devops-services';
import { advancedFintechBlockchainServices2025 } from '../data/2025-advanced-fintech-blockchain-services';

const Comprehensive2025EnterpriseServicesShowcase: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'rating' | 'popularity'>('popularity');

  // Combine all services
  const allServices = [
    ...advancedEnterpriseAutomationServices2025,
    ...advancedAIMLEnterpriseServices2025,
    ...advancedCloudDevOpsServices2025,
    ...advancedFintechBlockchainServices2025
  ];

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(allServices.map(service => service.category)))];

  // Filter and sort services
  const filteredServices = allServices
    .filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price':
          return parseFloat(a.pricing.starter.replace(/[^0-9.]/g, '')) - parseFloat(b.pricing.starter.replace(/[^0-9.]/g, ''));
        case 'rating':
          return b.rating - a.rating;
        case 'popularity':
          return b.customers - a.customers;
        default:
          return 0;
      }
    });

  const getServiceCard = (service: any) => (
    <motion.div
      key={service.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`bg-gradient-to-br ${service.color} p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-white/20`}
    >
      <div className="text-center mb-6">
        <div className="text-4xl mb-3">{service.icon}</div>
        <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
        <p className="text-white/90 text-sm mb-3">{service.tagline}</p>
        <div className="inline-flex items-center px-3 py-1 bg-white/20 rounded-full text-white text-xs font-medium">
          {service.category}
        </div>
      </div>

      <div className="space-y-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-white mb-1">
            {service.pricing.starter}
          </div>
          <div className="text-white/80 text-sm">Starting Price</div>
        </div>

        <div className="space-y-2">
          {service.keyFeatures.slice(0, 5).map((feature: string, index: number) => (
            <div key={index} className="flex items-center text-white/90 text-sm">
              <Check className="w-4 h-4 mr-2 text-white" />
              {feature}
            </div>
          ))}
        </div>

        <div className="pt-4 border-t border-white/20">
          <div className="flex items-center justify-between text-white/80 text-sm mb-2">
            <span>Rating: {service.rating}/5</span>
            <span>{service.reviews} reviews</span>
          </div>
          <div className="flex items-center justify-between text-white/80 text-sm">
            <span>{service.customers} customers</span>
            <span>Launch: {new Date(service.launchDate).toLocaleDateString()}</span>
          </div>
        </div>

        <a
          href={service.link}
          className="block w-full text-center bg-white text-gray-900 py-3 px-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
        >
          Learn More
        </a>
      </div>
    </motion.div>
  );

  const getServiceList = (service: any) => (
    <motion.div
      key={service.id}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-gray-900 to-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700"
    >
      <div className="flex items-start space-x-4">
        <div className={`text-3xl p-3 rounded-lg bg-gradient-to-br ${service.color}`}>
          {service.icon}
        </div>
        
        <div className="flex-1">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">{service.name}</h3>
              <p className="text-gray-300 text-sm mb-2">{service.tagline}</p>
              <div className="inline-flex items-center px-2 py-1 bg-blue-600 rounded-full text-white text-xs font-medium">
                {service.category}
              </div>
            </div>
            <div className="text-right">
              <div className="text-xl font-bold text-white">{service.pricing.starter}</div>
              <div className="text-gray-400 text-sm">Starting Price</div>
            </div>
          </div>

          <p className="text-gray-300 text-sm mb-4">{service.description}</p>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <h4 className="text-white font-semibold mb-2">Key Benefits:</h4>
              <ul className="space-y-1">
                {service.benefits.slice(0, 3).map((benefit: string, index: number) => (
                  <li key={index} className="text-gray-300 text-sm flex items-center">
                    <Check className="w-3 h-3 mr-2 text-green-400" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2">Target Audience:</h4>
              <ul className="space-y-1">
                {service.targetAudience.slice(0, 3).map((audience: string, index: number) => (
                  <li key={index} className="text-gray-300 text-sm flex items-center">
                    <Users className="w-3 h-3 mr-2 text-blue-400" />
                    {audience}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>Rating: {service.rating}/5 ⭐</span>
              <span>{service.reviews} reviews</span>
              <span>{service.customers} customers</span>
            </div>
            <a
              href={service.link}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200 flex items-center"
            >
              Learn More
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <>
      <SEO 
        title="Comprehensive 2025 Enterprise Services Showcase | Zion Tech Group"
        description="Discover our comprehensive suite of enterprise services including AI/ML, automation, cloud DevOps, fintech, and blockchain solutions. Transform your business with cutting-edge technology."
        keywords={[
          'enterprise services', 'AI services', 'automation services', 'cloud services', 
          'DevOps services', 'fintech services', 'blockchain services', 'business transformation'
        ]}
        image="/og-enterprise-services.jpg"
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="max-w-6xl mx-auto relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-full text-blue-400 text-sm font-medium">
                <Star className="w-4 h-4" />
                <span>Enterprise Innovation 2025</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600 bg-clip-text text-transparent">
                Enterprise Services Showcase
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Transform your business with our comprehensive suite of cutting-edge enterprise services. 
                From AI-powered automation to blockchain solutions, we deliver innovation that drives results.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a href="#services">
                  <button className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25">
                    <span className="flex items-center gap-2">
                      Explore Services
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                </a>
                <a href="tel:+13024640950">
                  <button className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-black transition-all duration-300 transform hover:scale-105">
                    Call Now: +1 302 464 0950
                  </button>
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">{allServices.length}+</div>
                  <div className="text-gray-400 text-sm">Enterprise Services</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">24/7</div>
                  <div className="text-gray-400 text-sm">Support Available</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-400">99.9%</div>
                  <div className="text-gray-400 text-sm">Uptime Guarantee</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">500+</div>
                  <div className="text-gray-400 text-sm">Happy Customers</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Information Banner */}
        <section className="py-8 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-6xl mx-auto text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
              <div className="flex items-center justify-center space-x-3">
                <Globe className="w-5 h-5" />
                <div>
                  <div className="font-semibold">Website</div>
                  <a href="https://ziontechgroup.com" className="text-blue-100 hover:text-white transition-colors">
                    ziontechgroup.com
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Zap className="w-5 h-5" />
                <div>
                  <div className="font-semibold">Phone</div>
                  <a href="tel:+13024640950" className="text-blue-100 hover:text-white transition-colors">
                    +1 302 464 0950
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Building className="w-5 h-5" />
                <div>
                  <div className="font-semibold">Address</div>
                  <div className="text-blue-100">
                    364 E Main St STE 1008<br />Middletown DE 19709
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            {/* Controls */}
            <div className="mb-8 space-y-4">
              {/* Search and Filters */}
              <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                <div className="flex-1 max-w-md">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search services..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>

                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="popularity">Sort by Popularity</option>
                    <option value="name">Sort by Name</option>
                    <option value="price">Sort by Price</option>
                    <option value="rating">Sort by Rating</option>
                  </select>

                  <div className="flex items-center bg-gray-800 rounded-lg p-1">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'}`}
                    >
                      <Grid className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'}`}
                    >
                      <List className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Results Count */}
              <div className="text-gray-400 text-sm">
                Showing {filteredServices.length} of {allServices.length} services
              </div>
            </div>

            {/* Services Grid/List */}
            <AnimatePresence mode="wait">
              {viewMode === 'grid' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredServices.map(service => getServiceCard(service))}
                </div>
              ) : (
                <div className="space-y-6">
                  {filteredServices.map(service => getServiceList(service))}
                </div>
              )}
            </AnimatePresence>

            {/* No Results */}
            {filteredServices.length === 0 && (
              <div className="text-center py-20">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-gray-400">Try adjusting your search terms or filters</p>
              </div>
            )}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our enterprise services are designed to drive innovation, efficiency, and growth. 
              Contact us today to discuss how we can help you achieve your business objectives.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+13024640950">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  Call +1 302 464 0950
                </button>
              </a>
              <a href="mailto:kleber@ziontechgroup.com">
                <button className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-black transition-all duration-300 transform hover:scale-105">
                  Email kleber@ziontechgroup.com
                </button>
              </a>
            </div>

            <div className="mt-8 text-gray-400 text-sm">
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
              <p>🌐 <a href="https://ziontechgroup.com" className="text-blue-400 hover:text-white transition-colors">ziontechgroup.com</a></p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Comprehensive2025EnterpriseServicesShowcase;