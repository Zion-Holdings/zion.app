import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Grid, List, Filter,
  Brain, Atom, Shield, Target, Rocket,
  ArrowRight, Check, Palette, Heart, Truck, GraduationCap,
  Building, Cpu, Zap, Globe, Star, TrendingUp,
  Users, Award, Clock, DollarSign, BarChart3, Lock
} from 'lucide-react';

// Import our new innovative services
import { innovativeMicroSaasServices2025V3 } from '../data/2025-innovative-micro-saas-expansion-v3';
import { innovativeITInfrastructureServices2025V3 } from '../data/2025-innovative-it-infrastructure-expansion-v3';
import { innovativeAIServices2025V3 } from '../data/2025-innovative-ai-services-expansion-v3';

const ComprehensiveInnovativeServicesShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Combine all innovative services
  const allInnovativeServices = [
    ...innovativeMicroSaasServices2025V3,
    ...innovativeITInfrastructureServices2025V3,
    ...innovativeAIServices2025V3
  ];

  // Filter services by category and search
  const getFilteredServices = () => {
    let filtered = allInnovativeServices;
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => 
        service.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
        service.type.toLowerCase().includes(selectedCategory.toLowerCase())
      );
    }
    
    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    return filtered;
  };

  const categories = [
    { id: 'all', name: 'All Services', icon: Grid, color: 'from-gray-500 to-slate-500', count: allInnovativeServices.length },
    { id: 'micro saas', name: 'Micro SAAS', icon: Building, color: 'from-blue-500 to-cyan-500', count: innovativeMicroSaasServices2025V3.length },
    { id: 'it infrastructure', name: 'IT Infrastructure', icon: Cpu, color: 'from-green-500 to-emerald-500', count: innovativeITInfrastructureServices2025V3.length },
    { id: 'ai services', name: 'AI Services', icon: Brain, color: 'from-purple-500 to-pink-500', count: innovativeAIServices2025V3.length },
    { id: 'quantum', name: 'Quantum Technology', icon: Atom, color: 'from-indigo-500 to-blue-500', count: allInnovativeServices.filter(s => s.category.includes('Quantum')).length },
    { id: 'security', name: 'Security & Compliance', icon: Shield, color: 'from-red-500 to-orange-500', count: allInnovativeServices.filter(s => s.category.includes('Security') || s.category.includes('Compliance')).length }
  ];

  const stats = [
    { number: `${allInnovativeServices.length}+`, label: "Innovative Services", icon: Star, color: "from-yellow-400 to-orange-500" },
    { number: "99.99%", label: "Uptime Guarantee", icon: TrendingUp, color: "from-green-400 to-emerald-500" },
    { number: "24/7", label: "AI-Powered Support", icon: Brain, color: "from-purple-400 to-pink-500" },
    { number: "$50B+", label: "Market Opportunity", icon: DollarSign, color: "from-blue-400 to-cyan-500" }
  ];

  const ServiceCard = ({ service }: { service: any }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden group"
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
              {service.name}
            </h3>
            <p className="text-gray-600 text-sm mb-3">{service.tagline}</p>
          </div>
          <div className="ml-4">
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
              service.type === 'Micro SAAS' ? 'bg-blue-100 text-blue-800' :
              service.type === 'IT Infrastructure' ? 'bg-green-100 text-green-800' :
              'bg-purple-100 text-purple-800'
            }`}>
              {service.type}
            </span>
          </div>
        </div>

        <p className="text-gray-700 mb-4 line-clamp-3">{service.description}</p>

        <div className="mb-4">
          <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
          <div className="grid grid-cols-1 gap-1">
            {service.features.slice(0, 4).map((feature: string, index: number) => (
              <div key={index} className="flex items-center text-sm text-gray-600">
                <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <h4 className="font-semibold text-gray-900 mb-2">Pricing:</h4>
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-blue-600">
              {service.pricing.starter}
            </span>
            <span className="text-gray-500">/ month</span>
          </div>
          <p className="text-sm text-gray-600">Professional: {service.pricing.professional} | Enterprise: {service.pricing.enterprise}</p>
        </div>

        <div className="mb-4">
          <h4 className="font-semibold text-gray-900 mb-2">Key Benefits:</h4>
          <div className="grid grid-cols-1 gap-1">
            {service.benefits.slice(0, 3).map((benefit: string, index: number) => (
              <div key={index} className="flex items-center text-sm text-gray-600">
                <Zap className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <h4 className="font-semibold text-gray-900 mb-2">Market Size:</h4>
          <p className="text-sm text-gray-600 font-medium">{service.marketSize}</p>
        </div>

        <div className="flex items-center justify-between">
          <a
            href={service.slug}
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Learn More
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
          <div className="text-right">
            <p className="text-xs text-gray-500">Contact:</p>
            <p className="text-sm font-medium text-gray-900">{service.contact}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const ServiceList = ({ service }: { service: any }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 p-6"
    >
      <div className="flex items-start space-x-4">
        <div className="flex-1">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">{service.name}</h3>
              <p className="text-gray-600 text-sm mb-2">{service.tagline}</p>
            </div>
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
              service.type === 'Micro SAAS' ? 'bg-blue-100 text-blue-800' :
              service.type === 'IT Infrastructure' ? 'bg-green-100 text-green-800' :
              'bg-purple-100 text-purple-800'
            }`}>
              {service.type}
            </span>
          </div>

          <p className="text-gray-700 mb-3">{service.description}</p>

          <div className="grid grid-cols-2 gap-4 mb-3">
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Features:</h4>
              <div className="text-sm text-gray-600">
                {service.features.slice(0, 3).map((feature: string, index: number) => (
                  <div key={index} className="flex items-center">
                    <Check className="w-3 h-3 text-green-500 mr-1" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Benefits:</h4>
              <div className="text-sm text-gray-600">
                {service.benefits.slice(0, 3).map((benefit: string, index: number) => (
                  <div key={index} className="flex items-center">
                    <Zap className="w-3 h-3 text-yellow-500 mr-1" />
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Starting at: <span className="font-bold text-blue-600">{service.pricing.starter}</span></p>
              <p className="text-xs text-gray-500">Market: {service.marketSize}</p>
            </div>
            <a
              href={service.slug}
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Learn More
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <SEO
        title="2025 Comprehensive Innovative Services Showcase | Zion Tech Group"
        description="Discover our comprehensive portfolio of innovative micro SAAS, IT infrastructure, and AI services. Revolutionary solutions for the future of business technology."
        keywords={["innovative services", "micro SAAS", "IT infrastructure", "AI services", "quantum technology", "2025", "Zion Tech Group"]}
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              2025 Comprehensive Innovative
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                Services Showcase
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Revolutionary micro SAAS, IT infrastructure, and AI services that transform businesses and drive innovation
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#services"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors text-lg"
              >
                Explore Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-colors text-lg"
              >
                Get Started
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${stat.color} mb-4`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Revolutionary Services Portfolio
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover our comprehensive suite of innovative services designed to transform your business operations, 
                enhance security, and drive growth through cutting-edge technology.
              </p>
            </motion.div>
          </div>

          {/* Filters and Search */}
          <div className="mb-12">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Category Filters */}
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`inline-flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                    }`}
                  >
                    <category.icon className="w-4 h-4 mr-2" />
                    {category.name}
                    <span className="ml-2 bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>

              {/* Search and View Toggle */}
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
                  />
                </div>
                <div className="flex bg-gray-100 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-md transition-colors ${
                      viewMode === 'grid' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-md transition-colors ${
                      viewMode === 'list' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Services Grid/List */}
          <div className="mb-12">
            <AnimatePresence mode="wait">
              {getFilteredServices().length > 0 ? (
                viewMode === 'grid' ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {getFilteredServices().map((service, index) => (
                      <ServiceCard key={service.id} service={service} />
                    ))}
                  </div>
                ) : (
                  <div className="space-y-6">
                    {getFilteredServices().map((service, index) => (
                      <ServiceList key={service.id} service={service} />
                    ))}
                  </div>
                )
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-16"
                >
                  <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No services found</h3>
                  <p className="text-gray-600">Try adjusting your search criteria or category filters.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Contact CTA */}
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white"
            >
              <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Our innovative services are designed to give you a competitive edge in the digital age. 
                Contact us today to learn how we can help you achieve your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors text-lg"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-colors text-lg"
                >
                  Call +1 302 464 0950
                </a>
              </div>
              <div className="mt-8 text-blue-100">
                <p>Email: kleber@ziontechgroup.com</p>
                <p>Address: 364 E Main St STE 1008 Middletown DE 19709</p>
                <p>Website: <a href="https://ziontechgroup.com" className="underline hover:text-white">https://ziontechgroup.com</a></p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensiveInnovativeServicesShowcase;