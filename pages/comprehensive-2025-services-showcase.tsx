import React from 'react';
import SEO from '../components/SEO';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import { innovative2025MicroSaasBatch } from '../data/innovative-2025-micro-saas-batch';
import { innovative2025ITEnterpriseBatch } from '../data/innovative-2025-it-enterprise-batch';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Star, Users, Award, Clock, Brain, Atom, Rocket, Shield, Zap,
  Target, BookOpen, Truck, DollarSign, BarChart3, Globe, Sparkles,
  Cpu, Lock, Cloud, Settings, Eye, Heart, Lightbulb, Search,
  Grid, List, TrendingUp, User, ShoppingCart, Bell, HelpCircle,
  FileText, Video, Headphones, Code, Database, Network, Server,
  Monitor, Smartphone, Camera, Gamepad2, Palette, Music, Film,
  Building, MessageCircle, ArrowRight, CheckCircle, ExternalLink,
  Phone, Mail, MapPin
} from 'lucide-react';

const Comprehensive2025ServicesShowcase: React.FC = () => {
  const allServices = [...innovative2025MicroSaasBatch, ...innovative2025ITEnterpriseBatch];
  
  const categories = [
    'AI & Machine Learning',
    'Quantum Technology',
    'Space Technology',
    'IT Solutions',
    'Cloud & FinOps',
    'Developer Tools',
    'Enterprise Security'
  ];

  const getCategoryServices = (category: string) => {
    return allServices.filter(service => {
      if (category === 'AI & Machine Learning') {
        return service.category === 'AI & Data';
      } else if (category === 'Quantum Technology') {
        return service.category === 'Quantum Technology';
      } else if (category === 'Space Technology') {
        return service.category === 'Space Technology';
      } else if (category === 'IT Solutions') {
        return service.category === 'IT Solutions';
      } else if (category === 'Cloud & FinOps') {
        return service.category === 'Cloud & FinOps';
      } else if (category === 'Developer Tools') {
        return service.category === 'Developer Tools';
      } else if (category === 'Enterprise Security') {
        return service.name.toLowerCase().includes('security') || 
               service.name.toLowerCase().includes('zero-trust') ||
               service.name.toLowerCase().includes('cybersecurity');
      }
      return false;
    });
  };

  return (
    <>
      <SEO 
        title="Comprehensive 2025 Services Showcase | Zion Tech Group"
        description="Discover our comprehensive range of innovative 2025 micro SAAS, IT, and AI services. From quantum computing to space technology, we offer cutting-edge solutions for modern businesses."
        keywords={["micro SAAS", "AI services", "quantum technology", "space technology", "IT solutions", "enterprise services", "2025 innovations"]}
        image="https://ziontechgroup.com/og-image-2025-services.jpg"
      />
      <UltraAdvancedFuturisticBackground />
      
      <div className="relative z-10 min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                2025 Services Showcase
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                Experience the future of technology with our comprehensive suite of innovative micro SAAS, 
                IT, and AI services. From quantum computing breakthroughs to space technology innovations, 
                we're pioneering solutions that transform businesses.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                <div className="p-6 bg-black/20 rounded-xl border border-cyan-500/20">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">{allServices.length}+</div>
                  <div className="text-gray-300">Innovative Services</div>
                </div>
                <div className="p-6 bg-black/20 rounded-xl border border-blue-500/20">
                  <div className="text-4xl font-bold text-blue-400 mb-2">7</div>
                  <div className="text-gray-300">Technology Categories</div>
                </div>
                <div className="p-6 bg-black/20 rounded-xl border border-purple-500/20">
                  <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
                  <div className="text-gray-300">Support Available</div>
                </div>
                <div className="p-6 bg-black/20 rounded-xl border border-green-500/20">
                  <div className="text-4xl font-bold text-green-400 mb-2">∞</div>
                  <div className="text-gray-300">Future Possibilities</div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 p-8 rounded-2xl border border-cyan-500/30">
                <h3 className="text-2xl font-bold text-cyan-400 mb-6">Ready to Transform Your Business?</h3>
                <div className="grid md:grid-cols-3 gap-6 text-left">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-6 h-6 text-cyan-400" />
                    <div>
                      <div className="text-gray-300 text-sm">Phone</div>
                      <div className="text-white font-semibold">+1 302 464 0950</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-6 h-6 text-blue-400" />
                    <div>
                      <div className="text-gray-300 text-sm">Email</div>
                      <div className="text-white font-semibold">kleber@ziontechgroup.com</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-6 h-6 text-purple-400" />
                    <div>
                      <div className="text-gray-300 text-sm">Address</div>
                      <div className="text-white font-semibold">364 E Main St STE 1008<br />Middletown DE 19709</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services by Category */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            {categories.map((category, categoryIndex) => {
              const categoryServices = getCategoryServices(category);
              if (categoryServices.length === 0) return null;
              
              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="mb-20"
                >
                  <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                      {category}
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                      Discover our cutting-edge {category.toLowerCase()} solutions designed to drive innovation and growth
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categoryServices.map((service, serviceIndex) => (
                      <motion.div
                        key={service.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="group relative"
                      >
                        <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                          {/* Popular Badge */}
                          {service.popular && (
                            <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full flex items-center space-x-1">
                              <Star className="w-3 h-3" />
                              <span>Popular</span>
                            </div>
                          )}
                          
                          {/* Service Icon */}
                          <div className="text-6xl mb-6">{service.icon}</div>
                          
                          {/* Service Name */}
                          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                            {service.name}
                          </h3>
                          
                          {/* Tagline */}
                          <p className="text-gray-300 mb-4 leading-relaxed">
                            {service.tagline}
                          </p>
                          
                          {/* Price */}
                          <div className="flex items-baseline space-x-2 mb-6">
                            <span className="text-3xl font-bold text-cyan-400">{service.price}</span>
                            <span className="text-gray-400">{service.period}</span>
                          </div>
                          
                          {/* Features Preview */}
                          <div className="mb-6">
                            <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">
                              Key Features
                            </h4>
                            <ul className="space-y-2">
                              {service.features.slice(0, 3).map((feature, index) => (
                                <li key={index} className="flex items-start space-x-2 text-sm text-gray-300">
                                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                              {service.features.length > 3 && (
                                <li className="text-sm text-cyan-400">
                                  +{service.features.length - 3} more features
                                </li>
                              )}
                            </ul>
                          </div>
                          
                          {/* Market Info */}
                          <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                            <div>
                              <div className="text-gray-400">Market Size</div>
                              <div className="text-white font-semibold">{service.marketSize}</div>
                            </div>
                            <div>
                              <div className="text-gray-400">Growth Rate</div>
                              <div className="text-green-400 font-semibold">{service.growthRate}</div>
                            </div>
                          </div>
                          
                          {/* ROI */}
                          <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 p-4 rounded-xl mb-6 border border-green-500/20">
                            <div className="text-sm text-gray-400 mb-1">Expected ROI</div>
                            <div className="text-green-400 font-semibold">{service.roi}</div>
                          </div>
                          
                          {/* Action Buttons */}
                          <div className="flex space-x-3">
                            <Link href={service.link}>
                              <button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-3 px-4 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                                <span>Learn More</span>
                                <ArrowRight className="w-4 h-4" />
                              </button>
                            </Link>
                            <Link href={`/contact?service=${service.id}`}>
                              <button className="px-4 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300">
                                Contact
                              </button>
                            </Link>
                          </div>
                          
                          {/* Trial Info */}
                          <div className="mt-4 text-center">
                            <span className="text-sm text-gray-400">
                              {service.trialDays}-day free trial • Setup in {service.setupTime}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Ready to Build the Future?
              </h2>
              <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                Join hundreds of forward-thinking companies already transforming their business with our innovative solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                    Start Your Transformation
                  </button>
                </Link>
                <Link href="/services">
                  <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105">
                    Explore All Services
                  </button>
                </Link>
              </div>
              
              <div className="mt-12 text-center">
                <p className="text-gray-400 mb-4">Need immediate assistance?</p>
                <div className="flex items-center justify-center space-x-6 text-sm">
                  <a href="tel:+13024640950" className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors">
                    <Phone className="w-4 h-4" />
                    <span>+1 302 464 0950</span>
                  </a>
                  <a href="mailto:kleber@ziontechgroup.com" className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors">
                    <Mail className="w-4 h-4" />
                    <span>kleber@ziontechgroup.com</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Comprehensive2025ServicesShowcase;