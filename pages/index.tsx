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
  { label: 'Revolutionary Services', value: '800+', icon: <Star className="w-5 h-5" /> },
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
    services: [...innovativeAIServices2025, ...newInnovativeAIServices.filter(s => s.category.includes('AI'))].slice(0, 3),
    link: '/services#ai-consciousness'
  },
  {
    name: 'Quantum & Emerging Tech',
    icon: <Atom className="w-8 h-8" />,
    color: 'from-purple-500 to-pink-500',
    description: 'Quantum computing and breakthrough technologies',
    services: [...emergingTechServices2025, ...newInnovativeAIServices.filter(s => s.category.includes('Quantum'))].slice(0, 3),
    link: '/services#quantum-emerging'
  },
  {
    name: 'Enterprise IT',
    icon: <Shield className="w-8 h-8" />,
    color: 'from-green-500 to-emerald-500',
    description: 'Enterprise solutions and infrastructure',
    services: [...innovativeITServices2025, ...additionalRealServices2025.filter(s => s.category.includes('Enterprise') || s.category.includes('DevOps'))].slice(0, 3),
    link: '/services#enterprise-it'
  },
  {
    name: 'Micro SAAS',
    icon: <Target className="w-8 h-8" />,
    color: 'from-orange-500 to-red-500',
    description: 'Innovative business solutions',
    services: [...realMicroSaasServices2025, ...additionalRealServices2025.filter(s => s.category.includes('Sales') || s.category.includes('Customer'))].slice(0, 3),
    link: '/services#micro-saas'
  },
  {
    name: 'Financial Technology',
    icon: <TrendingUp className="w-8 h-8" />,
    color: 'from-green-500 to-emerald-600',
    description: 'Quantum and AI-powered financial solutions',
    services: additionalRealServices2025.filter(s => s.category.includes('Financial')).slice(0, 3),
    link: '/services#financial-technology'
  },
  {
    name: 'Cybersecurity',
    icon: <Shield className="w-8 h-8" />,
    color: 'from-red-500 to-pink-600',
    description: 'Quantum-resistant security solutions',
    services: additionalRealServices2025.filter(s => s.category.includes('Cybersecurity')).slice(0, 3),
    link: '/services#cybersecurity'
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
    <Layout>
      <Head>
        <title>Zion Tech Group - Revolutionary 2045 Technology Solutions</title>
        <meta name="description" content="Leading provider of cutting-edge AI consciousness, quantum computing, and emerging technology solutions. Transform your business with revolutionary innovations." />
        <meta name="keywords" content="AI consciousness, quantum computing, autonomous solutions, space technology, cybersecurity, business intelligence, Zion Tech Group, 2045 technology" />
        <meta property="og:title" content="Zion Tech Group - Revolutionary 2045 Technology Solutions" />
        <meta property="og:description" content="Leading provider of cutting-edge AI consciousness, quantum computing, and emerging technology solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Head>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.1),transparent_50%)]"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-40 right-40 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-40"></div>
        <div className="absolute bottom-40 left-1/3 w-1.5 h-1.5 bg-green-400 rounded-full animate-bounce opacity-50"></div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Revolutionary
              </span>
              <br />
              <span className="text-white">2045 Technology</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Pioneering the future with revolutionary AI consciousness, quantum computing, and autonomous solutions that transform businesses worldwide.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
              >
                Get Started Today
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-cyan-500/50 text-cyan-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300"
              >
                <div className="flex items-center gap-2">
                  <Play className="w-5 h-5" />
                  Watch Demo
                </div>
              </motion.button>
            </div>

            {/* Hero Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {heroStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center mb-2 text-cyan-400">
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Categories Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Revolutionary <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Technology Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our comprehensive portfolio of cutting-edge AI, quantum computing, and emerging technology solutions designed to transform your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center text-white mb-4`}>
                  {category.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{category.name}</h3>
                <p className="text-gray-400 mb-4">{category.description}</p>
                
                <div className="space-y-3 mb-6">
                  {category.services.map((service) => (
                    <div key={service.name} className="flex items-center gap-3 text-sm">
                      <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span className="text-gray-300">{service.name}</span>
                    </div>
                  ))}
                </div>
                
                <Link href={category.link} className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors">
                  Explore {category.name}
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Zion Tech Group</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with proven expertise to deliver solutions that drive real business transformation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center text-white flex-shrink-0`}>
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Trusted by <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Industry Leaders</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how our revolutionary technology solutions are transforming businesses across industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">{testimonial.content}</p>
                
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/50 via-purple-900/50 to-pink-900/50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Business?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the future of technology with our revolutionary AI consciousness, quantum computing, and autonomous solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
              >
                Get Started Today
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white/50 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 hover:border-white transition-all duration-300"
              >
                Schedule a Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
