import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Users, MessageCircle, BarChart3, Zap, Shield, Globe, Phone, Mail, MapPin } from 'lucide-react';
import UltraFuturisticBackground2030 from '../components/ui/UltraFuturisticBackground2030';
import UltraFuturisticNavigation2030 from '../components/layout/UltraFuturisticNavigation2030';
import UltraFuturisticFooter2030 from '../components/layout/UltraFuturisticFooter2030';

// Service data
const serviceData = {
  name: 'AI Customer Experience Platform 2030',
  description: 'AI-powered customer experience management platform',
  price: '$199/month',
  features: [
    {
      title: 'AI-Powered Customer Insights',
      description: 'Real-time analysis of customer behavior, sentiment, and preferences using advanced machine learning algorithms.',
      icon: BarChart3
    },
    {
      title: 'Intelligent Customer Journey Mapping',
      description: 'Automatically map and optimize customer touchpoints across all channels and devices.',
      icon: Globe
    },
    {
      title: 'Predictive Customer Behavior Analytics',
      description: 'Forecast customer needs and behaviors to proactively address issues and opportunities.',
      icon: Zap
    },
    {
      title: 'Multi-Channel Communication Hub',
      description: 'Unified platform for managing customer interactions across email, chat, social media, and phone.',
      icon: MessageCircle
    },
    {
      title: 'AI-Powered Personalization Engine',
      description: 'Dynamic content and experience personalization based on real-time customer data and AI insights.',
      icon: Users
    },
    {
      title: 'Advanced Customer Security & Privacy',
      description: 'Enterprise-grade security with GDPR compliance and customer data protection.',
      icon: Shield
    }
  ],
  marketPosition: 'Leading AI-powered customer experience platform for enterprises seeking to revolutionize customer engagement through intelligent automation and predictive analytics.',
  useCases: [
    'E-commerce customer journey optimization',
    'Banking and financial services customer experience',
    'Healthcare patient engagement and satisfaction',
    'Retail customer loyalty and retention',
    'SaaS customer success and onboarding',
    'Telecommunications customer support'
  ],
  roi: 'Average customer sees 350% ROI within 8 months through improved customer satisfaction, retention, and lifetime value.',
  contactInfo: {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  }
};

export default function AICustomerExperiencePlatform2030() {
  const { features, marketPosition, useCases, roi, contactInfo } = serviceData;

  return (
    <>
      <Head>
        <title>{serviceData.name} - Zion Tech Group</title>
        <meta name="description" content={serviceData.description} />
        <meta name="keywords" content="AI customer experience, customer engagement, AI platform, customer analytics, Zion Tech Group" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content={`${serviceData.name} - Zion Tech Group`} />
        <meta property="og:description" content={serviceData.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-customer-experience-platform-2030" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        <meta property="og:site_name" content="Zion Tech Group" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${serviceData.name} - Zion Tech Group`} />
        <meta name="twitter:description" content={serviceData.description} />
        <meta name="twitter:image" content="https://ziontechgroup.com/og-image.jpg" />
      </Head>

      <UltraFuturisticBackground2030>
        <UltraFuturisticNavigation2030 />

        <main className="relative z-10">
          {/* Hero Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            <div className="max-w-7xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl mb-6">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
                    AI Customer Experience Platform 2030
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                  Revolutionize customer engagement with AI-powered insights, predictive analytics, and intelligent automation. Create exceptional customer experiences that drive loyalty and growth.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
              >
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">$199</div>
                  <div className="text-gray-400">/month</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400 mb-2">30 Days</div>
                  <div className="text-gray-400">Free Trial</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400 mb-2">10 Minutes</div>
                  <div className="text-gray-400">Setup Time</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-xl font-semibold text-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                  Start Free Trial
                </button>
                <button className="px-8 py-4 border-2 border-purple-400 text-purple-400 rounded-xl font-semibold text-lg hover:bg-purple-400 hover:text-black transition-all duration-200">
                  Schedule Demo
                </button>
              </motion.div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent"></div>
            <div className="max-w-7xl mx-auto relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Revolutionary Features
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Experience the future of customer experience management with AI-powered insights, automation, and personalization.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group cursor-pointer"
                  >
                    <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-8 h-full hover:from-purple-800/60 hover:to-pink-800/60 transition-all duration-300 hover:scale-105">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Market Position Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Market Position
                  </span>
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  {marketPosition}
                </p>
              </motion.div>
            </div>
          </section>

          {/* Use Cases Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent"></div>
            <div className="max-w-6xl mx-auto relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Use Cases & Applications
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Our AI Customer Experience Platform is designed for diverse industries and use cases.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {useCases.map((useCase, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-xl border border-purple-500/20 rounded-xl p-6 hover:from-purple-800/40 hover:to-pink-800/40 transition-all duration-300"
                  >
                    <h3 className="text-lg font-semibold text-white mb-3">{useCase}</h3>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* ROI Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                    Proven ROI & Results
                  </span>
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  {roi}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-400 mb-2">350%</div>
                    <div className="text-gray-400">Average ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-purple-400 mb-2">8 Months</div>
                    <div className="text-gray-400">Time to ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-pink-400 mb-2">2200+</div>
                    <div className="text-gray-400">Happy Customers</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-semibold text-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-200">
                    Get Started Today
                  </button>
                  <button className="px-8 py-4 border-2 border-green-400 text-green-400 rounded-xl font-semibold text-lg hover:bg-green-400 hover:text-black transition-all duration-200">
                    View Case Studies
                  </button>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent"></div>
            <div className="max-w-4xl mx-auto text-center relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Ready to Transform Your Customer Experience with
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent"> AI-Powered Intelligence?</span>
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Contact our team of AI experts to discuss how our revolutionary 2030 Customer Experience Platform can transform your business and create exceptional customer relationships.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                  <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200">
                    Schedule Consultation
                  </button>
                  <button className="px-8 py-4 border-2 border-purple-400 text-purple-400 rounded-xl font-semibold text-lg hover:bg-purple-400 hover:text-black transition-all duration-200">
                    View Pricing
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-gray-300">
                  <div className="flex items-center justify-center space-x-2">
                    <Phone className="w-5 h-5 text-purple-400" />
                    <span>{contactInfo.mobile}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Mail className="w-5 h-5 text-pink-400" />
                    <span>{contactInfo.email}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <MapPin className="w-5 h-5 text-purple-400" />
                    <span className="text-sm">{contactInfo.address}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        <UltraFuturisticFooter2030 />
      </UltraFuturisticBackground2030>
    </>
  );
}