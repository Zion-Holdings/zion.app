import React, { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Atom, 
  Shield, 
  Target, 
  Server, 
  Network, 
  Code, 
  BarChart3,
  Star,
  Sparkles,
  Zap,
  TrendingUp,
  Users,
  Globe,
  Award,
  Clock,
  CheckCircle,
  ArrowRight,
  Search,
  Filter,
  Grid,
  List,
  Eye,
  Heart,
  Infinity,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Phone,
  Mail,
  MapPin,
  Globe as GlobeIcon
} from 'lucide-react';

// Import all service data
import { revolutionary2045AdvancedRealMicroSaas } from '../data/revolutionary-2045-advanced-real-micro-saas';
import { revolutionary2045AdvancedITServices } from '../data/revolutionary-2045-advanced-it-services';
import { revolutionary2045AdvancedAIServices } from '../data/revolutionary-2045-advanced-ai-services';
import { innovative2025AIAutonomousServices } from '../data/2025-innovative-ai-autonomous-services';
import { innovativeITInfrastructureServices2025 } from '../data/2025-innovative-it-infrastructure-services';
import { innovativeMicroSaasServices2025 } from '../data/2025-innovative-micro-saas-services';

const InnovativeServicesShowcase2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'category'>('name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  // Combine all services
  const allServices = [
    ...revolutionary2045AdvancedRealMicroSaas,
    ...revolutionary2045AdvancedITServices,
    ...revolutionary2045AdvancedAIServices,
    ...innovative2025AIAutonomousServices,
    ...innovativeITInfrastructureServices2025,
    ...innovativeMicroSaasServices2025
  ];

  // Service categories
  const categories = [
    { id: 'all', name: 'All Services', icon: Sparkles, color: 'from-purple-500 to-pink-500', count: allServices.length },
    { id: 'ai-autonomous', name: 'AI & Autonomous', icon: Brain, color: 'from-cyan-500 to-blue-500', count: [...revolutionary2045AdvancedAIServices, ...innovative2025AIAutonomousServices].length },
    { id: 'quantum', name: 'Quantum Technology', icon: Atom, color: 'from-blue-500 to-indigo-500', count: allServices.filter(s => s.category.includes('Quantum')).length },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-red-500 to-orange-500', count: allServices.filter(s => s.category.includes('Security')).length },
    { id: 'micro-saas', name: 'Micro SAAS', icon: Target, color: 'from-emerald-500 to-teal-500',     count: [...revolutionary2045AdvancedRealMicroSaas, ...innovativeMicroSaasServices2025].length },
    { id: 'it-infrastructure', name: 'IT Infrastructure', icon: Server, color: 'from-yellow-500 to-orange-500', count: [...revolutionary2045AdvancedITServices, ...innovativeITInfrastructureServices2025].length },
    { id: 'edge-computing', name: 'Edge Computing', icon: Network, color: 'from-indigo-500 to-purple-500', count: allServices.filter(s => s.category.includes('Edge')).length },
    { id: 'devops', name: 'DevOps & Automation', icon: Code, color: 'from-orange-500 to-red-500', count: allServices.filter(s => s.category.includes('DevOps')).length },
    { id: 'data-analytics', name: 'Data & Analytics', icon: BarChart3, color: 'from-teal-500 to-cyan-500', count: allServices.filter(s => s.category.includes('Data')).length }
  ];

  // Filter and sort services
  const getFilteredServices = () => {
    let filtered = allServices;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => 
        service.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
        service.type.toLowerCase().includes(selectedCategory.toLowerCase())
      );
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sort services
    filtered.sort((a, b) => {
      let aValue: any, bValue: any;

      switch (sortBy) {
        case 'name':
          aValue = a.name;
          bValue = b.name;
          break;
        case 'price':
          aValue = parseFloat(a.pricing.starter.replace(/[^0-9.]/g, ''));
          bValue = parseFloat(b.pricing.starter.replace(/[^0-9.]/g, ''));
          break;
        case 'category':
          aValue = a.category;
          bValue = b.category;
          break;
        default:
          aValue = a.name;
          bValue = b.name;
      }

      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    return filtered;
  };

  const filteredServices = getFilteredServices();

  const handleServiceClick = (service: any) => {
    window.location.href = service.slug;
  };

  const handleContactClick = () => {
    window.location.href = '/contact';
  };

  return (
    <Layout>
      <div className="relative min-h-screen bg-black">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-cyan-900/20" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]" />
            
            {/* Floating Elements */}
            <motion.div
              animate={{ 
                x: [0, 100, 0],
                y: [0, -100, 0],
                rotate: [0, 360, 0]
              }}
              transition={{ 
                duration: 20,
                repeat: -1,
                ease: "linear"
              }}
              className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rounded-lg"
            />
            <motion.div
              animate={{ 
                x: [0, -100, 0],
                y: [0, 100, 0],
                rotate: [0, -360, 0]
              }}
              transition={{ 
                duration: 25,
                repeat: -1,
                ease: "linear"
              }}
              className="absolute top-40 right-32 w-24 h-24 border border-purple-400/20 rounded-full"
            />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Innovative Services
                </span>
                <br />
                <span className="text-white">Showcase 2025</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Discover our comprehensive portfolio of cutting-edge AI, quantum technology, 
                and micro SAAS solutions designed to transform your business and drive innovation.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
                {[
                  { number: `${allServices.length}+`, label: 'Innovative Services', icon: Star },
                  { number: '99.99%', label: 'Uptime Guarantee', icon: TrendingUp },
                  { number: '24/7', label: 'AI Support Available', icon: Brain },
                  { number: '250+', label: 'Countries Served', icon: Globe }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <stat.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleContactClick}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                >
                  Get Started Today
                </button>
                <button
                  onClick={() => document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 border border-cyan-400/30 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400/10 transition-all duration-300"
                >
                  Explore Services
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services-section" className="relative py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Filters and Search */}
            <div className="mb-12">
              <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
                {/* Search */}
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
                  />
                </div>

                {/* View Mode Toggle */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-cyan-500/20 text-cyan-400' : 'bg-gray-800 text-gray-400 hover:text-white'}`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-cyan-500/20 text-cyan-400' : 'bg-gray-800 text-gray-400 hover:text-white'}`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>

                {/* Sort Controls */}
                <div className="flex items-center gap-3">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                  >
                    <option value="name">Sort by Name</option>
                    <option value="price">Sort by Price</option>
                    <option value="category">Sort by Category</option>
                  </select>
                  <button
                    onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                    className="p-2 bg-gray-900/50 border border-gray-700 rounded-lg text-white hover:bg-gray-800 transition-colors"
                  >
                    {sortOrder === 'asc' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Category Filters */}
              <div className="mt-8">
                <div className="flex flex-wrap gap-3">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                        selectedCategory === category.id
                          ? 'bg-gradient-to-r ' + category.color + ' text-white border-transparent'
                          : 'bg-gray-900/50 border-gray-700 text-gray-300 hover:bg-gray-800 hover:border-gray-600'
                      }`}
                    >
                      <category.icon className="w-4 h-4" />
                      {category.name}
                      <span className="ml-1 text-xs opacity-75">({category.count})</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Services Grid/List */}
            <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
              <AnimatePresence>
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`group cursor-pointer ${
                      viewMode === 'grid' 
                        ? 'bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105'
                        : 'bg-gray-900/30 border border-gray-700/30 rounded-xl p-6 hover:border-cyan-400/30 transition-all duration-300'
                    }`}
                    onClick={() => handleServiceClick(service)}
                  >
                    {/* Service Header */}
                    <div className="mb-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-xl flex items-center justify-center">
                          {service.category.includes('AI') && <Brain className="w-6 h-6 text-cyan-400" />}
                          {service.category.includes('Quantum') && <Atom className="w-6 h-6 text-blue-400" />}
                          {service.category.includes('Security') && <Shield className="w-6 h-6 text-red-400" />}
                          {service.category.includes('Micro SAAS') && <Target className="w-6 h-6 text-emerald-400" />}
                          {service.category.includes('Infrastructure') && <Server className="w-6 h-6 text-yellow-400" />}
                          {service.category.includes('Edge') && <Network className="w-6 h-6 text-indigo-400" />}
                          {service.category.includes('DevOps') && <Code className="w-6 h-6 text-orange-400" />}
                          {service.category.includes('Data') && <BarChart3 className="w-6 h-6 text-teal-400" />}
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-400">{service.type}</div>
                          <div className="text-xs text-gray-500">{service.category}</div>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Service Features */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span className="text-sm font-medium text-gray-300">Key Features</span>
                      </div>
                      <div className="grid grid-cols-1 gap-1">
                        {service.features.slice(0, 3).map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2 text-xs text-gray-400">
                            <CheckCircle className="w-3 h-3 text-green-400" />
                            {feature}
                          </div>
                        ))}
                        {service.features.length > 3 && (
                          <div className="text-xs text-cyan-400 mt-1">
                            +{service.features.length - 3} more features
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className="w-4 h-4 text-green-400" />
                        <span className="text-sm font-medium text-gray-300">Starting at</span>
                      </div>
                      <div className="text-2xl font-bold text-white">
                        {service.pricing.starter}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Zap className="w-4 h-4 text-yellow-400" />
                        <span className="text-sm font-medium text-gray-300">Key Benefits</span>
                      </div>
                      <div className="grid grid-cols-1 gap-1">
                        {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center gap-2 text-xs text-gray-400">
                            <Infinity className="w-3 h-3 text-purple-400" />
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Market Info */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>Market Size: {service.marketSize}</span>
                        <span>Target: {service.targetAudience.split(',')[0]}...</span>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center justify-between">
                      <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium">
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </button>
                      <button className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 text-cyan-400 rounded-lg hover:from-cyan-500/30 hover:to-purple-500/30 transition-all duration-300 text-sm">
                        Get Started
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* No Results */}
            {filteredServices.length === 0 && (
              <div className="text-center py-20">
                <div className="w-24 h-24 bg-gray-900/50 border border-gray-700 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-gray-400 mb-6">
                  Try adjusting your search criteria or category filters
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSearchQuery('');
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                >
                  View All Services
                </button>
              </div>
            )}

            {/* Results Count */}
            {filteredServices.length > 0 && (
              <div className="mt-12 text-center">
                <p className="text-gray-400">
                  Showing {filteredServices.length} of {allServices.length} services
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="relative py-20 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Let's discuss how our innovative services can drive your success. 
                Our team of experts is ready to help you implement cutting-edge solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <button
                  onClick={handleContactClick}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                >
                  Contact Us Today
                </button>
                <button
                  onClick={() => window.location.href = '/pricing'}
                  className="px-8 py-4 border border-cyan-400/30 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400/10 transition-all duration-300"
                >
                  View Pricing
                </button>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-xl flex items-center justify-center mb-3">
                    <Phone className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="text-white font-semibold">Phone</div>
                  <div className="text-gray-400">+1 302 464 0950</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-xl flex items-center justify-center mb-3">
                    <Mail className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="text-white font-semibold">Email</div>
                  <div className="text-gray-400">kleber@ziontechgroup.com</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-xl flex items-center justify-center mb-3">
                    <GlobeIcon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="text-white font-semibold">Website</div>
                  <div className="text-gray-400">ziontechgroup.com</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default InnovativeServicesShowcase2025;