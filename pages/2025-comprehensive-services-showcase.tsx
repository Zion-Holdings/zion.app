import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Grid, List, Star, Check, ArrowRight,
  Brain, Atom, Shield, Target, Rocket, Palette, 
  Heart, Truck, GraduationCap, Building, Globe,
  Phone, Mail, MapPin, ExternalLink, Users, TrendingUp
} from 'lucide-react';

// Import our new service data
import { innovativeMicroSaasServices2025V2 } from '../data/2025-innovative-micro-saas-expansion-v2';
import { innovativeITServices2025V2 } from '../data/2025-innovative-it-services-expansion-v2';
import { innovativeAIServices2025V2 } from '../data/2025-innovative-ai-services-expansion-v2';

const ComprehensiveServicesShowcase2025: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Combine all services
  const allServices = [
    ...innovativeMicroSaasServices2025V2,
    ...innovativeITServices2025V2,
    ...innovativeAIServices2025V2
  ];

  // Filter services based on search and category
  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Get unique categories
  const categories = [
    { id: 'all', name: 'All Services', icon: <Grid className="w-5 h-5" />, color: 'from-gray-500 to-slate-500' },
    { id: 'Legal & Compliance', name: 'Legal & Compliance', icon: <Shield className="w-5 h-5" />, color: 'from-indigo-500 to-purple-600' },
    { id: 'Finance & Trading', name: 'Finance & Trading', icon: <TrendingUp className="w-5 h-5" />, color: 'from-cyan-500 to-blue-600' },
    { id: 'Healthcare & Biotech', name: 'Healthcare & Biotech', icon: <Heart className="w-5 h-5" />, color: 'from-green-500 to-emerald-600' },
    { id: 'Cybersecurity', name: 'Cybersecurity', icon: <Shield className="w-5 h-5" />, color: 'from-red-500 to-pink-600' },
    { id: 'Education & Learning', name: 'Education & Learning', icon: <GraduationCap className="w-5 h-5" />, color: 'from-blue-500 to-indigo-600' },
    { id: 'Logistics & Supply Chain', name: 'Logistics & Supply Chain', icon: <Truck className="w-5 h-5" />, color: 'from-orange-500 to-yellow-600' },
    { id: 'Creative & Media', name: 'Creative & Media', icon: <Palette className="w-5 h-5" />, color: 'from-pink-500 to-rose-600' },
    { id: 'IoT & Smart Devices', name: 'IoT & Smart Devices', icon: <Globe className="w-5 h-5" />, color: 'from-teal-500 to-cyan-600' },
    { id: 'Customer Success', name: 'Customer Success', icon: <Users className="w-5 h-5" />, color: 'from-emerald-500 to-green-600' },
    { id: 'Blockchain & Web3', name: 'Blockchain & Web3', icon: <Atom className="w-5 h-5" />, color: 'from-purple-500 to-violet-600' },
    { id: 'Cloud & Infrastructure', name: 'Cloud & Infrastructure', icon: <Globe className="w-5 h-5" />, color: 'from-blue-500 to-cyan-600' },
    { id: 'DevOps & Automation', name: 'DevOps & Automation', icon: <Rocket className="w-5 h-5" />, color: 'from-green-500 to-emerald-600' },
    { id: 'Database & Data Management', name: 'Database & Data Management', icon: <Building className="w-5 h-5" />, color: 'from-purple-500 to-indigo-600' },
    { id: 'Networking & Security', name: 'Networking & Security', icon: <Shield className="w-5 h-5" />, color: 'from-teal-500 to-blue-600' },
    { id: 'Storage & Backup', name: 'Storage & Backup', icon: <Building className="w-5 h-5" />, color: 'from-indigo-500 to-purple-600' },
    { id: 'Monitoring & Observability', name: 'Monitoring & Observability', icon: <TrendingUp className="w-5 h-5" />, color: 'from-orange-500 to-red-600' },
    { id: 'API & Integration', name: 'API & Integration', icon: <Globe className="w-5 h-5" />, color: 'from-green-500 to-teal-600' },
    { id: 'Disaster Recovery & Business Continuity', name: 'Disaster Recovery & Business Continuity', icon: <Shield className="w-5 h-5" />, color: 'from-yellow-500 to-orange-600' },
    { id: 'Mobile Development', name: 'Mobile Development', icon: <Globe className="w-5 h-5" />, color: 'from-pink-500 to-rose-600' },
    { id: 'AI & Neuroscience', name: 'AI & Neuroscience', icon: <Brain className="w-5 h-5" />, color: 'from-purple-500 to-pink-600' },
    { id: 'AI & Emotional Intelligence', name: 'AI & Emotional Intelligence', icon: <Heart className="w-5 h-5" />, color: 'from-yellow-500 to-orange-600' },
    { id: 'AI & Pharmaceutical', name: 'AI & Pharmaceutical', icon: <Heart className="w-5 h-5" />, color: 'from-green-500 to-emerald-600' },
    { id: 'AI & Creative Writing', name: 'AI & Creative Writing', icon: <Palette className="w-5 h-5" />, color: 'from-blue-500 to-indigo-600' },
    { id: 'AI & Financial Modeling', name: 'AI & Financial Modeling', icon: <TrendingUp className="w-5 h-5" />, color: 'from-green-500 to-teal-600' },
    { id: 'AI & Education', name: 'AI & Education', icon: <GraduationCap className="w-5 h-5" />, color: 'from-indigo-500 to-purple-600' },
    { id: 'AI & Environmental Science', name: 'AI & Environmental Science', icon: <Globe className="w-5 h-5" />, color: 'from-teal-500 to-green-600' },
    { id: 'AI & Autonomous Vehicles', name: 'AI & Autonomous Vehicles', icon: <Rocket className="w-5 h-5" />, color: 'from-red-500 to-pink-600' },
    { id: 'AI & Space Technology', name: 'AI & Space Technology', icon: <Rocket className="w-5 h-5" />, color: 'from-blue-500 to-purple-600' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="2025 Comprehensive Services Showcase - Zion Tech Group"
        description="Explore our comprehensive portfolio of innovative micro SAAS, IT, and AI services. Cutting-edge solutions with competitive pricing and exceptional support."
        keywords={[
          'micro SAAS', 'IT services', 'AI services', 'quantum computing', 
          'cybersecurity', 'cloud infrastructure', 'Zion Tech Group'
        ]}
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
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                2025 Comprehensive Services Showcase
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover our revolutionary portfolio of innovative micro SAAS, IT, and AI services. 
              Cutting-edge solutions designed to transform your business with competitive pricing and exceptional support.
            </p>
            
            {/* Contact Information */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-8 max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center">
                  <Phone className="w-6 h-6 text-cyan-400 mb-2" />
                  <span className="text-white font-semibold">+1 302 464 0950</span>
                </div>
                <div className="flex flex-col items-center">
                  <Mail className="w-6 h-6 text-blue-400 mb-2" />
                  <span className="text-white font-semibold">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex flex-col items-center">
                  <MapPin className="w-6 h-6 text-purple-400 mb-2" />
                  <span className="text-white font-semibold text-sm">364 E Main St STE 1008<br />Middletown DE 19709</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all"
                onClick={() => document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Services
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/20 transition-all border border-white/20"
                onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
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
                  className="w-full pl-10 pr-4 py-2 bg-white/20 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.slice(0, 8).map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r ' + category.color + ' text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {category.icon}
                    <span className="ml-2">{category.name}</span>
                  </button>
                ))}
              </div>

              {/* View Mode Toggle */}
              <div className="flex bg-white/10 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-all ${
                    viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-all ${
                    viewMode === 'list' ? 'bg-cyan-500 text-white' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services-section" className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Comprehensive Service Portfolio
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover {filteredServices.length} innovative services across multiple categories, 
              each designed to deliver exceptional value and ROI for your business.
            </p>
          </div>

          {/* Services Grid/List */}
          <AnimatePresence mode="wait">
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-all border border-white/20"
                  >
                    {/* Service Icon and Category */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl">{service.icon}</span>
                      <span className="text-xs bg-white/20 px-2 py-1 rounded-full text-gray-300">
                        {service.category}
                      </span>
                    </div>

                    {/* Service Name and Tagline */}
                    <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{service.tagline}</p>

                    {/* Pricing */}
                    <div className="bg-white/10 rounded-lg p-3 mb-4">
                      <div className="text-center">
                        <span className="text-2xl font-bold text-cyan-400">${service.price.monthly}</span>
                        <span className="text-gray-300">/month</span>
                        <div className="text-xs text-gray-400 mt-1">
                          ${service.price.yearly}/year (save {Math.round((1 - service.price.yearly / (service.price.monthly * 12)) * 100)}%)
                        </div>
                      </div>
                    </div>

                    {/* Features Preview */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-center text-xs text-gray-300">
                            <Check className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                      <ul className="space-y-1">
                        {service.benefits.slice(0, 2).map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-xs text-gray-300">
                            <Star className="w-3 h-3 text-yellow-400 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Popular Badge */}
                    {service.popular && (
                      <div className="inline-block bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs px-3 py-1 rounded-full mb-4">
                        ⭐ Popular Choice
                      </div>
                    )}

                    {/* CTA Button */}
                    <a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all flex items-center justify-center"
                    >
                      Learn More
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
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
                    className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-all border border-white/20"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <span className="text-3xl">{service.icon}</span>
                        <div>
                          <h3 className="text-xl font-bold text-white">{service.name}</h3>
                          <p className="text-gray-300">{service.tagline}</p>
                          <div className="flex items-center space-x-4 mt-2 text-sm text-gray-400">
                            <span>{service.category}</span>
                            <span>•</span>
                            <span>{service.customers.toLocaleString()} customers</span>
                            <span>•</span>
                            <span>⭐ {service.rating} ({service.reviews} reviews)</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-cyan-400">${service.price.monthly}</div>
                        <div className="text-gray-300">/month</div>
                        <a
                          href={service.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all mt-2"
                        >
                          Learn More
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </AnimatePresence>

          {/* No Results */}
          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-white mb-2">No services found</h3>
              <p className="text-gray-300">Try adjusting your search terms or category filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-section" className="px-4 sm:px-6 lg:px-8 py-20">
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
              Our team of experts is ready to help you implement the perfect solution for your needs. 
              Get in touch today to start your transformation journey.
            </p>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <Phone className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                <p className="text-cyan-400 font-semibold">+1 302 464 0950</p>
                <p className="text-gray-300 text-sm mt-2">Available 24/7 for urgent matters</p>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <Mail className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                <p className="text-blue-400 font-semibold">kleber@ziontechgroup.com</p>
                <p className="text-gray-300 text-sm mt-2">We'll respond within 2 hours</p>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <MapPin className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-purple-400 font-semibold text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
                <p className="text-gray-300 text-sm mt-2">Schedule an in-person meeting</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="tel:+13024640950"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all flex items-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </motion.a>
              <motion.a
                href="mailto:kleber@ziontechgroup.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/20 transition-all border border-white/20 flex items-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Email
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/20 border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">
              © 2025 Zion Tech Group. All rights reserved. | 
              <a href="https://ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 ml-1">
                ziontechgroup.com
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ComprehensiveServicesShowcase2025;