import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Grid, List, Filter,
  Brain, Atom, Shield, Target, Rocket,
  ArrowRight, Check, Palette, Heart, Truck, GraduationCap,
  Building, Cpu, Star, Users, TrendingUp, Zap,
  Phone, Mail, MapPin, Globe, Award, Clock
} from 'lucide-react';

// Import our new real service data
import { realInnovativeMicroSaas2025Expansion } from '../data/2025-real-innovative-micro-saas-expansion';
import { realInnovativeITServices2025Expansion } from '../data/2025-real-innovative-it-services-expansion';
import { realInnovativeAIServices2025Expansion } from '../data/2025-real-innovative-ai-services-expansion';

const ComprehensiveRealServicesShowcase2025: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('popularity');

  // Combine all services
  const allServices = [
    ...realInnovativeMicroSaas2025Expansion,
    ...realInnovativeITServices2025Expansion,
    ...realInnovativeAIServices2025Expansion
  ];

  // Filter and sort services
  const filteredServices = allServices
    .filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || service.category.toLowerCase().includes(selectedCategory.toLowerCase());
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'popularity':
          return b.rating - a.rating;
        case 'price-low':
          return parseInt(a.price.replace('$', '')) - parseInt(b.price.replace('$', ''));
        case 'price-high':
          return parseInt(b.price.replace('$', '')) - parseInt(a.price.replace('$', ''));
        case 'newest':
          return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime();
        default:
          return 0;
      }
    });

  const categories = [
    { id: 'all', name: 'All Services', icon: Grid, count: allServices.length },
    { id: 'micro-saas', name: 'Micro SAAS', icon: Building, count: realInnovativeMicroSaas2025Expansion.length },
    { id: 'it services', name: 'IT Services', icon: Cpu, count: realInnovativeITServices2025Expansion.length },
    { id: 'ai services', name: 'AI Services', icon: Brain, count: realInnovativeAIServices2025Expansion.length }
  ];

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <SEO 
        title="2025 Comprehensive Real Services Showcase | Zion Tech Group"
        description="Discover our comprehensive portfolio of real, innovative micro SAAS, IT, and AI services. Market-ready solutions with proven ROI and competitive pricing."
        keywords={["micro SAAS", "IT services", "AI services", "business solutions", "technology services", "Zion Tech Group"]}
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            2025 Real Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
          >
            Discover our comprehensive portfolio of market-ready, innovative solutions that deliver real value and measurable ROI
          </motion.p>
          
          {/* Contact Information Banner */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-8 border border-white/20"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
              <div className="flex flex-col items-center">
                <Phone className="w-6 h-6 text-blue-400 mb-2" />
                <span className="text-sm text-gray-300">Phone</span>
                <span className="font-semibold text-blue-400">{contactInfo.mobile}</span>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-6 h-6 text-purple-400 mb-2" />
                <span className="text-sm text-gray-300">Email</span>
                <span className="font-semibold text-purple-400">{contactInfo.email}</span>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-6 h-6 text-green-400 mb-2" />
                <span className="text-sm text-gray-300">Address</span>
                <span className="font-semibold text-green-400 text-sm">{contactInfo.address}</span>
              </div>
              <div className="flex flex-col items-center">
                <Globe className="w-6 h-6 text-pink-400 mb-2" />
                <span className="text-sm text-gray-300">Website</span>
                <a href={contactInfo.website} className="font-semibold text-pink-400 hover:text-pink-300 transition-colors">
                  {contactInfo.website.replace('https://', '')}
                </a>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">{allServices.length}+</div>
              <div className="text-gray-400">Real Services</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">4.8</div>
              <div className="text-gray-400">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">2000+</div>
              <div className="text-gray-400">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400">99.9%</div>
              <div className="text-gray-400">Uptime</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg transition-all duration-200 flex items-center gap-2 ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  {category.name}
                  <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>

            {/* View Mode and Sort */}
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-all duration-200 ${
                  viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-all duration-200 ${
                  viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="popularity">Sort by Popularity</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest First</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            {filteredServices.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-semibold mb-2">No services found</h3>
                <p className="text-gray-400">Try adjusting your search terms or filters</p>
              </motion.div>
            ) : (
              <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 ${
                      viewMode === 'list' ? 'flex items-center gap-6' : ''
                    }`}
                  >
                    {viewMode === 'grid' ? (
                      // Grid View
                      <>
                        <div className="flex items-center justify-between mb-4">
                          <div className="text-4xl">{service.icon}</div>
                          {service.popular && (
                            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-semibold">
                              Popular
                            </span>
                          )}
                        </div>
                        
                        <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                        <p className="text-gray-400 text-sm mb-4">{service.tagline}</p>
                        
                        <div className="mb-4">
                          <span className="text-3xl font-bold text-blue-400">{service.price}</span>
                          <span className="text-gray-400">{service.period}</span>
                        </div>
                        
                        <p className="text-gray-300 mb-4 line-clamp-3">{service.description}</p>
                        
                        <div className="mb-4">
                          <div className="flex items-center gap-2 mb-2">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-sm">{service.rating}</span>
                            <span className="text-gray-400 text-sm">({service.reviews} reviews)</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-400">
                            <Users className="w-4 h-4" />
                            <span>{service.customers} customers</span>
                          </div>
                        </div>
                        
                        <div className="mb-4">
                          <div className="text-sm text-gray-400 mb-2">Key Features:</div>
                          <div className="flex flex-wrap gap-2">
                            {service.features.slice(0, 3).map((feature, idx) => (
                              <span key={idx} className="bg-white/10 px-2 py-1 rounded text-xs">
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="mb-4">
                          <div className="text-sm text-gray-400 mb-2">ROI Highlights:</div>
                          <p className="text-sm text-green-400">{service.roi}</p>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <a
                            href={service.link}
                            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center gap-2"
                          >
                            Learn More
                            <ArrowRight className="w-4 h-4" />
                          </a>
                          <div className="text-right">
                            <div className="text-xs text-gray-400">Setup Time</div>
                            <div className="text-sm font-semibold">{service.setupTime}</div>
                          </div>
                        </div>
                      </>
                    ) : (
                      // List View
                      <>
                        <div className="text-4xl">{service.icon}</div>
                        <div className="flex-1">
                          <div className="flex items-center gap-4 mb-2">
                            <h3 className="text-xl font-bold">{service.name}</h3>
                            {service.popular && (
                              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-semibold">
                                Popular
                              </span>
                            )}
                          </div>
                          <p className="text-gray-400 text-sm mb-2">{service.tagline}</p>
                          <p className="text-gray-300 text-sm line-clamp-2">{service.description}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-blue-400 mb-1">{service.price}</div>
                          <div className="text-gray-400 text-sm">{service.period}</div>
                          <div className="flex items-center gap-1 mt-2">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-sm">{service.rating}</span>
                          </div>
                        </div>
                        <a
                          href={service.link}
                          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                        >
                          View
                        </a>
                      </>
                    )}
                  </motion.div>
                ))}
              </div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 backdrop-blur-lg rounded-3xl p-12 border border-white/20"
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already leveraging our innovative solutions to drive growth and efficiency
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Award className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Proven Results</h3>
                <p className="text-gray-400 text-sm">Real ROI with measurable business impact</p>
              </div>
              <div className="text-center">
                <Zap className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Fast Implementation</h3>
                <p className="text-gray-400 text-sm">Get up and running in days, not months</p>
              </div>
              <div className="text-center">
                <TrendingUp className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Scalable Growth</h3>
                <p className="text-gray-400 text-sm">Solutions that grow with your business</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`mailto:${contactInfo.email}`}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center gap-2 text-lg font-semibold"
              >
                <Mail className="w-5 h-5" />
                Get Started Today
              </a>
              <a
                href={`tel:${contactInfo.mobile}`}
                className="bg-white/10 text-white px-8 py-4 rounded-xl hover:bg-white/20 transition-all duration-200 flex items-center justify-center gap-2 text-lg font-semibold border border-white/20"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Contact */}
      <footer className="px-4 py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span>{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-green-400" />
                  <span>{contactInfo.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-pink-400" />
                  <a href={contactInfo.website} className="hover:text-pink-400 transition-colors">
                    {contactInfo.website.replace('https://', '')}
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Service Categories</h3>
              <div className="space-y-2">
                <div>• Micro SAAS Solutions</div>
                <div>• IT Infrastructure Services</div>
                <div>• AI & Machine Learning</div>
                <div>• Cloud & DevOps</div>
                <div>• Cybersecurity Solutions</div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Why Choose Us</h3>
              <div className="space-y-2">
                <div>• Market-Validated Solutions</div>
                <div>• Proven ROI & Results</div>
                <div>• Expert Implementation</div>
                <div>• 24/7 Support</div>
                <div>• Competitive Pricing</div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Business Hours</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-400" />
                  <span>Mon-Fri: 9AM-6PM EST</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-green-400" />
                  <span>24/7 Support Available</span>
                </div>
                <div className="text-sm text-gray-400 mt-4">
                  Ready to discuss your project? Contact us anytime for a consultation.
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Zion Tech Group. All rights reserved. | Real solutions for real business challenges.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ComprehensiveRealServicesShowcase2025;