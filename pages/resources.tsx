import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  BookOpen, Brain, Rocket, Shield, Zap, Target, Atom, 
  Lock, Cloud, Settings, Eye, Award, Clock, Heart, 
  Lightbulb, Search, Grid, List, TrendingUp, 
  User, ShoppingCart, Bell, HelpCircle, FileText, 
  Video, Headphones, Code, Database, Network, Server, 
  Monitor, Smartphone, Camera, Gamepad2, Palette, 
  Music, Film, BookOpenCheck, Building, MessageCircle, 
  Sparkles, ArrowRight, CheckCircle, Star, Globe, Download, Users
} from 'lucide-react';

const ResourcesPage: React.FC = () => {
  const resourceCategories = [
    {
      id: 'documentation',
      name: 'Documentation',
      description: 'Comprehensive technical documentation and guides',
      features: ['API References', 'Integration Guides', 'Best Practices', 'Code Examples'],
      price: 'Free',
      period: '',
      popular: true,
      icon: <FileText className="w-8 h-8" />
    },
    {
      id: 'blog',
      name: 'Blog & Insights',
      description: 'Latest industry insights and technology trends',
      features: ['Expert Articles', 'Case Studies', 'Industry Analysis', 'Technology Updates'],
      price: 'Free',
      period: '',
      popular: false,
      icon: <BookOpen className="w-8 h-8" />
    },
    {
      id: 'case-studies',
      name: 'Case Studies',
      description: 'Real-world success stories and implementations',
      features: ['Success Stories', 'Implementation Details', 'ROI Analysis', 'Best Practices'],
      price: 'Free',
      period: '',
      popular: false,
      icon: <Award className="w-8 h-8" />
    },
    {
      id: 'webinars',
      name: 'Webinars',
      description: 'Educational webinars and training sessions',
      features: ['Live Sessions', 'Expert Speakers', 'Q&A Sessions', 'Recorded Content'],
      price: 'Free',
      period: '',
      popular: false,
      icon: <Video className="w-8 h-8" />
    },
    {
      id: 'white-papers',
      name: 'White Papers',
      description: 'In-depth research and technical papers',
      features: ['Research Reports', 'Technical Analysis', 'Industry Trends', 'Implementation Guides'],
      price: 'Free',
      period: '',
      popular: false,
      icon: <FileText className="w-8 h-8" />
    },
    {
      id: 'support',
      name: 'Support Resources',
      description: 'Technical support and troubleshooting guides',
      features: ['Knowledge Base', 'Troubleshooting', 'FAQ', 'Contact Support'],
      price: 'Free',
      period: '',
      popular: false,
      icon: <HelpCircle className="w-8 h-8" />
    }
  ];

  const resourceCapabilities = [
    {
      title: 'Knowledge Base',
      description: 'Comprehensive knowledge repository',
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      title: 'Technical Guides',
      description: 'Step-by-step implementation guides',
      icon: <Code className="w-6 h-6" />
    },
    {
      title: 'Best Practices',
      description: 'Industry best practices and standards',
      icon: <Star className="w-6 h-6" />
    },
    {
      title: 'Video Content',
      description: 'Educational videos and tutorials',
      icon: <Video className="w-6 h-6" />
    },
    {
      title: 'Community Support',
      description: 'Expert community and forums',
      icon: <Users className="w-6 h-6" />
    },
    {
      title: 'Regular Updates',
      description: 'Frequently updated content',
      icon: <Clock className="w-6 h-6" />
    }
  ];

  return (
    <Layout>
      <SEO 
        title="Resources & Knowledge - Zion Tech Group"
        description="Access comprehensive resources, documentation, and knowledge to help you succeed with our technology solutions."
        keywords="resources, documentation, blog, case studies, webinars, white papers, support, knowledge base"
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
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-600 bg-clip-text text-transparent">
                Resources & Knowledge
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Access comprehensive resources, documentation, and insights to help you succeed with our technology solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </a>
                <a 
                  href="/contact" 
                  className="px-8 py-4 border-2 border-indigo-400 text-indigo-400 font-semibold rounded-lg hover:bg-indigo-400 hover:text-black transition-all duration-300 transform hover:scale-105"
                >
                  Contact Support
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Resource Capabilities */}
        <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                Resource Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive resources designed to support your success journey
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resourceCapabilities.map((capability, index) => (
                <motion.div
                  key={capability.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-indigo-500 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-indigo-500/20 rounded-lg mr-3">
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

        {/* Resource Categories */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                Resource Categories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive collection of resources and knowledge materials
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resourceCategories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border transition-all duration-300 hover:scale-105 ${
                    category.popular 
                      ? 'border-indigo-500 shadow-lg shadow-indigo-500/25' 
                      : 'border-gray-700 hover:border-indigo-500'
                  }`}
                >
                  {category.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className="inline-flex p-3 bg-indigo-500/20 rounded-full mb-4">
                      {category.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
                    <p className="text-gray-300 mb-4">{category.description}</p>
                    <div className="text-3xl font-bold text-indigo-400 mb-2">
                      {category.price}
                      {category.period && <span className="text-lg text-gray-400">/{category.period}</span>}
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {category.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-indigo-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <a 
                    href={`/${category.id}`} 
                    className="w-full block text-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-300"
                  >
                    Access Resources
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                Need More Help?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Our expert team is here to support you with any questions or technical assistance
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Contact Support
                </a>
                <a 
                  href="/contact" 
                  className="px-8 py-4 border-2 border-indigo-400 text-indigo-400 font-semibold rounded-lg hover:bg-indigo-400 hover:text-black transition-all duration-300 transform hover:scale-105"
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

export default ResourcesPage;