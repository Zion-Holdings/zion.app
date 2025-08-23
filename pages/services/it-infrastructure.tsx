import React from 'react';
import Layout from '../../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Cpu, Database, Users, Activity, 
  Zap, Target, Award, CheckCircle, ArrowRight,
  Cloud, Server, Shield, Globe
} from 'lucide-react';

const ITInfrastructure: React.FC = () => {
  const services = [
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions for modern business needs',
      features: [
        'Multi-cloud management',
        'Cloud migration',
        'Cost optimization',
        'Performance monitoring'
      ],
      icon: Cloud,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Data Center Solutions',
      description: 'Modern data center infrastructure and management',
      features: [
        'Data center design',
        'Virtualization',
        'Storage solutions',
        'Backup and recovery'
      ],
      icon: Server,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Network Infrastructure',
      description: 'Advanced networking solutions for connectivity and security',
      features: [
        'Network design',
        'Security implementation',
        'Performance optimization',
        'Monitoring and alerting'
      ],
      icon: Globe,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'DevOps & Automation',
      description: 'Streamlined development and deployment processes',
      features: [
        'CI/CD pipelines',
        'Infrastructure as code',
        'Automated testing',
        'Deployment automation'
      ],
      icon: Zap,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const benefits = [
    'Improved system reliability',
    'Enhanced performance and scalability',
    'Reduced operational costs',
    'Faster deployment cycles',
    'Better security posture',
    'Future-ready infrastructure'
  ];

  return (
    <Layout 
      title="IT Infrastructure Services - Zion Tech Group"
      description="Revolutionary IT infrastructure services for cloud solutions, data centers, networking, and DevOps automation."
      keywords="IT infrastructure, cloud solutions, data center, networking, DevOps, Zion Tech Group"
    >
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                IT Infrastructure Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Building robust, scalable IT infrastructure solutions that power modern businesses 
                and enable digital transformation through cutting-edge technology.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-xl font-semibold text-lg hover:from-yellow-600 hover:to-orange-700 transition-all duration-300"
                >
                  Get Started
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-yellow-500 text-yellow-400 rounded-xl font-semibold text-lg hover:bg-yellow-500 hover:text-white transition-all duration-300"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Comprehensive IT Infrastructure Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our cutting-edge IT infrastructure solutions address the most critical challenges 
                in modern technology operations and business growth.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl p-8 border border-gray-700/50 hover:border-yellow-500/50 transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-yellow-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our IT infrastructure services deliver measurable results and transform 
                the way organizations build and manage their technology foundation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-lg text-gray-300">{benefit}</p>
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Build Your Infrastructure?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join leading organizations that trust Zion Tech Group 
                to deliver robust IT infrastructure solutions that scale.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-xl font-semibold text-lg hover:from-yellow-600 hover:to-orange-700 transition-all duration-300"
                >
                  Schedule a Consultation
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-yellow-500 text-yellow-400 rounded-xl font-semibold text-lg hover:bg-yellow-500 hover:text-white transition-all duration-300"
                >
                  View Case Studies
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ITInfrastructure;