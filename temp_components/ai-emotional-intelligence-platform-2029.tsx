import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Brain, Heart, Eye, MessageCircle, Users, Shield, 
  Zap, TrendingUp, CheckCircle, ArrowRight, Star,
  Phone, Mail, MapPin, Globe, Cpu, Lock, BarChart3,
  Smartphone, Database, Cloud, Server, ShieldCheck
} from 'lucide-react';
import UltraFuturisticNavigation2029 from '../components/layout/UltraFuturisticNavigation2029';
import UltraFuturisticFooter2028 from '../components/layout/UltraFuturisticFooter2028';

const AIEmotionalIntelligencePlatform2029 = () => {
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const features = [
    {
      icon: Brain,
      title: 'Real-time Emotion Detection',
      description: 'Advanced AI algorithms that detect emotions from facial expressions, voice tone, and text in real-time',
      color: 'from-violet-500 to-purple-600'
    },
    {
      icon: Heart,
      title: 'Emotional Response Generation',
      description: 'Intelligent system that generates contextually appropriate emotional responses',
      color: 'from-pink-500 to-rose-600'
    },
    {
      icon: Eye,
      title: 'Multi-modal Emotion Analysis',
      description: 'Combines visual, auditory, and textual data for comprehensive emotion understanding',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: MessageCircle,
      title: 'Emotional Intelligence Training',
      description: 'AI-powered training modules to improve emotional intelligence skills',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: TrendingUp,
      title: 'Sentiment Optimization',
      description: 'Optimizes communication and content based on emotional context',
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: Shield,
      title: 'Emotional Health Monitoring',
      description: 'Tracks emotional patterns and provides insights for mental health support',
      color: 'from-indigo-500 to-purple-600'
    }
  ];

  const benefits = [
    'Improve customer satisfaction by 85%',
    'Reduce customer churn by 60%',
    'Enhance team collaboration and communication',
    'Optimize marketing campaigns with emotional insights',
    'Improve mental health support and monitoring',
    'Create empathetic AI interactions and experiences'
  ];

  const useCases = [
    {
      title: 'Customer Service Automation',
      description: 'AI agents that understand customer emotions and respond appropriately',
      icon: Users,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'Mental Health Applications',
      description: 'Emotional support and monitoring for mental health care',
      icon: Heart,
      color: 'from-pink-500 to-rose-600'
    },
    {
      title: 'Educational Platforms',
      description: 'Personalized learning experiences based on emotional state',
      icon: Brain,
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Marketing Optimization',
      description: 'Campaign optimization based on emotional response analysis',
      icon: TrendingUp,
      color: 'from-orange-500 to-red-600'
    },
    {
      title: 'HR and Recruitment',
      description: 'Emotional intelligence assessment and team building',
      icon: Users,
      color: 'from-purple-500 to-indigo-600'
    },
    {
      title: 'Healthcare Diagnostics',
      description: 'Emotional state monitoring for healthcare professionals',
      icon: Shield,
      color: 'from-teal-500 to-cyan-600'
    }
  ];

  const pricing = {
    basic: {
      name: 'Starter',
      price: '$1,999',
      period: '/month',
      description: 'Perfect for small teams and startups',
      features: [
        'Up to 1,000 emotional interactions/month',
        'Basic emotion detection (5 emotions)',
        'Email support',
        'Standard API access',
        'Basic analytics dashboard'
      ],
      popular: false
    },
    professional: {
      name: 'Professional',
      price: '$3,999',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 10,000 emotional interactions/month',
        'Advanced emotion detection (15+ emotions)',
        'Priority support',
        'Full API access with webhooks',
        'Advanced analytics and reporting',
        'Custom emotion models',
        'Multi-language support'
      ],
      popular: true
    },
    enterprise: {
      name: 'Enterprise',
      price: '$7,999',
      period: '/month',
      description: 'For large organizations with custom needs',
      features: [
        'Unlimited emotional interactions',
        'Custom emotion detection models',
        '24/7 dedicated support',
        'Custom integrations',
        'Advanced security features',
        'White-label options',
        'On-premise deployment',
        'Custom training and consulting'
      ],
      popular: false
    }
  };

  return (
    <>
      <Head>
        <title>AI Emotional Intelligence Platform 2029 | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI platform that reads, understands, and responds to human emotions in real-time. Improve customer satisfaction by 85% with emotional intelligence." />
        <meta name="keywords" content="AI emotional intelligence, emotion detection, sentiment analysis, customer experience, mental health AI, emotional AI" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="AI Emotional Intelligence Platform 2029" />
        <meta property="og:description" content="Revolutionary AI platform that reads, understands, and responds to human emotions in real-time." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-emotional-intelligence-platform-2029" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Emotional Intelligence Platform 2029" />
        <meta name="twitter:description" content="Revolutionary AI platform that reads, understands, and responds to human emotions in real-time." />
        <meta name="twitter:image" content="https://ziontechgroup.com/twitter-image.jpg" />
        
        {/* Additional Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#8b5cf6" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-emotional-intelligence-platform-2029" />
      </Head>

      <UltraFuturisticNavigation2029 />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-16"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-violet-500/20 to-purple-500/20 border border-purple-500/30 text-purple-300 text-sm font-medium mb-8"
            >
              <Brain className="w-4 h-4 mr-2" />
              🚀 2029 Revolutionary AI Technology
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI Emotional Intelligence
              </span>
              <br />
              <span className="text-white">Platform</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
            >
              Revolutionary AI platform that reads, understands, and responds to human emotions in real-time across all communication channels. Transform your business with emotional intelligence.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            >
              <Link
                href="/contact"
                className="group relative px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 text-white font-bold rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
              >
                <span className="flex items-center">
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-violet-400 to-purple-400 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              </Link>

              <Link
                href="#pricing"
                className="group px-8 py-4 border-2 border-purple-500/50 hover:border-purple-400 text-purple-300 hover:text-white font-bold rounded-2xl text-lg transition-all duration-300 hover:bg-purple-500/10"
              >
                <span className="flex items-center">
                  View Pricing
                  <ArrowRight className="ml-2 w-5 h-5" />
                </span>
              </Link>
            </motion.div>

            {/* Key Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-violet-400 mb-2">85%</div>
                <div className="text-sm text-gray-400">Customer Satisfaction Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">60%</div>
                <div className="text-sm text-gray-400">Customer Churn Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">24/7</div>
                <div className="text-sm text-gray-400">Emotional Monitoring</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">$8.2B</div>
                <div className="text-sm text-gray-400">Market Size by 2029</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Revolutionary <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">Features</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI Emotional Intelligence Platform combines cutting-edge technology with human understanding to create truly empathetic AI systems.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative p-8 rounded-2xl bg-gradient-to-b from-white/5 to-white/10 border border-white/10 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105"
              >
                <div className={`flex justify-center mb-6`}>
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${feature.color} bg-opacity-20`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">{feature.title}</h3>
                <p className="text-gray-300 text-center leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transform Your <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Business</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience unprecedented improvements in customer satisfaction, team collaboration, and business outcomes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4 p-6 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20"
              >
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-white text-lg">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powerful <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Use Cases</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From customer service to healthcare, our platform transforms industries with emotional intelligence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative p-8 rounded-2xl bg-gradient-to-b from-white/5 to-white/10 border border-white/10 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105"
              >
                <div className={`flex justify-center mb-6`}>
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${useCase.color} bg-opacity-20`}>
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">{useCase.title}</h3>
                <p className="text-gray-300 text-center leading-relaxed">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Choose Your <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Plan</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options designed to scale with your business needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(pricing).map(([key, plan], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative p-8 rounded-2xl border-2 transition-all duration-300 transform hover:scale-105 ${
                  plan.popular
                    ? 'border-purple-500 bg-gradient-to-b from-purple-500/10 to-purple-600/5'
                    : 'border-white/10 bg-gradient-to-b from-white/5 to-white/10'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-white mb-2">
                    {plan.price}
                    <span className="text-lg text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`block w-full text-center py-3 px-6 rounded-xl font-bold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white transform hover:scale-105'
                      : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-b from-black to-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Transform</span> Your Business?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Contact us today to learn how our AI Emotional Intelligence Platform can revolutionize your customer experience and business outcomes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-2xl bg-gradient-to-b from-white/5 to-white/10 border border-white/10"
            >
              <Phone className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
              <p className="text-gray-300">{contactInfo.mobile}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-2xl bg-gradient-to-b from-white/5 to-white/10 border border-white/10"
            >
              <Mail className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
              <p className="text-gray-300">{contactInfo.email}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-2xl bg-gradient-to-b from-white/5 to-white/10 border border-white/10"
            >
              <MapPin className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
              <p className="text-gray-300">{contactInfo.address}</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
            >
              <span className="flex items-center">
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      <UltraFuturisticFooter2028 />
    </>
  );
};

export default AIEmotionalIntelligencePlatform2029;