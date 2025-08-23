import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Cloud, Globe, Shield, Zap, Database, Server, Lock, Rocket } from 'lucide-react';

export default function CloudPlatform() {
  const features = [
    {
      icon: Cloud,
      title: "Multi-Cloud Management",
      description: "Seamlessly manage resources across AWS, Azure, Google Cloud, and more"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Advanced security features with zero-trust architecture and compliance"
    },
    {
      icon: Zap,
      title: "Auto-Scaling",
      description: "Intelligent scaling based on demand with cost optimization"
    },
    {
      icon: Database,
      title: "Managed Databases",
      description: "High-availability databases with automated backups and monitoring"
    },
    {
      icon: Server,
      title: "Container Orchestration",
      description: "Kubernetes and Docker management with CI/CD pipelines"
    },
    {
      icon: Lock,
      title: "Identity Management",
      description: "SSO, MFA, and role-based access control for your cloud resources"
    }
  ];

  const services = [
    {
      title: "Cloud Migration",
      href: "/cloud-migration",
      description: "Seamless migration to cloud with zero downtime"
    },
    {
      title: "DevOps Automation",
      href: "/devops-automation",
      description: "Automate your development and deployment processes"
    },
    {
      title: "Disaster Recovery",
      href: "/multi-cloud-disaster-recovery",
      description: "Multi-cloud disaster recovery solutions"
    },
    {
      title: "Cost Optimization",
      href: "/cloud-cost-optimization",
      description: "Reduce cloud costs with intelligent resource management"
    },
    {
      title: "Security Compliance",
      href: "/security-compliance",
      description: "Meet industry standards and compliance requirements"
    },
    {
      title: "Performance Monitoring",
      href: "/performance-monitoring",
      description: "Real-time monitoring and alerting for your cloud infrastructure"
    }
  ];

  const stats = [
    { value: '99.99%', label: 'Uptime SLA' },
    { value: '< 50ms', label: 'Global Latency' },
    { value: '40%', label: 'Cost Reduction' },
    { value: '150+', label: 'Global Regions' }
  ];

  const cloudCapabilities = [
    'Infrastructure as Code (IaC)',
    'Container Orchestration',
    'Serverless Computing',
    'Microservices Architecture',
    'API Management & Gateway',
    'Monitoring & Observability',
    'Cost Optimization',
    'Compliance & Governance'
  ];

export default function CloudPlatform() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                Cloud Platform
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Transform your business with our enterprise-grade cloud platform. 
                Scalable, secure, and cost-effective solutions for the modern enterprise.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="p-6 bg-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mb-4">
                    <feature.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 bg-black/30">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Cloud Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive cloud solutions to accelerate your digital transformation
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <motion.a
                  key={index}
                  href={service.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="p-6 bg-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 hover:bg-gray-700/50 transition-all duration-300 group"
                >
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300">{service.description}</p>
                  <div className="mt-4 flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    <span className="text-sm">Learn More</span>
                    <Rocket className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Scale Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let our cloud experts help you build a robust and scalable infrastructure
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-2xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </a>
                <a
                  href="/services"
                  className="px-8 py-4 border border-cyan-500 text-cyan-400 font-bold rounded-2xl hover:bg-cyan-500/10 transition-all duration-300"
                >
                  View All Services
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
