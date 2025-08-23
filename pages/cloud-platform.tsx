import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Cloud, 
  Server, 
  Database, 
  Network, 
  Shield, 
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
  Cpu,
  Activity,
  DollarSign,
  Building,
  ShoppingCart
} from 'lucide-react';

const CloudPlatformPage: React.FC = () => {
>>>>>>> 916d02471c24718d698d51219f240472f9d52b96
  const services = [
    {
      title: 'Quantum Cloud Infrastructure',
      description: 'Next-generation quantum-enhanced cloud computing',
      icon: <Cloud className="w-8 h-8 text-blue-500" />,
      features: ['Quantum Processing', 'Hybrid Classical-Quantum', 'Quantum Resource Management'],
      href: '/quantum-cloud-infrastructure-2045'
    },
    {
      title: 'Edge Computing Orchestration',
      description: 'Distributed edge computing and IoT management',
      icon: <Cpu className="w-8 h-8 text-green-500" />,
      features: ['Edge Processing', 'IoT Integration', 'Real-time Analytics'],
      href: '/edge-computing-orchestration'
    },
    {
      title: 'Multi-Cloud Management',
      description: 'Unified management across multiple cloud providers',
      icon: <Globe className="w-8 h-8 text-purple-500" />,
      features: ['Provider Agnostic', 'Cost Optimization', 'Unified Monitoring'],
      href: '/multi-cloud-management'
    },
    {
      title: 'Cloud Security & Compliance',
      description: 'Advanced cloud security and governance',
      icon: <Shield className="w-8 h-8 text-red-500" />,
      features: ['Identity Management', 'Data Encryption', 'Compliance Automation'],
      href: '/cloud-security-compliance'
    },
    {
      title: 'DevOps Automation',
      description: 'Automated CI/CD and infrastructure management',
      icon: <Code className="w-8 h-8 text-orange-500" />,
      features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Automated Testing'],
      href: '/devops-automation'
    },
    {
      title: 'Data Analytics Platform',
      description: 'Cloud-native data analytics and business intelligence',
      icon: <BarChart3 className="w-8 h-8 text-cyan-500" />,
      features: ['Real-time Analytics', 'Machine Learning', 'Data Visualization'],
      href: '/data-analytics'
    }
  ];

  const benefits = [
    {
      title: 'Scalability',
      description: 'Elastic scaling based on demand',
      icon: <TrendingUp className="w-6 h-6 text-green-400" />
    },
    {
      title: 'Cost Efficiency',
      description: 'Pay-as-you-use pricing model',
      icon: <DollarSign className="w-6 h-6 text-blue-400" />
    },
    {
      title: 'Global Reach',
      description: 'Worldwide data center presence',
      icon: <Globe className="w-6 h-6 text-purple-400" />
    },
    {
      title: 'High Availability',
      description: '99.99% uptime guarantee',
      icon: <CheckCircle className="w-6 h-6 text-yellow-400" />
    }
  ];

  const useCases = [
    {
      name: 'Enterprise Applications',
      description: 'Scalable enterprise software deployment',
      icon: <Building className="w-6 h-6" />
    },
    {
      name: 'E-commerce Platforms',
      description: 'High-traffic online retail solutions',
      icon: <ShoppingCart className="w-6 h-6" />
    },
    {
      name: 'Data Processing',
      description: 'Big data analytics and processing',
      icon: <Database className="w-6 h-6" />
    },
    {
      name: 'AI/ML Workloads',
      description: 'Machine learning model training and deployment',
      icon: <Brain className="w-6 h-6" />
>>>>>>> 916d02471c24718d698d51219f240472f9d52b96
    }
  ];

  return (
    <Layout 
      title="Cloud Platform Services - Zion Tech Group"
      description="Advanced cloud infrastructure, edge computing, and multi-cloud management solutions for modern businesses"
      canonicalUrl="https://ziontechgroup.com/cloud-platform"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-400 bg-clip-text text-transparent mb-6">
                Cloud Platform
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Enterprise-grade cloud infrastructure and platform services that scale with your business. 
                From disaster recovery to managed databases and Kubernetes security.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 bg-black/30">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

        {/* Services Grid */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Cloud Platform Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive cloud solutions designed to optimize performance, security, and scalability
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
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
                        <Star className="w-4 h-4 text-blue-400 mr-2" />
>>>>>>> 916d02471c24718d698d51219f240472f9d52b96
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={service.href}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
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
                Cloud Computing Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how cloud computing is transforming industries and 
                enabling new business models.
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
                    <div className="text-blue-400">
                      {useCase.icon}
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
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
                Scale Your Cloud Infrastructure
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let our cloud experts help you build a robust and scalable cloud platform
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </a>
                <a
                  href="/services"
                  className="px-8 py-4 border border-blue-500 text-blue-400 font-semibold rounded-xl hover:bg-blue-500/10 transition-all duration-300"
                >
                  View Cloud Cases
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
>>>>>>> 916d02471c24718d698d51219f240472f9d52b96
  );
};

export default CloudPlatform;
