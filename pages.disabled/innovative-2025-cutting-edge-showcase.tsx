import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Grid, List, Filter,
  Brain, Atom, Shield, Target, Rocket,
  ArrowRight, Check, Palette, Heart, Truck, GraduationCap,
  Building, Globe, Zap, Lock, ChartBar, Users,
  Star, TrendingUp, Clock, DollarSign, Award
} from 'lucide-react';

// Import our new innovative services
import { innovative2025CuttingEdgeServices } from '../data/innovative-2025-cutting-edge-services';
import { innovative2025EnterpriseSolutions } from '../data/innovative-2025-enterprise-solutions';
import { innovative2025IndustrySolutions } from '../data/innovative-2025-industry-solutions';

const Innovative2025CuttingEdgeShowcase: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'rating' | 'popularity'>('popularity');

  // Combine all services
  const allServices = [
    ...innovative2025CuttingEdgeServices,
    ...innovative2025EnterpriseSolutions,
    ...innovative2025IndustrySolutions
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
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price':
          return parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', ''));
        case 'rating':
          return b.rating - a.rating;
        case 'popularity':
          return b.customers - a.customers;
        default:
          return 0;
      }
    });

  const getServiceIcon = (icon: string) => {
    return <span className="text-4xl">{icon}</span>;
  };

  const getPriceDisplay = (price: string, period: string) => {
    return (
      <div className="text-center">
        <div className="text-3xl font-bold text-white">{price}</div>
        <div className="text-sm text-gray-300">{period}</div>
      </div>
    );
  };

  const getRatingStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star
          key={i}
          className={`w-4 h-4 ${i <= rating ? 'text-yellow-400 fill-current' : 'text-gray-400'}`}
        />
      );
    }
    return stars;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="Innovative 2025 Cutting-Edge Services | Zion Tech Group"
        description="Discover our comprehensive suite of innovative 2025 cutting-edge micro SAAS, IT, and AI services. Transform your business with next-generation solutions."
        keywords={["innovative services 2025", "cutting-edge technology", "micro SAAS", "AI services", "IT solutions", "enterprise solutions", "industry solutions"]}
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Innovative 2025
              </span>
              <br />
              <span className="text-white">Cutting-Edge Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business with our comprehensive suite of next-generation micro SAAS, IT infrastructure, and AI-powered solutions designed for the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2 text-white">
                <Award className="w-6 h-6 text-yellow-400" />
                <span>30+ Innovative Services</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <TrendingUp className="w-6 h-6 text-green-400" />
                <span>Market-Leading Solutions</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <Zap className="w-6 h-6 text-blue-400" />
                <span>AI-Powered Technology</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              {/* Search */}
              <div className="flex-1 w-full lg:w-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search innovative services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex gap-2 flex-wrap">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Sort and View */}
              <div className="flex gap-4 items-center">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="popularity">Most Popular</option>
                  <option value="rating">Highest Rated</option>
                  <option value="price">Price</option>
                  <option value="name">Name</option>
                </select>

                <div className="flex bg-white/20 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-md transition-all duration-200 ${
                      viewMode === 'grid' ? 'bg-blue-600 text-white' : 'text-white hover:bg-white/20'
                    }`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-md transition-all duration-200 ${
                      viewMode === 'list' ? 'bg-blue-600 text-white' : 'text-white hover:bg-white/20'
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
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">
              {filteredServices.length} Innovative Services Found
            </h2>
            <p className="text-gray-400">
              Discover cutting-edge solutions designed to transform your business operations
            </p>
          </div>

          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                    {/* Popular Badge */}
                    {service.popular && (
                      <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                        POPULAR
                      </div>
                    )}

                    {/* Service Icon and Header */}
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-white/20 to-white/10 mb-4 group-hover:scale-110 transition-transform duration-300">
                        {getServiceIcon(service.icon)}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                        {service.name}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {service.tagline}
                      </p>
                    </div>

                    {/* Price */}
                    <div className="mb-6">
                      {getPriceDisplay(service.price, service.period)}
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-400" />
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {service.features.slice(0, 4).map((feature, idx) => (
                          <li key={idx} className="text-gray-300 text-sm flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                        {service.features.length > 4 && (
                          <li className="text-blue-400 text-sm">
                            +{service.features.length - 4} more features
                          </li>
                        )}
                      </ul>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                      <div>
                        <div className="text-white font-bold">{service.customers.toLocaleString()}</div>
                        <div className="text-gray-400 text-xs">Customers</div>
                      </div>
                      <div>
                        <div className="text-white font-bold">{service.rating}</div>
                        <div className="text-gray-400 text-xs">Rating</div>
                      </div>
                      <div>
                        <div className="text-white font-bold">{service.reviews.toLocaleString()}</div>
                        <div className="text-gray-400 text-xs">Reviews</div>
                      </div>
                    </div>

                    {/* Market Info */}
                    <div className="mb-6 p-4 bg-white/5 rounded-xl">
                      <div className="text-center">
                        <div className="text-white font-semibold mb-2">Market Position</div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {service.marketPosition}
                        </p>
                      </div>
                    </div>

                    {/* ROI */}
                    <div className="mb-6 p-4 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl border border-green-500/30">
                      <div className="text-center">
                        <div className="text-white font-semibold mb-2 flex items-center justify-center gap-2">
                          <TrendingUp className="w-4 h-4 text-green-400" />
                          Expected ROI
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {service.roi}
                        </p>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <a
                      href={service.link}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 group"
                    >
                      Explore Service
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>

                    {/* Contact Info */}
                    <div className="mt-4 text-center">
                      <p className="text-gray-400 text-xs">
                        Contact: {service.contactInfo.email}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Left Side - Icon and Basic Info */}
                    <div className="lg:w-1/4 text-center lg:text-left">
                      <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-white/20 to-white/10 mb-4">
                        {getServiceIcon(service.icon)}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {service.name}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed mb-4">
                        {service.tagline}
                      </p>
                      {getPriceDisplay(service.price, service.period)}
                    </div>

                    {/* Center - Description and Features */}
                    <div className="lg:w-2/4">
                      <p className="text-gray-300 text-sm leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        {service.features.slice(0, 6).map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right Side - Stats and CTA */}
                    <div className="lg:w-1/4 text-center lg:text-right">
                      <div className="mb-4">
                        <div className="flex justify-center lg:justify-end mb-2">
                          {getRatingStars(service.rating)}
                        </div>
                        <div className="text-gray-400 text-sm">
                          {service.rating}/5 ({service.reviews} reviews)
                        </div>
                      </div>

                      <div className="mb-4 space-y-2 text-sm">
                        <div className="text-gray-300">
                          <span className="text-gray-400">Customers:</span> {service.customers.toLocaleString()}
                        </div>
                        <div className="text-gray-300">
                          <span className="text-gray-400">Setup:</span> {service.setupTime}
                        </div>
                        <div className="text-gray-300">
                          <span className="text-gray-400">Trial:</span> {service.trialDays} days
                        </div>
                      </div>

                      <a
                        href={service.link}
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 group"
                      >
                        Explore Service
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Contact our team to learn more about our innovative services and how they can help your organization thrive in 2025 and beyond.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="text-white font-semibold">Expert Team</div>
                <div className="text-gray-400 text-sm">Dedicated specialists</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div className="text-white font-semibold">24/7 Support</div>
                <div className="text-gray-400 text-sm">Always available</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div className="text-white font-semibold">Proven Results</div>
                <div className="text-gray-400 text-sm">Success guaranteed</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Contact Us
              </a>
              <a
                href="tel:+13024640950"
                className="bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 border border-white/30"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Innovative2025CuttingEdgeShowcase;