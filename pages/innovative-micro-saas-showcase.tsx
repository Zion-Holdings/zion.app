import React, { useState } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, ArrowRight, CheckCircle, 
  Brain, Atom, Rocket, Shield, 
  Target, Microscope, Zap, Globe,
  Phone, Mail, ExternalLink, Search,
  Sparkles, TrendingUp, Users, Award,
  Cpu, Database, Cloud, Lock, ShieldCheck,
  Earth, Factory, Car, Building, GraduationCap,
  Scale, Palette, Camera, Video, Music, Gamepad2,
  Heart, Leaf, Sun, Moon, Wind, Droplets,
  Mountain, Code, Wrench, Smartphone, BarChart3,
  Eye, Network, Server, HardDrive, Monitor,
  Laptop, Watch, Headphones, Speaker, Mic,
  Keyboard, Mouse, CircuitBoard, Satellite, Dna,
  Microchip, Telescope, Beaker, TestTube, Syringe,
  Pill, Stethoscope, HeartPulse, Activity, Lightbulb,
  Flame, Battery, Power, Wifi, Bluetooth, Radio,
  Antenna, Signal, Compass, Navigation, Map, Globe2,
  DollarSign, CreditCard, Package, MessageCircle
} from 'lucide-react';
import { innovativeMicroSaasSolutions } from '../data/2034-innovative-micro-saas-solutions';
import { cuttingEdgeAIServices } from '../data/2034-cutting-edge-ai-services';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const InnovativeMicroSaasShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const allServices = [...innovativeMicroSaasSolutions, ...cuttingEdgeAIServices];

  const categories = [
    { id: 'all', name: '🚀 All Solutions', icon: Globe, count: allServices.length },
    { id: 'Content Marketing', name: '📝 Content Marketing', icon: Palette, count: allServices.filter(s => s.category === 'Content Marketing').length },
    { id: 'Business Operations', name: '🏢 Business Operations', icon: Building, count: allServices.filter(s => s.category === 'Business Operations').length },
    { id: 'Marketing Automation', name: '📊 Marketing Automation', icon: TrendingUp, count: allServices.filter(s => s.category === 'Marketing Automation').length },
    { id: 'Customer Success', name: '🎯 Customer Success', icon: Users, count: allServices.filter(s => s.category === 'Customer Success').length },
    { id: 'Sales Automation', name: '💰 Sales Automation', icon: DollarSign, count: allServices.filter(s => s.category === 'Sales Automation').length },
    { id: 'Financial Technology', name: '💳 Financial Technology', icon: CreditCard, count: allServices.filter(s => s.category === 'Financial Technology').length },
    { id: 'Human Resources', name: '👥 Human Resources', icon: Users, count: allServices.filter(s => s.category === 'Human Resources').length },
    { id: 'Supply Chain Management', name: '📦 Supply Chain Management', icon: Package, count: allServices.filter(s => s.category === 'Supply Chain Management').length },
    { id: 'Customer Support', name: '🆘 Customer Support', icon: MessageCircle, count: allServices.filter(s => s.category === 'Customer Support').length },
    { id: 'AI Consciousness', name: '🧠 AI Consciousness', icon: Brain, count: allServices.filter(s => s.category === 'AI Consciousness').length },
    { id: 'AI Emotional Intelligence', name: '❤️ AI Emotional Intelligence', icon: Heart, count: allServices.filter(s => s.category === 'AI Emotional Intelligence').length },
    { id: 'AI Creativity', name: '🎨 AI Creativity', icon: Palette, count: allServices.filter(s => s.category === 'AI Creativity').length },
    { id: 'AI Psychology', name: '🧘 AI Psychology', icon: Brain, count: allServices.filter(s => s.category === 'AI Psychology').length },
    { id: 'AI Business Management', name: '🏢 AI Business Management', icon: Building, count: allServices.filter(s => s.category === 'AI Business Management').length },
    { id: 'AI Healthcare', name: '🏥 AI Healthcare', icon: Stethoscope, count: allServices.filter(s => s.category === 'AI Healthcare').length },
    { id: 'AI Neural Interfaces', name: '🧬 AI Neural Interfaces', icon: Dna, count: allServices.filter(s => s.category === 'AI Neural Interfaces').length },
    { id: 'AI Quantum Computing', name: '⚛️ AI Quantum Computing', icon: Atom, count: allServices.filter(s => s.category === 'AI Quantum Computing').length }
  ];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (typeof (service as any).tagline === 'string' && (service as any).tagline.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Content Marketing':
        return <Palette className="w-6 h-6 text-pink-400" />;
      case 'Business Operations':
        return <Building className="w-6 h-6 text-blue-400" />;
      case 'Marketing Automation':
        return <TrendingUp className="w-6 h-6 text-green-400" />;
      case 'Customer Success':
        return <Users className="w-6 h-6 text-purple-400" />;
      case 'Sales Automation':
        return <DollarSign className="w-6 h-6 text-yellow-400" />;
      case 'Financial Technology':
        return <CreditCard className="w-6 h-6 text-emerald-400" />;
      case 'Human Resources':
        return <Users className="w-6 h-6 text-indigo-400" />;
      case 'Supply Chain Management':
        return <Package className="w-6 h-6 text-orange-400" />;
      case 'Customer Support':
        return <MessageCircle className="w-6 h-6 text-red-400" />;
      case 'AI Consciousness':
        return <Brain className="w-6 h-6 text-violet-400" />;
      case 'AI Emotional Intelligence':
        return <Heart className="w-6 h-6 text-rose-400" />;
      case 'AI Creativity':
        return <Palette className="w-6 h-6 text-cyan-400" />;
      case 'AI Psychology':
        return <Brain className="w-6 h-6 text-teal-400" />;
      case 'AI Business Management':
        return <Building className="w-6 h-6 text-sky-400" />;
      case 'AI Healthcare':
        return <Stethoscope className="w-6 h-6 text-lime-400" />;
      case 'AI Neural Interfaces':
        return <Dna className="w-6 h-6 text-fuchsia-400" />;
      case 'AI Quantum Computing':
        return <Atom className="w-6 h-6 text-amber-400" />;
      default:
        return <Zap className="w-6 h-6 text-gray-400" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Content Marketing':
        return 'border-pink-500/30 bg-pink-500/10';
      case 'Business Operations':
        return 'border-blue-500/30 bg-blue-500/10';
      case 'Marketing Automation':
        return 'border-green-500/30 bg-green-500/10';
      case 'Customer Success':
        return 'border-purple-500/30 bg-purple-500/10';
      case 'Sales Automation':
        return 'border-yellow-500/30 bg-yellow-500/10';
      case 'Financial Technology':
        return 'border-emerald-500/30 bg-emerald-500/10';
      case 'Human Resources':
        return 'border-indigo-500/30 bg-indigo-500/10';
      case 'Supply Chain Management':
        return 'border-orange-500/30 bg-orange-500/10';
      case 'Customer Support':
        return 'border-red-500/30 bg-red-500/10';
      case 'AI Consciousness':
        return 'border-violet-500/30 bg-violet-500/10';
      case 'AI Emotional Intelligence':
        return 'border-rose-500/30 bg-rose-500/10';
      case 'AI Creativity':
        return 'border-cyan-500/30 bg-cyan-500/10';
      case 'AI Psychology':
        return 'border-teal-500/30 bg-teal-500/10';
      case 'AI Business Management':
        return 'border-sky-500/30 bg-sky-500/10';
      case 'AI Healthcare':
        return 'border-lime-500/30 bg-lime-500/10';
      case 'AI Neural Interfaces':
        return 'border-fuchsia-500/30 bg-fuchsia-500/10';
      case 'AI Quantum Computing':
        return 'border-amber-500/30 bg-amber-500/10';
      default:
        return 'border-gray-500/30 bg-gray-500/10';
    }
  };

  return (
    <>
      <Head>
        <title>Innovative Micro SAAS Solutions - Zion Tech Group | 2034 Future Technology</title>
        <meta name="description" content="Discover revolutionary micro SAAS solutions and cutting-edge AI services. Transform your business with innovative technology solutions from Zion Tech Group." />
        <meta name="keywords" content="micro SAAS, AI services, business solutions, innovation, technology, Zion Tech Group" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Innovative Micro SAAS Solutions - Zion Tech Group" />
        <meta property="og:description" content="Revolutionary micro SAAS solutions and cutting-edge AI services for modern businesses." />
        <meta property="og:url" content="https://ziontechgroup.com/innovative-micro-saas-showcase" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Zion Tech Group" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Innovative Micro SAAS Solutions - Zion Tech Group" />
        <meta name="twitter:description" content="Revolutionary micro SAAS solutions and cutting-edge AI services for modern businesses." />
        
        {/* Contact Information */}
        <meta name="contact:phone" content="+1 302 464 0950" />
        <meta name="contact:email" content="kleber@ziontechgroup.com" />
        <meta name="contact:address" content="364 E Main St STE 1008 Middletown DE 19709" />
        
        <link rel="canonical" href="https://ziontechgroup.com/innovative-micro-saas-showcase" />
      </Head>

      <div className="min-h-screen bg-black text-white">
        {/* Background Elements */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-pink-900/20" />
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" />
          <div className="absolute bottom-0 left-0 w-full h-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50" />
          
          {/* Floating particles */}
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -50, 0],
                opacity: [0.4, 0.8, 0.4],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center pt-32 pb-16"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 border border-cyan-500/30 rounded-full text-cyan-300 text-lg font-medium mb-6">
                <Star className="w-5 h-5 mr-2 text-cyan-400" />
                2034 Innovative Solutions
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                  Innovative Micro SAAS
                </span>
                <br />
                <span className="text-white">Solutions</span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Discover revolutionary micro SAAS solutions and cutting-edge AI services that transform businesses. 
                From content automation to AI consciousness, experience the future of technology today.
              </p>
            </div>
          </motion.div>

          {/* Search and Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12"
          >
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-2xl">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search innovative solutions, AI services, and micro SAAS..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/5 border border-cyan-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300"
                />
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center space-x-2 bg-white/5 border border-cyan-500/30 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-4 py-2 rounded-md transition-all duration-300 ${
                    viewMode === 'grid'
                      ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Grid
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`px-4 py-2 rounded-md transition-all duration-300 ${
                    viewMode === 'list'
                      ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  List
                </button>
              </div>
            </div>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12"
          >
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category, index) => (
                <motion.button
                  key={category.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-3 px-6 py-3 rounded-xl border transition-all duration-300 hover:scale-105 ${
                    selectedCategory === category.id
                      ? 'border-cyan-500/50 bg-cyan-500/20 text-cyan-400'
                      : 'border-cyan-500/30 bg-white/5 text-gray-300 hover:border-cyan-500/50 hover:bg-cyan-500/10'
                  }`}
                >
                  <span className="text-2xl">{React.createElement(category.icon)}</span>
                  <span className="font-medium">{category.name.split(' ').slice(1).join(' ')}</span>
                  <span className="px-2 py-1 bg-white/10 rounded-full text-xs font-medium">
                    {category.count}
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Services Grid/List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20"
          >
            {filteredServices.length === 0 ? (
              <div className="text-center py-20">
                <div className="w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 border border-cyan-500/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2">No solutions found</h3>
                <p className="text-gray-400">Try adjusting your search or category filters.</p>
              </div>
            ) : (
              <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}>
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={(service as any).id || (service as any).slug || (service as any).name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`group relative overflow-hidden rounded-2xl border transition-all duration-500 hover:scale-105 ${
                      viewMode === 'grid' 
                        ? 'bg-gradient-to-br from-white/5 to-white/2 border-cyan-500/30'
                        : 'bg-white/5 border-cyan-500/30'
                    } ${getCategoryColor(service.category)}`}
                  >
                    {/* Service Header */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          {getCategoryIcon(service.category)}
                          <div>
                            <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                              {service.name}
                            </h3>
                            <p className="text-sm text-gray-400">{service.category}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-gray-400">{(service as any).rating ?? '4.8'}</span>
                        </div>
                      </div>

                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {(service as any).tagline || service.description}
                      </p>

                      <p className="text-gray-400 mb-6 text-sm">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Features</h4>
                        <div className="grid grid-cols-1 gap-2">
                          {service.features.slice(0, 3).map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                              <span>{feature}</span>
                            </div>
                          ))}
                          {service.features.length > 3 && (
                            <div className="text-xs text-gray-500 text-center py-2">
                              +{service.features.length - 3} more features
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Pricing */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-purple-400 mb-2">Starting From</h4>
                        <div className="text-2xl font-bold text-white">
                          {(service as any).pricing?.starter || ((service as any).pricing?.monthly ? `$${(service as any).pricing.monthly}/mo` : 'Contact for pricing')}
                        </div>
                        <p className="text-sm text-gray-400">
                          {((service as any).pricing?.professional || '') + (((service as any).pricing?.professional && (service as any).pricing?.enterprise) ? ' • ' : '') + ((service as any).pricing?.enterprise || '')}
                        </p>
                      </div>

                      {/* Status and Stats */}
                      <div className="flex items-center justify-between mb-6 text-sm">
                        <div className="flex items-center space-x-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            ((service as any).status === 'Live') ? 'bg-green-500/20 text-green-400' :
                            ((service as any).status === 'Beta') ? 'bg-yellow-500/20 text-yellow-400' :
                            'bg-blue-500/20 text-blue-400'
                          }`}>
                            {(service as any).status || 'Available'}
                          </span>
                        </div>
                        <div className="text-gray-400">
                          {(((service as any).customerCount ?? 0) as number).toLocaleString()} customers
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center space-x-3">
                        <a
                          href={(service as any).demo || '/demo'}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group-hover:scale-105"
                        >
                          <span>View Demo</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                        
                        <a
                          href={`mailto:${(service as any).contact || 'kleber@ziontechgroup.com'}?subject=Inquiry about ${service.name}`}
                          className="flex items-center justify-center w-12 h-12 bg-white/10 border border-cyan-500/30 rounded-lg text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 group-hover:scale-105"
                        >
                          <Mail className="w-5 h-5" />
                        </a>
                      </div>
                    </div>

                    {/* Hover Effects */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-purple-600/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20"
          >
            <div className="bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 border border-cyan-500/30 rounded-2xl p-12 text-center">
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join the revolution and discover how our innovative solutions can 
                accelerate your business growth and innovation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="/contact"
                  className="flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  <span>Get Started Today</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                
                <a
                  href={`tel:${contactInfo.mobile}`}
                  className="flex items-center space-x-2 px-8 py-4 bg-white/10 border border-cyan-500/30 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call {contactInfo.mobile}</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default InnovativeMicroSaasShowcase;