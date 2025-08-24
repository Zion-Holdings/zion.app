import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Star, CheckCircle, ArrowRight, TrendingUp, Users, 
  Award, Clock, Zap, Shield, Brain, Atom, Rocket,
  ShoppingCart, Cpu, Globe, Lock, Video, Palette,
  BarChart, UserCheck, FileText, Heart, Eye, Search, Phone
} from 'lucide-react';
import { realMarketServices } from '../../data/2024-real-market-services';
import { aiEmergingTechServices } from '../../data/2024-ai-emerging-tech-services';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceCategories = [
  {
    id: 'ai-services',
    title: '🧠 Revolutionary AI Services',
    description: 'Next-generation AI consciousness and creativity',
    icon: Brain,
    color: 'from-violet-500 to-purple-500',
    services: aiEmergingTechServices.filter(s => s.category.includes('AI')),
    gradient: 'from-violet-500/20 to-indigo-500/20'
  },
  {
    id: 'quantum-tech',
    title: '⚛️ Quantum & Emerging Tech',
    description: 'Quantum computing and beyond',
    icon: Atom,
    color: 'from-indigo-500 to-blue-500',
    services: aiEmergingTechServices.filter(s => s.category.includes('Quantum') || s.category.includes('Blockchain')),
    gradient: 'from-indigo-500/20 to-cyan-500/20'
  },
  {
    id: 'enterprise-it',
    title: '🏙️ Enterprise IT Solutions',
    description: 'Autonomous operations and zero-trust security',
    icon: Cpu,
    color: 'from-blue-500 to-cyan-500',
    services: realMarketServices.filter(s => s.category.includes('Security') || s.category.includes('HR') || s.category.includes('Project')),
    gradient: 'from-blue-500/20 to-teal-500/20'
  },
  {
    id: 'business-automation',
    title: '🛒 Business Automation',
    description: 'Streamline business operations',
    icon: ShoppingCart,
    color: 'from-teal-500 to-emerald-500',
    services: realMarketServices.filter(s => s.category.includes('E-commerce') || s.category.includes('Marketing') || s.category.includes('Finance')),
    gradient: 'from-teal-500/20 to-green-500/20'
  },
  {
    id: 'robotics-automation',
    title: '🤖 Robotics & Automation',
    description: 'Intelligent automation solutions',
    icon: Rocket,
    color: 'from-green-500 to-yellow-500',
    services: aiEmergingTechServices.filter(s => s.category.includes('Robotics') || s.category.includes('Edge')),
    gradient: 'from-green-500/20 to-orange-500/20'
  },
  {
    id: 'research-development',
    title: '🔬 Research & Development',
    description: 'Breakthrough technologies and innovations',
    icon: Globe,
    color: 'from-orange-500 to-red-500',
    services: aiEmergingTechServices.filter(s => s.category.includes('Drug') || s.category.includes('Climate')),
    gradient: 'from-orange-500/20 to-pink-500/20'
  }
];

export default function UltraFuturisticServiceShowcase2034() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const allServices = [...realMarketServices, ...aiEmergingTechServices];
  
  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || 
      serviceCategories.some(cat => cat.services.includes(service));
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Revolutionary Technology Services
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover our comprehensive suite of cutting-edge AI, quantum computing, and emerging technology solutions. 
            Each service is designed to transform your business and propel you into the future.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {[
              { label: 'Total Services', value: allServices.length.toString(), icon: Rocket },
              { label: 'Happy Customers', value: '50K+', icon: Users },
              { label: 'Success Rate', value: '99.9%', icon: CheckCircle },
              { label: 'Global Reach', value: '45+ Countries', icon: Globe }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            >
              <option value="all">All Categories</option>
              {serviceCategories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.title.split(' ')[0]}
                </option>
              ))}
            </select>
          </div>
        </motion.div>

        {/* Service Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-xl border transition-all duration-300 hover:scale-105 cursor-pointer ${
                  selectedCategory === category.id 
                    ? 'border-cyan-500 bg-cyan-500/10' 
                    : 'border-white/20 bg-white/5 hover:border-cyan-500/50 hover:bg-cyan-500/5'
                }`}
                onClick={() => setSelectedCategory(category.id === selectedCategory ? 'all' : category.id)}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                    <p className="text-sm text-gray-400">{category.description}</p>
                  </div>
                </div>
                <div className="text-sm text-gray-300">
                  {category.services.length} services available
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="group relative p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all duration-300 hover:scale-105"
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                  Popular
                </div>
              )}

              {/* Service Icon */}
              <div className="flex items-center justify-between mb-4">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center text-2xl`}>
                  {service.icon}
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-white">{service.price}</div>
                  <div className="text-sm text-gray-400">{service.period}</div>
                </div>
              </div>

              {/* Service Info */}
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                {service.name}
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-2 mb-4">
                {service.features.slice(0, 3).map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
                {service.features.length > 3 && (
                  <div className="text-sm text-cyan-400">
                    +{service.features.length - 3} more features
                  </div>
                )}
              </div>

              {/* Service Meta */}
              <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                <div className="flex items-center space-x-2 text-gray-400">
                  <Clock className="w-4 h-4" />
                  <span>{service.setupTime}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <Users className="w-4 h-4" />
                  <span>{service.customers.toLocaleString()}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span>{service.rating}/5</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <TrendingUp className="w-4 h-4 text-green-400" />
                  <span>{service.growthRate}</span>
                </div>
              </div>

              {/* Market Position */}
              <div className="mb-4 p-3 rounded-lg bg-white/5 border border-white/10">
                <div className="text-xs text-gray-400 mb-1">Market Position</div>
                <div className="text-sm text-gray-300 leading-relaxed">
                  {service.marketPosition}
                </div>
              </div>

              {/* ROI */}
              <div className="mb-6 p-3 rounded-lg bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30">
                <div className="text-xs text-green-400 mb-1 font-semibold">Expected ROI</div>
                <div className="text-sm text-green-300 font-medium">
                  {service.roi}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3">
                <a
                  href={service.link}
                  className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 text-center group"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2 inline group-hover:translate-x-1 transition-transform" />
                </a>
                <button className="px-4 py-3 border border-white/20 text-white rounded-lg hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-200">
                  <Eye className="w-4 h-4" />
                </button>
              </div>

              {/* Trial Info */}
              <div className="mt-4 text-center">
                <div className="text-sm text-gray-400">
                  <span className="text-cyan-400 font-semibold">{service.trialDays} days</span> free trial
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-12 backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of businesses already leveraging our cutting-edge technology solutions. 
              Get started today and experience the future of business automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 text-lg"
              >
                Start Your Free Trial
              </a>
                             <a
                 href="/pricing-2034"
                 className="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-200 text-lg"
               >
                 View Pricing
               </a>
            </div>
            <div className="mt-6 text-sm text-gray-400">
              <Phone className="w-4 h-4 inline mr-2" />
              Need help? Call us at {contactInfo.mobile}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}