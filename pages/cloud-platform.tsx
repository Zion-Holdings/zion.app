import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Cloud, 
  Server, 
  Database, 
  Network, 
  Zap, 
  Shield, 
  ArrowRight, 
  CheckCircle,
  Target,
  Users,
  Globe,
  Code,
  Settings,
  Lock,
  BarChart3,
  TrendingUp,
  Cpu,
  HardDrive,
  Wifi,
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
  Sparkles
} from 'lucide-react';
import SEO from '../components/SEO';

const CloudPlatformPage: React.FC = () => {
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

  const cloudServices = [
    {
      title: 'Quantum Cloud Infrastructure 2045',
      description: 'Next-generation quantum-powered cloud computing platform',
      icon: <Cloud className="w-8 h-8 text-blue-400" />,
      features: ['Quantum processing', 'Hybrid cloud', 'Auto-scaling', 'Global distribution'],
      href: '/quantum-cloud-infrastructure-2045'
    },
    {
      title: 'Autonomous DevOps Platform',
      description: 'AI-powered DevOps automation and orchestration',
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      features: ['CI/CD automation', 'Infrastructure as code', 'Monitoring', 'Auto-remediation'],
      href: '/autonomous-devops-platform-2045'
    },
    {
      title: 'Quantum Data Center Management',
      description: 'Intelligent data center operations and optimization',
      icon: <Server className="w-8 h-8 text-green-400" />,
      features: ['Resource optimization', 'Energy efficiency', 'Predictive maintenance', 'Capacity planning'],
      href: '/quantum-data-center-management-2045'
    },
    {
      title: 'Multi-Cloud Orchestration',
      description: 'Seamless management across multiple cloud providers',
      icon: <Globe className="w-8 h-8 text-purple-400" />,
      features: ['Provider agnostic', 'Unified management', 'Cost optimization', 'Disaster recovery'],
      href: '/multi-cloud-disaster-recovery'
    },
    {
      title: 'Edge Computing Orchestration',
      description: 'Distributed edge computing and IoT management',
      icon: <Cpu className="w-8 h-8 text-cyan-400" />,
      features: ['Edge deployment', 'IoT integration', 'Low latency', 'Local processing'],
      href: '/edge-computing-orchestration'
    },
    {
      title: 'Cloud Security & Compliance',
      description: 'Comprehensive cloud security and governance',
      icon: <Shield className="w-8 h-8 text-red-400" />,
      features: ['Identity management', 'Data encryption', 'Compliance monitoring', 'Threat detection'],
      href: '/cloud-security-compliance'
    }
  ];

  const cloudCapabilities = [
    {
      category: 'Infrastructure as Code',
      capabilities: ['Terraform', 'CloudFormation', 'ARM Templates', 'Kubernetes']
    },
    {
      category: 'Container Orchestration',
      capabilities: ['Kubernetes', 'Docker Swarm', 'ECS/EKS', 'AKS/GKE']
    },
    {
      category: 'Serverless Computing',
      capabilities: ['Lambda', 'Functions', 'Event-driven', 'Auto-scaling']
    },
    {
      category: 'Data & Analytics',
      capabilities: ['Data Lakes', 'Warehouses', 'Streaming', 'ML Pipelines']
    }
  ];

  const cloudBenefits = [
    {
      benefit: 'Scalability',
      description: 'Automatically scale resources up or down based on demand',
      icon: <TrendingUp className="w-6 h-6 text-green-400" />
    },
    {
      benefit: 'Cost Optimization',
      description: 'Pay only for what you use with intelligent resource management',
      icon: <BarChart3 className="w-6 h-6 text-blue-400" />
    },
    {
      benefit: 'Global Reach',
      description: 'Deploy applications worldwide with low-latency access',
      icon: <Globe className="w-6 h-6 text-purple-400" />
    },
    {
      benefit: 'Security',
      description: 'Enterprise-grade security with built-in compliance features',
      icon: <Shield className="w-6 h-6 text-red-400" />
    }
  ];

  const cloudProviders = [
    {
      name: 'AWS',
      description: 'Amazon Web Services - Comprehensive cloud platform',
      icon: <Cloud className="w-6 h-6 text-orange-400" />
    },
    {
      name: 'Azure',
      description: 'Microsoft Azure - Enterprise cloud solutions',
      icon: <Cloud className="w-6 h-6 text-blue-400" />
    },
    {
      name: 'Google Cloud',
      description: 'Google Cloud Platform - AI and ML focused',
      icon: <Cloud className="w-6 h-6 text-green-400" />
    },
    {
      name: 'Multi-Cloud',
      description: 'Hybrid and multi-cloud strategies',
      icon: <Globe className="w-6 h-6 text-purple-400" />
    }
  ];

  return (
    <>
      <SEO
        title="Cloud Platform Services - Zion Tech Group"
        description="Advanced cloud infrastructure, multi-cloud orchestration, and autonomous DevOps solutions. Transform your business with cutting-edge cloud technology."
        keywords={["cloud platform", "cloud infrastructure", "multi-cloud", "DevOps", "Kubernetes", "AWS", "Azure", "Google Cloud", "Zion Tech Group"]}
      />
      <Layout>
        <div className="min-h-screen bg-black text-white">
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
                  className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-500 to-indigo-600 bg-clip-text text-transparent mb-6"
                  variants={fadeInUp}
                >
                  Cloud Platform Services
                </motion.h1>
                <motion.p 
                  className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8"
                  variants={fadeInUp}
                >
                  Revolutionary cloud infrastructure, multi-cloud orchestration, and autonomous DevOps solutions that transform how businesses operate in the digital age.
                </motion.p>
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                  variants={fadeInUp}
                >
                  <a 
                    href="/contact" 
                    className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center"
                  >
                    Get Started <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                  <a 
                    href="/demo" 
                    className="px-8 py-4 border border-blue-500/40 text-blue-300 rounded-lg font-semibold hover:bg-blue-500/10 transition-all duration-300 flex items-center justify-center"
                  >
                    Request Demo
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Cloud Services Grid */}
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
                  Revolutionary Cloud Services
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Explore our comprehensive suite of cloud platform services designed for the future of computing.
                </p>
              </motion.div>

              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                {cloudServices.map((service, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-900/50 border border-gray-700/50 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
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
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      Learn More <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Cloud Capabilities */}
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
                  Advanced Cloud Capabilities
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Our cloud platform provides cutting-edge capabilities across all major cloud technologies.
                </p>
              </motion.div>

              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                {cloudCapabilities.map((category, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    variants={fadeInUp}
                  >
                    <h3 className="text-2xl font-bold text-blue-400 mb-6">{category.category}</h3>
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

          {/* Cloud Benefits */}
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
                  Cloud Transformation Benefits
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Discover how our cloud platform solutions transform businesses and drive innovation.
                </p>
              </motion.div>

              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                {cloudBenefits.map((benefit, index) => (
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

          {/* Cloud Providers */}
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
                  Multi-Cloud Support
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  We support all major cloud providers and help you build hybrid and multi-cloud strategies.
                </p>
              </motion.div>

              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                {cloudProviders.map((provider, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-900/50 border border-gray-700/50 rounded-2xl p-8 text-center"
                    variants={fadeInUp}
                  >
                    <div className="mb-4">{provider.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{provider.name}</h3>
                    <p className="text-gray-300 text-sm">{provider.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/20 to-cyan-900/20">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Transform Your Cloud Strategy?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Join the cloud revolution and unlock unprecedented scalability, efficiency, and innovation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/contact" 
                    className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300"
                  >
                    Start Your Cloud Journey
                  </a>
                  <a 
                    href="/case-studies" 
                    className="px-8 py-4 border border-blue-500/40 text-blue-300 rounded-lg font-semibold hover:bg-blue-500/10 transition-all duration-300"
                  >
                    View Cloud Case Studies
                  </a>
                </div>
              </motion.div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default CloudPlatformPage;