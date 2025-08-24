import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Network, Server, Cloud, Zap, Brain, Target, Star, 
  Sparkles, Users, Award, Clock, CheckCircle, Globe, Code,
  ChevronRight, ExternalLink, TrendingUp, BarChart3, Lock, Eye,
  FileText, Settings, Monitor, Smartphone, Activity, Target as TargetIcon,
  Zap as ZapIcon, DollarSign, Rocket, Cpu, Play
} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';

export default function EdgeComputingOrchestrationPage() {
  const features = [
    {
      icon: Network,
      title: 'Edge Deployment',
      description: 'Deploy applications to edge locations worldwide with intelligent routing and load balancing',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Cpu,
      title: 'Performance Optimization',
      description: 'AI-powered optimization that automatically adjusts resources for maximum performance',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'Ultra-low latency processing at the edge for time-sensitive applications',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Brain,
      title: 'Intelligent Orchestration',
      description: 'Machine learning algorithms that optimize resource allocation and traffic routing',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const capabilities = [
    {
      category: 'Edge Infrastructure',
      items: [
        'Global edge network deployment',
        'Multi-cloud orchestration',
        'Container and serverless support',
        'Edge data centers worldwide'
      ]
    },
    {
      category: 'Performance Management',
      items: [
        'Real-time performance monitoring',
        'Automatic scaling and optimization',
        'Traffic routing optimization',
        'Load balancing algorithms'
      ]
    },
    {
      category: 'Security & Compliance',
      items: [
        'Edge security protocols',
        'Data encryption in transit',
        'Compliance monitoring',
        'Threat detection at edge'
      ]
    },
    {
      category: 'Developer Experience',
      items: [
        'Simple deployment workflows',
        'API-first architecture',
        'Comprehensive monitoring',
        'Automated testing and validation'
      ]
    }
  ];

  const pricing = {
    starter: {
      price: '$199/month',
      features: [
        'Up to 5 edge locations',
        'Basic load balancing',
        'Standard monitoring',
        'Email support',
        '100GB bandwidth'
      ]
    },
    professional: {
      price: '$499/month',
      features: [
        'Up to 25 edge locations',
        'Advanced orchestration',
        'Real-time analytics',
        'Priority support',
        '1TB bandwidth',
        'Custom routing rules',
        'Performance optimization'
      ]
    },
    enterprise: {
      price: '$1,299/month',
      features: [
        'Unlimited edge locations',
        'Custom AI algorithms',
        'Dedicated support team',
        'Unlimited bandwidth',
        'Custom integrations',
        'SLA guarantees',
        'White-label options'
      ]
    }
  };

  return (
    <>
      <Head>
        <title>Edge Computing Orchestration - Zion Tech Group | Global Edge Infrastructure</title>
        <meta name="description" content="Deploy and manage applications at the edge with intelligent orchestration. Global edge network, AI-powered optimization, and ultra-low latency processing." />
        <meta name="keywords" content="edge computing, edge orchestration, global edge network, low latency, performance optimization" />
        <link rel="canonical" href="https://ziontechgroup.com/edge-computing-orchestration" />
      </Head>

      <EnhancedNavigation />

      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
            >
              Edge Computing Orchestration
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-xl text-gray-300 max-w-4xl mx-auto"
            >
              Deploy and manage applications at the edge with intelligent orchestration. Our global edge network delivers ultra-low latency, AI-powered optimization, and seamless scalability.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
              >
                Start Free Trial
                <Rocket className="w-5 h-5 ml-2" />
              </a>
              <a
                href="#demo"
                className="inline-flex items-center justify-center px-8 py-4 border border-cyan-500/50 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-200"
              >
                Watch Demo
                <Play className="w-5 h-5 ml-2" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Powerful Edge Computing Features</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Discover how our edge computing orchestration platform can revolutionize your application deployment and performance.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${feature.color} mb-4`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Comprehensive Edge Capabilities</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                From global edge infrastructure to intelligent orchestration, our platform provides everything you need for edge computing success.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={capability.category}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50"
                >
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <ZapIcon className="w-5 h-5 text-cyan-400 mr-2" />
                    {capability.category}
                  </h3>
                  <ul className="space-y-3">
                    {capability.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Global Network Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold text-white mb-6">Global Edge Network</h2>
                <p className="text-gray-300 text-lg mb-6">
                  Our worldwide edge network spans 6 continents with over 200 edge locations, ensuring your applications are always close to your users.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">200+ edge locations worldwide</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Sub-10ms latency to 95% of users</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">99.99% uptime SLA guarantee</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Automatic failover and redundancy</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-2xl p-8 border border-cyan-500/20"
              >
                <div className="text-center">
                  <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 mb-4">
                    <Globe className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Network Performance</h3>
                  <p className="text-gray-300 mb-6">
                    Real-time monitoring of your edge network performance and user experience.
                  </p>
                  <div className="space-y-3 text-left">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Global Coverage</span>
                      <span className="text-green-400 font-semibold">6 Continents</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Edge Locations</span>
                      <span className="text-cyan-400 font-semibold">200+</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Average Latency</span>
                      <span className="text-blue-400 font-semibold">8ms</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Choose Your Edge Plan</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Flexible pricing options designed to scale with your edge computing needs and global reach requirements.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.entries(pricing).map(([plan, details], index) => (
                <motion.div
                  key={plan}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:shadow-2xl ${
                    plan === 'professional'
                      ? 'border-cyan-500/50 shadow-cyan-500/20 scale-105'
                      : 'border-gray-700/50 hover:border-cyan-500/50'
                  }`}
                >
                  {plan === 'professional' && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2 capitalize">{plan}</h3>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">{details.price}</div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {details.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 ${
                      plan === 'professional'
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                        : 'bg-gray-700/50 text-white border border-gray-600/50 hover:bg-gray-600/50 hover:border-cyan-500/50'
                    }`}
                  >
                    {plan === 'enterprise' ? 'Contact Sales' : 'Get Started'}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-2xl p-12 border border-cyan-500/20"
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Go Global?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Deploy your applications to the edge and deliver lightning-fast performance to users worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
                >
                  Start Free Trial
                  <Rocket className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="/pricing"
                  className="inline-flex items-center justify-center px-8 py-4 border border-cyan-500/50 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-200"
                >
                  View Pricing
                  <DollarSign className="w-5 h-5 ml-2" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <EnhancedFooter />
    </>
  );
}