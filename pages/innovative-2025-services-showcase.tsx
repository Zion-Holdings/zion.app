import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Grid, List, Filter,
  Brain, Atom, Shield, Target, Rocket,
  ArrowRight, Check, Palette, Heart, Truck, GraduationCap,
  Building, Cpu, Zap, Globe, Lock, ChartBar, Workflow,
  Star, Users, TrendingUp, Award, Clock, DollarSign, Phone, Mail, MapPin
} from 'lucide-react';

// Import our new innovative service suites
import { innovativeAIAutomationSuite } from '../data/2025-innovative-ai-automation-suite';
import { innovativeITInfrastructureSuite } from '../data/2025-innovative-it-infrastructure-suite';
import { innovativeCybersecuritySuite } from '../data/2025-innovative-cybersecurity-suite';
import { innovativeDataAnalyticsSuite } from '../data/2025-innovative-data-analytics-suite';
import { innovativeBusinessAutomationSuite } from '../data/2025-innovative-business-automation-suite';

// Combine all services
const allServices = [
  ...innovativeAIAutomationSuite,
  ...innovativeITInfrastructureSuite,
  ...innovativeCybersecuritySuite,
  ...innovativeDataAnalyticsSuite,
  ...innovativeBusinessAutomationSuite
];

// Service categories
const categories = [
  'All Services',
  'AI & Automation',
  'IT Infrastructure',
  'Cybersecurity',
  'Data Analytics',
  'Business Automation'
];

const Innovative2025ServicesShowcase: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Services');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filteredServices, setFilteredServices] = useState(allServices);

  useEffect(() => {
    let filtered = allServices;
    
    if (selectedCategory !== 'All Services') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }
    
    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.tagline.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    setFilteredServices(filtered);
  }, [searchTerm, selectedCategory]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Automation': return Brain;
      case 'IT Infrastructure': return Cpu;
      case 'Cybersecurity': return Shield;
      case 'Data Analytics': return ChartBar;
      case 'Business Automation': return Workflow;
      default: return Rocket;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI & Automation': return 'from-blue-500 to-indigo-600';
      case 'IT Infrastructure': return 'from-green-500 to-emerald-600';
      case 'Cybersecurity': return 'from-red-500 to-pink-600';
      case 'Data Analytics': return 'from-purple-500 to-pink-600';
      case 'Business Automation': return 'from-yellow-500 to-orange-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <SEO 
        title="Innovative 2025 Services Showcase - Zion Tech Group"
        description="Discover our cutting-edge micro SAAS services, IT solutions, and AI innovations. From AI automation to quantum security, we deliver real, market-ready solutions."
        keywords={["AI automation", "IT infrastructure", "cybersecurity", "data analytics", "business automation", "micro SAAS", "Zion Tech Group"]}
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
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Innovative 2025
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Services Showcase
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover our cutting-edge micro SAAS services, IT solutions, and AI innovations. 
              From AI automation to quantum security, we deliver real, market-ready solutions 
              that transform businesses and drive growth.
            </p>
            
            {/* Contact Information */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 mb-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">Contact Zion Tech Group</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center">
                  <Phone className="w-6 h-6 text-cyan-400 mb-2" />
                  <p className="text-gray-300 text-sm">Phone</p>
                  <p className="text-white font-semibold">+1 302 464 0950</p>
                </div>
                <div className="flex flex-col items-center">
                  <Mail className="w-6 h-6 text-purple-400 mb-2" />
                  <p className="text-gray-300 text-sm">Email</p>
                  <p className="text-white font-semibold">kleber@ziontechgroup.com</p>
                </div>
                <div className="flex flex-col items-center">
                  <MapPin className="w-6 h-6 text-green-400 mb-2" />
                  <p className="text-gray-300 text-sm">Address</p>
                  <p className="text-white font-semibold text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300"
              >
                Explore Services
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300"
              >
                Get Started Today
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search innovative services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                        : 'bg-white/20 text-gray-300 hover:bg-white/30'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* View Mode Toggle */}
              <div className="flex bg-white/20 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-all duration-300 ${
                    viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-all duration-300 ${
                    viewMode === 'list' ? 'bg-cyan-500 text-white' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

      {/* Services Grid/List */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {selectedCategory === 'All Services' ? 'All Innovative Services' : `${selectedCategory} Services`}
            </h2>
            <p className="text-gray-300 text-lg">
              {filteredServices.length} cutting-edge services available
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
                  className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500"
                >
                  {/* Service Card Content */}
                  <div className="p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${getCategoryColor(service.category)} rounded-xl flex items-center justify-center shadow-lg`}>
                        <span className="text-2xl">{service.icon}</span>
                      </div>
                      {service.popular && (
                        <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                          POPULAR
                        </span>
                      )}
                    </div>

                    {/* Service Info */}
                    <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-gray-300 text-sm mb-3">{service.tagline}</p>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">{service.description}</p>

                    {/* Pricing */}
                    <div className="bg-white/10 rounded-lg p-3 mb-4">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300 text-sm">Starting at</span>
                        <span className="text-2xl font-bold text-white">${service.price.monthly}/mo</span>
                      </div>
                      <p className="text-gray-400 text-xs text-center mt-1">
                        ${service.price.yearly}/year (save ${(service.price.monthly * 12 - service.price.yearly).toLocaleString()})
                      </p>
                    </div>

                    {/* Key Benefits */}
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2 text-sm">Key Benefits:</h4>
                      <ul className="space-y-1">
                        {service.benefits.slice(0, 3).map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-gray-300 text-xs">
                            <Check className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                      <div className="flex items-center">
                        <Star className="w-3 h-3 text-yellow-400 mr-1" />
                        {service.rating} ({service.reviews} reviews)
                      </div>
                      <div className="flex items-center">
                        <Users className="w-3 h-3 text-blue-400 mr-1" />
                        {service.customers.toLocaleString()}+ customers
                      </div>
                    </div>

                    {/* CTA Button */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </motion.button>
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
                  className="group bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Left Column */}
                    <div className="flex-1">
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`w-16 h-16 bg-gradient-to-r ${getCategoryColor(service.category)} rounded-xl flex items-center justify-center shadow-lg flex-shrink-0`}>
                          <span className="text-3xl">{service.icon}</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-2xl font-bold text-white">{service.name}</h3>
                            {service.popular && (
                              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                                POPULAR
                              </span>
                            )}
                          </div>
                          <p className="text-gray-300 text-lg mb-2">{service.tagline}</p>
                          <p className="text-gray-400">{service.description}</p>
                        </div>
                      </div>

                      {/* Features Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                          <ul className="space-y-1">
                            {service.features.slice(0, 5).map((feature, idx) => (
                              <li key={idx} className="flex items-center text-gray-300 text-sm">
                                <Check className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-2">Benefits:</h4>
                          <ul className="space-y-1">
                            {service.benefits.slice(0, 5).map((benefit, idx) => (
                              <li key={idx} className="flex items-center text-gray-300 text-sm">
                                <TrendingUp className="w-3 h-3 text-blue-400 mr-2 flex-shrink-0" />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="lg:w-80 flex-shrink-0">
                      {/* Pricing Card */}
                      <div className="bg-white/10 rounded-xl p-4 mb-4">
                        <h4 className="text-white font-bold text-lg mb-3">Pricing</h4>
                        <div className="text-center mb-3">
                          <span className="text-3xl font-bold text-white">${service.price.monthly}</span>
                          <span className="text-gray-300">/month</span>
                        </div>
                        <div className="text-center mb-3">
                          <span className="text-lg text-white">${service.price.yearly}</span>
                          <span className="text-gray-300">/year</span>
                          <p className="text-green-400 text-sm">
                            Save ${(service.price.monthly * 12 - service.price.yearly).toLocaleString()}
                          </p>
                        </div>
                        <div className="text-center text-gray-400 text-sm">
                          <p>{service.price.trialDays}-day free trial</p>
                          <p>Setup in {service.price.setupTime}</p>
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="bg-white/10 rounded-xl p-4 mb-4">
                        <h4 className="text-white font-bold text-lg mb-3">Performance</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-gray-300">Rating:</span>
                            <span className="text-white font-semibold">{service.rating}/5</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-300">Reviews:</span>
                            <span className="text-white font-semibold">{service.reviews}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-300">Customers:</span>
                            <span className="text-white font-semibold">{service.customers.toLocaleString()}+</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-300">Launch:</span>
                            <span className="text-white font-semibold">{service.launchDate}</span>
                          </div>
                        </div>
                      </div>

                      {/* CTA */}
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                      >
                        Get Started Today
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Zion Tech Group */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Zion Tech Group</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We deliver cutting-edge, market-ready solutions that transform businesses and drive measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Proven Excellence",
                description: "4.8+ average rating across all services with thousands of satisfied customers worldwide."
              },
              {
                icon: Zap,
                title: "Cutting-Edge Technology",
                description: "Latest AI, quantum computing, and cybersecurity innovations for future-proof solutions."
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "SOC 2 Type II, ISO 27001, and industry-leading compliance standards for maximum security."
              },
              {
                icon: TrendingUp,
                title: "Measurable ROI",
                description: "Average 300-600% ROI within 6-12 months through our innovative solutions."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-600/20 backdrop-blur-xl border border-cyan-500/30 rounded-3xl p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already leveraging our innovative solutions. 
              Get started today and experience the future of technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300"
              >
                Schedule a Demo
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300"
              >
                Contact Sales Team
              </motion.button>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-300 mb-2">Contact us directly:</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center text-white">
                <div className="flex items-center justify-center">
                  <Phone className="w-4 h-4 mr-2 text-cyan-400" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center justify-center">
                  <Mail className="w-4 h-4 mr-2 text-purple-400" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Innovative2025ServicesShowcase;
