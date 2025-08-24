import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Check, Phone, Mail, MapPin, Search
} from 'lucide-react';
import EnhancedNavigation from '../temp_components/EnhancedNavigation';
import EnhancedFooter from '../temp_components/EnhancedFooter';
import { comprehensiveInnovativeServices } from '../data/comprehensive-2025-innovative-services-expansion';
import { specializedEnterpriseServices } from '../data/specialized-2025-enterprise-services';

export default function ComprehensivePricing2025() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState<'all' | 'budget' | 'mid' | 'enterprise'>('all');

  // Combine all services
  const allServices = [...comprehensiveInnovativeServices, ...specializedEnterpriseServices];

  const categories = [
    { id: 'all', name: 'All Services', count: allServices.length },
    { id: 'AI & Machine Learning', name: 'AI & ML', count: allServices.filter(s => s.category.includes('AI') || s.category.includes('Machine Learning')).length },
    { id: 'Cybersecurity', name: 'Cybersecurity', count: allServices.filter(s => s.category.includes('Cybersecurity')).length },
    { id: 'DevOps & Infrastructure', name: 'DevOps', count: allServices.filter(s => s.category.includes('DevOps')).length },
    { id: 'Edge Computing', name: 'Edge Computing', count: allServices.filter(s => s.category.includes('Edge')).length },
    { id: 'Healthcare AI', name: 'Healthcare', count: allServices.filter(s => s.category.includes('Healthcare')).length },
    { id: 'Financial Technology', name: 'FinTech', count: allServices.filter(s => s.category.includes('Financial')).length },
    { id: 'Education Technology', name: 'EdTech', count: allServices.filter(s => s.category.includes('Education')).length },
    { id: 'Supply Chain & Logistics', name: 'Supply Chain', count: allServices.filter(s => s.category.includes('Supply Chain')).length },
    { id: 'Energy & Sustainability', name: 'Energy', count: allServices.filter(s => s.category.includes('Energy')).length },
    { id: 'Advanced AI & Consciousness', name: 'AI Consciousness', count: allServices.filter(s => s.category.includes('Consciousness')).length },
    { id: 'Quantum Computing & AI', name: 'Quantum AI', count: allServices.filter(s => s.category.includes('Quantum')).length },
    { id: 'Space Technology', name: 'Space Tech', count: allServices.filter(s => s.category.includes('Space')).length },
    { id: 'Neural Technology & BCI', name: 'Neural Tech', count: allServices.filter(s => s.category.includes('Neural')).length },
    { id: 'Advanced IoT & Edge Computing', name: 'Advanced IoT', count: allServices.filter(s => s.category.includes('Advanced IoT')).length },
    { id: 'Advanced Analytics & AI', name: 'Advanced Analytics', count: allServices.filter(s => s.category.includes('Advanced Analytics')).length }
  ];

  const getPriceRange = (price: string) => {
    const numPrice = parseFloat(price.replace('$', '').replace(',', ''));
    if (numPrice < 1000) return 'budget';
    if (numPrice < 5000) return 'mid';
    return 'enterprise';
  };

  const filteredServices = allServices
    .filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || service.category.includes(selectedCategory);
      const matchesPrice = priceRange === 'all' || getPriceRange(service.price) === priceRange;
      return matchesSearch && matchesCategory && matchesPrice;
    })
    .sort((a, b) => parseFloat(a.price.replace('$', '').replace(',', '')) - parseFloat(b.price.replace('$', '').replace(',', '')));

  const getAnnualPrice = (monthlyPrice: string) => {
    const price = parseFloat(monthlyPrice.replace('$', '').replace(',', ''));
    const annualPrice = price * 12 * 0.8; // 20% discount for annual
    return `$${Math.round(annualPrice)}`;
  };

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      <Head>
        <title>Comprehensive 2025 Pricing & Services — Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive pricing for innovative micro SAAS services, AI solutions, quantum technologies, and cutting-edge IT services. Transparent pricing with flexible plans." />
        <meta property="og:title" content="Comprehensive 2025 Pricing & Services — Zion Tech Group" />
        <meta property="og:description" content="Explore our comprehensive pricing for innovative micro SAAS services, AI solutions, quantum technologies, and cutting-edge IT services." />
        <meta name="keywords" content="pricing, micro SAAS, AI services, quantum computing, cybersecurity, edge computing, space technology, neural interfaces, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/comprehensive-pricing-2025" />
      </Head>

      <EnhancedNavigation />

      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
              Comprehensive 2025 Pricing & Services
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-8">
              Transparent pricing for our comprehensive collection of innovative micro SAAS services, 
              AI solutions, quantum technologies, and revolutionary IT services.
            </p>
            
            {/* Contact Information */}
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-white/70">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span>{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>{contactInfo.address}</span>
              </div>
            </div>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mb-12">
              <span className={`text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-white/60'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
                className={`relative w-16 h-8 rounded-full transition-all duration-300 ${
                  billingCycle === 'annual' ? 'bg-cyan-500' : 'bg-white/20'
                }`}
              >
                <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-all duration-300 ${
                  billingCycle === 'annual' ? 'right-1' : 'left-1'
                }`} />
              </button>
              <span className={`text-lg ${billingCycle === 'annual' ? 'text-white' : 'text-white/60'}`}>
                Annual
              </span>
              {billingCycle === 'annual' && (
                <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
                  Save 20%
                </span>
              )}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">{allServices.length}+</div>
                <div className="text-white/60">Services Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">{allServices.filter(s => s.popular).length}</div>
                <div className="text-white/60">Popular Services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">{allServices.filter(s => s.realService).length}</div>
                <div className="text-white/60">Real Services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">{allServices.filter(s => s.rating >= 4.5).length}</div>
                <div className="text-white/60">Top Rated</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10"
          >
            {/* Search Bar */}
            <div className="mb-6">
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/50 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services by name, description, or features..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-cyan-400/50 focus:bg-white/15 transition-all duration-300"
                />
              </div>
            </div>

            {/* Filters */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400/50"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Range Filter */}
              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">Price Range</label>
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value as any)}
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400/50"
                >
                  <option value="all">All Prices</option>
                  <option value="budget">Budget ($0 - $999)</option>
                  <option value="mid">Mid-Range ($1,000 - $4,999)</option>
                  <option value="enterprise">Enterprise ($5,000+)</option>
                </select>
              </div>

              {/* Clear Filters */}
              <div className="flex items-end">
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                    setPriceRange('all');
                  }}
                  className="w-full px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-colors duration-300"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">
                {filteredServices.length} Services Found
              </h2>
              <p className="text-white/60">
                Showing results for &quot;{searchTerm || 'all services'}&quot; in {selectedCategory === 'all' ? 'all categories' : selectedCategory}
              </p>
            </div>

            {filteredServices.length === 0 ? (
              <div className="text-center py-20">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-white/60 mb-6">Try adjusting your search criteria or filters</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                  >
                    {/* Popular Badge */}
                    {service.popular && (
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                        Popular
                      </div>
                    )}

                    {/* Service Card Content */}
                    <div className="p-6">
                      {/* Header */}
                      <div className="text-center mb-6">
                        <div className="text-4xl mb-3">{service.icon}</div>
                        <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                        <p className="text-white/60 text-sm">{service.tagline}</p>
                      </div>

                      {/* Price */}
                      <div className="text-center mb-6">
                        <div className="text-4xl font-bold text-cyan-400 mb-1">
                          {billingCycle === 'annual' ? getAnnualPrice(service.price) : service.price}
                        </div>
                        <div className="text-white/60">
                          {billingCycle === 'annual' ? '/year' : service.period}
                          {billingCycle === 'annual' && (
                            <span className="text-green-400 ml-2">Save 20%</span>
                          )}
                        </div>
                      </div>

                      {/* Features */}
                      <div className="mb-6">
                        <ul className="space-y-3">
                          {service.features.slice(0, 6).map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                              <span className="text-white/80 text-sm">{feature}</span>
                            </li>
                          ))}
                          {service.features.length > 6 && (
                            <li className="text-center text-white/40 text-sm">
                              +{service.features.length - 6} more features
                            </li>
                          )}
                        </ul>
                      </div>

                      {/* Additional Info */}
                      <div className="mb-6 p-4 bg-white/5 rounded-lg">
                        <div className="grid grid-cols-2 gap-4 text-xs text-white/60">
                          <div>
                            <span className="block text-white/70">Setup Time:</span>
                            {service.setupTime}
                          </div>
                          <div>
                            <span className="block text-white/70">Trial:</span>
                            {service.trialDays} days
                          </div>
                          <div>
                            <span className="block text-white/70">Rating:</span>
                            <span className="text-yellow-400">{service.rating}/5</span>
                          </div>
                          <div>
                            <span className="block text-white/70">Customers:</span>
                            {service.customers}+
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="space-y-3">
                        <a
                          href={service.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-lg text-white font-medium text-center transition-all duration-300 transform hover:scale-105"
                        >
                          Learn More
                        </a>
                        <a
                          href={`mailto:${contactInfo.email}?subject=Inquiry about ${service.name}`}
                          className="block w-full px-4 py-3 border border-white/20 hover:border-cyan-400/50 rounded-lg text-white font-medium text-center transition-all duration-300 hover:bg-white/10"
                        >
                          Contact Sales
                        </a>
                      </div>

                      {/* ROI Info */}
                      <div className="mt-4 p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                        <div className="text-xs text-green-400 font-medium mb-1">ROI Promise</div>
                        <div className="text-xs text-white/70 line-clamp-2">{service.roi}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-xl rounded-3xl p-12 border border-cyan-400/20"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Our team of experts is ready to help you choose the perfect solution and get you started quickly. 
              Contact us today for a personalized consultation and demo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`mailto:${contactInfo.email}?subject=Pricing Consultation Request`}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2"
              >
                Get Pricing Quote
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href={`tel:${contactInfo.mobile}`}
                className="px-8 py-4 border border-white/20 hover:border-cyan-400/50 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/5 hover:bg-white/10 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
            <div className="mt-8 text-white/60">
              <p>Contact us directly:</p>
              <div className="flex flex-wrap justify-center gap-6 mt-4">
                <span>{contactInfo.mobile}</span>
                <span>{contactInfo.email}</span>
                <span>{contactInfo.address}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter />
    </div>
  );
}