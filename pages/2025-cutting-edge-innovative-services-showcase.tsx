import React, { useState } from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Brain, Atom, Shield, Target, Rocket, ArrowRight, Check, 
  Palette, Heart, Truck, GraduationCap, Building, Cpu,
  Zap, Globe, Lock, Database, Cloud, Server, Network, Search, Phone, Mail, MapPin
} from 'lucide-react';

// Import our new cutting-edge innovative services
import { cuttingEdgeInnovativeServices2025 } from '../data/2025-cutting-edge-innovative-services-expansion';
import { advancedITInfrastructureSolutions2025 } from '../data/2025-advanced-it-infrastructure-solutions';
import { advancedAIAutomationSolutions2025 } from '../data/2025-advanced-ai-automation-solutions';

const CuttingEdgeInnovativeServicesShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Combine all new services
  const allNewServices = [
    ...cuttingEdgeInnovativeServices2025,
    ...advancedITInfrastructureSolutions2025,
    ...advancedAIAutomationSolutions2025
  ];

  // Filter services based on category and search
  const filteredServices = allNewServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || 
      service.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
      service.type.toLowerCase().includes(selectedCategory.toLowerCase());
    
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.category.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const categories = [
    { id: 'all', name: 'All Services', icon: <Globe className="w-5 h-5" />, color: 'from-gray-500 to-slate-500' },
    { id: 'ai', name: 'AI & Automation', icon: <Brain className="w-5 h-5" />, color: 'from-blue-500 to-purple-500' },
    { id: 'quantum', name: 'Quantum Computing', icon: <Atom className="w-5 h-5" />, color: 'from-purple-500 to-pink-500' },
    { id: 'infrastructure', name: 'IT Infrastructure', icon: <Server className="w-5 h-5" />, color: 'from-indigo-500 to-blue-500' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: <Shield className="w-5 h-5" />, color: 'from-red-500 to-orange-500' },
    { id: 'edge', name: 'Edge Computing', icon: <Network className="w-5 h-5" />, color: 'from-green-500 to-teal-500' },
    { id: 'cloud', name: 'Cloud Solutions', icon: <Cloud className="w-5 h-5" />, color: 'from-cyan-500 to-blue-500' },
    { id: 'automation', name: 'Business Automation', icon: <Zap className="w-5 h-5" />, color: 'from-yellow-500 to-orange-500' }
  ];

  const getCategoryColor = (category: string) => {
    const categoryObj = categories.find(cat => 
      category.toLowerCase().includes(cat.id.toLowerCase())
    );
    return categoryObj ? categoryObj.color : 'from-gray-500 to-slate-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="2025 Cutting-Edge Innovative Services Showcase | Zion Tech Group"
        description="Discover our revolutionary 2025 cutting-edge innovative services including AI automation, quantum computing, advanced IT infrastructure, and autonomous business solutions."
        keywords="cutting-edge services, innovative solutions, AI automation, quantum computing, IT infrastructure, business automation, 2025 services"
      />

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                2025 Cutting-Edge
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Innovative Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Revolutionary micro SAAS services, IT infrastructure solutions, and AI automation platforms 
              that define the future of business technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
              >
                Explore Services
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search innovative services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 pl-12 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-300 w-5 h-5" />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? `bg-gradient-to-r ${category.color} text-white`
                      : 'bg-white/20 text-gray-300 hover:bg-white/30'
                  }`}
                >
                  {category.icon}
                  {category.name}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300 group"
            >
              {/* Service Header */}
              <div className="mb-6">
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-3 bg-gradient-to-r ${getCategoryColor(service.category)} text-white`}>
                  {service.type}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {service.tagline}
                </p>
              </div>

              {/* Service Description */}
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Pricing */}
              <div className="mb-6">
                <div className="text-2xl font-bold text-white mb-2">
                  {service.pricing?.starter || 'Contact for pricing'}
                </div>
                <div className="text-sm text-gray-400">
                  Starting from • {service.pricing?.professional && `Professional: ${service.pricing.professional}`}
                </div>
              </div>

              {/* Key Features */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-white mb-3">Key Features</h4>
                <div className="space-y-2">
                  {service.features?.slice(0, 4).map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                      <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                  {service.features?.length > 4 && (
                    <div className="text-sm text-gray-500">
                      +{service.features.length - 4} more features
                    </div>
                  )}
                </div>
              </div>

              {/* Benefits */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-white mb-3">Key Benefits</h4>
                <div className="space-y-2">
                  {service.benefits?.slice(0, 3).map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                      <ArrowRight className="w-4 h-4 text-purple-400 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>

              {/* Market Info */}
              <div className="mb-6 text-sm">
                <div className="text-gray-400 mb-2">
                  <span className="font-semibold text-white">Market Size:</span> {service.marketSize}
                </div>
                <div className="text-gray-400">
                  <span className="font-semibold text-white">Target:</span> {service.targetAudience}
                </div>
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/25"
              >
                Learn More
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-3xl p-12 border border-white/20 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Connect with our team to explore how our cutting-edge innovative services can revolutionize 
            your operations and drive unprecedented growth.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <p className="text-gray-300">+1 302 464 0950</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
              <p className="text-gray-300">kleber@ziontechgroup.com</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-12 py-4 rounded-lg font-semibold text-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-purple-500/25"
          >
            Start Your Transformation Journey
          </motion.button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black/50 border-t border-white/20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-white mb-4">
            <h3 className="text-2xl font-bold mb-2">Zion Tech Group</h3>
            <p className="text-gray-400">Pioneering the future of business technology</p>
          </div>
          <div className="text-gray-400 text-sm">
            <p>© 2025 Zion Tech Group. All rights reserved.</p>
            <p className="mt-2">
              <a href="https://ziontechgroup.com" className="text-purple-400 hover:text-purple-300 transition-colors">
                ziontechgroup.com
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CuttingEdgeInnovativeServicesShowcase;