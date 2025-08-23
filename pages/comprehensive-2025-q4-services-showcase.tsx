import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Grid, List, Filter,
  Brain, Atom, Shield, Target, Rocket,
  ArrowRight, Check, Palette, Heart, Truck, GraduationCap,
  Building, Star, Users, TrendingUp, Zap, Globe,
  Phone, Mail, MapPin, ExternalLink
} from 'lucide-react';

// Import our new service data
import { innovative2025Q4NewServices } from '../data/innovative-2025-q4-new-services';
import { advancedITInfrastructureServices2025 } from '../data/advanced-it-infrastructure-services-2025';
import { comprehensiveServicesAdvertising2025, marketingContent } from '../data/comprehensive-services-advertising-2025';

const Comprehensive2025Q4ServicesShowcase: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'rating' | 'popularity'>('popularity');

  // Combine all services
  const allServices = [
    ...innovative2025Q4NewServices,
    ...advancedITInfrastructureServices2025
  ];

  // Filter and sort services
  const filteredServices = allServices
    .filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price':
          return a.price.monthly - b.price.monthly;
        case 'rating':
          return b.rating - a.rating;
        case 'popularity':
        default:
          return b.customers - a.customers;
      }
    });

  // Get unique categories
  const categories = [
    { id: 'all', name: 'All Services', icon: <Grid className="w-5 h-5" />, count: allServices.length },
    { id: 'AI & Analytics', name: 'AI & Analytics', icon: <Brain className="w-5 h-5" />, count: allServices.filter(s => s.category === 'AI & Analytics').length },
    { id: 'Cybersecurity', name: 'Cybersecurity', icon: <Shield className="w-5 h-5" />, count: allServices.filter(s => s.category === 'Cybersecurity').length },
    { id: 'DevOps & Automation', name: 'DevOps & Automation', icon: <Zap className="w-5 h-5" />, count: allServices.filter(s => s.category === 'DevOps & Automation').length },
    { id: 'Customer Experience', name: 'Customer Experience', icon: <Users className="w-5 h-5" />, count: allServices.filter(s => s.category === 'Customer Experience').length },
    { id: 'FinTech', name: 'FinTech', icon: <TrendingUp className="w-5 h-5" />, count: allServices.filter(s => s.category === 'FinTech').length },
    { id: 'Healthcare & Biotech', name: 'Healthcare & Biotech', icon: <Heart className="w-5 h-5" />, count: allServices.filter(s => s.category === 'Healthcare & Biotech').length },
    { id: 'Education & eLearning', name: 'Education & eLearning', icon: <GraduationCap className="w-5 h-5" />, count: allServices.filter(s => s.category === 'Education & eLearning').length },
    { id: 'Supply Chain & Logistics', name: 'Supply Chain & Logistics', icon: <Truck className="w-5 h-5" />, count: allServices.filter(s => s.category === 'Supply Chain & Logistics').length },
    { id: 'Marketing & Advertising', name: 'Marketing & Advertising', icon: <Target className="w-5 h-5" />, count: allServices.filter(s => s.category === 'Marketing & Advertising').length },
    { id: 'Cloud Infrastructure', name: 'Cloud Infrastructure', icon: <Globe className="w-5 h-5" />, count: allServices.filter(s => s.category === 'Cloud Infrastructure').length },
    { id: 'Network Security', name: 'Network Security', icon: <Shield className="w-5 h-5" />, count: allServices.filter(s => s.category === 'Network Security').length },
    { id: 'Data Management', name: 'Data Management', icon: <Building className="w-5 h-5" />, count: allServices.filter(s => s.category === 'Data Management').length },
    { id: 'Edge Computing', name: 'Edge Computing', icon: <Atom className="w-5 h-5" />, count: allServices.filter(s => s.category === 'Edge Computing').length },
    { id: 'Container & Kubernetes', name: 'Container & Kubernetes', icon: <Rocket className="w-5 h-5" />, count: allServices.filter(s => s.category === 'Container & Kubernetes').length },
    { id: 'Database & Storage', name: 'Database & Storage', icon: <Building className="w-5 h-5" />, count: allServices.filter(s => s.category === 'Database & Storage').length },
    { id: 'API Management', name: 'API Management', icon: <ExternalLink className="w-5 h-5" />, count: allServices.filter(s => s.category === 'API Management').length }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        data={{
          pageTitle: "Comprehensive 2025 Q4 Services Showcase - Zion Tech Group",
          pageDescription: "Discover our comprehensive portfolio of innovative micro SAAS services, IT solutions, and AI-powered platforms. Transform your business with cutting-edge technology.",
          pageKeywords: ["micro SAAS", "IT services", "AI services", "business intelligence", "cybersecurity", "DevOps automation", "customer experience", "fintech", "healthcare technology"]
        }}
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
                Comprehensive 2025 Q4
              </span>
              <br />
              <span className="text-white">Services Showcase</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover our complete portfolio of innovative micro SAAS services, enterprise IT solutions, 
              and AI-powered platforms designed to transform your business and drive growth.
            </p>
            
            {/* Company Stats */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">{marketingContent.customerSuccess.totalCustomers}</div>
                <div className="text-sm text-gray-400">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">{marketingContent.customerSuccess.averageROI}</div>
                <div className="text-sm text-gray-400">Average ROI</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">{marketingContent.customerSuccess.customerSatisfaction}</div>
                <div className="text-sm text-gray-400">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">{marketingContent.customerSuccess.timeToValue}</div>
                <div className="text-sm text-gray-400">Time to Value</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400">{marketingContent.customerSuccess.supportResponse}</div>
                <div className="text-sm text-gray-400">Support Response</div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-6">Ready to Transform Your Business?</h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center">
                  <Phone className="w-8 h-8 text-blue-400 mb-2" />
                  <div className="text-white font-semibold">Call Us</div>
                  <div className="text-gray-300">{marketingContent.companyOverview.contact.phone}</div>
                </div>
                <div className="flex flex-col items-center">
                  <Mail className="w-8 h-8 text-green-400 mb-2" />
                  <div className="text-white font-semibold">Email Us</div>
                  <div className="text-gray-300">{marketingContent.companyOverview.contact.email}</div>
                </div>
                <div className="flex flex-col items-center">
                  <MapPin className="w-8 h-8 text-purple-400 mb-2" />
                  <div className="text-white font-semibold">Visit Us</div>
                  <div className="text-gray-300">{marketingContent.companyOverview.contact.address}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-white/20 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-blue-500 text-white' : 'bg-white/20 text-gray-300'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-blue-500 text-white' : 'bg-white/20 text-gray-300'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-4 py-2 bg-white/20 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="popularity">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="price">Price: Low to High</option>
                <option value="name">Name: A to Z</option>
              </select>
            </div>

            {/* Category Filters */}
            <div className="mt-6 flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-blue-500 text-white'
                      : 'bg-white/20 text-gray-300 hover:bg-white/30'
                  }`}
                >
                  {category.icon}
                  <span className="ml-2">{category.name}</span>
                  <span className="ml-2 bg-white/20 px-2 py-1 rounded-full text-xs">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid/List */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">
              {filteredServices.length} Services Found
            </h2>
            <p className="text-gray-400">
              Showing {filteredServices.length} of {allServices.length} total services
            </p>
          </div>

          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{service.icon}</div>
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white text-sm">{service.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{service.tagline}</p>

                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">
                      {service.category}
                    </span>
                  </div>

                  <div className="mb-4">
                    <div className="text-2xl font-bold text-white">${service.price.monthly}/month</div>
                    <div className="text-gray-400 text-sm">or ${service.price.yearly}/year</div>
                  </div>

                  <div className="mb-4">
                    <div className="text-gray-300 text-sm mb-2">Key Benefits:</div>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 3).map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-gray-300 text-sm">
                          <Check className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-gray-400 text-sm">
                      {service.customers.toLocaleString()}+ customers
                    </div>
                    <a
                      href={service.link}
                      className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20"
                >
                  <div className="flex items-center gap-6">
                    <div className="text-4xl">{service.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-white">{service.name}</h3>
                        <div className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-white text-sm">{service.rating}</span>
                        </div>
                      </div>
                      <p className="text-gray-300 mb-2">{service.tagline}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full">
                          {service.category}
                        </span>
                        <span>{service.customers.toLocaleString()}+ customers</span>
                        <span>${service.price.monthly}/month</span>
                      </div>
                    </div>
                    <a
                      href={service.link}
                      className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Special Promotions Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Special Launch Offers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {marketingContent.specialPromotions.map((promo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-lg rounded-2xl p-6 border border-blue-400/30"
              >
                <h3 className="text-xl font-bold text-white mb-3">{promo.title}</h3>
                <p className="text-gray-300 mb-4">{promo.description}</p>
                <div className="bg-white/20 rounded-lg p-3 text-center">
                  <div className="text-sm text-gray-300 mb-1">Use Code:</div>
                  <div className="text-xl font-bold text-blue-400">{promo.code}</div>
                </div>
                <div className="text-xs text-gray-400 text-center mt-3">
                  Valid until {promo.validUntil}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-lg rounded-2xl p-12 border border-blue-400/30"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses that have already transformed their operations 
              with our innovative technology solutions.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <Phone className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <div className="text-white font-semibold mb-1">Call Us</div>
                <div className="text-gray-300">{marketingContent.companyOverview.contact.phone}</div>
              </div>
              <div>
                <Mail className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <div className="text-white font-semibold mb-1">Email Us</div>
                <div className="text-gray-300">{marketingContent.companyOverview.contact.email}</div>
              </div>
              <div>
                <MapPin className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <div className="text-white font-semibold mb-1">Visit Us</div>
                <div className="text-gray-300">{marketingContent.companyOverview.contact.address}</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`mailto:${marketingContent.companyOverview.contact.email}`}
                className="inline-flex items-center px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 font-semibold"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get Started Today
              </a>
              <a
                href={marketingContent.companyOverview.website}
                className="inline-flex items-center px-8 py-3 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors duration-200 font-semibold"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Visit Website
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Comprehensive2025Q4ServicesShowcase;