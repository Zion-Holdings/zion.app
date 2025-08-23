import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Wifi, 
  Globe, 
  Zap, 
  Shield, 
  ArrowRight, 
  CheckCircle,
  Target,
  Users,
  Server,
  Network,
  Database,
  Cloud,
  Code,
  Settings,
  Lock,
  BarChart3,
  TrendingUp,
  HardDrive,
  Loader,
  Activity,
  Clock,
  Star,
  Award,
  Heart,
  Brain,
  Atom,
  Rocket,
  Palette,
  Layers,
  Grid,
  Sparkles,
  Smartphone,
  Tablet,
  Monitor,
  Watch,
  Car,
  ShoppingBag
} from 'lucide-react';

const EdgeComputingPage: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const edgeServices = [
    {
      title: 'Edge Computing Orchestration Platform',
      description: 'Intelligent edge computing management and orchestration',
      icon: <Cpu className="w-8 h-8 text-green-400" />,
      features: ['Edge deployment', 'Resource optimization', 'Load balancing', 'Auto-scaling'],
      href: '/edge-computing-platform'
    },
    {
      title: 'IoT Device Management',
      description: 'Comprehensive IoT device lifecycle management',
      icon: <Wifi className="w-8 h-8 text-blue-400" />,
      features: ['Device provisioning', 'Remote monitoring', 'Firmware updates', 'Security management'],
      href: '/iot-device-management'
    },
    {
      title: 'Edge AI & Machine Learning',
      description: 'AI processing at the edge for real-time insights',
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      features: ['Local AI processing', 'Real-time analytics', 'Predictive maintenance', 'Edge training'],
      href: '/edge-ai-ml'
    },
    {
      title: '5G Edge Computing',
      description: 'Ultra-low latency edge computing for 5G networks',
      icon: <Network className="w-8 h-8 text-cyan-400" />,
      features: ['5G integration', 'Ultra-low latency', 'Network slicing', 'Edge caching'],
      href: '/5g-edge-computing'
    },
    {
      title: 'Edge Security & Compliance',
      description: 'Comprehensive security for edge computing environments',
      icon: <Shield className="w-8 h-8 text-red-400" />,
      features: ['Edge firewall', 'Data encryption', 'Access control', 'Compliance monitoring'],
      href: '/edge-security-compliance'
    },
    {
      title: 'Edge Data Analytics',
      description: 'Real-time data processing and analytics at the edge',
      icon: <BarChart3 className="w-8 h-8 text-yellow-400" />,
      features: ['Stream processing', 'Real-time insights', 'Data filtering', 'Edge storage'],
      href: '/edge-data-analytics'
    }
  ];

  const edgeCapabilities = [
    {
      category: 'Edge Deployment',
      capabilities: ['Container Orchestration', 'Microservices', 'Serverless Functions', 'Edge Runtime']
    },
    {
      category: 'IoT Integration',
      capabilities: ['Device Protocols', 'Data Ingestion', 'Real-time Processing', 'Edge Analytics']
    },
    {
      category: 'Network Management',
      capabilities: ['SDN Control', 'Traffic Optimization', 'Quality of Service', 'Bandwidth Management']
    },
    {
      category: 'Security & Privacy',
      capabilities: ['Edge Firewall', 'Data Encryption', 'Identity Management', 'Threat Detection']
    }
  ];

  const edgeBenefits = [
    {
      benefit: 'Ultra-Low Latency',
      description: 'Process data closer to the source for real-time applications',
      icon: <Zap className="w-6 h-6 text-yellow-400" />
    },
    {
      benefit: 'Bandwidth Optimization',
      description: 'Reduce data transmission by processing locally at the edge',
      icon: <Network className="w-6 h-6 text-blue-400" />
    },
    {
      benefit: 'Real-Time Processing',
      description: 'Instant decision-making with local data processing',
      icon: <Activity className="w-6 h-6 text-green-400" />
    },
    {
      benefit: 'Scalability',
      description: 'Easily scale edge computing resources as needed',
      icon: <TrendingUp className="w-6 h-6 text-purple-400" />
    }
  ];

  const useCases = [
    {
      industry: 'Manufacturing',
      applications: ['Predictive maintenance', 'Quality control', 'Supply chain optimization', 'Real-time monitoring'],
      icon: <Settings className="w-6 h-6 text-blue-400" />
    },
    {
      industry: 'Healthcare',
      applications: ['Patient monitoring', 'Medical imaging', 'Telemedicine', 'Emergency response'],
      icon: <Heart className="w-6 h-6 text-red-400" />
    },
    {
      industry: 'Transportation',
      applications: ['Autonomous vehicles', 'Traffic management', 'Fleet optimization', 'Smart cities'],
      icon: <Car className="w-6 h-6 text-green-400" />
    },
    {
      industry: 'Retail',
      applications: ['Inventory management', 'Customer analytics', 'Supply chain', 'Loss prevention'],
      icon: <ShoppingBag className="w-6 h-6 text-purple-400" />
    }
  ];

  return (
    <Layout 
      title="Edge Computing Orchestration - Zion Tech Group"
      description="Advanced edge computing orchestration, IoT management, and edge AI solutions. Transform your business with real-time edge computing technology."
      keywords="edge computing, IoT, edge orchestration, 5G edge, edge AI, real-time processing, Zion Tech Group"
    >
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center"
              initial="initial"
              animate="animate"
              variants={staggerContainer}
            >
              <motion.h1 
                className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 bg-clip-text text-transparent mb-6"
                variants={fadeInUp}
              >
                Edge Computing Orchestration
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8"
                variants={fadeInUp}
              >
                Revolutionary edge computing orchestration, IoT management, and edge AI solutions that bring computing power closer to data sources for real-time processing and insights.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
                variants={fadeInUp}
              >
                <a 
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center"
                >
                  Get Started <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a 
                  href="/demo" 
                  className="px-8 py-4 border border-green-500/40 text-green-300 rounded-lg font-semibold hover:bg-green-500/10 transition-all duration-300 flex items-center justify-center"
                >
                  Request Demo
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Edge Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Revolutionary Edge Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive suite of edge computing and IoT orchestration services designed for the future.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {edgeServices.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-900/50 border border-gray-700/50 rounded-2xl p-8 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105"
                  variants={fadeInUp}
                >
                  <div className="mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a 
                    href={service.href}
                    className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors"
                  >
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Edge Capabilities */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Advanced Edge Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our edge computing platform provides cutting-edge capabilities for distributed computing and IoT management.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {edgeCapabilities.map((category, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  variants={fadeInUp}
                >
                  <h3 className="text-2xl font-bold text-green-400 mb-6">{category.category}</h3>
                  <ul className="space-y-3">
                    {category.capabilities.map((capability, capIndex) => (
                      <li key={capIndex} className="text-gray-300">{capability}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Edge Benefits */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Edge Computing Benefits
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how edge computing transforms business operations and enables real-time decision making.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {edgeBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-900/50 border border-gray-700/50 rounded-2xl p-8"
                  variants={fadeInUp}
                >
                  <div className="flex items-center mb-6">
                    {benefit.icon}
                    <h3 className="text-2xl font-bold text-white ml-4">{benefit.benefit}</h3>
                  </div>
                  <p className="text-gray-300">{benefit.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Industry Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Edge computing transforms industries with real-time processing and intelligent automation.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-900/50 border border-gray-700/50 rounded-2xl p-8"
                  variants={fadeInUp}
                >
                  <div className="flex items-center mb-6">
                    {useCase.icon}
                    <h3 className="text-2xl font-bold text-white ml-4">{useCase.industry}</h3>
                  </div>
                  <ul className="space-y-3">
                    {useCase.applications.map((application, appIndex) => (
                      <li key={appIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {application}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-900/20 to-emerald-900/20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform with Edge Computing?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the edge computing revolution and unlock real-time processing capabilities for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300"
                >
                  Start Your Edge Journey
                </a>
                <a 
                  href="/case-studies" 
                  className="px-8 py-4 border border-green-500/40 text-green-300 rounded-lg font-semibold hover:bg-green-500/10 transition-all duration-300"
                >
                  View Edge Computing Case Studies
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

