import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Brain, Shield, Rocket, Cpu, Database, Atom, Users, Award, 
  Globe, Code, Server, Network, CheckCircle, TrendingUp, Zap,
  Star, ArrowRight, ExternalLink, Target, Clock, DollarSign
} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const serviceCategories = [
    { id: 'all', name: 'All Services', icon: Star, color: 'from-yellow-500 to-orange-500' },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain, color: 'from-purple-500 to-pink-500' },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom, color: 'from-cyan-500 to-blue-500' },
    { id: 'space', name: 'Space Technology', icon: Rocket, color: 'from-indigo-500 to-purple-500' },
    { id: 'enterprise', name: 'Enterprise IT', icon: Server, color: 'from-green-500 to-emerald-500' },
    { id: 'microsaas', name: 'Micro SaaS', icon: Code, color: 'from-red-500 to-pink-500' }
  ];

  const allServices = [
    // AI & Machine Learning Services
    {
      id: 'ai-business-intelligence',
      name: 'AI Business Intelligence',
      category: 'ai',
      tagline: 'Transform data into actionable insights',
      description: 'Advanced AI-powered business intelligence platform that analyzes your data in real-time, providing predictive analytics and actionable insights to drive strategic decision-making.',
      features: ['Real-time data analysis', 'Predictive analytics', 'Custom dashboards', 'Automated reporting'],
      price: '$2,997',
      period: '/month',
      setupTime: '2-3 days',
      trialDays: 14,
      popular: true,
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      textColor: 'text-purple-400'
    },
    {
      id: 'ai-customer-experience',
      name: 'AI Customer Experience',
      category: 'ai',
      tagline: 'Revolutionary customer engagement',
      description: 'AI-powered customer experience platform that personalizes interactions, predicts customer needs, and delivers exceptional service across all touchpoints.',
      features: ['Personalized interactions', 'Predictive customer insights', 'Multi-channel support', 'Sentiment analysis'],
      price: '$1,997',
      period: '/month',
      setupTime: '1-2 days',
      trialDays: 14,
      popular: false,
      icon: Users,
      color: 'from-blue-500 to-cyan-500',
      textColor: 'text-blue-400'
    },
    {
      id: 'autonomous-devops',
      name: 'Autonomous DevOps',
      category: 'ai',
      tagline: 'Self-healing infrastructure',
      description: 'AI-driven DevOps platform that automatically monitors, optimizes, and maintains your infrastructure, reducing downtime and improving performance.',
      features: ['Automated monitoring', 'Self-healing systems', 'Performance optimization', 'Predictive maintenance'],
      price: '$3,497',
      period: '/month',
      setupTime: '3-5 days',
      trialDays: 14,
      popular: true,
      icon: Zap,
      color: 'from-green-500 to-emerald-500',
      textColor: 'text-green-400'
    },

    // Quantum Computing Services
    {
      id: 'quantum-cybersecurity',
      name: 'Quantum Cybersecurity',
      category: 'quantum',
      tagline: 'Unbreakable security protocols',
      description: 'Quantum-resistant cybersecurity solutions that protect your data against both current and future quantum computing threats.',
      features: ['Quantum-resistant encryption', 'Advanced threat detection', 'Zero-trust architecture', '24/7 monitoring'],
      price: '$4,997',
      period: '/month',
      setupTime: '5-7 days',
      trialDays: 14,
      popular: true,
      icon: Shield,
      color: 'from-cyan-500 to-blue-500',
      textColor: 'text-cyan-400'
    },
    {
      id: 'quantum-optimization',
      name: 'Quantum Optimization',
      category: 'quantum',
      tagline: 'Solve complex problems instantly',
      description: 'Quantum computing solutions for complex optimization problems in logistics, finance, and scientific research.',
      features: ['Complex problem solving', 'Quantum algorithms', 'Real-time optimization', 'Scientific computing'],
      price: '$5,997',
      period: '/month',
      setupTime: '7-10 days',
      trialDays: 14,
      popular: false,
      icon: Atom,
      color: 'from-indigo-500 to-purple-500',
      textColor: 'text-indigo-400'
    },

    // Space Technology Services
    {
      id: 'space-mining-ai',
      name: 'Space Mining AI',
      category: 'space',
      tagline: 'Revolutionary resource extraction',
      description: 'AI-powered space mining solutions that identify and extract valuable resources from asteroids and other celestial bodies.',
      features: ['Resource identification', 'Automated extraction', 'Risk assessment', 'ROI optimization'],
      price: '$9,997',
      period: '/month',
      setupTime: '14-21 days',
      trialDays: 14,
      popular: false,
      icon: Rocket,
      color: 'from-purple-500 to-pink-500',
      textColor: 'text-purple-400'
    },
    {
      id: 'satellite-ai',
      name: 'Satellite AI Systems',
      category: 'space',
      tagline: 'Intelligent orbital operations',
      description: 'Advanced AI systems for satellite operations, including autonomous navigation, data processing, and mission optimization.',
      features: ['Autonomous navigation', 'Data processing', 'Mission optimization', 'Predictive maintenance'],
      price: '$7,497',
      period: '/month',
      setupTime: '10-14 days',
      trialDays: 14,
      popular: false,
      icon: Globe,
      color: 'from-blue-500 to-cyan-500',
      textColor: 'text-blue-400'
    },

    // Enterprise IT Services
    {
      id: 'edge-computing',
      name: 'Edge Computing Orchestration',
      category: 'enterprise',
      tagline: 'Distributed intelligence network',
      description: 'Enterprise-grade edge computing platform that brings AI and processing power closer to your data sources for faster, more efficient operations.',
      features: ['Distributed processing', 'Low latency', 'Scalable infrastructure', 'Real-time analytics'],
      price: '$3,997',
      period: '/month',
      setupTime: '5-7 days',
      trialDays: 14,
      popular: true,
      icon: Cpu,
      color: 'from-green-500 to-emerald-500',
      textColor: 'text-green-400'
    },
    {
      id: 'enterprise-automation',
      name: 'Enterprise Automation',
      category: 'enterprise',
      tagline: 'Streamline operations',
      description: 'Comprehensive enterprise automation platform that streamlines workflows, reduces manual tasks, and increases operational efficiency.',
      features: ['Workflow automation', 'Process optimization', 'Integration capabilities', 'Analytics dashboard'],
      price: '$2,497',
      period: '/month',
      setupTime: '3-5 days',
      trialDays: 14,
      popular: false,
      icon: Server,
      color: 'from-orange-500 to-red-500',
      textColor: 'text-orange-400'
    },

    // Micro SaaS Services
    {
      id: 'custom-ai-development',
      name: 'Custom AI Development',
      category: 'microsaas',
      tagline: 'Tailored AI solutions',
      description: 'Custom AI development services that create personalized solutions tailored to your specific business needs and requirements.',
      features: ['Custom algorithms', 'Tailored solutions', 'Integration support', 'Ongoing maintenance'],
      price: '$6,997',
      period: '/month',
      setupTime: '14-21 days',
      trialDays: 14,
      popular: false,
      icon: Code,
      color: 'from-red-500 to-pink-500',
      textColor: 'text-red-400'
    },
    {
      id: 'ai-consulting',
      name: 'AI Strategy Consulting',
      category: 'microsaas',
      tagline: 'Expert guidance',
      description: 'Strategic AI consulting services that help you develop and implement AI strategies aligned with your business objectives.',
      features: ['Strategy development', 'Implementation planning', 'ROI analysis', 'Change management'],
      price: '$1,997',
      period: '/month',
      setupTime: '1-2 days',
      trialDays: 14,
      popular: false,
      icon: Target,
      color: 'from-yellow-500 to-orange-500',
      textColor: 'text-yellow-400'
    }
  ];

  const filteredServices = activeCategory === 'all' 
    ? allServices 
    : allServices.filter(service => service.category === activeCategory);

  const toggleServiceExpansion = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  return (
    <>
      <Head>
        <title>Services - Zion Tech Group | Revolutionary AI, Quantum & Space Technology Solutions</title>
        <meta name="description" content="Explore Zion Tech Group's revolutionary services including AI consciousness, quantum computing, space technology, and enterprise solutions. Transform your business today!" />
        <meta name="keywords" content="AI services, quantum computing, space technology, enterprise IT, micro SaaS, Zion Tech Group services" />
        <meta property="og:title" content="Services - Zion Tech Group" />
        <meta property="og:description" content="Revolutionary AI, quantum computing, and space technology solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/services" />
        <link rel="canonical" href="https://ziontechgroup.com/services" />
      </Head>

      <EnhancedNavigation />

      <main className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.1),transparent_50%)]" />
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-8">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Revolutionary Services
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
                Discover our cutting-edge technology solutions that are transforming industries 
                and pushing the boundaries of what's possible.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">35+</div>
                  <div className="text-gray-400 text-sm">Real Services</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
                  <div className="text-gray-400 text-sm">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-400 mb-2">14 Days</div>
                  <div className="text-gray-400 text-sm">Free Trial</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                  <div className="text-gray-400 text-sm">Support</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Choose Your Category
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our services by category or browse all revolutionary solutions
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
              {serviceCategories.map((category, index) => (
                <motion.button
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => setActiveCategory(category.id)}
                  className={`p-6 rounded-2xl border transition-all duration-300 hover:scale-105 ${
                    activeCategory === category.id
                      ? 'border-cyan-500 bg-gradient-to-br from-cyan-500/20 to-purple-500/20'
                      : 'border-gray-700 bg-gray-900/50 hover:border-gray-600'
                  }`}
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-sm font-medium text-white">{category.name}</div>
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                >
                  <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 hover:border-cyan-500/40 transition-all duration-300 backdrop-blur-sm hover:transform hover:scale-105 h-full flex flex-col">
                    {/* Service Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Popular Badge */}
                    {service.popular && (
                      <div className="flex items-center space-x-2 mb-4">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-yellow-400 font-medium">Popular</span>
                      </div>
                    )}

                    {/* Service Title and Tagline */}
                    <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                    <p className="text-sm text-cyan-400 mb-3">{service.tagline}</p>
                    
                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed mb-4 flex-grow">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="mb-4">
                      <div className="text-sm text-gray-400 mb-2">Key Features:</div>
                      <div className="space-y-1">
                        {service.features.slice(0, 2).map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2 text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                        {service.features.length > 2 && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleServiceExpansion(service.id);
                            }}
                            className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                          >
                            +{service.features.length - 2} more features
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Expanded Features */}
                    {expandedService === service.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mb-4 space-y-1"
                      >
                        {service.features.slice(2).map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2 text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </motion.div>
                    )}

                    {/* Price and Details */}
                    <div className="mt-auto">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <span className={`${service.textColor} font-semibold text-2xl`}>
                            {service.price}
                          </span>
                          <span className="text-gray-400 text-sm">{service.period}</span>
                        </div>
                        <div className="text-right text-sm text-gray-400">
                          <div>Setup: {service.setupTime}</div>
                          <div>Trial: {service.trialDays} days</div>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          // Handle service selection
                        }}
                        className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 group-hover:scale-105"
                      >
                        <span>Get Started</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredServices.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <div className="text-gray-400 text-xl mb-4">No services found in this category</div>
                <button
                  onClick={() => setActiveCategory('all')}
                  className="text-cyan-400 hover:text-cyan-300 underline"
                >
                  View all services
                </button>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 border border-cyan-500/20 rounded-3xl p-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                  Join thousands of businesses already leveraging our revolutionary technologies 
                  to accelerate their digital transformation and gain competitive advantages.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <a
                    href="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40"
                  >
                    Get Started Today
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="border-2 border-cyan-500/50 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 backdrop-blur-sm"
                  >
                    📞 Call Now
                  </a>
                </div>
                
                <div className="mt-10 text-sm text-gray-400">
                  <p>Start your free 14-day trial today. No credit card required.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <EnhancedFooter />
    </>
  );
}
