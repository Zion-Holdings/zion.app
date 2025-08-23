import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, Zap, Cpu, Database, Shield, Cloud, 
  Users, Target, TrendingUp, ArrowRight, Star,
  CheckCircle, Rocket, Atom, Globe, Code
} from 'lucide-react';
import Link from 'next/link';

const AIServices: React.FC = () => {
  const services = [
    {
      title: 'AI Consciousness Evolution',
      description: 'Revolutionary AI consciousness platform for next-generation computing',
      icon: <Brain className="w-8 h-8" />,
      features: ['Neural network optimization', 'Consciousness simulation', 'Advanced learning algorithms'],
      href: '/ai-consciousness-evolution-2045',
      badge: 'BREAKTHROUGH'
    },
    {
      title: 'Machine Learning Solutions',
      description: 'Custom ML models and algorithms for enterprise applications',
      icon: <Cpu className="w-8 h-8" />,
      features: ['Predictive analytics', 'Pattern recognition', 'Automated decision making'],
      href: '/mlops-starter',
      badge: 'POPULAR'
    },
    {
      title: 'Natural Language Processing',
      description: 'Advanced NLP capabilities for text and speech understanding',
      icon: <Database className="w-8 h-8" />,
      features: ['Text analysis', 'Language translation', 'Sentiment analysis'],
      href: '/llm-gateway',
      badge: 'AI-POWERED'
    },
    {
      title: 'Computer Vision',
      description: 'Image and video recognition systems for various industries',
      icon: <Target className="w-8 h-8" />,
      features: ['Object detection', 'Facial recognition', 'Quality control'],
      href: '/computer-vision-solutions',
      badge: 'VISION'
    },
    {
      title: 'AI Automation',
      description: 'Intelligent automation solutions for business processes',
      icon: <Zap className="w-8 h-8" />,
      features: ['Process optimization', 'Workflow automation', 'Smart scheduling'],
      href: '/ai-automation-platform',
      badge: 'AUTOMATED'
    },
    {
      title: 'AI Consulting',
      description: 'Strategic AI consulting and implementation services',
      icon: <Users className="w-8 h-8" />,
      features: ['Strategy development', 'Implementation planning', 'Training & support'],
      href: '/ai-consulting-services',
      badge: 'EXPERT'
    }
  ];

  const industries = [
    'Healthcare & Biotech',
    'Financial Services', 
    'Manufacturing',
    'Retail & E-commerce',
    'Education',
    'Government',
    'Energy & Utilities',
    'Transportation'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              AI Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Cutting-edge artificial intelligence solutions that transform businesses and drive innovation across industries
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </Link>
              <Link href="/case-studies" className="border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
                View Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Floating AI Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-20 left-10 text-cyan-400/20"
          >
            <Brain className="w-16 h-16" />
          </motion.div>
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute top-40 right-20 text-purple-400/20"
          >
            <Cpu className="w-12 h-12" />
          </motion.div>
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute bottom-40 left-20 text-blue-400/20"
          >
            <Database className="w-14 h-14" />
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our AI Service Portfolio
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to meet the unique needs of modern enterprises
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-500/40 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl">
                    {service.icon}
                  </div>
                  <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold rounded-full">
                    {service.badge}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link 
                  href={service.href}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold group-hover:translate-x-1 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/5 to-purple-500/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI solutions are tailored for diverse industry verticals, delivering measurable results
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl border border-cyan-500/20 rounded-xl p-6 text-center hover:border-cyan-500/40 hover:bg-gray-800/50 transition-all duration-300 group"
              >
                <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Target className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                  {industry}
                </h3>
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
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our AI solutions can drive innovation and growth for your organization
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                Schedule Consultation
              </Link>
              <Link href="/pricing" className="border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIServices;
