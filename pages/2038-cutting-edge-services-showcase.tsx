import React, { useState } from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Search, Grid, List,
  Brain, Shield, Target, Rocket,
  ArrowRight, Heart,
  Building, Star,
  Phone, Mail, MapPin, Globe
} from 'lucide-react';

// Import our new 2038 services
import { innovative2038CuttingEdgeServices } from '../data/innovative-2038-cutting-edge-services';
import { innovative2038ITMicroSaasServices } from '../data/innovative-2038-it-micro-saas-services';

// Create unified services array
const all2038Services = [
  ...innovative2038CuttingEdgeServices,
  ...innovative2038ITMicroSaasServices
];

const categories = [
  {
    id: 'all',
    name: 'All Services',
    icon: <Grid className="w-6 h-6" />,
    color: 'from-gray-500 to-slate-500',
    description: 'Complete portfolio of cutting-edge 2038 services'
  },
  {
    id: 'ai-quantum',
    name: 'AI & Quantum',
    icon: <Brain className="w-6 h-6" />,
    color: 'from-cyan-500 to-blue-500',
    description: 'Revolutionary AI and quantum computing solutions'
  },
  {
    id: 'space-tech',
    name: 'Space Technology',
    icon: <Rocket className="w-6 h-6" />,
    color: 'from-pink-500 to-rose-500',
    description: 'Next-generation space exploration and mining'
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    icon: <Shield className="w-6 h-6" />,
    color: 'from-red-500 to-orange-500',
    description: 'Quantum-powered security and threat intelligence'
  },
  {
    id: 'healthcare',
    name: 'Healthcare AI',
    icon: <Heart className="w-6 h-6" />,
    color: 'from-red-500 to-pink-500',
    description: 'Autonomous healthcare and medical AI'
  },
  {
    id: 'micro-saas',
    name: 'Micro SAAS',
    icon: <Target className="w-6 h-6" />,
    color: 'from-orange-500 to-red-500',
    description: 'Intelligent business automation solutions'
  },
  {
    id: 'it-infrastructure',
    name: 'IT Infrastructure',
    icon: <Building className="w-6 h-6" />,
    color: 'from-blue-500 to-purple-500',
    description: 'Advanced IT and DevOps solutions'
  },
  {
    id: 'climate-tech',
    name: 'Climate Technology',
    icon: <Globe className="w-6 h-6" />,
    color: 'from-teal-500 to-green-500',
    description: 'AI-powered climate prediction and analysis'
  }
];

const sortOptions = [
  { value: 'name', label: 'Name A-Z' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'popular', label: 'Most Popular' },
  { value: 'newest', label: 'Newest First' },
  { value: 'rating', label: 'Highest Rated' }
];

export default function CuttingEdge2038ServicesShowcase() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;

  // Filter services based on search and category
  const filteredServices = all2038Services.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (selectedCategory === 'all') return matchesSearch;
    
    const serviceCategory = service.category.toLowerCase();
    const categoryName = categories.find(cat => cat.id === selectedCategory)?.name.toLowerCase();
    
    return matchesSearch && serviceCategory.includes(categoryName || '');
  });

  // Sort services
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'price-low': {
        const priceA = parseInt(a.price.replace(/[^0-9]/g, ''));
        const priceB = parseInt(b.price.replace(/[^0-9]/g, ''));
        return priceA - priceB;
      }
      case 'price-high': {
        const priceAHigh = parseInt(a.price.replace(/[^0-9]/g, ''));
        const priceBHigh = parseInt(b.price.replace(/[^0-9]/g, ''));
        return priceBHigh - priceAHigh;
      }
      case 'popular':
        return b.popular ? 1 : -1;
      case 'newest':
        return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime();
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  // Pagination
  const totalPages = Math.ceil(sortedServices.length / pageSize);
  const paginatedServices = sortedServices.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        data={{
          pageTitle: "2038 Cutting-Edge Services Showcase | Zion Tech Group",
          pageDescription: "Discover the future of technology with our revolutionary 2038 services. AI-powered solutions, quantum computing, space technology, and intelligent micro SAAS platforms.",
          pageKeywords: ["2038 services", "AI services", "quantum computing", "space technology", "micro SAAS", "cybersecurity", "healthcare AI", "climate technology"]
        }}
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              2038
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Cutting-Edge
            </span>
            <br />
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Services
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
          >
            Experience the future of technology with our revolutionary AI-powered, quantum-enhanced, and autonomous services. 
            From space mining to neural interfaces, we're building tomorrow's solutions today.
          </motion.p>

          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 max-w-2xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="flex flex-col items-center">
                <Phone className="w-6 h-6 text-cyan-400 mb-2" />
                <p className="text-white font-semibold">+1 302 464 0950</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-6 h-6 text-purple-400 mb-2" />
                <p className="text-white font-semibold">kleber@ziontechgroup.com</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-6 h-6 text-emerald-400 mb-2" />
                <p className="text-white font-semibold text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Revolutionary <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">2038</span> Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our cutting-edge services represent the pinnacle of technological innovation, combining AI, quantum computing, 
              and autonomous systems to solve humanity's greatest challenges.
            </p>
          </motion.div>

          {/* Service Statistics */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16"
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">{all2038Services.length}</div>
              <div className="text-gray-300">Revolutionary Services</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">$2.5T+</div>
              <div className="text-gray-300">Total Market Size</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-emerald-400 mb-2">500%+</div>
              <div className="text-gray-300">Average Growth Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">4.8</div>
              <div className="text-gray-300">Average Rating</div>
            </div>
          </motion.div>

          {/* Search and Filters */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-8"
          >
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="flex gap-2 overflow-x-auto pb-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg'
                        : 'bg-white/20 text-gray-300 hover:bg-white/30'
                    }`}
                  >
                    {category.icon}
                    {category.name}
                  </button>
                ))}
              </div>

              {/* Sort and View */}
              <div className="flex items-center gap-4">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-white/20 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value} className="bg-gray-800">
                      {option.label}
                    </option>
                  ))}
                </select>

                <div className="flex bg-white/20 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-md transition-all duration-200 ${
                      viewMode === 'grid' ? 'bg-cyan-400 text-white' : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-md transition-all duration-200 ${
                      viewMode === 'list' ? 'bg-cyan-400 text-white' : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Services Grid/List */}
          <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
            {paginatedServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 ${
                  viewMode === 'list' ? 'flex' : ''
                }`}
              >
                {viewMode === 'grid' ? (
                  // Grid View
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-3xl">{service.icon}</div>
                      {service.popular && (
                        <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                          Popular
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-gray-300 mb-4">{service.tagline}</p>
                    
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                      <span className="text-gray-400">{service.period}</span>
                    </div>
                    
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">{service.description}</p>
                    
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-gray-400 text-sm">({service.reviews} reviews)</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">{service.category}</span>
                      <a
                        href={service.link}
                        className="bg-gradient-to-r from-cyan-400 to-blue-400 text-white px-4 py-2 rounded-lg hover:from-cyan-500 hover:to-blue-500 transition-all duration-200 flex items-center gap-2"
                      >
                        Learn More <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                ) : (
                  // List View
                  <div className="flex-1 p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4">
                        <div className="text-3xl">{service.icon}</div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-bold text-white">{service.name}</h3>
                            {service.popular && (
                              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-2 py-1 rounded-full text-xs font-semibold">
                                Popular
                              </span>
                            )}
                          </div>
                          <p className="text-gray-300 mb-2">{service.tagline}</p>
                          <p className="text-gray-400 text-sm mb-3">{service.description}</p>
                          
                          <div className="flex items-center gap-4 text-sm text-gray-400">
                            <span>{service.category}</span>
                            <span>•</span>
                            <span>{service.setupTime} setup</span>
                            <span>•</span>
                            <span>{service.trialDays} day trial</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                          <span className="text-gray-400">{service.period}</span>
                        </div>
                        
                        <div className="flex items-center gap-2 mb-3">
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-gray-400 text-sm">({service.reviews})</span>
                        </div>
                        
                        <a
                          href={service.link}
                          className="bg-gradient-to-r from-cyan-400 to-blue-400 text-white px-4 py-2 rounded-lg hover:from-cyan-500 hover:to-blue-500 transition-all duration-200 flex items-center gap-2"
                        >
                          Learn More <ArrowRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex justify-center mt-12"
            >
              <div className="flex gap-2">
                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handlePageChange(index + 1)}
                    className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                      currentPage === index + 1
                        ? 'bg-gradient-to-r from-cyan-400 to-blue-400 text-white'
                        : 'bg-white/20 text-gray-300 hover:bg-white/30'
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Ready to Experience the Future?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8"
          >
            Contact us today to learn more about our revolutionary 2038 services and how they can transform your business.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
              <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Call Us</h3>
              <p className="text-cyan-400 font-semibold">+1 302 464 0950</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
              <Mail className="w-8 h-8 text-purple-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Email Us</h3>
              <p className="text-purple-400 font-semibold">kleber@ziontechgroup.com</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
              <Globe className="w-8 h-8 text-emerald-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Visit Us</h3>
              <p className="text-emerald-400 font-semibold text-sm">ziontechgroup.com</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}