import React from 'react';
import Layout from '../../components/layout/Layout';
import { motion } from 'framer-motion';
import { Shield, Sparkles, Zap, Target, Users, Award, Clock, CheckCircle, Building2, Lock } from 'lucide-react';
import Link from 'next/link';

const GovernmentSolutionsPage: React.FC = () => {
  const solutions = [
    {
      name: 'AI-Powered Government Intelligence 2045',
      description: 'Advanced AI government optimization with consciousness and secure analytics',
      href: '/ai-powered-government-intelligence-2045',
      icon: Building2,
      color: 'from-gray-500 to-blue-500'
    },
    {
      name: 'Quantum Government Security 2045',
      description: 'Quantum-powered government security with consciousness and AI integration',
      href: '/quantum-government-security-2045',
      icon: Shield,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      name: 'Autonomous Government AI 2045',
      description: 'Fully autonomous AI government management with consciousness',
      href: '/autonomous-government-ai-2045',
      icon: Lock,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      name: 'Digital Government Intelligence 2045',
      description: 'AI-powered digital government with consciousness and citizen insights',
      href: '/digital-government-intelligence-2045',
      icon: Sparkles,
      color: 'from-purple-500 to-gray-500'
    }
  ];

  const features = [
    { icon: Building2, title: "Smart Government", description: "Intelligent public services" },
    { icon: Shield, title: "Quantum Security", description: "Quantum-powered protection" },
    { icon: Lock, title: "Autonomous AI", description: "Self-managing government" },
    { icon: Zap, title: "Digital Services", description: "Connected citizen services" }
  ];

  const stats = [
    { number: "600%", label: "Efficiency Gain", icon: Zap },
    { number: "99.99%", label: "Security Rate", icon: CheckCircle },
    { number: "24/7", label: "Operation", icon: Clock },
    { number: "100+", label: "Government Partners", icon: Users }
  ];

  return (
    <Layout 
      title="Government Solutions - Zion Tech Group"
      description="Revolutionary government solutions with AI consciousness, quantum security, and autonomous government intelligence. Leading the future of public sector innovation."
      keywords="government solutions, public sector, AI government, quantum security, autonomous government, digital government, Zion Tech Group"
    >
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/20 to-blue-900/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Government
                <span className="block bg-gradient-to-r from-gray-400 to-blue-400 bg-clip-text text-transparent">
                  Revolution Platform
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Pioneering the future of government with AI consciousness, quantum security, 
                and autonomous government intelligence for unprecedented public service efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-500 to-blue-500 text-white font-semibold rounded-full hover:from-gray-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  Transform Government
                  <Building2 className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  href="/solutions"
                  className="inline-flex items-center px-8 py-4 border-2 border-gray-500 text-gray-400 font-semibold rounded-full hover:bg-gray-500 hover:text-white transition-all duration-300"
                >
                  Explore All Solutions
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Revolutionary Government Capabilities
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our government platform delivers unprecedented capabilities with AI consciousness, 
                quantum security, and autonomous government management.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 hover:border-gray-500/50 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-gray-500 to-blue-500 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Government Solutions
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Discover our comprehensive suite of AI-powered government and public sector solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Link href={solution.href}>
                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-gray-500/50 transition-all duration-300 group-hover:scale-105">
                      <div className={`w-20 h-20 bg-gradient-to-r ${solution.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <solution.icon className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gray-400 transition-colors duration-300">
                        {solution.name}
                      </h3>
                      <p className="text-gray-400 text-lg leading-relaxed">
                        {solution.description}
                      </p>
                      <div className="mt-6 flex items-center text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        <span className="font-semibold">Learn More</span>
                        <Building2 className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-gray-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Government?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Join the government revolution with AI consciousness and quantum security. 
                Transform public services with the future of government innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-500 to-blue-500 text-white font-semibold rounded-full hover:from-gray-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  Transform Government
                  <Building2 className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  href="/solutions"
                  className="inline-flex items-center px-8 py-4 border-2 border-gray-500 text-gray-400 font-semibold rounded-full hover:bg-gray-500 hover:text-white transition-all duration-300"
                >
                  Explore All Solutions
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default GovernmentSolutionsPage;