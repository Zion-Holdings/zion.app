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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-300 mb-8 max-w-4xl mx-auto">
              <div className="flex items-center justify-center space-x-2">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span>364 E Main St STE 1008 Middletown DE 19709</span>
              </div>
            </div>

            {/* Search and Filter Controls */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex justify-center mb-8">
              <div className="bg-white/10 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    viewMode === 'grid'
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  <Grid className="w-4 h-4 inline mr-2" />
                  Grid
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    viewMode === 'list'
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  <List className="w-4 h-4 inline mr-2" />
                  List
                </button>
              </div>
            </div>
          </motion.div>
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
                    className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all border border-white/20"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <span className="text-2xl">{service.icon}</span>
                        <div>
                          <h3 className="text-lg font-bold text-white">{service.name}</h3>
                          <p className="text-gray-300 text-sm">{service.tagline}</p>
                          <div className="flex items-center space-x-4 mt-2 text-xs text-gray-400">
                            <span>${service.price.monthly}/month</span>
                            <span>•</span>
                            <span>{service.category}</span>
                            <span>•</span>
                            <span>{service.customers} customers</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-cyan-400">${service.price.monthly}</div>
                        <div className="text-xs text-gray-400">per month</div>
                        <a
                          href={service.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm mt-2"
                        >
                          Learn More <ArrowRight className="w-4 h-4 ml-1" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Why Choose Zion Tech Group */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Why Choose Zion Tech Group?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-white mb-2">Innovation First</h3>
              <p className="text-gray-400">
                We stay ahead of the curve with cutting-edge technologies and innovative solutions.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">💎</div>
              <h3 className="text-xl font-bold text-white mb-2">Quality Assured</h3>
              <p className="text-gray-400">
                Every service is built with enterprise-grade quality and reliability in mind.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-white mb-2">Security Focused</h3>
              <p className="text-gray-400">
                Advanced security measures and compliance with industry standards.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-white mb-2">Proven ROI</h3>
              <p className="text-gray-400">
                Our solutions deliver measurable business value and competitive advantage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of organizations already leveraging our innovative technology solutions to gain competitive advantage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Start Your Journey
            </a>
            <a
              href="https://ziontechgroup.com"
              className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Visit Our Website
            </a>
          </div>
        </div>
      </section>

      {/* Footer Contact */}
      <section className="relative z-10 py-12 bg-gradient-to-r from-slate-900 to-gray-900 border-t border-cyan-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-300 mb-6">
            <div>
              <p className="font-semibold text-white">📱 Mobile</p>
              <p className="text-cyan-400">+1 302 464 0950</p>
            </div>
            <div>
              <p className="font-semibold text-white">✉️ Email</p>
              <p className="text-cyan-400">kleber@ziontechgroup.com</p>
            </div>
            <div>
              <p className="font-semibold text-white">🌐 Website</p>
              <p className="text-cyan-400">https://ziontechgroup.com</p>
            </div>
          </div>
          <p className="text-sm text-gray-400">
            364 E Main St STE 1008 Middletown DE 19709
          </p>
        </div>
      </section>
    </div>
  );
};

export default ComprehensiveServicesShowcase2025;
