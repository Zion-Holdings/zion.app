import React from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Brain, 
  BarChart3, 
  Bot, 
  Cloud, 
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Globe,
  Rocket
} from 'lucide-react';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import { expandedMicroSaasServices } from '../data/expanded-micro-saas-services';

const SolutionsPage: React.FC = () => {
  const solutions = [
    {
      title: 'Micro SaaS Platforms',
      description: 'Revolutionary micro SaaS solutions that transform business operations',
      icon: <Zap className="w-8 h-8" />,
      features: ['Scalable Architecture', 'API-First Design', 'Multi-Tenant Support', 'Real-time Analytics'],
      href: '/micro-saas',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'AI-Powered Tools',
      description: 'Cutting-edge artificial intelligence solutions for modern businesses',
      icon: <Brain className="w-8 h-8" />,
      features: ['Machine Learning Models', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      href: '/ai-assistant',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Business Intelligence',
      description: 'Advanced analytics and reporting for data-driven decision making',
      icon: <BarChart3 className="w-8 h-8" />,
      features: ['Real-time Dashboards', 'Custom Reports', 'Data Visualization', 'KPI Tracking'],
      href: '/analytics',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Process Automation',
      description: 'Streamline operations with intelligent automation solutions',
      icon: <Bot className="w-8 h-8" />,
      features: ['RPA Implementation', 'Workflow Automation', 'Smart Scheduling', 'Integration APIs'],
      href: '/automation',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Cloud Platforms',
      description: 'Enterprise-grade cloud infrastructure and platform services',
      icon: <Cloud className="w-8 h-8" />,
      features: ['Multi-Cloud Management', 'Auto-scaling', 'Security & Compliance', '24/7 Monitoring'],
      href: '/cloud-platform',
      color: 'from-indigo-500 to-blue-500'
    }
  ];

  const stats = [
    { label: 'Solutions Deployed', value: '500+', icon: <Rocket className="w-6 h-6" /> },
    { label: 'Client Satisfaction', value: '99.9%', icon: <Star className="w-6 h-6" /> },
    { label: 'Global Reach', value: '50+ Countries', icon: <Globe className="w-6 h-6" /> },
    { label: 'Team Experts', value: '100+', icon: <Users className="w-6 h-6" /> }
  ];

  return (
    <UltraFuturisticBackground variant="quantum">
      <div className="min-h-screen">
        <SEO title="Solutions - Zion Tech Group | Revolutionary AI, Quantum Computing & Emerging Technology Solutions" description="Discover Zion Tech Group's comprehensive solutions portfolio including Micro SaaS platforms, AI-powered tools, Business Intelligence, Process Automation, and Cloud platforms." url="https://ziontechgroup.com/solutions/" />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Revolutionary Solutions
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Transform your business with our cutting-edge technology solutions. From AI-powered tools to quantum computing platforms, we deliver innovation that drives results.
            </motion.p>
            
            {/* Stats Grid */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2 text-cyan-400">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Solution Portfolio
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to address the most complex business challenges
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  className="group relative bg-black/40 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${solution.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {solution.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                    {solution.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {solution.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href={solution.href}
                    className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 group-hover:translate-x-1"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-400/20 rounded-3xl p-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let our expert team help you implement the right solutions for your unique challenges
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-cyan-500/25"
                >
                  Get Started Today
                </a>
                <a
                  href="/services"
                  className="border border-cyan-400/40 text-cyan-400 hover:bg-cyan-400/10 px-8 py-4 rounded-xl font-semibold transition-all duration-200"
                >
                  View All Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </UltraFuturisticBackground>
  );
};

export default SolutionsPage;