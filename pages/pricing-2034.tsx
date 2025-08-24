import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Check, Star, Zap, Shield, Users, Globe, ArrowRight, ExternalLink, TrendingUp, Clock, Target, Building, Rocket, Award, DollarSign, ChartBar, Lock, Cpu, Database, Cloud, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Settings, Code, BookOpen, Activity, Crown, Gem, Infinity, Brain, Atom, Microscope, Phone, Mail, MapPin, ShoppingCart, UserCheck, Video, LockIcon, GlobeIcon, CpuIcon
} from 'lucide-react';
import { realMarketServices } from '../data/2024-real-market-services';
import { aiEmergingTechServices } from '../data/2024-ai-emerging-tech-services';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

export default function Pricing2034Page() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  // Enhanced service categories with pricing
  const serviceCategories = [
    {
      name: 'Revolutionary AI Services',
      description: 'AI consciousness evolution and emotional intelligence',
      services: ['AI Business Intelligence Pro', 'AI Video Generation Platform', 'AI-Powered Cybersecurity', 'AI Drug Discovery Platform'],
      avgPrice: '$1,399/month',
      savings: 'Save 60-80% vs. competitors',
      icon: Brain,
      color: 'from-violet-500 to-purple-500'
    },
    {
      name: 'Quantum & Emerging Tech',
      description: 'Quantum computing and DNA-based solutions',
      services: ['Quantum Machine Learning', 'Blockchain AI Platform', 'Edge AI Computing', 'AI Climate Modeling'],
      avgPrice: '$1,199/month',
      savings: 'Save 70-85% vs. competitors',
      icon: Atom,
      color: 'from-indigo-500 to-blue-500'
    },
    {
      name: 'Enterprise IT Solutions',
      description: 'Autonomous operations and zero-trust security',
      services: ['API Security & Monitoring', 'Customer Success Automation', 'HR Automation Suite', 'Project Management AI'],
      avgPrice: '$299/month',
      savings: 'Save 50-70% vs. competitors',
      icon: Cpu,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Business Automation',
      description: 'Streamline business operations',
      services: ['E-commerce Automation', 'Marketing Automation Suite', 'Financial Analytics Platform', 'Legal Document Automation'],
      avgPrice: '$319/month',
      savings: 'Save 40-60% vs. competitors',
      icon: ShoppingCart,
      color: 'from-teal-500 to-emerald-500'
    },
    {
      name: 'Robotics & Automation',
      description: 'Intelligent automation solutions',
      services: ['Autonomous Robotics Platform', 'AI Content Generator Elite', 'AI Guardrails Suite', 'AI Business Intelligence'],
      avgPrice: '$699/month',
      savings: 'Save 55-75% vs. competitors',
      icon: Rocket,
      color: 'from-green-500 to-yellow-500'
    },
    {
      name: 'Research & Development',
      description: 'Breakthrough technologies and innovations',
      services: ['Quantum DNA Computing', 'Space Mining Automation', 'Metaverse AI Development', 'Holographic Events'],
      avgPrice: '$21,999/month',
      savings: 'Save 65-80% vs. competitors',
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
        'Access to 200+ Services',
        'Advanced AI Features',
        'Priority Support (4-hour response)',
        '60-Day Free Trial',
        'Advanced Analytics & Reporting',
        'Phone & Email Support',
        '99.9% Uptime Guarantee',
        'Advanced Security Features',
        'API Access (10,000 calls/month)',
        'Dedicated Account Manager',
        'Custom Integrations',
        'White-label Solutions'
      ],
      popular: true,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      name: 'Enterprise',
      description: 'For large organizations and enterprises',
      price: billingCycle === 'monthly' ? 999 : 799,
      period: billingCycle === 'monthly' ? '/month' : '/month',
      savings: billingCycle === 'yearly' ? 'Save 20%' : '',
      features: [
        'Access to ALL Services',
        'Full AI Suite & Custom Models',
        '24/7 Premium Support',
        '90-Day Free Trial',
        'Enterprise Analytics & BI',
        'Dedicated Support Team',
        '99.99% Uptime Guarantee',
        'Enterprise Security & Compliance',
        'Unlimited API Access',
        'Custom Development',
        'On-premise Deployment',
        'SLA Guarantees',
        'Training & Certification'
      ],
      popular: false,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  // All services for comprehensive pricing
  const allServices = [...realMarketServices, ...aiEmergingTechServices];

  return (
    <>
      <Head>
        <title>Pricing 2034 - Zion Tech Group | Revolutionary Technology Solutions</title>
        <meta name="description" content="Discover our competitive pricing for cutting-edge AI, quantum computing, and emerging technology solutions. Start your free trial today." />
        <meta name="keywords" content="AI pricing, quantum computing pricing, technology solutions pricing, business automation pricing, enterprise IT pricing" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Pricing 2034 - Zion Tech Group Revolutionary Technology Solutions" />
        <meta property="og:description" content="Competitive pricing for cutting-edge AI, quantum computing, and emerging technology solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/pricing-2034" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pricing 2034 - Zion Tech Group Revolutionary Technology Solutions" />
        <meta name="twitter:description" content="Competitive pricing for cutting-edge AI, quantum computing, and emerging technology solutions." />
        <link rel="canonical" href="https://ziontechgroup.com/pricing-2034" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10">
          {/* Header */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
                Revolutionary Pricing
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Experience the future of technology with our competitive pricing. 
                Start your free trial and transform your business today.
              </p>
              
              {/* Billing Toggle */}
              <div className="flex items-center justify-center space-x-4 mb-8">
                <span className={`text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
                  Monthly
                </span>
                <button
                  onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                  className={`relative w-16 h-8 rounded-full transition-colors duration-200 ${
                    billingCycle === 'yearly' ? 'bg-cyan-500' : 'bg-gray-600'
                  }`}
                >
                  <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform duration-200 ${
                    billingCycle === 'yearly' ? 'translate-x-8' : 'translate-x-1'
                  }`}></div>
                </button>
                <span className={`text-lg ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
                  Yearly <span className="text-cyan-400 font-semibold">(Save 20%)</span>
                </span>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {[
                  { label: 'Total Services', value: allServices.length.toString(), icon: Rocket },
                  { label: 'Happy Customers', value: '50K+', icon: Users },
                  { label: 'Success Rate', value: '99.9%', icon: Check },
                  { label: 'Global Reach', value: '45+ Countries', icon: Globe }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
                  >
                    <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Pricing Tiers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-20"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {pricingTiers.map((tier, index) => (
                  <motion.div
                    key={tier.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`relative p-8 rounded-2xl border transition-all duration-300 hover:scale-105 ${
                      tier.popular 
                        ? 'border-cyan-500 bg-gradient-to-br from-cyan-500/10 to-blue-500/10' 
                        : 'border-white/20 bg-white/5 hover:border-cyan-500/50 hover:bg-cyan-500/5'
                    }`}
                  >
                    {tier.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    )}

                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                      <p className="text-gray-400 mb-6">{tier.description}</p>
                      <div className="mb-4">
                        <span className="text-4xl font-bold text-white">${tier.price}</span>
                        <span className="text-gray-400">{tier.period}</span>
                      </div>
                      {tier.savings && (
                        <div className="text-cyan-400 font-semibold">{tier.savings}</div>
                      )}
                    </div>

                    <ul className="space-y-4 mb-8">
                      {tier.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-3">
                          <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={() => setSelectedPlan(tier.name)}
                      className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                        tier.popular
                          ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600'
                          : 'border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white'
                      }`}
                    >
                      Get Started
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Service Categories Pricing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-20"
            >
              <h2 className="text-4xl font-bold text-white text-center mb-12">
                Service Category Pricing
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {serviceCategories.map((category, index) => (
                  <motion.div
                    key={category.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                        <category.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">{category.name}</h3>
                        <p className="text-sm text-gray-400">{category.description}</p>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-2xl font-bold text-white">{category.avgPrice}</div>
                      <div className="text-sm text-green-400 font-semibold">{category.savings}</div>
                    </div>

                    <div className="space-y-2 mb-4">
                      {category.services.map((service, idx) => (
                        <div key={idx} className="text-sm text-gray-300">
                          • {service}
                        </div>
                      ))}
                    </div>

                    <a
                      href="/services"
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                    >
                      Learn More <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-12 backdrop-blur-sm">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Ready to Get Started?
                </h3>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Join thousands of businesses already leveraging our cutting-edge technology solutions. 
                  Start your free trial today and experience the future of business automation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href="/contact"
                    className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 text-lg"
                  >
                    Start Your Free Trial
                  </a>
                  <a
                    href="/services"
                    className="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-200 text-lg"
                  >
                    View All Services
                  </a>
                </div>
                <div className="mt-6 text-sm text-gray-400">
                  <Phone className="w-4 h-4 inline mr-2" />
                  Need help? Call us at {contactInfo.mobile}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}