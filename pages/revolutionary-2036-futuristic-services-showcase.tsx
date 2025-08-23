import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, TrendingUp, Zap, Shield, Brain, Globe, Rocket, DollarSign, Users, Clock, Award } from 'lucide-react';
import { revolutionary2036FuturisticServices } from '../data/revolutionary-2036-futuristic-services';
import Layout from '../components/layout/Layout';

const Revolutionary2036FuturisticServicesShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const categories = [
    { id: 'all', name: 'All Services', icon: Star },
    { id: 'quantum', name: 'Quantum Computing', icon: Zap },
    { id: 'holographic', name: 'Holographic Technology', icon: Globe },
    { id: 'ai', name: 'AI & Consciousness', icon: Brain },
    { id: 'space', name: 'Space Technology', icon: Rocket },
    { id: 'security', name: 'Cybersecurity', icon: Shield }
  ];

  const filteredServices = revolutionary2036FuturisticServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || 
      service.category.toLowerCase().includes(selectedCategory) ||
      service.technology.some(tech => tech.toLowerCase().includes(selectedCategory));
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (category: string) => {
    if (category.includes('Quantum')) return '⚛️';
    if (category.includes('Holographic')) return '✨';
    if (category.includes('AI')) return '🧠';
    if (category.includes('Space')) return '🚀';
    if (category.includes('Security')) return '🛡️';
    if (category.includes('Healthcare')) return '🏥';
    if (category.includes('Education')) return '🎓';
    if (category.includes('Retail')) return '🛍️';
    if (category.includes('Finance')) return '💰';
    if (category.includes('Logistics')) return '🚚';
    if (category.includes('Climate')) return '🌍';
    return '🚀';
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-emerald-500/30 to-teal-500/30 rounded-full blur-3xl animate-pulse delay-500"></div>
          </div>

          <div className="max-w-6xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-8">
                <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
                  Revolutionary 2036
                </span>
                <br />
                <span className="text-white">Futuristic Services</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                Experience the future of technology with our revolutionary services that combine quantum computing, 
                consciousness AI, and holographic technology to transform industries and create new possibilities.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
            >
              {[
                { number: '10', label: 'Revolutionary Services', icon: Star },
                { number: '2036', label: 'Technology Level', icon: TrendingUp },
                { number: '1000%', label: 'Average ROI', icon: DollarSign },
                { number: '5+ Years', label: 'Tech Advantage', icon: Award }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-purple-400" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Category Navigation */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap justify-center gap-4 mb-8"
            >
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <category.icon className="w-5 h-5" />
                    {category.name}
                  </span>
                </button>
              ))}
            </motion.div>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="max-w-md mx-auto mb-12"
            >
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search revolutionary services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-all duration-300"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  🔍
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all duration-500"
                >
                  {/* Popular Badge */}
                  {service.popular && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold rounded-full">
                        POPULAR
                      </span>
                    </div>
                  )}

                  {/* Service Icon */}
                  <div className="p-8 text-center">
                    <div className="text-6xl mb-6">{service.icon}</div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Price */}
                    <div className="text-3xl font-bold text-white mb-6">
                      {service.price}
                      <span className="text-gray-400 text-lg">{service.period}</span>
                    </div>

                    {/* Features */}
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-white mb-4">Key Features</h4>
                      <ul className="space-y-2">
                        {service.features.slice(0, 4).map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-gray-300 text-sm">
                            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Market Info */}
                    <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                      <div className="text-center">
                        <div className="text-gray-400">Market Size</div>
                        <div className="text-white font-semibold">{service.marketSize}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-gray-400">Growth Rate</div>
                        <div className="text-white font-semibold">{service.growthRate}</div>
                      </div>
                    </div>

                    {/* Innovation Level */}
                    <div className="mb-6">
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg border border-purple-500/30">
                        <Star className="w-4 h-4 text-purple-400" />
                        <span className="text-purple-400 font-semibold">{service.innovationLevel}</span>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <button className="w-full px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25">
                      <span className="flex items-center justify-center gap-2">
                        Learn More
                        <ArrowRight className="w-5 h-5" />
                      </span>
                    </button>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              ))}
            </motion.div>

            {filteredServices.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <div className="text-6xl mb-6">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-4">No services found</h3>
                <p className="text-gray-400">Try adjusting your search criteria or category selection.</p>
              </motion.div>
            )}
          </div>
        </section>

        {/* Technology Stack Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-purple-500/5 to-pink-500/5">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
                Revolutionary Technology Stack
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our services leverage cutting-edge technologies that are 5-10 years ahead of the market
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {[
                { name: 'Quantum Computing', icon: '⚛️', description: 'ArrowRight-generation computational power' },
                { name: 'AI Consciousness', icon: '🧠', description: 'Advanced neural consciousness' },
                { name: 'Holographic Tech', icon: '✨', description: '3D immersive experiences' },
                { name: 'Space Technology', icon: '🚀', description: 'Interplanetary solutions' }
              ].map((tech, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl mb-4">{tech.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{tech.name}</h3>
                  <p className="text-gray-400 text-sm">{tech.description}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl p-12 border border-purple-400/20"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Experience the Future?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Contact us to learn more about our revolutionary 2036 services and how they can transform your business
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-left">
                <div className="text-center md:text-left">
                  <div className="w-12 h-12 mx-auto md:mx-0 mb-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Contact Info</h3>
                  <p className="text-gray-300 text-sm">
                    Mobile: +1 302 464 0950<br />
                    Email: kleber@ziontechgroup.com
                  </p>
                </div>
                
                <div className="text-center md:text-left">
                  <div className="w-12 h-12 mx-auto md:mx-0 mb-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Setup Time</h3>
                  <p className="text-gray-300 text-sm">
                    Most services: 2-6 weeks<br />
                    Custom solutions: 8-12 weeks
                  </p>
                </div>
                
                <div className="text-center md:text-left">
                  <div className="w-12 h-12 mx-auto md:mx-0 mb-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Technology Advantage</h3>
                  <p className="text-gray-300 text-sm">
                    5-10 years ahead<br />
                    Patent-pending innovations
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                  Schedule a Demo
                </button>
                <button className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-xl hover:bg-purple-400 hover:text-black transition-all duration-300">
                  Get Pricing
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Revolutionary2036FuturisticServicesShowcase;