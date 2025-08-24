import React, { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Filter, Star, TrendingUp, Brain, Atom, Rocket, Shield, 
  Cloud, Target, Building, Users, Code, Sparkles, Zap, Eye, 
  Heart, Infinity, ArrowRight, Phone, Mail, MapPin, Globe,
  Award, Clock, CheckCircle, ArrowUpRight, ChevronDown, DollarSign,
  Crown, Zap as ZapIcon, Shield as ShieldIcon, Rocket as RocketIcon
} from 'lucide-react';

// Import all our new services
import { realInnovativeMicroSaas2025 } from '../data/2025-real-innovative-micro-saas';
import { cuttingEdgeITServices2025 } from '../data/2025-cutting-edge-it-services';
import { innovativeAIServices2025 } from '../data/2025-innovative-ai-services';
import { ultimateInnovativeMicroSaas2025V2 } from '../data/2025-ultimate-innovative-micro-saas-v2';
import { cuttingEdgeITServices2025V2 } from '../data/2025-cutting-edge-it-services-v2';
import { innovativeAIServices2025V2 } from '../data/2025-innovative-ai-services-v2';

const UltimatePricingShowcase2025: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [isExpanded, setIsExpanded] = useState<{ [key: string]: boolean }>({});

  // Combine all services
  const allServices = [
    ...realInnovativeMicroSaas2025,
    ...cuttingEdgeITServices2025,
    ...innovativeAIServices2025,
    ...ultimateInnovativeMicroSaas2025V2,
    ...cuttingEdgeITServices2025V2,
    ...innovativeAIServices2025V2
  ];

  // Get unique categories and types
  const categories = ['all', ...Array.from(new Set(allServices.map(s => s.category)))];
  const types = ['all', ...Array.from(new Set(allServices.map(s => s.type)))];

  // Filter services
  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesType = selectedType === 'all' || service.type === selectedType;
    
    let matchesPrice = true;
    if (priceRange !== 'all') {
      const starterPrice = parseFloat(service.pricing.starter.replace(/[^0-9.]/g, ''));
      switch (priceRange) {
        case 'budget':
          matchesPrice = starterPrice <= 299;
          break;
        case 'mid-range':
          matchesPrice = starterPrice > 299 && starterPrice <= 799;
          break;
        case 'premium':
          matchesPrice = starterPrice > 799 && starterPrice <= 1499;
          break;
        case 'enterprise':
          matchesPrice = starterPrice > 1499;
          break;
      }
    }
    
    return matchesSearch && matchesCategory && matchesType && matchesPrice;
  });

  const toggleExpanded = (id: string) => {
    setIsExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const getCategoryIcon = (category: string) => {
    if (category.includes('AI')) return <Brain className="w-5 h-5" />;
    if (category.includes('Quantum')) return <Atom className="w-5 h-5" />;
    if (category.includes('Space')) return <Rocket className="w-5 h-5" />;
    if (category.includes('Cybersecurity') || category.includes('Security')) return <Shield className="w-5 h-5" />;
    if (category.includes('Cloud') || category.includes('IT')) return <Cloud className="w-5 h-5" />;
    if (category.includes('Business')) return <Target className="w-5 h-5" />;
    return <Sparkles className="w-5 h-5" />;
  };

  const getCategoryColor = (category: string) => {
    if (category.includes('AI')) return 'from-purple-500 to-pink-500';
    if (category.includes('Quantum')) return 'from-blue-500 to-cyan-500';
    if (category.includes('Space')) return 'from-indigo-500 to-purple-500';
    if (category.includes('Cybersecurity') || category.includes('Security')) return 'from-red-500 to-orange-500';
    if (category.includes('Cloud') || category.includes('IT')) return 'from-emerald-500 to-teal-500';
    if (category.includes('Business')) return 'from-yellow-500 to-orange-500';
    return 'from-gray-500 to-slate-500';
  };

  const getPricingTierIcon = (tier: string) => {
    switch (tier) {
      case 'starter':
        return <ZapIcon className="w-5 h-5" />;
      case 'professional':
        return <ShieldIcon className="w-5 h-5" />;
      case 'enterprise':
        return <Crown className="w-5 h-5" />;
      default:
        return <Star className="w-5 h-5" />;
    }
  };

  const getPricingTierColor = (tier: string) => {
    switch (tier) {
      case 'starter':
        return 'from-green-500 to-emerald-500';
      case 'professional':
        return 'from-blue-500 to-cyan-500';
      case 'enterprise':
        return 'from-purple-500 to-pink-500';
      default:
        return 'from-gray-500 to-slate-500';
    }
  };

  const stats = [
    { number: `${allServices.length}+`, label: 'Innovative Services', icon: Star },
    { number: '$200B+', label: 'Total Market Size', icon: TrendingUp },
    { number: '4', label: 'Pricing Tiers', icon: Crown },
    { number: '24/7', label: 'AI Support Available', icon: Brain }
  ];

  const pricingRanges = [
    { value: 'all', label: 'All Prices' },
    { value: 'budget', label: 'Budget ($0-$299)' },
    { value: 'mid-range', label: 'Mid-Range ($300-$799)' },
    { value: 'premium', label: 'Premium ($800-$1499)' },
    { value: 'enterprise', label: 'Enterprise ($1500+)' }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-6">
              2025 Ultimate Pricing Showcase
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transparent pricing for the most innovative micro SAAS, IT services, and AI solutions. Choose the perfect plan for your business needs.
            </p>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                >
                  <div className="flex items-center justify-center mb-3">
                    <stat.icon className="w-8 h-8 text-purple-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters and Search Section */}
      <section className="py-12 bg-black/50">
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
                className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {/* Filters */}
            <div className="flex gap-4">
              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {categories.map(category => (
                  <option key={category} value={category} className="bg-black text-white">
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>

              {/* Type Filter */}
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {types.map(type => (
                  <option key={type} value={type} className="bg-black text-white">
                    {type === 'all' ? 'All Types' : type}
                  </option>
                ))}
              </select>

              {/* Price Range Filter */}
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {pricingRanges.map(range => (
                  <option key={range.value} value={range.value} className="bg-black text-white">
                    {range.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid with Pricing */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              {filteredServices.length} Services with Transparent Pricing
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Compare pricing across all tiers and find the perfect solution for your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20"
              >
                {/* Category Badge */}
                <div className="flex items-center gap-2 mb-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${getCategoryColor(service.category)}`}>
                    {getCategoryIcon(service.category)}
                  </div>
                  <span className="text-sm text-gray-400">{service.type}</span>
                </div>

                {/* Service Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-lg text-purple-200 mb-4 font-medium">
                    {service.tagline}
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    {isExpanded[service.id] 
                      ? service.description 
                      : `${service.description.substring(0, 120)}...`
                    }
                  </p>
                  
                  {service.description.length > 120 && (
                    <button
                      onClick={() => toggleExpanded(service.id)}
                      className="text-purple-400 hover:text-purple-300 text-sm mt-2 flex items-center gap-1"
                    >
                      {isExpanded[service.id] ? 'Show less' : 'Read more'}
                      <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded[service.id] ? 'rotate-180' : ''}`} />
                    </button>
                  )}
                </div>

                {/* Pricing Tiers */}
                <div className="mb-6">
                  <div className="text-sm text-gray-400 mb-4">Pricing Tiers</div>
                  <div className="space-y-3">
                    {Object.entries(service.pricing).map(([tier, price]) => (
                      <div key={tier} className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10">
                        <div className="flex items-center gap-2">
                          <div className={`p-1 rounded bg-gradient-to-r ${getPricingTierColor(tier)}`}>
                            {getPricingTierIcon(tier)}
                          </div>
                          <span className="text-sm font-medium text-white capitalize">{tier}</span>
                        </div>
                        <span className="text-lg font-bold text-white">{price}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Market Size */}
                <div className="mb-6">
                  <div className="text-sm text-gray-400 mb-1">Market Size</div>
                  <div className="text-lg font-semibold text-green-400">{service.marketSize}</div>
                </div>

                {/* Features Preview */}
                <div className="mb-6">
                  <div className="text-sm text-gray-400 mb-3">Key Features</div>
                  <div className="flex flex-wrap gap-2">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300"
                      >
                        {feature}
                      </span>
                    ))}
                    {service.features.length > 3 && (
                      <span className="px-3 py-1 bg-purple-500/20 rounded-full text-xs text-purple-300">
                        +{service.features.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Contact Information */}
                <div className="mb-6">
                  <div className="text-sm text-gray-400 mb-3">Contact Information</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-gray-300">
                      <Mail className="w-4 h-4 text-purple-400" />
                      {service.contact}
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <Phone className="w-4 h-4 text-purple-400" />
                      {service.mobile}
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <MapPin className="w-4 h-4 text-purple-400" />
                      {service.address}
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="flex gap-3">
                  <a
                    href={service.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-xl font-semibold text-center transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 flex items-center justify-center gap-2"
                  >
                    Visit Website
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                  <a
                    href={`mailto:${service.contact}`}
                    className="px-6 py-3 border border-purple-500/50 text-purple-400 hover:bg-purple-500/10 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2"
                  >
                    Contact
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-gray-400">Try adjusting your search criteria or filters</p>
            </div>
          )}
        </div>
      </section>

      {/* Pricing Comparison Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Pricing Comparison Guide
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Understand our pricing structure and choose the right tier for your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                tier: 'Starter',
                price: '$299/month',
                description: 'Perfect for small businesses and startups',
                features: ['Core functionality', 'Basic support', 'Standard features', 'Email support'],
                icon: <ZapIcon className="w-8 h-8" />,
                color: 'from-green-500 to-emerald-500'
              },
              {
                tier: 'Professional',
                price: '$799/month',
                description: 'Ideal for growing businesses',
                features: ['Advanced features', 'Priority support', 'Custom integrations', 'Phone support'],
                icon: <ShieldIcon className="w-8 h-8" />,
                color: 'from-blue-500 to-cyan-500'
              },
              {
                tier: 'Enterprise',
                price: '$1,999/month',
                description: 'For large organizations',
                features: ['Full feature set', '24/7 support', 'Custom development', 'Dedicated manager'],
                icon: <Crown className="w-8 h-8" />,
                color: 'from-purple-500 to-pink-500'
              },
              {
                tier: 'Custom',
                price: 'Contact Us',
                description: 'Tailored solutions for unique needs',
                features: ['Custom features', 'White-label options', 'On-premise deployment', 'SLA guarantees'],
                icon: <Star className="w-8 h-8" />,
                color: 'from-yellow-500 to-orange-500'
              }
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  {plan.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{plan.tier}</h3>
                <div className="text-3xl font-bold text-purple-300 mb-2">{plan.price}</div>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                <ul className="space-y-2 text-left">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Contact our team to discuss your specific needs and get a personalized quote for any of our services
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 flex items-center justify-center gap-2"
              >
                Get Custom Quote
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="border border-purple-500/50 text-purple-400 hover:bg-purple-500/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Transparent Pricing</h3>
                <p className="text-gray-400">No hidden fees or surprises</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Flexible Plans</h3>
                <p className="text-gray-400">Scale up or down as needed</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Custom Solutions</h3>
                <p className="text-gray-400">Tailored to your specific needs</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default UltimatePricingShowcase2025;