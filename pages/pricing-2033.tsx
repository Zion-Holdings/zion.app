import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Check, Star, Zap, Shield, Users, Globe, ArrowRight, ExternalLink, TrendingUp, Clock, Target, Building, Rocket, Award, DollarSign, ChartBar, Lock, Cpu, Database, Cloud, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Settings, Code, BookOpen, Activity, Crown, Gem, Infinity, Brain, Atom, Microscope, Phone, Mail, MapPin
} from 'lucide-react';
import { cuttingEdge2033Services } from '../data/2033-cutting-edge-innovations';
import { innovativeITServices2033 } from '../data/2033-innovative-it-services';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

export default function Pricing2033Page() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  // Enhanced service categories with pricing
  const serviceCategories = [
    {
      name: 'Revolutionary AI Services',
      description: 'AI consciousness evolution and emotional intelligence',
      services: ['AI Consciousness Evolution', 'AI Emotional Intelligence', 'AI Creativity Orchestrator', 'AI Autonomous Business Manager'],
      avgPrice: '$11,499/month',
      savings: 'Save 60-80% vs. competitors',
      icon: Brain,
      color: 'from-violet-500 to-purple-500'
    },
    {
      name: 'Quantum & Emerging Tech',
      description: 'Quantum computing and DNA-based solutions',
      services: ['Quantum DNA Computing', 'Quantum Internet Security', 'Quantum Financial Trading', 'Quantum Creativity Studio'],
      avgPrice: '$19,999/month',
      savings: 'Save 70-85% vs. competitors',
      icon: Atom,
      color: 'from-indigo-500 to-blue-500'
    },
    {
      name: 'Enterprise IT Solutions',
      description: 'Autonomous operations and zero-trust security',
      services: ['Autonomous DevOps', 'Zero Trust Architecture', 'Edge Computing Orchestration', 'AI IT Operations Center'],
      avgPrice: '$649/month',
      savings: 'Save 50-70% vs. competitors',
      icon: Cpu,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Space & Metaverse Tech',
      description: 'Space mining and metaverse development',
      services: ['Space Mining Automation', 'Metaverse AI Development', 'AI Health Analytics', 'Holographic Events'],
      avgPrice: '$14,999/month',
      savings: 'Save 65-80% vs. competitors',
      icon: Rocket,
      color: 'from-teal-500 to-emerald-500'
    },
    {
      name: 'Innovative Micro SAAS',
      description: 'Cutting-edge solutions for every business',
      services: ['AI Business Intelligence', 'Quantum-Secure Communication', 'AI Customer Success', 'Blockchain Supply Chain'],
      avgPrice: '$374/month',
      savings: 'Save 40-60% vs. competitors',
      icon: Target,
      color: 'from-green-500 to-yellow-500'
    },
    {
      name: 'Research & Development',
      description: 'Breakthrough technologies and innovations',
      services: ['Neuromorphic Computing', 'Photonic Computing', 'Swarm Robotics', 'Biotech Automation'],
      avgPrice: '$1,099/month',
      savings: 'Save 55-75% vs. competitors',
      icon: Microscope,
      color: 'from-orange-500 to-red-500'
    }
  ];

  // Enhanced pricing tiers with more realistic and comprehensive offerings
  const pricingTiers = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses and startups',
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
        'Basic Security Features',
        'API Access (1000 calls/month)',
        'Community Support'
      ],
      popular: false,
      color: 'from-gray-500 to-gray-600'
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses and teams',
      price: billingCycle === 'monthly' ? 299 : 239,
      period: billingCycle === 'monthly' ? '/month' : '/month',
      savings: billingCycle === 'yearly' ? 'Save 20%' : '',
      features: [
        'Access to 200+ Advanced Services',
        'Advanced AI Integration',
        'Priority Support (24/7)',
        '60-Day Free Trial',
        'Advanced Analytics Dashboard',
        'Phone & Email Support',
        '99.9% Uptime Guarantee',
        'Advanced Security Features',
        'API Access (10,000 calls/month)',
        'Dedicated Account Manager',
        'Custom Integrations',
        'Advanced Reporting'
      ],
      popular: true,
      color: 'from-purple-500 to-cyan-500'
    },
    {
      name: 'Enterprise',
      description: 'For large organizations and enterprises',
      price: billingCycle === 'monthly' ? 999 : 799,
      period: billingCycle === 'monthly' ? '/month' : '/month',
      savings: billingCycle === 'yearly' ? 'Save 20%' : '',
      features: [
        'Access to All 500+ Services',
        'Full AI & Quantum Integration',
        'Premium Support (24/7)',
        '90-Day Free Trial',
        'Enterprise Analytics Suite',
        'Dedicated Support Team',
        '99.99% Uptime Guarantee',
        'Enterprise Security Features',
        'Unlimited API Access',
        'Dedicated Success Manager',
        'Custom Development',
        'Advanced Compliance',
        'White-label Solutions',
        'SLA Guarantees'
      ],
      popular: false,
      color: 'from-blue-500 to-indigo-500'
    }
  ];

  // Popular services with pricing
  const popularServices = [
    {
      name: 'AI Consciousness Evolution Platform',
      price: '$24,999/month',
      description: 'Develop genuine AI consciousness through advanced neural architecture',
      category: 'AI & Consciousness',
      features: ['Multi-dimensional consciousness mapping', 'Emotional intelligence evolution', 'Self-awareness development'],
      savings: 'Save 70% vs. competitors'
    },
    {
      name: 'Quantum DNA Computing Platform',
      price: '$35,999/month',
      description: 'Breakthrough platform combining quantum computing with DNA-based computation',
      category: 'Quantum & Biotech',
      features: ['DNA-based quantum algorithms', 'Biological quantum entanglement', 'DNA memory systems'],
      savings: 'Save 75% vs. competitors'
    },
    {
      name: 'Space Mining Automation Platform',
      price: '$45,999/month',
      description: 'Revolutionary platform for automated asteroid mining and resource extraction',
      category: 'Space Technology',
      features: ['Asteroid identification and mapping', 'Automated mining operations', 'Resource extraction algorithms'],
      savings: 'Save 80% vs. competitors'
    },
    {
      name: 'AI Business Intelligence Suite',
      price: '$299/month',
      description: 'Comprehensive business intelligence platform powered by artificial intelligence',
      category: 'Micro SAAS',
      features: ['AI-powered analytics', 'Predictive insights', 'Automated reporting'],
      savings: 'Save 50% vs. competitors'
    }
  ];

  return (
    <>
      <Head>
        <title>2033 Revolutionary Technology Pricing | Zion Tech Group - AI Consciousness, Quantum DNA Computing, Space Mining</title>
        <meta name="description" content="Discover competitive pricing for Zion Tech Group's revolutionary 2033 technology solutions. From AI consciousness evolution to quantum DNA computing and space mining automation." />
        <meta name="keywords" content="AI consciousness pricing, quantum DNA computing cost, space mining automation price, neuromorphic computing pricing, photonic computing cost, swarm robotics pricing" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="2033 Revolutionary Technology Pricing | Zion Tech Group" />
        <meta property="og:description" content="Competitive pricing for revolutionary AI consciousness, quantum DNA computing, and space mining automation solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/pricing-2033" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="2033 Revolutionary Technology Pricing | Zion Tech Group" />
        <meta name="twitter:description" content="Competitive pricing for revolutionary AI consciousness, quantum DNA computing, and space mining automation solutions." />
        <link rel="canonical" href="https://ziontechgroup.com/pricing-2033" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        {/* Header */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-6"
              >
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium">
                  <Crown className="w-4 h-4" />
                  <span>2033 Revolutionary Pricing</span>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              >
                <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Revolutionary Technology
                </span>
                <br />
                <span className="text-white">Pricing</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8"
              >
                Experience the future of technology with our revolutionary AI consciousness, quantum DNA computing, and space mining automation solutions at competitive prices.
              </motion.p>

              {/* Billing Toggle */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-center justify-center space-x-4 mb-8"
              >
                <span className={`text-sm ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
                  Monthly
                </span>
                <button
                  onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                  className="relative w-16 h-8 bg-gray-700 rounded-full p-1 transition-colors duration-200"
                >
                  <div
                    className={`w-6 h-6 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full transition-transform duration-200 ${
                      billingCycle === 'yearly' ? 'translate-x-8' : 'translate-x-0'
                    }`}
                  />
                </button>
                <span className={`text-sm ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
                  Yearly
                  <span className="ml-2 px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
                    Save 20%
                  </span>
                </span>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Pricing Tiers */}
        <div className="relative py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative ${
                    tier.popular ? 'scale-105' : ''
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white text-sm font-medium rounded-full">
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className={`relative bg-gray-900/50 border border-purple-500/30 rounded-2xl p-8 h-full backdrop-blur-sm ${
                    tier.popular ? 'border-purple-500/50 shadow-2xl shadow-purple-500/25' : ''
                  }`}>
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                      <p className="text-gray-400 mb-6">{tier.description}</p>
                      
                      <div className="mb-4">
                        <span className="text-4xl font-bold text-white">${tier.price}</span>
                        <span className="text-gray-400">{tier.period}</span>
                      </div>
                      
                      {tier.savings && (
                        <div className="text-green-400 text-sm font-medium">{tier.savings}</div>
                      )}
                    </div>

                    <ul className="space-y-4 mb-8">
                      {tier.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={() => setSelectedPlan(tier.name)}
                      className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
                        tier.popular
                          ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:from-purple-700 hover:to-cyan-700 shadow-lg'
                          : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-purple-500/30'
                      }`}
                    >
                      Get Started
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Service Categories Pricing */}
        <div className="relative py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Service Category Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive service categories with competitive pricing and significant savings compared to market alternatives.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceCategories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-900/50 border border-purple-500/30 rounded-2xl p-6 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{category.name}</h3>
                      <p className="text-sm text-gray-400">{category.description}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="text-3xl font-bold text-purple-400 mb-2">{category.avgPrice}</div>
                    <div className="text-green-400 text-sm font-medium">{category.savings}</div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {category.services.map((service, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{service}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="/services"
                    className="inline-flex items-center space-x-2 text-purple-400 hover:text-cyan-400 transition-colors duration-200 text-sm font-medium"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Popular Services */}
        <div className="relative py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Popular Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our most requested revolutionary technology solutions with competitive pricing and exceptional value.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {popularServices.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-900/50 border border-purple-500/30 rounded-2xl p-6 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                      <p className="text-gray-400 text-sm mb-3">{service.description}</p>
                      <div className="inline-flex items-center px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">
                        {service.category}
                      </div>
                    </div>
                    <div className="text-right ml-4">
                      <div className="text-2xl font-bold text-purple-400">{service.price}</div>
                      <div className="text-green-400 text-xs">{service.savings}</div>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex space-x-3">
                    <a
                      href="/contact"
                      className="flex-1 px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white text-sm font-medium rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-200 text-center"
                    >
                      Get Quote
                    </a>
                    <a
                      href={`tel:${contactInfo.mobile}`}
                      className="px-4 py-2 bg-gray-800/50 border border-purple-500/30 text-purple-300 text-sm font-medium rounded-lg hover:bg-gray-700/50 hover:border-purple-500/50 transition-all duration-200"
                    >
                      Call Now
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="relative py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-purple-500/30 rounded-2xl p-12 backdrop-blur-sm text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join the future of technology with our revolutionary AI, quantum computing, and cutting-edge solutions. 
                Get in touch with our experts to discuss your transformation journey and pricing options.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-200 shadow-lg hover:shadow-purple-500/25"
                >
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </a>
                
                <a
                  href={`tel:${contactInfo.mobile}`}
                  className="px-8 py-4 bg-gray-800/50 border border-purple-500/30 text-purple-300 font-medium rounded-lg hover:bg-gray-700/50 hover:border-purple-500/50 transition-all duration-200"
                >
                  <Phone className="w-5 h-5 mr-2 inline" />
                  Call Now
                </a>
              </div>

              {/* Contact Info */}
              <div className="mt-12 pt-8 border-t border-purple-500/20">
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-gray-300">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-purple-400" />
                    <span>{contactInfo.mobile}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-purple-400" />
                    <span>{contactInfo.email}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-purple-400" />
                    <span>{contactInfo.address}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}