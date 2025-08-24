import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Filter, Star, Users, Calendar, TrendingUp, ArrowRight, 
  Phone, Mail, MapPin, Globe, Shield, Brain, Rocket, Atom,
  Database, Cloud, Network, Lock, Eye, Code, Server, Cpu
} from 'lucide-react';
import Link from 'next/link';

// Import our new innovative services
import { innovative2046AdvancedMicroSAASServices } from '../data/innovative-2046-advanced-micro-saas';
import { innovative2046AdvancedITServices } from '../data/innovative-2046-advanced-it-services';
import { innovative2046AdvancedAIServices } from '../data/innovative-2046-advanced-ai-services';

const Services2046Showcase: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  const allServices = [
    ...innovative2046AdvancedMicroSAASServices,
    ...innovative2046AdvancedITServices,
    ...innovative2046AdvancedAIServices
  ];

  const categories = [
    'all',
    'AI',
    'Quantum',
    'IT',
    'Micro SAAS',
    'Cybersecurity',
    'Space',
    'Healthcare',
    'Finance',
    'Energy',
    'Manufacturing',
    'Education',
    'Retail',
    'Supply Chain'
  ];

  const filteredServices = allServices
    .filter(service => {
      const matchesCategory = selectedCategory === 'all' || service.category.includes(selectedCategory);
      const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.tagline.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, ''));
        case 'rating':
          return b.rating - a.rating;
        case 'reviews':
          return b.reviews - a.reviews;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'AI': <Brain className="w-5 h-5" />,
      'Quantum': <Atom className="w-5 h-5" />,
      'IT': <Server className="w-5 h-5" />,
      'Micro SAAS': <Code className="w-5 h-5" />,
      'Cybersecurity': <Shield className="w-5 h-5" />,
      'Space': <Rocket className="w-5 h-5" />,
      'Healthcare': <Eye className="w-5 h-5" />,
      'Finance': <TrendingUp className="w-5 h-5" />,
      'Energy': <Globe className="w-5 h-5" />,
      'Manufacturing': <Cpu className="w-5 h-5" />,
      'Education': <Brain className="w-5 h-5" />,
      'Retail': <Users className="w-5 h-5" />,
      'Supply Chain': <Network className="w-5 h-5" />
    };
    return iconMap[category] || <Code className="w-5 h-5" />;
  };

  const getCategoryColor = (category: string) => {
    const colorMap: { [key: string]: string } = {
      'AI': 'from-purple-500 to-pink-600',
      'Quantum': 'from-cyan-500 to-blue-600',
      'IT': 'from-green-500 to-emerald-600',
      'Micro SAAS': 'from-orange-500 to-red-600',
      'Cybersecurity': 'from-red-500 to-pink-600',
      'Space': 'from-indigo-500 to-purple-600',
      'Healthcare': 'from-emerald-500 to-teal-600',
      'Finance': 'from-yellow-500 to-orange-600',
      'Energy': 'from-blue-500 to-cyan-600',
      'Manufacturing': 'from-gray-500 to-slate-600',
      'Education': 'from-violet-500 to-purple-600',
      'Retail': 'from-pink-500 to-rose-600',
      'Supply Chain': 'from-teal-500 to-cyan-600'
    };
    return colorMap[category] || 'from-gray-500 to-slate-600';
  };

  return (
    <Layout>
      <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Zion Tech Group <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">2046</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Revolutionary quantum AI, advanced IT infrastructure, and cutting-edge micro SAAS solutions 
                that are reshaping industries and defining the future of technology.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center gap-2 text-cyan-400">
                  <Users className="w-5 h-5" />
                  <span>{allServices.length} Innovative Services</span>
                </div>
                <div className="flex items-center gap-2 text-purple-400">
                  <Star className="w-5 h-5" />
                  <span>4.8+ Average Rating</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-400">
                  <Globe className="w-5 h-5" />
                  <span>Global Deployment</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="relative py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>

                {/* Category Filter */}
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent appearance-none"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category} className="bg-gray-800 text-white">
                        {category === 'all' ? 'All Categories' : category}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Sort By */}
                <div className="relative">
                  <TrendingUp className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent appearance-none"
                  >
                    <option value="name" className="bg-gray-800 text-white">Sort by Name</option>
                    <option value="price" className="bg-gray-800 text-white">Sort by Price</option>
                    <option value="rating" className="bg-gray-800 text-white">Sort by Rating</option>
                    <option value="reviews" className="bg-gray-800 text-white">Sort by Reviews</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="relative py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 h-full hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20">
                    {/* Category Badge */}
                    <div className="absolute top-4 right-4">
                      <div className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(service.category)} text-white flex items-center gap-1`}>
                        {getCategoryIcon(service.category)}
                        {service.category}
                      </div>
                    </div>

                    {/* Service Header */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                        {service.name}
                      </h3>
                      <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                        {service.tagline}
                      </p>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-2xl font-bold text-cyan-400">
                          {service.price}
                        </span>
                        <span className="text-sm text-gray-500">/month</span>
                      </div>
                    </div>

                    {/* Service Description */}
                    <div className="mb-4">
                      <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                        {service.description}
                      </p>
                    </div>

                    {/* Service Stats */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-300">{service.rating}</span>
                        <span className="text-sm text-gray-500">({service.reviews} reviews)</span>
                      </div>
                      <div className="text-xs text-gray-500 mb-2">
                        {service.customers} customers • {service.launchDate}
                      </div>
                      <div className="text-xs text-gray-500">
                        Market Size: {service.marketSize}
                      </div>
                    </div>

                    {/* Technology Stack */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {service.technologyStack.slice(0, 3).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-gray-800/50 text-xs text-gray-300 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                        {service.technologyStack.length > 3 && (
                          <span className="px-2 py-1 bg-gray-800/50 text-xs text-gray-300 rounded">
                            +{service.technologyStack.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center justify-between">
                      <Link href={service.link}>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center gap-2"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4" />
                        </motion.button>
                      </Link>
                      
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-gray-400" />
                        <span className="text-xs text-gray-500">{service.contactInfo.phone}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* No Results */}
            {filteredServices.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <div className="text-gray-400 text-xl mb-4">No services found</div>
                <p className="text-gray-500">Try adjusting your search or filter criteria</p>
              </motion.div>
            )}
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Ready to Transform Your <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Business?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                Connect with our team of experts and discover how our revolutionary 2046 
                technology solutions can accelerate your digital transformation journey.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                  <p className="text-cyan-400">+1 302 464 0950</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                  <p className="text-purple-400">kleber@ziontechgroup.com</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                  <p className="text-emerald-400">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
              
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Services2046Showcase;