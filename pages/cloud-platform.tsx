import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cloud, Server, Database, Shield, Zap, Globe, 
  Lock, Cpu, Network, BarChart3, ArrowRight, CheckCircle,
  Users, Rocket, Brain, Target, Star, TrendingUp, ShoppingCart, Gamepad2, Wifi, Heart
} from 'lucide-react';
import Link from 'next/link';

const CloudPlatform: React.FC = () => {
  const cloudServices = [
    {
      title: 'Quantum-Secure Cloud Infrastructure',
      description: 'Next-generation cloud infrastructure with quantum-resistant encryption and AI-powered optimization',
      features: ['Quantum Cryptography', 'AI Auto-scaling', '99.99% Uptime', 'Global Edge Network'],
      icon: <Shield className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'AI-Powered Cloud Management',
      description: 'Intelligent cloud orchestration with autonomous resource management and predictive analytics',
      features: ['Auto-optimization', 'Predictive Scaling', 'Cost Optimization', 'Smart Monitoring'],
      icon: <Brain className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Multi-Cloud Orchestration',
      description: 'Seamless management across multiple cloud providers with unified control and monitoring',
      features: ['Multi-Cloud Support', 'Unified Dashboard', 'Cross-Cloud Migration', 'Cost Analysis'],
      icon: <Globe className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Edge Computing Platform',
      description: 'Distributed edge computing infrastructure for ultra-low latency applications',
      features: ['Global Edge Network', '5G Integration', 'Real-time Processing', 'Local Data Centers'],
      icon: <Network className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Serverless Computing',
      description: 'Event-driven serverless platform with automatic scaling and pay-per-use pricing',
      features: ['Auto-scaling', 'Event-driven', 'Pay-per-use', 'Zero Management'],
      icon: <Zap className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Container Orchestration',
      description: 'Advanced container management with Kubernetes integration and microservices support',
      features: ['Kubernetes Native', 'Microservices', 'Auto-healing', 'Load Balancing'],
      icon: <Server className="w-8 h-8" />,
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const platformFeatures = [
    {
      title: 'Quantum Security',
      description: 'Post-quantum cryptography and quantum key distribution for future-proof security',
      icon: <Lock className="w-6 h-6" />
    },
    {
      title: 'AI Optimization',
      description: 'Machine learning algorithms that continuously optimize performance and costs',
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: 'Global Network',
      description: 'Worldwide edge network with 200+ data centers for optimal performance',
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: 'Real-time Analytics',
      description: 'Live monitoring and analytics with instant insights and alerts',
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      title: 'Auto-scaling',
      description: 'Intelligent scaling based on demand with zero downtime',
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: 'Disaster Recovery',
      description: 'Multi-region backup and recovery with 99.999% data durability',
      icon: <Shield className="w-6 h-6" />
    }
  ];

  const useCases = [
    {
      title: 'E-commerce Platforms',
      description: 'High-traffic online stores with auto-scaling and global CDN',
      icon: <ShoppingCart className="w-8 h-8" />
    },
    {
      title: 'Gaming & Streaming',
      description: 'Low-latency gaming and video streaming with edge computing',
      icon: <Gamepad2 className="w-8 h-8" />
    },
    {
      title: 'IoT Applications',
      description: 'Massive IoT deployments with real-time data processing',
      icon: <Wifi className="w-8 h-8" />
    },
    {
      title: 'AI/ML Workloads',
      description: 'GPU-powered computing for machine learning and AI training',
      icon: <Cpu className="w-8 h-8" />
    },
    {
      title: 'Financial Services',
      description: 'High-frequency trading and real-time financial analytics',
      icon: <TrendingUp className="w-8 h-8" />
    },
    {
      title: 'Healthcare Systems',
      description: 'HIPAA-compliant cloud infrastructure for medical applications',
      icon: <Heart className="w-8 h-8" />
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: ['100 GB Storage', '2 vCPUs', '4 GB RAM', 'Basic Support', '99.9% Uptime'],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing businesses and applications',
      features: ['500 GB Storage', '4 vCPUs', '8 GB RAM', 'Priority Support', '99.95% Uptime', 'Auto-scaling'],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large-scale enterprise deployments',
      features: ['Unlimited Storage', 'Custom Resources', 'Dedicated Support', '99.99% Uptime', 'Custom SLAs', 'On-premise Options'],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              Cloud Platform
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Next-generation cloud infrastructure powered by AI, quantum security, and global edge computing. 
              Build, deploy, and scale with unprecedented performance and security.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#services" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                Explore Services
              </Link>
              <Link href="/contact" className="border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
                Get Started
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 360] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-20 left-10 text-cyan-400/20"
          >
            <Cloud className="w-16 h-16" />
          </motion.div>
          <motion.div
            animate={{ y: [0, 25, 0], scale: [1, 1.3, 1] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute top-40 right-20 text-purple-400/20"
          >
            <Server className="w-12 h-12" />
          </motion.div>
          <motion.div
            animate={{ y: [0, -15, 0], rotate: [360, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute bottom-40 left-20 text-blue-400/20"
          >
            <Database className="w-14 h-14" />
          </motion.div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our Cloud Platform?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of cloud computing with cutting-edge technology and unmatched performance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platformFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/40 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Services */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/5 to-purple-500/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Cloud Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive cloud solutions designed for modern applications and workloads
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {cloudServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-xl overflow-hidden hover:border-cyan-500/40 transition-all duration-300"
              >
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center`}>
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Use Cases
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our cloud platform powers applications across industries and use cases
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/40 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mb-4">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {useCase.title}
                </h3>
                <p className="text-gray-300">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/5 to-purple-500/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options designed to scale with your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border rounded-xl p-8 ${
                  tier.popular 
                    ? 'border-cyan-500/50 scale-105' 
                    : 'border-cyan-500/20 hover:border-cyan-500/40'
                } transition-all duration-300`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                    <span className="text-gray-400 ml-1">{tier.period}</span>
                  </div>
                  <p className="text-gray-300 mt-2">{tier.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href="/contact"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-3 px-6 rounded-xl font-semibold text-center block transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </Link>
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
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Scale Your Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses that trust our cloud platform for their critical applications. 
              Start your cloud journey today with enterprise-grade infrastructure and AI-powered optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </Link>
              <Link href="/case-studies" className="border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
                View Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CloudPlatform;