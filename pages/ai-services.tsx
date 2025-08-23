import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Brain, Cpu, Database, Cloud, Shield, Zap, 
  TrendingUp, Users, Award, ArrowRight, Star,
  Globe, Lock, Palette, Heart, Rocket
} from 'lucide-react';
import Link from 'next/link';

const aiServices = [
  {
    title: 'Machine Learning Solutions',
    description: 'Custom ML models and algorithms for predictive analytics, pattern recognition, and intelligent automation.',
    icon: <Brain className="w-8 h-8 text-cyan-400" />,
    features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Recommendation Systems'],
    href: '/mlops-starter'
  },
  {
    title: 'AI-Powered Analytics',
    description: 'Advanced business intelligence with AI-driven insights and real-time data processing.',
    icon: <TrendingUp className="w-8 h-8 text-purple-400" />,
    features: ['Real-time Analytics', 'Predictive Insights', 'Data Visualization', 'Business Intelligence'],
    href: '/rag-evaluation-lab'
  },
  {
    title: 'Intelligent Automation',
    description: 'AI-driven process automation and workflow optimization for increased efficiency.',
    icon: <Zap className="w-8 h-8 text-yellow-400" />,
    features: ['Process Automation', 'Workflow Optimization', 'Smart Decision Making', 'Efficiency Gains'],
    href: '/synthetic-monitor-recorder'
  },
  {
    title: 'AI Security & Compliance',
    description: 'AI-powered cybersecurity solutions with automated threat detection and compliance monitoring.',
    icon: <Shield className="w-8 h-8 text-red-400" />,
    features: ['Threat Detection', 'Compliance Monitoring', 'Risk Assessment', 'Security Automation'],
    href: '/quantum-cybersecurity'
  },
  {
    title: 'Cognitive Computing',
    description: 'Advanced cognitive systems that mimic human thought processes and decision-making.',
    icon: <Cpu className="w-8 h-8 text-green-400" />,
    features: ['Cognitive Processing', 'Decision Support', 'Learning Systems', 'Adaptive Intelligence'],
    href: '/quantum-ai-cognitive'
  },
  {
    title: 'AI Infrastructure',
    description: 'Scalable AI infrastructure and cloud platforms for enterprise AI deployment.',
    icon: <Cloud className="w-8 h-8 text-blue-400" />,
    features: ['Scalable Infrastructure', 'Cloud AI Platforms', 'GPU Clusters', 'Model Deployment'],
    href: '/quantum-cloud-infrastructure'
  }
];

const industries = [
  'Healthcare', 'Finance', 'Manufacturing', 'Retail', 'Education', 'Government'
];

export default function AIServices() {
  return (
    <Layout>
      <SEO 
        title="AI & Machine Learning Services | Zion Tech Group"
        description="Advanced AI and machine learning solutions for enterprise transformation. Custom ML models, intelligent automation, and AI-powered analytics."
        canonical="https://ziontechgroup.com/ai-services/"
      />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-gray-800/20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
                <Brain className="w-4 h-4 mr-2" />
                AI & Machine Learning Excellence
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                AI-Powered
              </span>
              <br />
              <span className="text-white">Transformation</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Unleash the power of artificial intelligence with our cutting-edge machine learning solutions. 
              From predictive analytics to intelligent automation, we're your partner in AI innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-2xl hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
              >
                Start AI Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                href="/services"
                className="inline-flex items-center px-8 py-4 border border-gray-600 text-white font-semibold rounded-2xl hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Floating AI Elements */}
        <div className="absolute top-20 left-10 opacity-20 animate-float">
          <Brain className="w-16 h-16 text-cyan-400" />
        </div>
        <div className="absolute top-40 right-20 opacity-20 animate-float-delayed">
          <Cpu className="w-12 h-12 text-purple-400" />
        </div>
        <div className="absolute bottom-40 left-20 opacity-20 animate-float">
          <Database className="w-14 h-14 text-blue-400" />
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive AI Solutions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our AI services span the entire spectrum of machine learning and artificial intelligence, 
              delivering measurable results across industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-cyan-500/50 hover:bg-gray-800/70 transition-all duration-300 transform hover:scale-105"
              >
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-700/50 rounded-xl group-hover:bg-cyan-500/10 transition-colors duration-300">
                    {service.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <Star className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href={service.href}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              AI Across Industries
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our AI solutions are transforming businesses across diverse sectors, 
              delivering innovation and competitive advantage.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group text-center"
              >
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-500/50 hover:bg-gray-800/70 transition-all duration-300 transform hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Rocket className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {industry}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join the AI revolution and unlock unprecedented growth opportunities. 
              Our experts are ready to guide your transformation journey.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-2xl hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                href="/quote"
                className="inline-flex items-center px-8 py-4 border border-gray-600 text-white font-semibold rounded-2xl hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
              >
                Request Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
