import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  CheckCircle, ArrowRight, Star, TrendingUp, Phone, 
  Zap, DollarSign, Shield, Mail, MapPin, Rocket, 
  Brain, Sparkles, Clock, Users, Target, Award,
  Globe, Atom, Factory, Building2, LockKeyhole,
  Eye, Car, Leaf, Wifi, ShieldCheck, Crown
} from 'lucide-react';
import UltraFuturisticNavigation2028 from '../components/layout/UltraFuturisticNavigation2028';
import UltraFuturisticFooter2028 from '../components/layout/UltraFuturisticFooter2028';
import { futuristic2028Services } from '../data/2028-futuristic-innovations';
import { emergingTech2028Services } from '../data/2028-emerging-tech-services';

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
    price: '$999',
    period: '/month',
    color: 'from-purple-600 to-blue-600',
    features: [
      'Access to 5 core services',
      'Basic AI integration',
      'Standard support',
      'Monthly reports',
      'Basic analytics'
    ],
    popular: false
  },
  {
    name: 'Professional',
    description: 'Ideal for growing businesses',
    price: '$2,999',
    period: '/month',
    color: 'from-blue-600 to-cyan-600',
    features: [
      'Access to 15 services',
      'Advanced AI capabilities',
      'Priority support',
      'Real-time analytics',
      'Custom integrations',
      'Dedicated account manager'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    description: 'For large organizations',
    price: '$9,999',
    period: '/month',
    color: 'from-cyan-600 to-emerald-600',
    features: [
      'Access to all services',
      'Full AI suite',
      '24/7 premium support',
      'Custom development',
      'White-label solutions',
      'Dedicated team',
      'SLA guarantees'
    ],
    popular: false
  },
  {
    name: 'Ultimate',
    description: 'For industry leaders',
    price: 'Custom',
    period: '',
    color: 'from-emerald-600 to-purple-600',
    features: [
      'Everything in Enterprise',
      'Exclusive innovations',
      'Research partnerships',
      'Custom quantum solutions',
      'Global deployment',
      'Executive consulting',
      'Future technology access'
    ],
    popular: false
  }
];

const serviceCategories = [
  {
    title: '🚀 2028 Futuristic Innovations',
    services: futuristic2028Services.slice(0, 4),
    color: 'from-violet-600 to-purple-600'
  },
  {
    title: '⚛️ Quantum & Space Tech',
    services: futuristic2028Services.slice(4, 8),
    color: 'from-indigo-600 to-blue-600'
  },
  {
    title: '🤖 AI & Machine Learning',
    services: emergingTech2028Services.slice(0, 4),
    color: 'from-emerald-600 to-teal-600'
  },
  {
    title: '🏭 Autonomous & Manufacturing',
    services: emergingTech2028Services.slice(4, 8),
    color: 'from-orange-600 to-red-600'
  }
];

const benefits = [
  {
    icon: Rocket,
    title: 'Future-Proof Technology',
    description: 'Stay ahead with cutting-edge innovations that define the next decade'
  },
  {
    icon: Brain,
    title: 'AI-Powered Solutions',
    description: 'Leverage the most advanced artificial intelligence available in 2028'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Military-grade security with quantum encryption and zero-trust architecture'
  },
  {
    icon: Globe,
    title: 'Global Scalability',
    description: 'Deploy anywhere in the world with our cloud-native infrastructure'
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Quantum computing and edge optimization for unprecedented performance'
  },
  {
    icon: Crown,
    title: 'Premium Support',
    description: '24/7 expert support and dedicated account management'
  }
];

export default function Revolutionary2028Pricing() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>Revolutionary 2028 Pricing - Zion Tech Group</title>
        <meta name="description" content="Discover our revolutionary 2028 pricing for cutting-edge futuristic innovations including AI, quantum computing, and autonomous systems." />
        <meta name="keywords" content="2028 pricing, futuristic technology pricing, AI services pricing, quantum computing pricing, Zion Tech Group" />
        <meta property="og:title" content="Revolutionary 2028 Pricing - Zion Tech Group" />
        <meta property="og:description" content="Discover our revolutionary 2028 pricing for cutting-edge futuristic innovations including AI, quantum computing, and autonomous systems." />
        <meta property="og:url" content="https://ziontechgroup.com/revolutionary-2028-pricing" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/revolutionary-2028-pricing" />
      </Head>

      <UltraFuturisticNavigation2028 />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/30 to-cyan-900/30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(147,51,234,0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.3),transparent_50%)]"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Revolutionary 2028
              </span>
              <br />
              <span className="text-white">Pricing</span>
            </h1>
            <p className="text-xl md:text-2xl text-purple-200 mb-8 max-w-4xl mx-auto leading-relaxed">
              Experience the future of technology with transparent, competitive pricing for our revolutionary 2028 innovations. 
              Choose the plan that fits your business needs and budget.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-2xl shadow-purple-500/25 flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Get Custom Quote</span>
              </Link>
              <Link
                href="/2028-services-showcase"
                className="px-8 py-4 border-2 border-purple-500/50 hover:border-purple-400 text-purple-200 hover:text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 flex items-center space-x-2"
              >
                <Rocket className="w-5 h-5" />
                <span>View All Services</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Choose Your <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Pricing Plan</span>
            </h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Flexible pricing options designed to scale with your business growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative ${tier.popular ? 'lg:scale-110' : ''}`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-4 py-2 rounded-full text-sm font-bold flex items-center space-x-2">
                      <Star className="w-4 h-4" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}

                <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-2xl p-8 h-full hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-purple-300 text-sm mb-6">{tier.description}</p>
                    <div className="mb-2">
                      <span className="text-4xl font-bold text-white">{tier.price}</span>
                      <span className="text-purple-300">{tier.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3 text-purple-200">
                        <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="text-center">
                    <Link
                      href="/contact"
                      className={`inline-block w-full px-6 py-3 bg-gradient-to-r ${tier.color} hover:scale-105 text-white font-bold rounded-xl transition-all duration-200 shadow-lg`}
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories with Pricing */}
      <section className="py-20 bg-purple-900/20 border-y border-purple-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Service <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Categories</span>
            </h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Explore our comprehensive range of futuristic services with transparent pricing
            </p>
          </div>

          <div className="space-y-16">
            {serviceCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Category Header */}
                <div className="text-center mb-12">
                  <div className="flex justify-center mb-4">
                    <div className={`w-20 h-20 bg-gradient-to-r ${category.color} rounded-3xl flex items-center justify-center`}>
                      <Rocket className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">{category.title}</h3>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="group relative"
                    >
                      <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-2xl p-6 hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
                        {/* Service Header */}
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div className="text-3xl">{service.icon}</div>
                            <div>
                              <h4 className="text-lg font-bold text-white group-hover:text-purple-200 transition-colors">
                                {service.name}
                              </h4>
                              <p className="text-purple-300 text-sm">{service.tagline}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-xl font-bold text-purple-400">{service.price}</div>
                            <div className="text-purple-300 text-xs">{service.period}</div>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-purple-200 mb-4 leading-relaxed text-sm">{service.description}</p>

                        {/* Market Info */}
                        <div className="grid grid-cols-2 gap-3 mb-4 text-xs">
                          <div className="bg-purple-900/30 rounded-lg p-2">
                            <div className="text-purple-300 mb-1">Market Size</div>
                            <div className="text-white font-semibold">{service.marketSize}</div>
                          </div>
                          <div className="bg-blue-900/30 rounded-lg p-2">
                            <div className="text-purple-300 mb-1">Growth Rate</div>
                            <div className="text-white font-semibold">{service.growthRate}</div>
                          </div>
                        </div>

                        {/* Action Button */}
                        <div className="flex items-center justify-between">
                          <Link
                            href={service.link}
                            className="text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium"
                          >
                            Learn More
                          </Link>
                          <Link
                            href="/contact"
                            className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-200 hover:scale-105 text-sm"
                          >
                            Get Quote
                          </Link>
                        </div>
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
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Zion Tech Group</span>
            </h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Experience the advantages of working with the industry leader in futuristic technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-purple-300 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/30 via-blue-900/30 to-cyan-900/30 border-y border-purple-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-purple-200 mb-8 max-w-3xl mx-auto">
              Get started with our revolutionary 2028 innovations today. 
              Contact us for a custom quote tailored to your business needs.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-2xl shadow-purple-500/25 flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Get Custom Quote</span>
              </Link>
              <Link
                href="/case-studies"
                className="px-8 py-4 border-2 border-purple-500/50 hover:border-purple-400 text-purple-200 hover:text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 flex items-center space-x-2"
              >
                <Target className="w-5 h-5" />
                <span>View Case Studies</span>
              </Link>
            </div>

            {/* Contact Info */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-3 text-purple-200">
                <Phone className="w-5 h-5 text-purple-400" />
                <span>{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-purple-200">
                <Mail className="w-5 h-5 text-purple-400" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-purple-200">
                <MapPin className="w-5 h-5 text-purple-400" />
                <span className="text-sm">{contactInfo.address}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <UltraFuturisticFooter2028 />
    </div>
  );
}