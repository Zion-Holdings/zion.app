import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check, X, Star, TrendingUp, Zap, Shield, Users, Globe,
  ArrowRight, Award, Clock, DollarSign, Building, Brain
} from 'lucide-react';

// Import our new innovative services
import { innovative2025CuttingEdgeServices } from '../data/innovative-2025-cutting-edge-services';
import { innovative2025EnterpriseSolutions } from '../data/innovative-2025-enterprise-solutions';
import { innovative2025IndustrySolutions } from '../data/innovative-2025-industry-solutions';

const Innovative2025PricingShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState<'price' | 'popularity' | 'rating'>('price');

  // Combine all services
  const allServices = [
    ...innovative2025CuttingEdgeServices,
    ...innovative2025EnterpriseSolutions,
    ...innovative2025IndustrySolutions
  ];

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(allServices.map(service => service.category)))];

  // Filter and sort services
  const filteredServices = allServices
    .filter(service => selectedCategory === 'All' || service.category === selectedCategory)
    .sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', ''));
        case 'popularity':
          return b.customers - a.customers;
        case 'rating':
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

  // Group services by price range
  const priceRanges = {
    'Budget ($0-$199)': filteredServices.filter(s => parseFloat(s.price.replace('$', '')) <= 199),
    'Professional ($200-$499)': filteredServices.filter(s => parseFloat(s.price.replace('$', '')) > 199 && parseFloat(s.price.replace('$', '')) <= 499),
    'Enterprise ($500+)': filteredServices.filter(s => parseFloat(s.price.replace('$', '')) > 499)
  };

  const getServiceIcon = (icon: string) => {
    return <span className="text-3xl">{icon}</span>;
  };

  const getRatingStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star
          key={i}
          className={`w-4 h-4 ${i <= rating ? 'text-yellow-400 fill-current' : 'text-gray-400'}`}
        />
      );
    }
    return stars;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="Innovative 2025 Pricing Showcase | Zion Tech Group"
        description="Explore competitive pricing for our comprehensive suite of innovative 2025 cutting-edge services. Find the perfect solution for your business needs and budget."
        keywords={["innovative services pricing 2025", "cutting-edge technology pricing", "micro SAAS pricing", "AI services pricing", "IT solutions pricing"]}
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
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Innovative 2025
              </span>
              <br />
              <span className="text-white">Pricing Showcase</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transparent, competitive pricing for our cutting-edge micro SAAS, IT infrastructure, and AI-powered solutions. 
              Find the perfect service tier for your business needs and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2 text-white">
                <DollarSign className="w-6 h-6 text-green-400" />
                <span>Competitive Pricing</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <Shield className="w-6 h-6 text-blue-400" />
                <span>Enterprise Security</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <Zap className="w-6 h-6 text-yellow-400" />
                <span>Instant Setup</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              {/* Category Filter */}
              <div className="flex gap-2 flex-wrap">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Sort Options */}
              <div className="flex gap-4 items-center">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="price">Price: Low to High</option>
                  <option value="popularity">Most Popular</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Overview */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(priceRanges).map(([range, services]) => (
              <motion.div
                key={range}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{range}</h3>
                  <div className="text-4xl font-bold text-blue-400 mb-2">
                    {services.length} Services
                  </div>
                  <p className="text-gray-300 text-sm">
                    Perfect for {range.includes('Budget') ? 'startups and small businesses' : 
                               range.includes('Professional') ? 'growing companies' : 'enterprise organizations'}
                  </p>
                </div>
                
                <div className="space-y-3">
                  {services.slice(0, 3).map((service) => (
                    <div key={service.id} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-white/20 to-white/10 rounded-lg flex items-center justify-center">
                          {getServiceIcon(service.icon)}
                        </div>
                        <div>
                          <div className="text-white font-semibold text-sm">{service.name}</div>
                          <div className="text-gray-400 text-xs">{service.price}/month</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        {getRatingStars(service.rating)}
                      </div>
                    </div>
                  ))}
                  {services.length > 3 && (
                    <div className="text-center text-blue-400 text-sm">
                      +{services.length - 3} more services
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Pricing */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">
              Detailed Service Pricing
            </h2>
            <p className="text-gray-400">
              Compare features, pricing, and benefits across all our innovative services
            </p>
          </div>

          <div className="space-y-6">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  {/* Service Info */}
                  <div className="lg:col-span-2">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl flex items-center justify-center">
                        {getServiceIcon(service.icon)}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                        <p className="text-gray-300 text-sm leading-relaxed mb-3">
                          {service.tagline}
                        </p>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Pricing and Stats */}
                  <div className="lg:col-span-1">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-2">{service.price}</div>
                      <div className="text-gray-400 text-sm mb-4">{service.period}</div>
                      
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Setup Time:</span>
                          <span className="text-white">{service.setupTime}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Trial:</span>
                          <span className="text-white">{service.trialDays} days</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Customers:</span>
                          <span className="text-white">{service.customers.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Rating:</span>
                          <div className="flex items-center gap-1">
                            {getRatingStars(service.rating)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTA and Market Info */}
                  <div className="lg:col-span-1">
                    <div className="text-center space-y-4">
                      <a
                        href={service.link}
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 group"
                      >
                        Get Started
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </a>

                      <div className="p-3 bg-white/5 rounded-lg">
                        <div className="text-white font-semibold text-sm mb-2">Market Position</div>
                        <p className="text-gray-300 text-xs leading-relaxed">
                          {service.marketPosition}
                        </p>
                      </div>

                      <div className="p-3 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg border border-green-500/30">
                        <div className="text-white font-semibold text-sm mb-2 flex items-center justify-center gap-1">
                          <TrendingUp className="w-4 h-4 text-green-400" />
                          Expected ROI
                        </div>
                        <p className="text-gray-300 text-xs leading-relaxed">
                          {service.roi}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Features Grid */}
                <div className="mt-6 pt-6 border-t border-white/20">
                  <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-400" />
                    Key Features & Capabilities
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 p-3 bg-white/5 rounded-lg">
                        <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technology Stack */}
                <div className="mt-6 pt-6 border-t border-white/20">
                  <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                    <Brain className="w-4 h-4 text-blue-400" />
                    Technology Stack & Integrations
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="text-gray-300 font-medium mb-2">Technologies</h5>
                      <div className="flex flex-wrap gap-2">
                        {service.technology.map((tech, idx) => (
                          <span key={idx} className="px-3 py-1 bg-blue-600/20 text-blue-300 text-xs rounded-full border border-blue-500/30">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h5 className="text-gray-300 font-medium mb-2">Integrations</h5>
                      <div className="flex flex-wrap gap-2">
                        {service.integrations.map((integration, idx) => (
                          <span key={idx} className="px-3 py-1 bg-green-600/20 text-green-300 text-xs rounded-full border border-green-500/30">
                            {integration}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Comparison Table */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">
              Pricing Comparison Table
            </h2>
            <p className="text-gray-400">
              Compare pricing across different service categories and tiers
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left p-6 text-white font-semibold">Service</th>
                  <th className="text-center p-6 text-white font-semibold">Price</th>
                  <th className="text-center p-6 text-white font-semibold">Category</th>
                  <th className="text-center p-6 text-white font-semibold">Rating</th>
                  <th className="text-center p-6 text-white font-semibold">Customers</th>
                  <th className="text-center p-6 text-white font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredServices.map((service, index) => (
                  <tr key={service.id} className="border-b border-white/10 hover:bg-white/5 transition-colors duration-200">
                    <td className="p-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-white/20 to-white/10 rounded-lg flex items-center justify-center">
                          {getServiceIcon(service.icon)}
                        </div>
                        <div>
                          <div className="text-white font-semibold">{service.name}</div>
                          <div className="text-gray-400 text-sm">{service.tagline}</div>
                        </div>
                      </div>
                    </td>
                    <td className="text-center p-6">
                      <div className="text-2xl font-bold text-white">{service.price}</div>
                      <div className="text-gray-400 text-sm">{service.period}</div>
                    </td>
                    <td className="text-center p-6">
                      <span className="px-3 py-1 bg-white/20 text-white text-sm rounded-full">
                        {service.category}
                      </span>
                    </td>
                    <td className="text-center p-6">
                      <div className="flex justify-center items-center gap-1 mb-1">
                        {getRatingStars(service.rating)}
                      </div>
                      <div className="text-gray-400 text-sm">{service.rating}/5</div>
                    </td>
                    <td className="text-center p-6">
                      <div className="text-white font-semibold">{service.customers.toLocaleString()}</div>
                      <div className="text-gray-400 text-sm">active users</div>
                    </td>
                    <td className="text-center p-6">
                      <a
                        href={service.link}
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105"
                      >
                        Explore
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Contact our team to discuss pricing, implementation, and how our innovative services can transform your business.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="text-white font-semibold">Expert Consultation</div>
                <div className="text-gray-400 text-sm">Free initial consultation</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div className="text-white font-semibold">Quick Setup</div>
                <div className="text-gray-400 text-sm">Get started in days</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div className="text-white font-semibold">Proven Results</div>
                <div className="text-gray-400 text-sm">Success guaranteed</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Get Pricing Quote
              </a>
              <a
                href="tel:+13024640950"
                className="bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 border border-white/30"
              >
                Call for Details
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Innovative2025PricingShowcase;