import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, ArrowRight, CheckCircle, 
  Brain, Atom, Rocket, Shield, 
  Target, Microscope, Zap, Globe,
  Phone, Mail, ExternalLink, Search
} from 'lucide-react';
import { ultimateFuturisticServices2034 } from '../../data/2034-ultimate-futuristic-services';

const UltraFuturisticServiceShowcase2034: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: '🚀 All Services', icon: Globe },
    { id: 'AI & Consciousness', name: '🧠 AI & Consciousness', icon: Brain },
    { id: 'Quantum & Emerging Tech', name: '⚛️ Quantum & Emerging Tech', icon: Atom },
    { id: 'Space & Metaverse', name: '🌌 Space & Metaverse', icon: Rocket },
    { id: 'Enterprise IT', name: '🏙️ Enterprise IT', icon: Shield },
    { id: 'Micro SaaS', name: '🎯 Micro SaaS', icon: Target },
    { id: 'Research & Development', name: '🔬 Research & Development', icon: Microscope }
  ];

  const filteredServices = ultimateFuturisticServices2034.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Consciousness':
        return <Brain className="w-6 h-6 text-pink-400" />;
      case 'Quantum & Emerging Tech':
        return <Atom className="w-6 h-6 text-cyan-400" />;
      case 'Space & Metaverse':
        return <Rocket className="w-6 h-6 text-purple-400" />;
      case 'Enterprise IT':
        return <Shield className="w-6 h-6 text-green-400" />;
      case 'Micro SaaS':
        return <Target className="w-6 h-6 text-yellow-400" />;
      case 'Research & Development':
        return <Microscope className="w-6 h-6 text-blue-400" />;
      default:
        return <Zap className="w-6 h-6 text-orange-400" />;
    }
  };

  const getCategoryGradient = (category: string) => {
    switch (category) {
      case 'AI & Consciousness':
        return 'from-pink-500/20 to-rose-500/20';
      case 'Quantum & Emerging Tech':
        return 'from-cyan-500/20 to-blue-500/20';
      case 'Space & Metaverse':
        return 'from-purple-500/20 to-indigo-500/20';
      case 'Enterprise IT':
        return 'from-green-500/20 to-emerald-500/20';
      case 'Micro SaaS':
        return 'from-yellow-500/20 to-orange-500/20';
      case 'Research & Development':
        return 'from-blue-500/20 to-cyan-500/20';
      default:
        return 'from-gray-500/20 to-slate-500/20';
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-cyan-500/5 to-purple-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-pink-500/5 to-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 border border-cyan-500/30 rounded-full text-cyan-300 text-sm font-medium mb-6"
          >
            <Star className="w-4 h-4 mr-2 text-cyan-400" />
            2034 Future Technology Services
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Revolutionary
            </span>
            <br />
            <span className="text-white">Services for Tomorrow</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Experience the future with our cutting-edge AI consciousness platforms, quantum computing solutions, 
            space technology innovations, and revolutionary micro SAAS services that transform businesses and advance humanity.
          </motion.p>
        </div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search revolutionary services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-black/50 border border-cyan-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-lg border transition-all duration-200 flex items-center space-x-2 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 border-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                      : 'bg-black/50 border-cyan-500/30 text-gray-300 hover:border-cyan-500/50 hover:text-cyan-300'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{category.name.replace(/[🚀🧠⚛️🌌🏙️🎯🔬]/g, '').trim()}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div className={`relative bg-gradient-to-br ${getCategoryGradient(service.category)} border border-cyan-500/30 rounded-2xl p-6 h-full backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300`}>
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 flex items-center space-x-2">
                    {getCategoryIcon(service.category)}
                    <span className="text-xs font-medium text-cyan-300 bg-black/50 px-2 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>

                  {/* Service Header */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Features Preview */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-300 mb-3">Key Features</h4>
                    <div className="space-y-2">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-xs text-gray-300">{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 3 && (
                        <div className="text-xs text-cyan-400">
                          +{service.features.length - 3} more features
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-300 mb-2">Starting at</h4>
                    <div className="text-2xl font-bold text-white">
                      {service.pricing.monthly}
                    </div>
                    <div className="text-xs text-gray-400">
                      {service.pricing.yearly}
                    </div>
                  </div>

                  {/* Market Info */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-400">Market Size:</span>
                      <span className="text-green-400 font-medium">{service.marketSize}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col space-y-3">
                    <motion.a
                      href={service.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 shadow-lg shadow-cyan-500/25"
                    >
                      <span>View Demo</span>
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                    
                    <motion.a
                      href={`mailto:${service.contact}?subject=Inquiry about ${service.name}`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-center space-x-2 px-4 py-3 bg-black/50 border border-cyan-500/30 text-cyan-300 font-medium rounded-lg hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all duration-200"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Contact Sales</span>
                    </motion.a>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 border border-cyan-500/30 rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Shape the Future?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the revolution and transform your business with cutting-edge technology. 
              Our team of experts is ready to guide you into the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 shadow-lg shadow-cyan-500/25"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              
              <motion.a
                href="tel:+13024640950"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 px-8 py-4 bg-black/50 border border-cyan-500/30 text-cyan-300 font-medium rounded-lg hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all duration-200"
              >
                <Phone className="w-5 h-5" />
                <span>Call +1 302 464 0950</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UltraFuturisticServiceShowcase2034;