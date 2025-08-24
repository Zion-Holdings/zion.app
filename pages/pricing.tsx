import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Check, Star, Zap, Shield, Users, Globe, 
  ArrowRight, DollarSign, Clock, Target,
  Brain, Atom, Rocket, Cpu, Microscope
} from 'lucide-react';
import UltraFuturisticNavigation2030 from '../components/layout/UltraFuturisticNavigation2030';
import UltraFuturisticFooter2030 from '../components/layout/UltraFuturisticFooter2030';
import UltraFuturisticBackground2030 from '../components/backgrounds/UltraFuturisticBackground2030';

export default function PricingPage() {
  const pricingTiers = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      icon: Target,
      color: 'from-green-500 to-emerald-500',
      features: [
        'Basic AI Integration',
        '5 API Calls per minute',
        'Email Support',
        'Basic Analytics',
        'Standard Security',
        '1 User License'
      ],
      popular: false,
      cta: 'Get Started',
      ctaColor: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing businesses and teams',
      icon: Zap,
      color: 'from-blue-500 to-cyan-500',
      features: [
        'Advanced AI Capabilities',
        '25 API Calls per minute',
        'Priority Support',
        'Advanced Analytics',
        'Enhanced Security',
        '5 User Licenses',
        'Custom Integrations',
        'Performance Monitoring'
      ],
      popular: true,
      cta: 'Start Free Trial',
      ctaColor: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Enterprise',
      price: '$999',
      period: '/month',
      description: 'For large organizations and enterprises',
      icon: Shield,
      color: 'from-purple-500 to-pink-500',
      features: [
        'Full AI Suite Access',
        'Unlimited API Calls',
        '24/7 Dedicated Support',
        'Enterprise Analytics',
        'Maximum Security',
        'Unlimited Users',
        'Custom Development',
        'SLA Guarantee',
        'On-Premise Options',
        'White-Label Solutions'
      ],
      popular: false,
      cta: 'Contact Sales',
      ctaColor: 'from-purple-500 to-pink-500'
    }
  ];

  const serviceCategories = [
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-violet-600 to-purple-600',
      services: [
        { name: 'AI Consciousness Platform', price: '$1,999/month' },
        { name: 'Emotional Intelligence AI', price: '$1,299/month' },
        { name: 'AI Creativity Orchestrator', price: '$1,799/month' },
        { name: 'Autonomous Business Manager', price: '$3,999/month' }
      ]
    },
    {
      title: 'Quantum Computing',
      icon: Atom,
      color: 'from-indigo-600 to-blue-600',
      services: [
        { name: 'Quantum Security Gateway', price: '$3,999/month' },
        { name: 'Quantum Learning Platform', price: '$899/month' },
        { name: 'Quantum Trading Platform', price: '$4,999/month' },
        { name: 'Quantum Cloud Infrastructure', price: '$4,999/month' }
      ]
    },
    {
      title: 'Biotechnology',
      icon: Microscope,
      color: 'from-green-600 to-emerald-600',
      services: [
        { name: 'DNA Computing Platform', price: '$5,999/month' },
        { name: 'Personalized Nutrition AI', price: '$599/month' },
        { name: 'Predictive Health Analytics', price: '$1,599/month' },
        { name: 'Research Automation', price: '$1,999/month' }
      ]
    },
    {
      title: 'Enterprise IT',
      icon: Cpu,
      color: 'from-blue-600 to-cyan-600',
      services: [
        { name: 'Autonomous DevOps Platform', price: '$2,999/month' },
        { name: 'IT Operations Center', price: '$6,999/month' },
        { name: 'AI-Powered Security', price: '$2,999/month' },
        { name: 'Intelligent Data Governance', price: '$7,999/month' }
      ]
    },
    {
      title: 'Space Technology',
      icon: Rocket,
      color: 'from-teal-600 to-emerald-600',
      services: [
        { name: 'Space Mining Automation', price: '$8,999/month' },
        { name: 'Metaverse Platform', price: '$2,499/month' },
        { name: 'Quantum Research Platform', price: '$3,999/month' },
        { name: 'AI Research Assistant', price: '$899/month' }
      ]
    }
  ];

  const benefits = [
    {
      icon: Check,
      title: '21-Day Free Trial',
      description: 'Try any service risk-free for 21 days'
    },
    {
      icon: Shield,
      title: '99.99% Uptime Guarantee',
      description: 'Enterprise-grade reliability and performance'
    },
    {
      icon: Users,
      title: 'Expert Support Team',
      description: '24/7 access to technology professionals'
    },
    {
      icon: Zap,
      title: 'Instant Deployment',
      description: 'Get started in minutes, not months'
    },
    {
      icon: Globe,
      title: 'Global Infrastructure',
      description: 'Worldwide coverage and compliance'
    },
    {
      icon: Star,
      title: 'Proven ROI',
      description: 'Average 300%+ return on investment'
    }
  ];

  return (
    <UltraFuturisticBackground2030>
      <Head>
        <title>Zion Tech Group Pricing - Revolutionary 2029 Technology Services | AI, Quantum Computing, Space Tech</title>
        <meta name="description" content="Explore Zion Tech Group's competitive pricing for revolutionary 2029 technology services including AI consciousness, quantum computing, space mining, and biotechnology solutions." />
        <meta name="keywords" content="Zion Tech Group pricing, AI services cost, quantum computing pricing, space technology pricing, biotechnology pricing, enterprise IT pricing" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Zion Tech Group Pricing - Revolutionary 2029 Technology Services" />
        <meta property="og:description" content="Explore our competitive pricing for revolutionary 2029 technology services including AI consciousness, quantum computing, and more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/pricing" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group Pricing - Revolutionary 2029 Technology Services" />
        <meta name="twitter:description" content="Explore our competitive pricing for revolutionary 2029 technology services." />
        <meta name="twitter:image" content="https://ziontechgroup.com/twitter-image.jpg" />
        
        <link rel="canonical" href="https://ziontechgroup.com/pricing" />
      </Head>

      <UltraFuturisticNavigation2030 />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Transparent Pricing
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12">
              Choose the perfect plan for your business. All our revolutionary 2029 technology services come with a 21-day free trial and guaranteed ROI.
            </p>
            
            {/* Pricing Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              <span className="text-gray-300">Monthly</span>
              <div className="relative">
                <div className="w-16 h-8 bg-gray-700 rounded-full p-1">
                  <div className="w-6 h-6 bg-cyan-500 rounded-full transform translate-x-8 transition-transform duration-200"></div>
                </div>
              </div>
              <span className="text-gray-300">Annual <span className="text-cyan-400">(Save 20%)</span></span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative ${tier.popular ? 'scale-105' : ''}`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 backdrop-blur-sm h-full">
                  <div className="text-center mb-8">
                    <div className={`w-20 h-20 bg-gradient-to-r ${tier.color} rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
                      <tier.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <div className="flex items-baseline justify-center mb-4">
                      <span className="text-4xl font-bold text-white">{tier.price}</span>
                      <span className="text-gray-400 ml-1">{tier.period}</span>
                    </div>
                    <p className="text-gray-300">{tier.description}</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-4 bg-gradient-to-r ${tier.ctaColor} text-white rounded-xl font-semibold text-lg hover:opacity-90 transition-all duration-200 flex items-center justify-center`}
                  >
                    {tier.cta}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories Pricing */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Service-Specific Pricing
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore detailed pricing for our revolutionary technology services across all categories.
            </p>
          </motion.div>

          <div className="space-y-12">
            {serviceCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-900/30 to-gray-800/30 border border-cyan-500/20 rounded-2xl p-8 backdrop-blur-sm"
              >
                <div className="flex items-center mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mr-6`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">{category.title}</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="group cursor-pointer"
                    >
                      <div className="p-6 rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                        <h4 className="text-lg font-semibold text-white mb-3">{service.name}</h4>
                        <div className="text-2xl font-bold text-cyan-400 mb-4">{service.price}</div>
                        <button className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors flex items-center group">
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Why Choose Zion Tech Group?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're committed to delivering exceptional value and ensuring your success with our revolutionary technology solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business with
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                {' '}Revolutionary Technology?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your 21-day free trial today and experience the future of business technology. No credit card required.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-xl font-semibold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-200"
              >
                Contact Sales
              </motion.button>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-400 mb-4">Questions about pricing?</p>
              <div className="flex items-center justify-center space-x-6 text-gray-300">
                <div className="flex items-center space-x-2">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <UltraFuturisticFooter2030 />
    </UltraFuturisticBackground2030>
  );
}
