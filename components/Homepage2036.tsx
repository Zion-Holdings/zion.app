import React, { useState } from 'react';
import Layout from './layout/Layout';
import UltraFuturisticServiceCard2036 from './ui/UltraFuturisticServiceCard2036';
import { motion } from 'framer-motion';
import { 
  Brain, Rocket, Shield, Zap, Target, Atom, Globe, 
  Cpu, Lock, Cloud, Settings, Eye, Award, Clock, 
  Star, TrendingUp, Users, Building, Lightbulb,
  ArrowRight, ChevronRight, Phone, Mail, MapPin,
  Play, CheckCircle, Sparkles
} from 'lucide-react';
import { real2036InnovativeServices } from '../data/real-2036-innovative-services';
import { real2036SpecializedServices } from '../data/real-2036-specialized-services';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const featuredServices = [
  ...real2036InnovativeServices.slice(0, 3),
  ...real2036SpecializedServices.slice(0, 3)
];

const stats = [
  { label: 'Services Available', value: '500+', icon: <Rocket className="w-6 h-6" /> },
  { label: 'Market Coverage', value: '$200B+', icon: <TrendingUp className="w-6 h-6" /> },
  { label: 'Client Satisfaction', value: '98%', icon: <Star className="w-6 h-6" /> },
  { label: 'Global Reach', value: '50+', icon: <Globe className="w-6 h-6" /> }
];

const categories = [
  { name: 'AI & Machine Learning', icon: <Brain className="w-6 h-6" />, count: 150, color: 'from-green-500 to-emerald-600' },
  { name: 'Quantum Technology', icon: <Atom className="w-6 h-6" />, count: 80, color: 'from-cyan-500 to-blue-600' },
  { name: 'Space Technology', icon: <Rocket className="w-6 h-6" />, count: 60, color: 'from-purple-500 to-pink-600' },
  { name: 'IT Infrastructure', icon: <Cpu className="w-6 h-6" />, count: 120, color: 'from-orange-500 to-red-600' },
  { name: 'Cybersecurity', icon: <Shield className="w-6 h-6" />, count: 90, color: 'from-blue-500 to-indigo-600' },
  { name: 'Edge Computing', icon: <Zap className="w-6 h-6" />, count: 70, color: 'from-yellow-500 to-orange-600' }
];

export default function Homepage2036() {
  const [activeCategory, setActiveCategory] = useState('all');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <Layout>
      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-cyan-400/40 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -100, 0],
                  opacity: [0.3, 1, 0.3],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 4 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          <div className="relative z-10 text-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full text-sm text-cyan-400 mb-6">
                <Sparkles className="w-4 h-4" />
                Pioneering the Future of Technology
              </div>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Zion Tech Group
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Experience the future of technology with our cutting-edge micro SAAS services, 
              AI platforms, and quantum solutions. Transform your business with next-generation innovation.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a
                href="/2036-innovative-services-showcase"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 flex items-center gap-2"
              >
                Explore Services
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                Get Started
                <ChevronRight className="w-5 h-5" />
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
                  <div className="text-cyan-400 mb-2 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 px-4 bg-gradient-to-r from-gray-900 to-gray-800">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-center p-8 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-cyan-400 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Phone</h3>
                <p className="text-gray-300 text-lg font-medium">{contactInfo.mobile}</p>
                <p className="text-gray-500 text-sm mt-2">Available 24/7 for support</p>
              </div>
              
              <div className="text-center p-8 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-cyan-400 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Email</h3>
                <p className="text-gray-300 text-lg font-medium">{contactInfo.email}</p>
                <p className="text-gray-500 text-sm mt-2">Fast response guaranteed</p>
              </div>
              
              <div className="text-center p-8 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-cyan-400 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Address</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{contactInfo.address}</p>
                <p className="text-gray-500 text-sm mt-2">Global operations</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Technology Categories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive range of cutting-edge technology solutions 
                across multiple domains and industries.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {categories.map((category, index) => (
                <motion.div
                  key={category.name}
                  variants={itemVariants}
                  className="group cursor-pointer"
                  onClick={() => setActiveCategory(category.name.toLowerCase().replace(/\s+/g, '-'))}
                >
                  <div className="p-8 bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700 rounded-2xl hover:border-cyan-400 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20">
                    <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{category.name}</h3>
                    <p className="text-gray-400 mb-4">
                      {category.count}+ innovative services and solutions
                    </p>
                    <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                      <span className="text-sm font-medium">Explore</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Featured Services */}
        <section className="py-20 px-4 bg-gradient-to-r from-gray-900 to-gray-800">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Featured Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our most innovative and cutting-edge services that are 
                transforming industries and driving the future of technology.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {featuredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  className="h-full"
                >
                  <UltraFuturisticServiceCard2036
                    service={{
                      id: service.id,
                      name: service.name,
                      tagline: service.tagline,
                      description: service.description,
                      price: service.price,
                      period: service.period,
                      features: service.features,
                      popular: index < 2,
                      category: service.category,
                      icon: '🚀',
                      rating: service.rating,
                      marketSize: service.marketSize,
                      targetAudience: service.targetAudience,
                      competitiveAdvantage: service.competitiveAdvantage
                    }}
                    variant={
                      service.category.includes('AI') ? 'ai' :
                      service.category.includes('Quantum') ? 'quantum' :
                      service.category.includes('Space') ? 'space' :
                      service.category.includes('Cyber') ? 'cyber' :
                      'default'
                    }
                  />
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              className="text-center mt-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <a
                href="/2036-innovative-services-showcase"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
              >
                View All Services
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We combine cutting-edge technology with proven expertise to deliver 
                solutions that drive real business transformation.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                {
                  icon: <Brain className="w-8 h-8" />,
                  title: 'AI-First Approach',
                  description: 'Leverage the latest artificial intelligence and machine learning technologies to solve complex business challenges.',
                  color: 'from-green-500 to-emerald-600'
                },
                {
                  icon: <Atom className="w-8 h-8" />,
                  title: 'Quantum Innovation',
                  description: 'Stay ahead with quantum computing solutions that provide exponential performance improvements.',
                  color: 'from-cyan-500 to-blue-600'
                },
                {
                  icon: <Rocket className="w-8 h-8" />,
                  title: 'Space Technology',
                  description: 'Access cutting-edge space technology solutions for advanced applications and research.',
                  color: 'from-purple-500 to-pink-600'
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: 'Enterprise Security',
                  description: 'Bank-grade security and compliance for mission-critical business applications.',
                  color: 'from-blue-500 to-indigo-600'
                },
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: 'Performance Optimized',
                  description: 'Lightning-fast performance with edge computing and advanced optimization techniques.',
                  color: 'from-yellow-500 to-orange-600'
                },
                {
                  icon: <Globe className="w-8 h-8" />,
                  title: 'Global Reach',
                  description: 'Worldwide deployment and support with local expertise in key markets.',
                  color: 'from-red-500 to-pink-600'
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="p-6 bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700 rounded-xl hover:border-cyan-400 transition-all duration-300 group"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4 bg-gradient-to-r from-gray-900 to-gray-800">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join the future of technology with our innovative services. 
                Contact us today to discuss how we can help you achieve your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Get Started Today
                </a>
                <a
                  href={`tel:${contactInfo.mobile}`}
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call Us Now
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
}