import React from 'react';
import Layout from '../../components/layout/Layout';
import { motion } from 'framer-motion';
import { Target, Sparkles, Zap, Users, Award, Clock, CheckCircle, Briefcase, TrendingUp } from 'lucide-react';
import Link from 'next/link';

const BusinessSolutionsPage: React.FC = () => {
  const services = [
    {
      name: 'Autonomous AI Business Intelligence 2045',
      description: 'Fully autonomous AI business intelligence with consciousness evolution',
      href: '/autonomous-ai-business-intelligence-2045',
      icon: Target,
      color: 'from-emerald-500 to-teal-500'
    },
    {
      name: 'AI Content Intelligence Platform 2045',
      description: 'Advanced AI content creation and optimization with consciousness',
      href: '/ai-content-intelligence-platform-2045',
      icon: Sparkles,
      color: 'from-teal-500 to-cyan-500'
    },
    {
      name: 'Predictive Analytics Platform 2045',
      description: 'AI-powered predictive analytics with consciousness integration',
      href: '/predictive-analytics-platform-2045',
      icon: TrendingUp,
      color: 'from-emerald-500 to-green-500'
    },
    {
      name: 'Business Process Automation 2045',
      description: 'Intelligent business process automation with AI consciousness',
      href: '/business-process-automation-2045',
      icon: Briefcase,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const features = [
    { icon: Target, title: "Autonomous Intelligence", description: "Self-governing business systems" },
    { icon: Sparkles, title: "Content Optimization", description: "AI-powered content creation" },
    { icon: TrendingUp, title: "Predictive Analytics", description: "Future-focused insights" },
    { icon: Zap, title: "Process Automation", description: "Intelligent workflow optimization" }
  ];

  const stats = [
    { number: "500%", label: "Efficiency Gain", icon: TrendingUp },
    { number: "99.9%", label: "Accuracy Rate", icon: CheckCircle },
    { number: "24/7", label: "Operation", icon: Clock },
    { number: "100+", label: "Enterprise Clients", icon: Users }
  ];

  return (
    <Layout 
      title="Business Solutions Services - Zion Tech Group"
      description="Revolutionary business solutions with autonomous AI intelligence, content optimization, and predictive analytics. Leading the future of business automation."
      keywords="business solutions, AI business intelligence, content intelligence, predictive analytics, business automation, Zion Tech Group"
    >
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/20 to-teal-900/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Business Solutions
                <span className="block bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Revolution Platform
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Pioneering the future of business with autonomous AI intelligence, content optimization, 
                and predictive analytics for unprecedented growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-full hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105"
                >
                  Transform Your Business
                  <Target className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  href="/services"
                  className="inline-flex items-center px-8 py-4 border-2 border-emerald-500 text-emerald-400 font-semibold rounded-full hover:bg-emerald-500 hover:text-white transition-all duration-300"
                >
                  Explore All Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Revolutionary Business Capabilities
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our business solutions platform delivers unprecedented intelligence with autonomous AI, 
                content optimization, and predictive analytics capabilities.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Business Solutions Services
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Discover our comprehensive suite of AI-powered business intelligence and automation solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Link href={service.href}>
                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-300 group-hover:scale-105">
                      <div className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <service.icon className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors duration-300">
                        {service.name}
                      </h3>
                      <p className="text-gray-400 text-lg leading-relaxed">
                        {service.description}
                      </p>
                      <div className="mt-6 flex items-center text-emerald-400 group-hover:text-emerald-300 transition-colors duration-300">
                        <span className="font-semibold">Learn More</span>
                        <Target className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Join the business intelligence revolution with autonomous AI and predictive analytics. 
                Transform your operations with the future of business automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-full hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105"
                >
                  Transform Your Business
                  <Target className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  href="/services"
                  className="inline-flex items-center px-8 py-4 border-2 border-emerald-500 text-emerald-400 font-semibold rounded-full hover:bg-emerald-500 hover:text-white transition-all duration-300"
                >
                  Explore All Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default BusinessSolutionsPage;