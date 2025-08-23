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
  const services = [
    {
      title: 'Infrastructure as a Service',
      description: 'Scalable compute, storage, and networking resources.',
      features: ['Virtual Machines', 'Block Storage', 'Load Balancing', 'Auto-scaling Groups']
    },
    {
      title: 'Platform as a Service',
      description: 'Managed application platforms and development tools.',
      features: ['Container Orchestration', 'Serverless Computing', 'Database Services', 'API Management']
    },
    {
      title: 'Software as a Service',
      description: 'Ready-to-use business applications and tools.',
      features: ['CRM Systems', 'Collaboration Tools', 'Analytics Platforms', 'Security Suites']
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Automated development and deployment pipelines.',
      features: ['Git Integration', 'Automated Testing', 'Deployment Automation', 'Monitoring & Logging']
    }
  ];

  const benefits = [
    {
      title: 'Cost Optimization',
      description: 'Reduce infrastructure costs with intelligent resource management and pricing optimization.'
    },
    {
      title: 'Global Reach',
      description: 'Deploy applications worldwide with our global infrastructure network.'
    },
    {
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with SOC2, ISO, and other compliance certifications.'
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
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Advanced
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  {' '}Cloud Platform
                </span>
                {' '}Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transform your business with cutting-edge cloud infrastructure, 
                edge computing, and multi-cloud management solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a
                  href="/quantum-cloud-infrastructure-2045"
                  className="inline-flex items-center px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
                >
                  Explore Quantum Cloud
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Cloud Benefits */}
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
                Why Choose Cloud Computing?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cloud computing provides unprecedented flexibility, scalability, 
                and cost efficiency for modern businesses.
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
                Cloud Platform Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From quantum cloud infrastructure to edge computing, our cloud 
                services cover every aspect of modern cloud computing.
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
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
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
                Ready to Scale with Cloud?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Transform your business with our advanced cloud platform solutions 
                and unlock unlimited scalability and performance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Cloud Journey
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a
                  href="/case-studies"
                  className="inline-flex items-center px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
                >
                  View Cloud Cases
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CloudPlatform;
