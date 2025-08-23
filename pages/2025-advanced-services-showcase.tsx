import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Grid, List, Filter,
  Brain, Atom, Shield, Target, Rocket,
  ArrowRight, Check, Palette, Heart, Truck, GraduationCap,
  Building, Star, Users, TrendingUp, Zap, Globe, Eye, Phone, Mail, MapPin
} from 'lucide-react';

// Import 2025 advanced services
import { real2025AdvancedMicroSaas } from '../data/real-2025-advanced-micro-saas';
import { real2025AdvancedITServices } from '../data/real-2025-advanced-it-services';
import { real2025AdvancedAIServices } from '../data/real-2025-advanced-ai-services';
import { real2025EmergingTechServices } from '../data/real-2025-emerging-tech-services';

const contact = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

export default function AdvancedServicesShowcase2025() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('name');

  // Combine all services
  const allServices = [
    ...real2025AdvancedMicroSaas,
    ...real2025AdvancedITServices,
    ...real2025AdvancedAIServices,
    ...real2025EmergingTechServices
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
        case 'price':
          return parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', ''));
        case 'rating':
          return b.rating - a.rating;
        case 'customers':
          return b.customers - a.customers;
        default:
          return a.name.localeCompare(b.name);
      }
    });

  // Get unique categories
  const categories = [
    { id: 'all', name: 'All Services', icon: <Grid className="w-5 h-5" />, count: allServices.length },
    { id: 'AI & Data', name: 'AI & Data', icon: <Brain className="w-5 h-5" />, count: allServices.filter(s => s.category === 'AI & Data').length },
    { id: 'Development & Security', name: 'Development & Security', icon: <Shield className="w-5 h-5" />, count: allServices.filter(s => s.category === 'Development & Security').length },
    { id: 'Customer Experience', name: 'Customer Experience', icon: <Heart className="w-5 h-5" />, count: allServices.filter(s => s.category === 'Customer Experience').length },
    { id: 'Business Intelligence', name: 'Business Intelligence', icon: <TrendingUp className="w-5 h-5" />, count: allServices.filter(s => s.category === 'Business Intelligence').length },
    { id: 'Business Automation', name: 'Business Automation', icon: <Zap className="w-5 h-5" />, count: allServices.filter(s => s.category === 'Business Automation').length },
    { id: 'Inventory Management', name: 'Inventory Management', icon: <Truck className="w-5 h-5" />, count: allServices.filter(s => s.category === 'Inventory Management').length },
    { id: 'Marketing Automation', name: 'Marketing Automation', icon: <Target className="w-5 h-5" />, count: allServices.filter(s => s.category === 'Marketing Automation').length },
    { id: 'Project Management', name: 'Project Management', icon: <Building className="w-5 h-5" />, count: allServices.filter(s => s.category === 'Project Management').length },
    { id: 'Customer Relationship Management', name: 'CRM', icon: <Users className="w-5 h-5" />, count: allServices.filter(s => s.category === 'Customer Relationship Management').length },
    { id: 'Cybersecurity', name: 'Cybersecurity', icon: <Shield className="w-5 h-5" />, count: allServices.filter(s => s.category === 'Cybersecurity').length },
    { id: 'Cloud Management', name: 'Cloud Management', icon: <Globe className="w-5 h-5" />, count: allServices.filter(s => s.category === 'Cloud Management').length },
    { id: 'DevOps & Automation', name: 'DevOps & Automation', icon: <Rocket className="w-5 h-5" />, count: allServices.filter(s => s.category === 'DevOps & Automation').length },
    { id: 'Data Management', name: 'Data Management', icon: <TrendingUp className="w-5 h-5" />, count: allServices.filter(s => s.category === 'Data Management').length },
    { id: 'Network Management', name: 'Network Management', icon: <Globe className="w-5 h-5" />, count: allServices.filter(s => s.category === 'Network Management').length },
    { id: 'Container Security', name: 'Container Security', icon: <Shield className="w-5 h-5" />, count: allServices.filter(s => s.category === 'Container Security').length },
    { id: 'API Management', name: 'API Management', icon: <Zap className="w-5 h-5" />, count: allServices.filter(s => s.category === 'API Management').length },
    { id: 'Disaster Recovery', name: 'Disaster Recovery', icon: <ArrowRight className="w-5 h-5" />, count: allServices.filter(s => s.category === 'Disaster Recovery').length },
    { id: 'Content Generation', name: 'Content Generation', icon: <Palette className="w-5 h-5" />, count: allServices.filter(s => s.category === 'Content Generation').length },
    { id: 'Predictive Analytics', name: 'Predictive Analytics', icon: <TrendingUp className="w-5 h-5" />, count: allServices.filter(s => s.category === 'Predictive Analytics').length },
    { id: 'Document Processing', name: 'Document Processing', icon: <Building className="w-5 h-5" />, count: allServices.filter(s => s.category === 'Document Processing').length },
    { id: 'Sales Intelligence', name: 'Sales Intelligence', icon: <Target className="w-5 h-5" />, count: allServices.filter(s => s.category === 'Sales Intelligence').length },
    { id: 'Human Resources', name: 'Human Resources', icon: <Users className="w-5 h-5" />, count: allServices.filter(s => s.category === 'Human Resources').length },
    { id: 'Financial Technology', name: 'Financial Technology', icon: <TrendingUp className="w-5 h-5" />, count: allServices.filter(s => s.category === 'Financial Technology').length },
    { id: 'Supply Chain Management', name: 'Supply Chain Management', icon: <Truck className="w-5 h-5" />, count: allServices.filter(s => s.category === 'Supply Chain Management').length },
    { id: 'Quantum Computing', name: 'Quantum Computing', icon: <Atom className="w-5 h-5" />, count: allServices.filter(s => s.category === 'Quantum Computing').length },
    { id: 'Blockchain Technology', name: 'Blockchain Technology', icon: <Globe className="w-5 h-5" />, count: allServices.filter(s => s.category === 'Blockchain Technology').length },
    { id: 'Internet of Things', name: 'Internet of Things', icon: <Globe className="w-5 h-5" />, count: allServices.filter(s => s.category === 'Internet of Things').length },
    { id: 'Augmented Reality', name: 'Augmented Reality', icon: <Eye className="w-5 h-5" />, count: allServices.filter(s => s.category === 'Augmented Reality').length },
    { id: 'Edge Computing', name: 'Edge Computing', icon: <Zap className="w-5 h-5" />, count: allServices.filter(s => s.category === 'Edge Computing').length },
    { id: '5G Technology', name: '5G Technology', icon: <Globe className="w-5 h-5" />, count: allServices.filter(s => s.category === '5G Technology').length },
    { id: 'Digital Twin', name: 'Digital Twin', icon: <ArrowRight className="w-5 h-5" />, count: allServices.filter(s => s.category === 'Digital Twin').length },
    { id: 'Autonomous Vehicles', name: 'Autonomous Vehicles', icon: <Truck className="w-5 h-5" />, count: allServices.filter(s => s.category === 'Autonomous Vehicles').length }
  ].filter(cat => cat.count > 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="2025 Advanced Services Showcase - Zion Tech Group"
        description="Discover our cutting-edge 2025 advanced micro SAAS, IT, and AI services. Real, innovative, and market-ready solutions for modern businesses."
        keywords={["2025 advanced services", "micro SAAS", "IT services", "AI services", "emerging technology", "Zion Tech Group"]}
        image="/og-advanced-services-2025.jpg"
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
              2025 Advanced Services
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Showcase
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover our cutting-edge micro SAAS, IT, and AI services that are transforming industries. 
              Real, innovative, and market-ready solutions for the future of business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2 text-cyan-400">
                <Check className="w-5 h-5" />
                <span>32+ Advanced Services</span>
              </div>
              <div className="flex items-center gap-2 text-blue-400">
                <Star className="w-5 h-5" />
                <span>4.8+ Average Rating</span>
              </div>
              <div className="flex items-center gap-2 text-purple-400">
                <Users className="w-5 h-5" />
                <span>1000+ Happy Customers</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-1 rounded-lg mb-4">
                <div className="bg-slate-800 p-4 rounded-lg">
                  <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                  <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                  <p className="text-gray-300">{contact.mobile}</p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-1 rounded-lg mb-4">
                <div className="bg-slate-800 p-4 rounded-lg">
                  <Mail className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                  <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                  <p className="text-gray-300">{contact.email}</p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-1 rounded-lg mb-4">
                <div className="bg-slate-800 p-4 rounded-lg">
                  <MapPin className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                  <p className="text-gray-300">{contact.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex-shrink-0">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort */}
              <div className="flex-shrink-0">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  <option value="name">Sort by Name</option>
                  <option value="price">Sort by Price</option>
                  <option value="rating">Sort by Rating</option>
                  <option value="customers">Sort by Customers</option>
                </select>
              </div>

              {/* View Mode */}
              <div className="flex-shrink-0">
                <div className="flex bg-slate-700/50 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-md transition-colors ${
                      viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-md transition-colors ${
                      viewMode === 'list' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'
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
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">
              {filteredServices.length} Advanced Services Found
            </h2>
            <p className="text-gray-400">
              Discover cutting-edge solutions designed for modern businesses
            </p>
          </div>

          <AnimatePresence mode="wait">
            {viewMode === 'grid' ? (
              <motion.div
                key="grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-4xl">{service.icon}</div>
                      {service.popular && (
                        <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs px-2 py-1 rounded-full">
                          Popular
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">{service.tagline}</p>

                    <div className="mb-4">
                      <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                      <span className="text-gray-400">{service.period}</span>
                    </div>

                    <div className="mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span>{service.rating}</span>
                        <span>({service.reviews} reviews)</span>
                      </div>
                      <div className="text-sm text-gray-400">
                        {service.customers} customers
                      </div>
                    </div>

                    <div className="mb-4">
                      <span className="inline-block bg-slate-700 text-cyan-400 text-xs px-2 py-1 rounded-full mb-2">
                        {service.category}
                      </span>
                    </div>

                    <a
                      href={service.link}
                      className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      Learn More <ArrowRight className="w-4 h-4" />
                    </a>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="list"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-4"
              >
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300"
                  >
                    <div className="flex flex-col lg:flex-row gap-6">
                      <div className="flex-shrink-0">
                        <div className="text-4xl">{service.icon}</div>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                            <p className="text-gray-400">{service.tagline}</p>
                          </div>
                          
                          <div className="flex-shrink-0">
                            <div className="text-right">
                              <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                              <div className="text-gray-400 text-sm">{service.period}</div>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                          <div className="flex items-center gap-2 text-sm text-gray-400">
                            <Star className="w-4 h-4 text-yellow-500 fill-current" />
                            <span>{service.rating} ({service.reviews} reviews)</span>
                          </div>
                          <div className="text-sm text-gray-400">
                            {service.customers} customers
                          </div>
                          <div className="text-sm text-gray-400">
                            {service.setupTime} setup
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="inline-block bg-slate-700 text-cyan-400 text-xs px-2 py-1 rounded-full">
                            {service.category}
                          </span>
                          {service.popular && (
                            <span className="inline-block bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs px-2 py-1 rounded-full">
                              Popular
                            </span>
                          )}
                        </div>

                        <a
                          href={service.link}
                          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                          Learn More <ArrowRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using our advanced services to drive innovation, 
              improve efficiency, and achieve remarkable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href={`tel:${contact.mobile}`}
                className="inline-flex items-center gap-2 border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Call Us Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}