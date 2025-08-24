import React, { useState } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle, Star, TrendingUp, Zap, Shield, 
  Brain, Target, Cpu, Database, Cloud, Lock,
  BarChart3, Settings, Code, Palette, MessageSquare,
  Phone, Mail, MapPin, ArrowRight, ExternalLink,
  DollarSign, Users, Clock, Award, Rocket
} from 'lucide-react';

// Import all innovative services
import { innovativeMicroSaasSolutions } from '../data/2034-innovative-micro-saas-solutions';
import { innovativeITSolutions } from '../data/2034-innovative-it-solutions';
import { innovativeAISolutions } from '../data/2034-innovative-ai-solutions';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const pricingTiers = [
  {
    name: 'Starter',
    description: 'Perfect for small businesses and startups',
    price: 'From $79/month',
    features: [
      'Up to 1,000 users/items',
      'Basic support',
      'Core features',
      'Standard integrations',
      'Email support'
    ],
    color: 'from-cyan-500 to-blue-500',
    popular: false
  },
  {
    name: 'Professional',
    description: 'Ideal for growing businesses',
    price: 'From $299/month',
    features: [
      'Up to 10,000 users/items',
      'Priority support',
      'Advanced features',
      'Premium integrations',
      'Phone & email support',
      'Custom reporting',
      'API access'
    ],
    color: 'from-purple-500 to-pink-500',
    popular: true
  },
  {
    name: 'Enterprise',
    description: 'For large organizations',
    price: 'From $799/month',
    features: [
      'Unlimited users/items',
      '24/7 dedicated support',
      'All features',
      'Custom integrations',
      'Dedicated account manager',
      'Custom development',
      'On-premise options',
      'SLA guarantees'
    ],
    color: 'from-green-500 to-emerald-500',
    popular: false
  }
];

const serviceCategories = [
  {
    id: 'micro-saas',
    title: '🎯 Micro SaaS Solutions',
    description: 'Ready-to-use business solutions that drive growth and efficiency',
    icon: Target,
    services: innovativeMicroSaasSolutions,
    color: 'from-yellow-500 to-orange-500'
  },
  {
    id: 'it-solutions',
    title: '🏙️ Enterprise IT Solutions',
    description: 'Advanced IT infrastructure and enterprise solutions',
    icon: Shield,
    services: innovativeITSolutions,
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 'ai-solutions',
    title: '🧠 AI & Machine Learning',
    description: 'Cutting-edge AI solutions for business transformation',
    icon: Brain,
    services: innovativeAISolutions,
    color: 'from-pink-500 to-rose-500'
  }
];

export default function InnovativePricing2034() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTier, setSelectedTier] = useState('professional');

  const allServices = [
    ...innovativeMicroSaasSolutions,
    ...innovativeITSolutions,
    ...innovativeAISolutions
  ];

  const filteredServices = selectedCategory === 'all' 
    ? allServices 
    : allServices.filter(service => service.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  const totalServices = allServices.length;
  const totalValue = allServices.reduce((acc, service) => {
    const price = parseInt(service.pricing.starter.replace(/[^0-9]/g, ''));
    return acc + price;
  }, 0);

  return (
    <>
      <Head>
        <title>Innovative Services Pricing 2034 - Zion Tech Group | Transparent Pricing for Revolutionary Solutions</title>
        <meta name="description" content="Discover transparent pricing for our innovative micro SaaS, enterprise IT, and AI solutions. Choose from Starter, Professional, or Enterprise plans with guaranteed ROI." />
        <meta name="keywords" content="pricing, micro SaaS pricing, enterprise IT pricing, AI solutions pricing, business automation pricing, Zion Tech Group" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Innovative Services Pricing 2034 - Zion Tech Group" />
        <meta property="og:description" content="Transparent pricing for revolutionary micro SaaS, enterprise IT, and AI solutions with guaranteed ROI." />
        <meta property="og:url" content="https://ziontechgroup.com/innovative-pricing-2034" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Zion Tech Group" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Innovative Services Pricing 2034 - Zion Tech Group" />
        <meta name="twitter:description" content="Transparent pricing for revolutionary micro SaaS, enterprise IT, and AI solutions with guaranteed ROI." />
        
        {/* Contact Information */}
        <meta name="contact:phone" content="+1 302 464 0950" />
        <meta name="contact:email" content="kleber@ziontechgroup.com" />
        <meta name="contact:address" content="364 E Main St STE 1008 Middletown DE 19709" />
        
        <link rel="canonical" href="https://ziontechgroup.com/innovative-pricing-2034" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 border border-cyan-500/30 rounded-full text-cyan-300 text-lg font-medium mb-8"
            >
              <Star className="w-5 h-5 mr-2 text-cyan-400" />
              2034 Innovative Services Pricing
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
            >
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Transparent
              </span>
              <br />
              <span className="text-white">Pricing Plans</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed"
            >
              Choose the perfect plan for your business needs. All our innovative solutions come with 
              transparent pricing, guaranteed ROI, and world-class support.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-16"
            >
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">{totalServices}+</div>
                <div className="text-gray-300">Innovative Services</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">${totalValue.toLocaleString()}+</div>
                <div className="text-gray-300">Total Value</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-pink-400 mb-2">3</div>
                <div className="text-gray-300">Pricing Tiers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-gray-300">Expert Support</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-bold text-center mb-16"
            >
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Choose Your Plan
              </span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative ${tier.popular ? 'scale-105' : ''}`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className={`p-8 rounded-2xl bg-gradient-to-br ${tier.color} border border-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl`}>
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                      <p className="text-gray-200 mb-4">{tier.description}</p>
                      <div className="text-4xl font-bold text-white mb-2">{tier.price}</div>
                      <p className="text-gray-300 text-sm">Per service, per month</p>
                    </div>
                    
                    <ul className="space-y-4 mb-8">
                      {tier.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-200">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <button
                      onClick={() => setSelectedTier(tier.name.toLowerCase())}
                      className="w-full py-3 px-6 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-white font-medium transition-all duration-200 hover:scale-105"
                    >
                      Get Started
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-bold text-center mb-16"
            >
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Service Categories
              </span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {serviceCategories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className={`p-8 rounded-2xl bg-gradient-to-br ${category.color} border border-white/10 backdrop-blur-sm transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl`}>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center">
                        <category.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-white">{category.services.length}</div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">{category.title}</h3>
                    <p className="text-gray-200 mb-6 leading-relaxed">{category.description}</p>
                    
                    <button
                      onClick={() => setSelectedCategory(category.id)}
                      className="w-full py-3 px-6 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-white font-medium transition-all duration-200 hover:scale-105"
                    >
                      Explore Services
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Category Filter */}
            <div className="flex justify-center mb-12">
              <div className="bg-black/30 border border-white/10 rounded-xl p-2">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`px-6 py-3 rounded-lg transition-all duration-200 ${
                    selectedCategory === 'all'
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  All Categories
                </button>
                {serviceCategories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-6 py-3 rounded-lg transition-all duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {category.title.split(' ')[1]}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="bg-black/40 border border-white/10 rounded-2xl p-6 backdrop-blur-sm transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl group-hover:border-cyan-500/50">
                    {/* Service Header */}
                    <div className="mb-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-xl flex items-center justify-center">
                          <Target className="w-6 h-6 text-cyan-400" />
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-cyan-400 font-medium">{service.category}</div>
                          <div className="text-xs text-gray-400">{service.launchDate}</div>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                        {service.name}
                      </h3>
                      
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Pricing */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white mb-3">Starting From</h4>
                      <div className="text-2xl font-bold text-cyan-400">
                        {service.pricing.starter}
                      </div>
                      <div className="text-sm text-gray-400 mt-1">
                        {service.pricing.professional} for Professional
                      </div>
                    </div>

                    {/* Key Benefits */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white mb-3">Key Benefits</h4>
                      <div className="space-y-2">
                        {service.benefits.slice(0, 2).map((benefit, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-300">
                            <TrendingUp className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3">
                      <a
                        href={service.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2 px-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 text-center"
                      >
                        View Demo
                      </a>
                      <a
                        href={service.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2 px-4 border border-white/20 text-white text-sm font-medium rounded-lg hover:bg-white/10 transition-all duration-200"
                      >
                        Learn More
                      </a>
                    </div>

                    {/* Contact Info */}
                    <div className="mt-6 pt-6 border-t border-white/10">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center text-gray-400">
                          <Mail className="w-4 h-4 mr-2" />
                          <span>{service.contact}</span>
                        </div>
                        <a
                          href={`mailto:${service.contact}`}
                          className="text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                          Contact
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-cyan-500/20 to-purple-600/20 border border-cyan-500/30 rounded-2xl p-12 backdrop-blur-sm text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Why Choose Our Innovative Solutions?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Guaranteed ROI</h3>
                  <p className="text-gray-300">All our solutions deliver measurable business value with proven results</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Fast Implementation</h3>
                  <p className="text-gray-300">Get up and running in days, not months with our streamlined onboarding</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Enterprise Security</h3>
                  <p className="text-gray-300">Bank-grade security and compliance for peace of mind</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-cyan-500/20 to-purple-600/20 border border-cyan-500/30 rounded-2xl p-12 backdrop-blur-sm"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Contact our team to discuss your needs and find the perfect solution for your business.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center justify-center space-x-3 text-gray-300">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <span>{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-gray-300">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <span>{contactInfo.address}</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold text-lg rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 shadow-2xl shadow-cyan-500/25"
                >
                  <span>Get Started Today</span>
                  <ArrowRight className="w-6 h-6" />
                </a>
                
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="inline-flex items-center space-x-3 px-8 py-4 bg-black/50 border-2 border-cyan-500/50 text-cyan-300 font-bold text-lg rounded-xl hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-200"
                >
                  <span>Contact Sales</span>
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}