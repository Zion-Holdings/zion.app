import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Building, Lock, Users, Globe, Database, Cloud, Target, Zap, CheckCircle } from 'lucide-react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';

const GovernmentTechnologySolutions: React.FC = () => {
  const solutions = [
    {
      icon: <Shield className="w-8 h-8 text-blue-400" />,
      title: 'Cybersecurity & Compliance',
      description: 'Government-grade security solutions meeting federal standards',
      features: ['FedRAMP compliance', 'Zero-trust architecture', 'Threat intelligence']
    },
    {
      icon: <Database className="w-8 h-8 text-green-400" />,
      title: 'Data Management',
      description: 'Secure and compliant government data infrastructure',
      features: ['FISMA compliance', 'Data classification', 'Audit trails']
    },
    {
      icon: <Cloud className="w-8 h-8 text-purple-400" />,
      title: 'Cloud Infrastructure',
      description: 'Government cloud solutions with security-first approach',
      features: ['Multi-cloud strategy', 'Disaster recovery', 'Cost optimization']
    },
    {
      icon: <Users className="w-8 h-8 text-orange-400" />,
      title: 'Citizen Services',
      description: 'Digital transformation for government services',
      features: ['Online portals', 'Mobile applications', 'Service automation']
    },
    {
      icon: <Globe className="w-8 h-8 text-cyan-400" />,
      title: 'Interoperability',
      description: 'Seamless integration between government systems',
      features: ['API management', 'Data sharing', 'System integration']
    },
    {
      icon: <Building className="w-8 h-8 text-red-400" />,
      title: 'Smart Cities',
      description: 'IoT and AI solutions for urban infrastructure',
      features: ['Traffic management', 'Energy optimization', 'Public safety']
    }
  ];

  return (
    <Layout>
      <SEO 
        title="Government Technology Solutions | Zion Tech Group"
        description="Transform government operations with our secure, compliant technology solutions. FedRAMP compliance, cybersecurity, and digital transformation."
        keywords={["government technology", "FedRAMP", "cybersecurity", "digital transformation", "smart cities", "compliance"]}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-cyan-500 to-green-600 bg-clip-text text-transparent mb-6">
                Government Technology Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Empowering government agencies with secure, compliant, and innovative technology solutions 
                that improve citizen services and operational efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all"
                >
                  Schedule Consultation
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-blue-500 text-blue-400 rounded-lg font-semibold hover:bg-blue-500/10 transition-all"
                >
                  View Solutions
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Comprehensive Government Solutions
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                From cybersecurity and compliance to digital transformation and smart cities, we provide 
                end-to-end government technology solutions that meet federal standards.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all hover:transform hover:scale-105"
                >
                  <div className="mb-4">{solution.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{solution.title}</h3>
                  <p className="text-gray-400 mb-4">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <Target className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Government Compliance & Standards
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our solutions meet and exceed the highest government security and compliance standards, 
                ensuring your agency operates with confidence.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">FedRAMP</h3>
                <p className="text-sm text-gray-400">Cloud security authorization</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">FISMA</h3>
                <p className="text-sm text-gray-400">Information security management</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">NIST</h3>
                <p className="text-sm text-gray-400">Cybersecurity framework</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">SOC 2</h3>
                <p className="text-sm text-gray-400">Security and availability</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Zion Tech Group for Government Technology?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                We combine deep government domain expertise with cutting-edge technology to deliver 
                solutions that truly make a difference in public service delivery.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Security First</h3>
                <p className="text-gray-400">Government-grade security from the ground up</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Innovation</h3>
                <p className="text-gray-400">Cutting-edge technology for modern government</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Compliance</h3>
                <p className="text-gray-400">Full regulatory compliance and certification</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Government Technology?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Let's discuss how our government solutions can improve citizen services, 
                enhance security, and streamline your operations.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all"
              >
                Get Started Today
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default GovernmentTechnologySolutions;