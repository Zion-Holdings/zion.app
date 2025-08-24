import React, { useState } from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Search, Grid, List,
  ArrowRight, Check,
  Star, Users, Award, Clock, DollarSign
} from 'lucide-react';

// Import all our new 2025 advanced services
import { advancedEdgeComputingServices } from '../data/2025-advanced-edge-computing-services';
import { advancedIoTSmartCityServices } from '../data/2025-advanced-iot-smart-city-services';
import { advancedFintechBlockchainServicesExpanded } from '../data/2025-advanced-fintech-blockchain-services-expanded';
import { advancedHealthcareBiotechServices } from '../data/2025-advanced-healthcare-biotech-services';
import { advancedSpaceAerospaceServices } from '../data/2025-advanced-space-aerospace-services';

// Import existing services
import { advancedAIMLServices } from '../data/2025-advanced-ai-ml-services';
import { advancedCybersecurityServices } from '../data/2025-advanced-cybersecurity-services';
import { advancedCloudDevOpsServices } from '../data/2025-advanced-cloud-devops-services';

const UltimateInnovativeServicesShowcaseExpanded: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'popular' | 'price' | 'rating' | 'newest'>('popular');

  // Combine all services
  const allServices = [
    ...advancedEdgeComputingServices,
    ...advancedIoTSmartCityServices,
    ...advancedFintechBlockchainServicesExpanded,
    ...advancedHealthcareBiotechServices,
    ...advancedSpaceAerospaceServices,
    ...advancedAIMLServices,
    ...advancedCybersecurityServices,
    ...advancedCloudDevOpsServices
  ];

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(allServices.map(service => service.category)))];

  // Helper function to get service benefits/features
  const getServiceBenefits = (service: any) => {
    if (service.benefits) return service.benefits;
    if (service.features) return service.features;
    if (service.keyFeatures) return service.keyFeatures;
    return [];
  };

  // Helper function to get service pricing
  const getServicePricing = (service: any) => {
    if (typeof service.price === 'string') return service.price;
    if (service.price?.monthly) return `$${service.price.monthly.toLocaleString()}/month`;
    return 'Contact for pricing';
  };

  // Helper function to get service setup time
  const getServiceSetupTime = (service: any) => {
    if (service.setupTime) return service.setupTime;
    if (service.period) return service.period;
    return 'Contact for details';
  };

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
        case 'popular':
          return b.customers - a.customers;
        case 'price': {
          const aPrice = typeof a.price === 'string' ? 0 : a.price.monthly || 0;
          const bPrice = typeof b.price === 'string' ? 0 : b.price.monthly || 0;
          return aPrice - bPrice;
        }
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="2025 Ultimate Innovative Micro SAAS Services Showcase | Zion Tech Group"
        description="Discover cutting-edge micro SAAS services including Edge Computing, IoT Smart Cities, Fintech Blockchain, Healthcare Biotech, and Space Technology solutions. Transform your business with AI-powered innovation."
        keywords={["micro SAAS", "edge computing", "IoT smart cities", "fintech blockchain", "healthcare biotech", "space technology", "AI services", "innovative solutions"]}
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                2025 Ultimate
              </span>
              <br />
              <span className="text-white">Innovative Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business with cutting-edge micro SAAS solutions spanning Edge Computing, 
              IoT Smart Cities, Fintech Blockchain, Healthcare Biotech, and Space Technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center space-x-2 text-white">
                <Star className="w-5 h-5 text-yellow-400" />
                <span>500+ Services</span>
              </div>
              <div className="flex items-center space-x-2 text-white">
                <Users className="w-5 h-5 text-blue-400" />
                <span>10,000+ Customers</span>
              </div>
              <div className="flex items-center space-x-2 text-white">
                <Award className="w-5 h-5 text-green-400" />
                <span>99.9% Uptime</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search innovative services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              {/* Category Filter */}
              <div className="flex gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      selectedCategory === category
                        ? 'bg-purple-600 text-white'
                        : 'bg-white/20 text-gray-300 hover:bg-white/30'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Sort Options */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="popular">Most Popular</option>
                <option value="price">Price: Low to High</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest First</option>
              </select>

              {/* View Mode Toggle */}
              <div className="flex bg-white/20 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-all ${
                    viewMode === 'grid' ? 'bg-purple-600 text-white' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-all ${
                    viewMode === 'list' ? 'bg-purple-600 text-white' : 'text-gray-300 hover:text-white'
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
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}
          >
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className={`bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden transition-all hover:scale-105 hover:bg-white/20 ${
                  viewMode === 'list' ? 'flex' : ''
                }`}
              >
                {/* Service Header */}
                <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="text-3xl">{service.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{service.name}</h3>
                        <p className="text-sm text-gray-400">{service.category}</p>
                      </div>
                    </div>
                    {service.popular && (
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                        POPULAR
                      </span>
                    )}
                  </div>

                  <p className="text-gray-300 mb-4">{service.tagline}</p>
                  <p className="text-gray-400 text-sm mb-6">{service.description}</p>

                  {/* Pricing */}
                  <div className="bg-white/10 rounded-xl p-4 mb-6">
                    <div className="text-center">
                      <span className="text-2xl font-bold text-white">{getServicePricing(service)}</span>
                    </div>
                  </div>

                  {/* Key Benefits */}
                  <div className="space-y-2 mb-6">
                    {getServiceBenefits(service).slice(0, 3).map((benefit: string, index: number) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{service.customers.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span>{service.rating} ({service.reviews})</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{getServiceSetupTime(service)}</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="flex space-x-3">
                    <a
                      href={service.link}
                      className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center py-3 px-4 rounded-xl font-medium hover:from-purple-700 hover:to-blue-700 transition-all flex items-center justify-center space-x-2"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    <a
                      href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.name}`}
                      className="bg-white/20 text-white py-3 px-4 rounded-xl font-medium hover:bg-white/30 transition-all flex items-center justify-center"
                    >
                      <DollarSign className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

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

      {/* Contact Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get in touch with our team to discuss how our innovative micro SAAS solutions 
              can accelerate your digital transformation journey.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <div className="text-3xl mb-3">📱</div>
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-300">+1 302 464 0950</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <div className="text-3xl mb-3">✉️</div>
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <div className="text-3xl mb-3">📍</div>
                <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Innovative Services Inquiry"
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-medium hover:from-purple-700 hover:to-blue-700 transition-all text-lg"
              >
                Get Started Today
              </a>
              <a
                href="https://ziontechgroup.com"
                className="bg-white/20 text-white px-8 py-4 rounded-xl font-medium hover:bg-white/30 transition-all text-lg"
              >
                Visit Our Website
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 border-t border-white/20 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-4xl mb-4">🚀</div>
          <h3 className="text-2xl font-bold text-white mb-4">
            Zion Tech Group
          </h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Leading the future of micro SAAS innovation with cutting-edge solutions in AI, 
            Edge Computing, IoT, Blockchain, Healthcare, and Space Technology.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <span>© 2025 Zion Tech Group</span>
            <span>•</span>
            <span>All rights reserved</span>
            <span>•</span>
            <span>Privacy Policy</span>
            <span>•</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default UltimateInnovativeServicesShowcaseExpanded;