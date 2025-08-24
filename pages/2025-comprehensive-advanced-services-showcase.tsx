import React, { useState } from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Search, Grid, List, Filter,
  Shield, Rocket, Brain, Cpu, 
  Database, DollarSign, Heart, 
  ArrowRight, Star, Users, TrendingUp
} from 'lucide-react';

// Import our new advanced services
import { advancedCybersecurityServices2025 } from '../data/2025-advanced-cybersecurity-services';
import { advancedDevOpsInfrastructure2025 } from '../data/2025-advanced-devops-infrastructure';
import { advancedDataAnalyticsBI2025 } from '../data/2025-advanced-data-analytics-bi';
import { advancedFintechBlockchain2025 } from '../data/2025-advanced-fintech-blockchain';
import { advancedHealthcareBiotech2025 } from '../data/2025-advanced-healthcare-biotech';

// Combine all services
const allAdvancedServices = [
  ...advancedCybersecurityServices2025,
  ...advancedDevOpsInfrastructure2025,
  ...advancedDataAnalyticsBI2025,
  ...advancedFintechBlockchain2025,
  ...advancedHealthcareBiotech2025
];

// Service categories
const serviceCategories = [
  'All Services',
  'Advanced Cybersecurity',
  'Advanced DevOps & Infrastructure',
  'Advanced Data Analytics & BI',
  'Advanced Fintech & Blockchain',
  'Advanced Healthcare & Biotech'
];

export default function ComprehensiveAdvancedServicesShowcase2025() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Services');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Filter services based on search and category
  const filteredServices = allAdvancedServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All Services' || service.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      <SEO 
        title="2025 Comprehensive Advanced Services Showcase | Zion Tech Group"
        description="Discover our comprehensive portfolio of advanced micro SAAS, IT, and AI services. From cybersecurity to healthcare biotech, we deliver innovative solutions that drive business transformation."
        keywords={["advanced services", "micro SAAS", "IT services", "AI services", "cybersecurity", "DevOps", "data analytics", "fintech", "blockchain", "healthcare biotech"]}
      />

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                2025 Advanced Services
              </span>
              <br />
              <span className="text-white">Comprehensive Showcase</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Discover our cutting-edge portfolio of micro SAAS, IT, and AI services that are transforming industries and driving innovation across the globe.
            </p>
            
            {/* Contact Information */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-8 max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold text-white mb-4">Ready to Transform Your Business?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-blue-100">
                <div className="flex items-center space-x-2">
                  <span className="text-blue-300">📱</span>
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-blue-300">✉️</span>
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-2 md:col-span-2">
                  <span className="text-blue-300">📍</span>
                  <span>364 E Main St STE 1008 Middletown DE 19709</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Visit Our Website
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-lg text-white font-semibold rounded-xl hover:bg-white/30 transition-all duration-300"
              >
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Services Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Comprehensive Service Portfolio
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Our advanced services span across multiple industries and technologies, providing comprehensive solutions for modern business challenges.
          </p>
        </motion.div>

        {/* Service Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {[
            {
              title: 'Advanced Cybersecurity',
              description: 'Quantum-resistant cryptography, AI threat intelligence, and zero-trust architecture',
              icon: Shield,
              color: 'from-red-600 to-pink-600',
              count: advancedCybersecurityServices2025.length
            },
            {
              title: 'DevOps & Infrastructure',
              description: 'GitOps automation, Kubernetes management, and infrastructure as code',
              icon: Rocket,
              color: 'from-purple-600 to-pink-600',
              count: advancedDevOpsInfrastructure2025.length
            },
            {
              title: 'Data Analytics & BI',
              description: 'AI-powered business intelligence, real-time analytics, and ML platforms',
              icon: Database,
              color: 'from-blue-600 to-indigo-600',
              count: advancedDataAnalyticsBI2025.length
            },
            {
              title: 'Fintech & Blockchain',
              description: 'DeFi optimization, blockchain identity, and AI trading algorithms',
              icon: DollarSign,
              color: 'from-green-600 to-emerald-600',
              count: advancedFintechBlockchain2025.length
            },
            {
              title: 'Healthcare & Biotech',
              description: 'AI drug discovery, precision medicine, and digital health monitoring',
              icon: Heart,
              color: 'from-teal-600 to-cyan-600',
              count: advancedHealthcareBiotech2025.length
            }
          ].map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-all duration-300"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${category.color} mb-4`}>
                <category.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{category.title}</h3>
              <p className="text-blue-100 mb-4">{category.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-blue-300 font-semibold">{category.count} Services</span>
                <ArrowRight className="h-5 w-5 text-blue-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-blue-300" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                {serviceCategories.map(category => (
                  <option key={category} value={category} className="bg-gray-800 text-white">
                    {category}
                  </option>
                ))}
              </select>

              {/* View Mode Toggle */}
              <div className="flex bg-white/20 rounded-xl p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    viewMode === 'grid' ? 'bg-blue-600 text-white' : 'text-blue-300 hover:text-white'
                  }`}
                >
                  <Grid className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    viewMode === 'list' ? 'bg-blue-600 text-white' : 'text-blue-300 hover:text-white'
                  }`}
                >
                  <List className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Display */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className={viewMode === 'grid' 
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            : "space-y-6"
          }
        >
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className={`bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden hover:bg-white/20 transition-all duration-300 transform hover:scale-105 ${
                viewMode === 'list' ? 'flex flex-col lg:flex-row' : ''
              }`}
            >
              {/* Service Header */}
              <div className={`p-6 ${viewMode === 'list' ? 'lg:w-1/3' : ''}`}>
                <div className="flex items-start justify-between mb-4">
                  <div className={`text-4xl ${service.color} bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                    {service.icon}
                  </div>
                  {service.popular && (
                    <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Popular
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                <p className="text-blue-100 text-sm mb-4">{service.tagline}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-bold text-white">
                    {service.price}
                    <span className="text-sm text-blue-300 font-normal">{service.period}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-white text-sm">{service.rating}</span>
                    <span className="text-blue-300 text-sm">({service.reviews})</span>
                  </div>
                </div>

                <div className="flex items-center space-x-4 text-sm text-blue-200 mb-4">
                  <span className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{service.customers}+ customers</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <TrendingUp className="h-4 w-4" />
                    <span>{service.growthRate}</span>
                  </span>
                </div>
              </div>

              {/* Service Details */}
              <div className={`p-6 bg-white/5 ${viewMode === 'list' ? 'lg:w-2/3' : ''}`}>
                <p className="text-blue-100 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {service.features.slice(0, 5).map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm text-blue-200">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Market Position:</h4>
                  <p className="text-sm text-blue-200">{service.marketPosition}</p>
                </div>

                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">ROI:</h4>
                  <p className="text-sm text-blue-200">{service.roi}</p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-blue-300">
                    <span className="block">Setup: {service.setupTime}</span>
                    <span className="block">Trial: {service.trialDays} days</span>
                  </div>
                  
                  <a
                    href={service.link}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredServices.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold text-white mb-2">No services found</h3>
            <p className="text-blue-100">Try adjusting your search terms or category filter.</p>
          </motion.div>
        )}
      </div>

      {/* Call to Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our advanced services are designed to drive innovation, improve efficiency, and deliver measurable ROI. Contact us today to discuss your specific needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-lg text-white font-semibold rounded-xl hover:bg-white/30 transition-all duration-300"
            >
              Send Email
            </a>
          </div>
          
          <div className="mt-8 text-blue-100">
            <p className="text-lg font-semibold mb-2">Visit our headquarters:</p>
            <p>364 E Main St STE 1008, Middletown DE 19709</p>
            <p className="mt-2">
              <a 
                href="https://ziontechgroup.com" 
                className="text-white hover:text-blue-200 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                ziontechgroup.com
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}