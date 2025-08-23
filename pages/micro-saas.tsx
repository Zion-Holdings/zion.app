import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Check, Zap, Brain, Rocket, Shield, ArrowRight, Star, TrendingUp, Users, Globe, Clock, Award } from 'lucide-react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services';

export default function MicroSaasPage() {
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  const serviceHighlights = [
    {
      title: '🤖 AI Assistant Pro',
      description: 'Deploy a secure, branded AI copilot with guardrails, RAG, and analytics.',
      price: 'Starting at $149/month',
      features: ['RAG over your docs', 'Slack/Teams channels', 'Human handoff', 'Conversation analytics'],
      link: 'https://ziontechgroup.com/ai-assistant',
      contactInfo,
      icon: <Brain className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: '💸 Cloud Cost Optimizer',
      description: 'Rightsizing, storage lifecycle, and anomaly detection with FinOps dashboards.',
      price: 'Starting at $99/month',
      features: ['Auto rightsizing', 'Idle cleanup', 'Spot orchestration', 'Anomaly detection'],
      link: 'https://ziontechgroup.com/cloud-cost-optimizer',
      contactInfo,
      icon: <TrendingUp className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: '🧪 ML Experiment Tracker Lite',
      description: 'Track runs, metrics, artifacts, and model cards in minutes with hosted UI.',
      price: 'Starting at $25/user/month',
      features: ['Runs & metrics UI', 'Artifact storage', 'Model cards', 'Governance export'],
      link: 'https://ziontechgroup.com/services/ml-experiment-tracker-lite',
      contactInfo,
      icon: <Zap className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: '🚀 Edge A/B Testing Kit',
      description: 'Sub-50ms audience and geo experiments at the edge with guardrail metrics.',
      price: 'Starting at $49/month',
      features: ['Holdouts', 'Exposure logging', 'SDKs', 'BI exports'],
      link: 'https://ziontechgroup.com/services/edge-ab-testing-kit',
      contactInfo,
      icon: <Rocket className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const topRealServices = enhancedRealMicroSaasServices
    .filter((s) => s.realService || s.realImplementation)
    .slice(0, 12);

  const benefits = [
    {
      title: 'Fast Implementation',
      description: 'Get up and running in days, not months',
      icon: <Zap className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Predictable Pricing',
      description: 'Transparent, scalable pricing with no hidden fees',
      icon: <Award className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Measurable ROI',
      description: 'Track performance and impact with built-in analytics',
      icon: <TrendingUp className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Enterprise Security',
      description: 'Bank-level security and compliance standards',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const stats = [
    { label: 'Services Available', value: '150+', icon: <Zap className="w-6 h-6" /> },
    { label: 'Client Satisfaction', value: '99.9%', icon: <Star className="w-6 h-6" /> },
    { label: 'Implementation Time', value: '< 7 days', icon: <Clock className="w-6 h-6" /> },
    { label: 'Global Reach', value: '50+ Countries', icon: <Globe className="w-6 h-6" /> }
  ];

  return (
    <Layout>
      <SEO
        title="Micro SAAS Services - Zion Tech Group | Revolutionary AI & Technology Solutions"
        description="Discover 150+ revolutionary micro SAAS services powered by AI and modern cloud. Transparent pricing and fast onboarding."
        keywords={["micro SaaS", "AI services", "cloud solutions", "technology services", "Zion Tech Group", "business automation"]}
        canonical="https://ziontechgroup.com/micro-saas"
      />

      {/* Hero Section */}
      <section className="relative py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
              Revolutionary Micro SAAS Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with ready-to-run micro SaaS and AI offerings. Predictable pricing, fast setup, and measurable ROI.
            </p>
            
            {/* Contact Info */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-center mb-8">
              <div className="flex items-center gap-2 text-cyan-400">
                <Phone className="w-5 h-5" />
                <span>{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center gap-2 text-purple-400">
                <Mail className="w-5 h-5" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center gap-2 text-green-400">
                <MapPin className="w-5 h-5" />
                <span className="text-sm">{contactInfo.address}</span>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Highlights Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl font-bold text-white mb-8 text-center"
          >
            Top Picks
          </motion.h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Handpicked services with the best ROI this month.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceHighlights.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-4`}>
                  {service.icon}
                </div>
                <h3 className="text-white font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                <div className="text-cyan-400 font-semibold mb-4">{service.price}</div>
                <ul className="space-y-2 text-gray-300 text-sm mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={service.link}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-3xl font-bold text-white mb-8 text-center"
          >
            Why Choose Our Micro SaaS?
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="text-center"
              >
                <div className={`w-20 h-20 bg-gradient-to-r ${benefit.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  {benefit.icon}
                </div>
                <h3 className="text-white font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-400 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Services Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-3xl font-bold text-white mb-8 text-center"
          >
            Popular Real Services
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topRealServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="text-sm text-gray-400 mb-2">{service.category}</div>
                <h3 className="text-white font-semibold mb-3">{service.name}</h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">{service.description}</p>
                <ul className="space-y-2 text-gray-300 text-sm mb-6">
                  {(service.features || []).slice(0, 4).map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <div className="text-cyan-400 font-semibold text-sm">
                    {service.price}{service.period}
                  </div>
                  <a
                    href={`/services/${service.id}`}
                    className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                  >
                    Learn More →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Get started with our micro SaaS services today and see results in days, not months.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 font-semibold"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/services"
                className="flex items-center gap-2 px-8 py-4 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20 font-semibold"
              >
                View All Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}

