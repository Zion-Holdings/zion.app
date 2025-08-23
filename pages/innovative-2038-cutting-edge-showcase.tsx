import React, { useState } from 'react';
import SEO from '../components/SEO';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Search, Grid, List, Star, Phone, Mail, MapPin,
  Brain, Atom, Shield, Target, Rocket,
  Check, Heart, Building,
  Zap, Globe, Users, TrendingUp, Cloud, Database
} from 'lucide-react';

// Import our new innovative 2038 services
import { innovative2038CuttingEdgeServices } from '../data/innovative-2038-cutting-edge-services';
import { innovative2038ITInfrastructureServices } from '../data/innovative-2038-it-infrastructure-services';

// Combine all services
const allInnovative2038Services = [
  ...innovative2038CuttingEdgeServices,
  ...innovative2038ITInfrastructureServices
];

// Contact information
const contactInfo = {
  phone: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const Innovative2038CuttingEdgeShowcase: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Filter services based on search and category
  const filteredServices = allInnovative2038Services.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Get unique categories
  const categories = [
    { id: 'all', name: 'All Services', icon: <Grid className="w-5 h-5" />, color: 'from-gray-500 to-slate-500' },
    { id: 'AI & Holographic Technology', name: 'AI & Holographic', icon: <Brain className="w-5 h-5" />, color: 'from-purple-500 to-pink-500' },
    { id: 'Quantum AI & Healthcare', name: 'Quantum Healthcare', icon: <Atom className="w-5 h-5" />, color: 'from-blue-500 to-cyan-500' },
    { id: 'AI & Legal Technology', name: 'AI Legal Tech', icon: <Shield className="w-5 h-5" />, color: 'from-green-500 to-emerald-500' },
    { id: 'Space Technology & Automation', name: 'Space Tech', icon: <Rocket className="w-5 h-5" />, color: 'from-indigo-500 to-purple-500' },
    { id: 'Quantum AI & Fintech', name: 'Quantum Fintech', icon: <TrendingUp className="w-5 h-5" />, color: 'from-yellow-500 to-orange-500' },
    { id: 'AI Consciousness & Emotional Intelligence', name: 'AI Consciousness', icon: <Heart className="w-5 h-5" />, color: 'from-pink-500 to-rose-500' },
    { id: 'Quantum AI & Neural Networks', name: 'Quantum Neural', icon: <Brain className="w-5 h-5" />, color: 'from-violet-500 to-purple-500' },
    { id: 'AI & Robotics', name: 'AI Robotics', icon: <Target className="w-5 h-5" />, color: 'from-red-500 to-pink-500' },
    { id: 'Quantum Security & Internet', name: 'Quantum Security', icon: <Shield className="w-5 h-5" />, color: 'from-cyan-500 to-blue-500' },
    { id: 'AI & Sustainability', name: 'AI Sustainability', icon: <Globe className="w-5 h-5" />, color: 'from-emerald-500 to-green-500' },
    { id: 'Quantum Cloud & Infrastructure', name: 'Quantum Cloud', icon: <Cloud className="w-5 h-5" />, color: 'from-blue-500 to-indigo-500' },
    { id: 'Autonomous DevOps & Automation', name: 'Autonomous DevOps', icon: <Zap className="w-5 h-5" />, color: 'from-orange-500 to-red-500' },
    { id: 'Quantum Edge Computing', name: 'Quantum Edge', icon: <Globe className="w-5 h-5" />, color: 'from-teal-500 to-cyan-500' },
    { id: 'AI Cybersecurity & Orchestration', name: 'AI Cybersecurity', icon: <Shield className="w-5 h-5" />, color: 'from-red-500 to-orange-500' },
    { id: 'Quantum Data Center & Automation', name: 'Quantum DC', icon: <Building className="w-5 h-5" />, color: 'from-gray-500 to-slate-500' },
    { id: 'Autonomous IT Operations', name: 'Autonomous IT', icon: <Users className="w-5 h-5" />, color: 'from-indigo-500 to-purple-500' },
    { id: 'Quantum Network Security', name: 'Quantum Network', icon: <Shield className="w-5 h-5" />, color: 'from-green-500 to-teal-500' },
    { id: 'AI Infrastructure Monitoring', name: 'AI Monitoring', icon: <Target className="w-5 h-5" />, color: 'from-blue-500 to-cyan-500' },
    { id: 'Quantum Storage & Optimization', name: 'Quantum Storage', icon: <Database className="w-5 h-5" />, color: 'from-purple-500 to-pink-500' },
    { id: 'Autonomous Cloud Migration', name: 'Autonomous Migration', icon: <Globe className="w-5 h-5" />, color: 'from-yellow-500 to-orange-500' }
  ];

  return (
    <Layout>
      <SEO 
        title="Innovative 2038 Cutting-Edge Services Showcase | Zion Tech Group"
        description="Discover our revolutionary 2038 cutting-edge services including AI holographic meetings, quantum drug discovery, autonomous legal assistance, and more. Transform your business with next-generation technology."
        keywords={[
          '2038 services',
          'cutting-edge technology',
          'AI holographic',
          'quantum computing',
          'autonomous systems',
          'space technology',
          'Zion Tech Group'
        ]}
      />
      
      <main className="relative z-10 pt-24 lg:pt-28">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-black via-purple-900/20 to-black relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-32 h-32 border border-purple-400/20 rounded-lg animate-pulse"></div>
            <div className="absolute top-40 right-32 w-24 h-24 border border-cyan-400/20 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute bottom-32 left-32 w-40 h-40 border border-pink-400/20 transform rotate-45 animate-pulse delay-2000"></div>
          </div>
          
          <div className="max-w-6xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-full text-purple-400 text-sm font-medium">
                <Star className="w-4 h-4" />
                <span>Innovation Leader 2038</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
                Innovative 2038 Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Experience the future of technology with our revolutionary cutting-edge services that push the boundaries of what's possible
              </p>
              
              {/* Contact Information */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a href={`tel:${contactInfo.phone}`} className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                  <Phone className="w-5 h-5" />
                  {contactInfo.phone}
                </a>
                <a href={`mailto:${contactInfo.email}`} className="inline-flex items-center gap-2 px-6 py-3 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-black transition-all duration-300 transform hover:scale-105">
                  <Mail className="w-5 h-5" />
                  {contactInfo.email}
                </a>
              </div>
              
              <div className="text-center text-gray-400">
                <MapPin className="w-5 h-5 inline mr-2" />
                {contactInfo.address}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 px-4 bg-black/30">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search innovative services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20"
                />
              </div>
              
              {/* Category Filter */}
              <div className="flex gap-2 overflow-x-auto pb-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {category.icon}
                    {category.name}
                  </button>
                ))}
              </div>
              
              {/* View Mode Toggle */}
              <div className="flex gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === 'grid' ? 'bg-purple-500 text-white' : 'bg-white/10 text-gray-400 hover:bg-white/20'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === 'list' ? 'bg-purple-500 text-white' : 'bg-white/10 text-gray-400 hover:bg-white/20'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid/List */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                {filteredServices.length} Revolutionary Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our comprehensive portfolio of cutting-edge 2038 services designed to transform your business and drive innovation
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
                    className="group bg-gradient-to-br from-white/5 to-white/10 border border-gray-600/30 rounded-2xl p-6 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    {/* Service Header */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-medium text-purple-400 bg-purple-400/10 px-2 py-1 rounded-full">
                          {service.category}
                        </span>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-gray-300">{service.rating}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-gray-400 text-sm mb-3">{service.tagline}</p>
                    </div>

                    {/* Service Description */}
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                      {service.description}
                    </p>

                    {/* Pricing */}
                    <div className="mb-4">
                      <div className="text-2xl font-bold text-purple-400 mb-1">
                        {service.pricing?.starter || 'Contact for pricing'}
                      </div>
                      <div className="text-xs text-gray-400">Starting price</div>
                    </div>

                    {/* Features */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                      <div className="space-y-1">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-gray-400">
                            <Check className="w-3 h-3 text-green-400" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Contact and Learn More */}
                    <div className="space-y-3">
                      <a
                        href={service.link}
                        className="block w-full text-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                      >
                        Learn More
                      </a>
                      <div className="flex gap-2">
                        <a
                          href={`tel:${service.contactInfo.phone}`}
                          className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-white/10 text-gray-300 text-sm rounded-lg hover:bg-white/20 transition-colors"
                        >
                          <Phone className="w-4 h-4" />
                          Call
                        </a>
                        <a
                          href={`mailto:${service.contactInfo.email}`}
                          className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-white/10 text-gray-300 text-sm rounded-lg hover:bg-white/20 transition-colors"
                        >
                          <Mail className="w-4 h-4" />
                          Email
                        </a>
                      </div>
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
                    className="group bg-gradient-to-r from-white/5 to-white/10 border border-gray-600/30 rounded-xl p-6 hover:border-purple-400/50 transition-all duration-300"
                  >
                    <div className="flex flex-col lg:flex-row gap-6">
                      {/* Service Info */}
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm font-medium text-purple-400 bg-purple-400/10 px-3 py-1 rounded-full">
                            {service.category}
                          </span>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-sm text-gray-300">{service.rating}</span>
                          </div>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                          {service.name}
                        </h3>
                        <p className="text-gray-400 mb-3">{service.tagline}</p>
                        <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                        
                        {/* Features Grid */}
                        <div className="grid grid-cols-2 gap-2 mb-4">
                          {service.features.slice(0, 6).map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-xs text-gray-400">
                              <Check className="w-3 h-3 text-green-400" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Pricing and Actions */}
                      <div className="lg:w-64 space-y-4">
                        <div className="text-center">
                                                  <div className="text-3xl font-bold text-purple-400 mb-1">
                          {service.pricing?.starter || 'Contact for pricing'}
                        </div>
                          <div className="text-sm text-gray-400 mb-2">Starting price</div>
                                                      <div className="text-xs text-gray-500">
                              Pro: {service.pricing?.pro || 'Contact'} | Enterprise: {service.pricing?.enterprise || 'Contact'}
                            </div>
                        </div>

                        <div className="space-y-3">
                          <a
                            href={service.link}
                            className="block w-full text-center px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                          >
                            Learn More
                          </a>
                          
                          <div className="grid grid-cols-2 gap-2">
                            <a
                              href={`tel:${service.contactInfo.phone}`}
                              className="flex items-center justify-center gap-2 px-3 py-2 bg-white/10 text-gray-300 text-sm rounded-lg hover:bg-white/20 transition-colors"
                            >
                              <Phone className="w-4 h-4" />
                              Call
                            </a>
                            <a
                              href={`mailto:${service.contactInfo.email}`}
                              className="flex items-center justify-center gap-2 px-3 py-2 bg-white/10 text-gray-300 text-sm rounded-lg hover:bg-white/20 transition-colors"
                            >
                              <Mail className="w-4 h-4" />
                              Email
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

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-purple-900/20 to-pink-900/20 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join the future of technology with Zion Tech Group. Let's build something extraordinary together with our cutting-edge 2038 services.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25"
                >
                  <Phone className="w-5 h-5" />
                  Call Now: {contactInfo.phone}
                </a>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-black transition-all duration-300 transform hover:scale-105"
                >
                  <Mail className="w-5 h-5" />
                  Email Us
                </a>
              </div>
              
              <div className="text-center text-gray-400">
                <MapPin className="w-5 h-5 inline mr-2" />
                {contactInfo.address}
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Innovative2038CuttingEdgeShowcase;