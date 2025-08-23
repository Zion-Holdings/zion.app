import React, { useState, useMemo } from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Search, Grid, List, Filter, Star, TrendingUp,
  Brain, Atom, Shield, Rocket, Zap, Target,
  ArrowRight, Check, Palette, Heart, Truck, GraduationCap,
  Building, Cpu, Database, Cloud, Lock, Globe,
  Sparkles, Award, Users, Clock, DollarSign
} from 'lucide-react';

// Import all service data
import { realMicroSaasServices2025 } from '../data/real-micro-saas-services-2025';
import { realITServices2025 } from '../data/real-it-services-2025';
import { realAIServices2025 } from '../data/real-ai-services-2025';

interface Service {
  id: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
  icon: string;
  color: string;
  textColor: string;
  link: string;
  category: string;
  realService: boolean;
  technology: string[];
  integrations: string[];
  useCases: string[];
  roi: string;
  competitors: string[];
  marketSize: string;
  growthRate: string;
  customers: number;
  rating: number;
  reviews: number;
}

const ComprehensiveServicesShowcase2025: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'rating' | 'popularity'>('popularity');

  // Combine all services
  const allServices: Service[] = useMemo(() => {
    const services = [
      ...realMicroSaasServices2025.map(s => ({ ...s, source: 'micro-saas' })),
      ...realITServices2025.map(s => ({ ...s, source: 'it' })),
      ...realAIServices2025.map(s => ({ ...s, source: 'ai' }))
    ];

    // Sort services
    return services.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price':
          return parseFloat(a.price.replace('$', '').replace(',', '')) - parseFloat(b.price.replace('$', '').replace(',', ''));
        case 'rating':
          return b.rating - a.rating;
        case 'popularity':
        default:
          return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
      }
    });
  }, [sortBy]);

  // Filter services
  const filteredServices = useMemo(() => {
    return allServices.filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === 'all' || service.category.toLowerCase().includes(selectedCategory.toLowerCase());
      
      return matchesSearch && matchesCategory;
    });
  }, [allServices, searchTerm, selectedCategory]);

  const categories = [
    { id: 'all', name: 'All Services', icon: <Globe className="w-5 h-5" />, count: allServices.length },
    { id: 'ai', name: 'AI & Consciousness', icon: <Brain className="w-5 h-5" />, count: realAIServices2025.length },
    { id: 'it', name: 'Enterprise IT', icon: <Shield className="w-5 h-5" />, count: realITServices2025.length },
    { id: 'saas', name: 'Micro SAAS', icon: <Rocket className="w-5 h-5" />, count: realMicroSaasServices2025.length },
    { id: 'quantum', name: 'Quantum Tech', icon: <Atom className="w-5 h-5" />, count: allServices.filter(s => s.category.toLowerCase().includes('quantum')).length }
  ];

  const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border border-gray-700/50 hover:border-cyan-500/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 group"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="text-3xl">{service.icon}</div>
          <div>
            <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
              {service.name}
            </h3>
            <p className="text-gray-400 text-sm">{service.tagline}</p>
          </div>
        </div>
        {service.popular && (
          <div className="flex items-center space-x-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-2 py-1 rounded-full text-xs font-semibold">
            <Star className="w-3 h-3 fill-current" />
            <span>Popular</span>
          </div>
        )}
      </div>

      {/* Description */}
      <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>

      {/* Price and Rating */}
      <div className="flex items-center justify-between mb-4">
        <div className="text-2xl font-bold text-cyan-400">
          {service.price}
          <span className="text-gray-400 text-sm font-normal">{service.period}</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} 
              />
            ))}
          </div>
          <span className="text-gray-400 text-sm">({service.reviews})</span>
        </div>
      </div>

      {/* Features */}
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
        <div className="grid grid-cols-1 gap-2">
          {service.features.slice(0, 4).map((feature, index) => (
            <div key={index} className="flex items-center space-x-2 text-sm text-gray-400">
              <Check className="w-3 h-3 text-cyan-400" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Market Info */}
      <div className="grid grid-cols-2 gap-4 mb-4 text-xs">
        <div>
          <span className="text-gray-400">Market Size:</span>
          <div className="text-cyan-400 font-semibold">{service.marketSize}</div>
        </div>
        <div>
          <span className="text-gray-400">Growth:</span>
          <div className="text-green-400 font-semibold">{service.growthRate}</div>
        </div>
      </div>

      {/* ROI */}
      <div className="mb-4 p-3 bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-lg border border-green-500/20">
        <div className="text-sm text-gray-400 mb-1">ROI Impact:</div>
        <div className="text-green-400 font-semibold text-sm">{service.roi}</div>
      </div>

      {/* CTA */}
      <div className="flex space-x-3">
        <a
          href={service.link}
          className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center py-3 px-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
        >
          Learn More
        </a>
        <button className="px-4 py-3 border border-cyan-400 text-cyan-400 rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300">
          <Star className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );

  const ServiceList: React.FC<{ service: Service }> = ({ service }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-xl border border-gray-700/50 hover:border-cyan-500/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 group"
    >
      <div className="flex items-center space-x-6">
        <div className="text-4xl">{service.icon}</div>
        
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
              {service.name}
            </h3>
            {service.popular && (
              <div className="flex items-center space-x-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                <Star className="w-4 h-4 fill-current" />
                <span>Popular</span>
              </div>
            )}
          </div>
          
          <p className="text-gray-400 text-lg mb-3">{service.tagline}</p>
          <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <span className="text-gray-400">Price:</span>
              <div className="text-cyan-400 font-semibold">{service.price}{service.period}</div>
            </div>
            <div>
              <span className="text-gray-400">Rating:</span>
              <div className="flex items-center space-x-1">
                <span className="text-yellow-400 font-semibold">{service.rating}/5</span>
                <span className="text-gray-400">({service.reviews})</span>
              </div>
            </div>
            <div>
              <span className="text-gray-400">Market:</span>
              <div className="text-green-400 font-semibold">{service.marketSize}</div>
            </div>
            <div>
              <span className="text-gray-400">Growth:</span>
              <div className="text-blue-400 font-semibold">{service.growthRate}</div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col space-y-3">
          <a
            href={service.link}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            Learn More
          </a>
          <button className="px-6 py-3 border border-cyan-400 text-cyan-400 rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300">
            <Star className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );

  return (
    <Layout>
      <SEO 
        title="Comprehensive Services Showcase 2025 | Zion Tech Group"
        description="Explore our complete portfolio of revolutionary AI, quantum computing, and enterprise solutions. Transform your business with cutting-edge technology."
        keywords={["AI services", "quantum computing", "enterprise IT", "micro SAAS", "technology solutions", "business transformation"]}
      />
      
      <main className="relative z-10 pt-8">
        {/* Hero Section */}
        <section className="text-center py-16 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Comprehensive Services Showcase 2025
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Discover our complete portfolio of revolutionary technology solutions designed to transform your business and shape the future
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">{allServices.length}+</div>
                <div className="text-gray-400">Total Services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">{allServices.filter(s => s.popular).length}</div>
                <div className="text-gray-400">Popular Solutions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">{categories.length}</div>
                <div className="text-gray-400">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">4.8</div>
                <div className="text-gray-400">Avg Rating</div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Filters and Search */}
        <section className="px-4 mb-12">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                {/* Search */}
                <div className="flex-1 max-w-md">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search services..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20"
                    />
                  </div>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-xl border transition-all duration-300 ${
                        selectedCategory === category.id
                          ? 'border-cyan-500 bg-cyan-500/20 text-cyan-400'
                          : 'border-gray-600 text-gray-300 hover:border-gray-500 hover:text-white'
                      }`}
                    >
                      {category.icon}
                      <span>{category.name}</span>
                      <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded-full text-xs">
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>

                {/* View Mode and Sort */}
                <div className="flex items-center space-x-4">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="px-4 py-2 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white focus:outline-none focus:border-cyan-500/50"
                  >
                    <option value="popularity">Sort by Popularity</option>
                    <option value="name">Sort by Name</option>
                    <option value="price">Sort by Price</option>
                    <option value="rating">Sort by Rating</option>
                  </select>

                  <div className="flex items-center space-x-2 bg-gray-800/50 rounded-xl p-1">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded-lg transition-all duration-300 ${
                        viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      <Grid className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded-lg transition-all duration-300 ${
                        viewMode === 'list' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      <List className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid/List */}
        <section className="px-4 pb-16">
          <div className="max-w-7xl mx-auto">
            {filteredServices.length === 0 ? (
              <div className="text-center py-16">
                <Search className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-400 mb-2">No services found</h3>
                <p className="text-gray-500">Try adjusting your search or filter criteria</p>
              </div>
            ) : (
              <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}>
                {filteredServices.map((service) => (
                  viewMode === 'grid' ? (
                    <ServiceCard key={service.id} service={service} />
                  ) : (
                    <ServiceList key={service.id} service={service} />
                  )
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-xl border border-cyan-500/30 rounded-3xl p-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let our team of experts help you choose the perfect solutions for your business needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Today
                </a>
                <a
                  href="tel:+13024640950"
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300"
                >
                  Call +1 302 464 0950
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default ComprehensiveServicesShowcase2025;