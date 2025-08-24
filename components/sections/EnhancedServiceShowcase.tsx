import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, Users, TrendingUp, DollarSign, Clock, 
  CheckCircle, ArrowRight, Zap, Shield, Rocket,
  Brain, Globe, Lock, Code, Database, Cloud
} from 'lucide-react';
import Button from '../ui/Button';

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
  marketPosition: string;
  targetAudience: string;
  trialDays: number;
  setupTime: string;
  category: string;
  realService: boolean;
  technology: string[];
  integrations: string[];
  useCases: string[];
  roi: string;
  competitors: string[];
  marketSize: string;
  growthRate: string;
  variant: string;
  contactInfo: {
    mobile: string;
    email: string;
    address: string;
    website: string;
  };
  realImplementation: boolean;
  implementationDetails: string;
  launchDate: string;
  customers: number;
  rating: number;
  reviews: number;
}

interface EnhancedServiceShowcaseProps {
  title: string;
  subtitle: string;
  showFilters?: boolean;
  services?: Service[];
  maxServices?: number;
}

const EnhancedServiceShowcase: React.FC<EnhancedServiceShowcaseProps> = ({
  title,
  subtitle,
  showFilters = false,
  services = [],
  maxServices = 12
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('popular');

  const categories = [
    { id: 'all', name: 'All Services', icon: '🚀' },
    { id: 'ai', name: 'AI & ML', icon: '🧠' },
    { id: 'quantum', name: 'Quantum', icon: '⚛️' },
    { id: 'blockchain', name: 'Blockchain', icon: '⛓️' },
    { id: 'enterprise', name: 'Enterprise', icon: '🏢' },
    { id: 'emerging', name: 'Emerging Tech', icon: '🌟' }
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices' },
    { id: 'low', name: 'Under $1K/month' },
    { id: 'medium', name: '$1K - $5K/month' },
    { id: 'high', name: '$5K - $20K/month' },
    { id: 'premium', name: '$20K+/month' }
  ];

  const sortOptions = [
    { id: 'popular', name: 'Most Popular' },
    { id: 'rating', name: 'Highest Rated' },
    { id: 'roi', name: 'Best ROI' },
    { id: 'price-low', name: 'Price Low to High' },
    { id: 'price-high', name: 'Price High to Low' }
  ];

  const filteredServices = useMemo(() => {
    let filtered = services.filter(service => {
      const matchesCategory = selectedCategory === 'all' || 
                             (selectedCategory === 'ai' && (service.category.includes('AI') || service.category.includes('Machine Learning'))) ||
                             (selectedCategory === 'quantum' && (service.category.includes('Quantum') || service.category.includes('Space'))) ||
                             (selectedCategory === 'blockchain' && (service.category.includes('Blockchain') || service.category.includes('DeFi') || service.category.includes('NFT'))) ||
                             (selectedCategory === 'enterprise' && (service.category.includes('Enterprise') || service.category.includes('IT'))) ||
                             (selectedCategory === 'emerging' && (service.category.includes('Neural') || service.category.includes('Autonomous') || service.category.includes('Space') || service.category.includes('Biotech')));

      const matchesPrice = selectedPriceRange === 'all' ||
                          (selectedPriceRange === 'low' && parseFloat(service.price.replace(/[$,]/g, '')) < 1000) ||
                          (selectedPriceRange === 'medium' && parseFloat(service.price.replace(/[$,]/g, '')) >= 1000 && parseFloat(service.price.replace(/[$,]/g, '')) < 5000) ||
                          (selectedPriceRange === 'high' && parseFloat(service.price.replace(/[$,]/g, '')) >= 5000 && parseFloat(service.price.replace(/[$,]/g, '')) < 20000) ||
                          (selectedPriceRange === 'premium' && parseFloat(service.price.replace(/[$,]/g, '')) >= 20000);

      return matchesCategory && matchesPrice;
    });

    // Sort services
    switch (sortBy) {
      case 'popular':
        filtered.sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));
        break;
      case 'rating':
        filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      case 'roi':
        filtered.sort((a, b) => {
          const aROI = parseInt(a.roi.match(/\d+/)?.[0] || '0');
          const bROI = parseInt(b.roi.match(/\d+/)?.[0] || '0');
          return bROI - aROI;
        });
        break;
      case 'price-low':
        filtered.sort((a, b) => parseFloat(a.price.replace(/[$,]/g, '')) - parseFloat(b.price.replace(/[$,]/g, '')));
        break;
      case 'price-high':
        filtered.sort((a, b) => parseFloat(b.price.replace(/[$,]/g, '')) - parseFloat(a.price.replace(/[$,]/g, '')));
        break;
      default:
        break;
    }

    return filtered.slice(0, maxServices);
  }, [services, selectedCategory, selectedPriceRange, sortBy, maxServices]);

  const stats = [
    { label: 'Total Services', value: services.length, icon: Rocket, color: 'text-blue-400' },
    { label: 'Active Customers', value: services.reduce((sum, s) => sum + (s.customers || 0), 0), icon: Users, color: 'text-green-400' },
    { label: 'Average Rating', value: (services.reduce((sum, s) => sum + (s.rating || 0), 0) / services.length).toFixed(1), icon: Star, color: 'text-yellow-400' },
    { label: 'Market Growth', value: '300%+', icon: TrendingUp, color: 'text-purple-400' }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            {subtitle}
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`${stat.color} mb-2 flex justify-center`}>
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Filters */}
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-12"
          >
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Category Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.icon} {category.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Price Range Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">Price Range</label>
                  <select
                    value={selectedPriceRange}
                    onChange={(e) => setSelectedPriceRange(e.target.value)}
                    className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    {priceRanges.map((range) => (
                      <option key={range.id} value={range.id}>
                        {range.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Sort Options */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">Sort By</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group"
              >
                <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 h-full">
                  {/* Popular Badge */}
                  {service.popular && (
                    <div className="absolute -top-3 left-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      ⭐ Most Popular
                    </div>
                  )}

                  {/* Header */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-3xl">{service.icon}</div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-white">{service.price}</div>
                        <div className="text-sm text-gray-400">{service.period}</div>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {service.tagline}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-3 flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-400 flex items-start">
                          <span className="text-cyan-400 mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                    <div>
                      <div className="text-lg font-bold text-white">{service.rating}</div>
                      <div className="text-xs text-gray-400">Rating</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-white">{service.customers?.toLocaleString() || '0'}</div>
                      <div className="text-xs text-gray-400">Customers</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-white">{service.trialDays}</div>
                      <div className="text-xs text-gray-400">Trial Days</div>
                    </div>
                  </div>

                  {/* ROI Highlight */}
                  <div className="mb-6 p-4 bg-gradient-to-r from-green-900/20 to-blue-900/20 rounded-lg border border-green-500/20">
                    <div className="text-sm text-green-400 font-semibold mb-1">🚀 ROI Promise</div>
                    <div className="text-xs text-gray-300 leading-relaxed">
                      {service.roi}
                    </div>
                  </div>

                  {/* Market Position */}
                  <div className="mb-6 p-4 bg-gray-800/30 rounded-lg">
                    <div className="text-sm text-cyan-400 font-semibold mb-2">📊 Market Position</div>
                    <div className="text-xs text-gray-300 leading-relaxed">
                      {service.marketPosition}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-auto">
                    <Button
                      href={service.link}
                      variant="primary"
                      className="w-full group-hover:bg-cyan-500 transition-colors"
                    >
                      Get Started
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>

                  {/* Contact Info */}
                  <div className="mt-4 text-center">
                    <div className="text-xs text-gray-500">
                      Contact: <span className="text-cyan-400">{service.contactInfo.mobile}</span>
                    </div>
                    <div className="text-xs text-gray-500">
                      Email: <span className="text-cyan-400">{service.contactInfo.email}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-cyan-900/20 to-purple-900/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of companies already achieving breakthrough results with our cutting-edge AI, quantum, and blockchain solutions. 
              Get started today and see the future of business technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="primary" className="text-lg px-8 py-4">
                Schedule a Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button href="/pricing" variant="secondary" className="text-lg px-8 py-4">
                View Pricing Plans
                <DollarSign className="ml-2 w-5 h-5" />
              </Button>
            </div>
            <div className="mt-6 text-sm text-gray-400">
              <p>📞 Call us: <span className="text-cyan-400">+1 302 464 0950</span></p>
              <p>📧 Email: <span className="text-cyan-400">kleber@ziontechgroup.com</span></p>
              <p>🌐 Visit: <span className="text-cyan-400">https://ziontechgroup.com</span></p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedServiceShowcase;