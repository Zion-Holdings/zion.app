import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Brain, Atom, Shield, Cloud, BarChart, Code, Rocket, Zap, Target, Users, 
  Heart, DollarSign, Cog, FileText, Calendar, Lightbulb, HelpCircle, Monitor,
  Star, Award, TrendingUp, Globe, Lock, Server, Database, Network, Palette, Building
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
      category: 'AI Industry Solutions',
      services: [
        {
          name: 'Healthcare AI Solutions',
          description: 'AI-powered healthcare diagnostics and patient care optimization',
          href: '/healthcare-ai-solutions',
          icon: <Heart className="w-6 h-6" />,
          features: ['Medical Diagnostics', 'Patient Care', 'Drug Discovery', 'Healthcare Analytics'],
          badge: 'Critical'
        },
        {
          name: 'Financial AI Intelligence',
          description: 'AI-powered financial analysis and fraud detection platform',
          href: '/ai-financial-intelligence',
          icon: <DollarSign className="w-6 h-6" />,
          features: ['Financial Analysis', 'Fraud Detection', 'Risk Assessment', 'Investment Insights'],
          badge: 'Secure'
        },
        {
          name: 'Manufacturing AI Optimization',
          description: 'AI-powered manufacturing process optimization and predictive maintenance',
          href: '/ai-manufacturing-optimization',
          icon: <Cog className="w-6 h-6" />,
          features: ['Process Optimization', 'Predictive Maintenance', 'Quality Control', 'Efficiency Improvement'],
          badge: 'Efficient'
        }
      ]
    }
  ];

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Advanced AI Consciousness',
      description: 'Next-generation AI with emotional intelligence and self-awareness'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Ethical AI Development',
      description: 'Built with comprehensive ethics and governance frameworks'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Autonomous Operations',
      description: 'AI systems that operate independently and make intelligent decisions'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Scalability',
      description: 'Deploy AI solutions across multiple regions and languages'
    }
  ];

  const stats = [
    { number: '500+', label: 'AI Models Deployed', icon: <Brain className="w-6 h-6" /> },
    { number: '99.9%', label: 'Uptime SLA', icon: <Server className="w-6 h-6" /> },
    { number: '50+', label: 'Industries Served', icon: <Building className="w-6 h-6" /> },
    { number: '24/7', label: 'AI Monitoring', icon: <Monitor className="w-6 h-6" /> }
  ];

  return (
    <Layout
      title="AI Services - Zion Tech Group"
      description="Revolutionary AI services including consciousness evolution, business intelligence, and autonomous solutions. Transform your business with cutting-edge AI technology."
      keywords="AI services, artificial intelligence, AI consciousness, business intelligence, autonomous AI, machine learning, Zion Tech Group"
      canonicalUrl="https://ziontechgroup.com/ai-services"
    >
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Revolutionary AI Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Experience the future of artificial intelligence with our cutting-edge AI consciousness, 
              autonomous business intelligence, and revolutionary machine learning solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 shadow-lg hover:shadow-cyan-500/25"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold text-lg hover:bg-cyan-500 hover:text-white transition-all duration-200"
              >
                View Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Why Choose Our AI Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI solutions are built on cutting-edge technology with a focus on ethics, 
              scalability, and real-world business impact.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Categories */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/10 to-blue-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Comprehensive AI Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From AI consciousness evolution to industry-specific solutions, 
              we provide the full spectrum of artificial intelligence services.
            </p>
          </motion.div>

          <div className="space-y-16">
            {aiServices.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
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
                      transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="group"
                    >
                      <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 h-full">
                        <div className="flex items-start justify-between mb-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center">
                            {service.icon}
                          </div>
                          {service.badge && (
                            <span className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 rounded-full border border-cyan-500/30">
                              {service.badge}
                            </span>
                          )}
                        </div>
                        <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                          {service.name}
                        </h4>
                        <p className="text-gray-400 mb-4 leading-relaxed">
                          {service.description}
                        </p>
                        <ul className="space-y-2 mb-6">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                              <Star className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 rounded-lg border border-cyan-500/30 hover:from-cyan-500/30 hover:to-blue-500/30 transition-all duration-200"
                        >
                          Learn More
                        </motion.button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 rounded-3xl p-12 border border-cyan-500/20">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join the AI revolution and discover how our cutting-edge artificial intelligence 
                services can drive innovation, efficiency, and growth for your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 shadow-lg hover:shadow-cyan-500/25"
                >
                  Start Your AI Journey
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold text-lg hover:bg-cyan-500 hover:text-white transition-all duration-200"
                >
                  Schedule Consultation
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default AIServicesPage;
