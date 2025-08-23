import React, { useState } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Grid, List, Filter, ChevronDown,
  Brain, Rocket, Shield, Atom, Cpu, Cloud, Target,
  ArrowRight, Star, Zap, Users, Award, Globe,
  ExternalLink, Sparkles, Eye, Lock, Clock, CheckCircle,
  TrendingUp, DollarSign, Phone, Mail, MapPin, Globe as GlobeIcon
} from 'lucide-react';

// Import new expanded services
import { innovative2025MicroSaasExpanded } from '../data/innovative-2025-micro-saas-expanded';
import { innovative2025ITSolutionsExpanded } from '../data/innovative-2025-it-solutions-expanded';
import { innovative2025AISolutionsExpanded } from '../data/innovative-2025-ai-solutions-expanded';

const Innovative2025ServicesShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('popularity');
  const [viewMode, setViewMode] = useState('grid');

  // Combine all new services
  const allNewServices = [
    ...innovative2025MicroSaasExpanded,
    ...innovative2025ITSolutionsExpanded,
    ...innovative2025AISolutionsExpanded
  ];

  // Categories
  const categories = [
    { id: 'all', name: 'All Services', icon: <GlobeIcon className="w-5 h-5" />, count: allNewServices.length },
    { id: 'micro-saas', name: 'Micro SAAS', icon: <Rocket className="w-5 h-5" />, count: innovative2025MicroSaasExpanded.length },
    { id: 'it-solutions', name: 'IT Solutions', icon: <Cpu className="w-5 h-5" />, count: innovative2025ITSolutionsExpanded.length },
    { id: 'ai-solutions', name: 'AI Solutions', icon: <Brain className="w-5 h-5" />, count: innovative2025AISolutionsExpanded.length }
  ];

  // Filter and sort services
  const filteredServices = allNewServices
    .filter(service => {
      const matchesCategory = selectedCategory === 'all' || 
        service.category.toLowerCase().includes(selectedCategory.replace('-', ' ')) ||
        service.name.toLowerCase().includes(selectedCategory.replace('-', ' '));
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'popularity':
          return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
        case 'price-low':
          return parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, ''));
        case 'price-high':
          return parseFloat(b.price.replace(/[^0-9.]/g, '')) - parseFloat(a.price.replace(/[^0-9.]/g, ''));
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <SEO 
        title="Innovative 2025 Services Showcase | Zion Tech Group"
        description="Discover our comprehensive portfolio of innovative micro SAAS, IT solutions, and AI services for 2025. Transform your business with cutting-edge technology solutions."
        keywords="innovative services, micro SAAS, IT solutions, AI services, business transformation, technology solutions"
      />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-black" />
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-purple-500/5" />
          
          {/* Animated grid */}
          <motion.div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0, 255, 255, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 255, 255, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '200px 200px'
            }}
            animate={{
              backgroundPosition: ['0px 0px', '200px 200px']
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear'
            }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Innovative 2025 Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Transform your business with our comprehensive portfolio of cutting-edge micro SAAS, IT solutions, and AI services. 
              Built for the future, delivering results today.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="bg-gradient-to-r from-cyan-600 to-blue-700 px-6 py-3 rounded-full">
                <span className="text-cyan-100 font-semibold">
                  {innovative2025MicroSaasExpanded.length} Micro SAAS Solutions
                </span>
              </div>
              <div className="bg-gradient-to-r from-purple-600 to-pink-700 px-6 py-3 rounded-full">
                <span className="text-purple-100 font-semibold">
                  {innovative2025ITSolutionsExpanded.length} IT Solutions
                </span>
              </div>
              <div className="bg-gradient-to-r from-green-600 to-emerald-700 px-6 py-3 rounded-full">
                <span className="text-green-100 font-semibold">
                  {innovative2025AISolutionsExpanded.length} AI Solutions
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <Phone className="w-5 h-5 text-cyan-400" />
              <span className="text-gray-300">{contactInfo.mobile}</span>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="w-5 h-5 text-cyan-400" />
              <span className="text-gray-300">{contactInfo.email}</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="w-5 h-5 text-cyan-400" />
              <span className="text-gray-300">{contactInfo.address}</span>
            </div>
            <div className="flex items-center gap-4">
              <GlobeIcon className="w-5 h-5 text-cyan-400" />
              <a href={contactInfo.website} className="text-cyan-400 hover:text-cyan-300 transition-colors">
                {contactInfo.website}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Filters and Search */}
          <div className="mb-12">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Category Filter */}
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-cyan-600 to-blue-700 text-white'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    {category.icon}
                    <span>{category.name}</span>
                    <span className="bg-gray-700 px-2 py-1 rounded-full text-xs">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>

              {/* Search and Sort */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
                  />
                </div>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-500"
                >
                  <option value="popularity">Most Popular</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name: A to Z</option>
                </select>
                <div className="flex bg-gray-800 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded transition-colors ${
                      viewMode === 'grid' ? 'bg-cyan-600 text-white' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded transition-colors ${
                      viewMode === 'list' ? 'bg-cyan-600 text-white' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}>
            <AnimatePresence>
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all hover:shadow-2xl hover:shadow-cyan-500/20 ${
                    viewMode === 'list' ? 'flex' : ''
                  }`}
                >
                  {/* Service Header */}
                  <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`text-3xl ${service.icon}`} />
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">{service.name}</h3>
                          <p className="text-gray-400 text-sm">{service.tagline}</p>
                        </div>
                      </div>
                      {service.popular && (
                        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                          Popular
                        </div>
                      )}
                    </div>

                    {/* Service Description */}
                    <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>

                    {/* Pricing */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-5 h-5 text-green-400" />
                        <span className="text-2xl font-bold text-white">{service.price}</span>
                        <span className="text-gray-400">{service.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-300">{service.rating}</span>
                        <span className="text-xs text-gray-500">({service.reviews})</span>
                      </div>
                    </div>

                    {/* Key Features */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                      <div className="grid grid-cols-1 gap-1">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            <span>{feature}</span>
                          </div>
                        ))}
                        {service.features.length > 3 && (
                          <div className="text-xs text-gray-500 mt-1">
                            +{service.features.length - 3} more features
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Market Position */}
                    <div className="mb-4 p-3 bg-gray-800 rounded-lg">
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Market Position:</h4>
                      <p className="text-xs text-gray-400 leading-relaxed">{service.marketPosition}</p>
                    </div>

                    {/* ROI and Benefits */}
                    <div className="mb-4 p-3 bg-gray-800 rounded-lg">
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">ROI & Benefits:</h4>
                      <p className="text-xs text-gray-400 leading-relaxed">{service.roi}</p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <a
                        href={service.link}
                        className="flex-1 bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800 text-white px-4 py-2 rounded-lg text-center font-semibold transition-all hover:shadow-lg hover:shadow-cyan-500/25"
                      >
                        Learn More
                      </a>
                      <a
                        href={`mailto:${contactInfo.email}?subject=Inquiry about ${service.name}`}
                        className="px-4 py-2 border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white rounded-lg transition-all"
                      >
                        Contact
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* No Results */}
          {filteredServices.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-300 mb-2">No services found</h3>
              <p className="text-gray-500">Try adjusting your search criteria or browse all categories.</p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Our innovative services are designed to drive real business results. 
              Get started today and experience the power of cutting-edge technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`mailto:${contactInfo.email}?subject=Business Transformation Consultation`}
                className="bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:shadow-xl hover:shadow-cyan-500/25"
              >
                Get Started Today
              </a>
              <a
                href={`tel:${contactInfo.mobile}`}
                className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all"
              >
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Innovative2025ServicesShowcase;