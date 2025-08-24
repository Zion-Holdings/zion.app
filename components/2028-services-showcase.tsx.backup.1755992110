import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Rocket, Brain, Atom, Shield, Cloud, Database, Code, 
  BarChart3, Star, Zap, Sparkles, ArrowRight, CheckCircle,
  TrendingUp, Users, Globe, Cpu, Lock, Target, Award, Phone
} from 'lucide-react';
import UltraFuturisticNavigation2028 from '../components/layout/UltraFuturisticNavigation2028';
import UltraFuturisticFooter2028 from '../components/layout/UltraFuturisticFooter2028';
import { futuristic2028Services } from '../data/2028-futuristic-micro-saas';
import { emergingTech2028Services } from '../data/2028-emerging-tech-services';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceCategories = [
  {
    title: '🚀 2028 Cutting-Edge Innovations',
    description: 'Beyond the future of technology',
    icon: Rocket,
    color: 'from-violet-600 to-purple-600',
    services: futuristic2028Services.slice(0, 4)
  },
  {
    title: '🎯 Practical Micro SAAS 2028',
    description: 'Real business solutions for today',
    icon: Target,
    color: 'from-blue-600 to-cyan-600',
    services: futuristic2028Services.slice(4, 8)
  },
  {
    title: '⚛️ Quantum & Space Tech 2028',
    description: 'Quantum computing and space exploration',
    icon: Atom,
    color: 'from-indigo-600 to-blue-600',
    services: emergingTech2028Services.slice(0, 4)
  },
  {
    title: '🤖 AI & Machine Learning 2028',
    description: 'Next-generation AI solutions',
    icon: Brain,
    color: 'from-emerald-600 to-teal-600',
    services: emergingTech2028Services.slice(4, 8)
  }
];

const features = [
  {
    icon: Star,
    title: 'Industry Leading',
    description: 'First-to-market solutions with cutting-edge technology'
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized performance with quantum computing integration'
  },
  {
    icon: Shield,
    title: 'Enterprise Secure',
    description: 'Military-grade security with quantum encryption'
  },
  {
    icon: Users,
    title: 'Customer Focused',
    description: 'Dedicated support and personalized solutions'
  }
];

export default function ServicesShowcase2028() {
  return (
    <>
      <Head>
        <title>2028 Revolutionary Services Showcase | Zion Tech Group</title>
        <meta name="description" content="Discover our revolutionary 2028 services including AI Quantum Financial Trading, Neural Interface Development, Quantum Internet Infrastructure, and more cutting-edge solutions." />
        <meta name="keywords" content="2028 services, AI quantum trading, neural interface, quantum internet, autonomous manufacturing, AI marketing, healthcare AI, quantum cybersecurity" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ziontechgroup.com/2028-services-showcase" />
        
        {/* Open Graph */}
        <meta property="og:title" content="2028 Revolutionary Services Showcase | Zion Tech Group" />
        <meta property="og:description" content="Discover our revolutionary 2028 services including AI Quantum Financial Trading, Neural Interface Development, and more cutting-edge solutions." />
        <meta property="og:url" content="https://ziontechgroup.com/2028-services-showcase" />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="2028 Revolutionary Services Showcase | Zion Tech Group" />
        <meta name="twitter:description" content="Discover our revolutionary 2028 services including AI Quantum Financial Trading, Neural Interface Development, and more cutting-edge solutions." />
      </Head>

      <UltraFuturisticNavigation2028 />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-40 right-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm">
              <Rocket className="w-4 h-4" />
              <span>2028 Future Technology</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Revolutionary
              </span>
              <br />
              <span className="text-white">2028 Services</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Experience the future of technology with our cutting-edge AI, quantum computing, and innovative solutions that transform industries and redefine possibilities.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-cyan-600 transition-all duration-200 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 flex items-center space-x-2"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              
              <Link
                href="/pricing"
                className="px-8 py-4 border border-purple-500/30 text-purple-300 font-semibold rounded-xl hover:bg-purple-500/10 transition-all duration-200 flex items-center space-x-2"
              >
                <span>View Pricing</span>
                <TrendingUp className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-black to-purple-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">2028 Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with practical business solutions to deliver unprecedented value and performance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Revolutionary Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the future of technology with our comprehensive suite of innovative solutions designed for the modern digital landscape.
            </p>
          </motion.div>

          {serviceCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <div className="flex items-center space-x-4 mb-12">
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white">{category.title}</h3>
                  <p className="text-gray-400 text-lg">{category.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <motion.div
                    key={serviceIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25">
                      <div className="flex items-start justify-between mb-4">
                        <div className="text-4xl">{service.icon}</div>
                        {service.popular && (
                          <div className="px-3 py-1 bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-xs font-semibold rounded-full">
                            Popular
                          </div>
                        )}
                      </div>
                      
                      <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                        {service.name}
                      </h4>
                      
                      <p className="text-gray-400 mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <div className="space-y-3 mb-6">
                        {service.features.slice(0, 3).map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between mb-6">
                        <div className="text-2xl font-bold text-cyan-400">
                          {service.price}
                          <span className="text-gray-400 text-sm font-normal">{service.period}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'}`}
                            />
                          ))}
                          <span className="text-gray-400 text-sm ml-2">({service.reviews})</span>
                        </div>
                      </div>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-400">Setup Time:</span>
                          <span className="text-white">{service.setupTime}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-400">Trial:</span>
                          <span className="text-white">{service.trialDays} days</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-400">Customers:</span>
                          <span className="text-white">{service.customers.toLocaleString()}</span>
                        </div>
                      </div>
                      
                      <Link
                        href={service.link}
                        className="block w-full text-center px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-cyan-600 transition-all duration-200 transform hover:scale-105"
                      >
                        Get Started
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-indigo-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Ready to Experience the <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Future</span>?
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of forward-thinking companies already transforming their business with our revolutionary 2028 services.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-cyan-600 transition-all duration-200 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 flex items-center space-x-2"
              >
                <span>Start Your Journey</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              
              <a
                href={`tel:${contactInfo.mobile}`}
                className="px-8 py-4 border border-purple-500/30 text-purple-300 font-semibold rounded-xl hover:bg-purple-500/10 transition-all duration-200 flex items-center space-x-2"
              >
                <span>Call {contactInfo.mobile}</span>
                <Phone className="w-5 h-5" />
              </a>
            </div>

            <div className="pt-8 border-t border-purple-500/30">
              <p className="text-gray-400">
                Need help choosing? Our experts are here to guide you to the perfect solution.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <UltraFuturisticFooter2028 />
    </>
  );
}