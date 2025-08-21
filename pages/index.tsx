import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Star, ArrowRight, Check, Play, 
  Brain, Atom, Shield, Rocket, Target,
  Users, Globe, Zap, TrendingUp, Award,
  ChevronRight, ExternalLink
} from 'lucide-react';
import Layout from '../components/layout/Layout';
import { realMicroSaasServices2025 } from '../data/2025-real-micro-saas-services';
import { innovativeAIServices2025 } from '../data/2025-innovative-ai-services';
import { innovativeITServices2025 } from '../data/2025-innovative-it-services';
import { emergingTechServices2025 } from '../data/2025-emerging-tech-services';
import { additionalRealServices2025 } from '../data/2025-additional-real-services';
import { innovativeAIServices2025 as newInnovativeAIServices } from '../data/2025-innovative-ai-it-services';

const heroStats = [
  { label: 'Revolutionary Services', value: '600+', icon: <Star className="w-5 h-5" /> },
  { label: 'Happy Clients', value: '1500+', icon: <Users className="w-5 h-5" /> },
  { label: 'Success Rate', value: '99.9%', icon: <Award className="w-5 h-5" /> },
  { label: 'ROI Average', value: '400%', icon: <TrendingUp className="w-5 h-5" /> }
];

const serviceCategories = [
  {
    name: 'AI & Consciousness',
    icon: <Brain className="w-8 h-8" />,
    color: 'from-cyan-500 to-blue-500',
    description: 'Revolutionary AI consciousness and emotional intelligence',
    services: [...innovativeAIServices2025, ...newInnovativeAIServices].slice(0, 3),
    link: '/services#ai-consciousness'
  },
  {
    name: 'Quantum & Emerging Tech',
    icon: <Atom className="w-8 h-8" />,
    color: 'from-purple-500 to-pink-500',
    description: 'Quantum computing and breakthrough technologies',
    services: emergingTechServices2025.slice(0, 3),
    link: '/services#quantum-emerging'
  },
  {
    name: 'Enterprise IT',
    icon: <Shield className="w-8 h-8" />,
    color: 'from-green-500 to-emerald-500',
    description: 'Enterprise solutions and infrastructure',
    services: innovativeITServices2025.slice(0, 3),
    link: '/services#enterprise-it'
  },
  {
    name: 'Micro SAAS',
    icon: <Target className="w-8 h-8" />,
    color: 'from-orange-500 to-red-500',
    description: 'Innovative business solutions',
    services: [...realMicroSaasServices2025, ...additionalRealServices2025].slice(0, 3),
    link: '/services#micro-saas'
  },
  {
    name: 'Financial Technology',
    icon: <TrendingUp className="w-8 h-8" />,
    color: 'from-green-500 to-emerald-600',
    description: 'Quantum and AI-powered financial solutions',
    services: additionalRealServices2025.filter(s => s.category === 'Financial Technology').slice(0, 3),
    link: '/services#financial-technology'
  },
  {
    name: 'Customer Success',
    icon: <Users className="w-8 h-8" />,
    color: 'from-blue-500 to-indigo-600',
    description: 'AI-powered customer success and retention',
    services: additionalRealServices2025.filter(s => s.category === 'Customer Success').slice(0, 3),
    link: '/services#customer-success'
  }
];

const features = [
  {
    title: 'Cutting-Edge Technology',
    description: 'Access to the latest AI, quantum computing, and emerging technologies',
    icon: <Zap className="w-6 h-6" />,
    color: 'from-cyan-500 to-blue-500'
  },
  {
    title: 'Rapid Implementation',
    description: 'Get up and running in under 24 hours with our streamlined setup process',
    icon: <Rocket className="w-6 h-6" />,
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Global Infrastructure',
    description: 'Enterprise-grade infrastructure available in 150+ countries worldwide',
    icon: <Globe className="w-6 h-6" />,
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: '24/7 Support',
    description: 'Round-the-clock technical support and monitoring for all services',
    icon: <Shield className="w-6 h-6" />,
    color: 'from-orange-500 to-red-500'
  }
];

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CTO, TechFlow Inc.',
    company: 'TechFlow Inc.',
    content: 'Zion Tech Group transformed our operations with their AI consciousness platform. The ROI was incredible - we saw a 400% increase in efficiency within 6 months.',
    rating: 5,
    avatar: 'SC'
  },
  {
    name: 'Michael Rodriguez',
    role: 'VP Engineering, QuantumCorp',
    company: 'QuantumCorp',
    content: 'Their quantum computing solutions gave us a competitive edge we never thought possible. The implementation was seamless and the results exceeded expectations.',
    rating: 5,
    avatar: 'MR'
  },
  {
    name: 'Dr. Emily Watson',
    role: 'Research Director, BioTech Solutions',
    company: 'BioTech Solutions',
    content: 'The AI-powered research automation tools accelerated our drug discovery process by 10x. This is the future of biotechnology research.',
    rating: 5,
    avatar: 'EW'
  }
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Zion Tech Group | Future Technology Solutions</title>
        <meta name="description" content="Leading provider of cutting-edge AI, quantum computing, emerging technology, and micro SAAS solutions. Transform your business with revolutionary technology." />
        <meta name="keywords" content="AI services, quantum computing, emerging technology, micro SAAS, enterprise solutions, space technology, metaverse development" />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Head>

      <Layout>
        <div className="min-h-screen bg-black text-white relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.1),transparent_50%)]"></div>

          {/* Main Content */}
          <div className="relative z-10">
            {/* Hero Section */}
            <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto text-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="mb-8"
                >
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      Future Technology
                    </span>
                    <br />
                    <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      Solutions
                    </span>
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                    Leading provider of cutting-edge AI, quantum computing, emerging technology, and micro SAAS solutions. 
                    Transform your business with revolutionary technology that drives innovation and competitive advantage.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                    <a
                      href="/services"
                      className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
                    >
                      Explore Services
                      <ArrowRight className="w-5 h-5 inline ml-2" />
                    </a>
                    <a
                      href="/contact"
                      className="border border-gray-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:border-gray-500 hover:bg-gray-800/50 transition-all duration-200"
                    >
                      Get Started
                    </a>
                  </div>
                </motion.div>

                {/* Hero Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
                >
                  {heroStats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                      className="text-center"
                    >
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl mb-4">
                        {stat.icon}
                      </div>
                      <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </section>

            {/* Service Categories */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-center mb-16"
                >
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      Our Service Categories
                    </span>
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Discover our comprehensive suite of innovative solutions designed to transform your business 
                    and drive innovation across industries.
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {serviceCategories.map((category, index) => (
                    <motion.div
                      key={category.name}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-gray-600/50 transition-all duration-300"
                    >
                      <div className={`w-20 h-20 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mb-6`}>
                        {category.icon}
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-4">{category.name}</h3>
                      <p className="text-gray-400 mb-6">{category.description}</p>
                      
                      <div className="space-y-3 mb-6">
                        {category.services.map((service) => (
                          <div key={service.id} className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg">
                            <div>
                              <h4 className="font-semibold text-white">{service.name}</h4>
                              <p className="text-sm text-gray-400">{service.tagline}</p>
                            </div>
                            <div className="text-right">
                              <div className="text-lg font-bold text-white">${service.price.monthly}</div>
                              <div className="text-sm text-gray-400">/month</div>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <a
                        href={category.link}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                      >
                        View All {category.name} Services
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </a>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Features Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
              <div className="max-w-7xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-center mb-16"
                >
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      Why Choose Zion Tech Group?
                    </span>
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    We deliver cutting-edge technology solutions with unmatched quality, speed, and support.
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {features.map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-4"
                    >
                      <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                        <p className="text-gray-400">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-center mb-16"
                >
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      What Our Clients Say
                    </span>
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Join thousands of satisfied clients who have transformed their businesses with our technology solutions.
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {testimonials.map((testimonial, index) => (
                    <motion.div
                      key={testimonial.name}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8"
                    >
                      <div className="flex items-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      
                      <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.content}"</p>
                      
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                          {testimonial.avatar}
                        </div>
                        <div>
                          <div className="font-semibold text-white">{testimonial.name}</div>
                          <div className="text-sm text-gray-400">{testimonial.role}</div>
                          <div className="text-sm text-cyan-400">{testimonial.company}</div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-3xl p-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                      Ready to Transform Your Business?
                    </h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                      Join thousands of businesses already using our cutting-edge technology solutions 
                      to drive growth and competitive advantage.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                      <a
                        href="/contact"
                        className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
                      >
                        Get Started Today
                      </a>
                      <a
                        href="/pricing"
                        className="border border-gray-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:border-gray-500 hover:bg-gray-800/50 transition-all duration-200"
                      >
                        View Pricing
                      </a>
                    </div>
                    
                    <div className="text-sm text-gray-400">
                      <p>✓ 14-90 Day Free Trials • ✓ No Credit Card Required • ✓ Instant Setup</p>
                      <p className="mt-2">✓ 24/7 Support • ✓ 99.9% Uptime SLA • ✓ Global Infrastructure</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>
          </div>
        </div>
      </Layout>
    </>
  );
}
