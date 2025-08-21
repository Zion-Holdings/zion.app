import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  CheckCircle, ArrowRight, Star, TrendingUp, Phone, 
  Zap, DollarSign, Shield, Mail, MapPin, Rocket, 
  Brain, Sparkles, Clock, Users, Target, Award,
  Globe, Atom, Factory, Building2, LockKeyhole,
  Eye, Car, Leaf, Wifi, ShieldCheck
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

const serviceCategories = [
  {
    title: '🚀 2028 Futuristic Innovations',
    description: 'Beyond the future of technology',
    icon: Rocket,
    color: 'from-violet-600 to-purple-600',
    services: futuristic2028Services.slice(0, 4)
  },
  {
    title: '⚛️ Quantum & Space Tech 2028',
    description: 'Quantum computing and space exploration',
    icon: Atom,
    color: 'from-indigo-600 to-blue-600',
    services: futuristic2028Services.slice(4, 8)
  },
  {
    title: '🤖 AI & Machine Learning 2028',
    description: 'Next-generation AI solutions',
    icon: Brain,
    color: 'from-emerald-600 to-teal-600',
    services: emergingTech2028Services.slice(0, 4)
  },
  {
    title: '🏭 Autonomous & Manufacturing 2028',
    description: 'Self-optimizing systems',
    icon: Factory,
    color: 'from-orange-600 to-red-600',
    services: emergingTech2028Services.slice(4, 8)
  }
];

const stats = [
  { label: 'Services Available', value: '20+', icon: Rocket },
  { label: 'Happy Customers', value: '500+', icon: Users },
  { label: 'Success Rate', value: '99.9%', icon: Award },
  { label: 'Global Reach', value: '50+ Countries', icon: Globe }
];

export default function ServicesShowcase2028() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>2028 Futuristic Services Showcase - Zion Tech Group</title>
        <meta name="description" content="Explore our cutting-edge 2028 futuristic innovations including AI climate prediction, quantum cybersecurity, autonomous drone delivery, and more revolutionary technologies." />
        <meta name="keywords" content="2028 technology, futuristic innovations, AI services, quantum computing, autonomous systems, Zion Tech Group" />
        <meta property="og:title" content="2028 Futuristic Services Showcase - Zion Tech Group" />
        <meta property="og:description" content="Explore our cutting-edge 2028 futuristic innovations including AI climate prediction, quantum cybersecurity, autonomous drone delivery, and more revolutionary technologies." />
        <meta property="og:url" content="https://ziontechgroup.com/2028-services-showcase" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/2028-services-showcase" />
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
                2028 Futuristic
              </span>
              <br />
              <span className="text-white">Innovations</span>
            </h1>
            <p className="text-xl md:text-2xl text-purple-200 mb-8 max-w-4xl mx-auto leading-relaxed">
              Experience the future of technology with our revolutionary AI, quantum computing, and autonomous systems. 
              Transform your business with cutting-edge solutions that were once science fiction.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-2xl shadow-purple-500/25 flex items-center space-x-2"
              >
                <Rocket className="w-5 h-5" />
                <span>Get Started Today</span>
              </Link>
              <Link
                href="/revolutionary-2028-pricing"
                className="px-8 py-4 border-2 border-purple-500/50 hover:border-purple-400 text-purple-200 hover:text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 flex items-center space-x-2"
              >
                <DollarSign className="w-5 h-5" />
                <span>View Pricing</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-purple-900/20 border-y border-purple-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-purple-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Revolutionary <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Service Categories</span>
            </h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Explore our comprehensive range of futuristic services designed to propel your business into the future
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
                      <category.icon className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">{category.title}</h3>
                  <p className="text-xl text-purple-200 max-w-2xl mx-auto">{category.description}</p>
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
                      <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-2xl p-8 hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
                        {/* Service Header */}
                        <div className="flex items-start justify-between mb-6">
                          <div className="flex items-center space-x-3">
                            <div className="text-4xl">{service.icon}</div>
                            <div>
                              <h4 className="text-xl font-bold text-white group-hover:text-purple-200 transition-colors">
                                {service.name}
                              </h4>
                              <p className="text-purple-300 text-sm">{service.tagline}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-purple-400">{service.price}</div>
                            <div className="text-purple-300 text-sm">{service.period}</div>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-purple-200 mb-6 leading-relaxed">{service.description}</p>

                        {/* Features */}
                        <div className="mb-6">
                          <h5 className="text-white font-semibold mb-3 flex items-center">
                            <Sparkles className="w-4 h-4 mr-2 text-purple-400" />
                            Key Features
                          </h5>
                          <div className="grid grid-cols-1 gap-2">
                            {service.features.slice(0, 4).map((feature, index) => (
                              <div key={index} className="flex items-center space-x-2 text-purple-300 text-sm">
                                <CheckCircle className="w-4 h-4 text-purple-400" />
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Market Info */}
                        <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                          <div className="bg-purple-900/30 rounded-lg p-3">
                            <div className="text-purple-300 mb-1">Market Size</div>
                            <div className="text-white font-semibold">{service.marketSize}</div>
                          </div>
                          <div className="bg-blue-900/30 rounded-lg p-3">
                            <div className="text-purple-300 mb-1">Growth Rate</div>
                            <div className="text-white font-semibold">{service.growthRate}</div>
                          </div>
                        </div>

                        {/* Action Button */}
                        <div className="flex items-center justify-between">
                          <Link
                            href={service.link}
                            className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors group"
                          >
                            <span className="font-medium">Learn More</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                          </Link>
                          <Link
                            href="/contact"
                            className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-200 hover:scale-105"
                          >
                            Get Started
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
              Join the future of technology with our revolutionary 2028 innovations. 
              Contact us today to discover how we can propel your business into the next decade.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-2xl shadow-purple-500/25 flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Contact Us Now</span>
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