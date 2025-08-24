import { useState } from 'react';
import { motion } from 'framer-motion';
import { COMPREHENSIVE_SERVICES } from '../data/comprehensiveServices';
import { Link } from 'react-router-dom';
import { Star, CheckCircle } from 'lucide-react';

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredServices = COMPREHENSIVE_SERVICES.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          (service.tags && service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())));

    return matchesCategory && matchesSearch;
  });

  const categories = ['all', ...Array.from(new Set(COMPREHENSIVE_SERVICES.map(service => service.category)))];

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
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-light text-white">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-zion-cyan/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-zion-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-zion-cyan/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-zion-purple/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '6s' }}></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan bg-clip-text text-transparent animate-neon-pulse"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Our Services
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl lg:text-3xl text-zion-slate-light mb-8 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Discover our comprehensive range of AI, IT, and Micro SaaS solutions designed to transform your business
            </motion.p>
          </motion.div>
        </section>

        {/* Service Categories Showcase */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Explore Our Service Categories
            </h2>
            <p className="text-zion-slate-light text-lg">
              From AI-powered solutions to enterprise IT services, we cover every aspect of modern business technology
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-16"
          >
            {categories.filter(cat => cat !== 'all').map((category) => {
              const serviceCount = COMPREHENSIVE_SERVICES.filter(s => s.category === category).length;
              const avgRating = COMPREHENSIVE_SERVICES.filter(s => s.category === category)
                .reduce((acc, s) => acc + s.rating, 0) / serviceCount;
              
              return (
                <motion.div
                  key={category}
                  variants={itemVariants}
                  className="text-center p-6 bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-xl hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedCategory(category)}
                >
                  <div className="text-4xl mb-3">🚀</div>
                  <h3 className="font-semibold text-white mb-2">{category}</h3>
                  <p className="text-zion-slate-light text-sm mb-3">{serviceCount} services</p>
                  <div className="flex items-center justify-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${
                          i < Math.floor(avgRating) ? 'text-yellow-400 fill-current' : 'text-zion-slate-light'
                        }`}
                      />
                    ))}
                    <span className="text-zion-slate-light text-xs ml-1">
                      {avgRating.toFixed(1)}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </section>

        {/* Statistics Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-zion-cyan mb-2">
                {COMPREHENSIVE_SERVICES.length}+
              </div>
              <div className="text-zion-slate-light">Total Services</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-zion-purple mb-2">
                {categories.length - 1}
              </div>
              <div className="text-zion-slate-light">Service Categories</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-zion-cyan mb-2">
                {Math.round(COMPREHENSIVE_SERVICES.reduce((acc, s) => acc + s.rating, 0) / COMPREHENSIVE_SERVICES.length * 10) / 10}
              </div>
              <div className="text-zion-slate-light">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-zion-purple mb-2">
                {COMPREHENSIVE_SERVICES.reduce((acc, s) => acc + s.reviewCount, 0)}+
              </div>
              <div className="text-zion-slate-light">Customer Reviews</div>
            </div>
          </motion.div>
        </section>

        {/* Search and Filter Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Search */}
              <div>
                <label htmlFor="search" className="block text-sm font-medium text-zion-slate-light mb-2">
                  Search Services
                </label>
                <input
                  type="text"
                  id="search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search by name, description, or tags..."
                  className="w-full px-4 py-3 bg-zion-blue-light/20 border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
                />
              </div>

              {/* Category Filter */}
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-zion-slate-light mb-2">
                  Filter by Category
                </label>
                <select
                  id="category"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-zion-blue-light/20 border border-zion-purple/30 rounded-lg text-white focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
                >
                  {categories.map((category) => (
                    <option key={category} value={category} className="bg-zion-blue-dark text-white">
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Services */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Featured Services
            </h2>
            <p className="text-zion-slate-light text-lg">
              Our most popular and highly-rated solutions that customers love
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            {COMPREHENSIVE_SERVICES
              .filter(service => service.badge === 'Popular' || service.badge === 'Featured')
              .slice(0, 6)
              .map((service) => (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  className="group bg-gradient-to-br from-zion-blue-light/20 to-zion-purple/10 backdrop-blur-md border border-zion-cyan/30 rounded-2xl p-8 hover:border-zion-cyan/50 hover:shadow-2xl hover:shadow-zion-cyan/20 transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="mb-4">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full border ${
                      service.badge === 'Popular' ? 'bg-zion-purple/20 text-zion-purple border-zion-purple/30' :
                      'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                    }`}>
                      {service.badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-zion-cyan transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-zion-slate-light text-sm mb-4 line-clamp-3">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xl font-bold text-zion-cyan">
                      {service.price.currency}{service.price.monthly.toLocaleString()}
                    </span>
                    <span className="text-zion-slate-light text-sm">/month</span>
                  </div>
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-zion-slate-light'
                        }`}
                      />
                    ))}
                    <span className="text-zion-slate-light text-sm ml-2">
                      {service.rating} ({service.reviewCount})
                    </span>
                  </div>
                  <Link
                    to={service.link}
                    className="w-full px-4 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium text-center hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105 block"
                  >
                    Learn More
                  </Link>
                </motion.div>
              ))}
          </motion.div>
        </section>

        {/* Services Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          >
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-8 hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 transform hover:-translate-y-2"
              >
                {/* Service Header */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-xs font-medium rounded-full border border-zion-cyan/30">
                      {service.category}
                    </span>
                    {service.badge && (
                      <span className={`px-3 py-1 text-xs font-medium rounded-full border ${
                        service.badge === 'Popular' ? 'bg-zion-purple/20 text-zion-purple border-zion-purple/30' :
                        service.badge === 'New' ? 'bg-green-500/20 text-green-400 border-green-500/30' :
                        service.badge === 'Featured' ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' :
                        service.badge === 'Premium' ? 'bg-zion-cyan/20 text-zion-cyan border-zion-cyan/30' :
                        'bg-zion-purple/20 text-zion-purple border-zion-purple/30'
                      }`}>
                        {service.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-zion-cyan transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-zion-slate-light leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>

                {/* Pricing */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-bold text-zion-cyan">
                      {service.price.currency}{service.price.monthly.toLocaleString()}
                    </span>
                    <span className="text-zion-slate-light text-sm">/month</span>
                  </div>
                  {service.price.yearly && (
                    <div className="text-zion-slate-light text-sm">
                      {service.price.currency}{service.price.yearly.toLocaleString()}/year (Save {Math.round((1 - service.price.yearly / (service.price.monthly * 12)) * 100)}%)
                    </div>
                  )}
                </div>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-zion-purple mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="text-xs text-zion-slate-light flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {service.tags.slice(0, 4).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-zion-blue-light/20 text-zion-slate-light text-xs rounded border border-zion-blue-light/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Rating and Reviews */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-zion-slate-light'
                        }`}
                      />
                    ))}
                    <span className="text-zion-slate-light text-sm ml-2">
                      {service.rating} ({service.reviewCount} reviews)
                    </span>
                  </div>
                  <div className="text-zion-cyan text-sm font-medium">
                    AI Score: {service.aiScore}%
                  </div>
                </div>

                {/* Contact Info */}
                <div className="mb-6 p-4 bg-zion-blue-light/5 rounded-lg border border-zion-cyan/20">
                  <h4 className="text-sm font-semibold text-zion-cyan mb-2">Contact Information:</h4>
                  <p>📧 {service.author.name}</p>
                  <p>📱 {service.author.id}</p>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <Link
                    to={service.link}
                    className="flex-1 px-4 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium text-center hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105"
                  >
                    Learn More
                  </Link>
                  <Link
                    to="/contact"
                    className="px-6 py-3 border border-zion-cyan text-zion-cyan rounded-lg font-medium hover:bg-zion-cyan hover:text-white transition-all duration-300"
                  >
                    Get Quote
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* No Results Message */}
          {filteredServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-zion-slate-light mb-6">
                Try adjusting your search terms or category filter
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </section>

        {/* Why Choose Zion Tech Group */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-4xl mx-auto">
              We're not just another tech company. We're your strategic technology partner, committed to delivering innovative solutions that drive real business results.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            <motion.div
              variants={itemVariants}
              className="text-center p-8 bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300"
            >
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-white mb-4">Innovation First</h3>
              <p className="text-zion-slate-light">
                We stay ahead of the curve with cutting-edge AI, blockchain, and IoT technologies that give you a competitive edge.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="text-center p-8 bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300"
            >
              <div className="text-5xl mb-4">💎</div>
              <h3 className="text-xl font-bold text-white mb-4">Premium Quality</h3>
              <p className="text-zion-slate-light">
                Our services consistently receive 4.8+ star ratings from thousands of satisfied customers worldwide.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="text-center p-8 bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300"
            >
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-4">Lightning Fast</h3>
              <p className="text-zion-slate-light">
                Get up and running in days, not months. Our solutions are designed for rapid deployment and immediate ROI.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="text-center p-8 bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300"
            >
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-white mb-4">Enterprise Security</h3>
              <p className="text-zion-slate-light">
                Bank-level security and compliance standards ensure your data and operations are always protected.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="text-center p-8 bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300"
            >
              <div className="text-5xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-white mb-4">Global Support</h3>
              <p className="text-zion-slate-light">
                24/7 support across all time zones with dedicated account managers and technical experts.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="text-center p-8 bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300"
            >
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-white mb-4">Cost Effective</h3>
              <p className="text-zion-slate-light">
                Competitive pricing with flexible plans that scale with your business, from startup to enterprise.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* Market Positioning */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 rounded-3xl p-12 border border-zion-cyan/30"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Market-Leading Solutions
              </h2>
              <p className="text-zion-slate-light text-lg">
                Our services are priced competitively while delivering premium value that exceeds industry standards
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-zion-cyan mb-2">$29 - $299</div>
                <div className="text-zion-slate-light mb-2">Monthly Pricing Range</div>
                <div className="text-sm text-zion-slate-light">
                  From affordable micro SaaS to enterprise solutions
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-zion-purple mb-2">96%</div>
                <div className="text-zion-slate-light mb-2">Average AI Score</div>
                <div className="text-sm text-zion-slate-light">
                  Industry-leading AI capabilities and innovation
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-zion-cyan mb-2">24/7</div>
                <div className="text-zion-slate-light mb-2">Support Availability</div>
                <div className="text-sm text-zion-slate-light">
                  Round-the-clock technical support and monitoring
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Call to Action */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            className="text-center bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 rounded-3xl p-12 border border-zion-cyan/30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Can't find exactly what you're looking for? Our team can create a custom solution tailored to your specific needs.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105"
            >
              <span>Contact Us</span>
              <CheckCircle className="w-5 h-5" />
            </Link>
          </motion.div>
        </section>
      </div>
    </div>
  );
}