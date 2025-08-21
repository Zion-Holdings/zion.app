import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, TrendingUp, Users, Zap, ArrowRight, CheckCircle, Clock, DollarSign } from 'lucide-react';
import Link from 'next/link';

interface Service {
  id: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
  icon: string;
  color: string;
  textColor: string;
  link: string;
  marketPosition: string;
  targetAudience: string;
  trialDays: number;
  setupTime: string;
  category: string;
  realService: boolean;
  technology: string[];
  integrations: string[];
  useCases: string[];
  roi: string;
  competitors: string[];
  marketSize: string;
  growthRate: string;
  variant: string;
  contactInfo: {
    mobile: string;
    email: string;
    address: string;
    website: string;
  };
  realImplementation: boolean;
  implementationDetails: string;
  launchDate: string;
  customers: number;
  rating: number;
  reviews: number;
}

interface Enhanced2026ServicesShowcaseV4Props {
  services: Service[];
  title?: string;
  subtitle?: string;
  showFilters?: boolean;
}

const Enhanced2026ServicesShowcaseV4: React.FC<Enhanced2026ServicesShowcaseV4Props> = ({
  services,
  title = "Revolutionary 2026 Services",
  subtitle = "Experience the future of technology with our cutting-edge solutions",
  showFilters = true
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('name');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['all', 'AI', 'Quantum', 'Enterprise', 'Micro SaaS', 'Emerging Tech', 'Cybersecurity', 'Blockchain'];
  const priceRanges = [
    { id: 'all', label: 'All Prices' },
    { id: 'low', label: 'Under $100', min: 0, max: 100 },
    { id: 'medium', label: '$100 - $500', min: 100, max: 500 },
    { id: 'high', label: '$500 - $1000', min: 500, max: 1000 },
    { id: 'enterprise', label: '$1000+', min: 1000, max: Infinity }
  ];

  const filteredServices = services.filter(service => {
    const matchesCategory = selectedCategory === 'all' || 
      service.category.toLowerCase().includes(selectedCategory.toLowerCase());
    
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.category.toLowerCase().includes(searchTerm.toLowerCase());

    let matchesPrice = true;
    if (selectedPriceRange !== 'all') {
      const price = parseInt(service.price.replace(/[^0-9]/g, ''));
      const range = priceRanges.find(r => r.id === selectedPriceRange);
      if (range) {
        matchesPrice = price >= range.min && price <= range.max;
      }
    }

    return matchesCategory && matchesSearch && matchesPrice;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return parseInt(a.price.replace(/[^0-9]/g, '')) - parseInt(b.price.replace(/[^0-9]/g, ''));
      case 'rating':
        return b.rating - a.rating;
      case 'customers':
        return b.customers - a.customers;
      case 'name':
      default:
        return a.name.localeCompare(b.name);
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
    <section className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            {title}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </motion.div>

        {/* Filters */}
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12 space-y-6"
          >
            {/* Search */}
            <div className="flex justify-center">
              <div className="relative max-w-md w-full">
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <Zap className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>

            {/* Filter Controls */}
            <div className="flex flex-wrap justify-center gap-4">
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category
                        ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
                    }`}
                  >
                    {category === 'all' ? 'All Categories' : category}
                  </button>
                ))}
              </div>

              {/* Price Range Filter */}
              <select
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                {priceRanges.map((range) => (
                  <option key={range.id} value={range.id} className="bg-gray-800 text-white">
                    {range.label}
                  </option>
                ))}
              </select>

              {/* Sort By */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <option value="name" className="bg-gray-800 text-white">Sort by Name</option>
                <option value="price" className="bg-gray-800 text-white">Sort by Price</option>
                <option value="rating" className="bg-gray-800 text-white">Sort by Rating</option>
                <option value="customers" className="bg-gray-800 text-white">Sort by Customers</option>
              </select>
            </div>
          </motion.div>
        )}

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {sortedServices.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                layout
                className="group relative"
              >
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-full transition-all duration-300 hover:bg-white/10 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/25">
                  {/* Popular Badge */}
                  {service.popular && (
                    <div className="absolute -top-3 left-6 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      ⭐ Popular
                    </div>
                  )}

                  {/* Service Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`text-4xl ${service.textColor}`}>
                      {service.icon}
                    </div>
                    <div className="flex items-center space-x-1 text-yellow-400">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="text-sm font-medium">{service.rating}</span>
                      <span className="text-gray-400 text-sm">({service.reviews})</span>
                    </div>
                  </div>

                  {/* Service Info */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 text-sm mb-3">
                    {service.tagline}
                  </p>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Price */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-white">
                      {service.price}
                      <span className="text-gray-400 text-lg">{service.period}</span>
                    </div>
                    <div className="text-sm text-gray-400">
                      {service.trialDays} days free
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                    <div className="space-y-1">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="flex items-center text-xs text-gray-400">
                          <CheckCircle className="h-3 w-3 text-cyan-400 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Market Info */}
                  <div className="space-y-2 mb-6 text-xs">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Market Size:</span>
                      <span className="text-white">{service.marketSize}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Growth Rate:</span>
                      <span className="text-green-400">{service.growthRate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Customers:</span>
                      <span className="text-white">{service.customers.toLocaleString()}</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link
                    href={service.link}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-cyan-500/25"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12 text-gray-400"
        >
          Showing {sortedServices.length} of {services.length} services
        </motion.div>
      </div>
    </section>
  );
};

export default Enhanced2026ServicesShowcaseV4;