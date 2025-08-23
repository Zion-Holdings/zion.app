import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  CheckCircle, ArrowRight, Phone, Mail, MapPin, Globe, Users, TrendingUp, 
  Shield, Zap, Clock, DollarSign, BarChart3, Heart, Brain, Headphones
} from 'lucide-react';

const AICustomerSuccessAutomation2025: React.FC = () => {
  const service = {
    name: 'AI Customer Success Automation 2025',
    tagline: 'Intelligent customer success automation with predictive churn prevention',
    description: 'Enterprise-grade AI platform that automates customer success workflows, predicts churn risks, and optimizes customer lifetime value through intelligent automation and predictive analytics.',
    category: 'Customer Success & AI',
    type: 'Enterprise Micro SAAS',
    pricing: {
      starter: '$499/month',
      professional: '$1,299/month',
      enterprise: '$2,999/month',
      custom: 'Contact for pricing'
    },
    features: [
      'AI-powered customer health scoring',
      'Predictive churn risk analysis',
      'Automated onboarding workflows',
      'Intelligent task prioritization',
      'Customer sentiment analysis',
      'Automated follow-up sequences',
      'Success metric tracking',
      'Integration with CRM systems',
      'Custom automation rules',
      'Real-time alerts and notifications',
      'Advanced reporting dashboard',
      'White-label solutions'
    ],
    benefits: [
      'Reduce churn by 40-60%',
      'Increase customer lifetime value by 35%',
      'Automate 80% of repetitive tasks',
      'Improve customer satisfaction scores',
      'Scale customer success operations',
      'Data-driven success strategies',
      'Proactive customer intervention',
      'ROI tracking and optimization'
    ],
    useCases: [
      'SaaS companies',
      'Enterprise software',
      'E-commerce platforms',
      'Financial services',
      'Healthcare technology',
      'B2B service providers',
      'Subscription businesses',
      'Digital transformation companies'
    ],
    marketSize: '$2.8B by 2025',
    targetAudience: 'Customer success teams, SaaS companies, enterprise software providers, subscription businesses',
    competitiveAdvantage: 'First AI platform with predictive churn prevention and automated customer success workflows',
    contact: 'kleber@ziontechgroup.com',
    mobile: '+1 302 464 0950',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com',
    implementationTime: '2-4 weeks',
    supportLevel: '24/7 enterprise support'
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        {/* Futuristic Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/20 to-purple-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_50%)]"></div>
        
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>

        <div className="relative z-10">
          {/* Hero Section */}
          <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12"
              >
                <div className="inline-block bg-gradient-to-r from-emerald-500/20 to-teal-500/20 px-4 py-2 rounded-full border border-emerald-500/30 mb-6">
                  <span className="text-emerald-400 font-medium">{service.type}</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
                  {service.name}
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                  {service.tagline}
                </p>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 max-w-4xl mx-auto border border-emerald-500/20 mb-12"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex items-center justify-center space-x-3">
                    <Phone className="w-6 h-6 text-emerald-400" />
                    <div>
                      <p className="text-sm text-gray-400">Phone</p>
                      <p className="font-semibold">{service.mobile}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Mail className="w-6 h-6 text-teal-400" />
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <p className="font-semibold">{service.contact}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Globe className="w-6 h-6 text-blue-400" />
                    <div>
                      <p className="text-sm text-gray-400">Website</p>
                      <p className="font-semibold">{service.website}</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Service Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-center mb-16"
              >
                <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
                  Powerful Features
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Comprehensive AI-powered features designed to transform your customer success operations
                </p>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {service.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mb-4">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{feature}</h3>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
                  Transform Your Business
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  See measurable results with our AI-powered customer success automation
                </p>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {service.benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-lg text-white font-medium">{benefit}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
                  Transparent Pricing
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Choose the plan that fits your business needs and scale as you grow
                </p>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
              >
                {Object.entries(service.pricing).map(([plan, price], index) => (
                  <motion.div
                    key={plan}
                    variants={fadeInUp}
                    className={`bg-white/5 backdrop-blur-xl rounded-2xl p-8 border ${
                      plan === 'professional' 
                        ? 'border-emerald-500/40 bg-emerald-500/5' 
                        : 'border-emerald-500/20'
                    }`}
                  >
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-white mb-2 capitalize">{plan}</h3>
                      {plan === 'professional' && (
                        <span className="inline-block bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-sm font-medium">
                          Most Popular
                        </span>
                      )}
                    </div>
                    <div className="text-center mb-8">
                      <div className="text-4xl font-bold text-emerald-400 mb-2">{price}</div>
                      {plan !== 'custom' && <p className="text-gray-400">per month</p>}
                    </div>
                    <div className="text-center">
                      <a
                        href={`mailto:${service.contact}?subject=Inquiry about ${service.name} - ${plan} plan`}
                        className="inline-block bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                      >
                        Get Started
                      </a>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Use Cases Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
                  Perfect For
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Ideal for businesses looking to scale their customer success operations
                </p>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {service.useCases.map((useCase, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-emerald-500/20 text-center hover:border-emerald-500/40 transition-all duration-300"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{useCase}</h3>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Service Details */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
                  Service Details
                </h2>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                <motion.div variants={fadeInUp} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Implementation</h3>
                  <p className="text-gray-400">{service.implementationTime}</p>
                </motion.div>

                <motion.div variants={fadeInUp} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Headphones className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Support</h3>
                  <p className="text-gray-400">{service.supportLevel}</p>
                </motion.div>

                <motion.div variants={fadeInUp} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Market Size</h3>
                  <p className="text-gray-400">{service.marketSize}</p>
                </motion.div>

                <motion.div variants={fadeInUp} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Target Audience</h3>
                  <p className="text-gray-400 text-sm">{service.targetAudience}</p>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 backdrop-blur-xl rounded-3xl p-12 border border-emerald-500/20"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
                  Ready to Transform Your Customer Success?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Join the future of customer success with AI-powered automation. 
                  Let's discuss how we can help you achieve unprecedented customer satisfaction and retention.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href={`mailto:${service.contact}?subject=Inquiry about ${service.name}`}
                    className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Get Started Today
                  </a>
                  <a
                    href={`tel:${service.mobile}`}
                    className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 border border-white/20"
                  >
                    Call Now
                  </a>
                </div>
              </motion.div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default AICustomerSuccessAutomation2025;