import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  Brain, 
  Shield, 
  Cpu, 
  Rocket, 
  TrendingUp, 
  Users, 
  Zap,
  Globe,
  Lock,
  BarChart3,
  Code,
  Database,
  Cloud,
  Smartphone,
  Target,
  Star,
  CheckCircle,
  Clock,
  DollarSign,
  Phone,
  Mail,
  ExternalLink
} from 'lucide-react';
import { INNOVATIVE_AI_SERVICES } from '../data/innovativeAIServices';
import { INNOVATIVE_IT_SERVICES } from '../data/innovativeITServices';
import { INNOVATIVE_MICRO_SAAS_SERVICES } from '../data/innovativeMicroSaasServices';

export default function InnovativeServicesShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const allServices = [
    ...INNOVATIVE_AI_SERVICES,
    ...INNOVATIVE_IT_SERVICES,
    ...INNOVATIVE_MICRO_SAAS_SERVICES
  ];

  const categories = ['all', ...Array.from(new Set(allServices.map(service => service.category)))];
  
  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (service.tags && service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())));
    return matchesCategory && matchesSearch;
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

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Machine Learning':
      case 'AI & Marketing':
      case 'AI & Computer Vision':
      case 'AI & Finance':
      case 'AI & Healthcare':
      case 'AI & Operations':
        return Brain;
      case 'IT Infrastructure':
      case 'IT Security':
        return Shield;
      case 'Micro SAAS':
        return Cpu;
      default:
        return Rocket;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI & Machine Learning':
      case 'AI & Marketing':
      case 'AI & Computer Vision':
      case 'AI & Finance':
      case 'AI & Healthcare':
      case 'AI & Operations':
        return 'from-cyan-500 to-blue-600';
      case 'IT Infrastructure':
      case 'IT Security':
        return 'from-purple-500 to-pink-600';
      case 'Micro SAAS':
        return 'from-green-500 to-emerald-600';
      default:
        return 'from-orange-500 to-red-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      <SEO 
        title="Innovative Services Showcase - Zion Tech Group" 
        description="Discover our comprehensive range of innovative AI services, IT solutions, and micro SAAS platforms designed to transform your business operations and drive growth."
      />

      {/* Header Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-holographic-gradient bg-clip-text text-transparent animate-holographic-shift">
            Innovative Services Showcase
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
            Explore our cutting-edge technology solutions that combine artificial intelligence, 
            advanced IT infrastructure, and innovative micro SAAS platforms to drive your business forward
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search innovative services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 bg-zion-blue-light/20 border border-zion-cyan/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 backdrop-blur-sm"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-zion-cyan">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => {
              const Icon = getCategoryIcon(category);
              const colorClass = getCategoryColor(category);
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300 ${
                    selectedCategory === category
                      ? `bg-gradient-to-r ${colorClass} border-transparent text-white shadow-lg`
                      : 'border-zion-cyan/30 text-zion-cyan hover:border-zion-cyan hover:bg-zion-cyan/10'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="capitalize">{category === 'all' ? 'All Services' : category}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredServices.map((service) => {
            const Icon = getCategoryIcon(service.category);
            const colorClass = getCategoryColor(service.category);
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="bg-zion-blue-light/10 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 group"
              >
                {/* Service Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${colorClass}`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-zion-cyan">
                      ${service.price}
                    </div>
                    <div className="text-sm text-zion-slate-light">
                      per {service.pricingModel}
                    </div>
                  </div>
                </div>

                {/* Service Title & Description */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                  {service.title}
                </h3>
                <p className="text-zion-slate-light mb-4 line-clamp-3">
                  {service.description}
                </p>

                {/* Category Badge */}
                <div className="mb-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${colorClass} text-white`}>
                    {service.category}
                  </span>
                </div>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-zion-cyan mb-2">Key Features</h4>
                  <div className="space-y-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        {feature}
                      </div>
                    ))}
                    {service.features.length > 3 && (
                      <div className="text-xs text-zion-slate-light">
                        +{service.features.length - 3} more features
                      </div>
                    )}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-zion-cyan mb-2">Key Benefits</h4>
                  <div className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-zion-slate-light">
                        <TrendingUp className="w-4 h-4 text-blue-400" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Market Price & ROI */}
                <div className="mb-4 p-3 bg-zion-blue-light/20 rounded-lg">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-zion-slate-light">Market Price:</span>
                    <span className="text-zion-cyan font-medium">{service.marketPrice}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm mt-1">
                    <span className="text-zion-slate-light">ROI:</span>
                    <span className="text-green-400 font-medium">{service.roi}</span>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="border-t border-zion-cyan/20 pt-4">
                  <div className="flex items-center justify-between text-sm text-zion-slate-light mb-2">
                    <span>Contact us for custom pricing</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <a 
                      href={`tel:${service.contactInfo.phone}`}
                      className="flex items-center gap-2 text-zion-cyan hover:text-white transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      {service.contactInfo.phone}
                    </a>
                    <a 
                      href={`mailto:${service.contactInfo.email}`}
                      className="flex items-center gap-2 text-zion-cyan hover:text-white transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      Email
                    </a>
                  </div>
                  <a 
                    href={service.contactInfo.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-zion-cyan hover:text-white transition-colors text-sm mt-2"
                  >
                    Visit Website
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                {/* Call to Action */}
                <div className="mt-6">
                  <button className="w-full bg-gradient-to-r from-zion-cyan to-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-500 hover:to-zion-cyan transition-all duration-300 transform hover:scale-105">
                    Get Started Today
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-24 text-center"
        >
          <div className="bg-zion-blue-light/10 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              Our team of experts is ready to help you implement these innovative solutions 
              and drive real business results. Contact us today to get started.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="tel:+13024640950"
                className="flex items-center gap-2 bg-gradient-to-r from-zion-cyan to-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-500 hover:to-zion-cyan transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                Call +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="flex items-center gap-2 border border-zion-cyan text-zion-cyan py-3 px-6 rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            </div>
            <div className="mt-6 text-sm text-zion-slate-light">
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
              <p>Website: <a href="https://ziontechgroup.com" className="text-zion-cyan hover:text-white">https://ziontechgroup.com</a></p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}