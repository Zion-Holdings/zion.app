import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Grid, List, Star, CheckCircle, ArrowRight,
  Brain, Atom, Shield, Target, Rocket, Palette, Heart, 
  Truck, GraduationCap, Building, Cpu, Database, Cloud, 
  Lock, Globe, Zap, Users, TrendingUp, Award, Box, Eye, Mic
} from 'lucide-react';
import { Phone, Mail, MapPin } from 'lucide-react';

// Import our new innovative services
import { innovative2025MicroSaasExpansion } from '../data/innovative-2025-micro-saas-expansion';
import { innovative2025ITSolutionsExpansion } from '../data/innovative-2025-it-solutions-expansion';
import { innovative2025AIServicesExpansion } from '../data/innovative-2025-ai-services-expansion';

const contact = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const Innovative2025ServicesShowcase: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Combine all services
  const allServices = [
    ...innovative2025MicroSaasExpansion,
    ...innovative2025ITSolutionsExpansion,
    ...innovative2025AIServicesExpansion
  ];

  // Filter services based on search and category
  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Get unique categories
  const categories = [
    { id: 'all', name: 'All Services', icon: <Grid className="w-5 h-5" />, count: allServices.length },
    { id: 'Customer Success & Automation', name: 'Customer Success', icon: <Users className="w-5 h-5" />, count: allServices.filter(s => s.category === 'Customer Success & Automation').length },
    { id: 'Enterprise & Compliance', name: 'Enterprise', icon: <Building className="w-5 h-5" />, count: allServices.filter(s => s.category === 'Enterprise & Compliance').length },
    { id: 'DevOps & Infrastructure', name: 'DevOps', icon: <Cpu className="w-5 h-5" />, count: allServices.filter(s => s.category === 'DevOps & Infrastructure').length },
    { id: 'Financial Technology', name: 'FinTech', icon: <TrendingUp className="w-5 h-5" />, count: allServices.filter(s => s.category === 'Financial Technology').length },
    { id: 'Supply Chain & Logistics', name: 'Supply Chain', icon: <Truck className="w-5 h-5" />, count: allServices.filter(s => s.category === 'Supply Chain & Logistics').length },
    { id: 'Healthcare & Biotechnology', name: 'Healthcare', icon: <Heart className="w-5 h-5" />, count: allServices.filter(s => s.category === 'Healthcare & Biotechnology').length },
    { id: 'Marketing & Automation', name: 'Marketing', icon: <Target className="w-5 h-5" />, count: allServices.filter(s => s.category === 'Marketing & Automation').length },
    { id: 'Security & Communication', name: 'Security', icon: <Shield className="w-5 h-5" />, count: allServices.filter(s => s.category === 'Security & Communication').length },
    { id: 'Legal Technology', name: 'Legal Tech', icon: <Award className="w-5 h-5" />, count: allServices.filter(s => s.category === 'Legal Technology').length },
    { id: 'Edge Computing & IoT', name: 'Edge & IoT', icon: <Zap className="w-5 h-5" />, count: allServices.filter(s => s.category === 'Edge Computing & IoT').length },
    { id: 'Quantum Computing', name: 'Quantum', icon: <Atom className="w-5 h-5" />, count: allServices.filter(s => s.category === 'Quantum Computing').length },
    { id: 'Cybersecurity', name: 'Cybersecurity', icon: <Lock className="w-5 h-5" />, count: allServices.filter(s => s.category === 'Cybersecurity').length },
    { id: 'Data & Analytics', name: 'Data & Analytics', icon: <Database className="w-5 h-5" />, count: allServices.filter(s => s.category === 'Data & Analytics').length },
    { id: 'Cloud & Infrastructure', name: 'Cloud', icon: <Cloud className="w-5 h-5" />, count: allServices.filter(s => s.category === 'Cloud & Infrastructure').length },
    { id: 'Networking & Infrastructure', name: 'Networking', icon: <Globe className="w-5 h-5" />, count: allServices.filter(s => s.category === 'Networking & Infrastructure').length },
    { id: 'API & Integration', name: 'API & Integration', icon: <Cpu className="w-5 h-5" />, count: allServices.filter(s => s.category === 'API & Integration').length },
    { id: 'Database & Data Management', name: 'Database', icon: <Database className="w-5 h-5" />, count: allServices.filter(s => s.category === 'Database & Data Management').length },
    { id: 'Container & Orchestration', name: 'Containers', icon: <Box className="w-5 h-5" />, count: allServices.filter(s => s.category === 'Container & Orchestration').length },
    { id: 'AI & Emotional Intelligence', name: 'AI & EI', icon: <Brain className="w-5 h-5" />, count: allServices.filter(s => s.category === 'AI & Emotional Intelligence').length },
    { id: 'AI & Machine Learning', name: 'AI & ML', icon: <Brain className="w-5 h-5" />, count: allServices.filter(s => s.category === 'AI & Machine Learning').length },
    { id: 'AI & Analytics', name: 'AI Analytics', icon: <TrendingUp className="w-5 h-5" />, count: allServices.filter(s => s.category === 'AI & Analytics').length },
    { id: 'AI Ethics & Governance', name: 'AI Ethics', icon: <Shield className="w-5 h-5" />, count: allServices.filter(s => s.category === 'AI Ethics & Governance').length },
    { id: 'AI & Content Creation', name: 'AI Content', icon: <Palette className="w-5 h-5" />, count: allServices.filter(s => s.category === 'AI & Content Creation').length },
    { id: 'AI & Decision Intelligence', name: 'AI Decisions', icon: <Target className="w-5 h-5" />, count: allServices.filter(s => s.category === 'AI & Decision Intelligence').length },
    { id: 'AI & Computer Vision', name: 'AI Vision', icon: <Eye className="w-5 h-5" />, count: allServices.filter(s => s.category === 'AI & Computer Vision').length },
    { id: 'AI & Voice Recognition', name: 'AI Voice', icon: <Mic className="w-5 h-5" />, count: allServices.filter(s => s.category === 'AI & Voice Recognition').length },
    { id: 'AI & Knowledge Management', name: 'AI Knowledge', icon: <Brain className="w-5 h-5" />, count: allServices.filter(s => s.category === 'AI & Knowledge Management').length }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="Innovative 2025 Services Showcase - Zion Tech Group"
        description="Discover our comprehensive portfolio of innovative 2025 micro SAAS services, IT solutions, and AI services. Leading-edge technology solutions for modern businesses."
        keywords={["innovative services", "micro SAAS", "IT solutions", "AI services", "2025 technology", "Zion Tech Group"]}
        image="/og-image.jpg"
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Innovative 2025
              </span>
              <br />
              <span className="text-white">Services Showcase</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover our comprehensive portfolio of cutting-edge micro SAAS services, 
              revolutionary IT solutions, and breakthrough AI services designed for the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center space-x-2 text-white">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <span className="text-lg">30+ New Services</span>
              </div>
              <div className="flex items-center space-x-2 text-white">
                <Star className="w-6 h-6 text-yellow-400" />
                <span className="text-lg">Market Ready</span>
              </div>
              <div className="flex items-center space-x-2 text-white">
                <Zap className="w-6 h-6 text-blue-400" />
                <span className="text-lg">AI-Powered</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
            <div className="flex flex-col items-center">
              <Phone className="w-6 h-6 mb-2" />
              <span className="font-semibold">Phone</span>
              <a href={`tel:${contact.mobile}`} className="text-blue-100 hover:text-white transition-colors">
                {contact.mobile}
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-6 h-6 mb-2" />
              <span className="font-semibold">Email</span>
              <a href={`mailto:${contact.email}`} className="text-blue-100 hover:text-white transition-colors">
                {contact.email}
              </a>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-6 h-6 mb-2" />
              <span className="font-semibold">Address</span>
              <span className="text-blue-100">{contact.address}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search innovative services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'grid' 
                    ? 'bg-purple-600 text-white' 
                    : 'bg-white/10 text-gray-400 hover:bg-white/20'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'list' 
                    ? 'bg-purple-600 text-white' 
                    : 'bg-white/10 text-gray-400 hover:bg-white/20'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Category Filters */}
          <div className="mt-6 flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
                <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid/List */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {filteredServices.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-gray-400 text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-white mb-2">No services found</h3>
              <p className="text-gray-400">Try adjusting your search or category filters.</p>
            </div>
          ) : (
            <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
              <AnimatePresence>
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 ${
                      viewMode === 'list' ? 'flex items-center space-x-6' : ''
                    }`}
                  >
                    {viewMode === 'grid' ? (
                      // Grid View
                      <>
                        <div className="flex items-center justify-between mb-4">
                          <div className="text-3xl">{service.icon}</div>
                          {service.popular && (
                            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                              POPULAR
                            </span>
                          )}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                        <p className="text-gray-300 text-sm mb-4">{service.tagline}</p>
                        <div className="mb-4">
                          <span className="text-2xl font-bold text-purple-400">{service.price}</span>
                          <span className="text-gray-400">{service.period}</span>
                        </div>
                        <div className="space-y-2 mb-4">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-2 text-sm text-gray-300">
                              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-1 text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'fill-current' : ''}`} />
                            ))}
                            <span className="text-gray-400 text-sm ml-1">({service.reviews})</span>
                          </div>
                          <a
                            href={service.link}
                            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                          >
                            <span>Learn More</span>
                            <ArrowRight className="w-4 h-4" />
                          </a>
                        </div>
                      </>
                    ) : (
                      // List View
                      <>
                        <div className="text-4xl">{service.icon}</div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-xl font-bold text-white">{service.name}</h3>
                            {service.popular && (
                              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                                POPULAR
                              </span>
                            )}
                          </div>
                          <p className="text-gray-300 text-sm mb-2">{service.tagline}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-400">
                            <span>Category: {service.category}</span>
                            <span>Setup: {service.setupTime}</span>
                            <span>Trial: {service.trialDays} days</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="mb-2">
                            <span className="text-2xl font-bold text-purple-400">{service.price}</span>
                            <span className="text-gray-400">{service.period}</span>
                          </div>
                          <div className="flex items-center justify-center space-x-1 text-yellow-400 mb-2">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'fill-current' : ''}`} />
                            ))}
                            <span className="text-gray-400 text-sm ml-1">({service.reviews})</span>
                          </div>
                          <a
                            href={service.link}
                            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                          >
                            <span>Learn More</span>
                            <ArrowRight className="w-4 h-4" />
                          </a>
                        </div>
                      </>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already leveraging our innovative services to drive growth, 
              efficiency, and competitive advantage in 2025 and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`mailto:${contact.email}?subject=Innovative 2025 Services Inquiry`}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 hover:scale-105"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href={`tel:${contact.mobile}`}
                className="inline-flex items-center space-x-2 bg-white/10 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <span>Call Us Now</span>
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/20 border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Zion Tech Group</h3>
              <p className="text-gray-400 text-sm">
                Leading provider of innovative technology solutions for modern businesses.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <p>{contact.mobile}</p>
                <p>{contact.email}</p>
                <p>{contact.address}</p>
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Services</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <p>Micro SAAS Solutions</p>
                <p>IT Services & Infrastructure</p>
                <p>AI & Machine Learning</p>
                <p>Cloud & DevOps</p>
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Website</h3>
              <a 
                href={contact.website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 text-sm transition-colors"
              >
                {contact.website}
              </a>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 Zion Tech Group. All rights reserved. Leading innovation in technology services.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Innovative2025ServicesShowcase;