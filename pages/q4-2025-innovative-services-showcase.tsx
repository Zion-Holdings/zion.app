import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, Brain, Atom, Shield, Rocket, Zap, 
  ArrowRight, Check, ExternalLink, TrendingUp,
  Users, Globe, Award, Clock, DollarSign, Search
} from 'lucide-react';

// Import our new Q4 2025 services
import { innovative2025Q4MicroSaasExpansion } from '../data/innovative-2025-q4-micro-saas-expansion';
import { innovative2025Q4ITServicesExpansion } from '../data/innovative-2025-q4-it-services-expansion';
import { innovative2025Q4AIServicesExpansion } from '../data/innovative-2025-q4-ai-services-expansion';

const Q42025InnovativeServicesShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const allServices = [
    ...innovative2025Q4MicroSaasExpansion,
    ...innovative2025Q4ITServicesExpansion,
    ...innovative2025Q4AIServicesExpansion
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: <Star className="w-5 h-5" />, count: allServices.length },
    { id: 'ai', name: 'AI Services', icon: <Brain className="w-5 h-5" />, count: innovative2025Q4AIServicesExpansion.length },
    { id: 'it', name: 'IT Services', icon: <Shield className="w-5 h-5" />, count: innovative2025Q4ITServicesExpansion.length },
    { id: 'saas', name: 'Micro SAAS', icon: <Rocket className="w-5 h-5" />, count: innovative2025Q4MicroSaasExpansion.length }
  ];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = activeCategory === 'all' || 
      (activeCategory === 'ai' && service.category.includes('AI')) ||
      (activeCategory === 'it' && service.category.includes('IT')) ||
      (activeCategory === 'saas' && service.category.includes('SAAS'));
    
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <Layout>
      <main className="relative z-10 pt-24 lg:pt-28">
        {/* Hero Section */}
        <section className="min-h-[60vh] flex items-center justify-center px-4 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rounded-lg animate-pulse"></div>
            <div className="absolute top-40 right-32 w-24 h-24 border border-purple-400/20 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute bottom-32 left-32 w-40 h-40 border border-pink-400/20 transform rotate-45 animate-pulse delay-2000"></div>
          </div>
          
          <div className="text-center max-w-4xl mx-auto relative z-10">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30 rounded-full text-green-400 text-sm font-medium"
              >
                <Star className="w-4 h-4" />
                <span>Q4 2025 Innovation Release</span>
              </motion.div>
              
              <motion.h1 
                variants={itemVariants}
                className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 via-emerald-500 to-cyan-600 bg-clip-text text-transparent"
              >
                Revolutionary Q4 2025 Services
              </motion.h1>
              
              <motion.p 
                variants={itemVariants}
                className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
              >
                Introducing our most innovative and cutting-edge services that push the boundaries of technology and business transformation
              </motion.p>
              
              <motion.div 
                variants={itemVariants}
                className="flex flex-wrap justify-center gap-4 text-sm text-gray-400"
              >
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-400" />
                  <span>15+ New Services</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-400" />
                  <span>AI-Powered Solutions</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-400" />
                  <span>Quantum Technology</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-400" />
                  <span>Autonomous Operations</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-12 px-4 bg-black/30">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold text-center mb-6 text-white">
                Explore by Category
              </h2>
              
              <div className="flex flex-wrap justify-center gap-4">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg border-2 transition-all duration-300 ${
                      activeCategory === category.id
                        ? 'border-green-400 bg-green-400/10 text-green-400'
                        : 'border-gray-600 text-gray-400 hover:border-green-400 hover:text-green-400'
                    }`}
                  >
                    {category.icon}
                    <span>{category.name}</span>
                    <span className="text-xs bg-gray-700 px-2 py-1 rounded-full">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Search */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="max-w-md mx-auto"
            >
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20"
                />
                <Search className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredServices.map((service) => (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  className="group bg-gradient-to-br from-gray-900/50 to-black/50 border border-gray-700 rounded-xl p-6 hover:border-green-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-400/10"
                >
                  {/* Service Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-3xl">{service.icon}</div>
                    {service.popular && (
                      <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full border border-green-400/30">
                        Popular
                      </span>
                    )}
                  </div>

                  {/* Service Info */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                    {service.name}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Category & Price */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded">
                      {service.category}
                    </span>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-400">
                        ${service.price.monthly.toLocaleString()}
                      </div>
                      <div className="text-xs text-gray-500">per month</div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                    <div className="space-y-1">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-xs text-gray-400">
                          <Check className="w-3 h-3 text-green-400" />
                          <span>{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 3 && (
                        <div className="text-xs text-gray-500">
                          +{service.features.length - 3} more features
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Benefits:</h4>
                    <div className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, index) => (
                        <div key={index} className="flex items-center gap-2 text-xs text-gray-400">
                          <TrendingUp className="w-3 h-3 text-blue-400" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                    <div>
                      <div className="text-lg font-bold text-white">{service.customers.toLocaleString()}+</div>
                      <div className="text-xs text-gray-500">Customers</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-white">{service.rating}</div>
                      <div className="text-xs text-gray-500">Rating</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-white">{service.reviews}</div>
                      <div className="text-xs text-gray-500">Reviews</div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex gap-2">
                    <a
                      href={service.link}
                      className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-center py-2 px-4 rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105"
                    >
                      Learn More
                    </a>
                    <a
                      href="/contact"
                      className="px-4 py-2 border border-green-400 text-green-400 rounded-lg hover:bg-green-400 hover:text-black transition-all duration-300"
                    >
                      Contact
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {filteredServices.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-gray-400">Try adjusting your search or category filter</p>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-6 text-white"
            >
              Ready to Transform Your Business?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 mb-8"
            >
              Get started with our revolutionary Q4 2025 services and experience the future of technology
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </a>
              <a
                href="/services"
                className="px-8 py-4 border-2 border-green-400 text-green-400 font-semibold rounded-lg hover:bg-green-400 hover:text-black transition-all duration-300"
              >
                View All Services
              </a>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Q42025InnovativeServicesShowcase;