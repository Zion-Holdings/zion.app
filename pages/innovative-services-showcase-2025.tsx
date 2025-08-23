import React, { useState } from 'react';
import SEO from '../components/SEO';
import Layout from '../components/layout/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Grid, List, Star, Check, ArrowRight,
  Brain, Atom, Shield, Rocket, TrendingUp,
  Users, Award, Clock, DollarSign, Building
} from 'lucide-react';

// Import our new innovative services
import { cuttingEdgeInnovativeServices2025 } from '../data/2025-cutting-edge-innovative-services';
import { emergingTechInnovativeServices2025 } from '../data/2025-emerging-tech-innovative-services';
import { specializedIndustryServices2025 } from '../data/2025-specialized-industry-services';

const InnovativeServicesShowcase2025: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Combine all services
  const allServices = [
    ...cuttingEdgeInnovativeServices2025,
    ...emergingTechInnovativeServices2025,
    ...specializedIndustryServices2025
  ];

  // Filter services based on search and category
  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category.toLowerCase().includes(selectedCategory.toLowerCase());
    return matchesSearch && matchesCategory;
  });

  // Get unique categories
  const categories = [
    { id: 'all', name: 'All Services', icon: <Grid className="w-5 h-5" />, count: allServices.length },
    { id: 'ai', name: 'AI & Machine Learning', icon: <Brain className="w-5 h-5" />, count: allServices.filter(s => s.category.toLowerCase().includes('ai')).length },
    { id: 'quantum', name: 'Quantum & Emerging Tech', icon: <Atom className="w-5 h-5" />, count: allServices.filter(s => s.category.toLowerCase().includes('quantum')).length },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: <Shield className="w-5 h-5" />, count: allServices.filter(s => s.category.toLowerCase().includes('cybersecurity')).length },
    { id: 'industry', name: 'Industry Solutions', icon: <Building className="w-5 h-5" />, count: allServices.filter(s => s.category.toLowerCase().includes('legal') || s.category.toLowerCase().includes('restaurant') || s.category.toLowerCase().includes('construction')).length },
    { id: 'emerging', name: 'Emerging Technologies', icon: <Rocket className="w-5 h-5" />, count: allServices.filter(s => s.category.toLowerCase().includes('blockchain') || s.category.toLowerCase().includes('metaverse') || s.category.toLowerCase().includes('iot')).length }
  ];

  const ServiceCard = ({ service }: { service: any }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`bg-gradient-to-br ${service.color} p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 group cursor-pointer`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="text-4xl">{service.icon}</div>
        {service.popular && (
          <div className="bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
            <Star className="w-3 h-3 fill-current" />
            Popular
          </div>
        )}
      </div>

      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
        {service.name}
      </h3>
      
      <p className="text-white/80 text-sm mb-4 leading-relaxed">
        {service.tagline}
      </p>

      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <DollarSign className="w-4 h-4 text-green-400" />
          <span className="text-2xl font-bold text-white">{service.price}</span>
          <span className="text-white/60">{service.period}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-white/70">
          <Clock className="w-4 h-4" />
          <span>Setup: {service.setupTime}</span>
        </div>
      </div>

      <div className="mb-4">
        <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
          <Check className="w-4 h-4 text-green-400" />
          Key Benefits
        </h4>
        <ul className="space-y-1">
          {service.benefits?.slice(0, 3).map((benefit: string, index: number) => (
            <li key={index} className="text-white/80 text-sm flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
              {benefit}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-blue-400" />
          ROI & Market Position
        </h4>
        <p className="text-white/80 text-sm leading-relaxed">
          {service.roi}
        </p>
        <p className="text-white/70 text-xs mt-2">
          Market: {service.marketSize} | Growth: {service.growthRate}
        </p>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-white/70">
          <Users className="w-4 h-4" />
          <span>{service.customers}+ customers</span>
        </div>
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="text-white font-semibold">{service.rating}</span>
          <span className="text-white/60 text-sm">({service.reviews})</span>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-white/20">
        <a
          href={service.link}
          className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-all duration-200 group-hover:bg-white/20"
        >
          Learn More
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </motion.div>
  );

  const ServiceList = ({ service }: { service: any }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 group"
    >
      <div className="flex items-start gap-4">
        <div className="text-3xl">{service.icon}</div>
        
        <div className="flex-1">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                {service.name}
              </h3>
              <p className="text-gray-300 text-sm mb-2">{service.tagline}</p>
            </div>
            
            <div className="text-right">
              <div className="text-2xl font-bold text-white">{service.price}</div>
              <div className="text-gray-400 text-sm">{service.period}</div>
              {service.popular && (
                <div className="bg-yellow-400 text-black px-2 py-1 rounded text-xs font-semibold mt-1">
                  Popular
                </div>
              )}
            </div>
          </div>

          <p className="text-gray-300 text-sm mb-4 leading-relaxed">
            {service.description}
          </p>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <h4 className="text-white font-semibold mb-2 text-sm">Key Benefits</h4>
              <ul className="space-y-1">
                {service.benefits?.slice(0, 3).map((benefit: string, index: number) => (
                  <li key={index} className="text-gray-400 text-sm flex items-start gap-2">
                    <Check className="w-3 h-3 text-green-400 mt-0.5 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-2 text-sm">Market Position</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.marketPosition}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span>Setup: {service.setupTime}</span>
              <span>{service.customers}+ customers</span>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-white">{service.rating}</span>
                <span>({service.reviews})</span>
              </div>
            </div>
            
            <a
              href={service.link}
              className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg transition-all duration-200"
            >
              Learn More
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <Layout>
      <SEO 
        title="Innovative Services Showcase 2025 | Zion Tech Group"
        description="Discover our cutting-edge AI, quantum computing, and emerging technology services. Transform your business with innovative solutions from Zion Tech Group."
        keywords={["AI services", "quantum computing", "emerging technology", "micro SAAS", "innovative solutions", "Zion Tech Group"]}
      />

      <main className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-pink-900/20"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full text-cyan-400 text-sm font-medium mb-6">
                <Award className="w-4 h-4" />
                <span>Innovation Leader 2025</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Innovative Services Showcase 2025
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Discover cutting-edge AI, quantum computing, and emerging technology services that are transforming industries worldwide. 
                Our innovative solutions deliver real ROI and competitive advantages.
              </p>

              <div className="flex flex-wrap justify-center gap-6 text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-3xl font-bold text-cyan-400">{allServices.length}+</div>
                  <div className="text-gray-300">Innovative Services</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-3xl font-bold text-purple-400">$2.5B+</div>
                  <div className="text-gray-300">Market Opportunity</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-3xl font-bold text-pink-400">400%+</div>
                  <div className="text-gray-300">Average ROI</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="px-4 py-8 border-b border-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search innovative services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                      selectedCategory === category.id
                        ? 'bg-cyan-600 text-white'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    {category.icon}
                    {category.name}
                    <span className="bg-white/20 px-2 py-0.5 rounded text-xs">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>

              {/* View Mode Toggle */}
              <div className="flex bg-gray-800 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded transition-all duration-200 ${
                    viewMode === 'grid' ? 'bg-cyan-600 text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded transition-all duration-200 ${
                    viewMode === 'list' ? 'bg-cyan-600 text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid/List */}
        <section className="px-4 py-12">
          <div className="max-w-7xl mx-auto">
            {filteredServices.length === 0 ? (
              <div className="text-center py-20">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-gray-400">Try adjusting your search or filter criteria</p>
              </div>
            ) : (
              <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-6'}>
                <AnimatePresence>
                  {filteredServices.map((service) => (
                    <div key={service.id}>
                      {viewMode === 'grid' ? <ServiceCard service={service} /> : <ServiceList service={service} />}
                    </div>
                  ))}
                </AnimatePresence>
              </div>
            )}
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="px-4 py-20 bg-gradient-to-r from-gray-900 to-gray-800">
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
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Our innovative services are designed to give you a competitive edge. 
                Contact us today to learn how we can help you achieve breakthrough results.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 hover:scale-105"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5" />
                </a>
                
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 border border-white/20"
                >
                  Call +1 302 464 0950
                </a>
              </div>

              <div className="mt-8 text-gray-400 text-sm">
                <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
                <p>🌐 <a href="https://ziontechgroup.com" className="text-cyan-400 hover:underline">ziontechgroup.com</a></p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default InnovativeServicesShowcase2025;