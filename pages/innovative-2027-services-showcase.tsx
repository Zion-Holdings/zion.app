import React, { useState } from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Search, Grid, List, Filter,
  Brain, Atom, Shield, Target, Rocket,
  ArrowRight, Check, Palette, Heart, Truck, GraduationCap,
  Building, Cpu, Database, Cloud, Lock, Star,
  TrendingUp, Users, Zap, Globe, Code
} from 'lucide-react';

// Import our new 2027 service data
import { innovativeAIServices2027 } from '../data/innovative-2027-ai-services';
import { innovativeITServices2027 } from '../data/innovative-2027-it-services';
import { innovativeMicroSaasServices2027 } from '../data/innovative-2027-micro-saas-services';

// Create unified services array
const all2027Services = [
  ...innovativeAIServices2027,
  ...innovativeITServices2027,
  ...innovativeMicroSaasServices2027
];

const categories = [
  {
    id: 'all',
    name: 'All 2027 Services',
    icon: <Grid className="w-6 h-6" />,
    color: 'from-gray-500 to-slate-500',
    description: 'Complete portfolio of innovative 2027 services'
  },
  {
    id: 'ai-services',
    name: 'AI Services',
    icon: <Brain className="w-6 h-6" />,
    color: 'from-purple-500 to-indigo-500',
    description: 'Cutting-edge artificial intelligence solutions'
  },
  {
    id: 'it-services',
    name: 'IT Services',
    icon: <Cpu className="w-6 h-6" />,
    color: 'from-blue-500 to-cyan-500',
    description: 'Advanced IT infrastructure and security'
  },
  {
    id: 'micro-saas',
    name: 'Micro SAAS',
    icon: <Rocket className="w-6 h-6" />,
    color: 'from-green-500 to-emerald-500',
    description: 'Innovative business software solutions'
  }
];

export default function Innovative2027ServicesShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredServices = all2027Services.filter(service => {
    const matchesCategory = selectedCategory === 'all' || 
      (selectedCategory === 'ai-services' && service.category.includes('AI')) ||
      (selectedCategory === 'it-services' && (service.category.includes('IT') || service.category.includes('Security') || service.category.includes('Infrastructure'))) ||
      (selectedCategory === 'micro-saas' && (service.category.includes('Business') || service.category.includes('Customer') || service.category.includes('Legal') || service.category.includes('Supply Chain')));
    
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="Innovative 2027 Services Showcase | Zion Tech Group" 
        description="Discover our cutting-edge 2027 services portfolio featuring AI, IT infrastructure, and micro SAAS solutions. Transform your business with next-generation technology." 
        canonical="https://ziontechgroup.com/innovative-2027-services-showcase/"
      />
      
      {/* Hero Section */}
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Innovative 2027 Services
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transform your business with our cutting-edge portfolio of AI, IT infrastructure, and micro SAAS solutions designed for the future.
          </motion.p>
          
          {/* Market Highlights */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-black/30 rounded-xl border border-cyan-500/30 p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">15+</div>
              <div className="text-slate-300">Innovative Services</div>
            </div>
            <div className="bg-black/30 rounded-xl border border-purple-500/30 p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">$50B+</div>
              <div className="text-slate-300">Total Addressable Market</div>
            </div>
            <div className="bg-black/30 rounded-xl border border-pink-500/30 p-6">
              <div className="text-3xl font-bold text-pink-400 mb-2">40%+</div>
              <div className="text-slate-300">Average Growth Rate</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-black/30 border border-slate-600 rounded-lg text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg border transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r ' + category.color + ' border-transparent text-white'
                      : 'bg-black/30 border-slate-600 text-slate-300 hover:border-slate-500'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {category.icon}
                    <span className="hidden sm:inline">{category.name}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg border transition-all duration-200 ${
                  viewMode === 'grid'
                    ? 'bg-purple-600 border-transparent text-white'
                    : 'bg-black/30 border-slate-600 text-slate-300 hover:border-slate-500'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg border transition-all duration-200 ${
                  viewMode === 'list'
                    ? 'bg-purple-600 border-transparent text-white'
                    : 'bg-black/30 border-slate-600 text-slate-300 hover:border-slate-500'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid/List */}
      <div className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          {filteredServices.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-slate-300 mb-2">No services found</h3>
              <p className="text-slate-400">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className={viewMode === 'grid' 
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
                : 'space-y-6'
              }
            >
              {filteredServices.map((service) => (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  className={`bg-black/30 rounded-2xl border border-slate-700/50 overflow-hidden transition-all duration-300 hover:border-slate-500/50 hover:transform hover:scale-105 ${
                    viewMode === 'list' ? 'flex flex-col lg:flex-row' : ''
                  }`}
                >
                  {/* Service Header */}
                  <div className={`p-6 ${viewMode === 'list' ? 'lg:w-1/3' : ''}`}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-4xl">{service.icon}</div>
                      {service.popular && (
                        <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                          POPULAR
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-slate-300 text-sm mb-4">{service.tagline}</p>
                    
                    {/* Pricing */}
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-3xl font-bold text-white">{service.price}</span>
                      <span className="text-slate-400">{service.period}</span>
                    </div>

                    {/* Trial Info */}
                    <div className="flex items-center gap-2 text-sm text-slate-400 mb-4">
                      <Check className="w-4 h-4 text-green-400" />
                      <span>{service.trialDays} days free trial</span>
                    </div>
                  </div>

                  {/* Service Details */}
                  <div className={`p-6 bg-black/20 ${viewMode === 'list' ? 'lg:w-2/3' : ''}`}>
                    <p className="text-slate-300 mb-4">{service.description}</p>
                    
                    {/* Key Features */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-slate-200 mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.slice(0, 3).map((feature, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm text-slate-400">
                            <Check className="w-3 h-3 text-green-400 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Market Info */}
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div>
                        <div className="text-slate-400">Market Size</div>
                        <div className="text-white font-semibold">{service.marketSize}</div>
                      </div>
                      <div>
                        <div className="text-slate-400">Growth Rate</div>
                        <div className="text-white font-semibold">{service.growthRate}</div>
                      </div>
                    </div>

                    {/* ROI */}
                    <div className="mb-4 p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                      <div className="text-sm text-green-400 font-semibold mb-1">Expected ROI</div>
                      <div className="text-sm text-slate-300">{service.roi}</div>
                    </div>

                    {/* Action Button */}
                    <a
                      href={service.link}
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 group"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-black/40 border-t border-slate-700/50 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-slate-300 mb-8 text-lg">
            Get in touch with our team to discuss how our innovative 2027 services can accelerate your digital transformation journey.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="text-2xl mb-2">📱</div>
              <div className="text-white font-semibold">Mobile</div>
              <div className="text-slate-400">+1 302 464 0950</div>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">✉️</div>
              <div className="text-white font-semibold">Email</div>
              <div className="text-slate-400">kleber@ziontechgroup.com</div>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">📍</div>
              <div className="text-white font-semibold">Address</div>
              <div className="text-slate-400">364 E Main St STE 1008<br />Middletown DE 19709</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://ziontechgroup.com/contact"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 inline-flex items-center gap-2"
            >
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://ziontechgroup.com/services"
              className="border border-slate-600 hover:border-slate-500 text-slate-300 font-semibold py-3 px-8 rounded-lg transition-all duration-200 hover:bg-slate-800/50"
            >
              View All Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}