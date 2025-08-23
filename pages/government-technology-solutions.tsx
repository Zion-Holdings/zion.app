import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Brain, Users, Zap, Target, Star, ArrowRight, Activity, Lock, Globe, Building, FileText } from 'lucide-react';
import SEO from '../components/SEO';

const governmentServices = [
  {
    title: 'Cybersecurity & Compliance',
    description: 'Advanced security solutions meeting government cybersecurity standards and compliance requirements',
    icon: <Shield className="w-8 h-8 text-red-400" />,
    href: '/government-cybersecurity-solutions',
    features: ['FedRAMP Compliance', 'Zero Trust Security', 'Threat Intelligence']
  },
  {
    title: 'AI-Powered Analytics',
    description: 'Intelligent data analytics for government decision-making and policy development',
    icon: <Brain className="w-8 h-8 text-cyan-400" />,
    href: '/government-ai-analytics',
    features: ['Data Analytics', 'Predictive Modeling', 'Policy Insights']
  },
  {
    title: 'Digital Transformation',
    description: 'Modernization of government services and citizen engagement platforms',
    icon: <Globe className="w-8 h-8 text-blue-400" />,
    href: '/government-digital-transformation',
    features: ['Citizen Portals', 'Service Automation', 'Mobile Solutions']
  },
  {
    title: 'Cloud Infrastructure',
    description: 'Secure cloud solutions designed for government workloads and data sovereignty',
    icon: <Building className="w-8 h-8 text-purple-400" />,
    href: '/government-cloud-infrastructure',
    features: ['Multi-Cloud Strategy', 'Data Sovereignty', 'Scalable Architecture']
  },
  {
    title: 'Data Management',
    description: 'Comprehensive data governance and management solutions for government agencies',
    icon: <FileText className="w-8 h-8 text-green-400" />,
    href: '/government-data-management',
    features: ['Data Governance', 'Master Data Management', 'Compliance Reporting']
  },
  {
    title: 'Emergency Response Systems',
    description: 'Advanced emergency management and response coordination platforms',
    icon: <Zap className="w-8 h-8 text-yellow-400" />,
    href: '/emergency-response-systems',
    features: ['Crisis Management', 'Response Coordination', 'Real-time Monitoring']
  }
];

export default function GovernmentTechnologySolutions() {
  return (
    <>
      <SEO 
        title="Government Technology Solutions | Zion Tech Group"
        description="Advanced government technology solutions including cybersecurity, AI analytics, digital transformation, and cloud infrastructure."
        canonical="https://ziontechgroup.com/government-technology-solutions"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent mb-6">
                Government Technology Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Secure, compliant, and innovative technology solutions designed specifically for government agencies and public sector organizations.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl transition-all duration-300"
                >
                  Explore Government Solutions
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-blue-500 text-blue-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
                >
                  Government Consultation
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
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Government Technology Portfolio
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Comprehensive solutions designed to modernize government operations while maintaining security and compliance standards
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {governmentServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 group"
                >
                  <div className="mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <Star className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <motion.a
                    href={service.href}
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold group-hover:text-blue-300 transition-colors"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </motion.a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Government Innovation Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/20 to-indigo-900/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Government Innovation Frontiers
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Cutting-edge technologies that are revolutionizing government services and citizen engagement
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: 'Cybersecurity',
                  description: 'Advanced security and compliance solutions',
                  icon: <Shield className="w-12 h-12 text-red-400" />
                },
                {
                  title: 'AI Analytics',
                  description: 'Intelligent data analysis and insights',
                  icon: <Brain className="w-12 h-12 text-cyan-400" />
                },
                {
                  title: 'Digital Services',
                  description: 'Modern citizen engagement platforms',
                  icon: <Globe className="w-12 h-12 text-blue-400" />
                },
                {
                  title: 'Cloud Infrastructure',
                  description: 'Scalable and secure cloud solutions',
                  icon: <Building className="w-12 h-12 text-purple-400" />
                }
              ].map((innovation, index) => (
                <motion.div
                  key={innovation.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="mb-4 flex justify-center">
                    {innovation.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {innovation.title}
                  </h3>
                  <p className="text-gray-400">
                    {innovation.description}
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
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Modernize Government Technology?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Let's discuss how our government technology solutions can enhance security, improve efficiency, and transform citizen services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl transition-all duration-300"
                >
                  Government Assessment
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-blue-500 text-blue-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
                >
                  View Case Studies
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}