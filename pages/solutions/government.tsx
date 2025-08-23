import React from 'react';
import Layout from '../../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Building, 
  Users, 
  Lock, 
  Database, 
  Cloud, 
  Brain, 
  Rocket, 
  Target, 
  Star,
  CheckCircle,
  ArrowRight,
  Cpu,
  Globe,
  Code,
  FileText,
  BarChart3,
  Eye
} from 'lucide-react';

const GovernmentSolutionsPage: React.FC = () => {
  const solutions = [
    {
      title: 'Government Cybersecurity',
      description: 'Advanced security solutions meeting government compliance requirements',
      icon: <Shield className="w-8 h-8" />,
      features: [
        'FedRAMP compliance',
        'Zero-trust architecture',
        'Advanced threat detection',
        'Security clearance support'
      ],
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'Government Cloud Infrastructure',
      description: 'Secure cloud solutions designed for government workloads',
      icon: <Cloud className="w-8 h-8" />,
      features: [
        'Government cloud platforms',
        'Data sovereignty compliance',
        'Disaster recovery',
        'Cost optimization'
      ],
      color: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'Government AI & Analytics',
      description: 'AI-powered solutions for government decision making',
      icon: <Brain className="w-8 h-8" />,
      features: [
        'Predictive analytics',
        'Data visualization',
        'Machine learning models',
        'Automated reporting'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Government Data Management',
      description: 'Comprehensive data solutions for government agencies',
      icon: <Database className="w-8 h-8" />,
      features: [
        'Data governance',
        'Compliance automation',
        'Real-time processing',
        'Data quality assurance'
      ],
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Government Digital Services',
      description: 'Modern digital services for citizen engagement',
      icon: <Globe className="w-8 h-8" />,
      features: [
        'Citizen portals',
        'Mobile applications',
        'API development',
        'User experience design'
      ],
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Government Process Automation',
      description: 'Automation solutions to improve government efficiency',
      icon: <Rocket className="w-8 h-8" />,
      features: [
        'Workflow automation',
        'Document processing',
        'Approval systems',
        'Performance monitoring'
      ],
      color: 'from-orange-500 to-red-500'
    }
  ];

  const compliance = [
    'FedRAMP',
    'FISMA',
    'SOC 2 Type II',
    'ISO 27001',
    'NIST Cybersecurity Framework',
    'CJIS Compliance'
  ];

  const benefits = [
    'Government security clearance',
    'Compliance expertise',
    '24/7 support',
    'Proven government track record',
    'Scalable solutions',
    'Cost-effective implementation'
  ];

  const caseStudies = [
    {
      agency: 'Department of Defense',
      project: 'Cybersecurity Platform',
      result: 'Enhanced threat detection by 300%',
      description: 'Implemented advanced AI-powered security monitoring system'
    },
    {
      agency: 'Department of Homeland Security',
      project: 'Data Analytics Platform',
      result: 'Improved response time by 60%',
      description: 'Real-time data processing and analytics for emergency response'
    },
    {
      agency: 'Department of Veterans Affairs',
      project: 'Digital Services Modernization',
      result: 'Increased citizen satisfaction by 85%',
      description: 'Modernized citizen-facing digital services and portals'
    }
  ];

  return (
    <Layout 
      title="Government Solutions - Zion Tech Group"
      description="Secure, compliant technology solutions for government agencies. Cybersecurity, cloud infrastructure, AI analytics, and digital services meeting government standards."
      keywords="government solutions, government cybersecurity, government cloud, FedRAMP, FISMA, government AI, Zion Tech Group"
    >
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/20 to-purple-900/20"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-6">
                <Shield className="w-16 h-16 text-blue-400 mr-4" />
                <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
                  Government Solutions
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Secure, compliant technology solutions designed specifically for government agencies. 
                Meeting the highest security and compliance standards while driving innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                  Government Inquiry
                </button>
                <button className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                  Compliance Overview
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Government-Focused Technology Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our government solutions are built with security, compliance, and efficiency in mind. 
                Each solution meets rigorous government standards and requirements.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 group"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {solution.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                  <p className="text-gray-300 mb-6">{solution.description}</p>
                  <ul className="space-y-2 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                    Learn More
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-20 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Government Compliance & Certifications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We maintain the highest levels of government compliance and security certifications 
                to ensure your agency's data and systems remain protected.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {compliance.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Shield className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{cert}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Government Agencies Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We understand the unique challenges of government technology and deliver 
                solutions that meet the highest standards of security and compliance.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Star className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Government Success Stories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how government agencies have improved their operations with our solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {caseStudies.map((story, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Building className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{story.agency}</h3>
                  <p className="text-blue-400 mb-2">{story.project}</p>
                  <p className="text-2xl font-bold text-green-400 mb-4">{story.result}</p>
                  <p className="text-gray-300">{story.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Modernize Your Government Agency?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Let's discuss how our government solutions can improve efficiency, 
                security, and citizen services while maintaining compliance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                  Contact Government Team
                </button>
                <button className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                  Download Government Brochure
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default GovernmentSolutionsPage;