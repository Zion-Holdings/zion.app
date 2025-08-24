import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Check, Zap, Shield, Brain, Atom, Target, Rocket, Star, TrendingUp, Award, Users, ArrowRight, ExternalLink, Phone, Mail, MapPin
} from 'lucide-react';
import Layout from '../components/layout/Layout';
import { cuttingEdgeAIServices2025 } from '../data/2025-cutting-edge-ai-services';
import { cuttingEdgeQuantumServices2025 } from '../data/2025-cutting-edge-quantum-services';
import { cuttingEdgeEnterpriseITServices2025 } from '../data/2025-cutting-edge-enterprise-it';
import { cuttingEdgeMicroSaasServices2025 } from '../data/2025-cutting-edge-micro-saas';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const pricingTiers = [
  {
    name: 'Starter',
    price: 99,
    period: 'month',
    description: 'Perfect for small businesses and startups',
    features: [
      'Up to 5 team members',
      'Basic AI content generation',
      'Standard support',
      'Core integrations',
      'Basic analytics',
      'Email support'
    ],
    icon: <Target className="w-6 h-6" />,
    color: 'from-blue-500 to-cyan-500',
    cta: 'Start Free Trial',
    ctaLink: '/contact',
    popular: false
  },
  {
    name: 'Professional',
    price: 299,
    period: 'month',
    description: 'Ideal for growing businesses and teams',
    features: [
      'Up to 25 team members',
      'Advanced AI features',
      'Priority support',
      'Advanced integrations',
      'Advanced analytics',
      'Phone & email support',
      'Custom branding',
      'API access'
    ],
    icon: <Zap className="w-6 h-6" />,
    color: 'from-purple-500 to-pink-500',
    cta: 'Start Free Trial',
    ctaLink: '/contact',
    popular: true
  },
  {
    name: 'Enterprise',
    price: 999,
    period: 'month',
    description: 'For large organizations with complex needs',
    features: [
      'Unlimited team members',
      'Full AI suite access',
      '24/7 dedicated support',
      'Custom integrations',
      'Advanced analytics & reporting',
      'Dedicated account manager',
      'Custom development',
      'SLA guarantees',
      'On-premise options',
      'Compliance certifications'
    ],
    icon: <Shield className="w-6 h-6" />,
    color: 'from-green-500 to-emerald-500',
    cta: 'Contact Sales',
    ctaLink: '/contact',
    popular: false
  }
];

const serviceCategories = [
  {
    name: 'AI & Consciousness Services',
    icon: <Brain className="w-8 h-8" />,
    color: 'from-cyan-500 to-blue-500',
    services: cuttingEdgeAIServices2025.slice(0, 6),
    description: 'Revolutionary AI platforms with consciousness and emotional intelligence'
  },
  {
    name: 'Quantum & Emerging Tech',
    icon: <Atom className="w-8 h-8" />,
    color: 'from-purple-500 to-pink-500',
    services: cuttingEdgeQuantumServices2025.slice(0, 6),
    description: 'Breakthrough quantum computing and space technology solutions'
  },
  {
    name: 'Enterprise IT Solutions',
    icon: <Shield className="w-8 h-8" />,
    color: 'from-blue-500 to-cyan-500',
    services: cuttingEdgeEnterpriseITServices2025.slice(0, 6),
    description: 'Advanced enterprise infrastructure and security solutions'
  },
  {
    name: 'Micro SAAS Solutions',
    icon: <Rocket className="w-8 h-8" />,
    color: 'from-teal-500 to-emerald-500',
    services: cuttingEdgeMicroSaasServices2025.slice(0, 6),
    description: 'Innovative business solutions for modern enterprises'
  }
];

const stats = [
  { number: '25+', label: 'Cutting-Edge Services', icon: Star, color: 'text-cyan-400' },
  { number: '$500B+', label: 'Market Coverage', icon: TrendingUp, color: 'text-purple-400' },
  { number: '99.9%', label: 'Success Rate', icon: Award, color: 'text-green-400' },
  { number: '24/7', label: 'Expert Support', icon: Users, color: 'text-pink-400' }
];

export default function CuttingEdgePricing2025() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const allServices = [
    ...cuttingEdgeAIServices2025,
    ...cuttingEdgeQuantumServices2025,
    ...cuttingEdgeEnterpriseITServices2025,
    ...cuttingEdgeMicroSaasServices2025
  ];

  const filteredServices = selectedCategory === 'all' 
    ? allServices 
    : allServices.filter(service => service.category === selectedCategory);

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

  return (
    <>
      <Head>
        <title>Cutting-Edge Pricing 2025 - Zion Tech Group | Future Technology Solutions</title>
        <meta name="description" content="Discover competitive pricing for our revolutionary cutting-edge services including AI consciousness, quantum computing, space mining, and advanced enterprise solutions." />
        <meta name="keywords" content="cutting-edge pricing, AI services pricing, quantum computing pricing, enterprise IT pricing, micro SAAS pricing" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <motion.h1 
                className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                Cutting-Edge
                <span className="block text-2xl md:text-3xl lg:text-4xl mt-4 text-white/90">
                  Pricing 2025
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-12 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Experience revolutionary technology at competitive prices. Our cutting-edge services are designed to give you 
                a competitive advantage while maintaining affordability and value.
              </motion.p>

              {/* Hero Stats */}
              <motion.div 
                className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-2">
                      <div className="p-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30">
                        <stat.icon className={`w-5 h-5 ${stat.color}`} />
                      </div>
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.number}</div>
                    <div className="text-sm text-white/70">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Pricing Tiers Section */}
        <section className="py-20 bg-gradient-to-b from-black via-purple-900/10 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Flexible
                </span>{' '}
                Pricing Plans
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                Choose the perfect plan for your business needs. All plans include our cutting-edge technology 
                and world-class support to ensure your success.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingTiers.map((tier, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative group ${
                    tier.popular ? 'scale-105' : ''
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className={`relative p-8 rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-black/80 via-purple-900/10 to-black/80 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 ${
                    tier.popular ? 'border-cyan-500/50 shadow-cyan-500/20' : ''
                  }`}>
                    <div className="text-center mb-8">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${tier.color} mb-4`}>
                        {tier.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                      <p className="text-white/70 mb-6">{tier.description}</p>
                      <div className="text-4xl font-bold text-white mb-2">
                        ${tier.price}
                        <span className="text-lg font-normal text-white/60">/{tier.period}</span>
                      </div>
                    </div>

                    <ul className="space-y-4 mb-8">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <Check className="w-5 h-5 text-cyan-400 mt-0.5 mr-3 flex-shrink-0" />
                          <span className="text-white/80">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href={tier.ctaLink}
                      className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                        tier.popular
                          ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg hover:shadow-cyan-500/25'
                          : 'border-2 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10'
                      }`}
                    >
                      {tier.cta}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Categories Section */}
        <section className="py-20 bg-gradient-to-b from-black via-purple-900/10 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Service
                </span>{' '}
                Categories
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                Explore our comprehensive range of cutting-edge services across multiple technology domains. 
                Each category offers specialized solutions for different business needs.
              </p>
            </motion.div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === 'all'
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                    : 'bg-black/50 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10'
                }`}
              >
                All Categories ({allServices.length})
              </button>
              {serviceCategories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.name
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                      : 'bg-black/50 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10'
                  }`}
                >
                  {category.name} ({category.services.length})
                </button>
              ))}
            </div>

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
                  className="group relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-black/80 via-purple-900/10 to-black/80 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                          {service.name}
                        </h3>
                        <p className="text-white/70 text-sm leading-relaxed mb-4">
                          {service.description}
                        </p>
                      </div>
                      <div className="ml-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center">
                          <Star className="w-6 h-6 text-cyan-400" />
                        </div>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 text-xs font-medium bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Market Info */}
                    <div className="flex items-center justify-between text-sm text-white/60 mb-4">
                      <span>Market: {service.marketSize}</span>
                      <span className="text-cyan-400">{service.category}</span>
                    </div>

                    {/* Pricing */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2 uppercase tracking-wider">
                        Starting From
                      </h4>
                      <div className="text-2xl font-bold text-white">
                        ${service.pricing.starter.price}
                        <span className="text-sm font-normal text-white/60">/{service.pricing.starter.period}</span>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center justify-between">
                      <a
                        href={service.website}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-sm font-medium"
                      >
                        Learn More
                        <ExternalLink className="ml-1 w-4 h-4" />
                      </a>
                      <a
                        href="/contact"
                        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                      >
                        Get Started
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-20 bg-gradient-to-br from-black via-purple-900/20 to-black">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Our team of experts is ready to help you choose the perfect plan and get you started with our 
                cutting-edge technology solutions. Contact us today for a personalized consultation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                >
                  Start Your Journey
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a
                  href={`tel:${contactInfo.mobile}`}
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Call Now
                </a>
              </div>

              {/* Contact Info */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center mb-3">
                    <Phone className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="text-white font-semibold">Phone</div>
                  <a href={`tel:${contactInfo.mobile}`} className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
                    {contactInfo.mobile}
                  </a>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center mb-3">
                    <Mail className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="text-white font-semibold">Email</div>
                  <a href={`mailto:${contactInfo.email}`} className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center mb-3">
                    <MapPin className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="text-white font-semibold">Address</div>
                  <div className="text-white/70 text-sm">{contactInfo.address}</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
}