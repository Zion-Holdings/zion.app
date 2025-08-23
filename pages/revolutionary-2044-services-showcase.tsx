import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Grid, List, Filter, Star, Users, TrendingUp,
  Brain, Atom, Shield, Target, Rocket, ArrowRight, Check,
  Zap, Globe, Lock, Cpu, Database, Cloud, Palette, Heart, Phone, Mail, MapPin,
  Sparkles, Infinity, Eye, Shield as ShieldIcon, Rocket as RocketIcon, Brain as BrainIcon
} from 'lucide-react';

// Import our new revolutionary 2044 services
import { revolutionary2044AIConsciousnessServices } from '../data/revolutionary-2044-ai-consciousness-services';
import { revolutionary2044QuantumComputingServices } from '../data/revolutionary-2044-quantum-computing-services';
import { revolutionary2044SpaceTechnologyServices } from '../data/revolutionary-2044-space-technology-services';

interface Service {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  type: string;
  pricing: {
    starter: string;
    professional: string;
    enterprise: string;
    custom: string;
  };
  features: string[];
  benefits: string[];
  useCases: string[];
  marketSize: string;
  targetAudience: string;
  competitiveAdvantage: string;
  contact: string;
  mobile: string;
  address: string;
  website: string;
  slug: string;
  color: string;
  icon: string;
  popular: boolean;
  launchDate: string;
  customers: number;
  rating: number;
  reviews: number;
}

const Revolutionary2044ServicesShowcase: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'popularity' | 'category'>('name');
  const [isLoading, setIsLoading] = useState(true);

  // Combine all revolutionary 2044 services
  const allServices = [
    ...revolutionary2044AIConsciousnessServices,
    ...revolutionary2044QuantumComputingServices,
    ...revolutionary2044SpaceTechnologyServices
  ];

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(allServices.map(service => service.category)))];

  // Filter and sort services
  const filteredServices = allServices
    .filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.category.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price': {
          const aPrice = parseFloat(a.pricing.starter.replace(/[^0-9.]/g, ''));
          const bPrice = parseFloat(b.pricing.starter.replace(/[^0-9.]/g, ''));
          return aPrice - bPrice;
        }
        case 'popularity':
          return b.rating - a.rating;
        case 'category':
          return a.category.localeCompare(b.category);
        default:
          return a.name.localeCompare(b.name);
      }
    });

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const stats = [
    { number: "9", label: "Revolutionary Services", icon: Sparkles, color: "from-purple-500 to-pink-500" },
    { number: "$1.2T+", label: "Total Market Size", icon: TrendingUp, color: "from-blue-500 to-cyan-500" },
    { number: "2044", label: "Future Technology", icon: Infinity, color: "from-emerald-500 to-teal-500" },
    { number: "99.9%", label: "Success Rate", icon: Star, color: "from-yellow-500 to-orange-500" }
  ];

  const handleContact = (service: Service) => {
    window.location.href = `mailto:${service.contact}?subject=Inquiry about ${service.name}`;
  };

  const handleLearnMore = (service: Service) => {
    window.location.href = service.slug;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-500 mx-auto mb-8"></div>
          <h2 className="text-2xl font-bold text-white mb-4">Loading Revolutionary 2044 Services</h2>
          <p className="text-gray-400">Preparing the future of technology...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <SEO 
        title="Revolutionary 2044 Services Showcase | Zion Tech Group"
        description="Discover the future of technology with our revolutionary 2044 services featuring AI consciousness, quantum computing, and space technology innovations."
        keywords={["AI consciousness", "quantum computing", "space technology", "2044", "revolutionary services", "Zion Tech Group"]}
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
              Revolutionary 2044
            </h1>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Services Showcase
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Experience the future of technology with our groundbreaking AI consciousness, quantum computing, and space technology services that will revolutionize the world by 2044.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              {/* Search */}
              <div className="flex-1 w-full">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search revolutionary 2044 services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex-shrink-0">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* View Mode */}
              <div className="flex-shrink-0">
                <div className="flex bg-gray-700/50 rounded-xl p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'}`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'}`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Sort */}
              <div className="flex-shrink-0">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  <option value="name">Sort by Name</option>
                  <option value="price">Sort by Price</option>
                  <option value="popularity">Sort by Popularity</option>
                  <option value="category">Sort by Category</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {filteredServices.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-6">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-4">No services found</h3>
              <p className="text-gray-400">Try adjusting your search criteria or filters.</p>
            </motion.div>
          ) : viewMode === 'grid' ? (
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  variants={fadeInUp}
                  className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-500/50 hover:bg-gray-800/70 transition-all duration-300 relative overflow-hidden"
                >
                  {/* Popular Badge */}
                  {service.popular && (
                    <div className="absolute top-4 right-4">
                      <span className="inline-block px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold rounded-full">
                        Popular
                      </span>
                    </div>
                  )}

                  {/* Service Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>

                  {/* Service Info */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-2">
                    {service.tagline}
                  </p>

                  {/* Price */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-cyan-400">
                      {service.pricing.starter}
                      <span className="text-sm text-gray-400">/month</span>
                    </div>
                    <div className="flex items-center space-x-1 text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm">{service.rating}</span>
                      <span className="text-gray-400 text-xs">({service.reviews})</span>
                    </div>
                  </div>

                  {/* Category */}
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-gray-700 text-cyan-400 text-xs font-medium rounded-full">
                      {service.category}
                    </span>
                  </div>

                  {/* Features Preview */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-xs text-gray-400">
                          <Check className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 3 && (
                        <li className="text-xs text-cyan-400">
                          +{service.features.length - 3} more features
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleLearnMore(service)}
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                    >
                      Learn More
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleContact(service)}
                      className="px-4 py-2 border border-cyan-400 text-cyan-400 rounded-lg text-sm font-medium hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
                    >
                      Contact
                    </motion.button>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="space-y-6"
            >
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  variants={fadeInUp}
                  className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-500/50 hover:bg-gray-800/70 transition-all duration-300"
                >
                  <div className="flex items-start space-x-6">
                    {/* Service Icon */}
                    <div className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                      {service.icon}
                    </div>

                    {/* Service Details */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                            {service.name}
                          </h3>
                          <p className="text-gray-300 mb-3 text-lg">
                            {service.tagline}
                          </p>
                          <div className="flex items-center space-x-4 mb-4">
                            <span className="inline-block px-3 py-1 bg-gray-700 text-cyan-400 text-sm font-medium rounded-full">
                              {service.category}
                            </span>
                            {service.popular && (
                              <span className="inline-block px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-sm font-bold rounded-full">
                                Popular
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-3xl font-bold text-cyan-400 mb-1">
                            {service.pricing.starter}
                            <span className="text-lg text-gray-400">/month</span>
                          </div>
                          <div className="flex items-center justify-end space-x-1 text-yellow-400 mb-2">
                            <Star className="w-4 h-4 fill-current" />
                            <span className="text-sm">{service.rating}</span>
                            <span className="text-gray-400 text-xs">({service.reviews})</span>
                          </div>
                          <div className="text-sm text-gray-400">
                            {service.customers} customers
                          </div>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Features:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {service.features.slice(0, 6).map((feature, idx) => (
                            <div key={idx} className="flex items-center text-sm text-gray-400">
                              <Check className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex space-x-4">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleLearnMore(service)}
                          className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                        >
                          Learn More
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleContact(service)}
                          className="px-6 py-3 border border-cyan-400 text-cyan-400 rounded-lg font-medium hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
                        >
                          Contact Sales
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Shape the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us to learn more about our revolutionary 2044 services and how they can transform your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="mailto:kleber@ziontechgroup.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Us
              </motion.a>
              <motion.a
                href="tel:+13024640950"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-xl hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </motion.a>
            </div>
            <div className="mt-8 text-gray-400">
              <p>Mobile: +1 302 464 0950</p>
              <p>Email: kleber@ziontechgroup.com</p>
              <p>Address: 364 E Main St STE 1008 Middletown DE 19709</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Revolutionary2044ServicesShowcase;