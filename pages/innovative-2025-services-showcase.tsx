import React, { useState } from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Search, Grid, List, Star, Check, ArrowRight,
  Brain, Shield, Cloud, Rocket, Cpu, Database,
  TrendingUp, Users, Lock, Zap, Target, Globe
} from 'lucide-react';

// Import our new innovative 2025 services
import { innovative2025MicroSaasExpansions } from '../data/innovative-2025-micro-saas-expansions';
import { innovative2025ITServicesExpansions } from '../data/innovative-2025-it-services-expansions';
import { innovative2025AIServicesExpansions } from '../data/innovative-2025-ai-services-expansions';

const Innovative2025ServicesShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = [
    { id: 'all', name: 'All Services', icon: <Grid className="w-6 h-6" />, color: 'from-gray-500 to-slate-500' },
    { id: 'micro-saas', name: 'Micro SAAS', icon: <Rocket className="w-6 h-6" />, color: 'from-blue-500 to-cyan-600' },
    { id: 'it-services', name: 'IT Services', icon: <Cpu className="w-6 h-6" />, color: 'from-purple-500 to-pink-600' },
    { id: 'ai-services', name: 'AI Services', icon: <Brain className="w-6 h-6" />, color: 'from-green-500 to-emerald-600' }
  ];

  const allServices = [
    ...innovative2025MicroSaasExpansions.map(service => ({ ...service, type: 'micro-saas' })),
    ...innovative2025ITServicesExpansions.map(service => ({ ...service, type: 'it-services' })),
    ...innovative2025AIServicesExpansions.map(service => ({ ...service, type: 'ai-services' }))
  ];

  const filteredServices = selectedCategory === 'all' 
    ? allServices 
    : allServices.filter(service => service.type === selectedCategory);

  const getServiceCategory = (service: any) => {
    if (service.category) return service.category;
    if (service.type) return service.type;
    return 'Other';
  };

  const getServicePricing = (service: any) => {
    if (service.price?.monthly) return `$${service.price.monthly}/month`;
    if (service.pricing?.monthly) return `$${service.pricing.monthly}/month`;
    return 'Contact for pricing';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <SEO 
        title="Innovative 2025 Services Showcase | Zion Tech Group"
        description="Discover our cutting-edge 2025 services including AI-powered solutions, micro SAAS platforms, and enterprise IT services. Transform your business with innovative technology solutions."
        keywords="AI services, micro SAAS, IT services, business intelligence, cybersecurity, cloud optimization, 2025 technology"
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Innovative 2025
              </span>
              <br />
              <span className="text-gray-800">Services Showcase</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Transform your business with cutting-edge AI, micro SAAS, and enterprise IT solutions. 
              Discover the future of technology with Zion Tech Group.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-lg">
                <Brain className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700 font-medium">AI-Powered Solutions</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-lg">
                <Rocket className="w-5 h-5 text-purple-600" />
                <span className="text-gray-700 font-medium">Micro SAAS Platforms</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-lg">
                <Shield className="w-5 h-5 text-green-600" />
                <span className="text-gray-700 font-medium">Enterprise IT Services</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200 ${
                    selectedCategory === category.id
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                      : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
                  }`}
                >
                  {category.icon}
                  <span className="font-medium">{category.name}</span>
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-all duration-200 ${
                  viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'bg-white text-gray-400'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-all duration-200 ${
                  viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'bg-white text-gray-400'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid/List */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                >
                  <div className={`h-2 bg-gradient-to-r ${service.color}`} />
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-3xl">{service.icon}</div>
                      {service.popular && (
                        <div className="flex items-center gap-1 bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
                          <Star className="w-3 h-3 fill-current" />
                          Popular
                        </div>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{service.description}</p>
                    
                    <div className="mb-4">
                      <span className="text-2xl font-bold text-gray-900">
                        {getServicePricing(service)}
                      </span>
                      {service.price?.yearly && (
                        <span className="text-sm text-gray-500 ml-2">
                          (${service.price.yearly}/year)
                        </span>
                      )}
                    </div>

                    <div className="mb-4">
                      <span className="text-sm font-medium text-gray-700">Category:</span>
                      <span className="text-sm text-gray-600 ml-2">{getServiceCategory(service)}</span>
                    </div>

                                         <div className="mb-4">
                       <span className="text-sm font-medium text-gray-700">Setup Time:</span>
                       <span className="text-sm text-gray-600 ml-2">{service.price?.setupTime || 'Immediate'}</span>
                     </div>

                    <div className="mb-6">
                      <span className="text-sm font-medium text-gray-700">Key Benefits:</span>
                      <ul className="mt-2 space-y-1">
                        {service.benefits.slice(0, 3).map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                            <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Users className="w-4 h-4" />
                        <span>{service.customers?.toLocaleString() || '1000+'} customers</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium text-gray-700">{service.rating}</span>
                        <span className="text-sm text-gray-500">({service.reviews})</span>
                      </div>
                    </div>

                    <a
                      href={service.link}
                      className="mt-6 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center gap-2 group-hover:shadow-lg"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6"
                >
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className={`w-20 h-20 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center text-3xl`}>
                        {service.icon}
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.name}</h3>
                          <p className="text-gray-600 mb-4">{service.description}</p>
                        </div>
                        {service.popular && (
                          <div className="flex items-center gap-1 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                            <Star className="w-4 h-4 fill-current" />
                            Popular
                          </div>
                        )}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        <div>
                          <span className="text-sm font-medium text-gray-700">Pricing</span>
                          <div className="text-2xl font-bold text-gray-900 mt-1">
                            {getServicePricing(service)}
                          </div>
                          {service.price?.yearly && (
                            <div className="text-sm text-gray-500">
                              ${service.price.yearly}/year
                            </div>
                          )}
                        </div>
                        
                        <div>
                          <span className="text-sm font-medium text-gray-700">Category</span>
                          <div className="text-gray-900 mt-1">{getServiceCategory(service)}</div>
                        </div>
                        
                                                 <div>
                           <span className="text-sm font-medium text-gray-700">Setup Time</span>
                           <div className="text-gray-900 mt-1">{service.price?.setupTime || 'Immediate'}</div>
                         </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <span className="text-sm font-medium text-gray-700 mb-2 block">Key Benefits</span>
                          <ul className="space-y-2">
                            {service.benefits.slice(0, 4).map((benefit, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                                <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <span className="text-sm font-medium text-gray-700 mb-2 block">Key Features</span>
                          <ul className="space-y-2">
                            {service.features.slice(0, 4).map((feature, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                                <Zap className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            <span>{service.customers?.toLocaleString() || '1000+'} customers</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="font-medium text-gray-700">{service.rating}</span>
                            <span>({service.reviews})</span>
                          </div>
                        </div>
                        
                        <a
                          href={service.link}
                          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-8 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center gap-2"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get in touch with our experts to discuss how our innovative 2025 services can help you achieve your goals.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Visit Our Website</h3>
                <a 
                  href="https://ziontechgroup.com" 
                  className="text-blue-100 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ziontechgroup.com
                </a>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Contact Us</h3>
                <p className="text-blue-100">+1 302 464 0950</p>
                <p className="text-blue-100">kleber@ziontechgroup.com</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Our Location</h3>
                <p className="text-blue-100 text-sm">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Why Choose Zion Tech Group?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-blue-100">Industry-leading AI and machine learning expertise</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-blue-100">Proven track record with 1000+ successful implementations</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-blue-100">Comprehensive support and ongoing optimization</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-blue-100">Competitive pricing with enterprise-grade quality</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Innovative2025ServicesShowcase;
