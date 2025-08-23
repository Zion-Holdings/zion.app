import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Grid, List, Filter,
  Brain, Atom, Shield, Target, Rocket,
  ArrowRight, Check, Palette, Heart, Truck, GraduationCap,
  Building, Cpu, Zap, Globe, Lock, ChartBar,
  Star, Users, TrendingUp, Award, Clock, DollarSign, Tag, Phone, Mail
} from 'lucide-react';

// Import our new innovative services
import { innovativeMicroSaasServices2025V2 } from '../data/2025-innovative-micro-saas-expansion-v2';
import { emergingTechInnovations2025 } from '../data/2025-emerging-tech-innovations';

// Import existing services for comprehensive showcase
import { realMicroSaasServices2025 } from '../data/2025-real-micro-saas-services';

// Combine all services
const allServices = [
  ...innovativeMicroSaasServices2025V2,
  ...emergingTechInnovations2025,
  ...realMicroSaasServices2025
];

// Service categories
const serviceCategories = [
  'All Services',
  'AI & Machine Learning',
  'Quantum Computing',
  'Cybersecurity',
  'Healthcare & Biotech',
  'Finance & Investment',
  'Supply Chain & Logistics',
  'Manufacturing & Industry 4.0',
  'Space Technology',
  'Blockchain & Web3',
  'Education & Learning',
  'Legal & Compliance',
  'Energy & Sustainability',
  'Autonomous Vehicles',
  'IoT & Edge Computing',
  'Metaverse & VR',
  'Neuroscience & BCI'
];

// Helper function to get service category
const getServiceCategory = (service: any) => {
  if (service.category) return service.category;
  if (service.type) return service.type;
  return 'Other';
};

// Helper function to get service pricing
const getServicePricing = (service: any) => {
  if (service.pricing?.starter) return service.pricing.starter;
  if (service.pricing?.monthly) return `$${service.pricing.monthly}/month`;
  if (service.price?.monthly) return `$${service.price.monthly}/month`;
  return 'Contact for pricing';
};

// Helper function to get service features
const getServiceFeatures = (service: any) => {
  if (service.features) return service.features;
  if (service.keyFeatures) return service.keyFeatures;
  return [];
};

// Helper function to get service description
const getServiceDescription = (service: any) => {
  if (service.description) return service.description;
  if (service.tagline) return service.tagline;
  return '';
};

export default function Comprehensive2025InnovativeServicesShowcase() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Services');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'rating' | 'popularity'>('popularity');

  // Filter and sort services
  const filteredServices = allServices
    .filter(service => {
      const serviceName = (service as any).title || (service as any).name || '';
      const matchesSearch = serviceName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           (service as any).tagline?.toLowerCase().includes(searchTerm.toLowerCase()) || false;
      const matchesCategory = selectedCategory === 'All Services' || 
                             getServiceCategory(service).includes(selectedCategory.split(' ')[0]);
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      const aName = (a as any).title || (a as any).name || '';
      const bName = (b as any).title || (b as any).name || '';
      switch (sortBy) {
        case 'name':
          return aName.localeCompare(bName);
        case 'price':
          return ((a as any).price?.monthly || 0) - ((b as any).price?.monthly || 0);
        case 'rating':
          return ((b as any).rating || 0) - ((a as any).rating || 0);
        case 'popularity':
        default:
          return ((b as any).customers || 0) - ((a as any).customers || 0);
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
        title="2025 Comprehensive Innovative Services Showcase | Zion Tech Group"
        description="Discover our comprehensive portfolio of innovative micro SAAS services, AI solutions, and cutting-edge technology platforms. From quantum computing to healthcare AI, explore the future of business technology."
        keywords={["innovative micro SAAS", "AI services", "quantum computing", "healthcare AI", "cybersecurity", "blockchain", "space technology", "autonomous vehicles", "IoT", "metaverse", "Zion Tech Group"]}
        ogImage="https://ziontechgroup.com/og-innovative-services-2025.jpg"
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                2025 Comprehensive
              </span>
              <br />
              <span className="text-white">Innovative Services Showcase</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover our revolutionary portfolio of AI-powered micro SAAS services, quantum computing solutions, 
              and cutting-edge technology platforms that are transforming industries worldwide.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                <span>20+ New Innovative Services</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                <span>AI & Quantum Computing</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                <span>Industry-Leading ROI</span>
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
              <div className="flex-1 w-full">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search innovative services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex-shrink-0">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  {serviceCategories.map(category => (
                    <option key={category} value={category} className="bg-gray-800 text-white">
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort Options */}
              <div className="flex-shrink-0">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="popularity" className="bg-gray-800 text-white">Most Popular</option>
                  <option value="rating" className="bg-gray-800 text-white">Highest Rated</option>
                  <option value="price" className="bg-gray-800 text-white">Price: Low to High</option>
                  <option value="name" className="bg-gray-800 text-white">Alphabetical</option>
                </select>
              </div>

              {/* View Mode Toggle */}
              <div className="flex-shrink-0">
                <div className="flex bg-white/20 rounded-xl p-1 border border-white/30">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg transition-all ${
                      viewMode === 'grid' 
                        ? 'bg-purple-500 text-white' 
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-lg transition-all ${
                      viewMode === 'list' 
                        ? 'bg-purple-500 text-white' 
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid/List */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={viewMode === 'grid' 
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
              : 'space-y-6'
            }
          >
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className={`bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 ${
                  viewMode === 'list' ? 'flex flex-col lg:flex-row' : ''
                }`}
              >
                {/* Service Header */}
                <div className={`p-6 ${viewMode === 'list' ? 'lg:w-1/3' : ''}`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{(service as any).icon || '🚀'}</div>
                    {(service as any).popular && (
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                        POPULAR
                      </div>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{(service as any).title || (service as any).name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{(service as any).tagline || service.description}</p>
                  
                  {/* Pricing */}
                  <div className="flex items-center gap-2 mb-4">
                    <DollarSign className="w-4 h-4 text-green-400" />
                    <span className="text-white font-semibold">
                      ${(service as any).price?.monthly || (service as any).pricing?.starter || 'Contact'}/month
                    </span>
                    <span className="text-gray-400 text-sm">
                      (${(service as any).price?.yearly || (service as any).pricing?.professional || 'Contact'}/year)
                    </span>
                  </div>

                  {/* Category */}
                  <div className="flex items-center gap-2 mb-4">
                    <Tag className="w-4 h-4 text-blue-400" />
                    <span className="text-blue-300 text-sm">{service.category}</span>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor((service as any).rating || 0)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-400'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-gray-300 text-sm">
                      {(service as any).rating || 0} ({(service as any).reviews || 0} reviews)
                    </span>
                  </div>
                </div>

                {/* Service Details */}
                <div className={`p-6 bg-white/5 ${viewMode === 'list' ? 'lg:w-2/3' : ''}`}>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  {/* Key Benefits */}
                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-green-400" />
                      Key Benefits
                    </h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 3).map((benefit, idx) => (
                        <li key={idx} className="text-gray-300 text-sm flex items-start gap-2">
                          <Check className="w-3 h-3 text-green-400 mt-1 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-blue-400" />
                      Key Features
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <span
                          key={idx}
                          className="bg-purple-500/20 text-purple-300 text-xs px-2 py-1 rounded-full border border-purple-500/30"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* ROI and Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400">
                        {(service as any).customers?.toLocaleString() || '0'}+
                      </div>
                      <div className="text-gray-400 text-xs">Customers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-400">
                        {(service as any).launchDate || 'N/A'}
                      </div>
                      <div className="text-gray-400 text-xs">Launch Date</div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="flex gap-3">
                    <a
                      href={(service as any).link || `/${(service as any).slug || service.id}`}
                      className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg text-center font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    <button className="bg-white/20 text-white px-4 py-2 rounded-lg border border-white/30 hover:bg-white/30 transition-all duration-300">
                      <Heart className="w-4 h-4" />
                    </button>
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
              <p className="text-gray-400 mb-6">
                Try adjusting your search terms or category filters
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All Services');
                }}
                className="bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition-all duration-300"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-3xl p-8 border border-purple-500/30"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get in touch with our team to discuss how our innovative services can drive your success
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="mt-6 text-gray-400">
              <p>364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Rocket, label: 'Total Services', value: allServices.length.toString() },
              { icon: Users, label: 'Active Customers', value: '25,000+' },
              { icon: Star, label: 'Average Rating', value: '4.8/5' },
              { icon: TrendingUp, label: 'Success Rate', value: '98%' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                  <stat.icon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}