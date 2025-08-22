import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  CheckCircle, ArrowRight, Star, TrendingUp, Phone, 
  Zap, DollarSign, Shield, Mail, MapPin, Brain,
  Sparkles, Users, Clock, Award, Eye, Heart,
  MessageCircle, BarChart3, Globe, Smartphone
} from 'lucide-react';
import UltraFuturisticNavigation2030 from '../components/layout/UltraFuturisticNavigation2030';
import UltraFuturisticBackground2030 from '../components/ui/UltraFuturisticBackground2030';
import UltraFuturisticFooter2030 from '../components/layout/UltraFuturisticFooter2030';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const features = [
  {
    icon: Eye,
    title: 'Real-time Emotion Detection',
    description: 'Analyze 27 different emotions across voice, video, and text interactions in real-time'
  },
  {
    icon: MessageCircle,
    title: 'Sentiment-Driven Responses',
    description: 'Get intelligent response suggestions based on detected emotions and sentiment'
  },
  {
    icon: BarChart3,
    title: 'Emotion Trend Analytics',
    description: 'Track emotional patterns and trends over time with comprehensive reporting'
  },
  {
    icon: Globe,
    title: 'Multi-language Support',
    description: 'Recognize emotions across multiple languages and cultural contexts'
  },
  {
    icon: Brain,
    title: 'Custom Training Models',
    description: 'Train custom emotion recognition models for your specific use case'
  },
  {
    icon: Shield,
    title: 'Real-time Alerts',
    description: 'Get instant notifications for negative emotions requiring immediate attention'
  }
];

const useCases = [
  {
    title: 'Customer Service Optimization',
    description: 'Improve customer satisfaction by understanding emotional states and responding appropriately',
    icon: Users
  },
  {
    title: 'Sales Enhancement',
    description: 'Identify customer emotions during sales calls to optimize conversion rates',
    icon: TrendingUp
  },
  {
    title: 'Product Feedback Analysis',
    description: 'Analyze user emotions when interacting with products to improve user experience',
    icon: MessageCircle
  },
  {
    title: 'Employee Wellbeing',
    description: 'Monitor employee emotional states to support mental health and productivity',
    icon: Heart
  }
];

const pricing = [
  {
    name: 'Starter',
    price: '$299',
    period: '/month',
    description: 'Perfect for small teams getting started with emotion AI',
    features: [
      'Up to 1,000 emotion analyses per month',
      'Basic emotion detection (7 core emotions)',
      'Email support',
      'Standard API access',
      'Basic analytics dashboard'
    ],
    popular: false,
    cta: 'Get Started'
  },
  {
    name: 'Professional',
    price: '$1,299',
    period: '/month',
    description: 'Advanced emotion intelligence for growing businesses',
    features: [
      'Up to 10,000 emotion analyses per month',
      'Full emotion detection (27 emotions)',
      'Priority support',
      'Advanced API access',
      'Custom emotion training',
      'Real-time alerts',
      'Advanced analytics',
      'Multi-language support'
    ],
    popular: true,
    cta: 'Start Free Trial'
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Custom solutions for large organizations',
    features: [
      'Unlimited emotion analyses',
      'Custom emotion models',
      'Dedicated support team',
      'White-label solutions',
      'Advanced integrations',
      'Custom reporting',
      'SLA guarantees',
      'On-premise deployment'
    ],
    popular: false,
    cta: 'Contact Sales'
  }
];

export default function AIEmotionIntelligencePlatform() {
  return (
    <>
      <Head>
        <title>AI Emotion Intelligence Platform - Zion Tech Group</title>
        <meta name="description" content="Advanced AI platform that analyzes customer emotions in real-time across voice, video, and text interactions, providing intelligent responses and sentiment-driven insights." />
        <meta name="keywords" content="AI emotion detection, sentiment analysis, customer experience, emotion AI, real-time analysis" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <UltraFuturisticBackground2030>
        <UltraFuturisticNavigation2030 />
        
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30 text-pink-300 text-sm font-medium mb-6"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                AI & Customer Experience
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-5xl md:text-7xl font-bold mb-6"
              >
                <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  AI Emotion Intelligence Platform
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-2xl md:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
              >
                Real-time emotion analysis and response for customer interactions
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto"
              >
                Advanced AI platform that analyzes customer emotions in real-time across voice, video, and text interactions, providing intelligent responses and sentiment-driven insights for better customer experience.
              </motion.p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
            >
              <Link
                href="/contact"
                className="group relative px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-2xl text-lg hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 shadow-2xl hover:shadow-pink-500/25"
              >
                <span className="relative z-10 flex items-center">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>

              <Link
                href="#pricing"
                className="group px-8 py-4 border-2 border-pink-500/30 text-pink-300 font-semibold rounded-2xl text-lg hover:bg-pink-500/10 hover:border-pink-500/50 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30"
              >
                <span className="flex items-center">
                  View Pricing
                  <DollarSign className="ml-2 w-5 h-5 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-200" />
                </span>
              </Link>
            </motion.div>

            {/* Key Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
            >
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">27</div>
                <div className="text-gray-400 text-sm">Emotions Detected</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">99.9%</div>
                <div className="text-gray-400 text-sm">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">&lt;100ms</div>
                <div className="text-gray-400 text-sm">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">35%</div>
                <div className="text-gray-400 text-sm">Satisfaction Increase</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Powerful Features for Emotion Intelligence
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our platform provides comprehensive emotion analysis capabilities to transform your customer interactions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-pink-500/30 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 hover:bg-white/10"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-gradient-to-r from-pink-500/5 to-purple-500/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Transform Your Business with Emotion AI
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Discover how emotion intelligence can revolutionize your customer experience and business outcomes
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-pink-500/30 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{useCase.title}</h3>
                  <p className="text-gray-400 text-lg">{useCase.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Choose Your Plan
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Start with our professional plan and scale as you grow
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative p-8 rounded-2xl border transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 ${
                    plan.popular
                      ? 'bg-gradient-to-br from-pink-500/10 to-purple-500/10 border-pink-500/50 shadow-2xl shadow-pink-500/25'
                      : 'bg-gradient-to-br from-white/5 to-white/10 border-white/10 hover:border-pink-500/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-sm font-semibold rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400">{plan.period}</span>
                    </div>
                    <p className="text-gray-400">{plan.description}</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-pink-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={plan.name === 'Enterprise' ? '/contact' : '/contact'}
                    className={`block w-full text-center py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600'
                        : 'border border-pink-500/30 text-pink-300 hover:bg-pink-500/10 hover:border-pink-500/50'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gradient-to-r from-pink-500/5 to-purple-500/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
                Join hundreds of companies already using our AI Emotion Intelligence Platform to transform their customer experience
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
                <Link
                  href="/contact"
                  className="group relative px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-2xl text-lg hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 shadow-2xl hover:shadow-pink-500/25"
                >
                  <span className="relative z-10 flex items-center">
                    Start Free Trial
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>

                <Link
                  href="/contact"
                  className="group px-8 py-4 border-2 border-pink-500/30 text-pink-300 font-semibold rounded-2xl text-lg hover:bg-pink-500/10 hover:border-pink-500/50 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30"
                >
                  <span className="flex items-center">
                    Schedule Demo
                    <MessageCircle className="ml-2 w-5 h-5 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-200" />
                  </span>
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center">
                  <Phone className="w-8 h-8 text-pink-400 mb-4" />
                  <span className="text-gray-300 text-sm">Call Us</span>
                  <a href={`tel:${contactInfo.mobile}`} className="text-white font-semibold hover:text-pink-400 transition-colors">
                    {contactInfo.mobile}
                  </a>
                </div>
                <div className="flex flex-col items-center">
                  <Mail className="w-8 h-8 text-purple-400 mb-4" />
                  <span className="text-gray-300 text-sm">Email Us</span>
                  <a href={`mailto:${contactInfo.email}`} className="text-white font-semibold hover:text-purple-400 transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex flex-col items-center">
                  <Globe className="w-8 h-8 text-cyan-400 mb-4" />
                  <span className="text-gray-300 text-sm">Visit Us</span>
                  <a href={contactInfo.website} className="text-white font-semibold hover:text-cyan-400 transition-colors">
                    {contactInfo.website.replace('https://', '')}
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <UltraFuturisticFooter2030 />
      </UltraFuturisticBackground2030>
    </>
  );
}