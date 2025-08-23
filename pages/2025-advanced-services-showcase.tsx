import React, { useState } from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Search, Grid, List, Star, CheckCircle, Shield, 
  Brain, Cloud, Zap, Users, TrendingUp, Lock,
  ArrowRight, Check, Palette, Heart, Truck, GraduationCap,
<<<<<<< HEAD
  Building, Cpu, Database, Globe, Rocket, Target, Phone, Mail, MapPin
} from 'lucide-react';

// Import our new service data
import { real2025AdvancedAIServices } from '../data/real-2025-advanced-ai-services';
import { real2025ITInfrastructureServices } from '../data/real-2025-it-infrastructure-services';
import { real2025InnovativeMicroSaas } from '../data/real-2025-innovative-micro-saas';

=======
  Building, Cpu, DollarSign, Star, Users, TrendingUp,
  Phone, Mail, MapPin, Globe, Clock, Zap
} from 'lucide-react';

// Import our new advanced service data
import { advancedFinancialTechServices2025 } from '../data/2025-advanced-financial-tech-services';
import { advancedHealthcareTechServices2025 } from '../data/2025-advanced-healthcare-tech-services';
import { advancedLogisticsSupplyChainServices2025 } from '../data/2025-advanced-logistics-supply-chain-services';
import { advancedCybersecurityServices2025 } from '../data/2025-advanced-cybersecurity-services';

// Combine all services
const allAdvancedServices = [
  ...advancedFinancialTechServices2025,
  ...advancedHealthcareTechServices2025,
  ...advancedLogisticsSupplyChainServices2025,
  ...advancedCybersecurityServices2025
];

>>>>>>> 0d3d59dc48bc65c272e3c7f2106b07881fc97407
// Contact information
const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

<<<<<<< HEAD
=======
export default function AdvancedServicesShowcase2025() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'rating' | 'popularity'>('name');

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(allAdvancedServices.map(service => service.category)))];

  // Filter and sort services
  const filteredServices = allAdvancedServices
    .filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
>>>>>>> 0d3d59dc48bc65c272e3c7f2106b07881fc97407
        case 'price':
          return parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', ''));
        case 'rating':
          return b.rating - a.rating;
        case 'customers':
          return b.customers - a.customers;
=======
        case 'price':
          return a.price.monthly - b.price.monthly;
        case 'rating':
          return b.rating - a.rating;
        case 'popularity':
          return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
        default:
          return a.name.localeCompare(b.name);
      }
    });

<<<<<<< HEAD
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
=======
const categories = [
  {
    id: 'all',
    name: 'All Services',
    icon: <Grid className="w-6 h-6" />,
    color: 'from-gray-500 to-slate-500',
    description: 'Complete portfolio of advanced services'
  },
  {
    id: 'ai-services',
    name: 'AI Services',
    icon: <Brain className="w-6 h-6" />,
    color: 'from-purple-500 to-pink-600',
    description: 'Advanced artificial intelligence solutions'
  },
  {
    id: 'it-infrastructure',
    name: 'IT Infrastructure',
    icon: <Cpu className="w-6 h-6" />,
    color: 'from-blue-500 to-cyan-600',
    description: 'Modern infrastructure and cloud solutions'
  },
  {
    id: 'micro-saas',
    name: 'Micro SAAS',
    icon: <Rocket className="w-6 h-6" />,
    color: 'from-green-500 to-emerald-600',
    description: 'Innovative micro software solutions'
  }
];

// Create unified services array
const allServices = [
  ...real2025AdvancedAIServices,
  ...real2025ITInfrastructureServices,
  ...real2025InnovativeMicroSaas
];

const AdvancedServicesShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || 
      (selectedCategory === 'ai-services' && service.category.includes('AI')) ||
      (selectedCategory === 'it-infrastructure' && (service.category.includes('Infrastructure') || service.category.includes('Cloud') || service.category.includes('DevOps'))) ||
      (selectedCategory === 'micro-saas' && (service.category.includes('Finance') || service.category.includes('HR') || service.category.includes('Supply Chain') || service.category.includes('Content') || service.category.includes('Sales')));
    
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  const getServiceCategory = (service: any) => {
    if (service.category.includes('AI')) return 'ai-services';
    if (service.category.includes('Infrastructure') || service.category.includes('Cloud') || service.category.includes('DevOps')) return 'it-infrastructure';
    return 'micro-saas';
=======
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
>>>>>>> 0d3d59dc48bc65c272e3c7f2106b07881fc97407
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <SEO 
        title="2025 Advanced Services Showcase - Zion Tech Group"
<<<<<<< HEAD
        description="Discover our cutting-edge AI services, IT infrastructure solutions, and innovative micro SAAS platforms. Transform your business with Zion Tech Group's advanced technology solutions."
        keywords="AI services, IT infrastructure, micro SAAS, cloud solutions, automation, cybersecurity, data analytics"
=======
        description="Discover our comprehensive suite of advanced micro SAAS services, IT solutions, and AI-powered platforms. From financial technology to healthcare, logistics to cybersecurity - we have the solutions you need."
        keywords={["micro SAAS", "IT services", "AI services", "financial technology", "healthcare technology", "logistics", "supply chain", "cybersecurity", "Zion Tech Group"]}
        canonical="https://ziontechgroup.com/2025-advanced-services-showcase"
>>>>>>> 0d3d59dc48bc65c272e3c7f2106b07881fc97407
      />
      
      {/* Hero Section */}
<<<<<<< HEAD
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.h1 
=======
      <section className="relative py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
>>>>>>> 0d3d59dc48bc65c272e3c7f2106b07881fc97407
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
          >
<<<<<<< HEAD
            2025 Advanced Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Pioneering the future with cutting-edge AI, infrastructure, and micro SAAS solutions that drive business transformation
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a 
              href={`mailto:${contactInfo.email}`}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </a>
            <a 
              href={`tel:${contactInfo.mobile}`}
              className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              Call Now
            </a>
=======
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              2025 Advanced Services Showcase
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Discover our comprehensive suite of cutting-edge micro SAAS services, IT solutions, and AI-powered platforms designed to transform your business operations.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white bg-opacity-20 px-4 py-2 rounded-full">
                <Users className="w-4 h-4" />
                <span>20+ Advanced Services</span>
              </div>
              <div className="flex items-center gap-2 bg-white bg-opacity-20 px-4 py-2 rounded-full">
                <Star className="w-4 h-4" />
                <span>4.8+ Average Rating</span>
              </div>
              <div className="flex items-center gap-2 bg-white bg-opacity-20 px-4 py-2 rounded-full">
                <TrendingUp className="w-4 h-4" />
                <span>Proven ROI</span>
              </div>
            </div>
>>>>>>> 0d3d59dc48bc65c272e3c7f2106b07881fc97407
          </motion.div>
        </div>
      </section>

      {/* Contact Information Banner */}
<<<<<<< HEAD
      <section className="py-8 px-4 bg-gradient-to-r from-blue-900/50 to-purple-900/50 border-y border-blue-500/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Phone className="w-6 h-6 text-cyan-400 mb-2" />
              <p className="text-gray-300 text-sm">Mobile</p>
              <a href={`tel:${contactInfo.mobile}`} className="text-cyan-400 font-semibold hover:text-cyan-300">
                {contactInfo.mobile}
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-6 h-6 text-cyan-400 mb-2" />
              <p className="text-gray-300 text-sm">Email</p>
              <a href={`mailto:${contactInfo.email}`} className="text-cyan-400 font-semibold hover:text-cyan-300">
                {contactInfo.email}
              </a>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-6 h-6 text-cyan-400 mb-2" />
              <p className="text-gray-300 text-sm">Address</p>
              <p className="text-cyan-400 font-semibold">
                {contactInfo.address}
              </p>
=======
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap items-center justify-center gap-8 text-gray-700">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-blue-600" />
              <span className="font-medium">{contactInfo.mobile}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-blue-600" />
              <span className="font-medium">{contactInfo.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-blue-600" />
              <span className="font-medium">{contactInfo.address}</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-blue-600" />
              <a href={contactInfo.website} className="font-medium text-blue-600 hover:text-blue-800">
                {contactInfo.website}
              </a>
>>>>>>> 0d3d59dc48bc65c272e3c7f2106b07881fc97407
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Advanced Technology Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your business with our cutting-edge services designed for the modern digital landscape
            </p>
          </motion.div>

          {/* Search and Filters */}
          <div className="mb-12">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="flex gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                        : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                    }`}
                  >
                    {category.icon}
                    <span className="ml-2">{category.name}</span>
                  </button>
                ))}
              </div>

              {/* View Mode Toggle */}
              <div className="flex gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === 'grid'
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-800 text-gray-400 hover:bg-slate-700'
                  }`}
=======
      {/* Search and Filters */}
      <section className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Sort and View Controls */}
            <div className="flex items-center gap-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="name">Sort by Name</option>
                <option value="price">Sort by Price</option>
                <option value="rating">Sort by Rating</option>
                <option value="popularity">Sort by Popularity</option>
              </select>

              <div className="flex border border-gray-300 rounded-lg">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600'}`}
>>>>>>> 0d3d59dc48bc65c272e3c7f2106b07881fc97407
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
<<<<<<< HEAD
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === 'list'
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-800 text-gray-400 hover:bg-slate-700'
                  }`}
=======
                  className={`p-2 ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600'}`}
>>>>>>> 0d3d59dc48bc65c272e3c7f2106b07881fc97407
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

<<<<<<< HEAD
          {/* Services Grid/List */}
          <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}>
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 ${
                  viewMode === 'list' ? 'flex' : ''
                }`}
              >
                {/* Service Header */}
                <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{service.icon}</span>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{service.name}</h3>
                        <p className="text-sm text-gray-400">{service.category}</p>
                      </div>
                    </div>
                    {service.popular && (
                      <span className="px-2 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-medium rounded-full">
                        Popular
                      </span>
                    )}
                  </div>

                  <p className="text-gray-300 mb-4">{service.description}</p>

                  {/* Pricing */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-cyan-400">${service.price.monthly}</span>
                      <span className="text-gray-400">/month</span>
                    </div>
                    <p className="text-sm text-gray-500">${service.price.yearly}/year (save ${(service.price.monthly * 12 - service.price.yearly).toLocaleString()})</p>
                  </div>

                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                    <div className="grid grid-cols-1 gap-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Benefits:</h4>
                    <div className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                          <TrendingUp className="w-4 h-4 text-blue-400" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={service.link}
                      className="flex-1 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                    >
                      Learn More
                    </a>
                    <a
                      href={`mailto:${contactInfo.email}?subject=Inquiry about ${service.name}`}
                      className="px-4 py-2 border border-cyan-500 text-cyan-400 font-medium rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
                    >
                      Contact
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {filteredServices.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-300 mb-2">No services found</h3>
              <p className="text-gray-400">Try adjusting your search terms or category filter</p>
=======
      {/* Services Grid/List */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}
          >
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                  viewMode === 'list' ? 'flex' : ''
                }`}
              >
                {viewMode === 'grid' ? (
                  // Grid View
                  <div>
                    {/* Service Header */}
                    <div className={`h-32 bg-gradient-to-r ${service.color} relative`}>
                      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                      <div className="absolute top-4 right-4 text-4xl">{service.icon}</div>
                      {service.popular && (
                        <div className="absolute top-4 left-4 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold">
                          POPULAR
                        </div>
                      )}
                    </div>

                    {/* Service Content */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-xl font-bold text-gray-900">{service.name}</h3>
                        <div className="flex items-center gap-1 text-yellow-400">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="text-sm text-gray-600">{service.rating}</span>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-4">{service.tagline}</p>

                      {/* Pricing */}
                      <div className="mb-4">
                        <div className="flex items-baseline gap-2">
                          <span className="text-3xl font-bold text-blue-600">${service.price.monthly}</span>
                          <span className="text-gray-500">/month</span>
                        </div>
                        <div className="text-sm text-gray-500">
                          ${service.price.yearly}/year (save ${Math.round((service.price.monthly * 12 - service.price.yearly) / 12)}/month)
                        </div>
                      </div>

                      {/* Features Preview */}
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {service.features.slice(0, 3).map((feature, index) => (
                            <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                              <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Stats */}
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <span>{service.customers.toLocaleString()} customers</span>
                        <span>{service.reviews} reviews</span>
                      </div>

                      {/* CTA Button */}
                      <a
                        href={service.link}
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                ) : (
                  // List View
                  <div className="flex-1 p-6">
                    <div className="flex items-start gap-6">
                      <div className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center text-3xl flex-shrink-0`}>
                        {service.icon}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-xl font-bold text-gray-900">{service.name}</h3>
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1 text-yellow-400">
                              <Star className="w-4 h-4 fill-current" />
                              <span className="text-sm text-gray-600">{service.rating}</span>
                            </div>
                            {service.popular && (
                              <span className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold">
                                POPULAR
                              </span>
                            )}
                          </div>
                        </div>

                        <p className="text-gray-600 mb-3">{service.tagline}</p>

                        <div className="flex items-center gap-6 text-sm text-gray-500 mb-3">
                          <span>${service.price.monthly}/month</span>
                          <span>{service.customers.toLocaleString()} customers</span>
                          <span>{service.reviews} reviews</span>
                        </div>

                        <div className="flex items-center gap-4">
                          <a
                            href={service.link}
                            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center gap-2"
                          >
                            Learn More
                            <ArrowRight className="w-4 h-4" />
                          </a>
                                                     <span className="text-sm text-gray-500">
                             {service.price.trialDays}-day free trial
                           </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No services found</h3>
              <p className="text-gray-600">Try adjusting your search terms or filters.</p>
>>>>>>> 0d3d59dc48bc65c272e3c7f2106b07881fc97407
            </div>
          )}
        </div>
      </section>

<<<<<<< HEAD
      {/* Contact CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Our team of experts is ready to help you implement these cutting-edge solutions and drive real business results.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a 
              href={`mailto:${contactInfo.email}?subject=Business Transformation Consultation`}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Schedule Consultation
            </a>
            <a 
              href={`tel:${contactInfo.mobile}`}
              className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              Call {contactInfo.mobile}
            </a>
=======
      {/* Why Choose Zion Tech Group */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver cutting-edge solutions with proven ROI, comprehensive support, and industry-leading expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Proven ROI</h3>
              <p className="text-gray-600">Our services deliver measurable results with 20-80% improvements in efficiency and cost savings.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Enterprise Security</h3>
              <p className="text-gray-600">SOC 2 Type II, ISO 27001, and industry-specific compliance certifications.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock technical support and dedicated account management.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Continuous Innovation</h3>
              <p className="text-gray-600">Regular updates and new features to keep you ahead of the competition.</p>
            </div>
>>>>>>> 0d3d59dc48bc65c272e3c7f2106b07881fc97407
          </motion.div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Footer */}
      <footer className="py-12 px-4 border-t border-slate-700">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Zion Tech Group</h3>
              <p className="text-gray-400 mb-4">
                Pioneering the future of technology with innovative solutions that drive business transformation.
              </p>
              <div className="flex gap-4">
                <a href={contactInfo.website} className="text-cyan-400 hover:text-cyan-300">
                  {contactInfo.website.replace('https://', '')}
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p>📱 {contactInfo.mobile}</p>
                <p>✉️ {contactInfo.email}</p>
                <p>📍 {contactInfo.address}</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
              <div className="space-y-2 text-gray-400">
                <p>🤖 AI Services</p>
                <p>☁️ IT Infrastructure</p>
                <p>🚀 Micro SAAS</p>
                <p>🔒 Cybersecurity</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="/services" className="block text-gray-400 hover:text-cyan-400 transition-colors">
                  All Services
                </a>
                <a href="/solutions" className="block text-gray-400 hover:text-cyan-400 transition-colors">
                  Solutions
                </a>
                <a href="/about" className="block text-gray-400 hover:text-cyan-400 transition-colors">
                  About Us
                </a>
                <a href="/contact" className="block text-gray-400 hover:text-cyan-400 transition-colors">
                  Contact
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Zion Tech Group. All rights reserved. | Advanced Technology Solutions</p>
          </div>
        </div>
      </footer>
=======
      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get in touch with our experts to discuss how our advanced services can drive your success.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${contactInfo.mobile}`}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Send Email
            </a>
          </div>

          <div className="mt-8 text-sm opacity-75">
            <p>Visit us at: <a href={contactInfo.website} className="underline hover:opacity-100">{contactInfo.website}</a></p>
            <p className="mt-2">{contactInfo.address}</p>
          </div>
        </div>
      </section>
>>>>>>> 0d3d59dc48bc65c272e3c7f2106b07881fc97407
    </div>
  );
};

export default AdvancedServicesShowcase;
