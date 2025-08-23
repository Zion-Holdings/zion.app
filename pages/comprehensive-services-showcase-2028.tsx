import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Brain, Shield, Zap, Atom, Globe, Cpu, Search, Filter,
  Phone, Mail, MapPin, ExternalLink, Star, Users, TrendingUp
} from 'lucide-react';
import { innovative2027Q4Additions } from '../data/innovative-2027-q4-additions';
import { revolutionary2028AIServices } from '../data/revolutionary-2028-ai-services';
import { nextGenITInfrastructure2028 } from '../data/next-gen-it-infrastructure-2028';

const ComprehensiveServicesShowcase2028: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState<string>('all');

  const allServices = [
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

  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All' },
    { id: 'low', name: 'Under $500', range: 'Under $500' },
    { id: 'medium', name: '$500 - $1,500', range: '$500 - $1,500' },
    { id: 'high', name: '$1,500 - $3,000', range: '$1,500 - $3,000' },
    { id: 'enterprise', name: 'Over $3,000', range: 'Over $3,000' }
  ];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || 
      service.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
      service.name.toLowerCase().includes(selectedCategory.toLowerCase());
    
    const matchesSearch = searchQuery === '' || 
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesPrice = priceRange === 'all' || 
      (priceRange === 'low' && parseInt(service.price.replace(/[^0-9]/g, '')) < 500) ||
      (priceRange === 'medium' && parseInt(service.price.replace(/[^0-9]/g, '')) >= 500 && parseInt(service.price.replace(/[^0-9]/g, '')) <= 1500) ||
      (priceRange === 'high' && parseInt(service.price.replace(/[^0-9]/g, '')) > 1500 && parseInt(service.price.replace(/[^0-9]/g, '')) <= 3000) ||
      (priceRange === 'enterprise' && parseInt(service.price.replace(/[^0-9]/g, '')) > 3000);
    
    return matchesCategory && matchesSearch && matchesPrice;
  });

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <Layout>
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
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
              2028 Services Showcase
            </motion.h1>
            
            <motion.p 
              className="text-2xl md:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            >
              Discover our comprehensive portfolio of cutting-edge micro SAAS, IT infrastructure, 
              and AI services that are transforming industries and driving innovation worldwide
            </motion.p>

            {/* Stats Row */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            >
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{allServices.length}+</div>
                <div className="text-gray-400">Innovative Services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">15+</div>
                <div className="text-gray-400">Technology Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">$500B+</div>
                <div className="text-gray-400">Total Market Size</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
                <div className="text-gray-400">Expert Support</div>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto border border-white/20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            >
              <h3 className="text-xl font-semibold text-white mb-4">Contact Zion Tech Group</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center space-x-2 text-gray-300">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>{contactInfo.address}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-16 px-4 bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Find Your Perfect Solution
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Use our advanced filtering system to discover services that match your specific needs and budget
              </p>
            </motion.div>

            {/* Search and Filters */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 mb-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm"
                  />
                </div>

                {/* Category Filter */}
                <div>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm"
                  >
                    {categories.map((category) => (
                      <option key={category.id} value={category.id} className="bg-gray-800 text-white">
                        {category.name} ({category.count})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Price Filter */}
                <div>
                  <select
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm"
                  >
                    {priceRanges.map((range) => (
                      <option key={range.id} value={range.id} className="bg-gray-800 text-white">
                        {range.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Results Count */}
            <div className="text-center mb-8">
              <p className="text-lg text-gray-300">
                Showing <span className="text-cyan-400 font-semibold">{filteredServices.length}</span> of {allServices.length} services
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto">
            {filteredServices.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    {/* Service Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-4xl">{service.icon}</div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-white">{service.price}</div>
                        <div className="text-sm text-gray-400">{service.period}</div>
                      </div>
                    </div>

                    {/* Service Info */}
                    <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{service.tagline}</p>
                    
                    {/* Features */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="text-xs text-gray-400 flex items-center">
                            <div className="w-1 h-1 bg-cyan-400 rounded-full mr-2"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Service Details */}
                    <div className="space-y-2 mb-4 text-xs text-gray-400">
                      <div className="flex items-center space-x-2">
                        <Users className="w-3 h-3" />
                        <span>{service.customers}+ customers</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Star className="w-3 h-3 text-yellow-400" />
                        <span>{service.rating}/5 ({service.reviews} reviews)</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <TrendingUp className="w-3 h-3 text-green-400" />
                        <span>{service.growthRate}</span>
                      </div>
                    </div>

                    {/* Market Info */}
                    <div className="mb-4 p-3 bg-white/5 rounded-lg">
                      <div className="text-xs text-gray-400 mb-1">Market Size</div>
                      <div className="text-sm font-semibold text-white">{service.marketSize}</div>
                    </div>

                    {/* ROI */}
                    <div className="mb-4 p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                      <div className="text-xs text-green-400 mb-1">ROI Impact</div>
                      <div className="text-sm font-semibold text-green-400">{service.roi}</div>
                    </div>

                    {/* Actions */}
                    <div className="flex space-x-2">
                      <a
                        href={service.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center py-2 px-4 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-sm font-medium"
                      >
                        Learn More
                      </a>
                      <a
                        href={`mailto:${contactInfo.email}?subject=Inquiry about ${service.name}`}
                        className="bg-white/10 text-white py-2 px-4 rounded-lg hover:bg-white/20 transition-all duration-300 text-sm font-medium border border-white/20"
                      >
                        Contact
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
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
        <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
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
                Join thousands of companies already leveraging our cutting-edge technology solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`mailto:${contactInfo.email}?subject=Service Inquiry`}
                  className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Today
                </a>
                <a
                  href={`tel:${contactInfo.mobile}`}
                  className="px-10 py-5 border-2 border-purple-400 text-purple-400 font-semibold rounded-xl hover:bg-purple-400 hover:text-black transition-all duration-300 transform hover:scale-105"
                >
                  Call Us Now
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default ComprehensiveServicesShowcase2028;