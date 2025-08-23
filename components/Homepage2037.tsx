import React, { useState } from 'react';
import Layout from './layout/Layout';
import UltraFuturisticServiceCard2037 from './ui/UltraFuturisticServiceCard2037';
import { motion } from 'framer-motion';
import { 
  Brain, Shield, Zap, Atom, Globe, Cpu
} from 'lucide-react';
import { real2036Q1Additions } from '../data/real-2036-q1-additions';
import { real2036Q2Additions } from '../data/real-2036-q2-additions';
import { innovative2027Q4Additions } from '../data/innovative-2027-q4-additions';
import { revolutionary2028AIServices } from '../data/revolutionary-2028-ai-services';
import { nextGenITInfrastructure2028 } from '../data/next-gen-it-infrastructure-2028';

const Homepage2037: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');


  const allServices = [
    ...real2036Q1Additions, 
    ...real2036Q2Additions,
    ...innovative2027Q4Additions,
    ...revolutionary2028AIServices,
    ...nextGenITInfrastructure2028
  ];
  
  const categories = [
    { id: 'all', name: 'All Services', icon: <Globe className="w-5 h-5" />, count: allServices.length },
    { id: 'ai', name: 'AI & ML', icon: <Brain className="w-5 h-5" />, count: allServices.filter(s => s.category.includes('AI')).length },
    { id: 'quantum', name: 'Quantum', icon: <Atom className="w-5 h-5" />, count: allServices.filter(s => s.category.includes('Quantum')).length },
    { id: 'automation', name: 'Automation', icon: <Zap className="w-5 h-5" />, count: allServices.filter(s => s.category.includes('Automation')).length },
    { id: 'cybersecurity', name: 'Security', icon: <Shield className="w-5 h-5" />, count: allServices.filter(s => s.category.includes('Security') || s.category.includes('Cybersecurity')).length },
    { id: 'edge', name: 'Edge AI', icon: <Cpu className="w-5 h-5" />, count: allServices.filter(s => s.category.includes('Edge')).length },
    { id: 'neuromorphic', name: 'Neuromorphic', icon: <Brain className="w-5 h-5" />, count: allServices.filter(s => s.category.includes('Neuromorphic')).length },
    { id: 'blockchain', name: 'Blockchain', icon: <Shield className="w-5 h-5" />, count: allServices.filter(s => s.category.includes('Blockchain')).length },
    { id: 'iot', name: 'IoT', icon: <Cpu className="w-5 h-5" />, count: allServices.filter(s => s.category.includes('IoT')).length },
    { id: 'metaverse', name: 'Metaverse', icon: <Globe className="w-5 h-5" />, count: allServices.filter(s => s.category.includes('Metaverse')).length },
    { id: 'healthcare', name: 'Healthcare', icon: <Brain className="w-5 h-5" />, count: allServices.filter(s => s.category.includes('Healthcare')).length },
    { id: 'energy', name: 'Energy', icon: <Zap className="w-5 h-5" />, count: allServices.filter(s => s.category.includes('Energy')).length }
  ];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || 
      service.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
      service.name.toLowerCase().includes(selectedCategory.toLowerCase());
    
    const matchesSearch = searchQuery === '' || 
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  const getServiceVariant = (service: { category: string }) => {
    if (service.category.includes('Quantum')) return 'quantum';
    if (service.category.includes('Automation')) return 'automation';
    if (service.category.includes('Security') || service.category.includes('Cybersecurity')) return 'cybersecurity';
    if (service.category.includes('Edge')) return 'edge';
    if (service.category.includes('Neuromorphic')) return 'neuromorphic';
    if (service.category.includes('Blockchain')) return 'blockchain-futuristic';
    if (service.category.includes('IoT')) return 'iot-futuristic';
    if (service.category.includes('Metaverse')) return 'metaverse-futuristic';
    if (service.category.includes('Healthcare')) return 'ai-futuristic';
    if (service.category.includes('Energy')) return 'iot-futuristic';
    return 'ai';
  };

  const featuredServices = allServices.filter(service => service.popular).slice(0, 6);

  return (
    <Layout>
      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
                x: [0, 50, 0],
                y: [0, -50, 0]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.4, 0.7, 0.4],
                x: [0, -30, 0],
                y: [0, 30, 0]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <div className="text-center max-w-6xl mx-auto relative z-10">
            <motion.h1 
              className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              Zion Tech Group
            </motion.h1>
            
            <motion.p 
              className="text-2xl md:text-3xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            >
              Pioneering the future of technology with cutting-edge quantum computing, 
              AI innovations, and revolutionary micro SAAS solutions that drive business transformation
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            >
              <motion.a
                href="/comprehensive-services-showcase-2028"
                className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-cyan-500/25 inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Services
              </motion.a>
              <motion.a
                href="mailto:kleber@ziontechgroup.com?subject=Service Inquiry"
                className="px-10 py-5 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 backdrop-blur-sm inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.a>
            </motion.div>

            {/* Stats Row */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            >
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{allServices.length}+</div>
                <div className="text-gray-400">Services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">2,500+</div>
                <div className="text-gray-400">Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">99.9%</div>
                <div className="text-gray-400">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
                <div className="text-gray-400">Support</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Services Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Featured Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our most popular and innovative solutions that are transforming industries worldwide
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <UltraFuturisticServiceCard2037
                    service={service}
                    variant={getServiceVariant(service)}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Showcase Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-transparent to-black/20">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Complete Service Portfolio
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive range of cutting-edge technology solutions
              </p>
            </motion.div>

            {/* Search and Filter */}
            <div className="mb-12">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
                <div className="relative flex-1 max-w-md">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm"
                  />
                </div>
                
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {categories.map((category) => (
                    <motion.button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-300 whitespace-nowrap ${
                        selectedCategory === category.id
                          ? 'bg-cyan-500 border-cyan-500 text-black'
                          : 'bg-white/10 border-white/20 text-white hover:bg-white/20'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {category.icon}
                      <span>{category.name}</span>
                      <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <UltraFuturisticServiceCard2037
                    service={service}
                    variant={getServiceVariant(service)}
                  />
                </motion.div>
              ))}
            </div>

            {filteredServices.length === 0 && (
              <motion.div 
                className="text-center py-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-gray-400">Try adjusting your search or filter criteria</p>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join hundreds of companies already leveraging our cutting-edge technology solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="mailto:kleber@ziontechgroup.com?subject=Get Started Inquiry"
                  className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 inline-block"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started Today
                </motion.a>
                <motion.a
                  href="tel:+13024640950"
                  className="px-10 py-5 border-2 border-purple-400 text-purple-400 font-semibold rounded-xl hover:bg-purple-400 hover:text-black transition-all duration-300 transform hover:scale-105 inline-block"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Call Us Now
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Homepage2037;