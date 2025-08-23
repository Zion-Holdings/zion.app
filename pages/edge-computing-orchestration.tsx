import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Network, 
  Server, 
  Database, 
  Zap, 
  Target, 
  Brain, 
  Users, 
  TrendingUp,
  BarChart3,
  Code,
  Globe,
  Lock,
  Settings,
  Star,
  ArrowRight,
  CheckCircle,
  Clock,
  Activity,
  Wifi,
  Smartphone,
  Car,
  Factory,
  Shield,
  Building,
  Heart
} from 'lucide-react';

const EdgeComputingPage: React.FC = () => {
  const services = [
    {
      title: 'Edge AI Processing',
      description: 'AI-powered edge computing for real-time decision making',
      icon: <Brain className="w-8 h-8 text-purple-500" />,
      features: ['Local AI Inference', 'Real-time Processing', 'Low Latency'],
      href: '/edge-ai-processing'
    },
    {
      title: 'IoT Edge Management',
      description: 'Comprehensive IoT device management and orchestration',
      icon: <Wifi className="w-8 h-8 text-blue-500" />,
      features: ['Device Management', 'Data Collection', 'Remote Monitoring'],
      href: '/iot-edge-management'
    },
    {
      title: '5G Edge Networks',
      description: 'Next-generation 5G edge computing solutions',
      icon: <Network className="w-8 h-8 text-green-500" />,
      features: ['5G Integration', 'Network Slicing', 'Edge Caching'],
      href: '/5g-edge-networks'
    },
    {
      title: 'Edge Security',
      description: 'Advanced security for distributed edge environments',
      icon: <Shield className="w-8 h-8 text-red-500" />,
      features: ['Edge Firewalls', 'Zero Trust', 'Threat Detection'],
      href: '/edge-security'
    },
    {
      title: 'Edge Analytics',
      description: 'Real-time analytics at the edge',
      icon: <BarChart3 className="w-8 h-8 text-yellow-500" />,
      features: ['Stream Processing', 'Predictive Analytics', 'Data Visualization'],
      href: '/edge-analytics'
    },
    {
      title: 'Edge DevOps',
      description: 'Automated edge infrastructure management',
      icon: <Code className="w-8 h-8 text-cyan-500" />,
      features: ['Infrastructure as Code', 'Automated Deployment', 'Monitoring'],
      href: '/edge-devops'
    }
  ];

  const benefits = [
    {
      title: 'Low Latency',
      description: 'Sub-millisecond response times',
      icon: <Zap className="w-6 h-6 text-yellow-400" />
    },
    {
      title: 'Real-time Processing',
      description: 'Instant data analysis and decision making',
      icon: <Clock className="w-6 h-6 text-green-400" />
    },
    {
      title: 'Bandwidth Optimization',
      description: 'Reduce data transfer to central cloud',
      icon: <Network className="w-6 h-6 text-blue-400" />
    },
    {
      title: 'Offline Capability',
      description: 'Continue operation without internet connection',
      icon: <CheckCircle className="w-6 h-6 text-purple-400" />
    }
  ];

  const useCases = [
    {
      name: 'Smart Cities',
      description: 'Intelligent urban infrastructure management',
      icon: <Building className="w-6 h-6" />
    },
    {
      name: 'Autonomous Vehicles',
      description: 'Real-time vehicle decision making',
      icon: <Car className="w-6 h-6" />
    },
    {
      name: 'Industrial IoT',
      description: 'Smart manufacturing and predictive maintenance',
      icon: <Factory className="w-6 h-6" />
    },
    {
      name: 'Healthcare',
      description: 'Real-time patient monitoring and diagnostics',
      icon: <Heart className="w-6 h-6" />
    }
  ];

  return (
    <Layout 
      title="Edge Computing Orchestration - Zion Tech Group"
      description="Advanced edge computing solutions for real-time processing, IoT management, and distributed intelligence"
      canonicalUrl="https://ziontechgroup.com/edge-computing-orchestration"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Edge Computing
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
                  {' '}Orchestration
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Revolutionize your infrastructure with intelligent edge computing 
                that brings processing power closer to your data sources.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a
                  href="/edge-ai-processing"
                  className="inline-flex items-center px-8 py-4 border-2 border-green-500 text-green-400 font-semibold rounded-lg hover:bg-green-500 hover:text-white transition-all duration-300"
                >
                  Explore Edge AI
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Edge Benefits */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Why Edge Computing?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Edge computing brings processing power closer to data sources, 
                enabling real-time insights and faster decision making.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="bg-white/10 backdrop-blur-lg rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center border border-white/20">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Edge Computing Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From AI processing to IoT management, our edge computing services 
                cover every aspect of distributed intelligence.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex items-center mb-4">
                    {service.icon}
                    <h3 className="text-xl font-semibold text-white ml-3">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-400">
                        <Star className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={service.href}
                    className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors duration-300"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Edge Computing Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how edge computing is transforming industries and 
                enabling new possibilities in real-time processing.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="bg-white/10 backdrop-blur-lg rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center border border-white/20">
                    <div className="text-green-400">
                      {useCase.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {useCase.name}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {useCase.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Move to the Edge?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Transform your infrastructure with edge computing and unlock 
                real-time processing capabilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Edge Journey
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a
                  href="/case-studies"
                  className="inline-flex items-center px-8 py-4 border-2 border-green-500 text-green-400 font-semibold rounded-lg hover:bg-green-500 hover:text-white transition-all duration-300"
                >
                  View Edge Cases
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default EdgeComputingPage;

