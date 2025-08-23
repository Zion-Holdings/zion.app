import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Target, Brain, Rocket, Shield, Zap, Atom, Cpu, 
  Lock, Cloud, Settings, Eye, Award, Clock, Heart, 
  Lightbulb, Search, Grid, List, TrendingUp, 
  User, ShoppingCart, Bell, HelpCircle, FileText, 
  Video, Headphones, Code, Database, Network, Server, 
  Monitor, Smartphone, Camera, Gamepad2, Palette, 
  Music, Film, BookOpenCheck, Building, MessageCircle, 
  Sparkles, ArrowRight, CheckCircle, Star, Globe, Briefcase, BarChart3
} from 'lucide-react';

const SolutionsPage: React.FC = () => {
  const industrySolutions = [
    {
      id: 'healthcare',
      name: 'Healthcare Solutions',
      description: 'AI-powered healthcare technology solutions',
      features: ['Patient Care Optimization', 'Diagnostic AI', 'Healthcare Analytics', 'Compliance Management'],
      price: '$3,999',
      period: 'month',
      popular: true,
      icon: <Heart className="w-8 h-8" />
    },
    {
      id: 'financial',
      name: 'Financial Solutions',
      description: 'Advanced financial technology and services',
      features: ['Risk Management', 'Fraud Detection', 'Trading Systems', 'Compliance Automation'],
      price: '$2,999',
      period: 'month',
      popular: false,
      icon: <TrendingUp className="w-8 h-8" />
    },
    {
      id: 'manufacturing',
      name: 'Manufacturing Solutions',
      description: 'Smart manufacturing and Industry 4.0',
      features: ['Predictive Maintenance', 'Quality Control', 'Supply Chain Optimization', 'IoT Integration'],
      price: '$2,799',
      period: 'month',
      popular: false,
      icon: <Settings className="w-8 h-8" />
    },
    {
      id: 'retail',
      name: 'Retail Solutions',
      description: 'Digital transformation for retail businesses',
      features: ['E-commerce Platforms', 'Customer Analytics', 'Inventory Management', 'Omnichannel Solutions'],
      price: '$2,499',
      period: 'month',
      popular: false,
      icon: <ShoppingCart className="w-8 h-8" />
    },
    {
      id: 'government',
      name: 'Government Solutions',
      description: 'Technology solutions for public sector',
      features: ['Digital Services', 'Security & Compliance', 'Data Management', 'Citizen Engagement'],
      price: '$3,499',
      period: 'month',
      popular: false,
      icon: <Building className="w-8 h-8" />
    },
    {
      id: 'education',
      name: 'Education Solutions',
      description: 'Innovative educational technology',
      features: ['Learning Platforms', 'Student Analytics', 'Administrative Systems', 'Virtual Classrooms'],
      price: '$1,999',
      period: 'month',
      popular: false,
      icon: <BookOpenCheck className="w-8 h-8" />
    }
  ];

  const solutionCapabilities = [
    {
      title: 'Industry Expertise',
      description: 'Deep domain knowledge across sectors',
      icon: <Briefcase className="w-6 h-6" />
    },
    {
      title: 'Custom Development',
      description: 'Tailored solutions for unique needs',
      icon: <Code className="w-6 h-6" />
    },
    {
      title: 'Integration Services',
      description: 'Seamless system integration',
      icon: <Network className="w-6 h-6" />
    },
    {
      title: 'AI & Automation',
      description: 'Intelligent automation solutions',
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: 'Cloud & Security',
      description: 'Secure cloud infrastructure',
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: 'Analytics & Insights',
      description: 'Data-driven decision making',
      icon: <BarChart3 className="w-6 h-6" />
    }
  ];

  return (
    <Layout>
      <SEO 
        title="Industry Solutions - Zion Tech Group"
        description="Specialized technology solutions for every industry. From healthcare to finance, we deliver tailored solutions that drive business success."
        keywords="industry solutions, healthcare solutions, financial technology, manufacturing solutions, retail solutions, government technology"
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
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-red-500 to-pink-600 bg-clip-text text-transparent">
                Industry Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Tailored technology solutions designed for your industry's unique challenges and opportunities
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </a>
                <a 
                  href="/contact" 
                  className="px-8 py-4 border-2 border-orange-400 text-orange-400 font-semibold rounded-lg hover:bg-orange-400 hover:text-black transition-all duration-300 transform hover:scale-105"
                >
                  Schedule Demo
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Solution Capabilities */}
        <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Solution Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive capabilities to deliver industry-specific technology solutions
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutionCapabilities.map((capability, index) => (
                <motion.div
                  key={capability.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-orange-500 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-orange-500/20 rounded-lg mr-3">
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

        {/* Industry Solutions */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Industry Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive suite of industry-specific solutions
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industrySolutions.map((solution, index) => (
                <motion.div
                  key={solution.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border transition-all duration-300 hover:scale-105 ${
                    solution.popular 
                      ? 'border-orange-500 shadow-lg shadow-orange-500/25' 
                      : 'border-gray-700 hover:border-orange-500'
                  }`}
                >
                  {solution.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className="inline-flex p-3 bg-orange-500/20 rounded-full mb-4">
                      {solution.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{solution.name}</h3>
                    <p className="text-gray-300 mb-4">{solution.description}</p>
                    <div className="text-3xl font-bold text-orange-400 mb-2">
                      {solution.price}
                      <span className="text-lg text-gray-400">/{solution.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-orange-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <a 
                    href="/contact" 
                    className="w-full block text-center px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-700 transition-all duration-300"
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Ready for Industry Transformation?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Partner with us to build industry-specific solutions that drive your business forward
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Transformation
                </a>
                <a 
                  href="/contact" 
                  className="px-8 py-4 border-2 border-orange-400 text-orange-400 font-semibold rounded-lg hover:bg-orange-400 hover:text-black transition-all duration-300 transform hover:scale-105"
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

export default SolutionsPage;