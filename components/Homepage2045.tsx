import React, { useState, useCallback } from 'react';
import Layout from './layout/Layout';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Play, TrendingUp, Brain, Globe, Target, Star, Sparkles as SparklesIcon,
  Brain as BrainIcon, Atom as AtomIcon, Shield as ShieldIcon, Rocket as RocketIcon
} from 'lucide-react';

// Import our new revolutionary services
import { revolutionary2045AdvancedMicroSaas } from '../data/revolutionary-2045-advanced-micro-saas';
import { revolutionary2045ITServices } from '../data/revolutionary-2045-it-services';
import { revolutionary2045AIServices } from '../data/revolutionary-2045-ai-services';

const Homepage2045: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  


  // Combine all revolutionary services
  const allRevolutionaryServices = [
    ...revolutionary2045AdvancedMicroSaas,
    ...revolutionary2045ITServices,
    ...revolutionary2045AIServices
  ];



  // Filter services by category
  const getFilteredServices = () => {
    if (selectedCategory === 'all') return allRevolutionaryServices;
    return allRevolutionaryServices.filter(service => 
      service.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
      service.type.toLowerCase().includes(selectedCategory.toLowerCase())
    );
  };

  const categories = [
    { id: 'all', name: 'All Services', icon: SparklesIcon, color: 'from-purple-500 to-pink-500' },
    { id: 'ai', name: 'AI & Consciousness', icon: BrainIcon, color: 'from-cyan-500 to-blue-500' },
    { id: 'quantum', name: 'Quantum Technology', icon: AtomIcon, color: 'from-blue-500 to-indigo-500' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: ShieldIcon, color: 'from-red-500 to-orange-500' },
    { id: 'space', name: 'Space Technology', icon: RocketIcon, color: 'from-indigo-500 to-purple-500' },
    { id: 'business', name: 'Business Solutions', icon: Target, color: 'from-emerald-500 to-teal-500' }
  ];



  const stats = [
    { number: "2500+", label: "Revolutionary Services", icon: Star },
    { number: "99.99%", label: "Uptime Guarantee", icon: TrendingUp },
    { number: "24/7", label: "AI Support Available", icon: Brain },
    { number: "250+", label: "Countries Served", icon: Globe }
  ];

  const handleGetStarted = useCallback(() => {
    window.location.href = '/revolutionary-2045-pricing-showcase';
  }, []);

  const handleWatchDemo = useCallback(() => {
    window.location.href = '/services';
  }, []);

  const handleServiceClick = useCallback((service: { slug: string }) => {
    window.location.href = service.slug;
  }, []);

  return (
    <Layout>
      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.1),transparent_50%)]" />
          </div>

          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-cyan-400/30 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity as number,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          <div className="relative z-10 text-center px-6 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
                Zion Tech Group
              </h1>
              <p className="text-2xl md:text-3xl lg:text-4xl text-white/90 mb-8 font-light">
                Revolutionary Technology Solutions for 2045 and Beyond
              </p>
              <p className="text-lg md:text-xl text-white/70 mb-12 max-w-4xl mx-auto leading-relaxed">
                Experience the future of technology with our cutting-edge AI consciousness, quantum computing, 
                space technology, and cybersecurity solutions. Leading the revolution in autonomous systems and 
                consciousness-driven innovation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <button
                onClick={handleGetStarted}
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
              >
                <span className="relative z-10">Get Started Today</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              
              <button
                onClick={handleWatchDemo}
                className="group relative px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
              >
                <Play className="inline-block w-5 h-5 mr-2" />
                Explore Services
              </button>
            </motion.div>
          </div>
        </section>

        {/* Services Categories */}
        <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Revolutionary Technology Categories
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Discover our comprehensive range of cutting-edge technology solutions designed for the future
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className={`relative p-8 rounded-2xl bg-gradient-to-br ${category.color} bg-opacity-10 border border-white/10 backdrop-blur-sm hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl" />
                    <div className="relative z-10">
                      <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${category.color} bg-opacity-20 mb-6`}>
                        <category.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">{category.name}</h3>
                      <p className="text-white/70 mb-6">
                        Explore our cutting-edge {category.name.toLowerCase()} solutions designed for the future
                      </p>
                      <button
                        onClick={() => setSelectedCategory(category.id)}
                        className="inline-flex items-center text-white font-semibold hover:text-cyan-400 transition-colors duration-300"
                      >
                        Explore Services
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Services */}
        <section className="py-20 px-6 bg-black">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Featured Revolutionary Services
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Experience the future with our most advanced and innovative technology solutions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {getFilteredServices().slice(0, 9).map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group relative"

                >
                  <div className="relative p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-white/10 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-semibold rounded-full">
                          {service.type}
                        </span>
                        <span className="text-white/50 text-sm">{service.pricing.starter}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                        {service.name}
                      </h3>
                      
                      <p className="text-white/70 text-sm mb-4 line-clamp-3">
                        {service.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <button
                          onClick={() => handleServiceClick(service)}
                          className="inline-flex items-center text-cyan-400 font-semibold hover:text-cyan-300 transition-colors duration-300"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </button>
                        
                        <div className="text-right">
                          <p className="text-white/50 text-xs">Market Size</p>
                          <p className="text-cyan-400 font-semibold text-sm">{service.marketSize}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-center mt-16"
            >
              <button
                onClick={() => window.location.href = '/services'}
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-full text-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
              >
                <span className="relative z-10">View All Services</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Zion Tech Group by the Numbers
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Our commitment to excellence and innovation speaks for itself
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105">
                    <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 mb-6 group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                      <stat.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                      {stat.number}
                    </div>
                    <div className="text-white/70 text-lg">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-cyan-900/20 to-purple-900/20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Experience the Future?
              </h2>
              <p className="text-xl text-white/70 mb-12 max-w-3xl mx-auto">
                Join thousands of forward-thinking organizations already leveraging our revolutionary technology solutions. 
                Transform your business with AI consciousness, quantum computing, and autonomous systems.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={handleGetStarted}
                  className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
                >
                  <span className="relative z-10">Start Your Journey</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
                
                <button
                  onClick={() => window.location.href = '/contact'}
                  className="group relative px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
                >
                  Contact Our Team
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Homepage2045;