import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Zap, Shield, Globe } from 'lucide-react';
import Link from 'next/link';

const CloudPlatform: React.FC = () => {
  const features = [
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Multi-Cloud Management',
      description: 'Seamlessly manage resources across AWS, Azure, Google Cloud, and private clouds.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Auto-Scaling',
      description: 'Intelligent auto-scaling based on demand with cost optimization.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Enterprise Security',
      description: 'Bank-grade security with compliance certifications and threat protection.'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global CDN',
      description: 'Worldwide content delivery network for optimal performance.'
    }
  ];

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
      title: '24/7 Support',
      description: 'Round-the-clock technical support and monitoring services.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                <Cloud className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Cloud Platform
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Enterprise-grade cloud infrastructure designed for scalability, security, and performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Link>
              <Link
                href="/services"
                className="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Platform Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover what makes our cloud platform the choice for enterprise applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-gray-800/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Cloud Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive cloud services to meet all your infrastructure needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <div>
                  <h4 className="font-semibold text-cyan-400 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Why Choose Our Cloud Platform?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of enterprise-grade cloud infrastructure.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-800/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Scale Your Infrastructure?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your cloud journey with our enterprise-grade platform today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
              </Link>
              <Link
                href="/services"
                className="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CloudPlatform;
