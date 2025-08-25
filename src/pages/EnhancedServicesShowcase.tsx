import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Rocket, 
  Dna, 
  Car, 
  Shield, 
  Star, 
  DollarSign, 
  Clock, 
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  Globe
} from 'lucide-react';
import { ENHANCED_SERVICES, ENHANCED_CATEGORIES, EnhancedService } from '../data/enhancedServices';

export default function EnhancedServicesShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'price' | 'rating' | 'name'>('name');

  const filteredServices = useMemo(() => {
    let filtered = ENHANCED_SERVICES;
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }
    
    return filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        default:
          return a.title.localeCompare(b.title);
      }
    });
  }, [selectedCategory, sortBy]);

  const getCategoryIcon = (categoryId: string) => {
    const category = ENHANCED_CATEGORIES.find(cat => cat.id === categoryId);
    return category?.icon || '🚀';
  };

  const getCategoryColor = (categoryId: string) => {
    const category = ENHANCED_CATEGORIES.find(cat => cat.id === categoryId);
    return category?.color || 'from-blue-500 to-cyan-500';
  };

  const formatPrice = (price: number, currency: string, model: string) => {
    if (model === 'monthly') {
      return `${currency}${price.toLocaleString()}/month`;
    } else if (model === 'hourly') {
      return `${currency}${price.toLocaleString()}/hour`;
    } else {
      return `${currency}${price.toLocaleString()}`;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Cutting-Edge
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Technology Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 max-w-4xl mx-auto mb-8">
              Discover our revolutionary AI, Space Tech, Biotech, and Autonomous solutions 
              that are transforming industries and shaping the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+13024640950"
                className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300 hover:scale-105"
              >
                <Phone className="h-5 w-5" />
                Call +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                <Mail className="h-5 w-5" />
                Get Quote
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Filter by Category</h2>
            <div className="flex items-center gap-4">
              <label className="text-sm font-medium text-gray-700">Sort by:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'price' | 'rating' | 'name')}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="name">Name</option>
                <option value="price">Price</option>
                <option value="rating">Rating</option>
              </select>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === 'all'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Services
            </button>
            {ENHANCED_CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                {/* Service Header */}
                <div className={`bg-gradient-to-r ${getCategoryColor(service.category)} p-6 text-white`}>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl">{getCategoryIcon(service.category)}</span>
                    <div className="flex items-center gap-1">
                      <Star className="h-5 w-5 fill-current" />
                      <span className="font-semibold">{service.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-blue-100 text-sm">{service.description}</p>
                </div>

                {/* Service Content */}
                <div className="p-6">
                  {/* Pricing */}
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="text-2xl font-bold text-gray-900">
                        {formatPrice(service.price, service.currency, service.pricingModel)}
                      </div>
                      <div className="text-sm text-gray-600">Market: {service.marketPrice}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-600">Delivery</div>
                      <div className="font-medium text-gray-900">{service.deliveryTime}</div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                    <div className="space-y-2">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Benefits</h4>
                    <div className="space-y-2">
                      {service.benefits.slice(0, 3).map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-sm text-gray-600">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  {service.technologies && (
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.slice(0, 5).map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* CTA */}
                  <div className="flex flex-col gap-3">
                    <a
                      href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                      className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2"
                    >
                      <Mail className="h-4 w-4" />
                      Get Quote
                    </a>
                    <a
                      href={`tel:${service.contactInfo.phone}`}
                      className="w-full border border-blue-600 text-blue-600 py-3 px-6 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 flex items-center justify-center gap-2"
                    >
                      <Phone className="h-4 w-4" />
                      Call Now
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto">
            Our cutting-edge technology solutions are designed to drive innovation, 
            efficiency, and growth across all industries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-900 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              <Phone className="h-5 w-5" />
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
            >
              <Mail className="h-5 w-5" />
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}