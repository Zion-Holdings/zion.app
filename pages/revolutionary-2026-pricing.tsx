import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import {
  Check, Star, Globe, ArrowRight,
  Rocket, DollarSign, Mail, Phone, MapPin,
  Sparkles, Brain,
  Atom, Crown, Infinity, Shield, Microscope
} from 'lucide-react';
import Link from 'next/link';
import { ultimate2026Services } from '../data/ultimate-2026-services';
import { revolutionary2026Innovations } from '../data/revolutionary-2026-innovations';

export default function Revolutionary2026Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');


  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  // Combine all services
  const allServices = [
    ...ultimate2026Services,
    ...revolutionary2026Innovations
  ];

  // Enhanced service categories with pricing
  const serviceCategories = [
    {
      name: 'AI Consciousness & Neural Interfaces',
      description: 'Revolutionary AI and brain-computer interface solutions',
      services: ['AI Consciousness Simulation', 'Quantum Neural Interface', 'Autonomous AI Agents'],
      avgPrice: '$4,399/month',
      savings: 'Save 70-90% vs. competitors',
      icon: Brain,
      color: 'from-purple-600 to-pink-600'
    },
    {
      name: 'Quantum Computing & Space Technology',
      description: 'Quantum-powered solutions and space technology platforms',
      services: ['Quantum Internet Infrastructure', 'Space Debris Management', 'Quantum AI Cybersecurity'],
      avgPrice: '$6,999/month',
      savings: 'Save 80-95% vs. competitors',
      icon: Atom,
      color: 'from-blue-600 to-cyan-600'
    },
    {
      name: 'Metaverse & Holographic Development',
      description: 'Immersive 3D and virtual reality experiences',
      services: ['Holographic Metaverse Platform', 'AI Content Creation', 'Metaverse AI Development'],
      avgPrice: '$1,999/month',
      savings: 'Save 60-80% vs. competitors',
      icon: Globe,
      color: 'from-green-600 to-emerald-600'
    },
    {
      name: 'Enterprise IT & Infrastructure',
      description: 'Advanced enterprise solutions and infrastructure',
      services: ['Zero Trust Architecture', 'Edge Computing Orchestration', '5G Private Networks'],
      avgPrice: 'Custom pricing',
      savings: 'Save 50-70% vs. competitors',
      icon: Shield,
      color: 'from-red-600 to-orange-600'
    },
    {
      name: 'Healthcare & Climate AI',
      description: 'AI-powered healthcare and environmental solutions',
      services: ['AI Healthcare Companion', 'AI Climate Prediction', 'Autonomous Manufacturing'],
      avgPrice: '$2,199/month',
      savings: 'Save 65-85% vs. competitors',
      icon: Microscope,
      color: 'from-teal-600 to-cyan-600'
    }
  ];

  // Enhanced pricing tiers with comprehensive offerings
  const pricingTiers = [
    {
      name: 'Starter',
      description: 'Perfect for startups and small businesses',
      price: billingCycle === 'monthly' ? 99 : 79,
      period: billingCycle === 'monthly' ? '/month' : '/month',
      savings: billingCycle === 'yearly' ? 'Save 20%' : '',
      features: [
        'Access to 100+ Core Services',
        'Basic AI Integration',
        'Standard Support (24/7)',
        '30-Day Free Trial',
        'Basic Analytics Dashboard',
        'Email Support',
        '99.5% Uptime Guarantee',
        'Standard Security Features',
        'API Access (1000 calls/month)',
        'Community Forum Access'
      ],
      icon: <Sparkles className="w-8 h-8" />,
      variant: 'quantum' as const,
      popular: false,
      cta: 'Start Free Trial',
      highlight: false
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses and teams',
      price: billingCycle === 'monthly' ? 299 : 239,
      period: billingCycle === 'monthly' ? '/month' : '/month',
      savings: billingCycle === 'yearly' ? 'Save 20%' : '',
      features: [
        'Access to 200+ Advanced Services',
        'Advanced AI & Quantum Solutions',
        'Priority Support (24/7)',
        '60-Day Free Trial',
        'Advanced Analytics & Reporting',
        'Phone & Email Support',
        '99.9% Uptime Guarantee',
        'Enhanced Security Features',
        'API Access (10,000 calls/month)',
        'Dedicated Account Manager',
        'Custom Integrations',
        'Team Collaboration Tools'
      ],
      icon: <Rocket className="w-8 h-8" />,
      variant: 'ai-futuristic' as const,
      popular: true,
      cta: 'Start Free Trial',
      highlight: true
    },
    {
      name: 'Enterprise',
      description: 'For large organizations and enterprises',
      price: billingCycle === 'monthly' ? 999 : 799,
      period: billingCycle === 'monthly' ? '/month' : '/month',
      savings: billingCycle === 'yearly' ? 'Save 20%' : '',
      features: [
        'Access to All 300+ Services',
        'Full AI & Quantum Suite',
        'Premium Support (24/7)',
        '90-Day Free Trial',
        'Enterprise Analytics & BI',
        'Dedicated Support Team',
        '99.99% Uptime Guarantee',
        'Enterprise Security & Compliance',
        'Unlimited API Access',
        'Custom Development',
        'White-label Solutions',
        'Advanced Integration Support',
        'SLA Guarantees',
        'On-site Implementation'
      ],
      icon: <Crown className="w-8 h-8" />,
      variant: 'enterprise-futuristic' as const,
      popular: false,
      cta: 'Contact Sales',
      highlight: false
    },
    {
      name: 'Custom',
      description: 'Tailored solutions for unique requirements',
      price: 'Custom',
      period: '',
      savings: 'Tailored pricing',
      features: [
        'Fully Customized Solutions',
        'Dedicated Development Team',
        '24/7 Premium Support',
        'Custom Trial Period',
        'Enterprise-grade Infrastructure',
        'Custom Security Protocols',
        '99.99%+ Uptime Guarantee',
        'Full Compliance & Certification',
        'Unlimited Customization',
        'Dedicated Infrastructure',
        'Custom SLA Agreements',
        'On-site Training & Support',
        'Long-term Partnership',
        'Exclusive Technology Access'
      ],
      icon: <Infinity className="w-8 h-8" />,
      variant: 'quantum-futuristic' as const,
      popular: false,
      cta: 'Contact Sales',
      highlight: false
    }
  ];

  // Popular services showcase
  const popularServices = allServices.filter(service => service.popular).slice(0, 6);

  return (
    <>
      <Head>
        <title>Revolutionary 2026 Pricing | Zion Tech Group</title>
        <meta name="description" content="Discover our revolutionary 2026 pricing for AI consciousness simulation, quantum computing, metaverse development, and enterprise solutions. Transform your business with next-generation technology." />
        <meta name="keywords" content="AI pricing, quantum computing pricing, metaverse development pricing, enterprise IT pricing, 2026 technology pricing" />
        <meta property="og:title" content="Revolutionary 2026 Pricing | Zion Tech Group" />
        <meta property="og:description" content="Revolutionary 2026 pricing for cutting-edge technology solutions. AI, quantum computing, and enterprise innovations." />
        <meta property="og:url" content="https://ziontechgroup.com/revolutionary-2026-pricing" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/revolutionary-2026-pricing" />
      </Head>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 animate-pulse"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.1),transparent_50%)]"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Revolutionary 2026
              <br />
              <span className="text-6xl md:text-8xl">Pricing</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Access cutting-edge AI consciousness simulation, quantum computing, metaverse development, 
              and enterprise solutions at revolutionary prices that will transform your business.
            </p>
            
            {/* Pricing Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-12">
              <span className={`text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className="relative inline-flex h-8 w-16 items-center rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 transition-colors"
              >
                <span
                  className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                    billingCycle === 'yearly' ? 'translate-x-8' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-lg ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
                Yearly
                <span className="ml-2 text-sm text-cyan-400">Save 20%</span>
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#pricing" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30">
                <DollarSign className="w-5 h-5 mr-2" />
                View Pricing
              </Link>
              <Link href="/contact" className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-full hover:bg-cyan-400 hover:text-black transition-all duration-300">
                <Phone className="w-5 h-5 mr-2" />
                Contact Sales
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-cyan-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-10 w-24 h-24 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-500"></div>
      </section>

      {/* Contact Bar */}
      <section className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 text-white py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              <span className="text-sm">{contactInfo.mobile}</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              <span className="text-sm">{contactInfo.email}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-2" />
              <span className="text-sm">{contactInfo.address}</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm font-semibold">Ready to Get Started?</span>
            <Link href="/contact" className="bg-white text-purple-600 px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Revolutionary <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Service Categories</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Explore our comprehensive range of cutting-edge 2026 innovations across multiple technology domains
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 p-8 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30">
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} mb-6`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                      {category.name}
                    </h3>
                    
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {category.description}
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      {category.services.map((service, serviceIndex) => (
                        <div key={serviceIndex} className="flex items-center text-gray-300">
                          <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          <span className="text-sm">{service}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="text-center">
                      <div className="text-2xl font-bold text-cyan-400 mb-2">
                        {category.avgPrice}
                      </div>
                      <div className="text-sm text-green-400 font-semibold">
                        {category.savings}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section id="pricing" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Revolutionary Plan</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Flexible pricing options designed to scale with your business needs and innovation goals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative ${tier.highlight ? 'lg:-mt-8 lg:mb-8' : ''}`}
              >
                {tier.highlight && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className={`relative overflow-hidden rounded-2xl p-8 border transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 ${
                  tier.highlight 
                    ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-cyan-500 shadow-2xl shadow-cyan-500/25' 
                    : 'bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:border-cyan-500/50'
                }`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="text-center mb-6">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-600 mb-4`}>
                        {tier.icon}
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {tier.name}
                      </h3>
                      
                      <p className="text-gray-400 text-sm mb-4">
                        {tier.description}
                      </p>
                      
                      <div className="mb-4">
                        <div className="text-4xl font-bold text-white">
                          {typeof tier.price === 'number' ? `$${tier.price}` : tier.price}
                          {typeof tier.price === 'number' && <span className="text-lg text-gray-400">{tier.period}</span>}
                        </div>
                        {tier.savings && (
                          <div className="text-sm text-green-400 font-semibold mt-1">
                            {tier.savings}
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="space-y-4 mb-8">
                      {tier.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start">
                          <Check className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                                         <button
                       className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 ${
                         tier.highlight
                           ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                           : 'bg-gray-700 text-white hover:bg-gray-600'
                       }`}
                     >
                       {tier.cta}
                     </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Services Showcase */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">Revolutionary Services</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our most popular and innovative 2026 services that are transforming industries worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-3xl">{service.icon}</div>
                      <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                        <Star className="w-3 h-3 mr-1" />
                        Popular
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {service.name}
                    </h3>
                    
                    <p className="text-gray-400 mb-4 text-sm line-clamp-3">
                      {service.description}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-xl font-bold text-cyan-400">
                        {service.price}
                        <span className="text-sm text-gray-400">{service.period}</span>
                      </div>
                      <div className="flex items-center text-yellow-400">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="ml-1 text-sm text-gray-400">{service.rating}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">
                        {service.customers.toLocaleString()} customers
                      </div>
                      <Link 
                        href={service.link}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group-hover:translate-x-1 transform duration-200"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business with 2026 Innovations?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of forward-thinking companies already leveraging our revolutionary AI, quantum computing, 
              and emerging technology solutions to gain competitive advantages and drive unprecedented growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30">
                <Phone className="w-5 h-5 mr-2" />
                Get Started Today
              </Link>
              <Link href="/ultimate-2026-services-showcase" className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-purple-600 transition-all duration-300">
                <Rocket className="w-5 h-5 mr-2" />
                Explore All Services
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">500%+</div>
                <div className="text-white/80">Average ROI</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-white/80">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                <div className="text-white/80">Uptime Guarantee</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Contact */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Let's Build the Future Together
              </h3>
              <p className="text-gray-400 mb-8 text-lg">
                Our team of experts is ready to help you implement these revolutionary 2026 innovations 
                and transform your business operations with cutting-edge technology.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center text-gray-300">
                  <Phone className="w-5 h-5 mr-3 text-cyan-400" />
                  <span>{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Mail className="w-5 h-5 mr-3 text-cyan-400" />
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="w-5 h-5 mr-3 text-cyan-400" />
                  <span>{contactInfo.address}</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-2xl font-bold text-white mb-6">Why Choose Zion Tech Group?</h4>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Check className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="text-white font-semibold mb-1">First-to-Market Innovations</h5>
                    <p className="text-gray-400">Access cutting-edge technology before your competitors</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="text-white font-semibold mb-1">Proven ROI</h5>
                    <p className="text-gray-400">Average customers see 300-500% return on investment</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="text-white font-semibold mb-1">Expert Implementation</h5>
                    <p className="text-gray-400">Full-service deployment and ongoing support</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="text-white font-semibold mb-1">Future-Proof Technology</h5>
                    <p className="text-gray-400">Built for the challenges and opportunities of tomorrow</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}