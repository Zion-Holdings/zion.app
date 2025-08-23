import React, { useState } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, Rocket, Shield, Atom, Cpu, Cloud, Target,
  ArrowRight, Star, Zap, Users, Award, Globe, Search,
  Filter, ChevronDown, ExternalLink, Sparkles, Eye,
  Lock, Clock, CheckCircle, TrendingUp, DollarSign, Phone,
  Mail, MapPin, Globe as GlobeIcon
} from 'lucide-react';

// Import new innovative 2025 service expansions
import { innovative2025MicroSaasExpansions } from '../data/innovative-2025-micro-saas-expansions';
import { innovative2025ITServiceExpansions } from '../data/innovative-2025-it-services-expansions';
import { innovative2025AIServiceExpansions } from '../data/innovative-2025-ai-services-expansions';

const Innovative2025ServicesShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('popularity');

  // Combine all new innovative services
  const allInnovativeServices = [
    ...innovative2025MicroSaasExpansions,
    ...innovative2025ITServiceExpansions,
    ...innovative2025AIServiceExpansions
  ];

  // Categories
  const categories = [
    { id: 'all', name: 'All Services', icon: <Globe className="w-5 h-5" />, count: allInnovativeServices.length },
    { id: 'micro-saas', name: 'Micro SAAS', icon: <Rocket className="w-5 h-5" />, count: innovative2025MicroSaasExpansions.length },
    { id: 'it-services', name: 'IT Services', icon: <Cpu className="w-5 h-5" />, count: innovative2025ITServiceExpansions.length },
    { id: 'ai-services', name: 'AI Services', icon: <Brain className="w-5 h-5" />, count: innovative2025AIServiceExpansions.length }
  ];

  // Filter and sort services
  const filteredServices = allInnovativeServices
    .filter(service => {
      const matchesCategory = selectedCategory === 'all' || 
        service.category.toLowerCase().includes(selectedCategory) ||
        service.name.toLowerCase().includes(selectedCategory);
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
        description="Discover our cutting-edge micro SAAS, IT services, and AI solutions for 2025. Transform your business with innovative technology solutions."
        keywords="micro SAAS, IT services, AI solutions, 2025, innovation, technology, business solutions"
        image="https://ziontechgroup.com/og-innovative-2025-services.jpg"
      />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-black" />
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-purple-500/10" />
          
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
              x: [0, -200],
              y: [0, -200]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              Innovative 2025 Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business with our cutting-edge micro SAAS, IT services, and AI solutions. 
              Built for the future, delivering results today.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full px-6 py-3">
                <span className="text-cyan-400 font-semibold">{innovative2025MicroSaasExpansions.length} Micro SAAS Solutions</span>
              </div>
              <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full px-6 py-3">
                <span className="text-purple-400 font-semibold">{innovative2025ITServiceExpansions.length} IT Services</span>
              </div>
              <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full px-6 py-3">
                <span className="text-green-400 font-semibold">{innovative2025AIServiceExpansions.length} AI Solutions</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Phone className="w-6 h-6 text-cyan-400 mb-2" />
              <span className="text-gray-300 text-sm">Mobile</span>
              <a href={`tel:${contactInfo.mobile}`} className="text-white font-semibold hover:text-cyan-400 transition-colors">
                {contactInfo.mobile}
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-6 h-6 text-purple-400 mb-2" />
              <span className="text-gray-300 text-sm">Email</span>
              <a href={`mailto:${contactInfo.email}`} className="text-white font-semibold hover:text-purple-400 transition-colors">
                {contactInfo.email}
              </a>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-6 h-6 text-green-400 mb-2" />
              <span className="text-gray-300 text-sm">Address</span>
              <span className="text-white font-semibold">{contactInfo.address}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters and Search */}
          <div className="mb-12">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Category Filter */}
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${
                      selectedCategory === category.id
                        ? 'border-cyan-500 bg-cyan-500/20 text-cyan-400'
                        : 'border-gray-600 text-gray-400 hover:border-gray-500 hover:text-gray-300'
                    }`}
                  >
                    {category.icon}
                    <span>{category.name}</span>
                    <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded-full text-xs">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>

              {/* Search and Sort */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                  />
                </div>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                >
                  <option value="popularity">Most Popular</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name: A to Z</option>
                </select>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
                >
                  {/* Popular Badge */}
                  {service.popular && (
                    <div className="absolute -top-3 left-6 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                      POPULAR
                    </div>
                  )}

                  {/* Service Icon and Header */}
                  <div className="text-center mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} mb-4`}>
                      <span className="text-3xl">{service.icon}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {service.tagline}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-white mb-1">
                      {service.price}
                      <span className="text-lg text-gray-400">{service.period}</span>
                    </div>
                    <div className="text-sm text-gray-400">
                      {service.trialDays} days free trial
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 5).map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                      {service.features.length > 5 && (
                        <li className="text-sm text-cyan-400">
                          +{service.features.length - 5} more features
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Market Position */}
                  <div className="mb-6 p-4 bg-gray-800/50 rounded-lg">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Market Position:</h4>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {service.marketPosition}
                    </p>
                  </div>

                  {/* ROI and Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6 text-center">
                    <div className="bg-gray-800/50 rounded-lg p-3">
                      <div className="text-sm text-gray-400">ROI</div>
                      <div className="text-xs text-green-400 font-semibold">{service.roi}</div>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-3">
                      <div className="text-sm text-gray-400">Market Size</div>
                      <div className="text-xs text-blue-400 font-semibold">{service.marketSize}</div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="text-center">
                    <a
                      href={service.link}
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Contact Info */}
                  <div className="mt-6 pt-4 border-t border-gray-700">
                    <div className="text-center">
                      <p className="text-xs text-gray-400 mb-2">Ready to get started?</p>
                      <div className="flex flex-col sm:flex-row gap-2 justify-center">
                        <a
                          href={`tel:${contactInfo.mobile}`}
                          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm transition-colors"
                        >
                          <Phone className="w-4 h-4" />
                          {contactInfo.mobile}
                        </a>
                        <a
                          href={`mailto:${contactInfo.email}`}
                          className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 text-sm transition-colors"
                        >
                          <Mail className="w-4 h-4" />
                          {contactInfo.email}
                        </a>
                      </div>
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
              <p className="text-gray-400">Try adjusting your search criteria or browse all categories.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of businesses already using our innovative services to drive growth, 
              efficiency, and competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${contactInfo.mobile}`}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                <Phone className="w-5 h-5" />
                Call Now: {contactInfo.mobile}
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-400 mb-2">Visit our website for more information:</p>
              <a
                href={contactInfo.website}
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
              >
                <GlobeIcon className="w-5 h-5" />
                {contactInfo.website}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Innovative2025ServicesShowcase;
