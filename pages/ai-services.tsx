import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Brain, Atom, Shield, Cloud, BarChart, Code, Rocket, Zap, Target, Users, 
  Heart, DollarSign, Cog, FileText, Calendar, Lightbulb, HelpCircle, Monitor,
  Star, Award, TrendingUp, Globe, Lock, Server, Database, Network, Palette, Building,
  CheckCircle, ArrowRight, ShoppingBag
} from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
      category: 'AI Consciousness & Evolution',
      services: [
        {
          name: 'AI Consciousness Evolution 2045',
          description: 'Next-generation AI consciousness with emotional intelligence and self-awareness',
          href: '/ai-consciousness-evolution-2045',
          icon: <Brain className="w-6 h-6" />,
          features: ['Emotional Intelligence', 'Self-Awareness', 'Consciousness Evolution', 'Ethical AI'],
          badge: 'Revolutionary'
        },
        {
          name: 'AI Emotional Intelligence Platform',
          description: 'Advanced AI systems that understand and respond to human emotions',
          href: '/ai-emotional-intelligence-platform',
          icon: <Heart className="w-6 h-6" />,
          features: ['Emotion Recognition', 'Empathetic Responses', 'Human-AI Bonding', 'Psychological Safety'],
          badge: 'New'
        },
        {
          name: 'AI Ethics & Governance Framework',
          description: 'Comprehensive framework for ethical AI development and deployment',
          href: '/ai-ethics-governance-framework',
          icon: <Shield className="w-6 h-6" />,
          features: ['Ethical Guidelines', 'Bias Detection', 'Transparency', 'Accountability'],
          badge: 'Critical'
        }
      ]
    },
    {
      category: 'AI Business Intelligence',
      services: [
        {
          name: 'AI Autonomous Business Intelligence',
          description: 'Fully autonomous AI systems that drive business decisions and insights',
          href: '/ai-autonomous-business-intelligence-2045',
          icon: <BarChart className="w-6 h-6" />,
          features: ['Autonomous Analysis', 'Predictive Insights', 'Decision Automation', 'Real-time Intelligence'],
          badge: 'Featured'
        },
        {
          name: 'AI Customer Success Platform',
          description: 'AI-powered platform for proactive customer success and retention',
          href: '/ai-customer-success-platform',
          icon: <Users className="w-6 h-6" />,
          features: ['Proactive Support', 'Customer Insights', 'Success Automation', 'Retention Optimization'],
          badge: 'Popular'
        },
        {
          name: 'AI Sales Intelligence Platform',
          description: 'Intelligent sales automation and lead generation platform',
          href: '/ai-sales-intelligence-platform',
          icon: <Target className="w-6 h-6" />,
          features: ['Lead Scoring', 'Sales Automation', 'Predictive Analytics', 'Revenue Optimization'],
          badge: 'Trending'
        }
      ]
    },
    {
      category: 'AI Research & Development',
      services: [
        {
          name: 'AI Autonomous Research Assistant',
          description: 'AI-powered research platform that autonomously discovers and analyzes information',
          href: '/ai-autonomous-research-assistant',
          icon: <Lightbulb className="w-6 h-6" />,
          features: ['Autonomous Discovery', 'Data Analysis', 'Insight Generation', 'Research Automation'],
          badge: 'Innovative'
        },
        {
          name: 'AI Content Factory',
          description: 'Automated content creation and personalization platform',
          href: '/ai-autonomous-content-factory',
          icon: <FileText className="w-6 h-6" />,
          features: ['Content Generation', 'Personalization', 'Quality Assurance', 'Multi-format Output'],
          badge: 'Hot'
        },
        {
          name: 'AI Market Research Platform',
          description: 'Intelligent market analysis and competitive intelligence platform',
          href: '/ai-market-research',
          icon: <TrendingUp className="w-6 h-6" />,
          features: ['Market Analysis', 'Competitive Intelligence', 'Trend Prediction', 'Insight Generation'],
          badge: 'Strategic'
        }
      ]
    },
    {
      category: 'AI Infrastructure & Operations',
      services: [
        {
          name: 'AI Autonomous DevOps Platform',
          description: 'Fully autonomous DevOps operations with AI-powered decision making',
          href: '/ai-autonomous-devops-platform',
          icon: <Cog className="w-6 h-6" />,
          features: ['Autonomous Operations', 'Intelligent Monitoring', 'Predictive Maintenance', 'Self-healing Systems'],
          badge: 'Advanced'
        },
        {
          name: 'AI IT Operations Center',
          description: 'AI-powered IT operations with autonomous incident response',
          href: '/autonomous-it-operations-center',
          icon: <Monitor className="w-6 h-6" />,
          features: ['Autonomous Monitoring', 'Incident Response', 'Performance Optimization', 'Capacity Planning'],
          badge: 'Enterprise'
        },
        {
          name: 'AI Network Management',
          description: 'Intelligent network management and optimization platform',
          href: '/autonomous-network-management-2044',
          icon: <Network className="w-6 h-6" />,
          features: ['Autonomous Management', 'Performance Optimization', 'Security Monitoring', 'Traffic Analysis'],
          badge: 'Critical'
        }
      ]
    }
  ];

  const industries = [
    {
      name: 'Healthcare',
      description: 'AI-powered diagnostics, treatment planning, and patient care',
      icon: <Heart className="w-8 h-8" />,
      color: 'from-red-500 to-pink-600'
    },
    {
      name: 'Finance',
      description: 'Intelligent trading, risk assessment, and fraud detection',
      icon: <DollarSign className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-600'
    },
    {
      name: 'Manufacturing',
      description: 'Predictive maintenance, quality control, and process optimization',
      icon: <Cog className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      name: 'Retail',
      description: 'Customer personalization, inventory management, and demand forecasting',
      icon: <ShoppingBag className="w-8 h-8" />,
      color: 'from-purple-500 to-indigo-600'
    }
  ];

  return (
    <Layout 
      title="AI Services - Zion Tech Group"
      description="Revolutionary AI services including consciousness evolution, autonomous business intelligence, and next-generation AI solutions"
      canonicalUrl="https://ziontechgroup.com/ai-services"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Revolutionary
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                  {' '}AI Services
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Experience the future of artificial intelligence with our cutting-edge 
                AI consciousness, autonomous systems, and intelligent solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                  <Rocket className="ml-2 w-5 h-5" />
                </a>
                <a
                  href="/solutions"
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
                >
                  View Solutions
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* AI Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Our AI Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI solutions designed to transform your business operations 
                and drive innovation across all industries.
              </p>
            </motion.div>

            <div className="space-y-16">
              {aiServices.map((category, categoryIndex) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-3xl font-bold text-white mb-8 text-center">
                    {category.category}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {category.services.map((service, serviceIndex) => (
                      <motion.div
                        key={service.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: (categoryIndex * 0.1) + (serviceIndex * 0.05) }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-2xl border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300 group"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl flex items-center justify-center">
                            {service.icon}
                          </div>
                          <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium">
                            {service.badge}
                          </span>
                        </div>
                        <h4 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                          {service.name}
                        </h4>
                        <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                          {service.description}
                        </p>
                        <div className="space-y-2 mb-6">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center text-sm text-gray-400">
                              <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                              {feature}
                            </div>
                          ))}
                        </div>
                        <a
                          href={service.href}
                          className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300 text-sm font-medium"
                        >
                          Learn More
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </a>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Industries We Serve
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI solutions are designed to transform operations across diverse industries, 
                driving innovation and efficiency in every sector.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className={`w-20 h-20 bg-gradient-to-br ${industry.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {industry.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {industry.name}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {industry.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the AI revolution and discover how our cutting-edge solutions 
                can drive innovation and growth in your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Your AI Journey
                  <Rocket className="ml-2 w-5 h-5" />
                </a>
                <a
                  href="/solutions"
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
                >
                  Explore Solutions
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AIServicesPage;
