import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Brain, Robot, Target, Star, Sparkles, Zap, Users, Award, 
  Clock, CheckCircle, Globe, Code, ChevronRight, ExternalLink, 
  TrendingUp, BarChart3, Lock, Eye, FileText, Settings, Monitor, Smartphone,
  Activity, Target as TargetIcon, Zap as ZapIcon, DollarSign, Rocket,
  Cpu, Network, Database, Play, Cog, Shield
} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';

export default function AIAutonomousSystemsPage() {
  const features = [
    {
      icon: Brain,
      title: 'Self-Learning AI',
      description: 'Autonomous systems that continuously learn and adapt to new environments',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Robot,
      title: 'Autonomous Decision Making',
      description: 'AI systems that make independent decisions without human intervention',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Zap,
      title: 'Continuous Optimization',
      description: 'Systems that automatically optimize performance and efficiency',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Target,
      title: 'Adaptive Intelligence',
      description: 'AI that adapts to changing conditions and requirements',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const capabilities = [
    {
      category: 'Autonomous Learning',
      items: [
        'Continuous learning algorithms',
        'Adaptive neural networks',
        'Self-improving systems',
        'Knowledge accumulation'
      ]
    },
    {
      category: 'Decision Making',
      items: [
        'Autonomous decision engines',
        'Risk assessment',
        'Multi-objective optimization',
        'Ethical AI frameworks'
      ]
    },
    {
      category: 'System Integration',
      items: [
        'Seamless integration',
        'API-first architecture',
        'Custom workflows',
        'Scalable deployment'
      ]
    },
    {
      category: 'Monitoring & Control',
      items: [
        'Real-time monitoring',
        'Performance analytics',
        'Automated control',
        'Safety protocols'
      ]
    }
  ];

  const pricing = {
    starter: {
      price: '$799/month',
      features: [
        'Basic autonomous learning',
        'Standard decision making',
        'Email support',
        'Cloud deployment',
        'Basic monitoring'
      ]
    },
    professional: {
      price: '$1,999/month',
      features: [
        'Advanced autonomous learning',
        'Custom decision engines',
        'Priority support',
        'Dedicated resources',
        'Advanced analytics',
        'Custom integrations',
        'Performance optimization'
      ]
    },
    enterprise: {
      price: '$3,999/month',
      features: [
        'Custom autonomous solutions',
        'Dedicated AI team',
        '24/7 support',
        'On-premise deployment',
        'Custom algorithms',
        'SLA guarantees',
        'White-label options'
      ]
    }
  };

  return (
    <>
      <Head>
        <title>AI Autonomous Systems - Zion Tech Group | Self-Learning AI Solutions</title>
        <meta name="description" content="Revolutionary AI autonomous systems that learn, adapt, and make decisions independently. Self-learning algorithms and continuous optimization for business transformation." />
        <meta name="keywords" content="AI autonomous systems, self-learning AI, autonomous decision making, AI optimization, machine learning" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-autonomous-systems" />
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
              AI Autonomous Systems
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-xl text-gray-300 max-w-4xl mx-auto"
            >
              The future of artificial intelligence is autonomous. Our AI systems learn, adapt, and make decisions independently, continuously optimizing performance and driving business transformation.
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
                Start Implementation
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
              <h2 className="text-3xl font-bold text-white mb-4">Revolutionary Autonomous AI Features</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Our AI autonomous systems represent the cutting edge of artificial intelligence and machine learning technology.
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
              <h2 className="text-3xl font-bold text-white mb-4">Advanced Autonomous Capabilities</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                From autonomous learning to decision making, our platform provides everything you need for AI autonomy.
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

        {/* Autonomous Learning Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold text-white mb-6">Continuous Autonomous Learning</h2>
                <p className="text-gray-300 text-lg mb-6">
                  Our AI autonomous systems continuously learn and improve, adapting to new data, environments, and requirements without human intervention.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Real-time learning from new data and experiences</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Adaptive neural network architectures</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Self-optimizing algorithms and parameters</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Knowledge transfer across domains</span>
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
                    <Brain className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Learning Performance</h3>
                  <p className="text-gray-300 mb-6">
                    Real-time monitoring of autonomous learning progress and system performance.
                  </p>
                  <div className="space-y-3 text-left">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Learning Rate</span>
                      <span className="text-green-400 font-semibold">+23%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Accuracy</span>
                      <span className="text-cyan-400 font-semibold">96.8%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Efficiency</span>
                      <span className="text-blue-400 font-semibold">89%</span>
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
              <h2 className="text-3xl font-bold text-white mb-4">Choose Your Autonomous Plan</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Flexible pricing options designed to scale with your autonomous AI needs and business requirements.
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
                Ready for Autonomous AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Transform your business with AI systems that learn, adapt, and optimize independently.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
                >
                  Start Implementation
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