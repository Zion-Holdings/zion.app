import React, { useState } from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Search, Grid, List, Filter,
  Brain, Shield, Cloud, Factory, Truck, Heart,
  ArrowRight, Check, Star, Phone, Mail, MapPin,
  TrendingUp, Users, Zap, Target, Award
} from 'lucide-react';

// Import our new innovative services
import { innovative2027AIBusinessIntelligenceServices } from '../data/innovative-2027-ai-business-intelligence';
import { innovative2027CybersecurityComplianceServices } from '../data/innovative-2027-cybersecurity-compliance';
import { innovative2027CloudDevOpsServices } from '../data/innovative-2027-cloud-devops';
import { innovative2027IndustrySolutions } from '../data/innovative-2027-industry-solutions';

// Combine all services
const allInnovativeServices = [
  ...innovative2027AIBusinessIntelligenceServices,
  ...innovative2027CybersecurityComplianceServices,
  ...innovative2027CloudDevOpsServices,
  ...innovative2027IndustrySolutions
];

const categories = [
  {
    id: 'all',
    name: 'All Services',
    icon: <Grid className="w-6 h-6" />,
    color: 'from-gray-500 to-slate-500',
    description: 'Complete portfolio of innovative 2027 services'
  },
  {
    id: 'ai-business-intelligence',
    name: 'AI Business Intelligence',
    icon: <Brain className="w-6 h-6" />,
    color: 'from-blue-500 to-indigo-500',
    description: 'AI-powered analytics and business insights'
  },
  {
    id: 'cybersecurity-compliance',
    name: 'Cybersecurity & Compliance',
    icon: <Shield className="w-6 h-6" />,
    color: 'from-red-500 to-orange-500',
    description: 'Advanced security and compliance solutions'
  },
  {
    id: 'cloud-devops',
    name: 'Cloud Infrastructure & DevOps',
    icon: <Cloud className="w-6 h-6" />,
    color: 'from-cyan-500 to-blue-500',
    description: 'Modern cloud and DevOps solutions'
  },
  {
    id: 'healthcare-biotech',
    name: 'Healthcare & Biotech',
    icon: <Heart className="w-6 h-6" />,
    color: 'from-pink-500 to-red-500',
    description: 'AI-powered healthcare solutions'
  },
  {
    id: 'financial-technology',
    name: 'Financial Technology',
    icon: <TrendingUp className="w-6 h-6" />,
    color: 'from-emerald-500 to-green-500',
    description: 'Fintech and compliance automation'
  },
  {
    id: 'retail-ecommerce',
    name: 'Retail & E-commerce',
    icon: <Target className="w-6 h-6" />,
    color: 'from-purple-500 to-pink-500',
    description: 'Retail optimization and analytics'
  },
  {
    id: 'manufacturing-industrial',
    name: 'Manufacturing & Industrial',
    icon: <Factory className="w-6 h-6" />,
    color: 'from-orange-500 to-red-500',
    description: 'Manufacturing AI and quality control'
  },
  {
    id: 'transportation-logistics',
    name: 'Transportation & Logistics',
    icon: <Truck className="w-6 h-6" />,
    color: 'from-cyan-500 to-blue-500',
    description: 'Logistics optimization and supply chain'
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

export default function Innovative2027ServicesShowcase() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;

  // Filter services based on search and category
  const filteredServices = allInnovativeServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (selectedCategory === 'all') return matchesSearch;
    
    return matchesSearch && service.category.toLowerCase().includes(selectedCategory.replace('-', ' '));
  });

  // Sort services
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'price-low':
        return (parseInt(a.price.replace(/[^0-9]/g, '')) || 0) - 
               (parseInt(b.price.replace(/[^0-9]/g, '')) || 0);
      case 'price-high':
        return (parseInt(b.price.replace(/[^0-9]/g, '')) || 0) - 
               (parseInt(a.price.replace(/[^0-9]/g, '')) || 0);
      case 'newest':
        return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime();
      case 'rating':
        return b.rating - a.rating;
      case 'popular':
        return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
      default:
        return 0;
    }
  });

  // Pagination
  const totalPages = Math.ceil(sortedServices.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedServices = sortedServices.slice(startIndex, startIndex + pageSize);

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
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <SEO 
        title="Innovative 2027 Services Showcase | Zion Tech Group"
        description="Discover our cutting-edge 2027 services: AI Business Intelligence, Cybersecurity, Cloud DevOps, and Industry Solutions. Transform your business with innovative technology."
        keywords={["AI services", "cybersecurity", "cloud infrastructure", "DevOps", "healthcare AI", "fintech", "retail optimization", "manufacturing AI", "logistics"]}
        image="https://ziontechgroup.com/og-innovative-2027-services.jpg"
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Innovative 2027 Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Transform your business with cutting-edge AI, cybersecurity, cloud infrastructure, and industry-specific solutions. 
              Built for the future, delivering results today.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-blue-200">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-400" />
                <span>25+ New Services</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-400" />
                <span>AI-Powered Solutions</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-400" />
                <span>Enterprise-Grade Security</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-400" />
                <span>24/7 Expert Support</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Banner */}
      <section className="bg-gradient-to-r from-emerald-600 to-teal-600 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between text-white">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-semibold mb-2">Ready to Transform Your Business?</h3>
              <p className="text-emerald-100">Get expert consultation and implementation support</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+13024640950"
                className="flex items-center gap-2 bg-white text-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors"
              >
                <Phone className="w-5 h-5" />
                +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="flex items-center gap-2 bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-600 transition-colors"
              >
                <Mail className="w-5 h-5" />
                kleber@ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search and Filters */}
          <div className="mb-8">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search innovative services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div className="flex gap-4">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {sortOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                
                <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`px-4 py-3 ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`px-4 py-3 ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Category Filters */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {category.icon}
                    <span>{category.name}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}
          >
            {paginatedServices.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                  viewMode === 'list' ? 'flex' : ''
                }`}
              >
                {viewMode === 'grid' ? (
                  // Grid View
                  <div>
                    <div className={`h-32 bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                      <span className="text-4xl">{service.icon}</span>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                          {service.category}
                        </span>
                        {service.popular && (
                          <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                            Popular
                          </span>
                        )}
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">{service.description}</p>
                      
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-2xl font-bold text-gray-900">
                          {service.price}
                          <span className="text-sm font-normal text-gray-500">{service.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-5 h-5 text-yellow-400 fill-current" />
                          <span className="font-medium">{service.rating}</span>
                          <span className="text-gray-500">({service.reviews})</span>
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {service.features.slice(0, 3).map((feature, index) => (
                            <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                              <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex items-center justify-between">
                        <a
                          href={service.link}
                          className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4" />
                        </a>
                        <div className="text-right">
                          <div className="text-sm text-gray-500">Setup Time</div>
                          <div className="font-medium">{service.setupTime}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  // List View
                  <div className="flex-1 p-6">
                    <div className="flex items-start gap-6">
                      <div className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <span className="text-3xl">{service.icon}</span>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                            {service.category}
                          </span>
                          {service.popular && (
                            <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                              Popular
                            </span>
                          )}
                        </div>
                        
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.name}</h3>
                        <p className="text-gray-600 mb-4">{service.description}</p>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                          <div>
                            <div className="text-sm text-gray-500">Price</div>
                            <div className="font-bold text-xl">{service.price}{service.period}</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-500">Rating</div>
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 text-yellow-400 fill-current" />
                              <span className="font-medium">{service.rating}</span>
                            </div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-500">Setup Time</div>
                            <div className="font-medium">{service.setupTime}</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-500">Customers</div>
                            <div className="font-medium">{service.customers.toLocaleString()}</div>
                          </div>
                        </div>

                        <div className="flex items-center gap-4">
                          <a
                            href={service.link}
                            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                          >
                            Learn More
                            <ArrowRight className="w-4 h-4" />
                          </a>
                          <a
                            href="tel:+13024640950"
                            className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                          >
                            <Phone className="w-4 h-4" />
                            Contact Sales
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-12 flex justify-center">
              <div className="flex gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      currentPage === page
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Our team of experts is ready to help you implement these innovative solutions. 
              Get in touch today to start your digital transformation journey.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
                <p className="text-gray-300 mb-2">+1 302 464 0950</p>
                <p className="text-sm text-gray-400">Available 24/7</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                <p className="text-gray-300 mb-2">kleber@ziontechgroup.com</p>
                <p className="text-sm text-gray-400">Response within 2 hours</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-gray-300 mb-2">364 E Main St STE 1008</p>
                <p className="text-sm text-gray-400">Middletown DE 19709</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors"
              >
                <Mail className="w-5 h-5" />
                Send Email
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Zion Tech Group</h3>
            <p className="text-gray-400 mb-6">
              Transforming businesses through innovative technology solutions
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-400">
              <span>© 2027 Zion Tech Group. All rights reserved.</span>
              <span>•</span>
              <a href="https://ziontechgroup.com" className="hover:text-white transition-colors">
                ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}