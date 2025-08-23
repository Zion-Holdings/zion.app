import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Brain, Atom, Shield, Zap, Cloud, Database, 
  Globe, Rocket, Target, TrendingUp, Star,
  ArrowRight, CheckCircle, Clock, Users, Award
} from 'lucide-react';
import Link from 'next/link';

interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  services: number;
  featured: boolean;
  url: string;
}

const ServicesOverview: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const serviceCategories: ServiceCategory[] = [
    {
      id: 'ai-ml',
      name: 'AI & Machine Learning',
      description: 'Advanced artificial intelligence solutions for modern businesses',
      icon: <Brain className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      services: 25,
      featured: true,
      url: '/services/ai-services'
    },
    {
      id: 'quantum-computing',
      name: 'Quantum Computing',
      description: 'Next-generation quantum computing and quantum AI services',
      icon: <Atom className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      services: 18,
      featured: true,
      url: '/services/quantum-computing'
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity',
      description: 'Enterprise-grade security solutions and threat protection',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-red-500 to-orange-500',
      services: 22,
      featured: true,
      url: '/services/cybersecurity'
    },
    {
      id: 'cloud-platforms',
      name: 'Cloud Platforms',
      description: 'Scalable cloud solutions and infrastructure management',
      icon: <Cloud className="w-8 h-8" />,
      color: 'from-indigo-500 to-purple-500',
      services: 20,
      featured: false,
      url: '/services/cloud-platforms'
    },
    {
      id: 'data-analytics',
      name: 'Data Analytics',
      description: 'Business intelligence and data-driven insights platform',
      icon: <Database className="w-8 h-8" />,
      color: 'from-emerald-500 to-teal-500',
      services: 16,
      featured: false,
      url: '/services/data-analytics'
    },
    {
      id: 'automation',
      name: 'Process Automation',
      description: 'Intelligent automation to streamline your operations',
      icon: <Zap className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-500',
      services: 19,
      featured: false,
      url: '/services/automation'
    },
    {
      id: 'space-tech',
      name: 'Space Technology',
      description: 'Cutting-edge space exploration and resource intelligence',
      icon: <Rocket className="w-8 h-8" />,
      color: 'from-indigo-500 to-blue-500',
      services: 12,
      featured: false,
      url: '/services/space-technology'
    },
    {
      id: 'blockchain',
      name: 'Blockchain Solutions',
      description: 'Decentralized technology and cryptocurrency platforms',
      icon: <Globe className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      services: 14,
      featured: false,
      url: '/services/blockchain'
    }
  ];

  const stats = [
    { label: 'Total Services', value: '150+', icon: <Target className="w-6 h-6" /> },
    { label: 'Active Clients', value: '500+', icon: <Users className="w-6 h-6" /> },
    { label: 'Success Rate', value: '98%', icon: <CheckCircle className="w-6 h-6" /> },
    { label: 'Response Time', value: '<2hrs', icon: <Clock className="w-6 h-6" /> }
  ];

  return (
    <Layout>
      <main className="relative z-10 pt-32">
        {/* Hero Section */}
        <section className="min-h-[60vh] flex items-center justify-center px-4 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rounded-lg animate-pulse"></div>
            <div className="absolute top-40 right-32 w-24 h-24 border border-purple-400/20 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute bottom-32 left-32 w-40 h-40 border border-pink-400/20 transform rotate-45 animate-pulse delay-2000"></div>
          </div>
          
          <div className="text-center max-w-4xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Our Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Discover our comprehensive range of cutting-edge technology solutions designed to transform your business and drive innovation
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <button className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                    <span className="flex items-center gap-2">
                      Get Started
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                </Link>
                <Link href="/pricing">
                  <button className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-black transition-all duration-300 transform hover:scale-105">
                    View Pricing
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 bg-black/30 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 group hover:bg-white/5 rounded-xl transition-all duration-300"
                >
                  <div className="flex justify-center mb-4 text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Service Categories */}
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
                Service Categories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive range of technology services across multiple domains
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceCategories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Link href={category.url}>
                    <div className={`p-8 rounded-2xl border transition-all duration-300 cursor-pointer h-full ${
                      selectedCategory === category.id
                        ? 'border-cyan-400 bg-cyan-400/10'
                        : 'border-gray-700 hover:border-cyan-400/50 hover:bg-gray-800/50'
                    }`}
                    onMouseEnter={() => setSelectedCategory(category.id)}
                    onMouseLeave={() => setSelectedCategory(null)}
                    >
                      <div className="flex items-start justify-between mb-6">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${category.color} p-4 text-white`}>
                          {category.icon}
                        </div>
                        {category.featured && (
                          <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs rounded-full font-medium">
                            Featured
                          </span>
                        )}
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                        {category.name}
                      </h3>
                      
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {category.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 text-sm text-gray-400">
                          <span>{category.services} services</span>
                        </div>
                        <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 px-4 bg-black/30 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We combine cutting-edge technology with proven expertise to deliver exceptional results
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Star className="w-8 h-8" />,
                  title: 'Proven Excellence',
                  description: 'Track record of successful implementations and satisfied clients across industries'
                },
                {
                  icon: <TrendingUp className="w-8 h-8" />,
                  title: 'Innovation First',
                  description: 'Always at the forefront of technology, exploring emerging trends and solutions'
                },
                {
                  icon: <Award className="w-8 h-8" />,
                  title: 'Quality Assured',
                  description: 'Rigorous quality standards and continuous improvement processes'
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: 'Expert Team',
                  description: 'Highly skilled professionals with deep domain expertise and industry knowledge'
                },
                {
                  icon: <Clock className="w-8 h-8" />,
                  title: 'Fast Delivery',
                  description: 'Efficient project management and rapid deployment capabilities'
                },
                {
                  icon: <CheckCircle className="w-8 h-8" />,
                  title: 'Ongoing Support',
                  description: 'Comprehensive support and maintenance services for all our solutions'
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 group hover:bg-white/5 rounded-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 p-4 text-white group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Let's discuss how our innovative solutions can help you achieve your goals and stay ahead of the competition
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <button className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                    <span className="flex items-center gap-2">
                      Start Your Journey
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                </Link>
                <Link href="/case-studies">
                  <button className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-black transition-all duration-300 transform hover:scale-105">
                    View Case Studies
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default ServicesOverview;