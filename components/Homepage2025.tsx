import React, { Suspense } from 'react';
import Layout from './layout/Layout';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Star, Clock, Shield, Zap, TrendingUp, Award, Globe, Rocket } from 'lucide-react';
import { UltraFuturisticServiceCard2026 } from './ui/UltraFuturisticServiceCard2026';

const Homepage2025: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const featuredServices = [
    {
      id: 'quantum-ai-orchestrator',
      name: 'Quantum AI Orchestrator',
      tagline: 'Orchestrate AI workflows with quantum computing power',
      description: 'Advanced AI workflow orchestration platform that leverages quantum computing to optimize and accelerate complex AI pipelines, enabling faster model training and deployment.',
      price: '$1,299',
      period: '/month',
      features: [
        'Quantum-enhanced workflow optimization',
        'Intelligent resource allocation',
        'Automated pipeline management',
        'Real-time performance monitoring',
        'Advanced scheduling algorithms',
        'Multi-cloud orchestration',
        'Custom workflow templates',
        'API for integration',
        'Enterprise-grade security'
      ],
      popular: true,
      category: 'AI Orchestration',
      icon: '⚛️🎭',
      variant: 'quantum-futuristic'
    },
    {
      id: 'ai-ethics-compliance-suite',
      name: 'AI Ethics & Compliance Suite',
      tagline: 'Ensure responsible AI with comprehensive ethics and compliance',
      description: 'Comprehensive AI ethics and compliance platform that helps organizations develop, deploy, and monitor AI systems in accordance with ethical principles and regulatory requirements.',
      price: '$899',
      period: '/month',
      features: [
        'AI ethics assessment and monitoring',
        'Compliance automation and reporting',
        'Bias detection and mitigation',
        'Transparency and explainability tools',
        'Regulatory compliance tracking',
        'Ethics training and education',
        'Audit trail and documentation',
        'Integration with AI platforms',
        'Custom compliance workflows'
      ],
      popular: false,
      category: 'AI Ethics',
      icon: '🤖⚖️',
      variant: 'ai-futuristic'
    },
    {
      id: 'metaverse-business-platform',
      name: 'Metaverse Business Platform',
      tagline: 'Build your business in the metaverse with AI-powered tools',
      description: 'Comprehensive metaverse business platform that enables organizations to create, manage, and monetize virtual experiences, digital assets, and immersive business solutions.',
      price: '$1,599',
      period: '/month',
      features: [
        '3D virtual environment creation',
        'Digital asset management and monetization',
        'AI-powered avatar customization',
        'Virtual event hosting and management',
        'E-commerce integration and payments',
        'Analytics and performance tracking',
        'Multi-platform compatibility',
        'Custom branding and theming',
        '24/7 technical support'
      ],
      popular: true,
      category: 'Metaverse',
      icon: '🌐🏢',
      variant: 'metaverse-futuristic'
    },
    {
      id: 'quantum-financial-modeling',
      name: 'Quantum Financial Modeling Platform',
      tagline: 'Revolutionize financial modeling with quantum computing',
      description: 'Advanced financial modeling platform that leverages quantum computing to solve complex financial problems, optimize portfolios, and provide unprecedented insights for investment decisions.',
      price: '$2,199',
      period: '/month',
      features: [
        'Quantum-enhanced portfolio optimization',
        'Advanced risk assessment and modeling',
        'Real-time market analysis and predictions',
        'Multi-asset class modeling',
        'Scenario analysis and stress testing',
        'Regulatory compliance and reporting',
        'API for financial data integration',
        'Custom model development',
        'Enterprise-grade security'
      ],
      popular: true,
      category: 'Quantum Finance',
      icon: '⚛️💰',
      variant: 'quantum-futuristic'
    }
  ];

  const stats = [
    { icon: <Rocket className="w-6 h-6" />, value: '500+', label: 'Services Available', description: 'Comprehensive technology solutions' },
    { icon: <Star className="w-6 h-6" />, value: '98%', label: 'Client Satisfaction', description: 'Proven track record of excellence' },
    { icon: <Clock className="w-6 h-6" />, value: '24/7', label: 'Support Available', description: 'Round-the-clock technical assistance' },
    { icon: <Globe className="w-6 h-6" />, value: '50+', label: 'Industries Served', description: 'Cross-sector expertise' }
  ];

  const whyChooseUs = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with SOC2 compliance and zero-trust architecture'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Lightning Fast',
      description: 'Optimized performance with 99.9% uptime guarantee'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Scalable Solutions',
      description: 'Grow with confidence using our scalable infrastructure'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Proven Excellence',
      description: 'Trusted by Fortune 500 companies worldwide'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900"
          style={{ y }}
        />
        <div className="absolute inset-0 bg-black/20" />
        
        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6]
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Future-Ready
            </span>
            <br />
            <span className="text-white">Technology Solutions</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transform your business with cutting-edge AI, quantum computing, and space technology solutions. 
            Stay ahead of the curve with our innovative platforms and expert guidance.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link 
              href="/services"
              className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-2"
            >
              Explore Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link 
              href="/contact"
              className="group border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white/10 flex items-center gap-2"
            >
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-blue-400 mb-2">{stat.label}</div>
                <div className="text-sm text-gray-400">{stat.description}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Zion Tech Group</span>?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We combine cutting-edge technology with proven expertise to deliver solutions that drive real business value
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Solutions</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover our most innovative and powerful technology platforms designed for the future
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Suspense fallback={
                  <div className="bg-gray-800 rounded-2xl p-8 h-96 animate-pulse">
                    <div className="h-8 bg-gray-700 rounded mb-4"></div>
                    <div className="h-4 bg-gray-700 rounded mb-2"></div>
                    <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                  </div>
                }>
                  <UltraFuturisticServiceCard2026 
                    service={service}
                    variant={service.variant as 'default' | 'premium' | 'enterprise'}
                  />
                </Suspense>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Link 
              href="/services"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of companies already leveraging our cutting-edge technology solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-white text-blue-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300"
              >
                Get Free Consultation
              </Link>
              <Link 
                href="/demo"
                className="border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white/10"
              >
                Request Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Homepage2025;