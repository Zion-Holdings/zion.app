import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Brain, Rocket, Shield, Zap, Target, Atom, Cpu, 
  Lock, Cloud, Settings, Eye, Award, Clock, Heart, 
  Lightbulb, Search, Grid, List, TrendingUp, 
  User, ShoppingCart, Bell, HelpCircle, FileText, 
  Video, Headphones, Code, Database, Network, Server, 
  Monitor, Smartphone, Camera, Gamepad2, Palette, 
  Music, Film, BookOpenCheck, Building, MessageCircle, 
  Sparkles, ArrowRight, CheckCircle, Star
} from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
      id: 'ai-consciousness',
      name: 'AI Consciousness Evolution',
      description: 'Advanced AI systems with emotional intelligence and consciousness capabilities',
      features: ['Emotional Intelligence', 'Consciousness Simulation', 'Ethical AI Framework', 'Human-AI Collaboration'],
      price: '$2,999',
      period: 'month',
      popular: true,
      icon: <Brain className="w-8 h-8" />
    },
    {
      id: 'ai-autonomous-operations',
      name: 'Autonomous Business Operations',
      description: 'Fully automated business processes with AI decision-making',
      features: ['Process Automation', 'Decision Intelligence', 'Predictive Analytics', 'Continuous Learning'],
      price: '$1,999',
      period: 'month',
      popular: false,
      icon: <Rocket className="w-8 h-8" />
    },
    {
      id: 'ai-research-assistant',
      name: 'AI Research Assistant',
      description: 'Intelligent research automation and knowledge discovery',
      features: ['Research Automation', 'Knowledge Discovery', 'Data Analysis', 'Insight Generation'],
      price: '$1,499',
      period: 'month',
      popular: false,
      icon: <Search className="w-8 h-8" />
    },
    {
      id: 'ai-predictive-maintenance',
      name: 'AI Predictive Maintenance',
      description: 'Predictive maintenance solutions for industrial operations',
      features: ['Equipment Monitoring', 'Failure Prediction', 'Maintenance Scheduling', 'Cost Optimization'],
      price: '$1,299',
      period: 'month',
      popular: false,
      icon: <Settings className="w-8 h-8" />
    },
    {
      id: 'ai-content-personalization',
      name: 'AI Content Personalization',
      description: 'Dynamic content personalization powered by AI',
      features: ['User Behavior Analysis', 'Content Optimization', 'Real-time Adaptation', 'Performance Analytics'],
      price: '$999',
      period: 'month',
      popular: false,
      icon: <Eye className="w-8 h-8" />
    },
    {
      id: 'ai-ecosystem-manager',
      name: 'AI Ecosystem Manager',
      description: 'Comprehensive AI ecosystem management and orchestration',
      features: ['Ecosystem Orchestration', 'Resource Management', 'Performance Monitoring', 'Scalability Management'],
      price: '$2,499',
      period: 'month',
      popular: false,
      icon: <Network className="w-8 h-8" />
    }
  ];

  const aiCapabilities = [
    {
      title: 'Machine Learning',
      description: 'Advanced ML algorithms for pattern recognition and prediction',
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: 'Deep Learning',
      description: 'Neural networks for complex problem solving',
      icon: <Network className="w-6 h-6" />
    },
    {
      title: 'Natural Language Processing',
      description: 'Human-like language understanding and generation',
      icon: <MessageCircle className="w-6 h-6" />
    },
    {
      title: 'Computer Vision',
      description: 'Advanced image and video analysis capabilities',
      icon: <Eye className="w-6 h-6" />
    },
    {
      title: 'Predictive Analytics',
      description: 'Data-driven insights and future predictions',
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: 'Automated Decision Making',
      description: 'Intelligent decision support systems',
      icon: <Target className="w-6 h-6" />
    }
  ];

  return (
    <Layout>
      <SEO 
        title="AI & Machine Learning Services - Zion Tech Group"
        description="Advanced AI and machine learning solutions for modern businesses. From consciousness evolution to autonomous operations, we deliver cutting-edge AI technology."
        keywords="AI services, machine learning, artificial intelligence, AI consciousness, autonomous operations, predictive analytics"
      />
      
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-[60vh] flex items-center justify-center px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                AI & Machine Learning
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Pioneering the future of artificial intelligence with consciousness evolution, autonomous operations, and intelligent decision-making systems
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </a>
                <a 
                  href="/contact" 
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105"
                >
                  Schedule Demo
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* AI Capabilities */}
        <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                AI Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI solutions covering every aspect of modern business intelligence
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiCapabilities.map((capability, index) => (
                <motion.div
                  key={capability.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-cyan-500 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-cyan-500/20 rounded-lg mr-3">
                      {capability.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white">{capability.title}</h3>
                  </div>
                  <p className="text-gray-300">{capability.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Services */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                AI Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive suite of AI-powered solutions
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border transition-all duration-300 hover:scale-105 ${
                    service.popular 
                      ? 'border-cyan-500 shadow-lg shadow-cyan-500/25' 
                      : 'border-gray-700 hover:border-cyan-500'
                  }`}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className="inline-flex p-3 bg-cyan-500/20 rounded-full mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <div className="text-3xl font-bold text-cyan-400 mb-2">
                      {service.price}
                      <span className="text-lg text-gray-400">/{service.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <a 
                    href="/contact" 
                    className="w-full block text-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                  >
                    Get Started
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join the AI revolution and unlock unprecedented business potential with our cutting-edge solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Your AI Journey
                </a>
                <a 
                  href="/contact" 
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105"
                >
                  Schedule Consultation
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default AIServicesPage;
