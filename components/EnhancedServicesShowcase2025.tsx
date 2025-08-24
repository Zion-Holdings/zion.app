import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaRocket,
  FaBrain,
  FaCloud,
  FaShieldAlt,
  FaChartLine,
  FaCogs,
  FaLightbulb,
  FaGlobe,
  FaMobile,
  FaDatabase,
  FaNetworkWired,
  FaRobot,
  FaSearch,
  FaAtom,
  FaArrowRight
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiPrisma,
  SiSupabase,
  SiVercel,
  SiDocker,
  SiKubernetes
} from 'react-icons/si';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: string;
  features: string[];
  pricing: {
    starter: number;
    professional: number;
    enterprise: number;
    custom: string;
  };
  technologies: string[];
  benefits: string[];
  stats: {
    projects: string;
    satisfaction: string;
    uptime: string;
  };
  isPopular?: boolean;
  isNew?: boolean;
}

const EnhancedServicesShowcase2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'popularity'>('popularity');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const services: Service[] = useMemo(() => [
    {
      id: 'ai-platform',
      title: 'AI Consciousness Platform',
      description: 'Next-generation AI platform with emotional intelligence and self-awareness capabilities.',
      icon: <FaBrain className="w-8 h-8" />,
      category: 'AI & Machine Learning',
      features: [
        'Emotional Intelligence Engine',
        'Self-Learning Algorithms',
        'Natural Language Understanding',
        'Predictive Analytics',
        'Real-time Processing',
        'Multi-modal AI'
      ],
      pricing: {
        starter: 999,
        professional: 2499,
        enterprise: 4999,
        custom: 'Contact Sales'
      },
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'React', 'Node.js'],
      benefits: [
        'Increased operational efficiency by 40%',
        'Real-time decision making',
        'Scalable AI infrastructure',
        'Competitive advantage'
      ],
      stats: {
        projects: '150+',
        satisfaction: '98%',
        uptime: '99.99%'
      },
      isPopular: true,
      isNew: true
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing Solutions',
      description: 'Revolutionary quantum computing services for complex problem solving.',
      icon: <FaAtom className="w-8 h-8" />,
      category: 'Quantum Computing',
      features: [
        'Quantum Algorithm Development',
        'Optimization Problems',
        'Cryptography Solutions',
        'Quantum Machine Learning',
        'Quantum Simulation',
        'Hybrid Classical-Quantum'
      ],
      pricing: {
        starter: 2999,
        professional: 5999,
        enterprise: 9999,
        custom: 'Contact Sales'
      },
      technologies: ['Qiskit', 'Cirq', 'PennyLane', 'Python', 'C++'],
      benefits: [
        'Exponential speedup for specific problems',
        'Future-proof technology',
        'Research collaboration opportunities',
        'Patent potential'
      ],
      stats: {
        projects: '75+',
        satisfaction: '96%',
        uptime: '99.95%'
      },
      isPopular: true,
      isNew: false
    },
    {
      id: 'cybersecurity',
      title: 'Advanced Cybersecurity Suite',
      description: 'Comprehensive cybersecurity solutions with AI-powered threat detection.',
      icon: <FaShieldAlt className="w-8 h-8" />,
      category: 'Cybersecurity',
      features: [
        'AI Threat Detection',
        'Zero-Trust Architecture',
        'Penetration Testing',
        'Incident Response',
        'Compliance Management',
        'Security Training'
      ],
      pricing: {
        starter: 799,
        professional: 1599,
        enterprise: 2999,
        custom: 'Contact Sales'
      },
      technologies: ['Python', 'Machine Learning', 'AWS', 'Azure', 'Docker'],
      benefits: [
        'Reduced security incidents by 85%',
        '24/7 threat monitoring',
        'Compliance automation',
        'Risk mitigation'
      ],
      stats: {
        projects: '200+',
        satisfaction: '97%',
        uptime: '99.99%'
      },
      isPopular: true,
      isNew: false
    },
    {
      id: 'cloud-architecture',
      title: 'Cloud-Native Architecture',
      description: 'Scalable cloud solutions designed for modern applications and microservices.',
      icon: <FaCloud className="w-8 h-8" />,
      category: 'Cloud & Infrastructure',
      features: [
        'Microservices Design',
        'Container Orchestration',
        'Serverless Solutions',
        'DevOps Automation',
        'Multi-cloud Strategy',
        'Cost Optimization'
      ],
      pricing: {
        starter: 599,
        professional: 1299,
        enterprise: 2499,
        custom: 'Contact Sales'
      },
      technologies: ['AWS', 'Azure', 'GCP', 'Kubernetes', 'Docker', 'Terraform'],
      benefits: [
        '50% reduction in infrastructure costs',
        'Improved scalability and reliability',
        'Faster time to market',
        'Reduced maintenance overhead'
      ],
      stats: {
        projects: '300+',
        satisfaction: '95%',
        uptime: '99.9%'
      },
      isPopular: false,
      isNew: false
    },
    {
      id: 'data-analytics',
      title: 'Data Intelligence Platform',
      description: 'Advanced analytics and business intelligence with real-time insights.',
      icon: <FaChartLine className="w-8 h-8" />,
      category: 'Data & Analytics',
      features: [
        'Real-time Analytics',
        'Predictive Modeling',
        'Data Visualization',
        'ETL Pipelines',
        'Machine Learning Integration',
        'Business Intelligence'
      ],
      pricing: {
        starter: 699,
        professional: 1499,
        enterprise: 2999,
        custom: 'Contact Sales'
      },
      technologies: ['Python', 'SQL', 'Tableau', 'Power BI', 'Apache Spark'],
      benefits: [
        'Data-driven decision making',
        'Improved operational efficiency',
        'Customer insights and personalization',
        'Competitive intelligence'
      ],
      stats: {
        projects: '180+',
        satisfaction: '94%',
        uptime: '99.8%'
      },
      isPopular: false,
      isNew: true
    },
    {
      id: 'automation-platform',
      title: 'Business Process Automation',
      description: 'Intelligent automation platform for streamlining business operations.',
      icon: <FaCogs className="w-8 h-8" />,
      category: 'Automation',
      features: [
        'RPA Implementation',
        'Workflow Automation',
        'Process Mining',
        'Intelligent Document Processing',
        'API Integration',
        'Monitoring & Analytics'
      ],
      pricing: {
        starter: 499,
        professional: 999,
        enterprise: 1999,
        custom: 'Contact Sales'
      },
      technologies: ['Python', 'UiPath', 'Blue Prism', 'Power Automate', 'Node.js'],
      benefits: [
        '70% reduction in manual processes',
        'Improved accuracy and consistency',
        'Faster processing times',
        'Cost savings'
      ],
      stats: {
        projects: '120+',
        satisfaction: '93%',
        uptime: '99.7%'
      },
      isPopular: false,
      isNew: false
    }
  ], []);

  const categories = useMemo(() => [
    { id: 'all', name: 'All Services', count: services.length, color: 'from-gray-500 to-gray-600' },
    { id: 'AI & Machine Learning', name: 'AI & ML', count: services.filter(s => s.category === 'AI & Machine Learning').length, color: 'from-purple-500 to-pink-500' },
    { id: 'Quantum Computing', name: 'Quantum', count: services.filter(s => s.category === 'Quantum Computing').length, color: 'from-blue-500 to-cyan-500' },
    { id: 'Cybersecurity', name: 'Security', count: services.filter(s => s.category === 'Cybersecurity').length, color: 'from-red-500 to-orange-500' },
    { id: 'Cloud & Infrastructure', name: 'Cloud', count: services.filter(s => s.category === 'Cloud & Infrastructure').length, color: 'from-indigo-500 to-purple-500' },
    { id: 'Data & Analytics', name: 'Analytics', count: services.filter(s => s.category === 'Data & Analytics').length, color: 'from-green-500 to-emerald-500' },
    { id: 'Automation', name: 'Automation', count: services.filter(s => s.category === 'Automation').length, color: 'from-yellow-500 to-orange-500' }
  ], [services]);

  const filteredServices = useMemo(() => {
    let filtered = services;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(service =>
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sort services
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.title.localeCompare(b.title);
        case 'price':
          return a.pricing.starter - b.pricing.starter;
        case 'popularity':
          return (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0);
        default:
          return 0;
      }
    });

    return filtered;
  }, [services, selectedCategory, searchQuery, sortBy]);

  const handleServiceClick = (service: Service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Header */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Revolutionary Services 2025
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Experience the future of technology with our cutting-edge AI, quantum computing, 
            and automation solutions designed to transform your business.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
              />
            </div>

            {/* Sort Options */}
            <div className="flex items-center gap-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'name' | 'price' | 'popularity')}
                className="px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
              >
                <option value="popularity">Sort by Popularity</option>
                <option value="name">Sort by Name</option>
                <option value="price">Sort by Price</option>
              </select>

              {/* View Mode Toggle */}
              <div className="flex bg-gray-800/50 rounded-xl p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    viewMode === 'grid' 
                      ? 'bg-cyan-500 text-white' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Grid
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    viewMode === 'list' 
                      ? 'bg-cyan-500 text-white' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  List
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                {category.name}
                <span className="ml-2 px-2 py-1 bg-gray-700/50 rounded-full text-xs">
                  {category.count}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Services Grid/List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  className="group relative bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 cursor-pointer overflow-hidden"
                  onClick={() => handleServiceClick(service)}
                  whileHover={{ y: -10 }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Popular/New Badge */}
                  {(service.isPopular || service.isNew) && (
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        service.isPopular 
                          ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black' 
                          : 'bg-gradient-to-r from-green-400 to-emerald-500 text-black'
                      }`}>
                        {service.isPopular ? 'Popular' : 'New'}
                      </span>
                    </div>
                  )}

                  {/* Service Icon */}
                  <div className="relative z-10 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features Preview */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-lg"
                          >
                            {feature}
                          </span>
                        ))}
                        {service.features.length > 3 && (
                          <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-lg">
                            +{service.features.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="mb-4">
                      <div className="text-2xl font-bold text-cyan-400">
                        From ${service.pricing.starter.toLocaleString()}/month
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <span>{service.stats.projects} projects</span>
                      <span>{service.stats.satisfaction} satisfaction</span>
                      <span>{service.stats.uptime} uptime</span>
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  className="group bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer"
                  onClick={() => handleServiceClick(service)}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center text-cyan-400">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-2">
                        <h3 className="text-xl font-bold text-white">{service.title}</h3>
                        {(service.isPopular || service.isNew) && (
                          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                            service.isPopular 
                              ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black' 
                              : 'bg-gradient-to-r from-green-400 to-emerald-500 text-black'
                          }`}>
                            {service.isPopular ? 'Popular' : 'New'}
                          </span>
                        )}
                      </div>
                      <p className="text-gray-300 mb-3">{service.description}</p>
                      <div className="flex items-center gap-6 text-sm text-gray-400">
                        <span>From ${service.pricing.starter.toLocaleString()}/month</span>
                        <span>{service.stats.projects} projects</span>
                        <span>{service.stats.satisfaction} satisfaction</span>
                      </div>
                    </div>
                    <div className="text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                      <FaArrowRight className="w-6 h-6" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Empty State */}
        {filteredServices.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-300 mb-2">No services found</h3>
            <p className="text-gray-400 mb-6">
              Try adjusting your search terms or filters to find what you're looking for.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
            >
              Clear Filters
            </button>
          </motion.div>
        )}
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center text-cyan-400">
                      {selectedService.icon}
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white mb-2">
                        {selectedService.title}
                      </h2>
                      <p className="text-gray-300 text-lg">{selectedService.description}</p>
                    </div>
                  </div>
                  <button
                    onClick={closeModal}
                    className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
                  >
                    ✕
                  </button>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Left Column */}
                  <div className="space-y-6">
                    {/* Features */}
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">Key Features</h3>
                      <div className="space-y-2">
                        {selectedService.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                            <span className="text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">Business Benefits</h3>
                      <div className="space-y-2">
                        {selectedService.benefits.map((benefit, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-green-400 rounded-full" />
                            <span className="text-gray-300">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">Technologies</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedService.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-gray-800 text-cyan-400 text-sm rounded-lg border border-gray-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-6">
                    {/* Pricing */}
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">Pricing Plans</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
                          <span className="text-gray-300">Starter</span>
                          <span className="text-cyan-400 font-semibold">
                            ${selectedService.pricing.starter.toLocaleString()}/month
                          </span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
                          <span className="text-gray-300">Professional</span>
                          <span className="text-cyan-400 font-semibold">
                            ${selectedService.pricing.professional.toLocaleString()}/month
                          </span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
                          <span className="text-gray-300">Enterprise</span>
                          <span className="text-cyan-400 font-semibold">
                            ${selectedService.pricing.enterprise.toLocaleString()}/month
                          </span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
                          <span className="text-gray-300">Custom</span>
                          <span className="text-cyan-400 font-semibold">
                            {selectedService.pricing.custom}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Stats */}
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">Performance Stats</h3>
                      <div className="grid grid-cols-1 gap-3">
                        <div className="p-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg border border-cyan-500/20">
                          <div className="text-2xl font-bold text-cyan-400 mb-1">
                            {selectedService.stats.projects}
                          </div>
                          <div className="text-gray-300 text-sm">Successful Projects</div>
                        </div>
                        <div className="p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg border border-green-500/20">
                          <div className="text-2xl font-bold text-green-400 mb-1">
                            {selectedService.stats.satisfaction}
                          </div>
                          <div className="text-gray-300 text-sm">Client Satisfaction</div>
                        </div>
                        <div className="p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-500/20">
                          <div className="text-2xl font-bold text-purple-400 mb-1">
                            {selectedService.stats.uptime}
                          </div>
                          <div className="text-gray-300 text-sm">System Uptime</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-8 pt-6 border-t border-gray-700">
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                      Get Started Today
                    </button>
                    <button className="px-8 py-4 bg-gray-800 text-white font-semibold rounded-xl hover:bg-gray-700 transition-all duration-300 border border-gray-600">
                      Schedule Demo
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EnhancedServicesShowcase2025;