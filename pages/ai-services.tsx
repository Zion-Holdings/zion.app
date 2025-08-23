import React from 'react';
import Layout from '../components/layout/Layout';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Brain, Zap, Target, Shield, Users, BarChart3, 
  MessageCircle, Search, Code, Globe, ArrowRight,
  CheckCircle, Star, TrendingUp
} from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
      category: 'AI Consciousness & Evolution',
      services: [
        {
          name: 'AI Consciousness Evolution 2029',
          description: 'Advanced AI systems that evolve and adapt, pushing the boundaries of machine intelligence',
          href: '/ai-consciousness-evolution-2029',
          featured: true,
          icon: <Brain className="w-6 h-6" />
        },
        {
          name: 'AI Emotional Intelligence Training',
          description: 'AI systems that understand and respond to human emotions',
          href: '/ai-emotional-intelligence-training',
          featured: true,
          icon: <MessageCircle className="w-6 h-6" />
        },
        {
          name: 'AI Autonomous Research Assistant',
          description: 'Self-directed AI research systems for breakthrough discoveries',
          href: '/ai-autonomous-research-assistant',
          icon: <Search className="w-6 h-6" />
        }
      ]
    },
    {
      category: 'AI Business Solutions',
      services: [
        {
          name: 'AI Autonomous Business Operations',
          description: 'End-to-end business process automation with AI',
          href: '/autonomous-business-operations-platform',
          featured: true,
          icon: <Target className="w-6 h-6" />
        },
        {
          name: 'AI Customer Success Platform',
          description: 'Intelligent customer relationship management',
          href: '/ai-customer-success-platform',
          icon: <Users className="w-6 h-6" />
        },
        {
          name: 'AI Sales Intelligence Platform',
          description: 'Data-driven sales optimization and intelligence',
          href: '/ai-sales-intelligence-platform',
          icon: <BarChart3 className="w-6 h-6" />
        }
      ]
    },
    {
      category: 'AI Development & Engineering',
      services: [
        {
          name: 'AI Code Review Copilot',
          description: 'Intelligent code analysis and improvement suggestions',
          href: '/ai-code-review-copilot',
          icon: <Code className="w-6 h-6" />
        },
        {
          name: 'AI Content Personalization Engine',
          description: 'Dynamic content adaptation based on user behavior',
          href: '/ai-content-personalization-engine',
          icon: <Globe className="w-6 h-6" />
        },
        {
          name: 'AI Predictive Maintenance Platform',
          description: 'Proactive equipment maintenance using AI analytics',
          href: '/ai-predictive-maintenance-platform',
          icon: <TrendingUp className="w-6 h-6" />
        }
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Brain className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              Revolutionary artificial intelligence solutions that transform businesses and drive innovation across industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300"
              >
                Get Started
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/demo"
                className="border border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 backdrop-blur-md hover:bg-white/10"
              >
                Request Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Complete AI Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From consciousness evolution to business automation, our AI services cover every aspect of intelligent technology.
            </p>
          </motion.div>

          <div className="space-y-16">
            {aiServices.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-bold text-white mb-8 text-center">
                  {category.category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                      viewport={{ once: true }}
                      className={`bg-gradient-to-br from-gray-900/50 to-gray-800/50 border rounded-2xl p-6 backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-300 ${
                        service.featured ? 'border-cyan-500/30' : 'border-gray-700/50'
                      }`}
                    >
                      {service.featured && (
                        <div className="flex items-center mb-4">
                          <Star className="w-5 h-5 text-yellow-400 mr-2" />
                          <span className="text-yellow-400 text-sm font-semibold">Featured</span>
                        </div>
                      )}
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center mb-4">
                        {service.icon}
                      </div>
                      <h4 className="text-xl font-bold text-white mb-3">{service.name}</h4>
                      <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                      <Link
                        href={service.href}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                      >
                        Learn More <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-cyan-900/20 to-purple-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our AI solutions can drive innovation and growth for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300"
              >
                Start Your AI Journey
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/resources"
                className="border border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 backdrop-blur-md hover:bg-white/10"
              >
                Explore Resources
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default AIServicesPage;
