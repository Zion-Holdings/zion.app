import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Grid, List, Filter,
  Brain, Atom, Shield, Target, Rocket,
  ArrowRight, Check, Palette, Heart, Truck, GraduationCap,
  Building, Star, Users, TrendingUp, Zap, Globe
} from 'lucide-react';

// Import our new service data
import { innovativeRealWorldServices } from '../data/2025-innovative-real-world-services';
import { cuttingEdgeEnterpriseSolutions } from '../data/2025-cutting-edge-enterprise-solutions';

const InnovativeRealWorldServicesShowcase: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'rating' | 'popularity'>('popularity');

  const allServices = [...innovativeRealWorldServices, ...cuttingEdgeEnterpriseSolutions];
  
  const categories = ['All', 'Micro SAAS', 'IT Services', 'AI Services', 'Enterprise Solutions', 'Digital Transformation', 'Innovation Services', 'Strategic Consulting'];

  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'price':
        return (a.price.monthly || 0) - (b.price.monthly || 0);
      case 'rating':
        return b.rating - a.rating;
      case 'popularity':
        return b.customers - a.customers;
      default:
        return 0;
    }
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <SEO 
        title="2025 Innovative Real-World Services Showcase | Zion Tech Group"
        description="Discover our comprehensive portfolio of innovative micro SAAS, IT services, AI solutions, and enterprise services. Real implementations with proven ROI and market validation."
        keywords={["micro SAAS", "IT services", "AI services", "enterprise solutions", "digital transformation", "innovation services", "strategic consulting"]}
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            2025 Innovative Real-World Services
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover our comprehensive portfolio of market-validated micro SAAS, IT services, AI solutions, and enterprise services. 
            Real implementations with proven ROI and industry expertise.
          </motion.p>
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-6 py-3 flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span>10,000+ Customers</span>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-6 py-3 flex items-center gap-2">
              <Star className="w-5 h-5" />
              <span>4.8+ Rating</span>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-6 py-3 flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              <span>Proven ROI</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="bg-white py-6 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-700">
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-blue-600" />
              <span className="font-semibold">Website:</span>
              <a href="https://ziontechgroup.com" className="text-blue-600 hover:underline">ziontechgroup.com</a>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-green-600" />
              <span className="font-semibold">Contact:</span>
              <a href="tel:+13024640950" className="text-green-600 hover:underline">+1 302 464 0950</a>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-red-600" />
              <span className="font-semibold">Email:</span>
              <a href="mailto:kleber@ziontechgroup.com" className="text-red-600 hover:underline">kleber@ziontechgroup.com</a>
            </div>
            <div className="flex items-center gap-2">
              <Building className="w-5 h-5 text-purple-600" />
              <span className="font-semibold">Address:</span>
              <span>364 E Main St STE 1008 Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="bg-white py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Sort and View */}
            <div className="flex gap-4 items-center">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="popularity">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="price">Price: Low to High</option>
                <option value="name">Name A-Z</option>
              </select>

              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{
              gridTemplateColumns: viewMode === 'grid' ? 'repeat(auto-fill, minmax(400px, 1fr))' : '1fr'
            }}
          >
            {sortedServices.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                  viewMode === 'list' ? 'flex' : 'block'
                }`}
              >
                {viewMode === 'list' ? (
                  // List View
                  <>
                    <div className="flex-shrink-0 p-6">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center text-2xl`}>
                        {service.icon}
                      </div>
                    </div>
                    <div className="flex-1 p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.name}</h3>
                          <p className="text-gray-600 text-lg mb-3">{service.tagline}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-blue-600">
                            {service.price.monthly > 0 ? `$${service.price.monthly}` : 'Custom'}
                          </div>
                          <div className="text-sm text-gray-500">
                            {service.price.monthly > 0 ? '/month' : 'pricing'}
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 mb-4">{service.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {service.features.slice(0, 5).map((feature, index) => (
                          <span key={index} className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                            {feature}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-500 fill-current" />
                            {service.rating} ({service.reviews} reviews)
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="w-4 h-4 text-blue-500" />
                            {service.customers.toLocaleString()} customers
                          </span>
                        </div>
                        <a
                          href={service.link}
                          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center gap-2"
                        >
                          Learn More <ArrowRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </>
                ) : (
                  // Grid View
                  <>
                    <div className={`h-48 bg-gradient-to-r ${service.color} flex items-center justify-center text-6xl`}>
                      {service.icon}
                    </div>
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-xl font-bold text-gray-900">{service.name}</h3>
                        <div className="text-right">
                          <div className="text-xl font-bold text-blue-600">
                            {service.price.monthly > 0 ? `$${service.price.monthly}` : 'Custom'}
                          </div>
                          <div className="text-sm text-gray-500">
                            {service.price.monthly > 0 ? '/month' : 'pricing'}
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 text-sm mb-4">{service.tagline}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {service.features.slice(0, 3).map((feature, index) => (
                          <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                            {feature}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          {service.rating}
                        </div>
                        <a
                          href={service.link}
                          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-sm"
                        >
                          Learn More
                        </a>
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </motion.div>

          {sortedServices.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No services found</h3>
              <p className="text-gray-600">Try adjusting your search terms or filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* Market Insights */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Market Insights & Growth</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our services are built on deep market research and validated customer needs, 
              ensuring sustainable growth and competitive advantages.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">$521B</div>
              <div className="text-gray-600">Digital Transformation Market</div>
              <div className="text-green-600 text-sm mt-2">23% annual growth</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">$42.8B</div>
              <div className="text-gray-600">Enterprise AI Market</div>
              <div className="text-green-600 text-sm mt-2">34% annual growth</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">$225B</div>
              <div className="text-gray-600">Smart City Market</div>
              <div className="text-green-600 text-sm mt-2">18% annual growth</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">$24.9B</div>
              <div className="text-gray-600">Business Process Automation</div>
              <div className="text-green-600 text-sm mt-2">23% annual growth</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Zion Tech Group */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We deliver real, market-validated solutions with proven ROI and industry expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Proven ROI</h3>
              <p className="text-gray-600">Our services deliver measurable results with 300-600% ROI typically achieved within 6-18 months.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Enterprise Security</h3>
              <p className="text-gray-600">SOC 2 Type II, ISO 27001, and industry-specific compliance standards for enterprise-grade security.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Support</h3>
              <p className="text-gray-600">24/7 support with dedicated specialists, ongoing optimization, and comprehensive training programs.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Implementation</h3>
              <p className="text-gray-600">Proven methodologies and automated tools accelerate implementation by 40-60% compared to traditional approaches.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Market Validation</h3>
              <p className="text-gray-600">Services built on real customer needs with proven market demand and competitive positioning.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Global Reach</h3>
              <p className="text-gray-600">Serving customers worldwide with localized support and multi-language capabilities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how our innovative services can drive your success. 
            Get in touch for a personalized consultation and implementation plan.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+13024640950"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center gap-2"
            >
              <Users className="w-5 h-5" />
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300 flex items-center gap-2"
            >
              <Heart className="w-5 h-5" />
              Email kleber@ziontechgroup.com
            </a>
          </div>
          <div className="mt-8 text-center">
            <p className="text-blue-100">
              <strong>Address:</strong> 364 E Main St STE 1008 Middletown DE 19709<br />
              <strong>Website:</strong> <a href="https://ziontechgroup.com" className="underline hover:text-white">https://ziontechgroup.com</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InnovativeRealWorldServicesShowcase;