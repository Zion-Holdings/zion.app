import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Rocket, Brain, Cpu, Database, Network, Zap, Target, Shield, Users, BarChart3 } from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';
import EnhancedContactForm from '../components/EnhancedContactForm';

export default function AutonomousBusinessOperationsPlatform() {
  const features = [
    {
      icon: Rocket,
      title: "Autonomous Operations",
      description: "AI-powered business processes that run independently and optimize themselves",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Brain,
      title: "Intelligent Decision Making",
      description: "Advanced AI algorithms that make business decisions in real-time",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Cpu,
      title: "Process Automation",
      description: "End-to-end automation of complex business workflows and operations",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Database,
      title: "Data Intelligence",
      description: "Real-time data analysis and insights for operational optimization",
      color: "from-blue-500 to-cyan-500"
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: "24/7 Operations",
      description: "Continuous business operations without human intervention"
    },
    {
      icon: Target,
      title: "Efficiency Boost",
      description: "Up to 300% improvement in operational efficiency"
    },
    {
      icon: Shield,
      title: "Risk Mitigation",
      description: "AI-powered risk assessment and prevention"
    },
    {
      icon: Users,
      title: "Team Empowerment",
      description: "Human teams focus on strategic decisions while AI handles operations"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-orange-900">
      <Head>
        <title>Autonomous Business Operations Platform - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered platform for autonomous business operations, intelligent decision making, and process automation." />
        <meta name="keywords" content="autonomous operations, business automation, AI decision making, process optimization, business intelligence" />
        <meta property="og:title" content="Autonomous Business Operations Platform - Zion Tech Group" />
        <meta property="og:description" content="Revolutionary AI-powered platform for autonomous business operations and intelligent decision making." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/autonomous-business-operations-platform" />
        <link rel="canonical" href="https://ziontechgroup.com/autonomous-business-operations-platform" />
      </Head>

      <EnhancedNavigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Autonomous Business
                <span className="block bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                  Operations Platform
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transform your business with AI-powered autonomous operations that run 24/7,
                make intelligent decisions, and continuously optimize performance.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300"
              >
                Start Automation Journey
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Platform Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive autonomous business operations powered by cutting-edge AI
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
                >
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 mx-auto`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Business Benefits
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your business operations with autonomous AI capabilities
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center mb-4 mx-auto">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Automate Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the future of autonomous business operations
              </p>
              <EnhancedContactForm />
            </motion.div>
          </div>
        </section>
      </main>

      <EnhancedFooter />
    </div>
  );
}