import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Rocket, Brain, Atom, Globe, Zap, Sparkles, Shield, 
  Microscope, DollarSign, Star, TrendingUp, Target,
  Layers, Cpu, Database, Cloud, Lock, ShieldCheck,
  Earth, Factory, Car, Building, GraduationCap, Scale,
  Palette, Camera, Video, Music, Gamepad2, Heart,
  Leaf, Sun, Moon, Wind, Droplets, Mountain,
  Code, Wrench, Smartphone, BarChart3, Phone, Mail, MapPin,
  Check, X
} from 'lucide-react';
import UltraFuturisticNavigation2028 from '../components/layout/UltraFuturisticNavigation2028';
import UltraFuturisticFooter2028 from '../components/layout/UltraFuturisticFooter2028';
import { futuristic2029AIServices } from '../data/2029-futuristic-ai-services';
import { quantumSpace2029Services } from '../data/2029-quantum-space-services';
import { biotechEmerging2029Services } from '../data/2029-biotech-emerging-services';
import { enterpriseIT2029Services } from '../data/2029-enterprise-it-services';

export default function Futuristic2029Pricing() {
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const allServices = [
    ...futuristic2029AIServices,
    ...quantumSpace2029Services,
    ...biotechEmerging2029Services,
    ...enterpriseIT2029Services
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$2,999',
      period: '/month',
      description: 'Perfect for small organizations and research institutions',
      features: [
        'Basic service access',
        'Standard support',
        'Core features',
        'Documentation access',
        'Email support'
      ],
      color: 'from-blue-600 to-cyan-600',
      popular: false
    },
    {
      name: 'Professional',
      price: '$8,999',
      period: '/month',
      description: 'Ideal for growing companies and research teams',
      features: [
        'Advanced service access',
        'Priority support',
        'All features',
        'Custom integrations',
        'Phone & email support',
        'Training sessions',
        'API access'
      ],
      color: 'from-purple-600 to-pink-600',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$24,999',
      period: '/month',
      description: 'For large organizations requiring maximum capabilities',
      features: [
        'Full service access',
        '24/7 dedicated support',
        'Custom development',
        'White-label options',
        'Dedicated account manager',
        'On-site training',
        'Custom compliance',
        'SLA guarantees'
      ],
      color: 'from-red-600 to-orange-600',
      popular: false
    }
  ];

  const serviceCategories = [
    {
      title: '🤖 AI & Consciousness Services',
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
      services: futuristic2029AIServices
    },
    {
      title: '🚀 Quantum Space Technology',
      icon: Rocket,
      color: 'from-blue-600 to-cyan-600',
      services: quantumSpace2029Services
    },
    {
      title: '🧬 Biotechnology & Emerging Tech',
      icon: Microscope,
      color: 'from-green-600 to-emerald-600',
      services: biotechEmerging2029Services
    },
    {
      title: '🏢 Enterprise IT & Security',
      icon: Shield,
      color: 'from-red-600 to-orange-600',
      services: enterpriseIT2029Services
    }
  ];

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
        <title>2029 Futuristic Services Pricing - Zion Tech Group | Revolutionary Technology Solutions</title>
        <meta name="description" content="Explore pricing for Zion Tech Group's revolutionary 2029 services. Quantum AI, space mining, DNA computing, and cutting-edge emerging technologies with competitive pricing." />
        <meta name="keywords" content="2029 technology pricing, quantum AI pricing, space mining pricing, DNA computing pricing, metaverse pricing, Zion Tech Group pricing" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="2029 Futuristic Services Pricing - Zion Tech Group" />
        <meta property="og:description" content="Explore pricing for our revolutionary 2029 services including quantum AI, space mining, and DNA computing." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/2029-futuristic-pricing" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="2029 Futuristic Services Pricing - Zion Tech Group" />
        <meta name="twitter:description" content="Explore pricing for our revolutionary 2029 services." />
        <meta name="twitter:image" content="https://ziontechgroup.com/twitter-image.jpg" />
        
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#8b5cf6" />
        <link rel="canonical" href="https://ziontechgroup.com/2029-futuristic-pricing" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <UltraFuturisticNavigation2028 />
        
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 animate-pulse"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  2029 Futuristic Services
                </span>
                <br />
                <span className="text-white">Competitive Pricing</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transparent pricing for Zion Tech Group's revolutionary 2029 technology services. 
                From quantum AI consciousness to space mining platforms, discover affordable innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="#pricing" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                  View Pricing Plans
                </Link>
                <Link href="/contact" className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300">
                  Contact Sales
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Choose Your <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Innovation Path</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing plans designed to meet your organization's needs and budget. 
                Start small and scale as you grow.
              </p>
            </motion.div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {pricingTiers.map((tier, index) => (
                <motion.div
                  key={tier.name}
                  variants={itemVariants}
                  className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-8 border ${
                    tier.popular 
                      ? 'border-purple-500/50 ring-2 ring-purple-500/30' 
                      : 'border-slate-700/50'
                  } hover:border-purple-500/50 transition-all duration-300`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-4">{tier.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-white">{tier.price}</span>
                      <span className="text-gray-400">{tier.period}</span>
                    </div>
                    <p className="text-gray-300">{tier.description}</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 transform hover:scale-105 ${
                      tier.popular
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
                        : 'border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white'
                    }`}
                  >
                    Get Started
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Service Categories Pricing */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-16"
            >
              <h3 className="text-3xl font-bold text-white text-center mb-12">
                Service Category <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Pricing</span>
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {serviceCategories.map((category) => (
                  <motion.div
                    key={category.title}
                    variants={itemVariants}
                    className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50"
                  >
                    <div className="flex items-center mb-6">
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${category.color} mr-4`}>
                        <category.icon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-white">{category.title}</h4>
                    </div>
                    
                    <div className="space-y-4">
                      {category.services.map((service) => (
                        <div key={service.id} className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                          <div>
                            <h5 className="text-white font-medium">{service.name}</h5>
                            <p className="text-sm text-gray-400">{service.description}</p>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-purple-400">{service.price}</div>
                            <div className="text-xs text-gray-400">{service.marketSize}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* ROI Calculator */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-800/30 to-pink-800/30 backdrop-blur-xl rounded-2xl p-8 border border-purple-500/30 text-center"
            >
              <h3 className="text-3xl font-bold text-white mb-6">
                Calculate Your <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">ROI</span>
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Our revolutionary 2029 services deliver exceptional returns on investment. 
                Most clients see 200-500% ROI within 12-24 months.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">200-500%</div>
                  <div className="text-gray-300">Average ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">12-24</div>
                  <div className="text-gray-300">Months to ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
                  <div className="text-gray-300">Uptime Guarantee</div>
                </div>
              </div>

              <Link
                href="/contact"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                Calculate Your ROI
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-slate-900/50">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Ready to Invest in the <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Future</span>?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact Zion Tech Group today to discuss pricing, customization options, and how our revolutionary 2029 services can transform your business.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center justify-center space-x-3 text-white">
                  <Phone className="w-5 h-5 text-purple-400" />
                  <span>{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-white">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-white">
                  <MapPin className="w-5 h-5 text-purple-400" />
                  <span className="text-sm">{contactInfo.address}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                  Contact Sales Team
                </Link>
                <Link href="/2029-futuristic-services-showcase" className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300">
                  View All Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <UltraFuturisticFooter2028 />
      </div>
    </>
  );
}