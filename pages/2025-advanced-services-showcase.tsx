import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Grid, List, Filter,
  Brain, Atom, Shield, Target, Rocket,
  ArrowRight, Check, Palette, Heart, Truck, GraduationCap,
  Building, Cpu, Zap, Globe, Leaf, Car, Factory, Hospital,
  Phone, Mail, MapPin, ExternalLink, Star, Users, TrendingUp
} from 'lucide-react';

// Import our new advanced service data
import { advancedCybersecuritySolutions2025 } from '../data/2025-advanced-cybersecurity-solutions';
import { advancedFintechSolutions2025 } from '../data/2025-advanced-fintech-solutions';
import { advancedHealthcareTechSolutions2025 } from '../data/2025-advanced-healthcare-tech-solutions';
import { advancedLogisticsSupplyChainSolutions2025 } from '../data/2025-advanced-logistics-supply-chain-solutions';
import { advancedEnergySustainabilitySolutions2025 } from '../data/2025-advanced-energy-sustainability-solutions';

// Contact information
const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

// Combine all services
const allAdvancedServices = [
  ...advancedCybersecuritySolutions2025,
  ...advancedFintechSolutions2025,
  ...advancedHealthcareTechSolutions2025,
  ...advancedLogisticsSupplyChainSolutions2025,
  ...advancedEnergySustainabilitySolutions2025
];

// Service categories
const serviceCategories = [
  'All Services',
  'Cybersecurity',
  'Fintech',
  'Healthcare Technology',
  'Logistics & Supply Chain',
  'Energy & Sustainability'
];

export default function AdvancedServicesShowcase2025() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Services');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'rating' | 'popularity'>('popularity');

  // Filter and sort services
  const filteredServices = allAdvancedServices
    .filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All Services' || service.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price':
          return parseInt(a.price.replace('$', '').replace(',', '')) - parseInt(b.price.replace('$', '').replace(',', ''));
        case 'rating':
          return b.rating - a.rating;
        case 'popularity':
          return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
        default:
          return 0;
      }
    });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <SEO 
        title="2025 Advanced Services Showcase - Zion Tech Group"
        description="Discover our cutting-edge micro SAAS services across cybersecurity, fintech, healthcare, logistics, and sustainability. Real solutions with proven ROI and market validation."
        keywords={["micro SAAS", "cybersecurity", "fintech", "healthcare technology", "logistics", "sustainability", "AI services", "quantum computing", "blockchain"]}
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
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                2025 Advanced Services
              </span>
              <br />
              <span className="text-white">Showcase</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Revolutionary micro SAAS solutions across cutting-edge industries. 
              Real services with proven ROI, market validation, and enterprise-grade capabilities.
            </p>
            
            {/* Contact Information */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-8 inline-block">
              <div className="flex flex-wrap justify-center gap-6 text-white">
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span className="font-semibold">{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-green-400" />
                  <span className="font-semibold">{contactInfo.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-red-400" />
                  <span className="font-semibold">{contactInfo.address}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`mailto:${contactInfo.email}`}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                Get Started Today
              </a>
              <a
                href={contactInfo.website}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300"
              >
                Visit Website
                <ExternalLink className="inline ml-2 w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry-Leading Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our advanced services span across the most innovative and high-growth industries, 
              delivering real value with cutting-edge technology and proven results.
            </p>
          </motion.div>

          {/* Service Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: 'Cybersecurity',
                description: 'Quantum-resistant cryptography, AI threat hunting, zero trust architecture',
                icon: Shield,
                color: 'from-red-600 to-orange-600',
                count: advancedCybersecuritySolutions2025.length
              },
              {
                title: 'Fintech',
                description: 'AI credit scoring, blockchain payments, quantum financial modeling',
                icon: Building,
                color: 'from-green-600 to-emerald-600',
                count: advancedFintechSolutions2025.length
              },
              {
                title: 'Healthcare Technology',
                description: 'AI medical imaging, quantum drug discovery, patient monitoring',
                icon: Hospital,
                color: 'from-blue-600 to-cyan-600',
                count: advancedHealthcareTechSolutions2025.length
              },
              {
                title: 'Logistics & Supply Chain',
                description: 'AI optimization, quantum logistics, IoT fleet management',
                icon: Truck,
                color: 'from-purple-600 to-pink-600',
                count: advancedLogisticsSupplyChainSolutions2025.length
              },
              {
                title: 'Energy & Sustainability',
                description: 'Smart grid optimization, renewable monitoring, carbon trading',
                icon: Leaf,
                color: 'from-yellow-600 to-orange-600',
                count: advancedEnergySustainabilitySolutions2025.length
              }
            ].map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedCategory(category.title)}
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 mx-auto`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{category.description}</p>
                <div className="text-center">
                  <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {category.count} Services
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
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
                  className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="flex gap-2">
                {serviceCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Sort and View */}
              <div className="flex gap-2">
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
                    className={`p-2 rounded ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'text-white hover:bg-white/20'}`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'text-white hover:bg-white/20'}`}
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
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">
              {filteredServices.length} Advanced Services Available
            </h3>
            <p className="text-gray-300">
              Discover cutting-edge solutions with proven ROI and market validation
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
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:transform hover:scale-105"
                >
                  {/* Service Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{service.icon}</div>
                    {service.popular && (
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-3 py-1 rounded-full text-xs font-bold">
                        POPULAR
                      </span>
                    )}
                  </div>

                  {/* Service Info */}
                  <h4 className="text-xl font-bold text-white mb-2">{service.name}</h4>
                  <p className="text-gray-300 text-sm mb-4">{service.tagline}</p>
                  
                  {/* Price */}
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-white">{service.price}</span>
                    <span className="text-gray-400">{service.period}</span>
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <h5 className="text-white font-semibold mb-2">Key Features:</h5>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300 text-sm">
                          <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* ROI and Stats */}
                  <div className="mb-4 p-3 bg-white/10 rounded-lg">
                    <p className="text-green-400 text-sm font-semibold mb-2">Proven ROI:</p>
                    <p className="text-gray-300 text-xs">{service.roi}</p>
                  </div>

                  {/* Contact and Action */}
                  <div className="space-y-3">
                    <a
                      href={`mailto:${contactInfo.email}?subject=Inquiry about ${service.name}`}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-3 rounded-lg font-semibold text-center block transition-all duration-300 hover:shadow-lg"
                    >
                      Get Started
                    </a>
                    <a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full border border-white/30 text-white px-4 py-3 rounded-lg font-semibold text-center block hover:bg-white/10 transition-all duration-300"
                    >
                      Learn More
                      <ExternalLink className="inline ml-2 w-4 h-4" />
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
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Service Icon and Basic Info */}
                    <div className="flex items-start gap-4">
                      <div className="text-4xl">{service.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="text-xl font-bold text-white">{service.name}</h4>
                          {service.popular && (
                            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-2 py-1 rounded-full text-xs font-bold">
                              POPULAR
                            </span>
                          )}
                        </div>
                        <p className="text-gray-300 mb-2">{service.tagline}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <span>⭐ {service.rating}/5 ({service.reviews} reviews)</span>
                          <span>👥 {service.customers} customers</span>
                          <span>📅 Launched {service.launchDate}</span>
                        </div>
                      </div>
                    </div>

                    {/* Price and Features */}
                    <div className="flex flex-col lg:flex-row gap-6 items-center">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-white mb-1">{service.price}</div>
                        <div className="text-gray-400">{service.period}</div>
                        <div className="text-sm text-gray-300 mt-2">{service.setupTime} setup</div>
                      </div>

                      <div className="flex-1">
                        <h5 className="text-white font-semibold mb-2">Key Features:</h5>
                        <div className="grid grid-cols-2 gap-2">
                          {service.features.slice(0, 6).map((feature, idx) => (
                            <div key={idx} className="flex items-center text-gray-300 text-sm">
                              <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* ROI and Action */}
                      <div className="text-center space-y-3">
                        <div className="p-3 bg-white/10 rounded-lg">
                          <p className="text-green-400 text-sm font-semibold mb-1">ROI:</p>
                          <p className="text-gray-300 text-xs">{service.roi}</p>
                        </div>
                        
                        <div className="space-y-2">
                          <a
                            href={`mailto:${contactInfo.email}?subject=Inquiry about ${service.name}`}
                            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 hover:shadow-lg block"
                          >
                            Get Started
                          </a>
                          <a
                            href={service.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full border border-white/30 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-white/10 transition-all duration-300 block"
                          >
                            Learn More
                            <ExternalLink className="inline ml-2 w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our advanced micro SAAS services are designed to deliver real results with proven ROI. 
              Get in touch to discover how we can help you achieve your goals.
            </p>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Phone className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                  <h3 className="text-white font-semibold mb-2">Call Us</h3>
                  <p className="text-gray-300">{contactInfo.mobile}</p>
                </div>
                <div className="text-center">
                  <Mail className="w-8 h-8 text-green-400 mx-auto mb-3" />
                  <h3 className="text-white font-semibold mb-2">Email Us</h3>
                  <p className="text-gray-300">{contactInfo.email}</p>
                </div>
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-red-400 mx-auto mb-3" />
                  <h3 className="text-white font-semibold mb-2">Visit Us</h3>
                  <p className="text-gray-300 text-sm">{contactInfo.address}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`mailto:${contactInfo.email}?subject=Advanced Services Consultation`}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                Schedule a Consultation
              </a>
              <a
                href={contactInfo.website}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300"
              >
                Explore More Services
                <ExternalLink className="inline ml-2 w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-white mb-4">
            <p className="text-lg font-semibold">Zion Tech Group</p>
            <p className="text-gray-400">Advanced Micro SAAS Solutions for the Future</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-gray-400 text-sm">
            <span>© 2025 Zion Tech Group. All rights reserved.</span>
            <span>•</span>
            <a href={contactInfo.website} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <span>•</span>
            <a href={contactInfo.website} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}