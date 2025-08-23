import React from 'react';
import Layout from '../../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Target, Sparkles, Zap, Star, ArrowRight, 
  CheckCircle, Users, Award, Clock, TrendingUp, Briefcase
} from 'lucide-react';
import Link from 'next/link';

const BusinessSolutionsServices: React.FC = () => {
  const services = [
    {
      title: "Autonomous AI Business Intelligence",
      description: "Revolutionary AI-powered business intelligence with autonomous decision making",
      href: "/autonomous-ai-business-intelligence-2045",
      features: ["Autonomous Decision Making", "AI Consciousness", "Business Intelligence", "Predictive Analytics"],
      price: "$19,999/month",
      badge: "Featured"
    },
    {
      title: "AI Content Intelligence Platform",
      description: "Advanced AI content intelligence with consciousness and automation",
      href: "/ai-content-intelligence-platform-2045",
      features: ["Content Intelligence", "AI Consciousness", "Automation", "Content Optimization"],
      price: "$14,999/month",
      badge: "Popular"
    },
    {
      title: "Predictive Analytics Platform",
      description: "Next-generation predictive analytics with AI consciousness and forecasting",
      href: "/predictive-analytics-platform-2045",
      features: ["Predictive Analytics", "AI Forecasting", "Consciousness Integration", "Business Insights"],
      price: "$24,999/month",
      badge: "Advanced"
    },
    {
      title: "Business Process Automation",
      description: "Comprehensive business process automation with AI consciousness",
      href: "/business-process-automation-2045",
      features: ["Process Automation", "AI Consciousness", "Workflow Optimization", "Efficiency Boost"],
      price: "$9,999/month",
      badge: "Essential"
    }
  ];

  const stats = [
    { number: "2000+", label: "Business Projects", icon: Target },
    { number: "99.9%", label: "Success Rate", icon: CheckCircle },
    { number: "500+", label: "Business Clients", icon: Users },
    { number: "24/7", label: "Business Support", icon: Clock }
  ];

  return (
    <Layout 
      title="Business Solutions Services - Zion Tech Group"
      description="Revolutionary business solutions including AI business intelligence, content intelligence, and process automation. Transform your business with cutting-edge AI technology."
      keywords="business solutions, AI business intelligence, content intelligence, process automation, Zion Tech Group"
    >
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-emerald-900 to-gray-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full px-4 py-2 mb-6">
                <Target className="w-5 h-5 text-emerald-400" />
                <span className="text-emerald-300 text-sm font-medium">Business Solutions Services</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Revolutionary
                <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                  {" "}Business Solutions
                </span>
                <br />
                with AI
              </h1>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Transform your business with autonomous AI intelligence, content optimization, 
                and process automation that drives growth and efficiency.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-full hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 shadow-lg hover:shadow-emerald-500/25"
                >
                  Transform Your Business
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  href="/solutions"
                  className="inline-flex items-center px-8 py-4 border-2 border-emerald-500 text-emerald-400 font-semibold rounded-full hover:bg-emerald-500 hover:text-white transition-all duration-300"
                >
                  Explore Solutions
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-500/20 rounded-full mb-4">
                    <stat.icon className="w-8 h-8 text-emerald-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Business Solutions Services
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Choose from our comprehensive suite of business transformation and AI intelligence services
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10"
                >
                  {service.badge && (
                    <div className="inline-flex items-center px-3 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-xs font-medium text-emerald-300 mb-4">
                      {service.badge}
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-2xl font-bold text-emerald-400">{service.price}</div>
                    <Star className="w-5 h-5 text-yellow-400" />
                  </div>
                  
                  <Link 
                    href={service.href}
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-lg hover:from-emerald-600 hover:to-teal-600 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the AI revolution in business. Transform your operations, intelligence, 
                and processes with our revolutionary business solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-full hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 shadow-lg hover:shadow-emerald-500/25"
                >
                  Start Business Transformation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  href="/team"
                  className="inline-flex items-center px-8 py-4 border-2 border-emerald-500 text-emerald-400 font-semibold rounded-full hover:bg-emerald-500 hover:text-white transition-all duration-300"
                >
                  Meet Our Team
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default BusinessSolutionsServices;