import React, { useEffect, useState, useCallback } from 'react';
import Layout from './layout/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Play, TrendingUp, Brain, Globe, Cpu, Target, Star, Sparkles as SparklesIcon,
  Brain as BrainIcon, Atom as AtomIcon, Shield as ShieldIcon, ChevronRight, Users, Award
} from 'lucide-react';

// Import our new revolutionary services
import { revolutionary2045AdvancedRealMicroSaas } from '../data/revolutionary-2045-advanced-real-micro-saas';
import { revolutionary2045AdvancedITServices } from '../data/revolutionary-2045-advanced-it-services';
import { revolutionary2045AdvancedAIServices } from '../data/revolutionary-2045-advanced-ai-services';

const Homepage2045: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    setIsVisible(true);
    
    // Set loading to false after a short delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => {
      clearTimeout(timer);
    };
  }, []);

  // Combine all revolutionary services
  const allRevolutionaryServices = [
    ...revolutionary2045AdvancedRealMicroSaas,
    ...revolutionary2045AdvancedITServices,
    ...revolutionary2045AdvancedAIServices
  ];

  // Get featured services for rotation
  const featuredServices = allRevolutionaryServices.slice(0, 6);

  // Filter services by category
  const getFilteredServices = () => {
    if (selectedCategory === 'all') return allRevolutionaryServices;
    return allRevolutionaryServices.filter(service => 
      service.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
      service.type.toLowerCase().includes(selectedCategory.toLowerCase())
    );
  };

  const categories = [
    { id: 'all', name: 'All Services', icon: SparklesIcon, color: 'from-purple-500 to-pink-500', count: allRevolutionaryServices.length },
    { id: 'ai', name: 'AI & Consciousness', icon: BrainIcon, color: 'from-cyan-500 to-blue-500', count: revolutionary2045AdvancedAIServices.length },
    { id: 'quantum', name: 'Quantum Technology', icon: AtomIcon, color: 'from-blue-500 to-indigo-500', count: allRevolutionaryServices.filter(s => s.category.includes('Quantum')).length },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: ShieldIcon, color: 'from-red-500 to-orange-500', count: allRevolutionaryServices.filter(s => s.category.includes('Security')).length },
    { id: 'business', name: 'Business Solutions', icon: Target, color: 'from-emerald-500 to-teal-500', count: allRevolutionaryServices.filter(s => s.type === 'Micro SAAS').length },
    { id: 'it', name: 'IT Infrastructure', icon: Cpu, color: 'from-yellow-500 to-orange-500', count: revolutionary2045AdvancedITServices.length }
  ];

  const stats = [
    { number: "3000+", label: "Revolutionary Services", icon: Star },
    { number: "99.99%", label: "Uptime Guarantee", icon: TrendingUp },
    { number: "24/7", label: "AI Support Available", icon: Brain },
    { number: "250+", label: "Countries Served", icon: Globe }
  ];

  const handleGetStarted = useCallback(() => {
    window.location.href = '/contact';
  }, []);

  const handleWatchDemo = useCallback(() => {
    window.location.href = '/services';
  }, []);

  const handleServiceClick = useCallback((service: { slug: string }) => {
    window.location.href = service.slug;
  }, []);

  const handleCategoryChange = useCallback((categoryId: string) => {
    setSelectedCategory(categoryId);
  }, []);

  // Loading component
  if (isLoading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
            <h2 className="text-2xl font-semibold text-white">Loading Zion Tech Group</h2>
            <p className="text-white/70">Preparing the future of technology...</p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-cyan-900/20" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]" />
            
            {/* Floating Elements */}
            <motion.div
              animate={{ 
                x: [0, 100, 0],
                y: [0, -100, 0],
                rotate: [0, 360, 0]
              }}
              transition={{ 
                duration: 20,
                repeat: -1,
                ease: "linear"
              }}
              className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rounded-lg"
            />
            <motion.div
              animate={{ 
                x: [0, -100, 0],
                y: [0, 100, 0],
                rotate: [0, -360, 0]
              }}
              transition={{ 
                duration: 25,
                repeat: -1,
                ease: "linear"
              }}
              className="absolute top-40 right-32 w-24 h-24 border border-purple-400/20 rounded-full"
            />
            <motion.div
              animate={{ 
                x: [0, 150, 0],
                y: [0, -150, 0],
                rotate: [0, 720, 0]
              }}
              transition={{ 
                duration: 30,
                repeat: -1,
                ease: "linear"
              }}
              className="absolute bottom-32 left-32 w-40 h-40 border border-pink-400/20 transform rotate-45"
            />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
              transition={{ duration: 1 }}
              className="space-y-8"
            >
              {/* Main Heading */}
              <div className="space-y-6">
                <motion.h1 
                  className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                >
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    Zion Tech Group
                  </span>
                </motion.h1>
                <motion.h2 
                  className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white/90"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.4 }}
                >
                  Revolutionary Technology Solutions for 2045 and Beyond
                </motion.h2>
                <motion.p 
                  className="text-lg md:text-xl text-white/70 max-w-4xl mx-auto"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.6 }}
                >
                  Experience the future of technology with our cutting-edge AI consciousness, quantum computing, and autonomous systems. 
                  Transform your business with revolutionary micro SAAS solutions that operate with true intelligence.
                </motion.p>
              </div>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                <button
                  onClick={handleGetStarted}
                  className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl text-lg transition-all duration-300 hover:from-cyan-600 hover:to-purple-600 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Get Started
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
                <button
                  onClick={handleWatchDemo}
                  className="group px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-xl text-lg transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400 hover:bg-white/5 hover:scale-105"
                >
                  <span className="flex items-center gap-2">
                    <Play className="w-5 h-5" />
                    Explore Services
                  </span>
                </button>
              </motion.div>

              {/* Stats */}
              <motion.div 
                className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto pt-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
              >
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Explore Our Revolutionary Services
              </h2>
              <p className="text-lg text-white/70 max-w-2xl mx-auto">
                Discover cutting-edge technology solutions across multiple domains, from AI consciousness to quantum computing
              </p>
            </motion.div>

            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? `bg-gradient-to-r ${category.color} text-white`
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  <category.icon className="w-5 h-5" />
                  {category.name}
                  <span className="ml-2 px-2 py-1 bg-white/20 rounded-full text-xs">
                    {category.count}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {getFilteredServices().map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                  onClick={() => handleServiceClick(service)}

                >
                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105 h-full">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl">🚀</span>
                        <span className="text-sm text-cyan-400 font-medium">{service.category}</span>
                      </div>
                      {service.pricing?.enterprise && (
                        <span className="px-2 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold rounded-full">
                          ENTERPRISE
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                      {service.name}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="text-2xl font-bold text-cyan-400">{service.pricing?.starter || 'Contact for pricing'}</div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.features?.slice(0, 3).map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="px-2 py-1 bg-cyan-500/20 border border-cyan-400/30 rounded-full text-cyan-400 text-xs"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    
                    <div className="mt-auto">
                      <button className="w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 group-hover:shadow-lg group-hover:shadow-cyan-500/25">
                        <span className="flex items-center justify-center space-x-2">
                          Learn More
                          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* View All Services Button */}
            <div className="text-center mt-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/services'}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25"
              >
                <span className="flex items-center space-x-2">
                  View All Services
                  <ArrowRight className="w-5 h-5" />
                </span>
              </motion.button>
            </div>
          </div>
        </section>

        {/* Featured Services Showcase */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-white/5">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Featured Revolutionary Services
              </h2>
              <p className="text-lg text-white/70 max-w-2xl mx-auto">
                Experience our most advanced and innovative technology solutions
              </p>
            </motion.div>

            {/* Featured Services Carousel */}
            <div className="relative">
              <div className="flex gap-8 overflow-hidden">
                {featuredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-8 h-full transition-all duration-300 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/25 hover:scale-105">
                      <div className="absolute top-4 right-4">
                        <div className="text-xs bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full font-medium">
                          Featured
                        </div>
                      </div>
                      
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
                        <Brain className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                        {service.name}
                      </h3>
                      
                      <p className="text-white/70 text-base leading-relaxed mb-6">
                        {service.description}
                      </p>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-2 text-sm text-white/70">
                          <Users className="w-4 h-4 text-cyan-400" />
                          <span>Market Size: {service.marketSize}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-white/70">
                          <Award className="w-4 h-4 text-yellow-400" />
                          <span>{service.competitiveAdvantage}</span>
                        </div>
                      </div>
                      
                      <button
                        onClick={() => handleServiceClick(service)}
                        className="w-full group/btn relative px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl transition-all duration-300 hover:from-cyan-600 hover:to-purple-600 hover:scale-105"
                      >
                        <span className="flex items-center justify-center gap-2">
                          Explore Service
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </span>
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-3xl p-12"
              style={{
                boxShadow: '0 0 50px rgba(6, 182, 212, 0.4)',
              }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join the future of technology with our revolutionary 2045 services. 
                Experience AI consciousness, quantum computing, and autonomous solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={handleGetStarted}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
                >
                  <span className="flex items-center space-x-2">
                    Get Started Today
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </button>
                <button
                  onClick={handleWatchDemo}
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105"
                >
                  View All Services
                </button>
              </div>
              
              <div className="text-sm text-white/50">
                <p>Contact: kleber@ziontechgroup.com | +1 302 464 0950</p>
                <p>Address: 364 E Main St STE 1008 Middletown DE 19709</p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Homepage2045;